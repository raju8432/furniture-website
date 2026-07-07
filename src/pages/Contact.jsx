import React, { useState, useEffect } from 'react';
import ContactForm from '../components/Contact';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

const Contact = () => {
  const [shopOpen, setShopOpen] = useState(false);
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    const checkShopStatus = () => {
      const now = new Date();
      const currentHour = now.getHours();
      
      // Business Hours: 9:00 AM (9) to 9:00 PM (21)
      const openHour = 9;
      const closeHour = 21;

      if (currentHour >= openHour && currentHour < closeHour) {
        setShopOpen(true);
        setStatusText("Closes at 9:00 PM");
      } else {
        setShopOpen(false);
        setStatusText("Opens at 9:00 AM tomorrow");
      }
    };

    checkShopStatus();
    const interval = setInterval(checkShopStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-20 bg-bg-dark">
      <div className="w-[90%] max-w-[1200px] mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-[650px] mx-auto mb-16">
          <span className="text-accent-gold text-xs font-bold uppercase tracking-[0.2em] block mb-2">
            Showroom Location & Contact
          </span>
          <h1 className="text-4xl text-text-cream font-bold">
            Connect With <span>Our Showroom</span>
          </h1>
          <p className="text-text-muted text-sm mt-3">
            Visit us in Shilpi Plaza to experience our wood quality first-hand, or request estimates using the contact form below.
          </p>
        </div>

        {/* Contact info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Coordinates column */}
          <div className="space-y-8">
            <h2 className="font-display text-2xl text-text-cream font-semibold">
              Showroom Coordinates
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 rounded-xl mt-1">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-text-cream font-bold mb-1">Our Showroom</h4>
                  <p className="text-text-muted text-xs leading-relaxed">
                    Shilpi Plaza Rd, Narendra Nagar, Amaiya Colony, Rewa, Madhya Pradesh 486001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 rounded-xl mt-1">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-text-cream font-bold mb-1">Direct Call</h4>
                  <p className="text-text-muted text-xs">
                    <a href="tel:09752891261" className="hover:text-accent-gold underline">
                      097528 91261
                    </a> (Click to call)
                  </p>
                </div>
              </div>

              {/* Emails */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 rounded-xl mt-1">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-text-cream font-bold mb-1">Email Inquiry</h4>
                  <p className="text-text-muted text-xs">
                    <a href="mailto:info@kamleshfurniture.com" className="hover:text-accent-gold underline">
                      info@kamleshfurniture.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Showroom timing with dynamic status */}
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-accent-gold/10 text-accent-gold border border-accent-gold/20 rounded-xl mt-1">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-display text-lg text-text-cream font-bold mb-1">
                    Opening Hours
                  </h4>
                  <div className="flex items-center gap-3">
                    <p className="text-text-muted text-xs">Daily: 9:00 AM - 9:00 PM</p>
                    <span 
                      className={`text-[9px] uppercase font-extrabold tracking-widest px-2.5 py-0.5 rounded-full border ${
                        shopOpen 
                          ? 'bg-emerald-500/10 border-emerald-500/35 text-emerald-500' 
                          : 'bg-rose-500/10 border-rose-500/35 text-rose-500'
                      }`}
                    >
                      {shopOpen ? 'Open Now' : 'Closed'}
                    </span>
                  </div>
                  <p className="text-[10px] text-text-muted mt-1 italic">{statusText}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Map Embed */}
          <div className="h-[380px] w-full rounded-2xl overflow-hidden border border-border-wood shadow-premium">
            <iframe
              src="https://maps.google.com/maps?q=Kamlesh%20Furniture%20Mart%20Shilpi%20Plaza%20Rd%20Rewa&t=&z=16&ie=UTF8&iwloc=&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-none filter grayscale invert-[0.92] contrast-[1.1]"
            />
          </div>
        </div>

        {/* Dynamic form submit card */}
        <div className="border-t border-border-wood/50 pt-16">
          <ContactForm />
        </div>

      </div>
    </div>
  );
};

export default Contact;
