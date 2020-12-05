exports.ns2Model = {
    name: "2_Extern_On",
    filename: "2_Extern_On.ns2p",
    ext: "ns2p",
    description: "Nord Stage 2 Program",
    id: {
        bank: 0,
        location: 84,
        name: "A:17:5",
        value: 84,
    },
    version: 7,
    category: "Fantasy",
    slotA: {
        enabled: true,
        organ: {
            enabled: true,
            kbZone: {
                array: [true, false, false],
                value: "LO",
            },
            volume: {
                midi: 127,
                value: "0.0 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 0,
            },
            pitchStick: {
                enabled: true,
            },
            sustainPedal: {
                enabled: false,
            },
            latchPedal: {
                enabled: false,
            },
            kbGate: {
                enabled: false,
            },
            type: {
                value: "B3",
            },
            preset1: {
                enabled: false,
                drawbars: {
                    value: "80 0000 000",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: false,
                    mode: {
                        value: "V1",
                        label: "Vibrato",
                    },
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: false,
                    },
                    decayFast: {
                        enabled: true,
                    },
                    harmonicThird: {
                        enabled: true,
                    },
                },
            },
            preset2: {
                enabled: true,
                drawbars: {
                    value: "00 0000 000",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: true,
                },
                percussion: {
                    enabled: true,
                },
            },
        },
        piano: {
            debug: {
                sampleId: "7dc7d01e",
                lib: {
                    valid: true,
                    value: "Italian Grand XL",
                    info: "Faz",
                    version: "v5.3",
                    size: "191.0 MB",
                    location: 0,
                    filename: "Italian Grand Faz XL 5.3",
                },
            },
            enabled: true,
            kbZone: {
                array: [false, false, true],
                value: "HI",
            },
            volume: {
                midi: 127,
                value: "0.0 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: -7,
            },
            pitchStick: {
                enabled: true,
            },
            sustainPedal: {
                enabled: true,
            },
            latchPedal: {
                enabled: true,
            },
            kbGate: {
                enabled: true,
            },
            type: {
                value: "Grand",
            },
            name: {
                valid: true,
                value: "Italian Grand XL",
                info: "Faz",
                version: "v5.3",
                size: "191.0 MB",
                location: 0,
                filename: "Italian Grand Faz XL 5.3",
            },
            slotDetune: {
                value: "Off",
            },
            longRelease: {
                enabled: true,
            },
            stringResonance: {
                enabled: true,
            },
            pedalNoise: {
                enabled: true,
            },
            dynamics: {
                value: "0",
            },
            clavinetModel: {
                enabled: false,
                value: "A",
            },
            clavinetEqHi: {
                enabled: false,
                value: "Off",
            },
            clavinetEq: {
                enabled: false,
                value: "Soft+Medium",
            },
        },
        synth: {
            debug: {
                sampleId: "0",
                lib: {
                    valid: true,
                    value: "PULSE ShP",
                    info: "",
                    version: "",
                    location: 1,
                    filename: "",
                },
                preset: {
                    location: 512,
                    userPreset: false,
                    userPresetLocationValue: 0,
                    userPresetLocationName: "1:01",
                    samplePresetLocationValue: 112,
                    samplePresetLocationName: "113",
                    presetName: "",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true],
                value: "LO UP HI",
            },
            volume: {
                midi: 0,
                value: "Off",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 0,
            },
            pitchStick: {
                enabled: true,
            },
            sustainPedal: {
                enabled: true,
            },
            latchPedal: {
                enabled: false,
            },
            kbGate: {
                enabled: false,
            },
            keyboardHold: {
                enabled: false,
            },
            voice: {
                value: "Off",
            },
            glide: {
                value: "0.0",
            },
            unison: {
                value: "1",
            },
            vibrato: {
                value: "Off",
            },
            oscillators: {
                type: {
                    value: "PULSE",
                },
                waveForm1: {
                    valid: true,
                    value: "PULSE ShP",
                    info: "",
                    version: "",
                    location: 1,
                    filename: "",
                },
                shapeCtrl: {
                    midi: 35,
                    value: "2.8",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 35,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 35,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 35,
                                value: "none",
                            },
                        },
                    },
                },
                shapeMod: {
                    midi: 24,
                    value: "6.1",
                    label: "LFO AMT",
                },
                skipSampleAttack: {
                    enabled: false,
                },
            },
            filter: {
                type: {
                    value: "LP24",
                },
                kbTrack: {
                    enabled: true,
                },
                frequency: {
                    midi: 23,
                    value: "70 Hz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 23,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 23,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 23,
                                value: "none",
                            },
                        },
                    },
                },
                resonance: {
                    midi: 14,
                    value: "1.1",
                },
                modulation1: {
                    midi: 0,
                    value: "0.0",
                },
                modulation2: {
                    midi: 97,
                    value: "5.1",
                    label: "Mod Env AMT",
                },
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 5,
                        value: "1.3 ms",
                    },
                    decay: {
                        midi: 41,
                        value: "265 ms",
                    },
                    release: {
                        midi: 0,
                        value: "3.0 ms",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
                amplifier: {
                    attack: {
                        midi: 5,
                        value: "1.3 ms",
                    },
                    decay: {
                        midi: 60,
                        value: "1.13 s",
                    },
                    release: {
                        midi: 30,
                        value: "100 ms",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
            },
            lfo: {
                wave: {
                    value: "SAW",
                },
                rate: {
                    midi: 59,
                    value: "2.8 Hz",
                },
                masterClock: {
                    enabled: false,
                },
            },
            arpeggiator: {
                enabled: true,
                rate: {
                    midi: 6,
                    value: "1/16",
                },
                masterClock: {
                    enabled: true,
                },
                range: {
                    value: "3 Octaves",
                },
                pattern: {
                    value: "UP/DN",
                },
            },
        },
        extern: {
            enabled: true,
            kbZone: {
                array: [true, true, true],
                value: "LO UP HI",
            },
            octaveShift: {
                value: 0,
            },
            pitchStick: {
                enabled: true,
            },
            sustainPedal: {
                enabled: true,
            },
            control: {
                value: "Midi CC",
            },
            midiCc: {
                midi: 0,
                value: "0",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                },
            },
            program: {
                midi: 0,
                value: "1",
            },
            volume: {
                midi: 0,
                value: "0",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                },
            },
        },
        effects: {
            rotarySpeaker: {
                enabled: false,
                source: {
                    value: "Organ",
                },
                drive: {
                    value: "0.0",
                },
                stopMode: {
                    enabled: false,
                },
                speed: {
                    value: "Slow/Stop",
                    morph: {
                        wheel: {
                            enabled: false,
                        },
                        afterTouch: {
                            enabled: false,
                        },
                        controlPedal: {
                            enabled: false,
                        },
                    },
                },
            },
            ampSimEq: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                ampType: {
                    value: "Off",
                },
                treble: {
                    midi: 64,
                    value: "+0.0 dB",
                },
                mid: {
                    midi: 64,
                    value: "+0.0 dB",
                },
                bass: {
                    midi: 64,
                    value: "+0.0 dB",
                },
                midFilterFreq: {
                    midi: 64,
                    value: "999 Hz",
                },
                overdrive: {
                    midi: 0,
                    value: "0.0",
                },
            },
        },
    },
    slotB: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
            },
            volume: {
                midi: 107,
                value: "-3.0 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 107,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 107,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 107,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 0,
            },
            pitchStick: {
                enabled: true,
            },
            sustainPedal: {
                enabled: false,
            },
            latchPedal: {
                enabled: false,
            },
            kbGate: {
                enabled: false,
            },
            type: {
                value: "B3",
            },
            preset1: {
                enabled: true,
                drawbars: {
                    value: "88 8000 000",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: false,
                    mode: {
                        value: "V1",
                        label: "Vibrato",
                    },
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: false,
                    },
                    decayFast: {
                        enabled: true,
                    },
                    harmonicThird: {
                        enabled: true,
                    },
                },
            },
            preset2: {
                enabled: false,
                drawbars: {
                    value: "88 8000 000",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "-- ---- ---",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: false,
                },
                percussion: {
                    enabled: false,
                },
            },
        },
        piano: {
            debug: {
                sampleId: "7dc7d01e",
                lib: {
                    valid: true,
                    value: "Italian Grand XL",
                    info: "Faz",
                    version: "v5.3",
                    size: "191.0 MB",
                    location: 0,
                    filename: "Italian Grand Faz XL 5.3",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true],
                value: "LO UP HI",
            },
            volume: {
                midi: 127,
                value: "0.0 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 127,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 0,
            },
            pitchStick: {
                enabled: false,
            },
            sustainPedal: {
                enabled: true,
            },
            latchPedal: {
                enabled: false,
            },
            kbGate: {
                enabled: false,
            },
            type: {
                value: "Grand",
            },
            name: {
                valid: true,
                value: "Italian Grand XL",
                info: "Faz",
                version: "v5.3",
                size: "191.0 MB",
                location: 0,
                filename: "Italian Grand Faz XL 5.3",
            },
            slotDetune: {
                value: "Off",
            },
            longRelease: {
                enabled: false,
            },
            stringResonance: {
                enabled: false,
            },
            pedalNoise: {
                enabled: false,
            },
            dynamics: {
                value: "1",
            },
            clavinetModel: {
                enabled: false,
                value: "A",
            },
            clavinetEqHi: {
                enabled: false,
                value: "Off",
            },
            clavinetEq: {
                enabled: false,
                value: "Off",
            },
        },
        synth: {
            debug: {
                sampleId: "0",
                lib: {
                    valid: true,
                    value: "TRI ShP",
                    info: "",
                    version: "",
                    location: 1,
                    filename: "",
                },
                preset: {
                    location: 512,
                    userPreset: false,
                    userPresetLocationValue: 0,
                    userPresetLocationName: "1:01",
                    samplePresetLocationValue: 112,
                    samplePresetLocationName: "113",
                    presetName: "\u0001",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true],
                value: "LO UP HI",
            },
            volume: {
                midi: 75,
                value: "-9.1 dB",
                morph: {
                    wheel: {
                        enabled: true,
                        to: {
                            midi: 62,
                            value: "-12.5 dB",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 75,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 75,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 0,
            },
            pitchStick: {
                enabled: true,
            },
            sustainPedal: {
                enabled: true,
            },
            latchPedal: {
                enabled: false,
            },
            kbGate: {
                enabled: false,
            },
            keyboardHold: {
                enabled: false,
            },
            voice: {
                value: "Off",
            },
            glide: {
                value: "0.0",
            },
            unison: {
                value: "Off",
            },
            vibrato: {
                value: "Delay 2",
            },
            oscillators: {
                type: {
                    value: "TRI",
                },
                waveForm1: {
                    valid: true,
                    value: "TRI ShP",
                    info: "",
                    version: "",
                    location: 1,
                    filename: "",
                },
                shapeCtrl: {
                    midi: 39,
                    value: "3.1",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 39,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 39,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 39,
                                value: "none",
                            },
                        },
                    },
                },
                shapeMod: {
                    midi: 9,
                    value: "8.5",
                    label: "LFO AMT",
                },
                skipSampleAttack: {
                    enabled: false,
                },
            },
            filter: {
                type: {
                    value: "LP12",
                },
                kbTrack: {
                    enabled: false,
                },
                frequency: {
                    midi: 50,
                    value: "309 Hz",
                    morph: {
                        wheel: {
                            enabled: true,
                            to: {
                                midi: 57,
                                value: "454 Hz",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 50,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 50,
                                value: "none",
                            },
                        },
                    },
                },
                resonance: {
                    midi: 111,
                    value: "8.7",
                },
                modulation1: {
                    midi: 0,
                    value: "0.0",
                },
                modulation2: {
                    midi: 102,
                    value: "5.9",
                    label: "Mod Env AMT",
                },
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 114,
                        value: "24 s",
                    },
                    decay: {
                        midi: 127,
                        value: "45 s",
                    },
                    release: {
                        midi: 99,
                        value: "12 s",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
                amplifier: {
                    attack: {
                        midi: 64,
                        value: "1.02 s",
                    },
                    decay: {
                        midi: 127,
                        value: "45 s",
                    },
                    release: {
                        midi: 83,
                        value: "4.89 s",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
            },
            lfo: {
                wave: {
                    value: "SAW",
                },
                rate: {
                    midi: 6,
                    value: "1/2",
                },
                masterClock: {
                    enabled: true,
                },
            },
            arpeggiator: {
                enabled: false,
                rate: {
                    midi: 0,
                    value: "80 BPM",
                },
                masterClock: {
                    enabled: false,
                },
                range: {
                    value: "1 Octave",
                },
                pattern: {
                    value: "UP",
                },
            },
        },
        extern: {
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
            },
            octaveShift: {
                value: 0,
            },
            pitchStick: {
                enabled: true,
            },
            sustainPedal: {
                enabled: true,
            },
            control: {
                value: "Midi CC",
            },
            midiCc: {
                midi: 0,
                value: "0",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                },
            },
            program: {
                midi: 0,
                value: "1",
            },
            volume: {
                midi: 0,
                value: "0",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 0,
                            value: "none",
                        },
                    },
                },
            },
        },
        effects: {
            rotarySpeaker: {
                enabled: false,
                source: {
                    value: "Organ",
                },
                drive: {
                    value: "0.0",
                },
                stopMode: {
                    enabled: false,
                },
                speed: {
                    value: "Slow/Stop",
                    morph: {
                        wheel: {
                            enabled: false,
                        },
                        afterTouch: {
                            enabled: false,
                        },
                        controlPedal: {
                            enabled: false,
                        },
                    },
                },
            },
            ampSimEq: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                ampType: {
                    value: "Off",
                },
                treble: {
                    midi: 64,
                    value: "+0.0 dB",
                },
                mid: {
                    midi: 64,
                    value: "+0.0 dB",
                },
                bass: {
                    midi: 64,
                    value: "+0.0 dB",
                },
                midFilterFreq: {
                    midi: 64,
                    value: "999 Hz",
                },
                overdrive: {
                    midi: 0,
                    value: "0.0",
                },
            },
        },
    },
    masterClock: {
        rate: {
            value: "120 bpm",
        },
    },
    transpose: {
        enabled: false,
        value: "",
    },
    split: {
        enabled: true,
        low: {
            note: "F2",
        },
        high: {
            note: "C7",
        },
    },
    dualKeyboard: {
        enabled: false,
    },
    compressor: {
        enabled: true,
        amount: {
            midi: 70,
            value: "5.5",
        },
    },
    reverb: {
        enabled: true,
        type: {
            value: "Stage 2",
        },
        amount: {
            midi: 29,
            value: "2.3",
        },
    },
};
