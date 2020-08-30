const { getOrgan } = require("./organ");
const { getVolume } = require("../common/utils");

exports.getMorph = (buffer, panelOffset) => {
    const morphOffset35 = buffer.readUInt8(0x35 + panelOffset);
    const morphOffsetB7W = buffer.readUInt16BE(0xb7 + panelOffset);
    const morphOffsetB8W = buffer.readUInt16BE(0xb8 + panelOffset);
    const morphOffsetB9W = buffer.readUInt16BE(0xb9 + panelOffset);



    return {
        organ: {

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
