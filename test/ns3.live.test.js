// this file is auto-generated with test-builder.js

const { loadTestCase } = require("./helpers");

const root = __dirname + "/ns3/live/";

describe("/ns3/live", () => {
    test("ext eq ns3l", async () => {
        const file = "ext eq ns3l.ns3l";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

