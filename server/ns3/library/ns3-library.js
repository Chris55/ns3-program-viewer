const { ns3SampleLibrary } = require("./ns3-library-sample");
const { ns3PianoLibrary } = require("./ns3-library-piano");
const byteSize = require("byte-size");

/***
 * returns sample library object
 *
 * @param sampleId
 * @param clavinetModel
 * @param location
 * @returns {{size: (string|string), value: (string|*), version: string, info: string}}
 */
exports.getSample = (sampleId, clavinetModel, location) => {
    let sampleLib = ns3PianoLibrary.get(sampleId) || ns3SampleLibrary.get(sampleId);
    const sample = {
        value: "",
        info: "",
        version: "",
        size: "",
    };

    // special clavinet multi sample case...
    if (sampleLib instanceof Array) {
        if (clavinetModel >= 0 && clavinetModel < sampleLib.length) {
            sample.value = sampleLib[clavinetModel];
        } else {
            sample.value = sampleLib[0] + " unknown variation";
        }
    } else if (sampleLib && sampleLib.name) {
        sample.value = sampleLib.name;
        sample.version = sampleLib.version ? "v" + sampleLib.version : "";
        sample.info = sampleLib.info;
        sample.size = sampleLib.size ? byteSize(sampleLib.size).toString() : "";
    }
    if (!sampleLib) {
        // fallback if piano name is unknown
        if (location) {
            sample.value = "Unknown (Loc " + location + ")";
        } else {
            // on NS2 the location is not available in the program !
            sample.value = "Unknown";
        }
    }
    return sample;
};
