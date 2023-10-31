import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { api } from "./api.js";
import { apiLimiter, appHelmet, appLimiter } from "./middleware.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    }),
);

app.use(appHelmet);

app.use(cors());

app.use("/api", apiLimiter, api);

if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(__dirname));

    // Handle React routing, return all requests to React app
    app.get("*", appLimiter, (_req, res) => {
        res.sendFile(path.join(__dirname, "index.html"));
    });
}

// error handler must be the last on the stack

app.use((err, _req, res, next) => {
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
