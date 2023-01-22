const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../Models/UserModel')
const cookie = require('cookie-parser')
// const User = db.user;
const {resetPasswordEmail , sendConfirmationEmail} = require('../Utils/SendEmail')  






const Login = asyncHandler (async (req, res) => {
    // console.log(req.body)          
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (!password || !email) {
        res.status(400)
            throw new Error('User not exist')
        
    }
    // console.log(user)
    if(user  && (await bcrypt.compare(password, user.password)) ){
        const token = generateToken(user._id)
        
        res.cookie('token', token, {
            expires: new Date(Date.now() + 900000),
            httpOnly: true
        })

        
        if (user.verified == true) {
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email ,
                token: generateToken(user._id),
                verified: user.verified ,
                password: user.password ,
            })
        } else {
            res.status(401)
            throw new Error('User not verified')
        }

    }
    else{
        res.status(402)
        throw new Error('Invalid email or password')
    }
}) 

// method : post
// url : /api/auth/register
// access : public

const Register =  asyncHandler (async(req,res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error("Please add a text field")
    } 
    // check if user exist 
    const user = await User.findOne({email})
    if(user){
        res.status(400)
        throw new Error("User already exist")
    } 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)
    // create user
    const token = generateToken(name) 
    const newUser = await User.create({
        name,
        email,
        password: hashPassword ,
        token,
        roles: '63569e7ab1709dcb67ce8baa' // client
    })
    if(newUser){
        if (newUser.verified == false) { 
            sendConfirmationEmail(  
                newUser.name, 
                newUser.email,
                newUser.token ,
                newUser.id  
         ); 
            return res.status(200).send({
              message: "Pending Account. Please Verify Your Email!",
            });
          }
        
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
})
// method : post
// url : /api/auth/
// access : public
const ForgetPassword = asyncHandler(async (req,res) => {
    const {email} = req.body
    console.log(req.body)
    if(!email ){
        res.status(400)
        throw new Error("Please add a text field")
    } 
    const user = await User.findOne({email})
    if(user){
        const token = generateToken(user._id)
        user.token = token
        user.save()
        await  resetPasswordEmail(user.name, user.email , user.token)
        

    res.status(200).send('plaise check your email for reset your password of email : '+ req.body.email)
    } else {
        res.status(402)
        throw new Error("Invalid email")
    } 
}) 

// method : post
// url : /api/auth/login
// access : public
const ResetPassword = asyncHandler(async (req,res) => {
    const token = req.params.token
    const {password , password2} = req.body
    if(!password || !password2){
        res.status(400)
        throw new Error("Please add a text field")
    }
    if(password != password2){
        res.status(400)
        throw new Error("password not match")
    }
    const user = await User.findOne({token})
    if(user){
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        user.password = hashPassword
        user.save()
        res.status(200).send('your password is reset')
    }else{
        res.status(400).send('token not valid') 
    }


    res.status(200).send('this a reset Password function of'+ req.params.token)
}) 
const Verify = async  (req,res) => {
    const token = req.params.token
    const id = req.params.id
    const user = await User.findById(id) 
    if(user.verified == false  && user.token == token){
        user.verified = true
        user.save()
        // res.status(200).send('your account is verified')
        return res.redirect("http://localhost:3000/")
    }else{
        res.status(400).send('token not valid')
    }
    
} 
// method : post
// url : /api/auth/register
// access : private

// method : post
// url : /api/user/manager
// access : private

// Logout
const Logout = async (req,res) => {
    //  clear cookie
    res.clearCookie('token')
    res.status(200).send('this a logout function')
}

// generte jwt token
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE
    })
}


module.exports = {
    Login,
    Register,
    ForgetPassword,
    ResetPassword,
    Verify ,
    Logout
}
    