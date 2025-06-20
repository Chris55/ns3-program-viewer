import { ns2Morph4Bits, ns2Morph7Bits } from "./ns2-morph";
import { ns2Effect1MasterClockDivisionMap, ns2Effect2TypeMap, ns2EffectSourceMap } from "./ns2-mapping";
import { midi2LinearStringValue } from "../../common/converter";

/***
 * returns Effect 2
 *
 * @param buffer {Buffer}
 * @param panelOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: (boolean|boolean)}, source: {value: string}, type: {value: unknown}, enabled: boolean}}
 */
const ns2Effect2 = (buffer, panelOffset) => {
    const effectOffset11a = buffer.readUInt8(0x11a + panelOffset);
    const effectOffset11b = buffer.readUInt8(0x11b + panelOffset);
    const effectOffset11bW = buffer.readUInt16BE(0x11b + panelOffset);
    const effectOffset11d = buffer.readUInt8(0x11d + panelOffset);
    const effectOffset11dWw = buffer.readUInt32BE(0x11d + panelOffset);
    const effectOffset120W = buffer.readUInt16BE(0x120 + panelOffset);
    const effectOffset124W = buffer.readUInt16BE(0x124 + panelOffset);
    const effectOffset121Ww = buffer.readUInt32BE(0x121 + panelOffset);

    const effect2Type = ns2Effect2TypeMap.get(effectOffset11a & 0x07);
    const effect2AmountMidi = (effectOffset124W & 0x1fc0) >>> 6;

    const effect2MasterClock = (effectOffset11b & 0x80) !== 0;
    const effect2MasterClockUsed = effect2MasterClock; // && (effect2Type === "Panning" || effect2Type === "Tremolo");

    const effect2RateMasterClockOffMidi = (effectOffset120W & 0x0fe0) >>> 5;
    const effect2RateMasterClockOnMidi = (effectOffset11d & 0xf0) >>> 4;

    const effect2RateMidi = effect2MasterClockUsed ? effect2RateMasterClockOnMidi : effect2RateMasterClockOffMidi;

    return {
        /**
         * Offset in file: 0x11a (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Effect 2 On
         */
        enabled: (effectOffset11a & 0x20) !== 0,

        /**
         * Offset in file: 0x11a (b4-3)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module NS2 Effect 2 Source
         */
        source: {
            value: ns2EffectSourceMap.get((effectOffset11a & 0x18) >>> 3),
        },

        /**
         *  Offset in file: 0x11a (b2-0)
         *
         * @example
         * 0 = PHAS1
         * 1 = PHAS2
         * 2 = FLANG
         * 3 = VIBE
         * 4 = CHOR1
         * 5 = CHOR2
         *
         *  @module NS2 Effect 2 Type
         */
        type: {
            value: effect2Type,

            isDefault: effect2Type === ns2Effect2TypeMap.get(0),
        },

        /**
         * Offset in file: 0x124 (b4-0) and 0x125 (b7-6)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x121 (b4-0) and 0x117 (b7-5)
         *
         * Morph After Touch:
         * 0x122 (b4-0) and 0x118 (b7-5)
         *
         * Morph Control Pedal:
         * 0x123 (b4-0) and 0x119 (b7-5)
         *
         * @module NS2 Effect 2 Amount
         */
        amount: {
            midi: effect2AmountMidi,

            isDefault: effect2AmountMidi === 64,

            value: midi2LinearStringValue(0, 10, effect2AmountMidi, 1, ""),

            morph: ns2Morph7Bits(
                effectOffset121Ww >>> 5,
                effect2AmountMidi,
                (x) => {
                    return midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },

        /**
         * Offset in file: 0x11d (b7-4)
         *
         * @example
         * #include ns2Effect1MasterClockDivisionMap
         *
         * Morph Wheel:
         * 0x11b (b6-2)
         *
         * Morph After Touch:
         * 0x11b (b1-0) and 0x11c (b7-5)
         *
         * Morph Control Pedal:
         * 0x11c (b4-0)
         *
         * @module NS2 Effect 2 Rate Master Clock
         */

        /**
         * Offset in file: 0x120 (b3-0) and 0x121 (b7-5)
         *
         * @example
         * 7-bit value 0/127
         *
         * Morph Wheel:
         * 0x11d (b3-0) and 0x11e (b7-4)
         *
         * Morph After Touch:
         * 0x11e (b3-0) and 0x11f (b7-4)
         *
         * Morph Control Pedal:
         * 0x11f (b3-0) and 0x120 (b7-4)
         *
         * @module NS2 Effect 2 Rate
         */
        rate: {
            midi: effect2RateMidi,

            isDefault: effect2RateMidi === 64,

            comment: effect2MasterClockUsed ? "" : "2nd value is equivalent to Nord Stage 3",

            value: effect2MasterClockUsed
                ? ns2Effect1MasterClockDivisionMap.get(effect2RateMidi)
                : effect2RateMidi + " (" + midi2LinearStringValue(0, 10, effect2RateMidi, 1, "") + ")",

            morph: effect2MasterClockUsed
                ? ns2Morph4Bits(
                      effectOffset11bW,
                      effect2RateMidi,
                      (x) => ns2Effect1MasterClockDivisionMap.get(x),
                      false
                  )
                : ns2Morph7Bits(
                      effectOffset11dWw >>> 4,
                      effect2RateMidi,
                      (x) => x + " (" + midi2LinearStringValue(0, 10, x, 1, "") + ")",
                      false
                  ),
        },

        /**
         *  Offset in file: 0x11b (b7)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Effect 2 Master Clock
         */
        masterClock: {
            enabled: effect2MasterClockUsed,
            isDefault: effect2MasterClockUsed === false,
        },
    };
};

export { ns2Effect2 };
