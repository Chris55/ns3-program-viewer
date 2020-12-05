// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/effects/";

describe("/ns2/effects", () => {
    test("compressor.amount.value eq 0.0", async () => {
        const file = "compressor.amount.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("compressor.amount.value eq 10.0", async () => {
        const file = "compressor.amount.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("compressor.enabled eq false", async () => {
        const file = "compressor.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("compressor.enabled eq true", async () => {
        const file = "compressor.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.amount.value eq 0.0", async () => {
        const file = "reverb.amount.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.amount.value eq 10.0", async () => {
        const file = "reverb.amount.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.enabled eq false", async () => {
        const file = "reverb.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.enabled eq true", async () => {
        const file = "reverb.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.type.value eq Hall 1", async () => {
        const file = "reverb.type.value eq Hall 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.type.value eq Hall 2", async () => {
        const file = "reverb.type.value eq Hall 2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.type.value eq Room 1", async () => {
        const file = "reverb.type.value eq Room 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.type.value eq Room 2", async () => {
        const file = "reverb.type.value eq Room 2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.type.value eq Stage 1", async () => {
        const file = "reverb.type.value eq Stage 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("reverb.type.value eq Stage 2", async () => {
        const file = "reverb.type.value eq Stage 2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

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

