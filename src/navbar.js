// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-teal-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyApp</div>
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-gray-200 cursor-pointer"><Link to='/'>Home</Link></li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Services</li>
          <li className="hover:text-gray-200 cursor-pointer" ><Link to="/contactus" className="hover:text-gray-200">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
