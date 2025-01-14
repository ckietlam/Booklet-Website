import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout'; // Import Layout component
import HomePage from './pages/homepage'; // Import HomePage component

const MainRoutes = () => {
  return (
    <Routes>
    
        <Route path="/" element={<Layout><HomePage /></Layout>} />

    </Routes>
  );
};

export default MainRoutes;
