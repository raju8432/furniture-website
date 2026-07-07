import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import AboutSection from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/Contact';
import { Truck, ShieldCheck, Hammer, Sparkles, Clock, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-0">
      {/* Hero Banner */}
      <Hero />

      {/* Why Choose Us */}
      <section className="py-20 bg-bg-dark">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-16">
            <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Our Core Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl text-text-cream font-bold">
              Why Choose <span>Kamlesh Furniture</span>
            </h2>
            <p className="text-text-muted text-sm mt-3">
              We focus on premium durability and customer satisfaction, delivering only the best woodwork in Rewa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-bg-card border border-border-wood rounded-2xl p-8 hover:border-accent-gold transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                <Hammer size={24} />
              </div>
              <h3 className="font-display text-xl text-text-cream font-bold mb-3">Authentic Sagwan Wood</h3>
              <p className="text-text-muted text-xs leading-relaxed">
                We design exclusively with genuine, Grade-A seasoned Teak Wood, ensuring resistance against warping, cracking, and termites for decades.
              </p>
            </div>

            <div className="bg-bg-card border border-border-wood rounded-2xl p-8 hover:border-accent-gold transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles size={24} />
              </div>
              <h3 className="font-display text-xl text-text-cream font-bold mb-3">Bespoke Polishes</h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Choose your wood gloss finish, from Matte honey to rich satin walnut lacquer. We customize every detail to match your home color tone.
              </p>
            </div>

            <div className="bg-bg-card border border-border-wood rounded-2xl p-8 hover:border-accent-gold transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center text-accent-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-display text-xl text-text-cream font-bold mb-3">5+ Year Warranty</h3>
              <p className="text-text-muted text-xs leading-relaxed">
                Every bed frame, sofa set, and dining structure is backed by a robust structural warranty. We stand by the strength of our joinery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Categories */}
      <Categories />

      {/* Bestseller catalog list */}
      <FeaturedProducts />

      {/* Custom Furniture Service */}
      <section className="py-20 bg-bg-dark">
        <div className="w-[90%] max-w-[1200px] mx-auto bg-bg-card border border-border-wood rounded-3xl p-8 md:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block">
              Bespoke Made-to-Order
            </span>
            <h2 className="text-3xl sm:text-4xl text-text-cream font-bold leading-tight">
              Bespoke Furniture <span>Consultation</span>
            </h2>
            <p className="text-text-muted text-sm leading-relaxed">
              Have a specific size, sketch, or Pinterest reference picture? Our skilled design team works with you to turn references into custom handcrafted furniture pieces. We draft blueprints, calculate lumber volumes, and provide pricing estimates.
            </p>
            <ul className="space-y-3 text-xs text-text-cream font-medium">
              <li className="flex items-center gap-2">
                <span className="text-accent-gold">✔</span> Custom dimension adaptations for tight floorplans
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-gold">✔</span> Fabric consultations (Beige, velvet, linen blends)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent-gold">✔</span> Live workshop tracking options for major orders
              </li>
            </ul>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80"
              alt="Custom furniture woodwork sketch design"
              loading="lazy"
              className="w-full h-[320px] object-cover rounded-2xl border border-border-wood"
            />
          </div>
        </div>
      </section>

      {/* Story summary section */}
      <AboutSection />

      {/* Testimonials */}
      <Testimonials />

      {/* Delivery Information panel */}
      <section className="py-20 bg-bg-dark border-t border-border-wood">
        <div className="w-[90%] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-gold/10 border border-accent-gold/20 rounded-xl text-accent-gold mt-1">
              <Truck size={22} />
            </div>
            <div>
              <h4 className="font-display text-lg text-text-cream font-bold mb-1">Free Local Delivery</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                Free shipping and placement straight to your room for all order values in the Rewa municipality limits.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-gold/10 border border-accent-gold/20 rounded-xl text-accent-gold mt-1">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="font-display text-lg text-text-cream font-bold mb-1">Secure Packing</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                Multi-layer bubble wrapping and edge guards prevent scratches, dings, or polishes peeling during shipping.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent-gold/10 border border-accent-gold/20 rounded-xl text-accent-gold mt-1">
              <MapPin size={22} />
            </div>
            <div>
              <h4 className="font-display text-lg text-text-cream font-bold mb-1">Regional Delivery</h4>
              <p className="text-text-muted text-xs leading-relaxed">
                Shipping options to nearby regions including Satna, Maihar, Sidhi, and Shahdol at subsidized freight rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="inquiry-form-section" className="py-20 bg-bg-card">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <ContactSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
