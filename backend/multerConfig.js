const { error } = require('console');
const { json } = require('express');
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
        console.log(file.mimetype);
        const ImgExtention = ['image/PNG'].find(ImageUpload => ImageUpload == file.mimetype);
        
        if(ImgExtention){
            return cb(null, true);
        }else{
            return cb(new Error("arquivo inválido"));
        }
    }
});

module.exports = { upload }
