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

router.post("/upload", upload.array("nordFiles", 100), async (req, res, next) => {
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

        for(const file of req.files) {

            console.log(file.path);

            const buffer = await fs.readFile(file.path);

            if (process.env.NODE_ENV !== "production") {
                // in dev cleanup all files
                // in prod: no cleanup required heroku free dyno restart every 24h and cleanup everything
                // this allows to monitor in /media the last 24h site usage
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

module.exports = router;
