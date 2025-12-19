import { ns3Morph7Bits } from "./ns3-morph.js";
import { midi2LinearStringValue, midi2LinearValueAndComplement } from "../../common/converter.js";
import { ns3SynthOsc0To4ControlMap } from "./ns3-mapping.js";

/***
 * returns Oscillator Control value
 *
 * @param oscConfig
 * @param oscControlMidi
 * @returns {string}
 */
const getOscControlLabel = (oscConfig, oscControlMidi) => {
    let oscControlLabel = "";
    switch (oscConfig) {
        case "1 Pitch":
            oscControlLabel = midi2LinearStringValue(0, 24, oscControlMidi, 1, "");
            break;
        case "2 Shape":
            oscControlLabel = midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
            break;
        case "3 Sync":
            oscControlLabel = midi2LinearStringValue(0, 10, oscControlMidi, 1, "");
            break;
        case "4 Detune":
            oscControlLabel = ns3SynthOsc0To4ControlMap.get(oscControlMidi);
            break;
        case "5 MixSin":
            oscControlLabel = midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "6 MixTri":
            oscControlLabel = midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "7 MixSaw":
            oscControlLabel = midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "8 MixSqr":
            oscControlLabel = midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "9 MixBell":
            oscControlLabel = midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "10 MixNs1":
            oscControlLabel = midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "11 MixNs2":
            oscControlLabel = midi2LinearValueAndComplement(oscControlMidi);
            break;
        case "12 FM1":
            oscControlLabel = midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
            break;
        case "13 FM2":
            oscControlLabel = midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
            break;
        case "14 RM":
            oscControlLabel = midi2LinearStringValue(0, 100, oscControlMidi, 0, "%");
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
 * @returns {{midi: number, value: string, morph: {afterTouch: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}, controlPedal: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}, wheel: {to: {midi: ({midi: *, value: string}|string), value: (string)}, enabled: boolean}}}}
 */
const ns3OscControl = (buffer, offset, oscConfig) => {
    const synthOffset90W = buffer.readUInt16BE(offset); // 0x90
    const synthOffset91Ww = buffer.readUInt32BE(offset + 1); // 0x91

    const oscControlMidi = (synthOffset90W & 0x07f0) >>> 4;

    return {
        /***
         * Synth Oscillator Control Midi Value
         */
        midi: oscControlMidi,

        isDefault: oscControlMidi === 0,

        /***
         * Synth Oscillator Control value
         */
        value: getOscControlLabel(oscConfig, oscControlMidi),

        /***
         * Morphing settings
         */
        morph: ns3Morph7Bits(
            synthOffset91Ww >>> 4,
            oscControlMidi,
            (x) => {
                return getOscControlLabel(oscConfig, x);
            },
            false,
        ),
    };
};

export { ns3OscControl };
