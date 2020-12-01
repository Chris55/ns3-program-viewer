// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/effects/";

describe("/ns2/effects", () => {
    test("slotA.effects.rotarySpeaker.drive.value eq 10.0", async () => {
        const file = "slotA.effects.rotarySpeaker.drive.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.source.value eq Organ", async () => {
        const file = "slotA.effects.rotarySpeaker.source.value eq Organ.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.source.value eq Piano", async () => {
        const file = "slotA.effects.rotarySpeaker.source.value eq Piano.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.source.value eq Synth", async () => {
        const file = "slotA.effects.rotarySpeaker.source.value eq Synth.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.speed.morph.afterTouch.enabled eq true", async () => {
        const file = "slotA.effects.rotarySpeaker.speed.morph.afterTouch.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.speed.morph.controlPedal.enabled eq true", async () => {
        const file = "slotA.effects.rotarySpeaker.speed.morph.controlPedal.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.speed.morph.wheel.enabled eq true", async () => {
        const file = "slotA.effects.rotarySpeaker.speed.morph.wheel.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.speed.value eq Fast", async () => {
        const file = "slotA.effects.rotarySpeaker.speed.value eq Fast.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.speed.value eq Slow@aStop", async () => {
        const file = "slotA.effects.rotarySpeaker.speed.value eq Slow@aStop.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.rotarySpeaker.stopMode.enabled eq true", async () => {
        const file = "slotA.effects.rotarySpeaker.stopMode.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

