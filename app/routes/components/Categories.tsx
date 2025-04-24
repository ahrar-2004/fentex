import React from 'react';

const categories = [
  {
    title: 'Fresh Vegetables',
    image: '/freshveg.jpg',
    description: 'A colorful variety of farm-fresh vegetables, perfect for a healthy lifestyle and packed with essential nutrients.',
  },
  {
    title: 'Fresh Fruits',
    image: '/fruit.jpg',
    description: 'Juicy and sweet seasonal fruits, handpicked for freshness. Great for snacking, smoothies, or desserts.',
  },
  {
    title: 'Seafood',
    image: '/seafood.jpg',
    description: 'A delicious selection of seafood from the ocean—fish, shrimp, crabs, and more. Perfect for grilling, frying, or steaming.',
  },
  {
    title: 'Meat Products',
    image: '/meat.jpg',
    description: 'High-quality cuts of meat including beef, lamb, and chicken. Ideal for everyday meals or special occasions.',
  },
  {
    title: 'Prepared Foods',
    image: '/Prepared.jpg',
    description: 'Ready-to-eat meals and snacks, freshly made for your convenience without compromising on taste.',
  },
  {
    title: 'Dairy & Eggs',
    image: '/dairy.jpg',
    description: 'Pure dairy products like milk, cheese, yogurt, and farm-fresh eggs to enrich your breakfast and recipes.',
  },
];

const Categories = () => {
  return (
    <section  id='categories' className="py-16 px-4 bg-cyan-50 text-cyan-900">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-cyan-800">Our Product Categories</h2>
        <p className="text-cyan-600">Explore the flavors, freshness, and variety we offer in every category.</p>
      </div>

      <div className="space-y-10 max-w-6xl mx-auto">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-full md:w-1/2 h-64 object-cover"
            />
            <div className="p-6 text-left md:w-1/2">
              <h3 className="text-2xl font-semibold text-cyan-900 mb-2">{category.title}</h3>
              <p className="text-cyan-700">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
