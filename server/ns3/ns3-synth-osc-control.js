const converter = require("../common/converter");
const { getMorph } = require("./ns3-morph");

/***
 * returns Oscillator Control label
 *
 * @param oscConfig
 * @param oscControlMidi
 * @returns {string}
 */
const getOscControlLabel = (oscConfig, oscControlMidi) => {
    let oscControlLabel = "";
    switch (oscConfig) {
        case "1 Pitch":
            oscControlLabel = converter.midi2LinearStringValue(0, 24, oscControlMidi, 1, "");
            break;
        case "2 Shape":
            oscControlLabel = converter.midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
            break;
        case "3 Sync":
            oscControlLabel = converter.midi2LinearStringValue(0, 10, oscControlMidi, 1, "");
            break;
        case "4 Detune":
            oscControlLabel = converter.midi2LinearStringValue(0, 4, oscControlMidi, 2, "");
            break;
        case "5 MixSin":
            oscControlLabel = converter.midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "6 MixTri":
            oscControlLabel = converter.midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "7 MixSaw":
            oscControlLabel = converter.midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "8 MixSqr":
            oscControlLabel = converter.midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "9 MixBell":
            oscControlLabel = converter.midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "10 MixNs1":
            oscControlLabel = converter.midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "11 MixNs2":
            oscControlLabel = converter.midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "12 FM1":
            oscControlLabel = converter.midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
            break;
        case "13 FM2":
            oscControlLabel = converter.midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
            break;
        case "14 RM":
            oscControlLabel = converter.midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
            break;
    }
    return oscControlLabel;
};

/***
 * returns Oscillator Control settings
 *
 * @param buffer
 * @param offset
 * @param oscConfig
 * @returns {{midi: number, label: string, morph: {afterTouch: {to: {midi: ({midi: *, label: string}|string), label: (string)}, enabled: boolean}, controlPedal: {to: {midi: ({midi: *, label: string}|string), label: (string)}, enabled: boolean}, wheel: {to: {midi: ({midi: *, label: string}|string), label: (string)}, enabled: boolean}}}}
 */
exports.getOscControl = (buffer, offset, oscConfig) => {
    const synthOffset90W = buffer.readUInt16BE(offset); // 0x90
    const synthOffset91Ww = buffer.readUInt32BE(offset + 1); // 0x91

    const oscControlMidi = (synthOffset90W & 0x07f0) >>> 4;

    return {
        /***
         * Synth Oscillator Control Midi Value
         */
        midi: oscControlMidi,

        /***
         * Synth Oscillator Control Label
         */
        label: getOscControlLabel(oscConfig, oscControlMidi),

        /***
         * Morphing settings
         */
        morph: getMorph(synthOffset91Ww >>> 4, oscControlMidi, (x) => {
            return getOscControlLabel(oscConfig, x);
        }, false),
    };
};
