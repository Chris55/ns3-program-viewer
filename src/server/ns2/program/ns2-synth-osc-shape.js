import { ns2Morph7Bits } from "./ns2-morph.js";
import { getMorphModel, midi2LinearStringValue } from "../../common/converter.js";

/***
 * returns Oscillator Shape settings
 *
 * @param buffer
 * @param slotOffset
 * @param shapeMode '---', 'dtn', 'snc', or 'shp'
 * @returns {{midi: number, value: string, morph: {afterTouch: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}, controlPedal: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}, wheel: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}}}}
 */
const ns2OscShape = (buffer, slotOffset, shapeMode) => {
    const synthOffsetE6W = buffer.readUInt16BE(0xe6 + slotOffset);
    const synthOffsetEb = buffer.readUInt8(0xeb + slotOffset);
    const synthOffsetE3Ww = buffer.readUInt32BE(0xe3 + slotOffset);
    const synthOffsetE8Ww = buffer.readUInt32BE(0xe8 + slotOffset);

    const oscShapeMidi = (synthOffsetE6W & 0x1fc0) >>> 6;
    const oscShapeMidiDetune = synthOffsetEb & 0x1f;
    const isShapeDetune = shapeMode === "dtn";

    const midi = isShapeDetune ? oscShapeMidiDetune : oscShapeMidi;

    return {
        /***
         * Synth Oscillator Shape Midi Value
         */
        midi: midi,

        isDefault: midi === 0,

        /***
         * Synth Oscillator Shape value
         */
        value: isShapeDetune ? oscShapeMidiDetune - 12 : midi2LinearStringValue(0, 10, oscShapeMidi, 1, ""),

        /***
         * Morphing settings
         */
        morph: isShapeDetune
            ? ns2Morph7Bits(
                  synthOffsetE8Ww >>> 7,
                  oscShapeMidiDetune,
                  (x) => {
                      return x - 12;
                  },
                  false,
              )
            : ns2Morph7Bits(
                  synthOffsetE3Ww >>> 5,
                  oscShapeMidi,
                  (x) => {
                      return midi2LinearStringValue(0, 10, x, 1, "");
                  },
                  false,
              ),
    };
};

const ns2SkipSampleAttack = (buffer, slotOffset, oscillatorType) => {
    const synthOffsetEc = buffer.readUInt8(0xec + slotOffset);

    const skipSampleAttack = oscillatorType === "SAMPLE" && (synthOffsetEc & 2) !== 0;
    const wheel = (synthOffsetEc & 0xc0) >>> 6;
    const afterTouch = (synthOffsetEc & 0x30) >>> 4;
    const controlPedal = (synthOffsetEc & 0x0c) >>> 2;

    const morph = [
        {
            enabled: wheel !== 0,
            midiTo: wheel === 1,
        },
        {
            enabled: afterTouch !== 0,
            midiTo: afterTouch === 1,
        },
        {
            enabled: controlPedal !== 0,
            midiTo: controlPedal === 1,
        },
    ];

    return {
        enabled: skipSampleAttack,

        isDefault: skipSampleAttack === false,

        /***
         * Skip Sample Attack value
         */
        value: skipSampleAttack ? "On" : "Off",

        /***
         * Skip Sample Attack Morphing settings
         */
        morph: getMorphModel(morph, (x) => (x ? "On" : "Off")),
    };
};

export { ns2OscShape, ns2SkipSampleAttack };
