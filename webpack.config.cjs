const path = require("path");
//const nodeExternals = require("webpack-node-externals");

module.exports = [
    {
        entry: "./src/server/server.js",
        externalsPresets: { node: true },
        mode: "production",
        output: {
            filename: "server.min.js",
            path: path.resolve(__dirname, "build"),
        },
        target: "node", // in order to ignore built-in modules like path, fs, etc.
        //externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
        // externals: {
        //     express: 'require("express")',
        // },
    },
];
