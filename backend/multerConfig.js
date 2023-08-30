const { error } = require('console');
const multer = require('multer');
const path = require('path');



// diskstorage função do multer para que possamos nomear e destinar pra onde vão as imagens da api para depois chamarmos elas com banco de dados usando uma API
const ImageUpload = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './Src/Images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: ImageUpload,
    fileFilter: (req, file, cb) => {
        const ImgExtention = ['image/png'].find(ImageUpload => ImageUpload == file.mimetype);
        
        if(ImgExtention){
            return cb(null, true);
        }else{
            return cb(new Error("a Imagem inserida não é válida por favor tente novamente"));
        }
    }
});

module.exports = { upload }
