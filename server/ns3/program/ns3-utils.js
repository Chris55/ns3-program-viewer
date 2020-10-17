const mapping = require("./ns3-mapping");
const converter = require("../../common/converter");
const { dBMap } = require("../../common/nord-mapping");
const { ns3Morph } = require("./ns3-morph");

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
exports.ns3KnobDualValues = function (valueRange120) {
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
        fromValue: value,
    };
};

/***
 * returns Keyboard Zone
 *
 * @param sectionEnabled
 * @param global
 * @param value
 * @returns {string|(string[]|boolean[])[]|(string|boolean[])[]}
 */
exports.ns3KbZone = (sectionEnabled, global, value) => {
    if (!sectionEnabled) {
        return ["----", [false, false, false, false]];
    }

    if (!global.split.enabled) {
        return ["0000", [true, true, true, true]];
    }

    let result = mapping.ns3KbZoneMap.get(value);

    // on some program value contains an unexpected value
    // example:
    // https://www.norduserforum.com/post132371.html?hilit=os%20older%20version#p132371
    // Eye_Without_Face.ns3f
    // kb zone value is 10 !

    if (!result) {
        result = ["----", [false, false, false, false]];
    }
    const zones =
        (global.split.low.width === "Off" ? 0 : 1) +
        (global.split.mid.width === "Off" ? 0 : 1) +
        (global.split.high.width === "Off" ? 0 : 1);

    if (zones === 1) {

    }
    return result;
    // no split, full keyboard is used

    // section is not used
};

/***
 * returns Volume settings with Morph options
 *
 * @param buffer {Buffer}
 * @param offset
 * @returns {{midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}}
 */
exports.ns3VolumeEx = (buffer, offset) => {
    const organOffsetB6W = buffer.readUInt16BE(offset); // 0xB6
    const morphOffsetB7Ww = buffer.readUInt32BE(offset + 1); // 0xB7

    // From value
    const midi = (organOffsetB6W & 0x07f0) >>> 4;

    // To values
    const morph = ns3Morph(
        morphOffsetB7Ww >>> 4,
        midi,
        (x) => {
            return dBMap.get(x);
        },
        false
    );

    return {
        /***
         * Volume Midi value
         */
        midi: midi,

        /***
         * Volume value
         */
        value: dBMap.get(midi),

        /***
         * Morphing settings
         */
        morph: morph,
    };
};

/***
 * returns NS3 program location
 *
 * @param bankValue {number}
 * @param locationValue {number}
 * @returns {{bank: number, name: string, location: number, value: number}}
 */
exports.ns3ProgramLocation = (bankValue, locationValue) => {
    // bankValue should be between 0 and 15 (A...P)
    // locationValue should be between 0 and 24 (11,12...,54,55)
    // but on older program coding was maybe different
    // example in v3.00
    // https://www.norduserforum.com/viewtopic.php?t=14414
    // Uptown_Funk.ns3f location value = 45 !!!
    const valid = bankValue <= 15 && locationValue <= 24;
    const locationDigit1 = (Math.trunc(locationValue / 5) + 1) * 10;
    const locationDigit2 = (locationValue % 5) + 1;
    return {
        bank: bankValue,
        location: locationValue,
        name: valid ? (String.fromCharCode(65 + bankValue) + ":" + (locationDigit1 + locationDigit2)) : "",
        value: bankValue * 25 + locationValue,
    };
}
