const express = require("express");
const multer = require("multer");
const { loadNordFile } = require("./nord-service");

const api = express.Router();

const upload = multer({
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
            console.log(file.originalname);
            const data = loadNordFile(file.buffer, file.originalname);
            bundle.push(data);
        }
        const response = {
            success: true,
            error: "",
            data: bundle,
        };
        res.send(response);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = {
    api,
};
