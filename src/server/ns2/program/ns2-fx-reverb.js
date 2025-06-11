import { ns2ReverbTypeMap } from "./ns2-mapping";
import { midi2LinearStringValue } from "../../common/converter";

/***
 * returns Reverb
 *
 * @param buffer
 * @param offset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}}
 */
const ns2Reverb = (buffer, offset) => {
    const reverbOffset3dW = buffer.readUInt16BE(0x3d + offset);

    const reverbAmountMidi = (reverbOffset3dW & 0x0fe0) >>> 5;
    const reverbType = ns2ReverbTypeMap.get((reverbOffset3dW & 0x7000) >>> 12);

    return {
        /**
         * Offset in file: 0x3d (b7)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Reverb On
         */
        enabled: (reverbOffset3dW & 0x8000) !== 0,

        /**
         * Offset in file: 0x3d (b6-4)
         *
         * @example
         * 0 = Room 1
         * 1 = Room 2
         * 2 = Stage 1
         * 3 = Stage 2
         * 4 = Hall 1
         * 5 = Hall 2
         *
         * @module NS2 Reverb Type
         */
        type: {
            value: reverbType,
            isDefault: reverbType === ns2ReverbTypeMap.get(2),
        },

        /**
         * Offset in file: 0x3d (b3-0) and 0x3e (b7-5)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * @module NS2 Reverb Amount
         */
        amount: {
            midi: reverbAmountMidi,
            isDefault: reverbAmountMidi === 64,
            value: midi2LinearStringValue(0, 10, reverbAmountMidi, 1, ""),
        },
    };
};

export { ns2Reverb };
