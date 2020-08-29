const mapping = require("./mapping");
const { getVolume } = require("../common/utils");

/***
 * return Drawbars as an array
 * @param buffer
 * @param offset
 * @param type B3, Vox, Farfisa
 * @returns {number[]}
 */
const getDrawbars = function (buffer, offset, type) {

    const organDrawbar0Flag = buffer.readUInt8(offset); // 0xbe
    const organDrawbar1Flag = buffer.readUInt8(offset + 2); // 0xc0
    const organDrawbar2Flag = buffer.readUInt16BE(offset + 4); // 0xc2
    const organDrawbar3Flag = buffer.readUInt8(offset + 7); // 0xc5
    const organDrawbar4Flag = buffer.readUInt8(offset + 9); // 0xc7
    const organDrawbar5Flag = buffer.readUInt16BE(offset + 11); // 0xc9
    const organDrawbar6Flag = buffer.readUInt8(offset + 14); // 0xcc
    const organDrawbar7Flag = buffer.readUInt16BE(offset + 16); // 0xce
    const organDrawbar8Flag = buffer.readUInt8(offset + 19); // 0xd1

    let d0 = (organDrawbar0Flag & 0xf0) >> 4;
    let d1 = (organDrawbar1Flag & 0x1e) >> 1;
    let d2 = (organDrawbar2Flag & 0b0000001111000000) >> 6; //0x03c0
    let d3 = (organDrawbar3Flag & 0b01111000) >> 3;
    let d4 = organDrawbar4Flag & 0x0f;
    let d5 = (organDrawbar5Flag & 0b0000000111100000) >> 5;
    let d6 = (organDrawbar6Flag & 0b00111100) >> 2;
    let d7 = (organDrawbar7Flag & 0b0000011110000000) >> 7;
    let d8 = (organDrawbar8Flag & 0xf0) >> 4;

    if (type === "Vox") {
        d7 = 0;
    } else if (type === "Farfisa") {
        d0 = d0 < 4 ? 0 : 1;
        d1 = d1 < 4 ? 0 : 1;
        d2 = d2 < 4 ? 0 : 1;
        d3 = d3 < 4 ? 0 : 1;
        d4 = d4 < 4 ? 0 : 1;
        d5 = d5 < 4 ? 0 : 1;
        d6 = d6 < 4 ? 0 : 1;
        d7 = d7 < 4 ? 0 : 1;
        d8 = d8 < 4 ? 0 : 1;
    }

    return [d0, d1, d2, d3, d4, d5, d6, d7, d8];
};

/***
 * returns Organ section
 * @param buffer
 * @param panelOffset
 * @returns {{volume: {midi: *, label: unknown}, preset2: string, pitchStick: boolean, kbZone: unknown, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: unknown, enabled: boolean}}}
 */
exports.getOrgan = (buffer, panelOffset) => {

    const organOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const organOffsetB6W = buffer.readUInt16BE(0xb6 + panelOffset);
    const organOffsetBa = buffer.readUInt8(0xba + panelOffset);
    const organOffsetBb = buffer.readUInt8(0xbb + panelOffset);
    const organOffsetD3 = buffer.readUInt8(0xd3 + panelOffset);

    const organType = mapping.organTypeMap.get((organOffsetBb & 0x70) >> 4);
    const organEnabled = (organOffsetB6W & 0x8000) !== 0;

    return {
        /***
         * Organ Enabled:
         * Offset in file: 0xB6 (b7)
         *
         * O = disabled, 1 = enabled
         */
        enabled: organEnabled,

        /***
         * Organ Kb Zone:
         * Offset in file: 0xB6 (b6 to b3)
         *
         * Values:
         *   0X87 x000 0xxx = 0  = o---
         *   0X8F x000 1xxx = 1  =-o--
         *   0x97 x001 0xxx = 2  = --o-
         *   0x9F x001 1xxx = 3  = ---o
         *   0xA7 x010 0xxx = 4  = oo--
         *   0xAF x010 1xxx = 5  = -oo-
         *   0xB7 x011 0xxx = 6  = --oo
         *   0xBF x011 1xxx = 7  = ooo-
         *   0xC7 x100 0xxx = 8  = -ooo
         *   0xCF x100 1xxx = 9  = oooo
         */
        kbZone: organEnabled ? mapping.kbZoneMap.get((organOffsetB6W & 0x7800) >> 11) : "----",

        /***
         * Organ Volume:
         * Offset in file: 0xB6 (b2 to b0), 0xB7 (b7 to b4) 7 bits = 0/127 range
         */
        volume: getVolume((organOffsetB6W & 0x07f0) >> 4),

        /***
         * Organ Type:
         * Offset in file: 0xBB (b6/5/4)
         */
        type: organType,

        /***
         * Organ Drawbars Preset 1:
         * Offset in file: 0xBE
         */
        preset1: getDrawbars(buffer, 0xbe, organType).join(""),

        /***
         * Organ Drawbars Preset 2:
         * Offset in file: 0xD9
         */
        preset2: getDrawbars(buffer, 0xd9, organType).join(""),

        /***
         * Organ Octave Shift:
         * Offset in file: 0xBA (b2/1/0)
         */
        octaveShift: (organOffsetBa & 0x07) - 6,

        /***
         * Organ Pitch Stick:
         * Offset in file: 0x34 (b4)
         */
        pitchStick: (organOffset34 & 0x10) !== 0,

        /***
         * Organ Sustain Pedal:
         * Offset in file: 0xBB (b7)
         */
        sustainPedal: (organOffsetBb & 0x80) !== 0,

        /***
         * Organ Live Mode (NS3 Compact model only)
         * Offset in file: 0xBB (b3)
         */
        live: (organOffsetBb & 0x08) !== 0,

        /***
         * Organ Vibrato Options
         */
        vibrato: {
            /***
             * Organ Vibrato On/Off
             * Offset in file: 0xD3 (b4)
             */
            enabled: (organOffsetD3 & 0x10) !== 0,

            /***
             * Organ Vibrato Mode:
             * Offset in file: 0x34 (b3/2/1)
             */
            mode: mapping.organVibratoModeMap.get((organOffset34 & 0b00001110) >> 1),
        },

        /***
         * Organ Percussion Options
         */
        percussion: {
            /***
             * Organ Percussion On/Off
             * Offset in file: 0xD3 (b4)
             */
            enabled: (organOffsetD3 & 0x08) !== 0,

            /***
             * Organ Percussion Volume Soft On/Off
             * Offset in file: 0xD3 (b0)
             */
            volumeSoft: (organOffsetD3 & 0x01) !== 0,

            /***
             * Organ Percussion Decay Fast On/Off
             * Offset in file: 0xD3 (b1)
             */
            decayFast: (organOffsetD3 & 0x02) !== 0,

            /***
             * Organ Percussion Harmonic Third On/Off
             * Offset in file: 0xD3 (b2)
             */
            harmonicThird: (organOffsetD3 & 0x04) !== 0,
        },
    };
};
