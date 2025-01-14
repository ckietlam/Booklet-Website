import React, { useState } from 'react';

const SignUp = ({ isOpen, close, switchToSignIn }) => {
  if (!isOpen) return null;  // Nếu không mở thì không render gì cả

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-blue-900 text-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Sign Up</h2>
          <button onClick={close} className="text-white text-2xl">×</button>
        </div>
        <form className="mt-4">
          <label className="block mb-2">Username</label>
          <input type="text" className="w-full p-2 mb-4 text-gray-800" placeholder="Enter your username" />
          
          <label className="block mb-2">Password</label>
          <input type="password" className="w-full p-2 mb-4 text-gray-800" placeholder="Enter your password" />
          
          <label className="block mb-2">Confirm Password</label>
          <input type="password" className="w-full p-2 mb-4 text-gray-800" placeholder="Confirm your password" />
          
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <span>Agree to the <a href="#" className="text-blue-300">Terms of Service</a></span>
          </div>

          <button className="w-full py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-300">
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <button onClick={switchToSignIn} className="text-blue-300">
              or Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
