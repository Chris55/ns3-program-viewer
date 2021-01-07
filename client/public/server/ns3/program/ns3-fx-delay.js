const converter = require("../../common/converter");
const mapping = require("./ns3-mapping");
const { getLinearInterpolation } = require("../../common/converter");
const { ns3Morph14Bits } = require("./ns3-morph");
const { ns3Morph7Bits } = require("./ns3-morph");

/***
 * replace the note by unicode value
 * @param value {string}
 * @returns {string}
 */
const fixSignature = (value) => {
    if (typeof value === "string" || value instanceof String) {
        value = value.replace("(1/4)", "\u{2669}");
        value = value.replace("(1/8)", "\u{266A}");
        //value = value.replace("(1/16)", "\u{266C}");
    }
    return value;
};

/***
 * return the formatted tempo value
 *
 * @param masterClock {boolean}
 * @param midiValue {number}
 * @param tapValue {number}
 * @returns {string|*}
 */
const getTempo = (masterClock, midiValue, tapValue) => {
    // if master clock is used, get the tempo details from the dedicated map
    if (masterClock) {
        return mapping.ns3DelayTempoMasterClockDivisionMap.get(midiValue);
    }

    // else use the default tempo mapping
    const value = mapping.ns3DelayTempoMap.get(midiValue);
    if (!(value instanceof Array)) {
        return "error";
    }

    // default case, value is from the knob (no LSW value is used)
    if (tapValue === 0 || midiValue === 127) {
        return value[1];
    }

    // special case (from tap tempo) LSW contains fine tempo adjustment
    const y0 = mapping.ns3DelayTempoMap.get(midiValue);
    const y1 = mapping.ns3DelayTempoMap.get(midiValue + 1);
    if (!(y0 instanceof Array) || !(y1 instanceof Array)) {
        return "error";
    }

    const fineMs = getLinearInterpolation(0, y0[0], 127, y1[0], tapValue);
    let bpm = (60 / fineMs) * 1000;
    let signature = "(1/4)";
    if (bpm > 160) {
        bpm = bpm / 2;
        signature = "(1/8)";
        if (bpm > 160) {
            bpm = bpm / 2;
            signature = "(1/16)";
        }
    }
    // "1.5 s 40 bpm (1/4)"]],
    const fineMsString = fineMs >= 1000 ? (fineMs / 1000).toFixed(2) + "s" : Math.round(fineMs) + " ms";
    return fineMsString + " " + Math.round(bpm) + " bpm " + signature;
};

/***
 * returns Delay
 *
 * @param buffer
 * @param panelOffset
 * @param global
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}}
 */
exports.ns3Delay = (buffer, panelOffset, global) => {
    const delayOffset119 = buffer.readUInt8(0x119 + panelOffset);
    const delayOffset11aW = buffer.readUInt16BE(0x11a + panelOffset);
    const delayOffset11bWw = buffer.readUInt32BE(0x11b + panelOffset);
    const delayOffset121W = buffer.readUInt16BE(0x121 + panelOffset);
    const delayOffset122Ww = buffer.readUInt32BE(0x122 + panelOffset);
    const delayOffset125 = buffer.readUInt8(0x125 + panelOffset);
    const delayOffset125W = buffer.readUInt16BE(0x125 + panelOffset);
    const delayOffset126Ww = buffer.readUInt32BE(0x126 + panelOffset);
    const delayOffset129 = buffer.readUInt8(0x129 + panelOffset);

    let delayTempoMidiValue = (delayOffset11aW & 0xfe00) >>> 9;
    let delayTempoTapValue = (delayOffset11aW & 0x01fc) >>> 2;

    if (global.version.version <= 300) {
        // https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history
        // v1.36 (2018-02-07): Increased resolution of tempo/rate parameter.
        // By using the tap button one is not limited to the tempos available by knob.
        // Programs stored with v1.36 will have version 3.01
        //
        // This means that in v3.00 the tap additional bits are not available.
        delayTempoMidiValue = delayTempoTapValue;
        delayTempoTapValue = 0;
    }
    const delayMasterClock = (delayOffset119 & 0x01) !== 0;
    const delayFeedbackMidi = (delayOffset125W & 0x07f0) >>> 4;
    const delayMixMidi = (delayOffset121W & 0x1fc0) >>> 6;

    return {
        /**
         * Offset in file: 0x119 (b3)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS3 Delay On
         */
        enabled: (delayOffset119 & 0x08) !== 0,

        /**
         * Offset in file: 0x119 (b2-1)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module NS3 Delay Source
         */
        source: {
            value: mapping.ns3EffectSourceMap.get((delayOffset119 & 0x06) >>> 1),
        },

        /**
         *  Offset in file: 0x119 (b0)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS3 Delay Master Clock
         */
        masterClock: {
            enabled: delayMasterClock,
        },

        /**
         * Offset in file:
         *
         * @example
         * tempo is using 14-bit
         *
         * MSW 0x11A (b7-1): 7-bit value
         * 0/127 = 1.5 s to 20 ms (same as MIDI #CC 94, see table below)
         *
         * LSW 0x11A (b0) and 0x11B (b7-2): 7-bit value
         * LSW used for fine tempo value (only used with Tag Tempo)
         *
         * When Tempo knob is used, LSW is always 0, possible MSW value:
         * #include ns3DelayTempoMap
         *
         * Note: When Tap Tempo is used, LSW is different from 0.
         * A linear interpolation is done to define the fine tempo value.
         *
         * if 'Delay Master Clock' is enabled 7-bit value 0/127 = 1/2 to 1/64
         * #include ns3DelayTempoMasterClockDivisionMap
         *
         * Morph Wheel:
         * 0x11B (b1-0), 0x11C (b7-0), and 0x11D (b7-3): 15-bit raw value
         *
         * Morph After Touch:
         * 0x11D (b2-0), 0x11E (b7-0), and 0x11F (b7-4): 15-bit raw value
         *
         * Morph Control Pedal:
         * 0x11F (b3-0), 0x120 (b7-0), and 0x121 (b7-5): 15-bit raw value
         *
         * @module NS3 Delay Tempo
         */
        tempo: {
            midi: delayTempoMidiValue,
            lsw: delayTempoTapValue,

            value: fixSignature(getTempo(delayMasterClock, delayTempoMidiValue, delayTempoTapValue)),

            morph:
                global.version.version <= 300
                    ? ns3Morph7Bits(
                          delayOffset11bWw >>> 2,
                          delayTempoMidiValue,
                          (x) => {
                              return fixSignature(getTempo(delayMasterClock, x, 0));
                          },
                          // v3.00 is different and I cannot test it, I prefer disable morph for now...
                          true
                      )
                    : ns3Morph14Bits(
                          buffer,
                          0x11a + panelOffset,
                          (msw, lsw) => {
                              return fixSignature(getTempo(delayMasterClock, msw, lsw));
                          },
                          false
                      ),
        },

        /**
         *  Offset in file: 0x125 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS3 Delay Ping Pong
         */
        pingPong: {
            enabled: (delayOffset125 & 0x20) !== 0,
        },

        /**
         *  Offset in file: 0x125 (b4-3)
         *
         * @example
         * #include ns3DelayFilterMap
         *
         *  @module NS3 Delay Filter
         */
        filter: {
            value: mapping.ns3DelayFilterMap.get((delayOffset125 & 0x18) >>> 3),
        },

        /**
         *  Offset in file: 0x129 (b3)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS3 Delay Analog Mode
         */
        analogMode: {
            enabled: (delayOffset129 & 0x08) !== 0,
        },

        /**
         * Offset in file: 0x125 (b2-0) and 0x126 (b7-4)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x126 (b3-b0) and 0x127 (b7-4): 8-bit raw value
         *
         * Morph After Touch:
         * 0x127 (b3-b0) and 0x128 (b7-4): 8-bit raw value
         *
         * Morph Control Pedal:
         * 0x128 (b3-b0) and 0x129 (b7-4): 8-bit raw value
         *
         * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module NS3 Delay Feedback
         */
        feedback: {
            midi: delayFeedbackMidi,

            value: converter.midi2LinearStringValue(0, 10, delayFeedbackMidi, 1, ""),

            morph: ns3Morph7Bits(
                delayOffset126Ww >>> 4,
                delayFeedbackMidi,
                (x) => {
                    return converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },

        /**
         * Offset in file: 0x121 (b4-0) and 0x122 (b7-6)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Morph Wheel:
         * 0x122 (b5-b0) and 0x123 (b7-6): 8-bit raw value
         *
         * Morph After Touch:
         * 0x123 (b5-b0) and 0x124 (b7-6): 8-bit raw value
         *
         * Morph Control Pedal:
         * 0x124 (b5-b0) and 0x125 (b7-6): 8-bit raw value
         *
         * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
         *
         * @module NS3 Delay Mix
         */
        mix: {
            midi: delayMixMidi,

            value: converter.midi2LinearStringValue(0, 10, delayMixMidi, 1, ""),

            morph: ns3Morph7Bits(
                delayOffset122Ww >>> 6,
                delayMixMidi,
                (x) => {
                    return converter.midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },
    };
};
