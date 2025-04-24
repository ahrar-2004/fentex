import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-cyan-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Fentex Wholesale Ltd</h3>
          <p className="text-sm mb-4">
            Your trusted partner in premium food supply. We provide quality vegetables, fruits, seafood, and prepared foods to businesses nationwide.
          </p>
          <div className="flex gap-3">
            <a href="#" className="hover:text-cyan-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-cyan-300"><FaTwitter /></a>
            <a href="#" className="hover:text-cyan-300"><FaInstagram /></a>
            <a href="#" className="hover:text-cyan-300"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-cyan-300">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-300">About Us</a></li>
            <li><a href="#categories" className="hover:text-cyan-300">Product Categories</a></li>
            <li><a href="#products" className="hover:text-cyan-300">Featured Products</a></li>
            <li><a href="#testimonials" className="hover:text-cyan-300">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-cyan-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-300">Fresh Vegetables</a></li>
            <li><a href="#" className="hover:text-cyan-300">Fresh Fruits</a></li>
            <li><a href="#" className="hover:text-cyan-300">Seafood</a></li>
            <li><a href="#" className="hover:text-cyan-300">Meat Products</a></li>
            <li><a href="#" className="hover:text-cyan-300">Prepared Foods</a></li>
            <li><a href="#" className="hover:text-cyan-300">Dairy & Eggs</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> 123 Business Avenue, Cityville</li>
            <li className="flex items-start gap-2"><FaPhone className="mt-1" /> (555) 123-4567</li>
            <li className="flex items-start gap-2"><FaEnvelope className="mt-1" /> sales@fentexwholesale.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-10 border-t border-cyan-700 pt-6">
        &copy; 2025 Fentex Wholesale Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
