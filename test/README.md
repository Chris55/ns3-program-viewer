
## ns3f test file naming convention

This test folder contains all the ns3f test files. builder.js is browsing all sub-folders and auto-generate a test case for each file. builder.js must be rerun if you add a new ns3f file or rename one.

### example 1: testing Panel A / Synth module is On

filename must be "panelA.synth.enabled eq true.ns3f"

The API should return:
 - panelA.synth.enabled = true value.

### example 2: testing Panel A / Synth Osc1 Wave Form Type is Classic Sine

filename must be "panelA.synth.oscillatorType eq Classic and panelA.synth.oscillator1WaveForm eq Sine.ns3f"

The API should return:
- panelA.synth.oscillatorType = Classic
- panelA.synth.oscillator1WaveForm = Sine



