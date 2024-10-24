// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 shadow-inner fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <div className="text-white text-lg font-semibold">MyApp</div>
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-gray-200 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-gray-200 cursor-pointer">Terms of Service</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact Us</li>
        </ul>
        <div className="text-white text-sm">&copy; 2024 MyApp. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
