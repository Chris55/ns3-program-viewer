const path = require("path");

module.exports = [
    {
        entry: "./src/electron/main.js",
        mode: "production",
        output: {
            filename: "main.min.js",
            path: path.join(__dirname, "build"),
        },
        target: "electron-main",
    },
    {
        entry: "./src/electron/preload.mjs",
        mode: "production",
        output: {
            filename: "preload.min.js",
            path: path.join(__dirname, "build"),
        },
        target: "electron-preload",
    },
];
