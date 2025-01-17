import otpGenerator from 'otp-generator';

import User from '../models/User.js';

const generateOtp = () => {
    return otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false, digits: true });
}

const saveOtp = async (email, otp) => {
    const user = await User.findOne({ email: email });
    user.otp = otp;
    await user.save();
};

export default {
    generateOtp,
    saveOtp,
    
};