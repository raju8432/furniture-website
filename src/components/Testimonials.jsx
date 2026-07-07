import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Anoop Singh",
    initials: "AS",
    rating: 5,
    text: "Best quality wooden furniture in Rewa. Bought a king-size bed and dining table. Truly solid sagwan wood, extremely sturdy and premium build."
  },
  {
    name: "Rinki Sharma",
    initials: "RS",
    rating: 4,
    text: "Very nice collections of modern and luxury sofa sets. Located right on Shilpi Plaza Road, making it very accessible. Reasonable pricing."
  },
  {
    name: "Vijay Mishra",
    initials: "VM",
    rating: 5,
    text: "Excellent customer service. They customized our teak wood sofa set exactly to our specifications. Highly cooperative staff and timely delivery."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-bg-card border-y border-border-wood">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl text-text-cream font-bold">
            What Rewa <span>Says About Us</span>
          </h2>
          <p className="text-text-muted text-sm mt-3">
            We hold a solid <span className="text-accent-gold font-semibold">3.9 out of 5 stars</span> based on <span className="text-accent-gold font-semibold">70 verified customer reviews</span> on Google Maps.
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="bg-bg-cardLight border border-border-wood rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 mb-16 shadow-premium">
          <div className="flex items-center gap-6">
            <span className="text-6xl md:text-7xl font-display font-extrabold text-accent-gold leading-none">
              3.9
            </span>
            <div>
              <div className="flex gap-1 text-accent-gold mb-1">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} className="opacity-40" />
              </div>
              <span className="text-sm text-text-muted">Based on 70 Google reviews</span>
            </div>
          </div>

          {/* Rating Progress Bars */}
          <div className="flex-grow max-w-[450px] w-full space-y-2">
            {[
              { stars: 5, pct: "60%" },
              { stars: 4, pct: "25%" },
              { stars: 3, pct: "8%" },
              { stars: 2, pct: "3%" },
              { stars: 1, pct: "4%" }
            ].map((row, idx) => (
              <div key={idx} className="flex items-center gap-4 text-xs">
                <span className="w-3 text-text-muted font-bold">{row.stars}</span>
                <div className="flex-grow h-1.5 bg-border-wood rounded-full overflow-hidden">
                  <div className="h-full bg-accent-gold rounded-full" style={{ width: row.pct }} />
                </div>
                <span className="w-8 text-right text-text-muted">{row.pct}</span>
              </div>
            ))}
          </div>

          <div className="text-center md:text-right">
            <span className="text-base font-bold text-text-cream block">Google Maps</span>
            <span className="text-[10px] text-text-muted uppercase tracking-widest block mt-1">Verified Showroom</span>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-bg-cardLight border border-border-wood rounded-2xl p-6 relative flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-border-wood border border-accent-gold flex items-center justify-center font-bold text-accent-gold text-lg">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-cream text-sm">{rev.name}</h4>
                    <div className="flex gap-0.5 text-accent-gold mt-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill={i < rev.rating ? "currentColor" : "none"}
                          className={i < rev.rating ? "text-accent-gold" : "text-border-wood"}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-text-muted text-xs italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
