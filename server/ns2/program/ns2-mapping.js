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
