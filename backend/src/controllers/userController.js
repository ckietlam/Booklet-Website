
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import passport from "passport";

import {EMAIL_USER, PASS_USER} from "../config.js";
import otpService from "../services/otpService.js";
import userService from "../services/userService.js";



const postSignup = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({
        message: "Missing required parameters",
      });
    }

    const isExist = await userService.checkEmail(email);

    if (isExist) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }
    const otp = otpService.generateOtp();
    const user = await userService.createUser({ email, username, password, otp });

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
    "MySuperSecretKey"
  );
  const script = `
      <script>
        window.opener.postMessage(
          ${JSON.stringify({ token: token, profilePicture: req.user.profilePicture, username: req.user.username })},
          "http://localhost:3000"
        );
        window.close();
      </script>
    `;
  console.log( token,req.user.profilePicture, req.user.username );
    res.send(script);
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
  
      const user = await userService.checkEmail(email);
      if (user === false) {
        return res.status(400).json({
          message: "This email is not registered",
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
          user: EMAIL_USER,
          pass: PASS_USER,
        },
        tls: {
          rejectUnauthorized: true,
        },
      });
  
      const mailOptions = {
        from: "EMAIL_USER",
        to: email,
        subject: "Password Reset OTP",
        text: `Your OTP for password reset is ${otp}`,
      };
  
      await transporter.sendMail(mailOptions);
      
      return res.status(200).json({
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

const handleResetPassword = async (req,res) => {
    try {
        const { email, otp, password } = req.body;
        if (!email || !otp || !password) {
        return res.status(400).json({
            message: "Missing required parameters",
        });
        }
        const checkUser = await userService.checkEmail(email);
        if (checkUser === false) {
        return res.status(400).json({
            message: "User not found",
        });
        }
        console.log("Email:", email, "OTP:", otp, "Password:", password);
        const user = await userService.checkOtp(email, otp);
        console.log("User:", user);
        if (user === null) {
        return res.status(400).json({
            message: "Invalid OTP",
        });
        }
        await userService.changePassword(email, password);

        return res.status(200).json({
        message: "Password updated successfully",
        });
    } catch (error) {
        return res.status(500).json({
        message: "Error from server",
        error: error.message,
        });
    }
    }
export default {
  postSignup,
  postLogin,
  getGoogle,
  getGoogleCallback,
  getGoogleCallbackJWT,
  getSuccess,
  getIsAuthenticated,
  handleForgotPassword,
  handleResetPassword

};
