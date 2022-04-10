const path = require("path");
const { getName, checkHeader } = require("../../common/converter");
const { nla1ProgramLocation } = require("./nla1-utils");
const { nordFileExtMap, programCategoryMap } = require("../../common/nord-mapping");
const { nla1Reverb } = require("./nla1-fx-reverb");

/***
 * returns Nord Lead A1 program data
 *
 * @param buffer {Buffer}
 * @param filename
 * @returns {{WeakMap: WeakMapConstructor, ReferenceError: typeof ReferenceError, Uint16Array: typeof Uint16Array, URIError: typeof URIError, WeakSet: WeakSetConstructor, queueMicrotask: typeof queueMicrotask, String: typeof String, Float64Array: typeof Float64Array, Math: typeof Math, isNaN: typeof isNaN, clearImmediate: {(immediateId: NodeJS.Immediate): void, (immediateId: NodeJS.Immediate): void, (immediateId: NodeJS.Immediate): void, (immediateId: NodeJS.Immediate): void}, encodeURI: typeof encodeURI, panelA: {organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: ValidationOptions.unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, output: {subSource: {isDefault: boolean, value: string}, main: {isDefault: boolean, value: string}, subDestination: {isDefault: boolean, value: string}}, synth: {voice: {value: *}, oscillators: {control: *, fastAttack: {enabled: boolean}, pitch: {midi: *, value: string}, type: {value: *}, waveForm1: *, config: {value: *}, modulations: {lfoAmount: {midi: *, morph: *, value: *}, modEnvAmount: {midi: *, morph: *, value: *}}}, debug: {lib: {valid: boolean, location: number, value: string, version: string, info: string}, sampleId: string, preset: {userPresetLocation: number, samplePresetLocation: number, presetName: string}}, unison: {value: *}, arpeggiator: {kbSync: {enabled: boolean}, rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, pattern: {value: *}, range: {value: *}, enabled: boolean}, kbZone: {array: (string|string[]|boolean[]), value: (string|string[]|boolean[])}, sustainPedal: {enabled: boolean}, keyboardHold: {enabled: boolean}, preset: *, octaveShift: {value: number}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, filter: *, pitchStick: {enabled: boolean}, lfo: {rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, wave: {value: *}}, glide: {value: *}, envelopes: {modulation: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {enabled: boolean}}, amplifier: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {value: *}}}, vibrato: {value: *}}, piano: {kbTouch: {isDefault: boolean, value: string}, debug: {lib: {size: string, value: (string|*), version: string, info: string}, sampleId: string, sampleVariation: number}, kbZone: {array, value}, softRelease: {midi: number, isDefault: boolean, enabled}, sustainPedal: {midi: number, isDefault: boolean, enabled}, type: {isDefault: boolean, value: string}, octaveShift: {midi, isDefault: boolean, value: string}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: {isDefault: boolean, value: string}, pitchStick: {midi: number, isDefault: boolean, enabled}, stringResonance: {midi: number, isDefault: boolean, enabled}, name: {size: string, value: (string|*), version: string, info: string}, model: {isDefault: boolean, value: number}, pedalNoise: {midi: number, isDefault: boolean, enabled}, layerDetune: {isDefault: boolean, value: string}}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: ValidationOptions.unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, delay: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, ampSimEq: {source: {value: string}, type: {value: ValidationOptions.unknown}, treble: {midi: number, value: string}, drive: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, bassDryWet: {midi: number, value: string}, fltFreq: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, enabled: boolean, midRes: {midi: number, value: string}}, reverb: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {cc: {text: string, value: number}, kbZone: {array, value}, wheel: {enabled: boolean}, sustainPedal: {enabled: boolean}, channel: {value: (number|string), enabled: boolean}, control: {value: string}, program: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, velocity: {value: string}, octaveShift: {value: number}, swell: {enabled: boolean}, enabled: boolean, cc00: {value: (number|string), enabled: boolean}, volume: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string, enabled: boolean}, cc32: {value: (number|string), enabled: boolean}, afterTouch: {enabled: boolean}, pitchStick: {enabled: boolean}, controlPedal: {enabled: boolean}, midiCc: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}, enabled: boolean}, SyntaxError: typeof SyntaxError, clearTimeout: {(timeoutId: NodeJS.Timeout): void, (timeoutId: NodeJS.Timeout): void, (timeoutId: NodeJS.Timeout): void, (timeoutId: NodeJS.Timeout): void}, panelB: {organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: ValidationOptions.unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, output: {subSource: {isDefault: boolean, value: string}, main: {isDefault: boolean, value: string}, subDestination: {isDefault: boolean, value: string}}, synth: {voice: {value: *}, oscillators: {control: *, fastAttack: {enabled: boolean}, pitch: {midi: *, value: string}, type: {value: *}, waveForm1: *, config: {value: *}, modulations: {lfoAmount: {midi: *, morph: *, value: *}, modEnvAmount: {midi: *, morph: *, value: *}}}, debug: {lib: {valid: boolean, location: number, value: string, version: string, info: string}, sampleId: string, preset: {userPresetLocation: number, samplePresetLocation: number, presetName: string}}, unison: {value: *}, arpeggiator: {kbSync: {enabled: boolean}, rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, pattern: {value: *}, range: {value: *}, enabled: boolean}, kbZone: {array: (string|string[]|boolean[]), value: (string|string[]|boolean[])}, sustainPedal: {enabled: boolean}, keyboardHold: {enabled: boolean}, preset: *, octaveShift: {value: number}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, filter: *, pitchStick: {enabled: boolean}, lfo: {rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, wave: {value: *}}, glide: {value: *}, envelopes: {modulation: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {enabled: boolean}}, amplifier: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {value: *}}}, vibrato: {value: *}}, piano: {kbTouch: {isDefault: boolean, value: string}, debug: {lib: {size: string, value: (string|*), version: string, info: string}, sampleId: string, sampleVariation: number}, kbZone: {array, value}, softRelease: {midi: number, isDefault: boolean, enabled}, sustainPedal: {midi: number, isDefault: boolean, enabled}, type: {isDefault: boolean, value: string}, octaveShift: {midi, isDefault: boolean, value: string}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: {isDefault: boolean, value: string}, pitchStick: {midi: number, isDefault: boolean, enabled}, stringResonance: {midi: number, isDefault: boolean, enabled}, name: {size: string, value: (string|*), version: string, info: string}, model: {isDefault: boolean, value: number}, pedalNoise: {midi: number, isDefault: boolean, enabled}, layerDetune: {isDefault: boolean, value: string}}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: ValidationOptions.unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, delay: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, ampSimEq: {source: {value: string}, type: {value: ValidationOptions.unknown}, treble: {midi: number, value: string}, drive: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, bassDryWet: {midi: number, value: string}, fltFreq: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, enabled: boolean, midRes: {midi: number, value: string}}, reverb: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {cc: {text: string, value: number}, kbZone: {array, value}, wheel: {enabled: boolean}, sustainPedal: {enabled: boolean}, channel: {value: (number|string), enabled: boolean}, control: {value: string}, program: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, velocity: {value: string}, octaveShift: {value: number}, swell: {enabled: boolean}, enabled: boolean, cc00: {value: (number|string), enabled: boolean}, volume: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string, enabled: boolean}, cc32: {value: (number|string), enabled: boolean}, afterTouch: {enabled: boolean}, pitchStick: {enabled: boolean}, controlPedal: {enabled: boolean}, midiCc: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}, enabled: boolean}, Uint8Array: typeof Uint8Array, id: {bank: number, name: string, location: number, value: number}, Boolean: typeof Boolean, Uint8ClampedArray: typeof Uint8ClampedArray, ext: string, Buffer: typeof Buffer, RegExp: typeof RegExp, Float32Array: typeof Float32Array, setImmediate: {(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate, (callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate, (callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate, (callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate}, decodeURI: typeof decodeURI, Promise: typeof Promise, filename, eval: typeof eval, name: string, TypeError: typeof TypeError, Object: typeof Object, encodeURIComponent: typeof encodeURIComponent, Map: MapConstructor, parseFloat: typeof parseFloat, Set: SetConstructor, Symbol: Function, description: unknown, JSON: typeof JSON, global: NodeJS.Global, clearInterval: {(intervalId: NodeJS.Timeout): void, (intervalId: NodeJS.Timeout): void, (intervalId: NodeJS.Timeout): void, (intervalId: NodeJS.Timeout): void}, v8debug?: any, isFinite: typeof isFinite, undefined: typeof undefined, Function: typeof Function, Int32Array: typeof Int32Array, Number: typeof Number, setInterval: {(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout}, RangeError: typeof RangeError, NaN: typeof NaN, gc: {(): void, (): void, (): void, (): void}, escape: {(str: string): string, (str: string): string, (str: string): string, (str: string): string}, Intl: typeof Intl, Int8Array: typeof Int8Array, console: typeof console, process: NodeJS.Process, Infinity: typeof Infinity, Int16Array: typeof Int16Array, Error: typeof Error, unescape: {(str: string): string, (str: string): string, (str: string): string, (str: string): string}, EvalError: typeof EvalError, Date: typeof Date, decodeURIComponent: typeof decodeURIComponent, Array: typeof Array, parseInt: typeof parseInt, DataView: typeof DataView, expect: typeof expect, setTimeout: {(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout}, Uint32Array: typeof Uint32Array, ArrayBuffer: typeof ArrayBuffer, category: string}}
 */
exports.loadNla1ProgramFile = (buffer, filename) => {
    // throw exception if invalid signature or invalid file size
    checkHeader(buffer, ["nlas"], [123, 141]);

    const offset04 = buffer.readUInt8(0x04);
    const offset10 = buffer.readUInt8(0x10);
    const offset14W = buffer.readUInt16LE(0x14);

    const bankValue = buffer.readUInt8(0x0c);
    const locationValue = buffer.readUInt8(0x0e);
    const programLocation = nla1ProgramLocation(bankValue, locationValue);

    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * Nord Lead A1 - OS Update
     * v1.02 (2014-03-10)
     * v1.12 (2014-04-02)
     * v1.14 (2014-04-04)
     * v1.20 (2014-04-25)
     * v1.24 (2014-04-28)
     * v1.30 (2014-05-12)
     * v1.32 (2014-05-22)
     * v1.34 (2015-10-07)
     *
     * 16-bit integer value in Little Endian format
     * current supported version are 6 and 7
     *
     * @see {@link https://www.nordkeyboards.com/products/nord-lead-a1/nord-lead-a1-update-history Nord Lead A1 - Update History}
     * @module NLA1 File Version
     */
    const majorVersion = offset14W;
    const version = {
        majorVersion: majorVersion,
        minorVersion: 0,
        value: majorVersion.toString(),
    };

    /**
     * Offset in file: 0x04
     *
     * @example
     * 0 = header type 0 - legacy format no CRC (Byte 0x18 to 0x2B are missing)
     * 1 = header type 1 - new format with additional bytes 0x18 to 0x2B (20 bytes).
     *
     * All files exported with Nord Sound Manager v7.40 (2018-12-18) or later are in type 1.
     *
     * @module NLA1 File Format
     */
    let versionOffset = 0; // by default all address mapping are done as per latest NSM export (header type 1)

    if (offset04 !== 1) {
        // console.log("Offset 0x04 <> 1 switched to legacy mode");
        versionOffset = -20;
    }

    // const offset31 = buffer.readUInt8(0x31 + versionOffset);
    // const offset31W = buffer.readUInt16BE(0x31 + versionOffset);
    // const offset32W = buffer.readUInt16BE(0x32 + versionOffset);
    // const offset33W = buffer.readUInt16BE(0x33 + versionOffset);
    // const offset38W = buffer.readUInt16BE(0x38 + versionOffset);
    // const offset38 = buffer.readUInt8(0x38 + versionOffset);
    // const offset3a = buffer.readUInt8(0x3a + versionOffset);

    const ext = path.extname(filename).substr(1).toLowerCase();

    const global = {
        version: version,
    };

    const nla1 = {
        // program file
        name: getName(filename),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),
        type: "Program",

        // program location
        id: programLocation,

        /**
         * Offset in file: 0x10
         *
         * @example
         * #include programCategoryMap
         * @module NLA1 Program Category
         */
        category: programCategoryMap.get(offset10) ?? "Unknown",

        ...global,

        //synth: nla1Synth(buffer, 0, 0, global, false),

        effects: {
            //effect: ns2Effect1(buffer, panelOffset),
            //delay: ns2Delay(buffer, panelOffset),
            reverb: nla1Reverb(buffer, versionOffset),
        },
    };

    return nla1;
};
