import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css'; // Import Tailwind CSS
import App from './App'; // Import App component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // React sẽ render ứng dụng vào div có id là 'root'
);
