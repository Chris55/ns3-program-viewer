const {round} = require("../common/converter");

/***
 * returns an array of morph settings
 *
 * @param uint32Value 32-bit raw value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param midiFrom 7-bit original position
 * @param labelCallBack callback method to render the label
 * @param forceDisabled optional used ont dual knob to disable morph option
 * @returns {{afterTouch: {to: {midi: *, label: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, label: (*|string)}, enabled: *}, wheel: {to: {midi: *, label: (*|string)}, enabled: *}}}
 */
exports.getMorph = (uint32Value, midiFrom, labelCallBack, forceDisabled) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x00ff0000) >>> 16; // wheel
    rawMorphValue[1] = (uint32Value & 0x00ff00) >>> 8; // after touch
    rawMorphValue[2] = uint32Value & 0x000000ff; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x7f;
        const positive = (rawValue & 0x80) !== 0;
        const offset = positive ? rawOffsetValue + 1 : rawOffsetValue - 127;
        let midiTo = midiFrom + offset;
        if (midiTo < 0) {
            midiTo = 0;
        } else if (midiTo > 127) {
            midiTo = 127;
        }

        result.push({
            enabled: forceDisabled ? false: offset !== 0,
            midiTo: midiTo,
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

/***
 * returns Synth Oscillator Modulation Morph values
 *
 * @param uint32Value uint32Value 32-bit raw value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param fromValue fromValue from value (-10 / +10)
 * @param left true if called for left value
 * @returns {{afterTouch: {to: {midi: number, label: (string|string)}, enabled: *}, controlPedal: {to: {midi: number, label: (string|string)}, enabled: *}, wheel: {to: {midi: number, label: (string|string)}, enabled: *}}}
 */
exports.getMorphSynthOscillatorModulation = (uint32Value, fromValue, left) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x00ff0000) >>> 16; // wheel
    rawMorphValue[1] = (uint32Value & 0x00ff00) >>> 8; // after touch
    rawMorphValue[2] = uint32Value & 0x000000ff; // control pedal

    const labelFrom = Math.abs(fromValue).toFixed(1);

    rawMorphValue.forEach((rawValue) => {
        const offset = Math.trunc(((rawValue - 120) / 6) * 10) / 10;  // 0 / 10
        const valueTo = fromValue + offset;
        let midiTo = round((valueTo + 10) * 127 / 20, 0);
        if (midiTo < 0) {
            midiTo = 0;
        } else if (midiTo > 127) {
            midiTo = 127;
        }

        const labelTo = Math.abs(valueTo).toFixed(1);
        const showed = left === (fromValue < 0);
        const enabled = showed && (labelTo !== labelFrom);

        result.push({
            enabled:  enabled,
            midiTo: midiTo,
            labelTo: enabled ? labelTo : "none",
        });
    });

    return {
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
                label: result[0].enabled ? result[0].labelTo : "none",
            },
        },

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
                label: result[1].enabled ? result[1].labelTo : "none",
            },
        },

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
                label: result[2].enabled ? result[2].labelTo : "none",
            },
        },
    };
};

/***
 * returns an array of morph organ settings
 * ---- ----   ---- ----   -www wwaa   aaap pppp
 *
 * @param uint32Value 32-bit value, wheel expected to be in b14-10, after touch in b9-5, and control pedal in b4-0.
 * @param midiFrom 7-bit original position
 * @returns {{afterTouch: number, controlPedal: number, wheel: number}}
 */
exports.getMorphOrganDrawbar = (uint32Value, midiFrom) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x7c00) >>> 10; // wheel
    rawMorphValue[1] = (uint32Value & 0x03e0) >>> 5; // after touch
    rawMorphValue[2] = uint32Value & 0x008f; // control pedal

    // console.log("midiFrom", midiFrom, "wheel", rawMorphValue[0].toString(16), "after touch", rawMorphValue[1].toString(16), "control pedal", rawMorphValue[2].toString(16));

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x0f;
        const positive = (rawValue & 0x10) !== 0;
        const offset = positive ? rawOffsetValue + 1 : rawOffsetValue - 8;
        result.push({
            enabled: offset !== 0,
            midiTo: midiFrom + offset,
        });
    });

    return {
        wheel: result[0].midiTo,
        afterTouch: result[1].midiTo,
        controlPedal: result[2].midiTo,
    };
};
