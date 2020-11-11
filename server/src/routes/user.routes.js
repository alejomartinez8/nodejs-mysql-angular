const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', userController.login);

module.exports = router;
