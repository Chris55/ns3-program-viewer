exports.ns3Model = {
    name: "Toto-Africa-Ch-W",
    version: "3.04",
    category: "Synth",
    panelA: {
        enabled: true,
        organ: {
            enabled: true,
            kbZone: { array: [true, true, true, true], label: "OOOO" },
            volume: {
                midi: 0,
                label: "Off",
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: true, to: { midi: 64, label: "-11.9 dB" } },
                },
            },
            octaveShift: 0,
            pitchStick: false,
            sustainPedal: false,
            type: "B3",
            preset1: {
                label: "888021000",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            preset2: {
                label: "888133200",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            live: false,
            vibrato: { enabled: false, mode: "C3" },
            percussion: { enabled: false, volumeSoft: true, decayFast: true, harmonicThird: true },
        },
        piano: {
            debug: { namePrefix: 0, nameId: "f04da306", name: "White Grand Lrg 6.1" },
            enabled: true,
            kbZone: { array: [true, true, true, true], label: "OOOO" },
            volume: {
                midi: 0,
                label: "Off",
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: true, to: { midi: 68, label: "-10.9 dB" } },
                },
            },
            octaveShift: -1,
            pitchStick: false,
            sustainPedal: true,
            type: "Grand",
            model: 10,
            name: "White Grand Lrg 6.1",
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
                        midi: 0,
                        label: "Off",
                        morph: {
                            wheel: { enabled: false, to: { midi: 0, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                            controlPedal: { enabled: true, to: { midi: 68, label: "-10.9 dB" } },
                        },
                    },
                },
            ],
        },
        synth: {
            debug: { sampleId: "7fffffff" },
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
            octaveShift: "-1",
            pitchStick: true,
            sustainPedal: true,
            keyboardHold: false,
            voice: "Poly",
            glide: "0.0",
            unison: "2",
            vibrato: "Off",
            oscillators: {
                type: "Wave",
                waveForm1: "Wave Saw Bright",
                config: "7 MixSaw",
                control: {
                    midi: 25,
                    label: "80/20",
                    morph: {
                        wheel: { enabled: false, to: { midi: 25, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 25, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 25, label: "none" } },
                    },
                },
                pitch: { midi: 26, label: "0 semi" },
                modulations: {
                    lfoAmount: {
                        midi: 0,
                        label: "0.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 75, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 75, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 75, label: "none" } },
                        },
                    },
                    modEnvAmount: {
                        midi: 76,
                        label: "1.8",
                        morph: {
                            wheel: { enabled: false, to: { midi: 75, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 75, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 75, label: "none" } },
                        },
                    },
                },
                fastAttack: false,
            },
            filter: {
                type: "LP24",
                kbTrack: "1",
                drive: "Off",
                modulations: {
                    lfoAmount: {
                        midi: 0,
                        label: "0.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 0, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                        },
                    },
                    velAmount: { midi: 0, label: "0.0" },
                    modEnvAmount: { midi: 80, label: "2.5" },
                },
                cutoffFrequency: {
                    midi: 39,
                    label: "131 Hz",
                    morph: {
                        wheel: { enabled: true, to: { midi: 79, label: "1.3 kHz" } },
                        afterTouch: { enabled: true, to: { midi: 72, label: "880 Hz" } },
                        controlPedal: { enabled: false, to: { midi: 39, label: "none" } },
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
                    attack: { midi: 38, label: "103 ms" },
                    decay: { midi: 84, label: "5.18 s" },
                    release: { midi: 42, label: "288 ms" },
                    velocity: true,
                },
                amplifier: {
                    attack: { midi: 0, label: "0.5 ms" },
                    decay: { midi: 103, label: "14 s" },
                    release: { midi: 39, label: "224 ms" },
                    velocity: "1",
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
                drive: "5.4",
                stopMode: false,
                speed: {
                    label: "Slow/Stop",
                    morph: {
                        wheel: { enabled: false },
                        afterTouch: { enabled: false },
                        controlPedal: { enabled: false },
                    },
                },
            },
            effect1: {
                enabled: false,
                source: "Synth",
                type: "Panning",
                amount: {
                    midi: 58,
                    label: "4.6",
                    morph: {
                        wheel: { enabled: false, to: { midi: 58, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 58, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 58, label: "none" } },
                    },
                },
                rate: {
                    midi: 0,
                    label: "0.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 0, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                    },
                },
                masterClock: false,
            },
            effect2: {
                enabled: true,
                source: "Synth",
                type: "Chorus 1",
                amount: {
                    midi: 91,
                    label: "7.2",
                    morph: {
                        wheel: { enabled: false, to: { midi: 91, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 91, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 91, label: "none" } },
                    },
                },
                rate: { midi: 46, label: "3.6" },
            },
        },
    },
    panelB: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: { array: [false, false, false, false], label: "----" },
            volume: {
                midi: 105,
                label: "-3.3 dB",
                morph: {
                    wheel: { enabled: false, to: { midi: 105, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 105, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 105, label: "none" } },
                },
            },
            octaveShift: 0,
            pitchStick: false,
            sustainPedal: false,
            type: "B3",
            preset1: {
                label: "888888888",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            preset2: {
                label: "888888888",
                morph: {
                    wheel: { enabled: false, label: "---------" },
                    afterTouch: { enabled: false, label: "---------" },
                    controlPedal: { enabled: false, label: "---------" },
                },
            },
            live: false,
            vibrato: { enabled: false, mode: "V1" },
            percussion: { enabled: false, volumeSoft: true, decayFast: true, harmonicThird: true },
        },
        piano: {
            debug: { namePrefix: 0, nameId: "b7353247" },
            enabled: false,
            kbZone: { array: [false, false, false, false], label: "----" },
            volume: {
                midi: 73,
                label: "-9.6 dB",
                morph: {
                    wheel: { enabled: false, to: { midi: 73, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 73, label: "none" } },
                    controlPedal: { enabled: false, to: { midi: 73, label: "none" } },
                },
            },
            octaveShift: -1,
            pitchStick: false,
            sustainPedal: true,
            type: "Misc",
            model: 6,
            timbre: "Bright",
            kbTouch: "Normal",
            layerDetune: "Off",
            softRelease: false,
            pedalNoise: false,
            stringResonance: false,
            morph: [
                {
                    name: "Volume",
                    morph: {
                        midi: 73,
                        label: "-9.6 dB",
                        morph: {
                            wheel: { enabled: false, to: { midi: 73, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 73, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 73, label: "none" } },
                        },
                    },
                },
            ],
        },
        synth: {
            debug: { sampleId: "7fffffff" },
            enabled: true,
            kbZone: { array: [true, true, true, true], label: "OOOO" },
            volume: {
                midi: 0,
                label: "Off",
                morph: {
                    wheel: { enabled: false, to: { midi: 0, label: "none" } },
                    afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                    controlPedal: { enabled: true, to: { midi: 75, label: "-9.1 dB" } },
                },
            },
            octaveShift: "-1",
            pitchStick: true,
            sustainPedal: false,
            keyboardHold: false,
            voice: "Poly",
            glide: "0.0",
            unison: "2",
            vibrato: "Off",
            oscillators: {
                type: "Classic",
                waveForm1: "Saw",
                config: "4 Detune",
                control: {
                    midi: 2,
                    label: "0.06",
                    morph: {
                        wheel: { enabled: false, to: { midi: 2, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 2, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 2, label: "none" } },
                    },
                },
                pitch: { midi: 26, label: "0 semi" },
                modulations: {
                    lfoAmount: {
                        midi: 0,
                        label: "0.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 74, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 74, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 74, label: "none" } },
                        },
                    },
                    modEnvAmount: {
                        midi: 75,
                        label: "1.7",
                        morph: {
                            wheel: { enabled: false, to: { midi: 74, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 74, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 74, label: "none" } },
                        },
                    },
                },
                fastAttack: false,
            },
            filter: {
                type: "LP12",
                kbTrack: "1",
                drive: "Off",
                modulations: {
                    lfoAmount: {
                        midi: 0,
                        label: "0.0",
                        morph: {
                            wheel: { enabled: false, to: { midi: 0, label: "none" } },
                            afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                            controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                        },
                    },
                    velAmount: { midi: 0, label: "0.0" },
                    modEnvAmount: { midi: 86, label: "3.5" },
                },
                cutoffFrequency: {
                    midi: 46,
                    label: "196 Hz",
                    morph: {
                        wheel: { enabled: false, to: { midi: 46, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 46, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 46, label: "none" } },
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
                    decay: { midi: 76, label: "3.22 s" },
                    release: { midi: 59, label: "1.05 s" },
                    velocity: true,
                },
                amplifier: {
                    attack: { midi: 10, label: "3.0 ms" },
                    decay: { midi: 88, label: "6.50 s" },
                    release: { midi: 20, label: "36 ms" },
                    velocity: "1",
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
                enabled: false,
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
                source: "Synth",
                type: "Panning",
                amount: {
                    midi: 59,
                    label: "4.6",
                    morph: {
                        wheel: { enabled: false, to: { midi: 59, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 59, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 59, label: "none" } },
                    },
                },
                rate: {
                    midi: 0,
                    label: "0.0",
                    morph: {
                        wheel: { enabled: false, to: { midi: 0, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 0, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 0, label: "none" } },
                    },
                },
                masterClock: false,
            },
            effect2: {
                enabled: true,
                source: "Synth",
                type: "Chorus 2",
                amount: {
                    midi: 85,
                    label: "6.7",
                    morph: {
                        wheel: { enabled: false, to: { midi: 85, label: "none" } },
                        afterTouch: { enabled: false, to: { midi: 85, label: "none" } },
                        controlPedal: { enabled: false, to: { midi: 85, label: "none" } },
                    },
                },
                rate: { midi: 34, label: "2.7" },
            },
        },
    },
    masterClock: { rate: "120 bpm" },
    transpose: { enabled: false, label: "" },
    split: {
        enabled: true,
        low: { width: "1", note: "C4" },
        mid: { width: "1", note: "F5" },
        high: { width: "Off", note: "--" },
    },
};
