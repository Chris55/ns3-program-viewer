const mapping = require("./mapping");
const converter = require("../common/converter");
const {getVolumeEx} = require("../common/utils");
const { getKbZone } = require("../common/utils");
const { getVolume } = require("../common/utils");
const { getKnobDualValues } = require("../common/utils");

/***
 * Synth Envelope Decay / Release Label
 * @param value
 * @param type
 * @returns {string}
 */
const synthEnvDecayOrReleaseLabel = function (value, type) {
    switch (type) {
        case "mod.decay": {
            if (value === 127) return "Sustain";
            else return mapping.synthEnvDecayOrReleaseMap.get(value);
        }
        case "mod.release": {
            if (value === 127) return "Inf";
            else return mapping.synthEnvDecayOrReleaseMap.get(value);
        }
        case "amp.decay": {
            if (value === 127) return "Sustain";
            else return mapping.synthEnvDecayOrReleaseMap.get(value);
        }
        case "amp.release": {
            return mapping.synthEnvDecayOrReleaseMap.get(value);
        }
    }
    return "";
};

/***
 * returns Synth section
 *
 * @param buffer
 * @param panelOffset
 * @param splitEnabled
 * @returns {{voice: unknown, oscillators: {control: {midi: number, label: string}, fastAttack: boolean, pitch: {midi: number, label: (string|string)}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, label: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, label: unknown}, filter: {highPassCutoffFrequency: {midi: number, label: unknown}, cutoffFrequency: {midi: number, label: unknown}, type: unknown, drive: unknown, resonance: {midi: number, label: (string|string)}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, label: string}, velAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, label: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: unknown}}, vibrato: unknown}}
 */
exports.getSynth = (buffer, panelOffset, splitEnabled) => {
    //const synthOffset3b = buffer.readUInt8(0x3b + panelOffset);
    const synthOffset52W = buffer.readUInt16BE(0x52 + panelOffset);
    const synthOffset56 = buffer.readUInt8(0x56 + panelOffset);
    const synthOffset57 = buffer.readUInt8(0x57 + panelOffset);
    const synthOffset80 = buffer.readUInt8(0x80 + panelOffset);
    const synthOffset81 = buffer.readUInt8(0x81 + panelOffset);
    const synthOffset84W = buffer.readUInt16BE(0x84 + panelOffset);
    const synthOffset86 = buffer.readUInt8(0x86 + panelOffset);
    const synthOffset87 = buffer.readUInt8(0x87 + panelOffset);
    const synthOffset8bW = buffer.readUInt16BE(0x8b + panelOffset);
    const synthOffset8cW = buffer.readUInt16BE(0x8c + panelOffset);
    const synthOffset8dW = buffer.readUInt16BE(0x8d + panelOffset);
    const synthOffset8eW = buffer.readUInt16BE(0x8e + panelOffset);
    const synthOffset8f = buffer.readUInt8(0x8f + panelOffset);
    const synthOffset8fW = buffer.readUInt16BE(0x8f + panelOffset);
    const synthOffset90W = buffer.readUInt16BE(0x90 + panelOffset);
    const synthOffset94W = buffer.readUInt16BE(0x94 + panelOffset);
    const synthOffset98 = buffer.readUInt8(0x98 + panelOffset);
    const synthOffset98W = buffer.readUInt16BE(0x98 + panelOffset);
    const synthOffset9cW = buffer.readUInt16BE(0x9c + panelOffset);
    const synthOffsetA0W = buffer.readUInt16BE(0xa0 + panelOffset);
    const synthOffsetA4W = buffer.readUInt16BE(0xa4 + panelOffset);
    const synthOffsetA5W = buffer.readUInt16BE(0xa5 + panelOffset);
    const synthOffsetA6W = buffer.readUInt16BE(0xa6 + panelOffset);
    const synthOffsetA7W = buffer.readUInt16BE(0xa7 + panelOffset);
    const synthOffsetA8 = buffer.readUInt8(0xa8 + panelOffset);
    const synthOffsetA8W = buffer.readUInt16BE(0xa8 + panelOffset);
    const synthOffsetA9W = buffer.readUInt16BE(0xa9 + panelOffset);
    const synthOffsetAaW = buffer.readUInt16BE(0xaa + panelOffset);
    const synthOffsetAbW = buffer.readUInt16BE(0xab + panelOffset);
    const synthOffsetAc = buffer.readUInt8(0xac + panelOffset);



    const oscillatorType = mapping.synthOscillatorTypeMap.get((synthOffset8dW & 0x0380) >>> 7);
    let oscillator1WaveForm = "";
    switch (oscillatorType) {
        case "Classic":
            oscillator1WaveForm = mapping.synthOscillator1ClassicWaveTypeMap.get((synthOffset8eW & 0x01c0) >>> 6);
            break;
        case "Wave":
            oscillator1WaveForm = mapping.synthOscillator1WaveWaveTypeMap.get((synthOffset8eW & 0x0fc0) >>> 6);
            break;
        case "Formant":
            oscillator1WaveForm = mapping.synthOscillator1FormantWaveTypeMap.get((synthOffset8eW & 0x03c0) >>> 6);
            break;
        case "Super":
            oscillator1WaveForm = mapping.synthOscillator1SuperWaveTypeMap.get((synthOffset8eW & 0x01c0) >>> 6);
            break;
        case "Sample":
            oscillator1WaveForm = "Sample " + (((synthOffset8eW & 0x7fc0) >>> 6) + 1);
            break;
    }

    const oscConfig = mapping.synthOscillatorsTypeMap.get((synthOffset8f & 0x1e) >>> 1);

    const osc2Pitch = ((synthOffset8fW & 0x01f8) >>> 3) - 12;
    const osc2PitchMidi = Math.ceil(((osc2Pitch + 12) * 127) / (48 + 12));

    const oscCtrlMidi = (synthOffset90W & 0x07f0) >>> 4;
    const oscModulation = getKnobDualValues((synthOffset94W & 0x0fe0) >>> 5);

    let oscCtrl = "";
    switch (oscConfig) {
        case "1 Pitch":
            oscCtrl = converter.midi2LinearStringValue(0, 24, oscCtrlMidi, 1, "");
            break;
        case "2 Shape":
            oscCtrl = converter.midi2LinearStringValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case "3 Sync":
            oscCtrl = converter.midi2LinearStringValue(0, 10, oscCtrlMidi, 1, "");
            break;
        case "4 Detune":
            oscCtrl = converter.midi2LinearStringValue(0, 4, oscCtrlMidi, 2, "");
            break;
        case "5 MixSin":
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case "6 MixTri":
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case "7 MixSaw":
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case "8 MixSqr":
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case "9 MixBell":
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case "10 MixNs1":
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case "11 MixNs2":
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case "12 FM1":
            oscCtrl = converter.midi2LinearStringValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case "13 FM2":
            oscCtrl = converter.midi2LinearStringValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case "14 RM":
            oscCtrl = converter.midi2LinearStringValue(0, 100, oscCtrlMidi, 0, "%");
            break;
    }

    const lfoRateMidi = synthOffset87 & 0x7f;

    const envModAttackMidi = (synthOffset8bW & 0xfe00) >>> 9;
    const envModDecayMidi = (synthOffset8bW & 0x01fc) >>> 2;
    const envModReleaseMidi = (synthOffset8cW & 0x03f8) >>> 3;

    const envAmpAttackMidi = (synthOffsetA5W & 0x03f8) >>> 3;
    const envAmpDecayMidi = (synthOffsetA6W & 0x07f0) >>> 4;
    const envAmpReleaseMidi = (synthOffsetA7W & 0x0fe0) >>> 5;

    const filterType = mapping.synthFilterTypeMap.get((synthOffset98 & 0x1c) >>> 2);
    const filterModulation1KnobMidi = (synthOffsetA0W & 0x0fe0) >>> 5;
    const filterModulation2Knob = getKnobDualValues((synthOffsetA4W & 0x1fc0) >>> 6);
    const filterResFreqHpKnobMidi = (synthOffset9cW & 0x07f0) >>> 4;
    const filterCutoffFreqKnobMidi = (synthOffset98W & 0x03f8) >>> 3;

    const arpeggiatorRange = (synthOffset80 & 0x18) >>> 3;
    const arpeggiatorPattern = (synthOffset80 & 0x06) >>> 1;
    const arpeggiatorRateMidi = (synthOffset81 & 0xfe) >>> 1;
    const arpeggiatorMasterClock = (synthOffset80 & 0x01) !== 0;
    const synthEnabled = (synthOffset52W & 0x8000) !== 0;

    const sampleId1 = ((synthOffsetA8W & 0x07f8) >>> 3) * Math.pow(2, 24);
    const sampleId2 = ((synthOffsetA9W & 0x07f8) >>> 3) * Math.pow(2, 16);
    const sampleId3 = ((synthOffsetAaW & 0x07f8) >>> 3) * Math.pow(2, 8);
    const sampleId4 = (synthOffsetAbW & 0x07f8) >>> 3;
    const sampleId = sampleId1 + sampleId2 + sampleId3 + sampleId4;

    const synth = {
        debug: {
            name: mapping.sampleIdMap.get(sampleId),
            sampleId: sampleId.toString(16),
        },

        /**
         * Offset in file: 0x52 (b7): O = disabled, 1 = enabled
         *
         * @module Synth On
         */
        enabled: synthEnabled,

        /**
         * Offset in file: 0x52 (b6 to b3)
         * ref Organ section for more examples
         *
         * @module Synth Kb Zone
         */
        kbZone: getKbZone(synthEnabled, splitEnabled, (synthOffset52W & 0x7800) >>> 11),

        /**
         * Offset in file: 0x52 (b2/1/0) and 0x53 (b7/6/5/4)
         *
         * @module Synth Volume
         */
        volume: getVolumeEx(buffer, 0x52 + panelOffset),

        /**
         * Offset in file: 0x56 (b1/0)
         *
         * @module Synth Octave Shift
         */
        octaveShift: mapping.synthOctaveShiftMap.get(synthOffset56 & 0x03),

        /**
         * Offset in file: 0x57 (b7)
         *
         * @module Synth Pitch Stick
         */
        pitchStick: (synthOffset57 & 0x80) !== 0,

        //pitchStickRange: mapping.synthPitchShiftRangeMap.get((synthOffset3b & 0xf0) >>> 4),

        /**
         * Offset in file: 0x57 (b2)
         *
         * @module Synth Sustain Pedal
         */
        sustainPedal: (synthOffset57 & 0x40) !== 0,

        /**
         * Offset in file: 0x80 (b7)
         *
         * @module Synth Keyboard Hold
         */
        keyboardHold: (synthOffset80 & 0x80) !== 0,

        /**
         * Offset in file: 0x84 (b0) and 0x85 (b7)
         *
         * @module Synth Voice
         */
        voice: mapping.synthVoiceMap.get((synthOffset84W & 0x0180) >>> 7),

        /**
         * Offset in file: 0x84 (b6 to b0) 7 bits, range 0/10
         *
         * @module Synth Glide
         */
        glide: converter.midi2LinearStringValue(0, 10, synthOffset84W & 0x007f, 1, ""),

        /**
         * Offset in file: 0x86 (b7/6)
         *
         * @module Synth Unison
         */
        unison: mapping.synthUnisonMap.get((synthOffset86 & 0xc0) >>> 6),

        /**
         * Offset in file: 0x86 (b5/4/3)
         *
         * @module Synth Vibrato
         */
        vibrato: mapping.synthVibratoMap.get((synthOffset86 & 0x38) >>> 3),

        /***
         * Synth Oscillators Definition
         */
        oscillators: {
            /**
             * Offset in file: 0x8D (b1/0) and 0x81 (b7)
             *
             * @module Synth Oscillator Type
             */
            type: oscillatorType,

            /**
             * Offset in file: 0x8E (b3-0) and 0x8F (b7/6)
             *
             * @module Synth Oscillator 1 Wave Form
             */
            waveForm1: oscillator1WaveForm,

            /**
             * Offset in file: 0x8F (b4-1)
             *
             * @module Synth Oscillator Configuration
             */
            config: oscConfig,

            /**
             * Offset in file: 0x90 (b2/1/0) and 0x91 (b7/6/5/4) - 0/127 value
             * | --- | ---
             * | Midi value conversion |
             * | Pitch (1)             | 0/127 => 0/24
             * | Shape (2)             | 0/127 => 0/100 %
             * | Sync (3)              | 0/127 => 0/10
             * | Detune (4)            | 0/127 => 0/4
             * | Mix* (5 to 11)        | 0/127 => 100/0 to 0/100
             * | FM & RM (12 to 14)    | 0/127 => 0/100 %
             *
             * @module Synth Control Value
             */
            control: {
                /**
                 * Synth Control Midi Value
                 */
                midi: oscCtrlMidi,

                /**
                 * Synth Control Label
                 */
                label: oscCtrl,
            },

            /**
             * Offset in file: 0x8f (b0) and 0x90 (b7-3)
             * | --- |
             * Midi value are the 6 bits value used + b0 (zero)
             * label conversion: -12 (Sub) to +48
             *
             * @module Synth Pitch Value
             */
            pitch: {
                /***
                 * Synth Pitch Midi Value
                 */
                midi: osc2PitchMidi,

                /***
                 * Synth Pitch Label
                 */
                label: osc2Pitch === -12 ? "Sub" : osc2Pitch + " semi",
            },

            /**
             * Offset in file: 0x94 (b3-0) and 0x95 (b7-5)
             * | --- |
             * Osc modulation (lfo/env mod) is using this single 7-bit value to define two settings with a single knob.
             * Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
             * 0   = 10.0 (100% left value) LFO Amount
             * 60  = 0.0 for both values
             * 120 = 10.0 (100% right value) Mod Env Amount
             *
             * @module Synth LFO Mod Env
             */
            modulations: {
                /**
                 * LFO Amount
                 */
                lfoAmount: {
                    midi: oscModulation.leftMidi,
                    label: oscModulation.leftValue,
                },
                /**
                 * Env Mod Amount
                 */
                modEnvAmount: {
                    midi: oscModulation.rightMidi,
                    label: oscModulation.rightValue,
                },
            },
            /**
             * Offset in file: 0xAC (b2)
             *
             * @module Synth Fast Attack
             */
            fastAttack: (synthOffsetAc & 0x04) !== 0,
        },
        filter: {
            /**
             * Offset in file: 0x98 (b4-6)
             * | --- | --- |
             * | 0 | LP12
             * | 1 | LP24
             * | 2 | Mini Moog
             * | 3 | LP+HP
             * | 4 | BP24
             * | 5 | HP24
             *
             * @module Synth Filter Type
             */
            type: filterType,

            /**
             * Offset in file: 0xA5 (b5-4)
             * | --- | --- |
             * | 0 | Off
             * | 1 | 1/3
             * | 2 | 2/3
             * | 3 | 1
             *
             * @module Synth Filter Kb Track
             */
            kbTrack: mapping.synthFilterKbTrackMap.get((synthOffsetA5W & 0x3000) >>> 12),

            /**
             * Offset in file: 0xA5 (b3-2)
             * | --- | --- |
             * | 0 | Off
             * | 1 | 1
             * | 2 | 2
             * | 3 | 3
             *
             * @module Synth Filter Drive
             */
            drive: mapping.synthFilterDriveMap.get((synthOffsetA5W & 0x0c00) >>> 10),

            modulations: {
                lfoAmount: {
                    midi: filterModulation1KnobMidi,
                    label: converter.midi2LinearStringValue(0, 10, filterModulation1KnobMidi, 1, ""),
                },
                velAmount: {
                    midi: filterModulation2Knob.leftMidi,
                    label: filterModulation2Knob.leftValue,
                },
                modEnvAmount: {
                    midi: filterModulation2Knob.rightMidi,
                    label: filterModulation2Knob.rightValue,
                },
            },
            cutoffFrequency: {
                midi: filterCutoffFreqKnobMidi,
                label: mapping.synthFilterCutoffFrequencyMap.get(filterCutoffFreqKnobMidi),
            },
            highPassCutoffFrequency: {
                midi: filterType === "LP+HP" ? filterResFreqHpKnobMidi : 0,
                label:
                    filterType === "LP+HP" ? mapping.synthFilterCutoffFrequencyMap.get(filterResFreqHpKnobMidi) : "0.0",
            },
            resonance: {
                midi: filterType === "LP+HP" ? 0 : filterResFreqHpKnobMidi,
                label:
                    filterType === "LP+HP"
                        ? "0.0"
                        : converter.midi2LinearStringValue(0, 10, filterResFreqHpKnobMidi, 1, ""),
            },
        },
        envelopes: {
            modulation: {
                attack: {
                    midi: envModAttackMidi,
                    label: mapping.synthEnvAttackMap.get(envModAttackMidi),
                },
                decay: {
                    midi: envModDecayMidi,
                    label: synthEnvDecayOrReleaseLabel(envModDecayMidi, "mod.decay"),
                },
                release: {
                    midi: envModReleaseMidi,
                    label: synthEnvDecayOrReleaseLabel(envModReleaseMidi, "mod.release"),
                },
                velocity: (synthOffset8dW & 0x0400) !== 0,
            },
            amplifier: {
                attack: {
                    midi: envAmpAttackMidi,
                    label: mapping.synthEnvAttackMap.get(envAmpAttackMidi),
                },
                decay: {
                    midi: envAmpDecayMidi,
                    label: synthEnvDecayOrReleaseLabel(envAmpDecayMidi, "amp.decay"),
                },
                release: {
                    midi: envAmpReleaseMidi,
                    label: synthEnvDecayOrReleaseLabel(envAmpReleaseMidi, "amp.release"),
                },
                velocity: mapping.synthAmpEnvelopeVelocityMap.get((synthOffsetA8 & 0x18) >>> 3),
            },
        },
        lfo: {
            wave: mapping.synthLfoWaveMap.get(synthOffset86 & 0x07),
            rate: {
                midi: lfoRateMidi,
                label: mapping.synthLfoRateMap.get(lfoRateMidi),
            },
            masterClock: (synthOffset87 & 0x80) !== 0,
        },
        arpeggiator: {
            enabled: (synthOffset80 & 0x40) !== 0,
            rate: {
                midi: arpeggiatorRateMidi,
                label: arpeggiatorMasterClock
                    ? mapping.synthArpMasterClockDivisionMap.get(arpeggiatorRateMidi)
                    : mapping.synthArpRateMap.get(arpeggiatorRateMidi),
            },
            kbSync: (synthOffset80 & 0x20) !== 0,
            masterClock: arpeggiatorMasterClock,
            range: mapping.arpeggiatorRangeMap.get(arpeggiatorRange),
            pattern: mapping.arpeggiatorPatternMap.get(arpeggiatorPattern),
        },
    };

    if (process.env.NODE_ENV === 'production')  {
        synth.debug = undefined;
    }

    return synth;
};
