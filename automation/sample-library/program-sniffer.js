const fs = require("fs");
const path = require("path");
const { loadNordFile } = require("../../src/server/nord-service");
const { getFilesFromDir } = require("../../src/server/common/file-utils");
const homedir = require("os").homedir();

const inputFolder = homedir + "/downloads/ns3/officials";

// cleanup the new folder

const destinationPath = path.join(inputFolder, "new");
if (fs.existsSync(destinationPath)) {
    fs.rmSync(destinationPath, { recursive: true });
}
fs.mkdirSync(destinationPath);

// check all sample files, including sub-folders

const inputsFiles = getFilesFromDir(inputFolder, [".ns3f", ".ns2p"]);

const unknownSamples = [];

inputsFiles.forEach((x) => {
    const buffer = fs.readFileSync(x);
    const program = loadNordFile(buffer, x);

    if (program.panelA) {
        if (program.panelA.synth.enabled && program.panelA.synth.oscillators.type.value === "Sample") {
            if (program.panelA.synth.oscillators.waveForm1.valid === false) {
                unknownSamples.push(
                    `Panel A:${x} (preset name: ${program.panelA.synth.preset.presetName}) sampleId: ${program.panelA.synth.debug.sampleId} `
                );
            }
        }

        if (program.panelB.synth.enabled && program.panelB.synth.oscillators.type.value === "Sample") {
            if (program.panelB.synth.oscillators.waveForm1.valid === false) {
                unknownSamples.push(
                    `Panel B:${x} (preset name: ${program.panelB.synth.preset.presetName}) sampleId: ${program.panelB.synth.debug.sampleId} `
                );
            }
        }
    }
});

console.log(unknownSamples.length, " unknown samples detected");

unknownSamples.forEach((x) => {
    console.warn(x);
});
