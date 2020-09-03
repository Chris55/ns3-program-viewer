const mapping = require("./mapping");
const converter = require("../common/converter");
const { getMorph } = require("../common/utils");
const { getKnobDualValues } = require("../common/utils");

exports.getFilter = (buffer, panelOffset) => {
    const synthOffset98 = buffer.readUInt8(0x98 + panelOffset);
    const synthOffset98W = buffer.readUInt16BE(0x98 + panelOffset);
    const synthOffset99Ww = buffer.readUInt32BE(0x99 + panelOffset);
    const synthOffset9cW = buffer.readUInt16BE(0x9c + panelOffset);
    const synthOffsetA0W = buffer.readUInt16BE(0xa0 + panelOffset);
    const synthOffsetA4W = buffer.readUInt16BE(0xa4 + panelOffset);
    const synthOffsetA5W = buffer.readUInt16BE(0xa5 + panelOffset);

    const filterType = mapping.synthFilterTypeMap.get((synthOffset98 & 0x1c) >>> 2);
    const filterModulation1KnobMidi = (synthOffsetA0W & 0x0fe0) >>> 5;
    const filterModulation2Knob = getKnobDualValues((synthOffsetA4W & 0x1fc0) >>> 6);

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
         * @module Synth Filter Type
         */
        type: filterType,

        /**
         * Offset in file: 0xA5 (b5-4)
         *
         * @example
         * 0 = Off
         * 1 = 1/3
         * 2 = 2/3
         * 3 = 1
         *
         * @module Synth Filter Kb Track
         */
        kbTrack: mapping.synthFilterKbTrackMap.get((synthOffsetA5W & 0x3000) >>> 12),

        /**
         * Offset in file: 0xA5 (b3-2)
         *
         * @example
         * 0 = Off
         * 1 = 1
         * 2 = 2
         * 3 = 3
         *
         * @module Synth Filter Drive
         */
        drive: mapping.synthFilterDriveMap.get((synthOffsetA5W & 0x0c00) >>> 10),

        modulations: {
            /**
             * Offset in file: 0xA0 (b3-0) and 0xA1 (b7-5)
             *
             * @example
             * 0/127 value = 0 / 10
             *
             * @module Synth Filter LFO Amount
             */
            lfoAmount: {
                midi: filterModulation1KnobMidi,
                label: converter.midi2LinearStringValue(0, 10, filterModulation1KnobMidi, 1, ""),
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
             * @module Synth Filter Vel Mod Env Amount
             */
            velAmount: {
                midi: filterModulation2Knob.leftMidi,
                label: filterModulation2Knob.leftValue,
            },
            modEnvAmount: {
                midi: filterModulation2Knob.rightMidi,
                label: filterModulation2Knob.rightValue,
            },
        },

        /**
         * Offset in file: 0x98 (b1-0) and 0x99 (b7-3)
         *
         * @example
         * 0/127 value = 14 Hz / 21 kHz
         *
         * * Morph Wheel:
         * 0x99 (b2): polarity (1 = positive, 0 = negative)
         * 0x99 (b1-b0), 0x9A (b7-b3): 7-bit raw value
         *
         * Morph After Touch:
         * 0x9A (b2): polarity (1 = positive, 0 = negative)
         * 0x9A (b1-b0), 0x9B (b7-b3): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x9B (b2): polarity (1 = positive, 0 = negative)
         * 0x9B (b1-b0), 0x9C (b7-b3): 7-bit raw value
         *
         * @see {@link api.md#organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module Synth Filter Freq
         */
        cutoffFrequency: {
            midi: filterCutoffFreqKnobMidi,
            label: mapping.synthFilterCutoffFrequencyMap.get(filterCutoffFreqKnobMidi),
            morph: getMorph(synthOffset99Ww >>> 3, filterCutoffFreqKnobMidi, (x) => {
                return mapping.synthFilterCutoffFrequencyMap.get(x);
            }),
        },

        /**
         * Offset in file: 0x9C (b2-0) and 0x9D (b7-4)
         *
         * @example
         * for 'LP+HP' filter
         *   => Frequency High Pass value: 0/127 value = 14 Hz / 21 kHz
         *
         * for all other filters
         *   => Resonance:  0/127 value = 0 / 10
         *
         * @module Synth Filter HP Freq Res
         */

        highPassCutoffFrequency: {
            midi: filterType === "LP+HP" ? filterResFreqHpKnobMidi : 0,
            label: filterType === "LP+HP" ? mapping.synthFilterCutoffFrequencyMap.get(filterResFreqHpKnobMidi) : "0.0",
        },

        resonance: {
            midi: filterType === "LP+HP" ? 0 : filterResFreqHpKnobMidi,
            label:
                filterType === "LP+HP"
                    ? "0.0"
                    : converter.midi2LinearStringValue(0, 10, filterResFreqHpKnobMidi, 1, ""),
        },
    };
};
