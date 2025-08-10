import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav className="w-full bg-white py-4 px-6 md:px-12 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img src="/herosection.png" alt="Profile" className="w-12 h-12 rounded-full object-cover" />
        <span className="font-bold text-xl">JOHN DOE</span>
      </div>
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="font-medium hover:text-blue-600">
          HOME
        </Link>
        <a href="#about" className="font-medium hover:text-blue-600">
          ABOUT
        </a>
        <a href="#projects" className="font-medium hover:text-blue-600">
          PROJECTS
        </a>
        <a href="#contact" className="font-medium hover:text-blue-600">
          CONTACT
        </a>
      </div>
    </nav>;
};
export default Navbar;