const mapping = require("./ns3-mapping");
const { getMorphOrganDrawbar } = require("./ns3-morph");
const { getKbZone } = require("./ns3-utils");
const { getVolumeEx } = require("./ns3-utils");

/***
 * return Drawbars Preset and Morph
 *
 * @class
 * @ignore
 * @param buffer
 * @param offset
 * @param type B3, Vox, Farfisa
 * @returns {number[]}
 */
const getDrawbars = function (buffer, offset, type) {
    const offset1 = offset; // 0xbe
    const offset2 = offset + 2; // 0xc0
    const offset3 = offset + 4; // 0xc2
    const offset4 = offset + 7; // 0xc5
    const offset5 = offset + 9; // 0xc7
    const offset6 = offset + 11; // 0xc9
    const offset7 = offset + 14; // 0xcc
    const offset8 = offset + 16; // 0xce
    const offset9 = offset + 19; // 0xd1

    const organDrawbar1Flag = buffer.readUInt8(offset1); // 0xbe
    const organDrawbar2Flag = buffer.readUInt8(offset2); // 0xc0
    const organDrawbar3FlagW = buffer.readUInt16BE(offset3); // 0xc2
    const organDrawbar4Flag = buffer.readUInt8(offset4); // 0xc5
    const organDrawbar5Flag = buffer.readUInt8(offset5); // 0xc7
    const organDrawbar6FlagW = buffer.readUInt16BE(offset6); // 0xc9
    const organDrawbar7Flag = buffer.readUInt8(offset7); // 0xcc
    const organDrawbar8FlagW = buffer.readUInt16BE(offset8); // 0xce
    const organDrawbar9Flag = buffer.readUInt8(offset9); // 0xd1

    /**
     *
     *
     */
    let d1 = (organDrawbar1Flag & 0xf0) >>> 4;
    let d2 = (organDrawbar2Flag & 0x1e) >>> 1;
    let d3 = (organDrawbar3FlagW & 0b0000001111000000) >>> 6; //0x03c0
    let d4 = (organDrawbar4Flag & 0b01111000) >>> 3;
    let d5 = organDrawbar5Flag & 0x0f;
    let d6 = (organDrawbar6FlagW & 0b0000000111100000) >>> 5;
    let d7 = (organDrawbar7Flag & 0b00111100) >>> 2;
    let d8 = (organDrawbar8FlagW & 0b0000011110000000) >>> 7;
    let d9 = (organDrawbar9Flag & 0xf0) >>> 4;

    // if (type === "Vox") {
    //     d8 = 0;
    // } else if (type === "Farfisa") {
    //     d1 = d1 < 4 ? 0 : 1;
    //     d2 = d2 < 4 ? 0 : 1;
    //     d3 = d3 < 4 ? 0 : 1;
    //     d4 = d4 < 4 ? 0 : 1;
    //     d5 = d5 < 4 ? 0 : 1;
    //     d6 = d6 < 4 ? 0 : 1;
    //     d7 = d7 < 4 ? 0 : 1;
    //     d8 = d8 < 4 ? 0 : 1;
    //     d9 = d9 < 4 ? 0 : 1;
    // }

    const preset = fixVoxAndFarfisa([d1, d2, d3, d4, d5, d6, d7, d8, d9], type);

    const morphOffset1 = buffer.readUInt32BE(offset1 - 1);
    const morphOffset2 = buffer.readUInt32BE(offset2 - 1);
    const morphOffset3 = buffer.readUInt32BE(offset3);
    const morphOffset4 = buffer.readUInt32BE(offset4 - 1);
    const morphOffset5 = buffer.readUInt32BE(offset5 - 1);
    const morphOffset6 = buffer.readUInt32BE(offset6);
    const morphOffset7 = buffer.readUInt32BE(offset7 - 1);
    const morphOffset8 = buffer.readUInt32BE(offset8 - 1);
    const morphOffset9 = buffer.readUInt32BE(offset9 - 1);

    const m1 = getMorphOrganDrawbar(morphOffset1 >>> 5, d1);
    const m2 = getMorphOrganDrawbar(morphOffset2 >>> 2, d2);
    const m3 = getMorphOrganDrawbar(morphOffset3 >>> 7, d3);
    const m4 = getMorphOrganDrawbar(morphOffset4 >>> 4, d4);
    const m5 = getMorphOrganDrawbar(morphOffset5 >>> 1, d5);
    const m6 = getMorphOrganDrawbar(morphOffset6 >>> 6, d6);
    const m7 = getMorphOrganDrawbar(morphOffset7 >>> 3, d7);
    const m8 = getMorphOrganDrawbar(morphOffset8, d8);
    const m9 = getMorphOrganDrawbar(morphOffset9 >>> 5, d9);

    const morphWheel = fixVoxAndFarfisa(
        [m1.wheel, m2.wheel, m3.wheel, m4.wheel, m5.wheel, m6.wheel, m7.wheel, m8.wheel, m9.wheel],
        type
    );
    hideIfEqual(preset, morphWheel);

    const morphWheelPreset = morphWheel.join("");

    const morphAfterTouch = fixVoxAndFarfisa(
        [
            m1.afterTouch,
            m2.afterTouch,
            m3.afterTouch,
            m4.afterTouch,
            m5.afterTouch,
            m6.afterTouch,
            m7.afterTouch,
            m8.afterTouch,
            m9.afterTouch,
        ],
        type
    );
    hideIfEqual(preset, morphAfterTouch);
    const morphAfterTouchPreset = morphAfterTouch.join("");

    const morphControlPedal = fixVoxAndFarfisa(
        [
            m1.controlPedal,
            m2.controlPedal,
            m3.controlPedal,
            m4.controlPedal,
            m5.controlPedal,
            m6.controlPedal,
            m7.controlPedal,
            m8.controlPedal,
            m9.controlPedal,
        ],
        type
    );
    hideIfEqual(preset, morphControlPedal);
    const morphControlPedalPreset = morphControlPedal.join("");

    return {
        label: preset.join(""),
        morph: {
            wheel: {
                enabled: morphWheelPreset !== "---------",
                label: morphWheelPreset,
            },
            afterTouch: {
                enabled: morphAfterTouchPreset !== "---------",
                label: morphAfterTouchPreset,
            },
            controlPedal: {
                enabled: morphControlPedalPreset !== "---------",
                label: morphControlPedalPreset,
            },
        },
    };
};

const fixVoxAndFarfisa = (drawbars, type) => {
    if (type === "Vox") {
        drawbars[7] = 0;
    } else if (type === "Farfisa") {
        drawbars.forEach((d, i) => {
            drawbars[i] = d < 4 ? 0 : 1;
        });
    }
    return drawbars;
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
 * @param buffer
 * @param panelOffset
 * @param splitEnabled
 * @returns {{volume: {midi: *, label: string, morph: {afterTouch: {to: ({midi: *, label: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, label: string}|string), enabled: boolean}, wheel: {to: ({midi: *, label: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}}
 */
exports.getOrgan = (buffer, panelOffset, splitEnabled) => {
    const organOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const organOffsetB6W = buffer.readUInt16BE(0xb6 + panelOffset);
    const organOffsetBa = buffer.readUInt8(0xba + panelOffset);
    const organOffsetBb = buffer.readUInt8(0xbb + panelOffset);
    const organOffsetD3 = buffer.readUInt8(0xd3 + panelOffset);

    const organType = mapping.organTypeMap.get((organOffsetBb & 0x70) >>> 4);
    const organTypeIsB3 = organType === "B3";

    const organEnabled = (organOffsetB6W & 0x8000) !== 0;

    const organModeValue = (organOffset34 & 0x0e) >>> 1;
    let organMode = mapping.organVibratoModeMap.get(organModeValue);

    if (organType === "Pipe1" || organType === "Pipe2") {
        organMode = "C1";
    } else if (organType === "Farfisa" && (organMode === "C1" || organMode === "V3")) {
        organMode = mapping.organVibratoModeMap.get(organModeValue + 1);
    } else if (organType === "Vox" && (organMode === "C1" || organMode === "C2" || organMode === "C3")) {
        organMode = mapping.organVibratoModeMap.get(organModeValue + 1);
    }

    return {
        /**
         * Offset in file: 0xB6 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Organ On
         */
        enabled: organEnabled,

        /**
         * Offset in file: 0xB6 (b6-3)
         *
         * @example
         * value     |      | Label
         * --------- | ---- | -------
         * x000 0xxx |  0   | o---
         * x000 1xxx |  1   | -o--
         * x001 0xxx |  2   | --o-
         * x001 1xxx |  3   | ---o
         * x010 0xxx |  4   | oo--
         * x010 1xxx |  5   | -oo-
         * x011 0xxx |  6   | --oo
         * x011 1xxx |  7   | ooo-
         * x100 0xxx |  8   | -ooo
         * x100 1xxx |  9   | oooo
         *
         * @module Organ Kb Zone
         */
        kbZone: getKbZone(organEnabled, splitEnabled, (organOffsetB6W & 0x7800) >>> 11),

        /**
         * Offset in file:
         *
         * @example
         * Volume:
         * 0xB6 (b2-b0), 0xB7 (b7-4): 7-bit = 0/127 range
         *
         * Morph Wheel:
         * 0xB7 (b3): polarity (1 = positive, 0 = negative)
         * 0xB7 (b2-b0), 0xB8 (b7-b4): 7-bit raw value
         *
         * Morph After Touch:
         * 0xB8 (b3): polarity (1 = positive, 0 = negative)
         * 0xB8 (b2-b0), 0xB9 (b7-b4): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0xB9 (b3): polarity (1 = positive, 0 = negative)
         * 0xB9 (b2-b0), 0xBA (b7-b4): 7-bit raw value
         *
         * if polarity = 1 then Morph offset value = raw value + 1
         * if polarity = 0 then Morph offset value = raw value - 127
         *
         * Final 'To' Morph value = 'From value (original volume)' + 'Morph offset value'
         * Morph Enabled if  'From value' <> 'Morph offset value'
         *
         * @module Organ Volume
         */
        volume: getVolumeEx(buffer, 0xb6 + panelOffset),

        /**
         * Offset in file: 0xBA (b2-0)
         *
         * @example
         * Octave Shift = value - 6
         *
         * @module Organ Octave Shift
         */
        octaveShift: (organOffsetBa & 0x07) - 6,

        /**
         * Offset in file: 0x34 (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Organ Pitch Stick
         */
        pitchStick: (organOffset34 & 0x10) !== 0,

        /**
         * Offset in file: 0xBB (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Organ Sustain Pedal
         */
        sustainPedal: (organOffsetBb & 0x80) !== 0,

        /**
         * Offset in file: 0xBB (b6/5/4)
         *
         * @example
         * 0 = B3
         * 1 = Vox
         * 2 = Farfisa
         * 3 = Pipe1
         * 4 = Pipe2
         *
         * @module Organ Type
         */
        type: organType,

        /**
         * Offset in file: 0xBE
         *
         * @example
         *
         * Drawbar value range is 0/8.
         * For Vox Organ each value is converted to 0/1: 0 (if value < 4) else 1
         * For Farfisa Organ drawbar 8 is not used and forced to 0
         *
         * Drawbar 1: 0xBE (b7-4)
         *            Morph Wheel:         0xBE (b3-0) and 0xBF (b7)
         *            Morph After Touch:   0xBF (b6-2)
         *            Morph Control Pedal: 0xBF (b1-0) and 0xC0 (b7-5)
         *
         * Drawbar 2: 0xC0 (b4-1)
         *            Morph Wheel:         0xC0 (b0) and 0xC1 (b7-4)
         *            Morph After Touch:   0xC1 (b3-0) and 0xC2 (b7)
         *            Morph Control Pedal: 0xC2 (b6-2)
         *
         * Drawbar 3: 0xC2 (b1-0) and 0xC3 (b7-6)
         *            Morph Wheel:         0xC3 (b5-1)
         *            Morph After Touch:   0xC3 (b0) and 0xC4 (b7-4)
         *            Morph Control Pedal: 0xC4 (b3-0) and 0xC5 (b7)
         *
         * Drawbar 4: 0xC5 (b6-3)
         *            Morph Wheel:         0xC5 (b2-0) and 0xC6 (b7-6)
         *            Morph After Touch:   0xC6 (b5-b1)
         *            Morph Control Pedal: 0xC6 (b0) and 0xC7 (b7-4)
         *
         * Drawbar 5: 0xC7 (b3-0)
         *            Morph Wheel:         0xC8 (b7-3)
         *            Morph After Touch:   0xC8 (b2-0) and 0xC9 (b7-6)
         *            Morph Control Pedal: 0xC9 (b5-1)
         *
         * Drawbar 6: 0xC9 (b0) and 0xCA (b7-5)
         *            Morph Wheel:         0xCA (b4-0)
         *            Morph After Touch:   0xCB (b7-3)
         *            Morph Control Pedal: 0xCB (b2-0) and 0xCC (b7-6)
         *
         * Drawbar 7: 0xCC (b5-2)
         *            Morph Wheel:         0xCC (b1-0) and 0xCD (b7-5)
         *            Morph After Touch:   0xCD (b4-0)
         *            Morph Control Pedal: 0xCE (b7-3)
         *
         * Drawbar 8: 0xCE (b2-0) and 0xCF (b7)
         *            Morph Wheel:         0xCF (b6-2)
         *            Morph After Touch:   0xCF (b1-0) and 0xD0 (b7-5)
         *            Morph Control Pedal: 0xD0 (b4-0)
         *
         * Drawbar 9: 0xD1 (b7-4)
         *            Morph Wheel:         0xD1 (b3-0) and 0xBF (b7)
         *            Morph After Touch:   0xD2 (b6-2)
         *            Morph Control Pedal: 0xD2 (b1-0) and 0xD3 (b7-5)
         *
         * Morph value is on 5-bit
         * b4 is polarity
         * b3-0 is raw 4-bit value
         *
         * if polarity = 1 then Morph offset value = raw value + 1
         * if polarity = 0 then Morph offset value = raw value - 8
         *
         * Final 'To' Morph value = 'From value (original volume)' + 'Morph offset value'
         * Morph Enabled if  'From value' <> 'Morph offset value'
         *
         * @module Organ Drawbars Preset 1
         */
        preset1: getDrawbars(buffer, 0xbe + panelOffset, organType),

        /**
         * Offset in file: 0xD9
         *
         * @example
         *
         * Drawbar value range is 0/8.
         * For Vox Organ each value is converted to 0/1: 0 (if value < 4) else 1
         * For Farfisa Organ drawbar 8 is not used and forced to 0
         *
         * Drawbar 1: 0xD9 (b7-4)
         *            Morph Wheel:         0xD9 (b3-0) and 0xDA (b7)
         *            Morph After Touch:   0xDA (b6-2)
         *            Morph Control Pedal: 0xDA (b1-0) and 0xDB (b7-5)
         *
         * Drawbar 2: 0xDB (b4-1)
         *            Morph Wheel:         0xDB (b0) and 0xDC (b7-4)
         *            Morph After Touch:   0xDC (b3-0) and 0xDD (b7)
         *            Morph Control Pedal: 0xDD (b6-2)
         *
         * Drawbar 3: 0xDD (b1-0) and 0xDE (b7-6)
         *            Morph Wheel:         0xDE (b5-1)
         *            Morph After Touch:   0xDE (b0) and 0xDF (b7-4)
         *            Morph Control Pedal: 0xDF (b3-0) and 0xE0 (b7)
         *
         * Drawbar 4: 0xE0 (b6-3)
         *            Morph Wheel:         0xE0 (b2-0) and 0xE1 (b7-6)
         *            Morph After Touch:   0xE1 (b5-b1)
         *            Morph Control Pedal: 0xE1 (b0) and 0xE2 (b7-4)
         *
         * Drawbar 5: 0xE2 (b3-0)
         *            Morph Wheel:         0xE3 (b7-3)
         *            Morph After Touch:   0xE3 (b2-0) and 0xE4 (b7-6)
         *            Morph Control Pedal: 0xE4 (b5-1)
         *
         * Drawbar 6: 0xE4 (b0) and 0xE5 (b7-5)
         *            Morph Wheel:         0xE5 (b4-0)
         *            Morph After Touch:   0xE6 (b7-3)
         *            Morph Control Pedal: 0xE6 (b2-0) and 0xE7 (b7-6)
         *
         * Drawbar 7: 0xE7 (b5-2)
         *            Morph Wheel:         0xE7 (b1-0) and 0xE8 (b7-5)
         *            Morph After Touch:   0xE8 (b4-0)
         *            Morph Control Pedal: 0xE9 (b7-3)
         *
         * Drawbar 8: 0xE9 (b2-0) and 0xEA (b7)
         *            Morph Wheel:         0xEA (b6-2)
         *            Morph After Touch:   0xEA (b1-0) and 0xEB (b7-5)
         *            Morph Control Pedal: 0xEB (b4-0)
         *
         * Drawbar 9: 0xEC (b7-4)
         *            Morph Wheel:         0xEC (b3-0) and 0xED (b7)
         *            Morph After Touch:   0xED (b6-2)
         *            Morph Control Pedal: 0xED (b1-0) and 0xEF (b7-5)
         *
         * Morph value is on 5-bit
         * b4 is polarity
         * b3-0 is raw 4-bit value
         *
         * if polarity = 1 then Morph offset value = raw value + 1
         * if polarity = 0 then Morph offset value = raw value - 8
         *
         * Final 'To' Morph value = 'From value (original volume)' + 'Morph offset value'
         * Morph Enabled if  'From value' <> 'Morph offset value'
         *
         * @module Organ Drawbars Preset 2
         */
        preset2: getDrawbars(buffer, 0xd9 + panelOffset, organType),

        /**
         * Offset in file: 0xBB (b3)
         * (NS3 Compact model only)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Organ Live Mode
         */
        live: (organOffsetBb & 0x08) !== 0,

        /***
         * Organ Vibrato Options
         */
        vibrato: {
            /**
             * Offset in file: 0xD3 (b4)
             *
             * @example
             * O = off, 1 = on
             *
             * @module Organ Vibrato On
             */
            enabled: (organOffsetD3 & 0x10) !== 0,

            /**
             * Offset in file: 0x34 (b3-1)
             *
             * @example
             * 0 = V1
             * 1 = C1
             * 2 = V2
             * 3 = C2
             * 4 = V3
             * 5 = C3
             *
             * if Organ type is Pipe1 or Pipe2, only C1 is allowed
             * if Organ type is Farfisa, mode C1/V3 are not available
             * if Organ type is Vox, mode C1/C2/C3 are not available
             * if Organ type is B3, all mode are available
             *
             * @module Organ Vibrato Mode
             */
            mode: organMode,
        },

        /***
         * Organ Percussion Options
         */
        percussion: {
            /**
             * Offset in file: 0xD3 (b3)
             *
             * @example
             * O = off, 1 = on
             *
             * only if Organ type is B3
             *
             * @module Organ Percussion On
             */
            enabled: organTypeIsB3 && (organOffsetD3 & 0x08) !== 0,

            /**
             * Offset in file: 0xD3 (b0)
             *
             * @example
             * O = off, 1 = on
             *
             * only if Organ type is B3
             *
             * @module Organ Percussion Volume Soft
             */
            volumeSoft: organTypeIsB3 && (organOffsetD3 & 0x01) !== 0,

            /**
             * Offset in file: 0xD3 (b1)
             *
             * @example
             * O = off, 1 = on
             *
             * only if Organ type is B3
             *
             * @module Organ Percussion Decay Fast
             */
            decayFast: organTypeIsB3 && (organOffsetD3 & 0x02) !== 0,

            /**
             * Offset in file: 0xD3 (b2)
             *
             * @example
             * O = off, 1 = on
             *
             * only if Organ type is B3
             *
             * @module Organ Percussion Harmonic Third
             */
            harmonicThird: organTypeIsB3 && (organOffsetD3 & 0x04) !== 0,
        },
    };
};
