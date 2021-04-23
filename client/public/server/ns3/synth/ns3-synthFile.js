const path = require("path");
const { ns3SynthLocation } = require("../program/ns3-utils");
const { synthCategoryMap } = require("../../common/nord-mapping");
const { ns3Synth } = require("../program/ns3-synth");
const { nordFileExtMap } = require("../../common/nord-mapping");
const { getVersion } = require("../../common/converter");

/***
 * returns Nord Stage 3 synth data
 *
 * @param buffer {Buffer}
 * @param filename
 * @returns {{ext: string, synth: *, filename: *, name: *, description: unknown, id: *, category: string | undefined}}
 */
exports.loadNs3SynthFile = (buffer, filename) => {
    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const fileExt = buffer.toString("utf8", 8, 12);
        if (fileExt !== "ns3y") {
            throw new Error(fileExt + " file are not supported, select a valid ns3f file");
        }
    }

    if (buffer.length !== 102 && buffer.length !== 84) {
        throw new Error("Invalid file, unexpected file length");
    }

    // const fileId = buffer.readUInt16BE(0x0e);
    const offset04 = buffer.readUInt8(0x04);

    const synthCategoryValue = buffer.readUInt8(0x12);
    const synthSubCategoryValue = buffer.readUInt8(0x10);
    const synthCategory = synthCategoryMap.get(synthCategoryValue) || {
        category: "category " + synthCategoryValue,
        subCategory: new Map([]),
    };
    let synthSubCategory = synthCategory.subCategory.get(synthSubCategoryValue);
    if (synthSubCategory === undefined) {
        synthSubCategory = "sub category " + synthSubCategoryValue;
    }

    const category = `${synthSubCategory ? synthSubCategory + " " : ""}${synthCategory.category}`;

    const bankValue = buffer.readUInt8(0x0c);
    const locationValue = buffer.readUInt8(0x0e);
    const programLocation = ns3SynthLocation(bankValue, locationValue);

    /**
     * Offset in file: 0x14 and 0x15
     *
     * @example
     * 16-bit integer value in Little Endian format, ex 304 = v3.04
     *
     * @module NS3 Synth File Version
     */

    const version = getVersion(buffer, 0x14);

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
     * 0 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)
     * 1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).
     *
     * @module NS3 File Format
     */
    let versionOffset = -79;

    if (offset04 !== 1) {
        console.log("Offset 0x04 <> 1 switched to legacy mode");
        versionOffset -= 20;
    }

    const ext = path.extname(filename).substr(1);

    const global = {
        version: version,
        masterClock: {
            rate: {
                value: "",
            },
        },
        transpose: {
            enabled: false,
            value: "",
        },
        split: {
            enabled: false,
            low: {
                width: "Off",
                note: "--",
            },
            mid: {
                width: "Off",
                note: "--",
            },
            high: {
                width: "Off",
                note: "--",
            },
        },
        dualKeyboard: {
            enabled: false,
            value: "Panel",
        },
    };

    const ns3SynthFile = {
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
         * #include synthCategoryMap
         * @module NS3 Synth Category
         */
        category: category, //synthCategoryMap.get(offset10) + " " + offset10,

        synth: ns3Synth(buffer, 0, versionOffset, global, true),
    };

    return ns3SynthFile;
};
