// this file is auto-generated with builder.js

const {getNs3TestCase} = require("./helpers");


const root = __dirname + "/Piano/";

describe("/Piano", () => {
    test("panelA.piano.enabled eq false", async () => {
        const file = "panelA.piano.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.enabled eq true", async () => {
        const file = "panelA.piano.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre eq Bright", async () => {
        const file = "panelA.piano.timbre eq Bright.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre eq Dyno1", async () => {
        const file = "panelA.piano.timbre eq Dyno1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre eq Dyno2", async () => {
        const file = "panelA.piano.timbre eq Dyno2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre eq Mid", async () => {
        const file = "panelA.piano.timbre eq Mid.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre eq None", async () => {
        const file = "panelA.piano.timbre eq None.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre eq Soft", async () => {
        const file = "panelA.piano.timbre eq Soft.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.enabled eq false", async () => {
        const file = "panelB.piano.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.enabled eq true", async () => {
        const file = "panelB.piano.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

