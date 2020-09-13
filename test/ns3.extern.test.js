// this file is auto-generated with builder.js

const { getNs3TestCase } = require("./helpers");

const root = __dirname + "/ns3/extern/";

describe("/ns3/extern", () => {
    test("panelA.extern.control.value eq Midi CC", async () => {
        const file = "panelA.extern.control.value eq Midi CC.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.control.value eq Program", async () => {
        const file = "panelA.extern.control.value eq Program.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.control.value eq Volume", async () => {
        const file = "panelA.extern.control.value eq Volume.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.enabled eq false", async () => {
        const file = "panelA.extern.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.enabled eq true and panelA.extern.kbZone.value eq -OO-", async () => {
        const file = "panelA.extern.enabled eq true and panelA.extern.kbZone.value eq -OO-.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.enabled eq true and panelA.extern.kbZone.value eq 0000", async () => {
        const file = "panelA.extern.enabled eq true and panelA.extern.kbZone.value eq 0000.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.midiCc.midi eq 0", async () => {
        const file = "panelA.extern.midiCc.midi eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.midiCc.midi eq 127", async () => {
        const file = "panelA.extern.midiCc.midi eq 127.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.octaveShift.value eq -1", async () => {
        const file = "panelA.extern.octaveShift.value eq -1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.octaveShift.value eq 0", async () => {
        const file = "panelA.extern.octaveShift.value eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.octaveShift.value eq 1", async () => {
        const file = "panelA.extern.octaveShift.value eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.pitchStick.enabled eq false and panelA.extern.sustainPedal.enabled eq false", async () => {
        const file = "panelA.extern.pitchStick.enabled eq false and panelA.extern.sustainPedal.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.pitchStick.enabled eq true", async () => {
        const file = "panelA.extern.pitchStick.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.program.midi eq 0", async () => {
        const file = "panelA.extern.program.midi eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.program.midi eq 127", async () => {
        const file = "panelA.extern.program.midi eq 127.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.sustainPedal.enabled eq true", async () => {
        const file = "panelA.extern.sustainPedal.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.volume.midi eq 1", async () => {
        const file = "panelA.extern.volume.midi eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.volume.midi eq 127", async () => {
        const file = "panelA.extern.volume.midi eq 127.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.volume.midi eq 64", async () => {
        const file = "panelA.extern.volume.midi eq 64.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.volume.morph.afterTouch.to.midi eq 100", async () => {
        const file = "panelA.extern.volume.morph.afterTouch.to.midi eq 100.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.volume.morph.controlPedal.to.midi eq 0", async () => {
        const file = "panelA.extern.volume.morph.controlPedal.to.midi eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.extern.volume.morph.wheel.to.midi eq 126", async () => {
        const file = "panelA.extern.volume.morph.wheel.to.midi eq 126.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

