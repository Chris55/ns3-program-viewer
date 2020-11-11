// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/synth/lfo/";

describe("/ns2/synth/lfo", () => {
    test("slotA.synth.lfo.masterClock.enabled eq false", async () => {
        const file = "slotA.synth.lfo.masterClock.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.masterClock.enabled eq true", async () => {
        const file = "slotA.synth.lfo.masterClock.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.rate.value eq 1.0 Hz", async () => {
        const file = "slotA.synth.lfo.rate.value eq 1.0 Hz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.rate.value eq 15 Hz", async () => {
        const file = "slotA.synth.lfo.rate.value eq 15 Hz.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.rate.value eq 1@a1", async () => {
        const file = "slotA.synth.lfo.rate.value eq 1@a1.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.rate.value eq 1@a4T", async () => {
        const file = "slotA.synth.lfo.rate.value eq 1@a4T.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.wave.value eq S@aH", async () => {
        const file = "slotA.synth.lfo.wave.value eq S@aH.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.wave.value eq SAW", async () => {
        const file = "slotA.synth.lfo.wave.value eq SAW.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("slotA.synth.lfo.wave.value eq TRI", async () => {
        const file = "slotA.synth.lfo.wave.value eq TRI.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

