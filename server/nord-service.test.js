const {loadNs3fFile} = require("./nord-service");
const fs = require('fs').promises;

const load = async (filename) => {
    const buffer = await fs.readFile(filename);
    return loadNs3fFile(buffer);
}

test('Organ Percussion On', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion On.ns3f");
    expect(sut.part1.organ.percussion.enabled).toBe(true);
})

test('Organ Percussion Off', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion Off.ns3f");
    expect(sut.part1.organ.percussion.enabled).toBe(false);
})

test('Organ Percussion Volume Soft On', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion Volume Soft On.ns3f");
    expect(sut.part1.organ.percussion.volumeSoft).toBe(true);
})

test('Organ Percussion Volume Soft Off', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion Volume Soft Off.ns3f");
    expect(sut.part1.organ.percussion.volumeSoft).toBe(false);
})

test('Organ Percussion Decay Fast On', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion Decay Fast On.ns3f");
    expect(sut.part1.organ.percussion.decayFast).toBe(true);
})

test('Organ Percussion Decay Fast Off', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion Decay Fast Off.ns3f");
    expect(sut.part1.organ.percussion.decayFast).toBe(false);
})

test('Organ Percussion Harmony Third On', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion Harmony Third On.ns3f");
    expect(sut.part1.organ.percussion.harmonicThird).toBe(true);
})

test('Organ Percussion Harmony Third Off', async () => {
    const sut = await load("./test/res/Organ/Test Organ Percussion Harmony Third Off.ns3f");
    expect(sut.part1.organ.percussion.harmonicThird).toBe(false);
})
