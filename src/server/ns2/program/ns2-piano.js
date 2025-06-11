import {
    ns2PianoClavinetEqHiMap,
    ns2PianoClavinetEqMap,
    ns2PianoClavinetModelMap,
    ns2PianoDynamicsMap,
    ns2PianoSlotDetuneMap,
    ns2PianoTypeMap,
    ns2ProgramOutputMap,
} from "./ns2-mapping";
import { getSample, getSampleIdNs2ToNs3 } from "../../library/ns3-library-service";
import { ns2BooleanValue, ns2KbZone, ns2OctaveShift, ns2VolumeEx } from "./ns2-utils";

/***
 * returns Piano section
 *
 * @param buffer {Buffer}
 * @param id
 * @param panelOffset
 * @param global
 * @returns {{debug: {lib: {size: string, value: (string|*), version: string, info: string}, sampleId: string}, kbZone: {array, value}, longRelease: {enabled: boolean}, sustainPedal: {enabled: boolean}, type: {value: string}, clavinetEqHi: {value: string, enabled: boolean}, octaveShift: {value: number}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, output: {value: string}, dynamics: {value: string}, pitchStick: {enabled: boolean}, slotDetune: {value: string}, stringResonance: {enabled: boolean}, name: {size: string, value: (string|*), version: string, info: string}, pedalNoise: {enabled: boolean}, clavinetModel: {value: string, enabled: boolean}, latchPedal: {enabled: boolean}, kbGate: {enabled: boolean}, clavinetEq: {value: string, enabled: boolean}}}
 */
const ns2Piano = (buffer, id, panelOffset, global) => {
    const pianoOffset3b = buffer.readUInt8(0x3b + panelOffset);
    const pianoOffset48 = buffer.readUInt8(0x48 + panelOffset);
    const pianoOffset48Ww = buffer.readUInt32BE(0x48 + panelOffset);
    const pianoOffset4b = buffer.readUInt8(0x4b + panelOffset);
    const pianoOffset4c = buffer.readUInt8(0x4c + panelOffset);
    const pianoOffset4d = buffer.readUInt8(0x4d + panelOffset);
    const pianoOffset58 = buffer.readUInt8(0x58 + panelOffset);
    const pianoOffset5a = buffer.readUInt8(0x5a + panelOffset);
    const pianoOffsetCd = buffer.readUInt8(0xcd + panelOffset);
    const pianoOffsetCeW = buffer.readUInt16BE(0xce + panelOffset);
    const pianoOffsetCf = buffer.readUInt8(0xcf + panelOffset);
    const pianoOffsetD0 = buffer.readUInt8(0xd0 + panelOffset);

    const pianoOffsetCdWww = buffer.readBigUInt64BE(0xcd + panelOffset);

    const pianoEnabled = (pianoOffset48 & 0x80) !== 0;
    const pianoKbZoneEnabled = id === 0 ? pianoEnabled : pianoEnabled && global.dualKeyboard.enabled === false; // || global.dualKeyboard.value !== "Piano");

    const pianoTypeValue = (pianoOffsetCd & 0xe0) >>> 5;
    const pianoType = ns2PianoTypeMap.get(pianoTypeValue);
    const clavinetEnabled = pianoType === "Clavinet";

    const pianoKbZone = ns2KbZone(pianoKbZoneEnabled, global, (pianoOffset4c & 0xe0) >>> 5);
    const clavinetVariation = (pianoOffsetCeW & 0x0180) >>> 7;
    const clavinetModel = ns2PianoClavinetModelMap.get(clavinetVariation);

    const ns2PianoSampleId = BigInt((pianoOffsetCdWww & 0x0000003fffffffc0n) >> 6n);
    const pianoSampleId = getSampleIdNs2ToNs3(ns2PianoSampleId);

    let pianoLib = getSample(pianoSampleId, clavinetVariation);
    const routing = ns2ProgramOutputMap.get(pianoOffset58 & 0x03);

    /**
     * Offset in file: 0x3B (b7-5)
     *
     * @example
     * #include ns2PianoSlotDetuneMap
     *
     * @module NS2 Piano Slot Detune
     */
    const slotDetune = (pianoOffset3b & 0xe0) >>> 5;

    /**
     * Offset in file: 0xCF (b3-2)
     *
     * @example
     * #include ns2PianoDynamicsMap
     *
     * @module NS2 Piano Dynamics
     */
    const dynamics = (pianoOffsetCf & 0x0c) >>> 2;

    const piano = {
        debug: {
            sampleId: ns2PianoSampleId.toString(16),
            lib: pianoLib,
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
        octaveShift: ns2OctaveShift((pianoOffset4c & 0x1e) >>> 1),

        /**
         * Offset in file: 0x4C (b0)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Pitch Stick
         */
        pitchStick: ns2BooleanValue((pianoOffset4c & 0x01) !== 0, false),

        /**
         * Offset in file: 0x4D (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Sustain Pedal
         */
        sustainPedal: ns2BooleanValue((pianoOffset4d & 0x80) !== 0, true),

        /**
         * Offset in file: 0x5A (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Latch Pedal
         */
        latchPedal: ns2BooleanValue((pianoOffset5a & 0x80) !== 0, true),

        /**
         * Offset in file: 0x5A (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Kb Gate
         */
        kbGate: ns2BooleanValue((pianoOffset5a & 0x40) !== 0, false),

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
            isDefault: pianoTypeValue === 0,
        },
        /**
         * Offset in file: 0xD0 (b5-0), 0xD1/0xD3 (b7-0), and 0xD4 (b7-6)
         *
         * @example
         * 32-bit Nord Sample ID
         *
         * @module NS2 Piano Sample ID
         */
        name: pianoLib,

        slotDetune: {
            midi: slotDetune,
            value: ns2PianoSlotDetuneMap.get(slotDetune),
            isDefault: slotDetune === 0,
        },
        /**
         * Offset in file: 0xCF (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Piano Long Release
         */
        longRelease: ns2BooleanValue((pianoOffsetCf & 0x40) !== 0 && pianoLib.softRelease, false),

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
        stringResonance: ns2BooleanValue((pianoOffsetCf & 0x20) !== 0 && pianoLib.stringsRes, false),

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
        pedalNoise: ns2BooleanValue((pianoOffsetCf & 0x10) !== 0 && pianoLib.pedalNoise, false),

        dynamics: {
            midi: dynamics,
            value: ns2PianoDynamicsMap.get(dynamics),
            isDefault: dynamics === 0,
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
            value: clavinetModel,
            isDefault: false,
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
            value: ns2PianoClavinetEqHiMap.get(pianoOffsetCf & 0x03),
            isDefault: false,
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
            value: ns2PianoClavinetEqMap.get((pianoOffsetD0 & 0xc0) >>> 6),
            isDefault: false,
        },

        /**
         * Offset in file 0x58 (b1-0)
         *
         * @example
         * #include ns2ProgramOutputMap
         *
         * @module NS2 Piano Program Output
         */
        output: {
            value: routing,
            isDefault: routing === ns2ProgramOutputMap.get(0),
        },
    };

    if (process.env.NODE_ENV === "production") {
        piano.debug = undefined;
    }

    return piano;
};

export { ns2Piano };
