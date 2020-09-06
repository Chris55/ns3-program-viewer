const mapping = require("./ns3/mapping");
const { getPanel } = require("./ns3/panel");

/**
 * returns Nord Stage 3 program data
 *
 * @class
 * @ignore
 * @param buffer
 * @returns {{split: {high: {note: (*|string), width: (*|string)}, low: {note: (*|string), width: unknown}, mid: {note: (*|string), width: (*|string)}, enabled: boolean}, panelA: {organ: {volume: {midi: *, label: unknown}, preset2: string, pitchStick: boolean, kbZone: unknown, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: unknown, enabled: boolean}}, synth: {voice: unknown, oscillators: {control: {midi: number, label: string}, fastAttack: boolean, pitch: {midi: number, label: string}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, label: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, label: unknown}, filter: {highPassCutoffFrequency: {midi: number, label: unknown}, cutoffFrequency: {midi: number, label: unknown}, type: unknown, drive: unknown, resonance: {midi: number, label: string}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, label: string}, velAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, label: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: unknown}}, vibrato: unknown}, piano: {kbTouch: unknown, kbZone: unknown, softRelease: boolean, sustainPedal: boolean, type: unknown, octaveShift: number, enabled: boolean, volume: {midi: *, label: unknown}, timbre: unknown, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: unknown}, effects: {effect1: {amount: {midi: number, label: string}, rate: {midi: number, label: unknown}, masterClock: boolean, source: unknown, type: unknown, enabled: boolean}, effect2: {amount: {midi: number, label: string}, rate: {midi: number, label: string}, source: unknown, type: unknown, enabled: boolean}, rotarySpeaker: {stopMode: boolean, source: unknown, drive: string, enabled: boolean, speed: unknown}}, enabled: boolean}, masterClock: {rate: string}, panelB: {organ: {volume: {midi: *, label: unknown}, preset2: string, pitchStick: boolean, kbZone: unknown, preset1: string, sustainPedal: boolean, percussion: {volumeSoft: boolean, harmonicThird: boolean, decayFast: boolean, enabled: boolean}, type: unknown, octaveShift: number, enabled: boolean, live: boolean, vibrato: {mode: unknown, enabled: boolean}}, synth: {voice: unknown, oscillators: {control: {midi: number, label: string}, fastAttack: boolean, pitch: {midi: number, label: string}, type: unknown, waveForm1: string, config: unknown, modulations: {lfoAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, unison: unknown, arpeggiator: {kbSync: boolean, rate: {midi: number, label: unknown}, masterClock: boolean, pattern: unknown, range: unknown, enabled: boolean}, kbZone: unknown, sustainPedal: boolean, keyboardHold: boolean, octaveShift: unknown, enabled: boolean, volume: {midi: *, label: unknown}, filter: {highPassCutoffFrequency: {midi: number, label: unknown}, cutoffFrequency: {midi: number, label: unknown}, type: unknown, drive: unknown, resonance: {midi: number, label: string}, kbTrack: unknown, modulations: {lfoAmount: {midi: number, label: string}, velAmount: {midi: number, label: string}, modEnvAmount: {midi: number, label: string}}}, pitchStick: boolean, lfo: {rate: {midi: number, label: unknown}, masterClock: boolean, wave: unknown}, glide: string, envelopes: {modulation: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: boolean}, amplifier: {attack: {midi: number, label: unknown}, release: {midi: number, label: (string|*)}, decay: {midi: number, label: (string|*)}, velocity: unknown}}, vibrato: unknown}, piano: {kbTouch: unknown, kbZone: unknown, softRelease: boolean, sustainPedal: boolean, type: unknown, octaveShift: number, enabled: boolean, volume: {midi: *, label: unknown}, timbre: unknown, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: unknown}, effects: {effect1: {amount: {midi: number, label: string}, rate: {midi: number, label: unknown}, masterClock: boolean, source: unknown, type: unknown, enabled: boolean}, effect2: {amount: {midi: number, label: string}, rate: {midi: number, label: string}, source: unknown, type: unknown, enabled: boolean}, rotarySpeaker: {stopMode: boolean, source: unknown, drive: string, enabled: boolean, speed: unknown}}, enabled: boolean}, name: string, transpose: {label: unknown, enabled: boolean}, category: string, version: string}}
 */
exports.loadNs3fFile = (buffer) => {
    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const fileExt = buffer.toString("utf8", 8, 12);
        if (fileExt !== "ns3f") {
            throw new Error(fileExt + " file are not supported, select a valid ns3f file");
        }
    }


    if (buffer.length !== 592 && buffer.length !== 574) {
        throw new Error("Invalid file, unexpected file length");
    }

    // const fileId = buffer.readUInt16BE(0x0e);
    const offset04 = buffer.readUInt8(0x04);
    const offset10 = buffer.readUInt8(0x10);
    const offset14W = buffer.readUInt16LE(0x14);
    const offset31 = buffer.readUInt8(0x31);
    const offset31W = buffer.readUInt16BE(0x31);
    const offset32W = buffer.readUInt16BE(0x32);
    const offset33W = buffer.readUInt16BE(0x33);
    const offset38W = buffer.readUInt16BE(0x38);
    const offset38 = buffer.readUInt8(0x38);


    if (offset04 !== 1)  {
        console.log ("Offset 0x04 <> 1 !!!!!!");
    }
    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * 16-bit integer value in Little Endian format, ex 304 = v3.04
     *
     * Notes:
     * From {@link https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history}
     *
     * Programs stored with OS version
     * OS version          Program version   File size
     * v0.92 (2017-06-15)  v3.00             574  (header type 0)
     * v1.36 (2018-02-07)  v3.01             574  (header type 0)
     * v1.50 (2018-10-22)  v3.02             574  (header type 0)
     * vx.xx               v3.03             592  (header type 1)
     * vx.xx               v3.04             592  (header type 1)
     *
     * @module File Version
     */

    const zeroPad = (num, places) => String(num).padStart(places, "0");
    const majorVersion = Math.trunc(offset14W / 100);
    const minorVersion = zeroPad(offset14W - majorVersion * 100, 2);
    const version = majorVersion + "." + minorVersion;

    if (version !== "3.04") {
        throw new Error("Sorry, only v3.04 is supported... file is v" + version);
    }

    /**
     * Offset in file: 0x38 (b7-3)
     *
     * Enabled: 0x38 (b7)
     * Value: 0x38 (b6-3)
     *
     * @example
     * 7xxx xxxx : Transpose Off/On
     * x654 3xxx : Transpose value
     *
     * Test1:  F8 38 : Transpose Off
     * Test2:  0D 80 : Transpose -6 semi
     * Test3:  0D 88 : Transpose -5 semi
     * Test4:  0D A8 : Transpose -1 semi
     * Test5:  0D B8 : Transpose +1 semi
     * Test6:  0D D8 : Transpose +5 semi
     * Test7:  0D E0 : Transpose +6 semi
     *
     * @module Transpose
     */

    const transposeEnabled = (offset38 & 0x80) !== 0;
    const transposeValue = (offset38 & 0x78) >>> 3;
    const transpose = {
        enabled: transposeEnabled,
        label: transposeEnabled ? mapping.transposeMap.get(transposeValue) : "",
    };

    /**
     * 0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)
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
     * @module Split
     */

    const splitLowEnabled = (offset31 & 0x08) !== 0;
    const splitMidEnabled = (offset31 & 0x04) !== 0;
    const splitHighEnabled = (offset31 & 0x02) !== 0;
    let splitLowNote = (offset31W & 0x01e0) >>> 5;
    let splitMidNote = (offset31W & 0x001e) >>> 1;
    let splitHighNote = (offset32W & 0x01e0) >>> 5;
    const lastNote = 9;

    // low/mid/high note can be unordered in file !!!
    // validation must be done to fix note order if required

    if (splitLowEnabled && splitMidEnabled && !splitHighEnabled) {
        if (splitLowNote >= splitMidNote) {
            splitMidNote = splitLowNote + 1;
            if (splitMidNote > lastNote) {
                splitLowNote--;
                splitMidNote--;
            }
        }
    } else if (splitLowEnabled && !splitMidEnabled && splitHighEnabled) {
        if (splitLowNote >= splitHighNote) {
            splitHighNote = splitLowNote + 1;
            if (splitHighNote > lastNote) {
                splitLowNote--;
                splitHighNote--;
            }
        }
    } else if (!splitLowEnabled && splitMidEnabled && splitHighEnabled) {
        if (splitMidNote >= splitHighNote) {
            splitHighNote = splitMidNote + 1;
            if (splitHighNote > lastNote) {
                splitMidNote--;
                splitHighNote--;
            }
        }
    } else if (splitLowEnabled && splitMidEnabled && splitHighEnabled) {
        // not sure what to do here...
        // if (splitMidNote >= splitHighNote) {
        //     splitHighNote = splitMidNote + 1;
        //     if (splitHighNote > lastNote) {
        //         splitMidNote--;
        //         splitHighNote--;
        //     }
        // }
    }

    const splitEnabled = (offset31 & 0x10) !== 0;
    const split = {
        enabled: splitEnabled,
        low: {
            width: splitEnabled && splitLowEnabled ? mapping.splitWidthMap.get((offset33W & 0x1800) >>> 11) : "Off",
            note: splitEnabled && splitLowEnabled ? mapping.splitNoteMap.get(splitLowNote) : "--",
        },
        mid: {
            width: splitEnabled && splitMidEnabled ? mapping.splitWidthMap.get((offset33W & 0x0600) >>> 9) : "Off",
            note: splitEnabled && splitMidEnabled ? mapping.splitNoteMap.get(splitMidNote) : "--",
        },
        high: {
            width: splitEnabled && splitHighEnabled ? mapping.splitWidthMap.get((offset33W & 0x0180) >>> 7) : "Off",
            note: splitEnabled && splitHighEnabled ? mapping.splitNoteMap.get(splitHighNote) : "--",
        },
    };

    /**
     * Offset in file: 0x38 (b2-0) 0x39 (b7-3)
     *
     * @example
     * bpm = value + 30
     *
     * @module Master Clock Rate
     */
    const tempo = ((offset38W & 0x07f8) >>> 3) + 30;

    return {
        // program file
        name: "",

        version: version,

        /**
         * Offset in file: 0x10
         *
         * @module Program Category
         */
        category: mapping.categoryMap.get(offset10),
        //fileId: fileId,

        panelA: getPanel(buffer, 0, split.enabled),

        panelB: getPanel(buffer, 1, split.enabled),

        masterClock: {
            rate: tempo + " bpm",
            //keyboardSync: '' // this is a global setting
        },
        transpose: transpose,
        split: split,
        // dualKeyboard: {
        //     enabled: '',
        //     style: '',
        // },
        //monoOut: '', // this is a global setting
    };
};
