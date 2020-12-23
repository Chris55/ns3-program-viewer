exports.ns2Model = {
    name: "01. eff1",
    filename: "01. eff1.ns2p",
    ext: "ns2p",
    description: "Nord Stage 2 Program",
    id: {
        bank: 1,
        location: 6,
        name: "B:02:2",
        value: 31,
    },
    version: 7,
    category: "None",
    slotA: {
        enabled: true,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
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
                sampleId: "0",
                lib: {
                    valid: false,
                    value: "Sample 1 (Program Init)",
                    info: "",
                    version: "",
                    size: "",
                    location: 0,
                    filename: "",
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
                enabled: true,
            },
            kbGate: {
                enabled: false,
            },
            type: {
                value: "Grand",
            },
            name: {
                valid: false,
                value: "Sample 1 (Program Init)",
                info: "",
                version: "",
                size: "",
                location: 0,
                filename: "",
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
                sampleId: "0",
                lib: {
                    valid: true,
                    value: "TRI ---",
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
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
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
                value: "Off",
            },
            oscillators: {
                type: {
                    value: "TRI",
                },
                waveForm1: {
                    valid: true,
                    value: "TRI ---",
                    info: "",
                    version: "",
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
                    midi: 64,
                    value: "0.0",
                    label: "VEL/Env AMT",
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
                    value: "SQUARE",
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
            effect1: {
                enabled: true,
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
                    value: "Organ",
                },
                type: {
                    value: "Phaser 1",
                },
                amount: {
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
                            enabled: true,
                            to: {
                                midi: 1,
                                value: "0.1",
                            },
                        },
                    },
                },
                rate: {
                    midi: 1,
                    value: "0.1",
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
                    midi: 64,
                    lsw: 0,
                    value: "234 ms 128 bpm (x2)",
                    morph: {
                        wheel: {
                            enabled: true,
                            to: {
                                midi: 0,
                                value: "750 ms 80 bpm",
                            },
                        },
                        afterTouch: {
                            enabled: true,
                            to: {
                                midi: 0,
                                value: "750 ms 80 bpm",
                            },
                        },
                        controlPedal: {
                            enabled: true,
                            to: {
                                midi: 1,
                                value: "727 ms 82 bpm (1/4)",
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
        enabled: false,
        organ: {
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
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
                sampleId: "0",
                lib: {
                    valid: false,
                    value: "Sample 1 (Program Init)",
                    info: "",
                    version: "",
                    size: "",
                    location: 0,
                    filename: "",
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
                enabled: true,
            },
            kbGate: {
                enabled: false,
            },
            type: {
                value: "Grand",
            },
            name: {
                valid: false,
                value: "Sample 1 (Program Init)",
                info: "",
                version: "",
                size: "",
                location: 0,
                filename: "",
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
                sampleId: "0",
                lib: {
                    valid: true,
                    value: "TRI ---",
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
            enabled: false,
            kbZone: {
                array: [false, false, false],
                value: "",
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
                value: "Off",
            },
            oscillators: {
                type: {
                    value: "TRI",
                },
                waveForm1: {
                    valid: true,
                    value: "TRI ---",
                    info: "",
                    version: "",
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
                    midi: 64,
                    value: "0.0",
                    label: "VEL/Env AMT",
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
                    value: "SQUARE",
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
                    value: "Organ",
                },
                type: {
                    value: "Phaser 1",
                },
                amount: {
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
                            enabled: true,
                            to: {
                                midi: 1,
                                value: "0.1",
                            },
                        },
                    },
                },
                rate: {
                    midi: 1,
                    value: "0.1",
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
                    midi: 64,
                    lsw: 0,
                    value: "234 ms 128 bpm (x2)",
                    morph: {
                        wheel: {
                            enabled: true,
                            to: {
                                midi: 0,
                                value: "750 ms 80 bpm",
                            },
                        },
                        afterTouch: {
                            enabled: true,
                            to: {
                                midi: 0,
                                value: "750 ms 80 bpm",
                            },
                        },
                        controlPedal: {
                            enabled: true,
                            to: {
                                midi: 1,
                                value: "727 ms 82 bpm (1/4)",
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
        enabled: false,
        low: {
            note: "--",
        },
        high: {
            note: "--",
        },
    },
    dualKeyboard: {
        enabled: false,
    },
    compressor: {
        enabled: false,
        amount: {
            midi: 0,
            value: "0.0",
        },
    },
    reverb: {
        enabled: false,
        type: {
            value: "Stage 1",
        },
        amount: {
            midi: 64,
            value: "5.0",
        },
    },
};
