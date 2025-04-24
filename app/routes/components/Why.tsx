import React from 'react';
import { FaTruck, FaLeaf, FaDollarSign, FaHeadset } from 'react-icons/fa';

function Why() {
  const reasons = [
    {
      icon: <FaTruck size={36} />,
      title: 'Reliable Delivery',
      description: 'Timely deliveries you can depend on — we keep your kitchen running smoothly.',
    },
    {
      icon: <FaLeaf size={36} />,
      title: 'Quality Guaranteed',
      description: 'Sourced from trusted farms and suppliers to ensure top-tier freshness.',
    },
    {
      icon: <FaDollarSign size={36} />,
      title: 'Competitive Pricing',
      description: 'Wholesale pricing that supports your profit margins without compromising quality.',
    },
    {
      icon: <FaHeadset size={36} />,
      title: 'Dedicated Support',
      description: 'A customer support team that truly listens and resolves quickly.',
    },
  ];

  return (
    <section id="why" className="bg-cyan-50 py-16 text-cyan-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-800">Why Choose Fentex</h2>
        <p className="text-cyan-600 mb-12">More than just a supplier — we're your foodservice partner.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center"
            >
              <div className="text-cyan-700 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-cyan-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why;
