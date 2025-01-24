import React from 'react';
import Header from './header';  // Import Header component
import Footer from './footer';  // Import Footer component

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Header always shown */}
      
      <div className="flex flex-1">
        {/* Main content area */}
        <main className="flex-1 p-6 bg-gray-50">
          {children} {/* Page content will be rendered here */}
        </main>
      </div>
      
      <Footer /> {/* Footer always shown */}
    </div>
  );
};

export default MainLayout;
