import React, { useState, useEffect } from 'react';
import SignIn from './signin';  // Import SignIn component
import SignUp from './signup';  // Import SignUp component

const SidebarMenu = () => {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [username, setUsername] = useState(null);  // Trạng thái cho username
  const [profilePicture, setProfilePicture] = useState(null);  // Trạng thái cho profile picture

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");  // Lấy username từ localStorage
    console.log(savedUsername, savedProfilePicture);

    const savedProfilePicture = localStorage.getItem("profilePicture");  // Lấy profile picture từ localStorage
    console.log(savedUsername, savedProfilePicture);

    if (savedUsername) {
      setUsername(savedUsername);  // Nếu có, lưu vào state
    }

    if (savedProfilePicture) {
      setProfilePicture(savedProfilePicture);  // Nếu có, lưu vào state
    }
  }, []);

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

  const handleSignOut = () => {
    localStorage.removeItem("token");  // Xóa token và username khi đăng xuất
    localStorage.removeItem("username");
    localStorage.removeItem("profilePicture");
    setUsername(null);  // Xóa username khỏi state
    setProfilePicture(null);  // Xóa ảnh profile khỏi state
  };

  return (
    <div className="flex flex-col items-center p-4 bg-white w-48.1 h-screen border-r-4 border-black">
      {/* Nếu người dùng đã đăng nhập, hiển thị username và ảnh */}
      {username ? (
        <div className="text-black flex flex-col items-center">
          <div className="flex items-center mb-4 mr-10">
            {/* Hiển thị ảnh đại diện */}
            <img
              src={profilePicture || "/assets/default-avatar.png"}  // Đảm bảo có ảnh mặc định nếu không có ảnh trong localStorage
              alt="Profile"
              className="w-12 h-12 rounded-full mr-2"  // Thiết lập kích thước và hình tròn cho ảnh
            />
            {/* Hiển thị username */}
            <span className="text-lg font-lora font-bold">@{username}</span>
          </div>

          {/* Nút Sign Out */}
          <button
            onClick={handleSignOut}
            className="text-blue-500 mt-2 hover:underline font-lora font-bold"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <>
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
        </>
      )}

      {/* Đường kẻ ngăn cách giữa Sign In/Sign Up và các button còn lại */}
      <hr className="w-full my-4 border-gray-300 border-1.5" />

      {/* Các button còn lại */}
      <button className="mt-3 mb-5 px-6 py-3 text-white font-bold bg-gradient-to-r from-yellow-400 to-red-500 rounded-full hover:from-yellow-500 hover:to-red-600 focus:outline-none font-lora transition-all duration-300">
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
