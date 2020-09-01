## Modules

<dl>
<dt><a href="#module_File Version">File Version</a></dt>
<dd><p>Offset in file: 0x14 and 0x15</p>
</dd>
<dt><a href="#module_Transpose">Transpose</a></dt>
<dd><p>Offset in file: 0x38 (b7-3)</p>
<p>Enabled: 0x38 (b7)
Value: 0x38 (b6-3)</p>
</dd>
<dt><a href="#module_Split">Split</a></dt>
<dd><p>0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)</p>
</dd>
<dt><a href="#module_Master Clock Rate">Master Clock Rate</a></dt>
<dd><p>Offset in file: 0x38 (b2-0) 0x39 (b7-3)</p>
<p>bpm = value + 30</p>
</dd>
<dt><a href="#module_Rotary Speaker On">Rotary Speaker On</a></dt>
<dd><p>Offset in file: 0x10b (bit7):</p>
<p>Values:
0 = disabled, 1 = enabled</p>
</dd>
<dt><a href="#module_Rotary Speaker Source">Rotary Speaker Source</a></dt>
<dd><p>Offset in file: 0x10b (b6 and b5):</p>
<p>Values:
0 = Organ, 1, Piano, 2 = Synth</p>
</dd>
<dt><a href="#module_Rotary Speaker Drive">Rotary Speaker Drive</a></dt>
<dd><p>Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4):</p>
<p>Values:
7 bits value 0/127 converted to 0/10</p>
</dd>
<dt><a href="#module_Rotary Speaker Stop Mode">Rotary Speaker Stop Mode</a></dt>
<dd><p>Offset in file: 0x35 (bit7):</p>
<p>Values:
0 = enabled (Speed Stop), 1 = disabled (Speed Slow)</p>
</dd>
<dt><a href="#module_Rotary Speaker Speed">Rotary Speaker Speed</a></dt>
<dd><p>Offset in file: 0x34 (bit0):</p>
<p>Values:
0 = Slow/Stop, 1 = Fast</p>
</dd>
<dt><a href="#module_Effect 1 On">Effect 1 On</a></dt>
<dd><p>Offset in file: 0x10b LSB 5 (AND 0x10)</p>
<p> 0x00: OFF
 0x10: ON</p>
</dd>
<dt><a href="#module_Effect 1 Source">Effect 1 Source</a></dt>
<dd><p>Offset in file: 0x10b only 2 bits (AND 0x0C)</p>
<p> 0x00: Organ
 0x04: Piano
 0x08: Synth</p>
</dd>
<dt><a href="#module_Effect 1 Type">Effect 1 Type</a></dt>
<dd><p>Offset 0 in file: 0x10b two bit (AND 0x03) 0x10c one bit (AND 0x80)</p>
<p> 0x00 0x00: A-Pan
 0x00 0x80: Trem
 0x01 0x00: RM
 0x01 0x80: WA-WA
 0x02 0x00: A-WA1
 0x02 0x80: A-WA2</p>
</dd>
<dt><a href="#module_Effect 1 Amount">Effect 1 Amount</a></dt>
<dd><p>Offset in file: 0x110 only last 7 bits (AND 0x7F)</p>
<p>Label: The number you get there, divided by 127 (7 bits) multiplied by 10.
Then rounded to 1 dec</p>
</dd>
<dt><a href="#module_Effect 1 Rate">Effect 1 Rate</a></dt>
<dd><p>Offset in file: last 6 bits of 0x10c (AND 0x3F) and first bit of 0x10d (and 0x80).</p>
<p>So, those 2 bytes shifted 1 bit to the left, in order to get just 1 byte.
If you get 0x3F 0x80, then that shifted 1 bit to the left is 0x7F.
Then, same logic as with Amount for the label.</p>
</dd>
<dt><a href="#module_Effect 1 Master Clock">Effect 1 Master Clock</a></dt>
<dd><p>Offset in file: 0x10c 2nd MS bit (AND 0x40):</p>
<p> 0x00: OFF
 0x40: ON</p>
</dd>
<dt><a href="#module_Effect 2 On">Effect 2 On</a></dt>
<dd><p>Offset in file: 0x114 b7 (AND 0x80)</p>
<p> 0x00: OFF
 0x10: ON</p>
</dd>
<dt><a href="#module_Effect 2 Source">Effect 2 Source</a></dt>
<dd><p>Offset in file: 0x114 b6 and b5 (AND 0x60)</p>
<p> 0x00: Organ
 0x04: Piano
 0x08: Synth</p>
</dd>
<dt><a href="#module_Effect 2 Type">Effect 2 Type</a></dt>
<dd><p>Offset in file: 0x114 bits 4-2 (AND 0x1C)</p>
<p> 0x00: PHAS1
 0x04: PHAS2
 0x08: FLANG
 0x0C: VIBE
 0x10: CHOR1
 0x14: CHOR2</p>
</dd>
<dt><a href="#module_Effect 2 Amount">Effect 2 Amount</a></dt>
<dd><p>Offset in file: 0x115 (last 3 bits) and 0x116 (first 4 bits) So 0x115 AND
0x07 + 0x115 AND 0xF0. All that then shifted for places to the right.
To calculate number it is same as amount on effects 1</p>
</dd>
<dt><a href="#module_Effect 2 Rate">Effect 2 Rate</a></dt>
<dd><p>Offset in file: last 2 bits of 0x114 and first 5 bits of 0x115
So, 0x114 AND 0x03 + 0x115 AND 0xF8. All that shifted 3 places to the right
Sames as Amount</p>
</dd>
<dt><a href="#module_Category">Category</a></dt>
<dd><p>Offset 0x10</p>
</dd>
<dt><a href="#module_Organ On">Organ On</a></dt>
<dd><p>Offset in file: 0xB6 (b7)</p>
<p>O = disabled, 1 = enabled</p>
</dd>
<dt><a href="#module_Organ Kb Zone">Organ Kb Zone</a></dt>
<dd><p>Offset in file: 0xB6 (b6 to b3)</p>
<table>
<thead>
<tr>
<th>value</th>
<th></th>
<th>Label</th>
</tr>
</thead>
<tbody><tr>
<td>x000 0xxx</td>
<td>0</td>
<td><code>o---</code></td>
</tr>
<tr>
<td>x000 1xxx</td>
<td>1</td>
<td><code>-o--</code></td>
</tr>
<tr>
<td>x001 0xxx</td>
<td>2</td>
<td><code>--o-</code></td>
</tr>
<tr>
<td>x001 1xxx</td>
<td>3</td>
<td><code>---o</code></td>
</tr>
<tr>
<td>x010 0xxx</td>
<td>4</td>
<td><code>oo--</code></td>
</tr>
<tr>
<td>x010 1xxx</td>
<td>5</td>
<td><code>-oo-</code></td>
</tr>
<tr>
<td>x011 0xxx</td>
<td>6</td>
<td><code>--oo</code></td>
</tr>
<tr>
<td>x011 1xxx</td>
<td>7</td>
<td><code>ooo-</code></td>
</tr>
<tr>
<td>x100 0xxx</td>
<td>8</td>
<td><code>-ooo</code></td>
</tr>
<tr>
<td>x100 1xxx</td>
<td>9</td>
<td><code>oooo</code></td>
</tr>
</tbody></table>
</dd>
<dt><a href="#module_Organ Volume">Organ Volume</a></dt>
<dd><p>Offset in file:
| -------- |
Volume:
0xB6 (b2-b0), 0xB7 (b7-b4): 7-bit = 0/127 range
Morph Wheel:
0xB7 (b3): direction (1 = up, 0 = down)
0xB7 (b2-b0), 0xB8 (b7-b4): 7-bit raw value
Morph After Touch:
0xB8 (b3): direction (1 = up, 0 = down)
0xB8 (b2-b0), 0xB9 (b7-b4): 7-bit raw value
Morph Control Pedal:
0xB9 (b3): direction (1 = up, 0 = down)
0xB9 (b2-b0), 0xBA (b7-b4): 7-bit raw value
if direction = 1 then Morph offset value = raw value + 1
if direction = 0 then Morph offset value = raw value - 127
Final &#39;To&#39; Morph value = &#39;From value (aka original volume)&#39; + &#39;Morph offset value&#39;
Morph Enabled if  &#39;From value&#39; &lt;&gt; &#39;Morph offset value&#39;</p>
</dd>
<dt><a href="#module_Organ Octave Shift">Organ Octave Shift</a></dt>
<dd><p>Offset in file: 0xBA (b2/1/0)</p>
<p>Octave Shift = value - 6</p>
</dd>
<dt><a href="#module_Organ Pitch Stick">Organ Pitch Stick</a></dt>
<dd><p>Offset in file: 0x34 (b4)</p>
</dd>
<dt><a href="#module_Organ Sustain Pedal">Organ Sustain Pedal</a></dt>
<dd><p>Offset in file: 0xBB (b7)</p>
</dd>
<dt><a href="#module_Organ Type">Organ Type</a></dt>
<dd><p>Offset in file: 0xBB (b6/5/4)
| -------- |
0 = B3
1 = Vox
2 = Farfisa
3 = Pipe1
4 = Pipe2</p>
</dd>
<dt><a href="#module_Organ Drawbars Preset 1">Organ Drawbars Preset 1</a></dt>
<dd><p>Offset in file: 0xBE
| -------- |
Drawbar 1: 0xBE (b7-4)
Drawbar 2: 0xC0 (b4-1)
Drawbar 3: 0xC2 (b1-0) and 0xC3 (b7-6)
Drawbar 4: 0xC5 (b6-3)
Drawbar 5: 0xC7 (b3-0)
Drawbar 6: 0xC9 (b0) and 0xCA (b7-5)
Drawbar 7: 0xCC (b5-2)
Drawbar 8: 0xCE (b2-0) and 0xCF (b7)
Drawbar 9: 0xD1 (b7-4)</p>
</dd>
<dt><a href="#module_Organ Drawbars Preset 2">Organ Drawbars Preset 2</a></dt>
<dd><p>Offset in file: 0xD9
| -------- |
Drawbar 1: 0xD9 (b7-4)
Drawbar 2: 0xDB (b4-1)
Drawbar 3: 0xDD (b1-0) and 0xDE (b7-6)
Drawbar 4: 0xE0 (b6-3)
Drawbar 5: 0xE2 (b3-0)
Drawbar 6: 0xE4 (b0) and 0xE5 (b7-5)
Drawbar 7: 0xE7 (b5-2)
Drawbar 8: 0xE9 (b2-0) and 0xEA (b7)
Drawbar 9: 0xEC (b7-4)</p>
</dd>
<dt><a href="#module_Organ Live Mode">Organ Live Mode</a></dt>
<dd><p>Offset in file: 0xBB (b3)
(NS3 Compact model only)</p>
</dd>
<dt><a href="#module_Organ Vibrato On">Organ Vibrato On</a></dt>
<dd><p>Offset in file: 0xD3 (b4)</p>
</dd>
<dt><a href="#module_Organ Vibrato Mode">Organ Vibrato Mode</a></dt>
<dd><p>Offset in file: 0x34 (b3/2/1)</p>
</dd>
<dt><a href="#module_Organ Percussion Options">Organ Percussion Options</a></dt>
<dd></dd>
<dt><a href="#module_Organ Percussion On">Organ Percussion On</a></dt>
<dd><p>Offset in file: 0xD3 (b4)</p>
</dd>
<dt><a href="#module_Organ Percussion Volume Soft">Organ Percussion Volume Soft</a></dt>
<dd><p>Offset in file: 0xD3 (b0)</p>
</dd>
<dt><a href="#module_Organ Percussion Decay Fast">Organ Percussion Decay Fast</a></dt>
<dd><p>Offset in file: 0xD3 (b1)</p>
</dd>
<dt><a href="#module_Organ Percussion Harmonic Third">Organ Percussion Harmonic Third</a></dt>
<dd><p>Offset in file: 0xD3 (b2)</p>
</dd>
<dt><a href="#module_Panel Enabled And Selection">Panel Enabled And Selection</a></dt>
<dd><p>Offset in file 0x31</p>
<p>Enabled (b5 &amp; b6):
0 = A only
1 = B only
2 = A &amp; B</p>
<p>Selected Panel (b7):
A = 0, B = 1 (not used here)</p>
</dd>
<dt><a href="#module_Piano On">Piano On</a></dt>
<dd><p>Offset in file: 0x43 (b7): O = disabled, 1 = enabled</p>
</dd>
<dt><a href="#module_Piano Kb Zone">Piano Kb Zone</a></dt>
<dd><p>Offset in file: 0x43 (b6 to b3)</p>
</dd>
<dt><a href="#module_Piano Volume">Piano Volume</a></dt>
<dd><p>Offset in file: 0x43 (b2 to b0), 0x44 (b7 to b4) 7 bits = 0/127 range</p>
</dd>
<dt><a href="#module_Piano Octave Shift">Piano Octave Shift</a></dt>
<dd><p>Offset in file: 0x47 (just 4 last bits, AND 0x0F)</p>
</dd>
<dt><a href="#module_Piano Pitch Stick">Piano Pitch Stick</a></dt>
<dd><p>Offset in file: 0x48 (just bit 0x80)</p>
</dd>
<dt><a href="#module_Piano Sustain Pedal">Piano Sustain Pedal</a></dt>
<dd><p>Offset in file: 0x48 (just bit 0x40)</p>
</dd>
<dt><a href="#module_Piano Type">Piano Type</a></dt>
<dd><p>Offset in file: 0x48 (only 4 bits, last 3 of first nibble, first of second nibble) AND 0x98</p>
</dd>
<dt><a href="#module_Piano Model">Piano Model</a></dt>
<dd><p>Offset in file: 0x48 and 0x49 (last 3 bits of 0x49 and first 2 bits of 0x4A).</p>
</dd>
<dt><a href="#module_Piano Timbre">Piano Timbre</a></dt>
<dd><p>Offset in file: 0x4E</p>
</dd>
<dt><a href="#module_Piano KB Touch">Piano KB Touch</a></dt>
<dd><p>Offset in file: 0x4D (just least significant bit 1, so AND 0x01) and
                0x4E (Just Most Significant Bit, so AND 0x80)</p>
</dd>
<dt><a href="#module_Piano Layer Detune">Piano Layer Detune</a></dt>
<dd><p>Offset in file: 0x34</p>
</dd>
<dt><a href="#module_Piano Soft Release">Piano Soft Release</a></dt>
<dd><p>Offset in file: 0x4D (just least significant bit 4, so AND 0x08)</p>
</dd>
<dt><a href="#module_Piano Pedal Noise">Piano Pedal Noise</a></dt>
<dd><p>Offset in file: 0x4D (just least significant bit 2, so AND 0x02)</p>
</dd>
<dt><a href="#module_Piano String Resonance">Piano String Resonance</a></dt>
<dd><p>Offset in file: 0x4D (just least significant bit 3, so AND 0x04)</p>
</dd>
<dt><a href="#module_Synth On">Synth On</a></dt>
<dd><p>Offset in file: 0x52 (b7): O = disabled, 1 = enabled</p>
</dd>
<dt><a href="#module_Synth Kb Zone">Synth Kb Zone</a></dt>
<dd><p>Offset in file: 0x52 (b6 to b3)</p>
</dd>
<dt><a href="#module_Synth Volume">Synth Volume</a></dt>
<dd><p>Offset in file: 0x52 (b2/1/0) and 0x53 (b7/6/5/4) 7 bits = 0/127 range</p>
</dd>
<dt><a href="#module_Synth Octave Shift">Synth Octave Shift</a></dt>
<dd><p>Offset in file: 0x56 (b1/0)</p>
</dd>
<dt><a href="#module_Synth Pitch Stick">Synth Pitch Stick</a></dt>
<dd><p>Offset in file: 0x57 (b7)</p>
</dd>
<dt><a href="#module_Synth Sustain Pedal">Synth Sustain Pedal</a></dt>
<dd><p>Offset in file: 0x57 (b2)</p>
</dd>
<dt><a href="#module_Synth Keyboard Hold">Synth Keyboard Hold</a></dt>
<dd><p>Offset in file: 0x80 (b7)</p>
</dd>
<dt><a href="#module_Synth Voice">Synth Voice</a></dt>
<dd><p>Offset in file: 0x84 (b0) and 0x85 (b7)</p>
</dd>
<dt><a href="#module_Synth Glide">Synth Glide</a></dt>
<dd><p>Offset in file: 0x84 (b6 to b0) 7 bits, range 0/10</p>
</dd>
<dt><a href="#module_Synth Unison">Synth Unison</a></dt>
<dd><p>Offset in file: 0x86 (b7/6)</p>
</dd>
<dt><a href="#module_Synth Vibrato">Synth Vibrato</a></dt>
<dd><p>Offset in file: 0x86 (b5/4/3)</p>
</dd>
<dt><a href="#module_Synth Oscillator Type">Synth Oscillator Type</a></dt>
<dd><p>Offset in file: 0x8D (b1/0) and 0x81 (b7)</p>
</dd>
<dt><a href="#module_Synth Oscillator 1 Wave Form">Synth Oscillator 1 Wave Form</a></dt>
<dd><p>Offset in file: 0x8E (b3-0) and 0x8F (b7/6)</p>
</dd>
<dt><a href="#module_Synth Oscillator Configuration">Synth Oscillator Configuration</a></dt>
<dd><p>Offset in file: 0x8F (b4-1)</p>
</dd>
<dt><a href="#module_Synth Control Value">Synth Control Value</a></dt>
<dd><p>Offset in file: 0x90 (b2/1/0) and 0x91 (b7/6/5/4) - 0/127 value
| --- | ---
| Midi value conversion |
| Pitch (1)             | 0/127 =&gt; 0/24
| Shape (2)             | 0/127 =&gt; 0/100 %
| Sync (3)              | 0/127 =&gt; 0/10
| Detune (4)            | 0/127 =&gt; 0/4
| Mix* (5 to 11)        | 0/127 =&gt; 100/0 to 0/100
| FM &amp; RM (12 to 14)    | 0/127 =&gt; 0/100 %</p>
</dd>
<dt><a href="#module_Synth Pitch Value">Synth Pitch Value</a></dt>
<dd><p>Offset in file: 0x8f (b0) and 0x90 (b7-3)
| --- |
Midi value are the 6 bits value used + b0 (zero)
label conversion: -12 (Sub) to +48</p>
</dd>
<dt><a href="#module_Synth LFO Mod Env">Synth LFO Mod Env</a></dt>
<dd><p>Offset in file: 0x94 (b3-0) and 0x95 (b7-5)
| --- |
Osc modulation (lfo/env mod) is using this single 7-bit value to define two settings with a single knob.
Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
0   = 10.0 (100% left value) LFO Amount
60  = 0.0 for both values
120 = 10.0 (100% right value) Mod Env Amount</p>
</dd>
<dt><a href="#module_Synth Fast Attack">Synth Fast Attack</a></dt>
<dd><p>Offset in file: 0xAC (b2)</p>
</dd>
<dt><a href="#module_Synth Filter Type">Synth Filter Type</a></dt>
<dd><p>Offset in file: 0x98 (b4-6)
| --- | --- |
| 0 | LP12
| 1 | LP24
| 2 | Mini Moog
| 3 | LP+HP
| 4 | BP24
| 5 | HP24</p>
</dd>
<dt><a href="#module_Synth Filter Kb Track">Synth Filter Kb Track</a></dt>
<dd><p>Offset in file: 0xA5 (b5-4)
| --- | --- |
| 0 | Off
| 1 | 1/3
| 2 | 2/3
| 3 | 1</p>
</dd>
<dt><a href="#module_Synth Filter Drive">Synth Filter Drive</a></dt>
<dd><p>Offset in file: 0xA5 (b3-2)
| --- | --- |
| 0 | Off
| 1 | 1
| 2 | 2
| 3 | 3</p>
</dd>
</dl>

<a name="module_File Version"></a>

## File Version
Offset in file: 0x14 and 0x15

**Example**  
```js
16 bit int value, ex 304 = v3.04
```
<a name="module_Transpose"></a>

## Transpose
Offset in file: 0x38 (b7-3)Enabled: 0x38 (b7)Value: 0x38 (b6-3)

**Example**  
```js
7xxx xxxx : Transpose Off/Onx654 3xxx : Transpose valueTest1:  F8 38 : Transpose OffTest2:  0D 80 : Transpose -6 semiTest3:  0D 88 : Transpose -5 semiTest4:  0D A8 : Transpose -1 semiTest5:  0D B8 : Transpose +1 semiTest6:  0D D8 : Transpose +5 semiTest7:  0D E0 : Transpose +6 semi
```
<a name="module_Split"></a>

## Split
0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)

**Example**  
```js
|  0X31     |    0x32   |     0x33  |    0x34   | description| xxx4 3210 | 7654 3210 | 7654 3210 | 7xxx xxxx || xxx4 xxxx | xxxx xxxx | xxxx xxxx | xxxx xxxx | split off/on| xxxx 321x | xxxx xxxx | xxxx xxxx | xxxx xxxx | low off/on, mid off/on, high off/on| xxxx xxx0 | 765x xxxx | xxxx xxxx | xxxx xxxx | low note (0 = F2, 1 = C3, 9 = C7)| xxxx xxxx | xxx4 321x | xxxx xxxx | xxxx xxxx | mid note| xxxx xxxx | xxxx xxx0 | 765x xxxx | xxxx xxxx | high note| xxxx xxxx | xxxx xxxx | xxx5 4xxx | xxxx xxxx | low width (0 = 1, 1 = 6, 2 = 12)| xxxx xxxx | xxxx xxxx | xxxx x32x | xxxx xxxx | mid width| xxxx xxxx | xxxx xxxx | xxxx xxx0 | 7xxx xxxx | high widthTest1:  06 07 20 01 : Split OffTest2:  16 07 20 01 : Width Off 1   1                      Note  --  C4  C7Test3:  1E 07 20 01 : Width 1   1   1                      Note  F2  C4  C7Test4:  1E 07 28 01 : Width 6   1   1                      Note  F2  C4  C7Test5:  1E 07 30 01 : Width 12  1   1                      Note  F2  C4  C7Test6:  18 07 30 01 : Width 12  Off Off                      Note  F2  --  --Test7:  18 27 30 01 : Width 12  Off Off                      Note  C3  --  --Test8:  18 47 30 01 : Width 12  Off Off                      Note  F3  --  --Test9:  18 67 30 01 : Width 12  Off Off                      Note  C4  --  --Test10: 18 87 30 01 : Width 12  Off Off                      Note  F4  --  --Test11: 18 A7 30 01 : Width 12  Off Off                      Note  C5  --  --Test12: 18 C7 30 01 : Width 12  Off Off                      Note  F5  --  --Test13: 18 E7 30 01 : Width 12  Off Off                      Note  C6  --  --Test14: 19 07 30 01 : Width 12  Off Off                      Note  F6  --  --Test15: 19 27 30 01 : Width 12  Off Off                      Note  C7  --  --Test16: 1B 27 30 01 : Width 12  Off 1     ! From test 15 to 16 only High Width was changed manually !                      Note  F6  --  C7    ! Note Low in file is C7 but fixed on display to F6...Test17: 1B 27 30 81 : Width 12  Off 6                      Note  F6  --  C7Test18: 1B 27 31 01 : Width 12  Off 12                      Note  F6  --  C7Test19: 1C 23 30 01 : Width 12  1   Off                      Note  C3  F3  --   ! Note Mid in file is C3 but fixed on display to F3 !
```
<a name="module_Master Clock Rate"></a>

## Master Clock Rate
Offset in file: 0x38 (b2-0) 0x39 (b7-3)bpm = value + 30

<a name="module_Rotary Speaker On"></a>

## Rotary Speaker On
Offset in file: 0x10b (bit7):Values:0 = disabled, 1 = enabled

<a name="module_Rotary Speaker Source"></a>

## Rotary Speaker Source
Offset in file: 0x10b (b6 and b5):Values:0 = Organ, 1, Piano, 2 = Synth

<a name="module_Rotary Speaker Drive"></a>

## Rotary Speaker Drive
Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4):Values:7 bits value 0/127 converted to 0/10

<a name="module_Rotary Speaker Stop Mode"></a>

## Rotary Speaker Stop Mode
Offset in file: 0x35 (bit7):Values:0 = enabled (Speed Stop), 1 = disabled (Speed Slow)

<a name="module_Rotary Speaker Speed"></a>

## Rotary Speaker Speed
Offset in file: 0x34 (bit0):Values:0 = Slow/Stop, 1 = Fast

<a name="module_Effect 1 On"></a>

## Effect 1 On
Offset in file: 0x10b LSB 5 (AND 0x10) 0x00: OFF 0x10: ON

<a name="module_Effect 1 Source"></a>

## Effect 1 Source
Offset in file: 0x10b only 2 bits (AND 0x0C) 0x00: Organ 0x04: Piano 0x08: Synth

<a name="module_Effect 1 Type"></a>

## Effect 1 Type
Offset 0 in file: 0x10b two bit (AND 0x03) 0x10c one bit (AND 0x80) 0x00 0x00: A-Pan 0x00 0x80: Trem 0x01 0x00: RM 0x01 0x80: WA-WA 0x02 0x00: A-WA1 0x02 0x80: A-WA2

<a name="module_Effect 1 Amount"></a>

## Effect 1 Amount
Offset in file: 0x110 only last 7 bits (AND 0x7F)Label: The number you get there, divided by 127 (7 bits) multiplied by 10.Then rounded to 1 dec

**Example**  
```js
if you get 0x2A, that is 42 / 127 * 10 = 3.307. Then Label is "3.3"if you get 0x15, that is 21 / 127 * 10 = 1.6535. Then Label is "1.7"if you get 0x16, that is 22 / 127 * 10 = 1.732. Then Label is "1.7" (yes, same) 
```
<a name="module_Effect 1 Rate"></a>

## Effect 1 Rate
Offset in file: last 6 bits of 0x10c (AND 0x3F) and first bit of 0x10d (and 0x80).So, those 2 bytes shifted 1 bit to the left, in order to get just 1 byte.If you get 0x3F 0x80, then that shifted 1 bit to the left is 0x7F.Then, same logic as with Amount for the label.

<a name="module_Effect 1 Master Clock"></a>

## Effect 1 Master Clock
Offset in file: 0x10c 2nd MS bit (AND 0x40): 0x00: OFF 0x40: ON

<a name="module_Effect 2 On"></a>

## Effect 2 On
Offset in file: 0x114 b7 (AND 0x80) 0x00: OFF 0x10: ON

<a name="module_Effect 2 Source"></a>

## Effect 2 Source
Offset in file: 0x114 b6 and b5 (AND 0x60) 0x00: Organ 0x04: Piano 0x08: Synth

<a name="module_Effect 2 Type"></a>

## Effect 2 Type
Offset in file: 0x114 bits 4-2 (AND 0x1C) 0x00: PHAS1 0x04: PHAS2 0x08: FLANG 0x0C: VIBE 0x10: CHOR1 0x14: CHOR2

<a name="module_Effect 2 Amount"></a>

## Effect 2 Amount
Offset in file: 0x115 (last 3 bits) and 0x116 (first 4 bits) So 0x115 AND0x07 + 0x115 AND 0xF0. All that then shifted for places to the right.To calculate number it is same as amount on effects 1

<a name="module_Effect 2 Rate"></a>

## Effect 2 Rate
Offset in file: last 2 bits of 0x114 and first 5 bits of 0x115So, 0x114 AND 0x03 + 0x115 AND 0xF8. All that shifted 3 places to the rightSames as Amount

<a name="module_Category"></a>

## Category
Offset 0x10

<a name="module_Organ On"></a>

## Organ On
Offset in file: 0xB6 (b7)O = disabled, 1 = enabled

<a name="module_Organ Kb Zone"></a>

## Organ Kb Zone
Offset in file: 0xB6 (b6 to b3)| value     |      | Label   || --------- | ---- | ------- || x000 0xxx | 0    | `o---`| x000 1xxx | 1    | `-o--`| x001 0xxx | 2    | `--o-`| x001 1xxx | 3    | `---o`| x010 0xxx | 4    | `oo--`| x010 1xxx | 5    | `-oo-`| x011 0xxx | 6    | `--oo`| x011 1xxx | 7    | `ooo-`| x100 0xxx | 8    | `-ooo`| x100 1xxx | 9    | `oooo`

<a name="module_Organ Volume"></a>

## Organ Volume
Offset in file:| -------- |Volume:0xB6 (b2-b0), 0xB7 (b7-b4): 7-bit = 0/127 rangeMorph Wheel:0xB7 (b3): direction (1 = up, 0 = down)0xB7 (b2-b0), 0xB8 (b7-b4): 7-bit raw valueMorph After Touch:0xB8 (b3): direction (1 = up, 0 = down)0xB8 (b2-b0), 0xB9 (b7-b4): 7-bit raw valueMorph Control Pedal:0xB9 (b3): direction (1 = up, 0 = down)0xB9 (b2-b0), 0xBA (b7-b4): 7-bit raw valueif direction = 1 then Morph offset value = raw value + 1if direction = 0 then Morph offset value = raw value - 127Final 'To' Morph value = 'From value (aka original volume)' + 'Morph offset value'Morph Enabled if  'From value' <> 'Morph offset value'

<a name="module_Organ Octave Shift"></a>

## Organ Octave Shift
Offset in file: 0xBA (b2/1/0)Octave Shift = value - 6

<a name="module_Organ Pitch Stick"></a>

## Organ Pitch Stick
Offset in file: 0x34 (b4)

<a name="module_Organ Sustain Pedal"></a>

## Organ Sustain Pedal
Offset in file: 0xBB (b7)

<a name="module_Organ Type"></a>

## Organ Type
Offset in file: 0xBB (b6/5/4)| -------- |0 = B31 = Vox2 = Farfisa3 = Pipe14 = Pipe2

<a name="module_Organ Drawbars Preset 1"></a>

## Organ Drawbars Preset 1
Offset in file: 0xBE| -------- |Drawbar 1: 0xBE (b7-4)Drawbar 2: 0xC0 (b4-1)Drawbar 3: 0xC2 (b1-0) and 0xC3 (b7-6)Drawbar 4: 0xC5 (b6-3)Drawbar 5: 0xC7 (b3-0)Drawbar 6: 0xC9 (b0) and 0xCA (b7-5)Drawbar 7: 0xCC (b5-2)Drawbar 8: 0xCE (b2-0) and 0xCF (b7)Drawbar 9: 0xD1 (b7-4)

<a name="module_Organ Drawbars Preset 2"></a>

## Organ Drawbars Preset 2
Offset in file: 0xD9| -------- |Drawbar 1: 0xD9 (b7-4)Drawbar 2: 0xDB (b4-1)Drawbar 3: 0xDD (b1-0) and 0xDE (b7-6)Drawbar 4: 0xE0 (b6-3)Drawbar 5: 0xE2 (b3-0)Drawbar 6: 0xE4 (b0) and 0xE5 (b7-5)Drawbar 7: 0xE7 (b5-2)Drawbar 8: 0xE9 (b2-0) and 0xEA (b7)Drawbar 9: 0xEC (b7-4)

<a name="module_Organ Live Mode"></a>

## Organ Live Mode
Offset in file: 0xBB (b3)(NS3 Compact model only)

<a name="module_Organ Live Mode..vibrato"></a>

### Organ Live Mode~vibrato
Organ Vibrato Options

**Kind**: inner property of [<code>Organ Live Mode</code>](#module_Organ Live Mode)  
<a name="module_Organ Vibrato On"></a>

## Organ Vibrato On
Offset in file: 0xD3 (b4)

<a name="module_Organ Vibrato Mode"></a>

## Organ Vibrato Mode
Offset in file: 0x34 (b3/2/1)

<a name="module_Organ Percussion Options"></a>

## Organ Percussion Options
<a name="module_Organ Percussion On"></a>

## Organ Percussion On
Offset in file: 0xD3 (b4)

<a name="module_Organ Percussion Volume Soft"></a>

## Organ Percussion Volume Soft
Offset in file: 0xD3 (b0)

<a name="module_Organ Percussion Decay Fast"></a>

## Organ Percussion Decay Fast
Offset in file: 0xD3 (b1)

<a name="module_Organ Percussion Harmonic Third"></a>

## Organ Percussion Harmonic Third
Offset in file: 0xD3 (b2)

<a name="module_Panel Enabled And Selection"></a>

## Panel Enabled And Selection
Offset in file 0x31Enabled (b5 & b6):0 = A only1 = B only2 = A & BSelected Panel (b7):A = 0, B = 1 (not used here)

<a name="module_Piano On"></a>

## Piano On
Offset in file: 0x43 (b7): O = disabled, 1 = enabled

<a name="module_Piano Kb Zone"></a>

## Piano Kb Zone
Offset in file: 0x43 (b6 to b3)

**See**: [Organ Kb Zone](api.md#organ-kb-zone) for detailed explanation.  
<a name="module_Piano Volume"></a>

## Piano Volume
Offset in file: 0x43 (b2 to b0), 0x44 (b7 to b4) 7 bits = 0/127 range

**See**: [Organ Volume](api.md#organ-volume) for detailed explanation.  
<a name="module_Piano Octave Shift"></a>

## Piano Octave Shift
Offset in file: 0x47 (just 4 last bits, AND 0x0F)

**Example**  
```js
0xF5- Shift -10xF6- No shift0xF7- Shift +1Octave Shift = value - 6
```
<a name="module_Piano Pitch Stick"></a>

## Piano Pitch Stick
Offset in file: 0x48 (just bit 0x80)

**Example**  
```js
0x00- No0x80- Yes
```
<a name="module_Piano Sustain Pedal"></a>

## Piano Sustain Pedal
Offset in file: 0x48 (just bit 0x40)

**Example**  
```js
0x00- No0x40- Yes
```
<a name="module_Piano Type"></a>

## Piano Type
Offset in file: 0x48 (only 4 bits, last 3 of first nibble, first of second nibble) AND 0x98

**Example**  
```js
0x40- Grand0x48- Upright0x50- Electric0x58- Clav0x60- Digital0x68- Misc
```
<a name="module_Piano Model"></a>

## Piano Model
Offset in file: 0x48 and 0x49 (last 3 bits of 0x49 and first 2 bits of 0x4A).

**Example**  
```js
0x00 0x00: model 10x00 0x01: model 2.. and so on0x02 0x01: model 10
```
<a name="module_Piano Timbre"></a>

## Piano Timbre
Offset in file: 0x4E

**Example**  
```js
0x00- None0x08- Soft0x10- Mid0x18- Bright0x20- DYNO10x28- DYNO2
```
<a name="module_Piano KB Touch"></a>

## Piano KB Touch
Offset in file: 0x4D (just least significant bit 1, so AND 0x01) and                0x4E (Just Most Significant Bit, so AND 0x80)

**Example**  
```js
0x00 + 0x8x- KB Touch 10x01 + 0x0x- KB Touch 20x01 + 0x8x- KB Touch 3
```
<a name="module_Piano Layer Detune"></a>

## Piano Layer Detune
Offset in file: 0x34

**Example**  
```js
0x00- Off0x20- 10x40- 20x60- 3
```
<a name="module_Piano Soft Release"></a>

## Piano Soft Release
Offset in file: 0x4D (just least significant bit 4, so AND 0x08)

**Example**  
```js
0x00 - No0x08 - Soft Release
```
<a name="module_Piano Pedal Noise"></a>

## Piano Pedal Noise
Offset in file: 0x4D (just least significant bit 2, so AND 0x02)

**Example**  
```js
0x00- No0x02- Pedal Noise
```
<a name="module_Piano String Resonance"></a>

## Piano String Resonance
Offset in file: 0x4D (just least significant bit 3, so AND 0x04)

**Example**  
```js
0x00- No0x04- String Res
```
<a name="module_Synth On"></a>

## Synth On
Offset in file: 0x52 (b7): O = disabled, 1 = enabled

<a name="module_Synth Kb Zone"></a>

## Synth Kb Zone
Offset in file: 0x52 (b6 to b3)

**See**: [Organ Kb Zone](api.md#organ-kb-zone) for detailed explanation.  
<a name="module_Synth Volume"></a>

## Synth Volume
Offset in file: 0x52 (b2/1/0) and 0x53 (b7/6/5/4) 7 bits = 0/127 range

**See**: [Organ Volume](api.md#organ-volume) for detailed explanation.  
<a name="module_Synth Octave Shift"></a>

## Synth Octave Shift
Offset in file: 0x56 (b1/0)

<a name="module_Synth Pitch Stick"></a>

## Synth Pitch Stick
Offset in file: 0x57 (b7)

<a name="module_Synth Sustain Pedal"></a>

## Synth Sustain Pedal
Offset in file: 0x57 (b2)

<a name="module_Synth Keyboard Hold"></a>

## Synth Keyboard Hold
Offset in file: 0x80 (b7)

<a name="module_Synth Voice"></a>

## Synth Voice
Offset in file: 0x84 (b0) and 0x85 (b7)

<a name="module_Synth Glide"></a>

## Synth Glide
Offset in file: 0x84 (b6 to b0) 7 bits, range 0/10

<a name="module_Synth Unison"></a>

## Synth Unison
Offset in file: 0x86 (b7/6)

<a name="module_Synth Vibrato"></a>

## Synth Vibrato
Offset in file: 0x86 (b5/4/3)

<a name="module_Synth Oscillator Type"></a>

## Synth Oscillator Type
Offset in file: 0x8D (b1/0) and 0x81 (b7)

<a name="module_Synth Oscillator 1 Wave Form"></a>

## Synth Oscillator 1 Wave Form
Offset in file: 0x8E (b3-0) and 0x8F (b7/6)

<a name="module_Synth Oscillator Configuration"></a>

## Synth Oscillator Configuration
Offset in file: 0x8F (b4-1)

<a name="module_Synth Control Value"></a>

## Synth Control Value
Offset in file: 0x90 (b2/1/0) and 0x91 (b7/6/5/4) - 0/127 value| --- | ---| Midi value conversion || Pitch (1)             | 0/127 => 0/24| Shape (2)             | 0/127 => 0/100 %| Sync (3)              | 0/127 => 0/10| Detune (4)            | 0/127 => 0/4| Mix* (5 to 11)        | 0/127 => 100/0 to 0/100| FM & RM (12 to 14)    | 0/127 => 0/100 %

<a name="module_Synth Pitch Value"></a>

## Synth Pitch Value
Offset in file: 0x8f (b0) and 0x90 (b7-3)| --- |Midi value are the 6 bits value used + b0 (zero)label conversion: -12 (Sub) to +48

<a name="module_Synth LFO Mod Env"></a>

## Synth LFO Mod Env
Offset in file: 0x94 (b3-0) and 0x95 (b7-5)| --- |Osc modulation (lfo/env mod) is using this single 7-bit value to define two settings with a single knob.Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:0   = 10.0 (100% left value) LFO Amount60  = 0.0 for both values120 = 10.0 (100% right value) Mod Env Amount

<a name="module_Synth Fast Attack"></a>

## Synth Fast Attack
Offset in file: 0xAC (b2)

<a name="module_Synth Filter Type"></a>

## Synth Filter Type
Offset in file: 0x98 (b4-6)| --- | --- || 0 | LP12| 1 | LP24| 2 | Mini Moog| 3 | LP+HP| 4 | BP24| 5 | HP24

<a name="module_Synth Filter Kb Track"></a>

## Synth Filter Kb Track
Offset in file: 0xA5 (b5-4)| --- | --- || 0 | Off| 1 | 1/3| 2 | 2/3| 3 | 1

<a name="module_Synth Filter Drive"></a>

## Synth Filter Drive
Offset in file: 0xA5 (b3-2)| --- | --- || 0 | Off| 1 | 1| 2 | 2| 3 | 3

