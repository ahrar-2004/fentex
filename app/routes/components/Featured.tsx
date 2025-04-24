import React from 'react';

const featuredProducts = [
  {
    title: 'Premium Tomatoes',
    description: 'Bulk supply of vine-ripened tomatoes — ideal for grocers, caterers, and restaurants.',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Hass Avocados',
    description: 'Top-grade avocados delivered fresh — perfect for bulk wholesale and food prep.',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Fresh Salmon',
    description: 'Fresh-cut salmon filets available in quantity — excellent for fine dining and markets.',
    image: 'https://images.unsplash.com/photo-1510130387422-82bed34b37e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Gourmet Burger Patties',
    description: 'Ready-to-grill patties made from premium cuts — ideal for fast food and catering.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
];

function Featured() {
  return (
    <section id="featured" className="py-16 bg-[#DFF6DD] text-[#1B5E20]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#4E9F3D]">Featured Wholesale Products</h2>
        <p className="text-[#1B5E20] mb-10">Popular picks from our wide-ranging inventory, trusted by foodservice pros.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold text-[#4E9F3D] mb-2">{product.title}</h3>
                <p className="text-[#1B5E20] text-sm">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featured;
