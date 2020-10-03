

/***
 * Keyboard Zone Values
 *
 * @type {Map<number, (string|boolean[])[]>}
 */
exports.ns2KbZoneMap = new Map([
    [0, ["LO", [true, false, false]]],
    [1, ["LO UP", [true, true, false]]],
    [2, ["UP", [false, true, false]]],
    [3, ["UP HI", [false, true, true]]],
    [4, ["HI", [false, false, true]]],
    [5, ["LO UP HI", [true, true, true]]],
]);

/***
 * Piano Types
 * @type {Map<number, string>}
 */
exports.ns2PianoTypeMap = new Map([
    [0, "Grand"],
    [1, "Upright"],
    [2, "E Piano 1"],
    [3, "E Piano 2"],
    [4, "Clavinet"],
    [5, "Harpsi"],
]);
