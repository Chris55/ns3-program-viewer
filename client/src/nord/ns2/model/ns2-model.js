exports.ns2Model = {
    name: "Enjoy_Sil_Intro",
    filename: "Enjoy_Sil_Intro.ns2p",
    ext: "ns2p",
    description: "Nord Stage 2 Program",
    id: {
        bank: 3,
        location: 85,
        name: "D:18:1",
        value: 160,
    },
    category: "Synth",
    version: {
        majorVersion: 7,
        minorVersion: 0,
        value: "7",
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
            note: "F3",
        },
        high: {
            note: "--",
        },
    },
    dualKeyboard: {
        enabled: false,
    },
    compressor: {
        enabled: true,
        amount: {
            midi: 103,
            value: "8.1",
        },
    },
    reverb: {
        enabled: true,
        type: {
            value: "Hall 1",
        },
        amount: {
            midi: 92,
            value: "7.2",
        },
    },
    slotA: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
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
                value: -2,
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
                value: "B3",
            },
            preset1: {
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
                    mode: {
                        value: "C3",
                        label: "Chorus",
                    },
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: true,
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
                    value: "88 8050 000",
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
                    enabled: false,
                },
            },
        },
        piano: {
            debug: {
                sampleId: "d1accddd",
                lib: {
                    valid: true,
                    value: "DX7 FullTines Lrg",
                    info: "",
                    version: "v5.4",
                    size: "11.8 MB",
                    location: 0,
                    filename: "DX7 FullTines  Lrg 5.4",
                },
            },
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
            },
            volume: {
                midi: 43,
                value: "-18.8 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 43,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 43,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 43,
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
                value: "E Piano 2",
            },
            name: {
                valid: true,
                value: "DX7 FullTines Lrg",
                info: "",
                version: "v5.4",
                size: "11.8 MB",
                location: 0,
                filename: "DX7 FullTines  Lrg 5.4",
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
                sampleId: "521b950a",
                lib: {
                    valid: false,
                    value: "Unknown",
                    info: "",
                    version: "",
                    size: "",
                    location: 0,
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
                array: [true, false, false],
                value: "LO",
            },
            volume: {
                midi: 69,
                value: "-10.6 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 69,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 69,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 69,
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
                enabled: false,
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
                    value: "SAMPLE",
                },
                waveForm1: {
                    valid: false,
                    value: "Unknown",
                    info: "",
                    version: "",
                    size: "",
                    location: 0,
                    filename: "",
                },
                shapeCtrl: {
                    midi: 0,
                    value: "0.0",
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
                shapeMod: {
                    midi: 77,
                    value: "1.9",
                    label: "Mod Env AMT",
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
                    midi: 111,
                    value: "8.7 kHz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 111,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 111,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 111,
                                value: "none",
                            },
                        },
                    },
                },
                resonance: {
                    midi: 0,
                    value: "0.0",
                },
                modulation1: {
                    midi: 0,
                    value: "0.0",
                },
                modulation2: {
                    midi: 77,
                    value: "1.9",
                    label: "Mod Env AMT",
                },
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 45,
                        value: "368 ms",
                    },
                    release: {
                        midi: 23,
                        value: "50 ms",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
                amplifier: {
                    attack: {
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 75,
                        value: "3.03 s",
                    },
                    release: {
                        midi: 67,
                        value: "1.82 s",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
            },
            lfo: {
                wave: {
                    value: "TRI",
                },
                rate: {
                    midi: 70,
                    value: "6.5 Hz",
                },
                masterClock: {
                    enabled: false,
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
                    value: "4.6",
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
            effect1: {
                enabled: false,
                source: {
                    value: "Synth",
                },
                type: {
                    value: "Panning",
                },
                amount: {
                    midi: 37,
                    value: "2.9",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 37,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 37,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 37,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 32,
                    value: "2.5",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 32,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 32,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 32,
                                value: "none",
                            },
                        },
                    },
                },
                masterClock: {
                    enabled: false,
                },
            },
            effect2: {
                enabled: true,
                source: {
                    value: "Synth",
                },
                type: {
                    value: "Chorus 1",
                },
                amount: {
                    midi: 23,
                    value: "1.8",
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
                rate: {
                    midi: 70,
                    value: "5.5",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 70,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 70,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 70,
                                value: "none",
                            },
                        },
                    },
                },
                masterClock: {
                    enabled: false,
                },
            },
            delay: {
                enabled: false,
                source: {
                    value: "Synth",
                },
                masterClock: {
                    enabled: false,
                },
                tempo: {
                    midi: 52,
                    lsw: 0,
                    value: "288 ms 104 bpm (x2)",
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
                pingPong: {
                    enabled: false,
                },
                feedback: {
                    midi: 10,
                    value: "0.8",
                },
                amount: {
                    midi: 41,
                    value: "3.2",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 41,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 41,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 41,
                                value: "none",
                            },
                        },
                    },
                },
            },
            ampSimEq: {
                enabled: true,
                source: {
                    value: "Piano",
                },
                ampType: {
                    value: "Off",
                },
                treble: {
                    midi: 42,
                    value: "-5.2 dB",
                },
                mid: {
                    midi: 64,
                    value: "+0.0 dB",
                },
                bass: {
                    midi: 116,
                    value: "+12.4 dB",
                },
                midFilterFreq: {
                    midi: 34,
                    value: "470 Hz",
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
                midi: 18,
                value: "-33.9 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 18,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 18,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 18,
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
                value: "B3",
            },
            preset1: {
                enabled: true,
                drawbars: {
                    value: "88 8030 000",
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
                        value: "C3",
                        label: "Chorus",
                    },
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: true,
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
                sampleId: "d1accddd",
                lib: {
                    valid: true,
                    value: "DX7 FullTines Lrg",
                    info: "",
                    version: "v5.4",
                    size: "11.8 MB",
                    location: 0,
                    filename: "DX7 FullTines  Lrg 5.4",
                },
            },
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
            },
            volume: {
                midi: 51,
                value: "-15.8 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 51,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 51,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 51,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: -1,
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
                value: "E Piano 2",
            },
            name: {
                valid: true,
                value: "DX7 FullTines Lrg",
                info: "",
                version: "v5.4",
                size: "11.8 MB",
                location: 0,
                filename: "DX7 FullTines  Lrg 5.4",
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
                value: "Off",
            },
        },
        synth: {
            debug: {
                sampleId: "5abe6159",
                lib: {
                    valid: true,
                    value: "Choir Aahs",
                    info: "ste v2 BR",
                    version: "v2.0",
                    size: "4.3 MB",
                    location: 269,
                    filename: "Choir Aahs_ste v2 BR",
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
                array: [false, true, false],
                value: "UP",
            },
            volume: {
                midi: 71,
                value: "-10.1 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 71,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 71,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 71,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: -1,
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
                enabled: true,
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
                value: "Off",
            },
            oscillators: {
                type: {
                    value: "SAMPLE",
                },
                waveForm1: {
                    valid: true,
                    value: "Choir Aahs",
                    info: "ste v2 BR",
                    version: "v2.0",
                    size: "4.3 MB",
                    location: 269,
                    filename: "Choir Aahs_ste v2 BR",
                },
                shapeCtrl: {
                    midi: 0,
                    value: "0.0",
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
                shapeMod: {
                    midi: 64,
                    value: "0.0",
                    label: "LFO/Env AMT",
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
                    enabled: false,
                },
                frequency: {
                    midi: 127,
                    value: "21 kHz",
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
                resonance: {
                    midi: 0,
                    value: "0.0",
                },
                modulation1: {
                    midi: 0,
                    value: "0.0",
                },
                modulation2: {
                    midi: 77,
                    value: "1.9",
                    label: "Mod Env AMT",
                },
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 45,
                        value: "368 ms",
                    },
                    release: {
                        midi: 23,
                        value: "50 ms",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
                amplifier: {
                    attack: {
                        midi: 2,
                        value: "0.7 ms",
                    },
                    decay: {
                        midi: 117,
                        value: "29 s",
                    },
                    release: {
                        midi: 63,
                        value: "1.39 s",
                    },
                    velocity: {
                        enabled: true,
                    },
                },
            },
            lfo: {
                wave: {
                    value: "TRI",
                },
                rate: {
                    midi: 70,
                    value: "6.5 Hz",
                },
                masterClock: {
                    enabled: false,
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
                    value: "4.6",
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
            effect1: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                type: {
                    value: "Auto-Wah 1",
                },
                amount: {
                    midi: 12,
                    value: "0.9",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 12,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 12,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 12,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 104,
                    value: "8.2",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 104,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 104,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 104,
                                value: "none",
                            },
                        },
                    },
                },
                masterClock: {
                    enabled: false,
                },
            },
            effect2: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                type: {
                    value: "Chorus 1",
                },
                amount: {
                    midi: 111,
                    value: "8.7",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 111,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 111,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 111,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 27,
                    value: "2.1",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 27,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 27,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 27,
                                value: "none",
                            },
                        },
                    },
                },
                masterClock: {
                    enabled: false,
                },
            },
            delay: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                masterClock: {
                    enabled: false,
                },
                tempo: {
                    midi: 56,
                    lsw: 0,
                    value: "268 ms 112 bpm (x2)",
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
                                midi: 31,
                                value: "none",
                            },
                        },
                    },
                },
                pingPong: {
                    enabled: false,
                },
                feedback: {
                    midi: 54,
                    value: "4.3",
                },
                amount: {
                    midi: 26,
                    value: "2.0",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 26,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 26,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 26,
                                value: "none",
                            },
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
                    midi: 35,
                    value: "-6.8 dB",
                },
                mid: {
                    midi: 40,
                    value: "-5.6 dB",
                },
                bass: {
                    midi: 63,
                    value: "-0.2 dB",
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
};
