

## NS3 Extern On
Offset in file: 0xF4 (b7)

```
O = off, 1 = on
```

## NS3 Extern Kb Zone
Offset in file: 0xF4 (b6-3)

**See**: [Organ Kb Zone](#ns3-organ-kb-zone) for detailed explanation.  

## NS3 Extern Octave Shift
Offset in file: 0xF4 (b1-0) and 0xF5 (b7)

```
Octave Shift = value - 6
```

## NS3 Extern Pitch Stick
Offset in file: 0xF6 (b7)

```
O = off, 1 = on
```

## NS3 Extern Sustain Pedal
Offset in file: 0xF6 (b6)

```
O = off, 1 = on
```

## NS3 Extern Midi Control
Offset in file: 0xF6 (b1-0)

```
  0 = Midi CC
  1 = Program
  2 = Volume

```

## NS3 Extern Midi Send User CC On Load
Offset in file: 0xfb (b1)

```
(Send on Load)
O = off, 1 = on
```

## NS3 Extern Midi CC
Offset in file: 0xF7 (b0) and 0xF8 (b7-2)

```
7-bits value = 0/127
```

## NS3 Extern Midi Send Program On Load
Offset in file: 0x101 (b1)

```
(Send on Load)
O = off, 1 = on
```

## NS3 Extern Midi Program
Offset in file: 0xFD (b0) and 0xFE (b7-2)

```
7-bits value = 0/127
```

## NS3 Extern Midi Send Volume On Load
Offset in file: 0x105 (b1)

```
(Send on Load)
O = off, 1 = on
```

## NS3 Extern Midi Send Volume
Offset in file: 0x105 (b0)

```
O = off, 1 = on
```

## NS3 Extern Volume
Offset in file: 0x101 (b0) and 0x102 (b7-2)

```
7-bits value = 0/127
```

## NS3 Extern Midi Channel
Offset in file: 0xf5 (b4-0)

```
5-bits value
0 = 0FF
1 = 1
2 = 2....
```

## NS3 Extern Midi Bank Select CC00
Offset in file: 0xfc (b0) to 0xfd (b7-1)

```
8-bits value
0 = 0FF
1 = 0
2 = 1....
```

## NS3 Extern Midi Bank Select CC32
Offset in file: 0xfb (b0) to 0xfc (b7-1)

```
8-bits value
0 = 0FF
1 = 0
2 = 1....
```

## NS3 Extern Midi CC Number
Offset in file: 0xf7 (b7-1)

```
7-bits value = 0 to 119
```

## NS3 Extern Midi Send Wheel
Offset in file: 0xf6 (b5)

```
0 = OFF
1 = ON
```

## NS3 Extern Midi Send AfterTouch
Offset in file: 0xf6 (b4)

```
0 = OFF
1 = ON
```

## NS3 Extern Midi Send Control Pedal
Offset in file: 0xf6 (b3)

```
0 = OFF
1 = ON
```

## NS3 Extern Midi Send Swell
Offset in file: 0xf6 (b2)

```
0 = OFF
1 = ON
```

## NS3 Extern Midi Velocity Curve
Offset in file: 0xf5 (b6-5)

```
  0 = Soft
  1 = Mid
  2 = Hard

```

## NS3 Amp Sim Eq On
Offset in file: 0x129 (b2)

```
O = off, 1 = on

 
```

## NS3 Amp Sim Eq Source
Offset in file: 0x10B (b3-2)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS3 Amp Sim Eq Amp Type
Offset in file: 0x12A (b7-5)

```
0 = Clean
1 = Twin
2 = JC
3 = Small
4 = LP24
5 = HP24

 
```

## NS3 Amp Sim Eq Treble
Offset in file: 0x12A (b4-0) and 0x12B (b7-6)

```
treble (fixed 4 kHz) frequency boost/cut table:
  0 = -15.0 dB
  1 = -14.8 dB
  2 = -14.5 dB
  3 = -14.2 dB
  4 = -14.0 dB
  5 = -13.8 dB
  6 = -13.5 dB
  7 = -13.2 dB
  8 = -13.0 dB
  9 = -12.8 dB
  10 = -12.5 dB
  11 = -12.2 dB
  12 = -12.0 dB
  13 = -11.8 dB
  14 = -11.5 dB
  15 = -11.2 dB
  16 = -11.0 dB
  17 = -10.8 dB
  18 = -10.5 dB
  19 = -10.2 dB
  20 = -10.0 dB
  21 = -9.8 dB
  22 = -9.5 dB
  23 = -9.2 dB
  24 = -9.0 dB
  25 = -8.8 dB
  26 = -8.5 dB
  27 = -8.2 dB
  28 = -8.0 dB
  29 = -7.8 dB
  30 = -7.5 dB
  31 = -7.2 dB
  32 = -7.0 dB
  33 = -6.8 dB
  34 = -6.5 dB
  35 = -6.2 dB
  36 = -6.0 dB
  37 = -5.8 dB
  38 = -5.5 dB
  39 = -5.2 dB
  40 = -5.0 dB
  41 = -4.8 dB
  42 = -4.5 dB
  43 = -4.2 dB
  44 = -4.0 dB
  45 = -3.8 dB
  46 = -3.5 dB
  47 = -3.2 dB
  48 = -3.0 dB
  49 = -2.8 dB
  50 = -2.5 dB
  51 = -2.2 dB
  52 = -2.0 dB
  53 = -1.8 dB
  54 = -1.5 dB
  55 = -1.2 dB
  56 = -1.0 dB
  57 = -0.8 dB
  58 = -0.5 dB
  59 = -0.2 dB
  60 = 0.0 dB
  61 = +0.2 dB
  62 = +0.5 dB
  63 = +0.8 dB
  64 = +1.0 dB
  65 = +1.2 dB
  66 = +1.5 dB
  67 = +1.8 dB
  68 = +2.0 dB
  69 = +2.2 dB
  70 = +2.5 dB
  71 = +2.8 dB
  72 = +3.0 dB
  73 = +3.2 dB
  74 = +3.5 dB
  75 = +3.8 dB
  76 = +4.0 dB
  77 = +4.2 dB
  78 = +4.5 dB
  79 = +4.8 dB
  80 = +5.0 dB
  81 = +5.2 dB
  82 = +5.5 dB
  83 = +5.8 dB
  84 = +6.0 dB
  85 = +6.2 dB
  86 = +6.5 dB
  87 = +6.8 dB
  88 = +7.0 dB
  89 = +7.2 dB
  90 = +7.5 dB
  91 = +7.8 dB
  92 = +8.0 dB
  93 = +8.2 dB
  94 = +8.5 dB
  95 = +8.8 dB
  96 = +9.0 dB
  97 = +9.2 dB
  98 = +9.5 dB
  99 = +9.8 dB
  100 = +10.0 dB
  101 = +10.2 dB
  102 = +10.5 dB
  103 = +10.8 dB
  104 = +11.0 dB
  105 = +11.2 dB
  106 = +11.5 dB
  107 = +11.8 dB
  108 = +12.0 dB
  109 = +12.2 dB
  110 = +12.5 dB
  111 = +12.8 dB
  112 = +13.0 dB
  113 = +13.2 dB
  114 = +13.5 dB
  115 = +13.8 dB
  116 = +14.0 dB
  117 = +14.2 dB
  118 = +14.5 dB
  119 = +14.8 dB
  120 = +15.0 dB
  121 = UNDEF
  122 = UNDEF
  123 = UNDEF
  124 = UNDEF
  125 = UNDEF
  126 = UNDEF
  127 = UNDEF

```

## NS3 Amp Sim Eq Mid Res
Offset in file: 0x12B (b5-0) and 0x12C (b7)

```
if Amp Type is LP24 or HP24 filter resonance = 0 to 10
else middle frequency boost/cut table:
  0 = -15.0 dB
  1 = -14.8 dB
  2 = -14.5 dB
  3 = -14.2 dB
  4 = -14.0 dB
  5 = -13.8 dB
  6 = -13.5 dB
  7 = -13.2 dB
  8 = -13.0 dB
  9 = -12.8 dB
  10 = -12.5 dB
  11 = -12.2 dB
  12 = -12.0 dB
  13 = -11.8 dB
  14 = -11.5 dB
  15 = -11.2 dB
  16 = -11.0 dB
  17 = -10.8 dB
  18 = -10.5 dB
  19 = -10.2 dB
  20 = -10.0 dB
  21 = -9.8 dB
  22 = -9.5 dB
  23 = -9.2 dB
  24 = -9.0 dB
  25 = -8.8 dB
  26 = -8.5 dB
  27 = -8.2 dB
  28 = -8.0 dB
  29 = -7.8 dB
  30 = -7.5 dB
  31 = -7.2 dB
  32 = -7.0 dB
  33 = -6.8 dB
  34 = -6.5 dB
  35 = -6.2 dB
  36 = -6.0 dB
  37 = -5.8 dB
  38 = -5.5 dB
  39 = -5.2 dB
  40 = -5.0 dB
  41 = -4.8 dB
  42 = -4.5 dB
  43 = -4.2 dB
  44 = -4.0 dB
  45 = -3.8 dB
  46 = -3.5 dB
  47 = -3.2 dB
  48 = -3.0 dB
  49 = -2.8 dB
  50 = -2.5 dB
  51 = -2.2 dB
  52 = -2.0 dB
  53 = -1.8 dB
  54 = -1.5 dB
  55 = -1.2 dB
  56 = -1.0 dB
  57 = -0.8 dB
  58 = -0.5 dB
  59 = -0.2 dB
  60 = 0.0 dB
  61 = +0.2 dB
  62 = +0.5 dB
  63 = +0.8 dB
  64 = +1.0 dB
  65 = +1.2 dB
  66 = +1.5 dB
  67 = +1.8 dB
  68 = +2.0 dB
  69 = +2.2 dB
  70 = +2.5 dB
  71 = +2.8 dB
  72 = +3.0 dB
  73 = +3.2 dB
  74 = +3.5 dB
  75 = +3.8 dB
  76 = +4.0 dB
  77 = +4.2 dB
  78 = +4.5 dB
  79 = +4.8 dB
  80 = +5.0 dB
  81 = +5.2 dB
  82 = +5.5 dB
  83 = +5.8 dB
  84 = +6.0 dB
  85 = +6.2 dB
  86 = +6.5 dB
  87 = +6.8 dB
  88 = +7.0 dB
  89 = +7.2 dB
  90 = +7.5 dB
  91 = +7.8 dB
  92 = +8.0 dB
  93 = +8.2 dB
  94 = +8.5 dB
  95 = +8.8 dB
  96 = +9.0 dB
  97 = +9.2 dB
  98 = +9.5 dB
  99 = +9.8 dB
  100 = +10.0 dB
  101 = +10.2 dB
  102 = +10.5 dB
  103 = +10.8 dB
  104 = +11.0 dB
  105 = +11.2 dB
  106 = +11.5 dB
  107 = +11.8 dB
  108 = +12.0 dB
  109 = +12.2 dB
  110 = +12.5 dB
  111 = +12.8 dB
  112 = +13.0 dB
  113 = +13.2 dB
  114 = +13.5 dB
  115 = +13.8 dB
  116 = +14.0 dB
  117 = +14.2 dB
  118 = +14.5 dB
  119 = +14.8 dB
  120 = +15.0 dB
  121 = UNDEF
  122 = UNDEF
  123 = UNDEF
  124 = UNDEF
  125 = UNDEF
  126 = UNDEF
  127 = UNDEF

```

## NS3 Amp Sim Eq Bass Dry Wet
Offset in file: 0x12C (b6-0)

```
if Amp Type is LP24 or HP24 filter dry / wet = 0 to 10
else bass (fixed 100 Hz) frequency boost/cut table:
  0 = -15.0 dB
  1 = -14.8 dB
  2 = -14.5 dB
  3 = -14.2 dB
  4 = -14.0 dB
  5 = -13.8 dB
  6 = -13.5 dB
  7 = -13.2 dB
  8 = -13.0 dB
  9 = -12.8 dB
  10 = -12.5 dB
  11 = -12.2 dB
  12 = -12.0 dB
  13 = -11.8 dB
  14 = -11.5 dB
  15 = -11.2 dB
  16 = -11.0 dB
  17 = -10.8 dB
  18 = -10.5 dB
  19 = -10.2 dB
  20 = -10.0 dB
  21 = -9.8 dB
  22 = -9.5 dB
  23 = -9.2 dB
  24 = -9.0 dB
  25 = -8.8 dB
  26 = -8.5 dB
  27 = -8.2 dB
  28 = -8.0 dB
  29 = -7.8 dB
  30 = -7.5 dB
  31 = -7.2 dB
  32 = -7.0 dB
  33 = -6.8 dB
  34 = -6.5 dB
  35 = -6.2 dB
  36 = -6.0 dB
  37 = -5.8 dB
  38 = -5.5 dB
  39 = -5.2 dB
  40 = -5.0 dB
  41 = -4.8 dB
  42 = -4.5 dB
  43 = -4.2 dB
  44 = -4.0 dB
  45 = -3.8 dB
  46 = -3.5 dB
  47 = -3.2 dB
  48 = -3.0 dB
  49 = -2.8 dB
  50 = -2.5 dB
  51 = -2.2 dB
  52 = -2.0 dB
  53 = -1.8 dB
  54 = -1.5 dB
  55 = -1.2 dB
  56 = -1.0 dB
  57 = -0.8 dB
  58 = -0.5 dB
  59 = -0.2 dB
  60 = 0.0 dB
  61 = +0.2 dB
  62 = +0.5 dB
  63 = +0.8 dB
  64 = +1.0 dB
  65 = +1.2 dB
  66 = +1.5 dB
  67 = +1.8 dB
  68 = +2.0 dB
  69 = +2.2 dB
  70 = +2.5 dB
  71 = +2.8 dB
  72 = +3.0 dB
  73 = +3.2 dB
  74 = +3.5 dB
  75 = +3.8 dB
  76 = +4.0 dB
  77 = +4.2 dB
  78 = +4.5 dB
  79 = +4.8 dB
  80 = +5.0 dB
  81 = +5.2 dB
  82 = +5.5 dB
  83 = +5.8 dB
  84 = +6.0 dB
  85 = +6.2 dB
  86 = +6.5 dB
  87 = +6.8 dB
  88 = +7.0 dB
  89 = +7.2 dB
  90 = +7.5 dB
  91 = +7.8 dB
  92 = +8.0 dB
  93 = +8.2 dB
  94 = +8.5 dB
  95 = +8.8 dB
  96 = +9.0 dB
  97 = +9.2 dB
  98 = +9.5 dB
  99 = +9.8 dB
  100 = +10.0 dB
  101 = +10.2 dB
  102 = +10.5 dB
  103 = +10.8 dB
  104 = +11.0 dB
  105 = +11.2 dB
  106 = +11.5 dB
  107 = +11.8 dB
  108 = +12.0 dB
  109 = +12.2 dB
  110 = +12.5 dB
  111 = +12.8 dB
  112 = +13.0 dB
  113 = +13.2 dB
  114 = +13.5 dB
  115 = +13.8 dB
  116 = +14.0 dB
  117 = +14.2 dB
  118 = +14.5 dB
  119 = +14.8 dB
  120 = +15.0 dB
  121 = UNDEF
  122 = UNDEF
  123 = UNDEF
  124 = UNDEF
  125 = UNDEF
  126 = UNDEF
  127 = UNDEF

```

## NS3 Amp Sim Eq Mid Flt Freq
Offset in file: 0x12D (b7-1)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 200 Hz to 8.0 kHz

  0 = 200 Hz
  1 = 205 Hz
  2 = 210 Hz
  3 = 215 Hz
  4 = 221 Hz
  5 = 226 Hz
  6 = 232 Hz
  7 = 238 Hz
  8 = 244 Hz
  9 = 250 Hz
  10 = 257 Hz
  11 = 263 Hz
  12 = 270 Hz
  13 = 277 Hz
  14 = 284 Hz
  15 = 291 Hz
  16 = 299 Hz
  17 = 306 Hz
  18 = 314 Hz
  19 = 322 Hz
  20 = 330 Hz
  21 = 339 Hz
  22 = 347 Hz
  23 = 356 Hz
  24 = 365 Hz
  25 = 375 Hz
  26 = 384 Hz
  27 = 394 Hz
  28 = 404 Hz
  29 = 414 Hz
  30 = 425 Hz
  31 = 436 Hz
  32 = 447 Hz
  33 = 458 Hz
  34 = 470 Hz
  35 = 482 Hz
  36 = 494 Hz
  37 = 507 Hz
  38 = 520 Hz
  39 = 533 Hz
  40 = 546 Hz
  41 = 560 Hz
  42 = 575 Hz
  43 = 589 Hz
  44 = 604 Hz
  45 = 620 Hz
  46 = 635 Hz
  47 = 652 Hz
  48 = 668 Hz
  49 = 685 Hz
  50 = 703 Hz
  51 = 721 Hz
  52 = 739 Hz
  53 = 758 Hz
  54 = 777 Hz
  55 = 797 Hz
  56 = 817 Hz
  57 = 838 Hz
  58 = 859 Hz
  59 = 881 Hz
  60 = 904 Hz
  61 = 927 Hz
  62 = 950 Hz
  63 = 975 Hz
  64 = 999 Hz
  65 = 1.0 kHz
  66 = 1.1 kHz
  67 = 1.1 kHz
  68 = 1.1 kHz
  69 = 1.2 kHz
  70 = 1.2 kHz
  71 = 1.3 kHz
  72 = 1.3 kHz
  73 = 1.3 kHz
  74 = 1.4 kHz
  75 = 1.4 kHz
  76 = 1.5 kHz
  77 = 1.5 kHz
  78 = 1.6 kHz
  79 = 1.6 kHz
  80 = 1.7 kHz
  81 = 1.8 kHz
  82 = 1.8 kHz
  83 = 1.9 kHz
  84 = 1.9 kHz
  85 = 2.0 kHz
  86 = 2.1 kHz
  87 = 2.1 kHz
  88 = 2.2 kHz
  89 = 2.3 kHz
  90 = 2.4 kHz
  91 = 2.4 kHz
  92 = 2.5 kHz
  93 = 2.6 kHz
  94 = 2.7 kHz
  95 = 2.8 kHz
  96 = 2.9 kHz
  97 = 3.0 kHz
  98 = 3.1 kHz
  99 = 3.2 kHz
  100 = 3.3 kHz
  101 = 3.4 kHz
  102 = 3.5 kHz
  103 = 3.6 kHz
  104 = 3.7 kHz
  105 = 3.9 kHz
  106 = 4.0 kHz
  107 = 4.1 kHz
  108 = 4.3 kHz
  109 = 4.4 kHz
  110 = 4.6 kHz
  111 = 4.7 kHz
  112 = 4.9 kHz
  113 = 5.0 kHz
  114 = 5.2 kHz
  115 = 5.4 kHz
  116 = 5.6 kHz
  117 = 5.8 kHz
  118 = 5.9 kHz
  119 = 6.1 kHz
  120 = 6.3 kHz
  121 = 6.6 kHz
  122 = 6.8 kHz
  123 = 7.0 kHz
  124 = 7.2 kHz
  125 = 7.5 kHz
  126 = 7.7 kHz
  127 = 8.0 kHz


Morph Wheel:
0x12D (b0), 0x12E (b7-b1): 8-bit raw value

Morph After Touch:
0x12E (b0), 0x12F (b7-b1): 8-bit raw value

Morph Control Pedal:
0x12F (b0), 0x130 (b7-b1): 8-bit raw value
```

## NS3 Amp Sim Eq Drive
Offset in file: 0x130 (b0) and 0x131 (b7-2)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 0 to 10.0

Morph Wheel:
0x131 (b1-0) and 0x132 (b7-2): 8-bit raw value

Morph After Touch:
0x132 (b1-0) and 0x133 (b7-2): 8-bit raw value

Morph Control Pedal:
0x133 (b1-0) and 0x134 (b7-2): 8-bit raw value
```

## NS3 Compressor On
Offset in file: 0x139 (b5)

```
O = off, 1 = on

 
```

## NS3 Compressor Amount
Offset in file: 0x139 (b4-0) and 0x13A (b7-6)

```
7-bit value 0/127 = 0/10
```

## NS3 Compressor Fast
Offset in file: 0x13A (b5)

```
O = off, 1 = on

 
```

## NS3 Delay On
Offset in file: 0x119 (b3)

```
O = off, 1 = on

 
```

## NS3 Delay Source
Offset in file: 0x119 (b2-1)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS3 Delay Master Clock
Offset in file: 0x119 (b0)

```
O = off, 1 = on

 
```

## NS3 Delay Tempo
Offset in file:

```
tempo is using 14-bit

MSW 0x11A (b7-1): 7-bit value
0/127 = 1.5 s to 20 ms (same as MIDI #CC 94, see table below)

LSW 0x11A (b0) and 0x11B (b7-2): 7-bit value
LSW used for fine tempo value (only used with Tag Tempo)

When Tempo knob is not used, LSW is always 0, possible MSW value:
  0 = 1500,1.5 s 40 bpm (1/4)
  1 = 1420,1.42 s 42 bpm (1/4)
  2 = 1360,1.36 s 44 bpm (1/4)
  3 = 1300,1.30 s 46 bpm (1/4)
  4 = 1250,1.25 s 48 bpm (1/4)
  5 = 1200,1.20 s 50 bpm (1/4)
  6 = 1150,1.15 s 52 bpm (1/4)
  7 = 1100,1.11 s 54 bpm (1/4)
  8 = 1070,1.07 s 56 bpm (1/4)
  9 = 1030,1.03 s 58 bpm (1/4)
  10 = 1000,1.00 s 60 bpm (1/4)
  11 = 952,952 ms 63 bpm (1/4)
  12 = 909,909 ms 66 bpm (1/4)
  13 = 870,870 ms 69 bpm (1/4)
  14 = 833,833 ms 72 bpm (1/4)
  15 = 789,789 ms 76 bpm (1/4)
  16 = 750,750 ms 80 bpm (1/4)
  17 = 732,732 ms 82 bpm (1/4)
  18 = 714,714 ms 84 bpm (1/4)
  20 = 682,682 ms 88 bpm (1/4)
  21 = 667,667 ms 90 bpm (1/4)
  22 = 652,652 ms 92 bpm (1/4)
  19 = 698,698 ms 86 bpm (1/4)
  23 = 638,638 ms 94 bpm (1/4)
  24 = 625,625 ms 96 bpm (1/4)
  25 = 612,612 ms 98 bpm (1/4)
  26 = 600,600 ms 100 bpm (1/4)
  27 = 588,588 ms 102 bpm (1/4)
  28 = 577,577 ms 104 bpm (1/4)
  29 = 566,566 ms 106 bpm (1/4)
  30 = 556,556 ms 108 bpm (1/4)
  31 = 545,545 ms 110 bpm (1/4)
  32 = 541,541 ms 111 bpm (1/4)
  33 = 536,536 ms 112 bpm (1/4)
  34 = 531,531 ms 113 bpm (1/4)
  35 = 526,526 ms 114 bpm (1/4)
  36 = 522,522 ms 115 bpm (1/4)
  37 = 517,517 ms 116 bpm (1/4)
  38 = 513,513 ms 117 bpm (1/4)
  39 = 508,508 ms 118 bpm (1/4)
  40 = 504,504 ms 119 bpm (1/4)
  41 = 500,500 ms 120 bpm (1/4)
  42 = 496,496 ms 121 bpm (1/4)
  43 = 492,492 ms 122 bpm (1/4)
  44 = 488,488 ms 123 bpm (1/4)
  45 = 484,484 ms 124 bpm (1/4)
  46 = 480,480 ms 125 bpm (1/4)
  47 = 476,476 ms 126 bpm (1/4)
  48 = 472,472 ms 127 bpm (1/4)
  49 = 469,469 ms 128 bpm (1/4)
  50 = 465,465 ms 129 bpm (1/4)
  51 = 462,462 ms 130 bpm (1/4)
  52 = 458,458 ms 131 bpm (1/4)
  53 = 455,455 ms 132 bpm (1/4)
  54 = 451,451 ms 133 bpm (1/4)
  55 = 448,448 ms 134 bpm (1/4)
  56 = 444,444 ms 135 bpm (1/4)
  57 = 441,441 ms 136 bpm (1/4)
  58 = 438,438 ms 137 bpm (1/4)
  59 = 435,435 ms 138 bpm (1/4)
  60 = 432,432 ms 139 bpm (1/4)
  61 = 429,429 ms 140 bpm (1/4)
  62 = 423,423 ms 142 bpm (1/4)
  63 = 417,417 ms 144 bpm (1/4)
  64 = 411,411 ms 146 bpm (1/4)
  65 = 405,405 ms 148 bpm (1/4)
  66 = 400,400 ms 150 bpm (1/4)
  67 = 395,395 ms 152 bpm (1/4)
  68 = 390,390 ms 154 bpm (1/4)
  69 = 385,385 ms 156 bpm (1/4)
  70 = 380,380 ms 158 bpm (1/4)
  71 = 375,375 ms 80 bpm (1/8)
  72 = 366,366 ms 82 bpm (1/8)
  73 = 357,357 ms 84 bpm (1/8)
  74 = 349,349 ms 86 bpm (1/8)
  75 = 341,341 ms 88 bpm (1/8)
  76 = 333,333 ms 90 bpm (1/8)
  77 = 326,326 ms 92 bpm (1/8)
  78 = 319,319 ms 94 bpm (1/8)
  79 = 313,313 ms 96 bpm (1/8)
  80 = 306,306 ms 98 bpm (1/8)
  81 = 300,300 ms 100 bpm (1/8)
  82 = 288,288 ms 104 bpm (1/8)
  83 = 278,278 ms 108 bpm (1/8)
  84 = 268,268 ms 112 bpm (1/8)
  85 = 259,259 ms 116 bpm (1/8)
  86 = 250,250 ms 120 bpm (1/8)
  87 = 238,238 ms 126 bpm (1/8)
  88 = 227,227 ms 132 bpm (1/8)
  89 = 217,217 ms 138 bpm (1/8)
  90 = 197,197 ms 152 bpm (1/8)
  91 = 188,188 ms 80 bpm (1/16)
  92 = 179,179 ms 84 bpm (1/16)
  93 = 170,170 ms 88 bpm (1/16)
  94 = 163,163 ms 92 bpm (1/16)
  95 = 156,156 ms 96 bpm (1/16)
  96 = 150,150 ms 100 bpm (1/16)
  97 = 144,144 ms 104 bpm (1/16)
  98 = 139,139 ms 108 bpm (1/16)
  99 = 134,134 ms 112 bpm (1/16)
  100 = 129,129 ms 116 bpm (1/16)
  101 = 125,125 ms 120 bpm (1/16)
  102 = 119,119 ms 126 bpm (1/16)
  103 = 114,114 ms 132 bpm (1/16)
  104 = 109,109 ms 138 bpm (1/16)
  105 = 104,104 ms 144 bpm (1/16)
  106 = 99,99 ms 152 bpm (1/16)
  107 = 94,94 ms 160 bpm (1/16)
  108 = 83,83 ms 180 bpm (1/16)
  109 = 75,75 ms 200 bpm (1/16)
  110 = 68,68 ms 220 bpm (1/16)
  111 = 63,63 ms 240 bpm (1/16)
  112 = 58,58 ms 260 bpm (1/16)
  113 = 54,54 ms 280 bpm (1/16)
  114 = 50,50 ms 300 bpm (1/16)
  115 = 47,47 ms 320 bpm (1/16)
  116 = 44,44 ms 340 bpm (1/16)
  117 = 42,42 ms 360 bpm (1/16)
  118 = 39,39 ms 380 bpm (1/16)
  119 = 38,38 ms 400 bpm (1/16)
  120 = 34,34 ms 440 bpm (1/16)
  121 = 31,31 ms 480 bpm (1/16)
  122 = 30,30 ms 500 bpm (1/16)
  123 = 28,28 ms 540 bpm (1/16)
  124 = 26,26 ms 580 bpm (1/16)
  125 = 24,24 ms 620 bpm (1/16)
  126 = 22,22 ms 680 bpm (1/16)
  127 = 20,20 ms 750 bpm (1/16)


Note: When Tap Tempo is used, LSW is different from 0.
A linear interpolation is done to define the fine tempo value.

if 'Delay Master Clock' is enabled 7-bit value 0/127 = 1/2 to 1/64
  0 = 1/2
  1 = 1/2
  2 = 1/2
  3 = 1/2
  4 = 1/2
  5 = 1/2
  6 = 1/2
  7 = 1/2
  8 = 1/4D
  9 = 1/4D
  10 = 1/4D
  11 = 1/4D
  12 = 1/4D
  13 = 1/4D
  14 = 1/4D
  15 = 1/4D
  16 = 1/2T
  17 = 1/2T
  18 = 1/2T
  19 = 1/2T
  20 = 1/2T
  21 = 1/2T
  22 = 1/2T
  23 = 1/4S
  24 = 1/4S
  25 = 1/4S
  26 = 1/4S
  27 = 1/4S
  28 = 1/4S
  29 = 1/4S
  30 = 1/4S
  31 = 1/4
  32 = 1/4
  33 = 1/4
  34 = 1/4
  35 = 1/4
  36 = 1/4
  37 = 1/4
  38 = 1/8D
  39 = 1/8D
  40 = 1/8D
  41 = 1/8D
  42 = 1/8D
  43 = 1/8D
  44 = 1/8D
  45 = 1/8D
  46 = 1/4T
  47 = 1/4T
  48 = 1/4T
  49 = 1/4T
  50 = 1/4T
  51 = 1/4T
  52 = 1/4T
  53 = 1/8S
  54 = 1/8S
  55 = 1/8S
  56 = 1/8S
  57 = 1/8S
  58 = 1/8S
  59 = 1/8S
  60 = 1/8S
  61 = 1/8
  62 = 1/8
  63 = 1/8
  64 = 1/8
  65 = 1/8
  66 = 1/8
  67 = 1/8
  68 = 1/16D
  69 = 1/16D
  70 = 1/16D
  71 = 1/16D
  72 = 1/16D
  73 = 1/16D
  74 = 1/16D
  75 = 1/16D
  76 = 1/8T
  77 = 1/8T
  78 = 1/8T
  79 = 1/8T
  80 = 1/8T
  81 = 1/8T
  82 = 1/8T
  83 = 1/16S
  84 = 1/16S
  85 = 1/16S
  86 = 1/16S
  87 = 1/16S
  88 = 1/16S
  89 = 1/16S
  90 = 1/16S
  91 = 1/16
  92 = 1/16
  93 = 1/16
  94 = 1/16
  95 = 1/16
  96 = 1/16
  97 = 1/16
  98 = 1/16T
  99 = 1/16T
  100 = 1/16T
  101 = 1/16T
  102 = 1/16T
  103 = 1/16T
  104 = 1/16T
  105 = 1/16T
  106 = 1/32
  107 = 1/32
  108 = 1/32
  109 = 1/32
  110 = 1/32
  111 = 1/32
  112 = 1/32
  113 = 1/32T
  114 = 1/32T
  115 = 1/32T
  116 = 1/32T
  117 = 1/32T
  118 = 1/32T
  119 = 1/32T
  120 = 1/32T
  121 = 1/64
  122 = 1/64
  123 = 1/64
  124 = 1/64
  125 = 1/64
  126 = 1/64
  127 = 1/64


Morph Wheel:
0x11B (b1-0), 0x11C (b7-0), and 0x11D (b7-3): 15-bit raw value

Morph After Touch:
0x11D (b2-0), 0x11E (b7-0), and 0x11F (b7-4): 15-bit raw value

Morph Control Pedal:
0x11F (b3-0), 0x120 (b7-0), and 0x121 (b7-5): 15-bit raw value
```

## NS3 Delay Ping Pong
Offset in file: 0x125 (b5)

```
O = off, 1 = on

 
```

## NS3 Delay Filter
Offset in file: 0x125 (b4-3)

```
  0 = Bypass
  1 = LP
  2 = HP
  3 = BP


 
```

## NS3 Delay Analog Mode
Offset in file: 0x129 (b3)

```
O = off, 1 = on

 
```

## NS3 Delay Feedback
Offset in file: 0x125 (b2-0) and 0x126 (b7-4)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 0/10

Morph Wheel:
0x126 (b3-b0) and 0x127 (b7-4): 8-bit raw value

Morph After Touch:
0x127 (b3-b0) and 0x128 (b7-4): 8-bit raw value

Morph Control Pedal:
0x128 (b3-b0) and 0x129 (b7-4): 8-bit raw value
```

## NS3 Delay Mix
Offset in file: 0x121 (b4-0) and 0x122 (b7-6)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 0/10

Morph Wheel:
0x122 (b5-b0) and 0x123 (b7-6): 8-bit raw value

Morph After Touch:
0x123 (b5-b0) and 0x124 (b7-6): 8-bit raw value

Morph Control Pedal:
0x124 (b5-b0) and 0x125 (b7-6): 8-bit raw value
```

## NS3 Effect 1 On
Offset in file: 0x10B (b4)

```
O = off, 1 = on

 
```

## NS3 Effect 1 Source
Offset in file: 0x10B (b3-2)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS3 Effect 1 Type
Offset in file: 0x10B (b1-0) and 0x10C (b7)

```
0 = A-Pan
1 = Trem
2 = RM
3 = WA-WA
4 = A-WA1
5 = A-WA2

 
```

## NS3 Effect 1 Amount
Offset in file: 0x110 (b6-0)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 0/10

Morph Wheel:
0x111 (b7-b0): 8-bit raw value

Morph After Touch:
0x112 (b7-b0): 8-bit raw value

Morph Control Pedal:
0x113 (b7-b0): 8-bit raw value
```

## NS3 Effect 1 Rate
Offset in file: 0x10C (b5-0) and 0x10D (b7)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 0/10

if 'Effect 1 Master Clock' is enabled 7-bit value 0/127 = 4/1 to 1/32
  0 = 4/1
  1 = 4/1
  2 = 4/1
  3 = 4/1
  4 = 4/1
  5 = 4/1
  6 = 4/1
  7 = 4/1
  8 = 4/1
  9 = 4/1T
  10 = 4/1T
  11 = 4/1T
  12 = 4/1T
  13 = 4/1T
  14 = 4/1T
  15 = 4/1T
  16 = 4/1T
  17 = 4/1T
  18 = 2/1
  19 = 2/1
  20 = 2/1
  21 = 2/1
  22 = 2/1
  23 = 2/1
  24 = 2/1
  25 = 2/1
  26 = 2/1T
  27 = 2/1T
  28 = 2/1T
  29 = 2/1T
  30 = 2/1T
  31 = 2/1T
  32 = 2/1T
  33 = 2/1T
  34 = 2/1T
  35 = 1/1
  36 = 1/1
  37 = 1/1
  38 = 1/1
  39 = 1/1
  40 = 1/1
  41 = 1/1
  42 = 1/1
  43 = 1/1T
  44 = 1/1T
  45 = 1/1T
  46 = 1/1T
  47 = 1/1T
  48 = 1/1T
  49 = 1/1T
  50 = 1/1T
  51 = 1/1T
  52 = 1/2
  53 = 1/2
  54 = 1/2
  55 = 1/2
  56 = 1/2
  57 = 1/2
  58 = 1/2
  59 = 1/2
  60 = 1/2T
  61 = 1/2T
  62 = 1/2T
  63 = 1/2T
  64 = 1/2T
  65 = 1/2T
  66 = 1/2T
  67 = 1/2T
  68 = 1/2T
  69 = 1/4
  70 = 1/4
  71 = 1/4
  72 = 1/4
  73 = 1/4
  74 = 1/4
  75 = 1/4
  76 = 1/4
  77 = 1/4T
  78 = 1/4T
  79 = 1/4T
  80 = 1/4T
  81 = 1/4T
  82 = 1/4T
  83 = 1/4T
  84 = 1/4T
  85 = 1/4T
  86 = 1/8
  87 = 1/8
  88 = 1/8
  89 = 1/8
  90 = 1/8
  91 = 1/8
  92 = 1/8
  93 = 1/8
  94 = 1/8T
  95 = 1/8T
  96 = 1/8T
  97 = 1/8T
  98 = 1/8T
  99 = 1/8T
  100 = 1/8T
  101 = 1/8T
  102 = 1/8T
  103 = 1/16
  104 = 1/16
  105 = 1/16
  106 = 1/16
  107 = 1/16
  108 = 1/16
  109 = 1/16
  110 = 1/16
  111 = 1/16T
  112 = 1/16T
  113 = 1/16T
  114 = 1/16T
  115 = 1/16T
  116 = 1/16T
  117 = 1/16T
  118 = 1/16T
  119 = 1/16T
  120 = 1/32
  121 = 1/32
  122 = 1/32
  123 = 1/32
  124 = 1/32
  125 = 1/32
  126 = 1/32
  127 = 1/32


Morph Wheel:
0x10D (b6-b0) and 0x10E (b7): 8-bit raw value

Morph After Touch:
0x10E (b6-b0) and 0x10F (b7): 8-bit raw value

Morph Control Pedal:
0x10F (b6-b0) and 0x110 (b7): 8-bit raw value
```

## NS3 Effect 1 Master Clock
Offset in file: 0x10C (b6)

```
O = off, 1 = on

 
```

## NS3 Effect 2 On
Offset in file: 0x114 (b7)

```
O = off, 1 = on

 
```

## NS3 Effect 2 Source
Offset in file: 0x114 (b6-5)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS3 Effect 2 Type
Offset in file: 0x114 (b4-2)

```
0 = PHAS1
1 = PHAS2
2 = FLANG
3 = VIBE
4 = CHOR1
5 = CHOR2
```

## NS3 Effect 2 Amount
Offset in file: 0x115 (b2-0) and 0x116 (b7-4)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 0/10

Morph Wheel:
0x116 (b3-b0) and 0x117 (b7-4): 8-bit raw value

Morph After Touch:
0x117 (b3-b0) and 0x118 (b7-4): 8-bit raw value

Morph Control Pedal:
0x118 (b3-b0) and 0x119 (b7-4): 8-bit raw value
```

## NS3 Effect 2 Rate
Offset in file: 0x114 (b1-0) &nd 0x115 (b7-3)

```
7-bit value 0/127 = 0/10
```

## NS3 Reverb On
Offset in file: 0x114 (b7)

```
O = off, 1 = on

 
```

## NS3 Reverb Type
Offset in file: 0x134 (b0) and 0x135 (b7-6)

```
0 = Room 1
1 = Room 2
2 = Stage 1
3 = Stage 2
4 = Hall 1
5 = Hall 2
```

## NS3 Reverb Amount
Offset in file: 0x135 (b4-0) and 0x136 (b7-6)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
7-bit value 0/127 = 0/10

Morph Wheel:
0x136 (b5-b0) and 0x137 (b7-6): 8-bit raw value

Morph After Touch:
0x137 (b5-b0) and 0x138 (b7-6): 8-bit raw value

Morph Control Pedal:
0x138 (b5-b0) and 0x139 (b7-6): 8-bit raw value
```

## NS3 Reverb Bright
Offset in file: 0x135 (b5)

```
O = off, 1 = on

 
```

## NS3 Rotary Speaker On
Offset in file: 0x10b (bit7)

```
O = off, 1 = on
```

## NS3 Rotary Speaker Source
Offset in file: 0x10b (b6 and b5)

```
0 = Organ, 1, Piano, 2 = Synth
```

## NS3 Rotary Speaker Drive
Offset in file: 0x39 (b2 to b0) and 0x3a (b7 to b4)

```
7-bit value 0/127 converted to 0/10

Note: Same value is used for both panel A & B
```

## NS3 Rotary Speaker Stop Mode
Offset in file: 0x35 (bit7)

```
0 = enabled (Speed Stop), 1 = disabled (Speed Slow)

Note: Same value is used for both panel A & B
```

## NS3 Rotary Speaker Speed
Offset in file: 0x34 (bit0)

```
0 = Slow/Stop, 1 = Fast

Morph Wheel:         0x35 (b6-4)
Morph After Touch:   0x35 (b3-1)
Morph Control Pedal: 0x35 (b0) and 0x36 (b7-6)

011 = 0x03 = morph off
100 = 0x04 = morph on

Note: Same value is used for both panel A & B
```

## NS3 Organ On
Offset in file: 0xB6 (b7)

```
O = off, 1 = on
```

## NS3 Organ Kb Zone
Offset in file: 0xB6 (b6-3)

```
0 = "o---"
1 = "-o--"
2 = "--o-"
3 = "---o"
4 = "oo--"
5 = "-oo-"
6 = "--oo"
7 = "ooo-"
8 = "-ooo"
9 = "oooo"
```

## NS3 Organ Volume
Offset in file:

```
Volume:
0xB6 (b2-b0), 0xB7 (b7-4): 7-bit = 0/127 range
  0 = Off
  1 = -84.2 dB
  2 = -72.1 dB
  3 = -65.1 dB
  4 = -60.1 dB
  5 = -56.2 dB
  6 = -53.0 dB
  7 = -50.3 dB
  8 = -48.0 dB
  9 = -46.0 dB
  10 = -44.2 dB
  11 = -42.5 dB
  12 = -41.0 dB
  13 = -39.6 dB
  14 = -38.3 dB
  15 = -37.1 dB
  16 = -36.0 dB
  17 = -34.9 dB
  18 = -33.9 dB
  19 = -33.0 dB
  20 = -32.1 dB
  21 = -31.1 dB
  22 = -30.5 dB
  23 = -29.7 dB
  24 = -28.9 dB
  25 = -28.2 dB
  26 = -27.6 dB
  27 = -26.9 dB
  28 = -26.3 dB
  29 = -25.7 dB
  30 = -25.1 dB
  31 = -24.5 dB
  32 = -23.9 dB
  33 = -23.4 dB
  34 = -22.9 dB
  35 = -22.4 dB
  36 = -21.9 dB
  37 = -21.4 dB
  38 = -21.0 dB
  39 = -20.5 dB
  40 = -20.1 dB
  41 = -19.6 dB
  42 = -19.2 dB
  43 = -18.8 dB
  44 = -18.4 dB
  45 = -18.0 dB
  46 = -17.6 dB
  47 = -17.3 dB
  48 = -16.9 dB
  49 = -16.5 dB
  50 = -16.2 dB
  51 = -15.8 dB
  52 = -15.5 dB
  53 = -15.2 dB
  54 = -14.9 dB
  55 = -14.5 dB
  56 = -14.2 dB
  57 = -13.9 dB
  58 = -13.6 dB
  59 = -13.3 dB
  60 = -13.0 dB
  61 = -12.7 dB
  62 = -12.5 dB
  63 = -12.2 dB
  64 = -11.9 dB
  65 = -11.6 dB
  66 = -11.4 dB
  67 = -11.1 dB
  68 = -10.9 dB
  69 = -10.6 dB
  70 = -10.3 dB
  71 = -10.1 dB
  72 = -9.9 dB
  73 = -9.6 dB
  74 = -9.4 dB
  75 = -9.1 dB
  76 = -8.9 dB
  77 = -8.7 dB
  78 = -8.5 dB
  79 = -8.2 dB
  80 = -8.0 dB
  81 = -7.8 dB
  82 = -7.6 dB
  83 = -7.4 dB
  84 = -7.2 dB
  85 = -7.0 dB
  86 = -6.8 dB
  87 = -6.6 dB
  88 = -6.4 dB
  89 = -6.2 dB
  90 = -6.0 dB
  91 = -5.8 dB
  92 = -5.6 dB
  93 = -5.4 dB
  94 = -5.2 dB
  95 = -5.0 dB
  96 = -4.9 dB
  97 = -4.7 dB
  98 = -4.5 dB
  99 = -4.3 dB
  100 = -4.2 dB
  101 = -4.0 dB
  102 = -3.8 dB
  103 = -3.6 dB
  104 = -3.5 dB
  105 = -3.3 dB
  106 = -3.1 dB
  107 = -3.0 dB
  108 = -2.8 dB
  109 = -2.7 dB
  110 = -2.5 dB
  111 = -2.3 dB
  112 = -2.2 dB
  113 = -2.0 dB
  114 = -1.9 dB
  115 = -1.7 dB
  116 = -1.6 dB
  117 = -1.4 dB
  118 = -1.3 dB
  119 = -1.1 dB
  120 = -1.0 dB
  121 = -0.8 dB
  122 = -0.7 dB
  123 = -0.6 dB
  124 = -0.4 dB
  125 = -0.3 dB
  126 = -0.1 dB
  127 = 0.0 dB


Morph Wheel:
0xB7 (b3-b0), 0xB8 (b7-b4): 8-bit raw value

Morph After Touch:
0xB8 (b3-b0), 0xB9 (b7-b4): 8-bit raw value

Morph Control Pedal:
0xB9 (b3-b0), 0xBA (b7-b4): 8-bit raw value

Morph Algorithm:
$d = $v == 127 ? 'none' : ($v + $o - 127) & 127;
where
$v is the 8-bit morph value
$o is the original 'From' value
$d is the final 'To' Morph value
```

## NS3 Organ Octave Shift
Offset in file: 0xBA (b3-0)

```
Octave Shift = value - 6
```

## NS3 Organ Pitch Stick
Offset in file: 0x34 (b4)

```
O = off, 1 = on

Note: Same value is used for both panel A & B
```

## NS3 Organ Sustain Pedal
Offset in file: 0xBB (b7)

```
O = off, 1 = on
```

## NS3 Organ Type
Offset in file: 0xBB (b6-4)

```
0 = B3
1 = Vox
2 = Farfisa
3 = Pipe1
4 = Pipe2
```

## NS3 Organ Drawbars Preset 1
Offset in file: 0xBE

```
Drawbar value range is 0/8.
For Vox Organ each value is converted to 0/1: 0 (if value < 4) else 1
For Farfisa Organ drawbar 8 is not used and forced to 0

Drawbar 1: 0xBE (b7-4)
           Morph Wheel:         0xBE (b3-0) and 0xBF (b7)
           Morph After Touch:   0xBF (b6-2)
           Morph Control Pedal: 0xBF (b1-0) and 0xC0 (b7-5)

Drawbar 2: 0xC0 (b4-1)
           Morph Wheel:         0xC0 (b0) and 0xC1 (b7-4)
           Morph After Touch:   0xC1 (b3-0) and 0xC2 (b7)
           Morph Control Pedal: 0xC2 (b6-2)

Drawbar 3: 0xC2 (b1-0) and 0xC3 (b7-6)
           Morph Wheel:         0xC3 (b5-1)
           Morph After Touch:   0xC3 (b0) and 0xC4 (b7-4)
           Morph Control Pedal: 0xC4 (b3-0) and 0xC5 (b7)

Drawbar 4: 0xC5 (b6-3)
           Morph Wheel:         0xC5 (b2-0) and 0xC6 (b7-6)
           Morph After Touch:   0xC6 (b5-b1)
           Morph Control Pedal: 0xC6 (b0) and 0xC7 (b7-4)

Drawbar 5: 0xC7 (b3-0)
           Morph Wheel:         0xC8 (b7-3)
           Morph After Touch:   0xC8 (b2-0) and 0xC9 (b7-6)
           Morph Control Pedal: 0xC9 (b5-1)

Drawbar 6: 0xC9 (b0) and 0xCA (b7-5)
           Morph Wheel:         0xCA (b4-0)
           Morph After Touch:   0xCB (b7-3)
           Morph Control Pedal: 0xCB (b2-0) and 0xCC (b7-6)

Drawbar 7: 0xCC (b5-2)
           Morph Wheel:         0xCC (b1-0) and 0xCD (b7-5)
           Morph After Touch:   0xCD (b4-0)
           Morph Control Pedal: 0xCE (b7-3)

Drawbar 8: 0xCE (b2-0) and 0xCF (b7)
           Morph Wheel:         0xCF (b6-2)
           Morph After Touch:   0xCF (b1-0) and 0xD0 (b7-5)
           Morph Control Pedal: 0xD0 (b4-0)

Drawbar 9: 0xD1 (b7-4)
           Morph Wheel:         0xD1 (b3-0) and 0xBF (b7)
           Morph After Touch:   0xD2 (b6-2)
           Morph Control Pedal: 0xD2 (b1-0) and 0xD3 (b7-5)

Morph Algorithm:
$d = $v == 8 ? '-' : $v == 16 ? 8 : abs($v + $o - 8);
where
$v is the 5-bit morph value
$o is the original 'From' value
$d is the final 'To' Morph value
```

## NS3 Organ Vibrato On
Offset in file: 0xD3 (b4)

```
O = off, 1 = on
```

## NS3 Organ Vibrato Mode
Offset in file: 0x34 (b3-1)

```
0 = V1
1 = C1
2 = V2
3 = C2
4 = V3
5 = C3

if Organ type is Pipe1 or Pipe2, only C1 is allowed
if Organ type is Farfisa, mode C1/V3 are not available
if Organ type is Vox, mode C1/C2/C3 are not available
if Organ type is B3, all mode are available
```

## NS3 Organ Percussion On
Offset in file: 0xD3 (b3)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Percussion Volume Soft
Offset in file: 0xD3 (b0)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Percussion Decay Fast
Offset in file: 0xD3 (b1)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Percussion Harmonic Third
Offset in file: 0xD3 (b2)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Preset 2 On
Offset in file: 0xBB (b2)

```
O = off, 1 = on
```

## NS3 Organ Preset 2 Drawbars
Offset in file: 0xD9

**See**: [Organ Preset 1 Drawbars](#ns3-organ-drawbars-preset-1) for detailed explanation.  
```
Drawbar value range is 0/8.
For Vox Organ each value is converted to 0/1: 0 (if value < 4) else 1
For Farfisa Organ drawbar 8 is not used and forced to 0

Drawbar 1: 0xD9 (b7-4)
           Morph Wheel:         0xD9 (b3-0) and 0xDA (b7)
           Morph After Touch:   0xDA (b6-2)
           Morph Control Pedal: 0xDA (b1-0) and 0xDB (b7-5)

Drawbar 2: 0xDB (b4-1)
           Morph Wheel:         0xDB (b0) and 0xDC (b7-4)
           Morph After Touch:   0xDC (b3-0) and 0xDD (b7)
           Morph Control Pedal: 0xDD (b6-2)

Drawbar 3: 0xDD (b1-0) and 0xDE (b7-6)
           Morph Wheel:         0xDE (b5-1)
           Morph After Touch:   0xDE (b0) and 0xDF (b7-4)
           Morph Control Pedal: 0xDF (b3-0) and 0xE0 (b7)

Drawbar 4: 0xE0 (b6-3)
           Morph Wheel:         0xE0 (b2-0) and 0xE1 (b7-6)
           Morph After Touch:   0xE1 (b5-b1)
           Morph Control Pedal: 0xE1 (b0) and 0xE2 (b7-4)

Drawbar 5: 0xE2 (b3-0)
           Morph Wheel:         0xE3 (b7-3)
           Morph After Touch:   0xE3 (b2-0) and 0xE4 (b7-6)
           Morph Control Pedal: 0xE4 (b5-1)

Drawbar 6: 0xE4 (b0) and 0xE5 (b7-5)
           Morph Wheel:         0xE5 (b4-0)
           Morph After Touch:   0xE6 (b7-3)
           Morph Control Pedal: 0xE6 (b2-0) and 0xE7 (b7-6)

Drawbar 7: 0xE7 (b5-2)
           Morph Wheel:         0xE7 (b1-0) and 0xE8 (b7-5)
           Morph After Touch:   0xE8 (b4-0)
           Morph Control Pedal: 0xE9 (b7-3)

Drawbar 8: 0xE9 (b2-0) and 0xEA (b7)
           Morph Wheel:         0xEA (b6-2)
           Morph After Touch:   0xEA (b1-0) and 0xEB (b7-5)
           Morph Control Pedal: 0xEB (b4-0)

Drawbar 9: 0xEC (b7-4)
           Morph Wheel:         0xEC (b3-0) and 0xED (b7)
           Morph After Touch:   0xED (b6-2)
           Morph Control Pedal: 0xED (b1-0) and 0xEE (b7-5)
```

## NS3 Organ Preset 2 Vibrato On
Offset in file: 0xEE (b4)

```
O = off, 1 = on
```

## NS3 Organ Preset 2 Percussion On
Offset in file: 0xEE (b3)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Preset 2 Percussion Volume Soft
Offset in file: 0xEE (b0)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Preset 2 Percussion Decay Fast
Offset in file: 0xEE (b1)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Preset 2 Percussion Harmonic Third
Offset in file: 0xEE (b2)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Live Mode
Offset in file: 0xBB (b3)
(NS3 Compact model only)

```
O = off, 1 = on
```

## NS3 Panel Enabled And Selection
Offset in file 0x31

```
Enabled (b6-5):
0 = A only
1 = B only
2 = A & B

Selected Panel (b7):
A = 0, B = 1 (not used here)

Note: if Dual Keyboard is On, both panel are enabled.
```

## NS3 Program Output Main
Offset in file 0x144 (b7-5)

```
  0 = 1-2
  1 = 3-4
  2 = 3
  3 = 4
  4 = 1-4

```

## NS3 Program Output Sub Source
Offset in file 0x144 (b4-3)

```
  0 = Off
  1 = Organ
  2 = Piano
  3 = Synth

```

## NS3 Program Output Sub Destination
Offset in file 0x144 (b2-1)

```
  0 = 1-2
  1 = 3-4
  2 = 3
  3 = 4
  4 = 1-4

```

## NS3 Clavinet Model
Offset in file: 0x49 (b5-4)

```
Clavinet D6 5.0.npno is a multi-file with all 4 pick-up variations.
This setting defines the pick-up variation.
0 = CA
1 = CB
2 = DA
3 = DB
```

## NS3 Piano On
Offset in file: 0x43 (b7)

```
O = off, 1 = on
```

## NS3 Piano Kb Zone
Offset in file: 0x43 (b6-3)

**See**: [Organ Kb Zone](#ns3-organ-kb-zone) for detailed explanation.  

## NS3 Piano Volume
Offset in file: 0x43 (b2-0), 0x44 (b7-4)

**See**: [Organ Volume](#ns3-organ-volume) for detailed explanation.  
```
Morph Wheel:
0x44 (b3-b0), 0x45 (b7-b4): 8-bit raw value

Morph After Touch:
0x45 (b3-b0), 0x46 (b7-b4): 8-bit raw value

Morph Control Pedal:
0x46 (b3-b0), 0x47 (b7-b4): 8-bit raw value
```

## NS3 Piano Octave Shift
Offset in file: 0x47 (b3-0)

```
Octave Shift = value - 6
```

## NS3 Piano Pitch Stick
Offset in file: 0x48 (b7)

```
O = off, 1 = on
```

## NS3 Piano Sustain Pedal
Offset in file: 0x48 (b6)

```
O = off, 1 = on
```

## NS3 Piano Type
Offset in file: 0x48 (b5-3)

```
0 = Grand
1 = Upright
2 = Electric
3 = Clav
4 = Digital
5 = Misc
```

## NS3 Piano Model
Offset in file:  0x48 (b2-0) and 0x49 (b7-6)

```
0x00 0x00: model 1
0x00 0x01: model 2
.. and so on
0x02 0x01: model 10
```

## NS3 Piano Name
Offset in file: 0x49 (b3-0) to 0x4D (b7-3)

```
32-bit piano sample hash code
```

## NS3 Piano Timbre
Offset in file: 0x4E (b5-3)

```
Grand, Upright, Digital, Misc Piano, and Harpsichord:
0 = None
1 = Soft
2 = Mid
3 = Bright

Electric Piano
0 = None
1 = Soft
2 = Mid
3 = Bright
4 = Dyno1
5 = Dyno2

Clavinet
0 = None
1 = Soft
2 = Treble
3 = Soft+Treble
4 = Brilliant
5 = Soft+Brill
6 = Treble+Brill
7 = Soft+Trb+Brill
```

## NS3 Piano KB Touch
Offset in file: 0x4D (b0) and 0x4E (b7)

```
0 = Normal
1 = KB Touch 1
2 = Touch 2
3 = Touch 3
```

## NS3 Piano Layer Detune
Offset in file: 0x34 (b6-5)

```
0 =  Off
1 =  1
2 =  2
3 =  3

Note: Same value is used for both panel A & B
```

## NS3 Piano Soft Release
Offset in file: 0x4D (b4)

```
O = off, 1 = on

Not available on Clavinet and Digital Piano
```

## NS3 Piano Pedal Noise
Offset in file: 0x4D (b2)

```
O = off, 1 = on

Only on Grand, Upright, and Electric piano.
```

## NS3 Piano String Resonance
Offset in file: 0x4D (b3)

```
O = off, 1 = on

Only on Grand and Upright piano.
```

## NS3 File Version
Offset in file: 0x14 and 0x15

**See**: [Nord Stage 3 - Update History](https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history)  
```
16-bit integer value in Little Endian format, ex 304 = v3.04

OS version vs Program version
------------------------------------
OS version          Program   File changes
                    version
------------------  --------  -----------------------
v0.92 (2017-06-15)  v3.00
v0.94 (2017-06-20)  v3.00
v0.96 (2017-06-22)  v3.00
v1.00 (2017-07-07)  v3.00
v1.04 (2017-07-22)  v3.00
v1.12 (2017-09-20)  v3.00
v1.14 (2017-09-26)  v3.00
v1.22 (2017-10-18)  v3.00
v1.24 (2017-11-01)  v3.00
v1.26 (2017-11-16)  v3.00
v1.28 (2017-12-07)  v3.00
v1.32 (2017-12-15)  v3.00
v1.36 (2018-02-07)  v3.01     Enhanced Delay Tap Tempo
v1.40 (2018-04-10)  v3.01     Nord Sound Manager v7.28 (2018-02-15) or later is required
v1.42 (2018-08-13)  v3.01
v1.44 (2018-08-23)  v3.01
v1.46 (2018-08-24)  v3.01
v1.50 (2018-10-22)  v3.02     Enhanced Panel setting for Dual KB
v1.52 (2018-10-26)  v3.02
v1.60 (2018-11-22)  v3.02
v2.00 (2018-12-18)  v3.03     New Piano Equalizer settings, Added Pitch Bend range options for Synth
                              Nord Sound Manager v7.42 (2019-02-12) or later is required
v2.02 (2019-01-07)  v3.03
v2.10 (2019-02-27)  v3.04     A separate On/Off setting for pedal Volume was added to the Extern menu.
v2.12 (2019-04-23)  v3.04
v2.20 (2019-05-28)  v3.04
v2.22 (2019-06-27)  v3.04
v2.24 (2020-01-08)  v3.04
v2.50 (2020-01-13)  v3.04
v2.52 (2020-01-23)  v3.04
v2.54 (2020-03-04)  v3.04
v2.60 (2021-09-23)  v3.04
v2.62 (2021-11-16)  v3.04
```

## NS3 File Format
Offset in file: 0x04

```
0 = header type 0 - legacy format no CRC (Byte 0x18 to 0x2B are missing)
1 = header type 1 - new format with additional bytes 0x18 to 0x2B (20 bytes).

All files exported with Nord Sound Manager v7.40 (2018-12-18) or later are in type 1.
```

## NS3 Transpose
Offset in file: 0x38 (b7-3)

```
Enabled: 0x38 (b7)
Value: 0x38 (b6-3)

  0 = -6 semi
  1 = -5 semi
  2 = -4 semi
  3 = -3 semi
  4 = -2 semi
  5 = -1 semi
  6 = 0 semi
  7 = +1 semi
  8 = +2 semi
  9 = +3 semi
  10 = +4 semi
  11 = +5 semi
  12 = +6 semi

```

## NS3 Split
Offset in file: 0x31 (b4 to b0) to 0x34 (b7 only)

```
|  0X31     |    0x32   |     0x33  |    0x34   | description
| xxx4 3210 | 7654 3210 | 7654 3210 | 7xxx xxxx |
| xxx4 xxxx | xxxx xxxx | xxxx xxxx | xxxx xxxx | split off/on
| xxxx 321x | xxxx xxxx | xxxx xxxx | xxxx xxxx | low off/on, mid off/on, high off/on
| xxxx xxx0 | 765x xxxx | xxxx xxxx | xxxx xxxx | low note (0 = F2, 1 = C3, 9 = C7)
| xxxx xxxx | xxx4 321x | xxxx xxxx | xxxx xxxx | mid note
| xxxx xxxx | xxxx xxx0 | 765x xxxx | xxxx xxxx | high note
| xxxx xxxx | xxxx xxxx | xxx5 4xxx | xxxx xxxx | low width (0 = 1, 1 = 6, 2 = 12)
| xxxx xxxx | xxxx xxxx | xxxx x32x | xxxx xxxx | mid width
| xxxx xxxx | xxxx xxxx | xxxx xxx0 | 7xxx xxxx | high width

Test1:  06 07 20 01 : Split Off

Test2:  16 07 20 01 : Width Off 1   1
                      Note  --  C4  C7

Test3:  1E 07 20 01 : Width 1   1   1
                      Note  F2  C4  C7

Test4:  1E 07 28 01 : Width 6   1   1
                      Note  F2  C4  C7

Test5:  1E 07 30 01 : Width 12  1   1
                      Note  F2  C4  C7

Test6:  18 07 30 01 : Width 12  Off Off
                      Note  F2  --  --

Test7:  18 27 30 01 : Width 12  Off Off
                      Note  C3  --  --

Test8:  18 47 30 01 : Width 12  Off Off
                      Note  F3  --  --

Test9:  18 67 30 01 : Width 12  Off Off
                      Note  C4  --  --

Test10: 18 87 30 01 : Width 12  Off Off
                      Note  F4  --  --

Test11: 18 A7 30 01 : Width 12  Off Off
                      Note  C5  --  --

Test12: 18 C7 30 01 : Width 12  Off Off
                      Note  F5  --  --

Test13: 18 E7 30 01 : Width 12  Off Off
                      Note  C6  --  --

Test14: 19 07 30 01 : Width 12  Off Off
                      Note  F6  --  --

Test15: 19 27 30 01 : Width 12  Off Off
                      Note  C7  --  --

Test16: 1B 27 30 01 : Width 12  Off 1     ! From test 15 to 16 only High Width was changed manually !
                      Note  F6  --  C7    ! Note Low in file is C7 but fixed on display to F6...

Test17: 1B 27 30 81 : Width 12  Off 6
                      Note  F6  --  C7

Test18: 1B 27 31 01 : Width 12  Off 12
                      Note  F6  --  C7

Test19: 1C 23 30 01 : Width 12  1   Off
                      Note  C3  F3  --   ! Note Mid in file is C3 but fixed on display to F3 !
```

## NS3 Master Clock Rate
Offset in file: 0x38 (b2-0) 0x39 (b7-3)

```
bpm = value + 30
```

## NS3 Dual Keyboard
Offset in file 0x3A (b3)

```
0 = Off
1 = On

Note: if Dual Keyboard is On, both panel are enabled.
```

## NS3 Dual Keyboard Style
Offset in file 0x3A (b1-0)

```
0 = Panel
1 = Organ
2 = Piano
3 = Synth
```

## NS3 Program Category
Offset in file: 0x10

```
  0 = Acoustic
  1 = Bass
  2 = Wind
  4 = Fantasy
  5 = FX
  6 = Lead
  7 = Organ
  8 = Pad
  10 = Pluck
  11 = String
  12 = Synth
  13 = Vocal
  14 = User
  17 = None
  21 = Grand
  22 = Upright
  23 = EPiano1
  24 = EPiano2
  27 = Clavinet
  28 = Harpsi
  30 = Arpeggio
  255 = Undefined

```

## NS3 Synth Filter Type
Offset in file: 0x98 (b4-2)

```
0 = LP12
1 = LP24
2 = Mini Moog
3 = LP+HP
4 = BP24
5 = HP24
```

## NS3 Synth Filter Kb Track
Offset in file: 0xA5 (b5-4)

```
0 = Off
1 = 1/3
2 = 2/3
3 = 1
```

## NS3 Synth Filter Drive
Offset in file: 0xA5 (b3-2)

```
0 = Off
1 = 1
2 = 2
3 = 3
```

## NS3 Synth Filter LFO Amount
Offset in file: 0xA0 (b3-0) and 0xA1 (b7-5)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
0/127 value = 0 / 10

Morph Wheel:
0xA1 (b4-b0), 0xA2 (b7-b5): 8-bit raw value

Morph After Touch:
0xA2 (b4-b0), 0xA3 (b7-b5): 8-bit raw value

Morph Control Pedal:
0xA3 (b4-b0), 0xA4 (b7-b5): 8-bit raw value
```

## NS3 Synth Filter Vel Mod Env Amount
Offset in file: 0xA4 (b4-0) and 0xA5 (b7-6)

```
Filter modulation (vel/env mod) is using this single 7-bit value to define two settings with a single knob.
Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
0   = 10.0 (100% left value) 'Vel Amount'
60  = 0.0 for both values
120 = 10.0 (100% right value) 'Mod Env Amount'
```

## NS3 Synth Filter Freq
Offset in file: 0x98 (b1-0) and 0x99 (b7-3)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
0/127 value = 14 Hz / 21 kHz
  0 = 14 Hz
  1 = 15 Hz
  2 = 15 Hz
  3 = 16 Hz
  4 = 17 Hz
  5 = 18 Hz
  6 = 19 Hz
  7 = 21 Hz
  8 = 22 Hz
  9 = 23 Hz
  10 = 24 Hz
  11 = 26 Hz
  12 = 28 Hz
  13 = 29 Hz
  14 = 31 Hz
  15 = 33 Hz
  16 = 35 Hz
  17 = 37 Hz
  18 = 39 Hz
  19 = 41 Hz
  20 = 44 Hz
  21 = 46 Hz
  22 = 49 Hz
  23 = 52 Hz
  24 = 55 Hz
  25 = 58 Hz
  26 = 62 Hz
  27 = 65 Hz
  28 = 69 Hz
  29 = 73 Hz
  30 = 78 Hz
  31 = 82 Hz
  32 = 87 Hz
  33 = 92 Hz
  34 = 98 Hz
  35 = 104 Hz
  36 = 110 Hz
  37 = 117 Hz
  38 = 123 Hz
  39 = 131 Hz
  40 = 139 Hz
  41 = 147 Hz
  42 = 156 Hz
  43 = 165 Hz
  44 = 175 Hz
  45 = 185 Hz
  46 = 196 Hz
  47 = 208 Hz
  48 = 220 Hz
  49 = 233 Hz
  50 = 247 Hz
  51 = 262 Hz
  52 = 277 Hz
  53 = 294 Hz
  54 = 311 Hz
  55 = 330 Hz
  56 = 349 Hz
  57 = 370 Hz
  58 = 392 Hz
  59 = 415 Hz
  60 = 440 Hz
  61 = 466 Hz
  62 = 494 Hz
  63 = 523 Hz
  64 = 554 Hz
  65 = 587 Hz
  66 = 622 Hz
  67 = 659 Hz
  68 = 698 Hz
  69 = 740 Hz
  70 = 784 Hz
  71 = 831 Hz
  72 = 880 Hz
  73 = 932 Hz
  74 = 988 Hz
  75 = 1.0 kHz
  76 = 1.1 kHz
  77 = 1.2 kHz
  78 = 1.2 kHz
  79 = 1.3 kHz
  80 = 1.4 kHz
  81 = 1.5 kHz
  82 = 1.6 kHz
  83 = 1.7 kHz
  84 = 1.8 kHz
  85 = 1.9 kHz
  86 = 2.0 kHz
  87 = 2.1 kHz
  88 = 2.2 kHz
  89 = 2.3 kHz
  90 = 2.5 kHz
  91 = 2.6 kHz
  92 = 2.8 kHz
  93 = 3.0 kHz
  94 = 3.1 kHz
  95 = 3.3 kHz
  96 = 3.5 kHz
  97 = 3.7 kHz
  98 = 4.0 kHz
  99 = 4.2 kHz
  100 = 4.4 kHz
  101 = 4.7 kHz
  102 = 5.0 kHz
  103 = 5.3 kHz
  104 = 5.6 kHz
  105 = 5.9 kHz
  106 = 6.3 kHz
  107 = 6.6 kHz
  108 = 7.0 kHz
  109 = 7.5 kHz
  110 = 7.9 kHz
  111 = 8.4 kHz
  112 = 8.9 kHz
  113 = 9.4 kHz
  114 = 10 kHz
  115 = 11 kHz
  116 = 11 kHz
  117 = 12 kHz
  118 = 13 kHz
  119 = 13 kHz
  120 = 14 kHz
  121 = 15 kHz
  122 = 16 kHz
  123 = 17 kHz
  124 = 18 kHz
  125 = 19 kHz
  126 = 20 kHz
  127 = 21 kHz


Morph Wheel:
0x99 (b2-b0), 0x9A (b7-b3): 8-bit raw value

Morph After Touch:
0x9A (b2-b0), 0x9B (b7-b3): 8-bit raw value

Morph Control Pedal:
0x9B (b2-b0), 0x9C (b7-b3): 8-bit raw value
```

## NS3 Synth Filter HP Freq Res
Offset in file: 0x9C (b2-0) and 0x9D (b7-4)

```
for 'LP+HP' filter
  => Frequency High Pass value: 0/127 value = 14 Hz / 21 kHz
  0 = 14 Hz
  1 = 15 Hz
  2 = 15 Hz
  3 = 16 Hz
  4 = 17 Hz
  5 = 18 Hz
  6 = 19 Hz
  7 = 21 Hz
  8 = 22 Hz
  9 = 23 Hz
  10 = 24 Hz
  11 = 26 Hz
  12 = 28 Hz
  13 = 29 Hz
  14 = 31 Hz
  15 = 33 Hz
  16 = 35 Hz
  17 = 37 Hz
  18 = 39 Hz
  19 = 41 Hz
  20 = 44 Hz
  21 = 46 Hz
  22 = 49 Hz
  23 = 52 Hz
  24 = 55 Hz
  25 = 58 Hz
  26 = 62 Hz
  27 = 65 Hz
  28 = 69 Hz
  29 = 73 Hz
  30 = 78 Hz
  31 = 82 Hz
  32 = 87 Hz
  33 = 92 Hz
  34 = 98 Hz
  35 = 104 Hz
  36 = 110 Hz
  37 = 117 Hz
  38 = 123 Hz
  39 = 131 Hz
  40 = 139 Hz
  41 = 147 Hz
  42 = 156 Hz
  43 = 165 Hz
  44 = 175 Hz
  45 = 185 Hz
  46 = 196 Hz
  47 = 208 Hz
  48 = 220 Hz
  49 = 233 Hz
  50 = 247 Hz
  51 = 262 Hz
  52 = 277 Hz
  53 = 294 Hz
  54 = 311 Hz
  55 = 330 Hz
  56 = 349 Hz
  57 = 370 Hz
  58 = 392 Hz
  59 = 415 Hz
  60 = 440 Hz
  61 = 466 Hz
  62 = 494 Hz
  63 = 523 Hz
  64 = 554 Hz
  65 = 587 Hz
  66 = 622 Hz
  67 = 659 Hz
  68 = 698 Hz
  69 = 740 Hz
  70 = 784 Hz
  71 = 831 Hz
  72 = 880 Hz
  73 = 932 Hz
  74 = 988 Hz
  75 = 1.0 kHz
  76 = 1.1 kHz
  77 = 1.2 kHz
  78 = 1.2 kHz
  79 = 1.3 kHz
  80 = 1.4 kHz
  81 = 1.5 kHz
  82 = 1.6 kHz
  83 = 1.7 kHz
  84 = 1.8 kHz
  85 = 1.9 kHz
  86 = 2.0 kHz
  87 = 2.1 kHz
  88 = 2.2 kHz
  89 = 2.3 kHz
  90 = 2.5 kHz
  91 = 2.6 kHz
  92 = 2.8 kHz
  93 = 3.0 kHz
  94 = 3.1 kHz
  95 = 3.3 kHz
  96 = 3.5 kHz
  97 = 3.7 kHz
  98 = 4.0 kHz
  99 = 4.2 kHz
  100 = 4.4 kHz
  101 = 4.7 kHz
  102 = 5.0 kHz
  103 = 5.3 kHz
  104 = 5.6 kHz
  105 = 5.9 kHz
  106 = 6.3 kHz
  107 = 6.6 kHz
  108 = 7.0 kHz
  109 = 7.5 kHz
  110 = 7.9 kHz
  111 = 8.4 kHz
  112 = 8.9 kHz
  113 = 9.4 kHz
  114 = 10 kHz
  115 = 11 kHz
  116 = 11 kHz
  117 = 12 kHz
  118 = 13 kHz
  119 = 13 kHz
  120 = 14 kHz
  121 = 15 kHz
  122 = 16 kHz
  123 = 17 kHz
  124 = 18 kHz
  125 = 19 kHz
  126 = 20 kHz
  127 = 21 kHz


for all other filters
  => Resonance:  0/127 value = 0 / 10
```

## NS3 Synth Sample ID
Offset in file: 0xA8 (b2-0) to 0xAC (b7-b3)

```
32-bit synth sample hash code.
```

## NS3 Synth Voice
Offset in file: 0x84 (b0) and 0x85 (b7)

```
0 = Poly
1 = Legato
2 = Mono
```

## NS3 Synth Glide
Offset in file: 0x85 (b6-0) 7 bits, range 0/10

```
0/127 value = 0 / 10
```

## NS3 Synth Unison
Offset in file: 0x86 (b7-6)

```
0 = Off
1 = 1
2 = 2
3 = 3
```

## NS3 Synth Vibrato
Offset in file: 0x86 (b5-3)

```
0 = Off
1 = Delay 1
2 = Delay 2
3 = Delay 3
4 = Wheel
5 = After Touch
```

## NS3 Synth Oscillator Type
Offset in file: 0x8D (b1-0) and 0x8E (b7)

```
0 = Classic
1 = Wave
2 = Formant
3 = Super
4 = Sample
```

## NS3 Synth Oscillator 1 Wave Form
Offset in file: 0x8E (b3-0) and 0x8F (b7/6)

```
ID | Classic  | Wave               | Formant         | Super
-- | -------- | ------------------ | --------------- | -------------------
 O | Sine     | Wave 2nd Harm      | Format Wave Aaa | Super Wave Saw
 1 | Triangle | Wave 3rd Harm      | Format Wave Eee | Super Wave Saw 2
 2 | Saw      | Wave 4th Harm      | Format Wave Iii | Super Wave Square
 3 | Square   | Wave 5th Harm      | Format Wave Ooo | Super Wave Square 2
 4 | Pulse 33 | Wave 6th Harm      | Format Wave Uuu | Super Wave Bright
 5 | Pulse 10 | Wave 7th Harm      | Format Wave Yyy | Super Wave Bright 2
 6 | ESaw     | Wave 8th Harm      | Format Wave AO  | Super Wave Strings
 7 | ESquare  | Wave Organ 1       | Format Wave AE  | Super Wave Organ
 8 |          | Wave Organ 2       | Format Wave OE  |
 9 |          | Wave Principal     |
10 |          | Wave Flute 1       |
11 |          | Wave Flute 2       |
12 |          | Wave Clarinet 1    |
13 |          | Wave Clarinet 2    |
14 |          | Wave Alto Sax      |
15 |          | Wave Tenor Sax     |
16 |          | Wave 2nd Spectra   |
17 |          | Wave 3rd Spectra   |
18 |          | Wave 4th Spectra   |
19 |          | Wave 5th Spectra   |
20 |          | Wave 6th Spectra   |
21 |          | Wave 7th Spectra   |
22 |          | Wave 8th Spectra   |
23 |          | Wave Saw Random    |
24 |          | Wave Saw Bright    |
25 |          | Wave Sqr Bright    |
26 |          | Wave Saw NoFund    |
27 |          | Wave EPiano 1      |
28 |          | Wave EPiano 2      |
29 |          | Wave EPiano 3      |
30 |          | Wave DX 1          |
31 |          | Wave DX 2          |
32 |          | Wave Full Tines    |
33 |          | Wave Ac Piano      |
34 |          | Wave Ice 1         |
35 |          | Wave Ice 2         |
36 |          | Wave Clavinet 1    |
37 |          | Wave Clavinet 2    |
38 |          | Wave Clavinet 3    |
39 |          | Wave Triplets      |
40 |          | Wave Bell          |
41 |          | Wave Bar 1         |
42 |          | Wave Bar 2         |
43 |          | Wave Tines         |
44 |          | Wave Marimba       |
45 |          | Wave Tubular Bells |
```

## NS3 Synth Oscillator Config
Offset in file: 0x8F (b4-1)

```
0 = None
1 = Pitch
2 = Shape
3 = Sync
4 = Detune
5 = MixSin
6 = MixTri
7 = MixSaw
8 = MixSqr
9 = MixBell
10 = MixNs1
11 = MixNs2
12 = FM1
13 = FM2
14 = RM
```

## NS3 Synth Oscillator Control
Offset in file: 0x90 (b2-0) and 0x91 (b7-4)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
Type                  Midi value conversion
Pitch (1)             0/127 => 0/24
Shape (2)             0/127 => 0/100 %
Sync (3)              0/127 => 0/10
Detune (4)            0/127 => 0/4
Mix* (5 to 11)        0/127 => 100/0 to 0/100
FM & RM (12 to 14)    0/127 => 0/100 %

Morph Wheel:
0x91 (b3-b0), 0x92 (b7-b4): 8-bit raw value

Morph After Touch:
0x92 (b3-b0), 0x93 (b7-b4): 8-bit raw value

Morph Control Pedal:
0x93 (b3-b0), 0x94 (b7-b4): 8-bit raw value
```

## NS3 Synth Pitch
Offset in file: 0x8f (b0) and 0x90 (b7-3)

```
Midi value = 6-bit value + b0 forced to zero to have a standard Midi 7-bit value
value conversion: -12 (Sub) to +48
```

## NS3 Synth Oscillator Mod
Offset in file: 0x94 (b3-0) and 0x95 (b7-5)

```
Osc modulation (lfo/env mod) is using this single 7-bit value to define two settings with a single knob.
Input Value is not the direct midi value as usual, instead it is coded on a special 0/120 range:
0   = 10.0 (100% left value) 'LFO Amount'
60  = 0.0 for both values
120 = 10.0 (100% right value) 'Mod Env Amount'
```

## NS3 Synth Fast Attack
Offset in file: 0xAC (b2)

```
O = off, 1 = on
```

## NS3 Synth Mod Env Attack
Offset in file: 0x8B (b7-1)

```
0/127 value = 0.5 ms / 45 s
  0 = 0.5 ms
  1 = 0.6 ms
  2 = 0.7 ms
  3 = 0.9 ms
  4 = 1.1 ms
  5 = 1.3 ms
  6 = 1.5 ms
  7 = 1.8 ms
  8 = 2.1 ms
  9 = 2.5 ms
  10 = 3.0 ms
  11 = 3.5 ms
  12 = 4.0 ms
  13 = 4.7 ms
  14 = 5.5 ms
  15 = 6.3 ms
  16 = 7.3 ms
  17 = 8.4 ms
  18 = 9.7 ms
  19 = 11 ms
  20 = 13 ms
  21 = 14 ms
  22 = 16 ms
  23 = 19 ms
  24 = 21 ms
  25 = 24 ms
  26 = 27 ms
  27 = 31 ms
  28 = 34 ms
  29 = 39 ms
  30 = 43 ms
  31 = 49 ms
  32 = 54 ms
  33 = 61 ms
  34 = 68 ms
  35 = 75 ms
  36 = 84 ms
  37 = 93 ms
  38 = 103 ms
  39 = 114 ms
  40 = 126 ms
  41 = 139 ms
  42 = 153 ms
  43 = 169 ms
  44 = 186 ms
  45 = 204 ms
  46 = 224 ms
  47 = 246 ms
  48 = 269 ms
  49 = 295 ms
  50 = 322 ms
  51 = 352 ms
  52 = 384 ms
  53 = 419 ms
  54 = 456 ms
  55 = 496 ms
  56 = 540 ms
  57 = 586 ms
  58 = 636 ms
  59 = 690 ms
  60 = 748 ms
  61 = 810 ms
  62 = 876 ms
  63 = 947 ms
  64 = 1.02 s
  65 = 1.10 s
  66 = 1.19 s
  67 = 1.28 s
  68 = 1.38 s
  69 = 1.49 s
  70 = 1.60 s
  71 = 1.72 s
  72 = 1.85 s
  73 = 1.99 s
  74 = 2.13 s
  75 = 2.28 s
  76 = 2.45 s
  77 = 2.62 s
  78 = 2.81 s
  79 = 3.00 s
  80 = 3.21 s
  81 = 3.43 s
  82 = 3.66 s
  83 = 3.91 s
  84 = 4.17 s
  85 = 4.45 s
  86 = 4.74 s
  87 = 5.05 s
  88 = 5.37 s
  89 = 5.72 s
  90 = 6.08 s
  91 = 6.47 s
  92 = 6.87 s
  93 = 7.30 s
  94 = 7.75 s
  95 = 8.22 s
  96 = 8.72 s
  97 = 9.25 s
  98 = 9.80 s
  99 = 10 s
  100 = 11 s
  101 = 12 s
  102 = 12 s
  103 = 13 s
  104 = 14 s
  105 = 15 s
  106 = 15 s
  107 = 16 s
  108 = 17 s
  109 = 18 s
  110 = 19 s
  111 = 20 s
  112 = 21 s
  113 = 22 s
  114 = 24 s
  115 = 25 s
  116 = 26 s
  117 = 27 s
  118 = 29 s
  119 = 30 s
  120 = 32 s
  121 = 34 s
  122 = 35 s
  123 = 37 s
  124 = 39 s
  125 = 41 s
  126 = 43 s
  127 = 45 s

```

## NS3 Synth Mod Env Decay
Offset in file: 0x8B (b0) and 0x8C (b7-2)

```
0/127 value = 3.0 ms / 45 s (Sustain)
  0 = 3.0 ms
  1 = 3.5 ms
  2 = 4.0 ms
  3 = 4.6 ms
  4 = 5.3 ms
  5 = 6.0 ms
  6 = 6.9 ms
  7 = 7.9 ms
  8 = 9.0 ms
  9 = 10 ms
  10 = 12 ms
  11 = 13 ms
  12 = 15 ms
  13 = 17 ms
  14 = 19 ms
  15 = 21 ms
  16 = 23 ms
  17 = 26 ms
  18 = 29 ms
  19 = 33 ms
  20 = 36 ms
  21 = 41 ms
  22 = 45 ms
  23 = 50 ms
  24 = 55 ms
  25 = 61 ms
  26 = 68 ms
  27 = 75 ms
  28 = 82 ms
  29 = 91 ms
  30 = 100 ms
  31 = 110 ms
  32 = 120 ms
  33 = 132 ms
  34 = 144 ms
  35 = 158 ms
  36 = 173 ms
  37 = 188 ms
  38 = 206 ms
  39 = 224 ms
  40 = 244 ms
  41 = 265 ms
  42 = 288 ms
  43 = 313 ms
  44 = 340 ms
  45 = 368 ms
  46 = 399 ms
  47 = 432 ms
  48 = 467 ms
  49 = 505 ms
  50 = 545 ms
  51 = 588 ms
  52 = 634 ms
  53 = 683 ms
  54 = 736 ms
  55 = 792 ms
  56 = 851 ms
  57 = 915 ms
  58 = 983 ms
  59 = 1.05 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.30 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.70 s
  67 = 1.82 s
  68 = 1.94 s
  69 = 2.07 s
  70 = 2.21 s
  71 = 2.36 s
  72 = 2.51 s
  73 = 2.67 s
  74 = 2.85 s
  75 = 3.03 s
  76 = 3.22 s
  77 = 3.42 s
  78 = 3.64 s
  79 = 3.86 s
  80 = 4.10 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.50 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10 s
  97 = 11 s
  98 = 11 s
  99 = 12 s
  100 = 12 s
  101 = 13 s
  102 = 14 s
  103 = 14 s
  104 = 15 s
  105 = 16 s
  106 = 17 s
  107 = 18 s
  108 = 19 s
  109 = 20 s
  110 = 20 s
  111 = 22 s
  112 = 23 s
  113 = 24 s
  114 = 25 s
  115 = 26 s
  116 = 27 s
  117 = 29 s
  118 = 30 s
  119 = 31 s
  120 = 33 s
  121 = 34 s
  122 = 36 s
  123 = 38 s
  124 = 39 s
  125 = 41 s
  126 = 43 s
  127 = 45 s

```

## NS3 Synth Mod Env Release
Offset in file: 0x8C (b1-0) and 0x8D (b7-3)

```
0/127 value = 3.0 ms / 45 s (Inf)
  0 = 3.0 ms
  1 = 3.5 ms
  2 = 4.0 ms
  3 = 4.6 ms
  4 = 5.3 ms
  5 = 6.0 ms
  6 = 6.9 ms
  7 = 7.9 ms
  8 = 9.0 ms
  9 = 10 ms
  10 = 12 ms
  11 = 13 ms
  12 = 15 ms
  13 = 17 ms
  14 = 19 ms
  15 = 21 ms
  16 = 23 ms
  17 = 26 ms
  18 = 29 ms
  19 = 33 ms
  20 = 36 ms
  21 = 41 ms
  22 = 45 ms
  23 = 50 ms
  24 = 55 ms
  25 = 61 ms
  26 = 68 ms
  27 = 75 ms
  28 = 82 ms
  29 = 91 ms
  30 = 100 ms
  31 = 110 ms
  32 = 120 ms
  33 = 132 ms
  34 = 144 ms
  35 = 158 ms
  36 = 173 ms
  37 = 188 ms
  38 = 206 ms
  39 = 224 ms
  40 = 244 ms
  41 = 265 ms
  42 = 288 ms
  43 = 313 ms
  44 = 340 ms
  45 = 368 ms
  46 = 399 ms
  47 = 432 ms
  48 = 467 ms
  49 = 505 ms
  50 = 545 ms
  51 = 588 ms
  52 = 634 ms
  53 = 683 ms
  54 = 736 ms
  55 = 792 ms
  56 = 851 ms
  57 = 915 ms
  58 = 983 ms
  59 = 1.05 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.30 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.70 s
  67 = 1.82 s
  68 = 1.94 s
  69 = 2.07 s
  70 = 2.21 s
  71 = 2.36 s
  72 = 2.51 s
  73 = 2.67 s
  74 = 2.85 s
  75 = 3.03 s
  76 = 3.22 s
  77 = 3.42 s
  78 = 3.64 s
  79 = 3.86 s
  80 = 4.10 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.50 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10 s
  97 = 11 s
  98 = 11 s
  99 = 12 s
  100 = 12 s
  101 = 13 s
  102 = 14 s
  103 = 14 s
  104 = 15 s
  105 = 16 s
  106 = 17 s
  107 = 18 s
  108 = 19 s
  109 = 20 s
  110 = 20 s
  111 = 22 s
  112 = 23 s
  113 = 24 s
  114 = 25 s
  115 = 26 s
  116 = 27 s
  117 = 29 s
  118 = 30 s
  119 = 31 s
  120 = 33 s
  121 = 34 s
  122 = 36 s
  123 = 38 s
  124 = 39 s
  125 = 41 s
  126 = 43 s
  127 = 45 s

```

## NS3 Synth Mod Env Velocity
Offset in file: 0x8D (b2)

```
O = off, 1 = on
```

## NS3 Synth Amp Env Attack
Offset in file: 0xA5 (b1-0) and 0xA6 (b7-3)

```
0/127 value = 0.5 ms / 45 s
  0 = 0.5 ms
  1 = 0.6 ms
  2 = 0.7 ms
  3 = 0.9 ms
  4 = 1.1 ms
  5 = 1.3 ms
  6 = 1.5 ms
  7 = 1.8 ms
  8 = 2.1 ms
  9 = 2.5 ms
  10 = 3.0 ms
  11 = 3.5 ms
  12 = 4.0 ms
  13 = 4.7 ms
  14 = 5.5 ms
  15 = 6.3 ms
  16 = 7.3 ms
  17 = 8.4 ms
  18 = 9.7 ms
  19 = 11 ms
  20 = 13 ms
  21 = 14 ms
  22 = 16 ms
  23 = 19 ms
  24 = 21 ms
  25 = 24 ms
  26 = 27 ms
  27 = 31 ms
  28 = 34 ms
  29 = 39 ms
  30 = 43 ms
  31 = 49 ms
  32 = 54 ms
  33 = 61 ms
  34 = 68 ms
  35 = 75 ms
  36 = 84 ms
  37 = 93 ms
  38 = 103 ms
  39 = 114 ms
  40 = 126 ms
  41 = 139 ms
  42 = 153 ms
  43 = 169 ms
  44 = 186 ms
  45 = 204 ms
  46 = 224 ms
  47 = 246 ms
  48 = 269 ms
  49 = 295 ms
  50 = 322 ms
  51 = 352 ms
  52 = 384 ms
  53 = 419 ms
  54 = 456 ms
  55 = 496 ms
  56 = 540 ms
  57 = 586 ms
  58 = 636 ms
  59 = 690 ms
  60 = 748 ms
  61 = 810 ms
  62 = 876 ms
  63 = 947 ms
  64 = 1.02 s
  65 = 1.10 s
  66 = 1.19 s
  67 = 1.28 s
  68 = 1.38 s
  69 = 1.49 s
  70 = 1.60 s
  71 = 1.72 s
  72 = 1.85 s
  73 = 1.99 s
  74 = 2.13 s
  75 = 2.28 s
  76 = 2.45 s
  77 = 2.62 s
  78 = 2.81 s
  79 = 3.00 s
  80 = 3.21 s
  81 = 3.43 s
  82 = 3.66 s
  83 = 3.91 s
  84 = 4.17 s
  85 = 4.45 s
  86 = 4.74 s
  87 = 5.05 s
  88 = 5.37 s
  89 = 5.72 s
  90 = 6.08 s
  91 = 6.47 s
  92 = 6.87 s
  93 = 7.30 s
  94 = 7.75 s
  95 = 8.22 s
  96 = 8.72 s
  97 = 9.25 s
  98 = 9.80 s
  99 = 10 s
  100 = 11 s
  101 = 12 s
  102 = 12 s
  103 = 13 s
  104 = 14 s
  105 = 15 s
  106 = 15 s
  107 = 16 s
  108 = 17 s
  109 = 18 s
  110 = 19 s
  111 = 20 s
  112 = 21 s
  113 = 22 s
  114 = 24 s
  115 = 25 s
  116 = 26 s
  117 = 27 s
  118 = 29 s
  119 = 30 s
  120 = 32 s
  121 = 34 s
  122 = 35 s
  123 = 37 s
  124 = 39 s
  125 = 41 s
  126 = 43 s
  127 = 45 s

```

## NS3 Synth Amp Env Decay
Offset in file: 0xA6 (b2-0) and 0xA7 (b7-4)

```
0/127 value = 3.0 ms / 45 s (Sustain)
  0 = 3.0 ms
  1 = 3.5 ms
  2 = 4.0 ms
  3 = 4.6 ms
  4 = 5.3 ms
  5 = 6.0 ms
  6 = 6.9 ms
  7 = 7.9 ms
  8 = 9.0 ms
  9 = 10 ms
  10 = 12 ms
  11 = 13 ms
  12 = 15 ms
  13 = 17 ms
  14 = 19 ms
  15 = 21 ms
  16 = 23 ms
  17 = 26 ms
  18 = 29 ms
  19 = 33 ms
  20 = 36 ms
  21 = 41 ms
  22 = 45 ms
  23 = 50 ms
  24 = 55 ms
  25 = 61 ms
  26 = 68 ms
  27 = 75 ms
  28 = 82 ms
  29 = 91 ms
  30 = 100 ms
  31 = 110 ms
  32 = 120 ms
  33 = 132 ms
  34 = 144 ms
  35 = 158 ms
  36 = 173 ms
  37 = 188 ms
  38 = 206 ms
  39 = 224 ms
  40 = 244 ms
  41 = 265 ms
  42 = 288 ms
  43 = 313 ms
  44 = 340 ms
  45 = 368 ms
  46 = 399 ms
  47 = 432 ms
  48 = 467 ms
  49 = 505 ms
  50 = 545 ms
  51 = 588 ms
  52 = 634 ms
  53 = 683 ms
  54 = 736 ms
  55 = 792 ms
  56 = 851 ms
  57 = 915 ms
  58 = 983 ms
  59 = 1.05 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.30 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.70 s
  67 = 1.82 s
  68 = 1.94 s
  69 = 2.07 s
  70 = 2.21 s
  71 = 2.36 s
  72 = 2.51 s
  73 = 2.67 s
  74 = 2.85 s
  75 = 3.03 s
  76 = 3.22 s
  77 = 3.42 s
  78 = 3.64 s
  79 = 3.86 s
  80 = 4.10 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.50 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10 s
  97 = 11 s
  98 = 11 s
  99 = 12 s
  100 = 12 s
  101 = 13 s
  102 = 14 s
  103 = 14 s
  104 = 15 s
  105 = 16 s
  106 = 17 s
  107 = 18 s
  108 = 19 s
  109 = 20 s
  110 = 20 s
  111 = 22 s
  112 = 23 s
  113 = 24 s
  114 = 25 s
  115 = 26 s
  116 = 27 s
  117 = 29 s
  118 = 30 s
  119 = 31 s
  120 = 33 s
  121 = 34 s
  122 = 36 s
  123 = 38 s
  124 = 39 s
  125 = 41 s
  126 = 43 s
  127 = 45 s

```

## NS3 Synth Amp Env Release
Offset in file: 0xA7 (b3-0) and 0xA8 (b7-5)

```
0/127 value = 3.0 ms / 45 s
  0 = 3.0 ms
  1 = 3.5 ms
  2 = 4.0 ms
  3 = 4.6 ms
  4 = 5.3 ms
  5 = 6.0 ms
  6 = 6.9 ms
  7 = 7.9 ms
  8 = 9.0 ms
  9 = 10 ms
  10 = 12 ms
  11 = 13 ms
  12 = 15 ms
  13 = 17 ms
  14 = 19 ms
  15 = 21 ms
  16 = 23 ms
  17 = 26 ms
  18 = 29 ms
  19 = 33 ms
  20 = 36 ms
  21 = 41 ms
  22 = 45 ms
  23 = 50 ms
  24 = 55 ms
  25 = 61 ms
  26 = 68 ms
  27 = 75 ms
  28 = 82 ms
  29 = 91 ms
  30 = 100 ms
  31 = 110 ms
  32 = 120 ms
  33 = 132 ms
  34 = 144 ms
  35 = 158 ms
  36 = 173 ms
  37 = 188 ms
  38 = 206 ms
  39 = 224 ms
  40 = 244 ms
  41 = 265 ms
  42 = 288 ms
  43 = 313 ms
  44 = 340 ms
  45 = 368 ms
  46 = 399 ms
  47 = 432 ms
  48 = 467 ms
  49 = 505 ms
  50 = 545 ms
  51 = 588 ms
  52 = 634 ms
  53 = 683 ms
  54 = 736 ms
  55 = 792 ms
  56 = 851 ms
  57 = 915 ms
  58 = 983 ms
  59 = 1.05 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.30 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.70 s
  67 = 1.82 s
  68 = 1.94 s
  69 = 2.07 s
  70 = 2.21 s
  71 = 2.36 s
  72 = 2.51 s
  73 = 2.67 s
  74 = 2.85 s
  75 = 3.03 s
  76 = 3.22 s
  77 = 3.42 s
  78 = 3.64 s
  79 = 3.86 s
  80 = 4.10 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.50 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10 s
  97 = 11 s
  98 = 11 s
  99 = 12 s
  100 = 12 s
  101 = 13 s
  102 = 14 s
  103 = 14 s
  104 = 15 s
  105 = 16 s
  106 = 17 s
  107 = 18 s
  108 = 19 s
  109 = 20 s
  110 = 20 s
  111 = 22 s
  112 = 23 s
  113 = 24 s
  114 = 25 s
  115 = 26 s
  116 = 27 s
  117 = 29 s
  118 = 30 s
  119 = 31 s
  120 = 33 s
  121 = 34 s
  122 = 36 s
  123 = 38 s
  124 = 39 s
  125 = 41 s
  126 = 43 s
  127 = 45 s

```

## NS3 Synth Amp Env Velocity
Offset in file: 0xA8 (b4-3)

```
0 = Off
1 = 1
2 = 2
3 = 3
```

## NS3 Synth Lfo Wave
Offset in file: 0x86 (b2-0)

```
0 = Triangle
1 = Saw
2 = Neg Saw
3 = Square
4 = S/H
```

## NS3 Synth Lfo Rate
Offset in file: 0x87 (b6-0)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
0/127 value = 0.03 Hz / 523 Hz
  0 = 0.03 Hz
  1 = 0.03 Hz
  2 = 0.03 Hz
  3 = 0.04 Hz
  4 = 0.04 Hz
  5 = 0.04 Hz
  6 = 0.05 Hz
  7 = 0.05 Hz
  8 = 0.05 Hz
  9 = 0.06 Hz
  10 = 0.06 Hz
  11 = 0.07 Hz
  12 = 0.07 Hz
  13 = 0.08 Hz
  14 = 0.09 Hz
  15 = 0.09 Hz
  16 = 0.10 Hz
  17 = 0.11 Hz
  18 = 0.12 Hz
  19 = 0.13 Hz
  20 = 0.14 Hz
  21 = 0.15 Hz
  22 = 0.16 Hz
  23 = 0.17 Hz
  24 = 0.19 Hz
  25 = 0.20 Hz
  26 = 0.22 Hz
  27 = 0.24 Hz
  28 = 0.26 Hz
  29 = 0.28 Hz
  30 = 0.30 Hz
  31 = 0.32 Hz
  32 = 0.35 Hz
  33 = 0.38 Hz
  34 = 0.41 Hz
  35 = 0.44 Hz
  36 = 0.47 Hz
  37 = 0.51 Hz
  38 = 0.55 Hz
  39 = 0.60 Hz
  40 = 0.64 Hz
  41 = 0.70 Hz
  42 = 0.75 Hz
  43 = 0.81 Hz
  44 = 0.88 Hz
  45 = 0.95 Hz
  46 = 1.0 Hz
  47 = 1.1 Hz
  48 = 1.2 Hz
  49 = 1.3 Hz
  50 = 1.4 Hz
  51 = 1.5 Hz
  52 = 1.6 Hz
  53 = 1.8 Hz
  54 = 1.9 Hz
  55 = 2.0 Hz
  56 = 2.2 Hz
  57 = 2.4 Hz
  58 = 2.6 Hz
  59 = 2.8 Hz
  60 = 3.0 Hz
  61 = 3.2 Hz
  62 = 3.5 Hz
  63 = 3.8 Hz
  64 = 4.1 Hz
  65 = 4.4 Hz
  66 = 4.8 Hz
  67 = 5.2 Hz
  68 = 5.6 Hz
  69 = 6.0 Hz
  70 = 6.5 Hz
  71 = 7.0 Hz
  72 = 7.6 Hz
  73 = 8.2 Hz
  74 = 8.8 Hz
  75 = 9.5 Hz
  76 = 10 Hz
  77 = 11 Hz
  78 = 12 Hz
  79 = 13 Hz
  80 = 14 Hz
  81 = 15 Hz
  82 = 16 Hz
  83 = 18 Hz
  84 = 19 Hz
  85 = 21 Hz
  86 = 22 Hz
  87 = 24 Hz
  88 = 26 Hz
  89 = 28 Hz
  90 = 30 Hz
  91 = 33 Hz
  92 = 35 Hz
  93 = 38 Hz
  94 = 41 Hz
  95 = 45 Hz
  96 = 48 Hz
  97 = 52 Hz
  98 = 56 Hz
  99 = 61 Hz
  100 = 65 Hz
  101 = 71 Hz
  102 = 76 Hz
  103 = 82 Hz
  104 = 89 Hz
  105 = 96 Hz
  106 = 104 Hz
  107 = 112 Hz
  108 = 121 Hz
  109 = 131 Hz
  110 = 141 Hz
  111 = 153 Hz
  112 = 165 Hz
  113 = 178 Hz
  114 = 192 Hz
  115 = 208 Hz
  116 = 224 Hz
  117 = 242 Hz
  118 = 262 Hz
  119 = 283 Hz
  120 = 305 Hz
  121 = 330 Hz
  122 = 356 Hz
  123 = 385 Hz
  124 = 415 Hz
  125 = 449 Hz
  126 = 484 Hz
  127 = 523 Hz


if LFO Master Clock is On, 0/127 value = 4/1 to 1/64 Master Clock Division
  0 = 4/1
  1 = 4/1
  2 = 4/1
  3 = 4/1
  4 = 4/1
  5 = 4/1
  6 = 4/1
  7 = 4/1
  8 = 4/1T
  9 = 4/1T
  10 = 4/1T
  11 = 4/1T
  12 = 4/1T
  13 = 4/1T
  14 = 4/1T
  15 = 4/1T
  16 = 2/1
  17 = 2/1
  18 = 2/1
  19 = 2/1
  20 = 2/1
  21 = 2/1
  22 = 2/1
  23 = 2/1T
  24 = 2/1T
  25 = 2/1T
  26 = 2/1T
  27 = 2/1T
  28 = 2/1T
  29 = 2/1T
  30 = 2/1T
  31 = 1/1
  32 = 1/1
  33 = 1/1
  34 = 1/1
  35 = 1/1
  36 = 1/1
  37 = 1/1
  38 = 1/1T
  39 = 1/1T
  40 = 1/1T
  41 = 1/1T
  42 = 1/1T
  43 = 1/1T
  44 = 1/1T
  45 = 1/1T
  46 = 1/2
  47 = 1/2
  48 = 1/2
  49 = 1/2
  50 = 1/2
  51 = 1/2
  52 = 1/2
  53 = 1/2T
  54 = 1/2T
  55 = 1/2T
  56 = 1/2T
  57 = 1/2T
  58 = 1/2T
  59 = 1/2T
  60 = 1/2T
  61 = 1/4
  62 = 1/4
  63 = 1/4
  64 = 1/4
  65 = 1/4
  66 = 1/4
  67 = 1/4
  68 = 1/4T
  69 = 1/4T
  70 = 1/4T
  71 = 1/4T
  72 = 1/4T
  73 = 1/4T
  74 = 1/4T
  75 = 1/4T
  76 = 1/8
  77 = 1/8
  78 = 1/8
  79 = 1/8
  80 = 1/8
  81 = 1/8
  82 = 1/8
  83 = 1/8T
  84 = 1/8T
  85 = 1/8T
  86 = 1/8T
  87 = 1/8T
  88 = 1/8T
  89 = 1/8T
  90 = 1/8T
  91 = 1/16
  92 = 1/16
  93 = 1/16
  94 = 1/16
  95 = 1/16
  96 = 1/16
  97 = 1/16
  98 = 1/16T
  99 = 1/16T
  100 = 1/16T
  101 = 1/16T
  102 = 1/16T
  103 = 1/16T
  104 = 1/16T
  105 = 1/16T
  106 = 1/32
  107 = 1/32
  108 = 1/32
  109 = 1/32
  110 = 1/32
  111 = 1/32
  112 = 1/32
  113 = 1/32T
  114 = 1/32T
  115 = 1/32T
  116 = 1/32T
  117 = 1/32T
  118 = 1/32T
  119 = 1/32T
  120 = 1/32T
  121 = 1/64
  122 = 1/64
  123 = 1/64
  124 = 1/64
  125 = 1/64
  126 = 1/64
  127 = 1/64


Morph Wheel:
0x88 (b7-b0): 8-bit raw value

Morph After Touch:
0x89 (b7-b0): 8-bit raw value

Morph Control Pedal:
0x8A (b7-b0): 8-bit raw value
```

## NS3 Synth Lfo Master Clock
Offset in file: 0x87 (b7)

```
O = off, 1 = on
```

## NS3 Synth On
Offset in file: 0x52 (b7)

```
O = off, 1 = on
```

## NS3 Synth Kb Zone
Offset in file: 0x52 (b6-3)

**See**: [Organ Kb Zone](#ns3-organ-kb-zone) for detailed explanation.  

## NS3 Synth Volume
Offset in file: 0x52 (b2-0) and 0x53 (b7-4)

**See**: [Organ Volume](#ns3-organ-volume) for detailed explanation.  
```
Morph Wheel:
0x53 (b3-b0), 0x54 (b7-b4): 8-bit raw value

Morph After Touch:
0x54 (b3-b0), 0x55 (b7-b4): 8-bit raw value

Morph Control Pedal:
0x55 (b3-b0), 0x56 (b7-b4): 8-bit raw value
```

## NS3 Synth Octave Shift
Offset in file: 0x56 (b3-0)

```
Octave Shift = value - 6
```

## NS3 Synth Pitch Stick
Offset in file: 0x57 (b7)

```
O = off, 1 = on
```

## NS3 Synth Pitch Stick Range
Offset in file: 0x3b (b7-4)

**See**: [Nord Stage 3 - Update History](https://www.nordkeyboards.com/products/nord-stage-3/nord-stage-3-update-history)  
```
Synth Pitch Shift Custom Range is available only with OS >= v2.00 (2018-12-18)
File version v3.03 or later

  0 = ±1 semi
  1 = ±2 semi
  2 = ±3 semi
  3 = ±4 semi
  4 = ±5 semi
  5 = ±7 semi
  6 = ±10 semi
  7 = ±12 semi
  8 = +2/-12 semi
  9 = +2/-24 semi

```

## NS3 Synth Sustain Pedal
Offset in file: 0x57 (b6)

```
O = off, 1 = on
```

## NS3 Synth Kb Hold
Offset in file: 0x80 (b7)

```
O = off, 1 = on
```

## NS3 Synth Arp On
Offset in file: 0x80 (b6)

```
O = off, 1 = on
```

## NS3 Synth Arp Rate
Offset in file: 0x81 (b7-1)

**See**: [Organ Volume](#ns3-organ-volume) for detailed Morph explanation.  
```
0/127 value = 16 bpm / Fast 5
  0 = 16 bpm
  1 = 16 bpm
  2 = 18 bpm
  3 = 20 bpm
  4 = 24 bpm
  5 = 26 bpm
  6 = 28 bpm
  7 = 30 bpm
  8 = 34 bpm
  9 = 36 bpm
  10 = 38 bpm
  11 = 42 bpm
  12 = 44 bpm
  13 = 46 bpm
  14 = 48 bpm
  15 = 50 bpm
  16 = 54 bpm
  17 = 56 bpm
  18 = 58 bpm
  19 = 60 bpm
  20 = 62 bpm
  21 = 64 bpm
  22 = 66 bpm
  23 = 68 bpm
  24 = 70 bpm
  25 = 72 bpm
  26 = 74 bpm
  27 = 76 bpm
  28 = 78 bpm
  29 = 78 bpm
  30 = 80 bpm
  31 = 82 bpm
  32 = 84 bpm
  33 = 86 bpm
  34 = 86 bpm
  35 = 88 bpm
  36 = 90 bpm
  37 = 92 bpm
  38 = 94 bpm
  39 = 94 bpm
  40 = 96 bpm
  41 = 98 bpm
  42 = 100 bpm
  43 = 100 bpm
  44 = 102 bpm
  45 = 104 bpm
  46 = 106 bpm
  47 = 108 bpm
  48 = 108 bpm
  49 = 110 bpm
  50 = 112 bpm
  51 = 114 bpm
  52 = 116 bpm
  53 = 118 bpm
  54 = 120 bpm
  55 = 122 bpm
  56 = 124 bpm
  57 = 126 bpm
  58 = 128 bpm
  59 = 130 bpm
  60 = 132 bpm
  61 = 134 bpm
  62 = 138 bpm
  63 = 140 bpm
  64 = 142 bpm
  65 = 146 bpm
  66 = 148 bpm
  67 = 152 bpm
  68 = 154 bpm
  69 = 158 bpm
  70 = 162 bpm
  71 = 166 bpm
  72 = 170 bpm
  73 = 174 bpm
  74 = 178 bpm
  75 = 182 bpm
  76 = 186 bpm
  77 = 190 bpm
  78 = 196 bpm
  79 = 200 bpm
  80 = 204 bpm
  81 = 210 bpm
  82 = 216 bpm
  83 = 220 bpm
  84 = 226 bpm
  85 = 232 bpm
  86 = 238 bpm
  87 = 244 bpm
  88 = 252 bpm
  89 = 258 bpm
  90 = 266 bpm
  91 = 274 bpm
  92 = 282 bpm
  93 = 290 bpm
  94 = 298 bpm
  95 = 308 bpm
  96 = 318 bpm
  97 = 328 bpm
  98 = 338 bpm
  99 = 350 bpm
  100 = 362 bpm
  101 = 376 bpm
  102 = 392 bpm
  103 = 410 bpm
  104 = 428 bpm
  105 = 450 bpm
  106 = 472 bpm
  107 = 494 bpm
  108 = 520 bpm
  109 = 546 bpm
  110 = 574 bpm
  111 = 602 bpm
  112 = 632 bpm
  113 = 662 bpm
  114 = 696 bpm
  115 = 728 bpm
  116 = 762 bpm
  117 = 798 bpm
  118 = 834 bpm
  119 = 872 bpm
  120 = 910 bpm
  121 = 950 bpm
  122 = 990 bpm
  123 = Fast 1
  124 = Fast 2
  125 = Fast 3
  126 = Fast 4
  127 = Fast 5


if Arpeggiator Master Clock is On, 0/127 value = 1/2 to 1/32 Master Clock Division
  0 = 1/2
  1 = 1/2
  2 = 1/2
  3 = 1/2
  4 = 1/2
  5 = 1/2
  6 = 1/2
  7 = 1/2
  8 = 1/2
  9 = 1/2
  10 = 1/2
  11 = 1/2
  12 = 1/2
  13 = 1/2
  14 = 1/2
  15 = 1/2T
  16 = 1/2T
  17 = 1/2T
  18 = 1/2T
  19 = 1/2T
  20 = 1/2T
  21 = 1/2T
  22 = 1/2T
  23 = 1/2T
  24 = 1/2T
  25 = 1/2T
  26 = 1/2T
  27 = 1/2T
  28 = 1/2T
  29 = 1/4
  30 = 1/4
  31 = 1/4
  32 = 1/4
  33 = 1/4
  34 = 1/4
  35 = 1/4
  36 = 1/4
  37 = 1/4
  38 = 1/4
  39 = 1/4
  40 = 1/4
  41 = 1/4
  42 = 1/4
  43 = 1/4T
  44 = 1/4T
  45 = 1/4T
  46 = 1/4T
  47 = 1/4T
  48 = 1/4T
  49 = 1/4T
  50 = 1/4T
  51 = 1/4T
  52 = 1/4T
  53 = 1/4T
  54 = 1/4T
  55 = 1/4T
  56 = 1/4T
  57 = 1/8
  58 = 1/8
  59 = 1/8
  60 = 1/8
  61 = 1/8
  62 = 1/8
  63 = 1/8
  64 = 1/8
  65 = 1/8
  66 = 1/8
  67 = 1/8
  68 = 1/8
  69 = 1/8
  70 = 1/8
  71 = 1/8
  72 = 1/8T
  73 = 1/8T
  74 = 1/8T
  75 = 1/8T
  76 = 1/8T
  77 = 1/8T
  78 = 1/8T
  79 = 1/8T
  80 = 1/8T
  81 = 1/8T
  82 = 1/8T
  83 = 1/8T
  84 = 1/8T
  85 = 1/8T
  86 = 1/16
  87 = 1/16
  88 = 1/16
  89 = 1/16
  90 = 1/16
  91 = 1/16
  92 = 1/16
  93 = 1/16
  94 = 1/16
  95 = 1/16
  96 = 1/16
  97 = 1/16
  98 = 1/16
  99 = 1/16
  100 = 1/16T
  101 = 1/16T
  102 = 1/16T
  103 = 1/16T
  104 = 1/16T
  105 = 1/16T
  106 = 1/16T
  107 = 1/16T
  108 = 1/16T
  109 = 1/16T
  110 = 1/16T
  111 = 1/16T
  112 = 1/16T
  113 = 1/16T
  114 = 1/32
  115 = 1/32
  116 = 1/32
  117 = 1/32
  118 = 1/32
  119 = 1/32
  120 = 1/32
  121 = 1/32
  122 = 1/32
  123 = 1/32
  124 = 1/32
  125 = 1/32
  126 = 1/32
  127 = 1/32


Morph Wheel:
0x81 (b0), 0x82 (b7-b1): 8-bit raw value

Morph After Touch:
0x82 (b0), 0x83 (b7-b1): 8-bit raw value

Morph Control Pedal:
0x83 (b0), 0x84 (b7-b1): 8-bit raw value
```

## NS3 Synth Arp Kb Sync
Offset in file: 0x80 (b5)

```
O = off, 1 = on
```

## NS3 Synth Arp Master Clock
Offset in file: 0x80 (b0)

```
O = off, 1 = on
```

## NS3 Synth Arp Range
Offset in file: 0x80 (b4-3)

```
0 = 1 Octave
1 = 2 Octaves
2 = 3 Octaves
3 = 4 Octaves
```

## NS3 Synth Arp Pattern
Offset in file: 0x80 (b2-1)

```
0 = Up
1 = Down
2 = Up/Down
3 = Random
```

## NS3 Synth Preset Location
Offset in file: 0x57 (b5-0) and 0x58 (b7-4)

```
Preset location:
0-399:   user preset
400-799: sample preset
```

## NS3 Synth Preset Name
Offset in file: 0x58 (b3-0) to 0x6E (b7-4)

```
User Preset names are limited to 16 characters,
Sample Preset name are up to 22 characters.

character 1: ((offset + 3) & 0xff) + 1
character 2: (offset + 2) & 0xff
character 3: (offset + 1) & 0xff
character 4: (offset + 0) & 0x7f
character 5: ((offset + 3 + 4) & 0xff) + 1
character 6: (offset + 2 + 4) & 0xff
. . .
```