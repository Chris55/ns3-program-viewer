const express = require("express");
const multer = require("multer");
const fs = require("fs").promises;
const { loadNordFile } = require("./nord-service");

const api = express.Router();
const DIR = "./upload/";

const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, DIR);
    },
    filename: (_req, file, cb) => {
        let originalName = file.originalname;

        // removes NUF header
        const regxForum = new RegExp(/^\d{13}-/);
        if (regxForum.test(originalName)) {
            originalName = originalName.substr(14);
        }

        const fileName = originalName.toLowerCase().split(" ").join("-");
        cb(null, Date.now() + "-" + fileName);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (_req, file, cb) => {
        if (file.mimetype === "application/octet-stream" || file.mimetype === "application/x-nord") {
            cb(null, true);
        } else {
            cb(null, false);
        }
    },
});

// max is 400 program + 400 synth files

api.post("/upload", upload.array("nordFiles", 1000), async (req, res, next) => {
    if (!req.files) {
        next(Error("Unsupported file"));
        return;
    }
    if (req.files.length === 0) {
        next(Error("No file selected!"));
        return;
    }

    try {
        const bundle = [];

        for (const file of req.files) {
            console.log(file.path);

            const buffer = await fs.readFile(file.path);

            if (process.env.NODE_ENV !== "production") {
                // in dev cleanup all files
                // in prod: no cleanup required heroku free dyno restart every 24h and cleanup everything
                await fs.unlink(file.path).catch(next);
            }

            const data = loadNordFile(buffer, file.originalname);
            bundle.push(data);
        }
        const response = {
            success: true,
            error: "",
            data: bundle,
        };
        res.send(response);
    } catch (err) {
        console.error(err, err.stack);
        next(err);
    }
});

module.exports = {
    api,
}
