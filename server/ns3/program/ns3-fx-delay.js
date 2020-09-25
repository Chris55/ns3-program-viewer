const converter = require("../../common/converter");
const mapping = require("./ns3-mapping");
const { getMorph } = require("./ns3-morph");


/***
 * returns Delay
 *
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}}
 */
exports.getDelay = (buffer, panelOffset) => {
    const delayOffset119 = buffer.readUInt8(0x119 + panelOffset);
    const delayOffset11a = buffer.readUInt8(0x11a + panelOffset);
    const effectOffset10cW = buffer.readUInt16BE(0x10c + panelOffset);
    const effectOffset10dWw = buffer.readUInt32BE(0x10d + panelOffset);
    const effectOffset110 = buffer.readUInt8(0x110 + panelOffset);
    const effectOffset110Ww = buffer.readUInt32BE(0x110 + panelOffset);


    const effect1FeedbackMidi = effectOffset110 & 0x7f;
    const delayTempoMidi = (delayOffset11a & 0xfe) >>> 1;

    const delayMasterClock = (delayOffset119 & 0x01) !== 0;

    return {
        /**
         * Offset in file: 0x119 (b3)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Delay On
         */
        enabled: (delayOffset119 & 0x08) !== 0,

        /**
         * Offset in file: 0x119 (b2-1)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module Delay Source
         */
        source: {
            value: mapping.effectSourceMap.get((delayOffset119 & 0x06) >>> 1),
        },

        /**
         *  Offset in file: 0x119 (b0)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Delay Master Clock
         */
        masterClock: {
            enabled: delayMasterClock,
        },

        /**
         * Offset in file: 0x11A (b7-1)
         *
         * @example
         * 7-bit value 0/127 = 1.5 s to 20 ms
         *
         * if 'Delay Master Clock' is enabled 7-bit value 0/127 = 1/2 to 1/64
         *
         // * Morph Wheel:
         // * 0x10D (b6): polarity (1 = positive, 0 = negative)
         // * 0x10D (b5-b0) and 0x10E (b7): 7-bit raw value
         // *
         // * Morph After Touch:
         // * 0x10E (b6): polarity (1 = positive, 0 = negative)
         // * 0x10E (b5-b0) and 0x10F (b7): 7-bit raw value
         // *
         // * Morph Control Pedal:
         // * 0x10F (b6): polarity (1 = positive, 0 = negative)
         // * 0x10F (b5-b0) and 0x110 (b7): 7-bit raw value
         // *
         // * @see {@link ns3-doc.md#organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module Delay Tempo
         */
        tempo: {
            midi: delayTempoMidi,

            value: delayMasterClock
                ? mapping.delayTempoMasterClockDivisionMap.get(delayTempoMidi)
                : mapping.delayTempoMap.get(delayTempoMidi),

            morph: getMorph(
                effectOffset10dWw >>> 7,
                delayTempoMidi,
                (x) => {
                    return delayMasterClock
                        ? mapping.delayTempoMasterClockDivisionMap.get(x)
                        : mapping.delayTempoMap.get(x);
                },
                false
            ),
        },

        /**
         * Offset in file: 0x110 (b6-0)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x111 (b7): polarity (1 = positive, 0 = negative)
         * 0x111 (b6-b0): 7-bit raw value
         *
         * Morph After Touch:
         * 0x112 (b7): polarity (1 = positive, 0 = negative)
         * 0x112 (b6-b0): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x113 (b7): polarity (1 = positive, 0 = negative)
         * 0x113 (b6-b0): 7-bit raw value
         *
         * @see {@link ns3-doc.md#organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module Effect 1 Amount
         */
        // amount: {
        //     midi: effect1FeedbackMidi,
        //
        //     value: converter.midi2LinearStringValue(0, 10, effect1FeedbackMidi, 1, ""),
        //
        //     morph: getMorph(
        //         effectOffset110Ww,
        //         effect1FeedbackMidi,
        //         (x) => {
        //             return converter.midi2LinearStringValue(0, 10, x, 1, "");
        //         },
        //         false
        //     ),
        // },




    };
};
