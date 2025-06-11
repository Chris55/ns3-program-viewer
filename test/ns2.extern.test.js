// this file is auto-generated with test-builder.js

import { loadTestCase } from "./test-helpers";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = __dirname + "/ns2/extern/";

describe("/ns2/extern", () => {
    test("test/ns2/extern/slotA.extern.control.value eq Midi CC.ns2p", async () => {
        const file = "slotA.extern.control.value eq Midi CC.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.control.value eq Program.ns2p", async () => {
        const file = "slotA.extern.control.value eq Program.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.control.value eq Volume.ns2p", async () => {
        const file = "slotA.extern.control.value eq Volume.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.enabled eq false.ns2p", async () => {
        const file = "slotA.extern.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.enabled eq true.ns2p", async () => {
        const file = "slotA.extern.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.kbZone.value eq HI.ns2p", async () => {
        const file = "slotA.extern.kbZone.value eq HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.kbZone.value eq LO UP.ns2p", async () => {
        const file = "slotA.extern.kbZone.value eq LO UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.kbZone.value eq LO.ns2p", async () => {
        const file = "slotA.extern.kbZone.value eq LO.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.kbZone.value eq UP HI.ns2p", async () => {
        const file = "slotA.extern.kbZone.value eq UP HI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.kbZone.value eq UP.ns2p", async () => {
        const file = "slotA.extern.kbZone.value eq UP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.midiCc.value eq 0.ns2p", async () => {
        const file = "slotA.extern.midiCc.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.midiCc.value eq 127 and slotA.extern.midiCc.morph.afterTouch.to.value eq 0.ns2p", async () => {
        const file = "slotA.extern.midiCc.value eq 127 and slotA.extern.midiCc.morph.afterTouch.to.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.midiCc.value eq 127.ns2p", async () => {
        const file = "slotA.extern.midiCc.value eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.midiCc.value eq 63.ns2p", async () => {
        const file = "slotA.extern.midiCc.value eq 63.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.octaveShift.value eq -7 oct.ns2p", async () => {
        const file = "slotA.extern.octaveShift.value eq -7 oct.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.octaveShift.value eq @p6 oct.ns2p", async () => {
        const file = "slotA.extern.octaveShift.value eq @p6 oct.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.pitchStick.enabled eq false.ns2p", async () => {
        const file = "slotA.extern.pitchStick.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.pitchStick.enabled eq true.ns2p", async () => {
        const file = "slotA.extern.pitchStick.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.program.value eq 1.ns2p", async () => {
        const file = "slotA.extern.program.value eq 1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.program.value eq 128.ns2p", async () => {
        const file = "slotA.extern.program.value eq 128.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.program.value eq 63.ns2p", async () => {
        const file = "slotA.extern.program.value eq 63.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.sustainPedal.enabled eq false.ns2p", async () => {
        const file = "slotA.extern.sustainPedal.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.sustainPedal.enabled eq true.ns2p", async () => {
        const file = "slotA.extern.sustainPedal.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.volume.value eq 0.ns2p", async () => {
        const file = "slotA.extern.volume.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.volume.value eq 127 and slotA.extern.volume.morph.wheel.to.value eq 0.ns2p", async () => {
        const file = "slotA.extern.volume.value eq 127 and slotA.extern.volume.morph.wheel.to.value eq 0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.volume.value eq 127.ns2p", async () => {
        const file = "slotA.extern.volume.value eq 127.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/extern/slotA.extern.volume.value eq 63.ns2p", async () => {
        const file = "slotA.extern.volume.value eq 63.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

