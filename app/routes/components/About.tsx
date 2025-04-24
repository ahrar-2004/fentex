import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-[#f3f9e7] text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="relative">
          <img 
            src="/public/warehouse.jpg" 
            alt="Fentex Warehouse" 
            className="rounded-xl shadow-md w-full object-cover h-96" 
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e0f0c2] rounded-lg p-4 shadow-lg flex items-center justify-center">
            <h3 className="text-[#145c0e] font-bold text-center">Trusted Partner</h3>
          </div>
        </div>
        
        {/* Right Text */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-[#145c0e]">About Fentex Wholesale</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Fentex Wholesale is your trusted partner in delivering premium fresh produce, seafood, 
            meats, and prepared foods. With years of experience in the food service industry, we 
            supply restaurants, retailers, and food service businesses with top-quality ingredients.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">Our Mission</h3>
          <p className="mb-4 text-gray-600">
            To provide your business with the finest ingredients to help you serve excellence, 
            every single day. We commit to freshness, quality, and reliability in every delivery.
          </p>
          
          <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">Why Choose Fentex?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-2">
            <li>Farm-fresh vegetables, fruits, meats & seafood</li>
            <li>Strict quality control & freshness guaranteed</li>
            <li>Competitive pricing built for business needs</li>
            <li>Reliable delivery to your doorstep</li>
            <li>Dedicated and responsive customer service</li>
          </ul>
          
          <div className="mt-6">
            <a 
              href="#contact" 
              className="inline-block bg-[#489a25] hover:bg-[#408722] text-white font-medium py-2 px-6 rounded-full transition"
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