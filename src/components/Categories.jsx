import React from 'react';
import { useNavigate } from 'react-router-dom';

const categoryData = [
  { name: "Sofa", icon: "🛋️", count: "12+ Items", bg: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80" },
  { name: "Beds", icon: "🛏️", count: "8+ Items", bg: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80" },
  { name: "Dining Tables", icon: "🍽️", count: "6+ Items", bg: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=400&q=80" },
  { name: "Chairs", icon: "🪑", count: "15+ Items", bg: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=400&q=80" },
  { name: "Wardrobes", icon: "🚪", count: "5+ Items", bg: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=400&q=80" },
  { name: "Office Furniture", icon: "💼", count: "10+ Items", bg: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80" }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (catName) => {
    navigate(`/products?category=${encodeURIComponent(catName)}`);
  };

  return (
    <section className="py-20 bg-bg-dark">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-16">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Signature Categories
          </span>
          <h2 className="text-3xl sm:text-4xl text-text-cream font-bold">
            Shop by <span>Furniture Suite</span>
          </h2>
          <p className="text-text-muted text-sm mt-3">
            Explore our curated collections crafted from high-durability hardwood, designed for modern luxury spaces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categoryData.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat.name)}
              className="group relative h-[200px] rounded-xl overflow-hidden cursor-pointer border border-border-wood hover:border-accent-gold transition-all duration-500 shadow-premium flex flex-col items-center justify-end p-4 text-center"
            >
              {/* Card Background Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${cat.bg}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/60 to-transparent group-hover:from-bg-dark/95 transition-colors duration-500" />

              {/* Card Contents */}
              <div className="relative z-10 space-y-1">
                <span className="text-3xl block group-hover:-translate-y-2 transition-transform duration-500">{cat.icon}</span>
                <h3 className="font-display font-semibold text-text-cream text-base group-hover:text-accent-gold transition-colors duration-300">
                  {cat.name}
                </h3>
                <span className="text-[10px] text-text-muted uppercase tracking-wider block font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {cat.count}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
