const mapping = require("./ns3-mapping");
const { ns3PianoLibrary } = require("../../common/nord-library-piano");
const { getKbZone } = require("./ns3-utils");
const { getVolumeEx } = require("./ns3-utils");

/***
 * returns Piano section
 *
 * @class
 * @ignore
 * @param buffer {Buffer}
 * @param panelOffset
 * @param splitEnabled
 * @param dualKeyboard
 * @param id
 * @returns {{kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}}
 */
exports.getPiano = (buffer, panelOffset, splitEnabled, dualKeyboard, id) => {
    const pianoOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const pianoOffset43W = buffer.readUInt16BE(0x43 + panelOffset);
    const pianoOffset47 = buffer.readUInt8(0x47 + panelOffset);
    const pianoOffset48 = buffer.readUInt8(0x48 + panelOffset);
    const pianoOffset49 = buffer.readUInt8(0x49 + panelOffset);
    const pianoOffset49WW = buffer.readBigUInt64BE(0x49 + panelOffset);
    const pianoOffset48W = buffer.readUInt16BE(0x48 + panelOffset);
    const pianoOffset4e = buffer.readUInt8(0x4e + panelOffset);
    const pianoOffset4d = buffer.readUInt8(0x4d + panelOffset);
    const pianoOffset4dW = buffer.readUInt16BE(0x4d + panelOffset);

    const pianoEnabled = (pianoOffset43W & 0x8000) !== 0;
    const pianoKbZoneEnabled =
        id === 0 ? pianoEnabled : pianoEnabled && (dualKeyboard.enabled === false || dualKeyboard.value !== "Piano");

    const pianoTypeValue = (pianoOffset48 & 0x38) >>> 3;
    const pianoType = mapping.pianoTypeMap.get(pianoTypeValue);

    const pianoKbZone = getKbZone(pianoKbZoneEnabled, splitEnabled, (pianoOffset43W & 0x7800) >>> 11);
    const pianoModel = ((pianoOffset48W & 0x07c0) >>> 6) + 1;

    const pianoSampleVariation = (pianoOffset49 & 0x30) >>> 4;
    const pianoSampleId = Number((pianoOffset49WW & 0x0ffffffff0000000n) >> 28n);
    let pianoName = ns3PianoLibrary.get(pianoSampleId);
    if (pianoName instanceof Array) {
        if (pianoSampleVariation >= 0 && pianoSampleVariation < pianoName.length) {
            pianoName = pianoName[pianoSampleVariation];
        } else {
            pianoName = pianoName[0] + " unknown variation";
        }
    }
    if (!pianoName) {
        // fallback if piano name is unknown
        pianoName = "Unknown (Loc " + pianoModel + ")";
    }

    const pianoTimbreValues = mapping.pianoTimbreMap.get((pianoOffset4e & 0x38) >>> 3);

    // Timbre are different for each Piano type
    // with one subtle Harpsi case:
    // Harpsi sample are not used Clav timbre category but the default Soft/Mid/Bright
    //
    const pianoTypeForTimbre = pianoTypeValue === 3 && pianoName.includes("Harpsi") ? 0 : pianoTypeValue;

    const pianoTimbre = pianoTypeValue >= 0 && pianoTypeValue < 6 ? pianoTimbreValues[pianoTypeForTimbre] : "None";

    const piano = {
        debug: {
            sampleVariation: pianoSampleVariation,
            sampleId: pianoSampleId.toString(16),
            name: pianoName,
        },

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
        kbZone: {
            array: pianoKbZone[1],
            value: pianoKbZone[0],
        },

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
        octaveShift: {
            value: (pianoOffset47 & 0x07) - 6,
        },
        /**
         * Offset in file: 0x48 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano Pitch Stick
         */
        pitchStick: {
            enabled: (pianoOffset48 & 0x80) !== 0,
        },
        /**
         * Offset in file: 0x48 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module Piano Sustain Pedal
         */
        sustainPedal: {
            enabled: (pianoOffset48 & 0x40) !== 0,
        },
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
        type: {
            value: pianoType,
        },
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
        model: {
            value: pianoModel,
        },
        /**
         * Offset in file: 0x49 (b3-0) to 0x4D (b7-3)
         *
         * @example
         * 32-bit Nord Sample ID
         *
         * @module Piano Name
         */
        name: {
            value: pianoName,
        },
        /**
         * Offset in file: 0x4E (b5-3)
         *
         * @example
         * Grand, Upright, Digital, Misc Piano, and Harpsichord:
         * 0 = None
         * 1 = Soft
         * 2 = Mid
         * 3 = Bright
         *
         * Electric Piano
         * 0 = None
         * 1 = Soft
         * 2 = Mid
         * 3 = Bright
         * 4 = Dyno1
         * 5 = Dyno2
         *
         * Clavinet
         * 0 = None
         * 1 = Soft
         * 2 = Treble
         * 3 = Soft+Treble
         * 4 = Brilliant
         * 5 = Soft+Brill
         * 6 = Treble+Brill
         * 7 = Soft+Trb+Brill
         *
         * @module Piano Timbre
         */
        timbre: {
            value: pianoTimbre,
        },
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
        kbTouch: {
            value: mapping.pianoKbTouchMap.get((pianoOffset4dW & 0x0180) >>> 7),
        },
        /**
         * Offset in file: 0x34 (b6-5)
         *
         * @example
         * 0 =  Off
         * 1 =  1
         * 2 =  2
         * 3 =  3
         *
         * Note: This parameter is common for both Panel. Layer Detune setting cannot be different
         * for each panel, only offset 0x34 is used.
         *
         * @module Piano Layer Detune
         */
        layerDetune: {
            value: mapping.pianoLayerDetuneMap.get((pianoOffset34 & 0x60) >>> 5),
        },
        /**
         * Offset in file: 0x4D (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * Not available on Clavinet and Digital Piano
         *
         * @module Piano Soft Release
         */
        softRelease: {
            enabled: pianoTypeValue !== 3 && pianoTypeValue !== 4 && (pianoOffset4d & 0x08) !== 0,
        },
        /**
         * Offset in file: 0x4D (b2)
         *
         * @example
         * O = off, 1 = on
         *
         * Only on Grand, Upright, and Electric piano.
         *
         * @module Piano Pedal Noise
         */
        pedalNoise: {
            enabled: pianoTypeValue <= 2 && (pianoOffset4d & 0x02) !== 0,
        },
        /**
         * Offset in file: 0x4D (b3)
         *
         * @example
         * O = off, 1 = on
         *
         * Only on Grand and Upright piano.
         *
         * @module Piano String Resonance
         */
        stringResonance: {
            enabled: pianoTypeValue <= 1 && (pianoOffset4d & 0x04) !== 0,
        },
    };

    if (process.env.NODE_ENV === "production") {
        piano.debug = undefined;
    }

    return piano;
};
