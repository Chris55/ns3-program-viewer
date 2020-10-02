const readline = require("readline");
const fs = require("fs");
const os = require("os");
const mapping = require("../../server/ns3/program/ns3-mapping");

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
}

function getEnum(name) {
    const table = mapping[name];
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

const convert = (inputFile, outputFile, remove) => {
    const text = getEnum("programCategoryMap");

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
            line = replaceAll(line, "ns3-doc.md#", "#");
            outputStream.write(line + os.EOL, function (err) {
                if (err) {
                    console.error(err);
                }
            });
        }
    });
};

const pathInput = __dirname + "/../../docs/ns3/program/";
const pathOutput = __dirname + "/../../automation/docs/out/";

convert(pathInput + "readme.md", pathOutput + "ns3-00-readme.md", false);
convert(pathInput + "ns3-doc.md", pathOutput + "ns3-10-doc.md", true);
