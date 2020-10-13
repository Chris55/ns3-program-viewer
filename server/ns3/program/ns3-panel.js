const {ns3AmpSimEq} = require("./ns3-fx-amp-sim-eq");
const {ns3Compressor} = require("./ns3-fx-compressor");
const {ns3Delay} = require("./ns3-fx-delay");
const {ns3Effect2} = require("./ns3-fx-multi-effect-2");
const {ns3Effect1} = require("./ns3-fx-muli-effect-1");
const {ns3RotarySpeakerEffect} = require("./ns3-fx-rotary-speaker");
const { ns3Reverb } = require("./ns3-fx-reverb");
const { ns3Extern } = require("./ns3-extern");
const { ns3Synth } = require("./ns3-synth");
const { ns3Piano } = require("./ns3-piano");
const { ns3Organ } = require("./ns3-organ");

/***
 * returns a complete Panel section
 *
 * @param buffer {Buffer}
 * @param id {number} 0 = A, 1 = B
 * @param versionOffset {number}
 * @param global
 * @returns {{organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, synth: {voice: unknown, oscillators: {control: {midi: number, value: string}, fastAttack: boolean, pitch: {midi: number, value: string}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, value: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, value: unknown}, filter: {highPassCutoffFrequency: {midi: number, value: unknown}, cutoffFrequency: {midi: number, value: unknown}, type: unknown, drive: unknown, resonance: {midi: number, value: string}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, value: string}, velAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, value: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: unknown}}, vibrato: unknown}, piano: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, reverb: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, enabled: boolean}}
 */

exports.ns3Panel = function (buffer, id, versionOffset, global) {
    const panelOffset31 = buffer.readUInt8(0x31 + versionOffset);

    /**
     * Offset in file 0x31
     *
     * @example
     * Enabled (b6-5):
     * 0 = A only
     * 1 = B only
     * 2 = A & B
     *
     * Selected Panel (b7):
     * A = 0, B = 1 (not used here)
     *
     * Note: if Dual Keyboard is On, both panel are enabled.
     *
     * @module NS3 Panel Enabled And Selection
     */

    const panelEnabledFlag = (panelOffset31 & 0x60) >>> 5;
    const panelEnabled =
        global.dualKeyboard.enabled ||
        (id === 0
            ? panelEnabledFlag === 0 || panelEnabledFlag === 2
            : panelEnabledFlag === 1 || panelEnabledFlag === 2);

    // all hardcoded offset are for Panel A, offset value is for Panel B
    // versionOffset is added to read older version (header is version 0)

    const panelOffset = id * 263 + versionOffset;

    return {
        enabled: panelEnabled,
        organ: ns3Organ(buffer, id, panelOffset, global),
        piano: ns3Piano(buffer, id, panelOffset, global),
        synth: ns3Synth(buffer, id, panelOffset, global),
        extern: ns3Extern(buffer, panelOffset, global),
        effects: {
            rotarySpeaker: ns3RotarySpeakerEffect(buffer, panelOffset),
            effect1: ns3Effect1(buffer, panelOffset),
            effect2: ns3Effect2(buffer, panelOffset),
            delay: ns3Delay(buffer, panelOffset),
            ampSimEq: ns3AmpSimEq(buffer, panelOffset),
            compressor: ns3Compressor(buffer, panelOffset),
            reverb: ns3Reverb(buffer, panelOffset),
        },
    };
};
