const mapping = require("../ns3/mapping");
const converter = require("./converter");
const { getMorph } = require("../ns3/morph");

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
    let leftLabel = "0.0";
    let rightLabel = "0.0";
    let leftMidi = 0;
    let rightMidi = 0;
    if (value === 0) {
        leftMidi = valueRange127;
        rightMidi = valueRange127;
    } else if (value < 0) {
        leftLabel = Math.abs(value).toFixed(1);
        leftMidi = valueRange127;
    } else {
        rightLabel = value.toFixed(1);
        rightMidi = valueRange127;
    }
    return {
        leftMidi: leftMidi,
        rightMidi: rightMidi,
        leftLabel: leftLabel,
        rightLabel: rightLabel,
    };
};

/***
 * returns Keyboard Zone
 * @param sectionEnabled
 * @param splitEnabled
 * @param value
 * @returns {string}
 */
exports.getKbZone = (sectionEnabled, splitEnabled, value) => {
    if (sectionEnabled) {
        if (splitEnabled) {
            return mapping.kbZoneMap.get(value);
        }
        // no split, full keyboard is used
        return "0000";
    }
    // section is not used
    return "----";
};

/***
 * returns Volume settings with Morph options
 *
 * @param buffer
 * @param offset
 * @returns {{midi: *, label: string, morph: {afterTouch: {to: ({midi: *, label: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, label: string}|string), enabled: boolean}, wheel: {to: ({midi: *, label: string}|string), enabled: boolean}}}}
 */
exports.getVolumeEx = (buffer, offset) => {
    const organOffsetB6W = buffer.readUInt16BE(offset); // 0xB6
    const morphOffsetB7Ww = buffer.readUInt32BE(offset + 1); // 0xB7

    // From value
    const midi = (organOffsetB6W & 0x07f0) >>> 4;

    // To values
    const morph = getMorph(morphOffsetB7Ww >>> 4, midi, (x) => {
        return mapping.dBMap.get(x);
    });

    return {
        /***
         * Volume Midi value
         */
        midi: midi,

        /***
         * Volume Label
         */
        label: mapping.dBMap.get(midi),

        /***
         * Morphing settings
         */
        morph: morph,
    };
};
