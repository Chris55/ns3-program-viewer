import { ns2AmpSimEqdBMap, ns2AmpSimEqMidFilterFreqMap, ns2AmpSimTypeMap, ns2EffectSourceMap } from "./ns2-mapping";
import { midi2LinearStringValue } from "../../common/converter";

/***
 * returns Amp Sim / Eq
 *
 * @param buffer
 * @param panelOffset
 * @returns {{ampType: {value: string}, bass: {midi: number, value: string}, mid: {midi: number, value: string}, source: {value: string}, treble: {midi: number, value: string}, overdrive: {midi: number, value: string}, enabled: boolean, midFilterFreq: {midi: number, value: string}}}
 */
const ns2AmpSimEq = (buffer, panelOffset) => {
    const eqOffset133 = buffer.readUInt8(0x133 + panelOffset);
    const eqOffset134 = buffer.readUInt8(0x134 + panelOffset);
    const eqOffset134W = buffer.readUInt16BE(0x134 + panelOffset);
    const eqOffset135W = buffer.readUInt16BE(0x135 + panelOffset);
    const eqOffset136W = buffer.readUInt16BE(0x136 + panelOffset);
    const eqOffset137W = buffer.readUInt16BE(0x137 + panelOffset);

    const ampSimType = ns2AmpSimTypeMap.get(eqOffset133 & 0x03);
    const trebleMidi = (eqOffset134W & 0x01fc) >>> 2;
    const midMidi = (eqOffset135W & 0x03f8) >>> 3;
    const bassMidi = (eqOffset136W & 0x07f0) >>> 4;
    const midFilterFreqMidi = (eqOffset137W & 0x0fe0) >>> 5;
    const driveMidi = (eqOffset134 & 0xfe) >>> 1;

    return {
        /**
         * Offset in file: 0x133 (b4)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NS2 Amp Sim Eq On
         */
        enabled: (eqOffset133 & 0x10) !== 0,

        /**
         * Offset in file: 0x133 (b3-2)
         *
         * @example
         * 0 = Organ, 1, Piano, 2 = Synth
         *
         *  @module NS2 Amp Sim Eq Source
         */
        source: {
            value: ns2EffectSourceMap.get((eqOffset133 & 0x0c) >>> 2),
        },

        /**
         *  Offset in file: 0x133 (b1-0)
         *
         * @example
         * #include ns2AmpSimTypeMap
         *
         *  @module NS2 Amp Type
         */
        ampType: {
            value: ampSimType,
            isDefault: ampSimType === ns2AmpSimTypeMap.get(0),
        },

        /**
         * Offset in file: 0x134 (b0) and 0x135 (b7-2)
         *
         * @example
         * treble (fixed 4 kHz) frequency boost/cut table:
         * #include ns2AmpSimEqdBMap
         *
         * @module NS2 Eq Treble
         */
        treble: {
            midi: trebleMidi,
            isDefault: trebleMidi === 64,
            value: ns2AmpSimEqdBMap.get(trebleMidi),
        },

        /**
         * Offset in file: 0x135 (b1-0) and 0x136 (b7-3)
         *
         * @example
         * #include ns2AmpSimEqdBMap
         *
         * @module NS2 Eq Mid
         */
        mid: {
            midi: midMidi,
            isDefault: midMidi === 64,
            value: ns2AmpSimEqdBMap.get(midMidi),
        },

        /**
         * Offset in file: 0x136 (b2-0) and 0x137 (b7-4)
         *
         * @example
         * bass (fixed 100 Hz) frequency boost/cut table:
         * #include ns2AmpSimEqdBMap
         *
         * @module NS2 Eq Bass
         */
        bass: {
            midi: bassMidi,
            isDefault: bassMidi === 64,
            value: ns2AmpSimEqdBMap.get(bassMidi),
        },

        /**
         * Offset in file: 0x137 (b3-0) and 0x138 (b7-5)
         *
         * @example
         * 7-bit value 0/127 = 200 Hz to 8.0 kHz
         *
         * #include ns2AmpSimEqMidFilterFreqMap
         *
         * @module NS2 Eq Mid Flt Freq
         */
        midFilterFreq: {
            midi: midFilterFreqMidi,
            isDefault: midFilterFreqMidi === 64,
            value: ns2AmpSimEqMidFilterFreqMap.get(midFilterFreqMidi),
        },

        /**
         * Offset in file: 0x134 (b7-1)
         *
         * @example
         * 7-bit value 0/127 = 0 to 10.0
         *
         * @module NS2 Amp Sim Drive
         */
        overdrive: {
            midi: driveMidi,
            isDefault: driveMidi === 0,
            value: midi2LinearStringValue(0, 10, driveMidi, 1, ""),
        },
    };
};

export { ns2AmpSimEq };
