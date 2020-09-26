exports.ns3Model = {
    name: "Power",
    id: {
        bank: 0,
        location: 0,
        name: "A:11",
        value: 0,
    },
    version: "3.04",
    category: "User",
    panelA: {
        enabled: true,
        organ: {
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: ["0000"],
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
                value: "B3",
            },
            preset1: {
                value: "888808080",
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
            preset2: {
                value: "008888800",
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
            live: {
                enabled: false,
            },
            vibrato: {
                enabled: true,
                mode: {
                    value: "C2",
                },
            },
            percussion: {
                enabled: true,
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
        piano: {
            debug: {
                sampleVariation: 0,
                sampleId: "e45554ef",
                name: "Grand Imperial Bdorf XL 5.3",
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: ["0000"],
            },
            volume: {
                midi: 118,
                value: "-1.3 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 118,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 118,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: true,
                        to: {
                            midi: 0,
                            value: "Off",
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
                value: "Grand",
            },
            model: {
                value: 2,
            },
            name: {
                value: "Grand Imperial Bdorf XL 5.3",
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
                enabled: true,
            },
            stringResonance: {
                enabled: true,
            },
        },
        synth: {
            debug: {
                sampleId: "bef7504f",
                name: "DX7IIC FineTines",
                info: "BR mono",
                version: "3.0",
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: ["0000"],
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
                    value: "Sample",
                },
                waveForm1: {
                    name: "DX7IIC FineTines",
                    info: "BR mono",
                    version: "3.0",
                    value: 171,
                },
                config: {
                    value: "None",
                },
                control: {
                    midi: 81,
                    value: "",
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
                pitch: {
                    midi: 26,
                    value: "0 semi",
                },
                modulations: {
                    lfoAmount: {
                        midi: 0,
                        value: "0.0",
                        morph: {
                            wheel: {
                                enabled: false,
                                to: {
                                    midi: 73,
                                    value: "none",
                                },
                            },
                            afterTouch: {
                                enabled: false,
                                to: {
                                    midi: 73,
                                    value: "none",
                                },
                            },
                            controlPedal: {
                                enabled: false,
                                to: {
                                    midi: 73,
                                    value: "none",
                                },
                            },
                        },
                    },
                    modEnvAmount: {
                        midi: 74,
                        value: "1.5",
                        morph: {
                            wheel: {
                                enabled: false,
                                to: {
                                    midi: 73,
                                    value: "none",
                                },
                            },
                            afterTouch: {
                                enabled: false,
                                to: {
                                    midi: 73,
                                    value: "none",
                                },
                            },
                            controlPedal: {
                                enabled: false,
                                to: {
                                    midi: 73,
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
                        value: "0.0",
                    },
                    modEnvAmount: {
                        midi: 66,
                        value: "0.3",
                    },
                },
                cutoffFrequency: {
                    midi: 69,
                    value: "740 Hz",
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
                highPassCutoffFrequency: {
                    midi: 93,
                    value: "3.0 kHz",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 93,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 93,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 93,
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
                                midi: 93,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 93,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 93,
                                value: "none",
                            },
                        },
                    },
                },
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 71,
                        value: "1.72 s",
                    },
                    decay: {
                        midi: 83,
                        value: "4.89 s",
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
                        midi: 14,
                        value: "19 ms",
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
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: ["0000"],
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
                value: "Program",
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
                midi: 83,
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 83,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 83,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 83,
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
                    value: "3.4",
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
                    value: "Piano",
                },
                type: {
                    value: "Panning",
                },
                amount: {
                    midi: 9,
                    value: "0.7",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 9,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 9,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 9,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
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
                    midi: 25,
                    value: "2.0",
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
                    midi: 87,
                    value: "238 ms 126 bpm \u{266C}",
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
                    value: "BP",
                },
                analogMode: {
                    enabled: true,
                },
                feedback: {
                    midi: 83,
                    value: "6.5",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 83,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 83,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 83,
                                value: "none",
                            },
                        },
                    },
                },
                mix: {
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
                value: "Pipe2",
            },
            preset1: {
                value: "008808800",
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
            preset2: {
                value: "008888800",
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
            live: {
                enabled: false,
            },
            vibrato: {
                enabled: true,
                mode: {
                    value: "C1",
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
        piano: {
            debug: {
                sampleVariation: 0,
                sampleId: "1fef7496",
                name: "Italian Grand Faz Lrg 5.3",
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
                enabled: false,
            },
            sustainPedal: {
                enabled: true,
            },
            type: {
                value: "Grand",
            },
            model: {
                value: 4,
            },
            name: {
                value: "Italian Grand Faz Lrg 5.3",
            },
            timbre: {
                value: "Soft",
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
                enabled: true,
            },
            stringResonance: {
                enabled: true,
            },
        },
        synth: {
            debug: {
                sampleId: "7fffffff",
                name: "Saw",
                info: "",
                version: "",
            },
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: ["0000"],
            },
            volume: {
                midi: 82,
                value: "-7.6 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 82,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 82,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 82,
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
                value: "Mono",
            },
            glide: {
                value: "0.6",
            },
            unison: {
                value: "3",
            },
            vibrato: {
                value: "After Touch",
            },
            oscillators: {
                type: {
                    value: "Classic",
                },
                waveForm1: {
                    name: "Saw",
                    info: "",
                    version: "",
                    value: 2,
                },
                config: {
                    value: "2 Shape",
                },
                control: {
                    midi: 0,
                    value: "0 %",
                    morph: {
                        wheel: {
                            enabled: true,
                            to: {
                                midi: 127,
                                value: "100 %",
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
                        value: "0.0",
                    },
                    modEnvAmount: {
                        midi: 127,
                        value: "10.0",
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
                    midi: 34,
                    value: "98 Hz",
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
                resonance: {
                    midi: 0,
                    value: "0.0",
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
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 0,
                        value: "0.5 ms",
                    },
                    decay: {
                        midi: 22,
                        value: "45 ms",
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
                        midi: 126,
                        value: "43 s",
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
                    value: "Saw",
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
            enabled: true,
            kbZone: {
                array: [true, true, true, true],
                value: ["0000"],
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
                value: "Volume",
            },
            midiCc: {
                midi: 5,
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 5,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 5,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 5,
                            value: "none",
                        },
                    },
                },
            },
            program: {
                midi: 83,
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 83,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 83,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 83,
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
                enabled: false,
                source: {
                    value: "Piano",
                },
                drive: {
                    value: "3.4",
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
                    midi: 25,
                    value: "2.0",
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
                    midi: 33,
                    value: "536 ms 112 bpm (1/4)",
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
                    value: "LP",
                },
                analogMode: {
                    enabled: false,
                },
                feedback: {
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
                mix: {
                    midi: 14,
                    value: "1.1",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 14,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 14,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 14,
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
                    value: "Hall 2",
                },
                amount: {
                    midi: 17,
                    value: "1.3",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 17,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 17,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 17,
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
        enabled: true,
        value: "Panel",
    },
};
