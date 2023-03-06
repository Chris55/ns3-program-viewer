const fs = require("fs");
const path = require("path");
const { getFilesFromDir } = require("./library-helper");
const { nordLibraries } = require("../../src/server/library/ns3-library-service");
const homedir = require("os").homedir();

//Factory Restore Files:

//Nord Stage 4 Factory Restore RevB v0.94
//Nord Piano 5 Factory Restore Rev E v1.24
//Nord Stage 3 Factory Restore RevH v2.5X
//Nord Wave 2 Factory Restore RevC v1.14
//Nord Grand Factory Restore Rev B v1.5X
//Nord Electro 6 Factory Restore RevD v2.5x

//Nord Stage 2 EX Factory Restore RevC
//Nord Stage 2 Factory Restore v1.6 revA
//Nord Stage EX Factory Restore v6.0 revA
//Nord Piano 4 Factory Restore RevC v2.5X
//Nord Piano 3 Factory Restore RevC
//Nord Piano 2 Factory Restore v1.1 revA
//Nord Piano Factory Restore v1.02 revA
//Nord Electro 5 Factory Restore RevC
//Nord Electro 4D Factory Restore v1.0 revA
//Nord Electro 4 SWHP Factory Restore v1.0 revB
//Nord Electro 3 Factory Restore v3.0 revA
//Nord Electro 3 HP Factory Restore v1.0 revA
const inputFolder = homedir + "/downloads/Nord Electro 3 HP Factory Restore v1.0 revA";

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

    for (const lib of nordLibraries) {
        lib.forEach(checkIfExist);
    }

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
