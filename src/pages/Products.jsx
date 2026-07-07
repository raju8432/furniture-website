import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const categories = ["All", "Sofa", "Beds", "Dining Tables", "Chairs", "Wardrobes", "Office Furniture"];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [sortBy, setSortBy] = useState("default");

  // Sync state if search params change (e.g., when clicking category in Home page)
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchParams({ category });
  };

  // Filter and Sort Logic
  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.rawPrice - b.rawPrice;
      if (sortBy === "price-high") return b.rawPrice - a.rawPrice;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0; // default sort
    });

  return (
    <div className="pt-32 pb-20 min-h-screen bg-bg-dark">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        
        {/* Header Title */}
        <div className="mb-12">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Signature Design Suite
          </span>
          <h1 className="text-4xl text-text-cream font-bold">
            The Furniture <span>Showroom</span>
          </h1>
          <p className="text-text-muted text-sm mt-2 max-w-[600px]">
            Explore our curated catalog of solid hardwood collections. Filter by category, sort by price, or query custom terms to find your match.
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="bg-bg-card border border-border-wood rounded-2xl p-6 md:p-8 mb-10 space-y-6 shadow-premium">
          <div className="flex flex-col lg:flex-row gap-6 justify-between lg:items-center">
            
            {/* Search Input */}
            <div className="relative max-w-[400px] w-full">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
              <input
                type="text"
                placeholder="Search bed, sofa, dining tables..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-bg-dark border border-border-wood focus:border-accent-gold text-text-cream rounded-lg pl-12 pr-4 py-3 text-sm focus:outline-none transition-all duration-300"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal size={16} className="text-accent-gold" />
              <span className="text-xs uppercase tracking-wider text-text-cream font-bold">Sort By</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-bg-dark border border-border-wood focus:border-accent-gold text-text-cream rounded-lg px-4 py-2.5 text-xs focus:outline-none transition-colors duration-300"
              >
                <option value="default">New Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Categories Tab Buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border-wood/50">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => handleCategoryChange(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  selectedCategory === cat
                    ? "bg-accent-gold text-bg-dark border-accent-gold shadow-goldGlow"
                    : "bg-bg-dark text-text-muted border-border-wood hover:text-text-cream hover:border-text-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-bg-card border border-border-wood rounded-2xl space-y-3">
            <span className="text-4xl block">🔍</span>
            <h3 className="font-display text-xl font-bold text-text-cream">No Products Found</h3>
            <p className="text-text-muted text-xs max-w-[320px] mx-auto">
              We couldn't find matches for "{searchQuery}". Try selecting another category or clear the search.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                handleCategoryChange("All");
              }}
              className="mt-2 px-4 py-2 bg-accent-gold text-bg-dark text-xs font-bold rounded hover:bg-accent-goldHover transition-colors duration-300"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
