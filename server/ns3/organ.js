const mapping = require("./mapping");
const { getKbZone } = require("../common/utils");
const { getVolumeEx } = require("../common/utils");

/***
 * return Drawbars as an array
 *
 * @class
 * @ignore
 * @param buffer
 * @param offset
 * @param type B3, Vox, Farfisa
 * @returns {number[]}
 */
const getDrawbars = function (buffer, offset, type) {
    const organDrawbar0Flag = buffer.readUInt8(offset); // 0xbe
    const organDrawbar1Flag = buffer.readUInt8(offset + 2); // 0xc0
    const organDrawbar2FlagW = buffer.readUInt16BE(offset + 4); // 0xc2
    const organDrawbar3Flag = buffer.readUInt8(offset + 7); // 0xc5
    const organDrawbar4Flag = buffer.readUInt8(offset + 9); // 0xc7
    const organDrawbar5FlagW = buffer.readUInt16BE(offset + 11); // 0xc9
    const organDrawbar6Flag = buffer.readUInt8(offset + 14); // 0xcc
    const organDrawbar7FlagW = buffer.readUInt16BE(offset + 16); // 0xce
    const organDrawbar8Flag = buffer.readUInt8(offset + 19); // 0xd1

    /**
     *
     *
     */
    let d0 = (organDrawbar0Flag & 0xf0) >>> 4;
    let d1 = (organDrawbar1Flag & 0x1e) >>> 1;
    let d2 = (organDrawbar2FlagW & 0b0000001111000000) >>> 6; //0x03c0
    let d3 = (organDrawbar3Flag & 0b01111000) >>> 3;
    let d4 = organDrawbar4Flag & 0x0f;
    let d5 = (organDrawbar5FlagW & 0b0000000111100000) >>> 5;
    let d6 = (organDrawbar6Flag & 0b00111100) >>> 2;
    let d7 = (organDrawbar7FlagW & 0b0000011110000000) >>> 7;
    let d8 = (organDrawbar8Flag & 0xf0) >>> 4;

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
    const organEnabled = (organOffsetB6W & 0x8000) !== 0;

    return {
        /**
         * Offset in file: 0xB6 (b7)
         *
         * O = disabled, 1 = enabled
         *
         * @module Organ On
         */
        enabled: organEnabled,

        /**
         * Offset in file: 0xB6 (b6 to b3)
         *
         * | value     |      | Label   |
         * | --------- | ---- | ------- |
         * | x000 0xxx | 0    | `o---`
         * | x000 1xxx | 1    | `-o--`
         * | x001 0xxx | 2    | `--o-`
         * | x001 1xxx | 3    | `---o`
         * | x010 0xxx | 4    | `oo--`
         * | x010 1xxx | 5    | `-oo-`
         * | x011 0xxx | 6    | `--oo`
         * | x011 1xxx | 7    | `ooo-`
         * | x100 0xxx | 8    | `-ooo`
         * | x100 1xxx | 9    | `oooo`
         *
         *  @module Organ Kb Zone
         */
        kbZone: getKbZone(organEnabled, splitEnabled, (organOffsetB6W & 0x7800) >>> 11),

        /**
         * Offset in file:
         * | -------- |
         * Volume:
         * 0xB6 (b2-b0), 0xB7 (b7-b4): 7-bit = 0/127 range
         * Morph Wheel:
         * 0xB7 (b3): direction (1 = up, 0 = down)
         * 0xB7 (b2-b0), 0xB8 (b7-b4): 7-bit raw value
         * Morph After Touch:
         * 0xB8 (b3): direction (1 = up, 0 = down)
         * 0xB8 (b2-b0), 0xB9 (b7-b4): 7-bit raw value
         * Morph Control Pedal:
         * 0xB9 (b3): direction (1 = up, 0 = down)
         * 0xB9 (b2-b0), 0xBA (b7-b4): 7-bit raw value
         * if direction = 1 then Morph offset value = raw value + 1
         * if direction = 0 then Morph offset value = raw value - 127
         * Final 'To' Morph value = 'From value (aka original volume)' + 'Morph offset value'
         * Morph Enabled if  'From value' <> 'Morph offset value'
         *
         * @module Organ Volume
         */
        volume: getVolumeEx(buffer, 0xb6 + panelOffset),

        /**
         * Offset in file: 0xBA (b2/1/0)
         *
         * Octave Shift = value - 6
         *
         * @module Organ Octave Shift
         */
        octaveShift: (organOffsetBa & 0x07) - 6,

        /**
         * Offset in file: 0x34 (b4)
         *
         * @module Organ Pitch Stick
         */
        pitchStick: (organOffset34 & 0x10) !== 0,

        /**
         * Offset in file: 0xBB (b7)
         *
         * @module Organ Sustain Pedal
         */
        sustainPedal: (organOffsetBb & 0x80) !== 0,

        /**
         * Offset in file: 0xBB (b6/5/4)
         * | -------- |
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
         * | -------- |
         * Drawbar 1: 0xBE (b7-4)
         * Drawbar 2: 0xC0 (b4-1)
         * Drawbar 3: 0xC2 (b1-0) and 0xC3 (b7-6)
         * Drawbar 4: 0xC5 (b6-3)
         * Drawbar 5: 0xC7 (b3-0)
         * Drawbar 6: 0xC9 (b0) and 0xCA (b7-5)
         * Drawbar 7: 0xCC (b5-2)
         * Drawbar 8: 0xCE (b2-0) and 0xCF (b7)
         * Drawbar 9: 0xD1 (b7-4)
         *
         * @module Organ Drawbars Preset 1
         */
        preset1: getDrawbars(buffer, 0xbe, organType).join(""),

        /**
         * Offset in file: 0xD9
         * | -------- |
         * Drawbar 1: 0xD9 (b7-4)
         * Drawbar 2: 0xDB (b4-1)
         * Drawbar 3: 0xDD (b1-0) and 0xDE (b7-6)
         * Drawbar 4: 0xE0 (b6-3)
         * Drawbar 5: 0xE2 (b3-0)
         * Drawbar 6: 0xE4 (b0) and 0xE5 (b7-5)
         * Drawbar 7: 0xE7 (b5-2)
         * Drawbar 8: 0xE9 (b2-0) and 0xEA (b7)
         * Drawbar 9: 0xEC (b7-4)
         *
         * @module Organ Drawbars Preset 2
         */
        preset2: getDrawbars(buffer, 0xd9, organType).join(""),

        /**
         * Offset in file: 0xBB (b3)
         * (NS3 Compact model only)
         *
         * @module Organ Live Mode
         */
        live: (organOffsetBb & 0x08) !== 0,

        /**
         * Organ Vibrato Options
         */
        vibrato: {
            /**
             * Offset in file: 0xD3 (b4)
             *
             * @module Organ Vibrato On
             */
            enabled: (organOffsetD3 & 0x10) !== 0,

            /**
             * Offset in file: 0x34 (b3/2/1)
             *
             * @module Organ Vibrato Mode
             */
            mode: mapping.organVibratoModeMap.get((organOffset34 & 0b00001110) >>> 1),
        },

        /**
         * @module Organ Percussion Options
         */
        percussion: {
            /**
             * Offset in file: 0xD3 (b4)
             *
             * @module Organ Percussion On
             */
            enabled: (organOffsetD3 & 0x08) !== 0,

            /**
             * Offset in file: 0xD3 (b0)
             *
             * @module Organ Percussion Volume Soft
             */
            volumeSoft: (organOffsetD3 & 0x01) !== 0,

            /**
             * Offset in file: 0xD3 (b1)
             *
             * @module Organ Percussion Decay Fast
             */
            decayFast: (organOffsetD3 & 0x02) !== 0,

            /**
             * Offset in file: 0xD3 (b2)
             *
             * @module Organ Percussion Harmonic Third
             */
            harmonicThird: (organOffsetD3 & 0x04) !== 0,
        },
    };
};
