const express = require('express')
const router = express.Router();
const { registerUser, loginUser, getMyUser } =require('./user.controller')
const { protect } = require('../middleware/authenticateMiddleware')
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMyUser)

module.exports = router