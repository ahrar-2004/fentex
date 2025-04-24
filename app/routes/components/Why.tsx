import React from 'react';
import { FaTruck, FaLeaf, FaDollarSign, FaHeadset } from 'react-icons/fa';

function Why() {
  const reasons = [
    {
      icon: <FaTruck size={36} />,
      title: 'Reliable Delivery',
      description: 'We ensure on-time bulk deliveries so your business never misses a beat.',
    },
    {
      icon: <FaLeaf size={36} />,
      title: 'Fresh & Trusted Sourcing',
      description: 'We partner with top-tier farms and fisheries for unmatched quality.',
    },
    {
      icon: <FaDollarSign size={36} />,
      title: 'Wholesale Pricing',
      description: 'Competitive rates that scale with your volume — built for food businesses.',
    },
    {
      icon: <FaHeadset size={36} />,
      title: 'Business-Focused Support',
      description: 'Dedicated service that understands the needs of food service providers.',
    },
  ];

  return (
    <section id="why" className="bg-[#DFF6DD] py-16 text-[#1B5E20]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#4E9F3D]">Why Choose Fēntex</h2>
        <p className="text-[#1B5E20] mb-12">We're more than just a supplier — we’re your strategic partner in food distribution.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-[#4E9F3D] mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#1B5E20]">{item.title}</h3>
              <p className="text-sm text-[#1B5E20]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
