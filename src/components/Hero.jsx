import React from 'react';

function Hero() {
  return (
    <section className="bg-surface py-20 text-center shadow-lg">
      <h2 className="text-4xl font-display font-bold text-primary mb-4">Discover the Latest Laptops</h2>
      <p className="text-lg text-lightGray mb-8">High performance, sleek design, and the best prices.</p>
      <button className="bg-secondary text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-accent transition">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;
