## Modules

<dl>
<dt><a href="#module_NS2 Piano On">NS2 Piano On</a></dt>
<dd><p>Offset in file: 0x48 (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Kb Zone">NS2 Piano Kb Zone</a></dt>
<dd><p>Offset in file: 0x4C (b7-5)</p>
</dd>
<dt><a href="#module_NS2 Piano Volume">NS2 Piano Volume</a></dt>
<dd><p>Offset in file: 0x4B (b6-0)</p>
</dd>
<dt><a href="#module_NS2 Piano Octave Shift">NS2 Piano Octave Shift</a></dt>
<dd><p>Offset in file: 0x4C (b4-1)</p>
</dd>
<dt><a href="#module_NS2 Piano Pitch Stick">NS2 Piano Pitch Stick</a></dt>
<dd><p>Offset in file: 0x4C (b0)</p>
</dd>
<dt><a href="#module_NS2 Piano Sustain Pedal">NS2 Piano Sustain Pedal</a></dt>
<dd><p>Offset in file: 0x4D (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Latch Pedal">NS2 Piano Latch Pedal</a></dt>
<dd><p>Offset in file: 0x5A (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Kb Gate">NS2 Piano Kb Gate</a></dt>
<dd><p>Offset in file: 0x5A (b6)</p>
</dd>
<dt><a href="#module_NS2 Piano Type">NS2 Piano Type</a></dt>
<dd><p>Offset in file: 0xCD (b7-5)</p>
</dd>
<dt><a href="#module_NS2 Piano Sample ID">NS2 Piano Sample ID</a></dt>
<dd><p>Offset in file: 0xD0 (b5-0), 0xD1/0xD3 (b7-0), and 0xD4 (b7-6)</p>
</dd>
<dt><a href="#module_NS2 Piano Slot Detune">NS2 Piano Slot Detune</a></dt>
<dd><p>Offset in file: 0x3B (b7-5)</p>
</dd>
<dt><a href="#module_NS2 Piano Long Release">NS2 Piano Long Release</a></dt>
<dd><p>Offset in file: 0xCF (b6)</p>
</dd>
<dt><a href="#module_NS2 Piano String Resonance">NS2 Piano String Resonance</a></dt>
<dd><p>Offset in file: 0xCF (b5)</p>
</dd>
<dt><a href="#module_NS2 Piano Pedal Noise">NS2 Piano Pedal Noise</a></dt>
<dd><p>Offset in file: 0xCF (b4)</p>
</dd>
<dt><a href="#module_NS2 Piano Dynamics">NS2 Piano Dynamics</a></dt>
<dd><p>Offset in file: 0xCF (b3-2)</p>
</dd>
<dt><a href="#module_NS2 Piano Clavinet Model">NS2 Piano Clavinet Model</a></dt>
<dd><p>Offset in file: 0xCE (b0) and 0xCF (b7)</p>
</dd>
<dt><a href="#module_NS2 Piano Clavinet Eq Hi">NS2 Piano Clavinet Eq Hi</a></dt>
<dd><p>Offset in file: 0xCF (b1-0)</p>
</dd>
<dt><a href="#module_NS2 Piano Clavinet Eq">NS2 Piano Clavinet Eq</a></dt>
<dd><p>Offset in file: 0xD0 (b7-6)</p>
</dd>
<dt><a href="#module_NS3 File Version">NS3 File Version</a></dt>
<dd><p>Offset in file: 0x14 and 0x15</p>
</dd>
<dt><a href="#module_NS3 File Format">NS3 File Format</a></dt>
<dd><p>Offset in file: 0x04</p>
<p>0 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)
1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).</p>
</dd>
<dt><a href="#module_NS3 Transpose">NS3 Transpose</a></dt>
<dd><p>Offset in file: 0x38 (b7-3)</p>
<p>Enabled: 0x38 (b7)
Value: 0x38 (b6-3)</p>
</dd>
<dt><a href="#module_NS3 Split">NS3 Split</a></dt>
<dd><p>0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)</p>
</dd>
<dt><a href="#module_NS3 Master Clock Rate">NS3 Master Clock Rate</a></dt>
<dd><p>Offset in file: 0x38 (b2-0) 0x39 (b7-3)</p>
</dd>
<dt><a href="#module_NS3 Dual Keyboard">NS3 Dual Keyboard</a></dt>
<dd><p>Offset in file 0x3A (b3)</p>
</dd>
<dt><a href="#module_NS2 Dual Keyboard Style">NS2 Dual Keyboard Style</a></dt>
<dd><p>Offset in file 0x3A (b1-0)</p>
</dd>
<dt><a href="#module_NS3 Panel Enabled And Selection">NS3 Panel Enabled And Selection</a></dt>
<dd><p>Offset in file 0x31</p>
</dd>
</dl>

<a name="module_NS2 Piano On"></a>

## NS2 Piano On
Offset in file: 0x48 (b7)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Kb Zone"></a>

## NS2 Piano Kb Zone
Offset in file: 0x4C (b7-5)

**Example**  
```js
0 = LO1 = LO UP2 = UP3 = UP HI4 = HI5 = LO UP HI
```
<a name="module_NS2 Piano Volume"></a>

## NS2 Piano Volume
Offset in file: 0x4B (b6-0)

**Example**  
```js
Morph Wheel:0x48 (b6): polarity (1 = positive, 0 = negative)0x48 (b5-b0), 0x49 (b7): 7-bit raw valueMorph After Touch:0x49 (b6): polarity (1 = positive, 0 = negative)0x49 (b5-b0), 0x4A (b7): 7-bit raw valueMorph Control Pedal:0x4A (b6): polarity (1 = positive, 0 = negative)0x4A (b5-b0), 0x4B (b7): 7-bit raw valueif polarity = 1 then Morph offset value = raw valueif polarity = 0 then Morph offset value = 128 - raw valueFinal 'To' Morph value = 'From value (original volume)' + 'Morph offset value'Morph Enabled if  'From value' <> 'Morph offset value'
```
<a name="module_NS2 Piano Octave Shift"></a>

## NS2 Piano Octave Shift
Offset in file: 0x4C (b4-1)

**Example**  
```js
Octave Shift = value - 7
```
<a name="module_NS2 Piano Pitch Stick"></a>

## NS2 Piano Pitch Stick
Offset in file: 0x4C (b0)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Sustain Pedal"></a>

## NS2 Piano Sustain Pedal
Offset in file: 0x4D (b7)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Latch Pedal"></a>

## NS2 Piano Latch Pedal
Offset in file: 0x5A (b7)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Kb Gate"></a>

## NS2 Piano Kb Gate
Offset in file: 0x5A (b6)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano Type"></a>

## NS2 Piano Type
Offset in file: 0xCD (b7-5)

**Example**  
```js
#include ns2PianoTypeMap
```
<a name="module_NS2 Piano Sample ID"></a>

## NS2 Piano Sample ID
Offset in file: 0xD0 (b5-0), 0xD1/0xD3 (b7-0), and 0xD4 (b7-6)

**Example**  
```js
32-bit Nord Sample ID
```
<a name="module_NS2 Piano Slot Detune"></a>

## NS2 Piano Slot Detune
Offset in file: 0x3B (b7-5)

**Example**  
```js
#include ns2PianoSlotDetuneMap
```
<a name="module_NS2 Piano Long Release"></a>

## NS2 Piano Long Release
Offset in file: 0xCF (b6)

**Example**  
```js
O = off, 1 = on
```
<a name="module_NS2 Piano String Resonance"></a>

## NS2 Piano String Resonance
Offset in file: 0xCF (b5)

**Example**  
```js
O = off, 1 = onOnly on Acoustic Grand or Upright Piano
```
<a name="module_NS2 Piano Pedal Noise"></a>

## NS2 Piano Pedal Noise
Offset in file: 0xCF (b4)

**Example**  
```js
O = off, 1 = onOnly on Acoustic and Electric piano.
```
<a name="module_NS2 Piano Dynamics"></a>

## NS2 Piano Dynamics
Offset in file: 0xCF (b3-2)

**Example**  
```js
#include ns2PianoDynamicsMap
```
<a name="module_NS2 Piano Clavinet Model"></a>

## NS2 Piano Clavinet Model
Offset in file: 0xCE (b0) and 0xCF (b7)

**Example**  
```js
#include ns2PianoClavinetModelMap
```
<a name="module_NS2 Piano Clavinet Eq Hi"></a>

## NS2 Piano Clavinet Eq Hi
Offset in file: 0xCF (b1-0)

**Example**  
```js
#include ns2PianoClavinetEqHiMap
```
<a name="module_NS2 Piano Clavinet Eq"></a>

## NS2 Piano Clavinet Eq
Offset in file: 0xD0 (b7-6)

**Example**  
```js
#include ns2PianoClavinetEqMap
```
<a name="module_NS3 File Version"></a>

## NS3 File Version
Offset in file: 0x14 and 0x15

**Example**  
```js
16-bit integer value in Little Endian format, ex 304 = v3.04Notes:From [https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history](https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history)Programs stored with OS versionOS version          Program versionv0.92 (2017-06-15)  v3.00v1.36 (2018-02-07)  v3.01v1.50 (2018-10-22)  v3.02vx.xx               v3.03vx.xx               v3.04
```
<a name="module_NS3 File Format"></a>

## NS3 File Format
Offset in file: 0x040 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).

<a name="module_NS3 Transpose"></a>

## NS3 Transpose
Offset in file: 0x38 (b7-3)Enabled: 0x38 (b7)Value: 0x38 (b6-3)

**Example**  
```js
7xxx xxxx : Transpose Off/Onx654 3xxx : Transpose valueTest1:  F8 38 : Transpose OffTest2:  0D 80 : Transpose -6 semiTest3:  0D 88 : Transpose -5 semiTest4:  0D A8 : Transpose -1 semiTest5:  0D B8 : Transpose +1 semiTest6:  0D D8 : Transpose +5 semiTest7:  0D E0 : Transpose +6 semi
```
<a name="module_NS3 Split"></a>

## NS3 Split
0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)

**Example**  
```js
|  0X31     |    0x32   |     0x33  |    0x34   | description| xxx4 3210 | 7654 3210 | 7654 3210 | 7xxx xxxx || xxx4 xxxx | xxxx xxxx | xxxx xxxx | xxxx xxxx | split off/on| xxxx 321x | xxxx xxxx | xxxx xxxx | xxxx xxxx | low off/on, mid off/on, high off/on| xxxx xxx0 | 765x xxxx | xxxx xxxx | xxxx xxxx | low note (0 = F2, 1 = C3, 9 = C7)| xxxx xxxx | xxx4 321x | xxxx xxxx | xxxx xxxx | mid note| xxxx xxxx | xxxx xxx0 | 765x xxxx | xxxx xxxx | high note| xxxx xxxx | xxxx xxxx | xxx5 4xxx | xxxx xxxx | low width (0 = 1, 1 = 6, 2 = 12)| xxxx xxxx | xxxx xxxx | xxxx x32x | xxxx xxxx | mid width| xxxx xxxx | xxxx xxxx | xxxx xxx0 | 7xxx xxxx | high widthTest1:  06 07 20 01 : Split OffTest2:  16 07 20 01 : Width Off 1   1                      Note  --  C4  C7Test3:  1E 07 20 01 : Width 1   1   1                      Note  F2  C4  C7Test4:  1E 07 28 01 : Width 6   1   1                      Note  F2  C4  C7Test5:  1E 07 30 01 : Width 12  1   1                      Note  F2  C4  C7Test6:  18 07 30 01 : Width 12  Off Off                      Note  F2  --  --Test7:  18 27 30 01 : Width 12  Off Off                      Note  C3  --  --Test8:  18 47 30 01 : Width 12  Off Off                      Note  F3  --  --Test9:  18 67 30 01 : Width 12  Off Off                      Note  C4  --  --Test10: 18 87 30 01 : Width 12  Off Off                      Note  F4  --  --Test11: 18 A7 30 01 : Width 12  Off Off                      Note  C5  --  --Test12: 18 C7 30 01 : Width 12  Off Off                      Note  F5  --  --Test13: 18 E7 30 01 : Width 12  Off Off                      Note  C6  --  --Test14: 19 07 30 01 : Width 12  Off Off                      Note  F6  --  --Test15: 19 27 30 01 : Width 12  Off Off                      Note  C7  --  --Test16: 1B 27 30 01 : Width 12  Off 1     ! From test 15 to 16 only High Width was changed manually !                      Note  F6  --  C7    ! Note Low in file is C7 but fixed on display to F6...Test17: 1B 27 30 81 : Width 12  Off 6                      Note  F6  --  C7Test18: 1B 27 31 01 : Width 12  Off 12                      Note  F6  --  C7Test19: 1C 23 30 01 : Width 12  1   Off                      Note  C3  F3  --   ! Note Mid in file is C3 but fixed on display to F3 !
```
<a name="module_NS3 Master Clock Rate"></a>

## NS3 Master Clock Rate
Offset in file: 0x38 (b2-0) 0x39 (b7-3)

**Example**  
```js
bpm = value + 30
```
<a name="module_NS3 Dual Keyboard"></a>

## NS3 Dual Keyboard
Offset in file 0x3A (b3)

**Example**  
```js
0 = Off1 = OnNote: if Dual Keyboard is On, both panel are enabled.
```
<a name="module_NS2 Dual Keyboard Style"></a>

## NS2 Dual Keyboard Style
Offset in file 0x3A (b1-0)

**Example**  
```js
0 = Panel1 = Organ2 = Piano3 = Synth
```
<a name="module_NS3 Panel Enabled And Selection"></a>

## NS3 Panel Enabled And Selection
Offset in file 0x31

**Example**  
```js
Enabled (b6-5):0 = A only1 = B only2 = A & BSelected Panel (b7):A = 0, B = 1 (not used here)Note: if Dual Keyboard is On, both panel are enabled.
```
