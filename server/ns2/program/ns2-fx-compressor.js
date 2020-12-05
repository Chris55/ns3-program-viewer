const converter = require("../../common/converter");

/***
 * returns Compressor
 *
 * @param buffer
 * @param offset
 * @returns {{amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}
 */
exports.ns2Compressor = (buffer, offset) => {
    const effectOffset3eW = buffer.readUInt16BE(0x3e + offset);

    const compressorAmountMidi = (effectOffset3eW & 0x0fe0) >>> 5;

    return {
        /**
         * Offset in file: 0x3e (b4)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Compressor On
         */
        enabled: (effectOffset3eW & 0x1000) !== 0,

        /**
         * Offset in file: 0x3e (b3-0) and 0x3f (b7-5)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * @module NS2 Compressor Amount
         */
        amount: {
            midi: compressorAmountMidi,

            value: converter.midi2LinearStringValue(0, 10, compressorAmountMidi, 1, ""),
        },
    };
};
