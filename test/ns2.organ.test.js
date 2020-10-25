// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/organ/";

describe("/ns2/organ", () => {
    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 88888888-", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 88888888-.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 123454567", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 123454567.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 888800000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 0-008-888", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 888800000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 0-008-888.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

