const { getOrgan } = require("./organ");
const { getVolume } = require("../common/utils");

exports.getMorph = (buffer, panelOffset) => {
    const morphOffset35 = buffer.readUInt8(0x35 + panelOffset);
    const morphOffsetB7W = buffer.readUInt16BE(0xb7 + panelOffset);
    const morphOffsetB8W = buffer.readUInt16BE(0xb8 + panelOffset);
    const morphOffsetB9W = buffer.readUInt16BE(0xb9 + panelOffset);

    // this is to read the from value
    const organ = getOrgan(buffer, panelOffset);

    const organLevelWheelEnabled = !((morphOffsetB8W & 0x1000) !== 0);
    const organLevelWheelMidi = (morphOffsetB7W & 0x0fe0) >> 5;
    const organLevelAfterTouchEnabled = !((morphOffsetB9W & 0x1000) !== 0);
    const organLevelAfterTouchMidi = (morphOffsetB8W & 0x0fe0) >> 5;
    const organLevelControlPedalEnabled = !((morphOffsetB9W & 0x0010) !== 0);
    const organLevelControlPedalMidi = (morphOffsetB9W & 0x0fe0) >> 5;

    return {
        organ: {
            level: {
                /***
                 * Morphing Organ Initial Level Value
                 */
                from: organ.volume,

                /***
                 * Wheel Morphing Organ
                 */
                wheel: {
                    /***
                     * Wheel Morphing Organ Level On/Off
                     * Offset in file: 0xB8 (b4) 0 = Enabled, 1 = Disabled
                     */
                    enabled: organLevelWheelEnabled,

                    /***
                     * Wheel Morphing Organ Final Level Value
                     * Offset in file: 0xB7 (b3-0) and 0xB8 (b7-5) 0/127 midi value
                     */
                    to: organLevelWheelEnabled ? getVolume(organLevelWheelMidi) : "none",
                },

                /***
                 * After Touch Morphing Organ
                 */
                afterTouch: {
                    /***
                     * After Touch Morphing Organ Level On/Off
                     * Offset in file: 0xB8 (b4) 0 = Enabled, 1 = Disabled
                     */
                    enabled: organLevelAfterTouchEnabled,

                    /***
                     * After Touch Morphing Organ Final Level Value
                     * Offset in file: 0xB7 (b3-0) and 0xB8 (b7-5) 0/127 midi value
                     */
                    to: organLevelAfterTouchEnabled ? getVolume(organLevelAfterTouchMidi) : "none",
                },

                /***
                 * Control Pedal Morphing Organ
                 */
                controlPedal: {
                    /***
                     * Control Pedal Morphing Organ Level On/Off
                     * Offset in file: 0xB8 (b4) 0 = Enabled, 1 = Disabled
                     */
                    enabled: organLevelControlPedalEnabled,

                    /***
                     * Control Pedal Morphing Organ Final Level Value
                     * Offset in file: 0xB7 (b3-0) and 0xB8 (b7-5) 0/127 midi value
                     */
                    to: organLevelControlPedalEnabled ? getVolume(organLevelControlPedalMidi) : "none",
                },
            },
            /***
             * Organ Morph Rotary Speed
             * Offset in file: 0x35 and 0x36
             *
             * Values:
             *                   Wheel A.Touch CtrlPed
             *   T4:  0xB6 0xDD    0      0      0        1011 0110  1101 1101
             *   T5:  0xC6 0xDD    1      0      0        1100 0110  1101 1101
             *   T6:  0xB8 0xDD    0      1      0        1011 1000  1101 1101
             *   T7:  0xB7 0x1D    0      0      1        1011 0111  0001 1101
             *   T8:  0xC9 0x1D    1      1      1        1100 1001  0001 1101
             *   T9:  0xC8 0xE9    1      1      0        1100 1000  1110 1001
             *   T10: 0xB9 0x1D    0      1      1        1011 1001  0001 1101
             */
            // organRotarySpeed: {
            //     wheel: ((morphOffset35 & 0x00) !== 0),
            //     afterTouch: false,
            //     controlPedal: false,
            // }
        },
    };
};
