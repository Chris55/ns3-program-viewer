const converter = require("../../common/converter");
const mapping = require("./ns2-mapping");

/***
 * returns Rotary Speaker Effect section
 *
 * @param buffer
 * @param panelOffset
 * @returns {{stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}}
 */
exports.ns2RotarySpeakerEffect = (buffer, panelOffset) => {
    const rotarySpeakerOffset3f = buffer.readUInt8(0x3f + panelOffset);
    const rotarySpeakerOffset3fW = buffer.readUInt16BE(0x3f + panelOffset);
    const rotarySpeakerOffset40 = buffer.readUInt8(0x40 + panelOffset);
    const rotarySpeakerOffset41 = buffer.readUInt8(0x41 + panelOffset);

    return {
        /**
         * Offset in file: 0x3f (b4)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Rotary Speaker On
         */
        enabled: (rotarySpeakerOffset3f & 0x10) !== 0,

        /**
         * Offset in file: 0x3f (b3-2)
         *
         * @example
         * #include ns2EffectSourceMap
         *
         * @module NS2 Rotary Speaker Source
         */
        source: {
            value: mapping.ns2EffectSourceMap.get((rotarySpeakerOffset3f & 0x0c) >>> 2),
        },

        /**
         * Offset in file: 0x3f (b1-0) and 0x40 (b7-3)
         *
         * @example
         * 7-bit value 0/127 converted to 0/10
         *
         * Note: Same value is used for both panel A & B
         *
         * @module NS2 Rotary Speaker Drive
         */
        drive: {
            value: converter.midi2LinearStringValue(0, 10, (rotarySpeakerOffset3fW & 0x03f8) >>> 3, 1, ""),
        },

        /**
         * Offset in file: 0x40 (b2)
         *
         * @example
         * 0 = disabled (Speed Slow), 1 = enabled (Speed Stop)
         *
         * Note: Same value is used for both panel A & B
         *
         * @module NS2 Rotary Speaker Stop Mode
         */
        stopMode: {
            enabled: ((rotarySpeakerOffset40 & 0x04) !== 0),
        },

        /**
         * Offset in file: 0x40 (b1)
         *
         * @example
         * 0 = Slow/Stop, 1 = Fast
         *
         * Morph Wheel:         0x40 (b0)
         * Morph After Touch:   0x41 (b7)
         * Morph Control Pedal: 0x41 (b6)
         *
         * Note: Same value is used for both panel A & B
         *
         * @module NS2 Rotary Speaker Speed
         */

        speed: {
            value: mapping.ns2RotarySpeakerSpeedMap.get((rotarySpeakerOffset40 & 0x02) >>> 1),
            morph: {
                wheel: {
                    enabled: (rotarySpeakerOffset40 & 0x01) !== 0,
                },
                afterTouch: {
                    enabled: (rotarySpeakerOffset41 & 0x80) !== 0,
                },
                controlPedal: {
                    enabled: (rotarySpeakerOffset41 & 0x40) !== 0,
                },
            },
        },
    };
};
