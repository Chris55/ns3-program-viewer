import { createSlice } from "@reduxjs/toolkit";
import { model } from "../../nord/ns2/model/ns2-model";
import { clonedWithAllInstrumentsEnabled } from "./cloned-with-all-instruments-enabled";

// to test home page set this to false,
// if true it shows the default model immediately

const loadedDebug = false;
const production = process.env.NODE_ENV === "production";

const initialState = {
    production: production,
    isElectron: /electron/i.test(navigator.userAgent),
    isServerless: true,
    loaded: production ? false : loadedDebug,
    loading: false,
    progress: 0,
    data: [model],
    originalData: [model],
    error: null,
    showAll: false,
    showDefault: false,
    showManager: false,
    exporting: false,
    exportDetails: "",
    exportRange: "selection",
    managerTitle: "",
    managerFileExt: "",
    programs: [],
    synths: [],
    lives: [],
    performances: [],
    managerSelectedIndexes: {},
    managerTabSelection: "Program",
};

const nordSlice = createSlice({
    name: "nord",
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = true;
            state.progress = payload.progress;
        },
        setProgress: (state, { payload }) => {
            state.progress = payload.progress;
        },
        setLoadingSuccess: (state, { payload }) => {
            state.loaded = true;
            state.loading = false;
            state.data = state.showAll ? clonedWithAllInstrumentsEnabled(payload.data) : payload.data;
            state.originalData = payload.data;
            state.error = null;
        },
        setLoadingBackupSuccess: (state, { payload }) => {
            state.loaded = true;
            state.loading = false;
            state.error = null;
            state.showManager =
                payload.programs.length > 1 ||
                payload.synths.length > 1 ||
                payload.lives.length > 1 ||
                payload.performances.length > 1;
            state.programs = payload.programs;
            state.lives = payload.lives;
            state.performances = payload.performances;
            state.synths = payload.synths;
            state.managerTitle = payload.managerTitle;
            state.managerFileExt = payload.managerFileExt;
            state.managerSelectedIndexes = {};
            let data = [];
            if (payload.programs.length === 0) {
                if (payload.synths.length > 0) {
                    state.managerTabSelection = "Synth";
                    data.push(payload.synths[0].model);
                } else if (payload.performances.length > 0) {
                    state.managerTabSelection = "Performances";
                    data.push(payload.performances[0].model);
                } else if (payload.lives.length > 0) {
                    state.managerTabSelection = "Live";
                    data.push(payload.lives[0].model);
                } else {
                    state.managerTabSelection = "Program";
                }
            } else {
                state.managerTabSelection = "Program";
                data.push(payload.programs[0].model);
            }
            state.data = state.showAll ? clonedWithAllInstrumentsEnabled(data) : data;
            state.originalData = data;
        },
        setManagerSelection: (state, { payload }) => {
            state.managerTabSelection = payload.managerTabSelection;
            if (payload.indexes) {
                state.managerSelectedIndexes[payload.managerTabSelection] = payload.indexes;
            }
        },
        setLoadingError: (state, { payload }) => {
            state.loaded = false;
            state.loading = false;
            state.progress = 0;
            state.error = payload.error;
            state.showAll = false;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        toggleShowDefault: (state, { _payload }) => {
            state.showDefault = !state.showDefault;
        },
        toggleShowAll: (state, { _payload }) => {
            const newShowAll = !state.showAll;
            state.data = newShowAll ? clonedWithAllInstrumentsEnabled(state.data) : state.originalData;
            state.showAll = !state.showAll;
        },
        toggleShowManager: (state, { _payload }) => {
            state.showManager = !state.showManager;
        },
        setExporting: (state, { payload }) => {
            state.exporting = payload;
        },
        setExportingDetail: (state, { payload }) => {
            state.exportDetails = payload;
        },
        setExportOptions: (state, { payload }) => {
            state.exportRange = payload.range;
        },
    },
});

export const {
    setLoading,
    setProgress,
    setLoadingSuccess,
    setLoadingBackupSuccess,
    setLoadingError,
    setError,
    toggleShowDefault,
    toggleShowAll,
    toggleShowManager,
    setExporting,
    setExportingDetail,
    setExportOptions,
    setManagerSelection,
} = nordSlice.actions;

export const nordSelector = (state) => state.nordStore;

export default nordSlice.reducer;

export const fadeOutProgressBar = (dispatch) => {
    dispatch(setProgress({ progress: 100 }));

    setTimeout(() => {
        dispatch(setProgress({ progress: 0 }));
    }, 3000);
};
