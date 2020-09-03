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
    let leftLabel = "0.0";
    let rightLabel = "0.0";
    let leftMidi = 0;
    let rightMidi = 0;
    if (value === 0) {
        leftMidi = valueRange127;
        rightMidi = valueRange127;
    } else if (value < 0) {
        leftLabel = Math.abs(value).toFixed(1);
        leftMidi = valueRange127;
    } else {
        rightLabel = value.toFixed(1);
        rightMidi = valueRange127;
    }
    return {
        leftMidi: leftMidi,
        rightMidi: rightMidi,
        leftLabel: leftLabel,
        rightLabel: rightLabel,
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
 * returns an array of morph settings
 *
 * @param uint32Value 32-bit value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param midiFrom 7-bit original position
 * @param labelCallBack callback method to render the label
 * @returns {{afterTouch: {to: {midi: *, label: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, label: (*|string)}, enabled: *}, wheel: {to: {midi: *, label: (*|string)}, enabled: *}}}
 */
const getMorph = (uint32Value, midiFrom, labelCallBack) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x00ff0000) >>> 16; // wheel
    rawMorphValue[1] = (uint32Value & 0x00ff00) >>> 8; // after touch
    rawMorphValue[2] = uint32Value & 0x000000ff; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x7f;
        const positive = (rawValue & 0x80) !== 0;
        const offset = positive ? rawOffsetValue + 1 : rawOffsetValue - 127;
        result.push({
            enabled: offset !== 0,
            midiTo: midiFrom + offset,
        });
    });

    return {
        /***
         * Wheel Morphing
         */
        wheel: {
            /***
             * Wheel Morphing Level On/Off
             */
            enabled: result[0].enabled,

            /***
             * Wheel Morphing Final Level Value
             */
            to: {
                midi: result[0].midiTo,
                label: result[0].enabled ? labelCallBack(result[0].midiTo) : "none",
            },
        },

        /***
         * After Touch Morphing
         */
        afterTouch: {
            /***
             * After Touch Morphing Level On/Off
             */
            enabled: result[1].enabled,

            /***
             * After Touch Morphing Final Level Value
             */
            to: {
                midi: result[1].midiTo,
                label: result[1].enabled ? labelCallBack(result[1].midiTo) : "none",
            },
        },

        /***
         * Control Pedal Morphing
         */
        controlPedal: {
            /***
             * Control Pedal Morphing Level On/Off
             */
            enabled: result[2].enabled,

            /***
             * Control Pedal Morphing Final Level Value
             */
            to: {
                midi: result[2].midiTo,
                label: result[2].enabled ? labelCallBack(result[2].midiTo) : "none",
            },
        },
    };
};

exports.getMorph2 = (uint32Value, midiFrom, labelCallBack) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x00ff0000) >>> 16; // wheel
    rawMorphValue[1] = (uint32Value & 0x00ff00) >>> 8; // after touch
    rawMorphValue[2] = uint32Value & 0x000000ff; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const valueRange120 = rawValue & 0x7f;

        //const valueRange127 = Math.ceil((valueRange120 * 127) / 120);
        const rawOffsetValue = converter.midi2LinearValue(-10, 10, valueRange120, 1, 0, 120);

        const positive = (rawValue & 0x80) !== 0;
        const offset = positive ? rawOffsetValue + 1 : rawOffsetValue - 127;
        result.push({
            enabled: true, //offset !== 0,
            midiTo: rawValue, // midiFrom + offset,
        });
    });

    return {
        /***
         * Wheel Morphing
         */
        wheel: {
            /***
             * Wheel Morphing Level On/Off
             */
            enabled: result[0].enabled,

            /***
             * Wheel Morphing Final Level Value
             */
            to: {
                midi: result[0].midiTo,
                label: result[0].enabled ? labelCallBack(result[0].midiTo) : "none",
            },
        },

        /***
         * After Touch Morphing
         */
        afterTouch: {
            /***
             * After Touch Morphing Level On/Off
             */
            enabled: result[1].enabled,

            /***
             * After Touch Morphing Final Level Value
             */
            to: {
                midi: result[1].midiTo,
                label: result[1].enabled ? labelCallBack(result[1].midiTo) : "none",
            },
        },

        /***
         * Control Pedal Morphing
         */
        controlPedal: {
            /***
             * Control Pedal Morphing Level On/Off
             */
            enabled: result[2].enabled,

            /***
             * Control Pedal Morphing Final Level Value
             */
            to: {
                midi: result[2].midiTo,
                label: result[2].enabled ? labelCallBack(result[2].midiTo) : "none",
            },
        },
    };
};

exports.getMorph = getMorph;

/***
 * returns Volume settings with Morph options
 *
 * @param buffer
 * @param offset
 * @returns {{midi: *, label: string, morph: {afterTouch: {to: ({midi: *, label: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, label: string}|string), enabled: boolean}, wheel: {to: ({midi: *, label: string}|string), enabled: boolean}}}}
 */
exports.getVolumeEx = (buffer, offset) => {
    const organOffsetB6W = buffer.readUInt16BE(offset); // 0xB6
    const morphOffsetB7Ww = buffer.readUInt32BE(offset + 1); // 0xB7

    // From value
    const midi = (organOffsetB6W & 0x07f0) >>> 4;

    // To values
    const morph = getMorph(morphOffsetB7Ww >>> 4, midi, (x) => {
        return mapping.dBMap.get(x);
    });

    return {
        /***
         * Volume Midi value
         */
        midi: midi,

        /***
         * Volume Label
         */
        label: mapping.dBMap.get(midi),

        /***
         * Morphing settings
         */
        morph: morph,
    };
};
