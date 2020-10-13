const mapping = require("./ns3-mapping");
const converter = require("../../common/converter");
const { getSample } = require("../../library/ns3-library-service");
const { ns3MorphSynthOscillatorModulation } = require("./ns3-morph");
const { ns3Morph } = require("./ns3-morph");
const { ns3Filter } = require("./ns3-synth-filter");
const { ns3OscControl } = require("./ns3-synth-osc-control");
const { ns3VolumeEx } = require("./ns3-utils");
const { ns3KbZone } = require("./ns3-utils");
const { ns3KnobDualValues } = require("./ns3-utils");

/***
 * Synth Envelope Decay / Release value
 * @param value
 * @param type
 * @returns {string}
 */
const synthEnvDecayOrReleaseLabel = function (value, type) {
    switch (type) {
        case "mod.decay": {
            if (value === 127) return "Sustain";
            else return mapping.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
        case "mod.release": {
            if (value === 127) return "Inf";
            else return mapping.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
        case "amp.decay": {
            if (value === 127) return "Sustain";
            else return mapping.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
        case "amp.release": {
            return mapping.ns3SynthEnvDecayOrReleaseMap.get(value);
        }
    }
    return "";
};

/***
 * returns Synth section
 *
 * @param buffer {Buffer}
 * @param id {number}
 * @param panelOffset {number}
 * @param global
 * @returns {{voice: unknown, oscillators: {control: {midi: number, value: string}, fastAttack: boolean, pitch: {midi: number, value: (string|string)}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, value: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, value: unknown}, filter: {highPassCutoffFrequency: {midi: number, value: unknown}, cutoffFrequency: {midi: number, value: unknown}, type: unknown, drive: unknown, resonance: {midi: number, value: (string|string)}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, value: string}, velAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, value: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: unknown}}, vibrato: unknown}}
 */
exports.ns3Synth = (buffer, id, panelOffset, global) => {
    const synthOffset52W = buffer.readUInt16BE(0x52 + panelOffset);
    const synthOffset56 = buffer.readUInt8(0x56 + panelOffset);
    const synthOffset57 = buffer.readUInt8(0x57 + panelOffset);
    const synthOffset80 = buffer.readUInt8(0x80 + panelOffset);
    const synthOffset81 = buffer.readUInt8(0x81 + panelOffset);
    const synthOffset81Ww = buffer.readUInt32BE(0x81 + panelOffset);
    const synthOffset84W = buffer.readUInt16BE(0x84 + panelOffset);
    const synthOffset86 = buffer.readUInt8(0x86 + panelOffset);
    const synthOffset87 = buffer.readUInt8(0x87 + panelOffset);
    const synthOffset87Ww = buffer.readUInt32BE(0x87 + panelOffset);
    const synthOffset8bW = buffer.readUInt16BE(0x8b + panelOffset);
    const synthOffset8cW = buffer.readUInt16BE(0x8c + panelOffset);
    const synthOffset8dW = buffer.readUInt16BE(0x8d + panelOffset);
    const synthOffset8eW = buffer.readUInt16BE(0x8e + panelOffset);
    const synthOffset8f = buffer.readUInt8(0x8f + panelOffset);
    const synthOffset8fW = buffer.readUInt16BE(0x8f + panelOffset);
    const synthOffset94W = buffer.readUInt16BE(0x94 + panelOffset);
    const synthOffset95Ww = buffer.readUInt32BE(0x95 + panelOffset);

    const synthOffsetA5W = buffer.readUInt16BE(0xa5 + panelOffset);
    const synthOffsetA6W = buffer.readUInt16BE(0xa6 + panelOffset);
    const synthOffsetA7W = buffer.readUInt16BE(0xa7 + panelOffset);
    const synthOffsetA8 = buffer.readUInt8(0xa8 + panelOffset);
    const synthOffsetA8W = buffer.readUInt16BE(0xa8 + panelOffset);
    const synthOffsetA9W = buffer.readUInt16BE(0xa9 + panelOffset);
    const synthOffsetAaW = buffer.readUInt16BE(0xaa + panelOffset);
    const synthOffsetAbW = buffer.readUInt16BE(0xab + panelOffset);
    const synthOffsetAc = buffer.readUInt8(0xac + panelOffset);

    const sampleId1 = ((synthOffsetA8W & 0x07f8) >>> 3) * Math.pow(2, 24);
    const sampleId2 = ((synthOffsetA9W & 0x07f8) >>> 3) * Math.pow(2, 16);
    const sampleId3 = ((synthOffsetAaW & 0x07f8) >>> 3) * Math.pow(2, 8);
    const sampleId4 = (synthOffsetAbW & 0x07f8) >>> 3;
    const sampleId = sampleId1 + sampleId2 + sampleId3 + sampleId4;

    const oscillatorType = mapping.ns3SynthOscillatorTypeMap.get((synthOffset8dW & 0x0380) >>> 7);

    let waveForm1 = {
        value: "",
        info: "",
        version: "",
        location: 0,
    };
    switch (oscillatorType) {
        case "Classic":
            waveForm1.location = (synthOffset8eW & 0x01c0) >>> 6;
            waveForm1.value = mapping.ns3SynthOscillator1ClassicWaveTypeMap.get(waveForm1.location);
            break;
        case "Wave":
            waveForm1.location = (synthOffset8eW & 0x0fc0) >>> 6;
            waveForm1.value = mapping.ns3SynthOscillator1WaveWaveTypeMap.get(waveForm1.location);
            break;
        case "Formant":
            waveForm1.location = (synthOffset8eW & 0x03c0) >>> 6;
            waveForm1.value = mapping.ns3SynthOscillator1FormantWaveTypeMap.get(waveForm1.location);
            break;
        case "Super":
            waveForm1.location = (synthOffset8eW & 0x01c0) >>> 6;
            waveForm1.value = mapping.ns3SynthOscillator1SuperWaveTypeMap.get(waveForm1.location);
            break;
        case "Sample":
            const location = (synthOffset8eW & 0x7fc0) >>> 6;
            waveForm1 = getSample(sampleId, 0, location);
            break;
    }

    const oscConfig = mapping.ns3SynthOscillatorsTypeMap.get((synthOffset8f & 0x1e) >>> 1);

    const osc2Pitch = ((synthOffset8fW & 0x01f8) >>> 3) - 12;
    const osc2PitchMidi = Math.ceil(((osc2Pitch + 12) * 127) / (48 + 12));

    const oscModulation = ns3KnobDualValues((synthOffset94W & 0x0fe0) >>> 5);

    const lfoRateMidi = synthOffset87 & 0x7f;
    const lfoRateMasterClock = (synthOffset87 & 0x80) !== 0;

    const envModAttackMidi = (synthOffset8bW & 0xfe00) >>> 9;
    const envModDecayMidi = (synthOffset8bW & 0x01fc) >>> 2;
    const envModReleaseMidi = (synthOffset8cW & 0x03f8) >>> 3;

    const envAmpAttackMidi = (synthOffsetA5W & 0x03f8) >>> 3;
    const envAmpDecayMidi = (synthOffsetA6W & 0x07f0) >>> 4;
    const envAmpReleaseMidi = (synthOffsetA7W & 0x0fe0) >>> 5;

    const arpeggiatorRange = (synthOffset80 & 0x18) >>> 3;
    const arpeggiatorPattern = (synthOffset80 & 0x06) >>> 1;
    const arpeggiatorRateMidi = (synthOffset81 & 0xfe) >>> 1;
    const arpeggiatorMasterClock = (synthOffset80 & 0x01) !== 0;

    const synthEnabled = (synthOffset52W & 0x8000) !== 0;
    const synthKbZoneEnabled =
        id === 0
            ? synthEnabled
            : synthEnabled && (global.dualKeyboard.enabled === false || global.dualKeyboard.value !== "Synth");

    const synthKbZoneValue = (synthOffset52W & 0x7800) >>> 11;
    const synthKbZone = ns3KbZone(synthKbZoneEnabled, global, synthKbZoneValue);

    const synth = {
        debug: {
            sampleId: sampleId.toString(16),
            lib: waveForm1,
        },

        /**
         * Offset in file: 0x52 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Synth On
         */
        enabled: synthEnabled,

        /**
         * Offset in file: 0x52 (b6-3)
         * @see {@link ns3-doc.md#ns3-organ-kb-zone Organ Kb Zone} for detailed explanation.
         *
         * @module NS3 Synth Kb Zone
         */
        kbZone: {
            array: synthKbZone[1],
            value: synthKbZone[0],
        },

        /**
         * Offset in file: 0x52 (b2-0) and 0x53 (b7-4)
         *
         * @example
         *
         * Morph Wheel:
         * 0x53 (b3): polarity (1 = positive, 0 = negative)
         * 0x53 (b2-b0), 0x54 (b7-b4): 7-bit raw value
         *
         * Morph After Touch:
         * 0x54 (b3): polarity (1 = positive, 0 = negative)
         * 0x54 (b2-b0), 0x55 (b7-b4): 7-bit raw value
         *
         * Morph Control Pedal:
         * 0x55 (b3): polarity (1 = positive, 0 = negative)
         * 0x55 (b2-b0), 0x56 (b7-b4): 7-bit raw value
         *
         * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed explanation.
         *
         * @module NS3 Synth Volume
         */
        volume: ns3VolumeEx(buffer, 0x52 + panelOffset),

        /**
         * Offset in file: 0x56 (b3-0)
         *
         * @example
         * Octave Shift = value - 6
         *
         * @module NS3 Synth Octave Shift
         */
        octaveShift: {
            value: (synthOffset56 & 0x0f) - 6,
        },
        /**
         * Offset in file: 0x57 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Synth Pitch Stick
         */
        pitchStick: {
            enabled: (synthOffset57 & 0x80) !== 0,
        },
        //pitchStickRange: mapping.synthPitchShiftRangeMap.get((synthOffset3b & 0xf0) >>> 4),

        /**
         * Offset in file: 0x57 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Synth Sustain Pedal
         */
        sustainPedal: {
            enabled: (synthOffset57 & 0x40) !== 0,
        },
        /**
         * Offset in file: 0x80 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Synth Kb Hold
         */
        keyboardHold: {
            enabled: (synthOffset80 & 0x80) !== 0,
        },
        /**
         * Offset in file: 0x84 (b0) and 0x85 (b7)
         *
         * @example
         * 0 = Poly
         * 1 = Legato
         * 2 = Mono
         *
         * @module NS3 Synth Voice
         */
        voice: {
            value: mapping.ns3SynthVoiceMap.get((synthOffset84W & 0x0180) >>> 7),
        },
        /**
         * Offset in file: 0x85 (b6 to b0) 7 bits, range 0/10
         *
         * @example
         * 0/127 value = 0 / 10
         *
         * @module NS3 Synth Glide
         */
        glide: {
            value: converter.midi2LinearStringValue(0, 10, synthOffset84W & 0x007f, 1, ""),
        },
        /**
         * Offset in file: 0x86 (b7/6)
         *
         * @example
         * 0 = Off
         * 1 = 1
         * 2 = 2
         * 3 = 3
         *
         * @module NS3 Synth Unison
         */
        unison: {
            value: mapping.ns3SynthUnisonMap.get((synthOffset86 & 0xc0) >>> 6),
        },
        /**
         * Offset in file: 0x86 (b5/4/3)
         *
         * @example
         * 0 = Off
         * 1 = Delay 1
         * 2 = Delay 2
         * 3 = Delay 3
         * 4 = Wheel
         * 5 = After Touch
         *
         * @module NS3 Synth Vibrato
         */
        vibrato: {
            value: mapping.ns3SynthVibratoMap.get((synthOffset86 & 0x38) >>> 3),
        },
        /***
         * Synth Oscillators Definition
         */
        oscillators: {
            /**
             * Offset in file: 0x8D (b1/0) and 0x8E (b7)
             *
             * @example
             * 0 = Classic
             * 1 = Wave
             * 2 = Formant
             * 3 = Super
             * 4 = Sample
             *
             * @module NS3 Synth Oscillator Type
             */
            type: {
                value: oscillatorType,
            },
            /**
             * Offset in file: 0x8E (b3-0) and 0x8F (b7/6)
             *
             * @example

             * ID | Classic  | Wave               | Formant         | Super
             * -- | -------- | ------------------ | --------------- | -------------------
             *  O | Sine     | Wave 2nd Harm      | Format Wave Aaa | Super Wave Saw
             *  1 | Triangle | Wave 3rd Harm      | Format Wave Eee | Super Wave Saw 2
             *  2 | Saw      | Wave 4th Harm      | Format Wave Iii | Super Wave Square
             *  3 | Square   | Wave 5th Harm      | Format Wave Ooo | Super Wave Square 2
             *  4 | Pulse 33 | Wave 6th Harm      | Format Wave Uuu | Super Wave Bright
             *  5 | Pulse 10 | Wave 7th Harm      | Format Wave Yyy | Super Wave Bright 2
             *  6 | ESaw     | Wave 8th Harm      | Format Wave AO  | Super Wave Strings
             *  7 | ESquare  | Wave Organ 1       | Format Wave AE  | Super Wave Organ
             *  8 |          | Wave Organ 2       | Format Wave OE  |
             *  9 |          | Wave Principal     |
             * 10 |          | Wave Flute 1       |
             * 11 |          | Wave Flute 2       |
             * 12 |          | Wave Clarinet 1    |
             * 13 |          | Wave Clarinet 2    |
             * 14 |          | Wave Alto Sax      |
             * 15 |          | Wave Tenor Sax     |
             * 16 |          | Wave 2nd Spectra   |
             * 17 |          | Wave 3rd Spectra   |
             * 18 |          | Wave 4th Spectra   |
             * 19 |          | Wave 5th Spectra   |
             * 20 |          | Wave 6th Spectra   |
             * 21 |          | Wave 7th Spectra   |
             * 22 |          | Wave 8th Spectra   |
             * 23 |          | Wave Saw Random    |
             * 24 |          | Wave Saw Bright    |
             * 25 |          | Wave Sqr Bright    |
             * 26 |          | Wave Saw NoFund    |
             * 27 |          | Wave EPiano 1      |
             * 28 |          | Wave EPiano 2      |
             * 29 |          | Wave EPiano 3      |
             * 30 |          | Wave DX 1          |
             * 31 |          | Wave DX 2          |
             * 32 |          | Wave Full Tines    |
             * 33 |          | Wave Ac Piano      |
             * 34 |          | Wave Ice 1         |
             * 35 |          | Wave Ice 2         |
             * 36 |          | Wave Clavinet 1    |
             * 37 |          | Wave Clavinet 2    |
             * 38 |          | Wave Clavinet 3    |
             * 39 |          | Wave Triplets      |
             * 40 |          | Wave Bell          |
             * 41 |          | Wave Bar 1         |
             * 42 |          | Wave Bar 2         |
             * 43 |          | Wave Tines         |
             * 44 |          | Wave Marimba       |
             * 45 |          | Wave Tubular Bells |
             *
             * @module NS3 Synth Oscillator 1 Wave Form
             */
            waveForm1: waveForm1,
            /**
             * Offset in file: 0x8F (b4-1)
             *
             * @example
             *
             * 0 = None
             * 1 = Pitch
             * 2 = Shape
             * 3 = Sync
             * 4 = Detune
             * 5 = MixSin
             * 6 = MixTri
             * 7 = MixSaw
             * 8 = MixSqr
             * 9 = MixBell
             * 10 = MixNs1
             * 11 = MixNs2
             * 12 = FM1
             * 13 = FM2
             * 14 = RM
             *
             * @module NS3 Synth Oscillator Config
             */
            config: {
                value: oscConfig,
            },
            /**
             * Offset in file: 0x90 (b2/1/0) and 0x91 (b7/6/5/4)
             *
             * @example
             * Type                  Midi value conversion
             * Pitch (1)             0/127 => 0/24
             * Shape (2)             0/127 => 0/100 %
             * Sync (3)              0/127 => 0/10
             * Detune (4)            0/127 => 0/4
             * Mix* (5 to 11)        0/127 => 100/0 to 0/100
             * FM & RM (12 to 14)    0/127 => 0/100 %
             *
             * Morph Wheel:
             * 0x91 (b3): polarity (1 = positive, 0 = negative)
             * 0x91 (b2-b0), 0x92 (b7-b4): 7-bit raw value
             *
             * Morph After Touch:
             * 0x92 (b3): polarity (1 = positive, 0 = negative)
             * 0x92 (b2-b0), 0x93 (b7-b4): 7-bit raw value
             *
             * Morph Control Pedal:
             * 0x93 (b3): polarity (1 = positive, 0 = negative)
             * 0x93 (b2-b0), 0x94 (b7-b4): 7-bit raw value
             *
             * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
             *
             * @module NS3 Synth Oscillator Control
             */
            control: ns3OscControl(buffer, 0x90 + panelOffset, oscConfig),

            /**
             * Offset in file: 0x8f (b0) and 0x90 (b7-3)
             *
             * @example
             * Midi value = 6-bit value + b0 forced to zero to have a standard Midi 7-bit value
             * value conversion: -12 (Sub) to +48
             *
             * @module NS3 Synth Pitch
             */
            pitch: {
                /***
                 * Synth Pitch Midi Value
                 */
                midi: osc2PitchMidi,

                /***
                 * Synth Pitch value
                 */
                value: osc2Pitch === -12 ? "Sub" : osc2Pitch + " semi",
            },

            /**
             * Offset in file: 0x94 (b3-0) and 0x95 (b7-5)
             *
             * @example
             * Osc modulation (lfo/env mod) is using this single 7-bit value to define two settings with a single knob.
             * Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
             * 0   = 10.0 (100% left value) 'LFO Amount'
             * 60  = 0.0 for both values
             * 120 = 10.0 (100% right value) 'Mod Env Amount'
             *
             * @module NS3 Synth LFO Mod Env
             */
            modulations: {
                /**
                 * LFO Amount
                 */
                lfoAmount: {
                    midi: oscModulation.leftMidi,
                    value: oscModulation.leftLabel,
                    morph: ns3MorphSynthOscillatorModulation(synthOffset95Ww >>> 5, oscModulation.fromValue, true),
                },
                /**
                 * Env Mod Amount
                 */
                modEnvAmount: {
                    midi: oscModulation.rightMidi,
                    value: oscModulation.rightLabel,
                    morph: ns3MorphSynthOscillatorModulation(synthOffset95Ww >>> 5, oscModulation.fromValue, false),
                },
            },
            /**
             * Offset in file: 0xAC (b2)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Fast Attack
             */
            fastAttack: {
                enabled: (synthOffsetAc & 0x04) !== 0,
            },
        },

        filter: ns3Filter(buffer, panelOffset),

        envelopes: {
            modulation: {
                /**
                 * Offset in file: 0x8B (b7-1)
                 *
                 * @example
                 * 0/127 value = 0.5 ms / 45 s
                 * #include ns3SynthEnvAttackMap
                 *
                 * @module NS3 Synth Mod Env Attack
                 */
                attack: {
                    midi: envModAttackMidi,
                    value: mapping.ns3SynthEnvAttackMap.get(envModAttackMidi),
                },

                /**
                 * Offset in file: 0x8B (b0) and 0x8C (b7-2)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s (Sustain)
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Mod Env Decay
                 */
                decay: {
                    midi: envModDecayMidi,
                    value: synthEnvDecayOrReleaseLabel(envModDecayMidi, "mod.decay"),
                },

                /**
                 * Offset in file: 0x8C (b1-0) and 0x8D (b7-3)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s (Inf)
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Mod Env Release
                 */
                release: {
                    midi: envModReleaseMidi,
                    value: synthEnvDecayOrReleaseLabel(envModReleaseMidi, "mod.release"),
                },

                /**
                 * Offset in file: 0x8D (b2)
                 *
                 * @example
                 * O = off, 1 = on
                 *
                 * @module NS3 Synth Mod Env Velocity
                 */
                velocity: {
                    enabled: (synthOffset8dW & 0x0400) !== 0,
                },
            },
            amplifier: {
                /**
                 * Offset in file: 0xA5 (b1-0) and 0xA6 (b7-3)
                 *
                 * @example
                 * 0/127 value = 0.5 ms / 45 s
                 * #include ns3SynthEnvAttackMap
                 *
                 * @module NS3 Synth Amp Env Attack
                 */
                attack: {
                    midi: envAmpAttackMidi,
                    value: mapping.ns3SynthEnvAttackMap.get(envAmpAttackMidi),
                },

                /**
                 * Offset in file: 0xA6 (b2-0) and 0xA7 (b7-4)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s (Sustain)
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Amp Env Decay
                 */
                decay: {
                    midi: envAmpDecayMidi,
                    value: synthEnvDecayOrReleaseLabel(envAmpDecayMidi, "amp.decay"),
                },

                /**
                 * Offset in file: 0xA7 (b3-0) and 0xA8 (b7-5)
                 *
                 * @example
                 * 0/127 value = 3.0 ms / 45 s
                 * #include ns3SynthEnvDecayOrReleaseMap
                 *
                 * @module NS3 Synth Amp Env Release
                 */
                release: {
                    midi: envAmpReleaseMidi,
                    value: synthEnvDecayOrReleaseLabel(envAmpReleaseMidi, "amp.release"),
                },

                /**
                 * Offset in file: 0xA8 (b4-3)
                 *
                 * @example
                 * 0 = Off
                 * 1 = 1
                 * 2 = 2
                 * 3 = 3
                 *
                 * @module NS3 Synth Amp Env Velocity
                 */
                velocity: {
                    value: mapping.ns3SynthAmpEnvelopeVelocityMap.get((synthOffsetA8 & 0x18) >>> 3),
                },
            },
        },
        lfo: {
            /**
             * Offset in file: 0x86 (b2-0)
             *
             * @example
             * 0 = Triangle
             * 1 = Saw
             * 2 = Neg Saw
             * 3 = Square
             * 4 = S/H
             *
             * @module NS3 Synth Lfo Wave
             */
            wave: {
                value: mapping.ns3SynthLfoWaveMap.get(synthOffset86 & 0x07),
            },
            /**
             * Offset in file: 0x87 (b6-0)
             *
             * @example
             * 0/127 value = 0.03 Hz / 523 Hz
             * #include ns3SynthLfoRateMap
             *
             * if LFO Master Clock is On, 0/127 value = 4/1 to 1/64 Master Clock Division
             * #include ns3SynthLfoRateMasterClockDivisionMap
             *
             * Morph Wheel:
             * 0x88 (b7): polarity (1 = positive, 0 = negative)
             * 0x88 (b6-b0): 7-bit raw value
             *
             * Morph After Touch:
             * 0x89 (b7): polarity (1 = positive, 0 = negative)
             * 0x89 (b6-b0): 7-bit raw value
             *
             * Morph Control Pedal:
             * 0x8A (b7): polarity (1 = positive, 0 = negative)
             * 0x8A (b6-b0): 7-bit raw value
             *
             * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
             *
             * @module NS3 Synth Lfo Rate
             */
            rate: {
                midi: lfoRateMidi,

                value: lfoRateMasterClock
                    ? mapping.ns3SynthLfoRateMasterClockDivisionMap.get(lfoRateMidi)
                    : mapping.ns3SynthLfoRateMap.get(lfoRateMidi),

                morph: ns3Morph(
                    synthOffset87Ww,
                    lfoRateMidi,
                    (x) => {
                        return lfoRateMasterClock
                            ? mapping.ns3SynthLfoRateMasterClockDivisionMap.get(x)
                            : mapping.ns3SynthLfoRateMap.get(x);
                    },
                    false
                ),
            },

            /**
             * Offset in file: 0x87 (b7)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Lfo Master Clock
             */
            masterClock: {
                enabled: lfoRateMasterClock,
            },
        },
        arpeggiator: {
            /**
             * Offset in file: 0x80 (b6)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Arp On
             */
            enabled: (synthOffset80 & 0x40) !== 0,

            /**
             * Offset in file: 0x81 (b7-1)
             *
             * @example
             * 0/127 value = 16 bpm / Fast 5
             * #include ns3SynthArpRateMap
             *
             * if Arpeggiator Master Clock is On, 0/127 value = 1/2 to 1/32 Master Clock Division
             * #include ns3SynthArpMasterClockDivisionMap
             *
             * Morph Wheel:
             * 0x81 (b0): polarity (1 = positive, 0 = negative)
             * 0x82 (b7-b1): 7-bit raw value
             *
             * Morph After Touch:
             * 0x82 (b0): polarity (1 = positive, 0 = negative)
             * 0x83 (b7-b1): 7-bit raw value
             *
             * Morph Control Pedal:
             * 0x83 (b0): polarity (1 = positive, 0 = negative)
             * 0x84 (b7-b1): 7-bit raw value
             *
             * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
             *
             * @module NS3 Synth Arp Rate
             */
            rate: {
                midi: arpeggiatorRateMidi,

                value: arpeggiatorMasterClock
                    ? mapping.ns3SynthArpMasterClockDivisionMap.get(arpeggiatorRateMidi)
                    : mapping.ns3SynthArpRateMap.get(arpeggiatorRateMidi),

                morph: ns3Morph(
                    synthOffset81Ww >>> 1,
                    arpeggiatorRateMidi,
                    (x) => {
                        return arpeggiatorMasterClock
                            ? mapping.ns3SynthArpMasterClockDivisionMap.get(x)
                            : mapping.ns3SynthArpRateMap.get(x);
                    },
                    false
                ),
            },

            /**
             * Offset in file: 0x80 (b5)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Arp Kb Sync
             */
            kbSync: {
                enabled: (synthOffset80 & 0x20) !== 0,
            },
            /**
             * Offset in file: 0x80 (b0)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Synth Arp Master Clock
             */
            masterClock: {
                enabled: arpeggiatorMasterClock,
            },
            /**
             * Offset in file: 0x80 (b4-3)
             *
             * @example
             * 0 = 1 Octave
             * 1 = 2 Octaves
             * 2 = 3 Octaves
             * 3 = 4 Octaves
             *
             * @module NS3 Synth Arp Range
             */
            range: {
                value: mapping.ns3ArpeggiatorRangeMap.get(arpeggiatorRange),
            },
            /**
             * Offset in file: 0x80 (b2-1)
             *
             * @example
             * 0 = Up
             * 1 = Down
             * 2 = Up/Down
             * 3 = Random
             *
             * @module NS3 Synth Arp Pattern
             */
            pattern: {
                value: mapping.ns3ArpeggiatorPatternMap.get(arpeggiatorPattern),
            },
        },
    };

    if (process.env.NODE_ENV === "production") {
        synth.debug = undefined;
    }

    return synth;
};
