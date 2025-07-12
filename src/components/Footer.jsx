import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto text-center space-y-4">
        <p>&copy; 2023 Laptop Store. All rights reserved.</p>
        <div className="space-x-4">
          <a href="#privacy" className="hover:text-primary">Privacy Policy</a>
          <a href="#terms" className="hover:text-primary">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
