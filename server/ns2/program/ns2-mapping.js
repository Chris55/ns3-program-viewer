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

/***
 * Synth Voice Values
 * @type {Map<number, string>}
 */
exports.ns2SynthVoiceMap = new Map([
    [0, "Off"],
    [1, "Legato"],
    [2, "Mono"],
]);

/***
 * Synth Unison Values
 * @type {Map<number, string>}
 */
exports.ns2SynthUnisonMap = new Map([
    [0, "Off"],
    [1, "1"],
    [2, "2"],
    [3, "3"],
    [4, "Multi 1"],
    [5, "Multi 2"],
    [6, "Multi 3"],
]);

/***
 * Synth Vibrato Values
 * @type {Map<number, string>}
 */
exports.ns2SynthVibratoMap = new Map([
    [0, "Off"],
    [1, "Delay 1"],
    [2, "Delay 2"],
    [3, "Delay 3"],
    [4, "AT"],
    [5, "Wheel"],
]);

/***
 * Synth Oscillator Types
 * @type {Map<number, string>}
 */
exports.ns2SynthOscillatorTypeMap = new Map([
    [0, "TRI"],
    [1, "SAW"],
    [2, "PULSE"],
    [3, "SAMPLE"],
    [4, "FM"],
    [5, "WAVE"],
]);

/***
 * Synth Oscillator Analog Style WaveForms
 * @type {Map<number, string>}
 */
exports.ns2SynthOscillatorAnalogStyleWaveFormsMap = new Map([
    [0, "---"],
    [1, "ShP"],
    [2, "dtn"],
    [3, "Snc"],
]);

/***
 * Synth Oscillator FM Style WaveForms
 * @type {Map<number, string>}
 */
exports.ns2SynthOscillatorFmStyleWaveFormsMap = new Map([
    [0, "Sin"],
    [1, "1 1"],
    [2, "2 1"],
    [3, "3 1"],
    [4, "4 1"],
    [5, "5 1"],
    [6, "6 1"],
    [7, "7 1"],
    [8, "8 1"],
    [9, "9 1"],
    [10, "1.1"],
    [11, "2.1"],
    [12, "3.1"],
    [13, "4.1"],
    [14, "5.1"],
    [15, "6.1"],
    [16, "7.1"],
    [17, "8.1"],
    [18, "9.1"],
    [19, "111"],
    [20, "211"],
    [21, "311"],
    [22, "511"],
    [23, "911"],
    [24, "221"],
    [25, "421"],
    [26, "821"],
    [27, "1.11"],
    [28, "1.21"],
    [29, "1.31"],
    [30, "1.51"],
    [31, "1.91"],
    [32, "1.12"],
    [33, "2.12"],
    [34, "3.12"],
    [35, "5.12"],
    [36, "9.12"],
]);

/***
 * Synth Oscillator Shape Mod
 * @type {Map<number, string>}
 */
exports.ns2SynthOscillatorShapeModMap = new Map([
    [0, "10.0"],
    [1, "9.8"],
    [2, "9.6"],
    [3, "9.5"],
    [4, "9.3"],
    [5, "9.1"],
    [6, "9.0"],
    [7, "8.8"],
    [8, "8.7"],
    [9, "8.5"],
    [10, "8.3"],
    [11, "8.2"],
    [12, "8.0"],
    [13, "7.9"],
    [14, "7.7"],
    [15, "7.5"],
    [16, "7.4"],
    [17, "7.2"],
    [18, "7.0"],
    [19, "6.9"],
    [20, "6.7"],
    [21, "6.6"],
    [22, "6.4"],
    [23, "6.2"],
    [24, "6.1"],
    [25, "5.9"],
    [26, "5.8"],
    [27, "5.6"],
    [28, "5.4"],
    [29, "5.3"],
    [30, "5.1"],
    [31, "5.0"],
    [32, "4.8"],
    [33, "4.6"],
    [34, "4.5"],
    [35, "4.3"],
    [36, "4.1"],
    [37, "4.0"],
    [38, "3.8"],
    [39, "3.7"],
    [40, "3.5"],
    [41, "3.3"],
    [42, "3.2"],
    [43, "3.0"],
    [44, "2.9"],
    [45, "2.7"],
    [46, "2.5"],
    [47, "2.4"],
    [48, "2.2"],
    [49, "2.0"],
    [50, "1.9"],
    [51, "1.7"],
    [52, "1.6"],
    [53, "1.4"],
    [54, "1.2"],
    [55, "1.1"],
    [56, "0.9"],
    [57, "0.8"],
    [58, "0.6"],
    [59, "0.4"],
    [60, "0.3"],
    [61, "0.1"],
    [62, "0.0"],
    [63, "0.0"],
    [64, "0.0"],
    [65, "0.0"],
    [66, "0.1"],
    [67, "0.3"],
    [68, "0.4"],
    [69, "0.6"],
    [70, "0.8"],
    [71, "0.9"],
    [72, "1.1"],
    [73, "1.2"],
    [74, "1.4"],
    [75, "1.6"],
    [76, "1.7"],
    [77, "1.9"],
    [78, "2.0"],
    [79, "2.2"],
    [80, "2.4"],
    [81, "2.5"],
    [82, "2.7"],
    [83, "2.9"],
    [84, "3.0"],
    [85, "3.2"],
    [86, "3.3"],
    [87, "3.5"],
    [88, "3.7"],
    [89, "3.8"],
    [90, "4.0"],
    [91, "4.1"],
    [92, "4.3"],
    [93, "4.5"],
    [94, "4.6"],
    [95, "4.8"],
    [96, "5.0"],
    [97, "5.1"],
    [98, "5.3"],
    [99, "5.4"],
    [100, "5.6"],
    [101, "5.8"],
    [102, "5.9"],
    [103, "6.1"],
    [104, "6.2"],
    [105, "6.4"],
    [106, "6.6"],
    [107, "6.7"],
    [108, "6.9"],
    [109, "7.0"],
    [110, "7.2"],
    [111, "7.4"],
    [112, "7.5"],
    [113, "7.7"],
    [114, "7.9"],
    [115, "8.0"],
    [116, "8.2"],
    [117, "8.3"],
    [118, "8.5"],
    [119, "8.7"],
    [120, "8.8"],
    [121, "9.0"],
    [122, "9.1"],
    [123, "9.3"],
    [124, "9.5"],
    [125, "9.6"],
    [126, "9.8"],
    [127, "10.0"],
]);
