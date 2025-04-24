import React from 'react';
import logo from '../../../public/logo.png'; // Adjust this if needed (use /logo.png if it's in public folder)

const Navbar = () => {
  return (
    <nav className="bg-green-100 text-green-900 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Fēntex Logo"
            width={80}
            height={80}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#hero" className="hover:text-green-600 transition">Home</a></li>
          <li><a href="#about" className="hover:text-green-600 transition">About</a></li>
          <li><a href="#categories" className="hover:text-green-600 transition">Categories</a></li>
          <li><a href="#featured" className="hover:text-green-600 transition">Featured</a></li>
          <li><a href="#why" className="hover:text-green-600 transition">Why Us</a></li>
          <li><a href="#reviews" className="hover:text-green-600 transition">Reviews</a></li>
          <li><a href="#contact" className="hover:text-green-600 transition">Contact</a></li>
        </ul>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden">
          <button className="text-green-800 text-xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
