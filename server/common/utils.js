const mapping = require("../ns3/mapping");
const converter = require("./converter");

/***
 * returns volume object
 *
 * @param value
 * @returns {{midi: *, label: unknown}}
 */
exports.getVolume = function (value) {
    return {
        midi: value,
        label: mapping.dBMap.get(value),
    };
};


/***
 * Returns two values from a single knob (and equivalent midi value).
 *
 * Settings like Osc modulation (lfo/env mod) and Filter modulation (vel/env mod) are using this option
 * to define two settings with a single knob.
 * Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
 * 0   = 10.0 (100% left value, example LFO Amount),
 * 60  = 0.0 for both values,
 * 120 = 10.0 (100% right value, example Mod Env Amount)
 *
 * @param valueRange120
 * @param valueRange120
 * @returns {{leftMidi: number, leftValue: string, rightValue: string, rightMidi: number}}
 */
exports.getKnobDualValues = function (valueRange120) {
    const valueRange127 = Math.ceil((valueRange120 * 127) / 120);
    const value = converter.midi2LinearValue(-10, 10, valueRange120, 1, 0, 120);
    let leftValue = "0.0";
    let rightValue = "0.0";
    let leftMidi = 0;
    let rightMidi = 0;
    if (value === 0) {
        leftMidi = valueRange127;
        rightMidi = valueRange127;
    } else if (value < 0) {
        leftValue = Math.abs(value).toFixed(1);
        leftMidi = valueRange127;
    } else {
        rightValue = value.toFixed(1);
        rightMidi = valueRange127;
    }
    return {
        leftMidi: leftMidi,
        rightMidi: rightMidi,
        leftValue: leftValue,
        rightValue: rightValue,
    };
};
