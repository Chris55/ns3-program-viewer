const fs = require('fs').promises;
const os = require("os");
const path = require('path');

const build = async(folder, testFilename) => {
    const testFile = "./" + testFilename;
    const ns3Folder = __dirname + folder;
    const filenames = await fs.readdir(ns3Folder);

    let file = "// this file is auto-generated with builder.js" + os.EOL + os.EOL;
    file += 'const {getNs3TestCase} = require("./helpers");' + os.EOL;
    file += os.EOL + os.EOL;

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
    await build("/Global", "global.test.js");
    await build("/Organ", "organ.test.js");
    await build("/Piano", "piano.test.js");
    await build("/Synth", "synth.test.js");
    await build("/Synth/oscillators", "synth.oscillators.test.js");
    await build("/Synth/filter", "synth.filter.test.js");
    await build("/Synth/lfo", "synth.lfo.test.js");
    await build("/Synth/envelopes", "synth.envelopes.test.js");
}

buildAll().catch(console.error)
