#Want to collaborate?

Looking for collaboration to decode other Nord familly Keyboards.

Example for Nord Lead A1 owner:

For each one of you that want to help to decode the NLAS file structure, the most important is to install and learn to use a simple HEX editor, the must have feature is the compare file option. This allows a quick compare of two NLAS file where you changed only a single setting.


The important feature to have is ‘File Compare’.

Google search like 'hex viewer with file compare’ gives a good starting point.

I’m on Mac and used HEX Fiend, https://hexfiend.com very basic but worked fine to decode the Nord Stage structure.


Now how to proceed ?

Simple example how to decode the Reverb options:

### STEP 1
From any init config, generate a 1st NLAS file with Reverb on on slot A, export it with NSM call it AReverbOn.nlas

### STEP 2
Use this program as starting point, disable the reverb in Slot A, and save it in another location, export it with NSM, call it AReverbOff.nlas

### STEP 3
Load both programs in your hex viewer, and run the compare feature. bingo you have your 1st setting :)

Here it will be a single bit change in a byte somewhere. Document it in a text file with all you other findings, using this format:
```
REVERB
Offset in file 0x3d (b7)
0 = OFF
1 = ON
```

means bit7 of byte 0x3d is 1 when Reverb is enabled… (the number here are not from the A1, just an example)


### STEP 4
Share both program files on the GoogleDrive and add the text file with the mapping details.



On the Stage, memory is optimised. I expect the same on the A1. Each bit (not byte) is used. For example a single byte can contain multiple settings, example bit 0 is used for reverb on/off, and bit 1 to 3 for the reverb type (3 bits), and bit 4 to 7 used for another parameter…

That's it !

## After on the dev side:
- Both programs will be added to the viewer app for automated unit test,
- Doc will be used to code the A1 viewer app, the details are also added as comment in the source code. Once complete, all comments are automatically extracted to generate a mapping pdf file.
- Done.

This is a simple on/off example but a good starter for each of you to learn the process.


Contact me if interested to collaborate, and to add more Nord Product in this app.

@Chris55

