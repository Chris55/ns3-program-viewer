// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/extern/";

describe("/ns2/extern", () => {
    test("slotA.extern.control.value eq Midi CC", async () => {
        const file = "slotA.extern.control.value eq Midi CC.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.control.value eq Program", async () => {
        const file = "slotA.extern.control.value eq Program.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.control.value eq Volume", async () => {
        const file = "slotA.extern.control.value eq Volume.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.enabled eq false", async () => {
        const file = "slotA.extern.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.enabled eq true", async () => {
        const file = "slotA.extern.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.kbZone.value eq HI", async () => {
        const file = "slotA.extern.kbZone.value eq HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.kbZone.value eq LO UP", async () => {
        const file = "slotA.extern.kbZone.value eq LO UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.kbZone.value eq LO", async () => {
        const file = "slotA.extern.kbZone.value eq LO.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.kbZone.value eq UP HI", async () => {
        const file = "slotA.extern.kbZone.value eq UP HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.kbZone.value eq UP", async () => {
        const file = "slotA.extern.kbZone.value eq UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.midiCc.value eq 0", async () => {
        const file = "slotA.extern.midiCc.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.midiCc.value eq 127 and slotA.extern.midiCc.morph.afterTouch.to.value eq 0", async () => {
        const file = "slotA.extern.midiCc.value eq 127 and slotA.extern.midiCc.morph.afterTouch.to.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.midiCc.value eq 127", async () => {
        const file = "slotA.extern.midiCc.value eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.midiCc.value eq 63", async () => {
        const file = "slotA.extern.midiCc.value eq 63.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.octaveShift.value eq -7 oct", async () => {
        const file = "slotA.extern.octaveShift.value eq -7 oct.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.octaveShift.value eq @p6 oct", async () => {
        const file = "slotA.extern.octaveShift.value eq @p6 oct.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.pitchStick.enabled eq false", async () => {
        const file = "slotA.extern.pitchStick.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.pitchStick.enabled eq true", async () => {
        const file = "slotA.extern.pitchStick.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.program.value eq 1", async () => {
        const file = "slotA.extern.program.value eq 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.program.value eq 128", async () => {
        const file = "slotA.extern.program.value eq 128.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.program.value eq 63", async () => {
        const file = "slotA.extern.program.value eq 63.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.sustainPedal.enabled eq false", async () => {
        const file = "slotA.extern.sustainPedal.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.sustainPedal.enabled eq true", async () => {
        const file = "slotA.extern.sustainPedal.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.volume.value eq 0", async () => {
        const file = "slotA.extern.volume.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.volume.value eq 127 and slotA.extern.volume.morph.wheel.to.value eq 0", async () => {
        const file = "slotA.extern.volume.value eq 127 and slotA.extern.volume.morph.wheel.to.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.volume.value eq 127", async () => {
        const file = "slotA.extern.volume.value eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.extern.volume.value eq 63", async () => {
        const file = "slotA.extern.volume.value eq 63.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

