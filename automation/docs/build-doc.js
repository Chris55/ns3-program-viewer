const readline = require("readline");
const fs = require("fs");
const os = require("os");
const nodePandoc = require('node-pandoc');


const convert = (inputFile, outputFile, remove) => {
    const outputStream = fs.createWriteStream(outputFile, { flags: "w" });
    let start = !remove;

    const readInterface = readline.createInterface({
        input: fs.createReadStream(inputFile),
        //output: process.stdout,
        console: false,
    });

    readInterface.on("line", function (line) {
        //console.log(line);
        const left = line.substr(0, 5);

        if (left === "</dl>") {
            start = true;
            return;
        }

        if (start === true) {
            line = line.replace("doc.md#", "10-doc.md#");
            outputStream.write(line + os.EOL, function (err) {
                if (err) {
                    console.error(err);
                }
            });
        }
    });
};


convert("./docs/ns3/program/readme.md", "./automation/docs/out/ns3-00-readme.md", false);
convert("./docs/ns3/program/ns3-doc.md", "./automation/docs/out/ns3-10-doc.md", true);

// let src = os.homedir() + '/dev/ns3-program-viewer/automation/docs/out/ns3-00-readme.md';
//
// // Arguments can be either a single String or in an Array
// let args = '-f markdown -t html5  -o ./ns3-mapping.html --metadata title=NS3';
//
// // Set your callback function
// const callback = (err, result)=> {
//
//     if (err) console.error('Oh Nos: ',err);
//     return result;
// }
//
// console.log (process.cwd());
//
// // Call pandoc
// nodePandoc(src, args, callback);
