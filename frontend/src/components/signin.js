import React, { useState } from 'react';
import { login, googleAuth } from "../utils/api"; // Import googleAuth correctly
import { useNavigate } from "react-router-dom";

const SignIn = ({ isOpen, close, switchToSignUp }) => {
  const [email, setEmail] = useState(""); // Quản lý trạng thái cho email
  const [password, setPassword] = useState(""); // Quản lý trạng thái cho password
  const [showPassword, setShowPassword] = useState(false); // Ban đầu ẩn mật khẩu
  const [error, setError] = useState(null); // Xử lý lỗi
  const navigate = useNavigate();

  if (!isOpen) return null; // Nếu không mở thì không render gì cả

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Đổi trạng thái khi nhấn vào icon
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const { data } = await login(email, password); // Gọi API đăng nhập từ utils/api.js
      localStorage.setItem("token", data.token);
      navigate("/"); 
    } catch (err) {
      setError(err.response?.data?.error || "Failed to login");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue-900 text-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Sign In</h2>
          <button onClick={close} className="text-white text-2xl">×</button>
        </div>
        <form className="mt-4" onSubmit={handleLogin}>
          {/* Hiển thị thông báo lỗi */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 mb-4 text-gray-800"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Điều khiển giá trị email
          />
          
          <label className="block mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 mb-4 text-gray-800"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Điều khiển giá trị password
            />
            {/* Icon hiện/ẩn mật khẩu */}
            <img
              src={`/assets/icons/${showPassword ? "hide" : "show"}.svg`}
              alt="Toggle visibility"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/3 transform -translate-y-1/2 cursor-pointer w-6 h-6"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300"
          >
            Sign In
          </button>

          <div className="mt-4 text-center">
            <a href="#" className="text-blue-300">Forgot Password?</a>
          </div>

          <div className="mt-2 text-center">
            <button onClick={switchToSignUp} className="text-blue-300">
              or Sign Up
            </button>
          </div>

          {/* Phần phân cách OR */}
          <div className="flex items-center justify-center my-4">
            <div className="w-full border-t border-gray-300"></div>
            <span className="mx-4 text-gray-400">OR</span>
            <div className="w-full border-t border-gray-300"></div>
          </div>

          {/* Nút "Sign In With Google" */}
          <button
            type="button"
            className="w-full py-2 bg-white text-black font-semibold rounded-full flex items-center justify-center mt-4 border-2 border-gray-300 hover:bg-gray-100"
            onClick={googleAuth} 
          >
            <img
              src="/assets/icons/google.svg"
              alt="Google Logo"
              className="h-6 mr-2"
            />
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
