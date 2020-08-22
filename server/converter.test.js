const {midi2LinearStringValue} = require("./converter");


test('midi linear 127 to equal 100%', () => {
    expect(midi2LinearStringValue(0, 100, 127, 1, "%")).toBe("100.0 %");
})

test('midi linear 64 to equal 50%', () => {
    expect(midi2LinearStringValue(0, 100, 64, 0, "%")).toBe("50 %");
})

test('midi linear 0 to equal 0%', () => {
    expect(midi2LinearStringValue(0, 100, 0, 0, "%")).toBe("0 %");
})

// test('midi linear 0 to equal 0%', () => {
//     expect(midi2LinearValue(14, 21000, 50, 0, "Hz")).toBe("0 %");
// })


