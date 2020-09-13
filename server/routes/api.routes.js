let express = require("express"),
    multer = require("multer"),
    router = express.Router();
const { loadNs3fFile } = require("../nord-service");
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
    console.log(req.file.originalname);

    const buffer = await fs.readFile(req.file.path).catch(next);
    await fs.unlink(req.file.path).catch(next);

    try {

        const response = {
            success: true,
            error: "",
            data: loadNs3fFile(buffer, req.file.originalname),
        };
        res.send(response);

    } catch (err) {
        console.error(err, err.stack);
        next(err);
    }
});

module.exports = router;
