const { ns3ExternMidiVelocityCurveMap } = require("./ns3-mapping");
const { midiControlChangeMap } = require("../../common/midi-mapping");
const { ns3ExternControlMap } = require("./ns3-mapping");
const { ns3Morph7Bits } = require("./ns3-morph");
const { ns3KbZone } = require("./ns3-utils");

/***
 * returns Extern section
 *
 * @param buffer
 * @param panelOffset
 * @param global
 * @returns {{cc: {text: string, value: number}, kbZone: {array, value}, wheel: {enabled: boolean}, sustainPedal: {enabled: boolean}, channel: {value: (number|string), enabled: boolean}, control: {value: string}, program: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, velocity: {value: string}, octaveShift: {value: number}, swell: {enabled: boolean}, enabled: boolean, cc00: {value: (number|string), enabled: boolean}, volume: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string, enabled: boolean}, cc32: {value: (number|string), enabled: boolean}, afterTouch: {enabled: boolean}, pitchStick: {enabled: boolean}, controlPedal: {enabled: boolean}, midiCc: {midi: number, enabledOnLoad: boolean, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}}}
 */
exports.ns3Extern = (buffer, panelOffset, global) => {
    const externOffsetF4W = buffer.readUInt16BE(0xf4 + panelOffset);
    const externOffsetF5 = buffer.readUInt8(0xf5 + panelOffset);
    const externOffsetF6 = buffer.readUInt8(0xf6 + panelOffset);
    const externOffsetF7 = buffer.readUInt8(0xf7 + panelOffset);
    const externOffsetF7W = buffer.readUInt16BE(0xf7 + panelOffset);
    const externOffsetF8Ww = buffer.readUInt32BE(0xf8 + panelOffset);
    const externOffsetFb = buffer.readUInt8(0xfb + panelOffset);
    const externOffsetFbW = buffer.readUInt16BE(0xfb + panelOffset);
    const externOffsetFcW = buffer.readUInt16BE(0xfc + panelOffset);
    const externOffsetFdW = buffer.readUInt16BE(0xfd + panelOffset);
    const externOffsetFeWw = buffer.readUInt32BE(0xfe + panelOffset);
    const externOffset101 = buffer.readUInt8(0x101 + panelOffset);
    const externOffset101W = buffer.readUInt16BE(0x101 + panelOffset);
    const externOffset102Ww = buffer.readUInt32BE(0x102 + panelOffset);
    const externOffset105 = buffer.readUInt8(0x105 + panelOffset);

    const externEnabled = (externOffsetF4W & 0x8000) !== 0;
    const externKbZone = ns3KbZone(externEnabled, global, (externOffsetF4W & 0x7800) >>> 11);
    const midiCc = (externOffsetF7W & 0x01fc) >>> 2;
    const midiProgram = (externOffsetFdW & 0x01fc) >>> 2;
    const volume = (externOffset101W & 0x01fc) >>> 2;

    const cc00 = (externOffsetFcW & 0x01fe) >>> 1;
    const cc32 = (externOffsetFbW & 0x01fe) >>> 1;
    const channel = externOffsetF5 & 0x1f;

    const externCcValue = (externOffsetF7 & 0xfe) >>> 1;
    const externCcValueText = midiControlChangeMap.get(externCcValue);

    return {
        /**
         * Offset in file: 0xF4 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Extern On
         */
        enabled: externEnabled,

        /**
         * Offset in file: 0xF4 (b6-3)
         * @see {@link ns3-doc.md#ns3-organ-kb-zone Organ Kb Zone} for detailed explanation.
         *
         * @module NS3 Extern Kb Zone
         */
        kbZone: {
            array: externKbZone[1],
            value: externKbZone[0],
        },

        /**
         * Offset in file: 0xF4 (b1-0) and 0xF5 (b7)
         *
         * @example
         * Octave Shift = value - 6
         *
         * @module NS3 Extern Octave Shift
         */
        octaveShift: {
            value: ((externOffsetF4W & 0x0380) >>> 7) - 6,
        },

        /**
         * Offset in file: 0xF6 (b7)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Extern Pitch Stick
         */
        pitchStick: {
            enabled: (externOffsetF6 & 0x80) !== 0,
        },

        /**
         * Offset in file: 0xF6 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS3 Extern Sustain Pedal
         */
        sustainPedal: {
            enabled: (externOffsetF6 & 0x40) !== 0,
        },

        /**
         * Offset in file: 0xF6 (b1-0)
         *
         * @example
         * #include ns3ExternControlMap
         * @module NS3 Extern Midi Control
         */
        control: {
            value: ns3ExternControlMap.get(externOffsetF6 & 0x03),
        },

        midiCc: {
            /**
             * Offset in file: 0xfb (b1)
             *
             * @example
             * (Send on Load)
             * O = off, 1 = on
             *
             * @module NS3 Extern Midi Send User CC On Load
             */
            enabledOnLoad: (externOffsetFb & 0x02) !== 0,

            /**
             * Offset in file: 0xF7 (b0) and 0xF8 (b7-2)
             *
             * @example
             * 7-bits value = 0/127
             *
             * @module NS3 Extern Midi CC
             */
            midi: midiCc,
            value: midiCc.toString(),

            morph: ns3Morph7Bits(
                externOffsetF8Ww >>> 2,
                midiCc,
                (x) => {
                    return x;
                },
                false
            ),
        },

        program: {
            /**
             * Offset in file: 0x101 (b1)
             *
             * @example
             * (Send on Load)
             * O = off, 1 = on
             *
             * @module NS3 Extern Midi Send Program On Load
             */
            enabledOnLoad: (externOffset101 & 0x02) !== 0,

            /**
             * Offset in file: 0xFD (b0) and 0xFE (b7-2)
             *
             * @example
             * 7-bits value = 0/127
             *
             * @module NS3 Extern Midi Program
             */
            midi: midiProgram,
            value: midiProgram.toString(),

            morph: ns3Morph7Bits(
                externOffsetFeWw >>> 2,
                midiProgram,
                (x) => {
                    return x.toString();
                },
                false
            ),
        },

        volume: {
            /**
             * Offset in file: 0x105 (b1)
             *
             * @example
             * (Send on Load)
             * O = off, 1 = on
             *
             * @module NS3 Extern Midi Send Volume On Load
             */
            enabledOnLoad: (externOffset105 & 0x02) !== 0,

            /**
             * Offset in file: 0x105 (b0)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS3 Extern Midi Send Volume
             */
            enabled: (externOffset105 & 0x01) !== 0,

            /**
             * Offset in file: 0x101 (b0) and 0x102 (b7-2)
             *
             * @example
             * 7-bits value = 0/127
             *
             * @module NS3 Extern Volume
             */
            midi: volume,
            value: volume.toString(),

            morph: ns3Morph7Bits(
                externOffset102Ww >>> 2,
                volume,
                (x) => {
                    return x;
                },
                false
            ),
        },

        channel: {
            /**
             * Offset in file: 0xf5 (b4-0)
             *
             * @example
             * 5-bits value
             * 0 = 0FF
             * 1 = 1
             * 2 = 2....
             *
             * @module NS3 Extern Midi Channel
             */
            enabled: channel !== 0,
            value: channel !== 0 ? channel : "",
        },

        cc00: {
            /**
             * Offset in file: 0xfc (b0) to 0xfd (b7-1)
             *
             * @example
             * 8-bits value
             * 0 = 0FF
             * 1 = 0
             * 2 = 1....
             *
             * @module NS3 Extern Midi Bank Select CC00
             */
            enabled: cc00 !== 0,
            value: cc00 !== 0 ? cc00 - 1 : "",
        },

        cc32: {
            /**
             * Offset in file: 0xfb (b0) to 0xfc (b7-1)
             *
             * @example
             * 8-bits value
             * 0 = 0FF
             * 1 = 0
             * 2 = 1....
             *
             * @module NS3 Extern Midi Bank Select CC32
             */
            enabled: cc32 !== 0,
            value: cc32 !== 0 ? cc32 - 1 : "",
        },

        cc: {
            /**
             * Offset in file: 0xf7 (b7-1)
             *
             * @example
             * 7-bits value = 0 to 119
             *
             * @module NS3 Extern Midi CC Number
             */
            value: externCcValue,
            text: externCcValueText,
        },

        wheel: {
            /**
             * Offset in file: 0xf6 (b5)
             *
             * @example
             * 0 = OFF
             * 1 = ON
             *
             * @module NS3 Extern Midi Send Wheel
             */
            enabled: (externOffsetF6 & 0x20) !== 0,
        },

        afterTouch: {
            /**
             * Offset in file: 0xf6 (b4)
             *
             * @example
             * 0 = OFF
             * 1 = ON
             *
             * @module NS3 Extern Midi Send AfterTouch
             */
            enabled: (externOffsetF6 & 0x10) !== 0,
        },

        controlPedal: {
            /**
             * Offset in file: 0xf6 (b3)
             *
             * @example
             * 0 = OFF
             * 1 = ON
             *
             * @module NS3 Extern Midi Send Control Pedal
             */
            enabled: (externOffsetF6 & 0x08) !== 0,
        },

        swell: {
            /**
             * Offset in file: 0xf6 (b2)
             *
             * @example
             * 0 = OFF
             * 1 = ON
             *
             * @module NS3 Extern Midi Send Swell
             */
            enabled: (externOffsetF6 & 0x04) !== 0,
        },

        velocity: {
            /**
             * Offset in file: 0xf5 (b6-5)
             *
             * @example
             * #include ns3ExternMidiVelocityCurveMap
             *
             * @module NS3 Extern Midi Velocity Curve
             */
            value: ns3ExternMidiVelocityCurveMap.get((externOffsetF5 & 0x60) >>> 5),
        },
    };
};
