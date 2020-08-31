const converter = require("../common/converter");
const mapping = require("./mapping");

/**
 * My namespace.
 * @namespace
 */

/**
 * returns Rotary Speaker Effect section
 *
 * @class
 * @ignore
 * @param buffer
 * @param panelOffset
 * @returns {{stopMode: boolean, source: unknown, drive: string, enabled: boolean, speed: unknown}}
 */
exports.getRotarySpeakerEffect = (buffer, panelOffset) => {
    const organOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const organOffset35 = buffer.readUInt8(0x35 + panelOffset);
    const rotarySpeakerOffset39W = buffer.readUInt16BE(0x39 + panelOffset);
    const rotarySpeakerOffset10B = buffer.readUInt8(0x10b + panelOffset);

    return {
        /**
         * Offset in file: 0x10b (bit7):
         *
         * Values:
         * 0 = disabled, 1 = enabled
         * @module Rotary Speaker On
         */
        enabled: (rotarySpeakerOffset10B & 0x80) !== 0,

        /**
         * Offset in file: 0x10b (b6 and b5):
         *
         * Values:
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         * @module Rotary Speaker Source
         */
        source: mapping.effectSourceMap.get((rotarySpeakerOffset10B & 0b01100000) >>> 5),

        /**
         * Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4):
         *
         * Values:
         * 7 bits value 0/127 converted to 0/10
         *
         * @module Rotary Speaker Drive
         */
        drive: converter.midi2LinearStringValue(0, 10, (rotarySpeakerOffset39W & 0b0000011111110000) >>> 4, 1, ""),

        /**
         * Offset in file: 0x35 (bit7):
         *
         * Values:
         * 0 = enabled (Speed Stop), 1 = disabled (Speed Slow)
         *
         * @module Rotary Speaker Stop Mode
         */
        stopMode: !((organOffset35 & 0x80) >>> 7 !== 0),

        /**
         * Offset in file: 0x34 (bit0):
         *
         * Values:
         * 0 = Slow/Stop, 1 = Fast
         *
         * @module Rotary Speaker Speed
         */
        speed: mapping.rotarySpeakerSpeedMap.get(organOffset34 & 0x01),
    };
};

/**
 * returns effect 1
 *
 * @class
 * @ignore
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, label: string}, rate: {midi: number, label: unknown}, masterClock: (boolean|boolean), source: unknown, type: unknown, enabled: boolean}}
 */
exports.getEffect1 = (buffer, panelOffset) => {
    const effectOffset10b = buffer.readUInt8(0x10b + panelOffset);
    const effectOffset10bW = buffer.readUInt16BE(0x10b + panelOffset);
    const effectOffset110 = buffer.readUInt8(0x110 + panelOffset);
    const effectOffset10cW = buffer.readUInt16BE(0x10c + panelOffset);

    const effect1Type = mapping.effect1TypeMap.get((effectOffset10bW & 0x0380) >>> 7);
    const effect1AmountMidi = effectOffset110 & 0x7f;
    const effect1RateMidi = (effectOffset10cW & 0x3f80) >>> 7;

    const effect1MasterClock = (effectOffset10cW & 0x4000) !== 0;
    const effect1MasterClockUsed = effect1MasterClock && (effect1Type === "Panning" || effect1Type === "Tremolo");

    return {
        /**
         * Offset in file: 0x10b LSB 5 (AND 0x10)
         *
         *  0x00: OFF
         *  0x10: ON
         *
         *  @module Effect 1 On
         */
        enabled: (effectOffset10b & 0x10) !== 0,

        /**
         * Offset in file: 0x10b only 2 bits (AND 0x0C)
         *
         *  0x00: Organ
         *  0x04: Piano
         *  0x08: Synth
         *
         *  @module Effect 1 Source
         */
        source: mapping.effectSourceMap.get((effectOffset10b & 0x0c) >>> 2),

        /**
         *  Offset 0 in file: 0x10b two bit (AND 0x03) 0x10c one bit (AND 0x80)
         *
         *  0x00 0x00: A-Pan
         *  0x00 0x80: Trem
         *  0x01 0x00: RM
         *  0x01 0x80: WA-WA
         *  0x02 0x00: A-WA1
         *  0x02 0x80: A-WA2
         *
         *  @module Effect 1 Type
         */
        type: effect1Type,

        /**
         * Offset in file: 0x110 only last 7 bits (AND 0x7F)
         *
         * Label: The number you get there, divided by 127 (7 bits) multiplied by 10.
         * Then rounded to 1 dec
         *
         * @example
         * if you get 0x2A, that is 42 / 127 * 10 = 3.307. Then Label is "3.3"
         * if you get 0x15, that is 21 / 127 * 10 = 1.6535. Then Label is "1.7"
         * if you get 0x16, that is 22 / 127 * 10 = 1.732. Then Label is "1.7" (yes, same)
         *
         *  @module Effect 1 Amount
         */
        amount: {
            midi: effect1AmountMidi,
            label: converter.midi2LinearStringValue(0, 10, effect1AmountMidi, 1, ""),
        },

        /**
         * Offset in file: last 6 bits of 0x10c (AND 0x3F) and first bit of 0x10d (and 0x80).
         *
         * So, those 2 bytes shifted 1 bit to the left, in order to get just 1 byte.
         * If you get 0x3F 0x80, then that shifted 1 bit to the left is 0x7F.
         * Then, same logic as with Amount for the label.
         *
         * @module Effect 1 Rate
         */
        rate: {
            midi: effect1RateMidi,
            label: effect1MasterClockUsed
                ? mapping.effect1MasterClockDivisionMap.get(effect1RateMidi)
                : converter.midi2LinearStringValue(0, 10, effect1RateMidi, 1, ""),
        },

        /**
         *  Offset in file: 0x10c 2nd MS bit (AND 0x40):
         *
         *  0x00: OFF
         *  0x40: ON
         *
         *  @module Effect 1 Master Clock
         */
        masterClock: effect1MasterClockUsed,
    };
};

/**
 * returns effect 2
 *
 * @class
 * @ignore
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, label: string}, rate: {midi: number, label: string}, source: unknown, type: unknown, enabled: boolean}}
 */
exports.getEffect2 = (buffer, panelOffset) => {
    const effectOffset114 = buffer.readUInt8(0x114 + panelOffset);
    const effectOffset114W = buffer.readUInt16BE(0x114 + panelOffset);
    const effectOffset115W = buffer.readUInt16BE(0x115 + panelOffset);

    const effect2AmountMidi = (effectOffset115W & 0x07f0) >>> 4;
    const effect2RateMidi = (effectOffset114W & 0x03f8) >>> 3;

    return {
        /**
         * Offset in file: 0x114 b7 (AND 0x80)
         *
         *  0x00: OFF
         *  0x10: ON
         *
         *  @module Effect 2 On
         */
        enabled: (effectOffset114 & 0x80) !== 0,

        /**
         * Offset in file: 0x114 b6 and b5 (AND 0x60)
         *
         *  0x00: Organ
         *  0x04: Piano
         *  0x08: Synth
         *
         *  @module Effect 2 Source
         */
        source: mapping.effectSourceMap.get((effectOffset114 & 0x60) >>> 5),

        /**
         * Offset in file: 0x114 bits 4-2 (AND 0x1C)
         *
         *  0x00: PHAS1
         *  0x04: PHAS2
         *  0x08: FLANG
         *  0x0C: VIBE
         *  0x10: CHOR1
         *  0x14: CHOR2
         *
         * @module Effect 2 Type
         */
        type: mapping.effect2TypeMap.get((effectOffset114 & 0x1c) >>> 2),

        /**
         * Offset in file: 0x115 (last 3 bits) and 0x116 (first 4 bits) So 0x115 AND
         * 0x07 + 0x115 AND 0xF0. All that then shifted for places to the right.
         * To calculate number it is same as amount on effects 1
         *
         * @module Effect 2 Amount
         */
        amount: {
            midi: effect2AmountMidi,
            label: converter.midi2LinearStringValue(0, 10, effect2AmountMidi, 1, ""),
        },

        /**
         * Offset in file: last 2 bits of 0x114 and first 5 bits of 0x115
         * So, 0x114 AND 0x03 + 0x115 AND 0xF8. All that shifted 3 places to the right
         * Sames as Amount
         *
         * @module Effect 2 Rate
         */
        rate: {
            midi: effect2RateMidi,
            label: converter.midi2LinearStringValue(0, 10, effect2RateMidi, 1, ""),
        },
    };
};
