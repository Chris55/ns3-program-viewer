const mapping = require("./mapping");
const { getKbZone } = require("../common/utils");
const { getVolumeEx } = require("../common/utils");

/***
 * returns Piano section
 *
 * @class
 * @ignore
 * @param buffer
 * @param panelOffset
 * @param splitEnabled
 * @returns {{kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, label: string, morph: {afterTouch: {to: ({midi: *, label: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, label: string}|string), enabled: boolean}, wheel: {to: ({midi: *, label: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}}
 */
exports.getPiano = (buffer, panelOffset, splitEnabled) => {
    const pianoOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const pianoOffset43W = buffer.readUInt16BE(0x43 + panelOffset);
    const pianoOffset47 = buffer.readUInt8(0x47 + panelOffset);
    const pianoOffset48 = buffer.readUInt8(0x48 + panelOffset);
    //const pianoOffset49WW = buffer.readBigUInt64BE(0x49);
    const pianoOffset48W = buffer.readUInt16BE(0x48 + panelOffset);
    const pianoOffset4e = buffer.readUInt8(0x4e + panelOffset);
    const pianoOffset4d = buffer.readUInt8(0x4d + panelOffset);
    const pianoOffset4dW = buffer.readUInt16BE(0x4d + panelOffset);

    const pianoEnabled = (pianoOffset43W & 0x8000) !== 0;

    return {
        /**
         * Offset in file: 0x43 (b7): O = disabled, 1 = enabled
         *
         * @module Piano On
         */
        enabled: pianoEnabled,

        /**
         * Offset in file: 0x43 (b6 to b3)
         * ref Organ section for more examples
         *
         * @module Piano Kb Zone
         */
        kbZone: getKbZone(pianoEnabled, splitEnabled, (pianoOffset43W & 0x7800) >>> 11),

        /**
         * Offset in file: 0x43 (b2 to b0), 0x44 (b7 to b4) 7 bits = 0/127 range
         *
         * @module Piano Volume
         */
        volume: getVolumeEx(buffer, 0x43 + panelOffset),

        /**
         * Offset in file: 0x47 (just 4 last bits, AND 0x0F)
         *
         * @example
         * 0xF5- Shift -1
         * 0xF6- No shift
         * 0xF7- Shift +1
         *
         * Octave Shift = value - 6
         *
         * @module Piano Octave Shift
         */
        octaveShift: (pianoOffset47 & 0x07) - 6,

        /**
         * Offset in file: 0x48 (just bit 0x80)
         *
         * @example
         * 0x00- No
         * 0x80- Yes
         *
         * @module Piano Pitch Stick
         */
        pitchStick: (pianoOffset48 & 0x80) !== 0,

        /**
         * Offset in file: 0x48 (just bit 0x40)
         *
         * @example
         * 0x00- No
         * 0x40- Yes
         *
         * @module Piano Sustain Pedal
         */
        sustainPedal: (pianoOffset48 & 0x40) !== 0,

        /**
         * Offset in file: 0x48 (only 4 bits, last 3 of first nibble, first of second nibble) AND 0x98
         *
         * @example
         * 0x40- Grand
         * 0x48- Upright
         * 0x50- Electric
         * 0x58- Clav
         * 0x60- Digital
         * 0x68- Misc
         *
         * @module Piano Type
         */
        type: mapping.pianoTypeMap.get((pianoOffset48 & 0x38) >>> 3),

        /**
         * Offset in file: 0x48 and 0x49 (last 3 bits of 0x49 and first 2 bits of 0x4A).
         *
         * @example
         * 0x00 0x00: model 1
         * 0x00 0x01: model 2
         * .. and so on
         * 0x02 0x01: model 10
         *
         * @module Piano Model
         */
        model: (pianoOffset48W & 0x07c0) >>> 6,

        /**
         * Offset in file: 0x4E
         *
         * @example
         * 0x00- None
         * 0x08- Soft
         * 0x10- Mid
         * 0x18- Bright
         * 0x20- DYNO1
         * 0x28- DYNO2
         *
         * @module Piano Timbre
         */
        timbre: mapping.pianoTimbreMap.get((pianoOffset4e & 0x38) >>> 3),

        /**
         * Offset in file: 0x4D (just least significant bit 1, so AND 0x01) and
         *                 0x4E (Just Most Significant Bit, so AND 0x80)
         *
         * @example
         * 0x00 + 0x8x- KB Touch 1
         * 0x01 + 0x0x- KB Touch 2
         * 0x01 + 0x8x- KB Touch 3
         *
         * @module Piano KB Touch
         */
        kbTouch: mapping.pianoKbTouchMap.get((pianoOffset4dW & 0x0180) >>> 7),

        /**
         * Offset in file: 0x34
         *
         * @example
         * 0x00- Off
         * 0x20- 1
         * 0x40- 2
         * 0x60- 3
         *
         * @module Piano Layer Detune
         */
        layerDetune: mapping.pianoLayerDetuneMap.get((pianoOffset34 & 0x60) >>> 5),

        /**
         * Offset in file: 0x4D (just least significant bit 4, so AND 0x08)
         *
         * @example
         * 0x00 - No
         * 0x08 - Soft Release
         *
         * @module Piano Soft Release
         */
        softRelease: (pianoOffset4d & 0x08) !== 0,

        /**
         * Offset in file: 0x4D (just least significant bit 2, so AND 0x02)
         *
         * @example
         * 0x00- No
         * 0x02- Pedal Noise
         *
         * @module Piano Pedal Noise
         */
        pedalNoise: (pianoOffset4d & 0x02) !== 0,

        /**
         * Offset in file: 0x4D (just least significant bit 3, so AND 0x04)
         *
         * @example
         * 0x00- No
         * 0x04- String Res
         *
         * @module Piano String Resonance
         */
        stringResonance: (pianoOffset4d & 0x04) !== 0,
    };
};
