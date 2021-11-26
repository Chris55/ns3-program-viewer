const path = require("path");
const { ns3SynthLocation } = require("../program/ns3-utils");
const { synthCategoryMap, nordFileExtMap } = require("../../common/nord-mapping");
const { ns3Synth } = require("../program/ns3-synth");
const { getVersion, getName, checkHeader} = require("../../common/converter");

/***
 * returns Nord Stage 3 synth file
 *
 * @param buffer {Buffer}
 * @param filename
 * @returns {{ext: string, synth: *, filename: *, name: *, description: unknown, id: *, category: string | undefined}}
 */
exports.loadNs3SynthFile = (buffer, filename) => {
    // throw exception if invalid signature or invalid file size
    checkHeader(buffer, "ns3y", [84, 102]);

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

    /***
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

    /***
     * versionOffset is used normally used to manage the header size.
     * Here we fake a ns3f file to be able to read the synth section.
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

    // noinspection UnnecessaryLocalVariableJS
    const ns3SynthFile = {
        // program file
        name: getName(filename),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),
        isProgram: false,
        isSynth: true,

        // program location
        id: programLocation,

        ...global,

        /***
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
