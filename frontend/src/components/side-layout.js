import React, { useState, useEffect } from 'react';
import Header from './header';  // Import Header component
import Footer from './footer';  // Import Footer component
import SidebarMenu from './sidebar-menu';  // Import SidebarMenu component

const SideLayout = ({ children }) => {

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
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header always shown */}
      
      <div className="flex flex-1">
        {/* Sidebar Menu on the left */}
        <aside className="w-64 bg-gray-100">
          <SidebarMenu /> {/* SidebarMenu component */}
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-6 bg-gray-50">
          {children} {/* Page content will be rendered here */}
        </main>

        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 right-10 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center w-12 h-12 z-[100]">
            <img src="/assets/icons/arrow-up.svg" alt="Scroll to top" className="w-6 h-6 invert" />
          </button> )}
      </div>
      
      <Footer /> {/* Footer always shown */}
    </div>
  );
};

export default SideLayout;
