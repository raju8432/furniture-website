import React from 'react';
import { Hammer, Users, ShieldAlert, Award, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-20 bg-bg-dark">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            The Legacy of Woodwork
          </span>
          <h1 className="text-4xl text-text-cream font-bold">
            About <span>Kamlesh Furniture</span>
          </h1>
          <p className="text-text-muted text-sm mt-3">
            Serving Rewa and the surrounding Madhya Pradesh region with handcrafted heirloom quality wood furnishings since 1995.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="font-display text-2xl text-accent-gold font-semibold">
              Quality Wood, Generation After Generation
            </h2>
            <p className="text-text-muted text-xs leading-relaxed">
              At **Kamlesh Furniture Mart**, our journey began over 25 years ago in a small woodturning shop in Rewa, Madhya Pradesh. Founded on the principle of absolute structural integrity, we set out to build custom household furniture that stands firm against time, humidity, and wear.
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              We specialize in **Madhya Pradesh Teak (Sagwan)** wood, a hardwood recognized throughout the country for its high density, oil content, and natural grain aesthetics. Every piece is seasoned inside our controlled drying spaces before cutting to prevent warping.
            </p>
            <p className="text-text-muted text-xs leading-relaxed">
              From our flagship showroom located on **Shilpi Plaza Road**, we serve thousands of households in Rewa, Satna, and Sidhi. We design and deliver custom beds, luxury dining tables, ergonomic desks, and complete custom home woodwork layouts.
            </p>
          </div>
          <div className="border border-border-wood rounded-2xl overflow-hidden shadow-premium">
            <img
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
              alt="Artisan finishing a Teakwood tabletop"
              className="w-full h-[350px] object-cover"
            />
          </div>
        </div>

        {/* Brand Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-bg-card border border-border-wood rounded-2xl p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 flex items-center justify-center rounded-xl mx-auto">
              <Award size={22} />
            </div>
            <h3 className="font-display text-lg text-text-cream font-bold">Unmatched Materials</h3>
            <p className="text-text-muted text-xs leading-relaxed">
              We never cut corners with cheap composite materials. We use solid premium hardwoods and marine-grade plywood for back panels to provide absolute strength.
            </p>
          </div>

          <div className="bg-bg-card border border-border-wood rounded-2xl p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 flex items-center justify-center rounded-xl mx-auto">
              <Hammer size={22} />
            </div>
            <h3 className="font-display text-lg text-text-cream font-bold">Fine Craftsmanship</h3>
            <p className="text-text-muted text-xs leading-relaxed">
              Our carpenters have decades of combined experience in traditional Indian joinery, ensuring drawers pull smoothly and frames sit perfectly level.
            </p>
          </div>

          <div className="bg-bg-card border border-border-wood rounded-2xl p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 flex items-center justify-center rounded-xl mx-auto">
              <Users size={22} />
            </div>
            <h3 className="font-display text-lg text-text-cream font-bold">Customer First</h3>
            <p className="text-text-muted text-xs leading-relaxed">
              From bespoke measurements at your doorstep to dynamic click-to-call showroom consultations, we cater to all custom woodwork requirements.
            </p>
          </div>
        </div>

        {/* Custom Furniture Process */}
        <div className="bg-bg-card border border-border-wood rounded-3xl p-8 md:p-12 mb-20">
          <h2 className="font-display text-2xl text-text-cream font-bold mb-10 text-center">
            Our <span>Bespoke Design Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            <div className="space-y-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-accent-gold text-bg-dark font-extrabold flex items-center justify-center text-sm">1</div>
              <h4 className="font-display text-base text-text-cream font-semibold">Consultation</h4>
              <p className="text-text-muted text-[11px] leading-relaxed">
                Contact us via WhatsApp or visit our showroom on Shilpi Plaza Road. Share your requirements and sketches.
              </p>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-accent-gold text-bg-dark font-extrabold flex items-center justify-center text-sm">2</div>
              <h4 className="font-display text-base text-text-cream font-semibold">Draft & Quote</h4>
              <p className="text-text-muted text-[11px] leading-relaxed">
                We draw out exact dimensions, calculate timber volume requirements, select finishes, and formulate an estimate.
              </p>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-accent-gold text-bg-dark font-extrabold flex items-center justify-center text-sm">3</div>
              <h4 className="font-display text-base text-text-cream font-semibold">Handcrafting</h4>
              <p className="text-text-muted text-[11px] leading-relaxed">
                Our master craftsmen chisel, join, sand, and polish the seasoned teakwood logs according to specs.
              </p>
            </div>

            <div className="space-y-3 relative z-10">
              <div className="w-8 h-8 rounded-full bg-accent-gold text-bg-dark font-extrabold flex items-center justify-center text-sm">4</div>
              <h4 className="font-display text-base text-text-cream font-semibold">White Glove Setup</h4>
              <p className="text-text-muted text-[11px] leading-relaxed">
                We deliver, pack, carry up to your floor, and assemble the furniture. Absolutely free in the Rewa municipality.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
