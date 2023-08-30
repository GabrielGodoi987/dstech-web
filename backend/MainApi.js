const express = require('express');
// importanto MulterConfig para fazer o upload de imagens de imagens
const ImagesUpload = require("./multerConfig.js");
const app = express();

app.post("/image/upload",ImagesUpload.single('Image') ,(req, res) => {

    try {
        res.status(200).json({
            error: false,
            msg: 'upload realizado com sucesso',
        })
    } catch (error) {
        
    }

});


app.listen(3005, () => {
    console.log("Servidor node funcionando");
});