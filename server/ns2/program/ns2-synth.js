const mapping3 = require("./../../ns3/program/ns3-mapping");
const converter = require("../../common/converter");
const mapping = require("./ns2-mapping");
const {ns2OscShape} = require("./ns2-synth-osc-shape");
const { ns2KbZone } = require("./ns2-utils");
const { ns2VolumeEx } = require("./ns2-utils");
const { getSampleIdNs2ToNs3 } = require("../../library/ns3-library-service");
const { ns3SynthPreset } = require("./../../ns3/program/ns3-utils");
const { getSample } = require("../../library/ns3-library-service");
const { ns3MorphSynthOscillatorModulation } = require("./../../ns3/program/ns3-morph");
const { ns3Morph } = require("./../../ns3/program/ns3-morph");
const { ns3Filter } = require("./../../ns3/program/ns3-synth-filter");
const { ns3OscControl } = require("./../../ns3/program/ns3-synth-osc-control");
const { ns3KnobDualValues } = require("./../../ns3/program/ns3-utils");

/***
 * Synth Envelope Decay / Release value
 * @param value
 * @param type
 * @returns {string}
 */
const synthEnvDecayOrReleaseLabel = function (value, type) {
    switch (type) {
        case "mod.decay": {
            if (value === 127) return "Sustain";
            else return mapping3.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
        case "mod.release": {
            if (value === 127) return "Inf";
            else return mapping3.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
        case "amp.decay": {
            if (value === 127) return "Sustain";
            else return mapping3.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
        case "amp.release": {
            return mapping3.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
    }
    return "";
};

/***
 * returns Synth section
 *
 * @param buffer {Buffer}
 * @param id {number}
 * @param slotOffset {number}
 * @param global
 * @returns {{voice: {value: *}, oscillators: {control: *, fastAttack: {enabled: boolean}, pitch: {midi: *, value: (string|string)}, type: {value: *}, waveForm1: *, config: {value: *}, modulations: {lfoAmount: {midi: *, morph: *, value: *}, modEnvAmount: {midi: *, morph: *, value: *}}}, debug: {lib: {valid: boolean, location: number, value: string, version: string, info: string}, sampleId: string, preset: {userPresetLocation: number, samplePresetLocation: number, presetName: string}}, unison: {value: *}, arpeggiator: {kbSync: {enabled: boolean}, rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, pattern: {value: *}, range: {value: *}, enabled: boolean}, kbZone: {array: string | string[] | boolean[], value: string | string[] | boolean[]}, sustainPedal: {enabled: boolean}, keyboardHold: {enabled: boolean}, preset: *, octaveShift: {value: number}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, filter: *, pitchStick: {enabled: boolean}, lfo: {rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, wave: {value: *}}, glide: {value: *}, envelopes: {modulation: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {enabled: boolean}}, amplifier: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {value: *}}}, vibrato: {value: *}}}
 */
exports.ns2Synth = (buffer, id, slotOffset, global) => {
    const synthOffset4d = buffer.readUInt8(0x4d + slotOffset);
    const synthOffset4dWw = buffer.readUInt32BE(0x4d + slotOffset);
    const synthOffset50W = buffer.readUInt16BE(0x50 + slotOffset);
    const synthOffset51 = buffer.readUInt8(0x51 + slotOffset);
    const synthOffset52 = buffer.readUInt8(0x52 + slotOffset);
    const synthOffset5a = buffer.readUInt8(0x5a + slotOffset);
    const synthOffsetDc = buffer.readUInt8(0xdc + slotOffset);
    const synthOffsetE1W = buffer.readUInt16BE(0xe1 + slotOffset);
    const synthOffsetE2W = buffer.readUInt16BE(0xe2 + slotOffset);
    const synthOffsetE7W = buffer.readUInt16BE(0xe7 + slotOffset);
    const synthOffsetEc = buffer.readUInt8(0xec + slotOffset);
    const synthOffsetFbW = buffer.readUInt16BE(0xfb + slotOffset);
    const synthOffsetFcW = buffer.readUInt16BE(0xfc + slotOffset);


    const synthOffset80 = buffer.readUInt8(0x80 + slotOffset);
    const synthOffset81 = buffer.readUInt8(0x81 + slotOffset);
    const synthOffset81Ww = buffer.readUInt32BE(0x81 + slotOffset);
    const synthOffset84W = buffer.readUInt16BE(0x84 + slotOffset);
    const synthOffset86 = buffer.readUInt8(0x86 + slotOffset);
    const synthOffset87 = buffer.readUInt8(0x87 + slotOffset);
    const synthOffset87Ww = buffer.readUInt32BE(0x87 + slotOffset);
    const synthOffset8bW = buffer.readUInt16BE(0x8b + slotOffset);
    const synthOffset8cW = buffer.readUInt16BE(0x8c + slotOffset);
    const synthOffset8dW = buffer.readUInt16BE(0x8d + slotOffset);


    const synthOffsetF4WW = buffer.readBigUInt64BE(0xf4 + slotOffset);
    const synthOffsetA5W = buffer.readUInt16BE(0xa5 + slotOffset);
    const synthOffsetA6W = buffer.readUInt16BE(0xa6 + slotOffset);
    const synthOffsetA7W = buffer.readUInt16BE(0xa7 + slotOffset);
    const synthOffsetA8 = buffer.readUInt8(0xa8 + slotOffset);


    /**
     * Offset in file: 0xf7 (b1-0) to 0xfb (b7-2)
     *
     *  @example
     *  32-bit synth sample hash code.
     *
     * @module NS2 Synth Sample ID
     */
    const synthNs2SampleId = BigInt((synthOffsetF4WW & 0x03fffffffcn) >> 2n);
    const sampleId = getSampleIdNs2ToNs3(synthNs2SampleId);

    const oscillatorType = mapping.ns2SynthOscillatorTypeMap.get((synthOffsetE1W & 0x0380) >>> 7);

    let waveForm = {
        valid: false,
        value: "",
        info: "",
        version: "",
        location: (synthOffsetE2W & 0x7fe0) >>> 5,
    };
    switch (oscillatorType) {
        case "TRI":
        case "SAW":
        case "PULSE":
            waveForm.value = oscillatorType + " " + mapping.ns2SynthOscillatorAnalogStyleWaveFormsMap.get(waveForm.location);
            waveForm.valid = waveForm.value !== undefined;
            break;
        case "SAMPLE":
            waveForm = getSample(sampleId, 0, waveForm.location);
            if (waveForm.version.startsWith("v3.")) {
                waveForm.version = waveForm.version.replace("v3.", "v2.");
            }
            break;
        case "FM":
            waveForm.value = "FM " + mapping.ns2SynthOscillatorFmStyleWaveFormsMap.get(waveForm.location);
            waveForm.valid = waveForm.value !== undefined;
            break;
        case "WAVE":
            waveForm.value = "WAVE " + (waveForm.location + 1);
            waveForm.valid = waveForm.value !== undefined;
            break;
    }


    const oscModMidi = (synthOffsetE7W & 0x3f80) >>> 7;


    const lfoRateMidi = synthOffset87 & 0x7f;
    const lfoRateMasterClock = (synthOffset87 & 0x80) !== 0;

    const envModAttackMidi = (synthOffset8bW & 0xfe00) >>> 9;
    const envModDecayMidi = (synthOffset8bW & 0x01fc) >>> 2;
    const envModReleaseMidi = (synthOffset8cW & 0x03f8) >>> 3;

    const envAmpAttackMidi = (synthOffsetA5W & 0x03f8) >>> 3;
    const envAmpDecayMidi = (synthOffsetA6W & 0x07f0) >>> 4;
    const envAmpReleaseMidi = (synthOffsetA7W & 0x0fe0) >>> 5;

    const arpeggiatorRange = (synthOffset80 & 0x18) >>> 3;
    const arpeggiatorPattern = (synthOffset80 & 0x06) >>> 1;
    const arpeggiatorRateMidi = (synthOffset81 & 0xfe) >>> 1;
    const arpeggiatorMasterClock = (synthOffset80 & 0x01) !== 0;

    const synthEnabled = (synthOffset4d & 0x40) !== 0;
    const synthKbZoneEnabled =
        id === 0
            ? synthEnabled
            : synthEnabled && (global.dualKeyboard.enabled === false || global.dualKeyboard.value !== "Synth");

    const synthKbZoneValue = (synthOffset51 & 0x70) >>> 4;
    const synthKbZone = ns2KbZone(synthKbZoneEnabled, global, synthKbZoneValue);
    const preset = ns3SynthPreset(buffer, 0x57 + slotOffset);

    const synth = {
        debug: {
            sampleId: sampleId.toString(16),
            lib: waveForm,
            preset: preset,
        },

        /**
         * Offset in file: 0x4d (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth On
         */
        enabled: synthEnabled,

        /**
         * Offset in file: 0x51 (b6-4)
         *
         * @example
         * 0 = LO
         * 1 = LO UP
         * 2 = UP
         * 3 = UP HI
         * 4 = HI
         * 5 = LO UP HI
         *
         * @module NS2 Synth Kb Zone
         */
        kbZone: {
            array: synthKbZone[1],
            value: synthKbZone[0],
        },

        /**
         * Offset in file: 0x50 (b5-0) and 0x51 (b7)
         *
         * @example
         *
         * Morph Wheel:
         * offset in file 0x4d (b5-0) 0x4e (b7-6)
         *
         * Morph After Touch:
         * offset in file 0x4e (b5-0) 0x4f (b7-6)
         *
         * Morph Control Pedal:
         * offset in file 0x4f (b5-0) 0x50 (b7-6)
         *
         * @module NS2 Synth Volume
         */
        volume: ns2VolumeEx(buffer, (synthOffset50W & 0x3f80) >>> 7, synthOffset4dWw >>> 6),

        /**
         * Offset in file: 0x51 (b3-0)
         *
         * @example
         * Octave Shift = value - 7
         *
         * @module NS2 Synth Octave Shift
         */
        octaveShift: {
            value: (synthOffset51 & 0x0f) - 7,
        },
        /**
         * Offset in file: 0x52 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Pitch Stick
         */
        pitchStick: {
            enabled: (synthOffset52 & 0x80) !== 0,
        },
        /**
         * Offset in file: 0x52 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Sustain Pedal
         */
        sustainPedal: {
            enabled: (synthOffset52 & 0x40) !== 0,
        },
        /**
         * Offset in file: 0x5a (b5)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Latch Pedal
         */
        latchPedal: {
            enabled: (synthOffset5a & 0x20) !== 0,
        },
        /**
         * Offset in file: 0x5a (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Kb Gate
         */
        kbGate: {
            enabled: (synthOffset5a & 0x10) !== 0,
        },
        /**
         * Offset in file: 0xdc (b1)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Kb Hold
         */
        keyboardHold: {
            enabled: (synthOffsetDc & 0x02) !== 0,
        },
        /**
         * Offset in file: 0xfc (b2-1)
         *
         * @example
         * #include ns2SynthVoiceMap
         *
         * @module NS2 Synth Voice
         */
        voice: {
            value: mapping.ns2SynthVoiceMap.get((synthOffsetFcW & 0x0600) >>> 9),
        },
        /**
         * Offset in file: 0xfb (b1-0) and 0xfc (b7-3)
         *
         * @example
         * 0/127 value = 0 / 10
         *
         * @module NS2 Synth Glide
         */
        glide: {
            value: converter.midi2LinearStringValue(0, 10, (synthOffsetFbW & 0x03f8) >>> 3, 1, ""),
        },
        /**
         * Offset in file: 0xfc (b0) and 0xfd (b7-6)
         *
         * @example
         * #include ns2SynthUnisonMap
         *
         * @module NS2 Synth Unison
         */
        unison: {
            value: mapping.ns2SynthUnisonMap.get((synthOffsetFcW & 0x01c0) >>> 6),
        },
        /**
         * Offset in file: 0xfd (b5-3)
         *
         * @example
         * #include ns2SynthVibratoMap
         *
         * @module NS2 Synth Vibrato
         */
        vibrato: {
            value: mapping.ns2SynthVibratoMap.get((synthOffsetFcW & 0x0038) >>> 3),
        },
        /***
         * Synth Oscillators Definition
         */
        oscillators: {
            /**
             * Offset in file: 0xe1 (b1-0) and 0xe2 (b7)
             *
             * @example
             * #include ns2SynthOscillatorTypeMap
             *
             * @module NS2 Synth Osc Mode
             */
            type: {
                value: oscillatorType,
            },
            /**
             * Offset in file: 0xe2 (b6-0) and 0xe3 (b7-5)
             *
             * @example
             *
             * ID   | TRI  | SAW    | PULSE  | SAMPLE  | FM   | WAVE  |
             * -----|------|--------|--------|---------|------|-------|
             * O    | ---  | ---    | ---    | 1       | Sin  |  1    |
             * 1    | ShP  | ShP    | ShP    | 2       | 1 1  |  2    |
             * 2    | dtn  | dtn    | dtn    | 3       | 2 1  |  3    |
             * 3    | Snc  | Snc    | Snc    | 4       | 3 1  |  4    |
             * 4    |      |        |        | 5       | 4 1  |  5    |
             * 5    |      |        |        | 6       | 5 1  |  6    |
             * 6    |      |        |        | 7       | 6 1  |  7    |
             * 7    |      |        |        | 8       | 7 1  |  8    |
             * 8    |      |        |        | 9       | 8 1  |  9    |
             * 9    |      |        |        | 10      | 9 1  | 10    |
             * 10   |      |        |        | 11      | 1.1  | 11    |
             * 11   |      |        |        | 12      | 2.1  | 12    |
             * 12   |      |        |        | 13      | 3.1  | 13    |
             * 13   |      |        |        | 14      | 4.1  | 14    |
             * 14   |      |        |        | 15      | 5.1  | 15    |
             * 15   |      |        |        | 16      | 6.1  | 16    |
             * 16   |      |        |        | 17      | 7.1  | 17    |
             * 17   |      |        |        | 18      | 8.1  | 18    |
             * 18   |      |        |        | 19      | 9.1  | 19    |
             * 19   |      |        |        | 20      | 111  | 20    |
             * 20   |      |        |        | 21      | 211  | 21    |
             * 21   |      |        |        | 22      | 311  | 22    |
             * 22   |      |        |        | 23      | 511  | 23    |
             * 23   |      |        |        | 24      | 911  | 24    |
             * 24   |      |        |        | 25      | 221  | 25    |
             * 25   |      |        |        | 26      | 421  | 26    |
             * 26   |      |        |        | 27      | 821  | 27    |
             * 27   |      |        |        | 28      | 1.11 | 28    |
             * 28   |      |        |        | 29      | 1.21 | 29    |
             * 29   |      |        |        | 30      | 1.31 | 30    |
             * 30   |      |        |        | 31      | 1.51 | 31    |
             * 31   |      |        |        | 32      | 1.91 | 32    |
             * 32   |      |        |        | 33      | 1.12 | 33    |
             * 33   |      |        |        | 34      | 2.12 | 34    |
             * 34   |      |        |        | 35      | 3.12 | 35    |
             * 35   |      |        |        | 36      | 5.12 | 36    |
             * 36   |      |        |        | 37      | 9.12 | 37    |
             * 37   |      |        |        | 38      |      | 38    |
             * 38   |      |        |        | 39      |      | 39    |
             * 39   |      |        |        | 40      |      | 40    |
             * 40   |      |        |        | 41      |      | 41    |
             * 41   |      |        |        | 42      |      | 42    |
             * 42   |      |        |        | 43      |      | 43    |
             * 43   |      |        |        | 44      |      | 44    |
             * 44   |      |        |        | 45      |      | 45    |
             * 45   |      |        |        | 46      |      | 46    |
             * 46   |      |        |        | 47      |      | 47    |
             * 47   |      |        |        | 48      |      | 48    |
             * 48   |      |        |        | 49      |      | 49    |
             * 49   |      |        |        | 50      |      | 50    |
             * 50   |      |        |        | 51      |      | 51    |
             * 51   |      |        |        | 52      |      | 52    |
             * 52   |      |        |        | 53      |      | 53    |
             * 53   |      |        |        | 54      |      | 54    |
             * 54   |      |        |        | 55      |      | 55    |
             * 55   |      |        |        | 56      |      | 56    |
             * 56   |      |        |        | 57      |      | 57    |
             * 57   |      |        |        | 58      |      | 58    |
             * 58   |      |        |        | 59      |      | 59    |
             * 59   |      |        |        | 60      |      | 60    |
             * 60   |      |        |        | 61      |      | 61    |
             * 61   |      |        |        | 62      |      | 62    |
             * 62   |      |        |        | 63      |      | 63    |
             * 63   |      |        |        | 64      |      |       |
             * ...  |      |        |        |         |      |       |
             * 998  |      |        |        | 999     |      |       |
             * ...  |      |        |        |         |      |       |
             * 1023 |      |        |        |         |      |       |
             *
             * @module NS2 Synth Osc WaveForm
             */
            waveForm1: waveForm,
            /**
             * Offset in file: 0xe6 (b4-0) and 0xe7 (7-6)
             *
             * @example
             * 0/127 value = 0 / 10
             *
             * Morph Wheel:
             * Offset in file 0xe3 (b4-0) 0xe4 (b7-5)
             *
             * Morph After Touch:
             * Offset in file 0xe4 (b4-0) 0xe5 (b7-5)
             *
             * Morph Control Pedal:
             * Offset in file 0xe5 (b4-0) 0xe6 (b7-5)
             *
             * @module NS2 Synth Shape
             */
            shapeCtrl: ns2OscShape(buffer, slotOffset),

            /**
             * Offset in file: 0xe7 (b5-0) and 0xe8 (b7)
             *
             * @example
             * LFO from 0-63
             * MOD ENV from 64-127
             *
             * @module NS2 Synth Shape Mod
             */
            shapeMod: {
                /***
                 * Synth Shape Mod Midi Value
                 */
                midi: oscModMidi,

                /***
                 * Synth Shape Mod Value
                 */
                value: mapping.ns2SynthOscillatorShapeModMap.get(oscModMidi),

                label: (oscModMidi === 63 || oscModMidi === 64)
                    ? "LFO/MOD AMT"
                    : (oscModMidi < 64 ? "LFO AMT": "Mod Env AMT"),
            },
            /**
             * Offset in file: 0xec (b1)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Synth Skip Sample Attack
             */
            skipSampleAttack: {
                enabled: (oscillatorType === "SAMPLE") && (synthOffsetEc & 2) !== 0,
            },
        },

        filter: ns3Filter(buffer, slotOffset),

        envelopes: {
            modulation: {
                /**
                 * Offset in file: 0x8B (b7-1)
                 *
                 * @example
                 * 0/127 value = 0.5 ms / 45 s
                 * #include ns3SynthEnvAttackMap
                 *
                 * @module NS3 Synth Mod Env Attack
                 */
                attack: {
                    midi: envModAttackMidi,
                    value: mapping3.ns3SynthEnvAttackMap.get(envModAttackMidi),
                },

                /**
                 * Offset in file: 0x8B (b0) and 0x8C (b7-2)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s (Sustain)
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Mod Env Decay
                 */
                decay: {
                    midi: envModDecayMidi,
                    value: synthEnvDecayOrReleaseLabel(envModDecayMidi, "mod.decay"),
                },

                /**
                 * Offset in file: 0x8C (b1-0) and 0x8D (b7-3)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s (Inf)
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Mod Env Release
                 */
                release: {
                    midi: envModReleaseMidi,
                    value: synthEnvDecayOrReleaseLabel(envModReleaseMidi, "mod.release"),
                },

                /**
                 * Offset in file: 0x8D (b2)
                 *
                 * @example
                 * O = off, 1 = on
                 *
                 * @module NS3 Synth Mod Env Velocity
                 */
                velocity: {
                    enabled: (synthOffset8dW & 0x0400) !== 0,
                },
            },
            amplifier: {
                /**
                 * Offset in file: 0xA5 (b1-0) and 0xA6 (b7-3)
                 *
                 * @example
                 * 0/127 value = 0.5 ms / 45 s
                 * #include ns3SynthEnvAttackMap
                 *
                 * @module NS3 Synth Amp Env Attack
                 */
                attack: {
                    midi: envAmpAttackMidi,
                    value: mapping3.ns3SynthEnvAttackMap.get(envAmpAttackMidi),
                },

                /**
                 * Offset in file: 0xA6 (b2-0) and 0xA7 (b7-4)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s (Sustain)
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Amp Env Decay
                 */
                decay: {
                    midi: envAmpDecayMidi,
                    value: synthEnvDecayOrReleaseLabel(envAmpDecayMidi, "amp.decay"),
                },

                /**
                 * Offset in file: 0xA7 (b3-0) and 0xA8 (b7-5)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Amp Env Release
                 */
                release: {
                    midi: envAmpReleaseMidi,
                    value: synthEnvDecayOrReleaseLabel(envAmpReleaseMidi, "amp.release"),
                },

                /**
                 * Offset in file: 0xA8 (b4-3)
                 *
                 * @example
                 * 0 = Off
                 * 1 = 1
                 * 2 = 2
                 * 3 = 3
                 *
                 * @module NS3 Synth Amp Env Velocity
                 */
                velocity: {
                    value: mapping3.ns3SynthAmpEnvelopeVelocityMap.get((synthOffsetA8 & 0x18) >>> 3),
                },
            },
        },
        lfo: {
            /**
             * Offset in file: 0x86 (b2-0)
             *
             * @example
             * 0 = Triangle
             * 1 = Saw
             * 2 = Neg Saw
             * 3 = Square
             * 4 = S/H
             *
             * @module NS3 Synth Lfo Wave
             */
            wave: {
                value: mapping3.ns3SynthLfoWaveMap.get(synthOffset86 & 0x07),
            },
            /**
             * Offset in file: 0x87 (b6-0)
             *
             * @example
             * 0/127 value = 0.03 Hz / 523 Hz
             * #include ns3SynthLfoRateMap
             *
             * if LFO Master Clock is On, 0/127 value = 4/1 to 1/64 Master Clock Division
             * #include ns3SynthLfoRateMasterClockDivisionMap
             *
             * Morph Wheel:
             * 0x88 (b7): polarity (1 = positive, 0 = negative)
             * 0x88 (b6-b0): 7-bit raw value
             *
             * Morph After Touch:
             * 0x89 (b7): polarity (1 = positive, 0 = negative)
             * 0x89 (b6-b0): 7-bit raw value
             *
             * Morph Control Pedal:
             * 0x8A (b7): polarity (1 = positive, 0 = negative)
             * 0x8A (b6-b0): 7-bit raw value
             *
             * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
             *
             * @module NS3 Synth Lfo Rate
             */
            rate: {
                midi: lfoRateMidi,

                value: lfoRateMasterClock
                    ? mapping3.ns3SynthLfoRateMasterClockDivisionMap.get(lfoRateMidi)
                    : mapping3.ns3SynthLfoRateMap.get(lfoRateMidi),

                morph: ns3Morph(
                    synthOffset87Ww,
                    lfoRateMidi,
                    (x) => {
                        return lfoRateMasterClock
                            ? mapping3.ns3SynthLfoRateMasterClockDivisionMap.get(x)
                            : mapping3.ns3SynthLfoRateMap.get(x);
                    },
                    false
                ),
            },

            /**
             * Offset in file: 0x87 (b7)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Lfo Master Clock
             */
            masterClock: {
                enabled: lfoRateMasterClock,
            },
        },
        arpeggiator: {
            /**
             * Offset in file: 0x80 (b6)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Arp On
             */
            enabled: (synthOffset80 & 0x40) !== 0,

            /**
             * Offset in file: 0x81 (b7-1)
             *
             * @example
             * 0/127 value = 16 bpm / Fast 5
             * #include ns3SynthArpRateMap
             *
             * if Arpeggiator Master Clock is On, 0/127 value = 1/2 to 1/32 Master Clock Division
             * #include ns3SynthArpMasterClockDivisionMap
             *
             * Morph Wheel:
             * 0x81 (b0): polarity (1 = positive, 0 = negative)
             * 0x82 (b7-b1): 7-bit raw value
             *
             * Morph After Touch:
             * 0x82 (b0): polarity (1 = positive, 0 = negative)
             * 0x83 (b7-b1): 7-bit raw value
             *
             * Morph Control Pedal:
             * 0x83 (b0): polarity (1 = positive, 0 = negative)
             * 0x84 (b7-b1): 7-bit raw value
             *
             * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
             *
             * @module NS3 Synth Arp Rate
             */
            rate: {
                midi: arpeggiatorRateMidi,

                value: arpeggiatorMasterClock
                    ? mapping3.ns3SynthArpMasterClockDivisionMap.get(arpeggiatorRateMidi)
                    : mapping3.ns3SynthArpRateMap.get(arpeggiatorRateMidi),

                morph: ns3Morph(
                    synthOffset81Ww >>> 1,
                    arpeggiatorRateMidi,
                    (x) => {
                        return arpeggiatorMasterClock
                            ? mapping3.ns3SynthArpMasterClockDivisionMap.get(x)
                            : mapping3.ns3SynthArpRateMap.get(x);
                    },
                    false
                ),
            },

            /**
             * Offset in file: 0x80 (b5)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Arp Kb Sync
             */
            kbSync: {
                enabled: (synthOffset80 & 0x20) !== 0,
            },
            /**
             * Offset in file: 0x80 (b0)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Arp Master Clock
             */
            masterClock: {
                enabled: arpeggiatorMasterClock,
            },
            /**
             * Offset in file: 0x80 (b4-3)
             *
             * @example
             * 0 = 1 Octave
             * 1 = 2 Octaves
             * 2 = 3 Octaves
             * 3 = 4 Octaves
             *
             * @module NS3 Synth Arp Range
             */
            range: {
                value: mapping3.ns3ArpeggiatorRangeMap.get(arpeggiatorRange),
            },
            /**
             * Offset in file: 0x80 (b2-1)
             *
             * @example
             * 0 = Up
             * 1 = Down
             * 2 = Up/Down
             * 3 = Random
             *
             * @module NS3 Synth Arp Pattern
             */
            pattern: {
                value: mapping3.ns3ArpeggiatorPatternMap.get(arpeggiatorPattern),
            },
        },
    };

    if (process.env.NODE_ENV === "production") {
        synth.debug = undefined;
    }

    return synth;
};
