const multer = require('multer');
const path = require('path');


module.exports = (
    multer({

        upload: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, '.Src/Images/');
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + path.extname(file.originalname));
            },
        }),
        fileFilter: (req, file, cb) => {
            const pngImages = ['img/png'].find(pngImages => pngImages === file.mimetype);

            if (!pngImages) {
                return cb(null, false)
            } else {
                return cb(null, true);
            }
        }
    })
);
