import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Kiểm tra trong localStorage xem có token đăng nhập không
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true); // Nếu có token, nghĩa là người dùng đã đăng nhập
    } else {
      setIsLoggedIn(false); // Nếu không có token, người dùng chưa đăng nhập
    }
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#5A90E2] to-[#1D2242] p-4 flex items-center justify-between w-full">
      <div className="flex items-center space-x-4">
        {/* Logo and Title aligned to the left */}
        <div>
          <Link to="/" className="flex items-center">
            <img src="/assets/png/booklet-logo.png" alt="Booklet Logo" className="h-[calc(4rem*1.2)]" />
            <h1 className="font-lobster text-4xl text-white ml-2">BOOKLET</h1>
          </Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative flex justify-center flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-full w-96 text-gray-800 pl-10" // Tăng padding trái để tạo khoảng cách cho icon
        />
      </div>

      {/* Icons - Chỉ hiện khi đã đăng nhập */}
      {isLoggedIn && (
        <div className="flex items-center space-x-4 text-white">
          <img src="path_to_chat_icon.svg" alt="Chat Icon" className="h-6" />
          <img src="path_to_bell_icon.svg" alt="Notification Icon" className="h-6" />
        </div>
      )}
    </header>
  );
}

export default Header;
