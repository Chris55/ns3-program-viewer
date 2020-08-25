const mapping = require("./mapping");
const converter = require("./converter");
const {Morph} = require("./model/ns3");



const getDrawbars = function (buffer, offset) {
    const organDrawbar0Flag = buffer.readUInt8(offset);                 // 0xbe
    const organDrawbar1Flag = buffer.readUInt8(offset + 2);       // 0xc0
    const organDrawbar2Flag = buffer.readUInt16BE(offset + 4);    // 0xc2
    const organDrawbar3Flag = buffer.readUInt8(offset + 7);       // 0xc5
    const organDrawbar4Flag = buffer.readUInt8(offset + 9);       // 0xc7
    const organDrawbar5Flag = buffer.readUInt16BE(offset + 11);    // 0xc9
    const organDrawbar6Flag = buffer.readUInt8(offset + 14);       // 0xcc
    const organDrawbar7Flag = buffer.readUInt16BE(offset + 16);    // 0xce
    const organDrawbar8Flag = buffer.readUInt8(offset + 19);       // 0xd1

    return [
        (organDrawbar0Flag & 0xf0) >> 4,
        (organDrawbar1Flag & 0x1e) >> 1,
        (organDrawbar2Flag & 0b0000001111000000) >> 6,  //0x03c0
        (organDrawbar3Flag & 0b01111000) >> 3,
        (organDrawbar4Flag & 0x0f),
        (organDrawbar5Flag & 0b0000000111100000) >> 5,
        (organDrawbar6Flag & 0b00111100) >> 2,
        (organDrawbar7Flag & 0b0000011110000000) >> 7,
        (organDrawbar8Flag & 0xf0) >> 4
    ];
}

const getVolume = function(value) {
    return {
        midi: value,
        //label: (value === 0) ? "Off": mapping.dBMap.get(value)
        label: mapping.dBMap.get(value)
    };
}

/***
 * Returns two values from a single knob (and equivalent midi value).
 * Settings like Osc modulation (lfo/env mod) and Filter modulation (vel/env mod) are using this option
 * to define two settings with a single knob.
 * Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
 * 0   = 10.0 (100% left value, example LFO Amount),
 * 60  = 0.0 for both values,
 * 120 = 10.0 (100% right value, example Mod Env Amount)
 * @param valueRange120
 * @returns {{midi: number, leftValue: string, rightValue: string}}
 */
const getKnobDualValues = function(valueRange120) {
    const valueRange127 = Math.ceil(((valueRange120) * 127 / (120)));
    const value = converter.midi2LinearValue(-10, 10, valueRange120, 1, 0, 120);
    let leftValue = "0.0";
    let rightValue = "0.0";
    let leftMidi = 0;
    let rightMidi = 0;
    if (value === 0) {
        leftMidi = valueRange127;
        rightMidi = valueRange127;
    } else if (value < 0) {
        leftValue = Math.abs(value).toFixed(1);
        leftMidi = valueRange127;
    } else {
        rightValue = value.toFixed(1);
        rightMidi = valueRange127;
    }
    return {
        leftMidi: leftMidi,
        rightMidi: rightMidi,
        leftValue: leftValue,
        rightValue: rightValue
    }
}

const getPanel = function(buffer, id) {

    const panelOffset31 = buffer.readUInt8(0x31);

    // Panel enabled flag is offset 0x31 (b5 & b6)
    // 0 = A only
    // 1 = B only
    // 2 = A & B
    // Panel selected flag is offset 0x31 (b7);
    // A = 0, B = 1 (not used here)

    const panelEnabledFlag = (panelOffset31 & 0x60) >> 5;
    const panelEnabled = (id === 0)
        ? (panelEnabledFlag === 0 || panelEnabledFlag === 2)
        : (panelEnabledFlag === 1 || panelEnabledFlag === 2);

    // all hardcoded offset are for Panel A, offset value is for Panel B

    const panelOffset = id * 263;

    // Piano section

    const pianoOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const pianoOffset43W = buffer.readUInt16BE(0x43 + panelOffset);
    const pianoOffset47 = buffer.readUInt8(0x47 + panelOffset);
    const pianoOffset48 = buffer.readUInt8(0x48 + panelOffset);
    //const pianoOffset49WW = buffer.readBigUInt64BE(0x49);
    const pianoOffset48W = buffer.readUInt16BE(0x48 + panelOffset);
    const pianoOffset4e = buffer.readUInt8(0x4e + panelOffset);
    const pianoOffset4d = buffer.readUInt8(0x4d + panelOffset);
    const pianoOffset4dW = buffer.readUInt16BE(0x4d + panelOffset);

    const piano = {
        enabled: (pianoOffset43W & 0x8000) !== 0,
        volume: getVolume((pianoOffset43W & 0x7F0) >> 4),

        // Type:
        // offset 0x48 (only 4 bits, last 3 of first nibble, first of second nibble) OR 0x98
        //
        // Values:
        // 0x40- Grand
        // 0x48- Upright
        // 0x50- Electric
        // 0x58- Clav
        // 0x60- Digital
        // 0x68- Misc
        type: mapping.pianoTypeMap.get((pianoOffset48 & 0x38) >> 3),

        // Model:
        // Offset 0x48 and 0x49 (last 3 bits of 0x49 and first 2 bits of 0x4A).
        // Values:
        // 0x00 0x00: model 1
        // 0x00 0x01: model 2
        // .. and so on
        // 0x02 0x01: model 10
        model: (pianoOffset48W & 0x07c0) >> 6,

        // Octave Shift
        // offset in file: 0x47 (just 4 last bits, OR 0x0F)
        //
        // Values:
        // 0xF5- Shift -1
        // 0xF6- No shift
        // 0xF7- Shift +1
        octaveShift: (pianoOffset47 & 0x07) - 6,

        // Pitch Stick
        // offset in file: 0x48 (just bit 0x80)
        // Values
        // 0x00- No
        // 0x80- Yes
        pitchStick: (pianoOffset48 & 0x80) !== 0,

        //Sustain Pedal
        // Offset in file: 0x48 (just bit 0x40)
        //
        // Values:
        // 0x00- No
        // 0x40- Yes
        sustainPedal: (pianoOffset48 & 0x40) !== 0,

        //
        // Piano Timbre
        // Offset in file: 0x4E
        // Possible Values:
        // 0x00- None
        // 0x08- Soft
        // 0x10- Mid
        // 0x18- Bright
        // 0x20- DYNO1
        // 0x28- DYNO2
        //
        timbre: mapping.pianoTimbreMap.get((pianoOffset4e & 0x38) >> 3),

        // Piano KB Touch
        // Offset in file: 0x4D (just least significant bit 1, so OR 0x01) and 0x4E (Just Most Significant Bit, so OR 0x80)
        //
        // Values:
        // 0x00 + 0x8x- KB Touch 1
        // 0x01 + 0x0x- KB Touch 2
        // 0x01 + 0x8x- KB Touch 3
        kbTouch: mapping.pianoKbTouchMap.get((pianoOffset4dW & 0x0180) >> 7),

        // Piano Layer Detune
        // Offset in file: 0x34
        //
        // Values:
        // 0x00- Off
        // 0x20- 1
        // 0x40- 2
        // 0x60- 3
        layerDetune: mapping.pianoLayerDetuneMap.get((pianoOffset34 & 0x60) >> 5),

        // Piano Soft Release
        // Offset in file: 0x4D (just least significant bit 4, so OR 0x08)
        //
        // Values:
        // 0x00 - No
        // 0x08 - Soft Release
        softRelease: (pianoOffset4d & 0x08) !== 0,

        // Piano Pedal Noise
        // Offset in file: 0x4D (just least significant bit 2, so OR 0x02)
        //
        // 0x00- No
        // 0x02- Pedal Noise
        pedalNoise: (pianoOffset4d & 0x02) !== 0,

        // String Res
        // Offset in file: 0x4D (just least significant bit 3, so OR 0x04)
        //
        // 0x00- No
        // 0x04- String Res
        stringResonance: (pianoOffset4d & 0x04) !== 0,
    };

    // Organ Section

    const organFlag34 = buffer.readUInt8(0x34 + panelOffset);
    const organOffset35 = buffer.readUInt8(0x35 + panelOffset);
    const organOffsetB6 = buffer.readUInt16BE(0xb6 + panelOffset);
    const organOffsetBa = buffer.readUInt8(0xba + panelOffset);
    const organOffsetBb = buffer.readUInt8(0xbb + panelOffset);
    const organOffsetD3 = buffer.readUInt8(0xd3 + panelOffset);
    const rotarySpeakerOffset39 = buffer.readUInt16BE(0x39 + panelOffset);
    const rotarySpeakerOffset10B = buffer.readUInt8(0x10b + panelOffset);

    const organ = {
        enabled: ((organOffsetB6 & 0x8000) !== 0),
        volume: getVolume((organOffsetB6 & 0x7F0) >> 4),
        type: mapping.organTypeMap.get((organOffsetBb & 0x70) >> 4),
        preset1: getDrawbars(buffer, 0xbe).join(""),
        preset2: getDrawbars(buffer, 0xd9).join(""),
        octaveShift: (organOffsetBa & 0x07) - 6,
        pitchStick: ((organFlag34 & 0x10) !== 0),
        sustainPedal: ((organOffsetBb & 0x80) !== 0),
        live: ((organOffsetBb & 0x08) !== 0),
        vibrato: {
            enabled: ((organOffsetD3 & 0x10) !== 0),
            mode: mapping.organVibratoModeMap.get((organFlag34 & 0b00001110) >> 1),
        },
        percussion: {
            enabled: ((organOffsetD3 & 0x08) !== 0),
            volumeSoft: ((organOffsetD3 & 0x01) !== 0),
            decayFast: ((organOffsetD3 & 0x02) !== 0),
            harmonicThird: ((organOffsetD3 & 0x04) !== 0),
        },
    };

    const rotarySpeaker = {
        drive: converter.midi2LinearStringValue(0, 10, (rotarySpeakerOffset39 & 0b0000011111110000) >> 4, 1, ""),
        source: mapping.sourceMap.get((rotarySpeakerOffset10B & 0b01100000) >> 5),
        stopMode: !(((organOffset35 & 0x80) >> 7) !== 0),
        speed: mapping.rotarySpeakerSpeedMap.get(organFlag34 & 0x01),
    };

    // synth section

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
    const osc2PitchMidi = Math.ceil(((osc2Pitch + 12) * 127 / (48 + 12)));

    const oscCtrlMidi = (synthOffset90W & 0x07f0) >> 4;
    const oscModulation = getKnobDualValues((synthOffset94W & 0x0fe0) >> 5);


    let oscCtrl = "";
    switch (oscConfig) {
        case '1 Pitch':
            oscCtrl = converter.midi2LinearStringValue(0, 24, oscCtrlMidi, 1, "");
            break;
        case '2 Shape':
            oscCtrl = converter.midi2LinearStringValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case '3 Sync':
            oscCtrl = converter.midi2LinearStringValue(0, 10, oscCtrlMidi, 1, "");
            break;
        case '4 Detune':
            oscCtrl = converter.midi2LinearStringValue(0, 4, oscCtrlMidi, 2, "");
            break;
        case '5 MixSin':
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '6 MixTri':
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '7 MixSaw':
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '8 MixSqr':
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '9 MixBell':
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '10 MixNs1':
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '11 MixNs2':
            oscCtrl = converter.midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '12 FM1':
            oscCtrl = converter.midi2LinearStringValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case '13 FM2':
            oscCtrl = converter.midi2LinearStringValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case '14 RM':
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
    const filterCutoffFreqKnobMidi = (synthOffset98W & 0x03F8) >> 3;

    const arpeggiatorRange = (synthOffset80 & 0x18) >> 3;
    const arpeggiatorPattern = (synthOffset80 & 0x06) >> 1;
    const arpeggiatorRateMidi = (synthOffset81 & 0xfe) >> 1;
    const arpeggiatorMasterClock = ((synthOffset80 & 0x01) !== 0);

    const synth = {
        enabled: ((synthOffset52W & 0x8000) !== 0),
        volume: getVolume((synthOffset52W & 0x7F0) >> 4),

        octaveShift: mapping.synthOctaveShiftMap.get(synthOffset56 & 0x03),
        pitchStick: ((synthOffset57 & 0x80) !== 0),
        //pitchStickRange: mapping.synthPitchShiftRangeMap.get((synthOffset3b & 0xf0) >> 4),
        sustainPedal: ((synthOffset57 & 0x40) !== 0),
        keyboardHold: ((synthOffset80 & 0x80) !== 0),

        voice: mapping.synthVoiceMap.get((synthOffset84W & 0x0180) >> 7),
        glide: converter.midi2LinearStringValue(0, 10,synthOffset84W & 0x007f, 1, ""),
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
                label: (osc2Pitch === -12) ? 'Sub': osc2Pitch + ' semi',
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
            fastAttack: ((synthOffsetAc & 0x04) !== 0),
        },
        filter: {
            type: filterType,
            kbTrack: mapping.synthFilterKbTrackMap.get((synthOffsetA5W & 0x3000) >> 12),
            drive:mapping.synthFilterDriveMap.get((synthOffsetA5W & 0x0c00) >> 10),
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
                midi: (filterType === 'LP+HP')
                    ? filterResFreqHpKnobMidi
                    : 0,
                label: (filterType === 'LP+HP')
                    ? mapping.synthFilterCutoffFrequencyMap.get(filterResFreqHpKnobMidi)
                    : "0.0",
            },
            resonance: {
                midi: (filterType === 'LP+HP')
                    ? 0
                    : filterResFreqHpKnobMidi,
                label: (filterType === 'LP+HP')
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
                velocity: ((synthOffset8dW & 0x0400) !== 0),
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
            }
        },
        lfo: {
            wave: mapping.synthLfoWaveMap.get(synthOffset86 & 0x07),
            rate: {
                midi: lfoRateMidi,
                label: mapping.synthLfoRateMap.get(lfoRateMidi),
            },
            masterClock: ((synthOffset87 & 0x80) !== 0),
        },
        arpeggiator: {
            enabled: ((synthOffset80 & 0x40) !== 0),
            rate: {
                midi: arpeggiatorRateMidi,
                label:  arpeggiatorMasterClock
                    ? mapping.synthArpMasterClockDivisionMap.get(arpeggiatorRateMidi)
                    : mapping.synthArpRateMap.get(arpeggiatorRateMidi),
            },
            kbSync: ((synthOffset80 & 0x20) !== 0),
            masterClock: arpeggiatorMasterClock,
            range: mapping.arpeggiatorRangeMap.get(arpeggiatorRange),
            pattern: mapping.arpeggiatorPatternMap.get(arpeggiatorPattern)
        }
    };


    return {
        enabled: panelEnabled,
        organ: organ,
        piano: piano,
        synth: synth,
        effects: {
            rotarySpeaker: rotarySpeaker,
            // effect1: {},
            // effect2: {},
            // delay: {},
            // ampSimEq: {},
            // compressor: {},
            // reverb: {}
        },
        // morph: {
        //     wheel: new Morph(),
        //     afterTouch: new Morph(),
        //     controlPedal: new Morph(),
        // },
    };
}

exports.loadNs3fFile = (buffer) => {

    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const fileExt = buffer.toString("utf8", 8, 12);
        if (fileExt !== "ns3f") {
            throw new Error(fileExt + " file are not supported, select a valid ns3f file");
        }
    }
    if (buffer.length !== 592) {
        throw new Error("Invalid file, unexpected file length");
    }

    // const fileId = buffer.readUInt16BE(0x0e);
    const offset10 = buffer.readUInt8(0x10);
    const offset14W = buffer.readUInt16LE(0x14);
    const offset31 = buffer.readUInt8(0x31);
    const offset31W = buffer.readUInt16BE(0x31);
    const offset32W = buffer.readUInt16BE(0x32);
    const offset33W = buffer.readUInt16BE(0x33);
    const offset38W = buffer.readUInt16BE(0x38);

    /***
     * Split:
     * offset 0x31 (b4 to b0) to 0x34 (b7 only)
     *
     *   0X31        0x32       0x33       0x34
     * xxx4 3210  7654 3210  7654 3210  7xxx xxxx
     * ---------  ---------  ---------  ---------
     * xxx4 xxxx  xxxx xxxx  xxxx xxxx  xxxx xxxx: split off/on
     * xxxx 321x  xxxx xxxx  xxxx xxxx  xxxx xxxx: low off/on, mid off/on, high off/on
     * xxxx xxx0  765x xxxx  xxxx xxxx  xxxx xxxx: low note (0 = F2, 1 = C3, 9 = C7)
     * xxxx xxxx  xxx4 321x  xxxx xxxx  xxxx xxxx: mid note
     * xxxx xxxx  xxxx xxx0  765x xxxx  xxxx xxxx: high note
     * xxxx xxxx  xxxx xxxx  xxx5 4xxx  xxxx xxxx: low width (0 = 1, 1 = 6, 2 = 12)
     * xxxx xxxx  xxxx xxxx  xxxx x32x  xxxx xxxx: mid width
     * xxxx xxxx  xxxx xxxx  xxxx xxx0  7xxx xxxx: high width
     */

    /***
     * Split Example:
     *
     * Test1:  06 07 20 01 : Split Off
     *
     * Test2:  16 07 20 01 : Width Off 1   1
     *                       Note  --  C4  C7
     *
     * Test3:  1E 07 20 01 : Width 1   1   1
     *                       Note  F2  C4  C7
     *
     * Test4:  1E 07 28 01 : Width 6   1   1
     *                       Note  F2  C4  C7
     *
     * Test5:  1E 07 30 01 : Width 12  1   1
     *                       Note  F2  C4  C7
     *
     * Test6:  18 07 30 01 : Width 12  Off Off
     *                       Note  F2  --  --
     *
     * Test7:  18 27 30 01 : Width 12  Off Off
     *                       Note  C3  --  --
     *
     * Test8:  18 47 30 01 : Width 12  Off Off
     *                       Note  F3  --  --
     *
     * Test9:  18 67 30 01 : Width 12  Off Off
     *                       Note  C4  --  --
     *
     * Test10: 18 87 30 01 : Width 12  Off Off
     *                       Note  F4  --  --
     *
     * Test11: 18 A7 30 01 : Width 12  Off Off
     *                       Note  C5  --  --
     *
     * Test12: 18 C7 30 01 : Width 12  Off Off
     *                       Note  F5  --  --
     *
     * Test13: 18 E7 30 01 : Width 12  Off Off
     *                       Note  C6  --  --
     *
     * Test14: 19 07 30 01 : Width 12  Off Off
     *                       Note  F6  --  --
     *
     * Test15: 19 27 30 01 : Width 12  Off Off
     *                       Note  C7  --  --
     *
     * Test16: 1B 27 30 01 : Width 12  Off 1     ! From test 15 to 16 only High Width was changed manually !
     *                       Note  F6  --  C7    ! Note Low in file is C7 but fixed on display to F6...
     *
     * Test17: 1B 27 30 81 : Width 12  Off 6
     *                       Note  F6  --  C7
     *
     * Test18: 1B 27 31 01 : Width 12  Off 12
     *                       Note  F6  --  C7
     *
     * Test19: 1C 23 30 01 : Width 12  1   Off
     *                       Note  C3  F3  --   ! Note Mid in file is C3 but fixed on display to F3 !
     */

    const splitLowEnabled = (offset31 & 0x08) !== 0;
    const splitMidEnabled = (offset31 & 0x04) !== 0;
    const splitHighEnabled = (offset31 & 0x02) !== 0;
    let splitLowNote = (offset31W & 0x01e0) >> 5;
    let splitMidNote = (offset31W & 0x001e) >> 1;
    let splitHighNote = (offset32W & 0x01e0) >> 5;
    const lastNote = 9;

    // low/mid/high note can unordered in file !!!
    // validation must be done to fix note order if required

    if (splitLowEnabled && splitMidEnabled && !splitHighEnabled) {
        if (splitLowNote >= splitMidNote) {
            splitMidNote = splitLowNote + 1;
            if (splitMidNote > lastNote) {
                splitLowNote--;
                splitMidNote--;
            }
        }
    } else if (splitLowEnabled && !splitMidEnabled && splitHighEnabled) {
        if (splitLowNote >= splitHighNote) {
            splitHighNote = splitLowNote + 1;
            if (splitHighNote > lastNote) {
                splitLowNote--;
                splitHighNote--;
            }
        }
    } else if (!splitLowEnabled && splitMidEnabled && splitHighEnabled) {
        if (splitMidNote >= splitHighNote) {
            splitHighNote = splitMidNote + 1;
            if (splitHighNote > lastNote) {
                splitMidNote--;
                splitHighNote--;
            }
        }
    } else if (splitLowEnabled && splitMidEnabled && splitHighEnabled) {
        // not sure what to do...
        // if (splitMidNote >= splitHighNote) {
        //     splitHighNote = splitMidNote + 1;
        //     if (splitHighNote > lastNote) {
        //         splitMidNote--;
        //         splitHighNote--;
        //     }
        // }
    }


    const split = {
        enabled: (offset31 & 0x10) !== 0,
        low: {
            width: (splitLowEnabled) ? mapping.splitWidthMap.get((offset33W & 0x1800) >> 11): "Off",
            note: (splitLowEnabled) ? mapping.splitNoteMap.get(splitLowNote): "--",
        },
        mid: {
            width: (splitMidEnabled) ? mapping.splitWidthMap.get((offset33W & 0x0600) >> 9): "Off",
            note: (splitMidEnabled) ? mapping.splitNoteMap.get(splitMidNote): "--",
        },
        high: {
            width: (splitHighEnabled) ? mapping.splitWidthMap.get((offset33W & 0x0180) >> 7): "Off",
            note: (splitHighEnabled) ? mapping.splitNoteMap.get(splitHighNote): "--",
        },
    };

    const zeroPad = (num, places) => String(num).padStart(places, '0')
    const majorVersion = Math.trunc(offset14W / 100);
    const minorVersion = zeroPad((offset14W - (majorVersion * 100)), 2);


    const tempo = ((offset38W & 0x07f8) >> 3) + 30;

    return {
        name: '',
        version: majorVersion + '.' + minorVersion,
        category: mapping.categoryMap.get(offset10),
        //fileId: fileId,
        masterClock:  {
            rate: tempo + ' bpm',
            //keyboardSync: '' // this is a global setting
        },
        // transpose: '',
        split: split,
        // dualKeyboard: {
        //     enabled: '',
        //     style: '',
        // },
        //monoOut: '', // this is a global setting
        panelA: getPanel(buffer, 0),
        panelB: getPanel(buffer, 1),
    };
}



