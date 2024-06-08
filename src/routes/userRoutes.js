const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

// Routes to invoke user controller actions

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
