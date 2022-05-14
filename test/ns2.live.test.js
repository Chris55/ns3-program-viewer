// this file is auto-generated with test-builder.js

const { loadTestCase } = require("./test-helpers");

const root = __dirname + "/ns2/live/";

describe("/ns2/live", () => {
    test("test/ns2/live/ext eq ns2l.ns2l", async () => {
        const file = "ext eq ns2l.ns2l";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

