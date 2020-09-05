/***
 * returns an array of morph settings
 *
 * @param uint32Value 32-bit value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param midiFrom 7-bit original position
 * @param labelCallBack callback method to render the label
 * @returns {{afterTouch: {to: {midi: *, label: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, label: (*|string)}, enabled: *}, wheel: {to: {midi: *, label: (*|string)}, enabled: *}}}
 */
exports.getMorph = (uint32Value, midiFrom, labelCallBack) => {
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

/***
 * returns an array of morph organ settings
 * ---- ----   ---- ----   -www wwaa   aaap pppp
 *
 * @param uint32Value 32-bit value, wheel expected to be in b14-10, after touch in b9-5, and control pedal in b4-0.
 * @param midiFrom 7-bit original position
 * @returns {{afterTouch: {to: {midi: *, label: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, label: (*|string)}, enabled: *}, wheel: {to: {midi: *, label: (*|string)}, enabled: *}}}
 */
exports.getMorph5Bits = (uint32Value, midiFrom) => {
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
        // wheel: result[0].enabled ? result[0].midiTo : "-",
        // afterTouch: result[1].enabled ? result[1].midiTo : "-",
        // controlPedal: result[2].enabled ? result[2].midiTo : "-",

        wheel: result[0].midiTo,
        afterTouch: result[1].midiTo,
        controlPedal: result[2].midiTo,
    };
};
