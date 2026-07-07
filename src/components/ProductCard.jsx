import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-bg-card border border-border-wood rounded-2xl overflow-hidden hover:border-accent-gold transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium group flex flex-col h-full">
      {/* Product Image Wrapper */}
      <div className="relative h-[260px] overflow-hidden bg-bg-cardLight">
        {product.badge && (
          <div className="absolute top-4 left-4 z-10 bg-accent-gold text-bg-dark font-extrabold text-[10px] tracking-wider uppercase px-3 py-1 rounded">
            {product.badge}
          </div>
        )}
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      {/* Product Details */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <div className="flex justify-between items-center gap-2 mb-2">
            <span className="text-[10px] text-accent-gold uppercase font-bold tracking-[0.1em]">
              {product.material}
            </span>
            <div className="flex items-center gap-1 text-accent-gold text-xs">
              <Star size={12} fill="currentColor" />
              <span className="font-semibold text-text-cream">{product.rating}</span>
            </div>
          </div>
          <h3 className="font-display text-lg text-text-cream font-semibold mb-2 group-hover:text-accent-gold transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-text-muted text-xs line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="border-t border-border-wood pt-4 flex justify-between items-center mt-auto">
          <div>
            <span className="text-[10px] text-text-muted uppercase block">Estimated Price</span>
            <span className="text-base font-bold text-text-cream">{product.price}</span>
          </div>
          <Link
            to={`/product/${product.id}`}
            className="px-4 py-2 border border-accent-gold text-accent-gold font-bold text-[11px] uppercase tracking-wider rounded hover:bg-accent-gold hover:text-bg-dark transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
