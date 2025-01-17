import bcrypt from "bcryptjs";

import User from "../models/User.js";

import otpService from "./otpService.js";
const checkEmail = async (EMAIL) => {
    const checkUser = await User.findOne({ email: EMAIL });
    if (checkUser) {
        return true;
    }
    return false;
}

const checkPassword = async (PASSWORD, EMAIL ) => {
    console.log('Searching for:', EMAIL, PASSWORD);
    const currentUser = await User.findOne({ email: EMAIL });
    const users = await User.find(); // Fetch all users
    console.log("List of all users in the database (emails):", users.map(user => user.email));
    if (!currentUser) {
        console.log('No user found');
        return null; 
    }
    const checkUser = bcrypt.compareSync(PASSWORD, currentUser.password);
    console.log('Check user:', checkUser);
    console.log('Check user:', checkUser);
    if (!checkUser) {
        return null;
    }
    
    return currentUser;
}

const createUser = async ({ email, username, password, otp }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword, otp, profilePicture: "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-1697898655.jpg" });
    await newUser.save();
}

const checkOtp = async (EMAIL, OTP) => {
    const user = await User.findOne({ email: EMAIL });
    if (user.otp === OTP) {
        return user;
    }
    return null;
}

const changePassword = async (EMAIL, PASSWORD) => {
    const hashedPassword = await bcrypt.hash(PASSWORD, 10);
    const user = await User.findOne({ email: EMAIL });
    user.password = hashedPassword;
    user.otp = otpService.generateOtp();
    await user.save();
}

export default {
    checkEmail,
    createUser,
    checkPassword,
    checkOtp,
    changePassword
};