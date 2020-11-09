const fs = require('fs').promises;
const os = require("os");
const path = require('path');

const build = async(folder, testFilename) => {
    const testFile = "./" + testFilename;
    const ns3Folder = __dirname + folder;
    const filenames = await fs.readdir(ns3Folder);

    let file = "// this file is auto-generated with builder.js" + os.EOL + os.EOL;
    file += 'const { loadTestCase } = require("./helpers");' + os.EOL;
    file += os.EOL;

    file += 'const root = __dirname + "' + folder + '/";' + os.EOL + os.EOL;

    file += 'describe("' + folder + '", () => {' + os.EOL;

    for (let filename of filenames) {

        const ext = path.extname(filename);
        if (ext === '.ns3f' || ext === '.ns2p')  {

            const description = path.parse(filename).name;

            file += '    test("' + description + '", async () => {' + os.EOL;
            file += '        const file = "' + filename + '";' + os.EOL;
            file += '        const sut = await loadTestCase(root + file);' + os.EOL;
            file += '        sut.data.forEach((d) => {' + os.EOL;
            file += '            expect(d.actual).toEqual(d.expected);' + os.EOL;
            file += '        });' + os.EOL;
            file += '    });' + os.EOL + os.EOL;
        }
    }

    file += '});' + os.EOL + os.EOL;

    await fs.writeFile(testFile, file);
}

const buildAll = async() => {
    await build("/ns2/organ", "ns2.organ.test.js");
    await build("/ns2/piano", "ns2.piano.test.js");
    await build("/ns2/synth", "ns2.synth.test.js");
    await build("/ns2/synth/oscillators", "ns2.synth.oscillators.test.js");

    await build("/ns3/effects", "ns3.effects.test.js");
    await build("/ns3/global", "ns3.global.test.js");
    await build("/ns3/organ", "ns3.organ.test.js");
    await build("/ns3/piano", "ns3.piano.test.js");
    await build("/ns3/synth", "ns3.synth.test.js");
    await build("/ns3/synth/oscillators", "ns3.synth.oscillators.test.js");
    await build("/ns3/synth/filter", "ns3.synth.filter.test.js");
    await build("/ns3/synth/lfo", "ns3.synth.lfo.test.js");
    await build("/ns3/synth/envelopes", "ns3.synth.envelopes.test.js");
    await build("/ns3/synth/arpeggiator", "ns3.synth.arpeggiator.test.js");
    await build("/ns3/extern", "ns3.extern.test.js");
}

buildAll().catch(console.error)
