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



const midi2value = function (min, max, value) {
    // midi 0 = min
    // midi 127 = max
    return value * max / 127;
}

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

exports.loadNs3fFile = (buffer) => {

    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const fileExt = buffer.toString("utf8",8, 12);
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
        volume: (pianoFlag1 & 0x7F0) >> 4,
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
    const rotarySpeakerFlag = buffer.readUInt16BE(0x39);
    const rotarySpeakerFlag2 = buffer.readUInt8(0x10b);

    const organ = {
        enabled: ((organOffsetB6 & 0x8000) !== 0),
        volume: (organOffsetB6 & 0x7F0) >> 4,
        type: organTypeMap.get((organOffsetBb & 0x70) >> 4),
        drawbars1: getDrawbars(buffer, 0xbe).join(""),
        drawbars2: getDrawbars(buffer, 0xd9).join(""),
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
        drive: midi2value(0, 10, (rotarySpeakerFlag & 0b0000011111110000) >> 4),
        source: sourceMap.get((rotarySpeakerFlag2 & 0b01100000) >> 5),
        stopMode: !(((organOffset35 & 0x80) >> 7) !== 0),
        speed: rotarySpeakerSpeedMap.get(organFlag34 & 0x01),
    };

    // const organRotarySpeakerSpeed = organFlag34 & 0x01;
    // const organVibratoMode = (organFlag34 & 0b00001110) >> 1;
    // const organPStick = ((organFlag34 & 0x10) !== 0);
    //
    // const organRotarySpeakerStopMode = !(((organOffset35 & 0x80) >> 7) !== 0);
    //
    // const organEnabled = ((organOffsetB6 & 0x8000) !== 0);
    // const organVolume = (organOffsetB6 & 0x7F0) >> 4;
    //
    // const organOctaveShift = (organOffsetBa & 0x07) - 6;
    //
    // const organType = (organOffsetBb & 0x70) >> 4;
    // const organSustainPedal = ((organOffsetBb & 0x80) !== 0);
    // const organLiveEnabled = ((organOffsetBb & 0x08) !== 0);
    //
    // const organPercussionVolumeSoftEnabled = ((organOffsetD3 & 0x01) !== 0);
    // const organPercussionDecayFast = ((organOffsetD3 & 0x02) !== 0);
    // const organPercussionHarmonicThird = ((organOffsetD3 & 0x04) !== 0);
    // const organPercussionEnabled = ((organOffsetD3 & 0x08) !== 0);
    // const organVibratoEnabled = ((organOffsetD3 & 0x10) !== 0);
    //
    // const organDrawbars1 = getDrawbars(buffer, 0xbe);
    // const organDrawbars2 = getDrawbars(buffer, 0xd9);
    //
    //
    // const rotarySpeakerDrive = (rotarySpeakerFlag & 0b0000011111110000) >> 4;
    // const rotarySpeakerEnabled = (rotarySpeakerFlag2 & 0x80) !== 0;
    // const rotarySpeakerSource = (rotarySpeakerFlag2 & 0b01100000) >> 5;

    // console.log("");
    // console.log("Organ:");
    // console.log("Enabled:", organEnabled);
    // console.log("Volume:", organVolume);
    // console.log("Organ Type:", organTypeMap.get(organType));
    // console.log("Pitch Stick Enabled:", organPStick);
    // console.log("Sustain Pedal Enabled:", organSustainPedal);
    // console.log("Octave Shift:", organOctaveShift);
    // console.log("Vibrato/Chorus Enabled:", organVibratoEnabled);
    // console.log("Vibrato/Chorus Mode:", organVibratoModeMap.get(organVibratoMode));
    // console.log("Percussion Enabled:", organPercussionEnabled);
    // console.log("Percussion Volume Soft Enabled:", organPercussionVolumeSoftEnabled);
    // console.log("Percussion Decay Fast Enabled:", organPercussionDecayFast);
    // console.log("Percussion Harmonic Third Enabled:", organPercussionHarmonicThird);
    //
    // console.log("Drawbars Preset I:  " + organDrawbars1);
    // console.log("Drawbars Preset II: " + organDrawbars2);
    // console.log("Live Enabled:", organLiveEnabled);
    //
    // console.log("");
    // console.log("Rotary Speaker:");
    // console.log("Drive: " + midi2value(0, 10, rotarySpeakerDrive));
    // console.log("Enabled:", rotarySpeakerEnabled);
    // console.log("Source:", sourceMap.get(rotarySpeakerSource));
    // console.log("Speed:", rotarySpeakerSpeedMap.get(organRotarySpeakerSpeed));
    // console.log("Stop Mode Enabled:", organRotarySpeakerStopMode);

    const synthOffset52 = buffer.readUInt16BE(0x52);
    const synthOffset8d = buffer.readUInt16BE(0x8d);
    const synthOffset8e = buffer.readUInt16BE(0x8e);

    const oscillatorType = synthOscillatorTypeMap.get((synthOffset8d & 0x0380) >> 7);
    let oscillator1WaveForm = "";
    switch (oscillatorType) {
        case "Classic":
            oscillator1WaveForm = synthOscillator1ClassicWaveFormMap.get((synthOffset8e & 0x01c0) >> 6);
            break;
        case "Wave":
            oscillator1WaveForm = synthOscillator1WaveWaveFormMap.get((synthOffset8e & 0x0fc0) >> 6);
            break;
        case "Formant":
            oscillator1WaveForm = synthOscillator1FormantWaveFormMap.get((synthOffset8e & 0x03c0) >> 6);
            break;
    }

    const synth = {
        enabled: ((synthOffset52 & 0x8000) !== 0),
        volume: (synthOffset52 & 0x7F0) >> 4,

        oscillatorType: oscillatorType,
        oscillator1WaveForm: oscillator1WaveForm,
    };

    // console.log("");
    // console.log("Synth:");
    // console.log("Enabled:", synthEnabled);
    // console.log("Volume:", synthVolume);
    // console.log("Oscillator Type", synthOscillatorTypeMap.get(synthOscillatorType));
    // console.log("Oscillator 1 Type Classic Wave Form:", synthOscillator1ClassicWaveFormMap.get(synthOscillator1ClassicWaveForm));
    // console.log("Oscillator 1 Type Wave Wave Form:", synthOscillator1WaveWaveFormMap.get(synthOscillator1WaveWaveForm));
    // console.log("Oscillator 1 Type Formant Wave Form:", synthOscillator1FormantWaveFormMap.get(synthOscillator1FormantWaveForm));

    return {
        fileId: fileId,
        part1: {
            organ: organ,
            piano: piano,
            synth: synth,
            effect: {
                rotarySpeaker: rotarySpeaker,
                effect1: {

                },
                effect2: {

                },
                delay: {

                },
                ampSimEq: {

                },
                compressor: {

                },
                reverb: {

                }
            }
        }
    };
}



