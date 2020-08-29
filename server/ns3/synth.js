const mapping = require("./mapping");
const converter = require("../common/converter");
const { getVolume } = require("../common/utils");
const { getKnobDualValues } = require("../common/utils");

/***
 * returns Synth section
 *
 * @param buffer
 * @param panelOffset
 * @returns {{voice: unknown, oscillators: {control: {midi: number, label: string}, fastAttack: boolean, pitch: {midi: number, label: (string|string)}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, label: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, label: unknown}, filter: {highPassCutoffFrequency: {midi: number, label: unknown}, cutoffFrequency: {midi: number, label: unknown}, type: unknown, drive: unknown, resonance: {midi: number, label: (string|string)}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, label: string}, velAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, label: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: unknown}}, vibrato: unknown}}
 */
exports.getSynth = (buffer, panelOffset) => {
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
    const synthOffsetA8 = buffer.readUInt8(0xa8 + panelOffset);
    const synthOffsetA5W = buffer.readUInt16BE(0xa5 + panelOffset);
    const synthOffsetA6W = buffer.readUInt16BE(0xa6 + panelOffset);
    const synthOffsetA7W = buffer.readUInt16BE(0xa7 + panelOffset);
    const synthOffsetAc = buffer.readUInt8(0xac + panelOffset);

    const oscillatorType = mapping.synthOscillatorTypeMap.get((synthOffset8dW & 0x0380) >> 7);
    let oscillator1WaveForm = "";
    switch (oscillatorType) {
        case "Classic":
            oscillator1WaveForm = mapping.synthOscillator1ClassicWaveFormMap.get((synthOffset8eW & 0x01c0) >> 6);
            break;
        case "Wave":
            oscillator1WaveForm = mapping.synthOscillator1WaveWaveFormMap.get((synthOffset8eW & 0x0fc0) >> 6);
            break;
        case "Formant":
            oscillator1WaveForm = mapping.synthOscillator1FormantWaveFormMap.get((synthOffset8eW & 0x03c0) >> 6);
            break;
        case "Super":
            oscillator1WaveForm = mapping.synthOscillator1SuperWaveFormMap.get((synthOffset8eW & 0x01c0) >> 6);
            break;
        case "Sample":
            oscillator1WaveForm = "Sample " + (((synthOffset8eW & 0x7fc0) >> 6) + 1);
            break;
    }

    const oscConfig = mapping.synthOscillatorsTypeMap.get((synthOffset8f & 0x1e) >> 1);

    const osc2Pitch = ((synthOffset8fW & 0x01f8) >> 3) - 12;
    const osc2PitchMidi = Math.ceil(((osc2Pitch + 12) * 127) / (48 + 12));

    const oscCtrlMidi = (synthOffset90W & 0x07f0) >> 4;
    const oscModulation = getKnobDualValues((synthOffset94W & 0x0fe0) >> 5);

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

    const envModAttackMidi = (synthOffset8bW & 0xfe00) >> 9;
    const envModDecayMidi = (synthOffset8bW & 0x01fc) >> 2;
    const envModReleaseMidi = (synthOffset8cW & 0x03f8) >> 3;

    const envAmpAttackMidi = (synthOffsetA5W & 0x03f8) >> 3;
    const envAmpDecayMidi = (synthOffsetA6W & 0x07f0) >> 4;
    const envAmpReleaseMidi = (synthOffsetA7W & 0x0fe0) >> 5;

    const filterType = mapping.synthFilterTypeMap.get((synthOffset98 & 0x1c) >> 2);
    const filterModulation1KnobMidi = (synthOffsetA0W & 0x0fe0) >> 5;
    const filterModulation2Knob = getKnobDualValues((synthOffsetA4W & 0x1fc0) >> 6);
    const filterResFreqHpKnobMidi = (synthOffset9cW & 0x07f0) >> 4;
    const filterCutoffFreqKnobMidi = (synthOffset98W & 0x03f8) >> 3;

    const arpeggiatorRange = (synthOffset80 & 0x18) >> 3;
    const arpeggiatorPattern = (synthOffset80 & 0x06) >> 1;
    const arpeggiatorRateMidi = (synthOffset81 & 0xfe) >> 1;
    const arpeggiatorMasterClock = (synthOffset80 & 0x01) !== 0;
    const synthEnabled = (synthOffset52W & 0x8000) !== 0;

    return {
        /***
         * Synth Enabled:
         * Offset in file: 0x52 (b7): O = disabled, 1 = enabled
         */
        enabled: synthEnabled,

        /***
         * Synth Kb Zone:
         * Offset in file: 0x52 (b6 to b3)
         * ref Organ section for more examples
         */
        kbZone: synthEnabled ? mapping.kbZoneMap.get((synthOffset52W & 0x7800) >> 11) : "----",

        volume: getVolume((synthOffset52W & 0x7f0) >> 4),

        octaveShift: mapping.synthOctaveShiftMap.get(synthOffset56 & 0x03),
        pitchStick: (synthOffset57 & 0x80) !== 0,
        //pitchStickRange: mapping.synthPitchShiftRangeMap.get((synthOffset3b & 0xf0) >> 4),
        sustainPedal: (synthOffset57 & 0x40) !== 0,
        keyboardHold: (synthOffset80 & 0x80) !== 0,

        voice: mapping.synthVoiceMap.get((synthOffset84W & 0x0180) >> 7),
        glide: converter.midi2LinearStringValue(0, 10, synthOffset84W & 0x007f, 1, ""),
        unison: mapping.synthUnisonMap.get((synthOffset86 & 0xc0) >> 6),
        vibrato: mapping.synthVibratoMap.get((synthOffset86 & 0x38) >> 3),

        oscillators: {
            type: oscillatorType,
            waveForm1: oscillator1WaveForm,
            config: oscConfig,
            control: {
                midi: oscCtrlMidi,
                label: oscCtrl,
            },
            pitch: {
                midi: osc2PitchMidi,
                label: osc2Pitch === -12 ? "Sub" : osc2Pitch + " semi",
            },
            modulations: {
                lfoAmount: {
                    midi: oscModulation.leftMidi,
                    label: oscModulation.leftValue,
                },
                modEnvAmount: {
                    midi: oscModulation.rightMidi,
                    label: oscModulation.rightValue,
                },
            },
            fastAttack: (synthOffsetAc & 0x04) !== 0,
        },
        filter: {
            type: filterType,
            kbTrack: mapping.synthFilterKbTrackMap.get((synthOffsetA5W & 0x3000) >> 12),
            drive: mapping.synthFilterDriveMap.get((synthOffsetA5W & 0x0c00) >> 10),
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
                    label: mapping.synthEnvDecayOrReleaseLabel(envModDecayMidi, "mod.decay"),
                },
                release: {
                    midi: envModReleaseMidi,
                    label: mapping.synthEnvDecayOrReleaseLabel(envModReleaseMidi, "mod.release"),
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
                    label: mapping.synthEnvDecayOrReleaseLabel(envAmpDecayMidi, "amp.decay"),
                },
                release: {
                    midi: envAmpReleaseMidi,
                    label: mapping.synthEnvDecayOrReleaseLabel(envAmpReleaseMidi, "amp.release"),
                },
                velocity: mapping.synthAmpEnvelopeVelocityMap.get((synthOffsetA8 & 0x18) >> 3),
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
};