// this file is auto-generated with test-builder.js

import { loadTestCase } from "./test-helpers";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = __dirname + "/ns2/synth/lfo/";

describe("/ns2/synth/lfo", () => {
    test("test/ns2/synth/lfo/slotA.synth.lfo.masterClock.enabled eq false.ns2p", async () => {
        const file = "slotA.synth.lfo.masterClock.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.masterClock.enabled eq true.ns2p", async () => {
        const file = "slotA.synth.lfo.masterClock.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.rate.value eq 1.0 Hz.ns2p", async () => {
        const file = "slotA.synth.lfo.rate.value eq 1.0 Hz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.rate.value eq 15 Hz.ns2p", async () => {
        const file = "slotA.synth.lfo.rate.value eq 15 Hz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.rate.value eq 1@a1.ns2p", async () => {
        const file = "slotA.synth.lfo.rate.value eq 1@a1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.rate.value eq 1@a4T.ns2p", async () => {
        const file = "slotA.synth.lfo.rate.value eq 1@a4T.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.wave.value eq S@aH.ns2p", async () => {
        const file = "slotA.synth.lfo.wave.value eq S@aH.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.wave.value eq SAW.ns2p", async () => {
        const file = "slotA.synth.lfo.wave.value eq SAW.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/lfo/slotA.synth.lfo.wave.value eq TRI.ns2p", async () => {
        const file = "slotA.synth.lfo.wave.value eq TRI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

