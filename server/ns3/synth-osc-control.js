const converter = require("../common/converter");
const { morph } = require("../common/utils");

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

exports.getOscControl = (buffer, offset, oscConfig) => {
    const synthOffset90W = buffer.readUInt16BE(offset); // 0x90
    const synthOffset91W = buffer.readUInt16BE(offset + 1); // 0x91
    const synthOffset92W = buffer.readUInt16BE(offset + 2); // 0x92
    const synthOffset93W = buffer.readUInt16BE(offset + 3); // 0x93

    const oscControlMidi = (synthOffset90W & 0x07f0) >>> 4;
    const morphWheelOscControl = morph(synthOffset91W, oscControlMidi);
    const morphAfterTouchOscControl = morph(synthOffset92W, oscControlMidi);
    const morphControlPedalOscControl = morph(synthOffset93W, oscControlMidi);

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
        morph: {
            /***
             * Wheel Morphing
             */
            wheel: {
                /***
                 * Wheel Morphing Level On/Off
                 */
                enabled: morphWheelOscControl.enabled,

                /***
                 * Wheel Morphing Final Level Value
                 */
                to: {
                    midi: morphWheelOscControl.midiTo,
                    label: morphWheelOscControl.enabled
                        ? getOscControlLabel(oscConfig, morphWheelOscControl.midiTo)
                        : "none",
                },
            },

            /***
             * After Touch Morphing
             */
            afterTouch: {
                /***
                 * After Touch Morphing Level On/Off
                 */
                enabled: morphAfterTouchOscControl.enabled,

                /***
                 * After Touch Morphing Final Level Value
                 */
                to: {
                    midi: morphAfterTouchOscControl.midiTo,
                    label: morphAfterTouchOscControl.enabled
                        ? getOscControlLabel(oscConfig, morphAfterTouchOscControl.midiTo)
                        : "none",
                },
            },

            /***
             * Control Pedal Morphing
             */
            controlPedal: {
                /***
                 * Control Pedal Morphing Level On/Off
                 */
                enabled: morphControlPedalOscControl.enabled,

                /***
                 * Control Pedal Morphing Final Level Value
                 */
                to: {
                    midi: morphControlPedalOscControl.midiTo,
                    label: morphControlPedalOscControl.enabled
                        ? getOscControlLabel(oscConfig, morphControlPedalOscControl.midiTo)
                        : "none",
                },
            },
        },
    };
};
