const express = require('express');
const testedb = require('./db/models/index');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(bodyParser.json());


app.post('/usersmessage', async (req, res) => {
    let id = 1;
    try {
        const userData = req.body;
        const newUser = await testedb.UserMessage.create({
            id: id++,
            name: userData.name,
            email: userData.email,
            subject: userData.subject,
            content: userData.content,
            createAt: Date.now(),
            updatedAt: Date.now()
        })
        res.status(200).json({
            error: false,
            newUser
        })
    } catch (error) {
        if (res.status(400)) {
            res.json({
                error: true,
                TypeError: 400,
                message: 'you must have made a mistake, please try again and pay attention to the entries you need to enter the data, thank you'
            })
        } else if (res.status(500)) {
            res.json({
                error: true,
                TypeError: 500,
                message: `sorry our server is having some problems, wait a minute or tell us problem by sending an email to email@gmail.com ${error}`
            })
        }
    }

})


app.get('/teste', (req, res) => {
 
    const teste = req.body;

   res.json({
      name: teste.name,
      email: teste.email,
      subject: teste.subject,
      content: teste.content
   });

   
})



app.get('/ListData', async (req, res) => {
    try {
        const listUser = await testedb.UserMessage.findAll({
            attributes: ['name', 'email', 'content']
        });

        res.status(200).json({
            listUser
        })
    } catch (error) {
        res.status(500).json({
            error: true,
            msg: "there's an error in your server"
        })
    }
})


app.listen(3085, () => {
    console.log('your server is online');
})

