// this file is auto-generated with builder.js

const { getNs3TestCase } = require("./helpers");

const root = __dirname + "/ns3/Organ/";

describe("/ns3/Organ", () => {
    test("panelA.effects.rotarySpeaker.drive eq 0.0", async () => {
        const file = "panelA.effects.rotarySpeaker.drive eq 0.0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.drive eq 10.0", async () => {
        const file = "panelA.effects.rotarySpeaker.drive eq 10.0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.drive eq 5.9", async () => {
        const file = "panelA.effects.rotarySpeaker.drive eq 5.9.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.enabled eq false", async () => {
        const file = "panelA.effects.rotarySpeaker.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.enabled eq true and panelA.effects.rotarySpeaker.source eq Organ", async () => {
        const file = "panelA.effects.rotarySpeaker.enabled eq true and panelA.effects.rotarySpeaker.source eq Organ.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.enabled eq true and panelA.effects.rotarySpeaker.source eq Piano", async () => {
        const file = "panelA.effects.rotarySpeaker.enabled eq true and panelA.effects.rotarySpeaker.source eq Piano.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.enabled eq true and panelA.effects.rotarySpeaker.source eq Synth", async () => {
        const file = "panelA.effects.rotarySpeaker.enabled eq true and panelA.effects.rotarySpeaker.source eq Synth.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.enabled eq true", async () => {
        const file = "panelA.effects.rotarySpeaker.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.speed eq Fast", async () => {
        const file = "panelA.effects.rotarySpeaker.speed eq Fast.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.speed eq Slow@aStop", async () => {
        const file = "panelA.effects.rotarySpeaker.speed eq Slow@aStop.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.stopMode eq false", async () => {
        const file = "panelA.effects.rotarySpeaker.stopMode eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.effects.rotarySpeaker.stopMode eq true", async () => {
        const file = "panelA.effects.rotarySpeaker.stopMode eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.enabled eq false", async () => {
        const file = "panelA.organ.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.enabled eq true", async () => {
        const file = "panelA.organ.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq ----", async () => {
        const file = "panelA.organ.kbZone eq ----.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq ---O", async () => {
        const file = "panelA.organ.kbZone eq ---O.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq --O-", async () => {
        const file = "panelA.organ.kbZone eq --O-.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq --OO", async () => {
        const file = "panelA.organ.kbZone eq --OO.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq -O--", async () => {
        const file = "panelA.organ.kbZone eq -O--.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq -OO-", async () => {
        const file = "panelA.organ.kbZone eq -OO-.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq -OOO", async () => {
        const file = "panelA.organ.kbZone eq -OOO.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq O---", async () => {
        const file = "panelA.organ.kbZone eq O---.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq OO--", async () => {
        const file = "panelA.organ.kbZone eq OO--.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq OOO-", async () => {
        const file = "panelA.organ.kbZone eq OOO-.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.kbZone eq OOOO", async () => {
        const file = "panelA.organ.kbZone eq OOOO.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.octaveShift eq -1", async () => {
        const file = "panelA.organ.octaveShift eq -1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.octaveShift eq 0", async () => {
        const file = "panelA.organ.octaveShift eq 0.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.octaveShift eq 1", async () => {
        const file = "panelA.organ.octaveShift eq 1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.decayFast eq false", async () => {
        const file = "panelA.organ.percussion.decayFast eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.decayFast eq true", async () => {
        const file = "panelA.organ.percussion.decayFast eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.enabled eq false", async () => {
        const file = "panelA.organ.percussion.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.enabled eq true", async () => {
        const file = "panelA.organ.percussion.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.harmonicThird eq false", async () => {
        const file = "panelA.organ.percussion.harmonicThird eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.harmonicThird eq true", async () => {
        const file = "panelA.organ.percussion.harmonicThird eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.volumeSoft eq false", async () => {
        const file = "panelA.organ.percussion.volumeSoft eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.percussion.volumeSoft eq true", async () => {
        const file = "panelA.organ.percussion.volumeSoft eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.pitchStick eq false", async () => {
        const file = "panelA.organ.pitchStick eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.pitchStick eq true", async () => {
        const file = "panelA.organ.pitchStick eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.sustainPedal eq false", async () => {
        const file = "panelA.organ.sustainPedal eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.sustainPedal eq true", async () => {
        const file = "panelA.organ.sustainPedal eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.type eq B3 and panelA.organ.preset1 eq 345666554 and panelA.organ.preset2 eq 864111367", async () => {
        const file = "panelA.organ.type eq B3 and panelA.organ.preset1 eq 345666554 and panelA.organ.preset2 eq 864111367.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.type eq B3 and panelA.organ.preset1 eq 355788653 and panelA.organ.preset2 eq 343323343", async () => {
        const file = "panelA.organ.type eq B3 and panelA.organ.preset1 eq 355788653 and panelA.organ.preset2 eq 343323343.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.type eq B3 and panelA.organ.preset1 eq 888888888 and panelA.organ.preset2 eq 888888888", async () => {
        const file = "panelA.organ.type eq B3 and panelA.organ.preset1 eq 888888888 and panelA.organ.preset2 eq 888888888.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.type eq Farfisa and panelA.organ.preset1 eq 111001111 and panelA.organ.preset2 eq 111111111", async () => {
        const file = "panelA.organ.type eq Farfisa and panelA.organ.preset1 eq 111001111 and panelA.organ.preset2 eq 111111111.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.type eq Pipe1 and panelA.organ.preset1 eq 887544333 and panelA.organ.preset2 eq 888888888", async () => {
        const file = "panelA.organ.type eq Pipe1 and panelA.organ.preset1 eq 887544333 and panelA.organ.preset2 eq 888888888.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.type eq Pipe2 and panelA.organ.preset1 eq 008000000 and panelA.organ.preset2 eq 888888888", async () => {
        const file = "panelA.organ.type eq Pipe2 and panelA.organ.preset1 eq 008000000 and panelA.organ.preset2 eq 888888888.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.type eq Vox and panelA.organ.preset1 eq 888888808 and panelA.organ.preset2 eq 888888808", async () => {
        const file = "panelA.organ.type eq Vox and panelA.organ.preset1 eq 888888808 and panelA.organ.preset2 eq 888888808.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.enabled eq false", async () => {
        const file = "panelA.organ.vibrato.enabled eq false.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.enabled eq true", async () => {
        const file = "panelA.organ.vibrato.enabled eq true.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.mode eq C1", async () => {
        const file = "panelA.organ.vibrato.mode eq C1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.mode eq C2", async () => {
        const file = "panelA.organ.vibrato.mode eq C2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.mode eq C3", async () => {
        const file = "panelA.organ.vibrato.mode eq C3.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.mode eq V1", async () => {
        const file = "panelA.organ.vibrato.mode eq V1.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.mode eq V2", async () => {
        const file = "panelA.organ.vibrato.mode eq V2.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.vibrato.mode eq V3", async () => {
        const file = "panelA.organ.vibrato.mode eq V3.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.label eq -0.1 dB", async () => {
        const file = "panelA.organ.volume.label eq -0.1 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.label eq -12.2 dB", async () => {
        const file = "panelA.organ.volume.label eq -12.2 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.label eq -2.0 dB", async () => {
        const file = "panelA.organ.volume.label eq -2.0 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.label eq -7.6 dB", async () => {
        const file = "panelA.organ.volume.label eq -7.6 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.label eq -7.8 dB", async () => {
        const file = "panelA.organ.volume.label eq -7.8 dB.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

    test("panelA.organ.volume.label eq Off", async () => {
        const file = "panelA.organ.volume.label eq Off.ns3f";
        const sut = await getNs3TestCase(root + file);
        sut.data.forEach((d) => {
            expect(d.actual).toEqual(d.expected);
        });
    });

});

