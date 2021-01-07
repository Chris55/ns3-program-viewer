const mapping = require("./ns3-mapping");
const { zeroPad } = require("../../common/converter");
const { dBMap } = require("../../common/nord-mapping");
const { ns3Morph7Bits } = require("./ns3-morph");

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
 * @returns {{leftMidi: number, leftValue: string, rightValue: string, rightMidi: number}}
 */
exports.ns3KnobDualValues = function (valueRange120) {
    const valueRange127 = Math.ceil((valueRange120 * 127) / 120);
    const value = mapping.ns3SynthModulation120Map.get(valueRange120);
    let leftLabel = "0.0";
    let rightLabel = "0.0";
    let leftMidi = 0;
    let rightMidi = 0;
    if (valueRange120 === 60) {
        leftMidi = valueRange127;
        rightMidi = valueRange127;
    } else if (valueRange120 < 60) {
        leftLabel = value;
        leftMidi = valueRange127;
    } else {
        rightLabel = value;
        rightMidi = valueRange127;
    }
    return {
        leftMidi: leftMidi,
        rightMidi: rightMidi,
        leftLabel: leftLabel,
        rightLabel: rightLabel,
        fromValue: value,
        fromValueRange120: valueRange120,
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

    const splitPoints = {
        low: global.split.enabled && global.split.low.width !== "Off",
        mid: global.split.enabled && global.split.mid.width !== "Off",
        high: global.split.enabled && global.split.high.width !== "Off",
    };

    if (splitPoints.low && !splitPoints.mid && splitPoints.high) {
        // when only low and high are enabled, the middle kb zone corresponds to two LEDs
        // "-O--" or "--O-" are invalid zones, forced to "-OO-"
        // some programs have this issue, example:
        // https://www.norduserforum.com/post132371.html?hilit=os%20older%20version#p132371
        // Eye_Without_Face.ns3f (Piano Panel A)
        if (value === 1 || value === 2) {
            result = mapping.ns3KbZoneMap.get(5);
        }
    } else if (!splitPoints.low && splitPoints.mid && !splitPoints.high) {
        // when only middle split point is enabled, "O---", "-O--, "--O-", and "---O" are invalid zones.
        // value is forced to "OO--" (or "--OO")
        // some programs have this issue, example:
        // https://www.norduserforum.com/viewtopic.php?t=14414
        // uptown_funk.ns3f (Synth Panel A&B)
        if (value === 0 || value === 1) {
            result = mapping.ns3KbZoneMap.get(4); // "OO--"
        } else if (value === 2 || value === 3) {
            result = mapping.ns3KbZoneMap.get(6); // "--OO"
        }
    } else if (splitPoints.low && !splitPoints.mid && !splitPoints.high) {
        // when only low split point is enabled, only "O---", "-OOO", and "OOOO" are valid zones.
        if (value !== 0 && value !== 9) {
            result = mapping.ns3KbZoneMap.get(8); // "-OOO"
        }
    } else if (!splitPoints.low && !splitPoints.mid && splitPoints.high) {
        // when only high split point is enabled, only "---O", "OOO-", and "OOOO" are valid zones.
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
    const morph = ns3Morph7Bits(
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
        name: valid ? String.fromCharCode(65 + bankValue) + ":" + (locationDigit1 + locationDigit2) : "",
        value: bankValue * 25 + locationValue,
    };
};

/***
 * returns Synth Preset details
 *
 * @param buffer {Buffer}
 * @param offset {number}
 * @returns {{userPresetLocation: number, samplePresetLocation: number, presetName: string}}
 */
exports.ns3SynthPreset = (buffer, offset) => {
    const offset57W = buffer.readUInt16BE(offset);
    const location = (offset57W & 0x3ff0) >>> 4;

    const userPreset = location < 400;
    const userPresetLocationValue = location >= 400 ? 0 : location;
    const userPresetLocationBank = Math.trunc(userPresetLocationValue / 50) + 1;
    const userPresetLocationLoc = (userPresetLocationValue % 50) + 1;
    const userPresetLocationName = userPresetLocationBank + ":" + zeroPad(userPresetLocationLoc, 2);

    const samplePresetLocationValue = location >= 400 ? location - 400 : 0;
    const samplePresetLocationName = (samplePresetLocationValue + 1).toString();

    //
    // " abcdefghijklmno"
    // 58 59 5a 5b 5c 5d 5e 5f 60 61 62 63 64 65 66 67 68 69 6a 6b 6c
    // 0E 36 26 11 FE 76 66 56 3E B6 A6 96 7E F6 E6 D6 B7 FF FF FF F7

    // "abcdefghijklmnop"
    // 58 59 5a 5b 5c 5d 5e 5f 60 61 62 63 64 65 66 67 68 69 6a 6b 6c
    // 0E 46 36 26 0E 86 76 66 4E C6 B6 A6 8F 06 F6 E6 C7 FF FF FF F7
    //   d  c  b  a

    let name = "";
    for (let i = 0; i < 22; i++) {
        const four = Math.trunc(i / 4) * 4;
        const pos = four + 3 - (i % 4);
        const value = buffer.readUInt16BE(offset + 1 + pos);
        let ch;
        switch (i % 4) {
            case 0:
                ch = ((value & 0x0ff0) >>> 4) + 1;
                break;
            case 1:
            case 2:
                ch = (value & 0x0ff0) >>> 4;
                break;
            case 3:
                ch = (value & 0x07f0) >>> 4;
                break;
        }
        if (ch === 0) {
            break;
        }
        if (ch < 255 && ch !== 127) {
            name += String.fromCharCode(ch);
        }
    }

    return {
        /**
         * Offset in file: 0x57 (b5-0) and 0x58 (b7-4)
         *
         * @example
         * Preset location:
         * 0-399:   user preset
         * 400-799: sample preset
         *
         * @module NS3 Synth Preset Location
         */
        location: location,
        userPreset: userPreset,
        userPresetLocationValue: userPresetLocationValue,
        userPresetLocationName: userPresetLocationName,
        samplePresetLocationValue: samplePresetLocationValue,
        samplePresetLocationName: samplePresetLocationName,
        /**
         * Offset in file: 0x58 (b3-0) to 0x6E (b7-4)
         *
         * @example
         * User Preset names are limited to 16 characters,
         * Sample Preset name are up to 22 characters.
         *
         * character 1: ((offset + 3) & 0xff) + 1
         * character 2: (offset + 2) & 0xff
         * character 3: (offset + 1) & 0xff
         * character 4: (offset + 0) & 0x7f
         * character 5: ((offset + 3 + 4) & 0xff) + 1
         * character 6: (offset + 2 + 4) & 0xff
         * . . .
         *
         * @module NS3 Synth Preset Name
         */
        presetName: name.trim(),
    };
};
