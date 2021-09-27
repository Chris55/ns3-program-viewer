import { createSlice } from "@reduxjs/toolkit";
import { model } from "../../nord/ns2/model/ns2-model";
import axios from "axios";

const production = process.env.NODE_ENV === "production";

// to test home page set this to false,
// if true it shows the default model immediately

const loadedDebug = true;

const initialState = {
    production: production,
    isElectron: /electron/i.test(navigator.userAgent),
    loaded:  production ? false: loadedDebug,
    loading: false,
    data: [model],
    originalData: [model],
    error: null,
    showAll: false,
    showDefault: false,
    exporting: false,
    exportDetails: "",
    programs: [{name: "prg1", location: "Bank A"}, {name: "prg2", location: "Bank A"}]
};

const nordSlice = createSlice({
    name: "nord",
    initialState,
    reducers: {
        setLoading: (state, { payload }) => {
            state.loading = payload;
        },
        setLoadingSuccess: (state, { payload }) => {
            state.loaded = payload.loaded;
            state.loading = payload.loading;
            state.data = payload.data;
            state.originalData = payload.data;
            state.error = null;
            state.showAll = payload.showAll;
        },
        setLoadingError: (state, { payload }) => {
            state.loaded = false;
            state.loading = false;
            state.error = payload.error;
            state.showAll = false;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
        toggleShowDefault: (state, { payload }) => {
            state.showDefault = !state.showDefault;
        },
        toggleShowAll: (state, { payload }) => {
            if (!state.showAll) {
                const newData = state.data;
                for (const item of newData) {
                    if (item.ext === "ns3f" || item.ext === "ns2p") {
                        item.name += " - (All Instruments Visible)";
                        const panelA = item.panelA || item.slotA;
                        const panelB = item.panelB || item.slotB;

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
                }
                state.showAll = true;
            } else {
                state.data = state.originalData;
                state.showAll = false;
            }
        },
        setExporting: (state, { payload }) => {
            state.exporting = payload;
        },
        setExportingDetail: (state, { payload }) => {
            state.exportDetails = payload;
        },
    },
});

export const {
    setLoading,
    setLoadingSuccess,
    setLoadingError,
    setError,
    toggleShowDefault,
    toggleShowAll,
    setExporting,
    setExportingDetail,
} = nordSlice.actions;

export const nordSelector = (state) => state.nordStore;

export default nordSlice.reducer;

const onSuccess = (dispatch, data) => {
    //console.log("success: ", data);
    if (data.success) {
        dispatch(
            setLoadingSuccess({
                loaded: true,
                loading: false,
                data: data.data,
                originalData: data.data,
                error: null,
                showAll: false,
            })
        );
    } else {
        dispatch(setLoadingError(data));
    }
};

const onError = (dispatch, err) => {
    dispatch(setLoadingError({ error: err.error }));
};

export const loadFiles = (files) => {
    return async (dispatch) => {
        dispatch(setLoading(true));

        if (initialState.isElectron) {
            try {
                const bundle = [];
                for (const file of files) {
                    bundle.push({
                        path: file.path,
                        name: file.name,
                    });
                }
                const response = await window.electron.downloadFiles(bundle);
                onSuccess(dispatch, response);
            } catch (e) {
                onError(dispatch, { error: e.message });
            }
            return;
        }

        const formData = new FormData();
        for (const file of files) {
            formData.append("nordFiles", file);
        }

        await axios
            .post("api/upload", formData, {})
            .then((res) => {
                onSuccess(dispatch, res.data);
            })
            .catch((err) => {
                onError(dispatch, err.response.data);
            });
    };
};
