const {getLinearInterpolation} = require("./converter");
const { midi2LinearStringValue } = require("./converter");

test("midi linear 127 to equal 100%", () => {
    expect(midi2LinearStringValue(0, 100, 127, 1, "%")).toBe("100.0 %");
});

test("midi linear 64 to equal 50%", () => {
    expect(midi2LinearStringValue(0, 100, 64, 0, "%")).toBe("50 %");
});

test("midi linear 0 to equal 0%", () => {
    expect(midi2LinearStringValue(0, 100, 0, 0, "%")).toBe("0 %");
});


test("tempo 50 interpolation", () => {
    expect(getLinearInterpolation(1500, 40, 1000, 60, 1250)).toBe(50);
});

test("tempo 42 interpolation", () => {
    const actual = Math.trunc(getLinearInterpolation(1500, 40, 1360, 44, 1420));
    expect(actual).toBe(42);
});
