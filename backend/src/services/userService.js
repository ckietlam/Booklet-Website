import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { cloudinary } from "../config.js";
import User from "../models/User.js";

import otpService from "./otpService.js";

const checkEmail = async (EMAIL) => {
  const checkUser = await User.findOne({ email: EMAIL });
  if (checkUser) {
    return true;
  }
  return false;
};

const checkPassword = async (PASSWORD, EMAIL) => {
  console.log("Searching for:", EMAIL, PASSWORD);
  const currentUser = await User.findOne({ email: EMAIL });
  const users = await User.find(); // Fetch all users
  console.log(
    "List of all users in the database (emails):",
    users.map((user) => user.email)
  );
  if (!currentUser) {
    console.log("No user found");
    return null;
  }
  const checkUser = bcrypt.compareSync(PASSWORD, currentUser.password);
  console.log("Check user:", checkUser);
  console.log("Check user:", checkUser);
  if (!checkUser) {
    return null;
  }

  return currentUser;
};

const createUser = async ({ email, username, password, otp }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    username,
    password: hashedPassword,
    otp,
    profilePicture:
      "https://www.shutterstock.com/image-vector/user-icon-trendy-flat-style-600nw-1697898655.jpg",
  });
  await newUser.save();
};

const checkOtp = async (EMAIL, OTP) => {
  const user = await User.findOne({ email: EMAIL });
  if (user.otp === OTP) {
    return user;
  }
  return null;
};

const changePassword = async (EMAIL, PASSWORD) => {
  const hashedPassword = await bcrypt.hash(PASSWORD, 10);
  const user = await User.findOne({ email: EMAIL });
  user.password = hashedPassword;
  user.otp = otpService.generateOtp();
  await user.save();
};
const changeProfile = async (
  USER_ID,
  EMAIL,
  USERNAME,
  PASSWORD,
  PROFILE_PICTURE
) => {
  try {
    const user = await User.findOne({ _id: USER_ID });
    if (!user) {
      console.log("User not found");
      return;
    }
    console.log("User:", user);
    if (EMAIL) {
      user.email = EMAIL;
    }
    if (USERNAME) {
      user.username = USERNAME;
    }
    if (PASSWORD) {
      const hashedPassword = await bcrypt.hash(PASSWORD, 10);
      user.password = hashedPassword;
    }
    if (PROFILE_PICTURE) {
      const uploadResult = await cloudinary.uploader.upload(PROFILE_PICTURE, {
        public_id: "profile_pictures/" + user._id,
      });
      console.log("Upload result:", uploadResult);
      user.profilePicture = PROFILE_PICTURE;
    }
    await user.save();
  } catch (error) {
    console.log("Error:", error);
  }
};

const verifyToken = (token) => {
  try {
    const secret = "MyVerySecretKey";
    const decoded = jwt.verify(token, secret);
    console.log("Decoded Token:", decoded);
    return decoded.userId;
  } catch (error) {
    console.error("Invalid token:", error.message);
    return null;
  }
};

const findUser = async (USER_ID) => {
  try {
    const user = await User.findOne({ _id: USER_ID });
    return user;
    }
    catch (error) {
    console.log("Error:", error);}
};
export default {
  checkEmail,
  createUser,
  checkPassword,
  checkOtp,
  changePassword,
  changeProfile,
  verifyToken,
  findUser
};
