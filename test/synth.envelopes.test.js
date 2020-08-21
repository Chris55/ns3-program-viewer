// this file is auto-generated with builder.js

const {getNs3TestCase} = require("./helpers");


const root = "/Users/christian/dev/ns3-program-viewer/test/Synth/envelopes" + "/";

describe("/Synth/envelopes", () => {
    test("panelA.synth.envelopes.modulation.attack.midi eq 0 and panelA.synth.envelopes.modulation.attack.label eq 0.5 ms", async () => {
        const file = "panelA.synth.envelopes.modulation.attack.midi eq 0 and panelA.synth.envelopes.modulation.attack.label eq 0.5 ms.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.envelopes.modulation.attack.midi eq 127 and panelA.synth.envelopes.modulation.attack.label eq 45 s", async () => {
        const file = "panelA.synth.envelopes.modulation.attack.midi eq 127 and panelA.synth.envelopes.modulation.attack.label eq 45 s.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.envelopes.modulation.decay.midi eq 0 and panelA.synth.envelopes.modulation.decay.label eq 3.0 ms", async () => {
        const file = "panelA.synth.envelopes.modulation.decay.midi eq 0 and panelA.synth.envelopes.modulation.decay.label eq 3.0 ms.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.envelopes.modulation.decay.midi eq 127 and panelA.synth.envelopes.modulation.decay.label eq Sustain", async () => {
        const file = "panelA.synth.envelopes.modulation.decay.midi eq 127 and panelA.synth.envelopes.modulation.decay.label eq Sustain.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.envelopes.modulation.release.midi eq 0", async () => {
        const file = "panelA.synth.envelopes.modulation.release.midi eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.envelopes.modulation.release.midi eq 127", async () => {
        const file = "panelA.synth.envelopes.modulation.release.midi eq 127.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.envelopes.modulation.velocity eq false", async () => {
        const file = "panelA.synth.envelopes.modulation.velocity eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.envelopes.modulation.velocity eq true", async () => {
        const file = "panelA.synth.envelopes.modulation.velocity eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

