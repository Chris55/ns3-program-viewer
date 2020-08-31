## Modules

<dl>
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
<dt><a href="#module_Organ On">Organ On</a></dt>
<dd><p>Offset in file: 0xB6 (b7)</p>
<p>O = disabled, 1 = enabled</p>
</dd>
<dt><a href="#module_Organ Kb Zone">Organ Kb Zone</a></dt>
<dd><p>Offset in file: 0xB6 (b6 to b3)</p>
<p>Values:
  0X87 x000 0xxx = 0  = o---
  0X8F x000 1xxx = 1  =-o--
  0x97 x001 0xxx = 2  = --o-
  0x9F x001 1xxx = 3  = ---o
  0xA7 x010 0xxx = 4  = oo--
  0xAF x010 1xxx = 5  = -oo-
  0xB7 x011 0xxx = 6  = --oo
  0xBF x011 1xxx = 7  = ooo-
  0xC7 x100 0xxx = 8  = -ooo
  0xCF x100 1xxx = 9  = oooo</p>
</dd>
<dt><a href="#module_Organ Volume">Organ Volume</a></dt>
<dd><p>Offset in file: 0xB6 (b2 to b0), 0xB7 (b7 to b4) 7 bits = 0/127 range</p>
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
</dl>

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

<a name="module_Organ On"></a>

## Organ On
Offset in file: 0xB6 (b7)O = disabled, 1 = enabled

<a name="module_Organ Kb Zone"></a>

## Organ Kb Zone
Offset in file: 0xB6 (b6 to b3)Values:  0X87 x000 0xxx = 0  = o---  0X8F x000 1xxx = 1  =-o--  0x97 x001 0xxx = 2  = --o-  0x9F x001 1xxx = 3  = ---o  0xA7 x010 0xxx = 4  = oo--  0xAF x010 1xxx = 5  = -oo-  0xB7 x011 0xxx = 6  = --oo  0xBF x011 1xxx = 7  = ooo-  0xC7 x100 0xxx = 8  = -ooo  0xCF x100 1xxx = 9  = oooo

<a name="module_Organ Volume"></a>

## Organ Volume
Offset in file: 0xB6 (b2 to b0), 0xB7 (b7 to b4) 7 bits = 0/127 range

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

