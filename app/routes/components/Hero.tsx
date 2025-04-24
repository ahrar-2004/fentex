import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    '/seafood.jpg',
    '/Prepared.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='hero' className="min-h-screen bg-[#DFF6DD] flex flex-col md:flex-row items-center justify-center px-6 md:px-12 py-20">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
        <span className="inline-block bg-[#CDE990] text-[#1B5E20] px-4 py-1 rounded-full font-medium text-sm">
          Wholesale Food Supply
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B5E20] leading-tight">
          Premium Fresh Products Delivered to Your Business
        </h1>
        <p className="text-gray-700 max-w-md">
          We specialize in providing high-quality fresh produce, seafood, meats, and prepared foods directly to restaurants, retailers, and food service businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-[#4E9F3D] hover:bg-[#3c7f31] text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Get a Custom Quote
          </a>
          <a
            href="#categories"
            className="border-2 border-[#4E9F3D] text-[#4E9F3D] hover:bg-[#CDE990] font-semibold py-3 px-6 rounded-full transition"
          >
            Browse Categories
          </a>
        </div>
      </div>

      {/* Right Image Stack */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        <div className="relative w-72 md:w-96">
          <img
            src={images[currentImage]}
            alt="Fentex Products"
            className="rounded-xl shadow-lg w-full object-cover h-64"
          />
          <div className="absolute -right-6 -bottom-6 w-24 h-24 md:w-28 md:h-28 border-4 border-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Prepared Food"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -left-6 -top-6 w-24 h-24 md:w-28 md:h-28 border-4 border-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551782450-17144efb9c50?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt="Fresh Ingredients"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
