const express = require('express');
const router = express.Router();
const {Login,Register,ForgetPassword,ResetPassword, Verify , Logout} = require('../Controllers/AuthController');



router.post('/login',Login)
router.post('/register',Register)
router.get('/user/:id/confirm/:token',Verify)
router.post('/forgetpassword',ForgetPassword)
router.post('/resetpassword/:token',ResetPassword)
// Logout
router.get('/logout', Logout)

module.exports = router 