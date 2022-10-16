import multer = require('multer');
import path from "path";
import moment from "moment";

const IMAGES_DEST = path.join(__dirname, `../../upload/images`);

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, IMAGES_DEST);
    },
    filename: (req, file, cb) => {
        cb(null, moment().format() + "-" + file.originalname);
    }
})

export const uploadImage = multer({ storage });

