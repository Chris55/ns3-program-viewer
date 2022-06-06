const path = require("path");

module.exports = [
    {
        mode: "production",
        entry: "./src/electron/main.js",
        output: {
            path: path.join(__dirname, "build"),
            filename: "main.min.js"
        },
        target: "electron-main",
    },
    {
        mode: "production",
        entry: "./src/electron/preload.js",
        target: "electron-preload",
        output: {
            path: path.join(__dirname, "build"),
            filename: "preload.min.js"
        }
    }
];
