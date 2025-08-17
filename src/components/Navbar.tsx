import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/ProfileLogo.jpeg"
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="font-bold text-xl">ADITYA SINGH</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="font-medium hover:text-blue-600">
          HOME
        </Link>
        <a href="#about" className="font-medium hover:text-blue-600">
          ABOUT
        </a>
        <Link to="/projects" className="font-medium hover:text-blue-600">
          PROJECTS
        </Link>
        <a href="#contact" className="font-medium hover:text-blue-600">
          CONTACT
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (dropdown) */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 md:hidden z-50">
          <Link
            to="/"
            className="font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            HOME
          </Link>
          <a
            href="#about"
            className="font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </a>
          <Link
            to="/projects"
            className="font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            PROJECTS
          </Link>
          <a
            href="#contact"
            className="font-medium hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
