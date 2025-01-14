import React from 'react';

function Header() {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-blue-500 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <img src="/assets/png/booklet-logo.png" alt="Booklet Logo" className="h-16" />
        <h1 className="font-lobster text-4xl text-white">BOOKLET</h1>
        </div>
        <input type="text" placeholder="search" className="p-2 rounded-lg w-64 text-gray-800" />
        <div className="flex items-center space-x-4 text-white">
          <img src="path_to_chat_icon.svg" alt="Chat Icon" className="h-6" />
          <img src="path_to_bell_icon.svg" alt="Notification Icon" className="h-6" />
        </div>
      </header>

    </div>
  );
}

export default Header;
