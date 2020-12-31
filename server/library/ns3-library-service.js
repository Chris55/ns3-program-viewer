const byteSize = require("byte-size");
const { ns3NordSampleLibrary2 } = require("./ns3-nord-sample-library-2");
const { ns3NordSampleLibrary3 } = require("./ns3-nord-sample-library-3");
const { ns3NordPianoLibrary } = require("./ns3-nord-piano-library");
const { ns3ProductLibraries } = require("./ns3-product-libraries");
const { ns3NordSampleLibraryArchive } = require("./ns3-nord-sample-library-archive");

/***
 *
 * @param ns2PianoSampleId {BigInt}
 */

/***
 * returns NS3 sample ID from NS2 version
 *
 * @param ns2PianoSampleId {BigInt}
 * @returns {number}
 */
exports.getSampleIdNs2ToNs3 = (ns2PianoSampleId) => {
    // convert the sampleId to NS3 format:
    // b31 is inverted then value is decremented
    // example:
    //  | NS2 Hash   | NS3 Hash   | Name
    //  | ---------- | ---------- | --------------------------
    //  | 0x3f61a640 | 0xbf61a63f | Italian Grand Faz Sml 5.3
    //  | 0x9fef7497 | 0x1fef7496 | Italian Grand Faz Lrg 5.3
    //  | 0x01a1a00b | 0x81a1a00a | EP4 Mk5 80s Lrg
    //
    // 0 if program init.
    const ns3SampleId = ns2PianoSampleId === 0n ? Number(0) : Number(ns2PianoSampleId ^ 0x80000000n) - 1;

    return ns3SampleId;
};

/***
 * returns sample library object
 *
 * @param sampleId hash code needs to be in v3 format
 * @param clavinetModel
 * @param location
 * @returns {{size: (string|string), value: (string|*), version: string, info: string}}
 */
exports.getSample = (sampleId, clavinetModel, location) => {
    let sampleLib =
        ns3NordPianoLibrary.get(sampleId) ||
        ns3NordSampleLibrary3.get(sampleId) ||
        ns3NordSampleLibrary2.get(sampleId) ||
        ns3NordSampleLibraryArchive.get(sampleId) ||
        ns3ProductLibraries.get(sampleId);

    const sample = {
        valid: false,
        value: "",
        name: "unknown",
        info: "",
        version: "",
        size: "",
        location: location ? location : 0,
        filename: "",
    };

    // special clavinet multi sample case...
    if (sampleLib instanceof Array) {
        if (clavinetModel >= 0 && clavinetModel < sampleLib.length) {
            sample.value = sampleLib[clavinetModel];
            sample.name = sampleLib[clavinetModel];
            sample.valid = true;
        } else {
            sample.value = sampleLib[0] + " unknown variation";
        }
    } else if (sampleLib && sampleLib.name) {
        sample.valid = true;
        sample.value = sampleLib.name;
        sample.name = sampleLib.name;
        sample.version = sampleLib.version ? "v" + sampleLib.version : "";
        sample.info = sampleLib.info;
        sample.size = sampleLib.size ? byteSize(sampleLib.size).toString() : "";
        sample.filename = sampleLib.filename;
    }
    // fallback if piano name is unknown
    // special case is if sampleId = 0 (this happens when program init is used and new piano not saved...)
    if (!sampleLib) {
        if (sampleId === 0) {
            sample.value = "Sample 1 (Program Init)";
        } else if (location) {
            sample.value = "Sample " + (location + 1);
        } else {
            // on NS2 the location is not available in the program !
            sample.value = "Unknown";
        }
    }
    return sample;
};
