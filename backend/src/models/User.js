// Change the export to the ES module style
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String },
  googleId: { type: String },
  otp: { type: Number}, 
  profilePicture: { type: String },
});

const User = mongoose.model('User', userSchema);
export default User;
