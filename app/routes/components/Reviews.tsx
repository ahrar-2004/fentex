import React from 'react';

const reviews = [
  {
    name: 'John Davis',
    role: 'Chef, The Garden Restaurant',
    text: 'Fēntex has transformed our sourcing process. Their fresh produce and meats are always top-notch — our customers love the difference.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'Owner, Ocean Breeze Café',
    text: 'The seafood we receive from Fēntex is exceptional. The quality is unmatched, and delivery is always on time.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Director, Elite Catering Services',
    text: 'We rely on Fēntex for large catering orders. Their prepared foods save us time while maintaining flavor and presentation.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Amira Patel',
    role: 'Procurement Manager, GreenMart Grocery',
    text: 'Reliable, professional, and always fresh. Fēntex helps keep our shelves stocked and our customers satisfied.',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'David Lee',
    role: 'Head Chef, Urban Spoon Kitchen',
    text: 'They’re my go-to for bulk meats and produce. The quality and consistency help us deliver top dishes every day.',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Lina Chowdhury',
    role: 'Owner, Tastebuds School Canteen',
    text: 'Affordable and fresh — Fēntex has made it easy to provide healthy meals for hundreds of students every day.',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

function Reviews() {
  return (
    <section id="reviews" className="bg-[#DFF6DD] py-16 text-[#1B5E20]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#4E9F3D]">What Our Clients Say</h2>
        <p className="text-[#1B5E20] mb-12">Trusted by foodservice professionals across industries.</p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              <p className="italic mb-4 text-[#1B5E20]">“{review.text}”</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#CDE990]"
                />
                <div>
                  <h4 className="font-semibold text-[#4E9F3D]">{review.name}</h4>
                  <p className="text-sm text-[#1B5E20]">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
