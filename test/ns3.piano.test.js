// this file is auto-generated with builder.js

const { getNs3TestCase } = require("./helpers");

const root = __dirname + "/ns3/piano/";

describe("/ns3/piano", () => {
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

    test("panelA.piano.kbZone eq -O--", async () => {
        const file = "panelA.piano.kbZone eq -O--.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.kbZone eq O---", async () => {
        const file = "panelA.piano.kbZone eq O---.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune eq 1", async () => {
        const file = "panelA.piano.layerDetune eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune eq 2", async () => {
        const file = "panelA.piano.layerDetune eq 2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune eq 3", async () => {
        const file = "panelA.piano.layerDetune eq 3.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune eq Off", async () => {
        const file = "panelA.piano.layerDetune eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.octaveShift eq -1", async () => {
        const file = "panelA.piano.octaveShift eq -1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.octaveShift eq 0", async () => {
        const file = "panelA.piano.octaveShift eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.octaveShift eq 1", async () => {
        const file = "panelA.piano.octaveShift eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.pedalNoise eq false", async () => {
        const file = "panelA.piano.pedalNoise eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.pedalNoise eq true", async () => {
        const file = "panelA.piano.pedalNoise eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.softRelease eq false", async () => {
        const file = "panelA.piano.softRelease eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.softRelease eq true", async () => {
        const file = "panelA.piano.softRelease eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.stringResonance eq false", async () => {
        const file = "panelA.piano.stringResonance eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.stringResonance eq true", async () => {
        const file = "panelA.piano.stringResonance eq true.ns3f";
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

    test("panelA.piano.type eq Clav", async () => {
        const file = "panelA.piano.type eq Clav.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type eq Digital", async () => {
        const file = "panelA.piano.type eq Digital.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type eq Electric", async () => {
        const file = "panelA.piano.type eq Electric.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type eq Grand", async () => {
        const file = "panelA.piano.type eq Grand.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type eq Misc", async () => {
        const file = "panelA.piano.type eq Misc.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type eq Upright", async () => {
        const file = "panelA.piano.type eq Upright.ns3f";
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

    test("panelB.piano.kbTouch eq 1", async () => {
        const file = "panelB.piano.kbTouch eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.kbTouch eq 2", async () => {
        const file = "panelB.piano.kbTouch eq 2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.kbTouch eq 3", async () => {
        const file = "panelB.piano.kbTouch eq 3.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.kbTouch eq Normal", async () => {
        const file = "panelB.piano.kbTouch eq Normal.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

