let express = require("express"),
    multer = require("multer"),
    router = express.Router();
const { loadNordFile } = require("../nord-service");
const fs = require("fs").promises;

const DIR = "./upload/";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(" ").join("-");
        cb(null, Date.now() + "-" + fileName);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "application/octet-stream" || file.mimetype === "application/x-nord") {
            cb(null, true);
        } else {
            cb(null, false);
            //return cb(new Error('file is not supported'));
        }
    },
});

router.post("/upload", upload.single("nordFile"), async (req, res, next) => {
    if (!req.file) {
        next(Error("Unsupported file"));
        return;
    }
    console.log(req.file.path);

    const buffer = await fs.readFile(req.file.path).catch(next);

    if (process.env.NODE_ENV !== "production") {
        // in dev cleanup all files
        // in prod: no cleanup required heroku free dyno restart every 24h and cleanup everything
        // this allows to monitor in /media the last 24h site usage
        await fs.unlink(req.file.path).catch(next);
    }

    try {

        const response = {
            success: true,
            error: "",
            data: loadNordFile(buffer, req.file.originalname),
        };
        res.send(response);

    } catch (err) {
        console.error(err, err.stack);
        next(err);
    }
});

module.exports = router;
