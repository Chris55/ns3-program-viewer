import { getLinearInterpolation, midi2LinearStringValue, round } from "./converter.js";

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

test("round 1.233", () => {
    const actual = round(1.233, 2);
    expect(actual).toBe(1.23);
});

test("round 1.238", () => {
    const actual = round(1.238, 2);
    expect(actual).toBe(1.24);
});

test("round 1.235", () => {
    const actual = round(1.235, 2);
    expect(actual).toBe(1.24);
});

test("round 1.005", () => {
    const actual = round(1.005, 2);
    expect(actual).toBe(1.01);
});
