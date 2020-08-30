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

});

