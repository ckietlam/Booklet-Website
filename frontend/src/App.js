import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainRoutes from './main-routes';  // Import MainRoutes component

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<MainRoutes />} /> {/* Điều hướng đến MainRoutes */}
      </Routes>
    </div>
  );
}

export default App;
