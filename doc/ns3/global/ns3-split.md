# Split

    /***
     * Split:
     * offset 0x31 (b4 to b0) to 0x34 (b7 only)
     *
     *   0X31        0x32       0x33       0x34
     * xxx4 3210  7654 3210  7654 3210  7xxx xxxx
     * ---------  ---------  ---------  ---------
     * xxx4 xxxx  xxxx xxxx  xxxx xxxx  xxxx xxxx: split off/on
     * xxxx 321x  xxxx xxxx  xxxx xxxx  xxxx xxxx: low off/on, mid off/on, high off/on
     * xxxx xxx0  765x xxxx  xxxx xxxx  xxxx xxxx: low note (0 = F2, 1 = C3, 9 = C7)
     * xxxx xxxx  xxx4 321x  xxxx xxxx  xxxx xxxx: mid note
     * xxxx xxxx  xxxx xxx0  765x xxxx  xxxx xxxx: high note
     * xxxx xxxx  xxxx xxxx  xxx5 4xxx  xxxx xxxx: low width (0 = 1, 1 = 6, 2 = 12)
     * xxxx xxxx  xxxx xxxx  xxxx x32x  xxxx xxxx: mid width
     * xxxx xxxx  xxxx xxxx  xxxx xxx0  7xxx xxxx: high width
     *
     * Values:
     *
     * Test1:  06 07 20 01 : Split Off
     *
     * Test2:  16 07 20 01 : Width Off 1   1
     *                       Note  --  C4  C7
     *
     * Test3:  1E 07 20 01 : Width 1   1   1
     *                       Note  F2  C4  C7
     *
     * Test4:  1E 07 28 01 : Width 6   1   1
     *                       Note  F2  C4  C7
     *
     * Test5:  1E 07 30 01 : Width 12  1   1
     *                       Note  F2  C4  C7
     *
     * Test6:  18 07 30 01 : Width 12  Off Off
     *                       Note  F2  --  --
     *
     * Test7:  18 27 30 01 : Width 12  Off Off
     *                       Note  C3  --  --
     *
     * Test8:  18 47 30 01 : Width 12  Off Off
     *                       Note  F3  --  --
     *
     * Test9:  18 67 30 01 : Width 12  Off Off
     *                       Note  C4  --  --
     *
     * Test10: 18 87 30 01 : Width 12  Off Off
     *                       Note  F4  --  --
     *
     * Test11: 18 A7 30 01 : Width 12  Off Off
     *                       Note  C5  --  --
     *
     * Test12: 18 C7 30 01 : Width 12  Off Off
     *                       Note  F5  --  --
     *
     * Test13: 18 E7 30 01 : Width 12  Off Off
     *                       Note  C6  --  --
     *
     * Test14: 19 07 30 01 : Width 12  Off Off
     *                       Note  F6  --  --
     *
     * Test15: 19 27 30 01 : Width 12  Off Off
     *                       Note  C7  --  --
     *
     * Test16: 1B 27 30 01 : Width 12  Off 1     ! From test 15 to 16 only High Width was changed manually !
     *                       Note  F6  --  C7    ! Note Low in file is C7 but fixed on display to F6...
     *
     * Test17: 1B 27 30 81 : Width 12  Off 6
     *                       Note  F6  --  C7
     *
     * Test18: 1B 27 31 01 : Width 12  Off 12
     *                       Note  F6  --  C7
     *
     * Test19: 1C 23 30 01 : Width 12  1   Off
     *                       Note  C3  F3  --   ! Note Mid in file is C3 but fixed on display to F3 !
     */
