### Nord Stage 3 Song file mapping


The mapping corresponds to the Nord Stage 3 song file (ns3s)

Current supported version is only 3.0  (0x012C)

|  offset  |    bits    | description                                     |
|:--------:|:----------:|:------------------------------------------------|
| `0x0000` | `cccccccc` | ascii 'C' 0x43, 4-byte Clavia ID                |
| `0x0001` | `cccccccc` | ascii 'B' 0x42                                  |
| `0x0002` | `cccccccc` | ascii 'I' 0x49                                  |
| `0x0003` | `cccccccc` | ascii 'N' 0x4E                                  |
| `0x0004` | `ffffffff` | (f) file format 1 latest one, 0 (20 bytes less) |
| `0x0005` | `--------` | 0                                               |
| `0x0006` | `--------` | 0                                               |
| `0x0007` | `--------` | 0                                               |
| `0x0008` | `cccccccc` | ascii 'ns3s' 4-byte NS3 Song file ID            |
| `0x0009` | `cccccccc` |                                                 |
| `0x000A` | `cccccccc` |                                                 |
| `0x000B` | `cccccccc` |                                                 |
| `0x000C` | `bbbbbbbb` | (b) bank lsb (0 = Bank 1, 1 = Bank 2...)        |
| `0x000D` | `--------` | 0                                               |
| `0x000E` | `llllllll` | (l) location lsb (0 = Loc1, 1 = Loc2...)        |
| `0x000F` | `--------` | 0                                               |
| `0x0010` | `--------` | 0                                               |
| `0x0011` | `--------` | 0                                               |
| `0x0012` | `--------` | 0                                               |
| `0x0013` | `--------` | 0                                               |
| `0x0014` | `iiiiiiii` | file version LSB (0x2C)                         |
| `0x0015` | `iiiiiiii` | file version MSB (0x01)                         |
| `0x0016` | `--------` | 0                                               |
| `0x0017` | `--------` | 0                                               |
| `0x0018` | `cccccccc` | CRC1 (32-bit)                                   |
| `0x0019` | `cccccccc` |                                                 |
| `0x001A` | `cccccccc` |                                                 |
| `0x001B` | `cccccccc` |                                                 |
| `0x001C` | `--------` | 0                                               |
| `0x001D` | `--------` |                                                 |
| `0x001E` | `--------` |                                                 |
| `0x001F` | `--------` |                                                 |
| `0x0020` | `--------` |                                                 |
| `0x0021` | `--------` |                                                 |
| `0x0022` | `--------` |                                                 |
| `0x0023` | `--------` |                                                 |
| `0x0024` | `--------` |                                                 |
| `0x0025` | `--------` |                                                 |
| `0x0026` | `--------` |                                                 |
| `0x0027` | `--------` |                                                 |
| `0x0028` | `--------` |                                                 |
| `0x0029` | `--------` |                                                 |
| `0x002A` | `--------` |                                                 |
| `0x002B` | `--------` |                                                 |
| `0x002C` | `--------` |                                                 |
| `0x002D` | `--------` |                                                 |
| `0x002E` | `vvvvvvvv` | file version MSB (0x01)                         |
| `0x002F` | `vvvvvvvv` | file version LSB (0x2C)                         |
| `0x0030` | `--------` | (5) maybe be number of programs                 |
| `0x0031` | `--------` | 80 ?                                            |
| `0x0032` | `--------` | 0                                               |
| `0x0033` | `--------` | 0                                               |
| `0x0034` | `--------` | 0                                               |
| `0x0035` | `--------` | 0                                               |
| `0x0036` | `--------` | (6) most of the time, block size in byte?       |
| `0x0037` | `--------` | 0, sometimes AA?                                |
| `0x0038` | `-iiiiiii` | program ID #1                                   |
| `0x0039` | `iiiiiiii` |                                                 |
| `0x003A` | `iiiiiiii` |                                                 |
| `0x003B` | `iiiiiiii` |                                                 |
| `0x003C` | `i-------` |                                                 |
| `0x003D` | `--------` | (6)                                             |
| `0x003E` | `--------` |                                                 |
| `0x003F` | `-iiiiiii` | program ID #2                                   |
| `0x0040` | `iiiiiiii` |                                                 |
| `0x0041` | `iiiiiiii` |                                                 |
| `0x0042` | `iiiiiiii` |                                                 |
| `0x0043` | `i-------` |                                                 |
| `0x0044` | `--------` | (6)                                             |
| `0x0045` | `--------` |                                                 |
| `0x0046` | `-iiiiiii` | program ID #3                                   |
| `0x0047` | `iiiiiiii` |                                                 |
| `0x0048` | `iiiiiiii` |                                                 |
| `0x0049` | `iiiiiiii` |                                                 |
| `0x004A` | `i-------` |                                                 |
| `0x004B` | `--------` | (6)                                             |
| `0x004C` | `--------` |                                                 |
| `0x004D` | `-iiiiiii` | program ID #4                                   |
| `0x004E` | `iiiiiiii` |                                                 |
| `0x004F` | `iiiiiiii` |                                                 |
| `0x0050` | `iiiiiiii` |                                                 |
| `0x0051` | `i-------` |                                                 |
| `0x0052` | `--------` | (6)                                             |
| `0x0053` | `--------` |                                                 |
| `0x0054` | `-iiiiiii` | program ID #5                                   |
| `0x0055` | `iiiiiiii` |                                                 |
| `0x0056` | `iiiiiiii` |                                                 |
| `0x0057` | `iiiiiiii` |                                                 |
| `0x0058` | `i-------` |                                                 |

. . .
