const {midi2LinearValueAndComplement} = require("./mapping");
const {synthOscillatorsTypeMap} = require("./mapping");
const {synthAmpEnvelopeVelocityMap} = require("./mapping");
const {synthEnvDecayOrReleaseLabel} = require("./mapping");
const {synthEnvAttackMap} = require("./mapping");
const {synthLfoRateMap} = require("./mapping");
const {synthLfoWaveMap} = require("./mapping");
const {synthPitchShiftRangeMap} = require("./mapping");
const {synthOctaveShiftMap} = require("./mapping");
const {synthOscillator1SuperWaveFormMap} = require("./mapping");
const {Morph} = require("./model/ns3");
const {dBMap} = require("./mapping");
const {midi2LinearValue} = require("./mapping");
const {synthOscillator1FormantWaveFormMap} = require("./mapping");
const {synthOscillator1WaveWaveFormMap} = require("./mapping");
const {synthOscillator1ClassicWaveFormMap} = require("./mapping");
const {synthOscillatorTypeMap} = require("./mapping");
const {rotarySpeakerSpeedMap} = require("./mapping");
const {sourceMap} = require("./mapping");
const {organVibratoModeMap} = require("./mapping");
const {organTypeMap} = require("./mapping");
const {pianoNameMap} = require("./mapping");
const {pianoTypeMap} = require("./mapping");


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
        label: dBMap.get(value)
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
        type: pianoTypeMap.get((pianoFlag2 & 0x38) >> 3),
        name: pianoNameMap.get(buffer.readBigUInt64BE(0x49)),
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
        type: organTypeMap.get((organOffsetBb & 0x70) >> 4),
        preset1: getDrawbars(buffer, 0xbe).join(""),
        preset2: getDrawbars(buffer, 0xd9).join(""),
        octaveShift: (organOffsetBa & 0x07) - 6,
        pitchStick: ((organFlag34 & 0x10) !== 0),
        sustainPedal: ((organOffsetBb & 0x80) !== 0),
        live: ((organOffsetBb & 0x08) !== 0),
        vibrato: {
            enabled: ((organOffsetD3 & 0x10) !== 0),
            mode: organVibratoModeMap.get((organFlag34 & 0b00001110) >> 1),
        },
        percussion: {
            enabled: ((organOffsetD3 & 0x08) !== 0),
            volumeSoft: ((organOffsetD3 & 0x01) !== 0),
            decayFast: ((organOffsetD3 & 0x02) !== 0),
            harmonicThird: ((organOffsetD3 & 0x04) !== 0),
        },
    };

    const rotarySpeaker = {
        drive: midi2LinearValue(0, 10, (rotarySpeakerOffset39 & 0b0000011111110000) >> 4, 1, ""),
        source: sourceMap.get((rotarySpeakerOffset10B & 0b01100000) >> 5),
        stopMode: !(((organOffset35 & 0x80) >> 7) !== 0),
        speed: rotarySpeakerSpeedMap.get(organFlag34 & 0x01),
    };



    const synthOffset3b = buffer.readUInt8(0x3b);
    const synthOffset52W = buffer.readUInt16BE(0x52);
    const synthOffset56 = buffer.readUInt8(0x56);
    const synthOffset57 = buffer.readUInt8(0x57);
    const synthOffset80 = buffer.readUInt8(0x80);
    const synthOffset86 = buffer.readUInt8(0x86);
    const synthOffset87 = buffer.readUInt8(0x87);
    const synthOffset8bW = buffer.readUInt16BE(0x8b);
    const synthOffset8cW = buffer.readUInt16BE(0x8c);
    const synthOffset8dW = buffer.readUInt16BE(0x8d);
    const synthOffset8eW = buffer.readUInt16BE(0x8e);
    const synthOffset8f = buffer.readUInt8(0x8f);
    const synthOffset90W = buffer.readUInt16BE(0x90);
    const synthOffsetA8 = buffer.readUInt8(0xa8);
    const synthOffsetA5W = buffer.readUInt16BE(0xa5);
    const synthOffsetA6W = buffer.readUInt16BE(0xa6);
    const synthOffsetA7W = buffer.readUInt16BE(0xa7);
    const synthOffsetAc = buffer.readUInt8(0xac);

    const oscillatorType = synthOscillatorTypeMap.get((synthOffset8dW & 0x0380) >> 7);
    let oscillator1WaveForm = "";
    switch (oscillatorType) {
        case "Classic":
            oscillator1WaveForm = synthOscillator1ClassicWaveFormMap.get((synthOffset8eW & 0x01c0) >> 6);
            break;
        case "Wave":
            oscillator1WaveForm = synthOscillator1WaveWaveFormMap.get((synthOffset8eW & 0x0fc0) >> 6);
            break;
        case "Formant":
            oscillator1WaveForm = synthOscillator1FormantWaveFormMap.get((synthOffset8eW & 0x03c0) >> 6);
            break;
        case "Super":
            oscillator1WaveForm = synthOscillator1SuperWaveFormMap.get((synthOffset8eW & 0x01c0) >> 6);
            break;
        case "Sample":
            oscillator1WaveForm = "Sample " + (((synthOffset8eW & 0x7fc0) >> 6) + 1);
            break;
    }

    const oscConfig = synthOscillatorsTypeMap.get((synthOffset8f & 0x1e) >> 1);
    const oscCtrlMidi = (synthOffset90W & 0x07f0) >> 4;

    let oscCtrl = "";
    switch (oscConfig) {
        case '1 Pitch':
            oscCtrl = midi2LinearValue(0, 24, oscCtrlMidi, 1, "");
            break;
        case '2 Shape':
            oscCtrl = midi2LinearValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case '3 Sync':
            oscCtrl = midi2LinearValue(0, 10, oscCtrlMidi, 1, "");
            break;
        case '4 Detune':
            oscCtrl = midi2LinearValue(0, 4, oscCtrlMidi, 2, "");
            break;
        case '5 MixSin':
            oscCtrl = midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '6 MixTri':
            oscCtrl = midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '7 MixSaw':
            oscCtrl = midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '8 MixSqr':
            oscCtrl = midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '9 MixBell':
            oscCtrl = midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '10 MixNs1':
            oscCtrl = midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '11 MixNs2':
            oscCtrl = midi2LinearValueAndComplement(oscCtrlMidi);
            break;
        case '12 FM1':
            oscCtrl = midi2LinearValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case '13 FM2':
            oscCtrl = midi2LinearValue(0, 100, oscCtrlMidi, 0, "%");
            break;
        case '14 RM':
            oscCtrl = midi2LinearValue(0, 100, oscCtrlMidi, 0, "%");
            break;
    }


    const lfoRate = synthOffset87 & 0x7f;

    const envModAttack = (synthOffset8bW & 0xfe00) >> 9;
    const envModDecay = (synthOffset8bW & 0x01fc) >> 2;
    const envModRelease = (synthOffset8cW & 0x03f8) >> 3;

    const envAmpAttack = (synthOffsetA5W & 0x03f8) >> 3;
    const envAmpDecay = (synthOffsetA6W & 0x07f0) >> 4;
    const envAmpRelease = (synthOffsetA7W & 0x0fe0) >> 5;

    const synth = {
        enabled: ((synthOffset52W & 0x8000) !== 0),
        volume: getVolume((synthOffset52W & 0x7F0) >> 4),

        octaveShift: synthOctaveShiftMap.get(synthOffset56 & 0x03),
        pitchStick: ((synthOffset57 & 0x80) !== 0),
        pitchStickRange: synthPitchShiftRangeMap.get((synthOffset3b & 0xf0) >> 4),
        sustainPedal: ((synthOffset57 & 0x40) !== 0),
        keyboardHold: ((synthOffset80 & 0x80) !== 0),

        oscillators: {
            type: oscillatorType,
            waveForm1: oscillator1WaveForm,
            config: oscConfig,
            control: {
                midi: oscCtrlMidi,
                label: oscCtrl,
            },
            pitch: {
                midi: '',
                label: '',
            },
            lfoModAmount: {
                midi: '',
                label: '',
            },
            fastAttack: ((synthOffsetAc & 0x04) !== 0),
        },

        envelopes: {
          modulation: {
              attack: {
                  midi: envModAttack,
                  label: synthEnvAttackMap.get(envModAttack),
              },
              decay: {
                  midi: envModDecay,
                  label: synthEnvDecayOrReleaseLabel(envModDecay, "mod.decay"),
              },
              release: {
                  midi: envModRelease,
                  label: synthEnvDecayOrReleaseLabel(envModRelease, "mod.release"),
              },
              velocity: ((synthOffset8dW & 0x0400) !== 0),
          },
          amplifier: {
              attack: {
                  midi: envAmpAttack,
                  label: synthEnvAttackMap.get(envAmpAttack),
              },
              decay: {
                  midi: envAmpDecay,
                  label: synthEnvDecayOrReleaseLabel(envAmpDecay, "amp.decay"),
              },
              release: {
                  midi: envAmpRelease,
                  label: synthEnvDecayOrReleaseLabel(envAmpRelease, "amp.release"),
              },
              velocity: synthAmpEnvelopeVelocityMap.get((synthOffsetA8 & 0x18) >> 3),
          }
        },
        lfo: {
            wave: synthLfoWaveMap.get(synthOffset86 & 0x07),
            rate: {
                midi: lfoRate,
                label: synthLfoRateMap.get(lfoRate),
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



