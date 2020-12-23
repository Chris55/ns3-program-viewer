const converter = require("../../common/converter");
const mapping = require("./ns2-mapping");
const { ns2Morph7Bits } = require("./ns2-morph");

/***
 *
 * @param buffer {Buffer}
 * @param slotOffset {number}
 * @returns {{type: {value: string}, resonance: {midi: number, value: string}, kbTrack: {enabled: boolean}, modulations: {mod2: {midi: number, label: (string), value: string}, mod1: {midi: number, value: string}}, frequency: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}}
 */
exports.ns2Filter = (buffer, slotOffset) => {
    const synthOffsetF3 = buffer.readUInt8(0xf3 + slotOffset);
    const synthOffsetEfW = buffer.readUInt16BE(0xef + slotOffset);
    const synthOffsetEcWw = buffer.readUInt32BE(0xec + slotOffset);
    const synthOffsetF0W = buffer.readUInt16BE(0xf0 + slotOffset);
    const synthOffsetF1W = buffer.readUInt16BE(0xf1 + slotOffset);
    const synthOffsetF2W = buffer.readUInt16BE(0xf2 + slotOffset);

    const filterType = mapping.ns2SynthFilterTypeMap.get((synthOffsetF3 & 0x0e) >>> 1) || "";
    const filterFrequencyMidi = (synthOffsetEfW & 0x01fc) >>> 2;
    const filterResonanceMidi = (synthOffsetF0W & 0x03f8) >>> 3;
    const filterModulation1Midi = (synthOffsetF2W & 0x0fe0) >>> 5;
    const filterModulation2Midi = (synthOffsetF1W & 0x07f0) >>> 4;

    return {
        /**
         * Offset in file: 0xf3 (b3-1)
         *
         * @example
         * #include ns2SynthFilterTypeMap
         *
         * @module NS2 Synth Filter Type
         */
        type: {
            value: filterType,
        },
        /**
         * Offset in file: 0xf3 (b4)
         *
         * @example
         * 0 = OFF
         * 1 = ON
         *
         * @module NS2 Synth Filter Kb Track
         */
        kbTrack: {
            enabled: (synthOffsetF3 & 0x10) !== 0,
        },

        /**
         * Offset in file: 0xef (b0) and 0xf0 (b7-2)
         *
         * @example
         * 0/127 value = 20 Hz / 21 kHz
         * #include ns2SynthFilterFrequencyMap
         *
         * Morph Wheel:
         * Offset in file 0xec (b0) 0xed (b7-1)
         *
         * Morph After Touch:
         * Offset in file 0xed (b0) 0xee (b7-1)
         *
         * Morph Control Pedal:
         * Offset in file 0xee (b0) 0xef (b7-1)
         *
         * @see {@link ns2-doc.md#ns2-organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module NS2 Synth Filter Freq
         */
        frequency: {
            midi: filterFrequencyMidi,
            value: mapping.ns2SynthFilterFrequencyMap.get(filterFrequencyMidi),
            morph: ns2Morph7Bits(
                synthOffsetEcWw >>> 1,
                filterFrequencyMidi,
                (x) => {
                    return mapping.ns2SynthFilterFrequencyMap.get(x);
                },
                false
            ),
        },

        /**
         * Offset in file: 0xf0 (b1-0) and 0xf1 (b7-3)
         *
         * @example
         * 0/127 value = 0 / 10
         *
         * @module NS2 Synth Filter Res
         */
        resonance: {
            midi: filterResonanceMidi,
            value: converter.midi2LinearStringValue(0, 10, filterResonanceMidi, 1, ""),
        },

        /**
         * Offset in file: 0xf2 (b3-0) and 0xf3 (b7-5)
         *
         * @example
         * 0/127 value = 0 / 10
         *
         * @module NS2 Synth Filter Mod 1
         */
        modulation1: {
            midi: filterModulation1Midi,
            value: converter.midi2LinearStringValue(0, 10, filterModulation1Midi, 1, ""),
        },

        /**
         * Offset in file: 0xf1 (b2-0) and 0xf2 (b7-4)
         *
         * @example
         * VEL from 0 - 63 'Vel Amount'
         * MOD ENV from 64 - 127 'Mod Env Amount'
         *
         * #include ns2SynthFilterFrequencyMod2Map
         *
         * @module NS2 Synth Filter Mod 2
         */
        modulation2: {
            midi: filterModulation2Midi,
            value: mapping.ns2SynthFilterFrequencyMod2Map.get(filterModulation2Midi),
            label: (filterModulation2Midi === 63 || filterModulation2Midi === 64)
                ? "VEL/Env AMT"
                : (filterModulation2Midi < 64 ? "VEL AMT": "Mod Env AMT"),
        },
    };
};
