import { ns2Synth } from "../program/ns2-synth";
import { checkHeader, getExtension, getName } from "../../common/nord-file";
import { nordFileExtMap, programCategoryMap } from "../../common/nord-mapping";

/***
 * returns Nord Stage 2 Synth file
 *
 * @param buffer {Buffer}
 * @param filename {string}
 * @returns {{split: *, panelA: *, masterClock: {rate: {value: string}}, panelB: *, name: *, transpose: *, category: *, version: string}}
 */
const loadNs2SynthFile = (buffer, filename) => {
    // throw exception if invalid signature or invalid file size
    checkHeader(buffer, ["ns2s"], [60, 78]);

    const offset04 = buffer.readUInt8(0x04);
    const offset10 = buffer.readUInt8(0x10);
    const offset14W = buffer.readUInt16LE(0x14);

    const bankValue = buffer.readUInt8(0x0c) & 0x03;
    const locationValue = buffer.readUInt16LE(0x0e);

    const programLocation = {
        bank: bankValue,
        location: locationValue,
        name: locationValue + 1,
        value: locationValue,
    };

    /***
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

    /***
     * versionOffset is used normally used to manage the header size.
     * Here we fake a ns2p file to be able to read the synth section.
     */
    let versionOffset = -177; // 0x1B

    if (offset04 !== 1) {
        // console.log("Offset 0x04 <> 1 switched to legacy mode");
        versionOffset -= 20;
    }

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

    const transpose = {
        enabled: false,
        value: "",
        isDefault: false,
    };

    const split = {
        enabled: false,
        low: {
            note: "--",
        },
        high: {
            note: "--",
        },
    };

    const ext = getExtension(filename);

    const global = {
        version: version,
        masterClock: {
            rate: {
                value: "",
                isDefault: false,
            },
        },
        transpose: transpose,
        split: split,
        dualKeyboard: {
            enabled: false,
            isDefault: false,
        },
        compressor: {},
        reverb: {},
    };

    const ns2s = {
        // program file
        name: getName(filename),
        filename: filename,
        ext: ext,
        description: nordFileExtMap.get(ext),
        type: "Synth",

        // program location
        id: programLocation,

        /***
         * Offset in file: 0x10
         *
         * @example
         * #include programCategoryMap
         * @module NS2 Program Category
         */
        category: programCategoryMap.get(offset10),

        //...global,
        version,

        synth: ns2Synth(buffer, 0, versionOffset, global, true),
    };

    return ns2s;
};

export { loadNs2SynthFile };
