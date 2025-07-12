// src/pages/About.jsx
import React from 'react';

function About() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <img src="/images/team-working.jpg" alt="Our Team" className="w-full h-72 object-cover mb-6 rounded-lg" />
      <p className="text-lg mb-6">
        We are dedicated to providing the latest and greatest laptops to our customers. Our mission is to connect 
        people with high-performance devices that enhance productivity, creativity, and entertainment.
      </p>

      <section className="bg-light p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <ul className="space-y-2 text-base">
          <li>🚀 <strong>Innovation</strong>: We stay at the forefront of technology to bring you cutting-edge laptops.</li>
          <li>💼 <strong>Reliability</strong>: Every laptop is carefully selected for quality and performance.</li>
          <li>🌍 <strong>Customer Focus</strong>: Our team is here to support you with your laptop needs.</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
