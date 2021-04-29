exports.ns2Model = {
    name: "Power",
    filename: "Power.ns2p",
    ext: "ns2p",
    description: "Nord Stage 2 Program",
    id: {
        bank: 0,
        location: 1,
        name: "A:01:2",
        value: 1,
    },
    category: "Grand",
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
            note: "F2",
        },
        high: {
            note: "--",
        },
    },
    dualKeyboard: {
        enabled: true,
    },
    compressor: {
        enabled: false,
        amount: {
            midi: 31,
            value: "2.4",
        },
    },
    reverb: {
        enabled: true,
        type: {
            value: "Hall 2",
        },
        amount: {
            midi: 16,
            value: "1.3",
        },
    },
    slotA: {
        enabled: true,
        organ: {
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
                        enabled: true,
                        to: {
                            midi: 125,
                            value: "-0.3 dB",
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
                            midi: 120,
                            value: "-1.0 dB",
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
                    value: "88 8808 088",
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
                    mode: {
                        value: "C2",
                        label: "Chorus",
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
            output: {
                value: "1&2",
            },
        },
        piano: {
            debug: {
                sampleId: "df256d94",
                lib: {
                    valid: true,
                    value: "Grand Lady D   Lrg",
                    name: "Grand Lady D   Lrg",
                    info: "Stw D",
                    version: "v5.3",
                    size: "82.4 MB",
                    location: 0,
                    filename: "Grand Lady D   Stw D  Lrg 5.3",
                    stringsRes: true,
                    softRelease: true,
                    pedalNoise: true,
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true],
                value: "LO UP HI",
            },
            volume: {
                midi: 99,
                value: "-4.3 dB",
                morph: {
                    wheel: {
                        enabled: true,
                        to: {
                            midi: 3,
                            value: "-65.1 dB",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 99,
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
            latchPedal: {
                enabled: true,
            },
            kbGate: {
                enabled: false,
            },
            type: {
                value: "Grand",
            },
            name: {
                valid: true,
                value: "Grand Lady D   Lrg",
                name: "Grand Lady D   Lrg",
                info: "Stw D",
                version: "v5.3",
                size: "82.4 MB",
                location: 0,
                filename: "Grand Lady D   Stw D  Lrg 5.3",
                stringsRes: true,
                softRelease: true,
                pedalNoise: true,
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
                value: "Off",
            },
            output: {
                value: "1&2",
            },
        },
        synth: {
            debug: {
                sampleId: "30551d20",
                lib: {
                    valid: false,
                    value: "Sample 193",
                    name: "Sample not found",
                    info: "",
                    version: "",
                    size: "",
                    location: 192,
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
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "---",
            },
            volume: {
                midi: 102,
                value: "-3.8 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 102,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 102,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 102,
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
            keyboardHold: {
                enabled: true,
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
                    valid: false,
                    value: "Sample 193",
                    name: "Sample not found",
                    info: "",
                    version: "",
                    size: "",
                    location: 192,
                    filename: "",
                },
                shapeCtrl: {
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
                shapeMod: {
                    midi: 63,
                    value: "0.0",
                    label: "LFO/Env AMT",
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
                    midi: 86,
                    value: "2.2 kHz",
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
                resonance: {
                    midi: 0,
                    value: "0.0",
                },
                modulation1: {
                    midi: 4,
                    value: "0.3",
                },
                modulation2: {
                    midi: 64,
                    value: "0.0",
                    label: "VEL/Env AMT",
                },
            },
            envelopes: {
                modulation: {
                    attack: {
                        midi: 35,
                        value: "75 ms",
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
                        midi: 22,
                        value: "16 ms",
                    },
                    decay: {
                        midi: 127,
                        value: "45 s",
                    },
                    release: {
                        midi: 51,
                        value: "588 ms",
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
                    midi: 0,
                    value: "0.03 Hz",
                },
                masterClock: {
                    enabled: false,
                },
            },
            arpeggiator: {
                enabled: false,
                rate: {
                    midi: 90,
                    value: "120:16 BPM",
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
            output: {
                value: "1&2",
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
                enabled: true,
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
                enabled: true,
                midi: 82,
                value: "83",
            },
            volume: {
                enabled: false,
                midi: 127,
                value: "127",
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
            channel: {
                value: 2,
                type: "MIDI",
            },
            cc00: {
                enabled: false,
                value: 117,
            },
            cc32: {
                enabled: true,
                value: 0,
            },
            cc: {
                value: 119,
                text: "Undefined",
            },
            wheel: {
                enabled: false,
            },
            afterTouch: {
                enabled: false,
            },
            controlPedal: {
                enabled: false,
            },
            swell: {
                enabled: false,
            },
            velocity: {
                value: "Normal",
            },
        },
        effects: {
            rotarySpeaker: {
                enabled: true,
                source: {
                    value: "Organ",
                },
                drive: {
                    value: "3.6",
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
                    midi: 11,
                    value: "0.9",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 11,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 11,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 11,
                                value: "none",
                            },
                        },
                    },
                },
                rate: {
                    midi: 34,
                    value: "34 (2.7)",
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
                masterClock: {
                    enabled: false,
                },
            },
            effect2: {
                enabled: false,
                source: {
                    value: "Synth",
                },
                type: {
                    value: "Phaser 1",
                },
                amount: {
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
                rate: {
                    midi: 12,
                    value: "12 (0.9)",
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
                    midi: 30,
                    lsw: 0,
                    value: "429 ms 140 bpm",
                    morph: {
                        wheel: {
                            enabled: false,
                            to: {
                                midi: 30,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 30,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 30,
                                value: "none",
                            },
                        },
                    },
                },
                pingPong: {
                    enabled: false,
                },
                feedback: {
                    midi: 64,
                    value: "5.0",
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
            },
            ampSimEq: {
                enabled: false,
                source: {
                    value: "Synth",
                },
                ampType: {
                    value: "Off",
                },
                treble: {
                    midi: 63,
                    value: "-0.2 dB",
                },
                mid: {
                    midi: 59,
                    value: "-1.2 dB",
                },
                bass: {
                    midi: 57,
                    value: "-1.6 dB",
                },
                midFilterFreq: {
                    midi: 0,
                    value: "200 Hz",
                },
                overdrive: {
                    midi: 32,
                    value: "2.5",
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
                value: "---",
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
                    enabled: true,
                    mode: {
                        value: "C2",
                        label: "Chorus",
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
                    enabled: true,
                },
                percussion: {
                    enabled: false,
                },
            },
            output: {
                value: "1&2",
            },
        },
        piano: {
            debug: {
                sampleId: "7dc7d01e",
                lib: {
                    valid: true,
                    value: "Italian Grand XL",
                    name: "Italian Grand XL",
                    info: "Faz",
                    version: "v5.3",
                    size: "191.0 MB",
                    location: 0,
                    filename: "Italian Grand Faz XL 5.3",
                    stringsRes: true,
                    softRelease: true,
                    pedalNoise: true,
                },
            },
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "---",
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
                name: "Italian Grand XL",
                info: "Faz",
                version: "v5.3",
                size: "191.0 MB",
                location: 0,
                filename: "Italian Grand Faz XL 5.3",
                stringsRes: true,
                softRelease: true,
                pedalNoise: true,
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
            output: {
                value: "1&2",
            },
        },
        synth: {
            debug: {
                sampleId: "0",
                lib: {
                    valid: true,
                    value: "SAW ---",
                    info: "",
                    version: "",
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
                    presetName: "\u0001",
                },
            },
            enabled: true,
            kbZone: {
                array: [true, true, true],
                value: "LO UP HI",
            },
            volume: {
                midi: 102,
                value: "-3.8 dB",
                morph: {
                    wheel: {
                        enabled: false,
                        to: {
                            midi: 102,
                            value: "none",
                        },
                    },
                    afterTouch: {
                        enabled: false,
                        to: {
                            midi: 102,
                            value: "none",
                        },
                    },
                    controlPedal: {
                        enabled: false,
                        to: {
                            midi: 102,
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
                value: "Mono",
            },
            glide: {
                value: "1.5",
            },
            unison: {
                value: "Multi 1",
            },
            vibrato: {
                value: "Off",
            },
            oscillators: {
                type: {
                    value: "SAW",
                },
                waveForm1: {
                    valid: true,
                    value: "SAW ---",
                    info: "",
                    version: "",
                    location: 0,
                    filename: "",
                },
                shapeCtrl: {
                    midi: 127,
                    value: "10.0",
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
                    value: "LP12",
                },
                kbTrack: {
                    enabled: true,
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
                    midi: 1,
                    value: "9.8",
                    label: "VEL AMT",
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
                        value: "45 s",
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
                        value: "45 s",
                    },
                    release: {
                        midi: 0,
                        value: "3.0 ms",
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
                    midi: 0,
                    value: "0.03 Hz",
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
            output: {
                value: "1&2",
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
                enabled: true,
                midi: 5,
                value: "5",
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
                enabled: true,
                midi: 82,
                value: "83",
            },
            volume: {
                enabled: false,
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
            channel: {
                value: 2,
                type: "MIDI",
            },
            cc00: {
                enabled: false,
                value: 0,
            },
            cc32: {
                enabled: true,
                value: 0,
            },
            cc: {
                value: 119,
                text: "Undefined",
            },
            wheel: {
                enabled: true,
            },
            afterTouch: {
                enabled: true,
            },
            controlPedal: {
                enabled: true,
            },
            swell: {
                enabled: false,
            },
            velocity: {
                value: "Normal",
            },
        },
        effects: {
            rotarySpeaker: {
                enabled: true,
                source: {
                    value: "Organ",
                },
                drive: {
                    value: "3.6",
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
                    value: "64 (5.0)",
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
                    value: "64 (5.0)",
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
            delay: {
                enabled: true,
                source: {
                    value: "Synth",
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
                                midi: 56,
                                value: "none",
                            },
                        },
                        afterTouch: {
                            enabled: false,
                            to: {
                                midi: 56,
                                value: "none",
                            },
                        },
                        controlPedal: {
                            enabled: false,
                            to: {
                                midi: 56,
                                value: "none",
                            },
                        },
                    },
                },
                pingPong: {
                    enabled: false,
                },
                feedback: {
                    midi: 4,
                    value: "0.3",
                },
                amount: {
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
            },
            ampSimEq: {
                enabled: true,
                source: {
                    value: "Synth",
                },
                ampType: {
                    value: "Off",
                },
                treble: {
                    midi: 83,
                    value: "+4.5 dB",
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
                    midi: 127,
                    value: "8.0 kHz",
                },
                overdrive: {
                    midi: 0,
                    value: "0.0",
                },
            },
        },
    },
};
