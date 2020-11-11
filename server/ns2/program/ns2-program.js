const path = require("path");
const mapping = require("./ns2-mapping");
const mapping3 = require("../../ns3/program/ns3-mapping");
const {zeroPad} = require("../../common/converter");
const {programCategoryMap} = require("../../common/nord-mapping");
const { ns2Slot } = require("./ns2-slot");
const { nordFileExtMap } = require("../../common/nord-mapping");
const { getVersion } = require("../../common/converter");

/***
 * returns Nord Stage 3 program data
 *
 * @param buffer {Buffer}
 * @param filename {string}
 * @returns {{split: *, panelA: *, masterClock: {rate: {value: string}}, panelB: *, name: *, transpose: *, category: *, version: string}}
 */
exports.loadNs2ProgramFile = (buffer, filename) => {
    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const fileExt = buffer.toString("utf8", 8, 12);
        if (fileExt !== "ns2p") {
            throw new Error(fileExt + " file are not supported, select a valid ns2p file");
        }
    }

    if (buffer.length !== 565 && buffer.length !== 547) {
        throw new Error("Invalid file, unexpected file length");
    }

    // const fileId = buffer.readUInt16BE(0x0e);
    const offset04 = buffer.readUInt8(0x04);
    const offset10 = buffer.readUInt8(0x10);
    const offset14W = buffer.readUInt16LE(0x14);

    const bankValue = buffer.readUInt8(0x0c) & 0x03;
    const locationValue = buffer.readUInt8(0x0e) & 0x7f;
    const locationDigit1 = (Math.trunc(locationValue / 5) + 1); // * 10;
    const locationDigit2 = (locationValue % 5) + 1;
    const programLocation = {
        bank: bankValue,
        location: locationValue,
        name: String.fromCharCode(65 + bankValue) + ":" + zeroPad(locationDigit1, 2) + ":" + locationDigit2,
        value: bankValue * 25 + locationValue,
    };
    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * 16-bit integer value in Little Endian format
     * current supported version are 2 to 7
     *
     * @module NS2 File Version
     */
    const version = offset14W;

    /**
     * Offset in file: 0x04
     *
     * @example
     * 0 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)
     * 1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).
     *
     * @module NS2 File Format
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

    const offset30 = buffer.readUInt8(0x30 + versionOffset);
    const offset31 = buffer.readUInt8(0x31 + versionOffset);
    const offset31W = buffer.readUInt16BE(0x31 + versionOffset);
    const offset32W = buffer.readUInt16BE(0x32 + versionOffset);
    const offset33W = buffer.readUInt16BE(0x33 + versionOffset);
    const offset38W = buffer.readUInt16BE(0x38 + versionOffset);
    const offset38 = buffer.readUInt8(0x38 + versionOffset);
    const offset2e = buffer.readUInt8(0x2e + versionOffset);

    /**
     * Offset in file: 0x30 (b4-1)
     *
     * @example
     * Value: 0x30 (b4-1)
     * #include ns2TransposeMap
     *
     * @module NS2 Transpose
     */

    const transposeEnabled = (offset30 & 0x20) !== 0;
    const transposeValue = (offset30 & 0x1e) >>> 1;
    const transpose = {
        enabled: transposeEnabled,
        value: transposeEnabled ? mapping.ns2TransposeMap.get(transposeValue) : "",
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
     * @module NS3 Split
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

    const splitEnabled = true; //(offset31 & 0x10) !== 0;
    const split = {
        enabled: splitEnabled,
        low: {
            width: splitEnabled && splitLowEnabled ? mapping3.ns3SplitWidthMap.get((offset33W & 0x1800) >>> 11) : "Off",
            note: splitEnabled && splitLowEnabled ? mapping3.ns3SplitNoteMap.get(splitLowNote) : "--",
        },
        mid: {
            width: splitEnabled && splitMidEnabled ? mapping3.ns3SplitWidthMap.get((offset33W & 0x0600) >>> 9) : "Off",
            note: splitEnabled && splitMidEnabled ? mapping3.ns3SplitNoteMap.get(splitMidNote) : "--",
        },
        high: {
            width: splitEnabled && splitHighEnabled ? mapping3.ns3SplitWidthMap.get((offset33W & 0x0180) >>> 7) : "Off",
            note: splitEnabled && splitHighEnabled ? mapping3.ns3SplitNoteMap.get(splitHighNote) : "--",
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
         * Offset in file 0x2e (b5)
         *
         * @example
         * 0 = Off
         * 1 = On
         *
         * Note: if Dual Keyboard is On, both panel are enabled.
         *
         * @module NS2 Dual Keyboard
         */
        enabled: (offset2e & 0x20) !== 0,
    };

    const ext = path.extname(filename).substr(1);

    const global = {
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

    const ns2 = {
        // program file
        name: filename.replace(/\.[^/.]+$/, ""),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),

        // program location
        id: programLocation,

        version: version,

        /**
         * Offset in file: 0x10
         *
         * @example
         * #include programCategoryMap
         * @module NS2 Program Category
         */
        category: programCategoryMap.get(offset10),

        slotA: ns2Slot(buffer, 0, versionOffset, global),
        slotB: ns2Slot(buffer, 1, versionOffset, global),

        ...global,
    };

    // All these settings are common for Slot A & B

    // noinspection JSPrimitiveTypeWrapperUsage
    ns2.slotB.piano.slotDetune.value = ns2.slotA.piano.slotDetune.value;


    ns2.slotB.organ.pitchStick.enabled = ns2.slotA.organ.pitchStick.enabled;
    ns2.slotB.organ.type.value = ns2.slotA.organ.type.value;
    ns2.slotB.organ.preset1.vibrato.enabled = ns2.slotA.organ.preset1.vibrato.enabled;
    ns2.slotB.organ.preset1.vibrato.mode = ns2.slotA.organ.preset1.vibrato.mode;
    ns2.slotB.organ.preset2.vibrato.enabled = ns2.slotA.organ.preset1.vibrato.enabled;

    ns2.slotB.organ.preset1.percussion.volumeSoft.enabled = ns2.slotA.organ.preset1.percussion.volumeSoft.enabled;
    ns2.slotB.organ.preset1.percussion.decayFast.enabled = ns2.slotA.organ.preset1.percussion.decayFast.enabled;
    ns2.slotB.organ.preset1.percussion.harmonicThird.enabled = ns2.slotA.organ.preset1.percussion.harmonicThird.enabled;

    // ns2.slotB.effects.rotarySpeaker.drive = ns2.slotA.effects.rotarySpeaker.drive;
    // ns2.slotB.effects.rotarySpeaker.stopMode = ns2.slotA.effects.rotarySpeaker.stopMode;
    // ns2.slotB.effects.rotarySpeaker.speed = ns2.slotA.effects.rotarySpeaker.speed;

    return ns2;
};
