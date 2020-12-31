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

    test("slotA.effects.delay.amount.value eq 0.0 and slotA.effects.delay.amount.morph.afterTouch.to.value eq 10.0", async () => {
        const file = "slotA.effects.delay.amount.value eq 0.0 and slotA.effects.delay.amount.morph.afterTouch.to.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.amount.value eq 0.0", async () => {
        const file = "slotA.effects.delay.amount.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.amount.value eq 10.0 and slotA.effects.delay.amount.morph.controlPedal.to.value eq 0.0", async () => {
        const file = "slotA.effects.delay.amount.value eq 10.0 and slotA.effects.delay.amount.morph.controlPedal.to.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.amount.value eq 10.0", async () => {
        const file = "slotA.effects.delay.amount.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.amount.value eq 5.0 and slotA.effects.delay.amount.morph.wheel.to.value eq 10.0", async () => {
        const file = "slotA.effects.delay.amount.value eq 5.0 and slotA.effects.delay.amount.morph.wheel.to.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.amount.value eq 5.0", async () => {
        const file = "slotA.effects.delay.amount.value eq 5.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.feedback.value eq 0.0", async () => {
        const file = "slotA.effects.delay.feedback.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.feedback.value eq 10.0", async () => {
        const file = "slotA.effects.delay.feedback.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.feedback.value eq 5.0", async () => {
        const file = "slotA.effects.delay.feedback.value eq 5.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.pingPong.enabled eq false", async () => {
        const file = "slotA.effects.delay.pingPong.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.pingPong.enabled eq true", async () => {
        const file = "slotA.effects.delay.pingPong.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.source.value eq Organ", async () => {
        const file = "slotA.effects.delay.source.value eq Organ.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.source.value eq Piano", async () => {
        const file = "slotA.effects.delay.source.value eq Piano.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.source.value eq Synth", async () => {
        const file = "slotA.effects.delay.source.value eq Synth.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 107 ms 140 bpm (x4)", async () => {
        const file = "slotA.effects.delay.tempo.value eq 107 ms 140 bpm (x4).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 1@a2 and slotA.effects.delay.tempo.morph.afterTouch.to.value eq 1@a32", async () => {
        const file = "slotA.effects.delay.tempo.value eq 1@a2 and slotA.effects.delay.tempo.morph.afterTouch.to.value eq 1@a32.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 1@a32 and slotA.effects.delay.tempo.morph.controlPedal.to.value eq 1@a2", async () => {
        const file = "slotA.effects.delay.tempo.value eq 1@a32 and slotA.effects.delay.tempo.morph.controlPedal.to.value eq 1@a2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 1@a4 and slotA.effects.delay.tempo.morph.wheel.to.value eq 1@a32", async () => {
        const file = "slotA.effects.delay.tempo.value eq 1@a4 and slotA.effects.delay.tempo.morph.wheel.to.value eq 1@a32.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 1@a4", async () => {
        const file = "slotA.effects.delay.tempo.value eq 1@a4.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 20 ms", async () => {
        const file = "slotA.effects.delay.tempo.value eq 20 ms.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 234 ms 128 bpm (x2)", async () => {
        const file = "slotA.effects.delay.tempo.value eq 234 ms 128 bpm (x2).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 750 ms 80 bpm", async () => {
        const file = "slotA.effects.delay.tempo.value eq 750 ms 80 bpm.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.delay.tempo.value eq 99 ms", async () => {
        const file = "slotA.effects.delay.tempo.value eq 99 ms.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.amount.midi eq 0", async () => {
        const file = "slotA.effects.effect1.amount.midi eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.amount.midi eq 127", async () => {
        const file = "slotA.effects.effect1.amount.midi eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.amount.morph.afterTouch.to.value eq 10.0", async () => {
        const file = "slotA.effects.effect1.amount.morph.afterTouch.to.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.amount.morph.controlPedal.to.value eq 0.0", async () => {
        const file = "slotA.effects.effect1.amount.morph.controlPedal.to.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.amount.morph.wheel.to.value eq 10.0", async () => {
        const file = "slotA.effects.effect1.amount.morph.wheel.to.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.midi eq 0", async () => {
        const file = "slotA.effects.effect1.rate.midi eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.midi eq 127", async () => {
        const file = "slotA.effects.effect1.rate.midi eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.morph.afterTouch.to.value eq 1@a32", async () => {
        const file = "slotA.effects.effect1.rate.morph.afterTouch.to.value eq 1@a32.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.morph.controlPedal.to.value eq 4@a1", async () => {
        const file = "slotA.effects.effect1.rate.morph.controlPedal.to.value eq 4@a1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.morph.wheel.to.value eq 1@a32", async () => {
        const file = "slotA.effects.effect1.rate.morph.wheel.to.value eq 1@a32.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.value eq 0 and slotA.effects.effect1.rate.morph.afterTouch.to.value eq 10", async () => {
        const file = "slotA.effects.effect1.rate.value eq 0 and slotA.effects.effect1.rate.morph.afterTouch.to.value eq 10.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.value eq 10 and slotA.effects.effect1.rate.morph.controlPedal.to.value eq 0", async () => {
        const file = "slotA.effects.effect1.rate.value eq 10 and slotA.effects.effect1.rate.morph.controlPedal.to.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.value eq 1@a1", async () => {
        const file = "slotA.effects.effect1.rate.value eq 1@a1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.value eq 5 and slotA.effects.effect1.rate.morph.wheel.to.value eq 10", async () => {
        const file = "slotA.effects.effect1.rate.value eq 5 and slotA.effects.effect1.rate.morph.wheel.to.value eq 10.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.rate.value eq 5", async () => {
        const file = "slotA.effects.effect1.rate.value eq 5.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.source.value eq Organ", async () => {
        const file = "slotA.effects.effect1.source.value eq Organ.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.source.value eq Piano", async () => {
        const file = "slotA.effects.effect1.source.value eq Piano.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.source.value eq Synth", async () => {
        const file = "slotA.effects.effect1.source.value eq Synth.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.type.value eq Auto-Wah 1", async () => {
        const file = "slotA.effects.effect1.type.value eq Auto-Wah 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.type.value eq Auto-Wah 2", async () => {
        const file = "slotA.effects.effect1.type.value eq Auto-Wah 2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.type.value eq Ring Mod", async () => {
        const file = "slotA.effects.effect1.type.value eq Ring Mod.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.type.value eq Tremolo", async () => {
        const file = "slotA.effects.effect1.type.value eq Tremolo.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect1.type.value eq Wah-Wah", async () => {
        const file = "slotA.effects.effect1.type.value eq Wah-Wah.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.amount.midi eq 0", async () => {
        const file = "slotA.effects.effect2.amount.midi eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.amount.midi eq 127", async () => {
        const file = "slotA.effects.effect2.amount.midi eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.amount.morph.afterTouch.to.value eq 10.0", async () => {
        const file = "slotA.effects.effect2.amount.morph.afterTouch.to.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.amount.morph.controlPedal.to.value eq 0.0", async () => {
        const file = "slotA.effects.effect2.amount.morph.controlPedal.to.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.amount.morph.wheel.to.value eq 10.0", async () => {
        const file = "slotA.effects.effect2.amount.morph.wheel.to.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.midi eq 0", async () => {
        const file = "slotA.effects.effect2.rate.midi eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.midi eq 127", async () => {
        const file = "slotA.effects.effect2.rate.midi eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.morph.afterTouch.to.value eq 1@a32", async () => {
        const file = "slotA.effects.effect2.rate.morph.afterTouch.to.value eq 1@a32.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.morph.controlPedal.to.value eq 4@a1", async () => {
        const file = "slotA.effects.effect2.rate.morph.controlPedal.to.value eq 4@a1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.morph.wheel.to.value eq 1@a32", async () => {
        const file = "slotA.effects.effect2.rate.morph.wheel.to.value eq 1@a32.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.value eq 0 and slotA.effects.effect2.rate.morph.afterTouch.to.value eq 10", async () => {
        const file = "slotA.effects.effect2.rate.value eq 0 and slotA.effects.effect2.rate.morph.afterTouch.to.value eq 10.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.value eq 10 and slotA.effects.effect2.rate.morph.controlPedal.to.value eq 0", async () => {
        const file = "slotA.effects.effect2.rate.value eq 10 and slotA.effects.effect2.rate.morph.controlPedal.to.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.value eq 5 and slotA.effects.effect2.rate.morph.wheel.to.value eq 10", async () => {
        const file = "slotA.effects.effect2.rate.value eq 5 and slotA.effects.effect2.rate.morph.wheel.to.value eq 10.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.rate.value eq 5", async () => {
        const file = "slotA.effects.effect2.rate.value eq 5.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.source.value eq Organ", async () => {
        const file = "slotA.effects.effect2.source.value eq Organ.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.source.value eq Synth", async () => {
        const file = "slotA.effects.effect2.source.value eq Synth.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.type.value eq Chorus 1", async () => {
        const file = "slotA.effects.effect2.type.value eq Chorus 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.type.value eq Chorus 2", async () => {
        const file = "slotA.effects.effect2.type.value eq Chorus 2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.type.value eq Flanger", async () => {
        const file = "slotA.effects.effect2.type.value eq Flanger.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.type.value eq Phaser 1", async () => {
        const file = "slotA.effects.effect2.type.value eq Phaser 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.type.value eq Phaser 2", async () => {
        const file = "slotA.effects.effect2.type.value eq Phaser 2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.effects.effect2.type.value eq Vibe", async () => {
        const file = "slotA.effects.effect2.type.value eq Vibe.ns2p";
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

