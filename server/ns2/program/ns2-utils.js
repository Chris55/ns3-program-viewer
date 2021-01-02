const converter = require("../../common/converter");
const { ns2Morph7Bits } = require("./ns2-morph");
const { ns2KbZoneMap } = require("./ns2-mapping");
const { dBMap } = require("../../common/nord-mapping");

/***
 * returns Keyboard Zone
 *
 * @param sectionEnabled
 * @param global
 * @param value
 * @returns {string|(string[]|boolean[])[]|(string|boolean[])[]}
 */
exports.ns2KbZone = (sectionEnabled, global, value) => {
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
exports.ns2VolumeEx = (buffer, midiFrom, uint32MorphValues) => {
    const morph = ns2Morph7Bits(
        uint32MorphValues,
        midiFrom,
        (x) => {
            return dBMap.get(x);
        },
        false
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
         * Morphing settings
         */
        morph: morph,
    };
};
