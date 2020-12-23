const { ns2Morph7Bits } = require("./ns2-morph");
const { ns2KbZone } = require("./ns2-utils");
const { ns2ExternControlMap } = require("./ns2-mapping");

/***
 * returns Extern section
 *
 * @class
 * @ignore
 * @param buffer {Buffer}
 * @param panelOffset {number}
 * @param global
 * @returns {{kbTouch: string, kbZone: string, softRelease: boolean, sustainPedal: boolean, type: string, octaveShift: number, enabled: boolean, volume: {midi: *, value: string, morph: {afterTouch: {to: ({midi: *, value: string}|string), enabled: boolean}, controlPedal: {to: ({midi: *, value: string}|string), enabled: boolean}, wheel: {to: ({midi: *, value: string}|string), enabled: boolean}}}, timbre: string, pitchStick: boolean, stringResonance: boolean, model: number, pedalNoise: boolean, layerDetune: string}}
 */
exports.ns2Extern = (buffer, panelOffset, global) => {
    const externOffset52 = buffer.readUInt8(0x52 + panelOffset);
    const externOffset56W = buffer.readUInt16BE(0x56 + panelOffset);
    const externOffset57 = buffer.readUInt8(0x57 + panelOffset);
    const externOffsetFf = buffer.readUInt8(0xff + panelOffset);

    const externOffset103 = buffer.readUInt8(0x103 + panelOffset);
    const externOffset106 = buffer.readUInt8(0x106 + panelOffset);
    const externOffset10aW = buffer.readUInt16BE(0x10a + panelOffset);

    const externOffset100Ww = buffer.readUInt32BE(0x100 + panelOffset);
    const externOffset107Ww = buffer.readUInt32BE(0x107 + panelOffset);

    const externEnabled = (externOffset52 & 0x20) !== 0;
    const externKbZone = ns2KbZone(externEnabled, global, (externOffset56W & 0x3800) >>> 11);
    const midiCc = externOffset103 & 0x7f;
    const midiProgram = externOffset106 & 0x7f;
    const volume = (externOffset10aW & 0x01fc) >>> 2;

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
        octaveShift: {
            value: ((externOffset56W & 0x0780) >>> 7) - 7,
        },

        /**
         * Offset in file: 0x57 (b6)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Extern Pitch Stick
         */
        pitchStick: {
            enabled: (externOffset57 & 0x40) !== 0,
        },

        /**
         * Offset in file: 0x57 (b5)
         *
         * @example
         * O = off, 1 = on
         *
         * @module NS2 Extern Sustain Pedal
         */
        sustainPedal: {
            enabled: (externOffset57 & 0x20) !== 0,
        },

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
             * Offset in file: 0x106 (b6-0)
             *
             * @example
             * O7-bit value = 1 to 128 (no morph)
             *
             * @module NS2 Extern Midi Program
             */
            midi: midiProgram,
            value: (midiProgram + 1).toString(),
        },

        volume: {
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

            morph: ns2Morph7Bits(
                externOffset107Ww >>> 1,
                volume,
                (x) => {
                    return x;
                },
                false
            ),
        },
    };
};
