import React from 'react';

function About() {
  return (
    <section id="about" className="py-20 bg-[#fdfdfd] text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image */}
        <div>
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
            alt="Warehouse"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

        {/* Right Text */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-[#2d6a4f]">About Fēntex Wholesale</h2>
          <p className="mb-4 text-gray-600 leading-relaxed">
            Fēntex Wholesale Ltd is a trusted name in delivering top-tier fresh produce, seafood, meat, and prepared foods. 
            With a strong foundation in the food service industry, we are committed to quality, reliability, and tailored solutions for every client.
          </p>

          <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">Our Mission</h3>
          <p className="mb-4 text-gray-600">
            To provide your business with the finest ingredients to help you serve excellence, every single day.
          </p>

          <h3 className="text-xl font-semibold text-[#2d6a4f] mb-2">Why Choose Fēntex?</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Farm-fresh vegetables, fruits, meats & seafood</li>
            <li>Strict quality control & freshness guaranteed</li>
            <li>Competitive pricing built for business</li>
            <li>Reliable delivery to your doorstep</li>
            <li>Supportive and friendly service team</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
