const path = require("path");
const mapping = require("./ns3-mapping");
const { programCategoryMap } = require("../../common/nord-mapping");
const { ns3ProgramLocation } = require("./ns3-utils");
const { nordFileExtMap } = require("../../common/nord-mapping");
const { getVersion } = require("../../common/converter");
const { ns3Panel } = require("./ns3-panel");

/***
 * returns Nord Stage 3 program data
 *
 * @param buffer {Buffer}
 * @param filename
 * @returns {{split: *, panelA: *, masterClock: {rate: {value: string}}, panelB: *, name: *, transpose: *, category: *, version: string}}
 */
exports.loadNs3ProgramFile = (buffer, filename) => {
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

    const bankValue = buffer.readUInt8(0x0c);
    const locationValue = buffer.readUInt8(0x0e);
    const programLocation = ns3ProgramLocation(bankValue, locationValue);

    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * 16-bit integer value in Little Endian format, ex 304 = v3.04
     * From {@link https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history}
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
     * v2.02 (2019-01-07)  v3.03
     * v2.10 (2019-02-27)  v3.04     A separate On/Off setting for pedal Volume was added to the Extern menu.
     * v2.12 (2019-04-23)  v3.04
     * v2.20 (2019-05-28)  v3.04
     * v2.22 (2019-06-27)  v3.04
     * v2.24 (2020-01-08)  v3.04
     * v2.50 (2020-01-13)  v3.04
     * v2.52 (2020-01-23)  v3.04
     * v2.54 (2020-03-04)  v3.04
     *
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
        enabled: (offset3a & 0x08) >>> 3 !== 0,
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
        value: mapping.ns3DualKeyboardStyleMap.get(offset3a & 0x03),
    };

    const ext = path.extname(filename).substr(1);

    const global = {
        version: version,
        masterClock: {
            rate: {
                value: tempo + " bpm",
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
        name: filename.replace(/\.[^/.]+$/, ""),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),

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
    ns3.panelB.piano.layerDetune.value = ns3.panelA.piano.layerDetune.value;

    // noinspection JSPrimitiveTypeWrapperUsage
    ns3.panelB.organ.pitchStick.enabled = ns3.panelA.organ.pitchStick.enabled;
    ns3.panelB.organ.preset1.vibrato.mode = ns3.panelA.organ.preset1.vibrato.mode;

    ns3.panelB.synth.pitchStickRange = ns3.panelA.synth.pitchStickRange;

    ns3.panelB.effects.rotarySpeaker.drive = ns3.panelA.effects.rotarySpeaker.drive;
    ns3.panelB.effects.rotarySpeaker.stopMode = ns3.panelA.effects.rotarySpeaker.stopMode;
    ns3.panelB.effects.rotarySpeaker.speed = ns3.panelA.effects.rotarySpeaker.speed;

    return ns3;
};
