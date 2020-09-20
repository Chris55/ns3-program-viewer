const path = require("path");
const { getVersion } = require("../../common/converter");

const sampleCategoryMap = new Map([
    [
        1,
        {
            category: "Bass",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        3,
        {
            category: "Accordeon/Harm",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        4,
        {
            category: "FX",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        5,
        {
            category: "Guitar/Ethnic Str",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        6,
        {
            category: "Organ",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        7,
        {
            category: "Chromatic Perc",
            subCategory: new Map([
                [1, ""],
            ]),
        },
    ],
    [
        8,
        {
            category: "Piano",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        9,
        {
            category: "Strings",
            subCategory: new Map([
                [1, "Solo"],
                [2, "Ens"],
                [3, "Analog"],
            ]),
        },
    ],
    [
        10,
        {
            category: "Synth",
            subCategory: new Map([
                [1, "Pad"],
                [2, "Ens"],
                [3, "Bass"],
                [4, "Classic"],
                [7, "Lead"],
            ]),
        },
    ],
    [
        11,
        {
            category: "Choir",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        12,
        {
            category: "Wind/Brass",
            subCategory: new Map([
                [1, "Solo"],
                [2, "Ens"],
            ]),
        },
    ],
    [
        14,
        {
            category: "Misc",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        16,
        {
            category: "Mellotron",
            subCategory: new Map([
                [0, ""],
            ]),
        },
    ],
    [
        18,
        {
            category: "WoodWind",
            subCategory: new Map([
                [1, "Solo"],
                [2, "Ens"],
            ]),
        },
    ],
]);

/**
 *
 * @param buffer {Buffer}
 * @param offset
 */
const getString = (buffer, offset) => {
    let ch;
    let str = "";
    do {
        ch = buffer.readInt8(offset++);
        if (ch !== 0) {
            str += String.fromCharCode(ch);
        }
    } while (ch !== 0);
    return str;
};

exports.loadNs3SampleFile = (buffer, filename) => {
    const offset04 = buffer.readUInt8(0x04);

    let versionOffset = 0; // default latest version
    if (offset04 !== 1) {
        //console.log("Offset 0x04 <> 1 switched to legacy mode");
        versionOffset = -20;
    }

    const sampleValue = buffer.readUInt16LE(0x0e);
    const sampleVersion = getVersion(buffer, 0x14);
    // minor version is on one digit only...
    // but of the time except on some older sample (Woodwind Alto recorder version is 3.11)
    if (sampleVersion.version.charAt(sampleVersion.version.length-1) === '0') {
        sampleVersion.version = sampleVersion.version.slice(0, -1);
    }


    const sampleCategoryValue = buffer.readUInt8(0x12);
    const sampleSubCategoryValue = buffer.readUInt8(0x10);
    const sampleCategory = sampleCategoryMap.get(sampleCategoryValue) || {
        category: "category " + sampleCategoryValue,
        subCategory: new Map([]),
    };
    let sampleSubCategory = sampleCategory.subCategory.get(sampleSubCategoryValue);
    if  (sampleSubCategory === undefined) {
        sampleSubCategory = "sub category " + sampleSubCategoryValue;
    }

    const category = `${sampleSubCategory ? sampleSubCategory + " " : ""}${sampleCategory.category}`;

    const sampleName = getString(buffer, 0x52 + versionOffset);
    const sampleInfo = getString(buffer, 0x94 + versionOffset);
    const sampleFileName = path.basename(filename, path.extname(filename));

    return {
        version: sampleVersion.version,

        sampleValue: sampleValue,

        name: sampleName,
        info: sampleInfo,
        filename: sampleFileName,
        category: category,
    };
}
