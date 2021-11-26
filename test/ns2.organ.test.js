// this file is auto-generated with test-builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/organ/";

describe("/ns2/organ", () => {
    test("slotA.organ.kbGate.enabled eq true", async () => {
        const file = "slotA.organ.kbGate.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.kbZone.value eq HI", async () => {
        const file = "slotA.organ.kbZone.value eq HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.kbZone.value eq LO UP HI", async () => {
        const file = "slotA.organ.kbZone.value eq LO UP HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.kbZone.value eq LO UP", async () => {
        const file = "slotA.organ.kbZone.value eq LO UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.kbZone.value eq LO", async () => {
        const file = "slotA.organ.kbZone.value eq LO.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.kbZone.value eq UP HI", async () => {
        const file = "slotA.organ.kbZone.value eq UP HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.kbZone.value eq UP", async () => {
        const file = "slotA.organ.kbZone.value eq UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.latchPedal.enabled eq true", async () => {
        const file = "slotA.organ.latchPedal.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.octaveShift.value eq -6 oct", async () => {
        const file = "slotA.organ.octaveShift.value eq -6 oct.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.octaveShift.value eq -7 oct", async () => {
        const file = "slotA.organ.octaveShift.value eq -7 oct.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.octaveShift.value eq @p6 oct", async () => {
        const file = "slotA.organ.octaveShift.value eq @p6 oct.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.pitchStick.enabled eq true", async () => {
        const file = "slotA.organ.pitchStick.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.sustainPedal.enabled eq true", async () => {
        const file = "slotA.organ.sustainPedal.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 01 2345 678 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 88 8888 88-", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 01 2345 678 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 88 8888 88-.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 01 2345 678 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 12 3454 567", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 01 2345 678 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 12 3454 567.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 88 8800 000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 0- 008- 888", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.drawbars.value eq 88 8800 000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 0- 008- 888.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.decayFast.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.decayFast.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.harmonicThird.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.harmonicThird.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.volumeSoft.enabled eq false", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.volumeSoft.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.volumeSoft.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.percussion.volumeSoft.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq C1", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq C1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq C2", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq C2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq C3", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq C3.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq V1", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq V1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq V2", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq V2.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq V3", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset1.vibrato.mode.value eq V3.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset2.drawbars.value eq 01 2345 678 and slotA.organ.preset2.drawbars.morph.wheel.to.value eq 12 3454 567", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset2.drawbars.value eq 01 2345 678 and slotA.organ.preset2.drawbars.morph.wheel.to.value eq 12 3454 567.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq B3 and slotA.organ.preset2.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq B3 and slotA.organ.preset2.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset1.drawbars.value eq 000011111 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 111100000", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset1.drawbars.value eq 000011111 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 111100000.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset1.drawbars.value eq 000011111 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 1-1-0-0-0", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset1.drawbars.value eq 000011111 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 1-1-0-0-0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset1.drawbars.value eq 111100000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 000011111", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset1.drawbars.value eq 111100000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 000011111.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Heavy@aFast (C3)", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Heavy@aFast (C3).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Heavy@aSlow (C2)", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Heavy@aSlow (C2).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Light@aFast (V2)", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Light@aFast (V2).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Light@aSlow (V1)", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset1.vibrato.mode.value eq Light@aSlow (V1).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset2.drawbars.value eq 111100000 and slotA.organ.preset2.drawbars.morph.wheel.to.value eq 0-0-1-1-1", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset2.drawbars.value eq 111100000 and slotA.organ.preset2.drawbars.morph.wheel.to.value eq 0-0-1-1-1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Farfisa and slotA.organ.preset2.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq Farfisa and slotA.organ.preset2.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 88888888-", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.afterTouch.to.value eq 88888888-.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 123454567", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset1.drawbars.value eq 012345678 and slotA.organ.preset1.drawbars.morph.wheel.to.value eq 123454567.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset1.drawbars.value eq 888800000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 0-008-888", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset1.drawbars.value eq 888800000 and slotA.organ.preset1.drawbars.morph.controlPedal.to.value eq 0-008-888.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.mode.value eq Less (V1)", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.mode.value eq Less (V1).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.mode.value eq More (V2)", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.mode.value eq More (V2).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.mode.value eq Original (V3)", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset1.vibrato.mode.value eq Original (V3).ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset2.drawbars.value eq 012345678 and slotA.organ.preset2.drawbars.morph.wheel.to.value eq 123454567", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset2.drawbars.value eq 012345678 and slotA.organ.preset2.drawbars.morph.wheel.to.value eq 123454567.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.type.value eq Vox and slotA.organ.preset2.enabled eq true", async () => {
        const file = "slotA.organ.type.value eq Vox and slotA.organ.preset2.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.volume.value eq 0.0 dB and slotA.organ.volume.morph.afterTouch.to.value eq Off", async () => {
        const file = "slotA.organ.volume.value eq 0.0 dB and slotA.organ.volume.morph.afterTouch.to.value eq Off.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.volume.value eq 0.0 dB and slotA.organ.volume.morph.controlPedal.to.value eq Off", async () => {
        const file = "slotA.organ.volume.value eq 0.0 dB and slotA.organ.volume.morph.controlPedal.to.value eq Off.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.volume.value eq 0.0 dB and slotA.organ.volume.morph.wheel.to.value eq Off", async () => {
        const file = "slotA.organ.volume.value eq 0.0 dB and slotA.organ.volume.morph.wheel.to.value eq Off.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.volume.value eq Off and slotA.organ.volume.morph.afterTouch.to.value eq 0.0 dB", async () => {
        const file = "slotA.organ.volume.value eq Off and slotA.organ.volume.morph.afterTouch.to.value eq 0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.volume.value eq Off and slotA.organ.volume.morph.controlPedal.to.value eq 0.0 dB", async () => {
        const file = "slotA.organ.volume.value eq Off and slotA.organ.volume.morph.controlPedal.to.value eq 0.0 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.organ.volume.value eq Off and slotA.organ.volume.morph.wheel.to.value eq -0.1 dB", async () => {
        const file = "slotA.organ.volume.value eq Off and slotA.organ.volume.morph.wheel.to.value eq -0.1 dB.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

