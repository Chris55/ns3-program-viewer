//import axios from "axios";
import { BlobReader, BlobWriter, ZipReader } from "@zip.js/zip.js";
import {
    fadeOutProgressBar,
    setLoading,
    setLoadingBackupSuccess,
    setLoadingError,
    setProgress,
} from "./nord-slice-reducer";
import { supportedBackupTypes, supportedProgramTypes } from "./nord-file-types";
import { loadNordFile } from "../../../server/nord-service";
import { Buffer } from "buffer/";

/***
 * returns file extension
 * @param fileName
 * @returns {string}
 */
const getExtension = (fileName) => {
    return fileName.slice(Math.max(0, fileName.lastIndexOf(".")) || Infinity).toLowerCase();
};

/***
 * load a backup or bundle file
 * @param dispatch
 * @param file
 * @param isElectron
 * @param isServerless
 * @param production
 * @returns {Promise<void>}
 */
const loadBackupFile = async (dispatch, file, isElectron, isServerless, production) => {
    let json = {
        data: [],
        success: false,
        error: "",
    };

    dispatch(setLoading({ loading: true, progress: 60 }));

    if (isElectron) {
        json = await window.electron.downloadBackup(file.path, supportedProgramTypes);
    } else if (isServerless) {
        try {
            const reader = new ZipReader(new BlobReader(file));
            const entries = await reader.getEntries();
            const bundle = [];

            for (const entry of entries) {
                const ext = getExtension(entry.filename);
                if (supportedProgramTypes.includes(ext)) {
                    const items = entry.filename.split("/");
                    const blob = await entry.getData(new BlobWriter());
                    const arrayBuffer = await blob.arrayBuffer();
                    const buffer = Buffer.from(arrayBuffer);

                    const data = loadNordFile(buffer, items[2]);
                    bundle.push(data);
                }
            }
            await reader.close();

            const response = {
                success: true,
                error: "",
                data: bundle,
            };
            onSuccess(dispatch, response);
        } catch (e) {
            onError(dispatch, { error: e.message });
        }
        return;
    } else {
        // load the backup/bundle on client side to read only supported files
        const reader = new ZipReader(new BlobReader(file));
        const entries = await reader.getEntries();
        const payload = [];

        for (const entry of entries) {
            const ext = getExtension(entry.filename);
            if (supportedProgramTypes.includes(ext)) {
                const items = entry.filename.split("/");
                const rawData = await entry.getData(new BlobWriter());
                payload.push({
                    rawData,
                    name: items[2],
                });
            }
        }
        await reader.close();

        // payload is now ready to be loaded!

        const url = production ? window.location.origin + "/api/upload" : "http://localhost:3000/api/upload";

        // creat multiple chunks from the payload
        // cyclic free tier is not able to load a full backup file

        const chunkSize = 50;
        for (let i = 0; i < payload.length; i += chunkSize) {
            const pct = 60 + Math.floor((i * 40) / payload.length);
            dispatch(setProgress({ progress: pct }));
            const chunk = payload.slice(i, i + chunkSize);
            const formData = new FormData();
            for (const { rawData, name } of chunk) {
                formData.append("nordFiles", rawData, name);
            }

            const response = await fetch(url, {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                const partialJson = await response.json();
                if (partialJson.success) {
                    json.success = true;
                    json.data.push(...partialJson.data);
                } else {
                    json.error = partialJson.error;
                }
            } else {
                onError(dispatch, { error: response.statusText });
                return;
            }
        }
        dispatch(setProgress({ progress: 100 }));
    }

    if (json.success) {
        const managerData = toManagerData(dispatch, json.data, file.name);
        dispatch(setLoadingBackupSuccess({ ...managerData }));
        fadeOutProgressBar(dispatch);
    } else {
        onError(dispatch, { error: json.error });
    }
};

/***
 * load individual program files
 * @param dispatch
 * @param files
 * @param isElectron
 * @param isServerless
 * @param _production
 * @returns {Promise<void>}
 */
const loadIndividualFiles = async (dispatch, files, isElectron, isServerless, _production) => {
    if (isServerless) {
        try {
            const bundle = [];

            for (const file of files) {
                const arrayBuffer = await file.arrayBuffer();
                const buffer = Buffer.from(arrayBuffer);

                const data = loadNordFile(buffer, file.name);
                bundle.push(data);
            }
            const response = {
                success: true,
                error: "",
                data: bundle,
            };
            onSuccess(dispatch, response);
        } catch (e) {
            onError(dispatch, { error: e.message });
        }
        return;
    }

    if (isElectron) {
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

    // not more used
    // await axios
    //     .post("api/upload", formData, {})
    //     .then((res) => {
    //         onSuccess(dispatch, res.data);
    //     })
    //     .catch((err) => {
    //         onError(dispatch, err.response.data);
    //     });
};

/***
 * processes successful loading
 * @param dispatch
 * @param response
 */
const onSuccess = (dispatch, response) => {
    if (response.success) {
        const managerData = toManagerData(dispatch, response.data, "");
        dispatch(setLoadingBackupSuccess({ ...managerData }));

        fadeOutProgressBar(dispatch);
    } else {
        dispatch(setLoadingError(response));
    }
};

/***
 * processes loading error
 * @param dispatch
 * @param err
 */
const onError = (dispatch, err) => {
    dispatch(setLoadingError({ error: err.error }));
};

/***
 * returns final Manager data
 * @param dispatch
 * @param dataArray
 * @param filename
 * @returns {{lives: *[], managerTitle, programs: *[], performances: *[], synths: *[], managerFileExt: string}}
 */
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

/***
 * main file loader
 * @param files
 * @returns {(function(*, *): Promise<void>)|*}
 */
export const loadFiles = (files) => {
    return async (dispatch, getState) => {
        const { nordStore } = getState();
        const { isElectron, isServerless, production } = nordStore;

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
            await loadBackupFile(dispatch, files[0], isElectron, isServerless, production);
            return;
        }

        await loadIndividualFiles(dispatch, files, isElectron, isServerless, production);
    };
};
