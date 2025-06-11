## Modules

<dl>
<dt><a href="#module_NLA1 Reverb On">NLA1 Reverb On</a></dt>
<dd><p>Offset in file: 0x85 (b2)</p>
</dd>
<dt><a href="#module_NLA1 File Version">NLA1 File Version</a></dt>
<dd><p>Offset in file: 0x14 and 0x15</p>
</dd>
<dt><a href="#module_NLA1 File Format">NLA1 File Format</a></dt>
<dd><p>Offset in file: 0x04</p>
</dd>
<dt><a href="#module_NLA1 Program Category">NLA1 Program Category</a></dt>
<dd><p>Offset in file: 0x10</p>
</dd>
</dl>

<a name="module_NLA1 Reverb On"></a>

## NLA1 Reverb On
Offset in file: 0x85 (b2)

**Example**  
```js
O = off, 1 = on

 
```
<a name="module_NLA1 File Version"></a>

## NLA1 File Version
Offset in file: 0x14 and 0x15

**See**: [Nord Lead A1 - Update History](https://www.nordkeyboards.com/products/nord-lead-a1/nord-lead-a1-update-history)  
**Example**  
```js
Nord Lead A1 - OS Update
v1.02 (2014-03-10)
v1.12 (2014-04-02)
v1.14 (2014-04-04)
v1.20 (2014-04-25)
v1.24 (2014-04-28)
v1.30 (2014-05-12)
v1.32 (2014-05-22)
v1.34 (2015-10-07)

16-bit integer value in Little Endian format
current supported version are 6 and 7
```
<a name="module_NLA1 File Format"></a>

## NLA1 File Format
Offset in file: 0x04

**Example**  
```js
0 = header type 0 - legacy format no CRC (Byte 0x18 to 0x2B are missing)
1 = header type 1 - new format with additional bytes 0x18 to 0x2B (20 bytes).

All files exported with Nord Sound Manager v7.40 (2018-12-18) or later are in type 1.
```
<a name="module_NLA1 Program Category"></a>

## NLA1 Program Category
Offset in file: 0x10

**Example**  
```js
#include programCategoryMap
```
