import multer, { diskStorage } from 'multer';
const path = require('path');


module.exports = (
    multer({

        upload: multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, '.Src/Images/');
            },
            filename: (req, file, cb) => {
                cb(null, path.join(__dirname + file.originalname));
            },
        }),
        fileFilter: (req, file, cb) => {
            const pngImages = ['img/png'].find(pngImages => pngImages == AllowImage.mimetype);

            if (!pngImages) {
                return cb(null, false)
            } else {
                return cb(null, true);
            }
        }
    })
);





// const storage = multer({
//     upload: upload,

//     fileFilter: (req, file, cb) => {

//     }
// });