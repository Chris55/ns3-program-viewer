import {createSlice} from "@reduxjs/toolkit";
import {model} from "../../nord/ns2/model/ns2-model";
import axios from "axios";
import {BlobReader, BlobWriter, ZipReader} from "@zip.js/zip.js";

const production = process.env.NODE_ENV === "production";

// to test home page set this to false,
// if true it shows the default model immediately

const loadedDebug = true;

const initialState = {
    production: production,
    isElectron: /electron/i.test(navigator.userAgent),
    loaded: production ? false : loadedDebug,
    loading: false,
    data: [model],
    originalData: [model],
    error: null,
    showAll: false,
    showDefault: false,
    exporting: false,
    exportDetails: "",
    programs: [
        // {name: "prg1", location: "Bank A"}, {name: "prg2", location: "Bank A"}, {
        //     name: "prg3",
        //     location: "Bank A"
        // }, {name: "prg4", location: "Bank A"},
        // {name: "prg1", location: "Bank A"}, {name: "prg2", location: "Bank A"}, {
        //     name: "prg3",
        //     location: "Bank A"
        // }, {name: "prg4", location: "Bank A"},
    ]
};

const nordSlice = createSlice({
    name: "nord",
    initialState,
    reducers: {
        setLoading: (state, {payload}) => {
            state.loading = payload;
        },
        setLoadingSuccess: (state, {payload}) => {
            state.loaded = payload.loaded;
            state.loading = payload.loading;
            state.data = payload.data;
            state.originalData = payload.data;
            state.error = null;
            state.showAll = payload.showAll;
            //state.programs = [];
        },
        setLoadingBackupSuccess: (state, {payload}) => {
            state.loaded = payload.loaded;
            state.loading = payload.loading;
            state.data = [];
            state.originalData = [];
            state.error = null;
            state.showAll = payload.showAll;
            state.programs = payload.programs;
        },
        setLoadingBackupInProgress: (state, {payload}) => {
            state.programs = [...state.programs, ...payload.programs];
        },
        setLoadingError: (state, {payload}) => {
            state.loaded = false;
            state.loading = false;
            state.error = payload.error;
            state.showAll = false;
        },
        setError: (state, {payload}) => {
            state.error = payload;
        },
        toggleShowDefault: (state, {payload}) => {
            state.showDefault = !state.showDefault;
        },
        toggleShowAll: (state, {payload}) => {
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
        setExporting: (state, {payload}) => {
            state.exporting = payload;
        },
        setExportingDetail: (state, {payload}) => {
            state.exportDetails = payload;
        },
    },
});

export const {
    setLoading,
    setLoadingSuccess,
    setLoadingBackupSuccess,
    setLoadingBackupInProgress,
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
                programs: data.programs
            })
        );
    } else {
        dispatch(setLoadingError(data));
    }
};

const onError = (dispatch, err) => {
    dispatch(setLoadingError({error: err.error}));
};

export const supportedProgramTypes = [".ns3f", ".ns3y", ".ns2p", ".ns2s"];
export const supportedBackupTypes = [".ns3b", ".ns3fb"];
export const allSupportedTypes = [...supportedProgramTypes, ...supportedBackupTypes];

export const loadFiles = (files) => {
        return async (dispatch) => {
            dispatch(setLoading(true));

            const programFiles = [];
            const backupFiles = [];

            for (const file of files) {
                const ext = file.name.slice((Math.max(0, file.name.lastIndexOf(".")) || Infinity)).toLowerCase();
                if (supportedProgramTypes.includes(ext)) {
                    programFiles.push(ext);
                } else if (supportedBackupTypes.includes(ext)) {
                    backupFiles.push(ext);
                } else {
                    onError(dispatch, {error: file.name + " is not supported..."});
                    return;
                }
            }

            if (programFiles.length >= 1 && backupFiles.length >= 1) {
                onError(dispatch, {error: "Please do not mix backup and program files..."});
                return;
            }

            if (backupFiles.length >= 1) {
                for (const file of files) {
                    const reader = new ZipReader(new BlobReader(file));
                    const entries = await reader.getEntries();
                    const programs = [];
                    const formData = new FormData();
                    let max = 1000;
                    for (const entry of entries) {

                        if (entry.filename.startsWith("Program")) {
                            if (max-- > 0) {
                                const items = entry.filename.split("/");
                                const rawData = await entry.getData(
                                    //new Uint8ArrayWriter()
                                    new BlobWriter()
                                );
                                formData.append("nordFiles", rawData, items[2]);
                            }
                        }
                    }
                    //const url = "https://ns3-program-viewer.herokuapp.com/api/upload";
                    const url = "http://localhost:3000/api/upload";
                    const response = await fetch(url, {
                        method: 'POST',
                        body: formData
                    });
                    if (response.ok) {
                        const json = await response.json();
                        if (json.success) {
                            for (const data of json.data) {
                                const program = {
                                    name: data.name,
                                    location: data.id.name,
                                    version: data.version.value,
                                    category: data.category,
                                    model: data
                                };

                                programs.push(program);
                                // dispatch(
                                //     setLoadingBackupInProgress({
                                //         programs: [program]
                                //     })
                                // );
                            }

                        } else {
                            onError(dispatch, {error: json.error});
                            return;
                        }
                    } else {
                        onError(dispatch, {error: response.statusText});
                        return;
                    }
                    dispatch(
                        setLoadingBackupSuccess({
                            loaded: true,
                            loading: false,
                            error: null,
                            showAll: false,
                            programs: programs
                        })
                    );
                }
                return;
            }

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
                    onError(dispatch, {error: e.message});
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
    }
;
