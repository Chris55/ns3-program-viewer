
## Let's get started

This file documents the Nord Stage program file structure. It is handmade by [NUF](https://www.norduserforum.com) users and is not officially supported by Nord Keyboards / Clavia DMI AB.
While we certainly hope this document is useful, none of the authors or contributors place any guarantees as to the accuracy of the data.

We contacted Nord Keyboards / Clavia DMI AB support about this project, and the answer was that they are fine with this project, and it can be published :)

[https://ns3-program-viewer.herokuapp.com](https://ns3-program-viewer.herokuapp.com) web application is the project behind this initiative.
Source is located here: [https://github.com/Chris55/ns3-program-viewer](https://github.com/Chris55/ns3-program-viewer)

* * *

### Summary
- [Disclaimer](#disclaimer)
- [Contributors](#contributors)
- [License](#license)
- [Revision](#revision)
- [Nord Stage 3 File Structure](#nord-stage-3-file-structure)
- [Nord Stage 2 File Structure](#nord-stage-2-file-structure)



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
| 1.1  | xx-xxx-2020  | Fixed NS3 Organ mapping (0x00DB was missing)
|      |              | Added NS3 missing Organ Preset II options
|      |              | Simplified NS3 Morph implementation
|      |              | Added NS3 Synth Preset
|      |              | Fixed typo in offsets 0x011B, 0x011D, 0x011F, and 0x119
|      |              | Fixed NS3 panel starting offset
|      |              | Draft added Stage 2


\newpage


## License
This mapping is provided as-is under the MIT license.

Copyright (c) 2020 Christian Florentz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

\newpage
## Nord Stage 3 File Structure

This mapping corresponds to the Nord Stage 3 program file (file extension ns3f).

The file version used is 3.04 (generated with OS v2.54), and the file length is 592 bytes.
Some older versions have a length of 574 bytes and a smaller header.

Offset 0x04 defines the file format.

Each memory offset corresponds to an 8-bit value.

0x01 (hex) = 00000001 -> bit 0 is ‘1’

0x84 (hex) = 10000100 -> bit 7 and 2 are ‘1’

In the documentation `--xxxxxx` (b5-0) means Bit5 to Bit0.


| offset   | bits       | description
| :---:    |   :----:   | :-------------------------------------------------
| `0x0000` | `cccccccc` | ascii C - 0x43, 4-byte Clavia ID
| `0x0001` | `cccccccc` | ascii B - 0x42
| `0x0002` | `cccccccc` | ascii I - 0x49
| `0x0003` | `cccccccc` | ascii N - 0x4E
| `0x0004` | `ffffffff` | [(f) file format](ns3-doc.md#ns3-file-format)
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
| `0x0010` | `cccccccc` | [(c) program category](ns3-doc.md#ns3-program-category)
| `0x0011` | `--------` |
| `0x0012` | `--------` |
| `0x0013` | `--------` |
| `0x0014` | `iiiiiiii` | [(i) file version](ns3-doc.md#ns3-file-version) (16-bit)
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
| `0x0031` | `pppsssss` | [(p) panel](ns3-doc.md#ns3-panel-enabled-and-selection), [(s) split](ns3-doc.md#ns3-split)
| `0x0032` | `ssssssss` |
| `0x0033` | `ssssssss` |
| `0x0034` | `sddpvvvr` | [(d) piano layer detune](ns3-doc.md#ns3-piano-layer-detune), [(p) organ pitch stick](ns3-doc.md#ns3-organ-pitch-stick), [(v) organ vibrato mode](ns3-doc.md#ns3-organ-vibrato-mode), [(r) rotary speaker speed](ns3-doc.md#ns3-rotary-speaker-speed)
| `0x0035` | `mwwwaaap` | [(m) rotary speaker stop mode](ns3-doc.md#ns3-rotary-speaker-stop-mode), [(w) rotary speaker speed morph wheel](ns3-doc.md#ns3-rotary-speaker-speed), [(a) rotary speaker speed morph after touch](ns3-doc.md#ns3-rotary-speaker-speed), [(p) rotary speaker speed morph control pedal](ns3-doc.md#ns3-rotary-speaker-speed)
| `0x0036` | `pp------` |
| `0x0037` | `--------` |
| `0x0038` | `tttttccc` | [(t) transpose](ns3-doc.md#ns3-transpose), [(c) master clock rate](ns3-doc.md#ns3-master-clock-rate)
| `0x0039` | `cccccddd` | [(d) rotary speaker drive](ns3-doc.md#ns3-rotary-speaker-drive)
| `0x003A` | `ddddk-ss` | [(k) dual keyboard](ns3-doc.md#ns3-dual-keyboard), [(s) dual keyboard style](ns3-doc.md#ns3-dual-keyboard-style)
| `0x003B` | `rrrr----` | [(r) synth pitch stick range](ns3-doc.md#ns3-synth-pitch-stick-range)
| `0x003C` | `--------` |
| `0x003D` | `--------` |
| `0x003E` | `--------` |
| `0x003F` | `--------` |
| `0x0040` | `--------` |
| `0x0041` | `--------` |
| `0x0042` | `--------` |
| `0x0043` | `ozzzzvvv` | [(o) piano on](ns3-doc.md#ns3-piano-on), [(z) piano kb zone](ns3-doc.md#ns3-piano-kb-zone), [(v) piano volume](ns3-doc.md#ns3-piano-volume)
| `0x0044` | `vvvvwwww` | [(w) piano volume morph wheel](ns3-doc.md#ns3-piano-volume)
| `0x0045` | `wwwwaaaa` | [(a) piano volume morph after touch](ns3-doc.md#ns3-piano-volume)
| `0x0046` | `aaaapppp` | [(p) piano volume morph control pedal](ns3-doc.md#ns3-piano-volume)
| `0x0047` | `ppppoooo` | [(o) piano octave shift](ns3-doc.md#ns3-piano-octave-shift)
| `0x0048` | `pstttmmm` | [(p) piano pitch stick](ns3-doc.md#ns3-piano-pitch-stick), [(s) piano sustain pedal](ns3-doc.md#ns3-piano-sustain-pedal), [(t) piano type](ns3-doc.md#ns3-piano-type), [(m) piano model](ns3-doc.md#ns3-piano-model)
| `0x0049` | `mmvviiii` | [(v) clavinet model](ns3-doc.md#ns3-clavinet-model), [(i) piano sample name](ns3-doc.md#ns3-piano-model)
| `0x004A` | `iiiiiiii` |
| `0x004B` | `iiiiiiii` |
| `0x004C` | `iiiiiiii` |
| `0x004D` | `iiiisrpk` | [(s) piano soft release](ns3-doc.md#ns3-piano-soft-release),[(r) piano string resonance](ns3-doc.md#ns3-piano-string-resonance), [(p) piano pedal noise](ns3-doc.md#ns3-piano-pedal-noise), [(k) piano kb touch](ns3-doc.md#ns3-piano-kb-touch)
| `0x004E` | `k-ttt---` | [(t) piano timbre](ns3-doc.md#ns3-piano-timbre)
| `0x004F` | `--------` |
| `0x0050` | `--------` |
| `0x0051` | `--------` |
| `0x0052` | `ozzzzvvv` | [(o) synth on](ns3-doc.md#ns3-synth-on), [(z) synth kb zone](ns3-doc.md#ns3-synth-kb-zone), [(v) synth volume](ns3-doc.md#ns3-synth-volume)
| `0x0053` | `vvvvwwww` | [(w) synth volume morph wheel](ns3-doc.md#ns3-synth-volume)
| `0x0054` | `wwwwaaaa` | [(a) synth volume morph after touch](ns3-doc.md#ns3-synth-volume)
| `0x0055` | `aaaapppp` | [(p) synth volume morph control pedal](ns3-doc.md#ns3-synth-volume)
| `0x0056` | `ppppoooo` | [(o) synth octave shift](ns3-doc.md#ns3-synth-octave-shift)
| `0x0057` | `psiiiiii` | [(p) synth pitch stick](ns3-doc.md#ns3-synth-pitch-stick), [(s) synth sustain pedal](ns3-doc.md#ns3-synth-sustain-pedal), [(i) synth preset location](ns3-doc.md#ns3-synth-preset-location)
| `0x0058` | `iiiicccc` | [(c) synth preset name](ns3-doc.md#ns3-synth-preset-name)
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
| `0x0080` | `hosrrppc` | [(h) synth kh hold](ns3-doc.md#ns3-synth-kb-hold), [(o) synth arp on](ns3-doc.md#ns3-synth-arp-on), [(o) synth arp kb sync](ns3-doc.md#ns3-synth-arp-kb-sync), [(r) synth arp range](ns3-doc.md#ns3-synth-arp-range), [(p) synth arp pattern](ns3-doc.md#ns3-synth-arp-pattern), [(c) synth arp master clock](ns3-doc.md#ns3-synth-arp-master-clock)
| `0x0081` | `rrrrrrrw` | [(r) synth arp rate](ns3-doc.md#ns3-synth-arp-rate), [(w) synth arp rate morph wheel](ns3-doc.md#ns3-synth-arp-rate)
| `0x0082` | `wwwwwwwa` | [(a) synth arp rate morph after touch](ns3-doc.md#ns3-synth-arp-rate)
| `0x0083` | `aaaaaaap` | [(p) synth arp rate morph control pedal](ns3-doc.md#ns3-synth-arp-rate)
| `0x0084` | `pppppppv` | [(v) synth voice](ns3-doc.md#ns3-synth-voice)
| `0x0085` | `vggggggg` | [(g) synth glide](ns3-doc.md#ns3-synth-glide)
| `0x0086` | `uuvvvlll` | [(g) synth unison](ns3-doc.md#ns3-synth-unison), [(v) synth vibrato](ns3-doc.md#ns3-synth-vibrato), [(l) synth lfo wave](ns3-doc.md#ns3-synth-lfo-wave)
| `0x0087` | `mrrrrrrr` | [(m) synth lfo master clock](ns3-doc.md#ns3-synth-lfo-master-clock), [(r) synth lfo rate](ns3-doc.md#ns3-synth-lfo-rate)
| `0x0088` | `wwwwwwww` | [(w) synth lfo rate morph wheel](ns3-doc.md#ns3-synth-lfo-rate)
| `0x0089` | `aaaaaaaa` | [(a) synth lfo rate morph after touch](ns3-doc.md#ns3-synth-lfo-rate)
| `0x008A` | `pppppppp` | [(r) synth lfo rate control pedal](ns3-doc.md#ns3-synth-lfo-rate)
| `0x008B` | `aaaaaaad` | [(a) synth mod env attack](ns3-doc.md#ns3-synth-mod-env-attack), [(d) synth mod env decay](ns3-doc.md#ns3-synth-mod-env-decay)
| `0x008C` | `ddddddrr` | [(a) synth mod env release](ns3-doc.md#ns3-synth-mod-env-release)
| `0x008D` | `rrrrrvtt` | [(v) synth mod env velocity](ns3-doc.md#ns3-synth-mod-env-velocity), [(t) synth oscillator type](ns3-doc.md#ns3-synth-oscillator-type)
| `0x008E` | `twwwwwww` | [(w) synth oscillator 1 wave form](ns3-doc.md#ns3-synth-oscillator-1-wave-form)
| `0x008F` | `ww-ccccp` | [(c) synth oscillator config](ns3-doc.md#ns3-synth-oscillator-config), [(p) synth pitch](ns3-doc.md#ns3-synth-pitch)
| `0x0090` | `ppppplll` | [(l) synth oscillator control](ns3-doc.md#ns3-synth-oscillator-control)
| `0x0091` | `llllwwww` | [(w) synth oscillator control morph wheel](ns3-doc.md#ns3-synth-oscillator-control)
| `0x0092` | `wwwwaaaa` | [(a) synth oscillator control morph after touch](ns3-doc.md#ns3-synth-oscillator-control)
| `0x0093` | `aaaapppp` | [(p) synth oscillator control morph control pedal](ns3-doc.md#ns3-synth-oscillator-control)
| `0x0094` | `ppppllll` | [(l) synth oscillator mod](ns3-doc.md#ns3-synth-oscillator-mod)
| `0x0095` | `lllwwwww` | [(w) synth oscillator mod morph wheel](ns3-doc.md#ns3-synth-oscillator-mod)
| `0x0096` | `wwwaaaaa` | [(a) synth oscillator mod morph after touch](ns3-doc.md#ns3-synth-oscillator-mod)
| `0x0097` | `aaappppp` | [(p) synth oscillator mod morph control pedal](ns3-doc.md#ns3-synth-oscillator-mod)
| `0x0098` | `ppptttff` | [(t) synth filter type](ns3-doc.md#ns3-synth-filter-type), [(f) synth filter freq](ns3-doc.md#ns3-synth-filter-freq)
| `0x0099` | `fffffwww` | [(w) synth filter freq morph wheel](ns3-doc.md#ns3-synth-filter-freq)
| `0x009A` | `wwwwwaaa` | [(a) synth filter freq morph after touch](ns3-doc.md#ns3-synth-filter-freq)
| `0x009B` | `aaaaappp` | [(p) synth filter freq morph control pedal](ns3-doc.md#ns3-synth-filter-freq)
| `0x009C` | `ppppphhh` | [(h) synth filter hp freq res](ns3-doc.md#ns3-synth-filter-hp-freq-res)
| `0x009D` | `hhhhwwww` | [(w) synth filter hp freq res morph wheel](ns3-doc.md#ns3-synth-filter-hp-freq-res)
| `0x009E` | `wwwwaaaa` | [(a) synth filter hp freq res morph after touch](ns3-doc.md#ns3-synth-filter-hp-freq-res)
| `0x009F` | `aaaapppp` | [(p) synth filter hp freq res morph control pedal](ns3-doc.md#ns3-synth-filter-hp-freq-res)
| `0x00A0` | `ppppllll` | [(l) synth filter lfo amount](ns3-doc.md#ns3-synth-filter-lfo-amount)
| `0x00A1` | `lllwwwww` | [(w) synth filter lfo amount morph wheel](ns3-doc.md#ns3-synth-filter-lfo-amount)
| `0x00A2` | `wwwaaaaa` | [(a) synth filter lfo amount morph after touch](ns3-doc.md#ns3-synth-filter-lfo-amount)
| `0x00A3` | `aaappppp` | [(p) synth filter lfo amount morph control pedal](ns3-doc.md#ns3-synth-filter-lfo-amount)
| `0x00A4` | `pppmmmmm` | [(m) synth filter vel mod env amount](ns3-doc.md#ns3-synth-filter-vel-mod-env-amount)
| `0x00A5` | `mmttddaa` | [(t) synth filter kb track](ns3-doc.md#ns3-synth-filter-kb-track), [(d) synth filter drive](ns3-doc.md#ns3-synth-filter-drive), [(a) synth amp env attack](ns3-doc.md#ns3-synth-amp-env-attack)
| `0x00A6` | `aaaaaddd` | [(d) synth amp env decay](ns3-doc.md#ns3-synth-amp-env-decay)
| `0x00A7` | `ddddrrrr` | [(r) synth amp env release](ns3-doc.md#ns3-synth-amp-env-release)
| `0x00A8` | `rrrvvsss` | [(r) synth amp env velocity](ns3-doc.md#ns3-synth-amp-env-velocity), [(s) synth sample id](ns3-doc.md#ns3-synth-sample-id)
| `0x00A9` | `ssssssss` |
| `0x00AA` | `ssssssss` |
| `0x00AB` | `ssssssss` |
| `0x00AC` | `sssssf--` | [(f) synth fast attack](ns3-doc.md#ns3-synth-fast-attack)
| `0x00AD` | `--------` | 0
| `0x00AE` | `--------` | 0
| `0x00AF` | `--------` | 0
| `0x00B0` | `--------` | 0
| `0x00B1` | `--------` | 0
| `0x00B2` | `--------` | 0
| `0x00B3` | `--------` | 0
| `0x00B4` | `--------` | 0
| `0x00B5` | `--------` | 07
| `0x00B6` | `ozzzzvvv` | [(o) organ on](ns3-doc.md#ns3-organ-on), [(z) organ kb zone](ns3-doc.md#ns3-organ-kb-zone), [(v) organ volume](ns3-doc.md#ns3-organ-volume)
| `0x00B7` | `vvvvwwww` | [(w) organ volume morph wheel](ns3-doc.md#ns3-organ-volume)
| `0x00B8` | `wwwwaaaa` | [(a) organ volume morph after touch](ns3-doc.md#ns3-organ-volume)
| `0x00B9` | `aaaapppp` | [(p) organ volume morph control pedal](ns3-doc.md#ns3-organ-volume)
| `0x00BA` | `ppppoooo` | [(o) organ octave shift](ns3-doc.md#ns3-organ-octave-shift)
| `0x00BB` | `stttlp--` | [(s) organ sustain-pedal](ns3-doc.md#ns3-organ-sustain-pedal),[(t) organ type](ns3-doc.md#ns3-organ-type), [(l) organ live mode](ns3-doc.md#ns3-organ-live-mode), [(p) organ preset 2 on](ns3-doc.md#ns3-organ-preset-2-on)
| `0x00BC` | `--------` | 0
| `0x00BD` | `--------` | 1A
| `0x00BE` | `1111wwww` | [organ preset 1 drawbar (1)](ns3-doc.md#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 1 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00BF` | `waaaaapp` | [(a) organ preset 1 drawbar 1 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1), [(p) organ preset 1 drawbar 2 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00C0` | `ppp2222w` | [organ preset 1 drawbar (2)](ns3-doc.md#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 2 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00C1` | `wwwwaaaa` | [(a) organ preset 1 drawbar 2 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00C2` | `appppp33` | [(p) organ preset 1 drawbar 2 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1), [organ preset 1 drawbar (3)](ns3-doc.md#ns3-organ-drawbars-preset-1),
| `0x00C3` | `33wwwwwa` | [(w) organ preset 1 drawbar 3 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1), [(a) organ preset 1 drawbar 3 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00C4` | `aaaapppp` | [(p) organ preset 1 drawbar 3 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00C5` | `p4444www` | [organ preset 1 drawbar (4)](ns3-doc.md#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 4 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00C6` | `wwaaaaap` | [(a) organ preset 1 drawbar 4 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1), [(p) organ preset 1 drawbar 4 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1),
| `0x00C7` | `pppp5555` | [organ preset 1 drawbar (5)](ns3-doc.md#ns3-organ-drawbars-preset-1),
| `0x00C8` | `wwwwwaaa` | [(w) organ preset 1 drawbar 5 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1), [(a) organ preset 1 drawbar 5 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00C9` | `aappppp6` | [(p) organ preset 1 drawbar 5 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1), [organ preset 1 drawbar (6)](ns3-doc.md#ns3-organ-drawbars-preset-1),
| `0x00CA` | `666wwwww` | [(w) organ preset 1 drawbar 6 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00CB` | `aaaaappp` | [(a) organ preset 1 drawbar 6 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1), [(p) organ preset 1 drawbar 6 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00CC` | `pp7777ww` | [organ preset 1 drawbar (7)](ns3-doc.md#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 7 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00CD` | `wwwaaaaa` | [(a) organ preset 1 drawbar 7 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00CE` | `ppppp888` | [(p) organ preset 1 drawbar 7 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1), [organ preset 1 drawbar (8)](ns3-doc.md#ns3-organ-drawbars-preset-1),
| `0x00CF` | `8wwwwwaa` | [(w) organ preset 1 drawbar 8 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1), [(a) organ preset 1 drawbar 8 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00D0` | `aaappppp` | [(p) organ preset 1 drawbar 8 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00D1` | `9999wwww` | [organ preset 1 drawbar (9)](ns3-doc.md#ns3-organ-drawbars-preset-1), [(w) organ preset 1 drawbar 9 morph wheel](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00D2` | `waaaaacc` | [(a) organ preset 1 drawbar 9 morph after touch](ns3-doc.md#ns3-organ-drawbars-preset-1), [(c) organ preset 1 drawbar 9 morph control pedal](ns3-doc.md#ns3-organ-drawbars-preset-1)
| `0x00D3` | `cccvphds` | [(v) organ vibrato on](ns3-doc.md#ns3-organ-vibrato-on), [(p) organ percussion on](ns3-doc.md#ns3-organ-percussion-on), [(h) organ percussion harmonic third](ns3-doc.md#ns3-organ-percussion-harmonic-third), [(d) organ percussion decay fast](ns3-doc.md#ns3-organ-percussion-decay-fast), [(s) organ percussion volume soft](ns3-doc.md#ns3-organ-percussion-volume-soft)
| `0x00D4` | `--------` | 0
| `0x00D5` | `--------` | 0
| `0x00D6` | `--------` | 0
| `0x00D7` | `--------` | 0
| `0x00D8` | `--------` | 1A
| `0x00D9` | `1111wwww` | [organ preset 2 drawbar (1)](ns3-doc.md#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 1 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00DA` | `waaaaapp` | [(a) organ preset 2 drawbar 1 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars), [(p) organ preset 2 drawbar 2 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00DB` | `ppp2222w` | [organ preset 2 drawbar (2)](ns3-doc.md#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 2 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00DC` | `wwwwaaaa` | [(a) organ preset 2 drawbar 2 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00DD` | `appppp33` | [(p) organ preset 2 drawbar 2 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars), [organ preset 2 drawbar (3)](ns3-doc.md#ns3-organ-preset-2-drawbars),
| `0x00DE` | `33wwwwwa` | [(w) organ preset 2 drawbar 3 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars), [(a) organ preset 2 drawbar 3 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00DF` | `aaaapppp` | [(p) organ preset 2 drawbar 3 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00E0` | `p4444www` | [organ preset 2 drawbar (4)](ns3-doc.md#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 4 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00E1` | `wwaaaaap` | [(a) organ preset 2 drawbar 4 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars), [(p) organ preset 2 drawbar 4 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars),
| `0x00E2` | `pppp5555` | [organ preset 2 drawbar (5)](ns3-doc.md#ns3-organ-preset-2-drawbars),
| `0x00E3` | `wwwwwaaa` | [(w) organ preset 2 drawbar 5 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars), [(a) organ preset 2 drawbar 5 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00E4` | `aappppp6` | [(p) organ preset 2 drawbar 5 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars), [organ preset 2 drawbar (6)](ns3-doc.md#ns3-organ-preset-2-drawbars),
| `0x00E5` | `666wwwww` | [(w) organ preset 2 drawbar 6 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00E6` | `aaaaappp` | [(a) organ preset 2 drawbar 6 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars), [(p) organ preset 2 drawbar 6 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00E7` | `pp7777ww` | [organ preset 2 drawbar (7)](ns3-doc.md#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 7 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00E8` | `wwwaaaaa` | [(a) organ preset 2 drawbar 7 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00E9` | `ppppp888` | [(p) organ preset 2 drawbar 7 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars), [organ preset 2 drawbar (8)](ns3-doc.md#ns3-organ-preset-2-drawbars),
| `0x00EA` | `8wwwwwaa` | [(w) organ preset 2 drawbar 8 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars), [(a) organ preset 2 drawbar 8 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00EB` | `aaappppp` | [(p) organ preset 2 drawbar 8 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00EC` | `9999wwww` | [organ preset 2 drawbar (9)](ns3-doc.md#ns3-organ-preset-2-drawbars), [(w) organ preset 2 drawbar 9 morph wheel](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00ED` | `waaaaacc` | [(a) organ preset 2 drawbar 9 morph after touch](ns3-doc.md#ns3-organ-preset-2-drawbars), [(c) organ preset 2 drawbar 9 morph control pedal](ns3-doc.md#ns3-organ-preset-2-drawbars)
| `0x00EE` | `cccvphds` | [(v) organ preset 2 vibrato on](ns3-doc.md#ns3-organ-preset-2-vibrato-on), [(p) organ preset 2 percussion on](ns3-doc.md#ns3-organ-preset-2-percussion-on), [(v) organ preset 2 percussion harmonic third](ns3-doc.md#ns3-organ-preset-2-percussion-harmonic-third), [(v) organ preset 2 percussion decay fast](ns3-doc.md#ns3-organ-preset-2-percussion-decay-fast), [(v) organ preset 2 percussion volume soft](ns3-doc.md#ns3-organ-preset-2-percussion-volume-soft)
| `0x00EF` | `--------` |
| `0x00F0` | `--------` |
| `0x00F1` | `--------` |
| `0x00F2` | `--------` |
| `0x00F3` | `--------` |
| `0x00F4` | `ozzz--ss` | [(o) extern on](ns3-doc.md#ns3-extern-on), [(z) extern kb zone](ns3-doc.md#ns3-extern-kb-zone), [(s) extern octave shift](ns3-doc.md#ns3-extern-octave-shift)
| `0x00F5` | `s-------` |
| `0x00F6` | `ps----mm` | [(p) extern pitch stick](ns3-doc.md#ns3-extern-pitch-stick), [(s) extern sustain pedal](ns3-doc.md#ns3-extern-sustain-pedal), [(m) extern midi control](ns3-doc.md#ns3-extern-midi-control)
| `0x00F7` | `-------v` | [(v) extern midi cc](ns3-doc.md#ns3-extern-midi-cc)
| `0x00F8` | `vvvvvvww` | [(w) extern midi cc morph wheel](ns3-doc.md#ns3-extern-midi-cc)
| `0x00F9` | `wwwwwwaa` | [(a) extern midi cc morph after touch](ns3-doc.md#ns3-extern-midi-cc)
| `0x00FA` | `aaaaaapp` | [(p) extern midi cc morph control pedal](ns3-doc.md#ns3-extern-midi-cc)
| `0x00FB` | `pppppp--` |
| `0x00FC` | `--------` |
| `0x00FD` | `-------v` | [(v) extern midi program](ns3-doc.md#ns3-extern-midi-program)
| `0x00FE` | `wwwwwwaa` | [(a) extern midi program after touch](ns3-doc.md#ns3-extern-midi-program)
| `0x00FF` | `aaaaaapp` | [(p) extern midi program control pedal](ns3-doc.md#ns3-extern-midi-program)
| `0x0100` | `pppppp--` |
| `0x0101` | `-------v` | [(v) extern volume](ns3-doc.md#ns3-extern-volume)
| `0x0102` | `vvvvvvww` | [(w) extern volume morph wheel](ns3-doc.md#ns3-extern-volume)
| `0x0103` | `wwwwwwaa` | [(a) extern volume morph after touch](ns3-doc.md#ns3-extern-volume)
| `0x0104` | `aaaaaapp` | [(p) extern volume morph control pedal](ns3-doc.md#ns3-extern-volume)
| `0x0105` | `pppppp--` |
| `0x0106` | `--------` |
| `0x0107` | `--------` |
| `0x0108` | `--------` |
| `0x0109` | `--------` |
| `0x010A` | `--------` |
| `0x010B` | `ossnrrtt` | [(o) rotary speaker on](ns3-doc.md#ns3-rotary-speaker-on), [(s) rotary speaker source](ns3-doc.md#ns3-rotary-speaker-source), [(n) effect 1 on](ns3-doc.md#ns3-effect-1-on), [(r) effect-1-source](ns3-doc.md#ns3-effect-1-source), [(t) effect 1 type](ns3-doc.md#ns3-effect-1-type)
| `0x010C` | `tcrrrrrr` | [(c) effect 1 master clock](ns3-doc.md#ns3-effect-1-master-clock), [(r) effect 1 rate](ns3-doc.md#ns3-effect-1-rate)
| `0x010D` | `rwwwwwww` | [(w) effect 1 rate morph wheel](ns3-doc.md#ns3-effect-1-rate)
| `0x010E` | `waaaaaaa` | [(a) effect 1 rate morph after touch](ns3-doc.md#ns3-effect-1-rate)
| `0x010F` | `appppppp` | [(p) effect 1 rate morph control pedal](ns3-doc.md#ns3-effect-1-rate)
| `0x0110` | `paaaaaaa` | [(a) effect 1 amount](ns3-doc.md#ns3-effect-1-amount)
| `0x0111` | `wwwwwwww` | [(w) effect 1 amount morph wheel](ns3-doc.md#ns3-effect-1-amount)
| `0x0112` | `aaaaaaaa` | [(a) effect 1 amount morph after touch](ns3-doc.md#ns3-effect-1-amount)
| `0x0113` | `pppppppp` | [(p) effect 1 amount morph control pedal](ns3-doc.md#ns3-effect-1-amount)
| `0x0114` | `osstttrr` | [(o) effect 2 on](ns3-doc.md#ns3-effect-2-on), [(s) effect 2 source](ns3-doc.md#ns3-effect-2-source), [(t) effect 2 type](ns3-doc.md#ns3-effect-2-type), [(r) effect 2 rate](ns3-doc.md#ns3-effect-2-rate)
| `0x0115` | `rrrrraaa` | [(a) effect 2 amount](ns3-doc.md#ns3-effect-2-amount)
| `0x0116` | `aaaawwww` | [(w) effect 2 amount morph wheel](ns3-doc.md#ns3-effect-2-amount)
| `0x0117` | `wwwwaaaa` | [(a) effect 2 amount morph after touch](ns3-doc.md#ns3-effect-2-amount)
| `0x0118` | `aaaapppp` | [(p) effect 2 amount morph control pedal](ns3-doc.md#ns3-effect-2-amount)
| `0x0119` | `ppppossm` | [(o) delay on](ns3-doc.md#ns3-delay-on), [(s) delay source](ns3-doc.md#ns3-delay-source), [(m) delay master clock](ns3-doc.md#ns3-delay-master-clock)
| `0x011A` | `tttttttx` | [(t) delay tempo](ns3-doc.md#ns3-delay-tempo), [(x) delay tempo lsw](ns3-doc.md#ns3-delay-tempo)
| `0x011B` | `xxxxxxww` | [(w) delay tempo morph wheel](ns3-doc.md#ns3-delay-tempo)
| `0x011C` | `wwwwwwxx` | [(x) delay tempo morph wheel lsw](ns3-doc.md#ns3-delay-tempo)
| `0x011D` | `xxxxxaaa` | [(a) delay tempo morph after touch](ns3-doc.md#ns3-delay-tempo)
| `0x011E` | `aaaaaxxx` | [(x) delay tempo morph after touch lsw](ns3-doc.md#ns3-delay-tempo)
| `0x011F` | `xxxxcccc` | [(c) delay tempo morph control pedal](ns3-doc.md#ns3-delay-tempo)
| `0x0120` | `ccccxxxx` | [(x) delay tempo morph control pedal lsw](ns3-doc.md#ns3-delay-tempo)
| `0x0121` | `xxxmmmmm` | [(m) delay mix](ns3-doc.md#ns3-delay-mix)
| `0x0122` | `mmwwwwww` | [(w) delay mix morph wheel](ns3-doc.md#ns3-delay-mix)
| `0x0123` | `wwaaaaaa` | [(a) delay mix morph after touch](ns3-doc.md#ns3-delay-mix)
| `0x0124` | `aapppppp` | [(p) delay mix morph control pedal](ns3-doc.md#ns3-delay-mix)
| `0x0125` | `ppoffbbb` | [(o) delay ping pong](ns3-doc.md#ns3-delay-ping-pong), [(f) delay filter](ns3-doc.md#ns3-delay-filter), [(b) delay feedback](ns3-doc.md#ns3-delay-feedback)
| `0x0126` | `bbbbwwww` | [(w) delay feedback morph wheel](ns3-doc.md#ns3-delay-feedback)
| `0x0127` | `wwwwaaaa` | [(a) delay feedback morph after touch](ns3-doc.md#ns3-delay-feedback)
| `0x0128` | `aaaapppp` | [(p) delay feedback morph control pedal](ns3-doc.md#ns3-delay-feedback)
| `0x0129` | `ppppaoss` | [(a) delay analog mode](ns3-doc.md#ns3-delay-analog-mode), [(o) amp sim eq on](ns3-doc.md#ns3-amp-sim-eq-on), [(s) amp sim eq source](ns3-doc.md#ns3-amp-sim-eq-source)
| `0x012A` | `aaattttt` | [(a) amp sim eq amp type](ns3-doc.md#ns3-amp-sim-eq-amp-type), [(a) amp sim eq treble](ns3-doc.md#ns3-amp-sim-eq-treble)
| `0x012B` | `ttmmmmmm` | [(m) amp sim eq mid res](ns3-doc.md#ns3-amp-sim-eq-mid-res)
| `0x012C` | `mbbbbbbb` | [(m) amp sim eq bass dry wet](ns3-doc.md#ns3-amp-sim-eq-bass-dry-wet)
| `0x012D` | `fffffffw` | [(f) amp sim eq mid flt freq](ns3-doc.md#ns3-amp-sim-eq-mid-flt-freq)
| `0x012E` | `wwwwwwwa` | [(f) amp sim eq mid flt freq morph wheel](ns3-doc.md#ns3-amp-sim-eq-mid-flt-freq)
| `0x012F` | `aaaaaaap` | [(f) amp sim eq mid flt freq morph after touch](ns3-doc.md#ns3-amp-sim-eq-mid-flt-freq)
| `0x0130` | `pppppppd` | [(f) amp sim eq mid flt freq morph control pedal](ns3-doc.md#ns3-amp-sim-eq-mid-flt-freq), [(d) amp sim eq drive](ns3-doc.md#ns3-amp-sim-eq-drive)
| `0x0131` | `ddddddww` | [(w) amp sim eq drive morph wheel](ns3-doc.md#ns3-amp-sim-eq-drive)
| `0x0132` | `wwwwwwaa` | [(a) amp sim eq drive morph after touch](ns3-doc.md#ns3-amp-sim-eq-drive)
| `0x0133` | `aaaaaapp` | [(p) amp sim eq drive morph control pedal](ns3-doc.md#ns3-amp-sim-eq-drive)
| `0x0134` | `ppppppot` | [(o) reverb on](ns3-doc.md#ns3-reverb-on), [(t) reverb type](ns3-doc.md#ns3-reverb-type)
| `0x0135` | `ttbrrrrr` | [(o) reverb bright](ns3-doc.md#ns3-reverb-bright), [(r) reverb amount](ns3-doc.md#ns3-reverb-amount)
| `0x0136` | `rrwwwwww` | [(w) reverb amount morph wheel](ns3-doc.md#ns3-reverb-amount)
| `0x0137` | `wwaaaaaa` | [(a) reverb amount morph after touch](ns3-doc.md#ns3-reverb-amount)
| `0x0138` | `aapppppp` | [(p) reverb amount morph control pedal](ns3-doc.md#ns3-reverb-amount)
| `0x0139` | `ppoccccc` | [(o) compressor on](ns3-doc.md#ns3-compressor-on), [(c) compressor amount](ns3-doc.md#ns3-compressor-amount)
| `0x013A` | `ccf-----` | [(f) compressor fast](ns3-doc.md#ns3-compressor-fast)
| `0x013B` | `--------` |
| `0x013C` | `--------` |
| `0x013C` | `--------` |
| `0x013E` | `--------` |
| `0x013F` | `--------` |
| `0x0140` | `--------` |
| `0x0141` | `--------` |
| `0x0142` | `--------` |
| `0x0143` | `--------` |
| `0x0144` | `--------` |
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

