const converter = require("../../common/converter");
const mapping = require("./ns3-mapping");
const {getMorph14Bits} = require("./ns3-morph");
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
    const delayOffset11aW = buffer.readUInt16BE(0x11a + panelOffset);
    const delayOffset121W = buffer.readUInt16BE(0x121 + panelOffset);
    const delayOffset122dWw = buffer.readUInt32BE(0x122 + panelOffset);
    const delayOffset125 = buffer.readUInt8(0x125 + panelOffset);
    const delayOffset125W = buffer.readUInt16BE(0x125 + panelOffset);
    const delayOffset126dWw = buffer.readUInt32BE(0x126 + panelOffset);
    const delayOffset129 = buffer.readUInt8(0x129 + panelOffset);

    const delayTempoMswMidi = (delayOffset11aW & 0xfe00) >>> 9;
    const delayTempoLswMidi = (delayOffset11aW & 0x01fc) >>> 2;

    const delayMasterClock = (delayOffset119 & 0x01) !== 0;
    const delayFeedbackMidi = (delayOffset125W & 0x07f0) >>> 4;
    const delayMixMidi = (delayOffset121W & 0x1fc0) >>> 6;

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
         * Offset in file:
         *
         * tempo is using 14-bit
         *
         * MSW 0x11A (b7-1): 7-bit value 0/127 = 1.5 s to 20 ms (same as MIDI #CC 94)
         * LSW 0x11A (b0) and 0x11B (b7-2): 7-bit value LSW used for more accurate tempo value when using Tag Tempo.
         *
         * @example
         * Default MSW value:
         * #include delayTempoMap
         *
         * if 'Delay Master Clock' is enabled 7-bit value 0/127 = 1/2 to 1/64
         * #include delayTempoMasterClockDivisionMap
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
            midi: delayTempoMswMidi,
            lsw: delayTempoLswMidi,

            value: delayMasterClock
                ? mapping.delayTempoMasterClockDivisionMap.get(delayTempoMswMidi)
                : mapping.delayTempoMap.get(delayTempoMswMidi),

            morph: getMorph14Bits(
                buffer,
                0x11a + panelOffset,
                (x) => {
                    return delayMasterClock
                        ? mapping.delayTempoMasterClockDivisionMap.get(x)
                        : mapping.delayTempoMap.get(x);
                },
                false
            ),
        },

        /**
         *  Offset in file: 0x125 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Delay Ping Pong
         */
        pingPong: {
            enabled: (delayOffset125 & 0x20) !== 0,
        },

        /**
         *  Offset in file: 0x125 (b4-3)
         *
         * @example
         * #include delayFilterMap
         *
         *  @module Delay Filter
         */
        filter: {
            value: mapping.delayFilterMap.get((delayOffset125 & 0x18) >>> 3),
        },

        /**
         *  Offset in file: 0x129 (b3)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Delay Analog Mode
         */
        analogMode: {
            enabled: (delayOffset129 & 0x08) !== 0,
        },

        /**
         * Offset in file: 0x125 (b2-0) and 0x126 (b7-4)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x126 (b3): polarity (1 = positive, 0 = negative)
         * 0x126 (b2-b0) and 0x127 (b7-4): 7-bit raw value
         *
         * Morph After Touch:
         * 0x127 (b3): polarity (1 = positive, 0 = negative)
         * 0x127 (b2-b0) and 0x128 (b7-4): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x128 (b3): polarity (1 = positive, 0 = negative)
         * 0x128 (b2-b0) and 0x129 (b7-4): 7-bit raw value
         *
         * @see {@link ns3-doc.md#organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module Delay Feedback
         */
        feedback: {
            midi: delayFeedbackMidi,

            value: converter.midi2LinearStringValue(0, 10, delayFeedbackMidi, 1, ""),

            morph: getMorph(
                delayOffset126dWw >>> 4,
                delayFeedbackMidi,
                (x) => {
                    return converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },

        /**
         * Offset in file: 0x121 (b4-0) and 0x122 (b7-6)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x122 (b5): polarity (1 = positive, 0 = negative)
         * 0x122 (b4-b0) and 0x123 (b7-6): 7-bit raw value
         *
         * Morph After Touch:
         * 0x123 (b5): polarity (1 = positive, 0 = negative)
         * 0x123 (b4-b0) and 0x124 (b7-6): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x124 (b5): polarity (1 = positive, 0 = negative)
         * 0x124 (b4-b0) and 0x125 (b7-6): 7-bit raw value
         *
         * @see {@link ns3-doc.md#organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module Delay Mix
         */
        mix: {
            midi: delayMixMidi,

            value: converter.midi2LinearStringValue(0, 10, delayMixMidi, 1, ""),

            morph: getMorph(
                delayOffset122dWw >>> 6,
                delayMixMidi,
                (x) => {
                    return converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },
    };
};
