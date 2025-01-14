import React from 'react';
import Header from './header';  // Import Header component
import Footer from './footer';  // Import Footer component
import SidebarMenu from './sidebar-menu';  // Import SidebarMenu component

const Layout = ({ children }) => {
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
      </div>
      
      <Footer /> {/* Footer always shown */}
    </div>
  );
};

export default Layout;
