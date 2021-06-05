const mapping3 = require("../../ns3/program/ns3-mapping");
const converter = require("../../common/converter");
const mapping = require("./ns2-mapping");
const { ns2ProgramOutputMap } = require("./ns2-mapping");
const { ns2Filter } = require("./ns2-synth-filter");
const { ns2OscShape } = require("./ns2-synth-osc-shape");
const { ns2KbZone } = require("./ns2-utils");
const { ns2VolumeEx } = require("./ns2-utils");
const { getSampleIdNs2ToNs3 } = require("../../library/ns3-library-service");
const { ns3SynthPreset } = require("../../ns3/program/ns3-utils");
const { getSample } = require("../../library/ns3-library-service");

/***
 * Synth Envelope Decay / Release value
 * @param value
 * @param type
 * @returns {string}
 */
const synthEnvDecayOrReleaseLabel = function (value, type) {
    switch (type) {
        case "mod.decay": {
            //if (value === 127) return "Sustain";
            //else
            return mapping.ns2SynthEnvDecayMap.get(value);
        }
        case "mod.release": {
            //if (value === 127) return "Inf";
            //else
            return mapping.ns2SynthEnvDecayMap.get(value);
        }
        case "amp.decay": {
            //if (value === 127) return "Sustain";
            //else
            return mapping.ns2SynthEnvDecayMap.get(value);
        }
        case "amp.release": {
            return mapping.ns2SynthEnvReleaseMap.get(value);
        }
    }
    return "";
};

/***
 * returns Synth section
 *
 * @param buffer {Buffer}
 * @param id {number}
 * @param slotOffset {number}
 * @param global
 * @returns {{voice: {value: string}, oscillators: {skipSampleAttack: {enabled: boolean}, type: {value: string}, waveForm1: {valid: boolean, filename: string, location: number, value: string, version: string, info: string}, shapeCtrl: {midi: number, value: string, morph: {afterTouch: {to: {midi: ({midi: *, value: string}|string), value: string}, enabled: boolean}, controlPedal: {to: {midi: ({midi: *, value: string}|string), value: string}, enabled: boolean}, wheel: {to: {midi: ({midi: *, value: string}|string), value: string}, enabled: boolean}}}, shapeMod: {midi: number, label: (string), value: string}}, debug: {lib: {valid: boolean, filename: string, location: number, value: string, version: string, info: string}, sampleId: string, preset: {userPresetLocation: number, samplePresetLocation: number, presetName: string}}, unison: {value: string}, arpeggiator: {rate: {midi: number, value: string}, masterClock: {enabled: boolean}, pattern: {value: string}, range: {value: string}, enabled: boolean}, kbZone: {array, value}, sustainPedal: {enabled: boolean}, keyboardHold: {enabled: boolean}, octaveShift: {value: number}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, filter: {type: {value: string}, resonance: {midi: number, value: string}, kbTrack: {enabled: boolean}, modulations: {mod2: {midi: number, label: string, value: string}, mod1: {midi: number, value: string}}, frequency: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}, output: {value: string}, pitchStick: {enabled: boolean}, lfo: {rate: {midi: number, value: string}, masterClock: {enabled: boolean}, wave: {value: string}}, glide: {value: string}, envelopes: {modulation: {attack: {midi: number, value: string}, release: {midi: number, value: string}, decay: {midi: number, value: string}, velocity: {enabled: boolean}}, amplifier: {attack: {midi: number, value: string}, release: {midi: number, value: string}, decay: {midi: number, value: string}, velocity: {enabled: boolean}}}, latchPedal: {enabled: boolean}, kbGate: {enabled: boolean}, vibrato: {value: string}}}
 */
exports.ns2Synth = (buffer, id, slotOffset, global) => {
    const synthOffset4d = buffer.readUInt8(0x4d + slotOffset);
    const synthOffset4dWw = buffer.readUInt32BE(0x4d + slotOffset);
    const synthOffset50W = buffer.readUInt16BE(0x50 + slotOffset);
    const synthOffset51 = buffer.readUInt8(0x51 + slotOffset);
    const synthOffset52 = buffer.readUInt8(0x52 + slotOffset);
    const synthOffset59 = buffer.readUInt8(0x59 + slotOffset);
    const synthOffset5a = buffer.readUInt8(0x5a + slotOffset);
    const synthOffsetD9 = buffer.readUInt8(0xd9 + slotOffset);
    const synthOffsetDaW = buffer.readUInt16BE(0xda + slotOffset);
    const synthOffsetDbW = buffer.readUInt16BE(0xdb + slotOffset);
    const synthOffsetDc = buffer.readUInt8(0xdc + slotOffset);
    const synthOffsetDfW = buffer.readUInt16BE(0xdf + slotOffset);
    const synthOffsetE0W = buffer.readUInt16BE(0xe0 + slotOffset);
    const synthOffsetE1W = buffer.readUInt16BE(0xe1 + slotOffset);
    const synthOffsetE2W = buffer.readUInt16BE(0xe2 + slotOffset);
    const synthOffsetE7W = buffer.readUInt16BE(0xe7 + slotOffset);
    const synthOffsetEc = buffer.readUInt8(0xec + slotOffset);
    const synthOffsetF3W = buffer.readUInt16BE(0xf3 + slotOffset);
    const synthOffsetF4W = buffer.readUInt16BE(0xf4 + slotOffset);
    const synthOffsetF5W = buffer.readUInt16BE(0xf5 + slotOffset);
    const synthOffsetF6W = buffer.readUInt16BE(0xf6 + slotOffset);
    const synthOffsetF7 = buffer.readUInt8(0xf7 + slotOffset);
    const synthOffsetFbW = buffer.readUInt16BE(0xfb + slotOffset);
    const synthOffsetFcW = buffer.readUInt16BE(0xfc + slotOffset);

    const synthOffsetF4WW = buffer.readBigUInt64BE(0xf4 + slotOffset);

    /**
     * Offset in file: 0xf7 (b1-0) to 0xfb (b7-2)
     *
     *  @example
     *  32-bit synth sample hash code.
     *
     * @module NS2 Synth Sample ID
     */
    const synthNs2SampleId = BigInt((synthOffsetF4WW & 0x03fffffffcn) >> 2n);
    const sampleId = getSampleIdNs2ToNs3(synthNs2SampleId);

    const oscillatorType = mapping.ns2SynthOscillatorTypeMap.get((synthOffsetE1W & 0x0380) >>> 7);

    let waveForm = {
        valid: false,
        value: "",
        info: "",
        version: "",
        location: (synthOffsetE2W & 0x7fe0) >>> 5,
        filename: "",
    };

    const buildWaveFormLabel = (ot, items) => {
        const valid = items !== undefined && items.length === 2;
        let value = "";
        if (valid) {
            // 0 is the LCD, 1 is main display
            if (items[0] !== items[1]) {
                value += items[1] + " (" + items[0] + ")";
            } else {
                value += items[0];
            }
        } else {
            value += "??";
        }
        return {
            valid, value,
        }
    }

    switch (oscillatorType) {
        case "TRI": {
            const items = mapping.ns2SynthOscillatorTriStyleWaveFormsMap.get(waveForm.location);
            const label = buildWaveFormLabel(oscillatorType, items);
            waveForm.valid = label.valid;
            waveForm.value = label.value;
            break;
        }
        case "SAW": {
            const items = mapping.ns2SynthOscillatorSawStyleWaveFormsMap.get(waveForm.location);
            const label = buildWaveFormLabel(oscillatorType, items);
            waveForm.valid = label.valid;
            waveForm.value = label.value;
            break;
        }
        case "PULSE": {
            const items = mapping.ns2SynthOscillatorPulseStyleWaveFormsMap.get(waveForm.location);
            const label = buildWaveFormLabel(oscillatorType, items);
            waveForm.valid = label.valid;
            waveForm.value = label.value;
            break;
        }
        case "SAMPLE": {
            waveForm = getSample(sampleId, 0, waveForm.location);
            if (waveForm.version.startsWith("v3.")) {
                waveForm.version = waveForm.version.replace("v3.", "v2.");
            }
            break;
        }
        case "FM": {
            const items = mapping.ns2SynthOscillatorFmStyleWaveFormsMap.get(waveForm.location);
            const label = buildWaveFormLabel(oscillatorType, items);
            waveForm.valid = label.valid;
            waveForm.value = "FM " + label.value;
            break;
        }
        case "WAVE": {
            const items = mapping.ns2SynthOscillatorWaveStyleWaveFormsMap.get(waveForm.location);
            const label = buildWaveFormLabel(oscillatorType, items);
            waveForm.valid = label.valid;
            waveForm.value = "Wavetable " + label.value;
            break;
        }
    }

    const oscModMidi = (synthOffsetE7W & 0x3f80) >>> 7;

    const lfoRateMasterClock = (synthOffsetDc & 0x40) !== 0;
    const lfoRateMidi = lfoRateMasterClock ? (synthOffsetDc & 0x3c) >>> 2 : (synthOffsetF6W & 0x07f0) >>> 4;

    const envModAttackMidi = (synthOffsetDfW & 0xfe00) >>> 9;
    const envModDecayMidi = (synthOffsetDfW & 0x01fc) >>> 2;
    const envModReleaseMidi = (synthOffsetE0W & 0x03f8) >>> 3;

    const envAmpAttackMidi = (synthOffsetF3W & 0x01fc) >>> 2;
    const envAmpDecayMidi = (synthOffsetF4W & 0x03f8) >>> 3;
    const envAmpReleaseMidi = (synthOffsetF5W & 0x07f0) >>> 4;

    const arpeggiatorMasterClock = (synthOffsetDaW & 0x8000) !== 0;
    const arpeggiatorRateMidi = arpeggiatorMasterClock
        ? (synthOffsetDaW & 0x7800) >>> 11
        : (synthOffsetDaW & 0x03f8) >>> 3;
    const arpeggiatorPattern = (synthOffsetDbW & 0x0600) >>> 9;
    const arpeggiatorRange = (synthOffsetDbW & 0x0180) >>> 7;

    const synthEnabled = (synthOffset4d & 0x40) !== 0;
    const synthKbZoneEnabled =
        id === 0
            ? synthEnabled
            : synthEnabled && (global.dualKeyboard.enabled === false || global.dualKeyboard.value !== "Synth");

    const synthKbZoneValue = (synthOffset51 & 0x70) >>> 4;
    const synthKbZone = ns2KbZone(synthKbZoneEnabled, global, synthKbZoneValue);
    const preset = ns3SynthPreset(buffer, 0x57 + slotOffset);

    const synth = {
        debug: {
            sampleId: sampleId.toString(16),
            lib: waveForm,
            preset: preset,
        },

        /**
         * Offset in file: 0x4d (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth On
         */
        enabled: synthEnabled,

        /**
         * Offset in file: 0x51 (b6-4)
         *
         * @example
         * 0 = LO
         * 1 = LO UP
         * 2 = UP
         * 3 = UP HI
         * 4 = HI
         * 5 = LO UP HI
         *
         * @module NS2 Synth Kb Zone
         */
        kbZone: {
            array: synthKbZone[1],
            value: synthKbZone[0],
        },

        /**
         * Offset in file: 0x50 (b5-0) and 0x51 (b7)
         *
         * @example
         *
         * Morph Wheel:
         * offset in file 0x4d (b5-0) 0x4e (b7-6)
         *
         * Morph After Touch:
         * offset in file 0x4e (b5-0) 0x4f (b7-6)
         *
         * Morph Control Pedal:
         * offset in file 0x4f (b5-0) 0x50 (b7-6)
         *
         * @module NS2 Synth Volume
         */
        volume: ns2VolumeEx(buffer, (synthOffset50W & 0x3f80) >>> 7, synthOffset4dWw >>> 6),

        /**
         * Offset in file: 0x51 (b3-0)
         *
         * @example
         * Octave Shift = value - 7
         *
         * @module NS2 Synth Octave Shift
         */
        octaveShift: {
            value: (synthOffset51 & 0x0f) - 7,
        },
        /**
         * Offset in file: 0x52 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Pitch Stick
         */
        pitchStick: {
            enabled: (synthOffset52 & 0x80) !== 0,
        },
        /**
         * Offset in file: 0x52 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Sustain Pedal
         */
        sustainPedal: {
            enabled: (synthOffset52 & 0x40) !== 0,
        },
        /**
         * Offset in file: 0x5a (b5)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Latch Pedal
         */
        latchPedal: {
            enabled: (synthOffset5a & 0x20) !== 0,
        },
        /**
         * Offset in file: 0x5a (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Kb Gate
         */
        kbGate: {
            enabled: (synthOffset5a & 0x10) !== 0,
        },
        /**
         * Offset in file: 0xdc (b1)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Synth Kb Hold
         */
        keyboardHold: {
            enabled: (synthOffsetDc & 0x02) !== 0,
        },
        /**
         * Offset in file: 0xfc (b2-1)
         *
         * @example
         * #include ns2SynthVoiceMap
         *
         * @module NS2 Synth Voice
         */
        voice: {
            value: mapping.ns2SynthVoiceMap.get((synthOffsetFcW & 0x0600) >>> 9),
        },
        /**
         * Offset in file: 0xfb (b1-0) and 0xfc (b7-3)
         *
         * @example
         * 0/127 value = 0 / 10
         *
         * @module NS2 Synth Glide
         */
        glide: {
            value: converter.midi2LinearStringValue(0, 10, (synthOffsetFbW & 0x03f8) >>> 3, 1, ""),
        },
        /**
         * Offset in file: 0xfc (b0) and 0xfd (b7-6)
         *
         * @example
         * #include ns2SynthUnisonMap
         *
         * @module NS2 Synth Unison
         */
        unison: {
            value: mapping.ns2SynthUnisonMap.get((synthOffsetFcW & 0x01c0) >>> 6),
        },
        /**
         * Offset in file: 0xfd (b5-3)
         *
         * @example
         * #include ns2SynthVibratoMap
         *
         * @module NS2 Synth Vibrato
         */
        vibrato: {
            value: mapping.ns2SynthVibratoMap.get((synthOffsetFcW & 0x0038) >>> 3),
        },
        /***
         * Synth Oscillators Definition
         */
        oscillators: {
            /**
             * Offset in file: 0xe1 (b1-0) and 0xe2               (b7)
             *
             * @example
             * #include ns2SynthOscillatorTypeMap
             *
             * @module NS2 Synth Osc Mode
             */
            type: {
                value: oscillatorType,
            },
            /**
             * Offset in file: 0xe2 (b6-0) and 0xe3               (b7-5)
             *
             * @example
             *
             * TRI:
             * #include ns2SynthOscillatorTriStyleWaveFormsMap
             *
             * SAW:
             * #include ns2SynthOscillatorSawStyleWaveFormsMap
             *
             * PULSE:
             * #include ns2SynthOscillatorPulseStyleWaveFormsMap
             *
             * FM:
             * #include ns2SynthOscillatorFmStyleWaveFormsMap
             *
             * WAVE:
             * #include ns2SynthOscillatorWaveStyleWaveFormsMap
             *
             * @module NS2 Synth Osc WaveForm
             */
            waveForm1: waveForm,
            /**
             * Offset in file: 0xe6 (b4-0) and 0xe7 (7-6)
             *
             * @example
             * 0/127 value = 0 / 10
             *
             * Morph Wheel:
             * Offset in file 0xe3 (b4-0) 0xe4 (b7-5)
             *
             * Morph After Touch:
             * Offset in file 0xe4 (b4-0) 0xe5 (b7-5)
             *
             * Morph Control Pedal:
             * Offset in file 0xe5 (b4-0) 0xe6 (b7-5)
             *
             * @module NS2 Synth Shape
             */
            shapeCtrl: ns2OscShape(buffer, slotOffset),

            /**
             * Offset in file: 0xe7 (b5-0) and 0xe8 (b7)
             *
             * @example
             * LFO from 0-63
             * MOD ENV from 64-127
             *
             * @module NS2 Synth Shape Mod
             */
            shapeMod: {
                /***
                 * Synth Shape Mod Midi Value
                 */
                midi: oscModMidi,

                /***
                 * Synth Shape Mod Value
                 */
                value: mapping.ns2SynthOscillatorShapeModMap.get(oscModMidi),

                label:
                    oscModMidi === 63 || oscModMidi === 64
                        ? "LFO/Env AMT"
                        : oscModMidi < 64
                        ? "LFO AMT"
                        : "Mod Env AMT",
            },
            /**
             * Offset in file: 0xec (b1)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Synth Skip Sample Attack
             */
            skipSampleAttack: {
                enabled: oscillatorType === "SAMPLE" && (synthOffsetEc & 2) !== 0,
            },
        },

        filter: ns2Filter(buffer, slotOffset),

        envelopes: {
            modulation: {
                /**
                 * Offset in file: 0xdf (b7-1)
                 *
                 * @example
                 * #include ns2SynthEnvAttackMap
                 *
                 * @module NS2 Synth Mod Env Attack
                 */
                attack: {
                    midi: envModAttackMidi,
                    value: mapping.ns2SynthEnvAttackMap.get(envModAttackMidi),
                },

                /**
                 * Offset in file: 0xdf (b0) and 0xe0 (b7-2)
                 *
                 * @example
                 * #include ns2SynthEnvDecayMap
                 *
                 * @module NS2 Synth Mod Env Decay
                 */
                decay: {
                    midi: envModDecayMidi,
                    value: synthEnvDecayOrReleaseLabel(envModDecayMidi, "mod.decay"),
                },

                /**
                 * Offset in file: 0xe0 (b1-0) and 0xe1 (b7-3)
                 *
                 * @example
                 * #include ns2SynthEnvReleaseMap
                 *
                 * @module NS2 Synth Mod Env Release
                 */
                release: {
                    midi: envModReleaseMidi,
                    value: synthEnvDecayOrReleaseLabel(envModReleaseMidi, "mod.release"),
                },

                /**
                 * Offset in file: 0xe1 (b2)
                 *
                 * @example
                 * O = off, 1 = on
                 *
                 * @module NS2 Synth Mod Env Velocity
                 */
                velocity: {
                    enabled: (synthOffsetE1W & 0x0400) !== 0,
                },
            },
            amplifier: {
                /**
                 * Offset in file: 0xf3 (b0) and 0xf4 (b7-2)
                 *
                 * @example
                 * #include ns2SynthEnvAttackMap
                 *
                 * @module NS2 Synth Amp Env Attack
                 */
                attack: {
                    midi: envAmpAttackMidi,
                    value: mapping.ns2SynthEnvAttackMap.get(envAmpAttackMidi),
                },

                /**
                 * Offset in file: 0xf4 (b1-0) and 0xf5 (b7-3)
                 *
                 * @example
                 * #include ns2SynthEnvDecayMap
                 *
                 * @module NS2 Synth Amp Env Decay
                 */
                decay: {
                    midi: envAmpDecayMidi,
                    value: synthEnvDecayOrReleaseLabel(envAmpDecayMidi, "amp.decay"),
                },

                /**
                 * Offset in file: 0xf5 (b2-0) and 0xf6 (b7-4)
                 *
                 * @example
                 * #include ns2SynthEnvReleaseMap
                 *
                 * @module NS2 Synth Amp Env Release
                 */
                release: {
                    midi: envAmpReleaseMidi,
                    value: synthEnvDecayOrReleaseLabel(envAmpReleaseMidi, "amp.release"),
                },

                /**
                 * Offset in file: 0xf6 (b3)
                 *
                 * @example
                 * O = off, 1 = on
                 *
                 * @module NS2 Synth Amp Env Velocity
                 */
                velocity: {
                    enabled: (synthOffsetF6W & 0x0800) !== 0,
                },
            },
        },
        lfo: {
            /**
             * Offset in file: 0xf7 (b3-2)
             *
             * @example
             * #include ns2SynthLfoWaveMap
             *
             * @module NS2 Synth Lfo Wave
             */
            wave: {
                value: mapping.ns2SynthLfoWaveMap.get((synthOffsetF7 & 0x0c) >>> 2),
            },
            /**
             * @example
             * Offset in file: 0xdc (b5-2) (if LFO MST CLOCK = ON)
             *
             * #include ns2SynthLfoRateMasterClockDivisionMap
             *
             * Offset in file: 0xf6 (b2-0) 0xf7 (b7-4) (if LFO MST CLOCK = OFF)
             *
             * #include ns2SynthLfoRateMap
             *
             *
             * @module NS2 Synth Lfo Rate
             */
            rate: {
                midi: lfoRateMidi,

                value: lfoRateMasterClock
                    ? mapping.ns2SynthLfoRateMasterClockDivisionMap.get(lfoRateMidi)
                    : mapping.ns2SynthLfoRateMap.get(lfoRateMidi),
            },

            /**
             * Offset in file: 0xdc (b6)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Synth Lfo Master Clock
             */
            masterClock: {
                enabled: lfoRateMasterClock,
            },
        },

        arpeggiator: {
            /**
             * Offset in file: 0xd9 (b0)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Synth Arp On
             */
            enabled: (synthOffsetD9 & 0x01) !== 0,

            /**
             * @example
             * Offset in file: 0xda (b6-3) (if MST CLK is ON)
             * #include ns2SynthArpMasterClockDivisionMap
             *
             * Offset in file: 0xda (b1-0) and 0xdb (b7-3) (if MST CLK is OFF)
             * #include ns2SynthArpRateMap
             *
             * @module NS2 Synth Arp Rate
             */
            rate: {
                midi: arpeggiatorRateMidi,

                value: arpeggiatorMasterClock
                    ? mapping.ns2SynthArpMasterClockDivisionMap.get(arpeggiatorRateMidi)
                    : mapping.ns2SynthArpRateMap.get(arpeggiatorRateMidi),
            },

            /**
             * Offset in file: 0xda (b7)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Synth Arp Master Clock
             */
            masterClock: {
                enabled: arpeggiatorMasterClock,
            },
            /**
             * Offset in file: 0xdb (b0) and 0xdc (b7)
             *
             * @example
             * #include ns2ArpeggiatorRangeMap
             *
             * @module NS2 Synth Arp Range
             */
            range: {
                value: mapping.ns2ArpeggiatorRangeMap.get(arpeggiatorRange),
            },
            /**
             * Offset in file: 0xdb (b2-1)
             *
             * @example
             * #include ns2ArpeggiatorPatternMap
             *
             * @module NS2 Synth Arp Pattern
             */
            pattern: {
                value: mapping.ns2ArpeggiatorPatternMap.get(arpeggiatorPattern),
            },
        },

        /**
         * Offset in file 0x59 (b5-6)
         *
         * @example
         * #include ns2ProgramOutputMap
         *
         * @module NS2 Synth Program Output
         */
        output: {
            value: ns2ProgramOutputMap.get((synthOffset59 & 0x60) >>> 5),
        },
    };

    if (process.env.NODE_ENV === "production") {
        synth.debug = undefined;
    }

    return synth;
};
