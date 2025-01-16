import React from 'react';

function Header() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#5A90E2] to-[#1D2242] p-4 flex items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          {/* Logo and Title aligned to the left */}
          <div className="flex items-center">
            <img src="/assets/png/booklet-logo.png" alt="Booklet Logo" className="h-[calc(4rem*1.2)]" />
            <h1 className="font-lobster text-4xl text-white ml-2">BOOKLET</h1>
          </div>
        </div>
  
        {/* Search Bar */}
        <div className="flex justify-center flex-grow">
          <input type="text" placeholder="search" className="p-2 rounded-lg w-64 text-gray-800" />
        </div>
  
        {/* Icons */}
        <div className="flex items-center space-x-4 text-white">
          <img src="path_to_chat_icon.svg" alt="Chat Icon" className="h-6" />
          <img src="path_to_bell_icon.svg" alt="Notification Icon" className="h-6" />
        </div>
      </header>
    </div>
  );
  
}

export default Header;
