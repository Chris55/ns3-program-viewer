const converter = require("../../common/converter");
const { ns2Morph } = require("./ns2-morph");
const { ns2KbZoneMap } = require("./ns2-mapping");
const { dBMap } = require("../../common/nord-mapping");

/***
 * returns Keyboard Zone
 *
 * @param sectionEnabled
 * @param splitEnabled
 * @param value
 * @returns {string|(string[]|boolean[])[]|(string|boolean[])[]}
 */
exports.ns2KbZone = (sectionEnabled, splitEnabled, value) => {
    if (sectionEnabled) {
        if (splitEnabled) {
            return ns2KbZoneMap.get(value);
        }
        // no split, full keyboard is used
        return ns2KbZoneMap.get(5);
    }
    // section is not used
    return ["", [false, false, false]];
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
    const morph = ns2Morph(
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
