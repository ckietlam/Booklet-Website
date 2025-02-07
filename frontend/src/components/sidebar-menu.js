import React, { useState, useEffect } from "react";
import SignIn from "./signin"; // Import SignIn component
import SignUp from "./signup"; // Import SignUp component
import ForgotPass from "./forgot-pass"; // Import ForgotPass component
import ChangePassword from "./changePassword";

const SidebarMenu = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPassOpen, setIsForgotPassOpen] = useState(false); // Forgot Password modal state
  const [isChangePassOpen, setIsChangePassOpen] = useState(false); // Change Password modal state
  const [username, setUsername] = useState(null); // State for username
  const [profilePicture, setProfilePicture] = useState(null); // State for profile picture

  useEffect(() => {
    const savedUsername = localStorage.getItem("username"); // Retrieve username from localStorage
    const savedProfilePicture = localStorage.getItem("profilePicture"); // Retrieve profile picture from localStorage

    if (savedUsername) setUsername(savedUsername); // Save to state
    if (savedProfilePicture) setProfilePicture(savedProfilePicture); // Save to state
  }, []);

  const openSignIn = () => {
    setIsSignInOpen(true);
    setIsSignUpOpen(false); // Close Sign Up when opening Sign In
    setIsForgotPassOpen(false); 
    setIsChangePassOpen(false);// Ensure Forgot Password modal is closed
  };

  const closeSignIn = () => {
    setIsSignInOpen(false);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
    setIsSignInOpen(false); // Close Sign In when opening Sign Up
    setIsForgotPassOpen(false); // Ensure Forgot Password modal is closed
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  const openForgotPass = () => {
    setIsForgotPassOpen(true);
    setIsSignInOpen(false); // Ensure Sign In modal is closed
    setIsSignUpOpen(false); // Ensure Sign Up modal is closed
  };

  const closeForgotPass = () => {
    setIsForgotPassOpen(false);
  };

  const openChangePass = () => {
    setIsChangePassOpen(true);
    setIsSignInOpen(false);
    setIsSignUpOpen(false);
    setIsForgotPassOpen(false);
  };

  const closeChangePass = () => setIsChangePassOpen(false);

  const handleSignOut = () => {
    localStorage.removeItem("token"); // Remove token and username on sign out
    localStorage.removeItem("username");
    localStorage.removeItem("profilePicture");
    setUsername(null); // Clear username from state
    setProfilePicture(null); // Clear profile picture from state
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white w-48.1 h-full border-r-4 border-black">
          {/* Display username and profile picture if logged in */}
          {username ? (
            <div className="text-black flex flex-col items-center">
      <div className="flex items-center mb-4 mr-10 whitespace-nowrap">
        <img
          src={profilePicture || "/assets/default-avatar.png"} // Default avatar if not in localStorage
          alt="Profile"
          className="w-12 h-12 rounded-full mr-2"
        />
        <Link to="/user-profile"  className="text-lg font-lora font-bold text-black hover:underline transition-all duration-300 cursor-pointer">
          @{username || "Guest"}
        </Link>
      </div>
      <button
        onClick={handleSignOut}
        className="text-blue-500 mt-2 hover:underline font-lora font-bold"
      >
        Sign Out
      </button>
    </div>
      ) : (
        <>
          {/* Sign In / Sign Up Buttons */}
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
        </>
      )}

      <hr className="w-full my-4 border-gray-300 border-1.5" />

      {/* Other Buttons */}
      <button className="mt-3 mb-5 px-6 py-3 text-white font-bold bg-gradient-to-r from-yellow-400 to-red-500 rounded-full hover:from-yellow-500 hover:to-red-600 focus:outline-none font-lora transition-all duration-300">
        Premium
      </button>
      <button className="mb-4 px-6 py-2 text-black font-bold bg-transparent border-2 border-transparent hover:bg-[#0B1D52] hover:text-white hover:border-[#0B1D52] rounded-full font-lora transition-all duration-300">
        Browse
      </button>
      <button className="mb-4 px-6 py-2 text-black font-bold bg-transparent border-2 border-transparent hover:bg-[#0B1D52] hover:text-white hover:border-[#0B1D52] rounded-full font-lora transition-all duration-300">
        About Us
      </button>

      {/* Modals */}
      <SignIn
        isOpen={isSignInOpen}
        close={closeSignIn}
        switchToSignUp={openSignUp}
        switchToForgotPass={openForgotPass}
      />
      <SignUp
        isOpen={isSignUpOpen}
        close={closeSignUp}
        switchToSignIn={openSignIn}
      />
      <ForgotPass isOpen={isForgotPassOpen} close={closeForgotPass} switchToChangePass = {openChangePass}  />
      <ChangePassword isOpen={isChangePassOpen} close={closeChangePass}  switchToSignIn = {openSignIn}/>
    </div>
  );
};

export default SidebarMenu;
