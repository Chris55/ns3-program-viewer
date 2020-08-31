const fs = require('fs').promises;
const os = require("os");
const path = require('path');

const build = async(folder, testFilename) => {
    const testFile = "./" + testFilename;
    const ns3Folder = __dirname + folder;
    const filenames = await fs.readdir(ns3Folder);

    let file = "// this file is auto-generated with builder.js" + os.EOL + os.EOL;
    file += 'const { getNs3TestCase } = require("./helpers");' + os.EOL;
    file += os.EOL;

    file += 'const root = __dirname + "' + folder + '/";' + os.EOL + os.EOL;

    file += 'describe("' + folder + '", () => {' + os.EOL;

    for (let filename of filenames) {

        if (path.extname(filename) === '.ns3f')  {

            const description = path.parse(filename).name;

            file += '    test("' + description + '", async () => {' + os.EOL;
            file += '        const file = "' + filename + '";' + os.EOL;
            file += '        const sut = await getNs3TestCase(root + file);' + os.EOL;
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
    await build("/ns3/effects", "ns3.effects.test.js");
    await build("/ns3/Global", "ns3.global.test.js");
    await build("/ns3/Morph", "ns3.morph.test.js");
    await build("/ns3/Organ", "ns3.organ.test.js");
    await build("/ns3/Piano", "ns3.piano.test.js");
    await build("/ns3/Synth", "ns3.synth.test.js");
    await build("/ns3/Synth/oscillators", "ns3.synth.oscillators.test.js");
    await build("/ns3/Synth/filter", "ns3.synth.filter.test.js");
    await build("/ns3/Synth/lfo", "ns3.synth.lfo.test.js");
    await build("/ns3/Synth/envelopes", "ns3.synth.envelopes.test.js");
    await build("/ns3/Synth/arpeggiator", "ns3.synth.arpeggiator.test.js");
}

buildAll().catch(console.error)
