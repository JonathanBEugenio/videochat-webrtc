const joi = require('joi');
const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const { loginController, registerController } = require('../controllers/auth');

const router = express.Router();

const loginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).max(12).required()
});
const registerSchema = joi.object({
    email: joi.string().email().required(),
    username: joi.string().min(3).max(12).required(),
    password: joi.string().min(6).max(12).required()   
});

router.post('/login', validator.body(loginSchema), loginController);
router.post('/register', validator.body(registerSchema), registerController);

module.exports = router;