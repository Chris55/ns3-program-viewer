## Members

<dl>
<dt><a href="#enabled">enabled</a></dt>
<dd><p>Rotary Speaker On:
Offset in file: 0x10b (bit7):</p>
<p>Values:
0 = disabled, 1 = enabled</p>
</dd>
<dt><a href="#source">source</a></dt>
<dd><p>Rotary Speaker Source:
Offset in file: 0x10b (b6 and b5):</p>
<p>Values:
0 = Organ, 1, Piano, 2 = Synth</p>
</dd>
<dt><a href="#drive">drive</a></dt>
<dd><p>Rotary Speaker Drive:
Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4):</p>
<p>Values:
7 bits value 0/127 converted to 0/10</p>
</dd>
<dt><a href="#stopMode">stopMode</a></dt>
<dd><p>Rotary Speaker Stop Mode:
Offset in file: 0x35 (bit7):</p>
<p>Values:
0 = enabled (Speed Stop), 1 = disabled (Speed Slow)</p>
</dd>
<dt><a href="#speed">speed</a></dt>
<dd><p>Rotary Speaker Speed
Offset in file: 0x34 (bit0):</p>
<p>Values:
0 = Slow/Stop, 1 = Fast</p>
</dd>
<dt><a href="#enabled">enabled</a></dt>
<dd><p>Effect 1 ON:
Offset in file: 0x10b LSB 5 (AND 0x10)</p>
<p> 0x00: OFF
 0x10: ON</p>
</dd>
<dt><a href="#source">source</a></dt>
<dd><p>Effect 1 SOURCE:
Offset in file: 0x10b only 2 bits (AND 0x0C)</p>
<p> 0x00: Organ
 0x04: Piano
 0x08: Synth</p>
</dd>
<dt><a href="#type">type</a></dt>
<dd><p>Effect 1 TYPE:
 Offset 0 in file: 0x10b two bit (AND 0x03) 0x10c one bit (AND 0x80)</p>
<p> 0x00 0x00: A-Pan
 0x00 0x80: Trem
 0x01 0x00: RM
 0x01 0x80: WA-WA
 0x02 0x00: A-WA1
 0x02 0x80: A-WA2</p>
</dd>
<dt><a href="#amount">amount</a></dt>
<dd><p>Effect 1 Amount:
Offset in file: 0x110 only last 7 bits (AND 0x7F)</p>
<p>Label: The number you get there, divided by 127 (7 bits) multiplied by 10.
Then rounded to 1 dec
 Example: if you get 0x2A, that is 42 / 127 * 10 = 3.307. Then Label is &quot;3.3&quot;
 if you get 0x15, that is 21 / 127 * 10 = 1.6535. Then Label is &quot;1.7&quot;
 if you get 0x16, that is 22 / 127 * 10 = 1.732. Then Label is &quot;1.7&quot; (yes, same)</p>
</dd>
<dt><a href="#rate">rate</a></dt>
<dd><p>Effect 2 Rate:
Offset in file: last 6 bits of 0x10c (AND 0x3F) and first bit of 0x10d (and 0x80).</p>
<p>So, those 2 bytes shifted 1 bit to the left, in order to get just 1 byte.
If you get 0x3F 0x80, then that shifted 1 bit to the left is 0x7F.
Then, same logic as with Amount for the label.</p>
</dd>
<dt><a href="#masterClock">masterClock</a></dt>
<dd><p>Effect 1 Master clock:
 Offset in file: 0x10c 2nd MS bit (AND 0x40):</p>
<p> 0x00: OFF
 0x40: ON</p>
</dd>
<dt><a href="#enabled">enabled</a></dt>
<dd><p>Effect 2 ON:
Offset in file: 0x114 b7 (AND 0x80)</p>
<p> 0x00: OFF
 0x10: ON</p>
</dd>
<dt><a href="#source">source</a></dt>
<dd><p>Effect 2 SOURCE:
Offset in file: 0x114 b6 and b5 (AND 0x60)</p>
<p> 0x00: Organ
 0x04: Piano
 0x08: Synth</p>
</dd>
<dt><a href="#type">type</a></dt>
<dd><p>Effect 2 TYPE:
 Offset 0 in file: 0x114 bits 4-2 (AND 0x1C)</p>
<p>0x00: PHAS1
0x04: PHAS2
0x08: FLANG
0x0C: VIBE
0x10: CHOR1
0x14: CHOR2</p>
</dd>
<dt><a href="#amount">amount</a></dt>
<dd><p>Effect 2 Amount:
Offset in file: 0x115 (last 3 bits) and 0x116 (first 4 bits) So 0x115 AND
0x07 + 0x115 AND 0xF0. All that then shifted for places to the right.
To calculate number it is same as amount on effects 1</p>
</dd>
<dt><a href="#rate">rate</a></dt>
<dd><p>Effect 2 Rate:
Offset in file: last 2 bits of 0x114 and first 5 bits of 0x115
So, 0x114 AND 0x03 + 0x115 AND 0xF8. All that shifted 3 places to the right
Sames as Amount</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#getRotarySpeakerEffect">getRotarySpeakerEffect(buffer, panelOffset)</a> ⇒ <code>Object</code></dt>
<dd><p>returns Rotary Speaker Effect section</p>
</dd>
<dt><a href="#getEffect1">getEffect1(buffer, panelOffset)</a> ⇒ <code>Object</code></dt>
<dd><p>returns effect 1</p>
</dd>
<dt><a href="#getEffect2">getEffect2(buffer, panelOffset)</a> ⇒ <code>Object</code></dt>
<dd><p>returns effect 2</p>
</dd>
</dl>

<a name="enabled"></a>

## enabled
Rotary Speaker On:Offset in file: 0x10b (bit7):Values:0 = disabled, 1 = enabled

**Kind**: global variable  
<a name="source"></a>

## source
Rotary Speaker Source:Offset in file: 0x10b (b6 and b5):Values:0 = Organ, 1, Piano, 2 = Synth

**Kind**: global variable  
<a name="drive"></a>

## drive
Rotary Speaker Drive:Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4):Values:7 bits value 0/127 converted to 0/10

**Kind**: global variable  
<a name="stopMode"></a>

## stopMode
Rotary Speaker Stop Mode:Offset in file: 0x35 (bit7):Values:0 = enabled (Speed Stop), 1 = disabled (Speed Slow)

**Kind**: global variable  
<a name="speed"></a>

## speed
Rotary Speaker SpeedOffset in file: 0x34 (bit0):Values:0 = Slow/Stop, 1 = Fast

**Kind**: global variable  
<a name="enabled"></a>

## enabled
Effect 1 ON:Offset in file: 0x10b LSB 5 (AND 0x10) 0x00: OFF 0x10: ON

**Kind**: global variable  
<a name="source"></a>

## source
Effect 1 SOURCE:Offset in file: 0x10b only 2 bits (AND 0x0C) 0x00: Organ 0x04: Piano 0x08: Synth

**Kind**: global variable  
<a name="type"></a>

## type
Effect 1 TYPE: Offset 0 in file: 0x10b two bit (AND 0x03) 0x10c one bit (AND 0x80) 0x00 0x00: A-Pan 0x00 0x80: Trem 0x01 0x00: RM 0x01 0x80: WA-WA 0x02 0x00: A-WA1 0x02 0x80: A-WA2

**Kind**: global variable  
<a name="amount"></a>

## amount
Effect 1 Amount:Offset in file: 0x110 only last 7 bits (AND 0x7F)Label: The number you get there, divided by 127 (7 bits) multiplied by 10.Then rounded to 1 dec Example: if you get 0x2A, that is 42 / 127 * 10 = 3.307. Then Label is "3.3" if you get 0x15, that is 21 / 127 * 10 = 1.6535. Then Label is "1.7" if you get 0x16, that is 22 / 127 * 10 = 1.732. Then Label is "1.7" (yes, same)

**Kind**: global variable  
<a name="rate"></a>

## rate
Effect 2 Rate:Offset in file: last 6 bits of 0x10c (AND 0x3F) and first bit of 0x10d (and 0x80).So, those 2 bytes shifted 1 bit to the left, in order to get just 1 byte.If you get 0x3F 0x80, then that shifted 1 bit to the left is 0x7F.Then, same logic as with Amount for the label.

**Kind**: global variable  
<a name="masterClock"></a>

## masterClock
Effect 1 Master clock: Offset in file: 0x10c 2nd MS bit (AND 0x40): 0x00: OFF 0x40: ON

**Kind**: global variable  
<a name="enabled"></a>

## enabled
Effect 2 ON:Offset in file: 0x114 b7 (AND 0x80) 0x00: OFF 0x10: ON

**Kind**: global variable  
<a name="source"></a>

## source
Effect 2 SOURCE:Offset in file: 0x114 b6 and b5 (AND 0x60) 0x00: Organ 0x04: Piano 0x08: Synth

**Kind**: global variable  
<a name="type"></a>

## type
Effect 2 TYPE: Offset 0 in file: 0x114 bits 4-2 (AND 0x1C)0x00: PHAS10x04: PHAS20x08: FLANG0x0C: VIBE0x10: CHOR10x14: CHOR2

**Kind**: global variable  
<a name="amount"></a>

## amount
Effect 2 Amount:Offset in file: 0x115 (last 3 bits) and 0x116 (first 4 bits) So 0x115 AND0x07 + 0x115 AND 0xF0. All that then shifted for places to the right.To calculate number it is same as amount on effects 1

**Kind**: global variable  
<a name="rate"></a>

## rate
Effect 2 Rate:Offset in file: last 2 bits of 0x114 and first 5 bits of 0x115So, 0x114 AND 0x03 + 0x115 AND 0xF8. All that shifted 3 places to the rightSames as Amount

**Kind**: global variable  
<a name="getRotarySpeakerEffect"></a>

## getRotarySpeakerEffect(buffer, panelOffset) ⇒ <code>Object</code>
returns Rotary Speaker Effect section

**Kind**: global function  

| Param |
| --- |
| buffer | 
| panelOffset | 

<a name="getEffect1"></a>

## getEffect1(buffer, panelOffset) ⇒ <code>Object</code>
returns effect 1

**Kind**: global function  

| Param |
| --- |
| buffer | 
| panelOffset | 

<a name="getEffect2"></a>

## getEffect2(buffer, panelOffset) ⇒ <code>Object</code>
returns effect 2

**Kind**: global function  

| Param |
| --- |
| buffer | 
| panelOffset | 

