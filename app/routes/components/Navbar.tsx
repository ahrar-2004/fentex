import React, { useState } from 'react';
import logo from '/logo.png'; // Make sure logo.png is in your /public folder

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#DFF6DD] text-[#1B5E20] shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Fēntex Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#hero" className="hover:text-[#4E9F3D] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#4E9F3D] transition">About</a></li>
          <li><a href="#categories" className="hover:text-[#4E9F3D] transition">Categories</a></li>
          <li><a href="#featured" className="hover:text-[#4E9F3D] transition">Featured</a></li>
          <li><a href="#why" className="hover:text-[#4E9F3D] transition">Why Us</a></li>
          <li><a href="#reviews" className="hover:text-[#4E9F3D] transition">Reviews</a></li>
          <li><a href="#contact" className="hover:text-[#4E9F3D] transition">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-3xl text-[#1B5E20] focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#DFF6DD] text-[#1B5E20] px-6 py-4 shadow transition-all duration-300">
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
