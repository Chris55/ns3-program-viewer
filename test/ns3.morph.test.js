// this file is auto-generated with builder.js

const { getNs3TestCase } = require("./helpers");

const root = __dirname + "/ns3/Morph/";

describe("/ns3/Morph", () => {
    test("panelA.morph.organ.level.afterTouch.enabled eq true and panelA.morph.organ.level.afterTouch.to.label eq 0.0 dB", async () => {
        const file = "panelA.morph.organ.level.afterTouch.enabled eq true and panelA.morph.organ.level.afterTouch.to.label eq 0.0 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.morph.organ.level.afterTouch.enabled eq true and panelA.morph.organ.level.afterTouch.to.label eq Off", async () => {
        const file = "panelA.morph.organ.level.afterTouch.enabled eq true and panelA.morph.organ.level.afterTouch.to.label eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.morph.organ.level.controlPedal.enabled eq true and panelA.morph.organ.level.controlPedal.to.label eq 0.0 dB", async () => {
        const file = "panelA.morph.organ.level.controlPedal.enabled eq true and panelA.morph.organ.level.controlPedal.to.label eq 0.0 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.morph.organ.level.controlPedal.enabled eq true and panelA.morph.organ.level.controlPedal.to.label eq Off", async () => {
        const file = "panelA.morph.organ.level.controlPedal.enabled eq true and panelA.morph.organ.level.controlPedal.to.label eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.morph.organ.level.wheel.enabled eq false and panelA.morph.organ.level.afterTouch.enabled eq false and panelA.morph.organ.level.controlPedal.enabled eq false", async () => {
        const file = "panelA.morph.organ.level.wheel.enabled eq false and panelA.morph.organ.level.afterTouch.enabled eq false and panelA.morph.organ.level.controlPedal.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.morph.organ.level.wheel.enabled eq true and panelA.morph.organ.level.wheel.to.label eq 0.0 dB", async () => {
        const file = "panelA.morph.organ.level.wheel.enabled eq true and panelA.morph.organ.level.wheel.to.label eq 0.0 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.morph.organ.level.wheel.enabled eq true and panelA.morph.organ.level.wheel.to.label eq Off", async () => {
        const file = "panelA.morph.organ.level.wheel.enabled eq true and panelA.morph.organ.level.wheel.to.label eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

