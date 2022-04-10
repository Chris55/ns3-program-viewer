

## NS2 Extern On
Offset in file: 0x52 (b5)

```
O = off, 1 = on
```

## NS2 Extern Kb Zone
Offset in file: 0x56 (b5-3)

**See**: [Organ Kb Zone](#ns2-organ-kb-zone) for detailed explanation.  

## NS2 Extern Octave Shift
Offset in file: 0x56 (b2-0) and 0x57 (b7)

```
Octave Shift = value - 7
```

## NS2 Extern Pitch Stick
Offset in file: 0x57 (b6)

```
O = off, 1 = on
```

## NS2 Extern Sustain Pedal
Offset in file: 0x57 (b5)

```
O = off, 1 = on
```

## NS2 Extern Midi Control
Offset in file: 0xff (b7-6)

```
  0 = Midi CC
  1 = Program
  2 = Volume

```

## NS2 Extern Midi CC On
Offset in file: 0x104 (b7)

```
O = off, 1 = on
```

## NS2 Extern Midi CC
Offset in file: 0x103 (b6-0)

```
7-bit value = 0/127

EXTERN MIDI CC Morph WHEEL
offset in file 0x100 (b6-0) and 0x101 (b7)

EXTERN MIDI CC Morph AT
offset in file 0x101 (b6-0) and 0x102 (b7)

EXTERN MIDI CC Morph CONTROL PEDAL
offset in file 0x102 (b6-0) and 0x103 (b7)
```

## NS2 Extern Midi Program On
Offset in file: 0x107 (b7)

```
O = off, 1 = on
```

## NS2 Extern Midi Program
Offset in file: 0x106 (b6-0)

```
O7-bit value = 1 to 128 (no morph)
```

## NS2 Extern Midi Volume On
Offset in file: 0x10b (b1)

```
O = off, 1 = on
```

## NS2 Extern Volume
Offset in file: 0x10a (b0) and 0x10b (b7-2)

```
O7-bit value = 0/127

EXTERN VOLUME Morph WHEEL
offset in file 0x107 (b0) and 0x108 (b7-1)

EXTERN VOLUME Morph AT
offset in file 0x108 (b0) and 0x109 (b7-1)

EXTERN VOLUME Morph CONTROL PEDAL
offset in file 0x109 (b0) and 0x10a (b7-1)
```

## NS2 Extern Midi Channel
Offset in file: 0x107 (b6-3)

```
O4-bit value = 1 to 16
```

## NS2 Extern Midi Channel Type
Offset in file: 0x107 (b1)

```
0 = MIDI
1 = USB
```

## NS2 Extern Midi Bank Select CC00 Enabled
Offset in file: 0x106 (b7)

```
0 = OFF
1 = ON
```

## NS2 Extern Midi Bank Select CC00
Offset in file: 0x105 (b6-0)

```
O7-bit value = 0 to 127
```

## NS2 Extern Midi Bank Select CC32 Enabled
Offset in file: 0x105 (b7)

```
0 = OFF
1 = ON
```

## NS2 Extern Midi Bank Select CC32
Offset in file: 0x104 (b6-0)

```
O7-bit value = 0 to 127
```

## NS2 Extern Midi CC Number
Offset in file: 0xff (b5-0) and 0x100 (b7)

```
O7-bit value = 0 to 119
```

## NS2 Extern Midi Send Wheel
Offset in file: 0x10b (b0)

```
0 = OFF
1 = ON
```

## NS2 Extern Midi Send AfterTouch
Offset in file: 0x10c (b7)

```
0 = OFF
1 = ON
```

## NS2 Extern Midi Send Control Pedal
Offset in file: 0x10c (b6)

```
0 = OFF
1 = ON
```

## NS2 Extern Midi Send Swell
Offset in file: 0x10c (b2)

```
0 = OFF
1 = ON
```

## NS2 Extern Midi Velocity Curve
Offset in file: 0x10c (b4-3)

```
  0 = Midi CC
  1 = Program
  2 = Volume

```

## NS2 Amp Sim Eq On
Offset in file: 0x133 (b4)

```
O = off, 1 = on

 
```

## NS2 Amp Sim Eq Source
Offset in file: 0x133 (b3-2)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS2 Amp Type
Offset in file: 0x133 (b1-0)

```
  0 = Off
  1 = Small
  2 = JC
  3 = Twin


 
```

## NS2 Eq Treble
Offset in file: 0x134 (b0) and 0x135 (b7-2)

```
treble (fixed 4 kHz) frequency boost/cut table:
  0 = -15.0 dB
  1 = -14.8 dB
  2 = -14.5 dB
  3 = -14.3 dB
  4 = -14.1 dB
  5 = -13.8 dB
  6 = -13.6 dB
  7 = -13.4 dB
  8 = -13.1 dB
  9 = -12.9 dB
  10 = -12.7 dB
  11 = -12.4 dB
  12 = -12.2 dB
  13 = -12.0 dB
  14 = -11.7 dB
  15 = -11.5 dB
  16 = -11.2 dB
  17 = -11.0 dB
  18 = -10.8 dB
  19 = -10.5 dB
  20 = -10.3 dB
  21 = -10.1 dB
  22 = -9.8 dB
  23 = -9.6 dB
  24 = -9.4 dB
  25 = -9.1 dB
  26 = -8.9 dB
  27 = -8.7 dB
  28 = -8.4 dB
  29 = -8.2 dB
  30 = -8.0 dB
  31 = -7.7 dB
  32 = -7.5 dB
  33 = -7.3 dB
  34 = -7.0 dB
  35 = -6.8 dB
  36 = -6.6 dB
  37 = -6.3 dB
  38 = -6.1 dB
  39 = -5.9 dB
  40 = -5.6 dB
  41 = -5.4 dB
  42 = -5.2 dB
  43 = -4.9 dB
  44 = -4.7 dB
  45 = -4.5 dB
  46 = -4.2 dB
  47 = -4.0 dB
  48 = -3.8 dB
  49 = -3.5 dB
  50 = -3.3 dB
  51 = -3.0 dB
  52 = -2.8 dB
  53 = -2.6 dB
  54 = -2.3 dB
  55 = -2.1 dB
  56 = -1.9 dB
  57 = -1.6 dB
  58 = -1.4 dB
  59 = -1.2 dB
  60 = -0.9 dB
  61 = -0.7 dB
  62 = -0.5 dB
  63 = -0.2 dB
  64 = +0.0 dB
  65 = +0.2 dB
  66 = +0.5 dB
  67 = +0.7 dB
  68 = +1.0 dB
  69 = +1.2 dB
  70 = +1.4 dB
  71 = +1.7 dB
  72 = +1.9 dB
  73 = +2.1 dB
  74 = +2.4 dB
  75 = +2.6 dB
  76 = +2.9 dB
  77 = +3.1 dB
  78 = +3.3 dB
  79 = +3.6 dB
  80 = +3.8 dB
  81 = +4.0 dB
  82 = +4.3 dB
  83 = +4.5 dB
  84 = +4.8 dB
  85 = +5.0 dB
  86 = +5.2 dB
  87 = +5.5 dB
  88 = +5.7 dB
  89 = +6.0 dB
  90 = +6.2 dB
  91 = +6.4 dB
  92 = +6.7 dB
  93 = +6.9 dB
  94 = +7.1 dB
  95 = +7.4 dB
  96 = +7.6 dB
  97 = +7.9 dB
  98 = +8.1 dB
  99 = +8.3 dB
  100 = +8.6 dB
  101 = +8.8 dB
  102 = +9.0 dB
  103 = +9.3 dB
  104 = +9.5 dB
  105 = +9.8 dB
  106 = +10.0 dB
  107 = +10.2 dB
  108 = +10.5 dB
  109 = +10.7 dB
  110 = +11.0 dB
  111 = +11.2 dB
  112 = +11.4 dB
  113 = +11.7 dB
  114 = +11.9 dB
  115 = +12.1 dB
  116 = +12.4 dB
  117 = +12.6 dB
  118 = +12.9 dB
  119 = +13.1 dB
  120 = +13.3 dB
  121 = +13.6 dB
  122 = +13.8 dB
  123 = +14.0 dB
  124 = +14.3 dB
  125 = +14.5 dB
  126 = +14.8 dB
  127 = +15.0 dB

```

## NS2 Eq Mid
Offset in file: 0x135 (b1-0) and 0x136 (b7-3)

```
  0 = -15.0 dB
  1 = -14.8 dB
  2 = -14.5 dB
  3 = -14.3 dB
  4 = -14.1 dB
  5 = -13.8 dB
  6 = -13.6 dB
  7 = -13.4 dB
  8 = -13.1 dB
  9 = -12.9 dB
  10 = -12.7 dB
  11 = -12.4 dB
  12 = -12.2 dB
  13 = -12.0 dB
  14 = -11.7 dB
  15 = -11.5 dB
  16 = -11.2 dB
  17 = -11.0 dB
  18 = -10.8 dB
  19 = -10.5 dB
  20 = -10.3 dB
  21 = -10.1 dB
  22 = -9.8 dB
  23 = -9.6 dB
  24 = -9.4 dB
  25 = -9.1 dB
  26 = -8.9 dB
  27 = -8.7 dB
  28 = -8.4 dB
  29 = -8.2 dB
  30 = -8.0 dB
  31 = -7.7 dB
  32 = -7.5 dB
  33 = -7.3 dB
  34 = -7.0 dB
  35 = -6.8 dB
  36 = -6.6 dB
  37 = -6.3 dB
  38 = -6.1 dB
  39 = -5.9 dB
  40 = -5.6 dB
  41 = -5.4 dB
  42 = -5.2 dB
  43 = -4.9 dB
  44 = -4.7 dB
  45 = -4.5 dB
  46 = -4.2 dB
  47 = -4.0 dB
  48 = -3.8 dB
  49 = -3.5 dB
  50 = -3.3 dB
  51 = -3.0 dB
  52 = -2.8 dB
  53 = -2.6 dB
  54 = -2.3 dB
  55 = -2.1 dB
  56 = -1.9 dB
  57 = -1.6 dB
  58 = -1.4 dB
  59 = -1.2 dB
  60 = -0.9 dB
  61 = -0.7 dB
  62 = -0.5 dB
  63 = -0.2 dB
  64 = +0.0 dB
  65 = +0.2 dB
  66 = +0.5 dB
  67 = +0.7 dB
  68 = +1.0 dB
  69 = +1.2 dB
  70 = +1.4 dB
  71 = +1.7 dB
  72 = +1.9 dB
  73 = +2.1 dB
  74 = +2.4 dB
  75 = +2.6 dB
  76 = +2.9 dB
  77 = +3.1 dB
  78 = +3.3 dB
  79 = +3.6 dB
  80 = +3.8 dB
  81 = +4.0 dB
  82 = +4.3 dB
  83 = +4.5 dB
  84 = +4.8 dB
  85 = +5.0 dB
  86 = +5.2 dB
  87 = +5.5 dB
  88 = +5.7 dB
  89 = +6.0 dB
  90 = +6.2 dB
  91 = +6.4 dB
  92 = +6.7 dB
  93 = +6.9 dB
  94 = +7.1 dB
  95 = +7.4 dB
  96 = +7.6 dB
  97 = +7.9 dB
  98 = +8.1 dB
  99 = +8.3 dB
  100 = +8.6 dB
  101 = +8.8 dB
  102 = +9.0 dB
  103 = +9.3 dB
  104 = +9.5 dB
  105 = +9.8 dB
  106 = +10.0 dB
  107 = +10.2 dB
  108 = +10.5 dB
  109 = +10.7 dB
  110 = +11.0 dB
  111 = +11.2 dB
  112 = +11.4 dB
  113 = +11.7 dB
  114 = +11.9 dB
  115 = +12.1 dB
  116 = +12.4 dB
  117 = +12.6 dB
  118 = +12.9 dB
  119 = +13.1 dB
  120 = +13.3 dB
  121 = +13.6 dB
  122 = +13.8 dB
  123 = +14.0 dB
  124 = +14.3 dB
  125 = +14.5 dB
  126 = +14.8 dB
  127 = +15.0 dB

```

## NS2 Eq Bass
Offset in file: 0x136 (b2-0) and 0x137 (b7-4)

```
bass (fixed 100 Hz) frequency boost/cut table:
  0 = -15.0 dB
  1 = -14.8 dB
  2 = -14.5 dB
  3 = -14.3 dB
  4 = -14.1 dB
  5 = -13.8 dB
  6 = -13.6 dB
  7 = -13.4 dB
  8 = -13.1 dB
  9 = -12.9 dB
  10 = -12.7 dB
  11 = -12.4 dB
  12 = -12.2 dB
  13 = -12.0 dB
  14 = -11.7 dB
  15 = -11.5 dB
  16 = -11.2 dB
  17 = -11.0 dB
  18 = -10.8 dB
  19 = -10.5 dB
  20 = -10.3 dB
  21 = -10.1 dB
  22 = -9.8 dB
  23 = -9.6 dB
  24 = -9.4 dB
  25 = -9.1 dB
  26 = -8.9 dB
  27 = -8.7 dB
  28 = -8.4 dB
  29 = -8.2 dB
  30 = -8.0 dB
  31 = -7.7 dB
  32 = -7.5 dB
  33 = -7.3 dB
  34 = -7.0 dB
  35 = -6.8 dB
  36 = -6.6 dB
  37 = -6.3 dB
  38 = -6.1 dB
  39 = -5.9 dB
  40 = -5.6 dB
  41 = -5.4 dB
  42 = -5.2 dB
  43 = -4.9 dB
  44 = -4.7 dB
  45 = -4.5 dB
  46 = -4.2 dB
  47 = -4.0 dB
  48 = -3.8 dB
  49 = -3.5 dB
  50 = -3.3 dB
  51 = -3.0 dB
  52 = -2.8 dB
  53 = -2.6 dB
  54 = -2.3 dB
  55 = -2.1 dB
  56 = -1.9 dB
  57 = -1.6 dB
  58 = -1.4 dB
  59 = -1.2 dB
  60 = -0.9 dB
  61 = -0.7 dB
  62 = -0.5 dB
  63 = -0.2 dB
  64 = +0.0 dB
  65 = +0.2 dB
  66 = +0.5 dB
  67 = +0.7 dB
  68 = +1.0 dB
  69 = +1.2 dB
  70 = +1.4 dB
  71 = +1.7 dB
  72 = +1.9 dB
  73 = +2.1 dB
  74 = +2.4 dB
  75 = +2.6 dB
  76 = +2.9 dB
  77 = +3.1 dB
  78 = +3.3 dB
  79 = +3.6 dB
  80 = +3.8 dB
  81 = +4.0 dB
  82 = +4.3 dB
  83 = +4.5 dB
  84 = +4.8 dB
  85 = +5.0 dB
  86 = +5.2 dB
  87 = +5.5 dB
  88 = +5.7 dB
  89 = +6.0 dB
  90 = +6.2 dB
  91 = +6.4 dB
  92 = +6.7 dB
  93 = +6.9 dB
  94 = +7.1 dB
  95 = +7.4 dB
  96 = +7.6 dB
  97 = +7.9 dB
  98 = +8.1 dB
  99 = +8.3 dB
  100 = +8.6 dB
  101 = +8.8 dB
  102 = +9.0 dB
  103 = +9.3 dB
  104 = +9.5 dB
  105 = +9.8 dB
  106 = +10.0 dB
  107 = +10.2 dB
  108 = +10.5 dB
  109 = +10.7 dB
  110 = +11.0 dB
  111 = +11.2 dB
  112 = +11.4 dB
  113 = +11.7 dB
  114 = +11.9 dB
  115 = +12.1 dB
  116 = +12.4 dB
  117 = +12.6 dB
  118 = +12.9 dB
  119 = +13.1 dB
  120 = +13.3 dB
  121 = +13.6 dB
  122 = +13.8 dB
  123 = +14.0 dB
  124 = +14.3 dB
  125 = +14.5 dB
  126 = +14.8 dB
  127 = +15.0 dB

```

## NS2 Eq Mid Flt Freq
Offset in file: 0x137 (b3-0) and 0x138 (b7-5)

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

```

## NS2 Amp Sim Drive
Offset in file: 0x134 (b7-1)

```
7-bit value 0/127 = 0 to 10.0
```

## NS2 Compressor On
Offset in file: 0x3e (b4)

```
O = off, 1 = on

 
```

## NS2 Compressor Amount
Offset in file: 0x3e (b3-0) and 0x3f (b7-5)

```
7-bit value 0/127 = 0/10
```

## NS2 Delay On
Offset in file: 0x125 (b5)

```
O = off, 1 = on

 
```

## NS2 Delay Source
Offset in file: 0x125 (b4-3)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS2 Delay Master Clock
Offset in file: 0x125 (b1)

```
O = off, 1 = on

 
```

## NS2 Delay Tempo
Offset in file:

```
if MST CLK is OFF
offset in file 0x12d (b1-0) and 0x12e (b7-3) for Knob values (manual or MIDI input)
offset in file 0x12d (b6-2) for TAP Input

  0 = 750,750 ms 80 bpm
  1 = 732,732 ms 82 bpm
  2 = 714,714 ms 84 bpm
  3 = 698,698 ms 86 bpm
  4 = 682,682 ms 88 bpm
  5 = 667,667 ms 90 bpm
  6 = 652,652 ms 92 bpm
  7 = 638,638 ms 94 bpm
  8 = 625,625 ms 96 bpm
  9 = 612,612 ms 98 bpm
  10 = 600,600 ms 100 bpm
  11 = 588,588 ms 102 bpm
  12 = 577,577 ms 104 bpm
  13 = 566,566 ms 106 bpm
  14 = 556,556 ms 108 bpm
  15 = 545,545 ms 110 bpm
  16 = 536,536 ms 112 bpm
  17 = 526,526 ms 114 bpm
  18 = 517,517 ms 116 bpm
  20 = 508,508 ms 118 bpm
  21 = 500,500 ms 120 bpm
  22 = 492,492 ms 122 bpm
  19 = 484,484 ms 124 bpm
  23 = 476,476 ms 126 bpm
  24 = 469,469 ms 128 bpm
  25 = 462,462 ms 130 bpm
  26 = 455,455 ms 132 bpm
  27 = 448,448 ms 134 bpm
  28 = 441,441 ms 136 bpm
  29 = 435,435 ms 138 bpm
  30 = 429,429 ms 140 bpm
  31 = 423,423 ms 142 bpm
  32 = 417,417 ms 144 bpm
  33 = 411,411 ms 146 bpm
  34 = 405,405 ms 148 bpm
  35 = 400,400 ms 150 bpm
  36 = 395,395 ms 152 bpm
  37 = 390,390 ms 154 bpm
  38 = 385,385 ms 156 bpm
  39 = 380,380 ms 158 bpm
  40 = 375,375 ms 80 bpm (x2)
  41 = 366,366 ms 82 bpm (x2)
  42 = 357,357 ms 84 bpm (x2)
  43 = 349,349 ms 86 bpm (x2)
  44 = 341,341 ms 88 bpm (x2)
  45 = 333,333 ms 90 bpm (x2)
  46 = 326,326 ms 92 bpm (x2)
  47 = 319,319 ms 94 bpm (x2)
  48 = 313,313 ms 96 bpm (x2)
  49 = 306,306 ms 98 bpm (x2)
  50 = 300,300 ms 100 bpm (x2)
  51 = 294,294 ms 102 bpm (x2)
  52 = 288,288 ms 104 bpm (x2)
  53 = 283,283 ms 106 bpm (x2)
  54 = 278,278 ms 108 bpm (x2)
  55 = 273,273 ms 110 bpm (x2)
  56 = 268,268 ms 112 bpm (x2)
  57 = 263,263 ms 114 bpm (x2)
  58 = 259,259 ms 116 bpm (x2)
  59 = 254,254 ms 118 bpm (x2)
  60 = 250,250 ms 120 bpm (x2)
  61 = 246,246 ms 122 bpm (x2)
  62 = 242,242 ms 124 bpm (x2)
  63 = 238,238 ms 126 bpm (x2)
  64 = 234,234 ms 128 bpm (x2)
  65 = 231,231 ms 130 bpm (x2)
  66 = 227,227 ms 132 bpm (x2)
  67 = 224,224 ms 134 bpm (x2)
  68 = 221,221 ms 136 bpm (x2)
  69 = 217,217 ms 138 bpm (x2)
  70 = 214,214 ms 140 bpm (x2)
  71 = 211,211 ms 142 bpm (x2)
  72 = 208,208 ms 144 bpm (x2)
  73 = 205,205 ms 146 bpm (x2)
  74 = 203,203 ms 148 bpm (x2)
  75 = 200,200 ms 150 bpm (x2)
  76 = 197,197 ms 152 bpm (x2)
  77 = 195,195 ms 154 bpm (x2)
  78 = 192,192 ms 156 bpm (x2)
  79 = 190,190 ms 158 bpm (x2)
  80 = 187,187 ms 80 bpm (x4)
  81 = 183,183 ms 82 bpm (x4)
  82 = 179,179 ms 84 bpm (x4)
  83 = 174,174 ms 86 bpm (x4)
  84 = 170,170 ms 88 bpm (x4)
  85 = 167,167 ms 90 bpm (x4)
  86 = 163,163 ms 92 bpm (x4)
  87 = 160,160 ms 94 bpm (x4)
  88 = 156,156 ms 96 bpm (x4)
  89 = 153,153 ms 98 bpm (x4)
  90 = 150,150 ms 100 bpm (x4)
  91 = 147,147 ms 102 bpm (x4)
  92 = 144,144 ms 104 bpm (x4)
  93 = 142,142 ms 106 bpm (x4)
  94 = 139,139 ms 108 bpm (x4)
  95 = 136,136 ms 110 bpm (x4)
  96 = 134,134 ms 112 bpm (x4)
  97 = 132,132 ms 114 bpm (x4)
  98 = 129,129 ms 116 bpm (x4)
  99 = 127,127 ms 118 bpm (x4)
  100 = 125,125 ms 120 bpm (x4)
  101 = 123,123 ms 122 bpm (x4)
  102 = 121,121 ms 124 bpm (x4)
  103 = 119,119 ms 126 bpm (x4)
  104 = 117,117 ms 128 bpm (x4)
  105 = 115,115 ms 130 bpm (x4)
  106 = 114,114 ms 132 bpm (x4)
  107 = 112,112 ms 134 bpm (x4)
  108 = 110,110 ms 136 bpm (x4)
  109 = 109,109 ms 138 bpm (x4)
  110 = 107,107 ms 140 bpm (x4)
  111 = 99,99 ms
  112 = 91,91 ms
  113 = 81,81 ms
  114 = 72,72 ms
  115 = 65,65 ms
  116 = 60,60 ms
  117 = 55,55 ms
  118 = 51,51 ms
  119 = 47,47 ms
  120 = 42,42 ms
  121 = 37,37 ms
  122 = 33,33 ms
  123 = 30,30 ms
  124 = 28,28 ms
  125 = 26,26 ms
  126 = 24,24 ms
  127 = 20,20 ms


Delay Rate / Tempo Knob Morph Wheel
offset in file 0x128 (b5-0) and 0x129 (b7-1)

Delay Rate / Tempo Morph AT
offset in file 0x129 (b0), 0x12a (b7-0) and 0x12b (b7-4)

Delay Rate / Tempo Morph CtrlPedal
offset in file 0x12b (b3-0), 0x12c (b7-0) and 0x12d (b7)
```

## NS2 Delay Tempo Master Clock Divisor
Offset in file:

```
if MST CLK is ON
offset in file 0x127 (b1-0) and 0x128 (b7-6)

  0 = 1/2
  1 = 1/4D
  2 = 1/4T
  3 = 1/4S
  4 = 1/4
  5 = 1/8D
  6 = 1/8T
  7 = 1/8S
  8 = 1/8
  9 = 1/16D
  10 = 1/16T
  11 = 1/16S
  12 = 1/16
  13 = 1/32T
  14 = 1/32


Delay Rate / Tempo Knob Morph Wheel
offset in file 0x125 (b0) and 0x126 (b7-4)

Delay Rate / Tempo Morph AT
offset in file 0x126 (b3-0) and 0x127 (b7)

Delay Rate / Tempo Morph CtrlPedal
offset in file 0x127 (b6-2)
```

## NS2 Delay Ping Pong
Offset in file: 0x125 (b2)

```
O = off, 1 = on

 
```

## NS2 Delay Feedback
Offset in file: 0x132 (b3-0) and 0x133 (b7-5)

```
7-bit value 0/127 = 0/10
```

## NS2 Delay Amount
Offset in file: 0x131 (b2-0) and 0x132 (b7-4)

```
7-bit value 0/127 = 0/10

Delay Amount Morph Wheel
offset in file 0x12e (b2-0) and 0x12f (b7-3)

Delay Amount Morph AT
offset in file 0x12f (b2-0) and 0x130 (b7-3)

Delay Amount Morph CtrlPedal
offset in file 0x130 (b2-0) and 0x131 (b7-3)
```

## NS2 Effect Focus
Offset in file: 0x10f (b7-b6)

```
O = Effect 1, 1 = Effect 2, 2 = Delay

 
```

## NS2 Effect 1 On
Offset in file: 0x10f (b5)

```
O = off, 1 = on

 
```

## NS2 Effect 1 Source
Offset in file: 0x10f (b4-3)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS2 Effect 1 Type
Offset in file: 0x10f (b2-0)

```
0 = A-Pan
1 = Trem
2 = RM
3 = WA-WA
4 = A-WA1
5 = A-WA2

 
```

## NS2 Effect 1 Amount
Offset in file: 0x119 (b4-0) and 0x11a (b7-6)

```
7-bit value 0/127 = 0/10

Morph Wheel:
0x116 (b4-0) and 0x117 (b7-5)

Morph After Touch:
0x117 (b4-0) and 0x118 (b7-5)

Morph Control Pedal:
0x118 (b4-0) and 0x119 (b7-5)
```

## NS2 Effect 1 Rate Master Clock
Offset in file: 0x112 (b7-4)

```
  0 = 4/1
  1 = 4/1T
  2 = 2/1
  3 = 2/1T
  4 = 1/1
  5 = 1/1T
  6 = 1/2
  7 = 1/2T
  8 = 1/4
  9 = 1/4T
  10 = 1/8
  11 = 1/8T
  12 = 1/16
  13 = 1/16T
  14 = 1/32


Morph Wheel:
0x110 (b6-2)

Morph After Touch:
0x110 (b1-0) and 0x111 (b7-5)

Morph Control Pedal:
0x111 (b4-0)
```

## NS2 Effect 1 Rate
Offset in file: 0x115 (b3-0) and 0x116 (b7-5)

```
7-bit value 0/127

Morph Wheel:
0x112 (b3-0) and 0x113 (b7-4)

Morph After Touch:
0x113 (b3-0) and 0x114 (b7-4)

Morph Control Pedal:
0x114 (b3-0) and 0x115 (b7-4)
```

## NS2 Effect 1 Master Clock
Offset in file: 0x110 (b7)

```
O = off, 1 = on

 
```

## NS2 Effect 2 On
Offset in file: 0x11a (b5)

```
O = off, 1 = on

 
```

## NS2 Effect 2 Source
Offset in file: 0x11a (b4-3)

```
0 = Organ, 1, Piano, 2 = Synth

 
```

## NS2 Effect 2 Type
Offset in file: 0x11a (b2-0)

```
0 = PHAS1
1 = PHAS2
2 = FLANG
3 = VIBE
4 = CHOR1
5 = CHOR2

 
```

## NS2 Effect 2 Amount
Offset in file: 0x124 (b4-0) and 0x125 (b7-6)

```
7-bit value 0/127 = 0/10

Morph Wheel:
0x121 (b4-0) and 0x117 (b7-5)

Morph After Touch:
0x122 (b4-0) and 0x118 (b7-5)

Morph Control Pedal:
0x123 (b4-0) and 0x119 (b7-5)
```

## NS2 Effect 2 Rate Master Clock
Offset in file: 0x11d (b7-4)

```
  0 = 4/1
  1 = 4/1T
  2 = 2/1
  3 = 2/1T
  4 = 1/1
  5 = 1/1T
  6 = 1/2
  7 = 1/2T
  8 = 1/4
  9 = 1/4T
  10 = 1/8
  11 = 1/8T
  12 = 1/16
  13 = 1/16T
  14 = 1/32


Morph Wheel:
0x11b (b6-2)

Morph After Touch:
0x11b (b1-0) and 0x11c (b7-5)

Morph Control Pedal:
0x11c (b4-0)
```

## NS2 Effect 2 Rate
Offset in file: 0x120 (b3-0) and 0x121 (b7-5)

```
7-bit value 0/127

Morph Wheel:
0x11d (b3-0) and 0x11e (b7-4)

Morph After Touch:
0x11e (b3-0) and 0x11f (b7-4)

Morph Control Pedal:
0x11f (b3-0) and 0x120 (b7-4)
```

## NS2 Effect 2 Master Clock
Offset in file: 0x11b (b7)

```
O = off, 1 = on

 
```

## NS2 Reverb On
Offset in file: 0x3d (b7)

```
O = off, 1 = on

 
```

## NS2 Reverb Type
Offset in file: 0x3d (b6-4)

```
0 = Room 1
1 = Room 2
2 = Stage 1
3 = Stage 2
4 = Hall 1
5 = Hall 2
```

## NS2 Reverb Amount
Offset in file: 0x3d (b3-0) and 0x3e (b7-5)

```
7-bit value 0/127 = 0/10
```

## NS2 Rotary Speaker On
Offset in file: 0x3f (b4)

```
O = off, 1 = on
```

## NS2 Rotary Speaker Source
Offset in file: 0x3f (b3-2)

```
  0 = Organ
  1 = Piano
  2 = Synth

```

## NS2 Rotary Speaker Drive
Offset in file: 0x3f (b1-0) and 0x40 (b7-3)

```
7-bit value 0/127 converted to 0/10

Note: Same value is used for both panel A & B
```

## NS2 Rotary Speaker Stop Mode
Offset in file: 0x40 (b2)

```
0 = disabled (Speed Slow), 1 = enabled (Speed Stop)

Note: Same value is used for both panel A & B
```

## NS2 Rotary Speaker Speed
Offset in file: 0x40 (b1)

```
0 = Slow/Stop, 1 = Fast

Morph Wheel:         0x40 (b0)
Morph After Touch:   0x41 (b7)
Morph Control Pedal: 0x41 (b6)

Note: Same value is used for both panel A & B
```

## NS2 Organ B3 Preset 2
Offset in file: 0x5c (b7)

```
O = off, 1 = on
```

## NS2 Organ B3 Preset 1 Vibrato Chorus
Offset in file: 0x74 (b4)

```
O = off, 1 = on
```

## NS2 Organ B3 Preset 1 Percussion
Offset in file: 0x74 (b3)

```
O = off, 1 = on
```

## NS2 Organ B3 Preset 2 Vibrato Chorus
Offset in file: 0xab (b4)

```
O = off, 1 = on
```

## NS2 Organ B3 Preset 2 Percussion
Offset in file: 0xab (b3)

```
O = off, 1 = on
```

## NS2 Organ B3 Vibrato Mode
Offset in file: 0x35 (b7-5)

```
  0 = V1
  1 = C1
  2 = V2
  3 = C2
  4 = V3
  5 = C3

```

## NS2 Organ Vox Preset 2
Offset in file: 0x5d (b7)

```
O = off, 1 = on
```

## NS2 Organ Vox Vibrato On
Offset in file: 0x37 (b4)

```
O = off, 1 = on
(common for Preset I & II)
```

## NS2 Organ Vox Vibrato Mode
Offset in file: 0x37 (b6-5)

```
  0 = Less (V1)
  1 = More (V2)
  2 = Original (V3)

```

## NS2 Organ Farfisa Preset 2
Offset in file: 0x5e (b7)

```
O = off, 1 = on
```

## NS2 Organ Farfisa Vibrato On
Offset in file: 0x39 (b4)

```
O = off, 1 = on
(common for Preset I & II)
```

## NS2 Organ Farfisa Vibrato Mode
Offset in file: 0x39 (b6-5)

```
  0 = Light/Slow (V1)
  1 = Light/Fast (V2)
  2 = Heavy/Slow (C2)
  3 = Heavy/Fast (C3)

```

## NS2 Organ On
Offset in file: 0x43 (b7)

```
O = off, 1 = on
```

## NS2 Organ Kb Zone
Offset in file: 0x47 (b7-5)

```
0 = LO
1 = LO UP
2 = UP
3 = UP HI
4 = HI
5 = LO UP HI
```

## NS2 Organ Volume
Offset in file: 0x46 (b6-0)

```
Volume:
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
offset in file 0x43 (b6-0) and 0x44 (b7)

Morph After Touch:
offset in file 0x44 (b6-0) and 0x45 (b7)

Morph Control Pedal:
offset in file 0x45 (b6-0) and 0x46 (b7)
```

## NS2 Organ Octave Shift
Offset in file: 0x47 (b4-1)

```
Octave Shift = value - 7
```

## NS2 Organ Pitch Stick
Offset in file: 0x30 (b6)

```
O = off, 1 = on
```

## NS2 Organ Sustain Pedal
Offset in file: 0x47 (b0)

```
O = off, 1 = on
```

## NS2 Organ Latch Pedal
Offset in file: 0x59 (b1)

```
O = off, 1 = on
```

## NS2 Organ Kb Gate
Offset in file: 0x59 (b0)

```
O = off, 1 = on
```

## NS2 Organ Model
Offset in file: 0x34 (b7-6)

```
  0 = B3
  1 = Vox
  2 = Farfisa

```

## NS2 Organ Drawbars Preset 1
```
ORGAN B3 DRAWBARS Preset I
all B3 Drawbars are 4-Bit fields, values from 0 - 8

Organ B3 Sub (drawbar 1)
offset in file 0x60 (b0) and 0x61 (b7-5)
	Morph Wheel offset in file 0x5f (b7-3)
	Morph AT    offset in file 0x5f (b2-0) and 0x60 (b7-6)
	Morph Pedal offset in file 0x60 (b5-1)

Organ B3 Sub3 (drawbar 2)
offset in file 0x63 (b5-2)
    Morph Wheel offset in file 0x61 (b4-0)
	Morph AT    offset in file 0x62 (b7-3)
	Morph Pedal offset in file 0x62 (b2-0) and 0x63 (b7-6)

Organ B3 Fund (drawbar 3)
offset in file 0x65 (b2-0) and 0x66 (b7)
	Morph Wheel offset in file 0x63 (b1-0) and 0x64 (b7-5)
	Morph AT    offset in file 0x64 (b4-0)
	Morph Pedal offset in file 0x65 (b7-3)

Organ B3 2nd (drawbar 4)
offset in file 0x68 (b7-4)
	Morph Wheel offset in file 0x66 (b6-2)
	Morph AT    offset in file 0x66 (b1-0) and 0x67 (b7-5)
	Morph Pedal offset in file 0x67 (b4-0)

Organ B3 3rd (drawbar 5)
offset in file 0x6a (b4-1)
	Morph Wheel offset in file 0x68 (b3-0) and 0x69 (b7)
	Morph AT    offset in file 0x69 (b6-2)
	Morph Pedal offset in file 0x69 (b1-0) and 0x6a (b7-5)

Organ B3 4th (drawbar 6)
offset in file 0x6c (b1-0) and 0x6d (b7-6)
	Morph Wheel offset in file 0x6a (b0) and 0x6b (b7-4)
	Morph AT    offset in file 0x6b (b3-0) and 0x6c (b7)
	Morph Pedal offset in file 0x6c (b6-2)

Organ B3 5th (drawbar 7)
offset in file 0x6f (b6-3)
	Morph Wheel offset in file 0x6d (b5-1)
	Morph AT    offset in file 0x6d (b0) and 0x6e (b7-4)
	Morph Pedal offset in file 0x6e (b3-0) and 0x6f (b7)

Organ B3 6th (drawbar 8)
offset in file 0x71 (b3-0)
	Morph Wheel offset in file 0x6f (b2-0) and 0x70 (b7-6)
	Morph AT    offset in file 0x70 (b5-1)
	Morph Pedal offset in file 0x70 (b0) and 0x71 (b7-4)

Organ B3 8th (drawbar 9)
offset in file 0x73 (b0) and 0x74 (b7-5)
	Morph Wheel offset in file 0x72 (b7-3)
	Morph AT    offset in file 0x72 (b2-0) and 0x73 (b7-6)
	Morph Pedal offset in file 0x73 (b5-1)


ORGAN VOX DRAWBARS Preset I

Organ Vox 16' (drawbar 1)
offset in file 0x77 (b0) and 0x78 (b7-5)
Morph Wheel offset in file 0x76 (b7-3)
Morph AT    offset in file 0x76 (b2-0) and 0x77 (b7-6)
Morph Pedal offset in file 0x77 (b6-1)

Organ Vox 8' (drawbar 2)
offset in file 0x7a (b5-2)
Morph Wheel offset in file 0x78 (b4-0)
Morph AT    offset in file 0x79 (b7-3)
Morph Pedal offset in file 0x79 (b2-0) and 0x7a (b7-6)

Organ Vox 4' (drawbar 3)
offset in file 0x7c (b2-0) and 0x7d (b7)
Morph Wheel offset in file 0x7a (b1-0) and 0x7b (b7-5)
Morph AT    offset in file 0x7b (b4-0)
Morph Pedal offset in file 0x7c (b7-3)

Organ Vox 2' (drawbar 4)
offset in file 0x7f (b7-4)
Morph Wheel offset in file 0x7d (b6-2)
Morph AT    offset in file 0x7d (b1-0) and 0x7e (b7-5)
Morph Pedal offset in file 0x7e (b4-0)

Organ Vox II (drawbar 5)
offset in file 0x81 (b4-1)
Morph Wheel offset in file 0x7f (b3-0) and 0x80 (b7)
Morph AT    offset in file 0x80 (b6-2)
Morph Pedal offset in file 0x80 (b1-0) and 0x81 (b7-5)

Organ Vox III (drawbar 6)
offset in file 0x83 (b1-0) and 0x84 (b7-6)
Morph Wheel offset in file 0x81 (b0) and 0x82 (b7-4)
Morph AT    offset in file 0x82 (b3-0) and 0x83 (b7)
Morph Pedal offset in file 0x83 (b6-2)

Organ Vox IV (drawbar 7)
offset in file 0x86 (b6-3)
Morph Wheel offset in file 0x84 (b5-1)
Morph AT    offset in file 0x84 (b0) and 0x85 (b7-4)
Morph Pedal offset in file 0x85 (b3-0) and 0x86 (b7)

Organ Vox SIN (drawbar 8)
offset in file 0x88 (b3-0)
Morph Wheel offset in file 0x86 (b2-0) and 0x87 (b7-6)
Morph AT    offset in file 0x87 (b5-1)
Morph Pedal offset in file 0x87 (b0) and 0x88 (b7-4)

Organ Vox TRI (drawbar 9)
offset in file 0x8a (b0) and 0x8b (b7-5)
Morph Wheel offset in file 0x89 (b7-3)
Morph AT    offset in file 0x89 (b2-0) and 0x8a (b7-6)
Morph Pedal offset in file 0x8a (b5-1)


ORGAN FARFISA DRAWBARS Preset I
Farfisa drawbars are 1-Bit values, ON or OFF

Organ Farfisa Bass16 (drawbar 1)
offset in file 0x8d (b1)
Morph Wheel offset in file 0x8d (b7-6)
Morph AT    offset in file 0x8d (b5-4)
Morph Pedal offset in file 0x8d (b3-2)

Organ Farfisa Str16 (drawbar 2)
offset in file 0x8e (b2)
Morph Wheel offset in file 0x8d (b0) and 0x8e (b7)
Morph AT    offset in file 0x8e (b6-5)
Morph Pedal offset in file 0x8e (b4-3)

Organ Farfisa Flu8 (drawbar 3)
offset in file 0x8f (b3)
Morph Wheel offset in file 0x8e (b1-0)
Morph AT    offset in file 0x8f (b7-6)
Morph Pedal offset in file 0x8f (b5-4)

Organ Farfisa Oboe8 (drawbar 4)
offset in file 0x90 (b4)
Morph Wheel offset in file 0x8f (b2-1)
Morph AT    offset in file 0x8f (b0) and 0x90 (b7)
Morph Pedal offset in file 0x90 (b6-5)

Organ Farfisa Trump8 (drawbar 5)
offset in file 0x91 (b5)
Morph Wheel offset in file 0x90 (b3-2)
Morph AT    offset in file 0x90 (b1-0)
Morph Pedal offset in file 0x91 (b7-6)

Organ Farfisa Str8 (drawbar 6)
offset in file 0x92 (b6)
Morph Wheel offset in file 0x91 (b4-3)
Morph AT    offset in file 0x91 (b2-1)
Morph Pedal offset in file 0x91 (b0) and 0x92 (b7)

Organ Farfisa Flu4 (drawbar 7)
offset in file 0x93 (b7)
Morph Wheel offset in file 0x92 (b5-4)
Morph AT    offset in file 0x92 (b3-2)
Morph Pedal offset in file 0x92 (b1-0)

Organ Farfisa Str4 (drawbar 8)
offset in file 0x93 (b0)
Morph Wheel offset in file 0x93 (b6-5)
Morph AT    offset in file 0x93 (b4-3)
Morph Pedal offset in file 0x93 (b2-1)

Organ Farfisa 2 2/3 (drawbar 9)
offset in file 0x94 (b1)
Morph Wheel offset in file 0x94 (b7-6)
Morph AT    offset in file 0x94 (b5-4)
Morph Pedal offset in file 0x94 (b3-2)
```

## NS2 Organ B3 Volume Soft
Offset in file: 0x35 (b2)

```
O = on, 1 = off

only if Organ type is B3
```

## NS2 Organ B3 Decay Fast
Offset in file: 0x35 (b3)

```
O = off, 1 = on

only if Organ type is B3
```

## NS2 Organ B3 Harmonic Third
Offset in file:  0x35 (b4)

```
O = off, 1 = on

only if Organ type is B3
```

## NS3 Organ Preset 2 On
Offset in file: 0xBB (b2)

```
O = off, 1 = on
```

## NS2 Organ Drawbars Preset 2
```
ORGAN B3 DRAWBARS Preset II
all B3 Drawbars are 4-Bit fields, values from 0 - 8

Organ B3 Sub (drawbar 1)
offset in file 0x97 (b0) and 0x98 (b7-5)
Morph Wheel offset in file 0x96 (b7-3)
Morph AT    offset in file 0x96 (b2-0) and 0x97 (b7-6)
Morph Pedal offset in file 0x97 (b5-1)

Organ B3 Sub3 (drawbar 2)
offset in file 0x9a (b5-2)
Morph Wheel offset in file 0x98 (b4-0)
Morph AT    offset in file 0x99 (b7-3)
Morph Pedal offset in file 0x99 (b2-0) and 0x9a (b7-6)

Organ B3 Fund (drawbar 3)
offset in file 0x9c (b2-0) and 0x9d (b7)
Morph Wheel offset in file 0x9a (b1-0) and 0x9b (b7-5)
Morph AT    offset in file 0x9b (b4-0)
Morph Pedal offset in file 0x9c (b7-3)

Organ B3 2nd (drawbar 4)
offset in file 0x9f (b7-4)
Morph Wheel offset in file 0x9d (b6-2)
Morph AT    offset in file 0x9d (b1-0) and 0x9e (b7-5)
Morph Pedal offset in file 0x9e (b4-0)

Organ B3 3rd (drawbar 5)
offset in file 0xa1 (b4-1)
Morph Wheel offset in file 0x9f (b3-0) and 0xa0 (b7)
Morph AT    offset in file 0xa0 (b6-2)
Morph Pedal offset in file 0xa0 (b1-0) and 0xa1 (b7-5)

Organ B3 4th (drawbar 6)
offset in file 0xa3 (b1-0) and 0xa4 (b7-6)
Morph Wheel offset in file 0xa1 (b0) and 0xa2 (b7-4)
Morph AT    offset in file 0xa2 (b3-0) and 0xa3 (b7)
Morph Pedal offset in file 0xa3 (b6-2)

Organ B3 5th (drawbar 7)
offset in file 0xa6 (b6-3)
Morph Wheel offset in file 0xa4 (b5-1)
Morph AT    offset in file 0xa4 (b0) and 0xa5 (b7-4)
Morph Pedal offset in file 0xa5 (b3-0) and 0xa6 (b7)

Organ B3 6th (drawbar 8)
offset in file 0xa8 (b3-0)
Morph Wheel offset in file 0xa6 (b2-0) and 0xa7 (b7-6)
Morph AT    offset in file 0xa7 (b5-1)
Morph Pedal offset in file 0xa7 (b0) and 0xa8 (b7-4)

Organ B3 8th (drawbar 9)
offset in file 0xaa (b0) and 0xab (b7-5)
Morph Wheel offset in file 0xa9 (b7-3)
Morph AT    offset in file 0xa9 (b2-0) and 0xaa (b7-6)
Morph Pedal offset in file 0xaa (b5-1)


ORGAN VOX DRAWBARS Preset II

Organ Vox 16' (drawbar 1)
offset in file 0xae (b0) and 0xaf (b7-5)
Morph Wheel offset in file 0xad (b7-3)
Morph AT    offset in file 0xad (b2-0) and 0xae (b7-6)
Morph Pedal offset in file 0xae (b6-1)

Organ Vox 8' (drawbar 2)
offset in file 0xb1 (b5-2)
Morph Wheel offset in file 0xaf (b4-0)
Morph AT    offset in file 0xb0 (b7-3)
Morph Pedal offset in file 0xb0 (b2-0) and 0xb1 (b7-6)

Organ Vox 4' (drawbar 3)
offset in file 0xb3 (b2-0) and 0xb4 (b7)
Morph Wheel offset in file 0xb1 (b1-0) and 0xb2 (b7-5)
Morph AT    offset in file 0xb2 (b4-0)
Morph Pedal offset in file 0xb3 (b7-3)

Organ Vox 2' (drawbar 4)
offset in file 0xb6 (b7-4)
Morph Wheel offset in file 0xb4 (b6-2)
Morph AT    offset in file 0xb4 (b1-0) and 0xb5 (b7-5)
Morph Pedal offset in file 0xb5 (b4-0)

Organ Vox II (drawbar 5)
offset in file 0xb8 (b4-1)
Morph Wheel offset in file 0xb6 (b3-0) and 0xb7 (b7)
Morph AT    offset in file 0xb7 (b6-2)
Morph Pedal offset in file 0xb7 (b1-0) and 0xb8 (b7-5)

Organ Vox III (drawbar 6)
offset in file 0xba (b1-0) and 0xbb (b7-6)
Morph Wheel offset in file 0xb8 (b0) and 0xb9 (b7-4)
Morph AT    offset in file 0xb9 (b3-0) and 0xba (b7)
Morph Pedal offset in file 0xba (b6-2)

Organ Vox IV (drawbar 7)
offset in file 0xbd (b6-3)
Morph Wheel offset in file 0xbb (b5-1)
Morph AT    offset in file 0xbb (b0) and 0xbc (b7-4)
Morph Pedal offset in file 0xbc (b3-0) and 0xbd (b7)

Organ Vox SIN (drawbar 8)
offset in file 0xbf (b3-0)
Morph Wheel offset in file 0xbd (b2-0) and 0xbe (b7-6)
Morph AT    offset in file 0xbe (b5-1)
Morph Pedal offset in file 0xbe (b0) and 0xbf (b7-4)

Organ Vox TRI (drawbar 9)
offset in file 0xc1 (b0) and 0xc2 (b7-5)
Morph Wheel offset in file 0xc0 (b7-3)
Morph AT    offset in file 0xc0 (b2-0) and 0xc1 (b7-6)
Morph Pedal offset in file 0xc1 (b5-1)


ORGAN FARFISA DRAWBARS Preset II
Farfisa drawbars are 1-Bit values, ON or OFF

Organ Farfisa Bass16 (drawbar 1)
offset in file 0xc4 (b1)
Morph Wheel offset in file 0xc4 (b7-6)
Morph AT    offset in file 0xc4 (b5-4)
Morph Pedal offset in file 0xc4 (b3-2)

Organ Farfisa Str16 (drawbar 2)
offset in file 0xc5 (b2)
Morph Wheel offset in file 0xc4 (b0) and 0xc5 (b7)
Morph AT    offset in file 0xc5 (b6-5)
Morph Pedal offset in file 0xc5 (b4-3)

Organ Farfisa Flu8 (drawbar 3)
offset in file 0xc6 (b3)
Morph Wheel offset in file 0xc5 (b1-0)
Morph AT    offset in file 0xc6 (b7-6)
Morph Pedal offset in file 0xc6 (b5-4)

Organ Farfisa Oboe8 (drawbar 4)
offset in file 0xc7 (b4)
Morph Wheel offset in file 0xc6 (b2-1)
Morph AT    offset in file 0xc6 (b0) and 0xc7 (b7)
Morph Pedal offset in file 0xc7 (b6-5)

Organ Farfisa Trump8 (drawbar 5)
offset in file 0xc8 (b5)
Morph Wheel offset in file 0xc7 (b3-2)
Morph AT    offset in file 0xc7 (b1-0)
Morph Pedal offset in file 0xc8 (b7-6)

Organ Farfisa Str8 (drawbar 6)
offset in file 0xc9 (b6)
Morph Wheel offset in file 0xc8 (b4-3)
Morph AT    offset in file 0xc8 (b2-1)
Morph Pedal offset in file 0xc8 (b0) and 0xc9 (b7)

Organ Farfisa Flu4 (drawbar 7)
offset in file 0xca (b7)
Morph Wheel offset in file 0xc9 (b5-4)
Morph AT    offset in file 0xc9 (b3-2)
Morph Pedal offset in file 0xc9 (b1-0)

Organ Farfisa Str4 (drawbar 8)
offset in file 0xca (b0)
Morph Wheel offset in file 0xca (b6-5)
Morph AT    offset in file 0xca (b4-3)
Morph Pedal offset in file 0xca (b2-1)

Organ Farfisa 2 2/3 (drawbar 9)
offset in file 0xcb (b1)
Morph Wheel offset in file 0xcb (b7-6)
Morph AT    offset in file 0xcb (b5-4)
Morph Pedal offset in file 0xcb (b3-2)
```

## NS2 Organ Program Output
Offset in file 0x59 (b3-2)

```
  0 = 1&2
  1 = 3&4
  2 = 3
  3 = 4

```

## NS2 Piano Slot Detune
Offset in file: 0x3B (b7-5)

```
  0 = Off
  1 = 1
  2 = 2
  3 = 3
  4 = 4

```

## NS2 Piano Dynamics
Offset in file: 0xCF (b3-2)

```
  0 = 0
  1 = 1
  2 = 2
  3 = 3

```

## NS2 Piano On
Offset in file: 0x48 (b7)

```
O = off, 1 = on
```

## NS2 Piano Kb Zone
Offset in file: 0x4C (b7-5)

```
0 = LO
1 = LO UP
2 = UP
3 = UP HI
4 = HI
5 = LO UP HI
```

## NS2 Piano Volume
Offset in file: 0x4B (b6-0)

```
Morph Wheel:
0x48 (b6): polarity (1 = positive, 0 = negative)
0x48 (b5-b0), 0x49 (b7): 7-bit raw value

Morph After Touch:
0x49 (b6): polarity (1 = positive, 0 = negative)
0x49 (b5-b0), 0x4A (b7): 7-bit raw value

Morph Control Pedal:
0x4A (b6): polarity (1 = positive, 0 = negative)
0x4A (b5-b0), 0x4B (b7): 7-bit raw value

if polarity = 1 then Morph offset value = raw value
if polarity = 0 then Morph offset value = 128 - raw value

Final 'To' Morph value = 'From value (original volume)' + 'Morph offset value'
Morph Enabled if  'From value' <> 'Morph offset value'
```

## NS2 Piano Octave Shift
Offset in file: 0x4C (b4-1)

```
Octave Shift = value - 7
```

## NS2 Piano Pitch Stick
Offset in file: 0x4C (b0)

```
O = off, 1 = on
```

## NS2 Piano Sustain Pedal
Offset in file: 0x4D (b7)

```
O = off, 1 = on
```

## NS2 Piano Latch Pedal
Offset in file: 0x5A (b7)

```
O = off, 1 = on
```

## NS2 Piano Kb Gate
Offset in file: 0x5A (b6)

```
O = off, 1 = on
```

## NS2 Piano Type
Offset in file: 0xCD (b7-5)

```
  0 = Grand
  1 = Upright
  2 = E Piano 1
  3 = E Piano 2
  4 = Clavinet
  5 = Harpsi

```

## NS2 Piano Sample ID
Offset in file: 0xD0 (b5-0), 0xD1/0xD3 (b7-0), and 0xD4 (b7-6)

```
32-bit Nord Sample ID
```

## NS2 Piano Long Release
Offset in file: 0xCF (b6)

```
O = off, 1 = on
```

## NS2 Piano String Resonance
Offset in file: 0xCF (b5)

```
O = off, 1 = on

Only on Acoustic Grand or Upright Piano
```

## NS2 Piano Pedal Noise
Offset in file: 0xCF (b4)

```
O = off, 1 = on

Only on Acoustic and Electric piano.
```

## NS2 Piano Clavinet Model
Offset in file: 0xCE (b0) and 0xCF (b7)

```
  0 = A
  1 = B
  2 = C
  3 = D

```

## NS2 Piano Clavinet Eq Hi
Offset in file: 0xCF (b1-0)

```
  0 = Off
  1 = Treble
  2 = Brilliant
  3 = Treble+Brilliant

```

## NS2 Piano Clavinet Eq
Offset in file: 0xD0 (b7-6)

```
  0 = Off
  1 = Soft
  2 = Medium
  3 = Soft+Medium

```

## NS2 Piano Program Output
Offset in file 0x58 (b1-0)

```
  0 = 1&2
  1 = 3&4
  2 = 3
  3 = 4

```

## NS2 File Version
Offset in file: 0x14 and 0x15

```
16-bit integer value in Little Endian format
current supported version are 2 to 7
```

## NS2 File Format
Offset in file: 0x04

```
0 = header type 0 - legacy mode no CRC (Byte 0x18 to 0x2B are missing)
1 = header type 1 - default mode with additional bytes 0x18 to 0x2B (20 bytes).
```

## NS2 Transpose
Offset in file: 0x30 (b5-1)

```
Enabled: (b5)
Value: (b4-1)
  0 = -6
  1 = -5
  2 = -4
  3 = -3
  4 = -2
  5 = -1
  6 = OFF
  7 = +1
  8 = +2
  9 = +3
  10 = +4
  11 = +5
  12 = +6

```

## NS2 Split
```
3 SPLIT ZONES
Offset in file 0x2f (b3)
0 = OFF
1 = ON

2 SPLIT ZONES
Offset in file 0x2f (b2)
0 = OFF
1 = ON

SPLIT POINT LOW/ SPLIT POINT DUAL
Offset in file 0x2e (b3-0)
0 = F2
1 = C3
2 = F3
3 = C4
4 = F4
5 = C5
6 = F5
7 = C6
8 = F6
9 = C7

SPLIT POINT HIGH
Offset in file 0x2f (b7-4)
1 = C3
2 = F3
3 = C4
4 = F4
5 = C5
6 = F5
7 = C6
8 = F6
9 = C7
```

## NS2 Master Clock Rate
Offset in file: 0x31 (b4-0) 0x32 (b7-5)

```
bpm = value + 30
```

## NS2 Dual Keyboard
Offset in file 0x2e (b5)

```
0 = Off
1 = On

Note: if Dual Keyboard is On, both panel are enabled.
```

## NS2 Program Category
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

## NS2 Slot Enabled And Selection
Offset in file 0x2e

```
Enabled (b6-5):
0 = Slot A
1 = Slot B
2 = Slot A&B with focus Slot A
3 = Slot A&B with focus Slot B

Note: if Dual Keyboard is On, both panel are enabled.
```

## NS2 Synth Filter Type
Offset in file: 0xf3 (b3-1)

```
  0 = LP12
  1 = LP24
  2 = HP
  3 = NOTCH
  4 = BP

```

## NS2 Synth Filter Kb Track
Offset in file: 0xf3 (b4)

```
0 = OFF
1 = ON
```

## NS2 Synth Filter Freq
Offset in file: 0xef (b0) and 0xf0 (b7-2)

**See**: [Organ Volume](#ns2-organ-volume) for detailed Morph explanation.  
```
0/127 value = 20 Hz / 21 kHz
  0 = 20 Hz
  1 = 21 Hz
  2 = 22 Hz
  3 = 24 Hz
  4 = 25 Hz
  5 = 26 Hz
  6 = 28 Hz
  7 = 29 Hz
  8 = 31 Hz
  9 = 33 Hz
  10 = 35 Hz
  11 = 37 Hz
  12 = 39 Hz
  13 = 41 Hz
  14 = 43 Hz
  15 = 45 Hz
  16 = 48 Hz
  17 = 51 Hz
  18 = 54 Hz
  19 = 57 Hz
  20 = 60 Hz
  21 = 63 Hz
  22 = 67 Hz
  23 = 70 Hz
  24 = 74 Hz
  25 = 79 Hz
  26 = 83 Hz
  27 = 88 Hz
  28 = 93 Hz
  29 = 98 Hz
  30 = 103 Hz
  31 = 109 Hz
  32 = 115 Hz
  33 = 122 Hz
  34 = 129 Hz
  35 = 136 Hz
  36 = 144 Hz
  37 = 152 Hz
  38 = 160 Hz
  39 = 169 Hz
  40 = 179 Hz
  41 = 189 Hz
  42 = 200 Hz
  43 = 211 Hz
  44 = 223 Hz
  45 = 235 Hz
  46 = 248 Hz
  47 = 262 Hz
  48 = 277 Hz
  49 = 293 Hz
  50 = 309 Hz
  51 = 327 Hz
  52 = 345 Hz
  53 = 365 Hz
  54 = 385 Hz
  55 = 407 Hz
  56 = 430 Hz
  57 = 454 Hz
  58 = 479 Hz
  59 = 506 Hz
  60 = 535 Hz
  61 = 565 Hz
  62 = 597 Hz
  63 = 631 Hz
  64 = 666 Hz
  65 = 704 Hz
  66 = 743 Hz
  67 = 785 Hz
  68 = 829 Hz
  69 = 876 Hz
  70 = 925 Hz
  71 = 977 Hz
  72 = 1 kHz
  73 = 1.1 kHz
  74 = 1.2 kHz
  75 = 1.2 kHz
  76 = 1.3 kHz
  77 = 1.4 kHz
  78 = 1.4 kHz
  79 = 1.5 kHz
  80 = 1.6 kHz
  81 = 1.7 kHz
  82 = 1.8 kHz
  83 = 1.9 kHz
  84 = 2.0 kHz
  85 = 2.1 kHz
  86 = 2.2 kHz
  87 = 2.3 kHz
  88 = 2.5 kHz
  89 = 2.6 kHz
  90 = 2.8 kHz
  91 = 2.9 kHz
  92 = 3.1 kHz
  93 = 3.3 kHz
  94 = 3.4 kHz
  95 = 3.6 kHz
  96 = 3.8 kHz
  97 = 4.1 kHz
  98 = 4.3 kHz
  99 = 4.5 kHz
  100 = 4.8 kHz
  101 = 5.1 kHz
  102 = 5.3 kHz
  103 = 5.6 kHz
  104 = 6.0 kHz
  105 = 6.3 kHz
  106 = 6.6 kHz
  107 = 7.0 kHz
  108 = 7.4 kHz
  109 = 7.8 kHz
  110 = 8.3 kHz
  111 = 8.7 kHz
  112 = 9.2 kHz
  113 = 10 kHz
  114 = 10 kHz
  115 = 11 kHz
  116 = 11 kHz
  117 = 12 kHz
  118 = 13 kHz
  119 = 14 kHz
  120 = 14 kHz
  121 = 15 kHz
  122 = 16 kHz
  123 = 17 kHz
  124 = 18 kHz
  125 = 19 kHz
  126 = 20 kHz
  127 = 21 kHz


Morph Wheel:
Offset in file 0xec (b0) 0xed (b7-1)

Morph After Touch:
Offset in file 0xed (b0) 0xee (b7-1)

Morph Control Pedal:
Offset in file 0xee (b0) 0xef (b7-1)
```

## NS2 Synth Filter Res
Offset in file: 0xf0 (b1-0) and 0xf1 (b7-3)

```
0/127 value = 0 / 10
```

## NS2 Synth Filter Mod 1
Offset in file: 0xf2 (b3-0) and 0xf3 (b7-5)

```
0/127 value = 0 / 10
```

## NS2 Synth Filter Mod 2
Offset in file: 0xf1 (b2-0) and 0xf2 (b7-4)

```
VEL from 0 - 63 'Vel Amount'
MOD ENV from 64 - 127 'Mod Env Amount'

  0 = 10.0
  1 = 9.8
  2 = 9.6
  3 = 9.5
  4 = 9.3
  5 = 9.1
  6 = 9.0
  7 = 8.8
  8 = 8.7
  9 = 8.5
  10 = 8.3
  11 = 8.2
  12 = 8.0
  13 = 7.9
  14 = 7.7
  15 = 7.5
  16 = 7.4
  17 = 7.2
  18 = 7.0
  19 = 6.9
  20 = 6.7
  21 = 6.6
  22 = 6.4
  23 = 6.2
  24 = 6.1
  25 = 5.9
  26 = 5.8
  27 = 5.6
  28 = 5.4
  29 = 5.3
  30 = 5.1
  31 = 5.0
  32 = 4.8
  33 = 4.6
  34 = 4.5
  35 = 4.3
  36 = 4.1
  37 = 4.0
  38 = 3.8
  39 = 3.7
  40 = 3.5
  41 = 3.3
  42 = 3.2
  43 = 3.0
  44 = 2.9
  45 = 2.7
  46 = 2.5
  47 = 2.4
  48 = 2.2
  49 = 2.0
  50 = 1.9
  51 = 1.7
  52 = 1.6
  53 = 1.4
  54 = 1.2
  55 = 1.1
  56 = 0.9
  57 = 0.8
  58 = 0.6
  59 = 0.4
  60 = 0.3
  61 = 0.1
  62 = 0.0
  63 = 0.0
  64 = 0.0
  65 = 0.0
  66 = 0.1
  67 = 0.3
  68 = 0.4
  69 = 0.6
  70 = 0.8
  71 = 0.9
  72 = 1.1
  73 = 1.2
  74 = 1.4
  75 = 1.6
  76 = 1.7
  77 = 1.9
  78 = 2.0
  79 = 2.2
  80 = 2.4
  81 = 2.5
  82 = 2.7
  83 = 2.9
  84 = 3.0
  85 = 3.2
  86 = 3.3
  87 = 3.5
  88 = 3.7
  89 = 3.8
  90 = 4.0
  91 = 4.1
  92 = 4.3
  93 = 4.5
  94 = 4.6
  95 = 4.8
  96 = 5.0
  97 = 5.1
  98 = 5.3
  99 = 5.4
  100 = 5.6
  101 = 5.8
  102 = 5.9
  103 = 6.1
  104 = 6.2
  105 = 6.4
  106 = 6.6
  107 = 6.7
  108 = 6.9
  109 = 7.0
  110 = 7.2
  111 = 7.4
  112 = 7.5
  113 = 7.7
  114 = 7.9
  115 = 8.0
  116 = 8.2
  117 = 8.3
  118 = 8.5
  119 = 8.7
  120 = 8.8
  121 = 9.0
  122 = 9.1
  123 = 9.3
  124 = 9.5
  125 = 9.6
  126 = 9.8
  127 = 10.0

```

## NS2 Synth Sample ID
Offset in file: 0xf7 (b1-0) to 0xfb (b7-2)

```
32-bit synth sample hash code.
```

## NS2 Synth Voice
Offset in file: 0xfc (b2-1)

```
  0 = Off
  1 = Legato
  2 = Mono

```

## NS2 Synth Glide
Offset in file: 0xfb (b1-0) and 0xfc (b7-3)

```
0/127 value = 0 / 10
```

## NS2 Synth Unison
Offset in file: 0xfc (b0) and 0xfd (b7-6)

```
  0 = Off
  1 = 1
  2 = 2
  3 = 3
  4 = Multi 1
  5 = Multi 2
  6 = Multi 3

```

## NS2 Synth Vibrato
Offset in file: 0xfd (b5-3)

```
  0 = Off
  1 = Delay 1
  2 = Delay 2
  3 = Delay 3
  4 = AT
  5 = Wheel

```

## NS2 Synth Arp On
Offset in file: 0xd9 (b0)

```
O = off, 1 = on
```

## NS2 Synth Osc Mode
Offset in file: 0xe1 (b1-0) and 0xe2 (b7)

```
  0 = TRI
  1 = SAW
  2 = SQR
  3 = SAMPLE
  4 = FM
  5 = WAVE

```

## NS2 Synth Osc WaveForm
Offset in file: 0xe2 (b6-0) and 0xe3 (b7-5)

```
TRI:
  0 = ---,Analog Tri
  1 = ShP,Analog Shape Tri
  2 = dtn,Analog Detune Tri
  3 = Snc,Analog Tri Synced


SAW:
  0 = ---,Analog Saw
  1 = ShP,Analog Shape Saw
  2 = dtn,Analog Detune Saw
  3 = Snc,Analog Saw Synced


PULSE:
  0 = ---,Analog Sqr
  1 = ShP,Analog Shape Sqr
  2 = dtn,Analog Detune Sqr
  3 = Snc,Analog Pulse Synced


FM:
  0 = Sin,1-OP (+FB)
  1 = 1 1,2-OP 1:1
  2 = 2 1,2-OP 2:1
  3 = 3 1,2-OP 3:1
  4 = 4 1,2-OP 4:1
  5 = 5 1,2-OP 5:1
  6 = 6 1,2-OP 6:1
  7 = 7 1,2-OP 7:1
  8 = 8 1,2-OP 8:1
  9 = 9 1,2-OP 9:1
  10 = 1.1,2-OP 1:1 (+FB)
  11 = 2.1,2-OP 2:1 (+FB)
  12 = 3.1,2-OP 3:1 (+FB)
  13 = 4.1,2-OP 4:1 (+FB)
  14 = 5.1,2-OP 5:1 (+FB)
  15 = 6.1,2-OP 6:1 (+FB)
  16 = 7.1,2-OP 7:1 (+FB)
  17 = 8.1,2-OP 8:1 (+FB)
  18 = 9.1,2-OP 9:1 (+FB)
  19 = 111,3-OP 1:1:1
  20 = 211,3-OP 2:1:1
  21 = 311,3-OP 3:1:1
  22 = 511,3-OP 5:1:1
  23 = 911,3-OP 9:1:1
  24 = 221,3-OP 2:2:1
  25 = 421,3-OP 4:2:1
  26 = 821,3-OP 8:2:1
  27 = 1.11,3-OP 1:1:1 (+FB)
  28 = 1.21,3-OP 1:2:1 (+FB)
  29 = 1.31,3-OP 1:3:1 (+FB)
  30 = 1.51,3-OP 1:5:1 (+FB)
  31 = 1.91,3-OP 1:9:1 (+FB)
  32 = 1.12,3-OP 1:1:2 (+FB)
  33 = 2.12,3-OP 2:1:2 (+FB)
  34 = 3.12,3-OP 3:1:2 (+FB)
  35 = 5.12,3-OP 5:1:2 (+FB)
  36 = 9.12,3-OP 9:1:2 (+FB)


WAVE:
  0 = 1,Organ1
  1 = 2,Organ2
  2 = 3,Organ3
  3 = 4,Organ4
  4 = 5,Organ5
  5 = 6,Organ6
  6 = 7,Organ7
  7 = 8,Organ8
  8 = 9,Organ9
  9 = 10,EP1
  10 = 11,EP2
  11 = 12,Tine
  12 = 13,Bar
  13 = 14,Bell
  14 = 15,saw-spectra1
  15 = 16,saw-spectra2
  16 = 17,2nd-spectra
  17 = 18,3rd-spectra
  18 = 19,4th-spectra
  19 = 20,6th-spectra
  20 = 21,Sting
  21 = 22,HighDensity
  22 = 23,NoMid
  23 = 24,Wave
  24 = 25,32Flat
  25 = 26,64Flat
  26 = 27,Box
  27 = 28,Triplets
  28 = 29,SoftBright
  29 = 30,Clav
  30 = 31,DX1
  31 = 32,DX2
  32 = 33,DX3
  33 = 34,NoFundSaw
  34 = 35,Ice1
  35 = 36,Ice2
  36 = 37,SoftClav
  37 = 38,Bright
  38 = 39,Frog
  39 = 40,HighFlat
  40 = 41,Linear
  41 = 42,FM_Organ
  42 = 43,Reso1
  43 = 44,Reso2
  44 = 45,Reso3
  45 = 46,Reso4
  46 = 47,Reso5
  47 = 48,Reso6
  48 = 49,Reso7
  49 = 50,Reso8
  50 = 51,Reso9
  51 = 52,Reso10
  52 = 53,Reso11
  53 = 54,Reso12
  54 = 55,Reso13
  55 = 56,Reso14
  56 = 57,Reso15
  57 = 58,Reso16
  58 = 59,Reso17
  59 = 60,Reso18
  60 = 61,Reso19
  61 = 62,Reso20

```

## NS2 Synth Shape
Offset in file: 0xe6 (b4-0) and 0xe7 (7-6)

```
For '---', 'Shp', and 'Snc':

7-bits value = 0 / 10

Morph Wheel:
Offset in file 0xe3 (b4-0) 0xe4 (b7-5)

Morph After Touch:
Offset in file 0xe4 (b4-0) 0xe5 (b7-5)

Morph Control Pedal:
Offset in file 0xe5 (b4-0) 0xe6 (b7-5)

For 'dtn':
Offset in file: 0xeb (b5-0)
5-bits value = -12 / +12
```

## NS2 Synth Shape Detune
Offset in file: 0xEB (b5-0)

```
For 'dtn':

5-bits value = -12 / +12
```
```
Morph Wheel:
Offset in file: 0xE8 (b6-0) and 0xE9 (b7)

Morph After Touch:
Offset in file: 0xE9 (b6-0) and 0xEA (b7)

Morph Control Pedal:
Offset in file: 0xEA (b6-0) and 0xEB (b7)
```

## NS2 Synth Shape Mod
Offset in file: 0xe7 (b5-0) and 0xe8 (b7)

```
LFO from 0-63
MOD ENV from 64-127
```

## NS2 Synth Skip Sample Attack
Offset in file: 0xec (b1)

```
O = off, 1 = on

(only used on SAMPLE)

Morph Wheel:
Offset in file:  0xec (b7-6)

Morph After Touch:
Offset in file:  0xec (b5-4)

Morph Control Pedal:
Offset in file:  0xec (b3-2)

0x00 = Morph disabled
0x01 = Morph to on
0x11 = Morph to off
```

## NS2 Synth Mod Env Attack
Offset in file: 0xdf (b7-1)

```
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
  10 = 3 ms
  11 = 3.5 ms
  12 = 4 ms
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
  65 = 1.1 s
  66 = 1.19 s
  67 = 1.28 s
  68 = 1.38 s
  69 = 1.49 s
  70 = 1.6 s
  71 = 1.72 s
  72 = 1.85 s
  73 = 1.99 s
  74 = 2.13 s
  75 = 2.28 s
  76 = 2.45 s
  77 = 2.62 s
  78 = 2.81 s
  79 = 3 s
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
  93 = 7.3 s
  94 = 7.75 s
  95 = 8.22 s
  96 = 8.72 s
  97 = 9.25 s
  98 = 9.8 s
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

## NS2 Synth Mod Env Decay
Offset in file: 0xdf (b0) and 0xe0 (b7-2)

```
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
  59 = 1050 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.3 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.7 s
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
  80 = 4.1 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.5 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10.0 s
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

## NS2 Synth Mod Env Release
Offset in file: 0xe0 (b1-0) and 0xe1 (b7-3)

```
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
  59 = 1050 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.3 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.7 s
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
  80 = 4.1 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.5 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10.0 s
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

## NS2 Synth Mod Env Velocity
Offset in file: 0xe1 (b2)

```
O = off, 1 = on
```

## NS2 Synth Amp Env Attack
Offset in file: 0xf3 (b0) and 0xf4 (b7-2)

```
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
  10 = 3 ms
  11 = 3.5 ms
  12 = 4 ms
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
  65 = 1.1 s
  66 = 1.19 s
  67 = 1.28 s
  68 = 1.38 s
  69 = 1.49 s
  70 = 1.6 s
  71 = 1.72 s
  72 = 1.85 s
  73 = 1.99 s
  74 = 2.13 s
  75 = 2.28 s
  76 = 2.45 s
  77 = 2.62 s
  78 = 2.81 s
  79 = 3 s
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
  93 = 7.3 s
  94 = 7.75 s
  95 = 8.22 s
  96 = 8.72 s
  97 = 9.25 s
  98 = 9.8 s
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

## NS2 Synth Amp Env Decay
Offset in file: 0xf4 (b1-0) and 0xf5 (b7-3)

```
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
  59 = 1050 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.3 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.7 s
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
  80 = 4.1 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.5 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10.0 s
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

## NS2 Synth Amp Env Release
Offset in file: 0xf5 (b2-0) and 0xf6 (b7-4)

```
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
  59 = 1050 s
  60 = 1.13 s
  61 = 1.21 s
  62 = 1.3 s
  63 = 1.39 s
  64 = 1.49 s
  65 = 1.59 s
  66 = 1.7 s
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
  80 = 4.1 s
  81 = 4.35 s
  82 = 4.61 s
  83 = 4.89 s
  84 = 5.18 s
  85 = 5.49 s
  86 = 5.81 s
  87 = 6.15 s
  88 = 6.5 s
  89 = 6.88 s
  90 = 7.27 s
  91 = 7.68 s
  92 = 8.11 s
  93 = 8.57 s
  94 = 9.04 s
  95 = 9.54 s
  96 = 10.0 s
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

## NS2 Synth Amp Env Velocity
Offset in file: 0xf6 (b3)

```
O = off, 1 = on
```

## NS2 Synth Lfo Wave
Offset in file: 0xf7 (b3-2)

```
  0 = SQUARE
  1 = SAW
  2 = TRI
  3 = S/H

```

## NS2 Synth Lfo Rate
```
Offset in file: 0xdc (b5-2) (if LFO MST CLOCK = ON)

  0 = 4/1
  1 = 4/1T
  2 = 2/1
  3 = 2/1T
  4 = 1/1
  5 = 1/1T
  6 = 1/2
  7 = 1/2T
  8 = 1/4
  9 = 1/4T
  10 = 1/8
  11 = 1/8T
  12 = 1/16
  13 = 1/16T
  14 = 1/32


Offset in file: 0xf6 (b2-0) 0xf7 (b7-4) (if LFO MST CLOCK = OFF)

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
  16 = 0.1 Hz
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
  39 = 0.6 Hz
  40 = 0.64 Hz
  41 = 0.7 Hz
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

```

## NS2 Synth Lfo Master Clock
Offset in file: 0xdc (b6)

```
O = off, 1 = on
```

## NS2 Synth On
Offset in file: 0x4d (b6)

```
O = off, 1 = on
```

## NS2 Synth Kb Zone
Offset in file: 0x51 (b6-4)

```
0 = LO
1 = LO UP
2 = UP
3 = UP HI
4 = HI
5 = LO UP HI
```

## NS2 Synth Volume
Offset in file: 0x50 (b5-0) and 0x51 (b7)

```
Morph Wheel:
offset in file 0x4d (b5-0) 0x4e (b7-6)

Morph After Touch:
offset in file 0x4e (b5-0) 0x4f (b7-6)

Morph Control Pedal:
offset in file 0x4f (b5-0) 0x50 (b7-6)
```

## NS2 Synth Octave Shift
Offset in file: 0x51 (b3-0)

```
Octave Shift = value - 7
```

## NS2 Synth Pitch Stick
Offset in file: 0x52 (b7)

```
O = off, 1 = on
```

## NS2 Synth Sustain Pedal
Offset in file: 0x52 (b6)

```
O = off, 1 = on
```

## NS2 Synth Latch Pedal
Offset in file: 0x5a (b5)

```
O = off, 1 = on
```

## NS2 Synth Kb Gate
Offset in file: 0x5a (b4)

```
O = off, 1 = on
```

## NS2 Synth Kb Hold
Offset in file: 0xdc (b1)

```
O = off, 1 = on
```

## NS2 Synth Arp Rate
```
Offset in file: 0xda (b6-3) (if MST CLK is ON)
  0 = 1/2
  1 = 1/2T
  2 = 1/4
  3 = 1/4T
  4 = 1/8
  5 = 1/8T
  6 = 1/16
  7 = 1/16T
  8 = 1/32


Offset in file: 0xda (b1-0) and 0xdb (b7-3) (if MST CLK is OFF)
  0 = 80 BPM
  1 = 82 BPM
  2 = 84 BPM
  3 = 86 BPM
  4 = 88 BPM
  5 = 90 BPM
  6 = 92 BPM
  7 = 94 BPM
  8 = 96 BPM
  9 = 98 BPM
  10 = 100 BPM
  11 = 102 BPM
  12 = 104 BPM
  13 = 106 BPM
  14 = 108 BPM
  15 = 110 BPM
  16 = 112 BPM
  17 = 114 BPM
  18 = 116 BPM
  19 = 118 BPM
  20 = 120 BPM
  21 = 122 BPM
  22 = 124 BPM
  23 = 126 BPM
  24 = 128 BPM
  25 = 130 BPM
  26 = 132 BPM
  27 = 134 BPM
  28 = 136 BPM
  29 = 138 BPM
  30 = 140 BPM
  31 = 142 BPM
  32 = 144 BPM
  33 = 148 BPM
  34 = 152 BPM
  35 = 156 BPM
  36 = 160 BPM
  37 = 82:8 BPM
  38 = 84:8 BPM
  39 = 86:8 BPM
  40 = 88:8 BPM
  41 = 90:8 BPM
  42 = 92:8 BPM
  43 = 94:8 BPM
  44 = 96:8 BPM
  45 = 98:8 BPM
  46 = 100:8 BPM
  47 = 102:8 BPM
  48 = 104:8 BPM
  49 = 106:8 BPM
  50 = 108:8 BPM
  51 = 110:8 BPM
  52 = 112:8 BPM
  53 = 114:8 BPM
  54 = 116:8 BPM
  55 = 118:8 BPM
  56 = 120:8 BPM
  57 = 122:8 BPM
  58 = 124:8 BPM
  59 = 126:8 BPM
  60 = 128:8 BPM
  61 = 130:8 BPM
  62 = 132:8 BPM
  63 = 134:8 BPM
  64 = 136:8 BPM
  65 = 140:8 BPM
  66 = 144:8 BPM
  67 = 148:8 BPM
  68 = 152:8 BPM
  69 = 156:8 BPM
  70 = 160:8 BPM
  71 = 82:16 BPM
  72 = 84:16 BPM
  73 = 86:16 BPM
  74 = 88:16 BPM
  75 = 90:16 BPM
  76 = 92:16 BPM
  77 = 94:16 BPM
  78 = 96:16 BPM
  79 = 98:16 BPM
  80 = 100:16 BPM
  81 = 102:16 BPM
  82 = 104:16 BPM
  83 = 106:16 BPM
  84 = 108:16 BPM
  85 = 110:16 BPM
  86 = 112:16 BPM
  87 = 114:16 BPM
  88 = 116:16 BPM
  89 = 118:16 BPM
  90 = 120:16 BPM
  91 = 122:16 BPM
  92 = 124:16 BPM
  93 = 126:16 BPM
  94 = 128:16 BPM
  95 = 130:16 BPM
  96 = 132:16 BPM
  97 = 136:16 BPM
  98 = 140:16 BPM
  99 = 144:16 BPM
  100 = 148:16 BPM
  101 = 152:16 BPM
  102 = 156:16 BPM
  103 = 160:16 BPM
  104 = 82:32 BPM
  105 = 84:32 BPM
  106 = 86:32 BPM
  107 = 88:32 BPM
  108 = 90:32 BPM
  109 = 92:32 BPM
  110 = 94:32 BPM
  111 = 96:32 BPM
  112 = 98:32 BPM
  113 = 100:32 BPM
  114 = 102:32 BPM
  115 = 104:32 BPM
  116 = 106:32 BPM
  117 = 108:32 BPM
  118 = 110:32 BPM
  119 = 112:32 BPM
  120 = 114:32 BPM
  121 = 116:32 BPM
  122 = 118:32 BPM
  123 = 120:32 BPM
  124 = 122:32 BPM
  125 = 124:32 BPM
  126 = 126:32 BPM
  127 = 128:32 BPM

```

## NS2 Synth Arp Master Clock
Offset in file: 0xda (b7)

```
O = off, 1 = on
```

## NS2 Synth Arp Range
Offset in file: 0xdb (b0) and 0xdc (b7)

```
  0 = 1 Octave
  1 = 2 Octaves
  2 = 3 Octaves
  3 = 4 Octaves

```

## NS2 Synth Arp Pattern
Offset in file: 0xdb (b2-1)

```
  0 = UP
  1 = DN
  2 = UP/DN
  3 = RANDOM

```

## NS2 Synth Program Output
Offset in file 0x59 (b5-6)

```
  0 = 1&2
  1 = 3&4
  2 = 3
  3 = 4

```
