// src/components/Header.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaLaptop, FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FaLaptop className="text-3xl text-white hover:animate-pulse hover:text-accent transition-transform duration-300" />
          <h1 className="text-2xl font-bold tracking-wide hover:scale-105 transition-transform duration-300">
            Laptop Store
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold">
          <NavLink
            to="/"
            className="hover:text-accent hover:shadow-lg transition-all duration-300 px-3 py-2 rounded-lg"
            activeClassName="text-accent font-bold"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="hover:text-accent hover:shadow-lg transition-all duration-300 px-3 py-2 rounded-lg"
            activeClassName="text-accent font-bold"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            className="hover:text-accent hover:shadow-lg transition-all duration-300 px-3 py-2 rounded-lg"
            activeClassName="text-accent font-bold"
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-accent hover:shadow-lg transition-all duration-300 px-3 py-2 rounded-lg"
            activeClassName="text-accent font-bold"
          >
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-3xl focus:outline-none hover:text-accent transition-colors duration-300"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="fixed top-0 left-0 w-full h-full bg-dark bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-xl text-white md:hidden transition-all duration-500 ease-in-out">
            <NavLink to="/" onClick={toggleMobileMenu} className="hover:text-accent transition-colors duration-300">
              Home
            </NavLink>
            <NavLink to="/products" onClick={toggleMobileMenu} className="hover:text-accent transition-colors duration-300">
              Products
            </NavLink>
            <NavLink to="/about" onClick={toggleMobileMenu} className="hover:text-accent transition-colors duration-300">
              About Us
            </NavLink>
            <NavLink to="/contact" onClick={toggleMobileMenu} className="hover:text-accent transition-colors duration-300">
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
