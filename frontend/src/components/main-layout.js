import React, { useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Xử lý sự kiện scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hàm cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header /> {/* Header luôn hiển thị */}

      <div className="flex flex-1 relative">
        {/* Main content area */}
        <main className="flex-1 p-6 bg-gray-50">{children}</main>

        {/* Nút Scroll To Top */}
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 right-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center w-12 h-12 z-[100]">
            <img src="/assets/icons/arrow-up.svg" alt="Scroll to top" className="w-6 h-6 invert" />
          </button> )}
      </div>

      <Footer /> {/* Footer luôn hiển thị */}
    </div>
  );
};

export default MainLayout;
