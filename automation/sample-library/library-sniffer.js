const fs = require("fs");
const path = require("path");
const { ns3ProductLibraries } = require("../../src/server/library/ns3-product-libraries");
const { ns3NordSampleLibraryArchive } = require("../../src/server/library/ns3-nord-sample-library-archive");
const { ns3NordPianoLibrary } = require("../../src/server/library/ns3-nord-piano-library");
const { ns3NordSampleLibrary2 } = require("../../src/server/library/ns3-nord-sample-library-2");
const { ns3NordSampleLibrary3 } = require("../../src/server/library/ns3-nord-sample-library-3");
const { getFilesFromDir } = require("./library-helper");
const homedir = require("os").homedir();

const inputFolder = homedir + "/downloads/lib";

// cleanup the new folder

const destinationPath = path.join(inputFolder, "new");
if (fs.existsSync(destinationPath)) {
    fs.rmdirSync(destinationPath, { recursive: true });
}
fs.mkdirSync(destinationPath);

// check all sample files, including sub-folders

const inputsFiles = getFilesFromDir(inputFolder, [".nsmp3", ".nsmp", ".npno"]);

const newSample = [];

inputsFiles.forEach((x) => {
    const filename = path.basename(x, path.extname(x)).toUpperCase();

    let existingInLibrary = false;
    const checkIfExist = (s) => {
        if (s instanceof Array) {
            // clavinet case not handled here...
        } else if (s.filename) {
            if (s.filename.toUpperCase() === filename) {
                existingInLibrary = true;
            }
        } //else if (filename.includes(s.name.toUpperCase()) && filename.includes(s.version.toUpperCase())) {
        else if (filename.includes(s.name.toUpperCase()) && filename.endsWith(s.version.toUpperCase())) {
            existingInLibrary = true;
        }
    };

    ns3NordPianoLibrary.forEach(checkIfExist);

    ns3NordSampleLibrary3.forEach(checkIfExist);

    ns3NordSampleLibrary2.forEach(checkIfExist);

    ns3NordSampleLibraryArchive.forEach(checkIfExist);

    ns3ProductLibraries.forEach(checkIfExist);

    if (!existingInLibrary) {
        newSample.push(x);
    }
});

// copy the new samples in the new folder

newSample.forEach((x) => {
    const filename = path.basename(x);
    const newFilename = path.join(destinationPath, filename);
    console.log(newFilename);
    fs.copyFileSync(x, newFilename);
});

console.log(newSample.length, "new samples detected - moved to 'new' folder");
