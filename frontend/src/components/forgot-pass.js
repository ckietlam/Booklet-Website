import React, { useState } from 'react';
import { forgotPassword } from '../utils/api';
import  changePassword  from './changePassword';


const ForgotPass = ({ isOpen, close, switchToChangePass }) => {
  const [email, setEmail] = useState(""); // Quản lý trạng thái cho email
  const [error, setError] = useState(null); // Xử lý lỗi
  const [message, setMessage] = useState(null); // Xử lý thông báo thành công

  if (!isOpen) return null; // Nếu không mở thì không render gì cả

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    try {
      localStorage.clear();
      localStorage.setItem("email", email);
      await forgotPassword(email);
      setMessage(`A password reset link has been sent to your email: ${email}`);
      switchToChangePass();
    } catch (err) {
      setError(err.response.data.message || "Failed to send reset email");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue-900 text-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Forgot Password</h2>
          <button onClick={close} className="text-white text-2xl">×</button>
        </div>
        <form className="mt-4" onSubmit={handleForgotPassword}>
          {/* Hiển thị thông báo lỗi */}
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {message && <p className="text-green-500 mb-4">{message}</p>}
          
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full p-2 mb-4 text-gray-800"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Điều khiển giá trị email
          />

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

export default ForgotPass;
