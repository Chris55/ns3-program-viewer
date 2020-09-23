const converter = require("../../common/converter");
const mapping = require("./ns3-mapping");
const { getMorph } = require("./ns3-morph");

/***
 * returns Effect 1
 *
 * @param buffer {Buffer}
 * @param panelOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: (boolean|boolean)}, source: {value: string}, type: {value: unknown}, enabled: boolean}}
 */
exports.getEffect1 = (buffer, panelOffset) => {
    const effectOffset10b = buffer.readUInt8(0x10b + panelOffset);
    const effectOffset10bW = buffer.readUInt16BE(0x10b + panelOffset);
    const effectOffset10cW = buffer.readUInt16BE(0x10c + panelOffset);
    const effectOffset10dWw = buffer.readUInt32BE(0x10d + panelOffset);
    const effectOffset110 = buffer.readUInt8(0x110 + panelOffset);
    const effectOffset110Ww = buffer.readUInt32BE(0x110 + panelOffset);

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
        source: {
            value: mapping.effectSourceMap.get((effectOffset10b & 0x0c) >>> 2),
        },

        /**
         *  Offset 0 in file: 0x10B (b1-0) and 0x10C (b7)
         *
         * @example
         * 0 = A-Pan
         * 1 = Trem
         * 2 = RM
         * 3 = WA-WA
         * 4 = A-WA1
         * 5 = A-WA2
         *
         *  @module Effect 1 Type
         */
        type: {
            value: effect1Type,
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
        amount: {
            midi: effect1AmountMidi,

            value: converter.midi2LinearStringValue(0, 10, effect1AmountMidi, 1, ""),

            morph: getMorph(
                effectOffset110Ww,
                effect1AmountMidi,
                (x) => {
                    return converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },

        /**
         * Offset in file: 0x10C (b5-0) and 0x10D (b7)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * if 'Effect 1 Master Clock' is enabled 7-bit value 0/127 = 4/1 to 1/32
         * #include effect1MasterClockDivisionMap
         *
         * Morph Wheel:
         * 0x10D (b6): polarity (1 = positive, 0 = negative)
         * 0x10D (b5-b0) and 0x10E (b7): 7-bit raw value
         *
         * Morph After Touch:
         * 0x10E (b6): polarity (1 = positive, 0 = negative)
         * 0x10E (b5-b0) and 0x10F (b7): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x10F (b6): polarity (1 = positive, 0 = negative)
         * 0x10F (b5-b0) and 0x110 (b7): 7-bit raw value
         *
         * @see {@link ns3-doc.md#organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module Effect 1 Rate
         */
        rate: {
            midi: effect1RateMidi,

            value: effect1MasterClockUsed
                ? mapping.effect1MasterClockDivisionMap.get(effect1RateMidi)
                : converter.midi2LinearStringValue(0, 10, effect1RateMidi, 1, ""),

            morph: getMorph(
                effectOffset10dWw >>> 7,
                effect1RateMidi,
                (x) => {
                    return effect1MasterClockUsed
                        ? mapping.effect1MasterClockDivisionMap.get(x)
                        : converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },

        /**
         *  Offset in file: 0x10C (b6)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module Effect 1 Master Clock
         */
        masterClock: {
            enabled: effect1MasterClockUsed,
        },
    };
};
