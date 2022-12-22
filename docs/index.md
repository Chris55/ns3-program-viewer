
## Let's get started

This file documents the Nord Stage program file structure. It is handmade by [NUF](https://www.norduserforum.com/nord-stage-forum-f3/ns3-program-viewer-t19939.html) users and is not officially supported by Nord Keyboards / Clavia DMI AB.
While we certainly hope this document is useful, none of the authors or contributors place any guarantees as to the accuracy of the data.

We contacted Nord Keyboards / Clavia DMI AB support about this project, answer from the support

> I talked to the guys here, and it is fine with us for you to proceed with this project - as long as you accompany your published work with a disclaimer that Clavia in no way is affiliated with it. We will not be able to provide any assistance with this, but good luck nonetheless!
>
> @Clavia Support.

### Application

The application is available in both format:

- Online version: [https://ns3-program-viewer.cyclic.app](https://ns3-program-viewer.cyclic.app)

- Offline version also available as standalone desktop application:
  - Windows: [https://github.com/Chris55/ns3-program-viewer/releases](https://github.com/Chris55/ns3-program-viewer/releases)
  - Mac: AppStore - [https://apps.apple.com/app/id1549939673](https://apps.apple.com/app/id1549939673)

Source is located here: [https://github.com/Chris55/ns3-program-viewer](https://github.com/Chris55/ns3-program-viewer)

* * *

### Summary
- [Disclaimer](#disclaimer)
- [Contributors](#contributors)
- [License](#license)
- [Revision](#revision)
- [Nord Stage 3 Program File Structure](#nord-stage-3-program-file-structure)
- [Nord Stage 3 Synth File Structure](#nord-stage-3-synth-file-structure)
- [Nord Stage 2 Program File Structure](#nord-stage-2-program-file-structure)
- [Nord Stage 2 Synth File Structure](#nord-stage-2-synth-file-structure)


## Disclaimer
We are not affiliated, associated, endorsed by, or in any way officially connected with Nord Keyboards / Clavia DMI AB, or any of its subsidiaries or its affiliates.
The official Nord Keyboards website can be found at https://www.nordkeyboards.com
The names Nord and Clavia as well as related names, marks, emblems and images are registered trademarks of their respective owners.



## Contributors
- [Christian Florentz](https://www.linkedin.com/in/christian-florentz-b2530575/) (@florence)
- [Andreas Gallenmueller](https://www.linkedin.com/in/andreas-gallenmueller-0b09721/) (@gaaal)
- Thanks to other NUF members: @cookie, @gordon, @rpossemo, @hobster

## Revision

| rev  | date         | description
| :--- | :----------- | :--------------------------------------------------------------------------------
| 0.1  | 23-Sep-2020  | Draft version
| 0.2  | 26-Sep-2020  | Added Delay section
| 1.0  | 27-Sep-2020  | Added Amp Sim / Eq section and bumped to v1.0
| 1.1  | 29-Dec-2020  | Fixed NS3 Organ mapping (0x00DB was missing)
|      |              | Added NS3 missing Organ Preset II options
|      |              | Simplified NS3 Morph implementation
|      |              | Added NS3 Synth Preset
|      |              | Fixed typo in offsets 0x011B, 0x011D, 0x011F, and 0x119
|      |              | Fixed NS3 panel starting offset
|      |              | Added Stage 2 mapping
|1.2   | 06-Feb-2021  | Cleanup
|1.4   | 24-Apr-2021  | Added header details
|1.5   | 25-Apr-2021  | Added NS2 and NS3 Extern menu details
|1.6   | 29-Apr-2021  | Added NS2 and NS3 Output Routing
|1.7   | 05-Jun-2021  | Added NS2 Wave details on LCD and main display
|1.8   | 08-Jun-2021  | Added NS2 Analog Wave Detune Shape details
|1.9   | 17-Jun-2021  | Added NS2 Synth skip sample attack morph
|1.10  | 27-Jun-2021  | Added ns2s & ns3y Synth file details
|1.11  | 28-Jun-2021  | Fixed typo in NS3 Delay Tempo
|1.12  | 24-Sep-2021  | Added NS3 OS 2.60
|1.13  | 02-Dec-2021  | Added NS3 OS 2.62

\newpage


## License
This mapping is provided as-is under the MIT license.

Copyright (c) 2020, 2021 Christian Florentz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

\newpage
## Nord Stage 3 Program File Structure

This mapping corresponds to the Nord Stage 3 program file (file extension ns3f).

Offset 0x04 defines the file header format.

| type  | size  | description
| :---: | :---: | :------------------------
| 0     |  574  | Legacy format no CRC (Byte 0x18 to 0x2B are missing).
| 1     |  592  | New format with additional bytes 0x18 to 0x2B (20 bytes). All file saved with Nord Sound Manager v7.40 (2018-12-18) or later are using this version.


Each memory offset corresponds to an 8-bit value, example:

0x01 (hex) = 00000001 -> bit 0 is ‘1’

0x84 (hex) = 10000100 -> bit 7 and 2 are ‘1’

In the documentation below `--xxxxxx` (b5-0) means Bit5 to Bit0 are used.


| offset   | bits       | description
| :---:    |   :----:   | :-------------------------------------------------
| `0x0000` | `cccccccc` | ascii C - 0x43, 4-byte Clavia ID
| `0x0001` | `cccccccc` | ascii B - 0x42
| `0x0002` | `cccccccc` | ascii I - 0x49
| `0x0003` | `cccccccc` | ascii N - 0x4E
| `0x0004` | `ffffffff` | [(f) file format](#ns3-file-format)
| `0x0005` | `--------` | 0
| `0x0006` | `--------` | 0
| `0x0007` | `--------` | 0
| `0x0008` | `cccccccc` | ascii n - 0x6E, 4-byte NS3 Program file ID
| `0x0009` | `cccccccc` | ascii s - 0x73,
| `0x000A` | `cccccccc` | ascii 3 - 0x33,
| `0x000B` | `cccccccc` | ascii f - 0x66,
| `0x000C` | `bbbbbbbb` | (b) bank lsb (0 = A, 1 = B . . . )
| `0x000D` | `--------` | 0
| `0x000E` | `llllllll` | (l) location lsb (0 = 11, 1 = 12 . . .)
| `0x000F` | `--------` | 0
| `0x0010` | `cccccccc` | [(c) program category](#ns3-program-category)
| `0x0011` | `--------` |
| `0x0012` | `--------` |
| `0x0013` | `--------` |
| `0x0014` | `iiiiiiii` | [(i) file version](#ns3-file-version) (16-bit)
| `0x0015` | `iiiiiiii` |
| `0x0016` | `--------` |
| `0x0017` | `--------` |
| `0x0018` | `cccccccc` | (c) CRC1 (32-bit)
| `0x0019` | `cccccccc` |
| `0x001A` | `cccccccc` |
| `0x001B` | `cccccccc` |
| `0x001C` | `--------` |
| `0x001D` | `--------` |
| `0x001E` | `--------` |
| `0x001F` | `--------` |
| `0x0020` | `--------` |
| `0x0021` | `--------` |
| `0x0022` | `--------` |
| `0x0023` | `--------` |
| `0x0024` | `--------` |
| `0x0025` | `--------` |
| `0x0026` | `--------` |
| `0x0027` | `--------` |
| `0x0028` | `--------` |
| `0x0029` | `--------` |
| `0x002A` | `--------` |
| `0x002B` | `--------` |
| `0x002C` | `--------` | 0
| `0x002D` | `--------` | 0
| `0x002E` | `vvvvvvvv` | version 16-bit integer value in Big Endian format
| `0x002F` | `vvvvvvvv` |
| `0x0030` | `--------` | 11
| `0x0031` | `pppsssss` | [(p) panel](#ns3-panel-enabled-and-selection), [(s) split](#ns3-split)
| `0x0032` | `ssssssss` |
| `0x0033` | `ssssssss` |
| `0x0034` | `sddpvvvr` | [(d) piano layer detune](#ns3-piano-layer-detune), [(p) organ pitch stick](#ns3-organ-pitch-stick), [(v) organ vibrato mode](#ns3-organ-vibrato-mode), [(r) rotary speaker speed](#ns3-rotary-speaker-speed)
| `0x0035` | `mwwwaaap` | [(m) rotary speaker stop mode](#ns3-rotary-speaker-stop-mode), [(w) rotary speaker speed morph wheel](#ns3-rotary-speaker-speed), [(a) rotary speaker speed morph after touch](#ns3-rotary-speaker-speed), [(p) rotary speaker speed morph control pedal](#ns3-rotary-speaker-speed)
| `0x0036` | `pp------` |
| `0x0037` | `--------` |
| `0x0038` | `tttttccc` | [(t) transpose](#ns3-transpose), [(c) master clock rate](#ns3-master-clock-rate)
| `0x0039` | `cccccddd` | [(d) rotary speaker drive](#ns3-rotary-speaker-drive)
| `0x003A` | `ddddk-ss` | [(k) dual keyboard](#ns3-dual-keyboard), [(s) dual keyboard style](#ns3-dual-keyboard-style)
| `0x003B` | `rrrr----` | [(r) synth pitch stick range](#ns3-synth-pitch-stick-range)
| `0x003C` | `--------` |
| `0x003D` | `--------` |
| `0x003E` | `--------` |
| `0x003F` | `--------` |
| `0x0040` | `--------` |
| `0x0041` | `--------` |
| `0x0042` | `--------` |
| `0x0043` | `ozzzzvvv` | [(o) piano on](#ns3-piano-on), [(z) piano kb zone](#ns3-piano-kb-zone), [(v) piano volume](#ns3-piano-volume)
| `0x0044` | `vvvvwwww` | [(w) piano volume morph wheel](#ns3-piano-volume)
| `0x0045` | `wwwwaaaa` | [(a) piano volume morph after touch](#ns3-piano-volume)
| `0x0046` | `aaaapppp` | [(p) piano volume morph control pedal](#ns3-piano-volume)
| `0x0047` | `ppppoooo` | [(o) piano octave shift](#ns3-piano-octave-shift)
| `0x0048` | `pstttmmm` | [(p) piano pitch stick](#ns3-piano-pitch-stick), [(s) piano sustain pedal](#ns3-piano-sustain-pedal), [(t) piano type](#ns3-piano-type), [(m) piano model](#ns3-piano-model)
| `0x0049` | `mmvviiii` | [(v) clavinet model](#ns3-clavinet-model), [(i) piano sample name](#ns3-piano-model)
| `0x004A` | `iiiiiiii` |
| `0x004B` | `iiiiiiii` |
| `0x004C` | `iiiiiiii` |
| `0x004D` | `iiiisrpk` | [(s) piano soft release](#ns3-piano-soft-release),[(r) piano string resonance](#ns3-piano-string-resonance), [(p) piano pedal noise](#ns3-piano-pedal-noise), [(k) piano kb touch](#ns3-piano-kb-touch)
| `0x004E` | `k-ttt---` | [(t) piano timbre](#ns3-piano-timbre)
| `0x004F` | `--------` |
| `0x0050` | `--------` |
| `0x0051` | `--------` |
| `0x0052` | `ozzzzvvv` | [(o) synth on](#ns3-synth-on), [(z) synth kb zone](#ns3-synth-kb-zone), [(v) synth volume](#ns3-synth-volume)
| `0x0053` | `vvvvwwww` | [(w) synth volume morph wheel](#ns3-synth-volume)
| `0x0054` | `wwwwaaaa` | [(a) synth volume morph after touch](#ns3-synth-volume)
| `0x0055` | `aaaapppp` | [(p) synth volume morph control pedal](#ns3-synth-volume)
| `0x0056` | `ppppoooo` | [(o) synth octave shift](#ns3-synth-octave-shift)
| `0x0057` | `psiiiiii` | [(p) synth pitch stick](#ns3-synth-pitch-stick), [(s) synth sustain pedal](#ns3-synth-sustain-pedal), [(i) synth preset location](#ns3-synth-preset-location)
| `0x0058` | `iiiicccc` | [(c) synth preset name](#ns3-synth-preset-name)
| `0x0059` | `cccccccc` |
| `0x005A` | `cccccccc` |
| `0x005B` | `cccccccc` |
| `0x005C` | `cccccccc` |
| `0x005D` | `cccccccc` |
| `0x005E` | `cccccccc` |
| `0x005F` | `cccccccc` |
| `0x0060` | `cccccccc` |
| `0x0061` | `cccccccc` |
| `0x0062` | `cccccccc` |
| `0x0063` | `cccccccc` |
| `0x0064` | `cccccccc` |
| `0x0065` | `cccccccc` |
| `0x0066` | `cccccccc` |
| `0x0067` | `cccccccc` |
| `0x0068` | `cccccccc` |
| `0x0069` | `cccccccc` |
| `0x006A` | `cccccccc` |
| `0x006B` | `cccccccc` |
| `0x006C` | `cccccccc` |
| `0x006D` | `cccccccc` |
| `0x006E` | `cccc----` |
| `0x006F` | `--------` |
| `0x0070` | `--------` |
| `0x0071` | `--------` |
| `0x0072` | `--------` |
| `0x0073` | `--------` |
| `0x0074` | `--------` |
| `0x0075` | `--------` |
| `0x0076` | `--------` |
| `0x0077` | `--------` |
| `0x0078` | `----cccc` | (c) CRC2 (32-bit)
| `0x0079` | `cccccccc` |
| `0x007A` | `cccccccc` |
| `0x007B` | `cccccccc` |
| `0x007C` | `cccc----` |
| `0x007D` | `--------` |
| `0x007E` | `--------` |
| `0x007F` | `--------` |
| `0x0080` | `hosrrppc` | [(h) synth kh hold](#ns3-synth-kb-hold), [(o) synth arp on](#ns3-synth-arp-on), [(o) synth arp kb sync](#ns3-synth-arp-kb-sync), [(r) synth arp range](#ns3-synth-arp-range), [(p) synth arp pattern](#ns3-synth-arp-pattern), [(c) synth arp master clock](#ns3-synth-arp-master-clock)
| `0x0081` | `rrrrrrrw` | [(r) synth arp rate](#ns3-synth-arp-rate), [(w) synth arp rate morph wheel](#ns3-synth-arp-rate)
| `0x0082` | `wwwwwwwa` | [(a) synth arp rate morph after touch](#ns3-synth-arp-rate)
| `0x0083` | `aaaaaaap` | [(p) synth arp rate morph control pedal](#ns3-synth-arp-rate)
| `0x0084` | `pppppppv` | [(v) synth voice](#ns3-synth-voice)
| `0x0085` | `vggggggg` | [(g) synth glide](#ns3-synth-glide)
| `0x0086` | `uuvvvlll` | [(g) synth unison](#ns3-synth-unison), [(v) synth vibrato](#ns3-synth-vibrato), [(l) synth lfo wave](#ns3-synth-lfo-wave)
| `0x0087` | `mrrrrrrr` | [(m) synth lfo master clock](#ns3-synth-lfo-master-clock), [(r) synth lfo rate](#ns3-synth-lfo-rate)
| `0x0088` | `wwwwwwww` | [(w) synth lfo rate morph wheel](#ns3-synth-lfo-rate)
| `0x0089` | `aaaaaaaa` | [(a) synth lfo rate morph after touch](#ns3-synth-lfo-rate)
| `0x008A` | `pppppppp` | [(r) synth lfo rate control pedal](#ns3-synth-lfo-rate)
| `0x008B` | `aaaaaaad` | [(a) synth mod env attack](#ns3-synth-mod-env-attack), [(d) synth mod env decay](#ns3-synth-mod-env-decay)
| `0x008C` | `ddddddrr` | [(a) synth mod env release](#ns3-synth-mod-env-release)
| `0x008D` | `rrrrrvtt` | [(v) synth mod env velocity](#ns3-synth-mod-env-velocity), [(t) synth oscillator type](#ns3-synth-oscillator-type)
| `0x008E` | `twwwwwww` | [(w) synth oscillator 1 wave form](#ns3-synth-oscillator-1-wave-form)
| `0x008F` | `ww-ccccp` | [(c) synth oscillator config](#ns3-synth-oscillator-config), [(p) synth pitch](#ns3-synth-pitch)
| `0x0090` | `ppppplll` | [(l) synth oscillator control](#ns3-synth-oscillator-control)
| `0x0091` | `llllwwww` | [(w) synth oscillator control morph wheel](#ns3-synth-oscillator-control)
| `0x0092` | `wwwwaaaa` | [(a) synth oscillator control morph after touch](#ns3-synth-oscillator-control)
| `0x0093` | `aaaapppp` | [(p) synth oscillator control morph control pedal](#ns3-synth-oscillator-control)
| `0x0094` | `ppppllll` | [(l) synth oscillator mod](#ns3-synth-oscillator-mod)
| `0x0095` | `lllwwwww` | [(w) synth oscillator mod morph wheel](#ns3-synth-oscillator-mod)
| `0x0096` | `wwwaaaaa` | [(a) synth oscillator mod morph after touch](#ns3-synth-oscillator-mod)
| `0x0097` | `aaappppp` | [(p) synth oscillator mod morph control pedal](#ns3-synth-oscillator-mod)
| `0x0098` | `ppptttff` | [(t) synth filter type](#ns3-synth-filter-type), [(f) synth filter freq](#ns3-synth-filter-freq)
| `0x0099` | `fffffwww` | [(w) synth filter freq morph wheel](#ns3-synth-filter-freq)
| `0x009A` | `wwwwwaaa` | [(a) synth filter freq morph after touch](#ns3-synth-filter-freq)
| `0x009B` | `aaaaappp` | [(p) synth filter freq morph control pedal](#ns3-synth-filter-freq)
| `0x009C` | `ppppphhh` | [(h) synth filter hp freq res](#ns3-synth-filter-hp-freq-res)
| `0x009D` | `hhhhwwww` | [(w) synth filter hp freq res morph wheel](#ns3-synth-filter-hp-freq-res)
| `0x009E` | `wwwwaaaa` | [(a) synth filter hp freq res morph after touch](#ns3-synth-filter-hp-freq-res)
| `0x009F` | `aaaapppp` | [(p) synth filter hp freq res morph control pedal](#ns3-synth-filter-hp-freq-res)
| `0x00A0` | `ppppllll` | [(l) synth filter lfo amount](#ns3-synth-filter-lfo-amount)
| `0x00A1` | `lllwwwww` | [(w) synth filter lfo amount morph wheel](#ns3-synth-filter-lfo-amount)
| `0x00A2` | `wwwaaaaa` | [(a) synth filter lfo amount morph after touch](#ns3-synth-filter-lfo-amount)
| `0x00A3` | `aaappppp` | [(p) synth filter lfo amount morph control pedal](#ns3-synth-filter-lfo-amount)
| `0x00A4` | `pppmmmmm` | [(m) synth filter vel mod env amount](#ns3-synth-filter-vel-mod-env-amount)
| `0x00A5` | `mmttddaa` | [(t) synth filter kb track](#ns3-synth-filter-kb-track), [(d) synth filter drive](#ns3-synth-filter-drive), [(a) synth amp env attack](#ns3-synth-amp-env-attack)
| `0x00A6` | `aaaaaddd` | [(d) synth amp env decay](#ns3-synth-amp-env-decay)
| `0x00A7` | `ddddrrrr` | [(r) synth amp env release](#ns3-synth-amp-env-release)
| `0x00A8` | `rrrvvsss` | [(r) synth amp env velocity](#ns3-synth-amp-env-velocity), [(s) synth sample id](#ns3-synth-sample-id)
| `0x00A9` | `ssssssss` |
| `0x00AA` | `ssssssss` |
| `0x00AB` | `ssssssss` |
| `0x00AC` | `sssssf--` | [(f) synth fast attack](#ns3-synth-fast-attack)
| `0x00AD` | `--------` | 0
| `0x00AE` | `--------` | 0
| `0x00AF` | `--------` | 0
| `0x00B0` | `--------` | 0
| `0x00B1` | `--------` | 0
| `0x00B2` | `--------` | 0
| `0x00B3` | `--------` | 0
| `0x00B4` | `--------` | 0
| `0x00B5` | `--------` | 07
| `0x00B6` | `ozzzzvvv` | [(o) organ on](#ns3-organ-on), [(z) organ kb zone](#ns3-organ-kb-zone), [(v) organ volume](#ns3-organ-volume)
| `0x00B7` | `vvvvwwww` | [(w) organ volume morph wheel](#ns3-organ-volume)
| `0x00B8` | `wwwwaaaa` | [(a) organ volume morph after touch](#ns3-organ-volume)
| `0x00B9` | `aaaapppp` | [(p) organ volume morph control pedal](#ns3-organ-volume)
| `0x00BA` | `ppppoooo` | [(o) organ octave shift](#ns3-organ-octave-shift)
| `0x00BB` | `stttlp--` | [(s) organ sustain-pedal](#ns3-organ-sustain-pedal),[(t) organ type](#ns3-organ-type), [(l) organ live mode](#ns3-organ-live-mode), [(p) organ preset 2 on](#ns3-organ-preset-2-on)
| `0x00BC` | `--------` | 0
| `0x00BD` | `--------` | 1A
| `0x00BE` | `1111wwww` | [organ preset 1 drawbar (1)](#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 1 morph wheel](#ns3-organ-drawbars-preset-1)
| `0x00BF` | `waaaaapp` | [(a) organ preset 1 drawbar 1 morph after touch](#ns3-organ-drawbars-preset-1), [(p) organ preset 1 drawbar 2 morph control pedal](#ns3-organ-drawbars-preset-1)
| `0x00C0` | `ppp2222w` | [organ preset 1 drawbar (2)](#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 2 morph wheel](#ns3-organ-drawbars-preset-1)
| `0x00C1` | `wwwwaaaa` | [(a) organ preset 1 drawbar 2 morph after touch](#ns3-organ-drawbars-preset-1)
| `0x00C2` | `appppp33` | [(p) organ preset 1 drawbar 2 morph control pedal](#ns3-organ-drawbars-preset-1), [organ preset 1 drawbar (3)](#ns3-organ-drawbars-preset-1),
| `0x00C3` | `33wwwwwa` | [(w) organ preset 1 drawbar 3 morph wheel](#ns3-organ-drawbars-preset-1), [(a) organ preset 1 drawbar 3 morph after touch](#ns3-organ-drawbars-preset-1)
| `0x00C4` | `aaaapppp` | [(p) organ preset 1 drawbar 3 morph control pedal](#ns3-organ-drawbars-preset-1)
| `0x00C5` | `p4444www` | [organ preset 1 drawbar (4)](#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 4 morph wheel](#ns3-organ-drawbars-preset-1)
| `0x00C6` | `wwaaaaap` | [(a) organ preset 1 drawbar 4 morph after touch](#ns3-organ-drawbars-preset-1), [(p) organ preset 1 drawbar 4 morph control pedal](#ns3-organ-drawbars-preset-1),
| `0x00C7` | `pppp5555` | [organ preset 1 drawbar (5)](#ns3-organ-drawbars-preset-1),
| `0x00C8` | `wwwwwaaa` | [(w) organ preset 1 drawbar 5 morph wheel](#ns3-organ-drawbars-preset-1), [(a) organ preset 1 drawbar 5 morph after touch](#ns3-organ-drawbars-preset-1)
| `0x00C9` | `aappppp6` | [(p) organ preset 1 drawbar 5 morph control pedal](#ns3-organ-drawbars-preset-1), [organ preset 1 drawbar (6)](#ns3-organ-drawbars-preset-1),
| `0x00CA` | `666wwwww` | [(w) organ preset 1 drawbar 6 morph wheel](#ns3-organ-drawbars-preset-1)
| `0x00CB` | `aaaaappp` | [(a) organ preset 1 drawbar 6 morph after touch](#ns3-organ-drawbars-preset-1), [(p) organ preset 1 drawbar 6 morph control pedal](#ns3-organ-drawbars-preset-1)
| `0x00CC` | `pp7777ww` | [organ preset 1 drawbar (7)](#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 7 morph wheel](#ns3-organ-drawbars-preset-1)
| `0x00CD` | `wwwaaaaa` | [(a) organ preset 1 drawbar 7 morph after touch](#ns3-organ-drawbars-preset-1)
| `0x00CE` | `ppppp888` | [(p) organ preset 1 drawbar 7 morph control pedal](#ns3-organ-drawbars-preset-1), [organ preset 1 drawbar (8)](#ns3-organ-drawbars-preset-1),
| `0x00CF` | `8wwwwwaa` | [(w) organ preset 1 drawbar 8 morph wheel](#ns3-organ-drawbars-preset-1), [(a) organ preset 1 drawbar 8 morph after touch](#ns3-organ-drawbars-preset-1)
| `0x00D0` | `aaappppp` | [(p) organ preset 1 drawbar 8 morph control pedal](#ns3-organ-drawbars-preset-1)
| `0x00D1` | `9999wwww` | [organ preset 1 drawbar (9)](#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 9 morph wheel](#ns3-organ-drawbars-preset-1)
| `0x00D2` | `waaaaacc` | [(a) organ preset 1 drawbar 9 morph after touch](#ns3-organ-drawbars-preset-1), [(c) organ preset 1 drawbar 9 morph control pedal](#ns3-organ-drawbars-preset-1)
| `0x00D3` | `cccvphds` | [(v) organ vibrato on](#ns3-organ-vibrato-on), [(p) organ percussion on](#ns3-organ-percussion-on), [(h) organ percussion harmonic third](#ns3-organ-percussion-harmonic-third), [(d) organ percussion decay fast](#ns3-organ-percussion-decay-fast), [(s) organ percussion volume soft](#ns3-organ-percussion-volume-soft)
| `0x00D4` | `--------` | 0
| `0x00D5` | `--------` | 0
| `0x00D6` | `--------` | 0
| `0x00D7` | `--------` | 0
| `0x00D8` | `--------` | 1A
| `0x00D9` | `1111wwww` | [organ preset 2 drawbar (1)](#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 1 morph wheel](#ns3-organ-preset-2-drawbars)
| `0x00DA` | `waaaaapp` | [(a) organ preset 2 drawbar 1 morph after touch](#ns3-organ-preset-2-drawbars), [(p) organ preset 2 drawbar 2 morph control pedal](#ns3-organ-preset-2-drawbars)
| `0x00DB` | `ppp2222w` | [organ preset 2 drawbar (2)](#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 2 morph wheel](#ns3-organ-preset-2-drawbars)
| `0x00DC` | `wwwwaaaa` | [(a) organ preset 2 drawbar 2 morph after touch](#ns3-organ-preset-2-drawbars)
| `0x00DD` | `appppp33` | [(p) organ preset 2 drawbar 2 morph control pedal](#ns3-organ-preset-2-drawbars), [organ preset 2 drawbar (3)](#ns3-organ-preset-2-drawbars),
| `0x00DE` | `33wwwwwa` | [(w) organ preset 2 drawbar 3 morph wheel](#ns3-organ-preset-2-drawbars), [(a) organ preset 2 drawbar 3 morph after touch](#ns3-organ-preset-2-drawbars)
| `0x00DF` | `aaaapppp` | [(p) organ preset 2 drawbar 3 morph control pedal](#ns3-organ-preset-2-drawbars)
| `0x00E0` | `p4444www` | [organ preset 2 drawbar (4)](#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 4 morph wheel](#ns3-organ-preset-2-drawbars)
| `0x00E1` | `wwaaaaap` | [(a) organ preset 2 drawbar 4 morph after touch](#ns3-organ-preset-2-drawbars), [(p) organ preset 2 drawbar 4 morph control pedal](#ns3-organ-preset-2-drawbars),
| `0x00E2` | `pppp5555` | [organ preset 2 drawbar (5)](#ns3-organ-preset-2-drawbars),
| `0x00E3` | `wwwwwaaa` | [(w) organ preset 2 drawbar 5 morph wheel](#ns3-organ-preset-2-drawbars), [(a) organ preset 2 drawbar 5 morph after touch](#ns3-organ-preset-2-drawbars)
| `0x00E4` | `aappppp6` | [(p) organ preset 2 drawbar 5 morph control pedal](#ns3-organ-preset-2-drawbars), [organ preset 2 drawbar (6)](#ns3-organ-preset-2-drawbars),
| `0x00E5` | `666wwwww` | [(w) organ preset 2 drawbar 6 morph wheel](#ns3-organ-preset-2-drawbars)
| `0x00E6` | `aaaaappp` | [(a) organ preset 2 drawbar 6 morph after touch](#ns3-organ-preset-2-drawbars), [(p) organ preset 2 drawbar 6 morph control pedal](#ns3-organ-preset-2-drawbars)
| `0x00E7` | `pp7777ww` | [organ preset 2 drawbar (7)](#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 7 morph wheel](#ns3-organ-preset-2-drawbars)
| `0x00E8` | `wwwaaaaa` | [(a) organ preset 2 drawbar 7 morph after touch](#ns3-organ-preset-2-drawbars)
| `0x00E9` | `ppppp888` | [(p) organ preset 2 drawbar 7 morph control pedal](#ns3-organ-preset-2-drawbars), [organ preset 2 drawbar (8)](#ns3-organ-preset-2-drawbars),
| `0x00EA` | `8wwwwwaa` | [(w) organ preset 2 drawbar 8 morph wheel](#ns3-organ-preset-2-drawbars), [(a) organ preset 2 drawbar 8 morph after touch](#ns3-organ-preset-2-drawbars)
| `0x00EB` | `aaappppp` | [(p) organ preset 2 drawbar 8 morph control pedal](#ns3-organ-preset-2-drawbars)
| `0x00EC` | `9999wwww` | [organ preset 2 drawbar (9)](#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 9 morph wheel](#ns3-organ-preset-2-drawbars)
| `0x00ED` | `waaaaacc` | [(a) organ preset 2 drawbar 9 morph after touch](#ns3-organ-preset-2-drawbars), [(c) organ preset 2 drawbar 9 morph control pedal](#ns3-organ-preset-2-drawbars)
| `0x00EE` | `cccvphds` | [(v) organ preset 2 vibrato on](#ns3-organ-preset-2-vibrato-on), [(p) organ preset 2 percussion on](#ns3-organ-preset-2-percussion-on), [(v) organ preset 2 percussion harmonic third](#ns3-organ-preset-2-percussion-harmonic-third), [(v) organ preset 2 percussion decay fast](#ns3-organ-preset-2-percussion-decay-fast), [(v) organ preset 2 percussion volume soft](#ns3-organ-preset-2-percussion-volume-soft)
| `0x00EF` | `--------` |
| `0x00F0` | `--------` |
| `0x00F1` | `--------` |
| `0x00F2` | `--------` |
| `0x00F3` | `--------` |
| `0x00F4` | `ozzz--ss` | [(o) extern on](#ns3-extern-on), [(z) extern kb zone](#ns3-extern-kb-zone), [(s) extern octave shift](#ns3-extern-octave-shift)
| `0x00F5` | `svvccccc` | [(v) extern midi velocity curve](#ns3-extern-midi-velocity-curve), [(c) extern midi channel](#ns3-extern-midi-channel)
| `0x00F6` | `pswaclmm` | [(p) extern pitch stick](#ns3-extern-pitch-stick), [(s) extern sustain pedal](#ns3-extern-sustain-pedal), [(w) extern midi send wheel](#ns3-extern-midi-send-wheel), [(a) extern midi send aftertouch](#ns3-extern-midi-send-aftertouch), [(c) extern midi send control pedal](#ns3-extern-midi-send-control-pedal), [(l) extern midi send swell](#ns3-extern-midi-send-swell), [(m) extern midi control](#ns3-extern-midi-control)
| `0x00F7` | `cccccccv` | [(c) extern midi cc number](#ns3-extern-midi-cc-number), [(v) extern midi cc value](#ns3-extern-midi-cc)
| `0x00F8` | `vvvvvvww` | [(w) extern midi cc morph wheel](#ns3-extern-midi-cc)
| `0x00F9` | `wwwwwwaa` | [(a) extern midi cc morph after touch](#ns3-extern-midi-cc)
| `0x00FA` | `aaaaaapp` | [(p) extern midi cc morph control pedal](#ns3-extern-midi-cc)
| `0x00FB` | `ppppppol` | [(o) extern midi send user cc on load](#ns3-extern-midi-send-user-cc-on-load), [(l) extern midi bank select CC32](#ns3-extern-midi-bank-select-cc32)
| `0x00FC` | `lllllllm` |
| `0x00FD` | `mmmmmmmv` | [(m) extern midi bank select CC00](#ns3-extern-midi-bank-select-cc00), [(v) extern midi program](#ns3-extern-midi-program)
| `0x00FE` | `vvvvvvww` | [(a) extern midi program after touch](#ns3-extern-midi-program)
| `0x00FF` | `wwwwwwaa` | [(p) extern midi program control pedal](#ns3-extern-midi-program)
| `0x0100` | `aaaaaapp` | [(p) extern midi program control pedal](#ns3-extern-midi-program)
| `0x0101` | `ppppppov` | [(o) extern midi send program on load](#ns3-extern-midi-send-program-on-load), [(v) extern volume](#ns3-extern-volume),
| `0x0102` | `vvvvvvww` | [(w) extern volume morph wheel](#ns3-extern-volume)
| `0x0103` | `wwwwwwaa` | [(a) extern volume morph after touch](#ns3-extern-volume)
| `0x0104` | `aaaaaapp` | [(p) extern volume morph control pedal](#ns3-extern-volume)
| `0x0105` | `ppppppls` | [(l) extern midi send volume on load](#ns3-extern-midi-send-volume-on-load), [(s) extern midi send volume](#ns3-extern-midi-send-volume)
| `0x0106` | `--------` |
| `0x0107` | `--------` |
| `0x0108` | `--------` |
| `0x0109` | `--------` |
| `0x010A` | `--------` |
| `0x010B` | `ossnrrtt` | [(o) rotary speaker on](#ns3-rotary-speaker-on), [(s) rotary speaker source](#ns3-rotary-speaker-source), [(n) effect 1 on](#ns3-effect-1-on), [(r) effect-1-source](#ns3-effect-1-source), [(t) effect 1 type](#ns3-effect-1-type)
| `0x010C` | `tcrrrrrr` | [(c) effect 1 master clock](#ns3-effect-1-master-clock), [(r) effect 1 rate](#ns3-effect-1-rate)
| `0x010D` | `rwwwwwww` | [(w) effect 1 rate morph wheel](#ns3-effect-1-rate)
| `0x010E` | `waaaaaaa` | [(a) effect 1 rate morph after touch](#ns3-effect-1-rate)
| `0x010F` | `appppppp` | [(p) effect 1 rate morph control pedal](#ns3-effect-1-rate)
| `0x0110` | `paaaaaaa` | [(a) effect 1 amount](#ns3-effect-1-amount)
| `0x0111` | `wwwwwwww` | [(w) effect 1 amount morph wheel](#ns3-effect-1-amount)
| `0x0112` | `aaaaaaaa` | [(a) effect 1 amount morph after touch](#ns3-effect-1-amount)
| `0x0113` | `pppppppp` | [(p) effect 1 amount morph control pedal](#ns3-effect-1-amount)
| `0x0114` | `osstttrr` | [(o) effect 2 on](#ns3-effect-2-on), [(s) effect 2 source](#ns3-effect-2-source), [(t) effect 2 type](#ns3-effect-2-type), [(r) effect 2 rate](#ns3-effect-2-rate)
| `0x0115` | `rrrrraaa` | [(a) effect 2 amount](#ns3-effect-2-amount)
| `0x0116` | `aaaawwww` | [(w) effect 2 amount morph wheel](#ns3-effect-2-amount)
| `0x0117` | `wwwwaaaa` | [(a) effect 2 amount morph after touch](#ns3-effect-2-amount)
| `0x0118` | `aaaapppp` | [(p) effect 2 amount morph control pedal](#ns3-effect-2-amount)
| `0x0119` | `ppppossm` | [(o) delay on](#ns3-delay-on), [(s) delay source](#ns3-delay-source), [(m) delay master clock](#ns3-delay-master-clock)
| `0x011A` | `tttttttx` | [(t) delay tempo](#ns3-delay-tempo), [(x) delay tempo lsw](#ns3-delay-tempo)
| `0x011B` | `xxxxxxww` | [(w) delay tempo morph wheel](#ns3-delay-tempo)
| `0x011C` | `wwwwwwxx` | [(x) delay tempo morph wheel lsw](#ns3-delay-tempo)
| `0x011D` | `xxxxxaaa` | [(a) delay tempo morph after touch](#ns3-delay-tempo)
| `0x011E` | `aaaaaxxx` | [(x) delay tempo morph after touch lsw](#ns3-delay-tempo)
| `0x011F` | `xxxxcccc` | [(c) delay tempo morph control pedal](#ns3-delay-tempo)
| `0x0120` | `ccccxxxx` | [(x) delay tempo morph control pedal lsw](#ns3-delay-tempo)
| `0x0121` | `xxxmmmmm` | [(m) delay mix](#ns3-delay-mix)
| `0x0122` | `mmwwwwww` | [(w) delay mix morph wheel](#ns3-delay-mix)
| `0x0123` | `wwaaaaaa` | [(a) delay mix morph after touch](#ns3-delay-mix)
| `0x0124` | `aapppppp` | [(p) delay mix morph control pedal](#ns3-delay-mix)
| `0x0125` | `ppoffbbb` | [(o) delay ping pong](#ns3-delay-ping-pong), [(f) delay filter](#ns3-delay-filter), [(b) delay feedback](#ns3-delay-feedback)
| `0x0126` | `bbbbwwww` | [(w) delay feedback morph wheel](#ns3-delay-feedback)
| `0x0127` | `wwwwaaaa` | [(a) delay feedback morph after touch](#ns3-delay-feedback)
| `0x0128` | `aaaapppp` | [(p) delay feedback morph control pedal](#ns3-delay-feedback)
| `0x0129` | `ppppaoss` | [(a) delay analog mode](#ns3-delay-analog-mode), [(o) amp sim eq on](#ns3-amp-sim-eq-on), [(s) amp sim eq source](#ns3-amp-sim-eq-source)
| `0x012A` | `aaattttt` | [(a) amp sim eq amp type](#ns3-amp-sim-eq-amp-type), [(a) amp sim eq treble](#ns3-amp-sim-eq-treble)
| `0x012B` | `ttmmmmmm` | [(m) amp sim eq mid res](#ns3-amp-sim-eq-mid-res)
| `0x012C` | `mbbbbbbb` | [(m) amp sim eq bass dry wet](#ns3-amp-sim-eq-bass-dry-wet)
| `0x012D` | `fffffffw` | [(f) amp sim eq mid flt freq](#ns3-amp-sim-eq-mid-flt-freq)
| `0x012E` | `wwwwwwwa` | [(f) amp sim eq mid flt freq morph wheel](#ns3-amp-sim-eq-mid-flt-freq)
| `0x012F` | `aaaaaaap` | [(f) amp sim eq mid flt freq morph after touch](#ns3-amp-sim-eq-mid-flt-freq)
| `0x0130` | `pppppppd` | [(f) amp sim eq mid flt freq morph control pedal](#ns3-amp-sim-eq-mid-flt-freq), [(d) amp sim eq drive](#ns3-amp-sim-eq-drive)
| `0x0131` | `ddddddww` | [(w) amp sim eq drive morph wheel](#ns3-amp-sim-eq-drive)
| `0x0132` | `wwwwwwaa` | [(a) amp sim eq drive morph after touch](#ns3-amp-sim-eq-drive)
| `0x0133` | `aaaaaapp` | [(p) amp sim eq drive morph control pedal](#ns3-amp-sim-eq-drive)
| `0x0134` | `ppppppot` | [(o) reverb on](#ns3-reverb-on), [(t) reverb type](#ns3-reverb-type)
| `0x0135` | `ttbrrrrr` | [(o) reverb bright](#ns3-reverb-bright), [(r) reverb amount](#ns3-reverb-amount)
| `0x0136` | `rrwwwwww` | [(w) reverb amount morph wheel](#ns3-reverb-amount)
| `0x0137` | `wwaaaaaa` | [(a) reverb amount morph after touch](#ns3-reverb-amount)
| `0x0138` | `aapppppp` | [(p) reverb amount morph control pedal](#ns3-reverb-amount)
| `0x0139` | `ppoccccc` | [(o) compressor on](#ns3-compressor-on), [(c) compressor amount](#ns3-compressor-amount)
| `0x013A` | `ccf-----` | [(f) compressor fast](#ns3-compressor-fast)
| `0x013B` | `--------` |
| `0x013C` | `--------` |
| `0x013C` | `--------` |
| `0x013E` | `--------` |
| `0x013F` | `--------` |
| `0x0140` | `--------` |
| `0x0141` | `--------` |
| `0x0142` | `--------` |
| `0x0143` | `--------` |
| `0x0144` | `mmmssdd-` | [(m) program output main](#ns3-program-output-main), [(s) program output sub source](#ns3-program-output-sub-source), [(d) program output sub destination](#ns3-program-output-sub-destination)
| `0x0145` | `--------` |
| `0x0146` | `--------` |
| `0x0147` | `--------` |
| `0x0148` | `--------` |
| `0x0149` | `--------` |
| `0x014A` | `--------` | Panel B, same as offset 0x43, offset from Panel A is 0x107 (263 bytes)
| `...`    |            |
| `0x0240` | `--------` |
| `0x0241` | `--------` | end of Panel B
| `0x0242` | `--------` | 0
| `0x0243` | `--------` | 0
| `0x0244` | `--------` | 0
| `0x0245` | `--------` | 0
| `0x0246` | `--------` | 0
| `0x0247` | `--------` | 0
| `0x0248` | `--------` | 0
| `0x0249` | `--------` | 0
| `0x024A` | `--------` | 5
| `0x024B` | `--------` | 0
| `0x024C` | `--------` | 0
| `0x024D` | `--------` | 0
| `0x024E` | `--------` | 0
| `0x024F` | `--------` | 0


\newpage
## Nord Stage 3 Synth File Structure

NS3 Synth file (ns3y) is a subset of the Program file (0x0080 to 0x00AC).
Header structure is similar to ns3f file.

\newpage



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
\newpage
## Nord Stage 2 Program File Structure

This mapping corresponds to the Nord Stage 2 program file (file extension ns2p).

| offset   | bits       | description
| :---:    |   :----:   | :-------------------------------------------------
| `0x0000` | `cccccccc` | ascii C - 0x43, 4-byte Clavia ID
| `0x0001` | `cccccccc` | ascii B - 0x42
| `0x0002` | `cccccccc` | ascii I - 0x49
| `0x0003` | `cccccccc` | ascii N - 0x4E
| `0x0004` | `ffffffff` | [(f) file format](#ns2-file-format)
| `0x0005` | `--------` | 0
| `0x0006` | `--------` | 0
| `0x0007` | `--------` | 0
| `0x0008` | `cccccccc` | ascii n - 0x6E, 4-byte NS2 Program file ID
| `0x0009` | `cccccccc` | ascii s - 0x73,
| `0x000A` | `cccccccc` | ascii 2 - 0x32,
| `0x000B` | `cccccccc` | ascii p - 0x70,
| `0x000C` | `------bb` | (b) bank (0 = A, 1 = B . . . )
| `0x000D` | `--------` | 0
| `0x000E` | `--llllll` | (l) location lsb (0 = 01:1, 1 = 01:2 . . .)
| `0x000F` | `--------` | 0
| `0x0010` | `cccccccc` | [(c) program category](#ns2-program-category)
| `0x0011` | `--------` |
| `0x0012` | `--------` |
| `0x0013` | `--------` |
| `0x0014` | `iiiiiiii` | [(i) file version](#ns2-file-version) (16-bit)
| `0x0015` | `iiiiiiii` |
| `0x0016` | `--------` |
| `0x0017` | `--------` |
| `0x0018` | `cccccccc` | CRC1 (32-bit)
| `0x0019` | `cccccccc` |
| `0x001A` | `cccccccc` |
| `0x001B` | `cccccccc` |
| `0x001C` | `--------` |
| `0x001D` | `--------` |
| `0x001E` | `--------` |
| `0x001F` | `--------` |
| `0x0020` | `--------` |
| `0x0021` | `--------` |
| `0x0022` | `--------` |
| `0x0023` | `--------` |
| `0x0024` | `--------` |
| `0x0025` | `--------` |
| `0x0026` | `--------` |
| `0x0027` | `--------` |
| `0x0028` | `--------` |
| `0x0029` | `--------` |
| `0x002A` | `--------` |
| `0x002B` | `--------` |
| `0x002C` | `--------` |
| `0x002D` | `--------` |
| `0x002E` | `ssk-llll` | [(p) slot selection](#ns2-slot-enabled-and-selection), [(k) dual keyboard](#ns2-dual-keyboard), [(k) split point low](#ns2-split),
| `0x002F` | `hhhhtw--` | [(h) split point high](#ns2-split), [(t) three split zones](#ns2-split), [(w) two split zones](#ns2-split)
| `0x0030` | `-pttttt-` | [(p) organ pitch stick](#ns2-organ-pitch-stick), [(t) transpose](#ns2-transpose)
| `0x0031` | `---mmmmm` | [(m) master clock rate](#ns2-master-clock-rate)
| `0x0032` | `mmm-----` |
| `0x0033` | `--------` |
| `0x0034` | `mm------` | [(m) organ model](#ns2-organ-model)
| `0x0035` | `vvvhds--` | [(v) organ b3 vibrato mode](#ns2-organ-b3-vibrato-mode), [(h) organ b3 harmonic third](#ns2-organ-b3-harmonic-third), [(d) organ b3 decay fast](#ns2-organ-b3-decay-fast), [(s) organ b3 volume soft](#ns2-organ-b3-volume-soft)
| `0x0036` | `--------` |
| `0x0037` | `-vvo----` | [(v) organ vox vibrato mode](#ns2-organ-vox-vibrato-mode), [(o) organ vox vibrato on](#ns2-organ-vox-vibrato-on)
| `0x0038` | `--------` |
| `0x0039` | `-vvo----` | [(v) organ farfisa vibrato mode](#ns2-organ-farfisa-vibrato-mode), [(o) organ farfisa vibrato on](#ns2-organ-farfisa-vibrato-on)
| `0x003A` | `--------` |
| `0x003B` | `ddd-----` | [(o) piano slot detune](#ns2-piano-slot-detune)
| `0x003C` | `--------` |
| `0x003D` | `otttrrrr` | [(o) reverb on](#ns2-reverb-on), [(t) reverb type](#ns2-reverb-type), [(r) reverb amount](#ns2-reverb-amount)
| `0x003E` | `rrrocccc` | [(o) compressor on](#ns2-compressor-on), [(c) compressor amount](#ns2-compressor-amount)
| `0x003F` | `cccossdd` | [(o) rotary speaker on](#ns2-rotary-speaker-on), [(s) rotary speaker source](#ns2-rotary-speaker-source), [(d) rotary speaker drive](#ns2-rotary-speaker-drive)
| `0x0040` | `dddddmrw` | [(m) rotary speaker stop mode](#ns2-rotary-speaker-stop-mode), [(r) rotary speaker speed](#ns2-rotary-speaker-speed), [(w) rotary speaker speed morph wheel](#ns2-rotary-speaker-speed)
| `0x0041` | `ac------` | [(a) rotary speaker speed morph after touch](#ns2-rotary-speaker-speed), [(c) rotary speaker speed morph control pedal](#ns2-rotary-speaker-speed)
| `0x0042` | `--------` |
| `0x0043` | `owwwwwww` | [(o) organ on](#ns2-organ-on), [(w) organ volume morph wheel](#ns2-organ-volume)
| `0x0044` | `waaaaaaa` | [(a) organ volume morph after touch](#ns2-organ-volume)
| `0x0045` | `accccccc` | [(c) organ volume morph control pedal](#ns2-organ-volume)
| `0x0046` | `cvvvvvvv` | [(v) organ volume](#ns2-organ-volume)
| `0x0047` | `zzzoooos` | [(z) organ kb zone](#ns2-organ-kb-zone), [(o) organ octave shift](#ns2-organ-octave-shift), [(s) organ sustain pedal](#ns2-organ-sustain-pedal)
| `0x0048` | `owwwwwww` | [(o) piano on](#ns2-piano-on), [(w) piano volume morph wheel](#ns2-piano-volume)
| `0x0049` | `waaaaaaa` | [(a) piano volume morph after touch](#ns2-piano-volume)
| `0x004A` | `accccccc` | [(c) piano volume morph control pedal](#ns2-piano-volume)
| `0x004B` | `cvvvvvvv` | [(v) piano volume](#ns2-piano-volume)
| `0x004C` | `zzzoooop` | [(z) piano split zones](#ns2-piano-kb-zone), [(o) piano octave shift](#ns2-piano-octave-shift), [(p) piano pitch stick](#ns2-piano-pitch-stick)
| `0x004D` | `sowwwwww` | [(s) piano sustain pedal](#ns2-piano-sustain-pedal), [(o) synth on](#ns2-synth-on), [(w) synth volume morph wheel](#ns2-synth-volume)
| `0x004E` | `wwaaaaaa` | [(a) synth volume morph after touch](#ns2-synth-volume)
| `0x004F` | `aacccccc` | [(c) synth volume morph control pedal](#ns2-synth-volume)
| `0x0050` | `ccvvvvvv` | [(v) synth volume](#ns2-synth-volume)
| `0x0051` | `vzzzoooo` | [(z) synth kb zone](#ns2-synth-kb-zone), [(o) synth octave shift](#ns2-synth-octave-shift)
| `0x0052` | `pso-----` | [(p) synth pitch stick](#ns2-synth-pitch-stick), [(s) synth sustain pedal](#ns2-synth-sustain-pedal), [(o) extern on](#ns2-extern-on)
| `0x0053` | `--------` |
| `0x0054` | `--------` |
| `0x0055` | `--------` |
| `0x0056` | `--zzzooo` | [(z) extern kb zone](#ns2-extern-kb-zone), [(o) extern octave shift](#ns2-extern-octave-shift)
| `0x0057` | `ops-----` | [(p) extern pitch stick](#ns2-extern-pitch-stick), [(s) extern sustain pedal](#ns2-extern-sustain-pedal)
| `0x0058` | `------pp` | [(p) piano program output](#ns2-piano-program-output)
| `0x0059` | `-ss-oolg` | [(s) synth program output](#ns2-synth-program-output), [(o) organ program output](#ns2-organ-program-output), [(l) organ latch pedal](#ns2-organ-latch-pedal), [(g) organ kb gate](#ns2-organ-kb-gate)
| `0x005A` | `lgtk----` | [(l) piano latch pedal](#ns2-piano-latch-pedal), [(g) piano kb gate](#ns2-piano-kb-gate), [(t) synth latch pedal](#ns2-synth-latch-pedal), [(k) synth kb gate](#ns2-synth-kb-gate)
| `0x005B` | `--------` |
| `0x005C` | `b-------` | [(b) organ b3 preset II](#ns2-organ-b3-preset-2)
| `0x005D` | `b-------` | [(b) organ vox vox II](#ns2-organ-vox-preset-2)
| `0x005E` | `b-------` | [(b) organ farfisa preset II](#ns2-organ-farfisa-preset-2)
| `0x005F` | `wwwwwaaa` | [(w) organ b3 preset I drawbar 1 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 1 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x0060` | `aappppp1` | [(p) organ b3 preset I drawbar 1 morph control pedal](#ns2-organ-drawbars-preset-1), [(1) organ b3 preset I drawbar 1](#ns2-organ-drawbars-preset-1)
| `0x0061` | `111wwwww` | [(w) organ b3 preset I drawbar 2 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0062` | `aaaaappp` | [(a) organ b3 preset I drawbar 2 morph after touch](#ns2-organ-drawbars-preset-1), [(p) organ b3 preset I drawbar 2 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x0063` | `pp2222ww` | [(2) organ b3 preset I drawbar 2](#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 3 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0064` | `wwwaaaaa` | [(a) organ b3 preset I drawbar 3 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x0065` | `ppppp333` | [(p) organ b3 preset I drawbar 3 morph control pedal](#ns2-organ-drawbars-preset-1), [(3) organ b3 preset I drawbar 3](#ns2-organ-drawbars-preset-1),
| `0x0066` | `3wwwwwaa` | [(w) organ b3 preset I drawbar 4 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 4 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x0067` | `aaappppp` | [(p) organ b3 preset I drawbar 4 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x0068` | `4444wwww` | [(4) organ b3 preset I drawbar 4](#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 5 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0069` | `waaaaapp` | [(a) organ b3 preset I drawbar 5 morph after touch](#ns2-organ-drawbars-preset-1), [(p) organ b3 preset I drawbar 5 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x006A` | `ppp5555w` | [(5) organ b3 preset I drawbar 5](#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 6 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x006B` | `wwwwaaaa` | [(a) organ b3 preset I drawbar 6 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x006C` | `appppp66` | [(p) organ b3 preset I drawbar 6 morph control pedal](#ns2-organ-drawbars-preset-1), [(6) organ b3 preset I drawbar 6](#ns2-organ-drawbars-preset-1)
| `0x006D` | `66wwwwwa` | [(w) organ b3 preset I drawbar 7 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 7 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x006E` | `aaaapppp` | [(p) organ b3 preset I drawbar 7 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x006F` | `p7777www` | [(7) organ b3 preset I drawbar 7](#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 8 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0070` | `wwaaaaap` | [(a) organ b3 preset I drawbar 8 morph after touch](#ns2-organ-drawbars-preset-1), [(p) organ b3 preset I drawbar 8 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x0071` | `pppp8888` | [(8) organ b3 preset I drawbar 8](#ns2-organ-drawbars-preset-1)
| `0x0072` | `wwwwwaaa` | [(w) organ b3 preset I drawbar 9 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 9 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x0073` | `aappppp9` | [(p) organ b3 preset I drawbar 9 morph control pedal](#ns2-organ-drawbars-preset-1), [(9) organ b3 preset I drawbar 9](#ns2-organ-drawbars-preset-1)
| `0x0074` | `999vp---` | [(v) organ b3 preset I vibrato chorus](#ns2-organ-b3-preset-1-vibrato-chorus), [(p) organ b3 preset I percussion](#ns2-organ-b3-preset-1-percussion)
| `0x0075` | `--------` |
| `0x0076` | `wwwwwaaa` | [(w) organ vox preset I drawbar 1 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 1 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x0077` | `aappppp1` | [(p) organ vox preset I drawbar 1 morph control pedal](#ns2-organ-drawbars-preset-1), [(1) organ vox preset I drawbar 1](#ns2-organ-drawbars-preset-1)
| `0x0078` | `111wwwww` | [(w) organ vox preset I drawbar 2 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0079` | `aaaaappp` | [(a) organ vox preset I drawbar 2 morph after touch](#ns2-organ-drawbars-preset-1), [(p) organ vox preset I drawbar 2 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x007A` | `pp2222ww` | [(2) organ vox preset I drawbar 2](#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 3 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x007B` | `wwwaaaaa` | [(a) organ vox preset I drawbar 3 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x007C` | `ppppp333` | [(p) organ vox preset I drawbar 3 morph control pedal](#ns2-organ-drawbars-preset-1), [(3) organ vox preset I drawbar 3](#ns2-organ-drawbars-preset-1),
| `0x007D` | `3wwwwwaa` | [(w) organ vox preset I drawbar 4 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 4 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x007E` | `aaappppp` | [(p) organ vox preset I drawbar 4 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x007F` | `4444wwww` | [(4) organ vox preset I drawbar 4](#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 5 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0080` | `waaaaapp` | [(a) organ vox preset I drawbar 5 morph after touch](#ns2-organ-drawbars-preset-1), [(p) organ vox preset I drawbar 5 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x0081` | `ppp5555w` | [(5) organ vox preset I drawbar 5](#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 6 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0082` | `wwwwaaaa` | [(a) organ vox preset I drawbar 6 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x0083` | `appppp66` | [(p) organ vox preset I drawbar 6 morph control pedal](#ns2-organ-drawbars-preset-1), [(6) organ vox preset I drawbar 6](#ns2-organ-drawbars-preset-1)
| `0x0084` | `66wwwwwa` | [(w) organ vox preset I drawbar 7 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 7 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x0085` | `aaaapppp` | [(p) organ vox preset I drawbar 7 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x0086` | `p7777www` | [(7) organ vox preset I drawbar 7](#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 8 morph wheel](#ns2-organ-drawbars-preset-1)
| `0x0087` | `wwaaaaap` | [(a) organ vox preset I drawbar 8 morph after touch](#ns2-organ-drawbars-preset-1), [(p) organ vox preset I drawbar 8 morph control pedal](#ns2-organ-drawbars-preset-1)
| `0x0088` | `pppp8888` | [(8) organ vox preset I drawbar 8](#ns2-organ-drawbars-preset-1)
| `0x0089` | `wwwwwaaa` | [(w) organ vox preset I drawbar 9 morph wheel](#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 9 morph after touch](#ns2-organ-drawbars-preset-1)
| `0x008A` | `aappppp9` | [(p) organ vox preset I drawbar 9 morph control pedal](#ns2-organ-drawbars-preset-1), [(9) organ vox preset I drawbar 9](#ns2-organ-drawbars-preset-1)
| `0x008B` | `999-----` |
| `0x008C` | `--------` |
| `0x008D` | `wwaapp1h` | [(w,a,p,1) organ farfisa preset I drawbar 1](#ns2-organ-drawbars-preset-1), [(h,a,p,2) organ farfisa preset I drawbar 2](#ns2-organ-drawbars-preset-1)
| `0x008E` | `haapp2ww` | [(w,a,p,3) organ farfisa preset I drawbar 3](#ns2-organ-drawbars-preset-1)
| `0x008F` | `aapp3wwa` | [(w,a,p,4) organ farfisa preset I drawbar 4](#ns2-organ-drawbars-preset-1), [(w,a,p,3) organ farfisa preset I drawbar 4](#ns2-organ-drawbars-preset-1)
| `0x0090` | `app4wwaa` | [(w,a,p,5) organ farfisa preset I drawbar 5](#ns2-organ-drawbars-preset-1)
| `0x0091` | `pp5wwaad` | [(w,a,d,6) organ farfisa preset I drawbar 6](#ns2-organ-drawbars-preset-1)
| `0x0092` | `d6wwaapp` | [(w,a,p,7) organ farfisa preset I drawbar 7](#ns2-organ-drawbars-preset-1)
| `0x0093` | `7wwaapp8` | [(w,a,p,8) organ farfisa preset I drawbar 8](#ns2-organ-drawbars-preset-1)
| `0x0094` | `wwaapp9-` | [(w,a,p,9) organ farfisa preset I drawbar 9](#ns2-organ-drawbars-preset-1)
| `0x0095` | `--------` |
| `0x0096` | `wwwwwaaa` | [(w) organ b3 preset II drawbar 1 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 1 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x0097` | `aappppp1` | [(p) organ b3 preset II drawbar 1 morph control pedal](#ns2-organ-drawbars-preset-2), [(1) organ b3 preset II drawbar 1](#ns2-organ-drawbars-preset-2)
| `0x0098` | `111wwwww` | [(w) organ b3 preset II drawbar 2 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x0099` | `aaaaappp` | [(a) organ b3 preset II drawbar 2 morph after touch](#ns2-organ-drawbars-preset-2), [(p) organ b3 preset II drawbar 2 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x009A` | `pp2222ww` | [(2) organ b3 preset II drawbar 2](#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 3 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x009B` | `wwwaaaaa` | [(a) organ b3 preset II drawbar 3 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x009C` | `ppppp333` | [(p) organ b3 preset II drawbar 3 morph control pedal](#ns2-organ-drawbars-preset-2), [(3) organ b3 preset II drawbar 3](#ns2-organ-drawbars-preset-2),
| `0x009D` | `3wwwwwaa` | [(w) organ b3 preset II drawbar 4 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 4 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x009E` | `aaappppp` | [(p) organ b3 preset II drawbar 4 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x009F` | `4444wwww` | [(4) organ b3 preset II drawbar 4](#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 5 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00A0` | `waaaaapp` | [(a) organ b3 preset II drawbar 5 morph after touch](#ns2-organ-drawbars-preset-2), [(p) organ b3 preset II drawbar 5 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00A1` | `ppp5555w` | [(5) organ b3 preset II drawbar 5](#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 6 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00A2` | `wwwwaaaa` | [(a) organ b3 preset II drawbar 6 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00A3` | `appppp66` | [(p) organ b3 preset II drawbar 6 morph control pedal](#ns2-organ-drawbars-preset-2), [(6) organ b3 preset II drawbar 6](#ns2-organ-drawbars-preset-2)
| `0x00A4` | `66wwwwwa` | [(w) organ b3 preset II drawbar 7 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 7 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00A5` | `aaaapppp` | [(p) organ b3 preset II drawbar 7 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00A6` | `p7777www` | [(7) organ b3 preset II drawbar 7](#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 8 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00A7` | `wwaaaaap` | [(a) organ b3 preset II drawbar 8 morph after touch](#ns2-organ-drawbars-preset-2), [(p) organ b3 preset II drawbar 8 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00A8` | `pppp8888` | [(8) organ b3 preset II drawbar 8](#ns2-organ-drawbars-preset-2)
| `0x00A9` | `wwwwwaaa` | [(w) organ b3 preset II drawbar 9 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 9 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00AA` | `aappppp9` | [(p) organ b3 preset II drawbar 9 morph control pedal](#ns2-organ-drawbars-preset-2), [(9) organ b3 preset II drawbar 9](#ns2-organ-drawbars-preset-2)
| `0x00AB` | `999vp---` | [(v) organ b3 preset II vibrato chorus](#ns2-organ-b3-preset-2-vibrato-chorus), [(p) organ b3 preset II percussion](#ns2-organ-b3-preset-2-percussion)
| `0x00AC` | `--------` |
| `0x00AD` | `wwwwwaaa` | [(w) organ vox preset II drawbar 1 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 1 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00AE` | `aappppp1` | [(p) organ vox preset II drawbar 1 morph control pedal](#ns2-organ-drawbars-preset-2), [(1) organ vox preset II drawbar 1](#ns2-organ-drawbars-preset-2)
| `0x00AF` | `111wwwww` | [(w) organ vox preset II drawbar 2 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00B0` | `aaaaappp` | [(a) organ vox preset II drawbar 2 morph after touch](#ns2-organ-drawbars-preset-2), [(p) organ vox preset II drawbar 2 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00B1` | `pp2222ww` | [(2) organ vox preset II drawbar 2](#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 3 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00B2` | `wwwaaaaa` | [(a) organ vox preset II drawbar 3 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00B3` | `ppppp333` | [(p) organ vox preset II drawbar 3 morph control pedal](#ns2-organ-drawbars-preset-2), [(3) organ vox preset II drawbar 3](#ns2-organ-drawbars-preset-2),
| `0x00B4` | `3wwwwwaa` | [(w) organ vox preset II drawbar 4 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 4 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00B5` | `aaappppp` | [(p) organ vox preset II drawbar 4 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00B6` | `4444wwww` | [(4) organ vox preset II drawbar 4](#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 5 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00B7` | `waaaaapp` | [(a) organ vox preset II drawbar 5 morph after touch](#ns2-organ-drawbars-preset-2), [(p) organ vox preset II drawbar 5 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00B8` | `ppp5555w` | [(5) organ vox preset II drawbar 5](#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 6 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00B9` | `wwwwaaaa` | [(a) organ vox preset II drawbar 6 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00BA` | `appppp66` | [(p) organ vox preset II drawbar 6 morph control pedal](#ns2-organ-drawbars-preset-2), [(6) organ vox preset II drawbar 6](#ns2-organ-drawbars-preset-2)
| `0x00BB` | `66wwwwwa` | [(w) organ vox preset II drawbar 7 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 7 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00BC` | `aaaapppp` | [(p) organ vox preset II drawbar 7 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00BD` | `p7777www` | [(7) organ vox preset II drawbar 7](#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 8 morph wheel](#ns2-organ-drawbars-preset-2)
| `0x00BE` | `wwaaaaap` | [(a) organ vox preset II drawbar 8 morph after touch](#ns2-organ-drawbars-preset-2), [(p) organ vox preset II drawbar 8 morph control pedal](#ns2-organ-drawbars-preset-2)
| `0x00BF` | `pppp8888` | [(8) organ vox preset II drawbar 8](#ns2-organ-drawbars-preset-2)
| `0x00C0` | `wwwwwaaa` | [(w) organ vox preset II drawbar 9 morph wheel](#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 9 morph after touch](#ns2-organ-drawbars-preset-2)
| `0x00C1` | `aappppp9` | [(p) organ vox preset II drawbar 9 morph control pedal](#ns2-organ-drawbars-preset-2), [(9) organ vox preset II drawbar 9](#ns2-organ-drawbars-preset-2)
| `0x00C2` | `999-----` |
| `0x00C3` | `--------` |
| `0x00C4` | `wwaapp1h` | [(w,a,p,1) organ farfisa preset II drawbar 1](#ns2-organ-drawbars-preset-2), [(h,a,p,2) organ farfisa preset II drawbar 2](#ns2-organ-drawbars-preset-2)
| `0x00C5` | `haapp2ww` | [(w,a,p,3) organ farfisa preset II drawbar 3](#ns2-organ-drawbars-preset-2)
| `0x00C6` | `aapp3wwa` | [(w,a,p,4) organ farfisa preset II drawbar 4](#ns2-organ-drawbars-preset-2), [(w,a,p,3) organ farfisa preset II drawbar 4](#ns2-organ-drawbars-preset-2)
| `0x00C7` | `app4wwaa` | [(w,a,p,5) organ farfisa preset II drawbar 5](#ns2-organ-drawbars-preset-2)
| `0x00C8` | `pp5wwaad` | [(w,a,d,6) organ farfisa preset II drawbar 6](#ns2-organ-drawbars-preset-2)
| `0x00C9` | `d6wwaapp` | [(w,a,p,7) organ farfisa preset II drawbar 7](#ns2-organ-drawbars-preset-2)
| `0x00CA` | `7wwaapp8` | [(w,a,p,8) organ farfisa preset II drawbar 8](#ns2-organ-drawbars-preset-2)
| `0x00CB` | `wwaapp9-` | [(w,a,p,9) organ farfisa preset II drawbar 9](#ns2-organ-drawbars-preset-2)
| `0x00CC` | `--------` |
| `0x00CD` | `ttt-----` | [(t) piano type](#ns2-piano-type)
| `0x00CE` | `-------c` | [(c) piano clavinet model](#ns2-piano-clavinet-model)
| `0x00CF` | `clsnddhh` | [(l) piano long release](#ns2-piano-long-release), [(s) piano string resonance](#ns2-piano-string-resonance), [(n) piano pedal noise](#ns2-piano-pedal-noise), [(d) piano dynamics](#ns2-piano-dynamics), [(h) piano clav eq hi](#ns2-piano-clavinet-eq-hi)
| `0x00D0` | `eeiiiiii` | [(e) piano clav eq](#ns2-piano-clavinet-eq), [(s) piano sample id](#ns2-piano-sample-id)
| `0x00D1` | `iiiiiiii` |
| `0x00D2` | `iiiiiiii` |
| `0x00D3` | `iiiiiiii` |
| `0x00D4` | `ii------` |
| `0x00D5` | `--------` |
| `0x00D6` | `--------` |
| `0x00D7` | `--------` |
| `0x00D8` | `--------` |
| `0x00D9` | `-------o` | [(o) synth arp on](#ns2-synth-arp-on)
| `0x00DA` | `mdddd-rr` | [(m) synth arp master clock](#ns2-synth-arp-master-clock), [(d) synth arp master clock divisor](#ns2-synth-arp-rate), [(r) synth arp rate](#ns2-synth-arp-rate)
| `0x00DB` | `rrrrrppn` | [(p) synth arp pattern](#ns2-synth-arp-pattern), [(n) synth arp master range](#ns2-synth-arp-range)
| `0x00DC` | `nvrrrrh-` | [(v) synth lfo master clock](#ns2-synth-lfo-master-clock), [(r) synth lfo rate clock divisor](#ns2-synth-lfo-rate), [(h) synth kb-hold](#ns2-synth-kb-hold)
| `0x00DD` | `--------` |
| `0x00DE` | `--------` |
| `0x00DF` | `aaaaaaad` | [(a) synth mod env attack](#ns2-synth-mod-env-attack), [(d) synth mod env decay](#ns2-synth-mod-env-decay)
| `0x00E0` | `ddddddrr` | [(r) synth mod env release](#ns2-synth-mod-env-release)
| `0x00E1` | `rrrrrvmm` | [(v) synth mod env velocity](#ns2-synth-mod-env-velocity), [(m) synth osc mode](#ns2-synth-osc-mode)
| `0x00E2` | `mfffffff` | [(f) synth osc waveform](#ns2-synth-osc-waveform)
| `0x00E3` | `fffwwwww` | [(w) synth shape morph wheel](#ns2-synth-shape)
| `0x00E4` | `wwwaaaaa` | [(a) synth shape morph after touch](#ns2-synth-shape)
| `0x00E5` | `aaaccccc` | [(c) synth shape morph control pedal](#ns2-synth-shape)
| `0x00E6` | `cccsssss` | [(s) synth shape](#ns2-synth-shape)
| `0x00E7` | `ssmmmmmm` | [(m) synth shape mod](#ns2-synth-shape-mod)
| `0x00E8` | `mwwwwwww` | [(w) synth shape detune morph wheel](#ns2-synth-shape-detune)
| `0x00E9` | `waaaaaaa` | [(a) synth shape detune morph after touch](#ns2-synth-shape-detune)
| `0x00EA` | `accccccc` | [(c) synth shape detune morph control pedal](#ns2-synth-shape-detune)
| `0x00EB` | `cddddddd` | [(d) synth shape detune](#ns2-synth-shape-detune)
| `0x00EC` | `hhaaccsw` | [(h) synth skip sample attack morph wheel](#ns2-synth-skip-sample-attack), [(a) synth skip sample attack morph after touch](#ns2-synth-skip-sample-attack), [(c) synth skip sample attack morph control pedal](#ns2-synth-skip-sample-attack), [(s) synth skip sample attack](#ns2-synth-skip-sample-attack), [(w) synth filter freq morph wheel](#ns2-synth-filter-freq)
| `0x00ED` | `wwwwwwwa` | [(a) synth filter freq morph after touch](#ns2-synth-filter-freq)
| `0x00EE` | `aaaaaaac` | [(c) synth filter freq morph control pedal](#ns2-synth-filter-freq)
| `0x00EF` | `cccccccf` | [(f) synth filter freq](#ns2-synth-filter-freq)
| `0x00F0` | `ffffffrr` | [(r) synth filter resonance](#ns2-synth-filter-res)
| `0x00F1` | `rrrrr222` | [(m) synth filter mod 2](#ns2-synth-filter-mod-2)
| `0x00F2` | `22221111` | [(l) synth filter mod 1](#ns2-synth-filter-mod-1)
| `0x00F3` | `111kttta` | [(t) synth filter kb track](#ns2-synth-filter-kb-track), [(t) synth filter type](#ns2-synth-filter-type), [(a) synth amp env attack](#ns2-synth-amp-env-attack)
| `0x00F4` | `aaaaaadd` | [(d) synth amp env decay](#ns2-synth-amp-env-decay)
| `0x00F5` | `dddddrrr` | [(r) synth amp env release](#ns2-synth-amp-env-release)
| `0x00F6` | `rrrrvttt` | [(v) synth amp env velocity](#ns2-synth-amp-env-velocity), [(t) synth lfo rate](#ns2-synth-lfo-rate)
| `0x00F7` | `ttttwwii` | [(w) synth lfo waveform](#ns2-synth-lfo-wave), [(i) synth sample id](#ns2-synth-sample-id)
| `0x00F8` | `iiiiiiii` |
| `0x00F9` | `iiiiiiii` |
| `0x00FA` | `iiiiiiii` |
| `0x00FB` | `iiiiiirr` | [(r) synth glide rate](#ns2-synth-glide)
| `0x00FC` | `rrrrrmmu` | [(m) synth glide-voice-mode](#ns2-synth-voice), [(u) synth unison](#ns2-synth-unison)
| `0x00FD` | `uuvvv---` | [(v) synth vibrato](#ns2-synth-vibrato)
| `0x00FE` | `--------` |
| `0x00FF` | `mmcccccc` | [(m) extern midi control](#ns2-extern-midi-control), [(c) extern midi cc number](#ns2-extern-midi-cc-number)
| `0x0100` | `cwwwwwww` | [(w) extern midi cc morph wheel](#ns2-extern-midi-cc)
| `0x0101` | `waaaaaaa` | [(a) extern midi cc morph after touch](#ns2-extern-midi-cc)
| `0x0102` | `appppppp` | [(p) extern midi cc morph control pedal](#ns2-extern-midi-cc)
| `0x0103` | `pccccccc` | [(c) extern midi cc](#ns2-extern-midi-cc)
| `0x0104` | `obbbbbbb` | [(o) extern midi cc on](#ns2-extern-midi-cc-on), [(b) extern midi bank select CC32](#ns2-extern-midi-bank-select-cc32)
| `0x0105` | `obbbbbbb` | [(o) extern midi bank select CC32 enabled](#ns2-extern-midi-bank-select-cc32-enabled), [(b) extern midi bank select CC00](#ns2-extern-midi-bank-select-cc00)
| `0x0106` | `ovvvvvvv` | [(o) extern midi bank select CC00 enabled](#ns2-extern-midi-bank-select-cc00-enabled), [(v) extern midi program](#ns2-extern-midi-program)
| `0x0107` | `occcc-tw` | [(o) extern midi program on](#ns2-extern-midi-program-on), [(c) extern midi channel](#ns2-extern-midi-channel), [(t) extern midi channel type](#ns2-extern-midi-channel-type), [(w) extern volume morph wheel](#ns2-extern-volume)
| `0x0108` | `wwwwwwwa` | [(a) extern volume morph after touch](#ns2-extern-volume)
| `0x0109` | `aaaaaaap` | [(p) extern volume morph control pedal](#ns2-extern-volume)
| `0x010A` | `pppppppv` | [(v) extern volume](#ns2-extern-volume)
| `0x010B` | `vvvvvvow` | [(o) extern midi volume on](#ns2-extern-midi-volume-on), [(w) extern midi send wheel](#ns2-extern-midi-send-wheel)
| `0x010C` | `ap-vvs--` | [(a) extern midi send aftertouch](#ns2-extern-midi-send-aftertouch), [(p) extern midi send control-pedal](#ns2-extern-midi-send-control-pedal), [(v) extern midi velocity curve](#ns2-extern-midi-velocity-curve), [(s) extern midi send swell](#ns2-extern-midi-send-swell)
| `0x010D` | `--------` |
| `0x010E` | `--------` |
| `0x010F` | `ffossttt` | [(f) effect focus](#ns2-effect-focus), [(o) effect 1 on](#ns2-effect-1-on), [(s) effect-1-source](#ns2-effect-1-source), [(t) effect 1 type](#ns2-effect-1-type)
| `0x0110` | `cwwwwwaa` | [(c) effect 1 master clock](#ns2-effect-1-master-clock), [(w) effect 1 rate mst clock divisor morph wheel](#ns2-effect-1-rate-master-clock), [(w) effect 1 rate mst clock divisor morph after touch](#ns2-effect-1-rate-master-clock)
| `0x0111` | `aaappppp` | [(p) effect 1 rate mst clock divisor morph control pedal](#ns2-effect-1-rate-master-clock)
| `0x0112` | `rrrrwwww` | [(r) effect 1 rate mst clock divisor](#ns2-effect-1-rate-master-clock), [(w) effect 1 rate morph wheel](#ns2-effect-1-rate)
| `0x0113` | `wwwwaaaa` | [(a) effect 1 rate morph after touch](#ns2-effect-1-rate)
| `0x0114` | `aaaapppp` | [(p) effect 1 rate morph control pedal](#ns2-effect-1-rate)
| `0x0115` | `pppprrrr` | [(r) effect 1 rate](#ns2-effect-1-rate)
| `0x0116` | `rrrwwwww` | [(w) effect 1 amount morph wheel](#ns2-effect-1-amount)
| `0x0117` | `wwwaaaaa` | [(a) effect 1 amount after touch](#ns2-effect-1-amount)
| `0x0118` | `aaappppp` | [(p) effect 1 amount control pedal](#ns2-effect-1-amount)
| `0x0119` | `pppaaaaa` | [(a) effect 1 amount](#ns2-effect-1-amount)
| `0x011A` | `aaossttt` | [(o) effect 2 on](#ns2-effect-2-on), [(s) effect-2-source](#ns2-effect-2-source), [(t) effect 2 type](#ns2-effect-2-type)
| `0x011B` | `cwwwwwaa` | [(c) effect 2 master clock](#ns2-effect-2-master-clock), [(w) effect 2 rate mst clock divisor morph wheel](#ns2-effect-2-rate-master-clock), [(w) effect 2 rate mst clock divisor morph after touch](#ns2-effect-2-rate-master-clock)
| `0x011C` | `aaappppp` | [(p) effect 2 rate mst clock divisor morph control pedal](#ns2-effect-2-rate-master-clock)
| `0x011D` | `rrrrwwww` | [(r) effect 2 rate mst clock divisor](#ns2-effect-2-rate-master-clock), [(w) effect 2 rate morph wheel](#ns2-effect-2-rate)
| `0x011E` | `wwwwaaaa` | [(a) effect 2 rate morph after touch](#ns2-effect-2-rate)
| `0x011F` | `aaaapppp` | [(p) effect 2 rate morph control pedal](#ns2-effect-2-rate)
| `0x0120` | `pppprrrr` | [(r) effect 2 rate](#ns2-effect-2-rate)
| `0x0121` | `rrrwwwww` | [(w) effect 2 amount morph wheel](#ns2-effect-2-amount)
| `0x0122` | `wwwaaaaa` | [(a) effect 2 amount after touch](#ns2-effect-2-amount)
| `0x0123` | `aaappppp` | [(p) effect 2 amount control pedal](#ns2-effect-2-amount)
| `0x0124` | `pppaaaaa` | [(a) effect 2 amount](#ns2-effect-2-amount)
| `0x0125` | `aaosspmw` | [(o) delay on](#ns2-delay-on), [(s) delay source](#ns2-delay-source), [(p) delay ping pong](#ns2-delay-ping-pong), [(m) delay master clock](#ns2-delay-master-clock), [(w) delay tempo master clock divisor morph wheel](#ns2-delay-tempo-master-clock-divisor)                                                                                                                                                                                                                                                                                     [(o) delay on](#ns2-delay-on), [(s) delay source](#ns2-delay-source), [(p) delay ping pong](#ns2-delay-ping-pong), [(m) delay master clock](#ns2-delay-master-clock), [(w) delay tempo master clock divisor morph wheel](#ns2-delay-tempo-master-clock-divisor)
| `0x0126` | `wwwwaaaa` | [(a) delay tempo master clock divisor morph after touch](#ns2-delay-tempo-master-clock-divisor)
| `0x0127` | `apppppdd` | [(p) delay tempo master clock divisor morph control pedal](#ns2-delay-tempo-master-clock-divisor), [(d) delay tempo master clock divisor](#ns2-delay-tempo-master-clock-divisor)
| `0x0128` | `ddwwwwww` | [(w) delay tempo morph wheel](#ns2-delay-tempo)
| `0x0129` | `wwwwwwwa` | [(a) delay tempo morph after touch](#ns2-delay-tempo)
| `0x012A` | `aaaaaaaa` |
| `0x012B` | `aaaacccc` | [(c) delay tempo morph control pedal](#ns2-delay-tempo)
| `0x012C` | `cccccccc` |
| `0x012D` | `cttttttt` | [(t) delay tempo](#ns2-delay-tempo)
| `0x012E` | `tttttwww` | [(w) delay amount morph wheel](#ns2-delay-amount)
| `0x012F` | `wwwwwaaa` | [(a) delay amount morph after touch](#ns2-delay-amount)
| `0x0130` | `aaaaappp` | [(p) delay amount morph control pedal](#ns2-delay-amount)
| `0x0131` | `pppppaaa` | [(a) delay amount](#ns2-delay-amount)
| `0x0132` | `aaaaffff` | [(f) delay feedback](#ns2-delay-feedback)
| `0x0133` | `fffosstt` | [(o) amp sim eq on](#ns2-amp-sim-eq-on), [(s) amp sim eq source](#ns2-amp-sim-eq-source), [(t) amp type](#ns2-amp-type)
| `0x0134` | `dddddddt` | [(d) amp sim drive](#ns2-amp-sim-drive), [(t) eq treble](#ns2-eq-treble)
| `0x0135` | `ttttttmm` | [(m) eq mid](#ns2-eq-mid)
| `0x0136` | `mmmmmbbb` | [(b) eq bass](#ns2-eq-bass)
| `0x0137` | `bbbbffff` | [(f) eq mid flt freq](#ns2-eq-mid-flt-freq)
| `0x0138` | `fff-----` |
| `0x0139` | `--------` |
| `0x013A` | `--------` |
| `0x013B` | `--------` |
| `0x013C` | `--------` | Slot B, same as offset 0x43, offset from Slot A is 0xf9 (249 bytes)
| `...`
| `0x0220` | `--------` |
| `0x0221` | `--------` |
| `0x0222` | `--------` |
| `0x0223` | `--------` |
| `0x0224` | `--------` |
| `0x0225` | `--------` |
| `0x0226` | `--------` |
| `0x0227` | `--------` |
| `0x0228` | `--------` |
| `0x0229` | `--------` |
| `0x022A` | `--------` |
| `0x022B` | `--------` |
| `0x022C` | `--------` |
| `0x022D` | `--------` |
| `0x022E` | `--------` |
| `0x022F` | `--------` |
| `0x0230` | `--------` |
| `0x0231` | `--------` |
| `0x0232` | `--------` |
| `0x0233` | `--------` |
| `0x0234` | `--------` |

\newpage
## Nord Stage 2 Synth File Structure

NS2 Synth file (ns2s) is a subset of the Program file (0x00DF to 0x00FE).
Header structure is similar to ns2f file.
note: Arpeggiator settings are not included.

\newpage


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
