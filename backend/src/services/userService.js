import bcrypt from "bcryptjs";

import {User} from "../models/Index.js";

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

const createUser = async ({ email, username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
}

export default {
    checkEmail,
    createUser,
    checkPassword,
};