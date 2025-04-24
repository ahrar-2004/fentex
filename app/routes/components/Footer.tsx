import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-[#1B5E20] text-white py-16">
      <div className="max-w-6xl mx-auto px-4 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Fēntex Wholesale Ltd</h3>
          <p className="text-sm mb-4">
            Trusted nationwide by restaurants, retailers, and caterers — delivering quality fresh produce, meats, and prepared goods.
          </p>
          <div className="flex gap-3 text-[#CDE990]">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-[#CDE990]">Home</a></li>
            <li><a href="#about" className="hover:text-[#CDE990]">About Us</a></li>
            <li><a href="#categories" className="hover:text-[#CDE990]">Product Categories</a></li>
            <li><a href="#featured" className="hover:text-[#CDE990]">Featured Products</a></li>
            <li><a href="#reviews" className="hover:text-[#CDE990]">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-[#CDE990]">Contact Us</a></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#categories" className="hover:text-[#CDE990]">Fresh Vegetables</a></li>
            <li><a href="#categories" className="hover:text-[#CDE990]">Fresh Fruits</a></li>
            <li><a href="#categories" className="hover:text-[#CDE990]">Seafood</a></li>
            <li><a href="#categories" className="hover:text-[#CDE990]">Meat Products</a></li>
            <li><a href="#categories" className="hover:text-[#CDE990]">Prepared Foods</a></li>
            <li><a href="#categories" className="hover:text-[#CDE990]">Dairy & Eggs</a></li>
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
      <div className="text-center text-sm mt-10 border-t border-[#4E9F3D] pt-6 text-[#CDE990]">
        &copy; 2025 Fēntex Wholesale Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
