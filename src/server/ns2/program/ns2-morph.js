import { getMorphModel } from "../../common/converter";

/***
 * returns an array of morph settings
 *
 * @param uint32Value 32-bit raw value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @param midiFrom 7-bit original position
 * @param labelCallBack callback method to render the value
 * @param forceDisabled optional used on dual knob to disable morph option
 * @returns {{afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}}
 */
const ns2Morph7Bits = (uint32Value, midiFrom, labelCallBack, forceDisabled) => {
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
            enabled: forceDisabled ? false : offset !== 0,
            midiTo: midiTo,
        });
    });

    return getMorphModel(result, labelCallBack);
};

/***
 * returns an array of morph settings
 *
 * @param rawMorph morph raw value, wheel expected to be in b14-10, after touch in b9-5, and control pedal in b4-0.
 * @param midiFrom 4-bit original position
 * @param labelCallBack callback method to render the value
 * @param forceDisabled optional used on dual knob to disable morph option
 * @returns {{afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}}
 */
const ns2Morph4Bits = (rawMorph, midiFrom, labelCallBack, forceDisabled) => {
    const rawMorphValue = [3];
    const result = [];

    rawMorphValue[0] = (rawMorph & 0x7c00) >>> 10; // wheel
    rawMorphValue[1] = (rawMorph & 0x03e0) >>> 5; // after touch
    rawMorphValue[2] = rawMorph & 0x001f; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x0f;
        const positive = (rawValue & 0x10) !== 0;
        const offset = positive ? rawOffsetValue - 16 : rawOffsetValue;
        let midiTo = midiFrom + offset;
        if (midiTo < 0) {
            midiTo = 0;
        } else if (midiTo > 15) {
            midiTo = 15;
        }

        result.push({
            enabled: forceDisabled ? false : offset !== 0,
            midiTo: midiTo,
        });
    });

    return getMorphModel(result, labelCallBack);
};

/***
 * returns an array of morph organ settings
 *
 * @param morphData {number} 32-bit value,
 * B3 and Vox: wheel expected to be in b14-10, after touch in b9-5, and control pedal in b4-0.
 * example: ---- ----   ---- ----   -www wwaa   aaap pppp
 * Farfisa:    wheel expected to be in b5-4, after touch in b3-2, and control pedal in b1-0.
 * example: ---- ----   ---- ----   ---- ----   --ww aapp
 * @param midiFrom {number} 7-bit original position
 * @param morphOn5Bits {boolean} true for B3/Vox, false for Farfisa
 * @returns {{afterTouch: number, controlPedal: number, wheel: number}}
 */
const ns2MorphOrganDrawbar = (morphData, midiFrom, morphOn5Bits) => {
    const rawMorphValue = [3];
    const result = [];

    if (morphOn5Bits) {
        // B3 & Vox
        rawMorphValue[0] = (morphData & 0x7c00) >>> 10; // wheel
        rawMorphValue[1] = (morphData & 0x03e0) >>> 5; // after touch
        rawMorphValue[2] = morphData & 0x001f; // control pedal
    } else {
        // Farfisa
        rawMorphValue[0] = (morphData & 0x30) >>> 4; // wheel
        rawMorphValue[1] = (morphData & 0x0c) >>> 2; // after touch
        rawMorphValue[2] = morphData & 0x03; // control pedal
    }

    // console.log(
    //     "midiFrom",
    //     midiFrom,
    //     "wheel",
    //     rawMorphValue[0].toString(16),
    //     "after touch",
    //     rawMorphValue[1].toString(16),
    //     "control pedal",
    //     rawMorphValue[2].toString(16)
    // );

    rawMorphValue.forEach((rawValue) => {
        let value;

        if (morphOn5Bits) {
            const rawOffsetValue = rawValue & 0x0f;
            const polarity = (rawValue & 0x10) !== 0;
            // console.log("   ", "polarity", polarity, "value", rawOffsetValue);
            const offset = polarity ? rawOffsetValue - 16 : rawOffsetValue;
            value = midiFrom + offset;
            if (value < 0) {
                value = 0;
            } else if (value > 8) {
                value = 8;
            }
        } else {
            const inverse = (rawValue & 0x01) !== 0;
            value = inverse ? (midiFrom === 0 ? 1 : 0) : midiFrom;
        }

        result.push({
            enabled: midiFrom !== value,
            midiTo: value,
        });
    });

    return {
        wheel: result[0].midiTo,
        afterTouch: result[1].midiTo,
        controlPedal: result[2].midiTo,
    };
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
const ns2Morph12Bits = (buffer, offset, labelCallBack, forceDisabled) => {
    const rawMorphValue = [3];
    const result = [];

    const midi12FromOffset = buffer.readUInt16BE(offset + 5);
    const midi12From = (midi12FromOffset & 0x7ff8) >>> 3;

    const rawMorphWheelValue = buffer.readUInt32BE(offset - 2);
    const rawMorphAfterTouchValue = buffer.readUInt32BE(offset);
    const rawMorphControlPedalValue = buffer.readUInt32BE(offset + 2);
    rawMorphValue[0] = (rawMorphWheelValue & 0x3ffe) >>> 1; // wheel
    rawMorphValue[1] = (rawMorphAfterTouchValue & 0x1fff0) >>> 4; // after touch
    rawMorphValue[2] = (rawMorphControlPedalValue & 0xfff80) >>> 7; // control pedal

    rawMorphValue.forEach((rawValue) => {
        const rawOffsetValue = rawValue & 0x0fff;
        const polarity = (rawValue & 0x1000) !== 0;
        const offset = polarity ? rawOffsetValue - 4096 : rawOffsetValue; // 2^12
        let midiTo = midi12From + offset;
        if (midiTo < 0) {
            midiTo = 0;
        } else if (midiTo > 4095) {
            midiTo = 4095;
        }

        result.push({
            enabled: forceDisabled ? false : offset !== 0,
            midiTo: midiTo & 0x007f,
            tap: midiTo >>> 7,
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
                value: result[0].enabled ? labelCallBack(result[0].midiTo, result[0].tap) : "none",
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
                value: result[1].enabled ? labelCallBack(result[1].midiTo, result[1].tap) : "none",
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
                value: result[2].enabled ? labelCallBack(result[2].midiTo, result[2].tap) : "none",
            },
        },
    };
};

export { ns2Morph7Bits, ns2Morph4Bits, ns2MorphOrganDrawbar, ns2Morph12Bits };
