const fs = require("fs");
const path = require("path");
const { ns3ProductLibraries } = require("../../server/library/ns3-product-libraries");
const { ns3NordSampleLibraryArchive } = require("../../server/library/ns3-nord-sample-library-archive");
const { ns3NordPianoLibrary } = require("../../server/library/ns3-nord-piano-library");
const { ns3NordSampleLibrary2 } = require("../../server/library/ns3-nord-sample-library-2");
const { ns3NordSampleLibrary3 } = require("../../server/library/ns3-nord-sample-library-3");
const homedir = require("os").homedir();

const inputFolder = homedir + "/downloads/library";

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
    fs.mkdirSync(destinationPath);
}


// check all sample files, including sub-folders

const inputsFiles = getFilesFromDir(inputFolder, [".nsmp3", ".npno"]);

const newSample = [];

inputsFiles.forEach((x) => {
    const filename = path.basename(x, path.extname(x)).toUpperCase();

    let existingInLibrary = false;
    const checkIfExist = (s) => {
        if (s.filename) {
            if (s.filename.toUpperCase() === filename) {
                existingInLibrary = true;
            }
        } else if (filename.includes(s.name.toUpperCase()) && filename.includes(s.version.toUpperCase())) {
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
