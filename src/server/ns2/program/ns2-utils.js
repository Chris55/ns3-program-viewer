import { ns2Morph7Bits } from "./ns2-morph.js";
import { ns2KbZoneMap } from "./ns2-mapping.js";
import { dBMap } from "../../common/nord-mapping.js";

/***
 * returns Keyboard Zone
 *
 * @param sectionEnabled
 * @param global
 * @param value
 * @returns {string|(string[]|boolean[])[]|(string|boolean[])[]}
 */
const ns2KbZone = (sectionEnabled, global, value) => {
    // section is not used
    if (!sectionEnabled) {
        return ["---", [false, false, false]];
    }

    // no split, full keyboard is used
    if (!global.split.enabled) {
        return ["000", [true, true, true]];
    }

    let result = ns2KbZoneMap.get(value);

    if (!result) {
        return ["---", [false, false, false]];
    }

    const splitPoints = {
        low: global.split.enabled && global.split.low.note !== "--",
        high: global.split.enabled && global.split.high.note !== "--",
    };

    if (splitPoints.low && !splitPoints.high) {
        // when only low is enabled, only "LO" (0), "UP HI" (3), and "LO UP HI" (5) are valid zones.
        if (value !== 0 && value !== 5) {
            result = ns2KbZoneMap.get(3); // "UP HI"
        }
    } else if (!splitPoints.low && splitPoints.high) {
        // when only high is enabled, only "UP" (2), "UP HI" (3), and "LO UP HI" (5) are valid zones.
        if (value !== 2 && value !== 5) {
            result = ns2KbZoneMap.get(3); // "UP HI"
        }
    }
    return result;
};

/***
 * returns Volume settings with Morph options
 *
 * @param buffer {Buffer}
 * @param midiFrom 7-bit from value
 * @param uint32MorphValues 32-bit raw value, wheel expected to be in b23-16, after touch in b15-8, and control pedal in b7-0.
 * @returns {{midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}}
 */
const ns2VolumeEx = (buffer, midiFrom, uint32MorphValues) => {
    const morph = ns2Morph7Bits(
        uint32MorphValues,
        midiFrom,
        (x) => {
            return dBMap.get(x);
        },
        false,
    );

    return {
        /***
         * Volume Midi value
         */
        midi: midiFrom,

        /***
         * Volume value
         */
        value: dBMap.get(midiFrom),

        /***
         * Default values status
         */
        isDefault: midiFrom === 127,

        /***
         * Morphing settings
         */
        morph: morph,
    };
};

/***
 * returns NS2 Octave Shift obj
 *
 * @param rawValue
 * @returns {{midi, isDefault: boolean, value: string}}
 */
const ns2OctaveShift = (rawValue) => {
    const offsetShiftOffset = -7;
    const octaveShift = rawValue + offsetShiftOffset;

    return {
        midi: rawValue,
        value: `${octaveShift >= 0 ? `+${octaveShift}` : `${octaveShift}`} oct`,
        isDefault: octaveShift === 0,
    };
};

/***
 * returns NS2 Boolean obj
 *
 * @param rawValue
 * @param defaultValue
 * @returns {{midi: (number), isDefault: boolean, enabled}}
 */
const ns2BooleanValue = (rawValue, defaultValue) => {
    return {
        midi: rawValue ? 127 : 0,
        enabled: rawValue,
        isDefault: rawValue === defaultValue,
    };
};

export { ns2KbZone, ns2VolumeEx, ns2OctaveShift, ns2BooleanValue };
