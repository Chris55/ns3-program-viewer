// this file is auto-generated with builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns2/ns2s/";

describe("/ns2/ns2s", () => {
    test("id.name eq 200", async () => {
        const file = "id.name eq 200.ns2s";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("synth.oscillators.type.value eq WAVE", async () => {
        const file = "synth.oscillators.type.value eq WAVE.ns2s";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

