// src/pages/Products.jsx
import React from 'react';

function Products() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Our Products</h2>
      <p className="text-lg mb-8">
        Browse our selection of top-notch laptops. From powerful workstations to budget-friendly options, 
        we have something for everyone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gaming Laptops */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/gaming-laptop.jpg" alt="Gaming Laptop" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Gaming Laptops</h3>
          <p>High-performance laptops for the ultimate gaming experience.</p>
        </div>
        
        {/* Work Laptops */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/work-laptop.jpg" alt="Work Laptop" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Work Laptops</h3>
          <p>Reliable laptops designed to handle all your professional needs.</p>
        </div>
        
        {/* Budget Laptops */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/budget-laptop.jpg" alt="Budget Laptop" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Budget Laptops</h3>
          <p>Affordable laptops that provide great value for everyday tasks.</p>
        </div>

        {/* Ultrabooks */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/ultrabook.jpg" alt="Ultrabook" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Ultrabooks</h3>
          <p>Slim, lightweight laptops with powerful features for on-the-go users.</p>
        </div>

        {/* Convertible Laptops */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/convertible-laptop.jpg" alt="Convertible Laptop" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Convertible Laptops</h3>
          <p>2-in-1 laptops with touchscreens that double as tablets for flexibility.</p>
        </div>

        {/* Student Laptops */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/student-laptop.jpg" alt="Student Laptop" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Student Laptops</h3>
          <p>Dependable laptops perfect for academic and daily use by students.</p>
        </div>

        {/* Business Laptops */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/business-laptop.jpg" alt="Business Laptop" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Business Laptops</h3>
          <p>Professional-grade laptops with enhanced security and performance features.</p>
        </div>

        {/* High-End Laptops */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/high-end-laptop.jpg" alt="High-End Laptop" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">High-End Laptops</h3>
          <p>Premium laptops that deliver top-tier performance and luxury features.</p>
        </div>

        {/* Chromebooks */}
        <div className="bg-surface p-4 rounded-lg shadow-lg">
          <img src="/images/chromebook.jpg" alt="Chromebook" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h3 className="text-xl font-semibold">Chromebooks</h3>
          <p>Lightweight and secure laptops perfect for web-based tasks and productivity.</p>
        </div>
      </div>
    </div>
  );
}

export default Products;
