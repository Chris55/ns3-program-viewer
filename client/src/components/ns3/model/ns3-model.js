exports.ns3Model = {
    name: "Superstition",
    filename: "Superstition.ns3f",
    ext: "ns3f",
    description: "Nord Stage 3 Program",
    id: {
        bank: 0,
        location: 19,
        name: "A:45",
        value: 19,
    },
    version: "3.04",
    category: "Undefined",
    panelA: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
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
                enabled: false,
            },
            type: {
                value: "B3",
            },
            preset1: {
                enabled: true,
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
                    mode: {
                        value: "V1",
                        label: "Vibrato"
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
                sampleVariation: 1,
                sampleId: "1bedfa44",
                lib: {
                    valid: true,
                    value: "Clavinet D6 CB 5.0",
                    info: "",
                    version: "",
                    size: "",
                    location: 1,
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, false],
                value: "OOO-",
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
            type: {
                value: "Clav",
            },
            model: {
                value: 1,
            },
            name: {
                valid: true,
                value: "Clavinet D6 CB 5.0",
                info: "",
                version: "",
                size: "",
                location: 1,
            },
            timbre: {
                value: "Treble (Mid)",
            },
            kbTouch: {
                value: "3",
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
                sampleId: "30fde73f",
                lib: {
                    valid: false,
                    value: "Sample 42",
                    info: "",
                    version: "",
                    size: "",
                    location: 41,
                },
                preset: {
                    location: 441,
                    userPreset: false,
                    userPresetLocationValue: 0,
                    userPresetLocationName: "1:01",
                    samplePresetLocationValue: 41,
                    samplePresetLocationName: "42",
                    presetName: "Wonder Drums",
                },
            },
            enabled: true,
            kbZone: {
                array: [false, false, false, true],
                value: "---O",
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
                enabled: true,
            },
            keyboardHold: {
                enabled: true,
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
                location: 441,
                userPreset: false,
                userPresetLocationValue: 0,
                userPresetLocationName: "1:01",
                samplePresetLocationValue: 41,
                samplePresetLocationName: "42",
                presetName: "Wonder Drums",
            },
            oscillators: {
                type: {
                    value: "Sample",
                },
                waveForm1: {
                    valid: false,
                    value: "Sample 42",
                    info: "",
                    version: "",
                    size: "",
                    location: 41,
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
                    value: "LP+HP",
                },
                kbTrack: {
                    value: "1",
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
                        midi: 64,
                        value: "0.0",
                    },
                    modEnvAmount: {
                        midi: 64,
                        value: "0.0",
                    },
                },
                cutoffFrequency: {
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
                highPassCutoffFrequency: {
                    midi: 0,
                    value: "14 Hz",
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
                        midi: 127,
                        value: "Sustain",
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
                        midi: 127,
                        value: "Sustain",
                    },
                    release: {
                        midi: 30,
                        value: "100 ms",
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
            effect1: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                type: {
                    value: "Panning",
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
                    midi: 64,
                    lsw: 0,
                    value: "411 ms 146 bpm ♩",
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
                    midi: 18,
                    value: "1.4",
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
                mix: {
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
                enabled: true,
                source: {
                    value: "Synth",
                },
                ampType: {
                    value: "Clean",
                    redOptions: false,
                },
                treble: {
                    midi: 127,
                    value: "+15.0 dB",
                },
                midRes: {
                    midi: 73,
                    value: "+2.2 dB",
                },
                bassDryWet: {
                    midi: 127,
                    value: "+15.0 dB",
                },
                midFilterFreq: {
                    midi: 127,
                    value: "8.0 kHz",
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
                overdrive: {
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
            },
            compressor: {
                enabled: true,
                amount: {
                    midi: 63,
                    value: "5.0",
                },
                fast: {
                    enabled: false,
                },
            },
            reverb: {
                enabled: false,
                type: {
                    value: "Hall 2",
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
                enabled: false,
            },
            type: {
                value: "B3",
            },
            preset1: {
                enabled: true,
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
                    mode: {
                        value: "V1",
                        label: "Vibrato"
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
                sampleVariation: 1,
                sampleId: "1bedfa44",
                lib: {
                    valid: true,
                    value: "Clavinet D6 CB 5.0",
                    info: "",
                    version: "",
                    size: "",
                    location: 1,
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, false],
                value: "OOO-",
            },
            volume: {
                midi: 81,
                value: "-7.8 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 81,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 81,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 81,
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
                value: "Clav",
            },
            model: {
                value: 1,
            },
            name: {
                valid: true,
                value: "Clavinet D6 CB 5.0",
                info: "",
                version: "",
                size: "",
                location: 1,
            },
            timbre: {
                value: "Treble (Mid)",
            },
            kbTouch: {
                value: "3",
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
                sampleId: "7fffffff",
                lib: {
                    value: "Sine",
                    info: "",
                    version: "",
                    location: 0,
                },
                preset: {
                    location: 0,
                    userPreset: true,
                    userPresetLocationValue: 0,
                    userPresetLocationName: "1:01",
                    samplePresetLocationValue: 0,
                    samplePresetLocationName: "1",
                    presetName: "",
                },
            },
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
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
                location: 0,
                userPreset: true,
                userPresetLocationValue: 0,
                userPresetLocationName: "1:01",
                samplePresetLocationValue: 0,
                samplePresetLocationName: "1",
                presetName: "",
            },
            oscillators: {
                type: {
                    value: "Classic",
                },
                waveForm1: {
                    value: "Sine",
                    info: "",
                    version: "",
                    location: 0,
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
                        midi: 64,
                        value: "0.0",
                    },
                    modEnvAmount: {
                        midi: 64,
                        value: "0.0",
                    },
                },
                cutoffFrequency: {
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
                        midi: 59,
                        value: "1.05 s",
                    },
                    release: {
                        midi: 59,
                        value: "1.05 s",
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
                        midi: 127,
                        value: "Sustain",
                    },
                    release: {
                        midi: 0,
                        value: "3.0 ms",
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
                    midi: 0,
                    value: "0.03 Hz",
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
            effect1: {
                enabled: false,
                source: {
                    value: "Piano",
                },
                type: {
                    value: "Panning",
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
                    midi: 64,
                    lsw: 0,
                    value: "411 ms 146 bpm ♩",
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
                mix: {
                    midi: 24,
                    value: "1.9",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 24,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 24,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 24,
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
                    value: "Clean",
                    redOptions: false,
                },
                treble: {
                    midi: 127,
                    value: "+15.0 dB",
                },
                midRes: {
                    midi: 91,
                    value: "+6.5 dB",
                },
                bassDryWet: {
                    midi: 108,
                    value: "+10.5 dB",
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
                    midi: 0,
                    value: "0.0",
                    morph: {
                        wheel: {
                            enabled: true,
                            to: {
                                midi: 76,
                                value: "6.0",
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
                    midi: 0,
                    value: "0.0",
                },
                fast: {
                    enabled: false,
                },
            },
            reverb: {
                enabled: false,
                type: {
                    value: "Room 1",
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
                bright: {
                    enabled: false,
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
            width: "Off",
            note: "--",
        },
        mid: {
            width: "Off",
            note: "--",
        },
        high: {
            width: "1",
            note: "C7",
        },
    },
    dualKeyboard: {
        enabled: false,
        value: "Panel",
    },
};
