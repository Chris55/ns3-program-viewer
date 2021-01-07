const mapping = require("./ns3-mapping");
const converter = require("../../common/converter");
const { getMorph2 } = require("./ns3-morph");
const { ns3Morph7Bits } = require("./ns3-morph");
const { ns3KnobDualValues } = require("./ns3-utils");

/***
 * return Synth Filter section
 *
 * @param buffer {Buffer}
 * @param panelOffset
 * @returns {{highPassCutoffFrequency: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: (string|string)}, cutoffFrequency: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, type: {value: unknown}, drive: {value: string}, resonance: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: (string|string)}, kbTrack: {value: string}, modulations: {lfoAmount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, velAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}}
 */
exports.ns3Filter = (buffer, panelOffset) => {
    const synthOffset98 = buffer.readUInt8(0x98 + panelOffset);
    const synthOffset98W = buffer.readUInt16BE(0x98 + panelOffset);
    const synthOffset99Ww = buffer.readUInt32BE(0x99 + panelOffset);
    const synthOffset9cW = buffer.readUInt16BE(0x9c + panelOffset);
    const synthOffset9dWw = buffer.readUInt32BE(0x9d + panelOffset);
    const synthOffsetA0W = buffer.readUInt16BE(0xa0 + panelOffset);
    const synthOffsetA1Ww = buffer.readUInt32BE(0xa1 + panelOffset);
    const synthOffsetA4W = buffer.readUInt16BE(0xa4 + panelOffset);
    const synthOffsetA5W = buffer.readUInt16BE(0xa5 + panelOffset);

    const filterType = mapping.ns3SynthFilterTypeMap.get((synthOffset98 & 0x1c) >>> 2);
    const filterTypeIsLpHp = filterType === "LP+HP";

    const filterModulation1KnobMidi = (synthOffsetA0W & 0x0fe0) >>> 5;
    const filterModulation2Knob = ns3KnobDualValues((synthOffsetA4W & 0x1fc0) >>> 6);

    const filterCutoffFreqKnobMidi = (synthOffset98W & 0x03f8) >>> 3;

    const filterResFreqHpKnobMidi = (synthOffset9cW & 0x07f0) >>> 4;

    return {
        /**
         * Offset in file: 0x98 (b4-2)
         *
         * @example
         * 0 = LP12
         * 1 = LP24
         * 2 = Mini Moog
         * 3 = LP+HP
         * 4 = BP24
         * 5 = HP24
         *
         * @module NS3 Synth Filter Type
         */
        type: {
            value: filterType,
        },
        /**
         * Offset in file: 0xA5 (b5-4)
         *
         * @example
         * 0 = Off
         * 1 = 1/3
         * 2 = 2/3
         * 3 = 1
         *
         * @module NS3 Synth Filter Kb Track
         */
        kbTrack: {
            value: mapping.ns3SynthFilterKbTrackMap.get((synthOffsetA5W & 0x3000) >>> 12),
        },
        /**
         * Offset in file: 0xA5 (b3-2)
         *
         * @example
         * 0 = Off
         * 1 = 1
         * 2 = 2
         * 3 = 3
         *
         * @module NS3 Synth Filter Drive
         */
        drive: {
            value: mapping.ns3SynthFilterDriveMap.get((synthOffsetA5W & 0x0c00) >>> 10),
        },
        modulations: {
            /**
             * Offset in file: 0xA0 (b3-0) and 0xA1 (b7-5)
             *
             * @example
             * 0/127 value = 0 / 10
             *
             * Morph Wheel:
             * 0xA1 (b4-b0), 0xA2 (b7-b5): 8-bit raw value
             *
             * Morph After Touch:
             * 0xA2 (b4-b0), 0xA3 (b7-b5): 8-bit raw value
             *
             * Morph Control Pedal:
             * 0xA3 (b4-b0), 0xA4 (b7-b5): 8-bit raw value
             *
             * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
             *
             * @module NS3 Synth Filter LFO Amount
             */
            lfoAmount: {
                midi: filterModulation1KnobMidi,
                value: converter.midi2LinearStringValue(0, 10, filterModulation1KnobMidi, 1, ""),
                morph: ns3Morph7Bits(
                    synthOffsetA1Ww >>> 5,
                    filterModulation1KnobMidi,
                    (x) => {
                        return converter.midi2LinearStringValue(0, 10, x, 1, "");
                    },
                    false
                ),
            },

            /**
             * Offset in file: 0xA4 (b4-0) and 0xA5 (b7-6)
             *
             * @example
             * Filter modulation (vel/env mod) is using this single 7-bit value to define two settings with a single knob.
             * Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
             * 0   = 10.0 (100% left value) 'Vel Amount'
             * 60  = 0.0 for both values
             * 120 = 10.0 (100% right value) 'Mod Env Amount'
             *
             * @module NS3 Synth Filter Vel Mod Env Amount
             */
            velAmount: {
                midi: filterModulation2Knob.leftMidi,
                value: filterModulation2Knob.leftLabel,
            },
            modEnvAmount: {
                midi: filterModulation2Knob.rightMidi,
                value: filterModulation2Knob.rightLabel,
            },
        },

        /**
         * Offset in file: 0x98 (b1-0) and 0x99 (b7-3)
         *
         * @example
         * 0/127 value = 14 Hz / 21 kHz
         * #include ns3SynthFilterCutoffFrequencyMap
         *
         * Morph Wheel:
         * 0x99 (b2-b0), 0x9A (b7-b3): 8-bit raw value
         *
         * Morph After Touch:
         * 0x9A (b2-b0), 0x9B (b7-b3): 8-bit raw value
         *
         * Morph Control Pedal:
         * 0x9B (b2-b0), 0x9C (b7-b3): 8-bit raw value
         *
         * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module NS3 Synth Filter Freq
         */
        cutoffFrequency: {
            midi: filterCutoffFreqKnobMidi,
            value: mapping.ns3SynthFilterCutoffFrequencyMap.get(filterCutoffFreqKnobMidi),
            morph: ns3Morph7Bits(
                synthOffset99Ww >>> 3,
                filterCutoffFreqKnobMidi,
                (x) => {
                    return mapping.ns3SynthFilterCutoffFrequencyMap.get(x);
                },
                false
            ),
        },

        /**
         * Offset in file: 0x9C (b2-0) and 0x9D (b7-4)
         *
         * @example
         * for 'LP+HP' filter
         *   => Frequency High Pass value: 0/127 value = 14 Hz / 21 kHz
         * #include ns3SynthFilterCutoffFrequencyMap
         *
         * for all other filters
         *   => Resonance:  0/127 value = 0 / 10
         *
         * @module NS3 Synth Filter HP Freq Res
         */

        highPassCutoffFrequency: {
            midi: filterTypeIsLpHp ? filterResFreqHpKnobMidi : 0,

            value: filterTypeIsLpHp ? mapping.ns3SynthFilterCutoffFrequencyMap.get(filterResFreqHpKnobMidi) : "0.0",

            morph: ns3Morph7Bits(
                synthOffset9dWw >>> 4,
                filterResFreqHpKnobMidi,
                (x) => {
                    return filterTypeIsLpHp ? mapping.ns3SynthFilterCutoffFrequencyMap.get(x) : "none";
                },
                !filterTypeIsLpHp
            ),
        },

        resonance: {
            midi: filterTypeIsLpHp ? 0 : filterResFreqHpKnobMidi,

            value: filterTypeIsLpHp ? "0.0" : converter.midi2LinearStringValue(0, 10, filterResFreqHpKnobMidi, 1, ""),

            morph: ns3Morph7Bits(
                synthOffset9dWw >>> 4,
                filterResFreqHpKnobMidi,
                (x) => {
                    return filterTypeIsLpHp ? "none" : converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                filterTypeIsLpHp
            ),
        },
    };
};
