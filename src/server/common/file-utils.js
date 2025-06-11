// import fs from "fs";
// import path from "path";
// import https from "https";
//
// /***
//  * Return a list of files of the specified fileTypes in the provided dir,
//  * with the file path relative to the given dir
//  * @param dir path of the directory you want to search the files for
//  * @param fileTypes array of file types you are search files, ex: ['.txt', '.jpg']
//  * @returns {[]}
//  */
// const getFilesFromDir = (dir, fileTypes) => {
//     const filesToReturn = [];
//
//     function walkDir(currentPath) {
//         const files = fs.readdirSync(currentPath);
//         for (let i in files) {
//             const curFile = path.join(currentPath, files[i]);
//             if (fs.statSync(curFile).isFile() && fileTypes.indexOf(path.extname(curFile)) !== -1) {
//                 filesToReturn.push(curFile);
//             } else if (fs.statSync(curFile).isDirectory()) {
//                 walkDir(curFile);
//             }
//         }
//     }
//     walkDir(dir);
//     return filesToReturn;
// };
//
// /***
//  * get data
//  * @param url
//  * @returns {Promise<unknown>}
//  */
// const getData = async (url) =>
//     new Promise((resolve) => {
//         const response = {
//             success: false,
//             error: undefined,
//             url,
//             filename: undefined,
//             data: undefined,
//             contentLength: 0,
//         };
//         const chunkBuffer = [];
//
//         const options = {
//             method: "head",
//         };
//         https.get(url, options, (res) => {
//             const { statusCode } = res;
//             const contentType = res.headers["content-type"];
//
//             if (statusCode !== 200) {
//                 response.error = `statusCode: ${statusCode}`;
//                 resolve(response);
//             } else if (!/^application\/json/.test(contentType)) {
//                 // error = new Error("Invalid content-type.\n" + `Expected application/json but received ${contentType}`);
//             }
//
//             res.on("data", (chunk) => {
//                 chunkBuffer.push(chunk);
//             });
//             res.on("error", (err) => {
//                 response.error = err.message;
//                 resolve(response);
//             });
//             res.on("end", () => {
//                 response.data = Buffer.concat(chunkBuffer);
//                 let filename;
//                 try {
//                     const contentDisposition = res.headers["content-disposition"];
//                     if (contentDisposition) {
//                         response.contentLength = res.headers["content-length"];
//                         response.filename = decodeURI(contentDisposition.split("''")[1]);
//                         response.success = true;
//                     }
//                 } catch (err) {
//                     response.error = err.message;
//                     resolve(response);
//                 }
//                 if (!filename) {
//                     response.error = "no file available";
//                     resolve(response);
//                 }
//
//                 //const filename = response.headers['content-disposition'].split("'")[2];
//                 // const path = folder + filename;
//                 // const file = fs.createWriteStream(path);
//                 // response.pipe(file);
//
//                 resolve(response);
//             });
//         });
//     });
//
// export { getFilesFromDir, getData };
