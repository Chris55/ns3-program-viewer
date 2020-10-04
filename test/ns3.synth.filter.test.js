// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns3/synth/filter/";

describe("/ns3/synth/filter", () => {
    test("panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq false", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.afterTouch.to.value eq 740 Hz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.afterTouch.to.value eq 740 Hz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.morph.controlPedal.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.controlPedal.to.value eq 14 Hz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.controlPedal.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.controlPedal.to.value eq 14 Hz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.morph.wheel.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.wheel.to.value eq 3.5 kHz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.wheel.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.wheel.to.value eq 3.5 kHz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.value eq 14 Hz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.value eq 14 Hz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.value eq 15 Hz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.value eq 15 Hz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.value eq 21 kHz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.value eq 21 kHz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.value eq 554 Hz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.value eq 554 Hz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.drive.value eq 1", async () => {
        const file = "panelA.synth.filter.drive.value eq 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.drive.value eq 2", async () => {
        const file = "panelA.synth.filter.drive.value eq 2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.drive.value eq 3", async () => {
        const file = "panelA.synth.filter.drive.value eq 3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.drive.value eq Off", async () => {
        const file = "panelA.synth.filter.drive.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.highPassCutoffFrequency.value eq 14 Hz", async () => {
        const file = "panelA.synth.filter.highPassCutoffFrequency.value eq 14 Hz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.highPassCutoffFrequency.value eq 21 kHz", async () => {
        const file = "panelA.synth.filter.highPassCutoffFrequency.value eq 21 kHz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.highPassCutoffFrequency.value eq 587 Hz", async () => {
        const file = "panelA.synth.filter.highPassCutoffFrequency.value eq 587 Hz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack.value eq 1", async () => {
        const file = "panelA.synth.filter.kbTrack.value eq 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack.value eq 1@a3", async () => {
        const file = "panelA.synth.filter.kbTrack.value eq 1@a3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack.value eq 2@a3", async () => {
        const file = "panelA.synth.filter.kbTrack.value eq 2@a3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.kbTrack.value eq Off", async () => {
        const file = "panelA.synth.filter.kbTrack.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.morph.afterTouch.to.value eq 7.0", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.morph.afterTouch.to.value eq 7.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.morph.controlPedal.to.value eq 10.0", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.morph.controlPedal.to.value eq 10.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.morph.wheel.to.value eq 0.6", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.morph.wheel.to.value eq 0.6.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.value eq 0.0 and panelA.synth.filter.modulations.lfoAmount.midi eq 0", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.value eq 0.0 and panelA.synth.filter.modulations.lfoAmount.midi eq 0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.value eq 0.1 and panelA.synth.filter.modulations.lfoAmount.midi eq 1", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.value eq 0.1 and panelA.synth.filter.modulations.lfoAmount.midi eq 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.value eq 10.0 and panelA.synth.filter.modulations.lfoAmount.midi eq 127", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.value eq 10.0 and panelA.synth.filter.modulations.lfoAmount.midi eq 127.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.value eq 5.0 and panelA.synth.filter.modulations.lfoAmount.midi eq 63", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.value eq 5.0 and panelA.synth.filter.modulations.lfoAmount.midi eq 63.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.lfoAmount.value eq 9.9 and panelA.synth.filter.modulations.lfoAmount.midi eq 126", async () => {
        const file = "panelA.synth.filter.modulations.lfoAmount.value eq 9.9 and panelA.synth.filter.modulations.lfoAmount.midi eq 126.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.modEnvAmount.midi eq 125 and panelA.synth.filter.modulations.modEnvAmount.value eq 9.7", async () => {
        const file = "panelA.synth.filter.modulations.modEnvAmount.midi eq 125 and panelA.synth.filter.modulations.modEnvAmount.value eq 9.7.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.modEnvAmount.midi eq 126 and panelA.synth.filter.modulations.modEnvAmount.value eq 9.8", async () => {
        const file = "panelA.synth.filter.modulations.modEnvAmount.midi eq 126 and panelA.synth.filter.modulations.modEnvAmount.value eq 9.8.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.modEnvAmount.midi eq 127 and panelA.synth.filter.modulations.modEnvAmount.value eq 10.0", async () => {
        const file = "panelA.synth.filter.modulations.modEnvAmount.midi eq 127 and panelA.synth.filter.modulations.modEnvAmount.value eq 10.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.modEnvAmount.midi eq 65 and panelA.synth.filter.modulations.modEnvAmount.value eq 0.2", async () => {
        const file = "panelA.synth.filter.modulations.modEnvAmount.midi eq 65 and panelA.synth.filter.modulations.modEnvAmount.value eq 0.2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.velAmount.midi eq 0 and panelA.synth.filter.modulations.velAmount.value eq 10.0", async () => {
        const file = "panelA.synth.filter.modulations.velAmount.midi eq 0 and panelA.synth.filter.modulations.velAmount.value eq 10.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.velAmount.midi eq 2 and panelA.synth.filter.modulations.velAmount.value eq 9.8", async () => {
        const file = "panelA.synth.filter.modulations.velAmount.midi eq 2 and panelA.synth.filter.modulations.velAmount.value eq 9.8.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.velAmount.midi eq 3 and panelA.synth.filter.modulations.velAmount.value eq 9.7", async () => {
        const file = "panelA.synth.filter.modulations.velAmount.midi eq 3 and panelA.synth.filter.modulations.velAmount.value eq 9.7.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.velAmount.midi eq 63 and panelA.synth.filter.modulations.velAmount.value eq 0.2", async () => {
        const file = "panelA.synth.filter.modulations.velAmount.midi eq 63 and panelA.synth.filter.modulations.velAmount.value eq 0.2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.modulations.velAmount.midi eq 64 and panelA.synth.filter.modulations.velAmount.value eq 0.0", async () => {
        const file = "panelA.synth.filter.modulations.velAmount.midi eq 64 and panelA.synth.filter.modulations.velAmount.value eq 0.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.resonance.value eq 0.0", async () => {
        const file = "panelA.synth.filter.resonance.value eq 0.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.resonance.value eq 0.1", async () => {
        const file = "panelA.synth.filter.resonance.value eq 0.1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.resonance.value eq 10.0", async () => {
        const file = "panelA.synth.filter.resonance.value eq 10.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.resonance.value eq 5.0", async () => {
        const file = "panelA.synth.filter.resonance.value eq 5.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.resonance.value eq 9.9", async () => {
        const file = "panelA.synth.filter.resonance.value eq 9.9.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq BP24 and panelA.synth.filter.resonance.morph.afterTouch.to.value eq 9.2", async () => {
        const file = "panelA.synth.filter.type.value eq BP24 and panelA.synth.filter.resonance.morph.afterTouch.to.value eq 9.2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq BP24", async () => {
        const file = "panelA.synth.filter.type.value eq BP24.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq HP24", async () => {
        const file = "panelA.synth.filter.type.value eq HP24.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq LP12", async () => {
        const file = "panelA.synth.filter.type.value eq LP12.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq LP24", async () => {
        const file = "panelA.synth.filter.type.value eq LP24.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq LP@pHP and panelA.synth.filter.highPassCutoffFrequency.morph.wheel.to.value eq 1.4 kHz", async () => {
        const file = "panelA.synth.filter.type.value eq LP@pHP and panelA.synth.filter.highPassCutoffFrequency.morph.wheel.to.value eq 1.4 kHz.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq LP@pHP", async () => {
        const file = "panelA.synth.filter.type.value eq LP@pHP.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.type.value eq Mini Moog", async () => {
        const file = "panelA.synth.filter.type.value eq Mini Moog.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

