const { ns3ExternControlMap } = require("./ns3-mapping");
const { ns3Morph } = require("./ns3-morph");
const { ns3KbZone } = require("./ns3-utils");

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
exports.ns3Extern = (buffer, panelOffset, global) => {
    const externOffsetF4W = buffer.readUInt16BE(0xf4 + panelOffset);
    const externOffsetF6 = buffer.readUInt8(0xf6 + panelOffset);
    const externOffsetF7W = buffer.readUInt16BE(0xf7 + panelOffset);
    const externOffsetF8Ww = buffer.readUInt32BE(0xf8 + panelOffset);
    const externOffsetFdW = buffer.readUInt16BE(0xfd + panelOffset);
    const externOffsetFeWw = buffer.readUInt32BE(0xfe + panelOffset);
    const externOffset101W = buffer.readUInt16BE(0x101 + panelOffset);
    const externOffset102Ww = buffer.readUInt32BE(0x102 + panelOffset);

    const externEnabled = (externOffsetF4W & 0x8000) !== 0;
    const externKbZone = ns3KbZone(externEnabled, global, (externOffsetF4W & 0x7800) >>> 11);
    const midiCc = (externOffsetF7W & 0x01fc) >>> 2;
    const midiProgram = (externOffsetFdW & 0x01fc) >>> 2;
    const volume = (externOffset101W & 0x01fc) >>> 2;

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
             * Offset in file: 0xF7 (b0) and 0xF8 (b7-2)
             *
             * @example
             * O7-bit value = 0/127
             *
             * @module NS3 Extern Midi CC
             */
            midi: midiCc,

            morph: ns3Morph(externOffsetF8Ww >>> 2, midiCc, (x) => {
                return x;
            }, false),
        },

        program: {
            /**
             * Offset in file: 0xFD (b0) and 0xFE (b7-2)
             *
             * @example
             * O7-bit value = 0/127
             *
             * @module NS3 Extern Midi Program
             */
            midi: midiProgram,

            morph: ns3Morph(externOffsetFeWw >>> 2, midiProgram, (x) => {
                return x;
            }, false),
        },

        volume: {
            /**
             * Offset in file: 0x101 (b0) and 0x102 (b7-2)
             *
             * @example
             * O7-bit value = 0/127
             *
             * @module NS3 Extern Volume
             */
            midi: volume,

            morph: ns3Morph(externOffset102Ww >>> 2, volume, (x) => {
                return x;
            }, false),
        },
    };
};
