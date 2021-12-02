const { loadNs2SynthFile } = require("./ns2/synth/ns2-synthFile");
const { loadNs3SynthFile } = require("./ns3/synth/ns3-synthFile");
const { loadNs2ProgramFile } = require("./ns2/program/ns2-program");
const { loadNs3ProgramFile } = require("./ns3/program/ns3-program");
const { loadNla1ProgramFile } = require("./nla1/program/nla1-program");

/***
 * returns Nord file mapping object
 * @param buffer
 * @param filename
 * @returns {{size, timestamp: number}}
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

    const signature = buffer.toString("utf8", 8, 12);
    let data = {};

    switch (signature) {
        case "ns3l":
        case "ns3f": {
            data = loadNs3ProgramFile(buffer, filename);
            break;
        }
        case "ns3y": {
            data = loadNs3SynthFile(buffer, filename);
            break;
        }
        case "ns2l":
        case "ns2p": {
            data = loadNs2ProgramFile(buffer, filename);
            break;
        }
        case "ns2s": {
            data = loadNs2SynthFile(buffer, filename);
            break;
        }
        case "nlas": {
            data = loadNla1ProgramFile(buffer, filename);
            break;
        }
        default: {
            throw new Error(signature + " file is not supported, select a valid Nord file");
        }
    }

    return {
        timestamp: new Date().getTime(),
        size: buffer.length,
        ...data,
    };
};
