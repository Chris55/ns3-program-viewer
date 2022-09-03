const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = [
    {
        mode: "production",
        entry: "./src/server/server.js",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "server.min.js",
        },
        target: "node",
        externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
        externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    },
];
