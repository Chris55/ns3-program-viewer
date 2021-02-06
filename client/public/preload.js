const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // Invoke Methods
    downloadFiles: async (args) => {
        return await ipcRenderer.invoke('download-files', args);
    },
    // Send Methods
    //testSend: (args) => ipcRenderer.send('test-send', args),
    // Receive Methods
    //testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }
});
