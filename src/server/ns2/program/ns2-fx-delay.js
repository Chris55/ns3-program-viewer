import { ns2Morph12Bits, ns2Morph4Bits, ns2Morph7Bits } from "./ns2-morph";
import { getLinearInterpolation, midi2LinearStringValue } from "../../common/converter";
import { ns2DelayTempoMap, ns2DelayTempoMasterClockDivisionMap, ns2EffectSourceMap } from "./ns2-mapping";

/***
 * return the formatted tempo value
 *
 * @param midiValue {number}
 * @param tapValue {number}
 * @returns {string|*}
 */
const getTempo = (midiValue, tapValue) => {
    // use the default tempo mapping
    const value = ns2DelayTempoMap.get(midiValue);
    if (!(value instanceof Array)) {
        return "error";
    }

    // default case, value is from the knob (no LSW value is used)
    if (tapValue === 0 || midiValue === 127) {
        return value[1];
    }

    // special case (from tap tempo) LSW contains fine tempo adjustment
    const y0 = ns2DelayTempoMap.get(midiValue);
    const y1 = ns2DelayTempoMap.get(midiValue + 1);
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
    // "1.5 s 40 bpm (1/4)"
    const fineMsString = fineMs >= 1000 ? (fineMs / 1000).toFixed(2) + "s" : Math.round(fineMs) + " ms";
    return fineMsString + " " + Math.round(bpm) + " bpm " + signature;
};

/***
 * returns Delay
 *
 * @param buffer
 * @param panelOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}}
 */
const ns2Delay = (buffer, panelOffset) => {
    const delayOffset124Ww = buffer.readUInt32BE(0x124 + panelOffset);
    const delayOffset125 = buffer.readUInt8(0x125 + panelOffset);
    const delayOffset127W = buffer.readUInt16BE(0x127 + panelOffset);
    const delayOffset12dW = buffer.readUInt16BE(0x12d + panelOffset);
    const delayOffset12eWw = buffer.readUInt32BE(0x12e + panelOffset);

    const delayOffset131W = buffer.readUInt16BE(0x131 + panelOffset);
    const delayOffset132W = buffer.readUInt16BE(0x132 + panelOffset);

    const delayMasterClock = (delayOffset125 & 0x02) !== 0;

    const delayTempoTapValue = (delayOffset12dW & 0x7c00) >>> 10;
    const delayTempoClockOffMidiValue = (delayOffset12dW & 0x7ff8) >>> 3;
    const delayTempoClockOnMidiValue = (delayOffset127W & 0x03c0) >>> 6;
    const delayTempoMidiValue = delayMasterClock ? delayTempoClockOnMidiValue : delayTempoClockOffMidiValue;

    const delayFeedbackMidi = (delayOffset132W & 0x0fe0) >>> 5;
    const delayAmountMidi = (delayOffset131W & 0x07f0) >>> 4;
    const pingPong = (delayOffset125 & 0x04) !== 0;

    return {
        /**
         * Offset in file: 0x125 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Delay On
         */
        enabled: (delayOffset125 & 0x20) !== 0,

        /**
         * Offset in file: 0x125 (b4-3)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module NS2 Delay Source
         */
        source: {
            value: ns2EffectSourceMap.get((delayOffset125 & 0x18) >>> 3),
        },

        /**
         *  Offset in file: 0x125 (b1)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Delay Master Clock
         */
        masterClock: {
            enabled: delayMasterClock,
            isDefault: delayMasterClock === false,
        },

        /**
         * Offset in file:
         *
         * @example
         * if MST CLK is OFF
         * offset in file 0x12d (b1-0) and 0x12e (b7-3) for Knob values (manual or MIDI input)
         * offset in file 0x12d (b6-2) for TAP Input
         *
         * #include ns2DelayTempoMap
         *
         * Delay Rate / Tempo Knob Morph Wheel
         * offset in file 0x128 (b5-0) and 0x129 (b7-1)
         *
         * Delay Rate / Tempo Morph AT
         * offset in file 0x129 (b0), 0x12a (b7-0) and 0x12b (b7-4)
         *
         * Delay Rate / Tempo Morph CtrlPedal
         * offset in file 0x12b (b3-0), 0x12c (b7-0) and 0x12d (b7)
         *
         * @module NS2 Delay Tempo
         */

        /**
         * Offset in file:
         *
         * @example
         * if MST CLK is ON
         * offset in file 0x127 (b1-0) and 0x128 (b7-6)
         *
         * #include ns2DelayTempoMasterClockDivisionMap
         *
         * Delay Rate / Tempo Knob Morph Wheel
         * offset in file 0x125 (b0) and 0x126 (b7-4)
         *
         * Delay Rate / Tempo Morph AT
         * offset in file 0x126 (b3-0) and 0x127 (b7)
         *
         * Delay Rate / Tempo Morph CtrlPedal
         * offset in file 0x127 (b6-2)
         *
         * @module NS2 Delay Tempo Master Clock Divisor
         */
        tempo: {
            midi: delayTempoMidiValue,
            lsw: delayTempoTapValue,

            value: delayMasterClock
                ? ns2DelayTempoMasterClockDivisionMap.get(delayTempoClockOnMidiValue)
                : getTempo(delayTempoClockOffMidiValue, delayTempoTapValue),

            isDefault: delayTempoMidiValue === 64,

            morph: delayMasterClock
                ? ns2Morph4Bits(
                      delayOffset124Ww >>> 2,
                      delayTempoClockOnMidiValue,
                      (x) => ns2DelayTempoMasterClockDivisionMap.get(x),
                      false
                  )
                : ns2Morph12Bits(buffer, 0x128 + panelOffset, (x, tap) => getTempo(x, tap), false),
        },

        /**
         *  Offset in file: 0x125 (b2)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Delay Ping Pong
         */
        pingPong: {
            enabled: pingPong,
            isDefault: pingPong === false,
        },

        /**
         * Offset in file: 0x132 (b3-0) and 0x133 (b7-5)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * @module NS2 Delay Feedback
         */
        feedback: {
            midi: delayFeedbackMidi,
            isDefault: delayFeedbackMidi === 64,
            value: midi2LinearStringValue(0, 10, delayFeedbackMidi, 1, ""),
        },

        /**
         * Offset in file: 0x131 (b2-0) and 0x132 (b7-4)
         *
         * @example
         * 7-bit value 0/127 = 0/10
         *
         * Delay Amount Morph Wheel
         * offset in file 0x12e (b2-0) and 0x12f (b7-3)
         *
         * Delay Amount Morph AT
         * offset in file 0x12f (b2-0) and 0x130 (b7-3)
         *
         * Delay Amount Morph CtrlPedal
         * offset in file 0x130 (b2-0) and 0x131 (b7-3)
         *
         * @module NS2 Delay Amount
         */
        amount: {
            midi: delayAmountMidi,
            isDefault: delayAmountMidi === 64,
            value: midi2LinearStringValue(0, 10, delayAmountMidi, 1, ""),

            morph: ns2Morph7Bits(
                delayOffset12eWw >>> 3,
                delayAmountMidi,
                (x) => {
                    return midi2LinearStringValue(0, 10, x, 1, "");
                },
                false
            ),
        },
    };
};

export { ns2Delay };
