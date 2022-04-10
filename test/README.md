
## Test file naming convention

This test folder contains all the test files (ns2p, ns2s, ns3f, ns3y, nlas...). test-builder.js is browsing all sub-folders and auto-generate a test case for each file. test-builder.js must be rerun if you add a new file or rename one.

### example 1: testing Panel A / Synth module = On

filename must be "panelA.synth.enabled eq true.ns3f"

The API should return:
 - panelA.synth.enabled = true value.

### example 2: testing Panel A / Synth Osc1 Wave Form Type = Classic Sine

filename must be "panelA.synth.oscillators.type eq Classic and panelA.synth.oscillators.waveForm1 eq Sine.ns3f"

The API should return:
- panelA.synth.oscillatorType = Classic
- panelA.synth.oscillator1WaveForm = Sine

### Special characters
- "/" is replaced by @a
- "±" is replaced by @=
- "+" is replaced by @p
- ":" is replaced by @c

## Automated Tests
Complete list of tested program configuration is available [here](../docs/test-result.md).


