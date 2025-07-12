// src/pages/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-lg mb-8">
        We’d love to hear from you! Whether you have questions about our products, need support, 
        or want to provide feedback, feel free to get in touch.
      </p>
      
      <img src="/images/contact-us.jpg" alt="Contact" className="w-full h-72 object-cover mb-8 rounded-lg" />
      
      <form className="bg-light p-6 rounded-lg shadow-lg w-full md:w-1/2 mx-auto">
        <div className="mb-4">
          <label className="block text-left text-lg font-semibold mb-2">Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block text-left text-lg font-semibold mb-2">Email</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block text-left text-lg font-semibold mb-2">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-md" placeholder="Your Message" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-primary text-white py-2 px-6 rounded-lg font-bold hover:bg-accent transition">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
