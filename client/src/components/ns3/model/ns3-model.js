exports.ns3Model = {
    name: "Wind-up Machine 304",
    filename: "Wind-up Machine 304.ns3f",
    ext: "ns3f",
    description: "Nord Stage 3 Program",
    id: {
        bank: 15,
        location: 3,
        name: "P:14",
        value: 378,
    },
    version: {
        majorVersion: 3,
        minorVersion: 4,
        version: 304,
        value: "3.04",
    },
    masterClock: {
        rate: {
            value: "240 bpm",
        },
    },
    transpose: {
        enabled: false,
        value: "",
    },
    split: {
        enabled: false,
        low: {
            width: "Off",
            note: "--",
        },
        mid: {
            width: "Off",
            note: "--",
        },
        high: {
            width: "Off",
            note: "--",
        },
    },
    dualKeyboard: {
        enabled: false,
        value: "Organ",
    },
    category: "Upright",
    panelA: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
            },
            volume: {
                midi: 94,
                value: "-5.2 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 94,
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
            type: {
                value: "Pipe1",
            },
            preset1: {
                enabled: true,
                drawbars: {
                    value: "008000000",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: false,
                    mode: {
                        value: "C1",
                        label: "Chorus",
                    },
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: false,
                    },
                    decayFast: {
                        enabled: false,
                    },
                    harmonicThird: {
                        enabled: false,
                    },
                },
            },
            preset2: {
                enabled: false,
                drawbars: {
                    value: "888888888",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: false,
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: false,
                    },
                    decayFast: {
                        enabled: false,
                    },
                    harmonicThird: {
                        enabled: false,
                    },
                },
            },
            live: {
                enabled: false,
            },
        },
        piano: {
            debug: {
                sampleVariation: 0,
                sampleId: "354a2c60",
                lib: {
                    valid: true,
                    value: "HonkyTonkUpright Lrg",
                    info: "",
                    version: "v5.3",
                    size: "58.0 MB",
                    location: 4,
                    filename: "HonkyTonkUpright      Lrg 5.3",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: "0000",
            },
            volume: {
                midi: 55,
                value: "-14.5 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 55,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 55,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 55,
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
            type: {
                value: "Upright",
            },
            model: {
                value: 4,
            },
            name: {
                valid: true,
                value: "HonkyTonkUpright Lrg",
                info: "",
                version: "v5.3",
                size: "58.0 MB",
                location: 4,
                filename: "HonkyTonkUpright      Lrg 5.3",
            },
            timbre: {
                value: "None",
            },
            kbTouch: {
                value: "Normal",
            },
            layerDetune: {
                value: "Off",
            },
            softRelease: {
                enabled: false,
            },
            pedalNoise: {
                enabled: false,
            },
            stringResonance: {
                enabled: true,
            },
        },
        synth: {
            debug: {
                sampleId: "f1ceff8f",
                lib: {
                    valid: true,
                    value: "Kalimba",
                    info: "KG mono",
                    version: "v3.0",
                    size: "41.3 kB",
                    location: 157,
                    filename: "Kalimba_KG mono 3.0",
                    useConfigAndPitch: false,
                },
                preset: {
                    location: 557,
                    userPreset: false,
                    userPresetLocationValue: 0,
                    userPresetLocationName: "1:01",
                    samplePresetLocationValue: 157,
                    samplePresetLocationName: "158",
                    presetName: "Kalimba",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: "0000",
            },
            volume: {
                midi: 94,
                value: "-5.2 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 94,
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
            pitchStickRange: {
                visible: false,
                value: "±2 semi",
            },
            sustainPedal: {
                enabled: true,
            },
            keyboardHold: {
                enabled: false,
            },
            voice: {
                value: "Poly",
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
            preset: {
                location: 557,
                userPreset: false,
                userPresetLocationValue: 0,
                userPresetLocationName: "1:01",
                samplePresetLocationValue: 157,
                samplePresetLocationName: "158",
                presetName: "Kalimba",
            },
            oscillators: {
                type: {
                    value: "Sample",
                },
                waveForm1: {
                    valid: true,
                    value: "Kalimba",
                    info: "KG mono",
                    version: "v3.0",
                    size: "41.3 kB",
                    location: 157,
                    filename: "Kalimba_KG mono 3.0",
                    useConfigAndPitch: false,
                },
                config: {
                    value: "None",
                },
                control: {
                    midi: 0,
                    value: "",
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
                pitch: {
                    midi: 26,
                    value: "0 semi",
                },
                modulations: {
                    isLfo: false,
                    label: "LFO/Mod Amt",
                    lfoAmount: {
                        midi: 64,
                        value: "0.0",
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
                    modEnvAmount: {
                        midi: 64,
                        value: "0.0",
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
                },
                fastAttack: {
                    enabled: false,
                },
            },
            filter: {
                type: {
                    value: "LP12",
                },
                kbTrack: {
                    value: "Off",
                },
                drive: {
                    value: "Off",
                },
                modulations: {
                    lfoAmount: {
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
                    velAmount: {
                        midi: 0,
                        value: "10.0",
                    },
                    modEnvAmount: {
                        midi: 0,
                        value: "0.0",
                    },
                },
                cutoffFrequency: {
                    midi: 70,
                    value: "784 Hz",
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
                highPassCutoffFrequency: {
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
                resonance: {
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
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 0,
                        value: "3.0 ms",
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
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 85,
                        value: "5.49 s",
                    },
                    release: {
                        midi: 49,
                        value: "505 ms",
                    },
                    velocity: {
                        value: "2",
                    },
                },
            },
            lfo: {
                wave: {
                    value: "Triangle",
                },
                rate: {
                    midi: 64,
                    value: "4.1 Hz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                    },
                },
                masterClock: {
                    enabled: false,
                },
            },
            arpeggiator: {
                enabled: false,
                rate: {
                    midi: 54,
                    value: "120 bpm",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 54,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 54,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 54,
                                value: "none",
                            },
                        },
                    },
                },
                kbSync: {
                    enabled: false,
                },
                masterClock: {
                    enabled: false,
                },
                range: {
                    value: "1 Octave",
                },
                pattern: {
                    value: "Up",
                },
            },
        },
        extern: {
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
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
            control: {
                value: "Volume",
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
                    value: "Piano",
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
            effect1: {
                enabled: true,
                source: {
                    value: "Synth",
                },
                type: {
                    value: "Panning",
                },
                amount: {
                    midi: 46,
                    value: "3.6",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 46,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 46,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 46,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
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
                    value: "Phaser 1",
                },
                amount: {
                    midi: 64,
                    value: "5.0",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 64,
                    value: "5.0",
                },
            },
            delay: {
                enabled: true,
                source: {
                    value: "Piano",
                },
                masterClock: {
                    enabled: false,
                },
                tempo: {
                    midi: 127,
                    lsw: 127,
                    value: "20 ms 750 bpm (1/16)",
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
                pingPong: {
                    enabled: false,
                },
                filter: {
                    value: "Bypass",
                },
                analogMode: {
                    enabled: false,
                },
                feedback: {
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
                mix: {
                    midi: 21,
                    value: "1.7",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 21,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 21,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 21,
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
                    value: "HP24",
                    redOptions: true,
                },
                treble: {
                    midi: 64,
                    value: "0.0 dB",
                },
                midRes: {
                    midi: 0,
                    value: "0.0",
                },
                bassDryWet: {
                    midi: 127,
                    value: "10.0",
                },
                midFilterFreq: {
                    midi: 35,
                    value: "482 Hz",
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
                overdrive: {
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
            },
            compressor: {
                enabled: false,
                amount: {
                    midi: 127,
                    value: "10.0",
                },
                fast: {
                    enabled: false,
                },
            },
            reverb: {
                enabled: true,
                type: {
                    value: "Room 1",
                },
                amount: {
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
                bright: {
                    enabled: true,
                },
            },
        },
    },
    panelB: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
            },
            volume: {
                midi: 94,
                value: "-5.2 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 94,
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
            type: {
                value: "Vox",
            },
            preset1: {
                enabled: true,
                drawbars: {
                    value: "844400804",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: false,
                    mode: {
                        value: "C1",
                        label: "Chorus",
                    },
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: false,
                    },
                    decayFast: {
                        enabled: false,
                    },
                    harmonicThird: {
                        enabled: false,
                    },
                },
            },
            preset2: {
                enabled: false,
                drawbars: {
                    value: "888888808",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                value: "---------",
                            },
                        },
                    },
                },
                vibrato: {
                    enabled: false,
                },
                percussion: {
                    enabled: false,
                    volumeSoft: {
                        enabled: false,
                    },
                    decayFast: {
                        enabled: false,
                    },
                    harmonicThird: {
                        enabled: false,
                    },
                },
            },
            live: {
                enabled: false,
            },
        },
        piano: {
            debug: {
                sampleVariation: 0,
                sampleId: "f65e34f0",
                lib: {
                    valid: true,
                    value: "Silver EP Sml",
                    info: "",
                    version: "v5.2",
                    size: "24.2 MB",
                    location: 3,
                    filename: "Silver EP  Sml 5.2",
                },
            },
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
            },
            volume: {
                midi: 94,
                value: "-5.2 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 94,
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
            type: {
                value: "Misc",
            },
            model: {
                value: 3,
            },
            name: {
                valid: true,
                value: "Silver EP Sml",
                info: "",
                version: "v5.2",
                size: "24.2 MB",
                location: 3,
                filename: "Silver EP  Sml 5.2",
            },
            timbre: {
                value: "None",
            },
            kbTouch: {
                value: "Normal",
            },
            layerDetune: {
                value: "Off",
            },
            softRelease: {
                enabled: false,
            },
            pedalNoise: {
                enabled: false,
            },
            stringResonance: {
                enabled: false,
            },
        },
        synth: {
            debug: {
                sampleId: "6bf3234",
                lib: {
                    valid: true,
                    value: "Mbira",
                    info: "PS",
                    version: "v3.0",
                    size: "699.1 kB",
                    location: 158,
                    filename: "Mbira_PS 3.0",
                    useConfigAndPitch: false,
                },
                preset: {
                    location: 558,
                    userPreset: false,
                    userPresetLocationValue: 0,
                    userPresetLocationName: "1:01",
                    samplePresetLocationValue: 158,
                    samplePresetLocationName: "159",
                    presetName: "Mbira",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: "0000",
            },
            volume: {
                midi: 94,
                value: "-5.2 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 94,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 94,
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
            pitchStickRange: {
                visible: false,
                value: "±2 semi",
            },
            sustainPedal: {
                enabled: true,
            },
            keyboardHold: {
                enabled: false,
            },
            voice: {
                value: "Poly",
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
            preset: {
                location: 558,
                userPreset: false,
                userPresetLocationValue: 0,
                userPresetLocationName: "1:01",
                samplePresetLocationValue: 158,
                samplePresetLocationName: "159",
                presetName: "Mbira",
            },
            oscillators: {
                type: {
                    value: "Sample",
                },
                waveForm1: {
                    valid: true,
                    value: "Mbira",
                    info: "PS",
                    version: "v3.0",
                    size: "699.1 kB",
                    location: 158,
                    filename: "Mbira_PS 3.0",
                    useConfigAndPitch: false,
                },
                config: {
                    value: "None",
                },
                control: {
                    midi: 0,
                    value: "",
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
                pitch: {
                    midi: 26,
                    value: "0 semi",
                },
                modulations: {
                    isLfo: false,
                    label: "LFO/Mod Amt",
                    lfoAmount: {
                        midi: 64,
                        value: "0.0",
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
                    modEnvAmount: {
                        midi: 64,
                        value: "0.0",
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
                },
                fastAttack: {
                    enabled: false,
                },
            },
            filter: {
                type: {
                    value: "LP12",
                },
                kbTrack: {
                    value: "Off",
                },
                drive: {
                    value: "Off",
                },
                modulations: {
                    lfoAmount: {
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
                    velAmount: {
                        midi: 0,
                        value: "10.0",
                    },
                    modEnvAmount: {
                        midi: 0,
                        value: "0.0",
                    },
                },
                cutoffFrequency: {
                    midi: 63,
                    value: "523 Hz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 63,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 63,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 63,
                                value: "none",
                            },
                        },
                    },
                },
                highPassCutoffFrequency: {
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
                resonance: {
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
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 0,
                        value: "3.0 ms",
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
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 83,
                        value: "4.89 s",
                    },
                    release: {
                        midi: 32,
                        value: "120 ms",
                    },
                    velocity: {
                        value: "2",
                    },
                },
            },
            lfo: {
                wave: {
                    value: "Triangle",
                },
                rate: {
                    midi: 64,
                    value: "4.1 Hz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                    },
                },
                masterClock: {
                    enabled: false,
                },
            },
            arpeggiator: {
                enabled: false,
                rate: {
                    midi: 54,
                    value: "120 bpm",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 54,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 54,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 54,
                                value: "none",
                            },
                        },
                    },
                },
                kbSync: {
                    enabled: false,
                },
                masterClock: {
                    enabled: false,
                },
                range: {
                    value: "1 Octave",
                },
                pattern: {
                    value: "Up",
                },
            },
        },
        extern: {
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
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
            control: {
                value: "Volume",
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
                    value: "Piano",
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
            effect1: {
                enabled: true,
                source: {
                    value: "Synth",
                },
                type: {
                    value: "Panning",
                },
                amount: {
                    midi: 78,
                    value: "6.1",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 78,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 78,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 78,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
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
                    value: "Phaser 1",
                },
                amount: {
                    midi: 64,
                    value: "5.0",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 64,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 64,
                    value: "5.0",
                },
            },
            delay: {
                enabled: true,
                source: {
                    value: "Synth",
                },
                masterClock: {
                    enabled: false,
                },
                tempo: {
                    midi: 127,
                    lsw: 127,
                    value: "20 ms 750 bpm (1/16)",
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
                pingPong: {
                    enabled: true,
                },
                filter: {
                    value: "Bypass",
                },
                analogMode: {
                    enabled: false,
                },
                feedback: {
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
                mix: {
                    midi: 19,
                    value: "1.5",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 19,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 19,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 19,
                                value: "none",
                            },
                        },
                    },
                },
            },
            ampSimEq: {
                enabled: true,
                source: {
                    value: "Synth",
                },
                ampType: {
                    value: "Off",
                    redOptions: false,
                },
                treble: {
                    midi: 64,
                    value: "0.0 dB",
                },
                midRes: {
                    midi: 64,
                    value: "0.0 dB",
                },
                bassDryWet: {
                    midi: 64,
                    value: "0.0 dB",
                },
                midFilterFreq: {
                    midi: 58,
                    value: "859 Hz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 58,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 58,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 58,
                                value: "none",
                            },
                        },
                    },
                },
                overdrive: {
                    midi: 40,
                    value: "3.1",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 40,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 40,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 40,
                                value: "none",
                            },
                        },
                    },
                },
            },
            compressor: {
                enabled: false,
                amount: {
                    midi: 0,
                    value: "0.0",
                },
                fast: {
                    enabled: false,
                },
            },
            reverb: {
                enabled: true,
                type: {
                    value: "Room 1",
                },
                amount: {
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
                bright: {
                    enabled: true,
                },
            },
        },
    },
};
