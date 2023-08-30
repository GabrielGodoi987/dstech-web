const express = require('express');
const app = express();


app.get("/Images", () => {
    try{
        res.status(200).json({
            msg: "teste servidor node"
        });
    }catch(err){
        res.status(500).json({
            mag: "o servidor caiu"
        })
    }
})



app.get(process.env.PORT, () => {
    console.log("Servidor node funcionando")
})