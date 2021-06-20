const mapping = require("./ns2-mapping");
const { ns2ProgramOutputMap } = require("./ns2-mapping");
const { formatOrganDrawbars } = require("../../common/converter");
const { ns2MorphOrganDrawbar } = require("./ns2-morph");
const { ns2KbZone, ns2OctaveShift, ns2VolumeEx, ns2BooleanValue } = require("./ns2-utils");

/***
 * return B3 and Vox Drawbars Preset and Morph
 *
 * @param buffer {Buffer}
 * @param offset {number}
 * @param valueOn4Bits {boolean}
 * @param type {string} B3, Vox, Farfisa
 * @returns {number[]}
 */
const getDrawbars = function (buffer, offset, valueOn4Bits, type) {
    let d1, d2, d3, d4, d5, d6, d7, d8, d9;
    let m1, m2, m3, m4, m5, m6, m7, m8, m9;

    if (valueOn4Bits) {
        // B3 & Vox drawbars value are coded on 4-bits (morph on 5-bits)
        const offset1_5f = offset; // 0x5f
        const offset2_61 = offset + 2; // 0x61
        const offset3_63 = offset + 4; // 0x63
        const offset4_66 = offset + 7; // 0x66
        const offset5_68 = offset + 9; // 0x68
        const offset6_6a = offset + 11; // 0x6a
        const offset7_6d = offset + 14; // 0x6d
        const offset8_6f = offset + 16; // 0x6f
        const offset9_72 = offset + 19; // 0x72

        d1 = (buffer.readUInt16BE(offset1_5f + 1) & 0x01e0) >>> 5;
        d2 = (buffer.readUInt16BE(offset2_61 + 1) & 0x003c) >>> 2;
        d3 = (buffer.readUInt16BE(offset3_63 + 2) & 0x0780) >>> 7;
        d4 = (buffer.readUInt16BE(offset4_66 + 1) & 0x00f0) >>> 4;
        d5 = (buffer.readUInt16BE(offset5_68 + 1) & 0x001e) >>> 1;
        d6 = (buffer.readUInt16BE(offset6_6a + 2) & 0x03c0) >>> 6;
        d7 = (buffer.readUInt16BE(offset7_6d + 1) & 0x0078) >>> 3;
        d8 = (buffer.readUInt16BE(offset8_6f + 1) & 0x000f) >>> 0;
        d9 = (buffer.readUInt16BE(offset9_72 + 1) & 0x01e0) >>> 5;

        m1 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset1_5f - 2) >>> 1, d1, true);
        m2 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset2_61 - 1) >>> 6, d2, true);
        m3 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset3_63 - 1) >>> 3, d3, true);
        m4 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset4_66 - 2) >>> 0, d4, true);
        m5 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset5_68 - 1) >>> 5, d5, true);
        m6 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset6_6a - 1) >>> 2, d6, true);
        m7 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset7_6d - 1) >>> 7, d7, true);
        m8 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset8_6f - 1) >>> 4, d8, true);
        m9 = ns2MorphOrganDrawbar(buffer.readUInt32BE(offset9_72 - 2) >>> 1, d9, true);
    } else {
        // Farfisa drawbars value are coded on 1-bit only (morph on 2-bits)
        const offset1_8c = offset - 1; // 0x8c
        const offset2_8d = offset; // 0x8d
        const offset3_8e = offset + 1; // 0x8e
        const offset4_8f = offset + 2; // 0x8f
        const offset5_90 = offset + 3; // 0x90
        const offset6_91 = offset + 4; // 0x91
        const offset7_92 = offset + 5; // 0x92
        const offset8_93 = offset + 6; // 0x93
        const offset9_94 = offset + 7; // 0x94

        d1 = (buffer.readUInt16BE(offset1_8c) & 0x0002) >>> 1;
        d2 = (buffer.readUInt16BE(offset2_8d) & 0x0004) >>> 2;
        d3 = (buffer.readUInt16BE(offset3_8e) & 0x0008) >>> 3;
        d4 = (buffer.readUInt16BE(offset4_8f) & 0x0010) >>> 4;
        d5 = (buffer.readUInt16BE(offset5_90) & 0x0020) >>> 5;
        d6 = (buffer.readUInt16BE(offset6_91) & 0x0040) >>> 6;
        d7 = (buffer.readUInt16BE(offset7_92) & 0x0080) >>> 7;
        d8 = (buffer.readUInt16BE(offset8_93) & 0x0100) >>> 8;
        d9 = (buffer.readUInt16BE(offset9_94) & 0x0200) >>> 9;

        m1 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset1_8c) >>> 2, d1, false);
        m2 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset2_8d) >>> 3, d2, false);
        m3 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset3_8e) >>> 4, d3, false);
        m4 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset4_8f) >>> 5, d4, false);
        m5 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset5_90) >>> 6, d5, false);
        m6 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset6_91) >>> 7, d6, false);
        m7 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset7_92) >>> 8, d7, false);
        m8 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset8_93) >>> 9, d8, false);
        m9 = ns2MorphOrganDrawbar(buffer.readUInt16BE(offset9_94) >>> 10, d9, false);
    }

    const preset = [d1, d2, d3, d4, d5, d6, d7, d8, d9];
    const morphWheel = [m1.wheel, m2.wheel, m3.wheel, m4.wheel, m5.wheel, m6.wheel, m7.wheel, m8.wheel, m9.wheel];
    hideIfEqual(preset, morphWheel);

    const morphWheelPreset = morphWheel.join("");

    const morphAfterTouch = [
        m1.afterTouch,
        m2.afterTouch,
        m3.afterTouch,
        m4.afterTouch,
        m5.afterTouch,
        m6.afterTouch,
        m7.afterTouch,
        m8.afterTouch,
        m9.afterTouch,
    ];
    hideIfEqual(preset, morphAfterTouch);
    const morphAfterTouchPreset = morphAfterTouch.join("");

    const morphControlPedal = [
        m1.controlPedal,
        m2.controlPedal,
        m3.controlPedal,
        m4.controlPedal,
        m5.controlPedal,
        m6.controlPedal,
        m7.controlPedal,
        m8.controlPedal,
        m9.controlPedal,
    ];
    hideIfEqual(preset, morphControlPedal);
    const morphControlPedalPreset = morphControlPedal.join("");

    return {
        value: formatOrganDrawbars(preset.join(""), type),
        morph: {
            wheel: {
                enabled: morphWheelPreset !== "---------",
                to: {
                    value: formatOrganDrawbars(morphWheelPreset, type),
                },
            },
            afterTouch: {
                enabled: morphAfterTouchPreset !== "---------",
                to: {
                    value: formatOrganDrawbars(morphAfterTouchPreset, type),
                },
            },
            controlPedal: {
                enabled: morphControlPedalPreset !== "---------",
                to: {
                    value: formatOrganDrawbars(morphControlPedalPreset, type),
                },
            },
        },
    };
};

const hideIfEqual = (from, to) => {
    to.forEach((d, i) => {
        if (from[i] === to[i]) {
            to[i] = "-";
        }
    });
};

/***
 * returns Organ section
 *
 * @class
 * @ignore
 * @param buffer {Buffer}
 * @param id {number}
 * @param commonOffset {number}
 * @param panelOffset {number}
 * @param global
 * @returns {{volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, output: {value: string}, pitchStick: {enabled: boolean}, preset2: {drawbars: number[], percussion: {enabled: boolean}, enabled: boolean, vibrato: {enabled: boolean}}, kbZone: {array, value}, preset1: {drawbars: number[], percussion: {volumeSoft: {enabled: boolean}, harmonicThird: {enabled: boolean}, decayFast: {enabled: boolean}, enabled: boolean}, enabled: boolean, vibrato: {mode: {label: string, value: string}, enabled: boolean}}, sustainPedal: {enabled: boolean}, type: {value: string}, octaveShift: {value: number}, enabled: boolean, latchPedal: {enabled: boolean}, kbGate: {enabled: boolean}}}
 */
exports.ns2Organ = (buffer, id, commonOffset, panelOffset, global) => {
    // common
    const organOffset30 = buffer.readUInt8(0x30 + commonOffset);
    const organOffset35 = buffer.readUInt8(0x35 + commonOffset);
    const organOffset34 = buffer.readUInt8(0x34 + commonOffset);
    const organOffset37 = buffer.readUInt8(0x37 + commonOffset);
    const organOffset39 = buffer.readUInt8(0x39 + commonOffset);

    // slot specific
    const organOffset43 = buffer.readUInt8(0x43 + panelOffset);
    const organOffset43Ww = buffer.readUInt32BE(0x43 + panelOffset);
    const organOffset46 = buffer.readUInt8(0x46 + panelOffset);
    const organOffset47 = buffer.readUInt8(0x47 + panelOffset);
    const organOffset59 = buffer.readUInt8(0x59 + panelOffset);
    const organOffset5c = buffer.readUInt8(0x5c + panelOffset);
    const organOffset5d = buffer.readUInt8(0x5d + panelOffset);
    const organOffset5e = buffer.readUInt8(0x5e + panelOffset);
    const organOffset74 = buffer.readUInt8(0x74 + panelOffset);
    const organOffsetAb = buffer.readUInt8(0xab + panelOffset);

    const organTypeValue = (organOffset34 & 0xc0) >>> 6;
    const organType = mapping.ns2OrganTypeMap.get(organTypeValue);
    const organTypeIsB3 = organTypeValue === 0;
    const organTypeIsVox = organTypeValue === 1;
    const organTypeIsFarfisa = organTypeValue === 2;

    let organPreset2Enabled = false;

    let vibratoPreset1 = false;
    let vibratoPreset2 = false;

    let percussionPreset1 = false;
    let percussionPreset2 = false;

    let organVibratoModeValue;
    let organVibratoMode;
    let vibratoChorusModeLabel = "Vibrato";

    let drawbars1;
    let drawbars2;

    if (organTypeIsB3) {
        /**
         * Offset in file: 0x5c (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ B3 Preset 2
         */
        organPreset2Enabled = (organOffset5c & 0x80) !== 0;
        /**
         * Offset in file: 0x74 (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ B3 Preset 1 Vibrato Chorus
         */
        vibratoPreset1 = (organOffset74 & 0x10) !== 0;
        /**
         * Offset in file: 0x74 (b3)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ B3 Preset 1 Percussion
         */
        percussionPreset1 = (organOffset74 & 0x08) !== 0;
        /**
         * Offset in file: 0xab (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ B3 Preset 2 Vibrato Chorus
         */
        vibratoPreset2 = (organOffsetAb & 0x10) !== 0;
        /**
         * Offset in file: 0xab (b3)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ B3 Preset 2 Percussion
         */
        percussionPreset2 = (organOffsetAb & 0x08) !== 0;
        /**
         * Offset in file: 0x35 (b7-5)
         *
         * @example
         * #include ns2OrganB3VibratoModeMap
         *
         * @module NS2 Organ B3 Vibrato Mode
         */
        organVibratoModeValue = (organOffset35 & 0xe0) >>> 5;
        organVibratoMode = mapping.ns2OrganB3VibratoModeMap.get(organVibratoModeValue) || "";
        vibratoChorusModeLabel =
            organVibratoMode.length > 1 && organVibratoMode.charAt(0) === "V" ? "Vibrato" : "Chorus";

        drawbars1 = getDrawbars(buffer, 0x5f + panelOffset, true, organType);
        drawbars2 = getDrawbars(buffer, 0x96 + panelOffset, true, organType);
    } else if (organTypeIsVox) {
        /**
         * Offset in file: 0x5d (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ Vox Preset 2
         */
        organPreset2Enabled = (organOffset5d & 0x80) !== 0;
        /**
         * Offset in file: 0x37 (b4)
         *
         * @example
         * O = off, 1 = on
         * (common for Preset I & II)
         *
         * @module NS2 Organ Vox Vibrato On
         */
        vibratoPreset1 = (organOffset37 & 0x10) !== 0;
        vibratoPreset2 = vibratoPreset1;
        /**
         * Offset in file: 0x37 (b6-5)
         *
         * @example
         * #include ns2OrganVoxVibratoModeMap
         *
         * @module NS2 Organ Vox Vibrato Mode
         */
        organVibratoModeValue = (organOffset37 & 0x60) >>> 5;
        organVibratoMode = mapping.ns2OrganVoxVibratoModeMap.get(organVibratoModeValue);

        drawbars1 = getDrawbars(buffer, 0x76 + panelOffset, true, organType);
        drawbars2 = getDrawbars(buffer, 0xad + panelOffset, true, organType);
    } else {
        //if (organTypeIsFarfisa) { no test to be sure that drawbars are initialized.
        /**
         * Offset in file: 0x5e (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ Farfisa Preset 2
         */
        organPreset2Enabled = (organOffset5e & 0x80) !== 0;
        /**
         * Offset in file: 0x39 (b4)
         *
         * @example
         * O = off, 1 = on
         * (common for Preset I & II)
         *
         * @module NS2 Organ Farfisa Vibrato On
         */
        vibratoPreset1 = (organOffset39 & 0x10) !== 0;
        vibratoPreset2 = vibratoPreset1;
        /**
         * Offset in file: 0x39 (b6-5)
         *
         * @example
         * #include ns2OrganFarfisaVibratoModeMap
         *
         * @module NS2 Organ Farfisa Vibrato Mode
         */
        organVibratoModeValue = (organOffset39 & 0x60) >>> 5;
        organVibratoMode = mapping.ns2OrganFarfisaVibratoModeMap.get(organVibratoModeValue);

        drawbars1 = getDrawbars(buffer, 0x8d + panelOffset, false, organType);
        drawbars2 = getDrawbars(buffer, 0xc4 + panelOffset, false, organType);
    }

    const organEnabled = (organOffset43 & 0x80) !== 0;
    const organKbZoneEnabled =
        id === 0
            ? organEnabled
            : organEnabled && (global.dualKeyboard.enabled === false || global.dualKeyboard.value !== "Organ");

    const organKbZone = ns2KbZone(organKbZoneEnabled, global, (organOffset47 & 0xe0) >>> 5);

    const routing = ns2ProgramOutputMap.get((organOffset59 & 0x0c) >>> 2);

    return {
        /**
         * Offset in file: 0x43 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ On
         */
        enabled: organEnabled,

        /**
         * Offset in file: 0x47 (b7-5)
         *
         * @example
         * 0 = LO
         * 1 = LO UP
         * 2 = UP
         * 3 = UP HI
         * 4 = HI
         * 5 = LO UP HI
         *
         * @module NS2 Organ Kb Zone
         */
        kbZone: {
            array: organKbZone[1],
            value: organKbZone[0],
        },
        /**
         * Offset in file: 0x46 (b6-0)
         *
         * @example
         * Volume:
         * #include dBMap
         *
         * Morph Wheel:
         * offset in file 0x43 (b6-0) and 0x44 (b7)
         *
         * Morph After Touch:
         * offset in file 0x44 (b6-0) and 0x45 (b7)
         *
         * Morph Control Pedal:
         * offset in file 0x45 (b6-0) and 0x46 (b7)
         *
         * @module NS2 Organ Volume
         */
        volume: ns2VolumeEx(buffer, organOffset46 & 0x7f, organOffset43Ww >>> 7),

        /**
         * Offset in file: 0x47 (b4-1)
         *
         * @example
         * Octave Shift = value - 7
         *
         * @module NS2 Organ Octave Shift
         */
        octaveShift: ns2OctaveShift((organOffset47 & 0x1e) >>> 1),

        /**
         * Offset in file: 0x30 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ Pitch Stick
         */
        pitchStick: ns2BooleanValue((organOffset30 & 0x40) !== 0, false),

        /**
         * Offset in file: 0x47 (b0)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ Sustain Pedal
         */
        sustainPedal: ns2BooleanValue((organOffset47 & 0x01) !== 0, false),

        /**
         * Offset in file: 0x59 (b1)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ Latch Pedal
         */
        latchPedal: ns2BooleanValue((organOffset59 & 0x02) !== 0, false),

        /**
         * Offset in file: 0x59 (b0)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Organ Kb Gate
         */
        kbGate: ns2BooleanValue((organOffset59 & 0x01) !== 0, false),

        /**
         * Offset in file: 0x34 (b7-6)
         *
         * @example
         * #include ns2OrganTypeMap
         *
         * @module NS2 Organ Model
         */
        type: {
            midi: organTypeValue,
            value: organType,
            isDefault: organTypeValue === 0,
        },

        preset1: {
            enabled: !organPreset2Enabled,

            /**
             * @example
             *
             * ORGAN B3 DRAWBARS Preset I
             * all B3 Drawbars are 4-Bit fields, values from 0 - 8
             *
             * Organ B3 Sub (drawbar 1)
             * offset in file 0x60 (b0) and 0x61 (b7-5)
             * 	Morph Wheel offset in file 0x5f (b7-3)
             * 	Morph AT    offset in file 0x5f (b2-0) and 0x60 (b7-6)
             * 	Morph Pedal offset in file 0x60 (b5-1)
             *
             * Organ B3 Sub3 (drawbar 2)
             * offset in file 0x63 (b5-2)
             *     Morph Wheel offset in file 0x61 (b4-0)
             * 	Morph AT    offset in file 0x62 (b7-3)
             * 	Morph Pedal offset in file 0x62 (b2-0) and 0x63 (b7-6)
             *
             * Organ B3 Fund (drawbar 3)
             * offset in file 0x65 (b2-0) and 0x66 (b7)
             * 	Morph Wheel offset in file 0x63 (b1-0) and 0x64 (b7-5)
             * 	Morph AT    offset in file 0x64 (b4-0)
             * 	Morph Pedal offset in file 0x65 (b7-3)
             *
             * Organ B3 2nd (drawbar 4)
             * offset in file 0x68 (b7-4)
             * 	Morph Wheel offset in file 0x66 (b6-2)
             * 	Morph AT    offset in file 0x66 (b1-0) and 0x67 (b7-5)
             * 	Morph Pedal offset in file 0x67 (b4-0)
             *
             * Organ B3 3rd (drawbar 5)
             * offset in file 0x6a (b4-1)
             * 	Morph Wheel offset in file 0x68 (b3-0) and 0x69 (b7)
             * 	Morph AT    offset in file 0x69 (b6-2)
             * 	Morph Pedal offset in file 0x69 (b1-0) and 0x6a (b7-5)
             *
             * Organ B3 4th (drawbar 6)
             * offset in file 0x6c (b1-0) and 0x6d (b7-6)
             * 	Morph Wheel offset in file 0x6a (b0) and 0x6b (b7-4)
             * 	Morph AT    offset in file 0x6b (b3-0) and 0x6c (b7)
             * 	Morph Pedal offset in file 0x6c (b6-2)
             *
             * Organ B3 5th (drawbar 7)
             * offset in file 0x6f (b6-3)
             * 	Morph Wheel offset in file 0x6d (b5-1)
             * 	Morph AT    offset in file 0x6d (b0) and 0x6e (b7-4)
             * 	Morph Pedal offset in file 0x6e (b3-0) and 0x6f (b7)
             *
             * Organ B3 6th (drawbar 8)
             * offset in file 0x71 (b3-0)
             * 	Morph Wheel offset in file 0x6f (b2-0) and 0x70 (b7-6)
             * 	Morph AT    offset in file 0x70 (b5-1)
             * 	Morph Pedal offset in file 0x70 (b0) and 0x71 (b7-4)
             *
             * Organ B3 8th (drawbar 9)
             * offset in file 0x73 (b0) and 0x74 (b7-5)
             * 	Morph Wheel offset in file 0x72 (b7-3)
             * 	Morph AT    offset in file 0x72 (b2-0) and 0x73 (b7-6)
             * 	Morph Pedal offset in file 0x73 (b5-1)
             *
             *
             * ORGAN VOX DRAWBARS Preset I
             *
             * Organ Vox 16' (drawbar 1)
             * offset in file 0x77 (b0) and 0x78 (b7-5)
             * Morph Wheel offset in file 0x76 (b7-3)
             * Morph AT    offset in file 0x76 (b2-0) and 0x77 (b7-6)
             * Morph Pedal offset in file 0x77 (b6-1)
             *
             * Organ Vox 8' (drawbar 2)
             * offset in file 0x7a (b5-2)
             * Morph Wheel offset in file 0x78 (b4-0)
             * Morph AT    offset in file 0x79 (b7-3)
             * Morph Pedal offset in file 0x79 (b2-0) and 0x7a (b7-6)
             *
             * Organ Vox 4' (drawbar 3)
             * offset in file 0x7c (b2-0) and 0x7d (b7)
             * Morph Wheel offset in file 0x7a (b1-0) and 0x7b (b7-5)
             * Morph AT    offset in file 0x7b (b4-0)
             * Morph Pedal offset in file 0x7c (b7-3)
             *
             * Organ Vox 2' (drawbar 4)
             * offset in file 0x7f (b7-4)
             * Morph Wheel offset in file 0x7d (b6-2)
             * Morph AT    offset in file 0x7d (b1-0) and 0x7e (b7-5)
             * Morph Pedal offset in file 0x7e (b4-0)
             *
             * Organ Vox II (drawbar 5)
             * offset in file 0x81 (b4-1)
             * Morph Wheel offset in file 0x7f (b3-0) and 0x80 (b7)
             * Morph AT    offset in file 0x80 (b6-2)
             * Morph Pedal offset in file 0x80 (b1-0) and 0x81 (b7-5)
             *
             * Organ Vox III (drawbar 6)
             * offset in file 0x83 (b1-0) and 0x84 (b7-6)
             * Morph Wheel offset in file 0x81 (b0) and 0x82 (b7-4)
             * Morph AT    offset in file 0x82 (b3-0) and 0x83 (b7)
             * Morph Pedal offset in file 0x83 (b6-2)
             *
             * Organ Vox IV (drawbar 7)
             * offset in file 0x86 (b6-3)
             * Morph Wheel offset in file 0x84 (b5-1)
             * Morph AT    offset in file 0x84 (b0) and 0x85 (b7-4)
             * Morph Pedal offset in file 0x85 (b3-0) and 0x86 (b7)
             *
             * Organ Vox SIN (drawbar 8)
             * offset in file 0x88 (b3-0)
             * Morph Wheel offset in file 0x86 (b2-0) and 0x87 (b7-6)
             * Morph AT    offset in file 0x87 (b5-1)
             * Morph Pedal offset in file 0x87 (b0) and 0x88 (b7-4)
             *
             * Organ Vox TRI (drawbar 9)
             * offset in file 0x8a (b0) and 0x8b (b7-5)
             * Morph Wheel offset in file 0x89 (b7-3)
             * Morph AT    offset in file 0x89 (b2-0) and 0x8a (b7-6)
             * Morph Pedal offset in file 0x8a (b5-1)
             *
             *
             * ORGAN FARFISA DRAWBARS Preset I
             * Farfisa drawbars are 1-Bit values, ON or OFF
             *
             * Organ Farfisa Bass16 (drawbar 1)
             * offset in file 0x8d (b1)
             * Morph Wheel offset in file 0x8d (b7-6)
             * Morph AT    offset in file 0x8d (b5-4)
             * Morph Pedal offset in file 0x8d (b3-2)
             *
             * Organ Farfisa Str16 (drawbar 2)
             * offset in file 0x8e (b2)
             * Morph Wheel offset in file 0x8d (b0) and 0x8e (b7)
             * Morph AT    offset in file 0x8e (b6-5)
             * Morph Pedal offset in file 0x8e (b4-3)
             *
             * Organ Farfisa Flu8 (drawbar 3)
             * offset in file 0x8f (b3)
             * Morph Wheel offset in file 0x8e (b1-0)
             * Morph AT    offset in file 0x8f (b7-6)
             * Morph Pedal offset in file 0x8f (b5-4)
             *
             * Organ Farfisa Oboe8 (drawbar 4)
             * offset in file 0x90 (b4)
             * Morph Wheel offset in file 0x8f (b2-1)
             * Morph AT    offset in file 0x8f (b0) and 0x90 (b7)
             * Morph Pedal offset in file 0x90 (b6-5)
             *
             * Organ Farfisa Trump8 (drawbar 5)
             * offset in file 0x91 (b5)
             * Morph Wheel offset in file 0x90 (b3-2)
             * Morph AT    offset in file 0x90 (b1-0)
             * Morph Pedal offset in file 0x91 (b7-6)
             *
             * Organ Farfisa Str8 (drawbar 6)
             * offset in file 0x92 (b6)
             * Morph Wheel offset in file 0x91 (b4-3)
             * Morph AT    offset in file 0x91 (b2-1)
             * Morph Pedal offset in file 0x91 (b0) and 0x92 (b7)
             *
             * Organ Farfisa Flu4 (drawbar 7)
             * offset in file 0x93 (b7)
             * Morph Wheel offset in file 0x92 (b5-4)
             * Morph AT    offset in file 0x92 (b3-2)
             * Morph Pedal offset in file 0x92 (b1-0)
             *
             * Organ Farfisa Str4 (drawbar 8)
             * offset in file 0x93 (b0)
             * Morph Wheel offset in file 0x93 (b6-5)
             * Morph AT    offset in file 0x93 (b4-3)
             * Morph Pedal offset in file 0x93 (b2-1)
             *
             * Organ Farfisa 2 2/3 (drawbar 9)
             * offset in file 0x94 (b1)
             * Morph Wheel offset in file 0x94 (b7-6)
             * Morph AT    offset in file 0x94 (b5-4)
             * Morph Pedal offset in file 0x94 (b3-2)
             *
             * @module NS2 Organ Drawbars Preset 1
             */
            drawbars: drawbars1,

            vibrato: {
                enabled: vibratoPreset1,

                isDefault: vibratoPreset1 === false,

                mode: {
                    value: organVibratoMode,

                    isDefault: organVibratoMode === "C3",

                    label: vibratoChorusModeLabel,
                },
            },

            /***
             * Organ Percussion Options
             */
            percussion: {
                enabled: percussionPreset1,

                isDefault: percussionPreset1 === false,

                /**
                 * Offset in file: 0x35 (b2)
                 *
                 * @example
                 * O = on, 1 = off
                 *
                 * only if Organ type is B3
                 *
                 * @module NS2 Organ B3 Volume Soft
                 */
                volumeSoft: ns2BooleanValue(organTypeIsB3 && !((organOffset35 & 0x04) !== 0), false),

                /**
                 * Offset in file: 0x35 (b3)
                 *
                 * @example
                 * O = off, 1 = on
                 *
                 * only if Organ type is B3
                 *
                 * @module NS2 Organ B3 Decay Fast
                 */
                decayFast: ns2BooleanValue(organTypeIsB3 && (organOffset35 & 0x08) !== 0, false),

                /**
                 * Offset in file:  0x35 (b4)
                 *
                 * @example
                 * O = off, 1 = on
                 *
                 * only if Organ type is B3
                 *
                 * @module NS2 Organ B3 Harmonic Third
                 */
                harmonicThird: ns2BooleanValue(organTypeIsB3 && (organOffset35 & 0x10) !== 0, false),
            },
        },
        preset2: {
            /**
             * Offset in file: 0xBB (b2)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Organ Preset 2 On
             */
            enabled: organPreset2Enabled,

            isDefault: organPreset2Enabled === false,

            /**
             * @example
             *
             * ORGAN B3 DRAWBARS Preset II
             * all B3 Drawbars are 4-Bit fields, values from 0 - 8
             *
             * Organ B3 Sub (drawbar 1)
             * offset in file 0x97 (b0) and 0x98 (b7-5)
             * Morph Wheel offset in file 0x96 (b7-3)
             * Morph AT    offset in file 0x96 (b2-0) and 0x97 (b7-6)
             * Morph Pedal offset in file 0x97 (b5-1)
             *
             * Organ B3 Sub3 (drawbar 2)
             * offset in file 0x9a (b5-2)
             * Morph Wheel offset in file 0x98 (b4-0)
             * Morph AT    offset in file 0x99 (b7-3)
             * Morph Pedal offset in file 0x99 (b2-0) and 0x9a (b7-6)
             *
             * Organ B3 Fund (drawbar 3)
             * offset in file 0x9c (b2-0) and 0x9d (b7)
             * Morph Wheel offset in file 0x9a (b1-0) and 0x9b (b7-5)
             * Morph AT    offset in file 0x9b (b4-0)
             * Morph Pedal offset in file 0x9c (b7-3)
             *
             * Organ B3 2nd (drawbar 4)
             * offset in file 0x9f (b7-4)
             * Morph Wheel offset in file 0x9d (b6-2)
             * Morph AT    offset in file 0x9d (b1-0) and 0x9e (b7-5)
             * Morph Pedal offset in file 0x9e (b4-0)
             *
             * Organ B3 3rd (drawbar 5)
             * offset in file 0xa1 (b4-1)
             * Morph Wheel offset in file 0x9f (b3-0) and 0xa0 (b7)
             * Morph AT    offset in file 0xa0 (b6-2)
             * Morph Pedal offset in file 0xa0 (b1-0) and 0xa1 (b7-5)
             *
             * Organ B3 4th (drawbar 6)
             * offset in file 0xa3 (b1-0) and 0xa4 (b7-6)
             * Morph Wheel offset in file 0xa1 (b0) and 0xa2 (b7-4)
             * Morph AT    offset in file 0xa2 (b3-0) and 0xa3 (b7)
             * Morph Pedal offset in file 0xa3 (b6-2)
             *
             * Organ B3 5th (drawbar 7)
             * offset in file 0xa6 (b6-3)
             * Morph Wheel offset in file 0xa4 (b5-1)
             * Morph AT    offset in file 0xa4 (b0) and 0xa5 (b7-4)
             * Morph Pedal offset in file 0xa5 (b3-0) and 0xa6 (b7)
             *
             * Organ B3 6th (drawbar 8)
             * offset in file 0xa8 (b3-0)
             * Morph Wheel offset in file 0xa6 (b2-0) and 0xa7 (b7-6)
             * Morph AT    offset in file 0xa7 (b5-1)
             * Morph Pedal offset in file 0xa7 (b0) and 0xa8 (b7-4)
             *
             * Organ B3 8th (drawbar 9)
             * offset in file 0xaa (b0) and 0xab (b7-5)
             * Morph Wheel offset in file 0xa9 (b7-3)
             * Morph AT    offset in file 0xa9 (b2-0) and 0xaa (b7-6)
             * Morph Pedal offset in file 0xaa (b5-1)
             *
             *
             * ORGAN VOX DRAWBARS Preset II
             *
             * Organ Vox 16' (drawbar 1)
             * offset in file 0xae (b0) and 0xaf (b7-5)
             * Morph Wheel offset in file 0xad (b7-3)
             * Morph AT    offset in file 0xad (b2-0) and 0xae (b7-6)
             * Morph Pedal offset in file 0xae (b6-1)
             *
             * Organ Vox 8' (drawbar 2)
             * offset in file 0xb1 (b5-2)
             * Morph Wheel offset in file 0xaf (b4-0)
             * Morph AT    offset in file 0xb0 (b7-3)
             * Morph Pedal offset in file 0xb0 (b2-0) and 0xb1 (b7-6)
             *
             * Organ Vox 4' (drawbar 3)
             * offset in file 0xb3 (b2-0) and 0xb4 (b7)
             * Morph Wheel offset in file 0xb1 (b1-0) and 0xb2 (b7-5)
             * Morph AT    offset in file 0xb2 (b4-0)
             * Morph Pedal offset in file 0xb3 (b7-3)
             *
             * Organ Vox 2' (drawbar 4)
             * offset in file 0xb6 (b7-4)
             * Morph Wheel offset in file 0xb4 (b6-2)
             * Morph AT    offset in file 0xb4 (b1-0) and 0xb5 (b7-5)
             * Morph Pedal offset in file 0xb5 (b4-0)
             *
             * Organ Vox II (drawbar 5)
             * offset in file 0xb8 (b4-1)
             * Morph Wheel offset in file 0xb6 (b3-0) and 0xb7 (b7)
             * Morph AT    offset in file 0xb7 (b6-2)
             * Morph Pedal offset in file 0xb7 (b1-0) and 0xb8 (b7-5)
             *
             * Organ Vox III (drawbar 6)
             * offset in file 0xba (b1-0) and 0xbb (b7-6)
             * Morph Wheel offset in file 0xb8 (b0) and 0xb9 (b7-4)
             * Morph AT    offset in file 0xb9 (b3-0) and 0xba (b7)
             * Morph Pedal offset in file 0xba (b6-2)
             *
             * Organ Vox IV (drawbar 7)
             * offset in file 0xbd (b6-3)
             * Morph Wheel offset in file 0xbb (b5-1)
             * Morph AT    offset in file 0xbb (b0) and 0xbc (b7-4)
             * Morph Pedal offset in file 0xbc (b3-0) and 0xbd (b7)
             *
             * Organ Vox SIN (drawbar 8)
             * offset in file 0xbf (b3-0)
             * Morph Wheel offset in file 0xbd (b2-0) and 0xbe (b7-6)
             * Morph AT    offset in file 0xbe (b5-1)
             * Morph Pedal offset in file 0xbe (b0) and 0xbf (b7-4)
             *
             * Organ Vox TRI (drawbar 9)
             * offset in file 0xc1 (b0) and 0xc2 (b7-5)
             * Morph Wheel offset in file 0xc0 (b7-3)
             * Morph AT    offset in file 0xc0 (b2-0) and 0xc1 (b7-6)
             * Morph Pedal offset in file 0xc1 (b5-1)
             *
             *
             * ORGAN FARFISA DRAWBARS Preset II
             * Farfisa drawbars are 1-Bit values, ON or OFF
             *
             * Organ Farfisa Bass16 (drawbar 1)
             * offset in file 0xc4 (b1)
             * Morph Wheel offset in file 0xc4 (b7-6)
             * Morph AT    offset in file 0xc4 (b5-4)
             * Morph Pedal offset in file 0xc4 (b3-2)
             *
             * Organ Farfisa Str16 (drawbar 2)
             * offset in file 0xc5 (b2)
             * Morph Wheel offset in file 0xc4 (b0) and 0xc5 (b7)
             * Morph AT    offset in file 0xc5 (b6-5)
             * Morph Pedal offset in file 0xc5 (b4-3)
             *
             * Organ Farfisa Flu8 (drawbar 3)
             * offset in file 0xc6 (b3)
             * Morph Wheel offset in file 0xc5 (b1-0)
             * Morph AT    offset in file 0xc6 (b7-6)
             * Morph Pedal offset in file 0xc6 (b5-4)
             *
             * Organ Farfisa Oboe8 (drawbar 4)
             * offset in file 0xc7 (b4)
             * Morph Wheel offset in file 0xc6 (b2-1)
             * Morph AT    offset in file 0xc6 (b0) and 0xc7 (b7)
             * Morph Pedal offset in file 0xc7 (b6-5)
             *
             * Organ Farfisa Trump8 (drawbar 5)
             * offset in file 0xc8 (b5)
             * Morph Wheel offset in file 0xc7 (b3-2)
             * Morph AT    offset in file 0xc7 (b1-0)
             * Morph Pedal offset in file 0xc8 (b7-6)
             *
             * Organ Farfisa Str8 (drawbar 6)
             * offset in file 0xc9 (b6)
             * Morph Wheel offset in file 0xc8 (b4-3)
             * Morph AT    offset in file 0xc8 (b2-1)
             * Morph Pedal offset in file 0xc8 (b0) and 0xc9 (b7)
             *
             * Organ Farfisa Flu4 (drawbar 7)
             * offset in file 0xca (b7)
             * Morph Wheel offset in file 0xc9 (b5-4)
             * Morph AT    offset in file 0xc9 (b3-2)
             * Morph Pedal offset in file 0xc9 (b1-0)
             *
             * Organ Farfisa Str4 (drawbar 8)
             * offset in file 0xca (b0)
             * Morph Wheel offset in file 0xca (b6-5)
             * Morph AT    offset in file 0xca (b4-3)
             * Morph Pedal offset in file 0xca (b2-1)
             *
             * Organ Farfisa 2 2/3 (drawbar 9)
             * offset in file 0xcb (b1)
             * Morph Wheel offset in file 0xcb (b7-6)
             * Morph AT    offset in file 0xcb (b5-4)
             * Morph Pedal offset in file 0xcb (b3-2)
             *
             * @module NS2 Organ Drawbars Preset 2
             */
            drawbars: drawbars2,

            vibrato: {
                enabled: vibratoPreset2,
                isDefault: vibratoPreset2 === false,
            },

            /***
             * Organ Percussion Options
             */
            percussion: {
                enabled: percussionPreset2,
                isDefault: percussionPreset2 === false,
            },
        },

        /**
         * Offset in file 0x59 (b3-2)
         *
         * @example
         * #include ns2ProgramOutputMap
         *
         * @module NS2 Organ Program Output
         */
        output: {
            value: routing,
            isDefault: routing === ns2ProgramOutputMap.get(0),
        },
    };
};
