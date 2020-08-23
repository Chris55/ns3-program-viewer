// this file is auto-generated with builder.js

const {getNs3TestCase} = require("./helpers");


const root = __dirname + "/Synth/filter/";

describe("/Synth/filter", () => {
    test("panelA.synth.filter.drive eq 1", async () => {
        const file = "panelA.synth.filter.drive eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.drive eq 2", async () => {
        const file = "panelA.synth.filter.drive eq 2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.drive eq 3", async () => {
        const file = "panelA.synth.filter.drive eq 3.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.drive eq Off", async () => {
        const file = "panelA.synth.filter.drive eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack eq 1", async () => {
        const file = "panelA.synth.filter.kbTrack eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack eq 1@a3", async () => {
        const file = "panelA.synth.filter.kbTrack eq 1@a3.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack eq 2@a3", async () => {
        const file = "panelA.synth.filter.kbTrack eq 2@a3.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack eq Off", async () => {
        const file = "panelA.synth.filter.kbTrack eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation1.lfoAmount.label eq 0.0 and panelA.synth.filter.modulation1.lfoAmount.midi eq 0", async () => {
        const file = "panelA.synth.filter.modulation1.lfoAmount.label eq 0.0 and panelA.synth.filter.modulation1.lfoAmount.midi eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation1.lfoAmount.label eq 0.1 and panelA.synth.filter.modulation1.lfoAmount.midi eq 1", async () => {
        const file = "panelA.synth.filter.modulation1.lfoAmount.label eq 0.1 and panelA.synth.filter.modulation1.lfoAmount.midi eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation1.lfoAmount.label eq 10.0 and panelA.synth.filter.modulation1.lfoAmount.midi eq 127", async () => {
        const file = "panelA.synth.filter.modulation1.lfoAmount.label eq 10.0 and panelA.synth.filter.modulation1.lfoAmount.midi eq 127.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation1.lfoAmount.label eq 5.0 and panelA.synth.filter.modulation1.lfoAmount.midi eq 63", async () => {
        const file = "panelA.synth.filter.modulation1.lfoAmount.label eq 5.0 and panelA.synth.filter.modulation1.lfoAmount.midi eq 63.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation1.lfoAmount.label eq 9.9 and panelA.synth.filter.modulation1.lfoAmount.midi eq 126", async () => {
        const file = "panelA.synth.filter.modulation1.lfoAmount.label eq 9.9 and panelA.synth.filter.modulation1.lfoAmount.midi eq 126.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 0 and panelA.synth.filter.modulation2.velAmount eq 10.0", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 0 and panelA.synth.filter.modulation2.velAmount eq 10.0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 125 and panelA.synth.filter.modulation2.modEnvAmount eq 9.7", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 125 and panelA.synth.filter.modulation2.modEnvAmount eq 9.7.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 126 and panelA.synth.filter.modulation2.modEnvAmount eq 9.8", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 126 and panelA.synth.filter.modulation2.modEnvAmount eq 9.8.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 127 and panelA.synth.filter.modulation2.modEnvAmount eq 10.0", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 127 and panelA.synth.filter.modulation2.modEnvAmount eq 10.0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 2 and panelA.synth.filter.modulation2.velAmount eq 9.8", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 2 and panelA.synth.filter.modulation2.velAmount eq 9.8.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 3 and panelA.synth.filter.modulation2.velAmount eq 9.7", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 3 and panelA.synth.filter.modulation2.velAmount eq 9.7.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 63 and panelA.synth.filter.modulation2.velAmount eq 0.2", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 63 and panelA.synth.filter.modulation2.velAmount eq 0.2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 64 and panelA.synth.filter.modulation2.velAmount eq 0.0", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 64 and panelA.synth.filter.modulation2.velAmount eq 0.0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulation2.midi eq 65 and panelA.synth.filter.modulation2.modEnvAmount eq 0.2", async () => {
        const file = "panelA.synth.filter.modulation2.midi eq 65 and panelA.synth.filter.modulation2.modEnvAmount eq 0.2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type eq BP24", async () => {
        const file = "panelA.synth.filter.type eq BP24.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type eq HP24", async () => {
        const file = "panelA.synth.filter.type eq HP24.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type eq LP12", async () => {
        const file = "panelA.synth.filter.type eq LP12.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type eq LP24", async () => {
        const file = "panelA.synth.filter.type eq LP24.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type eq LP@pHP", async () => {
        const file = "panelA.synth.filter.type eq LP@pHP.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type eq Mini Moog", async () => {
        const file = "panelA.synth.filter.type eq Mini Moog.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

