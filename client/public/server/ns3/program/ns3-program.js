const path = require("path");
const mapping = require("./ns3-mapping");
const {ns3BooleanValue} = require("./ns3-utils");
const { getName, getVersion } = require("../../common/converter");
const { programCategoryMap, nordFileExtMap } = require("../../common/nord-mapping");
const { ns3ProgramLocation } = require("./ns3-utils");
const { ns3Panel } = require("./ns3-panel");

/***
 * returns Nord Stage 3 program data
 *
 * @param buffer {Buffer}
 * @param filename
 * @returns {{WeakMap: WeakMapConstructor, ReferenceError: typeof ReferenceError, Uint16Array: typeof Uint16Array, URIError: typeof URIError, WeakSet: WeakSetConstructor, queueMicrotask: typeof queueMicrotask, String: typeof String, Float64Array: typeof Float64Array, Math: typeof Math, isNaN: typeof isNaN, clearImmediate: {(immediateId: NodeJS.Immediate): void, (immediateId: NodeJS.Immediate): void, (immediateId: NodeJS.Immediate): void, (immediateId: NodeJS.Immediate): void}, encodeURI: typeof encodeURI, panelA: {organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: ValidationOptions.unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, output: {subSource: {isDefault: boolean, value: string}, main: {isDefault: boolean, value: string}, subDestination: {isDefault: boolean, value: string}}, synth: {voice: {value: *}, oscillators: {control: *, fastAttack: {enabled: boolean}, pitch: {midi: *, value: string}, type: {value: *}, waveForm1: *, config: {value: *}, modulations: {lfoAmount: {midi: *, morph: *, value: *}, modEnvAmount: {midi: *, morph: *, value: *}}}, debug: {lib: {valid: boolean, location: number, value: string, version: string, info: string}, sampleId: string, preset: {userPresetLocation: number, samplePresetLocation: number, presetName: string}}, unison: {value: *}, arpeggiator: {kbSync: {enabled: boolean}, rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, pattern: {value: *}, range: {value: *}, enabled: boolean}, kbZone: {array: (string|string[]|boolean[]), value: (string|string[]|boolean[])}, sustainPedal: {enabled: boolean}, keyboardHold: {enabled: boolean}, preset: *, octaveShift: {value: number}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, filter: *, pitchStick: {enabled: boolean}, lfo: {rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, wave: {value: *}}, glide: {value: *}, envelopes: {modulation: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {enabled: boolean}}, amplifier: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {value: *}}}, vibrato: {value: *}}, piano: {kbTouch: {isDefault: boolean, value: string}, debug: {lib: {size: string, value: (string|*), version: string, info: string}, sampleId: string, sampleVariation: number}, kbZone: {array, value}, softRelease: {midi: number, isDefault: boolean, enabled}, sustainPedal: {midi: number, isDefault: boolean, enabled}, type: {isDefault: boolean, value: string}, octaveShift: {midi, isDefault: boolean, value: string}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: {isDefault: boolean, value: string}, pitchStick: {midi: number, isDefault: boolean, enabled}, stringResonance: {midi: number, isDefault: boolean, enabled}, name: {size: string, value: (string|*), version: string, info: string}, model: {isDefault: boolean, value: number}, pedalNoise: {midi: number, isDefault: boolean, enabled}, layerDetune: {isDefault: boolean, value: string}}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: ValidationOptions.unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, delay: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, ampSimEq: {source: {value: string}, type: {value: ValidationOptions.unknown}, treble: {midi: number, value: string}, drive: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, bassDryWet: {midi: number, value: string}, fltFreq: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, enabled: boolean, midRes: {midi: number, value: string}}, reverb: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {cc: {text: string, value: number}, kbZone: {array, value}, wheel: {enabled: boolean}, sustainPedal: {enabled: boolean}, channel: {value: (number|string), enabled: boolean}, control: {value: string}, program: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, velocity: {value: string}, octaveShift: {value: number}, swell: {enabled: boolean}, enabled: boolean, cc00: {value: (number|string), enabled: boolean}, volume: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string, enabled: boolean}, cc32: {value: (number|string), enabled: boolean}, afterTouch: {enabled: boolean}, pitchStick: {enabled: boolean}, controlPedal: {enabled: boolean}, midiCc: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}, enabled: boolean}, SyntaxError: typeof SyntaxError, clearTimeout: {(timeoutId: NodeJS.Timeout): void, (timeoutId: NodeJS.Timeout): void, (timeoutId: NodeJS.Timeout): void, (timeoutId: NodeJS.Timeout): void}, panelB: {organ: {volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, pitchStick: boolean, preset2: string, kbZone: string, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: ValidationOptions.unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: string, enabled: boolean}}, output: {subSource: {isDefault: boolean, value: string}, main: {isDefault: boolean, value: string}, subDestination: {isDefault: boolean, value: string}}, synth: {voice: {value: *}, oscillators: {control: *, fastAttack: {enabled: boolean}, pitch: {midi: *, value: string}, type: {value: *}, waveForm1: *, config: {value: *}, modulations: {lfoAmount: {midi: *, morph: *, value: *}, modEnvAmount: {midi: *, morph: *, value: *}}}, debug: {lib: {valid: boolean, location: number, value: string, version: string, info: string}, sampleId: string, preset: {userPresetLocation: number, samplePresetLocation: number, presetName: string}}, unison: {value: *}, arpeggiator: {kbSync: {enabled: boolean}, rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, pattern: {value: *}, range: {value: *}, enabled: boolean}, kbZone: {array: (string|string[]|boolean[]), value: (string|string[]|boolean[])}, sustainPedal: {enabled: boolean}, keyboardHold: {enabled: boolean}, preset: *, octaveShift: {value: number}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, filter: *, pitchStick: {enabled: boolean}, lfo: {rate: {midi: *, morph: *, value: *}, masterClock: {enabled: *}, wave: {value: *}}, glide: {value: *}, envelopes: {modulation: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {enabled: boolean}}, amplifier: {attack: {midi: *, value: *}, release: {midi: *, value: *}, decay: {midi: *, value: *}, velocity: {value: *}}}, vibrato: {value: *}}, piano: {kbTouch: {isDefault: boolean, value: string}, debug: {lib: {size: string, value: (string|*), version: string, info: string}, sampleId: string, sampleVariation: number}, kbZone: {array, value}, softRelease: {midi: number, isDefault: boolean, enabled}, sustainPedal: {midi: number, isDefault: boolean, enabled}, type: {isDefault: boolean, value: string}, octaveShift: {midi, isDefault: boolean, value: string}, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: {isDefault: boolean, value: string}, pitchStick: {midi: number, isDefault: boolean, enabled}, stringResonance: {midi: number, isDefault: boolean, enabled}, name: {size: string, value: (string|*), version: string, info: string}, model: {isDefault: boolean, value: number}, pedalNoise: {midi: number, isDefault: boolean, enabled}, layerDetune: {isDefault: boolean, value: string}}, effects: {effect1: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, masterClock: {enabled: boolean}, source: {value: string}, type: {value: ValidationOptions.unknown}, enabled: boolean}, effect2: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, rotarySpeaker: {stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}, delay: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, ampSimEq: {source: {value: string}, type: {value: ValidationOptions.unknown}, treble: {midi: number, value: string}, drive: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, bassDryWet: {midi: number, value: string}, fltFreq: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, enabled: boolean, midRes: {midi: number, value: string}}, reverb: {amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}, compressor: {amount: {midi: number, value: string}, fast: {value: boolean}, enabled: boolean}}, extern: {cc: {text: string, value: number}, kbZone: {array, value}, wheel: {enabled: boolean}, sustainPedal: {enabled: boolean}, channel: {value: (number|string), enabled: boolean}, control: {value: string}, program: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, velocity: {value: string}, octaveShift: {value: number}, swell: {enabled: boolean}, enabled: boolean, cc00: {value: (number|string), enabled: boolean}, volume: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string, enabled: boolean}, cc32: {value: (number|string), enabled: boolean}, afterTouch: {enabled: boolean}, pitchStick: {enabled: boolean}, controlPedal: {enabled: boolean}, midiCc: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}, enabled: boolean}, Uint8Array: typeof Uint8Array, id: {bank: number, name: string, location: number, value: number}, Boolean: typeof Boolean, Uint8ClampedArray: typeof Uint8ClampedArray, ext: string, Buffer: typeof Buffer, RegExp: typeof RegExp, Float32Array: typeof Float32Array, setImmediate: {(callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate, (callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate, (callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate, (callback: (...args: any[]) => void, ...args: any[]): NodeJS.Immediate}, decodeURI: typeof decodeURI, Promise: typeof Promise, filename, eval: typeof eval, name: string, TypeError: typeof TypeError, Object: typeof Object, encodeURIComponent: typeof encodeURIComponent, Map: MapConstructor, parseFloat: typeof parseFloat, Set: SetConstructor, Symbol: Function, description: unknown, JSON: typeof JSON, global: NodeJS.Global, clearInterval: {(intervalId: NodeJS.Timeout): void, (intervalId: NodeJS.Timeout): void, (intervalId: NodeJS.Timeout): void, (intervalId: NodeJS.Timeout): void}, v8debug?: any, isFinite: typeof isFinite, undefined: typeof undefined, Function: typeof Function, Int32Array: typeof Int32Array, Number: typeof Number, setInterval: {(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout}, RangeError: typeof RangeError, NaN: typeof NaN, gc: {(): void, (): void, (): void, (): void}, escape: {(str: string): string, (str: string): string, (str: string): string, (str: string): string}, Intl: typeof Intl, Int8Array: typeof Int8Array, console: typeof console, process: NodeJS.Process, Infinity: typeof Infinity, Int16Array: typeof Int16Array, Error: typeof Error, unescape: {(str: string): string, (str: string): string, (str: string): string, (str: string): string}, EvalError: typeof EvalError, Date: typeof Date, decodeURIComponent: typeof decodeURIComponent, Array: typeof Array, parseInt: typeof parseInt, DataView: typeof DataView, expect: typeof expect, setTimeout: {(callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout, (callback: (...args: any[]) => void, ms?: number, ...args: any[]): NodeJS.Timeout}, Uint32Array: typeof Uint32Array, ArrayBuffer: typeof ArrayBuffer, category: string}}
 */
exports.loadNs3ProgramFile = (buffer, filename) => {
    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const fileExt = buffer.toString("utf8", 8, 12);
        if (fileExt !== "ns3f") {
            throw new Error(fileExt + " file is not supported, select a valid ns3f file");
        }
    }

    if (buffer.length !== 592 && buffer.length !== 574) {
        throw new Error("Invalid file, unexpected file length");
    }

    // const fileId = buffer.readUInt16BE(0x0e);
    const offset04 = buffer.readUInt8(0x04);
    const offset10 = buffer.readUInt8(0x10);

    const bankValue = buffer.readUInt8(0x0c);
    const locationValue = buffer.readUInt8(0x0e);
    const programLocation = ns3ProgramLocation(bankValue, locationValue);

    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * 16-bit integer value in Little Endian format, ex 304 = v3.04
     *
     * OS version vs Program version
     * ------------------------------------
     * OS version          Program   File changes
     *                     version
     * ------------------  --------  -----------------------
     * v0.92 (2017-06-15)  v3.00
     * v0.94 (2017-06-20)  v3.00
     * v0.96 (2017-06-22)  v3.00
     * v1.00 (2017-07-07)  v3.00
     * v1.04 (2017-07-22)  v3.00
     * v1.12 (2017-09-20)  v3.00
     * v1.14 (2017-09-26)  v3.00
     * v1.22 (2017-10-18)  v3.00
     * v1.24 (2017-11-01)  v3.00
     * v1.26 (2017-11-16)  v3.00
     * v1.28 (2017-12-07)  v3.00
     * v1.32 (2017-12-15)  v3.00
     * v1.36 (2018-02-07)  v3.01     Enhanced Delay Tap Tempo
     * v1.40 (2018-04-10)  v3.01     Nord Sound Manager v7.28 (2018-02-15) or later is required
     * v1.42 (2018-08-13)  v3.01
     * v1.44 (2018-08-23)  v3.01
     * v1.46 (2018-08-24)  v3.01
     * v1.50 (2018-10-22)  v3.02     Enhanced Panel setting for Dual KB
     * v1.52 (2018-10-26)  v3.02
     * v1.60 (2018-11-22)  v3.02
     * v2.00 (2018-12-18)  v3.03     New Piano Equalizer settings, Added Pitch Bend range options for Synth
     *                               Nord Sound Manager v7.42 (2019-02-12) or later is required
     * v2.02 (2019-01-07)  v3.03
     * v2.10 (2019-02-27)  v3.04     A separate On/Off setting for pedal Volume was added to the Extern menu.
     * v2.12 (2019-04-23)  v3.04
     * v2.20 (2019-05-28)  v3.04
     * v2.22 (2019-06-27)  v3.04
     * v2.24 (2020-01-08)  v3.04
     * v2.50 (2020-01-13)  v3.04
     * v2.52 (2020-01-23)  v3.04
     * v2.54 (2020-03-04)  v3.04
     * v2.60 (2021-09-23)  v3.04
     *
     * @see {@link https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history Nord Stage 3 - Update History}
     * @module NS3 File Version
     */

    const version = getVersion(buffer, 0x14);

    // if (version !== "3.04") {
    //     throw new Error("Sorry, only v3.04 is supported... file is v" + version);
    // }

    if (version.majorVersion !== 3) {
        throw new Error("Unexpected file revision, only v3 is supported... file is v" + version.version);
    }

    if (version.minorVersion < 0 || version.minorVersion > 4) {
        throw new Error("Unexpected file revision, only v3.00 to v3.04 are supported... file is v" + version.version);
    }

    /**
     * Offset in file: 0x04
     *
     * @example
     * 0 = header type 0 - legacy format no CRC (Byte 0x18 to 0x2B are missing)
     * 1 = header type 1 - new format with additional bytes 0x18 to 0x2B (20 bytes).
     *
     * All files exported with Nord Sound Manager v7.40 (2018-12-18) or later are in type 1.
     *
     * @module NS3 File Format
     */
    let versionOffset = 0; // default all coding is done as per v3.04
    // if (minorVersion < 3) {
    //     versionOffset = -20;
    // }
    // offset 0x04 defines the file format, and not the minor version as initially supposed
    // example:
    // https://www.norduserforum.com/nord-stage-forum-f3/doubts-about-buying-nord-stage-3-t18621-10.html?sid=bc221ba562cb5071ff9d0f1f0c3e300d
    // the GimmeSomeLovin-W.ns3f file is v3.01 with header type 1 (and size 592 bytes)
    // Usually 3.01 version are smaller with header type 0, but this example shows that the version
    // is not the trigger to define the format...
    if (offset04 !== 1) {
        console.log("Offset 0x04 <> 1 switched to legacy mode");
        versionOffset = -20;
    }

    const offset31 = buffer.readUInt8(0x31 + versionOffset);
    const offset31W = buffer.readUInt16BE(0x31 + versionOffset);
    const offset32W = buffer.readUInt16BE(0x32 + versionOffset);
    const offset33W = buffer.readUInt16BE(0x33 + versionOffset);
    const offset38W = buffer.readUInt16BE(0x38 + versionOffset);
    const offset38 = buffer.readUInt8(0x38 + versionOffset);
    const offset3a = buffer.readUInt8(0x3a + versionOffset);

    /**
     * Offset in file: 0x38 (b7-3)
     *
     * @example
     * Enabled: 0x38 (b7)
     * Value: 0x38 (b6-3)
     *
     * #include ns3TransposeMap
     *
     * @module NS3 Transpose
     */

    const transposeEnabled = (offset38 & 0x80) !== 0;
    const transposeValue = (offset38 & 0x78) >>> 3;
    const transpose = {
        enabled: transposeEnabled,
        value: transposeEnabled ? mapping.ns3TransposeMap.get(transposeValue) : "",
        isDefault: transposeValue === 6,
    };

    /**
     * Offset in file: 0x31 (b4 to b0) to 0x34 (b7 only)
     *
     * @example
     * |  0X31     |    0x32   |     0x33  |    0x34   | description
     * | xxx4 3210 | 7654 3210 | 7654 3210 | 7xxx xxxx |
     * | xxx4 xxxx | xxxx xxxx | xxxx xxxx | xxxx xxxx | split off/on
     * | xxxx 321x | xxxx xxxx | xxxx xxxx | xxxx xxxx | low off/on, mid off/on, high off/on
     * | xxxx xxx0 | 765x xxxx | xxxx xxxx | xxxx xxxx | low note (0 = F2, 1 = C3, 9 = C7)
     * | xxxx xxxx | xxx4 321x | xxxx xxxx | xxxx xxxx | mid note
     * | xxxx xxxx | xxxx xxx0 | 765x xxxx | xxxx xxxx | high note
     * | xxxx xxxx | xxxx xxxx | xxx5 4xxx | xxxx xxxx | low width (0 = 1, 1 = 6, 2 = 12)
     * | xxxx xxxx | xxxx xxxx | xxxx x32x | xxxx xxxx | mid width
     * | xxxx xxxx | xxxx xxxx | xxxx xxx0 | 7xxx xxxx | high width
     *
     * Test1:  06 07 20 01 : Split Off
     *
     * Test2:  16 07 20 01 : Width Off 1   1
     *                       Note  --  C4  C7
     *
     * Test3:  1E 07 20 01 : Width 1   1   1
     *                       Note  F2  C4  C7
     *
     * Test4:  1E 07 28 01 : Width 6   1   1
     *                       Note  F2  C4  C7
     *
     * Test5:  1E 07 30 01 : Width 12  1   1
     *                       Note  F2  C4  C7
     *
     * Test6:  18 07 30 01 : Width 12  Off Off
     *                       Note  F2  --  --
     *
     * Test7:  18 27 30 01 : Width 12  Off Off
     *                       Note  C3  --  --
     *
     * Test8:  18 47 30 01 : Width 12  Off Off
     *                       Note  F3  --  --
     *
     * Test9:  18 67 30 01 : Width 12  Off Off
     *                       Note  C4  --  --
     *
     * Test10: 18 87 30 01 : Width 12  Off Off
     *                       Note  F4  --  --
     *
     * Test11: 18 A7 30 01 : Width 12  Off Off
     *                       Note  C5  --  --
     *
     * Test12: 18 C7 30 01 : Width 12  Off Off
     *                       Note  F5  --  --
     *
     * Test13: 18 E7 30 01 : Width 12  Off Off
     *                       Note  C6  --  --
     *
     * Test14: 19 07 30 01 : Width 12  Off Off
     *                       Note  F6  --  --
     *
     * Test15: 19 27 30 01 : Width 12  Off Off
     *                       Note  C7  --  --
     *
     * Test16: 1B 27 30 01 : Width 12  Off 1     ! From test 15 to 16 only High Width was changed manually !
     *                       Note  F6  --  C7    ! Note Low in file is C7 but fixed on display to F6...
     *
     * Test17: 1B 27 30 81 : Width 12  Off 6
     *                       Note  F6  --  C7
     *
     * Test18: 1B 27 31 01 : Width 12  Off 12
     *                       Note  F6  --  C7
     *
     * Test19: 1C 23 30 01 : Width 12  1   Off
     *                       Note  C3  F3  --   ! Note Mid in file is C3 but fixed on display to F3 !
     *
     * @module NS3 Split
     */

    const splitLowEnabled = (offset31 & 0x08) !== 0;
    const splitMidEnabled = (offset31 & 0x04) !== 0;
    const splitHighEnabled = (offset31 & 0x02) !== 0;
    let splitLowNote = (offset31W & 0x01e0) >>> 5;
    let splitMidNote = (offset31W & 0x001e) >>> 1;
    let splitHighNote = (offset32W & 0x01e0) >>> 5;
    const lastNote = 9;

    /***
     * returns ordered split point as done in NS3
     * @param lower {number} lower note index
     * @param upper {number} higher note index
     * @returns {[number, number]}
     */
    const checkSplitPair = (lower, upper) => {
        if (lower >= upper) {
            upper = lower + 1;
            if (upper > lastNote) {
                upper--;
                lower--;
            }
        }
        return [lower, upper];
    };

    // low/mid/high note can be unordered in file !!!
    // validation must be done to fix note order if required
    // thanks to hobster for the improved version.

    if (splitLowEnabled && splitMidEnabled && !splitHighEnabled) {
        // Low & Mid
        [splitLowNote, splitMidNote] = checkSplitPair(splitLowNote, splitMidNote);
    } else if (splitLowEnabled && !splitMidEnabled && splitHighEnabled) {
        // Low & High
        [splitLowNote, splitHighNote] = checkSplitPair(splitLowNote, splitHighNote);
    } else if (!splitLowEnabled && splitMidEnabled && splitHighEnabled) {
        // Mid & High
        [splitMidNote, splitHighNote] = checkSplitPair(splitMidNote, splitHighNote);
    } else if (splitLowEnabled && splitMidEnabled && splitHighEnabled) {
        // Low & Mid & High
        [splitLowNote, splitMidNote] = checkSplitPair(splitLowNote, splitMidNote);
        [splitMidNote, splitHighNote] = checkSplitPair(splitMidNote, splitHighNote);
        if (splitLowNote >= splitMidNote) {
            splitLowNote--;
        }
    }

    const splitEnabled = (offset31 & 0x10) !== 0;
    const split = {
        enabled: splitEnabled,
        low: {
            width: splitEnabled && splitLowEnabled ? mapping.ns3SplitWidthMap.get((offset33W & 0x1800) >>> 11) : "Off",
            note: splitEnabled && splitLowEnabled ? mapping.ns3SplitNoteMap.get(splitLowNote) : "--",
        },
        mid: {
            width: splitEnabled && splitMidEnabled ? mapping.ns3SplitWidthMap.get((offset33W & 0x0600) >>> 9) : "Off",
            note: splitEnabled && splitMidEnabled ? mapping.ns3SplitNoteMap.get(splitMidNote) : "--",
        },
        high: {
            width: splitEnabled && splitHighEnabled ? mapping.ns3SplitWidthMap.get((offset33W & 0x0180) >>> 7) : "Off",
            note: splitEnabled && splitHighEnabled ? mapping.ns3SplitNoteMap.get(splitHighNote) : "--",
        },
    };

    /**
     * Offset in file: 0x38 (b2-0) 0x39 (b7-3)
     *
     * @example
     * bpm = value + 30
     *
     * @module NS3 Master Clock Rate
     */
    const tempo = ((offset38W & 0x07f8) >>> 3) + 30;

    const dualKeyboardStyle = offset3a & 0x03;

    const dualKeyboard = {
        /**
         * Offset in file 0x3A (b3)
         *
         * @example
         * 0 = Off
         * 1 = On
         *
         * Note: if Dual Keyboard is On, both panel are enabled.
         *
         * @module NS3 Dual Keyboard
         */
        ...ns3BooleanValue((offset3a & 0x08) >>> 3 !== 0, false),

        /**
         * Offset in file 0x3A (b1-0)
         *
         * @example
         * 0 = Panel
         * 1 = Organ
         * 2 = Piano
         * 3 = Synth
         *
         * @module NS3 Dual Keyboard Style
         */
        style: {
            value: mapping.ns3DualKeyboardStyleMap.get(dualKeyboardStyle),
            isDefault: dualKeyboardStyle === 0,
        }
    };

    const ext = path.extname(filename).substr(1);

    const global = {
        version: version,
        masterClock: {
            rate: {
                value: tempo + " bpm",
                isDefault: tempo === 120,
            },
            //keyboardSync: '' // this is a global setting
        },
        transpose: transpose,
        split: split,
        dualKeyboard: dualKeyboard,
        //monoOut: '', // this is a global setting
    };

    const ns3 = {
        // program file
        name: getName(filename),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),
        isProgram: true,
        isSynth: false,

        // program location
        id: programLocation,

        ...global,

        /**
         * Offset in file: 0x10
         *
         * @example
         * #include programCategoryMap
         * @module NS3 Program Category
         */
        category: programCategoryMap.get(offset10),
        //fileId: fileId,

        panelA: ns3Panel(buffer, 0, versionOffset, global),

        panelB: ns3Panel(buffer, 1, versionOffset, global),
    };

    // All these settings are common for Panel A & B

    // noinspection JSPrimitiveTypeWrapperUsage
    ns3.panelB.piano.layerDetune = ns3.panelA.piano.layerDetune;

    // noinspection JSPrimitiveTypeWrapperUsage
    ns3.panelB.organ.pitchStick = ns3.panelA.organ.pitchStick;
    ns3.panelB.organ.preset1.vibrato.mode = ns3.panelA.organ.preset1.vibrato.mode;

    ns3.panelB.synth.pitchStickRange = ns3.panelA.synth.pitchStickRange;

    ns3.panelB.effects.rotarySpeaker.drive = ns3.panelA.effects.rotarySpeaker.drive;
    ns3.panelB.effects.rotarySpeaker.stopMode = ns3.panelA.effects.rotarySpeaker.stopMode;
    ns3.panelB.effects.rotarySpeaker.speed = ns3.panelA.effects.rotarySpeaker.speed;

    return ns3;
};
