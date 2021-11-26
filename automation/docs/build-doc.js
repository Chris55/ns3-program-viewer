const readline = require("readline");
const fs = require("fs");
const os = require("os");
const ns2Mapping = require("../../client/public/server/ns2/program/ns2-mapping");
const ns3Mapping = require("../../client/public/server/ns3/program/ns3-mapping");
const commonMapping = require("../../client/public/server/common/nord-mapping");

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
}

function getEnum(name) {
    let table = commonMapping[name] || ns2Mapping[name] || ns3Mapping[name];

    if (!table) {
        throw new Error("Typo error somewhere the mapping " + name + " is not available!");
    }

    let lines = ""; //"```" + os.EOL;
    for (const [key, value] of table) {
        lines = lines + "  " + key + " = " + value + os.EOL;
    }
    //lines = lines + "```" + os.EOL;
    return lines;
}

const convert = (model, inputFile, outputFile, remove) => {
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

        if (left === "<a na") {
            return;
        }

        if (left === "**Exa") {
            return;
        }

        if (left === "</dl>") {
            start = true;
            return;
        }

        if (left === "#incl") {
            const name = line.split(" ")[1];
            line = getEnum(name);
        }

        if (left === "```js") {
            line = "```";
        }

        if (start === true) {
            line = replaceAll(line, model + "-doc.md#", "#");
            outputStream.write(line + os.EOL, function (err) {
                if (err) {
                    console.error(err);
                }
            });
        }
    });
};

const pathOutput = __dirname + "/../../automation/docs/out/";
const pathInputNs2 = __dirname + "/../../docs/ns2/program/";
const pathInputNs3 = __dirname + "/../../docs/ns3/program/";
const pathInputNla1 = __dirname + "/../../docs/nla1/program/";

// outfile file are sorted to be added as required in the file pfd file.
// 00 is the first...

convert("ns3", pathInputNs3 + "readme.md", pathOutput + "00-readme.md", false);
convert("ns3", pathInputNs3 + "ns3-doc.md", pathOutput + "10-doc.md", true);


convert("ns2", pathInputNs2 + "readme.md", pathOutput + "20-readme.md", false);
convert("ns2", pathInputNs2 + "ns2-doc.md", pathOutput + "30-doc.md", true);

convert("nla1", pathInputNla1 + "readme.md", pathOutput + "40-readme.md", false);
convert("nla1", pathInputNla1 + "nla1-doc.md", pathOutput + "50-doc.md", true);
