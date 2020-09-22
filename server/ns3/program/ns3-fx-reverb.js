const converter = require("../../common/converter");
const mapping = require("./ns3-mapping");
const { getMorph } = require("./ns3-morph");

/***
 * returns Reverb
 *
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}}
 */
exports.getReverb = (buffer, panelOffset) => {
    const reverbOffset134 = buffer.readUInt8(0x134 + panelOffset);
    const reverbOffset134W = buffer.readUInt16BE(0x134 + panelOffset);
    const reverbOffset135W = buffer.readUInt16BE(0x135 + panelOffset);
    const reverbOffset136Ww = buffer.readUInt32BE(0x136 + panelOffset);

    const reverbAmountMidi = (reverbOffset135W & 0x1fc0) >>> 6;

    return {
        /**
         * Offset in file: 0x114 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Reverb On
         */
        enabled: (reverbOffset134 & 0x02) !== 0,

        /**
         * Offset in file: 0x134 (b0) and 0x135 (b7-6)
         *
         * @example
         * 0 = Room 1
         * 1 = Room 2
         * 2 = Stage 1
         * 3 = Stage 2
         * 4 = Hall 1
         * 5 = Hall 2
         *
         * @module Reverb Type
         */
        type: {
            value: mapping.reverbTypeMap.get((reverbOffset134W & 0x01c0) >>> 6),
        },

        /**
         * Offset in file: 0x135 (b4-0) and 0x136 (b7-6)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x136 (b5): polarity (1 = positive, 0 = negative)
         * 0x136 (b4-b0) and 0x137 (b7-6): 7-bit raw value
         *
         * Morph After Touch:
         * 0x137 (b5): polarity (1 = positive, 0 = negative)
         * 0x137 (b4-b0) and 0x138 (b7-6): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x138 (b5): polarity (1 = positive, 0 = negative)
         * 0x138 (b4-b0) and 0x139 (b7-6): 7-bit raw value
         *
         * @see {@link 10-doc.md#organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module Reverb Amount
         */
        amount: {
            midi: reverbAmountMidi,

            value: converter.midi2LinearStringValue(0, 10, reverbAmountMidi, 1, ""),

            morph: getMorph(
                reverbOffset136Ww >>> 6,
                reverbAmountMidi,
                (x) => {
                    return converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },

        /**
         * Offset in file: 0x135 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Reverb Bright
         */
        bright: {
            enabled: (reverbOffset134W & 0x0020) !== 0,
        },
    };
};
