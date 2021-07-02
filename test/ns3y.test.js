// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns3/ns3y/";

describe("/ns3/ns3y", () => {
    test("id.name eq 2@c01", async () => {
        const file = "id.name eq 2@c01.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("size eq 102", async () => {
        const file = "size eq 102.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("size eq 84", async () => {
        const file = "size eq 84.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("synth.oscillators.config.value eq 4 Detune and synth.oscillators.control.value eq 0.10", async () => {
        const file = "synth.oscillators.config.value eq 4 Detune and synth.oscillators.control.value eq 0.10.ns3y";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

