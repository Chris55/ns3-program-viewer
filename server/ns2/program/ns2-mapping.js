

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

/***
 * Piano Slot Detune
 * @type {Map<number, string>}
 */
exports.ns2PianoSlotDetuneMap = new Map([
    [0, "Off"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
    [4, "4"],
]);

/***
 * Piano Clavinet Model
 * @type {Map<number, string>}
 */
exports.ns2PianoClavinetModelMap = new Map([
    [0, "A"],
    [1, "B"],
    [2, "C"],
    [3, "D"],
]);

/***
 * Piano Clavinet Eq
 * @type {Map<number, string>}
 */
exports.ns2PianoClavinetEqMap = new Map([
    [0, "Off"],
    [1, "Soft"],
    [2, "Medium"],
    [3, "Soft+Medium"],
]);

/***
 * Piano Clavinet Eq Hi
 * @type {Map<number, string>}
 */
exports.ns2PianoClavinetEqHiMap = new Map([
    [0, "Off"],
    [1, "Treble"],
    [2, "Brilliant"],
    [3, "Treble+Brilliant"],
]);

/***
 * Piano Dynamics
 * @type {Map<number, string>}
 */
exports.ns2PianoDynamicsMap = new Map([
    [0, "0"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
]);

/***
 * Organ Types
 * @type {Map<number, string>}
 */
exports.ns2OrganTypeMap = new Map([
    [0, "B3"],
    [1, "Vox"],
    [2, "Farfisa"],
]);

/***
 * Organ B3 Vibrato Modes
 * @type {Map<number, string>}
 */
exports.ns2OrganB3VibratoModeMap = new Map([
    [0, "V1"],
    [1, "C1"],
    [2, "V2"],
    [3, "C2"],
    [4, "V3"],
    [5, "C3"],
]);

/***
 * Organ Vox Vibrato Modes
 * @type {Map<number, string>}
 */
exports.ns2OrganVoxVibratoModeMap = new Map([
    [0, "Less (V1)"],
    [1, "More (V2)"],
    [2, "Original (V3)"],
]);

/***
 * Organ Farfisa Vibrato Modes
 * @type {Map<number, string>}
 */
exports.ns2OrganFarfisaVibratoModeMap = new Map([
    [0, "Light/Slow (V1)"],
    [1, "Light/Fast (V2)"],
    [2, "Heavy/Slow (C2)"],
    [3, "Heavy/Fast (C3)"],
]);
