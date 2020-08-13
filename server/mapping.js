

exports.pianoNameMap = new Map([
    // Grand Piano
    // [0x02D577B5A0000000n, 'Royal Grand 3D YaS6 Lrg 5.4'],
    // [0x4F04DA3060000000n, 'White Grand Lrg 6.1'],
    // [0x85F256D930000000n, 'Grand Lady D   Stw D  Lrg 5.3'],
    //
    // // Upright Piano
    // [0xe5dd43ce0000000n, 'Bambino Upright Baldwin XL 5.4'],
    // [0x40f4358d90000000n, 'Black Upright Petrof Lrg 5.3'],
    // [0xc354a2c600000000n, 'HonkyTonkUpright      Lrg 5.3'],
    //
    // // Electric Piano
    // [0x4e099de00000000n, 'EP1 Deep Timbre Lrg 6.0'],
    //
    // // Clavinet
    // [0x1bedfa440000000n, 'Clavinet D6  5.0'],
    //
    // // Digital
    // [0x51accddc0000000n, 'DX7 FullTines  Lrg 5.4'],
    //
    // // Misc
    // [0x97a8d1770000000n, 'Ballad EP1  Sml 5.2'],
]);

exports.pianoTypeMap = new Map([
    [0x00, 'Grand'],
    [0x01, 'Upright'],
    [0x02, 'Electric'],
    [0x03, 'Clav'],
    [0x04, 'Digital'],
    [0x05, 'Misc'],
]);

exports.organTypeMap = new Map([
    [0x00, 'B3'],
    [0x01, 'Vox'],
    [0x02, 'Farfisa'],
    [0x03, 'Pipe1'],
    [0x04, 'Pipe2'],
]);

exports.organVibratoModeMap = new Map([
    [0x00, 'V1'],
    [0x01, 'C1'],
    [0x02, 'V2'],
    [0x03, 'C2'],
    [0x04, 'V3'],
    [0x05, 'C3'],
]);

exports.sourceMap = new Map([
    [0x00, 'Organ'],
    [0x01, 'Piano'],
    [0x02, 'Synth'],
]);

exports.rotarySpeakerSpeedMap = new Map([
    [0x00, 'Slow/Stop'],
    [0x01, 'Fast'],
]);

exports.synthOscillatorTypeMap = new Map([
    [0x00, 'Classic'],
    [0x01, 'Wave'],
    [0x02, 'Formant'],
    [0x03, 'Super'],
    [0x04, 'Sample'],
]);

exports.synthOscillator1ClassicWaveFormMap = new Map([
    [0, 'Sine'],
    [1, 'Triangle'],
    [2, 'Saw'],
    [3, 'Square'],
    [4, 'Pulse 33'],
    [5, 'Pulse 10'],
    [6, 'ESaw'],
    [7, 'ESquare'],
]);

exports.synthOscillator1WaveWaveFormMap = new Map([
    [0, 'Wave 2nd Harm'],
    [1, 'Wave 3rd Harm'],
    [2, 'Wave 4th Harm'],
    [3, 'Wave 5th Harm'],
    [4, 'Wave 6th Harm'],
    [5, 'Wave 7th Harm'],
    [6, 'Wave 8th Harm'],
    [7, 'Wave Organ 1'],
    [8, 'Wave Organ 2'],
    [9, 'Wave Principal'],
    [10, 'Wave Flute 1'],
    [11, 'Wave Flute 2'],
    [12, 'Wave Clarinet 1'],
    [13, 'Wave Clarinet 2'],
    [14, 'Wave Alto Sax'],
    [15, 'Wave Tenor Sax'],
    [16, 'Wave 2nd Spectra'],
    [17, 'Wave 3rd Spectra'],
    [18, 'Wave 4th Spectra'],
    [19, 'Wave 5th Spectra'],
    [20, 'Wave 6th Spectra'],
    [21, 'Wave 7th Spectra'],
    [22, 'Wave 8th Spectra'],
    [23, 'Wave Saw Random'],
    [24, 'Wave Saw Bright'],
    [25, 'Wave Sqr Bright'],
    [26, 'Wave Saw NoFund'],
    [27, 'Wave EPiano 1'],
    [28, 'Wave EPiano 2'],
    [29, 'Wave EPiano 3'],
    [30, 'Wave DX 1'],
    [31, 'Wave DX 2'],
    [32, 'Wave Full Tines'],
    [33, 'Wave Ac Piano'],
    [34, 'Wave Ice 1'],
    [35, 'Wave Ice 2'],
    [36, 'Wave Clavinet 1'],
    [37, 'Wave Clavinet 2'],
    [38, 'Wave Clavinet 3'],
    [39, 'Wave Triplets'],
    [40, 'Wave Bell'],
    [41, 'Wave Bar 1'],
    [42, 'Wave Bar 2'],
    [43, 'Wave Tines'],
    [44, 'Wave Marimba'],
    [45, 'Wave Tubular Bells'],
]);

exports.synthOscillator1FormantWaveFormMap = new Map([
    [0, 'Format Wave Aaa'],
    [1, 'Format Wave Eee'],
    [2, 'Format Wave Iii'],
    [3, 'Format Wave Ooo'],
    [4, 'Format Wave Uuu'],
    [5, 'Format Wave Yyy'],
    [6, 'Format Wave AO'],
    [7, 'Format Wave AE'],
    [8, 'Format Wave OE'],
]);

exports.dBMap = new Map([
    [0, 'Off'],
    [1, '-84.2 dB'],
    [2, '-72.1 dB'],
    [3, '-65.1 dB'],
    [4, '-60.1 dB'],
    [5, '-56.2 dB'],
    [6, '-53.0 dB'],
    [7, '-50.3 dB'],
    [8, '-48.0 dB'],
    [9, '-46.0 dB'],
    [10, '-44.2 dB'],
    [11, '-42.5 dB'],
    [12, '-41.0 dB'],
    [13, '-39.6 dB'],
    [14, '-38.3 dB'],
    [15, '-37.1 dB'],
    [16, '-36.0 dB'],
    [17, '-34.9 dB'],
    [18, '-33.9 dB'],
    [19, '-33.0 dB'],
    [20, '-32.1 dB'],
    [21, '-31.1 dB'],
    [22, '-30.5 dB'],
    [23, '-29.7 dB'],
    [24, '-28.9 dB'],
    [25, '-28.2 dB'],
    [26, '-27.6 dB'],
    [27, '-26.9 dB'],
    [28, '-26.3 dB'],
    [29, '-25.7 dB'],
    [30, '-25.1 dB'],
    [31, '-24.5 dB'],
    [32, '-23.9 dB'],
    [33, '-23.4 dB'],
    [34, '-22.9 dB'],
    [35, '-22.4 dB'],
    [36, '-21.9 dB'],
    [37, '-21.4 dB'],
    [38, '-21.0 dB'],
    [39, '-20.5 dB'],
    [40, '-20.1 dB'],
    [41, '-19.6 dB'],
    [42, '-19.2 dB'],
    [43, '-18.8 dB'],
    [44, '-18.4 dB'],
    [45, '-18.0 dB'],
    [46, '-17.6 dB'],
    [47, '-17.3 dB'],
    [48, '-16.9 dB'],
    [49, '-16.5 dB'],
    [50, '-16.2 dB'],
    [51, '-15.8 dB'],
    [52, '-15.5 dB'],
    [53, '-15.2 dB'],
    [54, '-14.9 dB'],
    [55, '-14.5 dB'],
    [56, '-14.2 dB'],
    [57, '-13.9 dB'],
    [58, '-13.6 dB'],
    [59, '-13.3 dB'],
    [60, '-13.0 dB'],
    [61, '-12.7 dB'],
    [62, '-12.5 dB'],
    [63, '-12.2 dB'],
    [64, '-11.9 dB'],
    [65, '-11.6 dB'],
    [66, '-11.4 dB'],
    [67, '-11.1 dB'],
    [68, '-10.9 dB'],
    [69, '-10.6 dB'],
    [70, '-10.3 dB'],
    [71, '-10.1 dB'],
    [72, '-9.9 dB'],
    [73, '-9.6 dB'],
    [74, '-9.4 dB'],
    [75, '-9.1 dB'],
    [76, '-8.9 dB'],
    [77, '-8.7 dB'],
    [78, '-8.5 dB'],
    [79, '-8.2 dB'],
    [80, '-8.0 dB'],
    [81, '-7.8 dB'],
    [82, '-7.6 dB'],
    [83, '-7.4 dB'],
    [84, '-7.2 dB'],
    [85, '-7.0 dB'],
    [86, '-6.8 dB'],
    [87, '-6.6 dB'],
    [88, '-6.4 dB'],
    [89, '-6.2 dB'],
    [90, '-6.0 dB'],
    [91, '-5.8 dB'],
    [92, '-5.6 dB'],
    [93, '-5.4 dB'],
    [94, '-5.2 dB'],
    [95, '-5.0 dB'],
    [96, '-4.9 dB'],
    [97, '-4.7 dB'],
    [98, '-4.5 dB'],
    [99, '-4.3 dB'],
    [100, '-4.2 dB'],
    [101, '-4.0 dB'],
    [102, '-3.8 dB'],
    [103, '-3.6 dB'],
    [104, '-3.5 dB'],
    [105, '-3.3 dB'],
    [106, '-3.1 dB'],
    [107, '-3.0 dB'],
    [108, '-2.8 dB'],
    [109, '-2.7 dB'],
    [110, '-2.5 dB'],
    [111, '-2.3 dB'],
    [112, '-2.2 dB'],
    [113, '-2.0 dB'],
    [114, '-1.9 dB'],
    [115, '-1.7 dB'],
    [116, '-1.6 dB'],
    [117, '-1.4 dB'],
    [118, '-1.3 dB'],
    [119, '-1.1 dB'],
    [120, '-1.0 dB'],
    [121, '-0.8 dB'],
    [122, '-0.7 dB'],
    [123, '-0.6 dB'],
    [124, '-0.4 dB'],
    [125, '-0.3 dB'],
    [126, '-0.1 dB'],
    [127, '0.0 dB'],
]);

exports.midi2LinearValue = function (min, max, value, precision, unit) {
    // midi 0 = min
    // midi 127 = max
    if (unit === "dB" && value === 0) {
        return "Off";
    }
    const result = (value * (max - min) / 127) + min;
    return round(result, precision).toFixed(precision) + " " + unit;

}

exports.midi2LogValue = function (min, max, value, precision, unit) {
    if (unit === "dB" && value === 0) {
        if (value === 0) return "Off";
        if (value === 127) return "O dB";
    }
    // https://stackoverflow.com/questions/19472747/convert-linear-scale-to-logarithmic
    const x0 = 0;   // midi min value
    const x1 = 127; // midi max value
    const x = value;
    const y0 = min === 0 ? 0.0001: min;
    const y1 = max === 0 ? 0.0001: max;
    const a = (x - x0) / (x1 - x0);
    const b = Math.log10(y1) - Math.log10(y0);
    const y = Math.pow(10, a * b + Math.log10(y0)) - 90;
    return round(y, precision).toFixed(precision) + " " + unit;

}

const round = function(value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}



