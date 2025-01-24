import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex space-x-4">
        <Link to="/terms" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Terms
        </Link>
        <Link to="/privacy" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Privacy
        </Link>
        <Link to="/payment-policy" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Payment Policy
        </Link>
        <Link to="/accessibility" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Accessibility
        </Link>
        <Link to="/help" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Help
        </Link>
        </div>
        <div className="text-center font-lora font-semibold">
        <p>&copy; Copyright belong to Booklet</p>
      </div>
      <div className="flex space-x-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
          <img src="/assets/icons/facebook.svg" alt="Facebook" className="h-6 text-white" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
          <img src="/assets/icons/instagram.svg" alt="Instagram" className="h-6 text-white" />
        </a>

      </div>
    </div>
  </footer>
  );
}

export default Footer;
