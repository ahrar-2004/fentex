import React, { useState } from 'react';
import logo from '/logo.png'; // Adjust path if not from public/

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-green-50 text-green-900 shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Fēntex Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-5 text-sm font-medium">
          <li><a href="#hero" className="hover:text-green-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
          <li><a href="#categories" className="hover:text-green-600 transition">Categories</a></li>
          <li><a href="#featured" className="hover:text-green-600 transition">Featured</a></li>
          <li><a href="#why" className="hover:text-green-600 transition">Why Us</a></li>
          <li><a href="#reviews" className="hover:text-green-600 transition">Reviews</a></li>
          <li><a href="#contact" className="hover:text-green-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-100 px-6 pb-4">
          <ul className="flex flex-col space-y-3 text-sm font-medium">
            <li><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#categories" onClick={toggleMenu}>Categories</a></li>
            <li><a href="#featured" onClick={toggleMenu}>Featured</a></li>
            <li><a href="#why" onClick={toggleMenu}>Why Us</a></li>
            <li><a href="#reviews" onClick={toggleMenu}>Reviews</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
