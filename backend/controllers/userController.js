import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import userModel from "../models/userModel.js"

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

// route for user login
const loginUser = async (req, res) => {
        try {
            const {email, password} = req.body
            const user = await userModel.findOne({email})
            if (!user) {
                return res.json({success: false, message: "User does not exists"})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if (isMatch) {
                const token = createToken(user._id)
                res.json({success: true, token: token})
            } else {
                res.json({success: false, message: 'invalid credentials'})
            }

        } catch(error) {
            console.log(error)
        res.json({success: false, message: error.message})
        }
}

// route for user registration
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body

        // checking user already exists
        const exists = await userModel.findOne({email})

        if (exists) {
            return res.status(400).json({error: 'User already exists'})
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "please enter a valid email"})
        }
        if (password.length < 8) {
            return res.json({success: false, message: "please enter a strong password"})
        }

        // hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // creating new user
        const newUser = new userModel({name, email, password: hashedPassword})

        // saving user to database
        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({success: true, token, message: "user registered successfully"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// route for admin login
const adminLogin = async (req, res) => {
    try {
        const {email, password} = req.body

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success: true, token})
        } else {
            res.json({success: false, message: 'invalid credentials'})
        }
    } catch(error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { registerUser, loginUser, adminLogin }
