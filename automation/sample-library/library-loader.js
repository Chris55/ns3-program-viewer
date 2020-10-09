//
// this sample library loader is using the meta.xml file as main input.
//

const unzipper = require("unzipper");
const fs = require("fs");
const path = require("path");
const { ns3PianoLibrary } = require("../../server/ns3/library/ns3-library-piano");
const { ns3SampleLibrary } = require("../../server/ns3/library/ns3-library-sample");
const { loadNs3SampleFile } = require("../../server/common/nord-sample");
const { loadNs3ProgramFile } = require("../../server/ns3/program/ns3-program");
const homedir = require("os").homedir();
const convert = require("xml-js");
const {ns2PianoLibrary} = require("../../server/ns2/library/ns2-library-piano");
const {loadNs2ProgramFile} = require("../../server/ns2/program/ns2-program");

// Bandoneon 0x9c02b3f7
// a  0x12685f5d
// aa 0x975d9225
// b  0x06b7b9f3
// c  0xacf62648
// d  0x7822f205

//const inputFile = homedir + "/downloads/Program Bundle Selection.ns2pb";
const inputFile = homedir + "/downloads/Program Bundle Selection.ns3fb";
//const inputFile = homedir + "/downloads/Italian Grand Faz Bundle.ns2pb";
//const inputFile = homedir + "/downloads/Michael Bereal Signature Sound Bank Bundle.ns3fb";

const samplesByFilename = new Map(); // key is the sample file name as defined in meta.xml file
const programsByFileName = new Map(); // key is the program file name  as defined in meta.xml file
const metadata = new Map(); // key is the program file name as defined in meta.xml file

/***
 * Build the global metadata dictionary
 *
 * @param meta
 */
const loadMetadata = (meta) => {
    const xml = convert.xml2js(meta, { compact: false });
    if (xml.elements.length !== 1 || xml.elements[0].name !== "bundle") {
        throw new Error("Oops looks like this is not a bundle...");
    }

    const product = xml.elements[0].attributes.product;
    if (product !== "33" && product !== "38") {
        throw new Error("Oops only NS2 or NS3 bundle are supported...");
    }

    xml.elements[0].elements.forEach((f) => {
        const attributes = f.attributes;
        const name = attributes.name;

        if (metadata.has(name)) {
            throw new Error("Oops duplicate file name " + name + " detected in meta.xml");
        }

        const samples = {
            depCnt: Number(attributes.depCnt),
            piano: [],
            synth: [],
        };

        for (let i = 0; i < samples.depCnt; i++) {
            const dep = "dep" + i;
            const sampleName = attributes[dep];
            if (sampleName.indexOf("Piano/") === 0) {
                samples.piano.push(sampleName);
            } else if (sampleName.indexOf("Samp Lib/") === 0) {
                samples.synth.push(sampleName);
            } else {
                throw new Error("Oops unexpected dependency name " + sampleName + " in meta.xml file");
            }
        }

        metadata.set(name, samples);
    });
};

/**
 * load sample file
 *
 * @param buffer {Buffer}
 * @param filename
 */
const loadSample = (buffer, filename) => {
    const sample = loadNs3SampleFile(buffer, filename);

    if (samplesByFilename.has(filename) === false) {
        const lib = {
            link: [],
            ...sample,
        };
        samplesByFilename.set(filename, lib);
        //console.log("sample: ", lib.sampleValue, lib.sampleName);
    } else {
        throw new Error(`oops, sample ${filename} loaded twice !!!!`);
    }
};

/***
 * returns program file
 *
 * @param filename
 */
const getProgramDetails = (filename) => {
    let data = programsByFileName.get(filename);
    if (!data) {
        const data = {
            pianoA: "0",
            pianoB: "0",
            synthA: "0",
            synthB: "0",
        };
        programsByFileName.set(filename, data);
    }
    return programsByFileName.get(filename);
};

const run = async (backupFilename) => {
    const zip = fs.createReadStream(backupFilename).pipe(unzipper.Parse({ forceStream: true }));

    for await (const entry of zip) {
        //console.log("loading ", entry.path, "...");

        if (entry.path === "meta.xml") {
            const buffer = await entry.buffer();
            const xml = buffer.toString();
            loadMetadata(xml);
        } else {
            const ext = path.extname(entry.path);
            switch (ext) {
                case ".npno":
                case ".nsmp":
                case ".nsmp3": {
                    const buffer = await entry.buffer();
                    loadSample(buffer, entry.path);
                    break;
                }
                case ".ns2p": {
                    const buffer = await entry.buffer();
                    const program = loadNs2ProgramFile(buffer, entry.path);

                    let data = getProgramDetails(entry.path);

                    if (program.slotA.piano.enabled) {
                        data.pianoA = program.slotA.piano.debug.sampleId;
                    }

                    if (program.slotB.piano.enabled) {
                        data.pianoB = program.slotB.piano.debug.sampleId;
                    }

                    // if (program.panelA.synth.oscillators.type.value === "Sample") {
                    //     updateSampleId(program.panelA.synth.debug.sampleId, entry.path);
                    // }
                    //
                    // if (program.panelB.synth.oscillators.type.value === "Sample") {
                    //     updateSampleId(program.panelB.synth.debug.sampleId, entry.path);
                    // }

                    break;
                }
                case ".ns3f": {
                    const buffer = await entry.buffer();
                    const program = loadNs3ProgramFile(buffer, entry.path);

                    const data = getProgramDetails(entry.path);

                    if (program.panelA.piano.enabled) {
                        data.pianoA = program.panelA.piano.debug.sampleId;
                    }
                    if (program.panelB.piano.enabled) {
                        data.pianoB = program.panelB.piano.debug.sampleId;
                    }

                    if (program.panelA.synth.enabled && program.panelA.synth.oscillators.type.value === "Sample") {
                        data.synthA = program.panelA.synth.debug.sampleId;
                    }

                    if (program.panelB.synth.enabled && program.panelB.synth.oscillators.type.value === "Sample") {
                        data.synthB = program.panelB.synth.debug.sampleId;
                    }

                    break;
                }
            }
        }
        entry.autodrain();
    }
};

run(inputFile).then(() => {
    console.log();

    const sortedSamplesByFilename = new Map(
        [...samplesByFilename].sort((a, b) => {
            // Some sort function comparing keys with a[0] b[0] or values with a[1] b[1]
            // Be sure to return -1 if lower and, if comparing values, return 0 if equal
            // if (typeof a[1].sampleName === 'undefined') {
            //     console.log(a);
            // }
            return a[0].localeCompare(b[0]);
        })
    );

    metadata.forEach((x, filename) => {
        const program = programsByFileName.get(filename);

        const pianoSampleFilename1 = x.piano.shift();
        if (pianoSampleFilename1) {
            const sample = samplesByFilename.get(pianoSampleFilename1);
            if (sample && program.pianoA !== "0") {
                if (sample.sampleId && sample.sampleId !== program.pianoA) {
                    throw new Error(pianoSampleFilename1 + " try to assign sampleId multiple time !")
                }
                sample.sampleId = program.pianoA;
            }
        }
        const pianoSampleFilename2 = x.piano.shift() || pianoSampleFilename1;
        if (pianoSampleFilename2) {
            const sample = samplesByFilename.get(pianoSampleFilename2);
            if (sample && program.pianoB !== "0") {
                if (sample.sampleId && sample.sampleId !== program.pianoB) {
                    throw new Error(pianoSampleFilename2 + " try to assign sampleId multiple time !")
                }
                sample.sampleId = program.pianoB;
            }
        }

        const synthSampleFilename1 = x.synth.shift();
        if (synthSampleFilename1) {
            const sample = samplesByFilename.get(synthSampleFilename1);
            if (sample && program.synthA !== "0") {
                if (sample.sampleId && sample.sampleId !== program.synthA) {
                    throw new Error(synthSampleFilename1 + " try to assign sampleId multiple time !")
                }
                sample.sampleId = program.synthA;
            }
        }
        const synthSampleFilename2 = x.synth.shift() || synthSampleFilename1;
        if (synthSampleFilename2) {
            const sample = samplesByFilename.get(synthSampleFilename2);
            if (sample && program.synthB !== "0") {
                if (sample.sampleId && sample.sampleId !== program.synthB) {
                    throw new Error(synthSampleFilename2 + " try to assign sampleId multiple time !")
                }
                sample.sampleId = program.synthB;
            }
        }

        // if (x.sampleId !== -1 && x.version !== undefined) {
        //     const id = Number("0x" + x.sampleId.toString());
        //     const pianoLib = ns3PianoLibrary.get(id);
        //     const sampleLib = ns3SampleLibrary.get(id);
        //     if (pianoLib || sampleLib) {
        //         alreadyInLibrary.push(x);
        //     } else {
        //         sampleCount++;
        //         const test = BigInt(x.offset18) - BigInt(id);
                // console.info(
                //     `    [0x${x.sampleId}, {name: "${x.sampleName}", info: "${x.sampleInfo}", version: "${x.version}", category: "${x.category}", size: ${x.fileSize}, filename: "${x.fileName}", ext: "${x.fileExt}" }],` // ${x.offset18.toString("16")} ${test.toString("16")}`
                // );

    });

    console.log();
    console.log("New Library:");
    let sampleCount = 0;
    const alreadyInLibrary = [];

    sortedSamplesByFilename.forEach((x) => {
        if (x.sampleId && x.version !== undefined) {
            const id = Number("0x" + x.sampleId.toString());
            const ns2PianoLib = ns2PianoLibrary.get(id);
            const ns3PianoLib = ns3PianoLibrary.get(id);
            const ns3SampleLib = ns3SampleLibrary.get(id);
            if (ns2PianoLib || ns3PianoLib || ns3SampleLib) {
                alreadyInLibrary.push(x);
            } else {
                sampleCount++;
                //const test = BigInt(x.offset18) - BigInt(id);
                console.info(
                    `    [0x${x.sampleId}, {name: "${x.sampleName}", info: "${x.sampleInfo}", version: "${x.version}", category: "${x.category}", size: ${x.fileSize}, filename: "${x.fileName}", ext: "${x.fileExt}" }],`  // ${x.hashId.toString("16")}`
                );
            }
        }
    });

    console.log();
    console.log(sampleCount, "fresh new sample(s) to move in the library :)");

    console.log();
    console.log("Already in Library:");

    alreadyInLibrary.forEach((x) => {
        console.warn(
            `    [0x${x.sampleId}, {name: "${x.sampleName}", info: "${x.sampleInfo}", version: "${x.version}", category: "${x.category}", size: ${x.fileSize}, filename: "${x.fileName}", ext: "${x.fileExt}" }],` // ${x.offset18.toString("16")} ${test.toString("16")}`
        );
    });

    console.log();
    console.log(alreadyInLibrary.length, "sample(s) already in the library :)");
});
