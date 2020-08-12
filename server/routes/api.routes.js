let express = require('express'),
    multer = require('multer'),
    //uuidv4 = require('uuid/v4'),
    router = express.Router();
const {loadNs3fFile} = require("../nord-service");
const fs = require("fs").promises;

const DIR = './upload/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, Date.now() + '-' + fileName)
    }
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
    }
});


router.post('/upload', upload.single('nordFile'), async (req, res, next) => {

    if (!req.file) {
        next(Error("Unsupported file"));
    }
    console.log(req.file.originalname);

    const result = await loadNs3fFile(req.file.path, req.file.originalname).catch (err => next(err));

    await fs.unlink(req.file.path).catch (err => next(err));

    res.send(result);
})


module.exports = router;
