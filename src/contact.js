// Contact.js
import React from 'react';

function Contact() {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-teal-500 py-12">
      <div className="container mx-auto px-6 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Contact Us</h2>
          <p className="mt-4 text-gray-200">We would love to hear from you! Please fill out the form below and we’ll get in touch soon.</p>
        </div>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                rows="5"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
