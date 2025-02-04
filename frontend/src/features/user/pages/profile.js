import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [username, setUsername] = useState(null);
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedProfilePicture = localStorage.getItem("profilePicture");

    if (savedUsername) setUsername(savedUsername);
    if (savedProfilePicture) setProfilePicture(savedProfilePicture);
  }, []);

  // Mock data về số lượng works, reading lists, followers
  const userStats = {
    works: 5,
    readingLists: 15,
    followers: 125,
  };

  return (
    <main className="py-16 px-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        {/* Ảnh bìa */}
        <div className="relative w-full h-56">
          <img
            src="/assets/cover-image.jpg" // Thay bằng ảnh cover thật
            alt="Cover"
            className="w-full h-full object-cover rounded-lg blur-sm"
          />
        </div>

        {/* Thông tin user */}
        <div className="relative -mt-16 flex flex-col items-center text-center">
          {/* Avatar */}
          <img
            src={profilePicture || "/assets/default-avatar.png"}
            alt="Avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
          />

          {/* Username */}
          <h1 className="mt-2 text-2xl font-bold text-gray-900">
            {username || "Guest"}
          </h1>

          {/* Stats */}
          <div className="flex space-x-6 mt-2 text-gray-600">
            <span>{userStats.works} <strong>Works</strong></span>
            <span>{userStats.readingLists} <strong>Reading Lists</strong></span>
            <span>{userStats.followers} <strong>Followers</strong></span>
          </div>

          {/* Nút Edit Profile */}
          <button className="mt-4 px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-200">
            Edit Profile
          </button>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
