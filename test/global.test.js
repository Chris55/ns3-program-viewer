// this file is auto-generated with builder.js

const {getNs3TestCase} = require("./helpers");


const root = __dirname + "/Global/";

describe("/Global", () => {
    test("panelA.enabled eq false and panelB.enabled eq true", async () => {
        const file = "panelA.enabled eq false and panelB.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.enabled eq true and panelB.enabled eq false", async () => {
        const file = "panelA.enabled eq true and panelB.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.enabled eq true and panelB.enabled eq true", async () => {
        const file = "panelA.enabled eq true and panelB.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("program.masterClock.rate eq 240 bpm", async () => {
        const file = "program.masterClock.rate eq 240 bpm.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("program.masterClock.rate eq 30 bpm", async () => {
        const file = "program.masterClock.rate eq 30 bpm.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("program.masterClock.rate eq 31 bpm", async () => {
        const file = "program.masterClock.rate eq 31 bpm.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

