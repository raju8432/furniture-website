import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sofa } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-all duration-300 hover:text-accent-gold relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-accent-gold after:transition-all after:duration-300 ${
      isActive ? 'text-text-cream after:w-full' : 'text-text-muted after:w-0 hover:after:w-full'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `text-lg font-medium tracking-wide transition-colors py-2 block ${
      isActive ? 'text-accent-gold' : 'text-text-cream hover:text-accent-gold'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] border-b border-border-wood transition-all duration-300 ${
        scrolled ? 'py-4 bg-bg-dark/95 backdrop-blur-md shadow-premium' : 'py-6 bg-bg-dark/80 backdrop-blur-sm'
      }`}
    >
      <div className="w-[90%] max-w-[1200px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold text-text-cream">
          <span className="text-accent-gold text-2xl">🛋️</span>
          <span>Kamlesh <span className="text-accent-gold font-normal italic font-sans text-lg">Furniture</span></span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/products" className={linkClass}>Products</NavLink></li>
            <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
          <Link
            to="/contact"
            className="px-5 py-2 rounded border border-accent-gold text-accent-gold font-semibold text-xs tracking-wider uppercase hover:bg-accent-gold hover:text-bg-dark transition-all duration-300"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-cream focus:outline-none z-[1001]"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 w-[300px] h-screen bg-bg-card border-l border-border-wood p-8 pt-24 transition-all duration-300 ease-in-out shadow-premium md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-6">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileLinkClass}>
              Contact
            </NavLink>
          </li>
          <li className="pt-4">
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center py-3 bg-accent-gold text-bg-dark font-bold rounded hover:bg-accent-goldHover transition-colors duration-300"
            >
              Get Custom Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
