const { midiControlChangeMap } = require("../../common/midi-mapping");
const { ns2Morph7Bits } = require("./ns2-morph");
const { ns2KbZone, ns2OctaveShift, ns2BooleanValue } = require("./ns2-utils");
const { ns2ExternControlMap, ns2ExternMidiVelocityCurveMap } = require("./ns2-mapping");

/***
 * returns Extern section
 * @param buffer
 * @param panelOffset
 * @param global
 * @returns {{cc: {text: string, value: number}, kbZone: {array, value}, wheel: {enabled: boolean}, sustainPedal: {enabled: boolean}, channel: {type: (string), value: number}, control: {value: string}, program: {midi: number, value: string, enabled: boolean}, velocity: {value: string}, octaveShift: {value: number}, swell: {enabled: boolean}, enabled: boolean, cc00: {value: number, enabled: boolean}, volume: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string, enabled: boolean}, cc32: {value: number, enabled: boolean}, afterTouch: {enabled: boolean}, pitchStick: {enabled: boolean}, controlPedal: {enabled: boolean}, midiCc: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string, enabled: boolean}}}
 */
exports.ns2Extern = (buffer, panelOffset, global) => {
    const externOffset52 = buffer.readUInt8(0x52 + panelOffset);
    const externOffset56W = buffer.readUInt16BE(0x56 + panelOffset);
    const externOffset57 = buffer.readUInt8(0x57 + panelOffset);
    const externOffsetFf = buffer.readUInt8(0xff + panelOffset);
    const externOffsetFfW = buffer.readUInt16BE(0xff + panelOffset);

    const externOffset103 = buffer.readUInt8(0x103 + panelOffset);
    const externOffset104 = buffer.readUInt8(0x104 + panelOffset);
    const externOffset105 = buffer.readUInt8(0x105 + panelOffset);
    const externOffset106 = buffer.readUInt8(0x106 + panelOffset);
    const externOffset107 = buffer.readUInt8(0x107 + panelOffset);
    const externOffset10aW = buffer.readUInt16BE(0x10a + panelOffset);
    const externOffset10b = buffer.readUInt8(0x10b + panelOffset);
    const externOffset10c = buffer.readUInt8(0x10c + panelOffset);

    const externOffset100Ww = buffer.readUInt32BE(0x100 + panelOffset);
    const externOffset107Ww = buffer.readUInt32BE(0x107 + panelOffset);

    const externEnabled = (externOffset52 & 0x20) !== 0;
    const externKbZone = ns2KbZone(externEnabled, global, (externOffset56W & 0x3800) >>> 11);
    const midiCc = externOffset103 & 0x7f;
    const midiProgram = externOffset106 & 0x7f;
    const volume = (externOffset10aW & 0x01fc) >>> 2;

    const externCcValue = (externOffsetFfW & 0x3f80) >>> 7;
    const externCcValueText = midiControlChangeMap.get(externCcValue);

    const channel = ((externOffset107 & 0x78) >>> 3) + 1;
    const channelType = (externOffset107 & 0x02) !== 0 ? "USB" : "MIDI";
    const cc00 = externOffset105 & 0x7f;
    const cc32 = externOffset104 & 0x7f;
    const velocity = (externOffset10c & 0x18) >>> 3;

    return {
        /**
         * Offset in file: 0x52 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Extern On
         */
        enabled: externEnabled,

        /**
         * Offset in file: 0x56 (b5-3)
         * @see {@link ns2-doc.md#ns2-organ-kb-zone Organ Kb Zone} for detailed explanation.
         *
         * @module NS2 Extern Kb Zone
         */
        kbZone: {
            array: externKbZone[1],
            value: externKbZone[0],
        },

        /**
         * Offset in file: 0x56 (b2-0) and 0x57 (b7)
         *
         * @example
         * Octave Shift = value - 7
         *
         * @module NS2 Extern Octave Shift
         */
        octaveShift: ns2OctaveShift((externOffset56W & 0x0780) >>> 7),

        /**
         * Offset in file: 0x57 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Extern Pitch Stick
         */
        pitchStick: ns2BooleanValue((externOffset57 & 0x40) !== 0, true),

        /**
         * Offset in file: 0x57 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Extern Sustain Pedal
         */
        sustainPedal: ns2BooleanValue((externOffset57 & 0x20) !== 0, true),

        /**
         * Offset in file: 0xff (b7-6)
         *
         * @example
         * #include ns2ExternControlMap
         * @module NS2 Extern Midi Control
         */
        control: {
            value: ns2ExternControlMap.get((externOffsetFf & 0xc0) >>> 6),
        },

        midiCc: {
            /**
             * Offset in file: 0x104 (b7)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Extern Midi CC On
             */
            enabled: (externOffset104 & 0x80) !== 0,
            /**
             * Offset in file: 0x103 (b6-0)
             *
             * @example
             * 7-bit value = 0/127
             *
             * EXTERN MIDI CC Morph WHEEL
             * offset in file 0x100 (b6-0) and 0x101 (b7)
             *
             * EXTERN MIDI CC Morph AT
             * offset in file 0x101 (b6-0) and 0x102 (b7)
             *
             * EXTERN MIDI CC Morph CONTROL PEDAL
             * offset in file 0x102 (b6-0) and 0x103 (b7)
             *
             * @module NS2 Extern Midi CC
             */
            midi: midiCc,
            value: midiCc.toString(),
            isDefault: midiCc === 0,

            morph: ns2Morph7Bits(
                externOffset100Ww >>> 7,
                midiCc,
                (x) => {
                    return x.toString();
                },
                false
            ),
        },

        program: {
            /**
             * Offset in file: 0x107 (b7)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Extern Midi Program On
             */
            enabled: (externOffset107 & 0x80) !== 0,

            /**
             * Offset in file: 0x106 (b6-0)
             *
             * @example
             * O7-bit value = 1 to 128 (no morph)
             *
             * @module NS2 Extern Midi Program
             */
            midi: midiProgram,
            value: (midiProgram + 1).toString(),
            isDefault: midiProgram === 0,
        },

        volume: {
            /**
             * Offset in file: 0x10b (b1)
             *
             * @example
             * O = off, 1 = on
             *
             * @module NS2 Extern Midi Volume On
             */
            enabled: (externOffset10b & 0x02) !== 0,

            /**
             * Offset in file: 0x10a (b0) and 0x10b (b7-2)
             *
             * @example
             * O7-bit value = 0/127
             *
             * EXTERN VOLUME Morph WHEEL
             * offset in file 0x107 (b0) and 0x108 (b7-1)
             *
             * EXTERN VOLUME Morph AT
             * offset in file 0x108 (b0) and 0x109 (b7-1)
             *
             * EXTERN VOLUME Morph CONTROL PEDAL
             * offset in file 0x109 (b0) and 0x10a (b7-1)
             *
             * @module NS2 Extern Volume
             */
            midi: volume,
            value: volume.toString(),
            isDefault: volume === 0,

            morph: ns2Morph7Bits(
                externOffset107Ww >>> 1,
                volume,
                (x) => {
                    return x;
                },
                false
            ),
        },

        channel: {
            /**
             * Offset in file: 0x107 (b6-3)
             *
             * @example
             * O4-bit value = 1 to 16
             *
             * @module NS2 Extern Midi Channel
             */
            value: channel,
            isDefault: (channel === 14) && (channelType === "MIDI"),

            /**
             * Offset in file: 0x107 (b1)
             *
             * @example
             * 0 = MIDI
             * 1 = USB
             *
             * @module NS2 Extern Midi Channel Type
             */
            type: channelType,
        },

        cc00: {
            /**
             * Offset in file: 0x106 (b7)
             *
             * @example
             * 0 = OFF
             * 1 = ON
             *
             * @module NS2 Extern Midi Bank Select CC00 Enabled
             */
            enabled: (externOffset106 & 0x80) !== 0,

            /**
             * Offset in file: 0x105 (b6-0)
             *
             * @example
             * O7-bit value = 0 to 127
             *
             * @module NS2 Extern Midi Bank Select CC00
             */
            value: cc00,
            isDefault: cc00 === 0,
        },

        cc32: {
            /**
             * Offset in file: 0x105 (b7)
             *
             * @example
             * 0 = OFF
             * 1 = ON
             *
             * @module NS2 Extern Midi Bank Select CC32 Enabled
             */
            enabled: (externOffset105 & 0x80) !== 0,

            /**
             * Offset in file: 0x104 (b6-0)
             *
             * @example
             * O7-bit value = 0 to 127
             *
             * @module NS2 Extern Midi Bank Select CC32
             */
            value: cc32,
            isDefault: cc32 === 0,
        },

        cc: {
            /**
             * Offset in file: 0xff (b5-0) and 0x100 (b7)
             *
             * @example
             * O7-bit value = 0 to 119
             *
             * @module NS2 Extern Midi CC Number
             */
            value: externCcValue,
            text: externCcValueText,
            isDefault: externCcValue === 2,
        },

        /**
         * Offset in file: 0x10b (b0)
         *
         * @example
         * 0 = OFF
         * 1 = ON
         *
         * @module NS2 Extern Midi Send Wheel
         */
        wheel: ns2BooleanValue((externOffset10b & 0x01) !== 0, true),

        /**
         * Offset in file: 0x10c (b7)
         *
         * @example
         * 0 = OFF
         * 1 = ON
         *
         * @module NS2 Extern Midi Send AfterTouch
         */
        afterTouch: ns2BooleanValue((externOffset10c & 0x80) !== 0, true),

        /**
         * Offset in file: 0x10c (b6)
         *
         * @example
         * 0 = OFF
         * 1 = ON
         *
         * @module NS2 Extern Midi Send Control Pedal
         */
        controlPedal: ns2BooleanValue((externOffset10c & 0x40) !== 0, true),

        /**
         * Offset in file: 0x10c (b2)
         *
         * @example
         * 0 = OFF
         * 1 = ON
         *
         * @module NS2 Extern Midi Send Swell
         */
        swell: ns2BooleanValue((externOffset10c & 0x04) !== 0, true),

        velocity: {
            /**
             * Offset in file: 0x10c (b4-3)
             *
             * @example
             * #include ns2ExternControlMap
             *
             * @module NS2 Extern Midi Velocity Curve
             */
            value: ns2ExternMidiVelocityCurveMap.get(velocity),
            isDefault: velocity === 1,
        },
    };
};
