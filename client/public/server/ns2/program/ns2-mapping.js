/***
 * Transpose Values
 * @type {Map<number, string>}
 */
exports.ns2TransposeMap = new Map([
    [0, "-6"],
    [1, "-5"],
    [2, "-4"],
    [3, "-3"],
    [4, "-2"],
    [5, "-1"],
    [6, "OFF"],
    [7, "+1"],
    [8, "+2"],
    [9, "+3"],
    [10, "+4"],
    [11, "+5"],
    [12, "+6"],
]);

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
 * Split Note Values
 * @type {Map<number, string>}
 */
exports.ns2SplitNoteMap = new Map([
    [0, "F2"],
    [1, "C3"],
    [2, "F3"],
    [3, "C4"],
    [4, "F4"],
    [5, "C5"],
    [6, "F5"],
    [7, "C6"],
    [8, "F6"],
    [9, "C7"],
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

/***
 * Synth Filter Types
 * @type {Map<number, string>}
 */
exports.ns2SynthFilterTypeMap = new Map([
    [0, "LP12"],
    [1, "LP24"],
    [2, "HP"],
    [3, "NOTCH"],
    [4, "BP"],
]);

/***
 * Synth Filter Frequency Values
 * @type {Map<number, string>}
 */
exports.ns2SynthFilterFrequencyMap = new Map([
    [0, "20 Hz"],
    [1, "21 Hz"],
    [2, "22 Hz"],
    [3, "24 Hz"],
    [4, "25 Hz"],
    [5, "26 Hz"],
    [6, "28 Hz"],
    [7, "29 Hz"],
    [8, "31 Hz"],
    [9, "33 Hz"],
    [10, "35 Hz"],
    [11, "37 Hz"],
    [12, "39 Hz"],
    [13, "41 Hz"],
    [14, "43 Hz"],
    [15, "45 Hz"],
    [16, "48 Hz"],
    [17, "51 Hz"],
    [18, "54 Hz"],
    [19, "57 Hz"],
    [20, "60 Hz"],
    [21, "63 Hz"],
    [22, "67 Hz"],
    [23, "70 Hz"],
    [24, "74 Hz"],
    [25, "79 Hz"],
    [26, "83 Hz"],
    [27, "88 Hz"],
    [28, "93 Hz"],
    [29, "98 Hz"],
    [30, "103 Hz"],
    [31, "109 Hz"],
    [32, "115 Hz"],
    [33, "122 Hz"],
    [34, "129 Hz"],
    [35, "136 Hz"],
    [36, "144 Hz"],
    [37, "152 Hz"],
    [38, "160 Hz"],
    [39, "169 Hz"],
    [40, "179 Hz"],
    [41, "189 Hz"],
    [42, "200 Hz"],
    [43, "211 Hz"],
    [44, "223 Hz"],
    [45, "235 Hz"],
    [46, "248 Hz"],
    [47, "262 Hz"],
    [48, "277 Hz"],
    [49, "293 Hz"],
    [50, "309 Hz"],
    [51, "327 Hz"],
    [52, "345 Hz"],
    [53, "365 Hz"],
    [54, "385 Hz"],
    [55, "407 Hz"],
    [56, "430 Hz"],
    [57, "454 Hz"],
    [58, "479 Hz"],
    [59, "506 Hz"],
    [60, "535 Hz"],
    [61, "565 Hz"],
    [62, "597 Hz"],
    [63, "631 Hz"],
    [64, "666 Hz"],
    [65, "704 Hz"],
    [66, "743 Hz"],
    [67, "785 Hz"],
    [68, "829 Hz"],
    [69, "876 Hz"],
    [70, "925 Hz"],
    [71, "977 Hz"],
    [72, "1 kHz"],
    [73, "1.1 kHz"],
    [74, "1.2 kHz"],
    [75, "1.2 kHz"],
    [76, "1.3 kHz"],
    [77, "1.4 kHz"],
    [78, "1.4 kHz"],
    [79, "1.5 kHz"],
    [80, "1.6 kHz"],
    [81, "1.7 kHz"],
    [82, "1.8 kHz"],
    [83, "1.9 kHz"],
    [84, "2.0 kHz"],
    [85, "2.1 kHz"],
    [86, "2.2 kHz"],
    [87, "2.3 kHz"],
    [88, "2.5 kHz"],
    [89, "2.6 kHz"],
    [90, "2.8 kHz"],
    [91, "2.9 kHz"],
    [92, "3.1 kHz"],
    [93, "3.3 kHz"],
    [94, "3.4 kHz"],
    [95, "3.6 kHz"],
    [96, "3.8 kHz"],
    [97, "4.1 kHz"],
    [98, "4.3 kHz"],
    [99, "4.5 kHz"],
    [100, "4.8 kHz"],
    [101, "5.1 kHz"],
    [102, "5.3 kHz"],
    [103, "5.6 kHz"],
    [104, "6.0 kHz"],
    [105, "6.3 kHz"],
    [106, "6.6 kHz"],
    [107, "7.0 kHz"],
    [108, "7.4 kHz"],
    [109, "7.8 kHz"],
    [110, "8.3 kHz"],
    [111, "8.7 kHz"],
    [112, "9.2 kHz"],
    [113, "10 kHz"],
    [114, "10 kHz"],
    [115, "11 kHz"],
    [116, "11 kHz"],
    [117, "12 kHz"],
    [118, "13 kHz"],
    [119, "14 kHz"],
    [120, "14 kHz"],
    [121, "15 kHz"],
    [122, "16 kHz"],
    [123, "17 kHz"],
    [124, "18 kHz"],
    [125, "19 kHz"],
    [126, "20 kHz"],
    [127, "21 kHz"],
]);

/***
 * Synth Filter Frequency Values
 * @type {Map<number, string>}
 */
exports.ns2SynthFilterFrequencyMod2Map = new Map([
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

/***
 * Synth LFO Wave Types
 * @type {Map<number, string>}
 */
exports.ns2SynthLfoWaveMap = new Map([
    [0, "SQUARE"],
    [1, "SAW"],
    [2, "TRI"],
    [3, "S/H"],
]);

/***
 * LFO Rate Values
 * @type {Map<number, string>}
 */
exports.ns2SynthLfoRateMap = new Map([
    [0, "0.03 Hz"],
    [1, "0.03 Hz"],
    [2, "0.03 Hz"],
    [3, "0.04 Hz"],
    [4, "0.04 Hz"],
    [5, "0.04 Hz"],
    [6, "0.05 Hz"],
    [7, "0.05 Hz"],
    [8, "0.05 Hz"],
    [9, "0.06 Hz"],
    [10, "0.06 Hz"],
    [11, "0.07 Hz"],
    [12, "0.07 Hz"],
    [13, "0.08 Hz"],
    [14, "0.09 Hz"],
    [15, "0.09 Hz"],
    [16, "0.1 Hz"],
    [17, "0.11 Hz"],
    [18, "0.12 Hz"],
    [19, "0.13 Hz"],
    [20, "0.14 Hz"],
    [21, "0.15 Hz"],
    [22, "0.16 Hz"],
    [23, "0.17 Hz"],
    [24, "0.19 Hz"],
    [25, "0.20 Hz"],
    [26, "0.22 Hz"],
    [27, "0.24 Hz"],
    [28, "0.26 Hz"],
    [29, "0.28 Hz"],
    [30, "0.30 Hz"],
    [31, "0.32 Hz"],
    [32, "0.35 Hz"],
    [33, "0.38 Hz"],
    [34, "0.41 Hz"],
    [35, "0.44 Hz"],
    [36, "0.47 Hz"],
    [37, "0.51 Hz"],
    [38, "0.55 Hz"],
    [39, "0.6 Hz"],
    [40, "0.64 Hz"],
    [41, "0.7 Hz"],
    [42, "0.75 Hz"],
    [43, "0.81 Hz"],
    [44, "0.88 Hz"],
    [45, "0.95 Hz"],
    [46, "1.0 Hz"],
    [47, "1.1 Hz"],
    [48, "1.2 Hz"],
    [49, "1.3 Hz"],
    [50, "1.4 Hz"],
    [51, "1.5 Hz"],
    [52, "1.6 Hz"],
    [53, "1.8 Hz"],
    [54, "1.9 Hz"],
    [55, "2.0 Hz"],
    [56, "2.2 Hz"],
    [57, "2.4 Hz"],
    [58, "2.6 Hz"],
    [59, "2.8 Hz"],
    [60, "3.0 Hz"],
    [61, "3.2 Hz"],
    [62, "3.5 Hz"],
    [63, "3.8 Hz"],
    [64, "4.1 Hz"],
    [65, "4.4 Hz"],
    [66, "4.8 Hz"],
    [67, "5.2 Hz"],
    [68, "5.6 Hz"],
    [69, "6.0 Hz"],
    [70, "6.5 Hz"],
    [71, "7.0 Hz"],
    [72, "7.6 Hz"],
    [73, "8.2 Hz"],
    [74, "8.8 Hz"],
    [75, "9.5 Hz"],
    [76, "10 Hz"],
    [77, "11 Hz"],
    [78, "12 Hz"],
    [79, "13 Hz"],
    [80, "14 Hz"],
    [81, "15 Hz"],
    [82, "16 Hz"],
    [83, "18 Hz"],
    [84, "19 Hz"],
    [85, "21 Hz"],
    [86, "22 Hz"],
    [87, "24 Hz"],
    [88, "26 Hz"],
    [89, "28 Hz"],
    [90, "30 Hz"],
    [91, "33 Hz"],
    [92, "35 Hz"],
    [93, "38 Hz"],
    [94, "41 Hz"],
    [95, "45 Hz"],
    [96, "48 Hz"],
    [97, "52 Hz"],
    [98, "56 Hz"],
    [99, "61 Hz"],
    [100, "65 Hz"],
    [101, "71 Hz"],
    [102, "76 Hz"],
    [103, "82 Hz"],
    [104, "89 Hz"],
    [105, "96 Hz"],
    [106, "104 Hz"],
    [107, "112 Hz"],
    [108, "121 Hz"],
    [109, "131 Hz"],
    [110, "141 Hz"],
    [111, "153 Hz"],
    [112, "165 Hz"],
    [113, "178 Hz"],
    [114, "192 Hz"],
    [115, "208 Hz"],
    [116, "224 Hz"],
    [117, "242 Hz"],
    [118, "262 Hz"],
    [119, "283 Hz"],
    [120, "305 Hz"],
    [121, "330 Hz"],
    [122, "356 Hz"],
    [123, "385 Hz"],
    [124, "415 Hz"],
    [125, "449 Hz"],
    [126, "484 Hz"],
    [127, "523 Hz"],
]);

/***
 * LFO Rate Master Clock Division Values
 * @type {Map<number, string>}
 */
exports.ns2SynthLfoRateMasterClockDivisionMap = new Map([
    [0, "4/1"],
    [1, "4/1T"],
    [2, "2/1"],
    [3, "2/1T"],
    [4, "1/1"],
    [5, "1/1T"],
    [6, "1/2"],
    [7, "1/2T"],
    [8, "1/4"],
    [9, "1/4T"],
    [10, "1/8"],
    [11, "1/8T"],
    [12, "1/16"],
    [13, "1/16T"],
    [14, "1/32"],
]);

/***
 * Synth Envelope Attack Values
 * @type {Map<number, string>}
 */
exports.ns2SynthEnvAttackMap = new Map([
    [0, "0.5 ms"],
    [1, "0.6 ms"],
    [2, "0.7 ms"],
    [3, "0.9 ms"],
    [4, "1.1 ms"],
    [5, "1.3 ms"],
    [6, "1.5 ms"],
    [7, "1.8 ms"],
    [8, "2.1 ms"],
    [9, "2.5 ms"],
    [10, "3 ms"],
    [11, "3.5 ms"],
    [12, "4 ms"],
    [13, "4.7 ms"],
    [14, "5.5 ms"],
    [15, "6.3 ms"],
    [16, "7.3 ms"],
    [17, "8.4 ms"],
    [18, "9.7 ms"],
    [19, "11 ms"],
    [20, "13 ms"],
    [21, "14 ms"],
    [22, "16 ms"],
    [23, "19 ms"],
    [24, "21 ms"],
    [25, "24 ms"],
    [26, "27 ms"],
    [27, "31 ms"],
    [28, "34 ms"],
    [29, "39 ms"],
    [30, "43 ms"],
    [31, "49 ms"],
    [32, "54 ms"],
    [33, "61 ms"],
    [34, "68 ms"],
    [35, "75 ms"],
    [36, "84 ms"],
    [37, "93 ms"],
    [38, "103 ms"],
    [39, "114 ms"],
    [40, "126 ms"],
    [41, "139 ms"],
    [42, "153 ms"],
    [43, "169 ms"],
    [44, "186 ms"],
    [45, "204 ms"],
    [46, "224 ms"],
    [47, "246 ms"],
    [48, "269 ms"],
    [49, "295 ms"],
    [50, "322 ms"],
    [51, "352 ms"],
    [52, "384 ms"],
    [53, "419 ms"],
    [54, "456 ms"],
    [55, "496 ms"],
    [56, "540 ms"],
    [57, "586 ms"],
    [58, "636 ms"],
    [59, "690 ms"],
    [60, "748 ms"],
    [61, "810 ms"],
    [62, "876 ms"],
    [63, "947 ms"],
    [64, "1.02 s"],
    [65, "1.1 s"],
    [66, "1.19 s"],
    [67, "1.28 s"],
    [68, "1.38 s"],
    [69, "1.49 s"],
    [70, "1.6 s"],
    [71, "1.72 s"],
    [72, "1.85 s"],
    [73, "1.99 s"],
    [74, "2.13 s"],
    [75, "2.28 s"],
    [76, "2.45 s"],
    [77, "2.62 s"],
    [78, "2.81 s"],
    [79, "3 s"],
    [80, "3.21 s"],
    [81, "3.43 s"],
    [82, "3.66 s"],
    [83, "3.91 s"],
    [84, "4.17 s"],
    [85, "4.45 s"],
    [86, "4.74 s"],
    [87, "5.05 s"],
    [88, "5.37 s"],
    [89, "5.72 s"],
    [90, "6.08 s"],
    [91, "6.47 s"],
    [92, "6.87 s"],
    [93, "7.3 s"],
    [94, "7.75 s"],
    [95, "8.22 s"],
    [96, "8.72 s"],
    [97, "9.25 s"],
    [98, "9.8 s"],
    [99, "10 s"],
    [100, "11 s"],
    [101, "12 s"],
    [102, "12 s"],
    [103, "13 s"],
    [104, "14 s"],
    [105, "15 s"],
    [106, "15 s"],
    [107, "16 s"],
    [108, "17 s"],
    [109, "18 s"],
    [110, "19 s"],
    [111, "20 s"],
    [112, "21 s"],
    [113, "22 s"],
    [114, "24 s"],
    [115, "25 s"],
    [116, "26 s"],
    [117, "27 s"],
    [118, "29 s"],
    [119, "30 s"],
    [120, "32 s"],
    [121, "34 s"],
    [122, "35 s"],
    [123, "37 s"],
    [124, "39 s"],
    [125, "41 s"],
    [126, "43 s"],
    [127, "45 s"],
]);

/***
 * Synth Envelope Decay Values
 * @type {Map<number, string>}
 */
exports.ns2SynthEnvDecayMap = new Map([
    [0, "3.0 ms"],
    [1, "3.5 ms"],
    [2, "4.0 ms"],
    [3, "4.6 ms"],
    [4, "5.3 ms"],
    [5, "6.0 ms"],
    [6, "6.9 ms"],
    [7, "7.9 ms"],
    [8, "9.0 ms"],
    [9, "10 ms"],
    [10, "12 ms"],
    [11, "13 ms"],
    [12, "15 ms"],
    [13, "17 ms"],
    [14, "19 ms"],
    [15, "21 ms"],
    [16, "23 ms"],
    [17, "26 ms"],
    [18, "29 ms"],
    [19, "33 ms"],
    [20, "36 ms"],
    [21, "41 ms"],
    [22, "45 ms"],
    [23, "50 ms"],
    [24, "55 ms"],
    [25, "61 ms"],
    [26, "68 ms"],
    [27, "75 ms"],
    [28, "82 ms"],
    [29, "91 ms"],
    [30, "100 ms"],
    [31, "110 ms"],
    [32, "120 ms"],
    [33, "132 ms"],
    [34, "144 ms"],
    [35, "158 ms"],
    [36, "173 ms"],
    [37, "188 ms"],
    [38, "206 ms"],
    [39, "224 ms"],
    [40, "244 ms"],
    [41, "265 ms"],
    [42, "288 ms"],
    [43, "313 ms"],
    [44, "340 ms"],
    [45, "368 ms"],
    [46, "399 ms"],
    [47, "432 ms"],
    [48, "467 ms"],
    [49, "505 ms"],
    [50, "545 ms"],
    [51, "588 ms"],
    [52, "634 ms"],
    [53, "683 ms"],
    [54, "736 ms"],
    [55, "792 ms"],
    [56, "851 ms"],
    [57, "915 ms"],
    [58, "983 ms"],
    [59, "1050 s"],
    [60, "1.13 s"],
    [61, "1.21 s"],
    [62, "1.3 s"],
    [63, "1.39 s"],
    [64, "1.49 s"],
    [65, "1.59 s"],
    [66, "1.7 s"],
    [67, "1.82 s"],
    [68, "1.94 s"],
    [69, "2.07 s"],
    [70, "2.21 s"],
    [71, "2.36 s"],
    [72, "2.51 s"],
    [73, "2.67 s"],
    [74, "2.85 s"],
    [75, "3.03 s"],
    [76, "3.22 s"],
    [77, "3.42 s"],
    [78, "3.64 s"],
    [79, "3.86 s"],
    [80, "4.1 s"],
    [81, "4.35 s"],
    [82, "4.61 s"],
    [83, "4.89 s"],
    [84, "5.18 s"],
    [85, "5.49 s"],
    [86, "5.81 s"],
    [87, "6.15 s"],
    [88, "6.5 s"],
    [89, "6.88 s"],
    [90, "7.27 s"],
    [91, "7.68 s"],
    [92, "8.11 s"],
    [93, "8.57 s"],
    [94, "9.04 s"],
    [95, "9.54 s"],
    [96, "10.0 s"],
    [97, "11 s"],
    [98, "11 s"],
    [99, "12 s"],
    [100, "12 s"],
    [101, "13 s"],
    [102, "14 s"],
    [103, "14 s"],
    [104, "15 s"],
    [105, "16 s"],
    [106, "17 s"],
    [107, "18 s"],
    [108, "19 s"],
    [109, "20 s"],
    [110, "20 s"],
    [111, "22 s"],
    [112, "23 s"],
    [113, "24 s"],
    [114, "25 s"],
    [115, "26 s"],
    [116, "27 s"],
    [117, "29 s"],
    [118, "30 s"],
    [119, "31 s"],
    [120, "33 s"],
    [121, "34 s"],
    [122, "36 s"],
    [123, "38 s"],
    [124, "39 s"],
    [125, "41 s"],
    [126, "43 s"],
    [127, "45 s"],
]);

/***
 * Synth Envelope Release Values
 * @type {Map<number, string>}
 */
exports.ns2SynthEnvReleaseMap = new Map([
    [0, "3.0 ms"],
    [1, "3.5 ms"],
    [2, "4.0 ms"],
    [3, "4.6 ms"],
    [4, "5.3 ms"],
    [5, "6.0 ms"],
    [6, "6.9 ms"],
    [7, "7.9 ms"],
    [8, "9.0 ms"],
    [9, "10 ms"],
    [10, "12 ms"],
    [11, "13 ms"],
    [12, "15 ms"],
    [13, "17 ms"],
    [14, "19 ms"],
    [15, "21 ms"],
    [16, "23 ms"],
    [17, "26 ms"],
    [18, "29 ms"],
    [19, "33 ms"],
    [20, "36 ms"],
    [21, "41 ms"],
    [22, "45 ms"],
    [23, "50 ms"],
    [24, "55 ms"],
    [25, "61 ms"],
    [26, "68 ms"],
    [27, "75 ms"],
    [28, "82 ms"],
    [29, "91 ms"],
    [30, "100 ms"],
    [31, "110 ms"],
    [32, "120 ms"],
    [33, "132 ms"],
    [34, "144 ms"],
    [35, "158 ms"],
    [36, "173 ms"],
    [37, "188 ms"],
    [38, "206 ms"],
    [39, "224 ms"],
    [40, "244 ms"],
    [41, "265 ms"],
    [42, "288 ms"],
    [43, "313 ms"],
    [44, "340 ms"],
    [45, "368 ms"],
    [46, "399 ms"],
    [47, "432 ms"],
    [48, "467 ms"],
    [49, "505 ms"],
    [50, "545 ms"],
    [51, "588 ms"],
    [52, "634 ms"],
    [53, "683 ms"],
    [54, "736 ms"],
    [55, "792 ms"],
    [56, "851 ms"],
    [57, "915 ms"],
    [58, "983 ms"],
    [59, "1050 s"],
    [60, "1.13 s"],
    [61, "1.21 s"],
    [62, "1.3 s"],
    [63, "1.39 s"],
    [64, "1.49 s"],
    [65, "1.59 s"],
    [66, "1.7 s"],
    [67, "1.82 s"],
    [68, "1.94 s"],
    [69, "2.07 s"],
    [70, "2.21 s"],
    [71, "2.36 s"],
    [72, "2.51 s"],
    [73, "2.67 s"],
    [74, "2.85 s"],
    [75, "3.03 s"],
    [76, "3.22 s"],
    [77, "3.42 s"],
    [78, "3.64 s"],
    [79, "3.86 s"],
    [80, "4.1 s"],
    [81, "4.35 s"],
    [82, "4.61 s"],
    [83, "4.89 s"],
    [84, "5.18 s"],
    [85, "5.49 s"],
    [86, "5.81 s"],
    [87, "6.15 s"],
    [88, "6.5 s"],
    [89, "6.88 s"],
    [90, "7.27 s"],
    [91, "7.68 s"],
    [92, "8.11 s"],
    [93, "8.57 s"],
    [94, "9.04 s"],
    [95, "9.54 s"],
    [96, "10.0 s"],
    [97, "11 s"],
    [98, "11 s"],
    [99, "12 s"],
    [100, "12 s"],
    [101, "13 s"],
    [102, "14 s"],
    [103, "14 s"],
    [104, "15 s"],
    [105, "16 s"],
    [106, "17 s"],
    [107, "18 s"],
    [108, "19 s"],
    [109, "20 s"],
    [110, "20 s"],
    [111, "22 s"],
    [112, "23 s"],
    [113, "24 s"],
    [114, "25 s"],
    [115, "26 s"],
    [116, "27 s"],
    [117, "29 s"],
    [118, "30 s"],
    [119, "31 s"],
    [120, "33 s"],
    [121, "34 s"],
    [122, "36 s"],
    [123, "38 s"],
    [124, "39 s"],
    [125, "41 s"],
    [126, "43 s"],
    [127, "45 s"],
]);

/***
 * Synth Arpeggiator Range Values
 * @type {Map<number, string>}
 */
exports.ns2ArpeggiatorRangeMap = new Map([
    [0, "1 Octave"],
    [1, "2 Octaves"],
    [2, "3 Octaves"],
    [3, "4 Octaves"],
]);

/***
 * Synth Arpeggiator Pattern Values
 * @type {Map<number, string>}
 */
exports.ns2ArpeggiatorPatternMap = new Map([
    [0, "UP"],
    [1, "DN"],
    [2, "UP/DN"],
    [3, "RANDOM"],
]);

/***
 * Synth Arpeggiator Master Clock Division Values
 * @type {Map<number, string>}
 */
exports.ns2SynthArpMasterClockDivisionMap = new Map([
    [0, "1/2"],
    [1, "1/2T"],
    [2, "1/4"],
    [3, "1/4T"],
    [4, "1/8"],
    [5, "1/8T"],
    [6, "1/16"],
    [7, "1/16T"],
    [8, "1/32"],
]);

/***
 * Synth Arpeggiator Rate Values
 * @type {Map<number, string>}
 */
exports.ns2SynthArpRateMap = new Map([
    [0, "80 BPM"],
    [1, "82 BPM"],
    [2, "84 BPM"],
    [3, "86 BPM"],
    [4, "88 BPM"],
    [5, "90 BPM"],
    [6, "92 BPM"],
    [7, "94 BPM"],
    [8, "96 BPM"],
    [9, "98 BPM"],
    [10, "100 BPM"],
    [11, "102 BPM"],
    [12, "104 BPM"],
    [13, "106 BPM"],
    [14, "108 BPM"],
    [15, "110 BPM"],
    [16, "112 BPM"],
    [17, "114 BPM"],
    [18, "116 BPM"],
    [19, "118 BPM"],
    [20, "120 BPM"],
    [21, "122 BPM"],
    [22, "124 BPM"],
    [23, "126 BPM"],
    [24, "128 BPM"],
    [25, "130 BPM"],
    [26, "132 BPM"],
    [27, "134 BPM"],
    [28, "136 BPM"],
    [29, "138 BPM"],
    [30, "140 BPM"],
    [31, "142 BPM"],
    [32, "144 BPM"],
    [33, "148 BPM"],
    [34, "152 BPM"],
    [35, "156 BPM"],
    [36, "160 BPM"],
    [37, "82:8 BPM"],
    [38, "84:8 BPM"],
    [39, "86:8 BPM"],
    [40, "88:8 BPM"],
    [41, "90:8 BPM"],
    [42, "92:8 BPM"],
    [43, "94:8 BPM"],
    [44, "96:8 BPM"],
    [45, "98:8 BPM"],
    [46, "100:8 BPM"],
    [47, "102:8 BPM"],
    [48, "104:8 BPM"],
    [49, "106:8 BPM"],
    [50, "108:8 BPM"],
    [51, "110:8 BPM"],
    [52, "112:8 BPM"],
    [53, "114:8 BPM"],
    [54, "116:8 BPM"],
    [55, "118:8 BPM"],
    [56, "120:8 BPM"],
    [57, "122:8 BPM"],
    [58, "124:8 BPM"],
    [59, "126:8 BPM"],
    [60, "128:8 BPM"],
    [61, "130:8 BPM"],
    [62, "132:8 BPM"],
    [63, "134:8 BPM"],
    [64, "136:8 BPM"],
    [65, "140:8 BPM"],
    [66, "144:8 BPM"],
    [67, "148:8 BPM"],
    [68, "152:8 BPM"],
    [69, "156:8 BPM"],
    [70, "160:8 BPM"],
    [71, "82:16 BPM"],
    [72, "84:16 BPM"],
    [73, "86:16 BPM"],
    [74, "88:16 BPM"],
    [75, "90:16 BPM"],
    [76, "92:16 BPM"],
    [77, "94:16 BPM"],
    [78, "96:16 BPM"],
    [79, "98:16 BPM"],
    [80, "100:16 BPM"],
    [81, "102:16 BPM"],
    [82, "104:16 BPM"],
    [83, "106:16 BPM"],
    [84, "108:16 BPM"],
    [85, "110:16 BPM"],
    [86, "112:16 BPM"],
    [87, "114:16 BPM"],
    [88, "116:16 BPM"],
    [89, "118:16 BPM"],
    [90, "120:16 BPM"],
    [91, "122:16 BPM"],
    [92, "124:16 BPM"],
    [93, "126:16 BPM"],
    [94, "128:16 BPM"],
    [95, "130:16 BPM"],
    [96, "132:16 BPM"],
    [97, "136:16 BPM"],
    [98, "140:16 BPM"],
    [99, "144:16 BPM"],
    [100, "148:16 BPM"],
    [101, "152:16 BPM"],
    [102, "156:16 BPM"],
    [103, "160:16 BPM"],
    [104, "82:32 BPM"],
    [105, "84:32 BPM"],
    [106, "86:32 BPM"],
    [107, "88:32 BPM"],
    [108, "90:32 BPM"],
    [109, "92:32 BPM"],
    [110, "94:32 BPM"],
    [111, "96:32 BPM"],
    [112, "98:32 BPM"],
    [113, "100:32 BPM"],
    [114, "102:32 BPM"],
    [115, "104:32 BPM"],
    [116, "106:32 BPM"],
    [117, "108:32 BPM"],
    [118, "110:32 BPM"],
    [119, "112:32 BPM"],
    [120, "114:32 BPM"],
    [121, "116:32 BPM"],
    [122, "118:32 BPM"],
    [123, "120:32 BPM"],
    [124, "122:32 BPM"],
    [125, "124:32 BPM"],
    [126, "126:32 BPM"],
    [127, "128:32 BPM"],
]);

/***
 * Effect Source Values
 * @type {Map<number, string>}
 */
exports.ns2EffectSourceMap = new Map([
    [0, "Organ"],
    [1, "Piano"],
    [2, "Synth"],
]);

/***
 * Rotary Speaker Speed Values
 * @type {Map<number, string>}
 */
exports.ns2RotarySpeakerSpeedMap = new Map([
    [0, "Slow/Stop"],
    [1, "Fast"],
]);

/***
 * Reverb Types
 * @type {Map<number, string>}
 */
exports.ns2ReverbTypeMap = new Map([
    [0, "Room 1"],
    [1, "Room 2"],
    [2, "Stage 1"],
    [3, "Stage 2"],
    [4, "Hall 1"],
    [5, "Hall 2"],
]);

/***
 * Amp Simulation Model
 * @type {Map<number, string>}
 */
exports.ns2AmpSimTypeMap = new Map([
    [0, "Off"],
    [1, "Small"],
    [2, "JC"],
    [3, "Twin"],
]);

/***
 * Eq boost/cut table
 * @type {Map<number, string>}
 */
exports.ns2AmpSimEqdBMap = new Map([
    [0, "-15.0 dB"],
    [1, "-14.8 dB"],
    [2, "-14.5 dB"],
    [3, "-14.3 dB"],
    [4, "-14.1 dB"],
    [5, "-13.8 dB"],
    [6, "-13.6 dB"],
    [7, "-13.4 dB"],
    [8, "-13.1 dB"],
    [9, "-12.9 dB"],
    [10, "-12.7 dB"],
    [11, "-12.4 dB"],
    [12, "-12.2 dB"],
    [13, "-12.0 dB"],
    [14, "-11.7 dB"],
    [15, "-11.5 dB"],
    [16, "-11.2 dB"],
    [17, "-11.0 dB"],
    [18, "-10.8 dB"],
    [19, "-10.5 dB"],
    [20, "-10.3 dB"],
    [21, "-10.1 dB"],
    [22, "-9.8 dB"],
    [23, "-9.6 dB"],
    [24, "-9.4 dB"],
    [25, "-9.1 dB"],
    [26, "-8.9 dB"],
    [27, "-8.7 dB"],
    [28, "-8.4 dB"],
    [29, "-8.2 dB"],
    [30, "-8.0 dB"],
    [31, "-7.7 dB"],
    [32, "-7.5 dB"],
    [33, "-7.3 dB"],
    [34, "-7.0 dB"],
    [35, "-6.8 dB"],
    [36, "-6.6 dB"],
    [37, "-6.3 dB"],
    [38, "-6.1 dB"],
    [39, "-5.9 dB"],
    [40, "-5.6 dB"],
    [41, "-5.4 dB"],
    [42, "-5.2 dB"],
    [43, "-4.9 dB"],
    [44, "-4.7 dB"],
    [45, "-4.5 dB"],
    [46, "-4.2 dB"],
    [47, "-4.0 dB"],
    [48, "-3.8 dB"],
    [49, "-3.5 dB"],
    [50, "-3.3 dB"],
    [51, "-3.0 dB"],
    [52, "-2.8 dB"],
    [53, "-2.6 dB"],
    [54, "-2.3 dB"],
    [55, "-2.1 dB"],
    [56, "-1.9 dB"],
    [57, "-1.6 dB"],
    [58, "-1.4 dB"],
    [59, "-1.2 dB"],
    [60, "-0.9 dB"],
    [61, "-0.7 dB"],
    [62, "-0.5 dB"],
    [63, "-0.2 dB"],
    [64, "+0.0 dB"],
    [65, "+0.2 dB"],
    [66, "+0.5 dB"],
    [67, "+0.7 dB"],
    [68, "+1.0 dB"],
    [69, "+1.2 dB"],
    [70, "+1.4 dB"],
    [71, "+1.7 dB"],
    [72, "+1.9 dB"],
    [73, "+2.1 dB"],
    [74, "+2.4 dB"],
    [75, "+2.6 dB"],
    [76, "+2.9 dB"],
    [77, "+3.1 dB"],
    [78, "+3.3 dB"],
    [79, "+3.6 dB"],
    [80, "+3.8 dB"],
    [81, "+4.0 dB"],
    [82, "+4.3 dB"],
    [83, "+4.5 dB"],
    [84, "+4.8 dB"],
    [85, "+5.0 dB"],
    [86, "+5.2 dB"],
    [87, "+5.5 dB"],
    [88, "+5.7 dB"],
    [89, "+6.0 dB"],
    [90, "+6.2 dB"],
    [91, "+6.4 dB"],
    [92, "+6.7 dB"],
    [93, "+6.9 dB"],
    [94, "+7.1 dB"],
    [95, "+7.4 dB"],
    [96, "+7.6 dB"],
    [97, "+7.9 dB"],
    [98, "+8.1 dB"],
    [99, "+8.3 dB"],
    [100, "+8.6 dB"],
    [101, "+8.8 dB"],
    [102, "+9.0 dB"],
    [103, "+9.3 dB"],
    [104, "+9.5 dB"],
    [105, "+9.8 dB"],
    [106, "+10.0 dB"],
    [107, "+10.2 dB"],
    [108, "+10.5 dB"],
    [109, "+10.7 dB"],
    [110, "+11.0 dB"],
    [111, "+11.2 dB"],
    [112, "+11.4 dB"],
    [113, "+11.7 dB"],
    [114, "+11.9 dB"],
    [115, "+12.1 dB"],
    [116, "+12.4 dB"],
    [117, "+12.6 dB"],
    [118, "+12.9 dB"],
    [119, "+13.1 dB"],
    [120, "+13.3 dB"],
    [121, "+13.6 dB"],
    [122, "+13.8 dB"],
    [123, "+14.0 dB"],
    [124, "+14.3 dB"],
    [125, "+14.5 dB"],
    [126, "+14.8 dB"],
    [127, "+15.0 dB"],
]);

/***
 * Amp Sim / Eq Filter Frequency
 * @type {Map<number, string>}
 */
exports.ns2AmpSimEqMidFilterFreqMap = new Map([
    [0, "200 Hz"],
    [1, "205 Hz"],
    [2, "210 Hz"],
    [3, "215 Hz"],
    [4, "221 Hz"],
    [5, "226 Hz"],
    [6, "232 Hz"],
    [7, "238 Hz"],
    [8, "244 Hz"],
    [9, "250 Hz"],
    [10, "257 Hz"],
    [11, "263 Hz"],
    [12, "270 Hz"],
    [13, "277 Hz"],
    [14, "284 Hz"],
    [15, "291 Hz"],
    [16, "299 Hz"],
    [17, "306 Hz"],
    [18, "314 Hz"],
    [19, "322 Hz"],
    [20, "330 Hz"],
    [21, "339 Hz"],
    [22, "347 Hz"],
    [23, "356 Hz"],
    [24, "365 Hz"],
    [25, "375 Hz"],
    [26, "384 Hz"],
    [27, "394 Hz"],
    [28, "404 Hz"],
    [29, "414 Hz"],
    [30, "425 Hz"],
    [31, "436 Hz"],
    [32, "447 Hz"],
    [33, "458 Hz"],
    [34, "470 Hz"],
    [35, "482 Hz"],
    [36, "494 Hz"],
    [37, "507 Hz"],
    [38, "520 Hz"],
    [39, "533 Hz"],
    [40, "546 Hz"],
    [41, "560 Hz"],
    [42, "575 Hz"],
    [43, "589 Hz"],
    [44, "604 Hz"],
    [45, "620 Hz"],
    [46, "635 Hz"],
    [47, "652 Hz"],
    [48, "668 Hz"],
    [49, "685 Hz"],
    [50, "703 Hz"],
    [51, "721 Hz"],
    [52, "739 Hz"],
    [53, "758 Hz"],
    [54, "777 Hz"],
    [55, "797 Hz"],
    [56, "817 Hz"],
    [57, "838 Hz"],
    [58, "859 Hz"],
    [59, "881 Hz"],
    [60, "904 Hz"],
    [61, "927 Hz"],
    [62, "950 Hz"],
    [63, "975 Hz"],
    [64, "999 Hz"],
    [65, "1.0 kHz"],
    [66, "1.1 kHz"],
    [67, "1.1 kHz"],
    [68, "1.1 kHz"],
    [69, "1.2 kHz"],
    [70, "1.2 kHz"],
    [71, "1.3 kHz"],
    [72, "1.3 kHz"],
    [73, "1.3 kHz"],
    [74, "1.4 kHz"],
    [75, "1.4 kHz"],
    [76, "1.5 kHz"],
    [77, "1.5 kHz"],
    [78, "1.6 kHz"],
    [79, "1.6 kHz"],
    [80, "1.7 kHz"],
    [81, "1.8 kHz"],
    [82, "1.8 kHz"],
    [83, "1.9 kHz"],
    [84, "1.9 kHz"],
    [85, "2.0 kHz"],
    [86, "2.1 kHz"],
    [87, "2.1 kHz"],
    [88, "2.2 kHz"],
    [89, "2.3 kHz"],
    [90, "2.4 kHz"],
    [91, "2.4 kHz"],
    [92, "2.5 kHz"],
    [93, "2.6 kHz"],
    [94, "2.7 kHz"],
    [95, "2.8 kHz"],
    [96, "2.9 kHz"],
    [97, "3.0 kHz"],
    [98, "3.1 kHz"],
    [99, "3.2 kHz"],
    [100, "3.3 kHz"],
    [101, "3.4 kHz"],
    [102, "3.5 kHz"],
    [103, "3.6 kHz"],
    [104, "3.7 kHz"],
    [105, "3.9 kHz"],
    [106, "4.0 kHz"],
    [107, "4.1 kHz"],
    [108, "4.3 kHz"],
    [109, "4.4 kHz"],
    [110, "4.6 kHz"],
    [111, "4.7 kHz"],
    [112, "4.9 kHz"],
    [113, "5.0 kHz"],
    [114, "5.2 kHz"],
    [115, "5.4 kHz"],
    [116, "5.6 kHz"],
    [117, "5.8 kHz"],
    [118, "5.9 kHz"],
    [119, "6.1 kHz"],
    [120, "6.3 kHz"],
    [121, "6.6 kHz"],
    [122, "6.8 kHz"],
    [123, "7.0 kHz"],
    [124, "7.2 kHz"],
    [125, "7.5 kHz"],
    [126, "7.7 kHz"],
    [127, "8.0 kHz"],
]);

/***
 * Extern Control Types
 * @type {Map<number, string>}
 */
exports.ns2ExternControlMap = new Map([
    [0, "Midi CC"],
    [1, "Program"],
    [2, "Volume"],
]);

/***
 * Delay Tempo Map
 * @type {Map<number, (number|string)[]>}
 */
exports.ns2DelayTempoMap = new Map([
    [0, [750, "750 ms 80 bpm"]],
    [1, [732, "732 ms 82 bpm"]],
    [2, [714, "714 ms 84 bpm"]],
    [3, [698, "698 ms 86 bpm"]],
    [4, [682, "682 ms 88 bpm"]],
    [5, [667, "667 ms 90 bpm"]],
    [6, [652, "652 ms 92 bpm"]],
    [7, [638, "638 ms 94 bpm"]],
    [8, [625, "625 ms 96 bpm"]],
    [9, [612, "612 ms 98 bpm"]],
    [10, [600, "600 ms 100 bpm"]],
    [11, [588, "588 ms 102 bpm"]],
    [12, [577, "577 ms 104 bpm"]],
    [13, [566, "566 ms 106 bpm"]],
    [14, [556, "556 ms 108 bpm"]],
    [15, [545, "545 ms 110 bpm"]],
    [16, [536, "536 ms 112 bpm"]],
    [17, [526, "526 ms 114 bpm"]],
    [18, [517, "517 ms 116 bpm"]],
    [20, [508, "508 ms 118 bpm"]],
    [21, [500, "500 ms 120 bpm"]],
    [22, [492, "492 ms 122 bpm"]],
    [19, [484, "484 ms 124 bpm"]],
    [23, [476, "476 ms 126 bpm"]],
    [24, [469, "469 ms 128 bpm"]],
    [25, [462, "462 ms 130 bpm"]],
    [26, [455, "455 ms 132 bpm"]],
    [27, [448, "448 ms 134 bpm"]],
    [28, [441, "441 ms 136 bpm"]],
    [29, [435, "435 ms 138 bpm"]],
    [30, [429, "429 ms 140 bpm"]],
    [31, [423, "423 ms 142 bpm"]],
    [32, [417, "417 ms 144 bpm"]],
    [33, [411, "411 ms 146 bpm"]],
    [34, [405, "405 ms 148 bpm"]],
    [35, [400, "400 ms 150 bpm"]],
    [36, [395, "395 ms 152 bpm"]],
    [37, [390, "390 ms 154 bpm"]],
    [38, [385, "385 ms 156 bpm"]],
    [39, [380, "380 ms 158 bpm"]],
    [40, [375, "375 ms 80 bpm (x2)"]],
    [41, [366, "366 ms 82 bpm (x2)"]],
    [42, [357, "357 ms 84 bpm (x2)"]],
    [43, [349, "349 ms 86 bpm (x2)"]],
    [44, [341, "341 ms 88 bpm (x2)"]],
    [45, [333, "333 ms 90 bpm (x2)"]],
    [46, [326, "326 ms 92 bpm (x2)"]],
    [47, [319, "319 ms 94 bpm (x2)"]],
    [48, [313, "313 ms 96 bpm (x2)"]],
    [49, [306, "306 ms 98 bpm (x2)"]],
    [50, [300, "300 ms 100 bpm (x2)"]],
    [51, [294, "294 ms 102 bpm (x2)"]],
    [52, [288, "288 ms 104 bpm (x2)"]],
    [53, [283, "283 ms 106 bpm (x2)"]],
    [54, [278, "278 ms 108 bpm (x2)"]],
    [55, [273, "273 ms 110 bpm (x2)"]],
    [56, [268, "268 ms 112 bpm (x2)"]],
    [57, [263, "263 ms 114 bpm (x2)"]],
    [58, [259, "259 ms 116 bpm (x2)"]],
    [59, [254, "254 ms 118 bpm (x2)"]],
    [60, [250, "250 ms 120 bpm (x2)"]],
    [61, [246, "246 ms 122 bpm (x2)"]],
    [62, [242, "242 ms 124 bpm (x2)"]],
    [63, [238, "238 ms 126 bpm (x2)"]],
    [64, [234, "234 ms 128 bpm (x2)"]],
    [65, [231, "231 ms 130 bpm (x2)"]],
    [66, [227, "227 ms 132 bpm (x2)"]],
    [67, [224, "224 ms 134 bpm (x2)"]],
    [68, [221, "221 ms 136 bpm (x2)"]],
    [69, [217, "217 ms 138 bpm (x2)"]],
    [70, [214, "214 ms 140 bpm (x2)"]],
    [71, [211, "211 ms 142 bpm (x2)"]],
    [72, [208, "208 ms 144 bpm (x2)"]],
    [73, [205, "205 ms 146 bpm (x2)"]],
    [74, [203, "203 ms 148 bpm (x2)"]],
    [75, [200, "200 ms 150 bpm (x2)"]],
    [76, [197, "197 ms 152 bpm (x2)"]],
    [77, [195, "195 ms 154 bpm (x2)"]],
    [78, [192, "192 ms 156 bpm (x2)"]],
    [79, [190, "190 ms 158 bpm (x2)"]],
    [80, [187, "187 ms 80 bpm (x4)"]],
    [81, [183, "183 ms 82 bpm (x4)"]],
    [82, [179, "179 ms 84 bpm (x4)"]],
    [83, [174, "174 ms 86 bpm (x4)"]],
    [84, [170, "170 ms 88 bpm (x4)"]],
    [85, [167, "167 ms 90 bpm (x4)"]],
    [86, [163, "163 ms 92 bpm (x4)"]],
    [87, [160, "160 ms 94 bpm (x4)"]],
    [88, [156, "156 ms 96 bpm (x4)"]],
    [89, [153, "153 ms 98 bpm (x4)"]],
    [90, [150, "150 ms 100 bpm (x4)"]],
    [91, [147, "147 ms 102 bpm (x4)"]],
    [92, [144, "144 ms 104 bpm (x4)"]],
    [93, [142, "142 ms 106 bpm (x4)"]],
    [94, [139, "139 ms 108 bpm (x4)"]],
    [95, [136, "136 ms 110 bpm (x4)"]],
    [96, [134, "134 ms 112 bpm (x4)"]],
    [97, [132, "132 ms 114 bpm (x4)"]],
    [98, [129, "129 ms 116 bpm (x4)"]],
    [99, [127, "127 ms 118 bpm (x4)"]],
    [100, [125, "125 ms 120 bpm (x4)"]],
    [101, [123, "123 ms 122 bpm (x4)"]],
    [102, [121, "121 ms 124 bpm (x4)"]],
    [103, [119, "119 ms 126 bpm (x4)"]],
    [104, [117, "117 ms 128 bpm (x4)"]],
    [105, [115, "115 ms 130 bpm (x4)"]],
    [106, [114, "114 ms 132 bpm (x4)"]],
    [107, [112, "112 ms 134 bpm (x4)"]],
    [108, [110, "110 ms 136 bpm (x4)"]],
    [109, [109, "109 ms 138 bpm (x4)"]],
    [110, [107, "107 ms 140 bpm (x4)"]],
    [111, [99, "99 ms"]],
    [112, [91, "91 ms"]],
    [113, [81, "81 ms"]],
    [114, [72, "72 ms"]],
    [115, [65, "65 ms"]],
    [116, [60, "60 ms"]],
    [117, [55, "55 ms"]],
    [118, [51, "51 ms"]],
    [119, [47, "47 ms"]],
    [120, [42, "42 ms"]],
    [121, [37, "37 ms"]],
    [122, [33, "33 ms"]],
    [123, [30, "30 ms"]],
    [124, [28, "28 ms"]],
    [125, [26, "26 ms"]],
    [126, [24, "24 ms"]],
    [127, [20, "20 ms"]],
]);

/***
 * Delay Master Clock Division Values
 * @type {Map<number, string>}
 */
exports.ns2DelayTempoMasterClockDivisionMap = new Map([
    [0, "1/2"],
    [1, "1/4D"],
    [2, "1/4T"],
    [3, "1/4S"],
    [4, "1/4"],
    [5, "1/8D"],
    [6, "1/8T"],
    [7, "1/8S"],
    [8, "1/8"],
    [9, "1/16D"],
    [10, "1/16T"],
    [11, "1/16S"],
    [12, "1/16"],
    [13, "1/32T"],
    [14, "1/32"],
]);

/***
 * Effect 1 Types
 * @type {Map<number, string>}
 */
exports.ns2Effect1TypeMap = new Map([
    [0, "Panning"],
    [1, "Tremolo"],
    [2, "Ring Mod"],
    [3, "Wah-Wah"],
    [4, "Auto-Wah 1"],
    [5, "Auto-Wah 2"],
]);

/***
* Effect 1 Master Clock Division Values
* @type {Map<number, string>}
*/
exports.ns2Effect1MasterClockDivisionMap = new Map([
    [0,  "4/1"],
    [1,  "4/1T"],
    [2,  "2/1"],
    [3,  "2/1T"],
    [4,  "1/1"],
    [5,  "1/1T"],
    [6,  "1/2"],
    [7,  "1/2T"],
    [8,  "1/4"],
    [9,  "1/4T"],
    [10, "1/8"],
    [11, "1/8T"],
    [12, "1/16"],
    [13, "1/16T"],
    [14, "1/32"],
]);

/***
 * Effect 2 Types
 * @type {Map<number, string>}
 */
exports.ns2Effect2TypeMap = new Map([
    [0, "Phaser 1"],
    [1, "Phaser 2"],
    [2, "Flanger"],
    [3, "Vibe"],
    [4, "Chorus 1"],
    [5, "Chorus 2"],
]);