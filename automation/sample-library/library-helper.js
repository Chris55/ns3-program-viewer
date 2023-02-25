const fs = require("fs");
const path = require("path");

/***
 * Return a list of files of the specified fileTypes in the provided dir,
 * with the file path relative to the given dir
 * @param dir path of the directory you want to search the files for
 * @param fileTypes array of file types you are search files, ex: ['.txt', '.jpg']
 * @returns {[]}
 */
exports.getFilesFromDir = (dir, fileTypes) => {
    const filesToReturn = [];

    function walkDir(currentPath) {
        const files = fs.readdirSync(currentPath);
        for (let i in files) {
            const curFile = path.join(currentPath, files[i]);
            if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) !== -1) {
                filesToReturn.push(curFile);
            } else if (fs.statSync(curFile).isDirectory()) {
                walkDir(curFile);
            }
        }
    }
    walkDir(dir);
    return filesToReturn;
};

