exports.ns3Model = {
    name: "Eye_Without_Face",
    filename: "Eye_Without_Face.ns3f",
    ext: "ns3f",
    description: "Nord Stage 3 Program",
    id: {
        bank: 2,
        location: 18,
        name: "C:44",
        value: 68,
    },
    version: "3.04",
    category: "User",
    panelA: {
        enabled: true,
        organ: {
            enabled: true,
            kbZone: {
                array: [false, false, false, true],
                value: "---O",
            },
            volume: {
                midi: 109,
                value: "-2.7 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 109,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 109,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 109,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: -3,
            },
            pitchStick: {
                enabled: false,
            },
            sustainPedal: {
                enabled: true,
            },
            type: {
                value: "B3",
            },
            preset1: {
                enabled: true,
                drawbars: {
                    value: "508857423",
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
                    value: "888800000",
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
                    enabled: true,
                },
                percussion: {
                    enabled: true,
                    volumeSoft: {
                        enabled: false,
                    },
                    decayFast: {
                        enabled: true,
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
                sampleId: "51accddc",
                lib: {
                    valid: true,
                    value: "DX7 FullTines Lrg",
                    info: "",
                    version: "v5.4",
                    size: "11.8 MB",
                    location: 1,
                },
            },
            enabled: true,
            kbZone: {
                array: [false, false, true, false],
                value: "--O-",
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
                        enabled: true,
                        to: {
                            midi: 109,
                            value: "-2.7 dB",
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
                value: "Digital",
            },
            model: {
                value: 1,
            },
            name: {
                valid: true,
                value: "DX7 FullTines Lrg",
                info: "",
                version: "v5.4",
                size: "11.8 MB",
                location: 1,
            },
            timbre: {
                value: "None",
            },
            kbTouch: {
                value: "Normal",
            },
            layerDetune: {
                value: "1",
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
                sampleId: "5099530f",
                lib: {
                    valid: true,
                    value: "String Orchestra Leg Vib",
                    info: "SR",
                    version: "v3.0",
                    size: "",
                    location: 18,
                },
            },
            enabled: true,
            kbZone: {
                array: [true, false, false, false],
                value: "O---",
            },
            volume: {
                midi: 109,
                value: "-2.7 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 109,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 109,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 109,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 2,
            },
            pitchStick: {
                enabled: false,
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
                value: "2",
            },
            vibrato: {
                value: "Delay 2",
            },
            oscillators: {
                type: {
                    value: "Sample",
                },
                waveForm1: {
                    valid: true,
                    value: "String Orchestra Leg Vib",
                    info: "SR",
                    version: "v3.0",
                    size: "",
                    location: 18,
                },
                config: {
                    value: "7 MixSaw",
                },
                control: {
                    midi: 16,
                    value: "87/13",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 16,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 16,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 16,
                                value: "none",
                            },
                        },
                    },
                },
                pitch: {
                    midi: 51,
                    value: "12 semi",
                },
                modulations: {
                    lfoAmount: {
                        midi: 50,
                        value: "2.2",
                        morph: {
                            wheel: {
                                enabled: false,
                                to: {
                                    midi: 50,
                                    value: "none",
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
                    modEnvAmount: {
                        midi: 0,
                        value: "0.0",
                        morph: {
                            wheel: {
                                enabled: false,
                                to: {
                                    midi: 50,
                                    value: "none",
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
                        midi: 4,
                        value: "0.3",
                        morph: {
                            wheel: {
                                enabled: false,
                                to: {
                                    midi: 4,
                                    value: "none",
                                },
                            },
                            afterTouch: {
                                enabled: false,
                                to: {
                                    midi: 4,
                                    value: "none",
                                },
                            },
                            controlPedal: {
                                enabled: false,
                                to: {
                                    midi: 4,
                                    value: "none",
                                },
                            },
                        },
                    },
                    velAmount: {
                        midi: 0,
                        value: "0.0",
                    },
                    modEnvAmount: {
                        midi: 72,
                        value: "1.3",
                    },
                },
                cutoffFrequency: {
                    midi: 59,
                    value: "415 Hz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 59,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 59,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 59,
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
                        midi: 35,
                        value: "75 ms",
                    },
                    decay: {
                        midi: 120,
                        value: "33 s",
                    },
                    release: {
                        midi: 83,
                        value: "4.89 s",
                    },
                    velocity: {
                        enabled: false,
                    },
                },
                amplifier: {
                    attack: {
                        midi: 27,
                        value: "31 ms",
                    },
                    decay: {
                        midi: 122,
                        value: "36 s",
                    },
                    release: {
                        midi: 62,
                        value: "1.30 s",
                    },
                    velocity: {
                        value: "Off",
                    },
                },
            },
            lfo: {
                wave: {
                    value: "Triangle",
                },
                rate: {
                    midi: 46,
                    value: "1.0 Hz",
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
            enabled: true,
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
                enabled: false,
            },
            control: {
                value: "Volume",
            },
            midiCc: {
                midi: 0,
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
                midi: 44,
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 44,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 44,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 44,
                            value: "none",
                        },
                    },
                },
            },
            volume: {
                midi: 127,
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
        effects: {
            rotarySpeaker: {
                enabled: true,
                source: {
                    value: "Organ",
                },
                drive: {
                    value: "10.0",
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
                            enabled: true,
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
                    value: "Organ",
                },
                type: {
                    value: "Auto-Wah 1",
                },
                amount: {
                    midi: 115,
                    value: "9.1",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 115,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 115,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 115,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 45,
                    value: "3.5",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 45,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 45,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 45,
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
                    value: "Piano",
                },
                type: {
                    value: "Chorus 2",
                },
                amount: {
                    midi: 76,
                    value: "6.0",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 76,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 76,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 76,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 34,
                    value: "2.7",
                },
            },
            delay: {
                enabled: true,
                source: {
                    value: "Piano",
                },
                masterClock: {
                    enabled: true,
                },
                tempo: {
                    midi: 54,
                    lsw: 0,
                    value: "1/8S",
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
                    midi: 34,
                    value: "2.7",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 34,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 34,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 34,
                                value: "none",
                            },
                        },
                    },
                },
                mix: {
                    midi: 62,
                    value: "4.9",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 62,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 62,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 62,
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
                    value: "Clean",
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
                    midi: 64,
                    value: "999 Hz",
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
                overdrive: {
                    midi: 36,
                    value: "2.8",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 36,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 36,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 36,
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
                    value: "Stage 2",
                },
                amount: {
                    midi: 49,
                    value: "3.9",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 49,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 49,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 49,
                                value: "none",
                            },
                        },
                    },
                },
                bright: {
                    enabled: false,
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
                midi: 98,
                value: "-4.5 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 98,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 98,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 98,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 1,
            },
            pitchStick: {
                enabled: false,
            },
            sustainPedal: {
                enabled: true,
            },
            type: {
                value: "B3",
            },
            preset1: {
                enabled: true,
                drawbars: {
                    value: "853264312",
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
                    enabled: true,
                    mode: {
                        value: "V1",
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
                    value: "887600000",
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
            live: {
                enabled: false,
            },
        },
        piano: {
            debug: {
                sampleVariation: 0,
                sampleId: "e4342576",
                lib: {
                    valid: true,
                    value: "EPiano 1    Mk I",
                    info: "Low Deep",
                    version: "v5.3",
                    size: "6.4 MB",
                    location: 1,
                },
            },
            enabled: true,
            kbZone: {
                array: [false, true, true, false],
                value: "-OO-",
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
                        enabled: true,
                        to: {
                            midi: 127,
                            value: "0.0 dB",
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
                value: "Electric",
            },
            model: {
                value: 1,
            },
            name: {
                valid: true,
                value: "EPiano 1    Mk I",
                info: "Low Deep",
                version: "v5.3",
                size: "6.4 MB",
                location: 1,
            },
            timbre: {
                value: "Soft",
            },
            kbTouch: {
                value: "3",
            },
            layerDetune: {
                value: "1",
            },
            softRelease: {
                enabled: true,
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
                sampleId: "489f58b1",
                lib: {
                    value: "Super Wave Saw 2",
                    info: "",
                    version: "",
                    location: 1,
                },
            },
            enabled: true,
            kbZone: {
                array: [true, false, false, false],
                value: "O---",
            },
            volume: {
                midi: 106,
                value: "-3.1 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 106,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 106,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 106,
                            value: "none",
                        },
                    },
                },
            },
            octaveShift: {
                value: 2,
            },
            pitchStick: {
                enabled: true,
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
            oscillators: {
                type: {
                    value: "Super",
                },
                waveForm1: {
                    value: "Super Wave Saw 2",
                    info: "",
                    version: "",
                    location: 1,
                },
                config: {
                    value: "6 MixTri",
                },
                control: {
                    midi: 45,
                    value: "65/35",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 45,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 45,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 45,
                                value: "none",
                            },
                        },
                    },
                },
                pitch: {
                    midi: 51,
                    value: "12 semi",
                },
                modulations: {
                    lfoAmount: {
                        midi: 64,
                        value: "0.0",
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
                    modEnvAmount: {
                        midi: 64,
                        value: "0.0",
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
                        midi: 1,
                        value: "0.1",
                        morph: {
                            wheel: {
                                enabled: false,
                                to: {
                                    midi: 1,
                                    value: "none",
                                },
                            },
                            afterTouch: {
                                enabled: false,
                                to: {
                                    midi: 1,
                                    value: "none",
                                },
                            },
                            controlPedal: {
                                enabled: false,
                                to: {
                                    midi: 1,
                                    value: "none",
                                },
                            },
                        },
                    },
                    velAmount: {
                        midi: 0,
                        value: "0.0",
                    },
                    modEnvAmount: {
                        midi: 74,
                        value: "1.5",
                    },
                },
                cutoffFrequency: {
                    midi: 76,
                    value: "1.1 kHz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 76,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 76,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 76,
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
                        midi: 37,
                        value: "93 ms",
                    },
                    decay: {
                        midi: 90,
                        value: "7.27 s",
                    },
                    release: {
                        midi: 78,
                        value: "3.64 s",
                    },
                    velocity: {
                        enabled: true,
                    },
                },
                amplifier: {
                    attack: {
                        midi: 56,
                        value: "540 ms",
                    },
                    decay: {
                        midi: 127,
                        value: "Sustain",
                    },
                    release: {
                        midi: 66,
                        value: "1.70 s",
                    },
                    velocity: {
                        value: "Off",
                    },
                },
            },
            lfo: {
                wave: {
                    value: "Triangle",
                },
                rate: {
                    midi: 43,
                    value: "0.81 Hz",
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
                enabled: true,
                source: {
                    value: "Organ",
                },
                drive: {
                    value: "10.0",
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
                            enabled: true,
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
                    value: "Piano",
                },
                type: {
                    value: "Tremolo",
                },
                amount: {
                    midi: 86,
                    value: "6.8",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 86,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 86,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 86,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 62,
                    value: "1/2T",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 62,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 62,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 62,
                                value: "none",
                            },
                        },
                    },
                },
                masterClock: {
                    enabled: true,
                },
            },
            effect2: {
                enabled: true,
                source: {
                    value: "Piano",
                },
                type: {
                    value: "Chorus 2",
                },
                amount: {
                    midi: 84,
                    value: "6.6",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 84,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 84,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 84,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 29,
                    value: "2.3",
                },
            },
            delay: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                masterClock: {
                    enabled: true,
                },
                tempo: {
                    midi: 54,
                    lsw: 0,
                    value: "1/8S",
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
                    midi: 51,
                    value: "4.0",
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
                mix: {
                    midi: 44,
                    value: "3.5",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 44,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 44,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 44,
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
                    value: "Twin",
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
                    midi: 64,
                    value: "999 Hz",
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
                overdrive: {
                    midi: 10,
                    value: "0.8",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 10,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 10,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 10,
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
                    value: "Stage 2",
                },
                amount: {
                    midi: 43,
                    value: "3.4",
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
                bright: {
                    enabled: false,
                },
            },
        },
    },
    masterClock: {
        rate: {
            value: "88 bpm",
        },
    },
    transpose: {
        enabled: false,
        value: "",
    },
    split: {
        enabled: true,
        low: {
            width: "1",
            note: "F3",
        },
        mid: {
            width: "Off",
            note: "--",
        },
        high: {
            width: "1",
            note: "C6",
        },
    },
    dualKeyboard: {
        enabled: false,
        value: "Organ",
    },
};
