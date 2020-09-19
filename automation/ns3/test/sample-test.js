const fs = require("fs").promises;
const homedir = require("os").homedir();

const library = [];

const run = async () => {
    console.log(homedir);

    const programFolder = homedir + "/downloads/automation/program";
    const sampleFolder = homedir + "/downloads/automation/sample";

    let programFiles = await fs.readdir(programFolder);
    let sampleFiles = await fs.readdir(sampleFolder);

    // remove hidden / junk files
    programFiles = programFiles.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));
    sampleFiles = sampleFiles.filter((item) => !/(^|\/)\.[^\/\.]/g.test(item));

    programFiles.sort();
    sampleFiles.sort();

    for (let i = 0; i < programFiles.length; i++) {
        library.push({
            id: i,
            programFile: programFiles[i],
            sampleFile: "",
        });
    }

    for (let i = 0; i < sampleFiles.length; i++) {
        if (i < programFiles.length) {
            library[i].sampleFile = sampleFiles[i].replace(/\.[^/.]+$/, "");
        } else {
            console.error(i + 1, "cannot load", sampleFiles[i], "program is missing!");
        }
    }

    for (lib of library) {
        if (lib.sampleFile !== "") {
            const buffer = await fs.readFile(programFolder + "/" + lib.programFile);

            const panelOffset = 0;
            const synthOffsetA8W = buffer.readUInt16BE(0xa8 + panelOffset);
            const synthOffsetA9W = buffer.readUInt16BE(0xa9 + panelOffset);
            const synthOffsetAaW = buffer.readUInt16BE(0xaa + panelOffset);
            const synthOffsetAbW = buffer.readUInt16BE(0xab + panelOffset);

            const sampleId1 = ((synthOffsetA8W & 0x07f8) >>> 3) * Math.pow(2, 24);
            const sampleId2 = ((synthOffsetA9W & 0x07f8) >>> 3) * Math.pow(2, 16);
            const sampleId3 = ((synthOffsetAaW & 0x07f8) >>> 3) * Math.pow(2, 8);
            const sampleId4 = (synthOffsetAbW & 0x07f8) >>> 3;
            const sampleId = sampleId1 + sampleId2 + sampleId3 + sampleId4;

            //console.log(lib.programFile, "sample id = ", sampleId.toString(16), lib.sampleFile);

            console.log(`    [0x${sampleId.toString(16)}, "${lib.sampleFile}"],`)
        }
    }
};

run();

