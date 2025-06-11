// this file is auto-generated with test-builder.js

import { loadTestCase } from "./test-helpers";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = __dirname + "/ns2/synth/filter/";

describe("/ns2/synth/filter", () => {
    test("test/ns2/synth/filter/slotA.synth.filter.frequency.value eq 20 Hz and slotA.synth.filter.frequency.morph.afterTouch.to.value eq 21 kHz.ns2p", async () => {
        const file = "slotA.synth.filter.frequency.value eq 20 Hz and slotA.synth.filter.frequency.morph.afterTouch.to.value eq 21 kHz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.frequency.value eq 20 Hz and slotA.synth.filter.frequency.morph.controlPedal.to.value eq 21 kHz.ns2p", async () => {
        const file = "slotA.synth.filter.frequency.value eq 20 Hz and slotA.synth.filter.frequency.morph.controlPedal.to.value eq 21 kHz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.frequency.value eq 20 Hz and slotA.synth.filter.frequency.morph.wheel.to.value eq 21 kHz.ns2p", async () => {
        const file = "slotA.synth.filter.frequency.value eq 20 Hz and slotA.synth.filter.frequency.morph.wheel.to.value eq 21 kHz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.frequency.value eq 21 kHz and slotA.synth.filter.frequency.morph.wheel.to.value eq 20 Hz.ns2p", async () => {
        const file = "slotA.synth.filter.frequency.value eq 21 kHz and slotA.synth.filter.frequency.morph.wheel.to.value eq 20 Hz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.frequency.value eq 385 Hz and slotA.synth.filter.frequency.morph.wheel.to.value eq 21 kHz.ns2p", async () => {
        const file = "slotA.synth.filter.frequency.value eq 385 Hz and slotA.synth.filter.frequency.morph.wheel.to.value eq 21 kHz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.kbTrack.enabled eq false.ns2p", async () => {
        const file = "slotA.synth.filter.kbTrack.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.kbTrack.enabled eq true.ns2p", async () => {
        const file = "slotA.synth.filter.kbTrack.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation1.value eq 0.0.ns2p", async () => {
        const file = "slotA.synth.filter.modulation1.value eq 0.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation1.value eq 10.0.ns2p", async () => {
        const file = "slotA.synth.filter.modulation1.value eq 10.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation1.value eq 5.0.ns2p", async () => {
        const file = "slotA.synth.filter.modulation1.value eq 5.0.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation2.value eq 0.0 and slotA.synth.filter.modulation2.label eq VEL AMT.ns2p", async () => {
        const file = "slotA.synth.filter.modulation2.value eq 0.0 and slotA.synth.filter.modulation2.label eq VEL AMT.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation2.value eq 0.0 and slotA.synth.filter.modulation2.label eq VEL@aEnv AMT.ns2p", async () => {
        const file = "slotA.synth.filter.modulation2.value eq 0.0 and slotA.synth.filter.modulation2.label eq VEL@aEnv AMT.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation2.value eq 10.0 and slotA.synth.filter.modulation2.label eq Mod Env AMT.ns2p", async () => {
        const file = "slotA.synth.filter.modulation2.value eq 10.0 and slotA.synth.filter.modulation2.label eq Mod Env AMT.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation2.value eq 10.0 and slotA.synth.filter.modulation2.label eq VEL AMT.ns2p", async () => {
        const file = "slotA.synth.filter.modulation2.value eq 10.0 and slotA.synth.filter.modulation2.label eq VEL AMT.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation2.value eq 5.0 and slotA.synth.filter.modulation2.label eq Mod Env AMT.ns2p", async () => {
        const file = "slotA.synth.filter.modulation2.value eq 5.0 and slotA.synth.filter.modulation2.label eq Mod Env AMT.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.modulation2.value eq 5.0 and slotA.synth.filter.modulation2.label eq VEL AMT.ns2p", async () => {
        const file = "slotA.synth.filter.modulation2.value eq 5.0 and slotA.synth.filter.modulation2.label eq VEL AMT.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.type.value eq BP.ns2p", async () => {
        const file = "slotA.synth.filter.type.value eq BP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.type.value eq HP.ns2p", async () => {
        const file = "slotA.synth.filter.type.value eq HP.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.type.value eq LP12.ns2p", async () => {
        const file = "slotA.synth.filter.type.value eq LP12.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.type.value eq LP24.ns2p", async () => {
        const file = "slotA.synth.filter.type.value eq LP24.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/filter/slotA.synth.filter.type.value eq NOTCH.ns2p", async () => {
        const file = "slotA.synth.filter.type.value eq NOTCH.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

