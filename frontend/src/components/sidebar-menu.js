import React, { useState } from 'react';
import SignIn from './signin';  // Import SignIn component
import SignUp from './signup';  // Import SignUp component

const SidebarMenu = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const openSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false);  // Đảm bảo Sign Up được đóng khi mở Sign In
  };

  const closeSignIn = () => {
    setIsSignInOpen(false);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false);  // Đảm bảo Sign In được đóng khi mở Sign Up
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white w-48 h-screen border-r-4 border-black">
      {/* Cụm Sign In / Sign Up */}
      <button
        onClick={openSignIn}
        className="mb-4 px-6 py-2 text-black font-bold bg-transparent border-2 border-transparent hover:bg-[#0B1D52] hover:text-white hover:border-[#0B1D52] rounded-full font-lora transition-all duration-300"
      >
        Sign In
      </button>
      <button
        onClick={openSignUp}
        className="mb-4 px-6 py-2 text-[#0037FF] font-semibold border-2 border-[#0037FF] bg-transparent hover:bg-[#0B1D52] hover:text-white hover:border-[#0B1D52] rounded-full font-lora transition-all duration-300"
      >
        Sign Up
      </button>


      {/* Đường kẻ ngăn cách giữa Sign In/Sign Up và các button còn lại */}
      <hr className="w-full my-4 border-gray-300 border-1.5" />

      {/* Các button còn lại */}
      <button className="mb-4 px-6 py-2 text-white font-bold bg-gradient-to-r from-yellow-400 to-red-500 rounded-full hover:from-yellow-500 hover:to-red-600 focus:outline-none font-lora transition-all duration-300">
        Premium
      </button>
      <button className="mb-4 px-6 py-2 text-black font-bold bg-transparent border-2 border-transparent hover:bg-gray-100 hover:border-gray-300 rounded-full font-lora transition-all duration-300">
        Browse
      </button>
      <button className="mb-4 px-6 py-2 text-black font-bold bg-transparent border-2 border-transparent hover:bg-gray-100 hover:border-gray-300 rounded-full font-lora transition-all duration-300">
        About Us
      </button>

      {/* Modals */}
      <SignIn isOpen={isSignInOpen} close={closeSignIn} switchToSignUp={openSignUp} />
      <SignUp isOpen={isSignUpOpen} close={closeSignUp} switchToSignIn={openSignIn} />
    </div>
  );
};

export default SidebarMenu;
