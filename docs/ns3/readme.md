### Nord Stage 3 Program file mapping

ns3f file description:

| offset   | bits       | description
| :---:    |   :----:   | :---
| `0x0000` | `cccccccc` | ascii 'C' 0x43, 4-byte Clavia ID
| `0x0001` | `cccccccc` | ascii 'B' 0x42
| `0x0002` | `cccccccc` | ascii 'I' 0x49
| `0x0003` | `cccccccc` | ascii 'N' 0x4E
| `0x0004` | `--------` |
| `0x0005` | `--------` |
| `0x0006` | `--------` |
| `0x0007` | `--------` |
| `0x0008` | `cccccccc` | ascii 'n' 0x6E, 4-byte NS3 Program file ID
| `0x0009` | `cccccccc` | ascii 's' 0x73,
| `0x000A` | `cccccccc` | ascii '3' 0x33,
| `0x000B` | `cccccccc` | ascii 'f' 0x66,
| `0x000C` | `--------` |
| `0x000D` | `--------` |
| `0x000E` | `--------` |
| `0x000F` | `--------` |
| `0x0010` | `--------` |
| `0x0011` | `--------` |
| `0x0012` | `--------` |
| `0x0013` | `--------` |
| `0x0014` | `iiiiiiii` | [File Version](api.md#file-version) (16-bit)
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
| `0x0030` | `--------` |
| `0x0031` | `pppsssss` | [(p)anel](api.md#panel-enabled-and-selection), [(s)plit](api.md#split)
| `0x0032` | `ssssssss` |
| `0x0033` | `ssssssss` |
| `0x0034` | `sddpvvvr` | [piano layer (d)etune](api.md#piano-layer-detune), [organ (p)itch stick](api.md#organ-pitch-stick), [organ (v)ibrato mode](api.md#organ-vibrato-mode), [(r)otary speaker speed](api.md#rotary-speaker-speed)
| `0x0035` | `m-------` | [rotary speaker stop (m)ode](api.md#rotary-speaker-stop-mode)
| `0x0036` | `--------` |
| `0x0037` | `--------` |
| `0x0038` | `tttttccc` | [(t)ranspose](api.md#transpose), [master (c)lock rate](api.md#master-clock-rate)
| `0x0039` | `ccccc---` |
| `0x003A` | `--------` |
| `0x003B` | `--------` |
| `0x003C` | `--------` |
| `0x003D` | `--------` |
| `0x003E` | `--------` |
| `0x003F` | `--------` |
| `0x0040` | `--------` |
| `0x0041` | `--------` |
| `0x0042` | `--------` |
| `0x0043` | `--------` |
| `0x0044` | `--------` |
| `0x0045` | `--------` |
| `0x0046` | `--------` |
| `0x0047` | `--------` |
| `0x0048` | `--------` |
| `0x0049` | `--------` |
| `0x004A` | `--------` |
| `0x004B` | `--------` |
| `0x004C` | `--------` |
| `0x004D` | `--------` |
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
| `0x0059` | `--------` |
| `0x005A` | `--------` |
| `0x005B` | `--------` |
| `0x005C` | `--------` |
| `0x005D` | `--------` |
| `0x005E` | `--------` |
| `0x005F` | `--------` |
| `0x0060` | `--------` |
| `0x0061` | `--------` |
| `0x0062` | `--------` |
| `0x0063` | `--------` |
| `0x0064` | `--------` |
| `0x0065` | `--------` |
| `0x0066` | `--------` |
| `0x0067` | `--------` |
| `0x0068` | `--------` |
| `0x0069` | `--------` |
| `0x006A` | `--------` |
| `0x006B` | `--------` |
| `0x006C` | `--------` |
| `0x006D` | `--------` |
| `0x006E` | `--------` |
| `0x006F` | `--------` |
| `0x0070` | `--------` |
| `0x0071` | `--------` |
| `0x0072` | `--------` |
| `0x0073` | `--------` |
| `0x0074` | `--------` |
| `0x0075` | `--------` |
| `0x0076` | `--------` |
| `0x0077` | `--------` |
| `0x0078` | `--------` |
| `0x0079` | `--------` |
| `0x007A` | `--------` |
| `0x007B` | `--------` |
| `0x007C` | `--------` |
| `0x007D` | `--------` |
| `0x007E` | `--------` |
| `0x007F` | `--------` |
| `0x0080` | `--------` |
| `0x0081` | `--------` |
| `0x0082` | `--------` |
| `0x0083` | `--------` |
| `0x0084` | `--------` |
| `0x0085` | `--------` |
| `0x0086` | `--------` |
| `0x0087` | `--------` |
| `0x0088` | `--------` |
| `0x0089` | `--------` |
| `0x008A` | `--------` |
| `0x008B` | `--------` |
| `0x008C` | `--------` |
| `0x008D` | `--------` |
| `0x008E` | `--------` |
| `0x008F` | `--------` |
| `0x0090` | `--------` |
| `0x0091` | `--------` |
| `0x0092` | `--------` |
| `0x0093` | `--------` |
| `0x0094` | `--------` |
| `0x0095` | `--------` |
| `0x0096` | `--------` |
| `0x0097` | `--------` |
| `0x0098` | `--------` |
| `0x0099` | `--------` |
| `0x009A` | `--------` |
| `0x009B` | `--------` |
| `0x009C` | `--------` |
| `0x009D` | `--------` |
| `0x009E` | `--------` |
| `0x009F` | `--------` |
| `0x00A0` | `--------` |
| `0x00A1` | `--------` |
| `0x00A2` | `--------` |
| `0x00A3` | `--------` |
| `0x00A4` | `--------` |
| `0x00A5` | `--------` |
| `0x00A6` | `--------` |
| `0x00A7` | `--------` |
| `0x00A8` | `--------` |
| `0x00A9` | `--------` |
| `0x00AA` | `--------` |
| `0x00AB` | `--------` |
| `0x00AC` | `--------` |
| `0x00AD` | `--------` |
| `0x00AE` | `--------` |
| `0x00AF` | `--------` |
| `0x00B0` | `--------` |
| `0x00B1` | `--------` |
| `0x00B2` | `--------` |
| `0x00B3` | `--------` |
| `0x00B4` | `--------` |
| `0x00B5` | `--------` |
| `0x00B6` | `ozzzzvvv` | [organ (o)n](api.md#organ-on), [organ kb (z)one](api.md#organ-kb-zone), [organ (v)olume](api.md#organ-volume)
| `0x00B7` | `vvvvwwww` | [organ volume morph (w)heel](api.md#organ-volume)
| `0x00B8` | `wwwwaaaa` | [organ volume morph (a)fter touch](api.md#organ-volume)
| `0x00B9` | `aaaapppp` | [organ volume morph control (p)edal](api.md#organ-volume)
| `0x00BA` | `pppp-ooo` | [organ (o)ctave shift](api.md#organ-octave-shift)
| `0x00BB` | `stttl---` | [organ (s)ustain-pedal](api.md#organ-sustain-pedal),[organ (t)ype](api.md#organ-type),[organ (l)ive mode](api.md#organ-live-mode)
| `0x00BC` | `--------` |
| `0x00BD` | `--------` |
| `0x00BE` | `1111----` | [organ preset 1 drawbar (1)](api.md#organ-drawbars-preset-1),
| `0x00BF` | `--------` |
| `0x00C0` | `---2222-` | [organ preset 1 drawbar (2)](api.md#organ-drawbars-preset-1),
| `0x00C1` | `--------` |
| `0x00C2` | `------33` | [organ preset 1 drawbar (3)](api.md#organ-drawbars-preset-1),
| `0x00C3` | `33------` |
| `0x00C4` | `--------` |
| `0x00C5` | `-4444---` | [organ preset 1 drawbar (4)](api.md#organ-drawbars-preset-1),
| `0x00C6` | `--------` |
| `0x00C7` | `----5555` | [organ preset 1 drawbar (5)](api.md#organ-drawbars-preset-1),
| `0x00C8` | `--------` |
| `0x00C9` | `-------6` | [organ preset 1 drawbar (6)](api.md#organ-drawbars-preset-1),
| `0x00CA` | `666-----` |
| `0x00CB` | `--------` |
| `0x00CC` | `--7777--` | [organ preset 1 drawbar (7)](api.md#organ-drawbars-preset-1),
| `0x00CD` | `--------` |
| `0x00CE` | `-----888` | [organ preset 1 drawbar (8)](api.md#organ-drawbars-preset-1),
| `0x00CF` | `8-------` |
| `0x00D0` | `--------` |
| `0x00D1` | `9999----` | [organ preset 1 drawbar (9)](api.md#organ-drawbars-preset-1),
| `0x00D2` | `--------` |
| `0x00D3` | `---vphds` | [organ (v)ibrato on](api.md#organ-vibrato-on), [organ (p)ercussion on](api.md#organ-percussion-on), [organ percussion (h)armonic third](api.md#organ-percussion-harmonic-third), [organ percussion (d)ecay fast](api.md#organ-percussion-decay-fast), [organ percussion volume (s)oft](api.md#organ-percussion-volume-soft)
| `0x00D4` | `--------` |
| `0x00D5` | `--------` |
| `0x00D6` | `--------` |
| `0x00D7` | `--------` |
| `0x00D8` | `--------` |
| `0x00D9` | `1111----` | [organ preset 2 drawbar (1)](api.md#organ-drawbars-preset-2),
| `0x00DA` | `--------` |
| `0x00DB` | `---2222-` | [organ preset 2 drawbar (2)](api.md#organ-drawbars-preset-2),
| `0x00DC` | `--------` |
| `0x00DD` | `------33` | [organ preset 2 drawbar (3)](api.md#organ-drawbars-preset-2),
| `0x00DE` | `33------` |
| `0x00DF` | `--------` |
| `0x00E0` | `-4444---` | [organ preset 2 drawbar (4)](api.md#organ-drawbars-preset-2),
| `0x00E1` | `--------` |
| `0x00E2` | `----5555` | [organ preset 2 drawbar (5)](api.md#organ-drawbars-preset-2),
| `0x00E3` | `--------` |
| `0x00E4` | `-------6` | [organ preset 2 drawbar (6)](api.md#organ-drawbars-preset-2),
| `0x00E5` | `666-----` |
| `0x00E6` | `--------` |
| `0x00E7` | `--7777--` | [organ preset 2 drawbar (7)](api.md#organ-drawbars-preset-2),
| `0x00E8` | `--------` |
| `0x00E9` | `-----888` | [organ preset 2 drawbar (8)](api.md#organ-drawbars-preset-2),
| `0x00EA` | `8-------` |
| `0x00EB` | `--------` |
| `0x00EC` | `9999----` | [organ preset 2 drawbar (9)](api.md#organ-drawbars-preset-2),
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
```
