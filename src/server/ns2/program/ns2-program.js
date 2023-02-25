const path = require("path");
const mapping = require("./ns2-mapping");
const { ns2BooleanValue } = require("./ns2-utils");
const { ns2Reverb } = require("./ns2-fx-reverb");
const { ns2Compressor } = require("./ns2-fx-compressor");
const { getName, checkHeader } = require("../../common/nord-file");
const { zeroPad } = require("../../common/converter");
const { programCategoryMap, nordFileExtMap } = require("../../common/nord-mapping");
const { ns2Slot } = require("./ns2-slot");

/***
 * returns Nord Stage 3 program data
 *
 * @param buffer {Buffer}
 * @param filename {string}
 * @returns {{split: *, panelA: *, masterClock: {rate: {value: string}}, panelB: *, name: *, transpose: *, category: *, version: string}}
 */
exports.loadNs2ProgramFile = (buffer, filename) => {
    // throw exception if invalid signature or invalid file size
    checkHeader(buffer, ["ns2p", "ns2l"], [547, 565]);

    // const fileId = buffer.readUInt16BE(0x0e);
    const offset04 = buffer.readUInt8(0x04);
    const offset10 = buffer.readUInt8(0x10);
    const offset14W = buffer.readUInt16LE(0x14);

    const ext = path.extname(filename).substr(1).toLowerCase();

    const bankValue = buffer.readUInt8(0x0c) & 0x03;
    const locationValue = buffer.readUInt8(0x0e) & 0x7f;
    const locationDigit1 = Math.trunc(locationValue / 5) + 1; // * 10;
    const locationDigit2 = (locationValue % 5) + 1;
    const programLocation = {
        bank: bankValue,
        location: locationValue,
        name:
            ext === "ns2p"
                ? String.fromCharCode(65 + bankValue) + ":" + zeroPad(locationDigit1, 2) + ":" + locationDigit2
                : (locationValue + 1).toString(),
        value: bankValue * 100 + locationValue,
    };
    /**
     * Nord Stage 2 EX - OS Update
     * v3.00 (2019-02-12)
     * v2.28 (2018-05-16)
     * v2.26 (2017-08-31)
     * v2.24 (2017-04-03)
     * v2.20 (2017-01-24)
     * v2.14 (2016-04-19)
     * v2.10 (2015-06-22)
     * v2.06 (2015-04-30)
     * v1.72 (2013-12-19)
     * v1.70 (2012-11-21)
     * v1.64 (2012-06-28)
     * v1.62 (2012-06-18)
     * v1.60 (2012-04-25)
     * v1.40 (2011-10-06)
     * v1.32
     * v1.30 (2011-07-06)
     * v1.26 (2011-05-04)
     * v1.24 (2011-04-04)
     * v1.10 (2011-03-23)
     * v1.06
     * v1.04
     * v1.02
     * v1.00
     */

    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * 16-bit integer value in Little Endian format
     * current supported version are 2 to 7
     *
     * @module NS2 File Version
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
     * 0 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)
     * 1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).
     *
     * @module NS2 File Format
     */
    let versionOffset = 0; // by default all address mapping are done as per latest NSM export (header type 1)

    if (offset04 !== 1) {
        // console.log("Offset 0x04 <> 1 switched to legacy mode");
        versionOffset = -20;
    }

    const offset30 = buffer.readUInt8(0x30 + versionOffset);
    const offset31 = buffer.readUInt8(0x31 + versionOffset);
    const offset31W = buffer.readUInt16BE(0x31 + versionOffset);
    const offset32W = buffer.readUInt16BE(0x32 + versionOffset);
    const offset33W = buffer.readUInt16BE(0x33 + versionOffset);
    const offset38 = buffer.readUInt8(0x38 + versionOffset);
    const offset2e = buffer.readUInt8(0x2e + versionOffset);
    const offset2f = buffer.readUInt8(0x2f + versionOffset);

    /**
     * Offset in file: 0x30 (b5-1)
     *
     * @example
     * Enabled: (b5)
     * Value: (b4-1)
     * #include ns2TransposeMap
     *
     * @module NS2 Transpose
     */

    const transposeEnabled = (offset30 & 0x20) !== 0;
    const transposeValue = (offset30 & 0x1e) >>> 1;
    const transpose = {
        enabled: transposeEnabled,
        value: transposeEnabled ? mapping.ns2TransposeMap.get(transposeValue) : "",
        isDefault: transposeValue === 6,
    };

    /**
     * @example
     * 3 SPLIT ZONES
     * Offset in file 0x2f (b3)
     * 0 = OFF
     * 1 = ON
     *
     * 2 SPLIT ZONES
     * Offset in file 0x2f (b2)
     * 0 = OFF
     * 1 = ON
     *
     * SPLIT POINT LOW/ SPLIT POINT DUAL
     * Offset in file 0x2e (b3-0)
     * 0 = F2
     * 1 = C3
     * 2 = F3
     * 3 = C4
     * 4 = F4
     * 5 = C5
     * 6 = F5
     * 7 = C6
     * 8 = F6
     * 9 = C7
     *
     * SPLIT POINT HIGH
     * Offset in file 0x2f (b7-4)
     * 1 = C3
     * 2 = F3
     * 3 = C4
     * 4 = F4
     * 5 = C5
     * 6 = F5
     * 7 = C6
     * 8 = F6
     * 9 = C7
     *
     * @module NS2 Split
     */

    const split3Zones = (offset2f & 0x08) !== 0;
    const split2Zones = (offset2f & 0x04) !== 0;
    const splitLowNote = offset2e & 0x0f;
    const splitHighNote = (offset2f & 0xf0) >>> 4;

    const splitEnabled = split2Zones || split3Zones;
    const split = {
        enabled: splitEnabled,
        low: {
            note: splitEnabled ? mapping.ns2SplitNoteMap.get(splitLowNote) : "--",
        },
        high: {
            note: splitEnabled && split3Zones ? mapping.ns2SplitNoteMap.get(splitHighNote) : "--",
        },
    };

    /**
     * Offset in file: 0x31 (b4-0) 0x32 (b7-5)
     *
     * @example
     * bpm = value + 30
     *
     * @module NS2 Master Clock Rate
     */
    const tempo = ((offset31W & 0x1fe0) >>> 5) + 30;

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
    const dualKeyboard = ns2BooleanValue((offset2e & 0x20) !== 0, false);

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
        compressor: ns2Compressor(buffer, versionOffset),
        reverb: ns2Reverb(buffer, versionOffset),
    };

    const ns2 = {
        // program file
        name: getName(filename),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),
        type: ext === "ns2p" ? "Program" : "Live",

        // program location
        id: programLocation,

        /**
         * Offset in file: 0x10
         *
         * @example
         * #include programCategoryMap
         * @module NS2 Program Category
         */
        category: programCategoryMap.get(offset10),

        ...global,

        slotA: ns2Slot(buffer, 0, versionOffset, global),
        slotB: ns2Slot(buffer, 1, versionOffset, global),
    };

    // All these settings are common for Slot A & B

    // noinspection JSPrimitiveTypeWrapperUsage
    ns2.slotB.piano.slotDetune = ns2.slotA.piano.slotDetune;

    ns2.slotB.organ.pitchStick = ns2.slotA.organ.pitchStick;
    ns2.slotB.organ.type = ns2.slotA.organ.type;
    // noinspection JSPrimitiveTypeWrapperUsage
    ns2.slotB.organ.preset1.vibrato = ns2.slotA.organ.preset1.vibrato;
    // noinspection JSPrimitiveTypeWrapperUsage
    ns2.slotB.organ.preset2.vibrato = ns2.slotA.organ.preset1.vibrato;

    ns2.slotB.organ.preset1.percussion.volumeSoft = ns2.slotA.organ.preset1.percussion.volumeSoft;
    ns2.slotB.organ.preset1.percussion.decayFast = ns2.slotA.organ.preset1.percussion.decayFast;
    ns2.slotB.organ.preset1.percussion.harmonicThird = ns2.slotA.organ.preset1.percussion.harmonicThird;

    // NS2 User Manual:
    // The percussion can be used on Slot A or on Slot B provided that
    // both slots are not active at the same time in a layer or split key- board configuration.
    // If you use a layer or a split, then percussion will only be available on Slot B.
    //
    // "Jonny B" shows for SlotA Percussion / Decay Fast / Harmonic Third enabled although they are disabled.
    // I played around with these settings and it looks as if these parameters can only be set independently
    // if the Nord is either SlotA enabled or SlotB enabled.
    // As soon as both Slots are enabled or the Nord is in DualKB mode,
    // then I can not change the parameters per Slot anymore.
    // Then SlotB takes precedence, in SlotA the parameters can not be used anymore.

    if ((ns2.slotA.enabled && ns2.slotB.enabled) || ns2.dualKeyboard.enabled) {
        // if (ns2.slotB.organ.preset1.percussion.enabled || ns2.slotB.organ.preset2.percussion.enabled) {
        if (ns2.slotA.organ.enabled && ns2.slotB.organ.enabled) {
            ns2.slotA.organ.preset1.percussion.enabled = false;
            ns2.slotA.organ.preset1.percussion.isDefault = true;
            ns2.slotA.organ.preset1.percussion.volumeSoft = ns2BooleanValue(false, false);
            ns2.slotA.organ.preset1.percussion.decayFast = ns2BooleanValue(false, false);
            ns2.slotA.organ.preset1.percussion.harmonicThird = ns2BooleanValue(false, false);
            ns2.slotA.organ.preset2.percussion.enabled = false;
            ns2.slotA.organ.preset2.percussion.isDefault = true;
        }
    }

    ns2.slotB.effects.rotarySpeaker = ns2.slotA.effects.rotarySpeaker;

    return ns2;
};
