// this file is auto-generated with test-builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns3/piano/";

describe("/ns3/piano", () => {
    test("panelA.piano.enabled eq false", async () => {
        const file = "panelA.piano.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.enabled eq true", async () => {
        const file = "panelA.piano.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.kbZone.value eq -O--", async () => {
        const file = "panelA.piano.kbZone.value eq -O--.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.kbZone.value eq O---", async () => {
        const file = "panelA.piano.kbZone.value eq O---.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune.value eq 1", async () => {
        const file = "panelA.piano.layerDetune.value eq 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune.value eq 2", async () => {
        const file = "panelA.piano.layerDetune.value eq 2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune.value eq 3", async () => {
        const file = "panelA.piano.layerDetune.value eq 3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.layerDetune.value eq Off", async () => {
        const file = "panelA.piano.layerDetune.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.octaveShift.value eq -1 oct", async () => {
        const file = "panelA.piano.octaveShift.value eq -1 oct.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.octaveShift.value eq @p0 oct", async () => {
        const file = "panelA.piano.octaveShift.value eq @p0 oct.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.octaveShift.value eq @p1 oct", async () => {
        const file = "panelA.piano.octaveShift.value eq @p1 oct.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.pedalNoise.enabled eq false", async () => {
        const file = "panelA.piano.pedalNoise.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.pedalNoise.enabled eq true", async () => {
        const file = "panelA.piano.pedalNoise.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.softRelease.enabled eq false", async () => {
        const file = "panelA.piano.softRelease.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.softRelease.enabled eq true", async () => {
        const file = "panelA.piano.softRelease.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.stringResonance.enabled eq false", async () => {
        const file = "panelA.piano.stringResonance.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.stringResonance.enabled eq true", async () => {
        const file = "panelA.piano.stringResonance.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre.value eq Bright", async () => {
        const file = "panelA.piano.timbre.value eq Bright.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre.value eq Dyno1", async () => {
        const file = "panelA.piano.timbre.value eq Dyno1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre.value eq Dyno2", async () => {
        const file = "panelA.piano.timbre.value eq Dyno2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre.value eq Mid", async () => {
        const file = "panelA.piano.timbre.value eq Mid.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre.value eq None", async () => {
        const file = "panelA.piano.timbre.value eq None.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.timbre.value eq Soft", async () => {
        const file = "panelA.piano.timbre.value eq Soft.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type.value eq Clav", async () => {
        const file = "panelA.piano.type.value eq Clav.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type.value eq Digital", async () => {
        const file = "panelA.piano.type.value eq Digital.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type.value eq Electric", async () => {
        const file = "panelA.piano.type.value eq Electric.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type.value eq Grand", async () => {
        const file = "panelA.piano.type.value eq Grand.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type.value eq Misc", async () => {
        const file = "panelA.piano.type.value eq Misc.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.piano.type.value eq Upright", async () => {
        const file = "panelA.piano.type.value eq Upright.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.enabled eq false", async () => {
        const file = "panelB.piano.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.enabled eq true", async () => {
        const file = "panelB.piano.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.kbTouch.value eq 1", async () => {
        const file = "panelB.piano.kbTouch.value eq 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.kbTouch.value eq 2", async () => {
        const file = "panelB.piano.kbTouch.value eq 2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.kbTouch.value eq 3", async () => {
        const file = "panelB.piano.kbTouch.value eq 3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.kbTouch.value eq Normal", async () => {
        const file = "panelB.piano.kbTouch.value eq Normal.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.layerDetune.value eq 1", async () => {
        const file = "panelB.piano.layerDetune.value eq 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.layerDetune.value eq 2", async () => {
        const file = "panelB.piano.layerDetune.value eq 2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.layerDetune.value eq 3", async () => {
        const file = "panelB.piano.layerDetune.value eq 3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelB.piano.layerDetune.value eq Off", async () => {
        const file = "panelB.piano.layerDetune.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

