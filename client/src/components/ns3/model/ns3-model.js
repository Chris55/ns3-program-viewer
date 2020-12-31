exports.ns3Model = {
    name: "toto_africa_p1_w",
    filename: "toto_africa_p1_w.ns3f",
    ext: "ns3f",
    description: "Nord Stage 3 Program",
    id: {
        bank: 11,
        location: 17,
        name: "L:43",
        value: 292,
    },
    version: {
        majorVersion: 3,
        minorVersion: 4,
        version: 304,
        value: "3.04",
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
            width: "1",
            note: "C4",
        },
        mid: {
            width: "1",
            note: "F5",
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
    category: "Synth",
    panelA: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false, false],
                value: "----",
            },
            volume: {
                midi: 31,
                value: "-24.5 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 31,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 31,
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
            octaveShift: {
                value: 1,
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
                    value: "88 8021 000",
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
                    value: "88 8888 888",
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
                sampleId: "b7353247",
                lib: {
                    valid: true,
                    value: "Marimba",
                    info: "Classic 4 1/2 octave",
                    version: "v6.1",
                    size: "15.7 MB",
                    location: 6,
                    filename: "Marimba  6.1",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, false, false],
                value: "OO--",
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
                        enabled: true,
                        to: {
                            midi: 50,
                            value: "-16.2 dB",
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
            type: {
                value: "Misc",
            },
            model: {
                value: 6,
            },
            name: {
                valid: true,
                value: "Marimba",
                info: "Classic 4 1/2 octave",
                version: "v6.1",
                size: "15.7 MB",
                location: 6,
                filename: "Marimba  6.1",
            },
            timbre: {
                value: "Bright",
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
                sampleId: "7fffffff",
                lib: {
                    valid: true,
                    value: "Wave Saw Bright",
                    info: "",
                    version: "",
                    location: 24,
                    useConfigAndPitch: true,
                },
                preset: {
                    location: 133,
                    userPreset: true,
                    userPresetLocationValue: 133,
                    userPresetLocationName: "3:34",
                    samplePresetLocationValue: 0,
                    samplePresetLocationName: "1",
                    presetName: "Saw Charm 2",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, false, false],
                value: "OO--",
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
                value: -1,
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
                value: "2",
            },
            vibrato: {
                value: "Off",
            },
            preset: {
                location: 133,
                userPreset: true,
                userPresetLocationValue: 133,
                userPresetLocationName: "3:34",
                samplePresetLocationValue: 0,
                samplePresetLocationName: "1",
                presetName: "Saw Charm 2",
            },
            oscillators: {
                type: {
                    value: "Wave",
                },
                waveForm1: {
                    valid: true,
                    value: "Wave Saw Bright",
                    info: "",
                    version: "",
                    location: 24,
                    useConfigAndPitch: true,
                },
                config: {
                    value: "7 MixSaw",
                },
                control: {
                    midi: 25,
                    value: "80/20",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 25,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 25,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 25,
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
                    label: "Mod Env Amt",
                    lfoAmount: {
                        midi: 0,
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
                        midi: 76,
                        value: "1.8",
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
                    value: "LP24",
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
                        midi: 0,
                        value: "0.0",
                    },
                    modEnvAmount: {
                        midi: 80,
                        value: "2.5",
                    },
                },
                cutoffFrequency: {
                    midi: 39,
                    value: "131 Hz",
                    morph: {
                        wheel: {
                            enabled: true,
                            to: {
                                midi: 79,
                                value: "1.3 kHz",
                            },
                        },
                        afterTouch: {
                            enabled: true,
                            to: {
                                midi: 72,
                                value: "880 Hz",
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
                        midi: 38,
                        value: "103 ms",
                    },
                    decay: {
                        midi: 84,
                        value: "5.18 s",
                    },
                    release: {
                        midi: 42,
                        value: "288 ms",
                    },
                    velocity: {
                        enabled: true,
                    },
                },
                amplifier: {
                    attack: {
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 103,
                        value: "14 s",
                    },
                    release: {
                        midi: 39,
                        value: "224 ms",
                    },
                    velocity: {
                        value: "1",
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
                enabled: true,
                source: {
                    value: "Organ",
                },
                drive: {
                    value: "5.4",
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
                    midi: 58,
                    value: "4.6",
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
                enabled: true,
                source: {
                    value: "Synth",
                },
                type: {
                    value: "Chorus 1",
                },
                amount: {
                    midi: 91,
                    value: "7.2",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 91,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 91,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 91,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 46,
                    value: "3.6",
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
                    midi: 125,
                    lsw: 0,
                    value: "24 ms 620 bpm (1/16)",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 125,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 125,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 125,
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
                    midi: 55,
                    value: "4.3",
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
                    midi: 41,
                    value: "-5.2 dB",
                },
                midFilterFreq: {
                    midi: 29,
                    value: "414 Hz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 29,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 29,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 29,
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
                    value: "Stage 1",
                },
                amount: {
                    midi: 57,
                    value: "4.5",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 57,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 57,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 57,
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
                midi: 105,
                value: "-3.3 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 105,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 105,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 105,
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
                    value: "88 8888 888",
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
                    value: "88 8888 888",
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
                sampleId: "b7353247",
                lib: {
                    valid: true,
                    value: "Marimba",
                    info: "Classic 4 1/2 octave",
                    version: "v6.1",
                    size: "15.7 MB",
                    location: 6,
                    filename: "Marimba  6.1",
                },
            },
            enabled: true,
            kbZone: {
                array: [false, false, true, true],
                value: "--OO",
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
                        enabled: true,
                        to: {
                            midi: 73,
                            value: "-9.6 dB",
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
            type: {
                value: "Misc",
            },
            model: {
                value: 6,
            },
            name: {
                valid: true,
                value: "Marimba",
                info: "Classic 4 1/2 octave",
                version: "v6.1",
                size: "15.7 MB",
                location: 6,
                filename: "Marimba  6.1",
            },
            timbre: {
                value: "Bright",
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
                sampleId: "72f5cadb",
                lib: {
                    valid: false,
                    value: "Sample 270",
                    info: "",
                    version: "",
                    size: "",
                    location: 269,
                    filename: "",
                    useConfigAndPitch: false,
                },
                preset: {
                    location: 337,
                    userPreset: true,
                    userPresetLocationValue: 337,
                    userPresetLocationName: "7:38",
                    samplePresetLocationValue: 0,
                    samplePresetLocationName: "1",
                    presetName: "africa split 2",
                },
            },
            enabled: true,
            kbZone: {
                array: [false, true, true, true],
                value: "-OOO",
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
                        enabled: true,
                        to: {
                            midi: 105,
                            value: "-3.3 dB",
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
                value: "1",
            },
            vibrato: {
                value: "Off",
            },
            preset: {
                location: 337,
                userPreset: true,
                userPresetLocationValue: 337,
                userPresetLocationName: "7:38",
                samplePresetLocationValue: 0,
                samplePresetLocationName: "1",
                presetName: "africa split 2",
            },
            oscillators: {
                type: {
                    value: "Sample",
                },
                waveForm1: {
                    valid: false,
                    value: "Sample 270",
                    info: "",
                    version: "",
                    size: "",
                    location: 269,
                    filename: "",
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
                    midi: 75,
                    value: "1.0 kHz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 75,
                                value: "none",
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
                        midi: 127,
                        value: "Sustain",
                    },
                    release: {
                        midi: 30,
                        value: "100 ms",
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
                        midi: 82,
                        value: "4.61 s",
                    },
                    release: {
                        midi: 36,
                        value: "173 ms",
                    },
                    velocity: {
                        value: "1",
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
                    value: "Organ",
                },
                drive: {
                    value: "5.4",
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
                    midi: 59,
                    value: "4.6",
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
                enabled: true,
                source: {
                    value: "Synth",
                },
                type: {
                    value: "Chorus 2",
                },
                amount: {
                    midi: 85,
                    value: "6.7",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 85,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 85,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 85,
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
                    value: "Synth",
                },
                masterClock: {
                    enabled: false,
                },
                tempo: {
                    midi: 120,
                    lsw: 0,
                    value: "34 ms 440 bpm (1/16)",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 120,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 120,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 120,
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
                    midi: 61,
                    value: "4.8",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 61,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 61,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 61,
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
                    midi: 44,
                    value: "-4.5 dB",
                },
                bassDryWet: {
                    midi: 64,
                    value: "0.0 dB",
                },
                midFilterFreq: {
                    midi: 79,
                    value: "1.6 kHz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 79,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 79,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 79,
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
                    value: "Hall 1",
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
                bright: {
                    enabled: false,
                },
            },
        },
    },
};
