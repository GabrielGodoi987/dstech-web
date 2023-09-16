const testedb = require('../db/models/index');
const cors = require('cors');

cors();

async function createMessage(req, res) {
    try {
        var id =  Math.floor(Math.random() * 100);
        const userData = req.body;
        const newUser = await testedb.UserMessage.create({
            id: id.toFixed(0),
            name: userData.name,
            email: userData.email,
            subject: userData.subject,
            content: userData.content,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })
        res.status(200).json({
            error: false,
            newUser
        })
    } catch (error) {
        console.error(error); // Log the error for debugging purposes

        if (res.statusCode == 400) {
            // Handle validation errors (e.g., invalid input data)
            res.status(400).json({
                error: true,
                statusCode: 400,
                message: 'Validation error: Please check your input data.'
            });
        } else {
            // Handle other unexpected errors
            res.status(500).json({
                error: true,
                statusCode: 500,
                message: `Internal server error: ${error.message}`
            });
        }
    }
}

async function ListUsers(req, res) {
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
}


module.exports = { createMessage, ListUsers }