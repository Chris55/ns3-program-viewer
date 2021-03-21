const https = require("https"); // or 'https' for https:// URLs
const fs = require("fs");
const homedir = require("os").homedir();

const folder = homedir + "/downloads/";



const request = https.get("https://www.norduserforum.com/download/file.php?id=11899", function (response) {
    let filename;
    try {
        const contentDisposition = response.headers['content-disposition'];
        // attachment; filename*=UTF-8''80sDrums.nsmp
        filename = decodeURI(contentDisposition.split("''")[1]);
    }
    catch(err) {
        console.error(err);
    }
    if (!filename) {
        throw new Error(`unable to parse the filename from content-disposition: ${contentDisposition}`);
    }

    //const filename = response.headers['content-disposition'].split("'")[2];
    const path = folder + filename;
    const file = fs.createWriteStream(path);
    response.pipe(file);
});
