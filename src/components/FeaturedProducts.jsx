import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = () => {
  // Select top 3 highest rated products to showcase
  const featuredList = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <section className="py-20 bg-bg-card border-y border-border-wood">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-[500px]">
            <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">
              Curated Exclusives
            </span>
            <h2 className="text-3xl sm:text-4xl text-text-cream font-bold">
              Featured <span>Bestsellers</span>
            </h2>
            <p className="text-text-muted text-sm mt-3">
              Explore our highest-rated wooden masterpieces. Crafted by hands, designed for lifetimes.
            </p>
          </div>
          <Link
            to="/products"
            className="flex items-center gap-2 text-accent-gold hover:text-accent-goldHover font-bold text-sm tracking-wide group transition-colors duration-300"
          >
            Browse All Products 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
