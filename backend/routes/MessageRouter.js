const express = require('express');
const Messages = require("../controllers/MessageController");
const router = express.Router();

router.post('/', Messages.createMessage);

router.get('/ListUsers', Messages.ListUsers);


module.exports = { router }