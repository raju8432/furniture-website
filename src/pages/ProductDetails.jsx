import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import Contact from '../components/Contact';
import { Star, MessageSquare, Shield, CheckCircle, ChevronRight, Hammer } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  
  if (!product) {
    return (
      <div className="pt-40 pb-20 min-h-screen bg-bg-dark text-center flex flex-col items-center justify-center space-y-4">
        <span className="text-5xl">🚫</span>
        <h2 className="font-display text-2xl text-text-cream font-bold">Furniture Item Not Found</h2>
        <p className="text-text-muted text-sm max-w-[320px]">
          The product ID you requested does not exist in our catalog or was moved.
        </p>
        <Link to="/products" className="px-6 py-2.5 bg-accent-gold text-bg-dark font-bold text-xs uppercase tracking-wider rounded">
          Back to Catalog
        </Link>
      </div>
    );
  }

  const [activeImage, setActiveImage] = useState(product.images[0] || product.image);

  // Scroll to top on mount/id change
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(product.images[0] || product.image);
  }, [id, product]);

  const triggerWhatsApp = () => {
    const textMsg = `Hi Kamlesh Furniture Mart, I am interested in getting a quote for the "${product.name}" (${product.material}). Estimated price: ${product.price}. Please provide catalog catalog configurations.`;
    const encodedUrl = `https://wa.me/919752891261?text=${encodeURIComponent(textMsg)}`;
    window.open(encodedUrl, '_blank');
  };

  return (
    <div className="pt-32 pb-20 bg-bg-dark">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        
        {/* Breadcrumb navigation */}
        <div className="flex items-center gap-2 text-xs text-text-muted mb-8 font-medium">
          <Link to="/" className="hover:text-accent-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-accent-gold">Catalog</Link>
          <ChevronRight size={12} />
          <span className="text-text-cream">{product.name}</span>
        </div>

        {/* Core details layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          
          {/* Gallery View */}
          <div className="space-y-4">
            <div className="h-[400px] md:h-[500px] bg-bg-cardLight rounded-2xl overflow-hidden border border-border-wood relative">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`h-24 rounded-lg overflow-hidden border cursor-pointer transition-colors duration-300 ${
                    activeImage === imgUrl ? 'border-accent-gold' : 'border-border-wood hover:border-text-muted'
                  }`}
                >
                  <img src={imgUrl} alt={`${product.name} thumb ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Specs Sheet & Actions */}
          <div className="space-y-6">
            <div>
              <span className="px-3 py-1 bg-accent-gold/10 border border-accent-gold/25 text-accent-gold text-[10px] uppercase font-bold tracking-wider rounded">
                {product.material}
              </span>
              <h1 className="text-3xl sm:text-4xl text-text-cream font-bold mt-3 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 text-sm mt-2">
                <div className="flex items-center gap-1 text-accent-gold">
                  <Star size={16} fill="currentColor" />
                  <span className="font-semibold text-text-cream">{product.rating}</span>
                </div>
                <span className="text-text-muted">|</span>
                <span className="text-text-muted font-medium">Category: {product.category}</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="bg-bg-card border border-border-wood rounded-xl p-5">
              <span className="text-[10px] text-text-muted uppercase block">Showroom Base Estimate</span>
              <span className="text-2xl font-extrabold text-text-cream block mt-1">{product.price}</span>
              <p className="text-[10px] text-text-muted mt-2">
                * Prices are estimates. Custom wood variations, finishes, and dimensions will alter the quote.
              </p>
            </div>

            {/* Core Description */}
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-text-cream text-base">Description</h3>
              <p className="text-text-muted text-xs leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            {/* Bullet Features */}
            <div className="space-y-3 pt-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-text-cream">
                  <CheckCircle size={14} className="text-accent-gold mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border-wood">
              <button
                onClick={triggerWhatsApp}
                className="flex-grow flex items-center justify-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors duration-300"
              >
                <MessageSquare size={16} />
                WhatsApp Inquiry
              </button>
              <a
                href="#details-inquiry-box"
                className="flex-grow flex items-center justify-center gap-2 px-6 py-4 border border-accent-gold text-accent-gold font-bold text-xs uppercase tracking-wider rounded hover:bg-accent-gold hover:text-bg-dark transition-all duration-300 text-center"
              >
                Request Custom Quote
              </a>
            </div>
          </div>
        </div>

        {/* Detailed technical specifications table */}
        <div className="bg-bg-card border border-border-wood rounded-2xl p-8 mb-20">
          <h3 className="font-display text-xl text-text-cream font-bold mb-6 flex items-center gap-2">
            <Hammer size={18} className="text-accent-gold" /> Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 text-xs">
            {Object.entries(product.specs).map(([key, val]) => (
              <div key={key} className="flex justify-between py-3 border-b border-border-wood/40">
                <span className="text-text-muted capitalize font-medium">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="text-text-cream font-semibold text-right">{val}</span>
              </div>
            ))}
            <div className="flex justify-between py-3 border-b border-border-wood/40">
              <span className="text-text-muted font-medium">Standard Dimensions</span>
              <span className="text-text-cream font-semibold text-right max-w-[200px] md:max-w-none">{product.dimensions}</span>
            </div>
          </div>
        </div>

        {/* Bottom Custom Inquiry form */}
        <div id="details-inquiry-box" className="pt-8">
          <Contact prefilledProduct={product.name} />
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;
