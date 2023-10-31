// this file is auto-generated with test-builder.js

import { loadTestCase } from "./test-helpers.js";
import * as url from "url";

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const root = dirname + "/ns2/live/";

describe("/ns2/live", () => {
    test("test/ns2/live/ext eq ns2l.ns2l", async () => {
        const file = "ext eq ns2l.ns2l";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

