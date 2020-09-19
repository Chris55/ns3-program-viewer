const path = require("path");
const {getVersion} = require("../../common/converter");

// const sampleCategoryMap = new Map([
//     [0x00, "Accordeon/Harm"],
//     [0x01, "Solo Wind/brass"],
//     [0x02, "Ens Wind/brass"],
// ]);

const sampleCategoryMap = new Map([
 //   [0x00, "Accordeon/Harm"],
    [0x01, "Bass"],
//    [0x02, "Ens Wind/brass"],
    [5, "Guitar/Ethnic Str"],
    [16, "Mellotron"],
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
    sampleVersion.version = sampleVersion.version.slice(0, -1);

    const sampleCategory = buffer.readUInt8(0x12) ;

    const sampleName = getString(buffer, 0x52 + versionOffset);
    const sampleInfo = getString(buffer, 0x94 + versionOffset);
    const sampleFileName = path.basename(filename, path.extname(filename));

    const sample = {
        version: sampleVersion.version,

        sampleValue: sampleValue,

        name: sampleName,
        info: sampleInfo,
        filename: sampleFileName,
        category: sampleCategoryMap.get(sampleCategory) || sampleCategory,

    };

    return sample;
}
