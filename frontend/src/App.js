import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'; // Sử dụng Routes và Route từ react-router-dom

// Tạo một trang mẫu (HomePage và AboutPage)
function HomePage() {
  return <h1>Welcome to the Home Page!</h1>;
}

function AboutPage() {
  return <h1>Welcome to the About Page!</h1>;
}

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Link đến trang Home */}
          </li>
          <li>
            <Link to="/about">About</Link> {/* Link đến trang About */}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Trang Home */}
        <Route path="/about" element={<AboutPage />} /> {/* Trang About */}
      </Routes>
    </div>
  );
}

export default App;
