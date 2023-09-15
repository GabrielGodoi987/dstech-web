const express = require('express');
const testedb = require('./db/models/index');

const usermessage = require('./db/models/usermessage');


const app = express();

app.use(express.json());


app.post('/usersmessage', async (req, res) => {
    const userData = req.body;
    const newUser = await usermessage.create({
        name: userData.name,
        email: userData.email,
        subject: userData.subject,
        content: userData.content
    })

    try {
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
                message: 'sorry our server is having some problems, wait a minute or tell us problem by sending an email to email@gmail.com'
            })
        }
    }
})


app.listen(3005, () => {
    console.log('your server is online')
})

