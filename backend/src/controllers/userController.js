import express from "express";
import jwt from "jsonwebtoken";

import userService from "../services/userService.js";

const app = express();

const getLogin = (req, res) => {
    res.render("Login");
};

const postSignup = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        
        if (!username || !password || !email) {
            return res.status(400).json({
              message: "Missing required parameters",
            });
        }
        console.log('User:', username, email, password);
        // Find the user in the database
        const isExist = await userService.checkEmail(email);
        console.log(isExist);

        if (isExist) {
        return res.status(400).json({
            message: "Email already exists",
        });
        }
        
        const user = await userService.createUser({ email, username, password });

        res.status(201).json({ message: 'User created successfully' });
        return user;
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

const postLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        
        const currentUser = await userService.checkPassword(password, email);

        if (currentUser === null) {
            return res.status(401).json({error: 'Invalid email or password'});
        }
        console.log('Current User:', currentUser);

        const secret = 'yourSecretKey';
        const token = jwt.sign({userId: currentUser._id, email: currentUser.email}, secret, { expiresIn: '1h' });
        return res.status(200).json({token, userId: currentUser._id, username: currentUser.username});

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


export default {
    getLogin,
    postSignup,
    postLogin,
}