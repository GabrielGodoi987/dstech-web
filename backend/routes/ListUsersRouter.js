const express = require('express');
const Messages = require("../controllers/MessageController");
const router = express.Router();

router.get('/ListUsers', Messages.ListUsers);


module.exports = { router }