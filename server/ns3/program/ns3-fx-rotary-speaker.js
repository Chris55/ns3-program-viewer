const converter = require("../../common/converter");
const mapping = require("./ns3-mapping");

/***
 * returns Rotary Speaker Effect section
 *
 * @param buffer
 * @param panelOffset
 * @returns {{stopMode: {enabled: boolean}, source: {value: string}, drive: {value: string}, enabled: boolean, speed: {morph: {afterTouch: {enabled: boolean}, controlPedal: {enabled: boolean}, wheel: {enabled: boolean}}, value: string}}}
 */
exports.ns3RotarySpeakerEffect = (buffer, panelOffset) => {
    const organOffset34 = buffer.readUInt8(0x34 + panelOffset);
    const organOffset35 = buffer.readUInt8(0x35 + panelOffset);
    const organOffset35W = buffer.readUInt16BE(0x35 + panelOffset);
    const rotarySpeakerOffset39W = buffer.readUInt16BE(0x39 + panelOffset);
    const rotarySpeakerOffset10B = buffer.readUInt8(0x10b + panelOffset);

    return {
        /**
         * Offset in file: 0x10b (bit7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Rotary Speaker On
         */
        enabled: (rotarySpeakerOffset10B & 0x80) !== 0,

        /**
         * Offset in file: 0x10b (b6 and b5)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         * @module NS3 Rotary Speaker Source
         */
        source: {
            value: mapping.ns3EffectSourceMap.get((rotarySpeakerOffset10B & 0b01100000) >>> 5),
        },

        /**
         * Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4)
         *
         * @example
         * 7-bit value 0/127 converted to 0/10
         *
         * Note: Same value is used for both panel A & B
         *
         * @module NS3 Rotary Speaker Drive
         */
        drive: {
            value: converter.midi2LinearStringValue(0, 10, (rotarySpeakerOffset39W & 0b0000011111110000) >>> 4, 1, ""),
        },

        /**
         * Offset in file: 0x35 (bit7)
         *
         * @example
         * 0 = enabled (Speed Stop), 1 = disabled (Speed Slow)
         *
         * Note: Same value is used for both panel A & B
         *
         * @module NS3 Rotary Speaker Stop Mode
         */
        stopMode: {
            enabled: !((organOffset35 & 0x80) >>> 7 !== 0),
        },

        /**
         * Offset in file: 0x34 (bit0)
         *
         * @example
         * 0 = Slow/Stop, 1 = Fast
         *
         * Morph Wheel:         0x35 (b6-4)
         * Morph After Touch:   0x35 (b3-1)
         * Morph Control Pedal: 0x35 (b0) and 0x36 (b7-6)
         *
         * 011 = 0x03 = morph off
         * 100 = 0x04 = morph on
         *
         * Note: Same value is used for both panel A & B
         *
         * @module NS3 Rotary Speaker Speed
         */

        /***
         *          With Slow/Stop Enabled                          With Fast Enabled
         *                       0x35       0x36       0x37                      0x35       0x36       0x37
         * off:     B6 DD 15   1011 0110  1101 1101  0001 0101      B6 DD 15   1011 0110  1101 1101  0001 0101
         *
         *                      xxx                                             xxx
         * wheel:   C6 DD 15   1100 0110  1101 1101  0001 0101      C6 DD 15   1100 0110  1101 1101  0001 0101
         *
         *                          xxx     x    x          x                       xxx
         * aTouch:  B8 EE 1F   1011 1000  1110 1110  0001 1111      B8 DD 15   1011 1000  1101 1101  0001 1101
         *
         *                             x  xx                                           x  xx
         * ctrlPed: B7 1D 15   1011 0111  0001 1101  0001 0101      B7 1D 15   1011 0111  0001 1101  0001 0101
         *
         */

        speed: {
            value: mapping.ns3RotarySpeakerSpeedMap.get(organOffset34 & 0x01),
            morph: {
                wheel: {
                    enabled: (organOffset35W & 0x7000) >>> 12 !== 0x03,
                },
                afterTouch: {
                    enabled: (organOffset35W & 0xe00) >>> 9 !== 0x03,
                },
                controlPedal: {
                    enabled: (organOffset35W & 0x01c0) >>> 6 !== 0x03,
                },
            },
        },
    };
};
