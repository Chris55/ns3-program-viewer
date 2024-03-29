// const converter = require("../../common/converter");
// const mapping = require("./ns2-mapping");
// const { ns2ProgramOutputMap } = require("./ns2-mapping");
// const { ns2Filter } = require("./ns2-synth-filter");
// const { ns2OscShape, ns2SkipSampleAttack } = require("./ns2-synth-osc-shape");
// const { ns2VolumeEx, ns2OctaveShift, ns2KbZone, ns2BooleanValue } = require("./ns2-utils");
// const { getSampleIdNs2ToNs3 } = require("../../library/ns3-library-service");
// const { getSample } = require("../../library/ns3-library-service");
//
// /***
//  * Synth Envelope Decay / Release value
//  * @param value
//  * @param type
//  * @returns {string}
//  */
// const synthEnvDecayOrReleaseLabel = function (value, type) {
//     switch (type) {
//         case "mod.decay": {
//             //if (value === 127) return "Sustain";
//             //else
//             return mapping.ns2SynthEnvDecayMap.get(value);
//         }
//         case "mod.release": {
//             //if (value === 127) return "Inf";
//             //else
//             return mapping.ns2SynthEnvDecayMap.get(value);
//         }
//         case "amp.decay": {
//             //if (value === 127) return "Sustain";
//             //else
//             return mapping.ns2SynthEnvDecayMap.get(value);
//         }
//         case "amp.release": {
//             return mapping.ns2SynthEnvReleaseMap.get(value);
//         }
//     }
//     return "";
// };
//
// /***
//  * returns Synth section
//  *
//  * @param buffer {Buffer}- input buffer
//  * @param id {number} - 0,1,2,3 = Slot A,B,C,D
//  * @param slotOffset {number} - 0 or Slot offset
//  * @param global - global section
//  * @param ns2sFile - true if input file is ns2s else ns2p file is expected
//  * @returns {{voice: {midi: number, isDefault: boolean, value: string}, oscillators: {skipSampleAttack: {isDefault: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled}, controlPedal: {to: {midi: *, value: (*|string)}, enabled}, wheel: {to: {midi: *, value: (*|string)}, enabled}}, value: string, enabled: *}, type: {isDefault: boolean, value: string}, waveForm1: {valid: boolean, isDefault: boolean, filename: string, location: number, value: string, version: string, useShapeKnob: boolean, info: string}, shapeCtrl: {midi: number, value: string, morph: {afterTouch: {to: {midi: ({midi: *, value: string}|string), value: string}, enabled: boolean}, controlPedal: {to: {midi: ({midi: *, value: string}|string), value: string}, enabled: boolean}, wheel: {to: {midi: ({midi: *, value: string}|string), value: string}, enabled: boolean}}}, shapeMod: {midi: number, isDefault: boolean, label: (string), value: string}}, debug: {lib: {valid: boolean, isDefault: boolean, filename: string, location: number, value: string, version: string, useShapeKnob: boolean, info: string}, sampleId: string}, unison: {midi: number, isDefault: boolean, value: string}, arpeggiator: {isDefault: boolean, rate: {midi: number, isDefault: boolean, value: string}, masterClock: {isDefault: boolean, enabled: boolean}, pattern: {isDefault: boolean, value: string}, range: {isDefault: boolean, value: string}, enabled: boolean}, kbZone: {array, value}, sustainPedal: {midi: number, isDefault: boolean, enabled}, keyboardHold: {midi: number, isDefault: boolean, enabled}, octaveShift: {midi, isDefault: boolean, value: string}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, filter: {type: {value: string}, resonance: {midi: number, value: string}, kbTrack: {enabled: boolean}, modulations: {mod2: {midi: number, label: string, value: string}, mod1: {midi: number, value: string}}, frequency: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}, output: {isDefault: boolean, value: string}, pitchStick: {midi: number, isDefault: boolean, enabled}, lfo: {rate: {midi: number, isDefault: boolean, value: string}, masterClock: {isDefault: boolean, enabled: boolean}, wave: {isDefault: boolean, value: string}}, glide: {midi: number, isDefault: boolean, value: string}, envelopes: {modulation: {attack: {midi: number, isDefault: boolean, value: string}, release: {midi: number, isDefault: boolean, value: string}, decay: {midi: number, isDefault: boolean, value: string}, velocity: {isDefault: boolean, enabled: boolean}}, amplifier: {attack: {midi: number, isDefault: boolean, value: string}, release: {midi: number, isDefault: boolean, value: string}, decay: {midi: number, isDefault: boolean, value: string}, velocity: {isDefault: boolean, enabled: boolean}}}, latchPedal: {midi: number, isDefault: boolean, enabled}, kbGate: {midi: number, isDefault: boolean, enabled}, vibrato: {midi: number, isDefault: boolean, value: string}}}
//  */
// exports.nla1Synth = (buffer, id, slotOffset, global, ns2sFile) => {
//     let synthOffset4d = 0;
//     let synthOffset4dWw = 0;
//     let synthOffset50W = 0;
//     let synthOffset51 = 0;
//     let synthOffset52 = 0;
//     let synthOffset59 = 0;
//     let synthOffset5a = 0;
//     let synthOffsetD9 = 0;
//     let synthOffsetDaW = 0;
//     let synthOffsetDbW = 0;
//     let synthOffsetDc = 0;
//
//     // when reading ns2s (synth file), these global settings are not available in the file (forced for 0)
//     if (ns2sFile === false) {
//         synthOffset4d = buffer.readUInt8(0x4d + slotOffset);
//         synthOffset4dWw = buffer.readUInt32BE(0x4d + slotOffset);
//         synthOffset50W = buffer.readUInt16BE(0x50 + slotOffset);
//         synthOffset51 = buffer.readUInt8(0x51 + slotOffset);
//         synthOffset52 = buffer.readUInt8(0x52 + slotOffset);
//         synthOffset59 = buffer.readUInt8(0x59 + slotOffset);
//         synthOffset5a = buffer.readUInt8(0x5a + slotOffset);
//         synthOffsetD9 = buffer.readUInt8(0xd9 + slotOffset);
//         synthOffsetDaW = buffer.readUInt16BE(0xda + slotOffset);
//         synthOffsetDbW = buffer.readUInt16BE(0xdb + slotOffset);
//         synthOffsetDc = buffer.readUInt8(0xdc + slotOffset);
//     }
//
//     const synthOffsetDfW = buffer.readUInt16BE(0xdf + slotOffset);
//     const synthOffsetE0W = buffer.readUInt16BE(0xe0 + slotOffset);
//     const synthOffsetE1W = buffer.readUInt16BE(0xe1 + slotOffset);
//     const synthOffsetE2W = buffer.readUInt16BE(0xe2 + slotOffset);
//     const synthOffsetE7W = buffer.readUInt16BE(0xe7 + slotOffset);
//     //const synthOffsetEc = buffer.readUInt8(0xec + slotOffset);
//     const synthOffsetF3W = buffer.readUInt16BE(0xf3 + slotOffset);
//     const synthOffsetF4W = buffer.readUInt16BE(0xf4 + slotOffset);
//     const synthOffsetF5W = buffer.readUInt16BE(0xf5 + slotOffset);
//     const synthOffsetF6W = buffer.readUInt16BE(0xf6 + slotOffset);
//     const synthOffsetF7 = buffer.readUInt8(0xf7 + slotOffset);
//     const synthOffsetFbW = buffer.readUInt16BE(0xfb + slotOffset);
//     const synthOffsetFcW = buffer.readUInt16BE(0xfc + slotOffset);
//
//     const synthOffsetF4WW = buffer.readBigUInt64BE(0xf4 + slotOffset);
//
//     /**
//      * Offset in file: 0xf7 (b1-0) to 0xfb (b7-2)
//      *
//      *  @example
//      *  32-bit synth sample hash code.
//      *
//      * @module NLA1 Synth Sample ID
//      */
//     const synthNs2SampleId = BigInt((synthOffsetF4WW & 0x03fffffffcn) >> 2n);
//     const sampleId = getSampleIdNs2ToNs3(synthNs2SampleId);
//
//     const oscillatorType = mapping.ns2SynthOscillatorTypeMap.get((synthOffsetE1W & 0x0380) >>> 7);
//
//     let waveForm = {
//         valid: false,
//         value: "",
//         info: "",
//         version: "",
//         location: (synthOffsetE2W & 0x7fe0) >>> 5,
//         filename: "",
//         useShapeKnob: true,
//         isDefault: false,
//     };
//
//     const buildWaveFormLabel = (ot, items) => {
//         const valid = items !== undefined && items.length === 2;
//         // 0 is the LCD, 1 is main display
//         const value = valid ? items[1] : "??";
//         const info = valid ? items[0] : "??";
//         return {
//             valid,
//             value,
//             info,
//         };
//     };
//
//     switch (oscillatorType) {
//         case "TRI": {
//             const items = mapping.ns2SynthOscillatorTriStyleWaveFormsMap.get(waveForm.location);
//             const label = buildWaveFormLabel(oscillatorType, items);
//             waveForm.valid = label.valid;
//             waveForm.value = label.value;
//             waveForm.info = label.info;
//             waveForm.isDefault = true;
//             break;
//         }
//         case "SAW": {
//             const items = mapping.ns2SynthOscillatorSawStyleWaveFormsMap.get(waveForm.location);
//             const label = buildWaveFormLabel(oscillatorType, items);
//             waveForm.valid = label.valid;
//             waveForm.value = label.value;
//             waveForm.info = label.info;
//             break;
//         }
//         case "SQR": {
//             const items = mapping.ns2SynthOscillatorPulseStyleWaveFormsMap.get(waveForm.location);
//             const label = buildWaveFormLabel(oscillatorType, items);
//             waveForm.valid = label.valid;
//             waveForm.value = label.value;
//             waveForm.info = label.info;
//             break;
//         }
//         case "SAMPLE": {
//             waveForm = getSample(sampleId, 0, waveForm.location);
//             waveForm.useShapeKnob = false; // skip sample attack is used instead
//             if (waveForm.version.startsWith("v3.")) {
//                 waveForm.version = waveForm.version.replace("v3.", "v2.");
//             }
//             break;
//         }
//         case "FM": {
//             const items = mapping.ns2SynthOscillatorFmStyleWaveFormsMap.get(waveForm.location);
//             const label = buildWaveFormLabel(oscillatorType, items);
//             waveForm.valid = label.valid;
//             waveForm.value = "FM " + label.value;
//             waveForm.info = label.info;
//             break;
//         }
//         case "WAVE": {
//             const items = mapping.ns2SynthOscillatorWaveStyleWaveFormsMap.get(waveForm.location);
//             const label = buildWaveFormLabel(oscillatorType, items);
//             waveForm.valid = label.valid;
//             waveForm.value = "Wavetable " + label.value;
//             waveForm.info = label.info;
//             waveForm.useShapeKnob = true;
//             break;
//         }
//     }
//
//     const oscModMidi = (synthOffsetE7W & 0x3f80) >>> 7;
//
//     const lfoRateMasterClock = (synthOffsetDc & 0x40) !== 0;
//     const lfoRateMidi = lfoRateMasterClock ? (synthOffsetDc & 0x3c) >>> 2 : (synthOffsetF6W & 0x07f0) >>> 4;
//
//     const envModAttackMidi = (synthOffsetDfW & 0xfe00) >>> 9;
//     const envModDecayMidi = (synthOffsetDfW & 0x01fc) >>> 2;
//     const envModReleaseMidi = (synthOffsetE0W & 0x03f8) >>> 3;
//
//     const envAmpAttackMidi = (synthOffsetF3W & 0x01fc) >>> 2;
//     const envAmpDecayMidi = (synthOffsetF4W & 0x03f8) >>> 3;
//     const envAmpReleaseMidi = (synthOffsetF5W & 0x07f0) >>> 4;
//
//     const arpeggiatorMasterClock = (synthOffsetDaW & 0x8000) !== 0;
//     const arpeggiatorRateMidi = arpeggiatorMasterClock
//         ? (synthOffsetDaW & 0x7800) >>> 11
//         : (synthOffsetDaW & 0x03f8) >>> 3;
//     const arpeggiatorPattern = (synthOffsetDbW & 0x0600) >>> 9;
//     const arpeggiatorRange = (synthOffsetDbW & 0x0180) >>> 7;
//
//     const synthEnabled = ns2sFile || (synthOffset4d & 0x40) !== 0;
//     const synthKbZoneEnabled = id === 0 ? synthEnabled : synthEnabled && global.dualKeyboard.enabled === false; // || global.dualKeyboard.value !== "Synth");
//
//     const synthKbZoneValue = (synthOffset51 & 0x70) >>> 4;
//     const synthKbZone = ns2KbZone(synthKbZoneEnabled, global, synthKbZoneValue);
//
//     const modulationVelocity = (synthOffsetE1W & 0x0400) !== 0;
//     const amplifierVelocity = (synthOffsetF6W & 0x0800) !== 0;
//     const lfoWave = (synthOffsetF7 & 0x0c) >>> 2;
//
//     const routing = ns2ProgramOutputMap.get((synthOffset59 & 0x60) >>> 5);
//
//     /**
//      * Offset in file: 0xfc (b2-1)
//      *
//      * @example
//      * #include ns2SynthVoiceMap
//      *
//      * @module NLA1 Synth Voice
//      */
//     const voice = (synthOffsetFcW & 0x0600) >>> 9;
//
//     /**
//      * Offset in file: 0xfb (b1-0) and 0xfc (b7-3)
//      *
//      * @example
//      * 0/127 value = 0 / 10
//      *
//      * @module NLA1 Synth Glide
//      */
//     const glide = (synthOffsetFbW & 0x03f8) >>> 3;
//
//     /**
//      * Offset in file: 0xfc (b0) and 0xfd (b7-6)
//      *
//      * @example
//      * #include ns2SynthUnisonMap
//      *
//      * @module NLA1 Synth Unison
//      */
//     const unison = (synthOffsetFcW & 0x01c0) >>> 6;
//
//     /**
//      * Offset in file: 0xfd (b5-3)
//      *
//      * @example
//      * #include ns2SynthVibratoMap
//      *
//      * @module NLA1 Synth Vibrato
//      */
//     const vibrato = (synthOffsetFcW & 0x0038) >>> 3;
//
//     /**
//      * Offset in file: 0xd9 (b0)
//      *
//      * @example
//      * O = off, 1 = on
//      *
//      * @module NLA1 Synth Arp On
//      */
//     const arpeggiatorEnabled = (synthOffsetD9 & 0x01) !== 0;
//
//     const synth = {
//         debug: {
//             sampleId: sampleId.toString(16),
//             lib: waveForm,
//         },
//
//         /**
//          * Offset in file: 0x4d (b6)
//          *
//          * @example
//          * O = off, 1 = on
//          *
//          * @module NLA1 Synth On
//          */
//         enabled: synthEnabled,
//
//         /**
//          * Offset in file: 0x51 (b6-4)
//          *
//          * @example
//          * 0 = LO
//          * 1 = LO UP
//          * 2 = UP
//          * 3 = UP HI
//          * 4 = HI
//          * 5 = LO UP HI
//          *
//          * @module NLA1 Synth Kb Zone
//          */
//         kbZone: {
//             array: synthKbZone[1],
//             value: synthKbZone[0],
//         },
//
//         /**
//          * Offset in file: 0x50 (b5-0) and 0x51 (b7)
//          *
//          * @example
//          *
//          * Morph Wheel:
//          * offset in file 0x4d (b5-0) 0x4e (b7-6)
//          *
//          * Morph After Touch:
//          * offset in file 0x4e (b5-0) 0x4f (b7-6)
//          *
//          * Morph Control Pedal:
//          * offset in file 0x4f (b5-0) 0x50 (b7-6)
//          *
//          * @module NLA1 Synth Volume
//          */
//         volume: ns2VolumeEx(buffer, (synthOffset50W & 0x3f80) >>> 7, synthOffset4dWw >>> 6),
//
//         /**
//          * Offset in file: 0x51 (b3-0)
//          *
//          * @example
//          * Octave Shift = value - 7
//          *
//          * @module NLA1 Synth Octave Shift
//          */
//         octaveShift: ns2OctaveShift(synthOffset51 & 0x0f),
//
//         /**
//          * Offset in file: 0x52 (b7)
//          *
//          * @example
//          * O = off, 1 = on
//          *
//          * @module NLA1 Synth Pitch Stick
//          */
//         pitchStick: ns2BooleanValue((synthOffset52 & 0x80) !== 0, true),
//
//         /**
//          * Offset in file: 0x52 (b6)
//          *
//          * @example
//          * O = off, 1 = on
//          *
//          * @module NLA1 Synth Sustain Pedal
//          */
//         sustainPedal: ns2BooleanValue((synthOffset52 & 0x40) !== 0, true),
//
//         /**
//          * Offset in file: 0x5a (b5)
//          *
//          * @example
//          * O = off, 1 = on
//          *
//          * @module NLA1 Synth Latch Pedal
//          */
//         latchPedal: ns2BooleanValue((synthOffset5a & 0x20) !== 0, false),
//
//         /**
//          * Offset in file: 0x5a (b4)
//          *
//          * @example
//          * O = off, 1 = on
//          *
//          * @module NLA1 Synth Kb Gate
//          */
//         kbGate: ns2BooleanValue((synthOffset5a & 0x10) !== 0, false),
//
//         /**
//          * Offset in file: 0xdc (b1)
//          *
//          * @example
//          * O = off, 1 = on
//          *
//          * @module NLA1 Synth Kb Hold
//          */
//         keyboardHold: ns2BooleanValue((synthOffsetDc & 0x02) !== 0, false),
//
//         voice: {
//             midi: voice,
//             value: mapping.ns2SynthVoiceMap.get(voice),
//             isDefault: voice === 0,
//         },
//
//         glide: {
//             midi: glide,
//             value: converter.midi2LinearStringValue(0, 10, glide, 1, ""),
//             isDefault: glide === 0,
//         },
//
//         unison: {
//             midi: unison,
//             value: mapping.ns2SynthUnisonMap.get(unison),
//             isDefault: unison === 0,
//         },
//
//         vibrato: {
//             midi: vibrato,
//             value: mapping.ns2SynthVibratoMap.get(vibrato),
//             isDefault: vibrato === 0,
//         },
//
//         /***
//          * Synth Oscillators Definition
//          */
//         oscillators: {
//             /**
//              * Offset in file: 0xe1 (b1-0) and 0xe2 (b7)
//              *
//              * @example
//              * #include ns2SynthOscillatorTypeMap
//              *
//              * @module NLA1 Synth Osc Mode
//              */
//             type: {
//                 value: oscillatorType,
//                 isDefault: oscillatorType === "TRI",
//             },
//             /**
//              * Offset in file: 0xe2 (b6-0) and 0xe3 (b7-5)
//              *
//              * @example
//              *
//              * TRI:
//              * #include ns2SynthOscillatorTriStyleWaveFormsMap
//              *
//              * SAW:
//              * #include ns2SynthOscillatorSawStyleWaveFormsMap
//              *
//              * PULSE:
//              * #include ns2SynthOscillatorPulseStyleWaveFormsMap
//              *
//              * FM:
//              * #include ns2SynthOscillatorFmStyleWaveFormsMap
//              *
//              * WAVE:
//              * #include ns2SynthOscillatorWaveStyleWaveFormsMap
//              *
//              * @module NLA1 Synth Osc WaveForm
//              */
//             waveForm1: waveForm,
//             /**
//              * Offset in file: 0xe6 (b4-0) and 0xe7 (7-6)
//              *
//              * @example
//              * For '---', 'Shp', and 'Snc':
//              *
//              * 7-bits value = 0 / 10
//              *
//              * Morph Wheel:
//              * Offset in file 0xe3 (b4-0) 0xe4 (b7-5)
//              *
//              * Morph After Touch:
//              * Offset in file 0xe4 (b4-0) 0xe5 (b7-5)
//              *
//              * Morph Control Pedal:
//              * Offset in file 0xe5 (b4-0) 0xe6 (b7-5)
//              *
//              * For 'dtn':
//              * Offset in file: 0xeb (b5-0)
//              * 5-bits value = -12 / +12
//              *
//              * @module NLA1 Synth Shape
//              */
//
//             /**
//              * Offset in file: 0xEB (b5-0)
//              *
//              * @example
//              * For 'dtn':
//              *
//              * 5-bits value = -12 / +12
//              * @example
//              *
//              * Morph Wheel:
//              * Offset in file: 0xE8 (b6-0) and 0xE9 (b7)
//              *
//              * Morph After Touch:
//              * Offset in file: 0xE9 (b6-0) and 0xEA (b7)
//              *
//              * Morph Control Pedal:
//              * Offset in file: 0xEA (b6-0) and 0xEB (b7)
//              *
//              * @module NLA1 Synth Shape Detune
//              */
//             shapeCtrl: ns2OscShape(buffer, slotOffset, waveForm.info),
//
//             /**
//              * Offset in file: 0xe7 (b5-0) and 0xe8 (b7)
//              *
//              * @example
//              * LFO from 0-63
//              * MOD ENV from 64-127
//              *
//              * @module NLA1 Synth Shape Mod
//              */
//             shapeMod: {
//                 /***
//                  * Synth Shape Mod Midi Value
//                  */
//                 midi: oscModMidi,
//
//                 isDefault: oscModMidi === 63 || oscModMidi === 64,
//
//                 /***
//                  * Synth Shape Mod Value
//                  */
//                 value: mapping.ns2SynthOscillatorShapeModMap.get(oscModMidi),
//
//                 label:
//                     oscModMidi === 63 || oscModMidi === 64
//                         ? "LFO/Env AMT"
//                         : oscModMidi < 64
//                         ? "LFO AMT"
//                         : "Mod Env AMT",
//             },
//             /**
//              * Offset in file: 0xec (b1)
//              *
//              * @example
//              * O = off, 1 = on
//              *
//              * (only used on SAMPLE)
//              *
//              * Morph Wheel:
//              * Offset in file:  0xec (b7-6)
//              *
//              * Morph After Touch:
//              * Offset in file:  0xec (b5-4)
//              *
//              * Morph Control Pedal:
//              * Offset in file:  0xec (b3-2)
//              *
//              * 0x00 = Morph disabled
//              * 0x01 = Morph to on
//              * 0x11 = Morph to off
//              *
//              * @module NLA1 Synth Skip Sample Attack
//              */
//             skipSampleAttack: ns2SkipSampleAttack(buffer, slotOffset, oscillatorType),
//         },
//
//         filter: ns2Filter(buffer, slotOffset),
//
//         envelopes: {
//             modulation: {
//                 /**
//                  * Offset in file: 0xdf (b7-1)
//                  *
//                  * @example
//                  * #include ns2SynthEnvAttackMap
//                  *
//                  * @module NLA1 Synth Mod Env Attack
//                  */
//                 attack: {
//                     midi: envModAttackMidi,
//
//                     isDefault: envModAttackMidi === 0,
//
//                     value: mapping.ns2SynthEnvAttackMap.get(envModAttackMidi),
//                 },
//
//                 /**
//                  * Offset in file: 0xdf (b0) and 0xe0 (b7-2)
//                  *
//                  * @example
//                  * #include ns2SynthEnvDecayMap
//                  *
//                  * @module NLA1 Synth Mod Env Decay
//                  */
//                 decay: {
//                     midi: envModDecayMidi,
//
//                     isDefault: envModDecayMidi === 127,
//
//                     value: synthEnvDecayOrReleaseLabel(envModDecayMidi, "mod.decay"),
//                 },
//
//                 /**
//                  * Offset in file: 0xe0 (b1-0) and 0xe1 (b7-3)
//                  *
//                  * @example
//                  * #include ns2SynthEnvReleaseMap
//                  *
//                  * @module NLA1 Synth Mod Env Release
//                  */
//                 release: {
//                     midi: envModReleaseMidi,
//
//                     isDefault: envModReleaseMidi === 0,
//
//                     value: synthEnvDecayOrReleaseLabel(envModReleaseMidi, "mod.release"),
//                 },
//
//                 /**
//                  * Offset in file: 0xe1 (b2)
//                  *
//                  * @example
//                  * O = off, 1 = on
//                  *
//                  * @module NLA1 Synth Mod Env Velocity
//                  */
//                 velocity: {
//                     enabled: modulationVelocity,
//
//                     isDefault: modulationVelocity === false,
//                 },
//             },
//             amplifier: {
//                 /**
//                  * Offset in file: 0xf3 (b0) and 0xf4 (b7-2)
//                  *
//                  * @example
//                  * #include ns2SynthEnvAttackMap
//                  *
//                  * @module NLA1 Synth Amp Env Attack
//                  */
//                 attack: {
//                     midi: envAmpAttackMidi,
//
//                     isDefault: envAmpAttackMidi === 0,
//
//                     value: mapping.ns2SynthEnvAttackMap.get(envAmpAttackMidi),
//                 },
//
//                 /**
//                  * Offset in file: 0xf4 (b1-0) and 0xf5 (b7-3)
//                  *
//                  * @example
//                  * #include ns2SynthEnvDecayMap
//                  *
//                  * @module NLA1 Synth Amp Env Decay
//                  */
//                 decay: {
//                     midi: envAmpDecayMidi,
//
//                     isDefault: envAmpDecayMidi === 127,
//
//                     value: synthEnvDecayOrReleaseLabel(envAmpDecayMidi, "amp.decay"),
//                 },
//
//                 /**
//                  * Offset in file: 0xf5 (b2-0) and 0xf6 (b7-4)
//                  *
//                  * @example
//                  * #include ns2SynthEnvReleaseMap
//                  *
//                  * @module NLA1 Synth Amp Env Release
//                  */
//                 release: {
//                     midi: envAmpReleaseMidi,
//
//                     isDefault: envAmpReleaseMidi === 0,
//
//                     value: synthEnvDecayOrReleaseLabel(envAmpReleaseMidi, "amp.release"),
//                 },
//
//                 /**
//                  * Offset in file: 0xf6 (b3)
//                  *
//                  * @example
//                  * O = off, 1 = on
//                  *
//                  * @module NLA1 Synth Amp Env Velocity
//                  */
//                 velocity: {
//                     enabled: amplifierVelocity,
//
//                     isDefault: amplifierVelocity === false,
//                 },
//             },
//         },
//
//         lfo: {
//             /**
//              * Offset in file: 0xf7 (b3-2)
//              *
//              * @example
//              * #include ns2SynthLfoWaveMap
//              *
//              * @module NLA1 Synth Lfo Wave
//              */
//             wave: {
//                 value: mapping.ns2SynthLfoWaveMap.get(lfoWave),
//
//                 isDefault: lfoWave === 0,
//             },
//             /**
//              * @example
//              * Offset in file: 0xdc (b5-2) (if LFO MST CLOCK = ON)
//              *
//              * #include ns2SynthLfoRateMasterClockDivisionMap
//              *
//              * Offset in file: 0xf6 (b2-0) 0xf7 (b7-4) (if LFO MST CLOCK = OFF)
//              *
//              * #include ns2SynthLfoRateMap
//              *
//              *
//              * @module NLA1 Synth Lfo Rate
//              */
//             rate: {
//                 midi: lfoRateMidi,
//
//                 isDefault: lfoRateMidi === 0,
//
//                 value: lfoRateMasterClock
//                     ? mapping.ns2SynthLfoRateMasterClockDivisionMap.get(lfoRateMidi)
//                     : mapping.ns2SynthLfoRateMap.get(lfoRateMidi),
//             },
//
//             /**
//              * Offset in file: 0xdc (b6)
//              *
//              * @example
//              * O = off, 1 = on
//              *
//              * @module NLA1 Synth Lfo Master Clock
//              */
//             masterClock: {
//                 enabled: lfoRateMasterClock,
//
//                 isDefault: lfoRateMasterClock === false,
//             },
//         },
//
//         arpeggiator: {
//             enabled: arpeggiatorEnabled,
//             isDefault: arpeggiatorEnabled === false,
//
//             /**
//              * @example
//              * Offset in file: 0xda (b6-3) (if MST CLK is ON)
//              * #include ns2SynthArpMasterClockDivisionMap
//              *
//              * Offset in file: 0xda (b1-0) and 0xdb (b7-3) (if MST CLK is OFF)
//              * #include ns2SynthArpRateMap
//              *
//              * @module NLA1 Synth Arp Rate
//              */
//             rate: {
//                 midi: arpeggiatorRateMidi,
//
//                 isDefault: arpeggiatorRateMidi === 0,
//
//                 value: arpeggiatorMasterClock
//                     ? mapping.ns2SynthArpMasterClockDivisionMap.get(arpeggiatorRateMidi)
//                     : mapping.ns2SynthArpRateMap.get(arpeggiatorRateMidi),
//             },
//
//             /**
//              * Offset in file: 0xda (b7)
//              *
//              * @example
//              * O = off, 1 = on
//              *
//              * @module NLA1 Synth Arp Master Clock
//              */
//             masterClock: {
//                 enabled: arpeggiatorMasterClock,
//
//                 isDefault: arpeggiatorMasterClock === false,
//             },
//             /**
//              * Offset in file: 0xdb (b0) and 0xdc (b7)
//              *
//              * @example
//              * #include ns2ArpeggiatorRangeMap
//              *
//              * @module NLA1 Synth Arp Range
//              */
//             range: {
//                 value: mapping.ns2ArpeggiatorRangeMap.get(arpeggiatorRange),
//
//                 isDefault: arpeggiatorRange === 0,
//             },
//             /**
//              * Offset in file: 0xdb (b2-1)
//              *
//              * @example
//              * #include ns2ArpeggiatorPatternMap
//              *
//              * @module NLA1 Synth Arp Pattern
//              */
//             pattern: {
//                 value: mapping.ns2ArpeggiatorPatternMap.get(arpeggiatorPattern),
//
//                 isDefault: arpeggiatorPattern === 0,
//             },
//         },
//
//         /**
//          * Offset in file 0x59 (b5-6)
//          *
//          * @example
//          * #include ns2ProgramOutputMap
//          *
//          * @module NLA1 Synth Program Output
//          */
//         output: {
//             value: routing,
//             isDefault: routing === ns2ProgramOutputMap.get(0),
//         },
//     };
//
//     if (process.env.NODE_ENV === "production") {
//         synth.debug = undefined;
//     }
//
//     return synth;
// };
