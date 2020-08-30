const mapping = require("../ns3/mapping");
const converter = require("./converter");

/***
 * Returns two values from a single knob (and equivalent midi value).
 *
 * Settings like Osc modulation (lfo/env mod) and Filter modulation (vel/env mod) are using this option
 * to define two settings with a single knob.
 * Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
 * 0   = 10.0 (100% left value, example LFO Amount),
 * 60  = 0.0 for both values,
 * 120 = 10.0 (100% right value, example Mod Env Amount)
 *
 * @param valueRange120
 * @param valueRange120
 * @returns {{leftMidi: number, leftValue: string, rightValue: string, rightMidi: number}}
 */
exports.getKnobDualValues = function (valueRange120) {
    const valueRange127 = Math.ceil((valueRange120 * 127) / 120);
    const value = converter.midi2LinearValue(-10, 10, valueRange120, 1, 0, 120);
    let leftValue = "0.0";
    let rightValue = "0.0";
    let leftMidi = 0;
    let rightMidi = 0;
    if (value === 0) {
        leftMidi = valueRange127;
        rightMidi = valueRange127;
    } else if (value < 0) {
        leftValue = Math.abs(value).toFixed(1);
        leftMidi = valueRange127;
    } else {
        rightValue = value.toFixed(1);
        rightMidi = valueRange127;
    }
    return {
        leftMidi: leftMidi,
        rightMidi: rightMidi,
        leftValue: leftValue,
        rightValue: rightValue,
    };
};

/***
 * returns Keyboard Zone
 * @param sectionEnabled
 * @param splitEnabled
 * @param value
 * @returns {string}
 */
exports.getKbZone = (sectionEnabled, splitEnabled, value) => {
    if (sectionEnabled) {
        if (splitEnabled) {
            return mapping.kbZoneMap.get(value);
        }
        // no split, full keyboard is used
        return "0000";
    }
    // section is not used
    return "----";
};

/***
 * returns volume object
 *
 * @param value
 * @returns {{midi: *, label: string}}
 */
const getVolumeValueAndLabel = (value) => ({
    midi: value,
    label: mapping.dBMap.get(value),
});


/***
 * returns Volume settings with Morph options
 *
 * @param buffer
 * @param offset
 * @returns {{midi: *, label: string, morph: {afterTouch: {to: ({midi: *, label: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, label: string}|string), enabled: boolean}, wheel: {to: ({midi: *, label: string}|string), enabled: boolean}}}}
 */
exports.getVolumeEx = (buffer, offset) => {
    const organOffsetB6W = buffer.readUInt16BE(offset); // 0xB6

    const morphOffsetB7W = buffer.readUInt16BE(offset + 1); // 0xB7
    const morphOffsetB8W = buffer.readUInt16BE(offset + 2); // 0xB8
    const morphOffsetB9W = buffer.readUInt16BE(offset + 3); // 0xB9

    const morph = (rawValue, midiFrom) => {
        const rawOffsetValue = (rawValue & 0x07f0) >> 4;
        const up = (rawValue & 0x0800) !== 0;
        const offset = up ? rawOffsetValue + 1: rawOffsetValue - 127;
        const enabled = offset !== 0;
        const midiTo = midiFrom + offset;

        return {
            enabled: enabled,
            midiTo: enabled ? getVolumeValueAndLabel(midiTo): "none",
        }
    }

    // From value
    const volume = getVolumeValueAndLabel((organOffsetB6W & 0x07f0) >> 4);

    // To values
    const morphWheel = morph(morphOffsetB7W, volume.midi);
    const morphAfterTouch = morph(morphOffsetB8W, volume.midi);
    const morphControlPedal = morph(morphOffsetB9W, volume.midi);

    return {
        /***
         * Volume Midi value
         */
        midi: volume.midi,

        /***
         * Volume Label
         */
        label: volume.label,

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
                 * Offset in file: 0xB8 (b4) 0 = Enabled, 1 = Disabled
                 */
                enabled: morphWheel.enabled,

                /***
                 * Wheel Morphing Final Level Value
                 * Offset in file: 0xB7 (b3-0) and 0xB8 (b7-5) 0/127 midi value
                 */
                to: morphWheel.midiTo,
            },

            /***
             * After Touch Morphing
             */
            afterTouch: {
                /***
                 * After Touch Morphing Level On/Off
                 * Offset in file: 0xB8 (b4) 0 = Enabled, 1 = Disabled
                 */
                enabled: morphAfterTouch.enabled,

                /***
                 * After Touch Morphing Final Level Value
                 * Offset in file: 0xB7 (b3-0) and 0xB8 (b7-5) 0/127 midi value
                 */
                to: morphAfterTouch.midiTo,
            },

            /***
             * Control Pedal Morphing
             */
            controlPedal: {
                /***
                 * Control Pedal Morphing Level On/Off
                 * Offset in file: 0xB8 (b4) 0 = Enabled, 1 = Disabled
                 */
                enabled: morphControlPedal.enabled,

                /***
                 * Control Pedal Morphing Final Level Value
                 * Offset in file: 0xB7 (b3-0) and 0xB8 (b7-5) 0/127 midi value
                 */
                to: morphControlPedal.midiTo,
            },
        },
    };
};
