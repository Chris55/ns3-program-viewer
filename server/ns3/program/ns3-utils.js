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

    // section is not used
    if (!sectionEnabled) {
        return ["----", [false, false, false, false]];
    }

    // no split, full keyboard is used
    if (!global.split.enabled) {
        return ["0000", [true, true, true, true]];
    }

    let result = mapping.ns3KbZoneMap.get(value);

    // on some program value contains an unexpected value
    // example:
    // https://www.norduserforum.com/post132371.html?hilit=os%20older%20version#p132371
    // Eye_Without_Face.ns3f
    // extern kb zone value is 10 !

    if (!result) {
        return ["----", [false, false, false, false]];
    }

    const zones = {
        low: global.split.enabled && global.split.low.width !== "Off",
        mid: global.split.enabled && global.split.mid.width !== "Off",
        high: global.split.enabled && global.split.high.width !== "Off",
    };

    if (zones.low && !zones.mid && zones.high) {
        // when only low and high split are enabled, the middle zone corresponds to two LEDs
        // "-O--" or "--O-" are invalid zones, forced to "-OO-"
        // some programs have this issue, example:
        // https://www.norduserforum.com/post132371.html?hilit=os%20older%20version#p132371
        // Eye_Without_Face.ns3f (Piano Panel A)
        if (value === 1 || value === 2) {
            result = mapping.ns3KbZoneMap.get(5);
        }
    } else if (!zones.low && zones.mid && !zones.high) {
        // when only middle zone is enabled, "O---", "-O--, "--O-", and "---O" are invalid zones.
        // value is forced to "OO--" (or "--OO")
        // some programs have this issue, example:
        // https://www.norduserforum.com/viewtopic.php?t=14414
        // uptown_funk.ns3f (Synth Panel A&B)
        if (value === 0 || value === 1) {
            result = mapping.ns3KbZoneMap.get(4); // "OO--"
        } else if (value === 2 || value === 3) {
            result = mapping.ns3KbZoneMap.get(6); // "--OO"
        }
    } else if (zones.low && !zones.mid && !zones.high) {
        // when only low zone is enabled, only "O---", "-OOO", and "OOOO" are valid zones.
        if (value !== 0 && value !== 9) {
            result = mapping.ns3KbZoneMap.get(8); // "-OOO"
        }
    } else if (!zones.low && !zones.mid && zones.high) {
        // when only high zone is enabled, only "---O", "OOO-", and "OOOO" are valid zones.
        if (value !== 3 && value !== 9) {
            result = mapping.ns3KbZoneMap.get(7); // "OOO-"
        }
    }
    return result;
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
