import React, { useState } from 'react';
import { Send, PhoneCall } from 'lucide-react';

const Contact = ({ prefilledProduct = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: prefilledProduct,
    message: ""
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill out all required fields.");
      return;
    }
    
    // Simulate successful inquiry
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        product: "",
        message: ""
      });
    }, 4500);
  };

  const triggerWhatsApp = () => {
    const textMsg = `Hi, I am interested in ${
      formData.product ? formData.product : "furniture customization"
    }. Details - Name: ${formData.name || "Customer"}, Phone: ${formData.phone || "N/A"}. ${
      formData.message ? `Message: ${formData.message}` : ""
    }`;
    const encodedUrl = `https://wa.me/919752891261?text=${encodeURIComponent(textMsg)}`;
    window.open(encodedUrl, '_blank');
  };

  return (
    <div className="bg-bg-card border border-border-wood rounded-2xl p-8 md:p-12 shadow-premium max-w-[800px] mx-auto relative overflow-hidden">
      {success && (
        <div className="absolute inset-0 bg-bg-card/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 transition-opacity duration-300">
          <span className="text-5xl mb-4">🎉</span>
          <h3 className="font-display text-2xl text-accent-gold font-bold mb-2">Inquiry Submitted!</h3>
          <p className="text-text-muted text-sm max-w-[400px]">
            Thank you {formData.name}. Our showroom representatives at Rewa will contact you shortly regarding the {formData.product || "request"} details.
          </p>
        </div>
      )}

      <div className="text-center mb-10">
        <h3 className="font-display text-2xl text-text-cream font-bold mb-2">Request a Showcase Estimate</h3>
        <p className="text-text-muted text-xs">
          Fill in your woodwork details. We will respond with customized templates and price ranges.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-text-cream font-bold uppercase tracking-wider">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Anoop Singh"
              className="bg-bg-dark border border-border-wood focus:border-accent-gold text-text-cream rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-text-cream font-bold uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 097528 91261"
              className="bg-bg-dark border border-border-wood focus:border-accent-gold text-text-cream rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-text-cream font-bold uppercase tracking-wider">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@example.com"
              className="bg-bg-dark border border-border-wood focus:border-accent-gold text-text-cream rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[10px] text-text-cream font-bold uppercase tracking-wider">
              Selected Collection / Suite
            </label>
            <select
              name="product"
              value={formData.product}
              onChange={handleChange}
              className="bg-bg-dark border border-border-wood focus:border-accent-gold text-text-cream rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300"
            >
              <option value="">Custom Wooden Layout</option>
              <option value="Royal Teak Wood Sofa Set">Royal Teak Wood Sofa Set</option>
              <option value="King Size Walnut Bed">King Size Walnut Bed</option>
              <option value="Modern Oak Dining Set">Modern Oak Dining Set</option>
              <option value="Executive Mahogany Desk">Executive Mahogany Desk</option>
              <option value="Classic Teak Wardrobe">Classic Teak Wardrobe</option>
              <option value="Ergonomic Rosewood Chair">Ergonomic Rosewood Chair</option>
              <option value="Luxury Chesterfield Leather Sofa">Luxury Chesterfield Leather Sofa</option>
              <option value="Classic Wingback Armchair">Classic Wingback Armchair</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] text-text-cream font-bold uppercase tracking-wider">
            Custom Specifications / Room Layout
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Wood preference (Sagwan/Oak), dimensions, color polish details..."
            className="bg-bg-dark border border-border-wood focus:border-accent-gold text-text-cream rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            className="flex-grow flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-gold text-bg-dark font-bold text-sm uppercase tracking-wider rounded hover:bg-accent-goldHover transition-colors duration-300"
          >
            <Send size={16} />
            Submit Query
          </button>
          
          <button
            type="button"
            onClick={triggerWhatsApp}
            className="flex-grow flex items-center justify-center gap-2 px-6 py-3.5 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white font-bold text-sm uppercase tracking-wider rounded transition-all duration-300"
          >
            <PhoneCall size={16} />
            WhatsApp Inquiry
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
