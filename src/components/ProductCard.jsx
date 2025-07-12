import React from 'react';

function ProductCard({ laptop }) {
  return (
    <div className="bg-surface p-6 rounded-lg shadow-product">
      <img src={laptop.image} alt={laptop.name} className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold text-dark mb-2">{laptop.name}</h3>
      <p className="text-lg text-primary font-bold">{laptop.price}</p>
      <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-accent transition">
        View Details
      </button>
    </div>
  );
}

export default ProductCard;
