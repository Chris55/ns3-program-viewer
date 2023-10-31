import { app, BrowserWindow, ipcMain, screen } from "electron";
import fs from "fs";
import isDev from "electron-is-dev";
import path from "path";
import log from "electron-log";
import autoUpdaterPkg from "electron-updater";
import { fileURLToPath } from "url";
import { initMenu } from "./menu.js";
import { loadNordFile } from "../server/nord-service.js";
import unzipper from "unzipper";

let mainWindow;
const { autoUpdater } = autoUpdaterPkg;

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = "info";
log.info("App starting...");

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

async function createWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    const preload = isDev ? path.join(__dirname, "preload.mjs") : path.join(__dirname, "preload.min.js");
    console.log("preload", preload);

    mainWindow = new BrowserWindow({
        width: Math.round(width * 0.9),
        height: Math.round(height * 0.9),
        webPreferences: {
            devTools: isDev,
            nodeIntegration: true,
            nodeIntegrationInWorker: false,
            nodeIntegrationInSubFrames: false,
            contextIsolation: true,
            enableRemoteModule: false,
            preload,
        },
    });

    mainWindow.loadURL(isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "index.html")}`);

    mainWindow.on("closed", () => (mainWindow = null));
    initMenu();

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
