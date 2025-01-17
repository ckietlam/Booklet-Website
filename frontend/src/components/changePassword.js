import React, { useState } from "react";
import { resetPassword } from "../utils/api";

const ChangePassword = ({ isOpen, close, switchToSignIn}) => {
  const [email] = useState(localStorage.getItem("email") || "");
  const [OTP, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  if (!isOpen) return null;

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    setError(null);
    setMessage(null);
    try {
      await resetPassword(email, OTP, password);
      setMessage("Your password has been successfully reset! Wait for 5 seconds before redirecting to the sign page.");

      // Wait for 5 seconds before reloading
      setTimeout(() => {
        switchToSignIn();
      }, 5000);
    } catch (err) {
      console.error("Password reset error:", err);
      setError(err.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue-900 text-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Reset Password</h2>
          <button
            onClick={close}
            className="text-white text-2xl"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <form className="mt-4" onSubmit={handleChangePassword}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {message && <p className="text-green-500 mb-4">{message}</p>}

          <label htmlFor="otp" className="block mb-2">OTP</label>
          <input
            id="otp"
            type="text"
            className="w-full p-2 mb-4 text-gray-800"
            placeholder="Enter your OTP"
            value={OTP}
            onChange={(e) => setOTP(e.target.value)}
          />

          <label htmlFor="password" className="block mb-2">Password</label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="w-full p-2 mb-4 text-gray-800"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/3 transform -translate-y-1/2 text-gray-800"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <label htmlFor="confirm-password" className="block mb-2">Confirm Password</label>
          <div className="relative">
            <input
              id="confirm-password"
              type={showPassword ? "text" : "password"}
              className="w-full p-2 mb-4 text-gray-800"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
