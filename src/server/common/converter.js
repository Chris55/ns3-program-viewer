const path = require("path");

/***
 * generic round function
 * @param value
 * @param precision
 * @returns {number}
 */
const round = function (value, precision) {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};

exports.round = round;

/***
 * convert midi value (0/127) to eng value
 * @param engMin - eng min value
 * @param engMax - eng max value
 * @param midiValue - midi value (0/127)
 * @param precision
 * @param _midiMin - optional midi min value (default 0)
 * @param midiMax - optional midi max value (default 127)
 * @returns {number}
 */
const midi2LinearValue = function (engMin, engMax, midiValue, precision, _midiMin, midiMax) {
    const mmax = midiMax || 127;
    const result = (midiValue * (engMax - engMin)) / mmax + engMin;
    return round(result, precision);
};

exports.midi2LinearValue = midi2LinearValue;

/***
 * returns scaled value with precision and eng unit.
 * input: (0, 100, 127, 1, '%'), output '100.0 %'
 * input: (0, 100, 64, 1, '%'), output '50.0 %'
 * @param min: eng min value
 * @param max: eng max value
 * @param value: midi input value (0-127)
 * @param precision: number of decimal
 * @param unit: eng unit
 * @returns {string}
 */
exports.midi2LinearStringValue = function (min, max, value, precision, unit) {
    const result = midi2LinearValue(min, max, value, precision).toFixed(precision);
    return unit ? result + " " + unit : result;
};

/***
 * returns value and complement, range 0/100
 * (used for mix oscillator config)
 * input: 0, output 100/0
 * input: 127, output 0/100
 * @param value midi value (0-127)
 * @returns {string}
 */
exports.midi2LinearValueAndComplement = function (value) {
    const result = (value * 100) / 127;
    const val1 = round(result, 0);
    const val2 = 100 - val1;
    return val2.toFixed(0) + "/" + val1.toFixed(0);
};

/***
 * returns scaled log10 value with precision and eng unit.
 * input: (0, 100, 127, 1, '%'), output '100.0 %'
 * input: (0, 100, 0, 1, '%'), output '0.0 %'
 * @param min: eng min value
 * @param max: eng max value
 * @param value: midi input value (0-127)
 * @param precision: number of decimal
 * @param unit: eng unit
 * @returns {string}
 */
exports.midi2LogValue = function (min, max, value, precision, unit) {
    // https://stackoverflow.com/questions/19472747/convert-linear-scale-to-logarithmic
    const x0 = 0; // midi min value
    const x1 = 127; // midi max value
    const x = value;
    const y0 = min === 0 ? 0.0001 : min;
    const y1 = max === 0 ? 0.0001 : max;
    const a = (x - x0) / (x1 - x0);
    const b = Math.log10(y1) - Math.log10(y0);
    const y = Math.pow(10, a * b + Math.log10(y0)) - 90;
    return round(y, precision).toFixed(precision) + " " + unit;
};

/***
 *
 * @param num
 * @param places
 * @returns {string}
 */
exports.zeroPad = (num, places) => String(num).padStart(places, "0");

/**
 *
 * @param buffer {Buffer}
 * @param offset {number}
 */
exports.getVersion = (buffer, offset) => {
    const offset14W = buffer.readUInt16LE(offset);

    const majorVersion = Math.trunc(offset14W / 100);
    const minorVersion = this.zeroPad(offset14W - majorVersion * 100, 2);
    const version = majorVersion + "." + minorVersion;

    return {
        majorVersion: majorVersion,
        minorVersion: Number(minorVersion),
        version: offset14W,
        value: version,
    };
};

/***
 * Simple linear interpolation
 * @param x0 {Number}
 * @param y0 {Number}
 * @param x1 {Number}
 * @param y1 {Number}
 * @param x {Number}
 * @returns {number}
 */
exports.getLinearInterpolation = (x0, y0, x1, y1, x) => {
    return (y0 * (x1 - x) + y1 * (x - x0)) / (x1 - x0);
};

/***
 * Format to standard drawbars
 * @param d {string}
 * @param type {string}
 * @returns {string|*}
 */
exports.formatOrganDrawbars = (d, type) => {
    if (!d) return d;
    if (d.length !== 9) return d;
    if (type !== "B3") return d;

    return `${d.substr(0, 2)} ${d.substr(2, 4)} ${d.substr(6, 3)}`;
};

/***
 * returns morph model
 *
 * @param result
 * @param labelCallBack
 * @returns {{afterTouch: {to: {midi: *, value: (*|string)}, enabled}, controlPedal: {to: {midi: *, value: (*|string)}, enabled}, wheel: {to: {midi: *, value: (*|string)}, enabled}}}
 */
exports.getMorphModel = (result, labelCallBack) => {
    return {
        /***
         * Wheel Morphing
         */
        wheel: {
            /***
             * Wheel Morphing Level On/Off
             */
            enabled: result[0].enabled,

            /***
             * Wheel Morphing Final Level Value
             */
            to: {
                midi: result[0].midiTo,
                value: result[0].enabled ? labelCallBack(result[0].midiTo) : "none",
            },
        },

        /***
         * After Touch Morphing
         */
        afterTouch: {
            /***
             * After Touch Morphing Level On/Off
             */
            enabled: result[1].enabled,

            /***
             * After Touch Morphing Final Level Value
             */
            to: {
                midi: result[1].midiTo,
                value: result[1].enabled ? labelCallBack(result[1].midiTo) : "none",
            },
        },

        /***
         * Control Pedal Morphing
         */
        controlPedal: {
            /***
             * Control Pedal Morphing Level On/Off
             */
            enabled: result[2].enabled,

            /***
             * Control Pedal Morphing Final Level Value
             */
            to: {
                midi: result[2].midiTo,
                value: result[2].enabled ? labelCallBack(result[2].midiTo) : "none",
            },
        },
    };
};

/***
 * returns a valid Nord program name from a filename
 * files from NUF 1624224019581-hello.ns3f returns hello
 *
 * @param filename
 * @returns {string}
 */
exports.getName = (filename) => {
    if (!filename) {
        return "Unnamed";
    }

    // remove the extension
    //let name = filename.replace(/\.[^/.]+$/, "");
    // remove path and ext
    let name = path.parse(filename).name;

    // removes NUF header
    const regxForum = new RegExp(/^\d{13}-/);
    if (regxForum.test(name)) {
        name = name.substr(14);
    }

    // valid size and characters

    const max = 16;
    let valid = "";

    let regx = new RegExp(/[ a-zA-Z\d-]/);

    for (let i = 0; i < name.length && i < max; i++) {
        if (regx.test(name[i])) {
            valid += name[i];
        } else {
            valid += "-";
        }
    }

    return valid;
};

/***
 * returns filename extension (includes the dot)
 * @param fileName
 * @returns {string}
 */
exports.getExtension = (fileName) => {
    return fileName.slice(Math.max(0, fileName.name.lastIndexOf(".")) || Infinity).toLowerCase();
};

/***
 * Throw exception if invalid signature or invalid file size
 *
 * @param buffer {Buffer}
 * @param supportedSignatures {string[]}
 * @param supportedSizes {number[]}
 */
exports.checkHeader = (buffer, supportedSignatures, supportedSizes) => {
    if (buffer.length > 16) {
        const claviaSignature = buffer.toString("utf8", 0, 4);
        if (claviaSignature !== "CBIN") {
            throw new Error("Invalid Nord file");
        }
        const signature = buffer.toString("utf8", 8, 12);
        if (supportedSignatures.includes(signature) === false) {
            throw new Error(`${signature} file is not supported - ${supportedSignatures.join(",")} type expected.`);
        }
    }

    if (supportedSizes.includes(buffer.length) === false) {
        throw new Error("Invalid file, unexpected file length");
    }
};
