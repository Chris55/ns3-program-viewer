import { promises as fs } from "fs";
import os from "os";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const build = async (folder, testFilename) => {
    const testFolder = path.join(__dirname, folder);
    const filenames = await fs.readdir(testFolder);

    let file = "// this file is auto-generated with test-builder.js" + os.EOL;
    file += os.EOL;
    file += 'import { loadTestCase } from "./test-helpers";' + os.EOL;
    file += 'import { fileURLToPath } from "url";' + os.EOL;
    file += 'import path from "path";' + os.EOL;
    file += os.EOL;
    file += "const __filename = fileURLToPath(import.meta.url);" + os.EOL;
    file += "const __dirname = path.dirname(__filename);" + os.EOL;
    file += os.EOL;
    file += 'const root = __dirname + "' + folder + '/";' + os.EOL;
    file += os.EOL;
    file += 'describe("' + folder + '", () => {' + os.EOL;

    const supportedExt = [".ns3f", ".ns3l", ".ns3y", ".ns2p", ".ns2l", ".ns2s", ".nlas"];

    for (let filename of filenames) {
        const ext = path.extname(filename);
        if (supportedExt.includes(ext)) {
            const description = "test" + folder + "/" + filename;
            file += '    test("' + description + '", async () => {' + os.EOL;
            file += '        const file = "' + filename + '";' + os.EOL;
            file += "        const sut = await loadTestCase(root + file);" + os.EOL;
            file += "        sut.data.forEach((d) => {" + os.EOL;
            file += "            expect(d.actual).toEqual(d.expected);" + os.EOL;
            file += "        });" + os.EOL;
            file += "    });" + os.EOL + os.EOL;
        } else {
            if (ext) {
                throw new Error(`Unsupported file format ${ext}`);
            }
        }
    }

    file += "});" + os.EOL + os.EOL;

    const testFile = path.join(__dirname, "../test", testFilename);
    await fs.writeFile(testFile, file);
};

const buildAll = async () => {
    //await build("/nla1/effects", "nla1.effects.test.js");

    await build("/ns2/effects", "ns2.effects.test.js");
    await build("/ns2/extern", "ns2.extern.test.js");
    await build("/ns2/global", "ns2.global.test.js");
    await build("/ns2/organ", "ns2.organ.test.js");
    await build("/ns2/piano", "ns2.piano.test.js");
    await build("/ns2/synth", "ns2.synth.test.js");
    await build("/ns2/synth/arpeggiator", "ns2.synth.arpeggiator.test.js");
    await build("/ns2/synth/envelopes", "ns2.synth.envelopes.test.js");
    await build("/ns2/synth/filter", "ns2.synth.filter.test.js");
    await build("/ns2/synth/lfo", "ns2.synth.lfo.test.js");
    await build("/ns2/synth/oscillators", "ns2.synth.oscillators.test.js");

    await build("/ns2/live", "ns2.live.test.js");
    await build("/ns2/ns2s", "ns2s.test.js");

    await build("/ns3/effects", "ns3.effects.test.js");
    await build("/ns3/extern", "ns3.extern.test.js");
    await build("/ns3/global", "ns3.global.test.js");
    await build("/ns3/organ", "ns3.organ.test.js");
    await build("/ns3/piano", "ns3.piano.test.js");
    await build("/ns3/synth", "ns3.synth.test.js");
    await build("/ns3/synth/arpeggiator", "ns3.synth.arpeggiator.test.js");
    await build("/ns3/synth/envelopes", "ns3.synth.envelopes.test.js");
    await build("/ns3/synth/filter", "ns3.synth.filter.test.js");
    await build("/ns3/synth/lfo", "ns3.synth.lfo.test.js");
    await build("/ns3/synth/oscillators", "ns3.synth.oscillators.test.js");

    await build("/ns3/live", "ns3.live.test.js");
    await build("/ns3/ns3y", "ns3y.test.js");
};

buildAll().catch(console.error);
