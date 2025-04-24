import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-cyan-50 py-16 text-cyan-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cyan-800">Get In Touch</h2>
          <p className="text-cyan-600">Have questions or ready to place an order? Reach out to us!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">Visit Us</h3>
              <p>123 Business Avenue, Industrial District<br />Cityville, State 12345</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">Call Us</h3>
              <p>Main Office: (555) 123-4567<br />Customer Support: (555) 987-6543</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">Email</h3>
              <p>sales@fentexwholesale.com<br />support@fentexwholesale.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-700 mb-2">Business Hours</h3>
              <p>Mon - Fri: 8:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded px-4 py-2" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea id="message" name="message"  required className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
              </div>
              <div>
                <button type="submit" className="bg-cyan-700 text-white px-6 py-2 rounded hover:bg-cyan-800 transition">
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
