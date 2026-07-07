import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-bg-dark border-t border-border-wood pt-16 pb-8">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-border-wood mb-12">
          {/* Logo & Brand statement */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-text-cream">
              <span className="text-accent-gold text-2xl">🛋️</span>
              <span>Kamlesh <span className="text-accent-gold font-normal italic font-sans text-lg">Furniture</span></span>
            </Link>
            <p className="text-text-muted text-xs leading-relaxed max-w-[320px]">
              Exquisite craftsmanship, durable hardwoods, and contemporary furniture designs for beautiful homes in Rewa since 1995.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-text-cream font-bold text-sm uppercase tracking-wider">Quick Navigation</h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-text-muted">
              <li><Link to="/" className="hover:text-accent-gold transition-colors duration-300">Home</Link></li>
              <li><Link to="/products" className="hover:text-accent-gold transition-colors duration-300">Collections</Link></li>
              <li><Link to="/about" className="hover:text-accent-gold transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent-gold transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact coordinates */}
          <div className="space-y-4">
            <h4 className="text-text-cream font-bold text-sm uppercase tracking-wider">Showroom Location</h4>
            <p className="text-text-muted text-xs leading-relaxed">
              Shilpi Plaza Rd, Narendra Nagar, Amaiya Colony, Rewa, Madhya Pradesh 486001
            </p>
            <span className="text-accent-gold text-xs block font-bold">
              Call: <a href="tel:09752891261" className="hover:underline">097528 91261</a>
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-text-muted gap-4">
          <p>&copy; {new Date().getFullYear()} Kamlesh Furniture Mart. All Rights Reserved. Crafted for Rewa, MP.</p>
          <p>Showroom Timing: 9:00 AM - 9:00 PM (Daily)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
