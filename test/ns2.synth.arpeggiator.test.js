// this file is auto-generated with test-builder.js

import { loadTestCase } from "./test-helpers";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const root = __dirname + "/ns2/synth/arpeggiator/";

describe("/ns2/synth/arpeggiator", () => {
    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.masterClock.enabled eq false.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.masterClock.enabled eq false.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.masterClock.enabled eq true.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.masterClock.enabled eq true.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.pattern.value eq DN.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.pattern.value eq DN.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.pattern.value eq RANDOM.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.pattern.value eq RANDOM.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.pattern.value eq UP@aDN.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.pattern.value eq UP@aDN.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.range.value eq 2 Octaves.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.range.value eq 2 Octaves.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.range.value eq 4 Octaves.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.range.value eq 4 Octaves.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.rate.value eq 160 BPM.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.rate.value eq 160 BPM.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.rate.value eq 1@a2T.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.rate.value eq 1@a2T.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.rate.value eq 1@a8T.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.rate.value eq 1@a8T.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/synth/arpeggiator/slotA.synth.arpeggiator.rate.value eq 90@c16 BPM.ns2p", async () => {
        const file = "slotA.synth.arpeggiator.rate.value eq 90@c16 BPM.ns2p";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

