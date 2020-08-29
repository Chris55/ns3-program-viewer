// this file is auto-generated with builder.js

const { getNs3TestCase } = require("./helpers");

const root = __dirname + "/Synth/lfo/";

describe("/Synth/lfo", () => {
    test("panelA.synth.lfo.masterClock eq true", async () => {
        const file = "panelA.synth.lfo.masterClock eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 111 and panelA.synth.lfo.rate.label eq 153 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 111 and panelA.synth.lfo.rate.label eq 153 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 125 and panelA.synth.lfo.rate.label eq 449 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 125 and panelA.synth.lfo.rate.label eq 449 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 127 and panelA.synth.lfo.rate.label eq 523 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 127 and panelA.synth.lfo.rate.label eq 523 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 37 and panelA.synth.lfo.rate.label eq 0.51 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 37 and panelA.synth.lfo.rate.label eq 0.51 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 5 and panelA.synth.lfo.rate.label eq 0.04 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 5 and panelA.synth.lfo.rate.label eq 0.04 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 65 and panelA.synth.lfo.rate.label eq 4.4 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 65 and panelA.synth.lfo.rate.label eq 4.4 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 7 and panelA.synth.lfo.rate.label eq 0.05 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 7 and panelA.synth.lfo.rate.label eq 0.05 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.rate.midi eq 99 and panelA.synth.lfo.rate.label eq 61 Hz", async () => {
        const file = "panelA.synth.lfo.rate.midi eq 99 and panelA.synth.lfo.rate.label eq 61 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.wave eq Neg Saw", async () => {
        const file = "panelA.synth.lfo.wave eq Neg Saw.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.wave eq S@aH", async () => {
        const file = "panelA.synth.lfo.wave eq S@aH.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.wave eq Saw", async () => {
        const file = "panelA.synth.lfo.wave eq Saw.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.wave eq Square", async () => {
        const file = "panelA.synth.lfo.wave eq Square.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.lfo.wave eq Triangle", async () => {
        const file = "panelA.synth.lfo.wave eq Triangle.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

