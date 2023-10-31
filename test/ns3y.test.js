// this file is auto-generated with test-builder.js

import { loadTestCase } from "./test-helpers.js";
import * as url from "url";

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const root = dirname + "/ns3/ns3y/";

describe("/ns3/ns3y", () => {
    test("test/ns3/ns3y/id.name eq 2@c01.ns3y", async () => {
        const file = "id.name eq 2@c01.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns3/ns3y/size eq 102.ns3y", async () => {
        const file = "size eq 102.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns3/ns3y/size eq 84.ns3y", async () => {
        const file = "size eq 84.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("test/ns3/ns3y/synth.oscillators.config.value eq 4 Detune and synth.oscillators.control.value eq 0.10.ns3y", async () => {
        const file = "synth.oscillators.config.value eq 4 Detune and synth.oscillators.control.value eq 0.10.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

