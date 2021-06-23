const mapping = require("./ns3-mapping");
const { getSample } = require("../../library/ns3-library-service");
const { ns3KbZone, ns3OctaveShift, ns3VolumeEx, ns3BooleanValue } = require("./ns3-utils");

/***
 * returns Piano section
 *
 * @class
 * @ignore
 * @param buffer {Buffer}
 * @param id {number}
 * @param panelOffset {number}
 * @param global
 * @returns {{kbTouch: {isDefault: boolean, value: string}, debug: {lib: {size: string, value: (string|*), version: string, info: string}, sampleId: string, sampleVariation: number}, kbZone: {array, value}, softRelease: {midi: number, isDefault: boolean, enabled}, sustainPedal: {midi: number, isDefault: boolean, enabled}, type: {isDefault: boolean, value: string}, octaveShift: {midi, isDefault: boolean, value: string}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: {isDefault: boolean, value: (string|string)}, pitchStick: {midi: number, isDefault: boolean, enabled}, stringResonance: {midi: number, isDefault: boolean, enabled}, name: {size: string, value: (string|*), version: string, info: string}, model: {isDefault: boolean, value: number}, pedalNoise: {midi: number, isDefault: boolean, enabled}, layerDetune: {isDefault: boolean, value: string}}}
 */
exports.ns3Piano = (buffer, id, panelOffset, global) => {
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
        id === 0
            ? pianoEnabled
            : pianoEnabled && (global.dualKeyboard.enabled === false || global.dualKeyboard.value !== "Piano");

    const pianoTypeValue = (pianoOffset48 & 0x38) >>> 3;
    const pianoType = mapping.ns3PianoTypeMap.get(pianoTypeValue);

    const pianoKbZone = ns3KbZone(pianoKbZoneEnabled, global, (pianoOffset43W & 0x7800) >>> 11);
    const pianoModel = ((pianoOffset48W & 0x07c0) >>> 6) + 1;

    /**
     * Offset in file: 0x49 (b5-4)
     *
     * @example
     * Clavinet D6 5.0.npno is a multi-file with all 4 pick-up variations.
     * This setting defines the pick-up variation.
     * 0 = CA
     * 1 = CB
     * 2 = DA
     * 3 = DB
     *
     * @module NS3 Clavinet Model
     */
    const pianoSampleVariation = (pianoOffset49 & 0x30) >>> 4;
    const pianoSampleId = Number((pianoOffset49WW & 0x0ffffffff0000000n) >> 28n);
    const pianoLib = getSample(pianoSampleId, pianoSampleVariation, pianoModel);

    const pianoTimbreRaw = (pianoOffset4e & 0x38) >>> 3;
    const pianoTimbreValues = mapping.ns3PianoTimbreMap.get(pianoTimbreRaw);

    // Timbre are different for each Piano type
    // with one subtle Harpsi case:
    // Harpsi sample are not used Clav timbre category but the default Soft/Mid/Bright
    //
    const pianoTypeForTimbre = pianoTypeValue === 3 && pianoLib.value.includes("Harpsi") ? 0 : pianoTypeValue;

    const pianoTimbre = pianoTypeValue >= 0 && pianoTypeValue < 6 ? pianoTimbreValues[pianoTypeForTimbre] : "None";

    const kbTouch = (pianoOffset4dW & 0x0180) >>> 7;

    const layerDetune = (pianoOffset34 & 0x60) >>> 5;

    const piano = {
        debug: {
            sampleVariation: pianoSampleVariation,
            sampleId: pianoSampleId.toString(16),
            lib: pianoLib,
        },

        /**
         * Offset in file: 0x43 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Piano On
         */
        enabled: pianoEnabled,

        /**
         * Offset in file: 0x43 (b6-3)
         * @see {@link ns3-doc.md#ns3-organ-kb-zone Organ Kb Zone} for detailed explanation.
         *
         * @module NS3 Piano Kb Zone
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
         * 0x44 (b3-b0), 0x45 (b7-b4): 8-bit raw value
         *
         * Morph After Touch:
         * 0x45 (b3-b0), 0x46 (b7-b4): 8-bit raw value
         *
         * Morph Control Pedal:
         * 0x46 (b3-b0), 0x47 (b7-b4): 8-bit raw value
         *
         * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed explanation.
         *
         * @module NS3 Piano Volume
         */
        volume: ns3VolumeEx(buffer, 0x43 + panelOffset),

        /**
         * Offset in file: 0x47 (b3-0)
         *
         * @example
         * Octave Shift = value - 6
         *
         * @module NS3 Piano Octave Shift
         */
        octaveShift: ns3OctaveShift(pianoOffset47 & 0x0f),

        /**
         * Offset in file: 0x48 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Piano Pitch Stick
         */
        pitchStick: ns3BooleanValue((pianoOffset48 & 0x80) !== 0, false),

        /**
         * Offset in file: 0x48 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Piano Sustain Pedal
         */
        sustainPedal: ns3BooleanValue((pianoOffset48 & 0x40) !== 0, true),

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
         * @module NS3 Piano Type
         */
        type: {
            value: pianoType,
            isDefault: pianoType === "Grand",
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
         * @module NS3 Piano Model
         */
        model: {
            value: pianoModel,
            isDefault: pianoModel === 0,
        },
        /**
         * Offset in file: 0x49 (b3-0) to 0x4D (b7-3)
         *
         * @example
         * 32-bit piano sample hash code
         *
         * @module NS3 Piano Name
         */
        name: pianoLib,
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
         * @module NS3 Piano Timbre
         */
        timbre: {
            value: pianoTimbre,
            isDefault: pianoTimbreRaw === 0,
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
         * @module NS3 Piano KB Touch
         */
        kbTouch: {
            value: mapping.ns3PianoKbTouchMap.get(kbTouch),
            isDefault: kbTouch === 0,
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
         * Note: Same value is used for both panel A & B
         *
         * @module NS3 Piano Layer Detune
         */
        layerDetune: {
            value: mapping.ns3PianoLayerDetuneMap.get(layerDetune),
            isDefault: layerDetune === 0,
        },
        /**
         * Offset in file: 0x4D (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * Not available on Clavinet and Digital Piano
         *
         * @module NS3 Piano Soft Release
         */
        softRelease: ns3BooleanValue((pianoOffset4d & 0x08) !== 0 && pianoLib.softRelease, false),

        /**
         * Offset in file: 0x4D (b2)
         *
         * @example
         * O = off, 1 = on
         *
         * Only on Grand, Upright, and Electric piano.
         *
         * @module NS3 Piano Pedal Noise
         */
        pedalNoise: ns3BooleanValue((pianoOffset4d & 0x02) !== 0 && pianoLib.pedalNoise, false),

        /**
         * Offset in file: 0x4D (b3)
         *
         * @example
         * O = off, 1 = on
         *
         * Only on Grand and Upright piano.
         *
         * @module NS3 Piano String Resonance
         */
        stringResonance: ns3BooleanValue((pianoOffset4d & 0x04) !== 0 && pianoLib.stringsRes, false),
    };

    if (process.env.NODE_ENV === "production") {
        piano.debug = undefined;
    }

    return piano;
};
