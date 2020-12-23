const converter = require("../../common/converter");
const mapping = require("./ns3-mapping");
const { ns3Morph7Bits } = require("./ns3-morph");

/***
 * returns Effect 2
 *
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}}
 */
exports.ns3Effect2 = (buffer, panelOffset) => {
    const effectOffset114 = buffer.readUInt8(0x114 + panelOffset);
    const effectOffset114W = buffer.readUInt16BE(0x114 + panelOffset);
    const effectOffset115W = buffer.readUInt16BE(0x115 + panelOffset);
    const effectOffset116Ww = buffer.readUInt32BE(0x116 + panelOffset);

    const effect2AmountMidi = (effectOffset115W & 0x07f0) >>> 4;
    const effect2RateMidi = (effectOffset114W & 0x03f8) >>> 3;

    return {
        /**
         * Offset in file: 0x114 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS3 Effect 2 On
         */
        enabled: (effectOffset114 & 0x80) !== 0,

        /**
         * Offset in file: 0x114 (b6-5)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module NS3 Effect 2 Source
         */
        source: {
            value: mapping.ns3EffectSourceMap.get((effectOffset114 & 0x60) >>> 5),
        },

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
         * @module NS3 Effect 2 Type
         */
        type: {
            value: mapping.ns3Effect2TypeMap.get((effectOffset114 & 0x1c) >>> 2),
        },

        /**
         * Offset in file: 0x115 (b2-0) and 0x116 (b7-4)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x116 (b3-b0) and 0x117 (b7-4): 8-bit raw value
         *
         * Morph After Touch:
         * 0x117 (b3-b0) and 0x118 (b7-4): 8-bit raw value
         *
         * Morph Control Pedal:
         * 0x118 (b3-b0) and 0x119 (b7-4): 8-bit raw value
         *
         * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module NS3 Effect 2 Amount
         */
        amount: {
            midi: effect2AmountMidi,

            value: converter.midi2LinearStringValue(0, 10, effect2AmountMidi, 1, ""),

            morph: ns3Morph7Bits(
                effectOffset116Ww >>> 4,
                effect2AmountMidi,
                (x) => {
                    return converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },

        /**
         * Offset in file: 0x114 (b1-0) &nd 0x115 (b7-3)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * @module NS3 Effect 2 Rate
         */
        rate: {
            midi: effect2RateMidi,
            value: converter.midi2LinearStringValue(0, 10, effect2RateMidi, 1, ""),
        },
    };
};
