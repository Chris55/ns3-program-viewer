// this file is auto-generated with test-builder.js

const { loadTestCase } = require("./test-helpers");

const root = __dirname + "/ns2/synth/envelopes/";

describe("/ns2/synth/envelopes", () => {
    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.amplifier.attack.value eq 103 ms.ns2p", async () => {
        const file = "slotA.synth.envelopes.amplifier.attack.value eq 103 ms.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.amplifier.decay.value eq 206 ms.ns2p", async () => {
        const file = "slotA.synth.envelopes.amplifier.decay.value eq 206 ms.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.amplifier.release.value eq 313 ms.ns2p", async () => {
        const file = "slotA.synth.envelopes.amplifier.release.value eq 313 ms.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.amplifier.velocity.enabled eq false.ns2p", async () => {
        const file = "slotA.synth.envelopes.amplifier.velocity.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.amplifier.velocity.enabled eq true.ns2p", async () => {
        const file = "slotA.synth.envelopes.amplifier.velocity.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.modulation.attack.value eq 1.02 s.ns2p", async () => {
        const file = "slotA.synth.envelopes.modulation.attack.value eq 1.02 s.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.modulation.decay.value eq 2.07 s.ns2p", async () => {
        const file = "slotA.synth.envelopes.modulation.decay.value eq 2.07 s.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.modulation.release.value eq 3.03 s.ns2p", async () => {
        const file = "slotA.synth.envelopes.modulation.release.value eq 3.03 s.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.modulation.velocity.enabled eq false.ns2p", async () => {
        const file = "slotA.synth.envelopes.modulation.velocity.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns2/synth/envelopes/slotA.synth.envelopes.modulation.velocity.enabled eq true.ns2p", async () => {
        const file = "slotA.synth.envelopes.modulation.velocity.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

