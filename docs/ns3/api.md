## Modules

<dl>
<dt><a href="#module_File version">File version</a></dt>
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
<dd><p>Offset in file:</p>
<p>Volume:
0xB6 (b2-b0), 0xB7 (b7-b4): 7-bit = 0/127 range</p>
<p>Morph Wheel:
0xB7 (b3): direction (1 = up, 0 = down)
0xB7 (b2-b0), 0xB8 (b7-b4): 7-bit raw value</p>
<p>Morph After Touch:
0xB8 (b3): direction (1 = up, 0 = down)
0xB8 (b2-b0), 0xB9 (b7-b4): 7-bit raw value</p>
<p>Morph Control Pedal:
0xB9 (b3): direction (1 = up, 0 = down)
0xBA (b2-b0), 0xBA (b7-b4): 7-bit raw value</p>
<p>if direction = 1 then Morph offset value = raw value + 1
if direction = 0 then Morph offset value = raw value - 127</p>
<p>Final &#39;To&#39; Morph value = &#39;From value (aka original volume)&#39; + &#39;Morph offset value&#39;
Morph Enabled if  &#39;From value&#39; &lt;&gt; &#39;Morph offset value&#39;</p>
</dd>
<dt><a href="#module_Organ Octave Shift">Organ Octave Shift</a></dt>
<dd><p>Offset in file: 0xBA (b2/1/0)</p>
</dd>
<dt><a href="#module_Organ Pitch Stick">Organ Pitch Stick</a></dt>
<dd><p>Offset in file: 0x34 (b4)</p>
</dd>
<dt><a href="#module_Organ Sustain Pedal">Organ Sustain Pedal</a></dt>
<dd><p>Offset in file: 0xBB (b7)</p>
</dd>
<dt><a href="#module_Organ Type">Organ Type</a></dt>
<dd><p>Offset in file: 0xBB (b6/5/4)</p>
</dd>
<dt><a href="#module_Organ Drawbars Preset 1">Organ Drawbars Preset 1</a></dt>
<dd><p>Offset in file: 0xBE</p>
</dd>
<dt><a href="#module_Organ Drawbars Preset 2">Organ Drawbars Preset 2</a></dt>
<dd><p>Offset in file: 0xD9</p>
</dd>
<dt><a href="#Organ Live Mode (NS3 Compact model only)">Organ Live Mode </a></dt>
<dd><p>Offset in file: 0xBB (b3)</p>
</dd>
<dt><a href="#module_Organ Vibrato Options">Organ Vibrato Options</a></dt>
<dd></dd>
<dt><a href="#module_Organ Vibrato On/Off">Organ Vibrato On/Off</a></dt>
<dd><p>Offset in file: 0xD3 (b4)</p>
</dd>
<dt><a href="#module_Organ Vibrato Mode">Organ Vibrato Mode</a></dt>
<dd><p>Offset in file: 0x34 (b3/2/1)</p>
</dd>
<dt><a href="#module_Organ Percussion Options">Organ Percussion Options</a></dt>
<dd></dd>
<dt><a href="#module_Organ Percussion On/Off">Organ Percussion On/Off</a></dt>
<dd><p>Offset in file: 0xD3 (b4)</p>
</dd>
<dt><a href="#module_Organ Percussion Volume Soft On/Off">Organ Percussion Volume Soft On/Off</a></dt>
<dd><p>Offset in file: 0xD3 (b0)</p>
</dd>
<dt><a href="#module_Organ Percussion Decay Fast On/Off">Organ Percussion Decay Fast On/Off</a></dt>
<dd><p>Offset in file: 0xD3 (b1)</p>
</dd>
<dt><a href="#module_Organ Percussion Harmonic Third On/Off">Organ Percussion Harmonic Third On/Off</a></dt>
<dd><p>Offset in file: 0xD3 (b2)</p>
</dd>
<dt><a href="#module_Panel enabled and selection">Panel enabled and selection</a></dt>
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
<dd><p>Offset in file: 0x43 (b6 to b3)
ref Organ section for more examples</p>
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
<dt><a href="#module_Sustain Pedal">Sustain Pedal</a></dt>
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
</dl>

<a name="module_File version"></a>

## File version
Offset in file: 0x14 and 0x15

**Example**  
```js
16 bit int value, ex 304 = v3.04
```
<a name="module_Transpose"></a>

## Transpose
Offset in file: 0x38 (b7-3)

**Example**  
```js
7xxx xxxx : Transpose Off/On
```
<a name="module_Split"></a>

## Split
0ffset in file: 0x31 (b4 to b0) to 0x34 (b7 only)

**Example**  
```js
|  0X31     |    0x32   |     0x33  |    0x34   | description
```
<a name="module_Master Clock Rate"></a>

## Master Clock Rate
Offset in file: 0x38 (b2-0) 0x39 (b7-3)

<a name="module_Rotary Speaker On"></a>

## Rotary Speaker On
Offset in file: 0x10b (bit7):

<a name="module_Rotary Speaker Source"></a>

## Rotary Speaker Source
Offset in file: 0x10b (b6 and b5):

<a name="module_Rotary Speaker Drive"></a>

## Rotary Speaker Drive
Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4):

<a name="module_Rotary Speaker Stop Mode"></a>

## Rotary Speaker Stop Mode
Offset in file: 0x35 (bit7):

<a name="module_Rotary Speaker Speed"></a>

## Rotary Speaker Speed
Offset in file: 0x34 (bit0):

<a name="module_Effect 1 On"></a>

## Effect 1 On
Offset in file: 0x10b LSB 5 (AND 0x10)

<a name="module_Effect 1 Source"></a>

## Effect 1 Source
Offset in file: 0x10b only 2 bits (AND 0x0C)

<a name="module_Effect 1 Type"></a>

## Effect 1 Type
Offset 0 in file: 0x10b two bit (AND 0x03) 0x10c one bit (AND 0x80)

<a name="module_Effect 1 Amount"></a>

## Effect 1 Amount
Offset in file: 0x110 only last 7 bits (AND 0x7F)

**Example**  
```js
if you get 0x2A, that is 42 / 127 * 10 = 3.307. Then Label is "3.3"
```
<a name="module_Effect 1 Rate"></a>

## Effect 1 Rate
Offset in file: last 6 bits of 0x10c (AND 0x3F) and first bit of 0x10d (and 0x80).

<a name="module_Effect 1 Master Clock"></a>

## Effect 1 Master Clock
Offset in file: 0x10c 2nd MS bit (AND 0x40):

<a name="module_Effect 2 On"></a>

## Effect 2 On
Offset in file: 0x114 b7 (AND 0x80)

<a name="module_Effect 2 Source"></a>

## Effect 2 Source
Offset in file: 0x114 b6 and b5 (AND 0x60)

<a name="module_Effect 2 Type"></a>

## Effect 2 Type
Offset in file: 0x114 bits 4-2 (AND 0x1C)

<a name="module_Effect 2 Amount"></a>

## Effect 2 Amount
Offset in file: 0x115 (last 3 bits) and 0x116 (first 4 bits) So 0x115 AND

<a name="module_Effect 2 Rate"></a>

## Effect 2 Rate
Offset in file: last 2 bits of 0x114 and first 5 bits of 0x115

<a name="module_Category"></a>

## Category
Offset 0x10

<a name="module_Organ On"></a>

## Organ On
Offset in file: 0xB6 (b7)

<a name="module_Organ Kb Zone"></a>

## Organ Kb Zone
Offset in file: 0xB6 (b6 to b3)

<a name="module_Organ Volume"></a>

## Organ Volume
Offset in file:

<a name="module_Organ Octave Shift"></a>

## Organ Octave Shift
Offset in file: 0xBA (b2/1/0)

<a name="module_Organ Pitch Stick"></a>

## Organ Pitch Stick
Offset in file: 0x34 (b4)

<a name="module_Organ Sustain Pedal"></a>

## Organ Sustain Pedal
Offset in file: 0xBB (b7)

<a name="module_Organ Type"></a>

## Organ Type
Offset in file: 0xBB (b6/5/4)

<a name="module_Organ Drawbars Preset 1"></a>

## Organ Drawbars Preset 1
Offset in file: 0xBE

<a name="module_Organ Drawbars Preset 2"></a>

## Organ Drawbars Preset 2
Offset in file: 0xD9

<a name="Organ Live Mode (NS3 Compact model only)"></a>

## Organ Live Mode 
Offset in file: 0xBB (b3)

<a name="module_Organ Vibrato Options"></a>

## Organ Vibrato Options
<a name="module_Organ Vibrato On/Off"></a>

## Organ Vibrato On/Off
Offset in file: 0xD3 (b4)

<a name="module_Organ Vibrato Mode"></a>

## Organ Vibrato Mode
Offset in file: 0x34 (b3/2/1)

<a name="module_Organ Percussion Options"></a>

## Organ Percussion Options
<a name="module_Organ Percussion On/Off"></a>

## Organ Percussion On/Off
Offset in file: 0xD3 (b4)

<a name="module_Organ Percussion Volume Soft On/Off"></a>

## Organ Percussion Volume Soft On/Off
Offset in file: 0xD3 (b0)

<a name="module_Organ Percussion Decay Fast On/Off"></a>

## Organ Percussion Decay Fast On/Off
Offset in file: 0xD3 (b1)

<a name="module_Organ Percussion Harmonic Third On/Off"></a>

## Organ Percussion Harmonic Third On/Off
Offset in file: 0xD3 (b2)

<a name="module_Panel enabled and selection"></a>

## Panel enabled and selection
Offset in file 0x31

<a name="module_Piano On"></a>

## Piano On
Offset in file: 0x43 (b7): O = disabled, 1 = enabled

<a name="module_Piano Kb Zone"></a>

## Piano Kb Zone
Offset in file: 0x43 (b6 to b3)

<a name="module_Piano Volume"></a>

## Piano Volume
Offset in file: 0x43 (b2 to b0), 0x44 (b7 to b4) 7 bits = 0/127 range

<a name="module_Piano Octave Shift"></a>

## Piano Octave Shift
Offset in file: 0x47 (just 4 last bits, AND 0x0F)

**Example**  
```js
0xF5- Shift -1
```
<a name="module_Piano Pitch Stick"></a>

## Piano Pitch Stick
Offset in file: 0x48 (just bit 0x80)

**Example**  
```js
0x00- No
```
<a name="module_Sustain Pedal"></a>

## Sustain Pedal
Offset in file: 0x48 (just bit 0x40)

**Example**  
```js
0x00- No
```
<a name="module_Piano Type"></a>

## Piano Type
Offset in file: 0x48 (only 4 bits, last 3 of first nibble, first of second nibble) AND 0x98

**Example**  
```js
0x40- Grand
```
<a name="module_Piano Model"></a>

## Piano Model
Offset in file: 0x48 and 0x49 (last 3 bits of 0x49 and first 2 bits of 0x4A).

**Example**  
```js
0x00 0x00: model 1
```
<a name="module_Piano Timbre"></a>

## Piano Timbre
Offset in file: 0x4E

**Example**  
```js
0x00- None
```
<a name="module_Piano KB Touch"></a>

## Piano KB Touch
Offset in file: 0x4D (just least significant bit 1, so AND 0x01) and

**Example**  
```js
0x00 + 0x8x- KB Touch 1
```
<a name="module_Piano Layer Detune"></a>

## Piano Layer Detune
Offset in file: 0x34

**Example**  
```js
0x00- Off
```
<a name="module_Piano Soft Release"></a>

## Piano Soft Release
Offset in file: 0x4D (just least significant bit 4, so AND 0x08)

**Example**  
```js
0x00 - No
```
<a name="module_Piano Pedal Noise"></a>

## Piano Pedal Noise
Offset in file: 0x4D (just least significant bit 2, so AND 0x02)

**Example**  
```js
0x00- No
```
<a name="module_Piano String Resonance"></a>

## Piano String Resonance
Offset in file: 0x4D (just least significant bit 3, so AND 0x04)

**Example**  
```js
0x00- No
```