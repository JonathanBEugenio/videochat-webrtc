const express = require('express');
const { loginController, registerController } = require('../controllers/auth');

const router = express.Router();

router.post('/register', loginController);
router.post('/login', registerController);

module.exports = router;