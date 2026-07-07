import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="py-20 bg-bg-dark">
      <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side: Image frames */}
        <div className="relative">
          <div className="border border-accent-gold rounded-2xl p-4 relative">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
              alt="Kamlesh Furniture Mart Workshop"
              loading="lazy"
              className="w-full h-[400px] md:h-[450px] object-cover rounded-xl"
            />
            {/* Float badge */}
            <div className="absolute -bottom-8 -right-8 bg-accent-gold text-bg-dark p-6 rounded-2xl shadow-premium text-center border-4 border-bg-dark">
              <span className="font-display font-extrabold text-3xl md:text-4xl block leading-none mb-1">
                25+
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.1em] block">
                Years of Craft
              </span>
            </div>
          </div>
        </div>

        {/* Right side: Texts & Story */}
        <div className="space-y-6">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block">
            Crafting Heritage
          </span>
          <h2 className="text-3xl sm:text-4xl text-text-cream font-bold leading-tight">
            Kamlesh Furniture Mart <span>Rewa</span>
          </h2>
          <p className="text-text-muted text-sm leading-relaxed">
            For more than two decades, <strong>Kamlesh Furniture Mart</strong> has been the premier destination for fine wooden furniture on <strong>Shilpi Plaza Road, Rewa, Madhya Pradesh</strong>. We take absolute pride in producing furniture that doesn’t just occupy space, but elevates utility and elegance in your home.
          </p>
          <p className="text-text-muted text-sm leading-relaxed">
            Specializing in premium solid teak wood (Sagwan) woodwork, we integrate classical Indian carpentry methodologies with modern ergonomic and architectural structures.
          </p>

          {/* Stats layout */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border-wood">
            <div>
              <span className="text-2xl md:text-3xl font-display font-bold text-accent-gold block">2000+</span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider block mt-1">Families Served</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-display font-bold text-accent-gold block">3.9 ★</span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider block mt-1">Google Rating</span>
            </div>
            <div>
              <span className="text-2xl md:text-3xl font-display font-bold text-accent-gold block">70+</span>
              <span className="text-[10px] text-text-muted uppercase tracking-wider block mt-1">Verified Reviews</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              to="/about"
              className="px-6 py-3 border border-border-wood text-text-cream font-semibold text-xs tracking-wider uppercase rounded hover:bg-white/5 hover:border-text-cream transition-all duration-300 inline-block"
            >
              Read Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
