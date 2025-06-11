import readline from "readline";
import fs from "fs";
import os from "os";
import * as ns2Mapping from "../../src/server/ns2/program/ns2-mapping.js";
import * as ns3Mapping from "../../src/server/ns3/program/ns3-mapping.js";
import * as commonMapping from "../../src/server/common/nord-mapping.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, "g"), replace);
}

function getEnum(name) {
    let table = commonMapping[name] || ns2Mapping[name] || ns3Mapping[name];

    if (!table) {
        throw new Error("Typo error somewhere the mapping " + name + " is not available!");
    }

    let lines = "";
    for (const [key, value] of table) {
        lines = lines + "  " + key + " = " + value + os.EOL;
    }
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

const pathOutput = __dirname + "/../out/";
const pathInputNs2 = __dirname + "/../ns2/program/";
const pathInputNs3 = __dirname + "/../ns3/program/";
const pathInputNla1 = __dirname + "/../nla1/program/";

// outfile files are prefixed with a number to be able to manage the right order in the final pfd file.
// 00- is the first...

convert("ns3", pathInputNs3 + "readme.md", pathOutput + "00-readme-stage.md", false);
convert("ns3", pathInputNs3 + "ns3-doc.md", pathOutput + "10-doc-stage.md", true);

convert("ns2", pathInputNs2 + "readme.md", pathOutput + "20-readme-stage.md", false);
convert("ns2", pathInputNs2 + "ns2-doc.md", pathOutput + "30-doc-stage.md", true);

convert("nla1", pathInputNla1 + "readme.md", pathOutput + "40-readme-lead.md", false);
convert("nla1", pathInputNla1 + "nla1-doc.md", pathOutput + "50-doc-lead.md", true);
