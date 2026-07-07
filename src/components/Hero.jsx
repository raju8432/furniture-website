import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(15, 15, 14, 0.2) 0%, rgba(15, 15, 14, 0.95) 100%), url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80')`
        }}
      />

      <div className="w-[90%] max-w-[1200px] mx-auto relative z-10 pt-20">
        <div className="max-w-[700px] space-y-6 animate-fade-in-up">
          <span className="text-accent-gold text-xs font-semibold uppercase tracking-[0.2em] block">
            Rewa's Premium Wooden Furniture
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-text-cream font-bold leading-[1.1]">
            Crafting Modern Comfort, <br />
            <span className="font-display italic font-normal text-accent-gold">Inherent Quality</span>
          </h1>
          <p className="text-text-muted text-base sm:text-lg max-w-[580px] leading-relaxed">
            Transform your living space with Kamlesh Furniture Mart's luxury handcrafted wooden creations. We merge classical Indian woodwork styles with modern ergonomic designs to bring you furniture built to last generations.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/products"
              className="px-8 py-3.5 bg-accent-gold text-bg-dark font-bold text-sm rounded shadow-goldGlow hover:bg-accent-goldHover hover:shadow-goldGlowHover -translate-y-0.5 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Collections
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 border border-border-wood text-text-cream font-semibold text-sm rounded hover:bg-white/5 hover:border-text-cream transition-all duration-300"
            >
              Custom Design Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative side scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted">
        <span className="text-[10px] tracking-[0.2em] uppercase">Scroll Down</span>
        <div className="w-[1px] h-10 bg-border-wood relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-accent-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
