import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-[#DFF6DD] text-[#1B5E20]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div className="relative">
          <img 
            src="/ware.jpg" 
            alt="Fentex Warehouse" 
            className="rounded-xl shadow-lg w-full object-cover h-96" 
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#CDE990] rounded-lg p-4 shadow-md flex items-center justify-center">
            <h3 className="text-[#145C0E] font-bold text-center text-sm">Trusted Supplier</h3>
          </div>
        </div>

        {/* Right Text */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-[#4E9F3D]">About Fēntex Wholesale</h2>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Fēntex Wholesale is a leading supplier of premium quality vegetables, fruits, seafood, meats, 
            and prepared foods. We serve restaurants, markets, caterers, and institutions with reliable 
            bulk delivery and personalized support.
          </p>

          <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">Our Mission</h3>
          <p className="mb-4 text-gray-700">
            To be the most trusted name in wholesale food supply — delivering freshness, value, and consistency 
            with every shipment.
          </p>

          <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">Why Choose Us</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
            <li>Farm-direct vegetables, fruits, meats & seafood</li>
            <li>High-quality standards and fresh stock rotation</li>
            <li>Flexible wholesale pricing tailored to your volume</li>
            <li>Dependable delivery across your region</li>
            <li>Customer-first service & business support</li>
          </ul>

          <div className="mt-6">
            <a 
              href="#contact" 
              className="inline-block bg-[#4E9F3D] hover:bg-[#3b7c2f] text-white font-medium py-2 px-6 rounded-full transition"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
