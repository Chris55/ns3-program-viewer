const { app, BrowserWindow, Menu, ipcMain, screen } = require("electron");
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const isDev = require("electron-is-dev");
const { promises: fs } = require("fs");
const { loadNordFile } = require("./server/nord-service");

let mainWindow;

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";
log.info("App starting...");

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // mainWindow = new BrowserWindow(
    //     {
    //         width: Math.round(width * 0.9),
    //         height: Math.round(height * 0.9),
    //         icon: path.join(__dirname, "assets/icons/app.png"),
    //     });

    mainWindow = new BrowserWindow({
        width: Math.round(width * 0.9),
        height: Math.round(height * 0.9),
        webPreferences: {
            devTools: isDev,
            nodeIntegration: false,
            nodeIntegrationInWorker: false,
            nodeIntegrationInSubFrames: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload: path.join(__dirname, "preload.js"),
        },
        //icon: path.join(__dirname, "assets/icons/app.png"),
        //titleBarStyle: "hidden"
    });

    mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`);

    mainWindow.on("closed", () => (mainWindow = null));
    require("./mainmenu");

    // Setting Window Icon - Asset file needs to be in the public/images folder.
    //mainWindow.setIcon(path.join(__dirname, 'images/appicon.ico'));

    // In development mode, if the window has loaded, then load the dev tools.
    if (isDev) {
        mainWindow.webContents.on("did-frame-finish-load", () => {
            mainWindow.webContents.openDevTools({ mode: "detach" });
        });
    }
}

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

// Setting the location for the userdata folder created by an Electron app.
// It default to the AppData folder if you don't set it.
// app.setPath(
//     'userData',
//     isDev
//         ? path.join(app.getAppPath(), 'userdata/') // In development it creates the userdata folder where package.json is
//         : path.join(process.resourcesPath, 'userdata/') // In production it creates userdata folder in the resources folder
// );

app.on("ready", async () => {
    await createWindow();
    await autoUpdater.checkForUpdatesAndNotify();
});

ipcMain.handle("download-files", async (event, args) => {
    try {
        const bundle = [];
        for(const file of args) {
            console.log(file.path);
            const buffer = await fs.readFile(file.path);
            const data = loadNordFile(buffer, file.name);
            bundle.push(data);
        }

        return {
            success: true,
            error: "",
            data: bundle,
        };
    } catch (e) {
        return {
            success: false,
            error: e.message,
        };
    }
});
