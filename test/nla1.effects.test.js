// this file is auto-generated with test-builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/nla1/effects/";

describe("/nla1/effects", () => {
    test("effects.reverb.enabled eq false", async () => {
        const file = "effects.reverb.enabled eq false.nlas";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("effects.reverb.enabled eq true", async () => {
        const file = "effects.reverb.enabled eq true.nlas";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

