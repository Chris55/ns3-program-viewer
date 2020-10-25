/***
 * returns an array of morph settings
 *
 * @param uint32Value 32-bit raw value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param midiFrom 7-bit original position
 * @param labelCallBack callback method to render the value
 * @param forceDisabled optional used on dual knob to disable morph option
 * @returns {{afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}}
 */
exports.ns2Morph = (uint32Value, midiFrom, labelCallBack, forceDisabled) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x00ff0000) >>> 16; // wheel
    rawMorphValue[1] = (uint32Value & 0x0000ff00) >>> 8; // after touch
    rawMorphValue[2] = uint32Value & 0x000000ff; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x7f;
        const positive = (rawValue & 0x80) !== 0;
        const offset = positive ? rawOffsetValue - 128 : rawOffsetValue;
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
                value: result[0].enabled ? labelCallBack(result[0].midiTo) : "none",
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
                value: result[1].enabled ? labelCallBack(result[1].midiTo) : "none",
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
                value: result[2].enabled ? labelCallBack(result[2].midiTo) : "none",
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
exports.ns2MorphOrganDrawbar = (uint32Value, midiFrom) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x7c00) >>> 10; // wheel
    rawMorphValue[1] = (uint32Value & 0x03e0) >>> 5; // after touch
    rawMorphValue[2] = uint32Value & 0x001f; // control pedal

    console.log(
        "midiFrom",
        midiFrom,
        "wheel",
        rawMorphValue[0].toString(16),
        "after touch",
        rawMorphValue[1].toString(16),
        "control pedal",
        rawMorphValue[2].toString(16)
    );

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x0f;
        const polarity = (rawValue & 0x10) !== 0;
        // console.log("   ", "polarity", polarity, "value", rawOffsetValue);
        const offset = polarity ? rawOffsetValue - 16 : rawOffsetValue;
        //const offset = polarity ? rawOffsetValue - 16 : rawOffsetValue;
        let value = midiFrom + offset;
        if (value < 0) {
            value = 0;
        } else if (value > 8) {
            value = 8;
        }

        result.push({
            enabled: offset !== 0,
            midiTo: value,
        });
    });

    return {
        wheel: result[0].midiTo,
        afterTouch: result[1].midiTo,
        controlPedal: result[2].midiTo,
    };
};
