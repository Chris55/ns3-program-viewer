# Want to collaborate?

Looking for collaboration to decode more Nord Keyboards file structure.

Example for Nord Lead A1 owner:

For each one of you that want to help to decode the NLAS file structure, the most important is to install and learn to use a simple HEX editor.

The 'must have' feature is the compare file option. This allows a quick compare of two NLAS file where you changed only a single setting.



Google search like 'hex viewer with file compare’ gives a good starting point.

I’m on Mac and used HEX Fiend, https://hexfiend.com very simple but worked great to decode the Nord Stage structure.
The most important feature is:
> Binary diff: Hex Fiend can show the differences between files, taking into account insertions or deletions.


Now, how to proceed ?

Simple example how to decode the Reverb options:

### STEP 1
From any init config, generate a 1st NLAS file with Reverb enabled on slot A, export it with [Nord Sound Manager](https://www.nordkeyboards.com/software-tools/nord-sound-manager)  call it AReverbOn.nlas

### STEP 2
Use this program as starting point, disable the reverb in Slot A, and save it in another location, export it with [Nord Sound Manager](https://www.nordkeyboards.com/software-tools/nord-sound-manager), call it AReverbOff.nlas

### STEP 3
Load both programs in your hex viewer, and run the compare feature. bingo you have your 1st setting :)

Document the bit changes in a text file. Please create a simple text file like [this](./ns2/program/NS2_FX_Multi.txt).

Here it will be a single bit change in a byte somewhere, document it like this:
```
REVERB
Offset in file 0x3d (b7)
0 = OFF
1 = ON
```

It means bit7 of byte 0x3d is 1 when Reverb is enabled… (the number here are not from the A1, just an example)


Remarks
- On Nord Stage, memory is optimised. I expect the same on the A1. Each bit (not byte) is used. For example a single byte can contain multiple settings, example bit 0 is used for reverb on/off, and bit 1 to 3 for the reverb type (3 bits), and bit 4 to 7 used for another parameter…

- Additional bytes may change, even if you change only a single parameter:
```
0x0E: typically this is the LSB program location
0x18 to 0x1B: this is the file checksum added by latest Nord Sound Manager.
```

### STEP 4
Share both program files and add the text file with the mapping details.



That's it !

## After on the dev side:

- Doc will be used to code the A1 viewer app. Details are also added as comment in the source code. Once complete, all comments are automatically extracted to generate a mapping pdf file.
- Both programs will be added to the viewer app for automated unit test.


This is a simple on/off example, other settings are more tricky but this is a good starter for each of you to learn the process.

### Final thought
On the Nord Stage some settings are slightly different in the program file and the final view on the Keyboard (Split setting is a good example). This is due to the Keyboard OS that valid sometimes inputs according last user selection. This is an advanced topic that can be checked only during validation and app testing.


Contact me if interested to collaborate, and to add more Nord Product to this app.

@Chris55

