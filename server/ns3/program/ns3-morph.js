const mapping = require("./ns3-mapping");
const {getMorphModel} = require("../../common/converter");
const { round } = require("../../common/converter");

/***
 * returns an array of morph settings
 *
 * @param uint32Value 32-bit raw value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param midiFrom 7-bit original position
 * @param labelCallBack callback method to render the value
 * @param forceDisabled optional used on dual knob to disable morph option
 * @returns {{afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}}
 */
exports.ns3Morph7Bits = (uint32Value, midiFrom, labelCallBack, forceDisabled) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x00ff0000) >>> 16; // wheel
    rawMorphValue[1] = (uint32Value & 0x00ff00) >>> 8; // after touch
    rawMorphValue[2] = uint32Value & 0x000000ff; // control pedal

    rawMorphValue.forEach((rawValue) => {
        // const rawOffsetValue = rawValue & 0x7f;
        // const polarity = (rawValue & 0x80) !== 0;
        // const offset = polarity ? rawOffsetValue + 1 : rawOffsetValue - 127;
        // let midiTo = midiFrom + offset;
        // if (midiTo < 0) {
        //     midiTo = 0;
        // } else if (midiTo > 127) {
        //     midiTo = 127;
        // }
        //
        // result.push({
        //     enabled: forceDisabled ? false : offset !== 0,
        //     midiTo: midiTo,
        // });

        result.push({
            enabled: forceDisabled ? false : rawValue !== 127,
            midiTo: (rawValue + midiFrom - 127) & 127,
        });
    });

    return getMorphModel(result, labelCallBack);
};

/***
 * returns an array of morph settings
 *
 * @param buffer {Buffer}
 * @param offset {Number} panel A/B offset, expected to start with fromValue on b7
 * @param labelCallBack callback method to render the value
 * @param forceDisabled optional used ont dual knob to disable morph option
 * @returns {{afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}}
 */
exports.ns3Morph14Bits = (buffer, offset, labelCallBack, forceDisabled) => {
    const rawMorphValue = [3];
    const result = [];

    const midi14FromOffset = buffer.readUInt16BE(offset);
    const midi14From = (midi14FromOffset & 0xfffc) >>> 2;

    const rawMorphWheelValue = buffer.readUInt32BE(offset + 1);
    const rawMorphAfterTouchValue = buffer.readUInt32BE(offset + 3);
    const rawMorphControlPedalValue = buffer.readUInt32BE(offset + 5);
    rawMorphValue[0] = (rawMorphWheelValue & 0x03fff800) >>> 11; // wheel
    rawMorphValue[1] = (rawMorphAfterTouchValue & 0x07fff000) >>> 12; // after touch
    rawMorphValue[2] = (rawMorphControlPedalValue & 0x0fffe000) >>> 13; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x3fff;
        const polarity = (rawValue & 0x4000) !== 0;
        const offset = polarity ? rawOffsetValue + 1 : rawOffsetValue - 16383; // 2^14 - 1
        let midiTo = midi14From + offset;
        if (midiTo < 0) {
            midiTo = 0;
        } else if (midiTo > 16383) {
            midiTo = 16383;
        }

        result.push({
            enabled: forceDisabled ? false : offset !== 0,
            midiTo: midiTo >>> 7,
            lsw: midiTo & 0x007f,
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
                value: result[0].enabled ? labelCallBack(result[0].midiTo, result[0].lsw) : "none",
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
                value: result[1].enabled ? labelCallBack(result[1].midiTo, result[1].lsw) : "none",
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
                value: result[2].enabled ? labelCallBack(result[2].midiTo, result[2].lsw) : "none",
            },
        },
    };
};

/***
 * returns Synth Oscillator Modulation Morph values
 *
 * @param uint32Value uint32Value 32-bit raw value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param fromValueRange120 fromValue 0/120
 * @param left true if called for left value
 * @returns {{afterTouch: {to: {midi: number, value: (string|string)}, enabled: *}, controlPedal: {to: {midi: number, value: (string|string)}, enabled: *}, wheel: {to: {midi: number, value: (string|string)}, enabled: *}}}
 */
exports.ns3MorphSynthOscillatorModulation = (uint32Value, fromValueRange120, left) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x00ff0000) >>> 16; // wheel
    rawMorphValue[1] = (uint32Value & 0x00ff00) >>> 8; // after touch
    rawMorphValue[2] = uint32Value & 0x000000ff; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const offset = rawValue - 120;
        const valueTo = fromValueRange120 + offset;
        let midiTo = round(((valueTo + 10) * 127) / 20, 0);
        if (midiTo < 0) {
            midiTo = 0;
        } else if (midiTo > 127) {
            midiTo = 127;
        }
        const labelTo = mapping.ns3SynthModulation120Map.get(valueTo);
        const showed = left === fromValueRange120 < 60;
        const enabled = showed && offset !== 0;

        result.push({
            enabled: enabled,
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
                value: result[0].enabled ? result[0].labelTo : "none",
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
                value: result[1].enabled ? result[1].labelTo : "none",
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
                value: result[2].enabled ? result[2].labelTo : "none",
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
exports.ns3MorphOrganDrawbar = (uint32Value, midiFrom) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (uint32Value & 0x7c00) >>> 10; // wheel
    rawMorphValue[1] = (uint32Value & 0x03e0) >>> 5; // after touch
    rawMorphValue[2] = uint32Value & 0x001f; // control pedal

/*    console.log(
        "midiFrom",
        midiFrom,
        "wheel",
        rawMorphValue[0].toString(16),
        "after touch",
        rawMorphValue[1].toString(16),
        "control pedal",
        rawMorphValue[2].toString(16)
    );*/

    rawMorphValue.forEach((rawValue) => {
        // const rawOffsetValue = rawValue & 0x0f;
        // const polarity = (rawValue & 0x10) !== 0;
        // const offset = polarity ? 8 - rawOffsetValue : rawOffsetValue - 8;
        // //console.log("   ", "polarity", polarity, "value", rawOffsetValue, "offset", offset);
        // let value = midiFrom + offset;
        // if (value < 0) {
        //     value = Math.abs(value);
        // } else if (value > 8) {
        //     value = 8;
        // }
        //
        // result.push({
        //     enabled: offset !== 0,
        //     midiTo: value,
        // });

        result.push({
            enabled: rawValue !== 8,
            midiTo: rawValue === 16 ? 8: Math.abs(rawValue + midiFrom - 8),
        });
    });

    return {
        wheel: result[0].midiTo,
        afterTouch: result[1].midiTo,
        controlPedal: result[2].midiTo,
    };
};
