const {getReverb} = require("./ns3-effects");
const {getCompressor} = require("./ns3-effects");
const { getExtern } = require("./ns3-extern");
const { getEffect2 } = require("./ns3-effects");
const { getEffect1 } = require("./ns3-effects");
const { getRotarySpeakerEffect } = require("./ns3-effects");
const { getSynth } = require("./ns3-synth");
const { getPiano } = require("./ns3-piano");
const { getOrgan } = require("./ns3-organ");

/**
 * returns a complete Panel section
 *
 * @param buffer {Buffer}
 * @param id
 * @param splitEnabled
 * @param versionOffset
 * @returns {{organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, synth: {voice: unknown, oscillators: {control: {midi: number, value: string}, fastAttack: boolean, pitch: {midi: number, value: string}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, value: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, value: unknown}, filter: {highPassCutoffFrequency: {midi: number, value: unknown}, cutoffFrequency: {midi: number, value: unknown}, type: unknown, drive: unknown, resonance: {midi: number, value: string}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, value: string}, velAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, value: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: unknown}}, vibrato: unknown}, piano: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, reverb: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, enabled: boolean}}
 */
exports.getPanel = function (buffer, id, splitEnabled, versionOffset) {
    const panelOffset31 = buffer.readUInt8(0x31 + versionOffset);

    /**
     * Offset in file 0x31
     *
     * @example
     * Enabled (b5 & b6):
     * 0 = A only
     * 1 = B only
     * 2 = A & B
     *
     * Selected Panel (b7):
     * A = 0, B = 1 (not used here)
     *
     * @module Panel Enabled And Selection
     */

    const panelEnabledFlag = (panelOffset31 & 0x60) >>> 5;
    const panelEnabled =
        id === 0 ? panelEnabledFlag === 0 || panelEnabledFlag === 2 : panelEnabledFlag === 1 || panelEnabledFlag === 2;

    // all hardcoded offset are for Panel A, offset value is for Panel B
    // versionOffset is added to read older version v3.00 to v3.03

    const panelOffset = (id * 263) + versionOffset;

    return {
        enabled: panelEnabled,
        organ: getOrgan(buffer, panelOffset, splitEnabled),
        piano: getPiano(buffer, panelOffset, splitEnabled),
        synth: getSynth(buffer, panelOffset, splitEnabled),
        extern: getExtern(buffer, panelOffset, splitEnabled),
        effects: {
            rotarySpeaker: getRotarySpeakerEffect(buffer, panelOffset),
            effect1: getEffect1(buffer, panelOffset),
            effect2: getEffect2(buffer, panelOffset),
            // delay: {},
            // ampSimEq: {},
            compressor: getCompressor(buffer, panelOffset),
            reverb: getReverb(buffer, panelOffset),
        },
    };
};
