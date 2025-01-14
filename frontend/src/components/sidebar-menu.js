import React from 'react';
import { Link } from 'react-router-dom';  // Nếu bạn muốn điều hướng đến các trang khác

const SidebarMenu = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white w-48 h-screen border-r-4 border-black"> {/* Nền trắng */}
      
      {/* Cụm Sign In / Sign Up */}
      <button className="mb-4 px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none transition-all duration-300">
        Sign In
      </button>
      <button className="mb-4 px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 focus:outline-none transition-all duration-300">
        Sign Up
      </button>

      {/* Đường kẻ ngăn cách giữa Sign In/Sign Up và các button còn lại */}
      <hr className="w-full my-4 border-gray-300 border-1.5" />

      {/* Các button còn lại */}
      <button className="mb-4 px-6 py-2 text-white bg-gradient-to-r from-yellow-400 to-red-500 rounded-full hover:from-yellow-500 hover:to-red-600 focus:outline-none transition-all duration-300">
        Premium
      </button>
      <button className="mb-4 px-6 py-2 text-black bg-transparent border-2 border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none transition-all duration-300">
        Browse
      </button>
      <button className="mb-4 px-6 py-2 text-black bg-transparent border-2 border-gray-300 rounded-full hover:bg-gray-100 focus:outline-none transition-all duration-300">
        About Us
      </button>
    </div>
  );
};

export default SidebarMenu;
