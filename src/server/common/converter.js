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
const midi2LinearStringValue = function (min, max, value, precision, unit) {
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
const midi2LinearValueAndComplement = function (value) {
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
const midi2LogValue = function (min, max, value, precision, unit) {
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
const zeroPad = (num, places) => String(num).padStart(places, "0");

/***
 * Simple linear interpolation
 * @param x0 {Number}
 * @param y0 {Number}
 * @param x1 {Number}
 * @param y1 {Number}
 * @param x {Number}
 * @returns {number}
 */
const getLinearInterpolation = (x0, y0, x1, y1, x) => {
    return (y0 * (x1 - x) + y1 * (x - x0)) / (x1 - x0);
};

/***
 * Format to standard drawbars
 * @param d {string}
 * @param type {string}
 * @returns {string|*}
 */
const formatOrganDrawbars = (d, type) => {
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
const getMorphModel = (result, labelCallBack) => {
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

export {
    round,
    midi2LinearValue,
    midi2LinearStringValue,
    midi2LinearValueAndComplement,
    midi2LogValue,
    zeroPad,
    getLinearInterpolation,
    formatOrganDrawbars,
    getMorphModel,
};
