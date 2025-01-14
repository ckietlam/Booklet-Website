import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-6">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="flex space-x-4">
        <a href="#" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Terms
        </a>
        <a href="#" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Privacy
        </a>
        <a href="#" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Payment Policy
        </a>
        <a href="#" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Accessibility
        </a>
        <a href="#" className="text-white hover:text-yellow-400 font-lora font-semibold">
            Help
        </a>
        </div>
        <div className="text-center font-lora font-semibold">
        <p>&copy; Copyright belong to Booklet</p>
      </div>
      <div className="flex space-x-4">
      <a href="#" className="text-white hover:text-yellow-400">
          <img src="/assets/icons/facebook.svg" alt="Facebook" className="h-6 text-white" />
      </a>
      <a href="#" className="text-white hover:text-yellow-400">
         <img src="/assets/icons/instagram.svg" alt="Instagram" className="h-6 text-white" />
      </a>  
      </div>
    </div>
  </footer>
  );
}

export default Footer;
