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

    test("slotA.effects.ampSimEq.ampType.value eq JC", async () => {
        const file = "slotA.effects.ampSimEq.ampType.value eq JC.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.ampType.value eq Off", async () => {
        const file = "slotA.effects.ampSimEq.ampType.value eq Off.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.ampType.value eq Small", async () => {
        const file = "slotA.effects.ampSimEq.ampType.value eq Small.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.ampType.value eq Twin", async () => {
        const file = "slotA.effects.ampSimEq.ampType.value eq Twin.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.bass.value eq +0.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.bass.value eq +0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.bass.value eq +15.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.bass.value eq +15.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.bass.value eq -15.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.bass.value eq -15.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.enabled eq false", async () => {
        const file = "slotA.effects.ampSimEq.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.mid.value eq +0.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.mid.value eq +0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.mid.value eq +15.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.mid.value eq +15.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.mid.value eq -15.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.mid.value eq -15.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.midFilterFreq.value eq 200 Hz", async () => {
        const file = "slotA.effects.ampSimEq.midFilterFreq.value eq 200 Hz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.midFilterFreq.value eq 8.0 kHz", async () => {
        const file = "slotA.effects.ampSimEq.midFilterFreq.value eq 8.0 kHz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.midFilterFreq.value eq 999 Hz", async () => {
        const file = "slotA.effects.ampSimEq.midFilterFreq.value eq 999 Hz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.overdrive.value eq 10.0", async () => {
        const file = "slotA.effects.ampSimEq.overdrive.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.source.value eq Organ", async () => {
        const file = "slotA.effects.ampSimEq.source.value eq Organ.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.source.value eq Piano", async () => {
        const file = "slotA.effects.ampSimEq.source.value eq Piano.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.source.value eq Synth", async () => {
        const file = "slotA.effects.ampSimEq.source.value eq Synth.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.treble.value eq +0.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.treble.value eq +0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.treble.value eq +15.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.treble.value eq +15.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.ampSimEq.treble.value eq -15.0 dB", async () => {
        const file = "slotA.effects.ampSimEq.treble.value eq -15.0 dB.ns2p";
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

