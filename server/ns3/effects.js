const converter = require("../common/converter");
const mapping = require("./mapping");

/***
 * returns Rotary Speaker Effect section
 *
 * @param buffer
 * @param panelOffset
 * @returns {{stopMode: boolean, source: string, drive: string, enabled: boolean, speed: string}}
 */
exports.getRotarySpeakerEffect = (buffer, panelOffset) => {
    const organOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const organOffset35 = buffer.readUInt8(0x35 + panelOffset);
    const rotarySpeakerOffset39W = buffer.readUInt16BE(0x39 + panelOffset);
    const rotarySpeakerOffset10B = buffer.readUInt8(0x10b + panelOffset);

    return {
        /**
         * Offset in file: 0x10b (bit7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Rotary Speaker On
         */
        enabled: (rotarySpeakerOffset10B & 0x80) !== 0,

        /**
         * Offset in file: 0x10b (b6 and b5)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         * @module Rotary Speaker Source
         */
        source: mapping.effectSourceMap.get((rotarySpeakerOffset10B & 0b01100000) >>> 5),

        /**
         * Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4)
         *
         * @example
         * 7-bit value 0/127 converted to 0/10
         *
         * @module Rotary Speaker Drive
         */
        drive: converter.midi2LinearStringValue(0, 10, (rotarySpeakerOffset39W & 0b0000011111110000) >>> 4, 1, ""),

        /**
         * Offset in file: 0x35 (bit7)
         *
         * @example
         * 0 = enabled (Speed Stop), 1 = disabled (Speed Slow)
         *
         * @module Rotary Speaker Stop Mode
         */
        stopMode: !((organOffset35 & 0x80) >>> 7 !== 0),

        /**
         * Offset in file: 0x34 (bit0)
         *
         * @example
         * 0 = Slow/Stop, 1 = Fast
         *
         * @module Rotary Speaker Speed
         */
        speed: mapping.rotarySpeakerSpeedMap.get(organOffset34 & 0x01),
    };
};

/***
 * returns effect 1
 *
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, label: string}, rate: {midi: number, label: string}, masterClock: (boolean|boolean), source: string, type: unknown, enabled: boolean}}
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
         * Offset in file: 0x10B (b4)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Effect 1 On
         */
        enabled: (effectOffset10b & 0x10) !== 0,

        /**
         * Offset in file: 0x10B (b3-2)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module Effect 1 Source
         */
        source: mapping.effectSourceMap.get((effectOffset10b & 0x0c) >>> 2),

        /**
         *  Offset 0 in file: 0x10B (b1-0) and 0x10C (b7)
         *
         * @example
         *  0 = A-Pan
         *  1 = Trem
         *  2 = RM
         *  3 = WA-WA
         *  4 = A-WA1
         *  5 = A-WA2
         *
         *  @module Effect 1 Type
         */
        type: effect1Type,

        /**
         * Offset in file: 0x110 (b6-0)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         *  @module Effect 1 Amount
         */
        amount: {
            midi: effect1AmountMidi,
            label: converter.midi2LinearStringValue(0, 10, effect1AmountMidi, 1, ""),
        },

        /**
         * Offset in file: 0x10C (b5-0) and 0x10D (b7)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * if 'Effect 1 Master Clock' is enabled 7-bit value 0/127 = 4/1 to 1/32
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
         *  Offset in file: 0x10C (b6))
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Effect 1 Master Clock
         */
        masterClock: effect1MasterClockUsed,
    };
};

/***
 * returns effect 2
 *
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, label: string}, rate: {midi: number, label: string}, source: string, type: string, enabled: boolean}}
 */
exports.getEffect2 = (buffer, panelOffset) => {
    const effectOffset114 = buffer.readUInt8(0x114 + panelOffset);
    const effectOffset114W = buffer.readUInt16BE(0x114 + panelOffset);
    const effectOffset115W = buffer.readUInt16BE(0x115 + panelOffset);

    const effect2AmountMidi = (effectOffset115W & 0x07f0) >>> 4;
    const effect2RateMidi = (effectOffset114W & 0x03f8) >>> 3;

    return {
        /**
         * Offset in file: 0x114 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Effect 2 On
         */
        enabled: (effectOffset114 & 0x80) !== 0,

        /**
         * Offset in file: 0x114 (b6-5)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module Effect 2 Source
         */
        source: mapping.effectSourceMap.get((effectOffset114 & 0x60) >>> 5),

        /**
         * Offset in file: 0x114 (b4-2)
         *
         * @example
         * 0 = PHAS1
         * 1 = PHAS2
         * 2 = FLANG
         * 3 = VIBE
         * 4 = CHOR1
         * 5 = CHOR2
         *
         * @module Effect 2 Type
         */
        type: mapping.effect2TypeMap.get((effectOffset114 & 0x1c) >>> 2),

        /**
         * Offset in file: 0x115 (b2-0) and 0x116 (b7-4)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * @module Effect 2 Amount
         */
        amount: {
            midi: effect2AmountMidi,
            label: converter.midi2LinearStringValue(0, 10, effect2AmountMidi, 1, ""),
        },

        /**
         * Offset in file: 0x114 (b1-0) &nd 0x115 (b7-3)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * @module Effect 2 Rate
         */
        rate: {
            midi: effect2RateMidi,
            label: converter.midi2LinearStringValue(0, 10, effect2RateMidi, 1, ""),
        },
    };
};
