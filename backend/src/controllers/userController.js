import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import passport from "passport";

import otpService from "../services/otpService.js";
import userService from "../services/userService.js";


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
    console.log("User:", username, email, password);
    // Find the user in the database
    const isExist = await userService.checkEmail(email);
    console.log(isExist);

    if (isExist) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const user = await userService.createUser({ email, username, password });

    res.status(201).json({ message: "User created successfully" });
    return user;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const postLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("User:", email, password);
    const currentUser = await userService.checkPassword(password, email);
    console.log(currentUser);
    if (currentUser === null) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const secret = "MyVerySecretKey";
    const token = jwt.sign(
      { userId: currentUser._id, email: currentUser.email },
      secret,
      { expiresIn: "12h" }
    );
    console.log(token,  currentUser._id, currentUser.username );
    return res.status(200).json({ token, username: currentUser.username, profilePicture: currentUser.profilePicture });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGoogle = passport.authenticate("google", {
  scope: ["profile", "email"],
});
const getGoogleCallback = passport.authenticate("google", {
  session: false,
  failureRedirect: "/",
});

const getGoogleCallbackJWT = (req, res) => {
  const token = jwt.sign(
    { userId: req.user._id, username: req.user.username },
    "secretKey"
  );
  return res.status(200).json({ token, userName: req.user.username });
};

const getSuccess = (req, res) => {
    const { token } = req.query;
    // Render a success page or send a response with the token
    res.json({ message: 'Authentication successful', token });
};

const getIsAuthenticated = (req, res) => {
    res.status(200).json({
      message: 'This is a protected endpoint',
      user: req.user,
    });
};

const handleForgotPassword = async (req, res) => {
    try {
      const { email } = req.body;
  
      if (!email) {
        return res.status(400).json({
          message: "Missing email",
          userEmail: "" 
        });
      }
  
      const user = await userService.checkUserEmail(email);
      if (!user) {
        return res.status(404).render("pages/forgot-password", {
          message: "User not found",
          userEmail: "" 
        });
      }
  
      const otp = otpService.generateOtp();
      await otpService.saveOtp(email, otp);
  
      const transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        logger: true,
        debug: true,
        secureConnection: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: true,
        },
      });
  
      const mailOptions = {
        from: "process.env.EMAIL_USER",
        to: email,
        subject: "Password Reset OTP",
        text: `Your OTP for password reset is ${otp}`,
      };
  
      await transporter.sendMail(mailOptions);
      
      return res.status(200).render("pages/change-password", {
        message: `OTP sent to your email: ${email}`, 
        userEmail: email 
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error from server",
        error: error.message,
        userEmail: "" 
      });
    }
  };
export default {
  getLogin,
  postSignup,
  postLogin,
  getGoogle,
  getGoogleCallback,
  getGoogleCallbackJWT,
  getSuccess,
  getIsAuthenticated
};
