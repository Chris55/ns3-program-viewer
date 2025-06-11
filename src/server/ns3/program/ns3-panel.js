import { ns3Organ } from "./ns3-organ";
import { ns3Piano } from "./ns3-piano";
import { ns3Synth } from "./ns3-synth";
import { ns3Extern } from "./ns3-extern";
import { ns3Reverb } from "./ns3-fx-reverb";
import { ns3RotarySpeakerEffect } from "./ns3-fx-rotary-speaker";
import { ns3Effect1 } from "./ns3-fx-multi-effect-1";
import { ns3Effect2 } from "./ns3-fx-multi-effect-2";
import { ns3Delay } from "./ns3-fx-delay";
import { ns3Compressor } from "./ns3-fx-compressor";
import { ns3AmpSimEq } from "./ns3-fx-amp-sim-eq";
import { ns3ProgramOutputMap, ns3ProgramOutputSourceMap } from "./ns3-mapping";

/***
 * returns a complete Panel section
 *
 * @param buffer {Buffer}
 * @param id {number} 0 = A, 1 = B
 * @param versionOffset {number}
 * @param global
 * @returns {{organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, synth: {voice: unknown, oscillators: {control: {midi: number, value: string}, fastAttack: boolean, pitch: {midi: number, value: string}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, value: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, value: unknown}, filter: {highPassCutoffFrequency: {midi: number, value: unknown}, cutoffFrequency: {midi: number, value: unknown}, type: unknown, drive: unknown, resonance: {midi: number, value: string}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, value: string}, velAmount: {midi: number, value: string}, modEnvAmount: {midi: number, value: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, value: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, value: unknown}, release: {midi: number, value: (string|*)}, decay: {midi: number, value: (string|*)}, velocity: unknown}}, vibrato: unknown}, piano: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, reverb: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}, enabled: boolean}}
 */

const ns3Panel = function (buffer, id, versionOffset, global) {
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
    const offset144 = buffer.readUInt8(0x144 + panelOffset);

    const outputMain = (offset144 & 0xe0) >>> 5;
    const outputSubSource = (offset144 & 0x18) >>> 3;
    const outputSubDestination = (offset144 & 0x06) >>> 1;

    const output = {
        /**
         * Offset in file 0x144 (b7-5)
         *
         * @example
         * #include ns3ProgramOutputMap
         *
         * @module NS3 Program Output Main
         */
        main: {
            value: ns3ProgramOutputMap.get(outputMain),
            isDefault: outputMain === 0,
        },

        /**
         * Offset in file 0x144 (b4-3)
         *
         * @example
         * #include ns3ProgramOutputSourceMap
         *
         * @module NS3 Program Output Sub Source
         */
        subSource: {
            value: ns3ProgramOutputSourceMap.get(outputSubSource),
            isDefault: outputSubSource === 0,
        },

        /**
         * Offset in file 0x144 (b2-1)
         *
         * @example
         * #include ns3ProgramOutputMap
         *
         * @module NS3 Program Output Sub Destination
         */
        subDestination: {
            value: ns3ProgramOutputMap.get(outputSubDestination),
            isDefault: outputSubDestination === 1,
        },
    };

    return {
        enabled: panelEnabled,
        organ: ns3Organ(buffer, id, panelOffset, global),
        piano: ns3Piano(buffer, id, panelOffset, global),
        synth: ns3Synth(buffer, id, panelOffset, global, false),
        extern: ns3Extern(buffer, panelOffset, global),
        effects: {
            rotarySpeaker: ns3RotarySpeakerEffect(buffer, panelOffset),
            effect1: ns3Effect1(buffer, panelOffset),
            effect2: ns3Effect2(buffer, panelOffset),
            delay: ns3Delay(buffer, panelOffset, global),
            ampSimEq: ns3AmpSimEq(buffer, panelOffset),
            compressor: ns3Compressor(buffer, panelOffset),
            reverb: ns3Reverb(buffer, panelOffset),
        },
        output,
    };
};

export { ns3Panel };
