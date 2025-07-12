// src/pages/Home.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';

function Home() {
  const laptopImages = [
    { src: '/images/laptop1.jpg', alt: 'Laptop 1', caption: 'Powerful Performance' },
    { src: '/images/laptop2.jpg', alt: 'Laptop 2', caption: 'Elegant Design' },
    { src: '/images/laptop3.jpg', alt: 'Laptop 3', caption: 'Gaming Ready' },
    { src: '/images/laptop4.jpg', alt: 'Laptop 4', caption: 'Lightweight Portability' },
  ];

  return (
    <div className="text-center">
      {/* Header and Intro Text */}
      <h2 className="text-4xl font-bold text-primary mb-8">Welcome to Our Laptop Store</h2>
      <p className="text-lg mb-12">
        Discover cutting-edge laptops that cater to all your needs. Whether you're a professional, gamer, or student, 
        we have the perfect laptop for you.
      </p>

      {/* Swiper Carousel */}
      <Swiper
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        className="w-full h-80 md:h-96 lg:h-[500px] mb-12"
      >
        {laptopImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-semibold">
                {image.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Featured Products Section */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Featured Products</h3>
        <p className="text-base mb-6">Check out our top-rated laptops that are popular among our customers!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Product Cards */}
          <div className="bg-surface p-4 rounded-lg shadow">
            <img src="/images/dell-xps-13.jpg" alt="Dell XPS 13" className="w-full h-48 object-cover mb-2 rounded-lg" />
            <h4 className="text-xl font-bold">Dell XPS 13</h4>
            <p className="text-primary font-bold">$999</p>
          </div>
          <div className="bg-surface p-4 rounded-lg shadow">
            <img src="/images/macbook-pro-16.jpg" alt="MacBook Pro 16" className="w-full h-48 object-cover mb-2 rounded-lg" />
            <h4 className="text-xl font-bold">MacBook Pro 16</h4>
            <p className="text-primary font-bold">$2,399</p>
          </div>
          <div className="bg-surface p-4 rounded-lg shadow">
            <img src="/images/hp-spectre.jpg" alt="HP Spectre x360" className="w-full h-48 object-cover mb-2 rounded-lg" />
            <h4 className="text-xl font-bold">HP Spectre x360</h4>
            <p className="text-primary font-bold">$1,299</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
