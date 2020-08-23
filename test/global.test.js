// this file is auto-generated with builder.js

const {getNs3TestCase} = require("./helpers");


const root = __dirname + "/Global/";

describe("/Global", () => {
    test("panelA.enabled eq false and panelB.enabled eq true", async () => {
        const file = "panelA.enabled eq false and panelB.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.enabled eq true and panelB.enabled eq false", async () => {
        const file = "panelA.enabled eq true and panelB.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.enabled eq true and panelB.enabled eq true", async () => {
        const file = "panelA.enabled eq true and panelB.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.enabled eq false", async () => {
        const file = "panelA.synth.arpeggiator.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.enabled eq true", async () => {
        const file = "panelA.synth.arpeggiator.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.kbSync eq false", async () => {
        const file = "panelA.synth.arpeggiator.kbSync eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.kbSync eq true", async () => {
        const file = "panelA.synth.arpeggiator.kbSync eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.masterClock eq false", async () => {
        const file = "panelA.synth.arpeggiator.masterClock eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.masterClock eq true", async () => {
        const file = "panelA.synth.arpeggiator.masterClock eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.pattern eq Down", async () => {
        const file = "panelA.synth.arpeggiator.pattern eq Down.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.pattern eq Random", async () => {
        const file = "panelA.synth.arpeggiator.pattern eq Random.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.pattern eq Up", async () => {
        const file = "panelA.synth.arpeggiator.pattern eq Up.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.pattern eq Up@aDown", async () => {
        const file = "panelA.synth.arpeggiator.pattern eq Up@aDown.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.range eq 1 Octave", async () => {
        const file = "panelA.synth.arpeggiator.range eq 1 Octave.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.range eq 2 Octaves", async () => {
        const file = "panelA.synth.arpeggiator.range eq 2 Octaves.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.range eq 3 Octaves", async () => {
        const file = "panelA.synth.arpeggiator.range eq 3 Octaves.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.arpeggiator.range eq 4 Octaves", async () => {
        const file = "panelA.synth.arpeggiator.range eq 4 Octaves.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("program.masterClock.rate eq 240 bpm", async () => {
        const file = "program.masterClock.rate eq 240 bpm.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("program.masterClock.rate eq 30 bpm", async () => {
        const file = "program.masterClock.rate eq 30 bpm.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("program.masterClock.rate eq 31 bpm", async () => {
        const file = "program.masterClock.rate eq 31 bpm.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

