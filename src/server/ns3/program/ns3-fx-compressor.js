import { ns3BooleanValue } from "./ns3-utils";
import { midi2LinearStringValue } from "../../common/converter";

/***
 * returns Compressor
 *
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}
 */
const ns3Compressor = (buffer, panelOffset) => {
    const effectOffset139 = buffer.readUInt8(0x139 + panelOffset);
    const effectOffset139W = buffer.readUInt16BE(0x139 + panelOffset);

    const compressorAmountMidi = (effectOffset139W & 0x1fc0) >>> 6;

    return {
        /**
         * Offset in file: 0x139 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS3 Compressor On
         */
        enabled: (effectOffset139 & 0x20) !== 0,

        /**
         * Offset in file: 0x139 (b4-0) and 0x13A (b7-6)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * @module NS3 Compressor Amount
         */
        amount: {
            midi: compressorAmountMidi,

            isDefault: compressorAmountMidi === 0,

            value: midi2LinearStringValue(0, 10, compressorAmountMidi, 1, ""),
        },

        /**
         * Offset in file: 0x13A (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS3 Compressor Fast
         */
        fast: ns3BooleanValue((effectOffset139W & 0x0020) !== 0, false),
    };
};

export { ns3Compressor };
