import React from 'react';

const reviews = [
  {
    name: 'John Davis',
    role: 'Chef, The Garden Restaurant',
    text: '“Fentex has transformed our sourcing process. Their fresh produce and meats are always top-notch — our customers love the difference.”',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'Owner, Ocean Breeze Cafe',
    text: '“The seafood we receive from Fentex is exceptional. The quality is unmatched, and delivery is always on time.”',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Director, Elite Catering Services',
    text: '“We rely on Fentex for large catering orders. Their prepared foods save us time while maintaining flavor and presentation.”',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
];

function Reviews() {
  return (
    <section id="reviews" className="bg-white py-16 text-cyan-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-800">What Our Clients Say</h2>
        <p className="text-cyan-600 mb-12">Real feedback from our partners in the food industry.</p>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-cyan-50 p-6 rounded-xl shadow-md hover:shadow-lg transition text-left"
            >
              <p className="italic mb-4 text-cyan-700">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-300"
                />
                <div>
                  <h4 className="font-semibold text-cyan-900">{review.name}</h4>
                  <p className="text-sm text-cyan-600">{review.role}</p>
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
