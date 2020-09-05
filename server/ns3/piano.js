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
         * Offset in file: 0x43 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano On
         */
        enabled: pianoEnabled,

        /**
         * Offset in file: 0x43 (b6-3)
         * @see {@link api.md#organ-kb-zone Organ Kb Zone} for detailed explanation.
         *
         * @module Piano Kb Zone
         */
        kbZone: getKbZone(pianoEnabled, splitEnabled, (pianoOffset43W & 0x7800) >>> 11),

        /**
         * Offset in file: 0x43 (b2-0), 0x44 (b7-4)
         *
         * @example
         *
         * Morph Wheel:
         * 0x44 (b3): polarity (1 = positive, 0 = negative)
         * 0x44 (b2-b0), 0x45 (b7-b4): 7-bit raw value
         *
         * Morph After Touch:
         * 0x45 (b3): polarity (1 = positive, 0 = negative)
         * 0x45 (b2-b0), 0x46 (b7-b4): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x46 (b3): polarity (1 = positive, 0 = negative)
         * 0x46 (b2-b0), 0x47 (b7-b4): 7-bit raw value
         *
         * @see {@link api.md#organ-volume Organ Volume} for Morph detailed explanation.
         *
         * @module Piano Volume
         */
        volume: getVolumeEx(buffer, 0x43 + panelOffset),

        /**
         * Offset in file: 0x47 (b2-0)
         *
         * @example
         * Octave Shift = value - 6
         *
         * @module Piano Octave Shift
         */
        octaveShift: (pianoOffset47 & 0x07) - 6,

        /**
         * Offset in file: 0x48 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano Pitch Stick
         */
        pitchStick: (pianoOffset48 & 0x80) !== 0,

        /**
         * Offset in file: 0x48 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano Sustain Pedal
         */
        sustainPedal: (pianoOffset48 & 0x40) !== 0,

        /**
         * Offset in file: 0x48 (b5-3)
         *
         * @example
         * 0 = Grand
         * 1 = Upright
         * 2 = Electric
         * 3 = Clav
         * 4 = Digital
         * 5 = Misc
         *
         * @module Piano Type
         */
        type: mapping.pianoTypeMap.get((pianoOffset48 & 0x38) >>> 3),

        /**
         * Offset in file:  0x48 (b2-0) and 0x49 (b7-6)
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
         * Offset in file: 0x4E (b5-3)
         *
         * @example
         * 0 = None
         * 1 = Soft
         * 2 = Mid
         * 3 = Bright
         * 4 = DYNO1
         * 5 = DYNO2
         *
         * @module Piano Timbre
         */
        timbre: mapping.pianoTimbreMap.get((pianoOffset4e & 0x38) >>> 3),

        /**
         * Offset in file: 0x4D (b0) and 0x4E (b7)
         *
         * @example
         * 0 = Normal
         * 1 = KB Touch 1
         * 2 = Touch 2
         * 3 = Touch 3
         *
         * @module Piano KB Touch
         */
        kbTouch: mapping.pianoKbTouchMap.get((pianoOffset4dW & 0x0180) >>> 7),

        /**
         * Offset in file: 0x34 (b6-5)
         *
         * @example
         * 0 =  Off
         * 1 =  1
         * 2 =  2
         * 3 =  3
         *
         * @module Piano Layer Detune
         */
        layerDetune: mapping.pianoLayerDetuneMap.get((pianoOffset34 & 0x60) >>> 5),

        /**
         * Offset in file: 0x4D (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano Soft Release
         */
        softRelease: (pianoOffset4d & 0x08) !== 0,

        /**
         * Offset in file: 0x4D (b2)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano Pedal Noise
         */
        pedalNoise: (pianoOffset4d & 0x02) !== 0,

        /**
         * Offset in file: 0x4D (b3)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano String Resonance
         */
        stringResonance: (pianoOffset4d & 0x04) !== 0,
    };
};
