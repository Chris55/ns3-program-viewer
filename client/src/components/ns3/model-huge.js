exports.ns3Model = {
    name: "Test 1 HUGE",
    version: "3.04",
    category: "Acoustic",
    panelA: {
        enabled: true,
        organ: {
            enabled: true,
            kbZone: { array: [true, true, true, true], label: "OOOO" },
            volume: {
                midi: 127,
                label: "0.0 dB",
                morph: {
                    wheel: { enabled: false, to: { midi: 127, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 127, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 127, label: "none" } },
                },
            },
            octaveShift: -1,
            pitchStick: false,
            sustainPedal: false,
            type: "B3",
            preset1: {
                label: "146102480",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            preset2: {
                label: "053223468",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            live: false,
            vibrato: { enabled: true, mode: "V1" },
            percussion: { enabled: true, volumeSoft: true, decayFast: true, harmonicThird: false },
        },
        piano: {
            debug: { sampleVariation: 0, sampleId: "e5dd43ce", name: "Bambino Upright Baldwin XL 5.4" },
            enabled: true,
            kbZone: { array: [true, false, false, false], label: "O---" },
            volume: {
                midi: 118,
                label: "-1.3 dB",
                morph: {
                    wheel: { enabled: false, to: { midi: 118, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 118, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 118, label: "none" } },
                },
            },
            octaveShift: 0,
            pitchStick: false,
            sustainPedal: true,
            type: "Upright",
            model: 1,
            name: "Bambino Upright Baldwin XL 5.4",
            timbre: "Soft",
            kbTouch: "1",
            layerDetune: "Off",
            softRelease: true,
            pedalNoise: false,
            stringResonance: true,
            morph: [
                {
                    name: "Volume",
                    morph: {
                        midi: 118,
                        label: "-1.3 dB",
                        morph: {
                            wheel: { enabled: false, to: { midi: 118, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 118, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 118, label: "none" } },
                        },
                    },
                },
            ],
        },
        synth: {
            debug: { sampleId: "317f87d9" },
            enabled: true,
            kbZone: { array: [false, false, true, true], label: "--OO" },
            volume: {
                midi: 40,
                label: "-20.1 dB",
                morph: {
                    wheel: { enabled: false, to: { midi: 40, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 40, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 40, label: "none" } },
                },
            },
            octaveShift: "0",
            pitchStick: false,
            sustainPedal: false,
            keyboardHold: false,
            voice: "Poly",
            glide: "0.0",
            unison: "Off",
            vibrato: "Off",
            oscillators: {
                type: "Wave",
                waveForm1: "Wave 2nd Harm",
                config: "4 Detune",
                control: {
                    midi: 46,
                    label: "1.45",
                    morph: {
                        wheel: { enabled: false, to: { midi: 46, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 46, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 46, label: "none" } },
                    },
                },
                pitch: { midi: 51, label: "12 semi" },
                modulations: {
                    lfoAmount: {
                        midi: 64,
                        label: "0.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 64, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 64, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 64, label: "none" } },
                        },
                    },
                    modEnvAmount: {
                        midi: 64,
                        label: "0.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 64, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 64, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 64, label: "none" } },
                        },
                    },
                },
                fastAttack: false,
            },
            filter: {
                type: "LP+HP",
                kbTrack: "2/3",
                drive: "Off",
                modulations: {
                    lfoAmount: {
                        midi: 83,
                        label: "6.5",
                        morph: {
                            wheel: { enabled: false, to: { midi: 83, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 83, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 83, label: "none" } },
                        },
                    },
                    velAmount: { midi: 33, label: "4.8" },
                    modEnvAmount: { midi: 0, label: "0.0" },
                },
                cutoffFrequency: {
                    midi: 54,
                    label: "311 Hz",
                    morph: {
                        wheel: { enabled: false, to: { midi: 54, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 54, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 54, label: "none" } },
                    },
                },
                highPassCutoffFrequency: {
                    midi: 59,
                    label: "415 Hz",
                    morph: {
                        wheel: { enabled: false, to: { midi: 59, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 59, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 59, label: "none" } },
                    },
                },
                resonance: {
                    midi: 0,
                    label: "0.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 59, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 59, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 59, label: "none" } },
                    },
                },
            },
            envelopes: {
                modulation: {
                    attack: { midi: 0, label: "0.5 ms" },
                    decay: { midi: 127, label: "Sustain" },
                    release: { midi: 0, label: "3.0 ms" },
                    velocity: false,
                },
                amplifier: {
                    attack: { midi: 0, label: "0.5 ms" },
                    decay: { midi: 127, label: "Sustain" },
                    release: { midi: 30, label: "100 ms" },
                    velocity: "Off",
                },
            },
            lfo: {
                wave: "Triangle",
                rate: {
                    midi: 64,
                    label: "4.1 Hz",
                    morph: {
                        wheel: { enabled: false, to: { midi: 64, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 64, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 64, label: "none" } },
                    },
                },
                masterClock: false,
            },
            arpeggiator: {
                enabled: false,
                rate: {
                    midi: 54,
                    label: "120 bpm",
                    morph: {
                        wheel: { enabled: false, to: { midi: 54, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 54, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 54, label: "none" } },
                    },
                },
                kbSync: false,
                masterClock: false,
                range: "1 Octave",
                pattern: "Up",
            },
        },
        extern: {
            enabled: false,
            kbZone: { array: [false, false, false, false], label: "----" },
            octaveShift: 0,
            pitchStick: false,
            sustainPedal: false,
            control: "Program",
            midiCc: {
                midi: 0,
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                },
            },
            program: {
                midi: 0,
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                },
            },
            volume: {
                midi: 0,
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                },
            },
        },
        effects: {
            rotarySpeaker: {
                enabled: true,
                source: "Organ",
                drive: "1.8",
                stopMode: false,
                speed: {
                    label: "Fast",
                    morph: {
                        wheel: { enabled: false },
                        afterTouch: { enabled: false },
                        controlPedal: { enabled: false },
                    },
                },
            },
            effect1: {
                enabled: true,
                source: "Piano",
                type: "Tremolo",
                amount: {
                    midi: 64,
                    label: "5.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 64, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 64, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 64, label: "none" } },
                    },
                },
                rate: {
                    midi: 64,
                    label: "5.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 64, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 64, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 64, label: "none" } },
                    },
                },
                masterClock: false,
            },
            effect2: {
                enabled: true,
                source: "Synth",
                type: "Phaser 1",
                amount: {
                    midi: 0,
                    label: "0.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 0, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                    },
                },
                rate: { midi: 0, label: "0.0" },
            },
        },
    },
    panelB: {
        enabled: true,
        organ: {
            enabled: true,
            kbZone: { array: [true, true, true, true], label: "OOOO" },
            volume: {
                midi: 127,
                label: "0.0 dB",
                morph: {
                    wheel: { enabled: false, to: { midi: 127, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 127, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 127, label: "none" } },
                },
            },
            octaveShift: 0,
            pitchStick: false,
            sustainPedal: false,
            type: "B3",
            preset1: {
                label: "233334366",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            preset2: {
                label: "882221388",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            live: false,
            vibrato: { enabled: false, mode: "V1" },
            percussion: { enabled: false, volumeSoft: false, decayFast: false, harmonicThird: false },
        },
        piano: {
            debug: { sampleVariation: 0, sampleId: "5f256d93", name: "Grand Lady D   Stw D  Lrg 5.3" },
            enabled: true,
            kbZone: { array: [true, true, true, true], label: "OOOO" },
            volume: {
                midi: 116,
                label: "-1.6 dB",
                morph: {
                    wheel: { enabled: false, to: { midi: 116, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 116, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 116, label: "none" } },
                },
            },
            octaveShift: 0,
            pitchStick: false,
            sustainPedal: true,
            type: "Grand",
            model: 3,
            name: "Grand Lady D   Stw D  Lrg 5.3",
            timbre: "None",
            kbTouch: "Normal",
            layerDetune: "Off",
            softRelease: false,
            pedalNoise: false,
            stringResonance: false,
            morph: [
                {
                    name: "Volume",
                    morph: {
                        midi: 116,
                        label: "-1.6 dB",
                        morph: {
                            wheel: { enabled: false, to: { midi: 116, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 116, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 116, label: "none" } },
                        },
                    },
                },
            ],
        },
        synth: {
            debug: { sampleId: "7fffffff" },
            enabled: true,
            kbZone: { array: [false, false, true, true], label: "--OO" },
            volume: {
                midi: 0,
                label: "Off",
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                },
            },
            octaveShift: "0",
            pitchStick: true,
            sustainPedal: true,
            keyboardHold: false,
            voice: "Poly",
            glide: "0.0",
            unison: "1",
            vibrato: "Off",
            oscillators: {
                type: "Classic",
                waveForm1: "Pulse 10",
                config: "6 MixTri",
                control: {
                    midi: 0,
                    label: "100/0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 0, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                    },
                },
                pitch: { midi: 34, label: "4 semi" },
                modulations: {
                    lfoAmount: {
                        midi: 0,
                        label: "0.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 108, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 108, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 108, label: "none" } },
                        },
                    },
                    modEnvAmount: {
                        midi: 108,
                        label: "7.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 108, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 108, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 108, label: "none" } },
                        },
                    },
                },
                fastAttack: false,
            },
            filter: {
                type: "Mini Moog",
                kbTrack: "2/3",
                drive: "Off",
                modulations: {
                    lfoAmount: {
                        midi: 86,
                        label: "6.8",
                        morph: {
                            wheel: { enabled: false, to: { midi: 86, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 86, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 86, label: "none" } },
                        },
                    },
                    velAmount: { midi: 64, label: "0.0" },
                    modEnvAmount: { midi: 64, label: "0.0" },
                },
                cutoffFrequency: {
                    midi: 74,
                    label: "988 Hz",
                    morph: {
                        wheel: { enabled: false, to: { midi: 74, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 74, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 74, label: "none" } },
                    },
                },
                highPassCutoffFrequency: {
                    midi: 0,
                    label: "0.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 0, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                    },
                },
                resonance: {
                    midi: 0,
                    label: "0.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 0, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                    },
                },
            },
            envelopes: {
                modulation: {
                    attack: { midi: 0, label: "0.5 ms" },
                    decay: { midi: 59, label: "1.05 s" },
                    release: { midi: 59, label: "1.05 s" },
                    velocity: false,
                },
                amplifier: {
                    attack: { midi: 0, label: "0.5 ms" },
                    decay: { midi: 127, label: "Sustain" },
                    release: { midi: 0, label: "3.0 ms" },
                    velocity: "Off",
                },
            },
            lfo: {
                wave: "Triangle",
                rate: {
                    midi: 0,
                    label: "0.03 Hz",
                    morph: {
                        wheel: { enabled: false, to: { midi: 0, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                    },
                },
                masterClock: false,
            },
            arpeggiator: {
                enabled: false,
                rate: {
                    midi: 37,
                    label: "92 bpm",
                    morph: {
                        wheel: { enabled: false, to: { midi: 37, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 37, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 37, label: "none" } },
                    },
                },
                kbSync: false,
                masterClock: false,
                range: "1 Octave",
                pattern: "Up",
            },
        },
        extern: {
            enabled: false,
            kbZone: { array: [false, false, false, false], label: "----" },
            octaveShift: 0,
            pitchStick: false,
            sustainPedal: true,
            control: "Volume",
            midiCc: {
                midi: 0,
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                },
            },
            program: {
                midi: 0,
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                },
            },
            volume: {
                midi: 0,
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                },
            },
        },
        effects: {
            rotarySpeaker: {
                enabled: true,
                source: "Organ",
                drive: "0.0",
                stopMode: true,
                speed: {
                    label: "Slow/Stop",
                    morph: {
                        wheel: { enabled: true },
                        afterTouch: { enabled: true },
                        controlPedal: { enabled: true },
                    },
                },
            },
            effect1: {
                enabled: true,
                source: "Piano",
                type: "Panning",
                amount: {
                    midi: 64,
                    label: "5.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 64, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 64, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 64, label: "none" } },
                    },
                },
                rate: {
                    midi: 64,
                    label: "5.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 64, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 64, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 64, label: "none" } },
                    },
                },
                masterClock: false,
            },
            effect2: {
                enabled: true,
                source: "Synth",
                type: "Phaser 2",
                amount: {
                    midi: 99,
                    label: "7.8",
                    morph: {
                        wheel: { enabled: false, to: { midi: 99, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 99, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 99, label: "none" } },
                    },
                },
                rate: { midi: 26, label: "2.0" },
            },
        },
    },
    masterClock: { rate: "30 bpm" },
    transpose: { enabled: false, label: "" },
    split: {
        enabled: true,
        low: { width: "Off", note: "--" },
        mid: { width: "1", note: "C4" },
        high: { width: "Off", note: "--" },
    },
};
