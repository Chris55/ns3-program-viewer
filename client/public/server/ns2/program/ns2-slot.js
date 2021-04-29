const {ns2ProgramOutputMap} = require("./ns2-mapping");
const { ns2Effect2 } = require("./ns2-fx-multi-effect-2");
const { ns2Effect1 } = require("./ns2-fx-multi-effect-1");
const { ns2Delay } = require("./ns2-fx-delay");
const { ns2Extern } = require("./ns2-extern");
const { ns2AmpSimEq } = require("./ns2-fx-amp-sim-eq");
const { ns2RotarySpeakerEffect } = require("./ns2-fx-rotary-speaker");
const { ns2Synth } = require("./ns2-synth");
const { ns2Organ } = require("./ns2-organ");
const { ns2Piano } = require("./ns2-piano");

/***
 * returns a complete Slot section
 *
 * @param buffer {Buffer}
 * @param id {number} 0 = A, 1 = B
 * @param versionOffset {number}
 * @param global
 * @returns {{organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, synth: {voice: unknown, oscillators: {control: {midi: number, value: string}, fastAttack: boolean, pitch: {midi: number, value: string}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, value: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, value: unknown}, filter: {highPassCutoffFrequency: {midi: number, value: unknown}, cutoffFrequency: {midi: number, value: unknown}, type: unknown, drive: unknown, resonance: {midi: number, value: string}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, value: string}, velAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, value: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: unknown}}, vibrato: unknown}, piano: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, reverb: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, enabled: boolean}}
 */
exports.ns2Slot = function (buffer, id, versionOffset, global) {
    const panelOffset2e = buffer.readUInt8(0x2e + versionOffset);

    /**
     * Offset in file 0x2e
     *
     * @example
     * Enabled (b6-5):
     * 0 = Slot A
     * 1 = Slot B
     * 2 = Slot A&B with focus Slot A
     * 3 = Slot A&B with focus Slot B
     *
     * Note: if Dual Keyboard is On, both panel are enabled.
     *
     * @module NS2 Slot Enabled And Selection
     */

    const panelEnabledFlag = (panelOffset2e & 0xc0) >>> 6;
    const panelEnabled = global.dualKeyboard.enabled || (id === 0 ? panelEnabledFlag !== 1 : panelEnabledFlag !== 0);

    // all hardcoded offset are for Panel A, offset value is for Panel B
    // versionOffset is added to read older version (header is version 0)

    // 249 (0xf9) is the magic number to shift to slot B
    const commonOffset = versionOffset;
    const panelOffset = id * 249 + versionOffset;

    return {
        enabled: panelEnabled,
        organ: ns2Organ(buffer, id, commonOffset, panelOffset, global),
        piano: ns2Piano(buffer, id, panelOffset, global),
        synth: ns2Synth(buffer, id, panelOffset, global),
        extern: ns2Extern(buffer, panelOffset, global),
        effects: {
            rotarySpeaker: ns2RotarySpeakerEffect(buffer, panelOffset),
            effect1: ns2Effect1(buffer, panelOffset),
            effect2: ns2Effect2(buffer, panelOffset),
            delay: ns2Delay(buffer, panelOffset),
            ampSimEq: ns2AmpSimEq(buffer, panelOffset),
        },
    };
};
