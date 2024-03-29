const { ipcRenderer, contextBridge, shell } = require("electron");

contextBridge.exposeInMainWorld("electron", {
    // Invoke Methods
    downloadFiles: async (args) => {
        return await ipcRenderer.invoke("download-files", args);
    },
    downloadBackup: async (path, supportedProgramTypes) => {
        return await ipcRenderer.invoke("download-backup", path, supportedProgramTypes);
    },
    openExternal: async (url) => {
        await shell.openExternal(url);
    },
    // Send Methods
    //testSend: (args) => ipcRenderer.send('test-send', args),
    // Receive Methods
    //testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }
});
