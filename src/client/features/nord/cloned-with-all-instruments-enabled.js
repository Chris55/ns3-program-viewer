import { produce } from "immer";

export const clonedWithAllInstrumentsEnabled = (originalData) => {
    const newData = [];
    for (const baseState of originalData) {
        const nextState = produce(baseState, (draftState) => {
            if (draftState.type === "Program" || draftState.type === "Live") {
                draftState.name += " - (All Instruments Visible)";

                const panelA = draftState.panelA || draftState.slotA;
                const panelB = draftState.panelB || draftState.slotB;

                panelA.organ.dimmed = !panelA.enabled || !panelA.organ.enabled;
                panelA.piano.dimmed = !panelA.enabled || !panelA.piano.enabled;
                panelA.synth.dimmed = !panelA.enabled || !panelA.synth.enabled;
                panelA.extern.dimmed = !panelA.enabled || !panelA.extern.enabled;

                panelA.enabled = true;
                panelA.organ.enabled = true;
                panelA.piano.enabled = true;
                panelA.synth.enabled = true;
                panelA.extern.enabled = true;

                panelB.organ.dimmed = !panelB.enabled || !panelB.organ.enabled;
                panelB.piano.dimmed = !panelB.enabled || !panelB.piano.enabled;
                panelB.synth.dimmed = !panelB.enabled || !panelB.synth.enabled;
                panelB.extern.dimmed = !panelB.enabled || !panelB.extern.enabled;

                panelB.enabled = true;
                panelB.organ.enabled = true;
                panelB.piano.enabled = true;
                panelB.synth.enabled = true;
                panelB.extern.enabled = true;
            }
        });

        newData.push(nextState);
    }
    return newData;
};
