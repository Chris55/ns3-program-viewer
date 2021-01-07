const { app, BrowserWindow, Menu, ipcMain, screen } = require('electron');
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require("fs");
const { loadNordFile } = require("./server/nord-service");

let mainWindow;

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        width: Math.round(width * 0.9),
        height: Math.round(height * 0.9),
        webPreferences: { devTools: isDev, nodeIntegration: true },
        icon: path.join(__dirname, 'assets/apple.png'),
        //titleBarStyle: "hidden"
    });
    mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);
    mainWindow.on("closed", () => (mainWindow = null));
    require('./mainmenu');
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    //if (process.platform !== "darwin") {
        app.quit();
    //}
});

app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on("Load", (event, args) => {
    console.log(args);

    try {
        const buffer = fs.readFileSync(args.path);
        const data = loadNordFile(buffer, args.name);
        event.reply("Data", {
            success: true,
            error: "",
            data: data,
        });
    } catch (e) {
        event.reply("Data", {
            success: false,
            error: e.message,
        });
    }
});
