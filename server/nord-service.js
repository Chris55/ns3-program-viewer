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

    const fileId = buffer.readUInt32LE(0x0e);


    const pianoFlag1 = buffer.readUInt16BE(0x43);
    const pianoFlag2 = buffer.readUInt8(0x48);

    const piano = {
        enabled: (pianoFlag1 & 0x8000) !== 0,
        volume: getVolume((pianoFlag1 & 0x7F0) >> 4),
        type: mapping.pianoTypeMap.get((pianoFlag2 & 0x38) >> 3),
        name: mapping.pianoNameMap.get(buffer.readBigUInt64BE(0x49)),
        pitchStick: (pianoFlag2 & 0x80) !== 0,
        sustainPedal: (pianoFlag2 & 0x40) !== 0,
    };


    const organFlag34 = buffer.readUInt8(0x34);
    const organOffset35 = buffer.readUInt8(0x35);
    const organOffsetB6 = buffer.readUInt16BE(0xb6);
    const organOffsetBa = buffer.readUInt8(0xba);
    const organOffsetBb = buffer.readUInt8(0xbb);
    const organOffsetD3 = buffer.readUInt8(0xd3);
    const rotarySpeakerOffset39 = buffer.readUInt16BE(0x39);
    const rotarySpeakerOffset10B = buffer.readUInt8(0x10b);


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



    const synthOffset3b = buffer.readUInt8(0x3b);
    const synthOffset52W = buffer.readUInt16BE(0x52);
    const synthOffset56 = buffer.readUInt8(0x56);
    const synthOffset57 = buffer.readUInt8(0x57);
    const synthOffset80 = buffer.readUInt8(0x80);
    const synthOffset84W = buffer.readUInt16BE(0x84);
    const synthOffset86 = buffer.readUInt8(0x86);
    const synthOffset87 = buffer.readUInt8(0x87);
    const synthOffset8bW = buffer.readUInt16BE(0x8b);
    const synthOffset8cW = buffer.readUInt16BE(0x8c);
    const synthOffset8dW = buffer.readUInt16BE(0x8d);
    const synthOffset8eW = buffer.readUInt16BE(0x8e);
    const synthOffset8f = buffer.readUInt8(0x8f);
    const synthOffset8fW = buffer.readUInt16BE(0x8f);
    const synthOffset90W = buffer.readUInt16BE(0x90);
    const synthOffset94W = buffer.readUInt16BE(0x94);
    const synthOffsetA8 = buffer.readUInt8(0xa8);
    const synthOffsetA5W = buffer.readUInt16BE(0xa5);
    const synthOffsetA6W = buffer.readUInt16BE(0xa6);
    const synthOffsetA7W = buffer.readUInt16BE(0xa7);
    const synthOffsetAc = buffer.readUInt8(0xac);

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

    // Osc Modulation is coded on 7 bits in byte 0x94 and 0x95 (b11 to b5) for Panel A.
    // Value is not the direct midi value as usual, instead it is coded on a weird
    // 0/120 range:
    // 0   = 10.0 LFO Amount,
    // 60  = 0.0 LFO/Mod Env Amount,
    // 120 = 10.0 Mod Env Amount
    // note: API also returns the midi value that is deduced from the final value.

    const oscModulationRange120 = (synthOffset94W & 0x0fe0) >> 5;
    const oscModulationMidi = Math.ceil(((oscModulationRange120) * 127 / (120)));
    const oscModulation = converter.midi2LinearValue(-10, 10, oscModulationRange120, 1, 0, 120);
    let oscLfoAmount = "0.0";
    let oscModEnvAmount = "0.0";
    if (oscModulation < 0) {
        oscLfoAmount = Math.abs(oscModulation).toFixed(1);
    } else {
        oscModEnvAmount = oscModulation.toFixed(1);
    }


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



    const synth = {
        enabled: ((synthOffset52W & 0x8000) !== 0),
        volume: getVolume((synthOffset52W & 0x7F0) >> 4),

        octaveShift: mapping.synthOctaveShiftMap.get(synthOffset56 & 0x03),
        pitchStick: ((synthOffset57 & 0x80) !== 0),
        pitchStickRange: mapping.synthPitchShiftRangeMap.get((synthOffset3b & 0xf0) >> 4),
        sustainPedal: ((synthOffset57 & 0x40) !== 0),
        keyboardHold: ((synthOffset80 & 0x80) !== 0),

        voice: mapping.synthVoiceMap.get((synthOffset84W & 0x0180) >> 7),
        glide: converter.midi2LinearStringValue(0, 10,synthOffset84W & 0x007f, 1, ""),
        unison: mapping.synthUnisonMap.get((synthOffset86 & 0xc0) >> 6),

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
            modulation: {
                midi: oscModulationMidi,
                lfoAmount: oscLfoAmount,
                modEnvAmount: oscModEnvAmount,
                //label: oscModulationLabel,
            },
            fastAttack: ((synthOffsetAc & 0x04) !== 0),
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

    };

    return {
        name: '',
        fileId: fileId,
        panelA: {
            organ: organ,
            piano: piano,
            synth: synth,
            effect: {
                rotarySpeaker: rotarySpeaker,
                effect1: {},
                effect2: {},
                delay: {},
                ampSimEq: {},
                compressor: {},
                reverb: {}
            },
            morph: {
                wheel: new Morph(),
                afterTouch: new Morph(),
                controlPedal: new Morph(),
            },
        },
        panelB:  {

        },
        masterClock:  {
            rate: '',
            keyboardSync: ''
        },
        transpose: '',
        split: {
            enabled: '',
            low: {
                width: '',
                key: '',
            },
            mid: {
                width: '',
                key: '',
            },
            high: {
                width: '',
                key: '',
            },
        },
        monoOut: '',
        dualKeyboard: ''
    };
}



