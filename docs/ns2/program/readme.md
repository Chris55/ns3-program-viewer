\newpage
## Nord Stage 2 File Structure

| offset   | bits       | description
| :---:    |   :----:   | :-------------------------------------------------
| `0x0000` | `cccccccc` | ascii C - 0x43, 4-byte Clavia ID
| `0x0001` | `cccccccc` | ascii B - 0x42
| `0x0002` | `cccccccc` | ascii I - 0x49
| `0x0003` | `cccccccc` | ascii N - 0x4E
| `0x0004` | `ffffffff` | [(f) file format](ns2-doc.md#ns2-file-format)
| `0x0005` | `--------` | 0
| `0x0006` | `--------` | 0
| `0x0007` | `--------` | 0
| `0x0008` | `cccccccc` | ascii n - 0x6E, 4-byte NS2 Program file ID
| `0x0009` | `cccccccc` | ascii s - 0x73,
| `0x000A` | `cccccccc` | ascii 2 - 0x32,
| `0x000B` | `cccccccc` | ascii p - 0x70,
| `0x000C` | `bbbbbbbb` | (b) bank lsb (0 = A, 1 = B . . . )
| `0x000D` | `--------` | 0
| `0x000E` | `llllllll` | (l) location lsb (0 = 11, 1 = 12 . . .)
| `0x000F` | `--------` | 0
| `0x0010` | `cccccccc` | [(c) program category](ns2-doc.md#ns2-program-category)
| `0x0011` | `--------` |
| `0x0012` | `--------` |
| `0x0013` | `--------` |
| `0x0014` | `iiiiiiii` | [(i) file version](ns2-doc.md#ns2-file-version) (16-bit)
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
| `0x002E` | `--------` |
| `0x002F` | `--------` |
| `0x0030` | `-p------` | [(p) organ pitch stick](ns2-doc.md#ns2-organ-pitch-stick)
| `0x0031` | `--------` |
| `0x0032` | `--------` |
| `0x0033` | `--------` |
| `0x0034` | `mm------` | [(m) organ model](ns2-doc.md#ns2-organ-model)
| `0x0035` | `vvvhds--` | [(v) organ b3 vibrato mode](ns2-doc.md#ns2-organ-b3-vibrato-mode), [(h) organ b3 harmonic third](ns2-doc.md#ns2-organ-b3-harmonic-third), [(d) organ b3 decay fast](ns2-doc.md#ns2-organ-b3-decay-fast), [(s) organ b3 volume soft](ns2-doc.md#ns2-organ-b3-volume-soft)
| `0x0036` | `--------` |
| `0x0037` | `-vvo----` | [(v) organ vox vibrato mode](ns2-doc.md#ns2-organ-vox-vibrato-mode), [(o) organ vox vibrato on](ns2-doc.md#ns2-organ-vox-vibrato-on)
| `0x0038` | `--------` |
| `0x0039` | `-vvo----` | [(v) organ farfisa vibrato mode](ns2-doc.md#ns2-organ-farfisa-vibrato-mode), [(o) organ farfisa vibrato on](ns2-doc.md#ns2-organ-farfisa-vibrato-on)
| `0x003A` | `--------` |
| `0x003B` | `ddd-----` | [(o) piano slot detune](ns2-doc.md#ns2-piano-slot-detune)
| `0x003C` | `--------` |
| `0x003D` | `--------` |
| `0x003E` | `--------` |
| `0x003F` | `--------` |
| `0x0040` | `--------` |
| `0x0041` | `--------` |
| `0x0042` | `--------` |
| `0x0043` | `owwwwwww` | [(o) organ on](ns2-doc.md#ns2-organ-on), [(w) organ volume morph wheel](ns2-doc.md#ns2-organ-volume)
| `0x0044` | `waaaaaaa` | [(a) organ volume morph after touch](ns2-doc.md#ns2-organ-volume)
| `0x0045` | `accccccc` | [(c) organ volume morph control pedal](ns2-doc.md#ns2-organ-volume)
| `0x0046` | `cvvvvvvv` | [(v) organ volume](ns2-doc.md#ns2-organ-volume)
| `0x0047` | `zzzoooos` | [(z) organ split zones](ns2-doc.md#ns2-organ-split-zones), [(o) organ octave shift](ns2-doc.md#ns2-organ-octave-shift), [(s) organ sustain](ns2-doc.md#ns2-organ-sustain)
| `0x0048` | `owwwwwww` | [(o) piano on](ns2-doc.md#ns2-piano-on), [(w) piano volume morph wheel](ns2-doc.md#ns2-piano-volume)
| `0x0049` | `waaaaaaa` | [(a) piano volume morph after touch](ns2-doc.md#ns2-piano-volume)
| `0x004A` | `accccccc` | [(c) piano volume morph control pedal](ns2-doc.md#ns2-piano-volume)
| `0x004B` | `cvvvvvvv` | [(v) piano volume](ns2-doc.md#ns2-piano-volume)
| `0x004C` | `zzzoooop` | [(z) piano split zones](ns2-doc.md#ns2-piano-split-zones), [(o) piano octave shift](ns2-doc.md#ns2-piano-octave-shift), [(p) piano pitch stick](ns2-doc.md#ns2-piano-pitch-stick)
| `0x004D` | `s-------` | [(s) piano sustain](ns2-doc.md#ns2-piano-sustain)
| `0x004E` | `--------` |
| `0x004F` | `--------` |
| `0x0050` | `--------` |
| `0x0051` | `--------` |
| `0x0052` | `--------` |
| `0x0053` | `--------` |
| `0x0054` | `--------` |
| `0x0055` | `--------` |
| `0x0056` | `--------` |
| `0x0057` | `--------` |
| `0x0058` | `--------` |
| `0x0059` | `------lg` | [(l) organ latch pedal](ns2-doc.md#ns2-organ-latch-pedal), [(g) organ kb gate](ns2-doc.md#ns2-organ-kb-gate)
| `0x005A` | `lg------` | [(l) piano latch pedal](ns2-doc.md#ns2-piano-latch-pedal), [(g) piano kb gate](ns2-doc.md#ns2-piano-kb-gate)
| `0x005B` | `--------` |
| `0x005C` | `b-------` | [(b) organ b3 preset II](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x005D` | `b-------` | [(b) organ vox vox II](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x005E` | `b-------` | [(b) organ farfisa preset II](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x005F` | `wwwwwaaa` | [(w) organ b3 preset I drawbar 1 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I), [(a) organ b3 preset I drawbar 1 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0060` | `aappppp1` | [(p) organ b3 preset I drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I), [(1) organ b3 preset I drawbar 1](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0061` | `111wwwww` | [(w) organ b3 preset I drawbar 2 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0062` | `aaaaappp` | [(a) organ b3 preset I drawbar 2 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I), [(p) organ b3 preset I drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0063` | `pp2222ww` | [(2) organ b3 preset I drawbar 2](ns2-doc.md#ns2-organ-b3-preset-I), [(w) organ b3 preset I drawbar 3 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0064` | `wwwaaaaa` | [(a) organ b3 preset I drawbar 3 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0065` | `ppppp333` | [(p) organ b3 preset I drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I), [(3) organ b3 preset I drawbar 3](ns2-doc.md#ns2-organ-b3-preset-I),
| `0x0066` | `3wwwwwaa` | [(w) organ b3 preset I drawbar 4 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I), [(a) organ b3 preset I drawbar 4 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0067` | `aaappppp` | [(p) organ b3 preset I drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0068` | `4444wwww` | [(4) organ b3 preset I drawbar 4](ns2-doc.md#ns2-organ-b3-preset-I), [(w) organ b3 preset I drawbar 5 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0069` | `waaaaapp` | [(a) organ b3 preset I drawbar 5 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I), [(p) organ b3 preset I drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x006A` | `ppp5555w` | [(5) organ b3 preset I drawbar 5](ns2-doc.md#ns2-organ-b3-preset-I), [(w) organ b3 preset I drawbar 6 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x006B` | `wwwwaaaa` | [(a) organ b3 preset I drawbar 6 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x006C` | `appppp66` | [(p) organ b3 preset I drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I), [(6) organ b3 preset I drawbar 6](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x006D` | `66wwwwwa` | [(w) organ b3 preset I drawbar 7 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I), [(a) organ b3 preset I drawbar 7 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x006E` | `aaaapppp` | [(p) organ b3 preset I drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x006F` | `p7777www` | [(7) organ b3 preset I drawbar 7](ns2-doc.md#ns2-organ-b3-preset-I), [(w) organ b3 preset I drawbar 8 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0070` | `wwaaaaap` | [(a) organ b3 preset I drawbar 8 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I), [(p) organ b3 preset I drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0071` | `pppp8888` | [(8) organ b3 preset I drawbar 8](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0072` | `wwwwwaaa` | [(w) organ b3 preset I drawbar 9 morph wheel](ns2-doc.md#ns2-organ-b3-preset-I), [(a) organ b3 preset I drawbar 9 morph after touch](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0073` | `aappppp9` | [(p) organ b3 preset I drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-I), [(9) organ b3 preset I drawbar 9](ns2-doc.md#ns2-organ-b3-preset-I)
| `0x0074` | `999vp---` | [(v) organ b3 preset I vibrato chorus](ns2-doc.md#ns2-organ-b3-preset-I-vibrato-chorus), [(p) organ b3 preset I percussion](ns2-doc.md#ns2-organ-b3-preset-I-percussion)
| `0x0075` | `--------` |
| `0x0076` | `wwwwwaaa` | [(w) organ vox preset I drawbar 1 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I), [(a) organ vox preset I drawbar 1 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0077` | `aappppp1` | [(p) organ vox preset I drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I), [(1) organ vox preset I drawbar 1](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0078` | `111wwwww` | [(w) organ vox preset I drawbar 2 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0079` | `aaaaappp` | [(a) organ vox preset I drawbar 2 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I), [(p) organ vox preset I drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x007A` | `pp2222ww` | [(2) organ vox preset I drawbar 2](ns2-doc.md#ns2-organ-vox-preset-I), [(w) organ vox preset I drawbar 3 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x007B` | `wwwaaaaa` | [(a) organ vox preset I drawbar 3 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x007C` | `ppppp333` | [(p) organ vox preset I drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I), [(3) organ vox preset I drawbar 3](ns2-doc.md#ns2-organ-vox-preset-I),
| `0x007D` | `3wwwwwaa` | [(w) organ vox preset I drawbar 4 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I), [(a) organ vox preset I drawbar 4 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x007E` | `aaappppp` | [(p) organ vox preset I drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x007F` | `4444wwww` | [(4) organ vox preset I drawbar 4](ns2-doc.md#ns2-organ-vox-preset-I), [(w) organ vox preset I drawbar 5 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0080` | `waaaaapp` | [(a) organ vox preset I drawbar 5 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I), [(p) organ vox preset I drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0081` | `ppp5555w` | [(5) organ vox preset I drawbar 5](ns2-doc.md#ns2-organ-vox-preset-I), [(w) organ vox preset I drawbar 6 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0082` | `wwwwaaaa` | [(a) organ vox preset I drawbar 6 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0083` | `appppp66` | [(p) organ vox preset I drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I), [(6) organ vox preset I drawbar 6](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0084` | `66wwwwwa` | [(w) organ vox preset I drawbar 7 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I), [(a) organ vox preset I drawbar 7 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0085` | `aaaapppp` | [(p) organ vox preset I drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0086` | `p7777www` | [(7) organ vox preset I drawbar 7](ns2-doc.md#ns2-organ-vox-preset-I), [(w) organ vox preset I drawbar 8 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0087` | `wwaaaaap` | [(a) organ vox preset I drawbar 8 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I), [(p) organ vox preset I drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0088` | `pppp8888` | [(8) organ vox preset I drawbar 8](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x0089` | `wwwwwaaa` | [(w) organ vox preset I drawbar 9 morph wheel](ns2-doc.md#ns2-organ-vox-preset-I), [(a) organ vox preset I drawbar 9 morph after touch](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x008A` | `aappppp9` | [(p) organ vox preset I drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-I), [(9) organ vox preset I drawbar 9](ns2-doc.md#ns2-organ-vox-preset-I)
| `0x008B` | `999-----` | [(v) organ vox preset I vibrato chorus](ns2-doc.md#ns2-organ-vox-preset-I-vibrato-chorus), [(p) organ vox preset I percussion](ns2-doc.md#ns2-organ-vox-preset-I-percussion)
| `0x008C` | `--------` |
| `0x008D` | `wwaapp1h` | [(w,a,p,1) organ farfisa preset I drawbar 1](ns2-doc.md#ns2-organ-farfisa-preset-I), [(h,a,p,2) organ farfisa preset I drawbar 2](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x008E` | `haapp2ww` | [(w,a,p,3) organ farfisa preset I drawbar 3](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x008F` | `aapp3wwa` | [(w,a,p,4) organ farfisa preset I drawbar 4](ns2-doc.md#ns2-organ-farfisa-preset-I), [(w,a,p,3) organ farfisa preset I drawbar 4](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x0090` | `app4wwaa` | [(w,a,p,5) organ farfisa preset I drawbar 5](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x0091` | `pp5wwaad` | [(w,a,d,6) organ farfisa preset I drawbar 6](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x0092` | `d6wwaapp` | [(w,a,p,7) organ farfisa preset I drawbar 7](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x0093` | `7wwaapp8` | [(w,a,p,8) organ farfisa preset I drawbar 8](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x0094` | `wwaapp9-` | [(w,a,p,9) organ farfisa preset I drawbar 9](ns2-doc.md#ns2-organ-farfisa-preset-I)
| `0x0095` | `--------` |
| `0x0096` | `wwwwwaaa` | [(w) organ b3 preset II drawbar 1 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II), [(a) organ b3 preset II drawbar 1 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x0097` | `aappppp1` | [(p) organ b3 preset II drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II), [(1) organ b3 preset II drawbar 1](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x0098` | `111wwwww` | [(w) organ b3 preset II drawbar 2 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x0099` | `aaaaappp` | [(a) organ b3 preset II drawbar 2 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II), [(p) organ b3 preset II drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x009A` | `pp2222ww` | [(2) organ b3 preset II drawbar 2](ns2-doc.md#ns2-organ-b3-preset-II), [(w) organ b3 preset II drawbar 3 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x009B` | `wwwaaaaa` | [(a) organ b3 preset II drawbar 3 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x009C` | `ppppp333` | [(p) organ b3 preset II drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II), [(3) organ b3 preset II drawbar 3](ns2-doc.md#ns2-organ-b3-preset-II),
| `0x009D` | `3wwwwwaa` | [(w) organ b3 preset II drawbar 4 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II), [(a) organ b3 preset II drawbar 4 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x009E` | `aaappppp` | [(p) organ b3 preset II drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x009F` | `4444wwww` | [(4) organ b3 preset II drawbar 4](ns2-doc.md#ns2-organ-b3-preset-II), [(w) organ b3 preset II drawbar 5 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A0` | `waaaaapp` | [(a) organ b3 preset II drawbar 5 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II), [(p) organ b3 preset II drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A1` | `ppp5555w` | [(5) organ b3 preset II drawbar 5](ns2-doc.md#ns2-organ-b3-preset-II), [(w) organ b3 preset II drawbar 6 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A2` | `wwwwaaaa` | [(a) organ b3 preset II drawbar 6 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A3` | `appppp66` | [(p) organ b3 preset II drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II), [(6) organ b3 preset II drawbar 6](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A4` | `66wwwwwa` | [(w) organ b3 preset II drawbar 7 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II), [(a) organ b3 preset II drawbar 7 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A5` | `aaaapppp` | [(p) organ b3 preset II drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A6` | `p7777www` | [(7) organ b3 preset II drawbar 7](ns2-doc.md#ns2-organ-b3-preset-II), [(w) organ b3 preset II drawbar 8 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A7` | `wwaaaaap` | [(a) organ b3 preset II drawbar 8 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II), [(p) organ b3 preset II drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A8` | `pppp8888` | [(8) organ b3 preset II drawbar 8](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00A9` | `wwwwwaaa` | [(w) organ b3 preset II drawbar 9 morph wheel](ns2-doc.md#ns2-organ-b3-preset-II), [(a) organ b3 preset II drawbar 9 morph after touch](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00AA` | `aappppp9` | [(p) organ b3 preset II drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-b3-preset-II), [(9) organ b3 preset II drawbar 9](ns2-doc.md#ns2-organ-b3-preset-II)
| `0x00AB` | `999vp---` | [(v) organ b3 preset II vibrato chorus](ns2-doc.md#ns2-organ-b3-preset-II-vibrato-chorus), [(p) organ b3 preset II percussion](ns2-doc.md#ns2-organ-b3-preset-II-percussion)
| `0x00AC` | `--------` |
| `0x00AD` | `wwwwwaaa` | [(w) organ vox preset II drawbar 1 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II), [(a) organ vox preset II drawbar 1 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00AE` | `aappppp1` | [(p) organ vox preset II drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II), [(1) organ vox preset II drawbar 1](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00AF` | `111wwwww` | [(w) organ vox preset II drawbar 2 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B0` | `aaaaappp` | [(a) organ vox preset II drawbar 2 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II), [(p) organ vox preset II drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B1` | `pp2222ww` | [(2) organ vox preset II drawbar 2](ns2-doc.md#ns2-organ-vox-preset-II), [(w) organ vox preset II drawbar 3 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B2` | `wwwaaaaa` | [(a) organ vox preset II drawbar 3 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B3` | `ppppp333` | [(p) organ vox preset II drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II), [(3) organ vox preset II drawbar 3](ns2-doc.md#ns2-organ-vox-preset-II),
| `0x00B4` | `3wwwwwaa` | [(w) organ vox preset II drawbar 4 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II), [(a) organ vox preset II drawbar 4 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B5` | `aaappppp` | [(p) organ vox preset II drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B6` | `4444wwww` | [(4) organ vox preset II drawbar 4](ns2-doc.md#ns2-organ-vox-preset-II), [(w) organ vox preset II drawbar 5 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B7` | `waaaaapp` | [(a) organ vox preset II drawbar 5 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II), [(p) organ vox preset II drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B8` | `ppp5555w` | [(5) organ vox preset II drawbar 5](ns2-doc.md#ns2-organ-vox-preset-II), [(w) organ vox preset II drawbar 6 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00B9` | `wwwwaaaa` | [(a) organ vox preset II drawbar 6 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00BA` | `appppp66` | [(p) organ vox preset II drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II), [(6) organ vox preset II drawbar 6](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00BB` | `66wwwwwa` | [(w) organ vox preset II drawbar 7 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II), [(a) organ vox preset II drawbar 7 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00BC` | `aaaapppp` | [(p) organ vox preset II drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00BD` | `p7777www` | [(7) organ vox preset II drawbar 7](ns2-doc.md#ns2-organ-vox-preset-II), [(w) organ vox preset II drawbar 8 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00BE` | `wwaaaaap` | [(a) organ vox preset II drawbar 8 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II), [(p) organ vox preset II drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00BF` | `pppp8888` | [(8) organ vox preset II drawbar 8](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00C0` | `wwwwwaaa` | [(w) organ vox preset II drawbar 9 morph wheel](ns2-doc.md#ns2-organ-vox-preset-II), [(a) organ vox preset II drawbar 9 morph after touch](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00C1` | `aappppp9` | [(p) organ vox preset II drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-vox-preset-II), [(9) organ vox preset II drawbar 9](ns2-doc.md#ns2-organ-vox-preset-II)
| `0x00C2` | `999-----` | [(v) organ vox preset II vibrato chorus](ns2-doc.md#ns2-organ-vox-preset-II-vibrato-chorus), [(p) organ vox preset II percussion](ns2-doc.md#ns2-organ-vox-preset-II-percussion)
| `0x00C3` | `--------` |
| `0x00C4` | `wwaapp1h` | [(w,a,p,1) organ farfisa preset II drawbar 1](ns2-doc.md#ns2-organ-farfisa-preset-II), [(h,a,p,2) organ farfisa preset II drawbar 2](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00C5` | `haapp2ww` | [(w,a,p,3) organ farfisa preset II drawbar 3](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00C6` | `aapp3wwa` | [(w,a,p,4) organ farfisa preset II drawbar 4](ns2-doc.md#ns2-organ-farfisa-preset-II), [(w,a,p,3) organ farfisa preset II drawbar 4](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00C7` | `app4wwaa` | [(w,a,p,5) organ farfisa preset II drawbar 5](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00C8` | `pp5wwaad` | [(w,a,d,6) organ farfisa preset II drawbar 6](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00C9` | `d6wwaapp` | [(w,a,p,7) organ farfisa preset II drawbar 7](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00CA` | `7wwaapp8` | [(w,a,p,8) organ farfisa preset II drawbar 8](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00CB` | `wwaapp9-` | [(w,a,p,9) organ farfisa preset II drawbar 9](ns2-doc.md#ns2-organ-farfisa-preset-II)
| `0x00CC` | `--------` |
| `0x00CD` | `ttt-----` | [(t) piano type](ns2-doc.md#ns2-piano-type)
| `0x00CE` | `-------c` | [(c) piano clavinet model](ns2-doc.md#ns2-piano-clavinet-model)
| `0x00CF` | `clsnddhh` | [(l) piano long release](ns2-doc.md#ns2-piano-long-release), [(s) piano string resonance](ns2-doc.md#ns2-piano-string-resonance), [(n) piano pedal noise](ns2-doc.md#ns2-piano-pedal-noise), [(d) piano dynamics](ns2-doc.md#ns2-piano-dynamics), [(h) piano clav eq hi](ns2-doc.md#ns2-piano-clav-eq-hi)
| `0x00D0` | `eeiiiiii` | [(e) piano clav eq](ns2-doc.md#ns2-piano-clav-eq), [(s) piano sample id](ns2-doc.md#ns2-piano-sample-id)
| `0x00D1` | `iiiiiiii` |
| `0x00D2` | `iiiiiiii` |
| `0x00D3` | `iiiiiiii` |
| `0x00D4` | `ii------` |
| `0x00D5` | `--------` |
| `0x00D6` | `--------` |
| `0x00D7` | `--------` |
| `0x00D8` | `--------` |
| `0x00D9` | `--------` |
| `0x00DA` | `--------` |
| `0x00DB` | `--------` |
| `0x00DC` | `--------` |
| `0x00DD` | `--------` |
| `0x00DE` | `--------` |
| `0x00DF` | `--------` |
| `0x00E0` | `--------` |
| `0x00E1` | `--------` |
| `0x00E2` | `--------` |
| `0x00E3` | `--------` |
| `0x00E4` | `--------` |
| `0x00E5` | `--------` |
| `0x00E6` | `--------` |
| `0x00E7` | `--------` |
| `0x00E8` | `--------` |
| `0x00E9` | `--------` |
| `0x00EA` | `--------` |
| `0x00EB` | `--------` |
| `0x00EC` | `--------` |
| `0x00ED` | `--------` |
| `0x00EE` | `--------` |
| `0x00EF` | `--------` |
| `0x00F0` | `--------` |
| `0x00F1` | `--------` |
| `0x00F2` | `--------` |
| `0x00F3` | `--------` |
| `0x00F4` | `--------` |
| `0x00F5` | `--------` |
| `0x00F6` | `--------` |
| `0x00F7` | `--------` |
| `0x00F8` | `--------` |
| `0x00F9` | `--------` |
| `0x00FA` | `--------` |
| `0x00FB` | `--------` |
| `0x00FC` | `--------` |
| `0x00FD` | `--------` |
| `0x00FE` | `--------` |
| `0x00FF` | `--------` |
| `0x0100` | `--------` |
| `0x0101` | `--------` |
| `0x0102` | `--------` |
| `0x0103` | `--------` |
| `0x0104` | `--------` |
| `0x0105` | `--------` |
| `0x0106` | `--------` |
| `0x0107` | `--------` |
| `0x0108` | `--------` |
| `0x0109` | `--------` |
| `0x010A` | `--------` |
| `0x010B` | `--------` |
| `0x010C` | `--------` |
| `0x010D` | `--------` |
| `0x010E` | `--------` |
| `0x010F` | `--------` |
| `0x0110` | `--------` |
| `0x0111` | `--------` |
| `0x0112` | `--------` |
| `0x0113` | `--------` |
| `0x0114` | `--------` |
| `0x0115` | `--------` |
| `0x0116` | `--------` |
| `0x0117` | `--------` |
| `0x0118` | `--------` |
| `0x0119` | `--------` |
| `0x011A` | `--------` |
| `0x011B` | `--------` |
| `0x011C` | `--------` |
| `0x011D` | `--------` |
| `0x011E` | `--------` |
| `0x011F` | `--------` |
| `0x0120` | `--------` |
| `0x0121` | `--------` |
| `0x0122` | `--------` |
| `0x0123` | `--------` |
| `0x0124` | `--------` |
| `0x0125` | `--------` |
| `0x0126` | `--------` |
| `0x0127` | `--------` |
| `0x0128` | `--------` |
| `0x0129` | `--------` |
| `0x012A` | `--------` |
| `0x012B` | `--------` |
| `0x012C` | `--------` |
| `0x012D` | `--------` |
| `0x012E` | `--------` |
| `0x012F` | `--------` |
| `0x0130` | `--------` |
| `0x0131` | `--------` |
| `0x0132` | `--------` |
| `0x0133` | `--------` |
| `0x0134` | `--------` |
| `0x0135` | `--------` |
| `0x0136` | `--------` |
| `0x0137` | `--------` |
| `0x0138` | `--------` |
| `0x0139` | `--------` |
| `0x013A` | `--------` |
| `0x013B` | `--------` |
| `0x013C` | `--------` |
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
