const mapping = require("./ns2-mapping");
const { ns2VolumeEx } = require("./ns2-utils");
const { ns2KbZone } = require("./ns2-utils");
const byteSize = require("byte-size");
const { ns2PianoLibrary } = require("../library/ns2-library-piano");

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
    const pianoOffset3b = buffer.readUInt8(0x3b + panelOffset);
    const pianoOffset48 = buffer.readUInt8(0x48 + panelOffset);
    const pianoOffset48Ww = buffer.readUInt32BE(0x48 + panelOffset);
    const pianoOffset4b = buffer.readUInt8(0x4b + panelOffset);
    const pianoOffset4c = buffer.readUInt8(0x4c + panelOffset);
    const pianoOffset4d = buffer.readUInt8(0x4d + panelOffset);
    const pianoOffset5a = buffer.readUInt8(0x5a + panelOffset);
    const pianoOffsetCd = buffer.readUInt8(0xcd + panelOffset);
    const pianoOffsetCeW = buffer.readUInt16BE(0xce + panelOffset);
    const pianoOffsetCf = buffer.readUInt8(0xcf + panelOffset);
    const pianoOffsetD0 = buffer.readUInt8(0xd0 + panelOffset);

    const pianoOffsetCdWww = buffer.readBigUInt64BE(0xcd + panelOffset);

    const pianoEnabled = (pianoOffset48 & 0x80) !== 0;
    const pianoKbZoneEnabled =
        id === 0 ? pianoEnabled : pianoEnabled && (dualKeyboard.enabled === false || dualKeyboard.value !== "Piano");

    const pianoTypeValue = (pianoOffsetCd & 0xe0) >>> 5;
    const pianoType = mapping.ns2PianoTypeMap.get(pianoTypeValue);
    const clavinetEnabled = pianoType === "Clavinet";

    const pianoKbZone = ns2KbZone(pianoKbZoneEnabled, splitEnabled, (pianoOffset4c & 0xe0) >>> 5);

    const pianoSampleId = Number((pianoOffsetCdWww & 0x0000003fffffffc0n) >> 6n);
    let pianoLib = ns2PianoLibrary.get(pianoSampleId);
    if (!pianoLib) {
        pianoLib = {
            name: "unknown",
            info: "",
            version: "",
            size: 0,
        };
    }

    const piano = {
        debug: {
            sampleId: pianoSampleId.toString(16),
            name: pianoLib.name,
        },

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
         * Offset in file: 0x5A (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Latch Pedal
         */
        latchPedal: {
            enabled: (pianoOffset5a & 0x80) !== 0,
        },
        /**
         * Offset in file: 0x5A (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Kb Gate
         */
        kbGate: {
            enabled: (pianoOffset5a & 0x40) !== 0,
        },
        /**
         * Offset in file: 0xCD (b7-5)
         *
         * @example
         * #include ns2PianoTypeMap
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
            value: pianoLib.name,
            info: pianoLib.info,
            version: pianoLib.version,
            size: byteSize(pianoLib.size).toString(),
        },
        /**
         * Offset in file: 0x3B (b7-5)
         *
         * @example
         * #include ns2PianoSlotDetuneMap
         *
         * @module NS2 Piano Slot Detune
         */
        slotDetune: {
            value: mapping.ns2PianoSlotDetuneMap.get((pianoOffset3b & 0xe0) >>> 5),
        },
        /**
         * Offset in file: 0xCF (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Long Release
         */
        longRelease: {
            enabled: (pianoOffsetCf & 0x40) !== 0,
        },
        /**
         * Offset in file: 0xCF (b5)
         *
         * @example
         * O = off, 1 = on
         *
         * Only on Acoustic Grand or Upright Piano
         *
         * @module NS2 Piano String Resonance
         */
        stringResonance: {
            enabled: (pianoOffsetCf & 0x20) !== 0,
        },
        /**
         * Offset in file: 0xCF (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * Only on Acoustic and Electric piano.
         *
         * @module NS2 Piano Pedal Noise
         */
        pedalNoise: {
            enabled: (pianoOffsetCf & 0x10) !== 0,
        },
        /**
         * Offset in file: 0xCF (b3-2)
         *
         * @example
         * #include ns2PianoDynamicsMap
         *
         * @module NS2 Piano Dynamics
         */
        dynamics: {
            value: mapping.ns2PianoDynamicsMap.get((pianoOffsetCf & 0x0c) >>> 2),
        },
        /**
         * Offset in file: 0xCE (b0) and 0xCF (b7)
         *
         * @example
         * #include ns2PianoClavinetModelMap
         *
         * @module NS2 Piano Clavinet Model
         */
        clavinetModel: {
            enabled: clavinetEnabled,
            value: mapping.ns2PianoClavinetModelMap.get((pianoOffsetCeW & 0x0180) >>> 7),
        },
        /**
         * Offset in file: 0xCF (b1-0)
         *
         * @example
         * #include ns2PianoClavinetEqHiMap
         *
         * @module NS2 Piano Clavinet Eq Hi
         */
        clavinetEqHi: {
            enabled: clavinetEnabled,
            value: mapping.ns2PianoClavinetEqHiMap.get(pianoOffsetCf & 0x03),
        },
        /**
         * Offset in file: 0xD0 (b7-6)
         *
         * @example
         * #include ns2PianoClavinetEqMap
         *
         * @module NS2 Piano Clavinet Eq
         */
        clavinetEq: {
            enabled: clavinetEnabled,
            value: mapping.ns2PianoClavinetEqMap.get((pianoOffsetD0 & 0xc0) >>> 6),
        },
    };

    if (process.env.NODE_ENV === "production") {
        piano.debug = undefined;
    }

    return piano;
};
