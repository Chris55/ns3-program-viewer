\newpage
## Nord Stage 2 File Structure

This mapping corresponds to the Nord Stage 2 program file (file extension ns2p).

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
| `0x000C` | `------bb` | (b) bank (0 = A, 1 = B . . . )
| `0x000D` | `--------` | 0
| `0x000E` | `--llllll` | (l) location lsb (0 = 01:1, 1 = 01:2 . . .)
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
| `0x002E` | `ssk-llll` | [(p) slot selection](ns2-doc.md#ns2-slot-enabled-and-selection), [(k) dual keyboard](ns2-doc.md#ns2-dual-keyboard), [(k) split point low](ns2-doc.md#ns2-split),
| `0x002F` | `hhhhtw--` | [(h) split point high](ns2-doc.md#ns2-split), [(t) three split zones](ns2-doc.md#ns2-split), [(w) two split zones](ns2-doc.md#ns2-split)
| `0x0030` | `-pttttt-` | [(p) organ pitch stick](ns2-doc.md#ns2-organ-pitch-stick), [(t) transpose](ns2-doc.md#ns2-transpose)
| `0x0031` | `---mmmmm` | [(m) master clock rate](ns2-doc.md#ns2-master-clock-rate)
| `0x0032` | `mmm-----` |
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
| `0x003D` | `otttrrrr` | [(o) reverb on](ns2-doc.md#ns2-reverb-on), [(t) reverb type](ns2-doc.md#ns2-reverb-type), [(r) reverb amount](ns2-doc.md#ns2-reverb-amount)
| `0x003E` | `rrrocccc` | [(o) compressor on](ns2-doc.md#ns2-compressor-on), [(c) compressor amount](ns2-doc.md#ns2-compressor-amount)
| `0x003F` | `cccossdd` | [(o) rotary speaker on](ns2-doc.md#ns2-rotary-speaker-on), [(s) rotary speaker source](ns2-doc.md#ns2-rotary-speaker-source), [(d) rotary speaker drive](ns2-doc.md#ns2-rotary-speaker-drive)
| `0x0040` | `dddddmrw` | [(m) rotary speaker stop mode](ns2-doc.md#ns2-rotary-speaker-stop-mode), [(r) rotary speaker speed](ns2-doc.md#ns2-rotary-speaker-speed), [(w) rotary speaker speed morph wheel](ns2-doc.md#ns2-rotary-speaker-speed)
| `0x0041` | `ac------` | [(a) rotary speaker speed morph after touch](ns2-doc.md#ns2-rotary-speaker-speed), [(c) rotary speaker speed morph control pedal](ns2-doc.md#ns2-rotary-speaker-speed)
| `0x0042` | `--------` |
| `0x0043` | `owwwwwww` | [(o) organ on](ns2-doc.md#ns2-organ-on), [(w) organ volume morph wheel](ns2-doc.md#ns2-organ-volume)
| `0x0044` | `waaaaaaa` | [(a) organ volume morph after touch](ns2-doc.md#ns2-organ-volume)
| `0x0045` | `accccccc` | [(c) organ volume morph control pedal](ns2-doc.md#ns2-organ-volume)
| `0x0046` | `cvvvvvvv` | [(v) organ volume](ns2-doc.md#ns2-organ-volume)
| `0x0047` | `zzzoooos` | [(z) organ kb zone](ns2-doc.md#ns2-organ-kb-zone), [(o) organ octave shift](ns2-doc.md#ns2-organ-octave-shift), [(s) organ sustain pedal](ns2-doc.md#ns2-organ-sustain-pedal)
| `0x0048` | `owwwwwww` | [(o) piano on](ns2-doc.md#ns2-piano-on), [(w) piano volume morph wheel](ns2-doc.md#ns2-piano-volume)
| `0x0049` | `waaaaaaa` | [(a) piano volume morph after touch](ns2-doc.md#ns2-piano-volume)
| `0x004A` | `accccccc` | [(c) piano volume morph control pedal](ns2-doc.md#ns2-piano-volume)
| `0x004B` | `cvvvvvvv` | [(v) piano volume](ns2-doc.md#ns2-piano-volume)
| `0x004C` | `zzzoooop` | [(z) piano split zones](ns2-doc.md#ns2-piano-kb-zone), [(o) piano octave shift](ns2-doc.md#ns2-piano-octave-shift), [(p) piano pitch stick](ns2-doc.md#ns2-piano-pitch-stick)
| `0x004D` | `sowwwwww` | [(s) piano sustain pedal](ns2-doc.md#ns2-piano-sustain-pedal), [(o) synth on](ns2-doc.md#ns2-synth-on), [(w) synth volume morph wheel](ns2-doc.md#ns2-synth-volume)
| `0x004E` | `wwaaaaaa` | [(a) synth volume morph after touch](ns2-doc.md#ns2-synth-volume)
| `0x004F` | `aacccccc` | [(c) synth volume morph control pedal](ns2-doc.md#ns2-synth-volume)
| `0x0050` | `ccvvvvvv` | [(v) synth volume](ns2-doc.md#ns2-synth-volume)
| `0x0051` | `vzzzoooo` | [(z) synth kb zone](ns2-doc.md#ns2-synth-kb-zone), [(o) synth octave shift](ns2-doc.md#ns2-synth-octave-shift)
| `0x0052` | `pso-----` | [(p) synth pitch stick](ns2-doc.md#ns2-synth-pitch-stick), [(s) synth sustain pedal](ns2-doc.md#ns2-synth-sustain-pedal), [(o) extern on](ns2-doc.md#ns2-extern-on)
| `0x0053` | `--------` |
| `0x0054` | `--------` |
| `0x0055` | `--------` |
| `0x0056` | `--zzzooo` | [(z) extern kb zone](ns2-doc.md#ns2-extern-kb-zone), [(o) extern octave shift](ns2-doc.md#ns2-extern-octave-shift)
| `0x0057` | `ops-----` | [(p) extern pitch stick](ns2-doc.md#ns2-extern-pitch-stick), [(s) extern sustain pedal](ns2-doc.md#ns2-extern-sustain-pedal)
| `0x0058` | `------pp` | [(p) piano program output](ns2-doc.md#ns2-piano-program-output)
| `0x0059` | `-ss-oolg` | [(s) synth program output](ns2-doc.md#ns2-synth-program-output), [(o) organ program output](ns2-doc.md#ns2-organ-program-output), [(l) organ latch pedal](ns2-doc.md#ns2-organ-latch-pedal), [(g) organ kb gate](ns2-doc.md#ns2-organ-kb-gate)
| `0x005A` | `lgtk----` | [(l) piano latch pedal](ns2-doc.md#ns2-piano-latch-pedal), [(g) piano kb gate](ns2-doc.md#ns2-piano-kb-gate), [(t) synth latch pedal](ns2-doc.md#ns2-synth-latch-pedal), [(k) synth kb gate](ns2-doc.md#ns2-synth-kb-gate)
| `0x005B` | `--------` |
| `0x005C` | `b-------` | [(b) organ b3 preset II](ns2-doc.md#ns2-organ-b3-preset-2)
| `0x005D` | `b-------` | [(b) organ vox vox II](ns2-doc.md#ns2-organ-vox-preset-2)
| `0x005E` | `b-------` | [(b) organ farfisa preset II](ns2-doc.md#ns2-organ-farfisa-preset-2)
| `0x005F` | `wwwwwaaa` | [(w) organ b3 preset I drawbar 1 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 1 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0060` | `aappppp1` | [(p) organ b3 preset I drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(1) organ b3 preset I drawbar 1](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0061` | `111wwwww` | [(w) organ b3 preset I drawbar 2 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0062` | `aaaaappp` | [(a) organ b3 preset I drawbar 2 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1), [(p) organ b3 preset I drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0063` | `pp2222ww` | [(2) organ b3 preset I drawbar 2](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 3 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0064` | `wwwaaaaa` | [(a) organ b3 preset I drawbar 3 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0065` | `ppppp333` | [(p) organ b3 preset I drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(3) organ b3 preset I drawbar 3](ns2-doc.md#ns2-organ-drawbars-preset-1),
| `0x0066` | `3wwwwwaa` | [(w) organ b3 preset I drawbar 4 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 4 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0067` | `aaappppp` | [(p) organ b3 preset I drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0068` | `4444wwww` | [(4) organ b3 preset I drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 5 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0069` | `waaaaapp` | [(a) organ b3 preset I drawbar 5 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1), [(p) organ b3 preset I drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x006A` | `ppp5555w` | [(5) organ b3 preset I drawbar 5](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 6 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x006B` | `wwwwaaaa` | [(a) organ b3 preset I drawbar 6 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x006C` | `appppp66` | [(p) organ b3 preset I drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(6) organ b3 preset I drawbar 6](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x006D` | `66wwwwwa` | [(w) organ b3 preset I drawbar 7 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 7 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x006E` | `aaaapppp` | [(p) organ b3 preset I drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x006F` | `p7777www` | [(7) organ b3 preset I drawbar 7](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ b3 preset I drawbar 8 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0070` | `wwaaaaap` | [(a) organ b3 preset I drawbar 8 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1), [(p) organ b3 preset I drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0071` | `pppp8888` | [(8) organ b3 preset I drawbar 8](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0072` | `wwwwwaaa` | [(w) organ b3 preset I drawbar 9 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ b3 preset I drawbar 9 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0073` | `aappppp9` | [(p) organ b3 preset I drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(9) organ b3 preset I drawbar 9](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0074` | `999vp---` | [(v) organ b3 preset I vibrato chorus](ns2-doc.md#ns2-organ-b3-preset-1-vibrato-chorus), [(p) organ b3 preset I percussion](ns2-doc.md#ns2-organ-b3-preset-1-percussion)
| `0x0075` | `--------` |
| `0x0076` | `wwwwwaaa` | [(w) organ vox preset I drawbar 1 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 1 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0077` | `aappppp1` | [(p) organ vox preset I drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(1) organ vox preset I drawbar 1](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0078` | `111wwwww` | [(w) organ vox preset I drawbar 2 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0079` | `aaaaappp` | [(a) organ vox preset I drawbar 2 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1), [(p) organ vox preset I drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x007A` | `pp2222ww` | [(2) organ vox preset I drawbar 2](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 3 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x007B` | `wwwaaaaa` | [(a) organ vox preset I drawbar 3 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x007C` | `ppppp333` | [(p) organ vox preset I drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(3) organ vox preset I drawbar 3](ns2-doc.md#ns2-organ-drawbars-preset-1),
| `0x007D` | `3wwwwwaa` | [(w) organ vox preset I drawbar 4 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 4 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x007E` | `aaappppp` | [(p) organ vox preset I drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x007F` | `4444wwww` | [(4) organ vox preset I drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 5 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0080` | `waaaaapp` | [(a) organ vox preset I drawbar 5 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1), [(p) organ vox preset I drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0081` | `ppp5555w` | [(5) organ vox preset I drawbar 5](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 6 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0082` | `wwwwaaaa` | [(a) organ vox preset I drawbar 6 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0083` | `appppp66` | [(p) organ vox preset I drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(6) organ vox preset I drawbar 6](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0084` | `66wwwwwa` | [(w) organ vox preset I drawbar 7 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 7 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0085` | `aaaapppp` | [(p) organ vox preset I drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0086` | `p7777www` | [(7) organ vox preset I drawbar 7](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w) organ vox preset I drawbar 8 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0087` | `wwaaaaap` | [(a) organ vox preset I drawbar 8 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1), [(p) organ vox preset I drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0088` | `pppp8888` | [(8) organ vox preset I drawbar 8](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0089` | `wwwwwaaa` | [(w) organ vox preset I drawbar 9 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-1), [(a) organ vox preset I drawbar 9 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x008A` | `aappppp9` | [(p) organ vox preset I drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-1), [(9) organ vox preset I drawbar 9](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x008B` | `999-----` |
| `0x008C` | `--------` |
| `0x008D` | `wwaapp1h` | [(w,a,p,1) organ farfisa preset I drawbar 1](ns2-doc.md#ns2-organ-drawbars-preset-1), [(h,a,p,2) organ farfisa preset I drawbar 2](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x008E` | `haapp2ww` | [(w,a,p,3) organ farfisa preset I drawbar 3](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x008F` | `aapp3wwa` | [(w,a,p,4) organ farfisa preset I drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-1), [(w,a,p,3) organ farfisa preset I drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0090` | `app4wwaa` | [(w,a,p,5) organ farfisa preset I drawbar 5](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0091` | `pp5wwaad` | [(w,a,d,6) organ farfisa preset I drawbar 6](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0092` | `d6wwaapp` | [(w,a,p,7) organ farfisa preset I drawbar 7](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0093` | `7wwaapp8` | [(w,a,p,8) organ farfisa preset I drawbar 8](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0094` | `wwaapp9-` | [(w,a,p,9) organ farfisa preset I drawbar 9](ns2-doc.md#ns2-organ-drawbars-preset-1)
| `0x0095` | `--------` |
| `0x0096` | `wwwwwaaa` | [(w) organ b3 preset II drawbar 1 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 1 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x0097` | `aappppp1` | [(p) organ b3 preset II drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(1) organ b3 preset II drawbar 1](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x0098` | `111wwwww` | [(w) organ b3 preset II drawbar 2 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x0099` | `aaaaappp` | [(a) organ b3 preset II drawbar 2 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2), [(p) organ b3 preset II drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x009A` | `pp2222ww` | [(2) organ b3 preset II drawbar 2](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 3 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x009B` | `wwwaaaaa` | [(a) organ b3 preset II drawbar 3 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x009C` | `ppppp333` | [(p) organ b3 preset II drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(3) organ b3 preset II drawbar 3](ns2-doc.md#ns2-organ-drawbars-preset-2),
| `0x009D` | `3wwwwwaa` | [(w) organ b3 preset II drawbar 4 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 4 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x009E` | `aaappppp` | [(p) organ b3 preset II drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x009F` | `4444wwww` | [(4) organ b3 preset II drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 5 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A0` | `waaaaapp` | [(a) organ b3 preset II drawbar 5 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2), [(p) organ b3 preset II drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A1` | `ppp5555w` | [(5) organ b3 preset II drawbar 5](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 6 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A2` | `wwwwaaaa` | [(a) organ b3 preset II drawbar 6 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A3` | `appppp66` | [(p) organ b3 preset II drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(6) organ b3 preset II drawbar 6](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A4` | `66wwwwwa` | [(w) organ b3 preset II drawbar 7 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 7 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A5` | `aaaapppp` | [(p) organ b3 preset II drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A6` | `p7777www` | [(7) organ b3 preset II drawbar 7](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ b3 preset II drawbar 8 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A7` | `wwaaaaap` | [(a) organ b3 preset II drawbar 8 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2), [(p) organ b3 preset II drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A8` | `pppp8888` | [(8) organ b3 preset II drawbar 8](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00A9` | `wwwwwaaa` | [(w) organ b3 preset II drawbar 9 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ b3 preset II drawbar 9 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00AA` | `aappppp9` | [(p) organ b3 preset II drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(9) organ b3 preset II drawbar 9](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00AB` | `999vp---` | [(v) organ b3 preset II vibrato chorus](ns2-doc.md#ns2-organ-b3-preset-2-vibrato-chorus), [(p) organ b3 preset II percussion](ns2-doc.md#ns2-organ-b3-preset-2-percussion)
| `0x00AC` | `--------` |
| `0x00AD` | `wwwwwaaa` | [(w) organ vox preset II drawbar 1 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 1 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00AE` | `aappppp1` | [(p) organ vox preset II drawbar 1 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(1) organ vox preset II drawbar 1](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00AF` | `111wwwww` | [(w) organ vox preset II drawbar 2 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B0` | `aaaaappp` | [(a) organ vox preset II drawbar 2 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2), [(p) organ vox preset II drawbar 2 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B1` | `pp2222ww` | [(2) organ vox preset II drawbar 2](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 3 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B2` | `wwwaaaaa` | [(a) organ vox preset II drawbar 3 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B3` | `ppppp333` | [(p) organ vox preset II drawbar 3 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(3) organ vox preset II drawbar 3](ns2-doc.md#ns2-organ-drawbars-preset-2),
| `0x00B4` | `3wwwwwaa` | [(w) organ vox preset II drawbar 4 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 4 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B5` | `aaappppp` | [(p) organ vox preset II drawbar 4 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B6` | `4444wwww` | [(4) organ vox preset II drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 5 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B7` | `waaaaapp` | [(a) organ vox preset II drawbar 5 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2), [(p) organ vox preset II drawbar 5 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B8` | `ppp5555w` | [(5) organ vox preset II drawbar 5](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 6 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00B9` | `wwwwaaaa` | [(a) organ vox preset II drawbar 6 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00BA` | `appppp66` | [(p) organ vox preset II drawbar 6 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(6) organ vox preset II drawbar 6](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00BB` | `66wwwwwa` | [(w) organ vox preset II drawbar 7 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 7 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00BC` | `aaaapppp` | [(p) organ vox preset II drawbar 7 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00BD` | `p7777www` | [(7) organ vox preset II drawbar 7](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w) organ vox preset II drawbar 8 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00BE` | `wwaaaaap` | [(a) organ vox preset II drawbar 8 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2), [(p) organ vox preset II drawbar 8 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00BF` | `pppp8888` | [(8) organ vox preset II drawbar 8](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C0` | `wwwwwaaa` | [(w) organ vox preset II drawbar 9 morph wheel](ns2-doc.md#ns2-organ-drawbars-preset-2), [(a) organ vox preset II drawbar 9 morph after touch](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C1` | `aappppp9` | [(p) organ vox preset II drawbar 9 morph control pedal](ns2-doc.md#ns2-organ-drawbars-preset-2), [(9) organ vox preset II drawbar 9](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C2` | `999-----` |
| `0x00C3` | `--------` |
| `0x00C4` | `wwaapp1h` | [(w,a,p,1) organ farfisa preset II drawbar 1](ns2-doc.md#ns2-organ-drawbars-preset-2), [(h,a,p,2) organ farfisa preset II drawbar 2](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C5` | `haapp2ww` | [(w,a,p,3) organ farfisa preset II drawbar 3](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C6` | `aapp3wwa` | [(w,a,p,4) organ farfisa preset II drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-2), [(w,a,p,3) organ farfisa preset II drawbar 4](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C7` | `app4wwaa` | [(w,a,p,5) organ farfisa preset II drawbar 5](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C8` | `pp5wwaad` | [(w,a,d,6) organ farfisa preset II drawbar 6](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00C9` | `d6wwaapp` | [(w,a,p,7) organ farfisa preset II drawbar 7](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00CA` | `7wwaapp8` | [(w,a,p,8) organ farfisa preset II drawbar 8](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00CB` | `wwaapp9-` | [(w,a,p,9) organ farfisa preset II drawbar 9](ns2-doc.md#ns2-organ-drawbars-preset-2)
| `0x00CC` | `--------` |
| `0x00CD` | `ttt-----` | [(t) piano type](ns2-doc.md#ns2-piano-type)
| `0x00CE` | `-------c` | [(c) piano clavinet model](ns2-doc.md#ns2-piano-clavinet-model)
| `0x00CF` | `clsnddhh` | [(l) piano long release](ns2-doc.md#ns2-piano-long-release), [(s) piano string resonance](ns2-doc.md#ns2-piano-string-resonance), [(n) piano pedal noise](ns2-doc.md#ns2-piano-pedal-noise), [(d) piano dynamics](ns2-doc.md#ns2-piano-dynamics), [(h) piano clav eq hi](ns2-doc.md#ns2-piano-clavinet-eq-hi)
| `0x00D0` | `eeiiiiii` | [(e) piano clav eq](ns2-doc.md#ns2-piano-clavinet-eq), [(s) piano sample id](ns2-doc.md#ns2-piano-sample-id)
| `0x00D1` | `iiiiiiii` |
| `0x00D2` | `iiiiiiii` |
| `0x00D3` | `iiiiiiii` |
| `0x00D4` | `ii------` |
| `0x00D5` | `--------` |
| `0x00D6` | `--------` |
| `0x00D7` | `--------` |
| `0x00D8` | `--------` |
| `0x00D9` | `-------o` | [(o) synth arp on](ns2-doc.md#ns2-synth-arp-on)
| `0x00DA` | `mdddd-rr` | [(m) synth arp master clock](ns2-doc.md#ns2-synth-arp-master-clock), [(d) synth arp master clock divisor](ns2-doc.md#ns2-synth-arp-rate), [(r) synth arp rate](ns2-doc.md#ns2-synth-arp-rate)
| `0x00DB` | `rrrrrppn` | [(p) synth arp pattern](ns2-doc.md#ns2-synth-arp-pattern), [(n) synth arp master range](ns2-doc.md#ns2-synth-arp-range)
| `0x00DC` | `nvrrrrh-` | [(v) synth lfo master clock](ns2-doc.md#ns2-synth-lfo-master-clock), [(r) synth lfo rate clock divisor](ns2-doc.md#ns2-synth-lfo-rate), [(h) synth kb-hold](ns2-doc.md#ns2-synth-kb-hold)
| `0x00DD` | `--------` |
| `0x00DE` | `--------` |
| `0x00DF` | `aaaaaaad` | [(a) synth mod env attack](ns2-doc.md#ns2-synth-mod-env-attack), [(d) synth mod env decay](ns2-doc.md#ns2-synth-mod-env-decay)
| `0x00E0` | `ddddddrr` | [(r) synth mod env release](ns2-doc.md#ns2-synth-mod-env-release)
| `0x00E1` | `rrrrrvmm` | [(v) synth mod env velocity](ns2-doc.md#ns2-synth-mod-env-velocity), [(m) synth osc mode](ns2-doc.md#ns2-synth-osc-mode)
| `0x00E2` | `mfffffff` | [(f) synth osc waveform](ns2-doc.md#ns2-synth-osc-waveform)
| `0x00E3` | `fffwwwww` | [(w) synth shape morph wheel](ns2-doc.md#ns2-synth-shape)
| `0x00E4` | `wwwaaaaa` | [(a) synth shape morph after touch](ns2-doc.md#ns2-synth-shape)
| `0x00E5` | `aaaccccc` | [(c) synth shape morph control pedal](ns2-doc.md#ns2-synth-shape)
| `0x00E6` | `cccsssss` | [(s) synth shape](ns2-doc.md#ns2-synth-shape)
| `0x00E7` | `ssmmmmmm` | [(m) synth shape mod](ns2-doc.md#ns2-synth-shape-mod)
| `0x00E8` | `m-------` |
| `0x00E9` | `--------` |
| `0x00EA` | `--------` |
| `0x00EB` | `--------` |
| `0x00EC` | `------sw` | [(s) synth skip sample attack](ns2-doc.md#ns2-synth-skip-sample-attack), [(w) synth filter freq morph wheel](ns2-doc.md#ns2-synth-filter-freq)
| `0x00ED` | `wwwwwwwa` | [(a) synth filter freq morph after touch](ns2-doc.md#ns2-synth-filter-freq)
| `0x00EE` | `aaaaaaac` | [(c) synth filter freq morph control pedal](ns2-doc.md#ns2-synth-filter-freq)
| `0x00EF` | `cccccccf` | [(f) synth filter freq](ns2-doc.md#ns2-synth-filter-freq)
| `0x00F0` | `ffffffrr` | [(r) synth filter resonance](ns2-doc.md#ns2-synth-filter-res)
| `0x00F1` | `rrrrr222` | [(m) synth filter mod 2](ns2-doc.md#ns2-synth-filter-mod-2)
| `0x00F2` | `22221111` | [(l) synth filter mod 1](ns2-doc.md#ns2-synth-filter-mod-1)
| `0x00F3` | `111kttta` | [(t) synth filter kb track](ns2-doc.md#ns2-synth-filter-kb-track), [(t) synth filter type](ns2-doc.md#ns2-synth-filter-type), [(a) synth amp env attack](ns2-doc.md#ns2-synth-amp-env-attack)
| `0x00F4` | `aaaaaadd` | [(d) synth amp env decay](ns2-doc.md#ns2-synth-amp-env-decay)
| `0x00F5` | `dddddrrr` | [(r) synth amp env release](ns2-doc.md#ns2-synth-amp-env-release)
| `0x00F6` | `rrrrvttt` | [(v) synth amp env velocity](ns2-doc.md#ns2-synth-amp-env-velocity), [(t) synth lfo rate](ns2-doc.md#ns2-synth-lfo-rate)
| `0x00F7` | `ttttwwii` | [(w) synth lfo waveform](ns2-doc.md#ns2-synth-lfo-wave), [(i) synth sample id](ns2-doc.md#ns2-synth-sample-id)
| `0x00F8` | `iiiiiiii` |
| `0x00F9` | `iiiiiiii` |
| `0x00FA` | `iiiiiiii` |
| `0x00FB` | `iiiiiirr` | [(r) synth glide rate](ns2-doc.md#ns2-synth-glide)
| `0x00FC` | `rrrrrmmu` | [(m) synth glide-voice-mode](ns2-doc.md#ns2-synth-voice), [(u) synth unison](ns2-doc.md#ns2-synth-unison)
| `0x00FD` | `uuvvv---` | [(v) synth vibrato](ns2-doc.md#ns2-synth-vibrato)
| `0x00FE` | `--------` |
| `0x00FF` | `mmcccccc` | [(m) extern midi control](ns2-doc.md#ns2-extern-midi-control), [(c) extern midi cc number](ns2-doc.md#ns2-extern-midi-cc-number)
| `0x0100` | `cwwwwwww` | [(w) extern midi cc morph wheel](ns2-doc.md#ns2-extern-midi-cc)
| `0x0101` | `waaaaaaa` | [(a) extern midi cc morph after touch](ns2-doc.md#ns2-extern-midi-cc)
| `0x0102` | `appppppp` | [(p) extern midi cc morph control pedal](ns2-doc.md#ns2-extern-midi-cc)
| `0x0103` | `pccccccc` | [(c) extern midi cc](ns2-doc.md#ns2-extern-midi-cc)
| `0x0104` | `obbbbbbb` | [(o) extern midi cc on](ns2-doc.md#ns2-extern-midi-cc-on), [(b) extern midi bank select CC32](ns2-doc.md#ns2-extern-midi-bank-select-cc32)
| `0x0105` | `obbbbbbb` | [(o) extern midi bank select CC32 enabled](ns2-doc.md#ns2-extern-midi-bank-select-cc32-enabled), [(b) extern midi bank select CC00](ns2-doc.md#ns2-extern-midi-bank-select-cc00)
| `0x0106` | `ovvvvvvv` | [(o) extern midi bank select CC00 enabled](ns2-doc.md#ns2-extern-midi-bank-select-cc00-enabled), [(v) extern midi program](ns2-doc.md#ns2-extern-midi-program)
| `0x0107` | `occcc-tw` | [(o) extern midi program on](ns2-doc.md#ns2-extern-midi-program-on), [(c) extern midi channel](ns2-doc.md#ns2-extern-midi-channel), [(t) extern midi channel type](ns2-doc.md#ns2-extern-midi-channel-type), [(w) extern volume morph wheel](ns2-doc.md#ns2-extern-volume)
| `0x0108` | `wwwwwwwa` | [(a) extern volume morph after touch](ns2-doc.md#ns2-extern-volume)
| `0x0109` | `aaaaaaap` | [(p) extern volume morph control pedal](ns2-doc.md#ns2-extern-volume)
| `0x010A` | `pppppppv` | [(v) extern volume](ns2-doc.md#ns2-extern-volume)
| `0x010B` | `vvvvvvow` | [(o) extern midi volume on](ns2-doc.md#ns2-extern-midi-volume-on), [(w) extern midi send wheel](ns2-doc.md#ns2-extern-midi-send-wheel)
| `0x010C` | `ap-vvs--` | [(a) extern midi send aftertouch](ns2-doc.md#ns2-extern-midi-send-aftertouch), [(p) extern midi send control-pedal](ns2-doc.md#ns2-extern-midi-send-control-pedal), [(v) extern midi velocity curve](ns2-doc.md#ns2-extern-midi-velocity-curve), [(s) extern midi send swell](ns2-doc.md#ns2-extern-midi-send-swell)
| `0x010D` | `--------` |
| `0x010E` | `--------` |
| `0x010F` | `ffossttt` | [(f) effect focus](ns2-doc.md#ns2-effect-focus), [(o) effect 1 on](ns2-doc.md#ns2-effect-1-on), [(s) effect-1-source](ns2-doc.md#ns2-effect-1-source), [(t) effect 1 type](ns2-doc.md#ns2-effect-1-type)
| `0x0110` | `cwwwwwaa` | [(c) effect 1 master clock](ns2-doc.md#ns2-effect-1-master-clock), [(w) effect 1 rate mst clock divisor morph wheel](ns2-doc.md#ns2-effect-1-rate-master-clock), [(w) effect 1 rate mst clock divisor morph after touch](ns2-doc.md#ns2-effect-1-rate-master-clock)
| `0x0111` | `aaappppp` | [(p) effect 1 rate mst clock divisor morph control pedal](ns2-doc.md#ns2-effect-1-rate-master-clock)
| `0x0112` | `rrrrwwww` | [(r) effect 1 rate mst clock divisor](ns2-doc.md#ns2-effect-1-rate-master-clock), [(w) effect 1 rate morph wheel](ns2-doc.md#ns2-effect-1-rate)
| `0x0113` | `wwwwaaaa` | [(a) effect 1 rate morph after touch](ns2-doc.md#ns2-effect-1-rate)
| `0x0114` | `aaaapppp` | [(p) effect 1 rate morph control pedal](ns2-doc.md#ns2-effect-1-rate)
| `0x0115` | `pppprrrr` | [(r) effect 1 rate](ns2-doc.md#ns2-effect-1-rate)
| `0x0116` | `rrrwwwww` | [(w) effect 1 amount morph wheel](ns2-doc.md#ns2-effect-1-amount)
| `0x0117` | `wwwaaaaa` | [(a) effect 1 amount after touch](ns2-doc.md#ns2-effect-1-amount)
| `0x0118` | `aaappppp` | [(p) effect 1 amount control pedal](ns2-doc.md#ns2-effect-1-amount)
| `0x0119` | `pppaaaaa` | [(a) effect 1 amount](ns2-doc.md#ns2-effect-1-amount)
| `0x011A` | `aaossttt` | [(o) effect 2 on](ns2-doc.md#ns2-effect-2-on), [(s) effect-2-source](ns2-doc.md#ns2-effect-2-source), [(t) effect 2 type](ns2-doc.md#ns2-effect-2-type)
| `0x011B` | `cwwwwwaa` | [(c) effect 2 master clock](ns2-doc.md#ns2-effect-2-master-clock), [(w) effect 2 rate mst clock divisor morph wheel](ns2-doc.md#ns2-effect-2-rate-master-clock), [(w) effect 2 rate mst clock divisor morph after touch](ns2-doc.md#ns2-effect-2-rate-master-clock)
| `0x011C` | `aaappppp` | [(p) effect 2 rate mst clock divisor morph control pedal](ns2-doc.md#ns2-effect-2-rate-master-clock)
| `0x011D` | `rrrrwwww` | [(r) effect 2 rate mst clock divisor](ns2-doc.md#ns2-effect-2-rate-master-clock), [(w) effect 2 rate morph wheel](ns2-doc.md#ns2-effect-2-rate)
| `0x011E` | `wwwwaaaa` | [(a) effect 2 rate morph after touch](ns2-doc.md#ns2-effect-2-rate)
| `0x011F` | `aaaapppp` | [(p) effect 2 rate morph control pedal](ns2-doc.md#ns2-effect-2-rate)
| `0x0120` | `pppprrrr` | [(r) effect 2 rate](ns2-doc.md#ns2-effect-2-rate)
| `0x0121` | `rrrwwwww` | [(w) effect 2 amount morph wheel](ns2-doc.md#ns2-effect-2-amount)
| `0x0122` | `wwwaaaaa` | [(a) effect 2 amount after touch](ns2-doc.md#ns2-effect-2-amount)
| `0x0123` | `aaappppp` | [(p) effect 2 amount control pedal](ns2-doc.md#ns2-effect-2-amount)
| `0x0124` | `pppaaaaa` | [(a) effect 2 amount](ns2-doc.md#ns2-effect-2-amount)
| `0x0125` | `aaosspmw` | [(o) delay on](ns2-doc.md#ns2-delay-on), [(s) delay source](ns2-doc.md#ns2-delay-source), [(p) delay ping pong](ns2-doc.md#ns2-delay-ping-pong), [(m) delay master clock](ns2-doc.md#ns2-delay-master-clock), [(w) delay tempo master clock divisor morph wheel](ns2-doc.md#ns2-delay-tempo-master-clock-divisor)                                                                                                                                                                                                                                                                                     [(o) delay on](ns2-doc.md#ns2-delay-on), [(s) delay source](ns2-doc.md#ns2-delay-source), [(p) delay ping pong](ns2-doc.md#ns2-delay-ping-pong), [(m) delay master clock](ns2-doc.md#ns2-delay-master-clock), [(w) delay tempo master clock divisor morph wheel](ns2-doc.md#ns2-delay-tempo-master-clock-divisor)
| `0x0126` | `wwwwaaaa` | [(a) delay tempo master clock divisor morph after touch](ns2-doc.md#ns2-delay-tempo-master-clock-divisor)
| `0x0127` | `apppppdd` | [(p) delay tempo master clock divisor morph control pedal](ns2-doc.md#ns2-delay-tempo-master-clock-divisor), [(d) delay tempo master clock divisor](ns2-doc.md#ns2-delay-tempo-master-clock-divisor)
| `0x0128` | `ddwwwwww` | [(w) delay tempo morph wheel](ns2-doc.md#ns2-delay-tempo)
| `0x0129` | `wwwwwwwa` | [(a) delay tempo morph after touch](ns2-doc.md#ns2-delay-tempo)
| `0x012A` | `aaaaaaaa` |
| `0x012B` | `aaaacccc` | [(c) delay tempo morph control pedal](ns2-doc.md#ns2-delay-tempo)
| `0x012C` | `cccccccc` |
| `0x012D` | `cttttttt` | [(t) delay tempo](ns2-doc.md#ns2-delay-tempo)
| `0x012E` | `tttttwww` | [(w) delay amount morph wheel](ns2-doc.md#ns2-delay-amount)
| `0x012F` | `wwwwwaaa` | [(a) delay amount morph after touch](ns2-doc.md#ns2-delay-amount)
| `0x0130` | `aaaaappp` | [(p) delay amount morph control pedal](ns2-doc.md#ns2-delay-amount)
| `0x0131` | `pppppaaa` | [(a) delay amount](ns2-doc.md#ns2-delay-amount)
| `0x0132` | `aaaaffff` | [(f) delay feedback](ns2-doc.md#ns2-delay-feedback)
| `0x0133` | `fffosstt` | [(o) amp sim eq on](ns2-doc.md#ns2-amp-sim-eq-on), [(s) amp sim eq source](ns2-doc.md#ns2-amp-sim-eq-source), [(t) amp type](ns2-doc.md#ns2-amp-type)
| `0x0134` | `dddddddt` | [(d) amp sim drive](ns2-doc.md#ns2-amp-sim-drive), [(t) eq treble](ns2-doc.md#ns2-eq-treble)
| `0x0135` | `ttttttmm` | [(m) eq mid](ns2-doc.md#ns2-eq-mid)
| `0x0136` | `mmmmmbbb` | [(b) eq bass](ns2-doc.md#ns2-eq-bass)
| `0x0137` | `bbbbffff` | [(f) eq mid flt freq](ns2-doc.md#ns2-eq-mid-flt-freq)
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
