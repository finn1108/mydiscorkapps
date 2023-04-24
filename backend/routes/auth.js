const express = require('express')
const Joi = require('joi')
const validator = require('express-joi-validation').createValidator({})


const { login, register } = require('../controllers/auth/authController')
const { verifyToken } = require('../middleware/auth')


const router = express.Router()


const registerSchema = Joi.object({
    username: Joi.string().min(3).max(15).required(),
    password: Joi.string().min(5).max(15).required(),
    email: Joi.string().email().required()
})

const loginSchema = Joi.object({
    password: Joi.string().min(5).max(15).required(),
    email: Joi.string().email().required()
})

router.post('/register', validator.body(registerSchema), register)
router.post('/login', validator.body(loginSchema), login)
router.get('/test', verifyToken, (req, res) => {
    res.send("request passed")
})
module.exports = router