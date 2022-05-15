const { Menu, app } = require("electron");
const isDev = require("electron-is-dev");

const template = [];

template.push({
    label: "Edit",
    submenu: [
        {
            role: "undo",
        },
        {
            role: "redo",
        },
        {
            type: "separator",
        },
        {
            role: "cut",
        },
        {
            role: "copy",
        },
        {
            role: "paste",
        },
        {
            role: "pasteandmatchstyle",
        },
        {
            role: "delete",
        },
        {
            role: "selectall",
        },
    ],
});

if (isDev) {
    template.push({
        label: "View",
        submenu: [
            {
                label: "Reload",
                accelerator: "CmdOrCtrl+R",
                click(_item, focusedWindow) {
                    if (focusedWindow) focusedWindow.reload();
                },
            },
            {
                label: "Go Back",
                accelerator: "",
                click(_item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.goBack();
                },
            },
            {
                label: "Go Forward",
                accelerator: "",
                click(_item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.goForward();
                },
            },
            {
                label: "Toggle Developer Tools",
                accelerator: process.platform === "darwin" ? "Alt+Command+I" : "Ctrl+Shift+I",
                click(_item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.toggleDevTools();
                },
            },
            {
                type: "separator",
            },
            {
                role: "resetzoom",
            },
            {
                role: "zoomin",
            },
            {
                role: "zoomout",
            },
            {
                type: "separator",
            },
            {
                role: "togglefullscreen",
            },
        ],
    });
} else {
    template.push({
        label: "View",
        submenu: [
            {
                label: "Reload",
                accelerator: "CmdOrCtrl+R",
                click(_item, focusedWindow) {
                    if (focusedWindow) focusedWindow.reload();
                },
            },
            {
                label: "Go Back",
                accelerator: "",
                click(_item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.goBack();
                },
            },
            {
                label: "Go Forward",
                accelerator: "",
                click(_item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.goForward();
                },
            },
            {
                type: "separator",
            },
            {
                role: "resetzoom",
            },
            {
                role: "zoomin",
            },
            {
                role: "zoomout",
            },
            {
                type: "separator",
            },
            {
                role: "togglefullscreen",
            },
        ],
    });
}

template.push({
    role: "window",
    submenu: [
        {
            role: "minimize",
        },
        {
            role: "close",
        },
    ],
});

const helpSubMenu = [];

if (process.platform !== "darwin") {
    helpSubMenu.push({
        role: "about",
        label: "About",
    });
}
helpSubMenu.push({
    label: "Learn More",
    click() {
        require("electron").shell.openExternal(
            "https://www.norduserforum.com/nord-stage-3-programs-ns3p-ns3pb-files-f32/ns3-program-viewer-t19939.html"
        );
    },
});

template.push({
    role: "help",
    submenu: helpSubMenu,
});

if (process.platform === "darwin") {
    const name = app.getName();
    template.unshift({
        label: name,
        submenu: [
            {
                role: "about",
                label: "About",
            },
            {
                type: "separator",
            },
            {
                role: "services",
                submenu: [],
            },
            {
                type: "separator",
            },
            {
                role: "hide",
                label: "Hide",
            },
            {
                role: "hideothers",
                label: "Hide Other",
            },
            {
                role: "unhide",
            },
            {
                type: "separator",
            },
            {
                role: "quit",
                label: "Quit",
            },
        ],
    });
    // Edit menu.
    template[1].submenu.push(
        {
            type: "separator",
        },
        {
            label: "Speech",
            submenu: [
                {
                    role: "startspeaking",
                },
                {
                    role: "stopspeaking",
                },
            ],
        }
    );
    // Window menu.
    template[3].submenu = [
        {
            label: "Close",
            accelerator: "CmdOrCtrl+W",
            role: "close",
        },
        {
            label: "Minimize",
            accelerator: "CmdOrCtrl+M",
            role: "minimize",
        },
        {
            label: "Zoom",
            role: "zoom",
        },
        {
            type: "separator",
        },
        {
            label: "Bring All to Front",
            role: "front",
        },
    ];
}

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
