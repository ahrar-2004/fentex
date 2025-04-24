import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-[#DFF6DD] py-16 text-[#1B5E20]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#4E9F3D]">Let's Work Together</h2>
          <p className="text-[#1B5E20]">Reach out for bulk orders, custom quotes, or any business inquiries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-[#4E9F3D] mb-2">Visit Us</h3>
              <p>123 Business Avenue, Industrial District<br />Cityville, State 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4E9F3D] mb-2">Call Us</h3>
              <p>Main Office: (555) 123-4567<br />Support Line: (555) 987-6543</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4E9F3D] mb-2">Email</h3>
              <p>sales@fentexwholesale.com<br />support@fentexwholesale.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#4E9F3D] mb-2">Business Hours</h3>
              <p>Mon - Fri: 8:00 AM – 6:00 PM<br />Saturday: 9:00 AM – 2:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-1 text-[#1B5E20]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4E9F3D]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1 text-[#1B5E20]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4E9F3D]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1 text-[#1B5E20]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4E9F3D]"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#4E9F3D] hover:bg-[#3a832f] text-white font-medium px-6 py-2 rounded-full transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
