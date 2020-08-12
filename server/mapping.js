

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



