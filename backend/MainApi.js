const express = require('express');
// importanto MulterConfig para fazer o upload de imagens de imagens
const ImagesUpload = require("./multerConfig.js");
const app = express();

app.post("/images", ImagesUpload.upload.single("Image"), (req, res) => {
    try {
      return res.status(200).json({
        error: false,
        msg: 'teste',
      })
    } catch (error) {
       return res.status(400 || 500).json({
        error: true,
        msg: "error"
       })
    }
});


app.listen(3005, () => {
    console.log("Servidor node funcionando");
});