// this file is auto-generated with test-builder.js

const { loadTestCase } = require("./test-helpers");

const root = __dirname + "/ns3/synth/";

describe("/ns3/synth", () => {
    test("./test/ns3/synth/panelA.synth.enabled eq false.ns3f", async () => {
        const file = "panelA.synth.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.enabled eq true.ns3f", async () => {
        const file = "panelA.synth.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.glide.value eq 0.0.ns3f", async () => {
        const file = "panelA.synth.glide.value eq 0.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.glide.value eq 10.0.ns3f", async () => {
        const file = "panelA.synth.glide.value eq 10.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.glide.value eq 5.0.ns3f", async () => {
        const file = "panelA.synth.glide.value eq 5.0.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.kbZone.value eq -O--.ns3f", async () => {
        const file = "panelA.synth.kbZone.value eq -O--.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.kbZone.value eq O---.ns3f", async () => {
        const file = "panelA.synth.kbZone.value eq O---.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.keyboardHold.enabled eq false.ns3f", async () => {
        const file = "panelA.synth.keyboardHold.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.keyboardHold.enabled eq true.ns3f", async () => {
        const file = "panelA.synth.keyboardHold.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.octaveShift.value eq -1 oct.ns3f", async () => {
        const file = "panelA.synth.octaveShift.value eq -1 oct.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.octaveShift.value eq @p0 oct.ns3f", async () => {
        const file = "panelA.synth.octaveShift.value eq @p0 oct.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.octaveShift.value eq @p1 oct.ns3f", async () => {
        const file = "panelA.synth.octaveShift.value eq @p1 oct.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStick.enabled eq false.ns3f", async () => {
        const file = "panelA.synth.pitchStick.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStick.enabled eq true.ns3f", async () => {
        const file = "panelA.synth.pitchStick.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq +2@a-12 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq +2@a-12 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq +2@a-24 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq +2@a-24 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=1 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=1 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=10 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=10 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=12 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=12 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=2 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=2 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=3 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=3 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=4 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=4 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=5 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=5 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.pitchStickRange.value eq @=7 semi.ns3f", async () => {
        const file = "panelA.synth.pitchStickRange.value eq @=7 semi.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.sustainPedal.enabled eq false.ns3f", async () => {
        const file = "panelA.synth.sustainPedal.enabled eq false.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.sustainPedal.enabled eq true.ns3f", async () => {
        const file = "panelA.synth.sustainPedal.enabled eq true.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.unison.value eq 1.ns3f", async () => {
        const file = "panelA.synth.unison.value eq 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.unison.value eq 2.ns3f", async () => {
        const file = "panelA.synth.unison.value eq 2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.unison.value eq 3.ns3f", async () => {
        const file = "panelA.synth.unison.value eq 3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.unison.value eq Off.ns3f", async () => {
        const file = "panelA.synth.unison.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.vibrato.value eq AT.ns3f", async () => {
        const file = "panelA.synth.vibrato.value eq AT.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.vibrato.value eq Delay 1.ns3f", async () => {
        const file = "panelA.synth.vibrato.value eq Delay 1.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.vibrato.value eq Delay 2.ns3f", async () => {
        const file = "panelA.synth.vibrato.value eq Delay 2.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.vibrato.value eq Delay 3.ns3f", async () => {
        const file = "panelA.synth.vibrato.value eq Delay 3.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.vibrato.value eq Off.ns3f", async () => {
        const file = "panelA.synth.vibrato.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.vibrato.value eq Wheel.ns3f", async () => {
        const file = "panelA.synth.vibrato.value eq Wheel.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.voice.value eq Legato.ns3f", async () => {
        const file = "panelA.synth.voice.value eq Legato.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.voice.value eq Mono.ns3f", async () => {
        const file = "panelA.synth.voice.value eq Mono.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.voice.value eq Poly.ns3f", async () => {
        const file = "panelA.synth.voice.value eq Poly.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.volume.midi eq 0 and panelA.synth.volume.value eq Off.ns3f", async () => {
        const file = "panelA.synth.volume.midi eq 0 and panelA.synth.volume.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.volume.midi eq 127 and panelA.synth.volume.value eq 0.0 dB.ns3f", async () => {
        const file = "panelA.synth.volume.midi eq 127 and panelA.synth.volume.value eq 0.0 dB.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("./test/ns3/synth/panelA.synth.volume.value eq Off.ns3f", async () => {
        const file = "panelA.synth.volume.value eq Off.ns3f";
        const sut = await loadTestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

