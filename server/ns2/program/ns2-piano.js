const mapping = require("./ns2-mapping");

const { ns2VolumeEx } = require("./ns2-utils");
const { ns2KbZone } = require("./ns2-utils");
const { ns3PianoLibrary } = require("../../common/nord-library-piano");

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
exports.ns2Piano = (buffer, panelOffset, splitEnabled, dualKeyboard, id) => {
    const pianoOffset48 = buffer.readUInt8(0x48 + panelOffset);
    const pianoOffset48Ww = buffer.readUInt32BE(0x48 + panelOffset);
    const pianoOffset4b = buffer.readUInt8(0x4b + panelOffset);
    const pianoOffset4c = buffer.readUInt8(0x4c + panelOffset);
    const pianoOffset4d = buffer.readUInt8(0x4d + panelOffset);
    const pianoOffsetCd = buffer.readUInt8(0xcd + panelOffset);

    const pianoOffset43W = buffer.readUInt16BE(0x43 + panelOffset);
    const pianoOffset47 = buffer.readUInt8(0x47 + panelOffset);
    const pianoOffset49 = buffer.readUInt8(0x49 + panelOffset);
    const pianoOffsetCdWW = buffer.readBigUInt64BE(0xcd + panelOffset);
    const pianoOffset4e = buffer.readUInt8(0x4e + panelOffset);
    const pianoOffset4dW = buffer.readUInt16BE(0x4d + panelOffset);

    const pianoEnabled = (pianoOffset48 & 0x80) !== 0;
    const pianoKbZoneEnabled =
        id === 0 ? pianoEnabled : pianoEnabled && (dualKeyboard.enabled === false || dualKeyboard.value !== "Piano");

    const pianoTypeValue = (pianoOffsetCd & 0xe0) >>> 5;
    const pianoType = mapping.ns2PianoTypeMap.get(pianoTypeValue);

    const pianoKbZone = ns2KbZone(pianoKbZoneEnabled, splitEnabled, (pianoOffset4c & 0xe0) >>> 5);

    const pianoSampleId = Number((pianoOffsetCdWW & 0x0000003fffffffc0n) >> 6n);
    let pianoName = ns3PianoLibrary.get(pianoSampleId);
    if (pianoName instanceof Array) {
        pianoName = pianoName[0];
    }

    const piano = {
        // debug: {
        //     sampleId: pianoSampleId.toString(16),
        //     name: pianoName,
        // },

        /**
         * Offset in file: 0x48 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano On
         */
        enabled: pianoEnabled,

        /**
         * Offset in file: 0x4C (b7-5)
         *
         * @example
         * 0 = LO
         * 1 = LO UP
         * 2 = UP
         * 3 = UP HI
         * 4 = HI
         * 5 = LO UP HI
         *
         * @module NS2 Piano Kb Zone
         */
        kbZone: {
            array: pianoKbZone[1],
            value: pianoKbZone[0],
        },

        /**
         * Offset in file: 0x4B (b6-0)
         *
         * @example
         *
         * Morph Wheel:
         * 0x48 (b6): polarity (1 = positive, 0 = negative)
         * 0x48 (b5-b0), 0x49 (b7): 7-bit raw value
         *
         * Morph After Touch:
         * 0x49 (b6): polarity (1 = positive, 0 = negative)
         * 0x49 (b5-b0), 0x4A (b7): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x4A (b6): polarity (1 = positive, 0 = negative)
         * 0x4A (b5-b0), 0x4B (b7): 7-bit raw value
         *
         * if polarity = 1 then Morph offset value = raw value
         * if polarity = 0 then Morph offset value = 128 - raw value
         *
         * Final 'To' Morph value = 'From value (original volume)' + 'Morph offset value'
         * Morph Enabled if  'From value' <> 'Morph offset value'
         *
         * @module NS2 Piano Volume
         */
        volume: ns2VolumeEx(buffer, pianoOffset4b & 0x7f, pianoOffset48Ww >>> 7),

        /**
         * Offset in file: 0x4C (b4-1)
         *
         * @example
         * Octave Shift = value - 7
         *
         * @module NS2 Piano Octave Shift
         */
        octaveShift: {
            value: ((pianoOffset4c & 0x1e) >>> 1) - 7,
        },
        /**
         * Offset in file: 0x4C (b0)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Pitch Stick
         */
        pitchStick: {
            enabled: (pianoOffset4c & 0x01) !== 0,
        },
        /**
         * Offset in file: 0x4D (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Sustain Pedal
         */
        sustainPedal: {
            enabled: (pianoOffset4d & 0x80) !== 0,
        },
        /**
         * Offset in file: 0xCD (b7-5)
         *
         * @example
         * 0 = Grand
         * 1 = Upright
         * 2 = E Piano 1
         * 3 = E Piano 2
         * 4 = Clavinet
         * 5 = Harpsi
         *
         * @module NS2 Piano Type
         */
        type: {
            value: pianoType,
        },
        /**
         * Offset in file: 0xD0 (b5-0), 0xD1/0xD3 (b7-0), and 0xD4 (b7-6)
         *
         * @example
         * 32-bit Nord Sample ID
         *
         * @module NS2 Piano Sample ID
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
         * @module NS3 Piano Timbre
         */
        // timbre: {
        //     value: pianoTimbre,
        // },
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
         * @module NS3 Piano Layer Detune
         */
        layerDetune: {
            value: 0, //mapping.pianoLayerDetuneMap.get((pianoOffset34 & 0x60) >>> 5),
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
         * @module NS3 Piano Pedal Noise
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
         * @module NS3 Piano String Resonance
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
