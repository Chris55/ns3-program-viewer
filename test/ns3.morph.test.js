// this file is auto-generated with builder.js

const { getNs3TestCase } = require("./helpers");

const root = __dirname + "/ns3/Morph/";

describe("/ns3/Morph", () => {
    test("panelA.organ.volume.morph.afterTouch.enabled eq true and panelA.organ.volume.morph.afterTouch.to.label eq 0.0 dB", async () => {
        const file = "panelA.organ.volume.morph.afterTouch.enabled eq true and panelA.organ.volume.morph.afterTouch.to.label eq 0.0 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.morph.afterTouch.enabled eq true and panelA.organ.volume.morph.afterTouch.to.label eq Off", async () => {
        const file = "panelA.organ.volume.morph.afterTouch.enabled eq true and panelA.organ.volume.morph.afterTouch.to.label eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.morph.controlPedal.enabled eq true and panelA.organ.volume.morph.controlPedal.to.label eq 0.0 dB", async () => {
        const file = "panelA.organ.volume.morph.controlPedal.enabled eq true and panelA.organ.volume.morph.controlPedal.to.label eq 0.0 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.morph.controlPedal.enabled eq true and panelA.organ.volume.morph.controlPedal.to.label eq Off", async () => {
        const file = "panelA.organ.volume.morph.controlPedal.enabled eq true and panelA.organ.volume.morph.controlPedal.to.label eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.morph.wheel.enabled eq false and panelA.organ.volume.morph.afterTouch.enabled eq false and panelA.organ.volume.morph.controlPedal.enabled eq false", async () => {
        const file = "panelA.organ.volume.morph.wheel.enabled eq false and panelA.organ.volume.morph.afterTouch.enabled eq false and panelA.organ.volume.morph.controlPedal.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.morph.wheel.enabled eq true and panelA.organ.volume.morph.wheel.to.label eq 0.0 dB", async () => {
        const file = "panelA.organ.volume.morph.wheel.enabled eq true and panelA.organ.volume.morph.wheel.to.label eq 0.0 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.morph.wheel.enabled eq true and panelA.organ.volume.morph.wheel.to.label eq Off", async () => {
        const file = "panelA.organ.volume.morph.wheel.enabled eq true and panelA.organ.volume.morph.wheel.to.label eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq false", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.afterTouch.to.label eq 740 Hz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.afterTouch.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.afterTouch.to.label eq 740 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.morph.controlPedal.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.controlPedal.to.label eq 14 Hz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.controlPedal.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.controlPedal.to.label eq 14 Hz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.filter.cutoffFrequency.morph.wheel.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.wheel.to.label eq 3.5 kHz", async () => {
        const file = "panelA.synth.filter.cutoffFrequency.morph.wheel.enabled eq true and panelA.synth.filter.cutoffFrequency.morph.wheel.to.label eq 3.5 kHz.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.oscillators.control.morph.afterTouch.enabled eq true and panelA.synth.oscillators.control.morph.afterTouch.to.label eq 52@a48", async () => {
        const file = "panelA.synth.oscillators.control.morph.afterTouch.enabled eq true and panelA.synth.oscillators.control.morph.afterTouch.to.label eq 52@a48.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.oscillators.control.morph.controlPedal.enabled eq true and panelA.synth.oscillators.control.morph.controlPedal.to.label eq 20@a80", async () => {
        const file = "panelA.synth.oscillators.control.morph.controlPedal.enabled eq true and panelA.synth.oscillators.control.morph.controlPedal.to.label eq 20@a80.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.synth.oscillators.control.morph.wheel.enabled eq true and panelA.synth.oscillators.control.morph.wheel.to.label eq 79@a21", async () => {
        const file = "panelA.synth.oscillators.control.morph.wheel.enabled eq true and panelA.synth.oscillators.control.morph.wheel.to.label eq 79@a21.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

