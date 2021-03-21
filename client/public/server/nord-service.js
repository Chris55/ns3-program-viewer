const { loadNs3SynthFile } = require("./ns3/synth/ns3-synthFile");
const { loadNs2ProgramFile } = require("./ns2/program/ns2-program");
const { loadNs3ProgramFile } = require("./ns3/program/ns3-program");

/***
 * returns Nord file mapping object
 *
 * @param buffer {Buffer}
 * @param filename
 * @returns {{split: *, panelA: *, masterClock: {rate: {value: string}}, panelB: *, name: *, transpose: *, category: *, version: string}}
 */
exports.loadNordFile = (buffer, filename) => {
    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
    } else {
        throw new Error("Invalid file");
    }

    const fileExt = buffer.toString("utf8", 8, 12);
    switch (fileExt) {
        case "ns3f": {
            return loadNs3ProgramFile(buffer, filename);
        }
        case "ns3y": {
            return loadNs3SynthFile(buffer, filename);
        }
        case "ns2p": {
            return loadNs2ProgramFile(buffer, filename);
        }
    }

    throw new Error(fileExt + " file are not supported, select a valid Nord file");
};
