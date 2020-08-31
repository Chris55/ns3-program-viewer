# Transpose

    /***
     * Transpose:
     * Offset
     *    0x37       0x38
     * 7654 3210  7654 3xxx
     * ---------  ---------
     *
     * xxxx xxxx  7xxx xxxx : Transpose Off/On
     * xxxx xxxx  x654 3xxx : Transpose value
     */

    /***
     * Transpose Example:
     *
     * Test1:  F8 38 : Transpose Off
     * Test2:  0D 80 : Transpose -6 semi
     * Test3:  0D 88 : Transpose -5 semi
     * Test4:  0D A8 : Transpose -1 semi
     * Test5:  0D B8 : Transpose +1 semi
     * Test6:  0D D8 : Transpose +5 semi
     * Test7:  0D E0 : Transpose +6 semi
     *
     */
