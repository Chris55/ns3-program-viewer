const byteSize = require("byte-size");
const { ns3NordSampleLibrary3 } = require("./ns3-nord-sample-library-3");
const { ns3NordPianoLibrary } = require("./ns3-nord-piano-library");
const { ns3ProductLibraries } = require("./ns3-product-libraries");
const { ns3NordSampleLibraryArchive } = require("./ns3-nord-sample-library-archive");

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
        ns3NordSampleLibraryArchive.get(sampleId) ||
        ns3ProductLibraries.get(sampleId);

    const sample = {
        valid: false,
        value: "",
        info: "",
        version: "",
        size: "",
        location: location ? location : 0,
    };

    // special clavinet multi sample case...
    if (sampleLib instanceof Array) {
        if (clavinetModel >= 0 && clavinetModel < sampleLib.length) {
            sample.value = sampleLib[clavinetModel];
            sample.valid = true;
        } else {
            sample.value = sampleLib[0] + " unknown variation";
        }
    } else if (sampleLib && sampleLib.name) {
        sample.valid = true;
        sample.value = sampleLib.name;
        sample.version = sampleLib.version ? "v" + sampleLib.version : "";
        sample.info = sampleLib.info;
        sample.size = sampleLib.size ? byteSize(sampleLib.size).toString() : "";
    }
    // fallback if piano name is unknown
    // special case is if sampleId = 0 (this happens when program init is used and new piano not saved...)
    if (!sampleLib) {
        if (sampleId === 0) {
            sample.value = "Sample 1 (Program Init)";
        } else if (location) {
            sample.value = "Unknown (Sample " + (location + 1) + ")";
        } else {
            // on NS2 the location is not available in the program !
            sample.value = "Unknown";
        }
    }
    return sample;
};
