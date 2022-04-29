const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const User = require('../models/user.model')

//POST /api/users
//ACCESS PUBLIC
const registerUser = asyncHandler(async (req,res) =>{
    const {name, email, password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Please add all fields')
    }
    
    //Check is user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    

    //Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invaild user data')
    }

})




//POST /api/users/login
//ACCESS PUBLIC
const loginUser = asyncHandler(async (req,res) =>{
    const {email,password}= req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id:user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invaild credentials')
    }
})



//GET /api/users/me
//ACCESS PRIVATE
const getMyUser = asyncHandler(async (req,res) =>{
    res.status(200).json(req.user)
})


//Generate JWT
const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn:'30d',
    })
}
module.exports = {
    registerUser,
    loginUser,
    getMyUser
}