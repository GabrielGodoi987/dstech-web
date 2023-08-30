const express = require('express');
// importanto MulterConfig para fazer o upload de imagens de imagens
const ImagesUpload = require("./multerConfig.js");
const app = express();

app.post("/image/upload", ImagesUpload.single('Image'), (req, res) => {

    try {
        res.status(200).json({
            error: false,
            msg: 'upload realizado com sucesso',
        });
    } catch (error) {
        res.status(404).json({
            error: true,
            msg: 'erro ao fazer upload de imagens',
        });
    }

});


app.listen(3005, () => {
    console.log("Servidor node funcionando");
});