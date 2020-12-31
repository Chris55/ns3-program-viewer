const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const api = require("./server/routes/api.routes");
const serveIndex = require("serve-index");

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cors());

app.use("/api", api);

app.use("/media", express.static("upload"), serveIndex("upload", { icons: true, view: "details" }));

//console.log("env: ", JSON.stringify(process.env, null, 2));

if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "client/build")));

    // Handle React routing, return all requests to React app
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"));
    });
}

// error handler must be the last on the stack
// all 4 parameters required, otherwise handler won't file.

app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    if (!err.statusCode) err.statusCode = 400;
    res.status(err.statusCode).send({
        success: false,
        error: err.message,
        data: {},
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
