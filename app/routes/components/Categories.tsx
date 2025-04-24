import React from 'react';

const categories = [
  {
    title: 'Fresh Vegetables',
    image: '/freshveg.jpg',
    description: 'Locally sourced vegetables, freshly harvested and perfect for wholesale distribution.',
  },
  {
    title: 'Fresh Fruits',
    image: '/fruit.jpg',
    description: 'Seasonal and exotic fruits delivered fresh and in bulk for your business.',
  },
  {
    title: 'Seafood',
    image: '/seafood.jpg',
    description: 'Top-quality fish, shrimp, and shellfish sourced from trusted suppliers.',
  },
  {
    title: 'Meat Products',
    image: '/meat.jpg',
    description: 'Premium cuts of beef, lamb, and poultry available in large volumes.',
  },
  {
    title: 'Dairy & Eggs',
    image: '/dairy.jpg',
    description: 'Milk, cheese, butter, and farm-fresh eggs for consistent kitchen supply.',
  },
  {
    title: 'Prepared Foods',
    image: '/Prepared.jpg',
    description: 'Convenient, ready-to-eat items for restaurants, cafes, and meal services.',
  },
  {
    title: 'Frozen Goods',
    image: '/frozen.jpg',
    description: 'High-quality frozen vegetables, meats, and ready-meals for storage and convenience.',
  },
  {
    title: 'Bakery & Breads',
    image: '/bakery.jpg',
    description: 'Fresh baked goods, breads, and buns ready for daily delivery.',
  },
  {
    title: 'Snacks & Spices',
    image: '/snacks.png',
    description: 'Bulk snack items and essential spices from around the world.',
  },
  {
    title: 'Beverages',
    image: '/Beverages.webp',
    description: 'Juices, soft drinks, teas, and bottled water available in wholesale quantities.',
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-16 px-4 bg-[#DFF6DD] text-[#1B5E20]">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-[#4E9F3D]">Our Product Categories</h2>
        <p className="text-[#1B5E20]">Explore our wide range of wholesale food and beverage categories tailored for your business.</p>
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
              <h3 className="text-2xl font-semibold text-[#4E9F3D] mb-2">{category.title}</h3>
              <p className="text-[#1B5E20]">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
