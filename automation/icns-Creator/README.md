# icns Creator #

## What does it do? ##

icns_creator.sh is an OS X shell script that takes a source image and outputs an .icns file containing icons of the following resolutions:

- 16x16
- 16x16@2x
- 32x32
- 32x32@2x
- 128x128
- 128x128@2x
- 256x256
- 256x256@2x
- 512x512
- 512x512@2x

## How to use this script ##

icns_creator.sh takes a path to an image file as an argument and outputs the converted PNGs and final .icns file into the directory it is run from. You may optionally pass a name for the .icns file as a second parameter (defaults to 'iconbuilder').

```
~$ bash icns_creator.sh /path/to/source.png [icon_name]
```

If the source image is not a PNG, the script will attempt to convert it. It is also recommended that your source image be 1024x1024 or higher resolution. Lower resolution icons will look pixelated when upscaled.

## License ##

```
Copyright (c) 2015, JAMF Software, LLC. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this
      list of conditions, and the disclaimer below.
    * Redistributions in binary form must reproduce the above copyright notice, this
      list of conditions and the disclaimer below in the documentation and/or
      other materials provided with the distribution.
    * Neither the name of the JAMF Software, LLC nor the names of its contributors
      may be used to endorse or promote products derived from this software without
      specific prior written permission.

THIS SOFTWARE IS PROVIDED BY JAMF SOFTWARE, LLC "AS IS" AND ANY EXPRESS OR IMPLIED
WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL JAMF SOFTWARE,
LLC BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```
