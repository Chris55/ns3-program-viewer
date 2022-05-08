import { createSlice } from "@reduxjs/toolkit";
import { model } from "../../nord/ns2/model/ns2-model";
import axios from "axios";
import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";

export const supportedProgramTypes = [".ns3f", ".ns3y", ".ns3l", ".ns2p", ".ns2s", ".ns2l", ".nlas"];
export const supportedBackupTypes = [
    ".ns3b",
    ".ns3fb",
    ".ns3synthpb",
    ".ns2pb",
    ".ns2exb",
    ".ns2b",
    ".ns2synthpb",
    ".ns3sbundle",
    ".nlasbundle",
    ".nlab",
];
export const allSupportedTypes = [...supportedProgramTypes, ...supportedBackupTypes];

const production = process.env.NODE_ENV === "production";

// to test home page set this to false,
// if true it shows the default model immediately

const loadedDebug = false;

const initialState = {
    production: production,
    isElectron: /electron/i.test(navigator.userAgent),
    loaded: production ? false : loadedDebug,
    loading: false,
    progress: 0,
    data: [model],
    originalData: [model],
    error: null,
    showAll: false,
    showDefault: false,
    exporting: false,
    exportDetails: "",
    exportRange: "selection",
    managerTitle: "",
    managerFileExt: "",
    programs: [
        // {name: "prg1", location: "Bank A"}, {name: "prg2", location: "Bank A"}, {
        //     name: "prg3",
        //     location: "Bank A"
        // }, {name: "prg4", location: "Bank A"},
        // {name: "prg1", location: "Bank A"}, {name: "prg2", location: "Bank A"}, {
        //     name: "prg3",
        //     location: "Bank A"
        // }, {name: "prg4", location: "Bank A"},
    ],
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
            state.data = payload.data;
            state.originalData = payload.data;
            state.error = null;
            state.showAll = false;
        },
        setLoadingBackupSuccess: (state, { payload }) => {
            state.loaded = true;
            state.loading = false;
            state.data = [];
            state.originalData = [];
            state.error = null;
            state.showAll = false;
            state.programs = payload.programs;
            state.lives = payload.lives;
            state.performances = payload.performances;
            state.synths = payload.synths;
            state.managerTitle = payload.managerTitle;
            state.managerFileExt = payload.managerFileExt;
            state.managerSelectedIndexes = {};
            if (payload.programs.length === 0) {
                if (payload.synths.length > 0) {
                    state.managerTabSelection = "Synth";
                } else if (payload.performances.length > 0) {
                    state.managerTabSelection = "Performances";
                } else if (payload.lives.length > 0) {
                    state.managerTabSelection = "Live";
                } else {
                    state.managerTabSelection = "Program";
                }
            } else {
                state.managerTabSelection = "Program";
            }
        },
        setManagerSelection: (state, { payload }) => {
            state.managerTabSelection = payload.managerTabSelection;
            if (payload.indexes) {
                state.managerSelectedIndexes[payload.managerTabSelection] = payload.indexes;
            }
        },
        clearBackupData: (state) => {
            state.programs = [];
            state.synths = [];
            state.performances = [];
            state.lives = [];
            state.programSelectedIndexes = [];
            state.synthSelectedIndexes = [];
            state.managerTitle = "";
        },
        setLoadingBackupInProgress: (state, { payload }) => {
            state.programs = [...state.programs, ...payload.programs];
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
        toggleShowDefault: (state, { payload }) => {
            state.showDefault = !state.showDefault;
        },
        toggleShowAll: (state, { payload }) => {
            state.data = setAll(state.data, state.originalData, !state.showAll);
            state.showAll = !state.showAll;
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
    clearBackupData,
    setLoadingBackupInProgress,
    setLoadingError,
    setError,
    toggleShowDefault,
    toggleShowAll,
    setExporting,
    setExportingDetail,
    setExportOptions,
    setManagerSelection,
} = nordSlice.actions;

export const nordSelector = (state) => state.nordStore;

export default nordSlice.reducer;

const getExtension = (fileName) => {
    return fileName.slice(Math.max(0, fileName.lastIndexOf(".")) || Infinity).toLowerCase();
};

const setAll = (data, originalData, showAll) => {
    if (showAll === false) {
        return originalData;
    }
    const newData = data;
    for (const item of newData) {
        if (item.type === "Program" || item.type === "Live") {
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
    return newData;
};

export const loadFiles = (files) => {
    return async (dispatch) => {
        dispatch(setLoading({ loading: true, progress: 10 }));

        const programFiles = [];
        const backupFiles = [];

        for (const file of files) {
            const ext = getExtension(file.name);
            if (supportedProgramTypes.includes(ext)) {
                programFiles.push(ext);
            } else if (supportedBackupTypes.includes(ext)) {
                backupFiles.push(ext);
            } else {
                onError(dispatch, { error: file.name + " is not supported..." });
                return;
            }
        }

        if (programFiles.length >= 1 && backupFiles.length >= 1) {
            onError(dispatch, { error: "Please do not mix backup and program files..." });
            return;
        }

        dispatch(setLoading({ loading: true, progress: 40 }));

        if (backupFiles.length >= 1) {
            if (backupFiles.length > 1) {
                onError(dispatch, { error: "Please select only one backup/bundle file..." });
                return;
            }
            await loadBackupFile(dispatch, files[0]);
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

const loadBackupFile = async (dispatch, file) => {
    const reader = new ZipReader(new BlobReader(file));
    const entries = await reader.getEntries();

    const formData = new FormData();
    //let count = 0;
    for (const entry of entries) {
        const ext = getExtension(entry.filename);
        if (supportedProgramTypes.includes(ext)) {
            //count++;
            const items = entry.filename.split("/");
            const rawData = await entry.getData(
                //new Uint8ArrayWriter()
                new BlobWriter()
            );
            formData.append("nordFiles", rawData, items[2]);
        }
    }
    reader.close();

    let json = {};

    dispatch(setLoading({ loading: true, progress: 60 }));

    if (initialState.isElectron) {
        json = await window.electron.downloadBackup(file.path, supportedProgramTypes);
    } else {
        const url = production ? window.location.origin + "/api/upload" : "http://localhost:3000/api/upload";

        const response = await fetch(url, {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            json = await response.json();
        } else {
            onError(dispatch, { error: response.statusText });
            return;
        }
    }

    if (json.success) {
        const managerData = toManagerData(dispatch, json.data, file.name);
        dispatch(setLoadingBackupSuccess({ ...managerData }));
        fadeOutProgressBar(dispatch);
    } else {
        onError(dispatch, { error: json.error });
    }
};

export const fadeOutProgressBar = (dispatch) => {
    dispatch(setProgress({ progress: 100 }));

    setTimeout(() => {
        dispatch(setProgress({ progress: 0 }));
    }, 3000);
};

const toManagerData = (dispatch, dataArray, filename) => {
    const programs = [];
    const lives = [];
    const performances = [];
    const synths = [];
    for (const data of dataArray) {
        const nordItem = {
            name: data.name,
            location: data.id.name,
            version: data.version.value,
            category: data.category,
            model: data,
        };
        switch (data.type) {
            case "Program":
                programs.push(nordItem);
                break;
            case "Performance":
                performances.push(nordItem);
                break;
            case "Live":
                lives.push(nordItem);
                break;
            case "Synth":
                synths.push(nordItem);
                break;
            default:
                onError(dispatch, { error: data.type + " is not implemented..." });
                return;
        }
    }
    return {
        programs,
        performances,
        lives,
        synths,
        managerTitle: filename,
        managerFileExt: getExtension(filename),
    };
};

const onSuccess = (dispatch, response) => {
    if (response.success) {
        // dispatch(clearBackupData());
        //
        // dispatch(
        //     setLoadingSuccess({
        //         data: data.data,
        //         originalData: data.data,
        //         programs: data.programs,
        //     })
        // );
        const managerData = toManagerData(dispatch, response.data, "");
        dispatch(setLoadingBackupSuccess({ ...managerData }));

        fadeOutProgressBar(dispatch);
    } else {
        dispatch(setLoadingError(response));
    }
};

const onError = (dispatch, err) => {
    dispatch(setLoadingError({ error: err.error }));
};
