import React from 'react';
import ProductCard from './ProductCard';

// Sample data for laptops
const laptops = [
  {
    id: 1,
    name: 'Dell XPS 13',
    price: '$999',
    image: '/images/dell-xps-13.jpg',
  },
  {
    id: 2,
    name: 'MacBook Pro 16',
    price: '$2,399',
    image: '/images/macbook-pro-16.jpg',
  },
  {
    id: 3,
    name: 'HP Spectre x360',
    price: '$1,299',
    image: '/images/hp-spectre.jpg',
  },
];

function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {laptops.map((laptop) => (
        <ProductCard key={laptop.id} laptop={laptop} />
      ))}
    </div>
  );
}

export default ProductList;
