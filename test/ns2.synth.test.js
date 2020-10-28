// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/synth/";

describe("/ns2/synth", () => {
    test("slotA.synth.kbZone.value eq HI", async () => {
        const file = "slotA.synth.kbZone.value eq HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.kbZone.value eq LO UP HI", async () => {
        const file = "slotA.synth.kbZone.value eq LO UP HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.kbZone.value eq LO UP", async () => {
        const file = "slotA.synth.kbZone.value eq LO UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.kbZone.value eq LO", async () => {
        const file = "slotA.synth.kbZone.value eq LO.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.kbZone.value eq UP HI", async () => {
        const file = "slotA.synth.kbZone.value eq UP HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.kbZone.value eq UP", async () => {
        const file = "slotA.synth.kbZone.value eq UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.volume.value eq 0.0 dB and slotA.synth.volume.morph.afterTouch.to.value eq Off", async () => {
        const file = "slotA.synth.volume.value eq 0.0 dB and slotA.synth.volume.morph.afterTouch.to.value eq Off.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.volume.value eq 0.0 dB and slotA.synth.volume.morph.controlPedal.to.value eq Off", async () => {
        const file = "slotA.synth.volume.value eq 0.0 dB and slotA.synth.volume.morph.controlPedal.to.value eq Off.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.volume.value eq 0.0 dB and slotA.synth.volume.morph.wheel.to.value eq Off", async () => {
        const file = "slotA.synth.volume.value eq 0.0 dB and slotA.synth.volume.morph.wheel.to.value eq Off.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.volume.value eq Off and slotA.synth.volume.morph.afterTouch.to.value eq 0.0 dB", async () => {
        const file = "slotA.synth.volume.value eq Off and slotA.synth.volume.morph.afterTouch.to.value eq 0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.volume.value eq Off and slotA.synth.volume.morph.controlPedal.to.value eq 0.0 dB", async () => {
        const file = "slotA.synth.volume.value eq Off and slotA.synth.volume.morph.controlPedal.to.value eq 0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.volume.value eq Off and slotA.synth.volume.morph.wheel.to.value eq 0.0 dB", async () => {
        const file = "slotA.synth.volume.value eq Off and slotA.synth.volume.morph.wheel.to.value eq 0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

