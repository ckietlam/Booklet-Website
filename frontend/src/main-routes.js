import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SideLayout from './components/side-layout'; // Import Layout component
import MainLayout from './components/main-layout'; // Import Layout component
import HomePage from './pages/homepage'; // Import HomePage component
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import PaymentPolicy from './pages/paymentpolicy';
import Help from './pages/help';
import Accessibility from './pages/acessibility';

const MainRoutes = () => {
  return (
    <Routes>
    
        <Route path="/" element={<SideLayout><HomePage /></SideLayout>} />
        <Route path="/terms" element={<MainLayout><Terms /></MainLayout>} />
        <Route path="/privacy" element={<MainLayout><Privacy /></MainLayout>} />
        <Route path="/payment-policy" element={<MainLayout><PaymentPolicy /></MainLayout>} /> 
        <Route path="/help" element={<MainLayout><Help /></MainLayout>} />
        <Route path="/accessibility" element={<MainLayout><Accessibility /></MainLayout>} />


    </Routes>
  );
};

export default MainRoutes;
