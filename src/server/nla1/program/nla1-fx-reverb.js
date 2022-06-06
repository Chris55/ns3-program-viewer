
/***
 * returns Reverb
 *
 * @param buffer
 * @param slotOffset
 * @returns {{amount: {midi: number, morph: {afterTouch: {to: {midi: *, value: (*|string)}, enabled: *}, controlPedal: {to: {midi: *, value: (*|string)}, enabled: *}, wheel: {to: {midi: *, value: (*|string)}, enabled: *}}, value: string}, rate: {midi: number, value: string}, source: {value: string}, type: {value: string}, enabled: boolean}}
 */
exports.nla1Reverb = (buffer, slotOffset) => {
    const reverbOffset85 = buffer.readUInt8(0x85 + slotOffset);
    // const reverbOffset134W = buffer.readUInt16BE(0x134 + slotOffset);
    // const reverbOffset135W = buffer.readUInt16BE(0x135 + slotOffset);
    // const reverbOffset136Ww = buffer.readUInt32BE(0x136 + slotOffset);
    //
    // const reverbAmountMidi = (reverbOffset135W & 0x1fc0) >>> 6;
    //
    // const type = (reverbOffset134W & 0x01c0) >>> 6;

    return {
        /**
         * Offset in file: 0x85 (b2)
         *
         * @example
         * O = off, 1 = on
         *
         *  @module NLA1 Reverb On
         */
        enabled: (reverbOffset85 & 0x02) !== 0,

        // /**
        //  * Offset in file: 0x134 (b0) and 0x135 (b7-6)
        //  *
        //  * @example
        //  * 0 = Room 1
        //  * 1 = Room 2
        //  * 2 = Stage 1
        //  * 3 = Stage 2
        //  * 4 = Hall 1
        //  * 5 = Hall 2
        //  *
        //  * @module NLA1 Reverb Type
        //  */
        // type: {
        //     value: mapping.ns3ReverbTypeMap.get(type),
        //     isDefault: type === 0,
        // },
        //
        // /**
        //  * Offset in file: 0x135 (b4-0) and 0x136 (b7-6)
        //  *
        //  * @example
        //  * 7-bit value 0/127 = 0/10
        //  *
        //  * Morph Wheel:
        //  * 0x136 (b5-b0) and 0x137 (b7-6): 8-bit raw value
        //  *
        //  * Morph After Touch:
        //  * 0x137 (b5-b0) and 0x138 (b7-6): 8-bit raw value
        //  *
        //  * Morph Control Pedal:
        //  * 0x138 (b5-b0) and 0x139 (b7-6): 8-bit raw value
        //  *
        //  * @see {@link ns3-doc.md#ns3-organ-volume Organ Volume} for detailed Morph explanation.
        //  *
        //  * @module NLA1 Reverb Amount
        //  */
        // amount: {
        //     midi: reverbAmountMidi,
        //
        //     isDefault: reverbAmountMidi === 64,
        //
        //     value: converter.midi2LinearStringValue(0, 10, reverbAmountMidi, 1, ""),
        //
        //     morph: ns3Morph7Bits(
        //         reverbOffset136Ww >>> 6,
        //         reverbAmountMidi,
        //         (x) => {
        //             return converter.midi2LinearStringValue(0, 10, x, 1, "");
        //         },
        //         false
        //     ),
        // },
    };
};
