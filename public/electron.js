const { app, BrowserWindow, Menu, ipcMain, screen } = require("electron");
const log = require("electron-log");
const { autoUpdater } = require("electron-updater");
const path = require("path");
const isDev = require("electron-is-dev");
const { loadNordFile } = require("./server/nord-service");
const unzipper = require("unzipper");
const fs = require("fs");

let mainWindow;

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";
log.info("App starting...");

function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

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
    app.quit();
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

/***
 * returns JSON data of all Nord files
 */
ipcMain.handle("download-files", async (_event, files) => {
    try {
        const bundle = [];
        for (const file of files) {
            const buffer = await fs.promises.readFile(file.path);
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

/***
 * returns JSON data of all supported Nord file included in the zip (backup or bundle file)
 */
ipcMain.handle("download-backup", async (_event, file, supportedProgramTypes) => {
    try {
        const bundle = [];

        const directory = await unzipper.Open.file(file);

        const task = async (entry) => {
            const fileName = path.basename(entry.path);
            const ext = path.extname(entry.path);
            if (entry.type === "File" && supportedProgramTypes.includes(ext)) {
                const buffer = await entry.buffer();
                const data = loadNordFile(buffer, fileName);
                bundle.push(data);
            }
        };

        await Promise.all(directory.files.map((x) => task(x)));

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
