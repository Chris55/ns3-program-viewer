const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    // Invoke Methods
    downloadFile: async (args) => {
        return await ipcRenderer.invoke('download-file', args);
    },
    // Send Methods
    //testSend: (args) => ipcRenderer.send('test-send', args),
    // Receive Methods
    //testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }
});
