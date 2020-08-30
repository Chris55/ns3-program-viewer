const mapping = require("./mapping");
const { getKbZone } = require("../common/utils");
const { getVolumeEx } = require("../common/utils");

/***
 * returns Piano section
 *
 * @param buffer
 * @param panelOffset
 * @param splitEnabled
 * @returns {{kbTouch: unknown, kbZone: unknown, softRelease: boolean, sustainPedal: boolean, type: unknown, octaveShift: number, enabled: boolean, volume: {midi: *, label: unknown}, timbre: unknown, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: unknown}}
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
        /***
         * Piano Enabled:
         * Offset in file: 0x43 (b7): O = disabled, 1 = enabled
         */
        enabled: pianoEnabled,

        /***
         * Piano Kb Zone:
         * Offset in file: 0x43 (b6 to b3)
         * ref Organ section for more examples
         */
        kbZone: getKbZone(pianoEnabled, splitEnabled, (pianoOffset43W & 0x7800) >> 11),

        /***
         * Piano Volume:
         * Offset in file: 0x43 (b2 to b0), 0x44 (b7 to b4) 7 bits = 0/127 range
         */
        volume: getVolumeEx(buffer, 0x43 + panelOffset),

        /***
         * Piano Octave Shift
         * Offset in file: 0x47 (just 4 last bits, OR 0x0F)
         *
         * Values:
         *   0xF5- Shift -1
         *   0xF6- No shift
         *   0xF7- Shift +1
         */
        octaveShift: (pianoOffset47 & 0x07) - 6,

        /***
         * Piano Pitch Stick
         * Offset in file: 0x48 (just bit 0x80)
         *
         * Values
         *   0x00- No
         *   0x80- Yes
         */
        pitchStick: (pianoOffset48 & 0x80) !== 0,

        /***
         * Piano Sustain Pedal
         * Offset in file: 0x48 (just bit 0x40)
         *
         * Values:
         *   0x00- No
         *   0x40- Yes
         */
        sustainPedal: (pianoOffset48 & 0x40) !== 0,

        /***
         * Piano Type
         * Offset in file: 0x48 (only 4 bits, last 3 of first nibble, first of second nibble) OR 0x98
         *
         * Values:
         *   0x40- Grand
         *   0x48- Upright
         *   0x50- Electric
         *   0x58- Clav
         *   0x60- Digital
         *   0x68- Misc
         */
        type: mapping.pianoTypeMap.get((pianoOffset48 & 0x38) >> 3),

        /***
         * Piano Model
         * Offset in file: 0x48 and 0x49 (last 3 bits of 0x49 and first 2 bits of 0x4A).
         *
         * Values:
         *   0x00 0x00: model 1
         *   0x00 0x01: model 2
         *   .. and so on
         *   0x02 0x01: model 10
         */
        model: (pianoOffset48W & 0x07c0) >> 6,

        /***
         * Piano Timbre
         * Offset in file: 0x4E
         *
         * Possible Values:
         *   0x00- None
         *   0x08- Soft
         *   0x10- Mid
         *   0x18- Bright
         *   0x20- DYNO1
         *   0x28- DYNO2
         */
        timbre: mapping.pianoTimbreMap.get((pianoOffset4e & 0x38) >> 3),

        /***
         * Piano KB Touch
         * Offset in file: 0x4D (just least significant bit 1, so OR 0x01) and
         *                 0x4E (Just Most Significant Bit, so OR 0x80)
         *
         * Values:
         *   0x00 + 0x8x- KB Touch 1
         *   0x01 + 0x0x- KB Touch 2
         *   0x01 + 0x8x- KB Touch 3
         */
        kbTouch: mapping.pianoKbTouchMap.get((pianoOffset4dW & 0x0180) >> 7),

        /***
         * Piano Layer Detune
         * Offset in file: 0x34
         *
         * Values:
         *   0x00- Off
         *   0x20- 1
         *   0x40- 2
         *   0x60- 3
         */
        layerDetune: mapping.pianoLayerDetuneMap.get((pianoOffset34 & 0x60) >> 5),

        /***
         * Piano Soft Release
         * Offset in file: 0x4D (just least significant bit 4, so OR 0x08)
         *
         * Values:
         *   0x00 - No
         *   0x08 - Soft Release
         */
        softRelease: (pianoOffset4d & 0x08) !== 0,

        /***
         * Piano Pedal Noise
         * Offset in file: 0x4D (just least significant bit 2, so OR 0x02)
         *
         * Values:
         *   0x00- No
         *   0x02- Pedal Noise
         */
        pedalNoise: (pianoOffset4d & 0x02) !== 0,

        /***
         * Piano String Resonance
         * Offset in file: 0x4D (just least significant bit 3, so OR 0x04)
         *
         * Values:
         *   0x00- No
         *   0x04- String Res
         */
        stringResonance: (pianoOffset4d & 0x04) !== 0,
    };
};
