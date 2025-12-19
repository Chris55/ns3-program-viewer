import { ns2Morph4Bits, ns2Morph7Bits } from "./ns2-morph.js";
import { ns2Effect1MasterClockDivisionMap, ns2Effect1TypeMap, ns2EffectSourceMap } from "./ns2-mapping.js";
import { midi2LinearStringValue } from "../../common/converter.js";

/***
 * returns Effect 1
 *
 * @param buffer {Buffer}
 * @param panelOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: (boolean|boolean)}, source: {value: string}, type: {value: unknown}, enabled: boolean}}
 */
const ns2Effect1 = (buffer, panelOffset) => {
    const effectOffset10f = buffer.readUInt8(0x10f + panelOffset);
    const effectOffset110 = buffer.readUInt8(0x110 + panelOffset);
    const effectOffset110W = buffer.readUInt16BE(0x110 + panelOffset);
    const effectOffset112 = buffer.readUInt8(0x112 + panelOffset);
    const effectOffset112Ww = buffer.readUInt32BE(0x112 + panelOffset);
    const effectOffset115W = buffer.readUInt16BE(0x115 + panelOffset);
    const effectOffset119W = buffer.readUInt16BE(0x119 + panelOffset);
    const effectOffset116Ww = buffer.readUInt32BE(0x116 + panelOffset);

    const effect1Type = ns2Effect1TypeMap.get(effectOffset10f & 0x07);
    const effect1AmountMidi = (effectOffset119W & 0x1fc0) >>> 6;

    const effect1MasterClock = (effectOffset110 & 0x80) !== 0;
    const effect1MasterClockUsed = effect1MasterClock && (effect1Type === "Panning" || effect1Type === "Tremolo");

    const effect1RateMasterClockOffMidi = (effectOffset115W & 0x0fe0) >>> 5;
    const effect1RateMasterClockOnMidi = (effectOffset112 & 0xf0) >>> 4;

    const effect1RateMidi = effect1MasterClockUsed ? effect1RateMasterClockOnMidi : effect1RateMasterClockOffMidi;

    // focus is not used, only added to be included it in the documentation.
    /**
     * Offset in file: 0x10f (b7-b6)
     *
     * @example
     * O = Effect 1, 1 = Effect 2, 2 = Delay
     *
     *  @module NS2 Effect Focus
     */

    return {
        /**
         * Offset in file: 0x10f (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Effect 1 On
         */
        enabled: (effectOffset10f & 0x20) !== 0,

        /**
         * Offset in file: 0x10f (b4-3)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module NS2 Effect 1 Source
         */
        source: {
            value: ns2EffectSourceMap.get((effectOffset10f & 0x18) >>> 3),
        },

        /**
         *  Offset in file: 0x10f (b2-0)
         *
         * @example
         * 0 = A-Pan
         * 1 = Trem
         * 2 = RM
         * 3 = WA-WA
         * 4 = A-WA1
         * 5 = A-WA2
         *
         *  @module NS2 Effect 1 Type
         */
        type: {
            value: effect1Type,

            isDefault: effect1Type === ns2Effect1TypeMap.get(0),
        },

        /**
         * Offset in file: 0x119 (b4-0) and 0x11a (b7-6)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x116 (b4-0) and 0x117 (b7-5)
         *
         * Morph After Touch:
         * 0x117 (b4-0) and 0x118 (b7-5)
         *
         * Morph Control Pedal:
         * 0x118 (b4-0) and 0x119 (b7-5)
         *
         * @module NS2 Effect 1 Amount
         */
        amount: {
            midi: effect1AmountMidi,

            isDefault: effect1AmountMidi === 64,

            value: midi2LinearStringValue(0, 10, effect1AmountMidi, 1, ""),

            morph: ns2Morph7Bits(
                effectOffset116Ww >>> 5,
                effect1AmountMidi,
                (x) => {
                    return midi2LinearStringValue(0, 10, x, 1, "");
                },
                false,
            ),
        },

        /**
         * Offset in file: 0x112 (b7-4)
         *
         * @example
         * #include ns2Effect1MasterClockDivisionMap
         *
         * Morph Wheel:
         * 0x110 (b6-2)
         *
         * Morph After Touch:
         * 0x110 (b1-0) and 0x111 (b7-5)
         *
         * Morph Control Pedal:
         * 0x111 (b4-0)
         *
         * @module NS2 Effect 1 Rate Master Clock
         */

        /**
         * Offset in file: 0x115 (b3-0) and 0x116 (b7-5)
         *
         * @example
         * 7-bit value 0/127
         *
         * Morph Wheel:
         * 0x112 (b3-0) and 0x113 (b7-4)
         *
         * Morph After Touch:
         * 0x113 (b3-0) and 0x114 (b7-4)
         *
         * Morph Control Pedal:
         * 0x114 (b3-0) and 0x115 (b7-4)
         *
         * @module NS2 Effect 1 Rate
         */
        rate: {
            midi: effect1RateMidi,

            isDefault: effect1RateMidi === 64,

            comment: effect1MasterClockUsed ? "" : "2nd value is equivalent to Nord Stage 3",

            value: effect1MasterClockUsed
                ? ns2Effect1MasterClockDivisionMap.get(effect1RateMidi)
                : effect1RateMidi + " (" + midi2LinearStringValue(0, 10, effect1RateMidi, 1, "") + ")",

            morph: effect1MasterClockUsed
                ? ns2Morph4Bits(
                      effectOffset110W,
                      effect1RateMidi,
                      (x) => ns2Effect1MasterClockDivisionMap.get(x),
                      false,
                  )
                : ns2Morph7Bits(
                      effectOffset112Ww >>> 4,
                      effect1RateMidi,
                      (x) => x + " (" + midi2LinearStringValue(0, 10, x, 1, "") + ")",
                      false,
                  ),
        },

        /**
         *  Offset in file: 0x110 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Effect 1 Master Clock
         */
        masterClock: {
            enabled: effect1MasterClockUsed,
            isDefault: effect1MasterClockUsed === false,
        },
    };
};

export { ns2Effect1 };
