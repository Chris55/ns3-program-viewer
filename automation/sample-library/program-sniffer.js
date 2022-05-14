const fs = require("fs");
const path = require("path");
const { loadNordFile } = require("../../public/server/nord-service");
const homedir = require("os").homedir();

const inputFolder = homedir + "/downloads/ns3/officials";

/***
 * Return a list of files of the specified fileTypes in the provided dir,
 * with the file path relative to the given dir
 * @param dir path of the directory you want to search the files for
 * @param fileTypes array of file types you are search files, ex: ['.txt', '.jpg']
 * @returns {[]}
 */
const getFilesFromDir = (dir, fileTypes) => {
    const filesToReturn = [];

    function walkDir(currentPath) {
        const files = fs.readdirSync(currentPath);
        for (let i in files) {
            const curFile = path.join(currentPath, files[i]);
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) !== -1) {
                filesToReturn.push(curFile); //.replace(dir, ""));
            } else if (fs.statSync(curFile).isDirectory()) {
                walkDir(curFile);
            }
        }
    }
    walkDir(dir);
    return filesToReturn;
};

// cleanup the new folder

const destinationPath = path.join(inputFolder, "new");
if (fs.existsSync(destinationPath)) {
    fs.rmdirSync(destinationPath, { recursive: true });
}
fs.mkdirSync(destinationPath);

// check all sample files, including sub-folders

const inputsFiles = getFilesFromDir(inputFolder, [".ns3f", ".ns2p"]);

const unknownSamples = [];

inputsFiles.forEach((x) => {
    const filename = path.basename(x, path.extname(x)).toUpperCase();
    //console.log("loading", x);
    const buffer = fs.readFileSync(x);
    const program = loadNordFile(buffer, x);

    if (program.panelA) {
        if (program.panelA.synth.enabled && program.panelA.synth.oscillators.type.value === "Sample") {
            if (program.panelA.synth.oscillators.waveForm1.valid === false) {
                unknownSamples.push(`Panel A:${x} (preset name: ${program.panelA.synth.preset.presetName})`);
            }
        }

        if (program.panelB.synth.enabled && program.panelB.synth.oscillators.type.value === "Sample") {
            if (program.panelB.synth.oscillators.waveForm1.valid === false) {
                unknownSamples.push(`Panel B:${x} (preset name: ${program.panelB.synth.preset.presetName})`);
            }
        }
    }
});

console.log(unknownSamples.length, " unknown samples detected");

unknownSamples.forEach((x) => {
    console.warn(x);
});
