const { loadNs3ProgramFile } = require("./ns3/program/ns3-program");

/**
 * returns Nord Stage 3 file mapping
 *
 * @param buffer {Buffer}
 * @param filename
 * @returns {{split: *, panelA: *, masterClock: {rate: {value: string}}, panelB: *, name: *, transpose: *, category: *, version: string}}
 */
exports.loadNs3fFile = (buffer, filename) => {
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
    }

    throw new Error(fileExt + " file are not supported, select a valid Nord file");
};
