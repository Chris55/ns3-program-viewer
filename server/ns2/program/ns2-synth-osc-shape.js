const converter = require("../../common/converter");
const { ns2Morph7Bits } = require("./ns2-morph");

/***
 * returns Oscillator Shape settings
 *
 * @param buffer
 * @param slotOffset
 * @returns {{midi: number, value: string, morph: {afterTouch: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}, controlPedal: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}, wheel: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}}}}
 */
exports.ns2OscShape = (buffer, slotOffset) => {
    const synthOffsetE6W = buffer.readUInt16BE(0xe6 + slotOffset);
    const synthOffsetE3Ww = buffer.readUInt32BE(0xe3 + slotOffset);

    const oscShapeMidi = (synthOffsetE6W & 0x1fc0) >>> 6;

    return {
        /***
         * Synth Oscillator Shape Midi Value
         */
        midi: oscShapeMidi,

        /***
         * Synth Oscillator Shape value
         */
        value: converter.midi2LinearStringValue(0, 10, oscShapeMidi, 1, ""),

        /***
         * Morphing settings
         */
        morph: ns2Morph7Bits(
            synthOffsetE3Ww >>> 5,
            oscShapeMidi,
            (x) => {
                return converter.midi2LinearStringValue(0, 10, x, 1, "");
            },
            false
        ),
    };
};
