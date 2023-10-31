// this file is auto-generated with test-builder.js

import { loadTestCase } from "./test-helpers.js";
import * as url from "url";

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const root = dirname + "/ns2/ns2s/";

describe("/ns2/ns2s", () => {
    test("test/ns2/ns2s/id.name eq 200.ns2s", async () => {
        const file = "id.name eq 200.ns2s";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/ns2s/size eq 60.ns2s", async () => {
        const file = "size eq 60.ns2s";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/ns2s/size eq 78.ns2s", async () => {
        const file = "size eq 78.ns2s";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns2/ns2s/synth.oscillators.type.value eq WAVE.ns2s", async () => {
        const file = "synth.oscillators.type.value eq WAVE.ns2s";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

