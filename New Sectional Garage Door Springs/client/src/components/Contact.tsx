import { useToast } from '@/hooks/use-toast';
import { Phone, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import contactImage from '@/assets/images/joseph.png';

export default function Contact() {
  const { toast } = useToast();

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const brands = [
    "GENIE", "LIFTMASTER", "CRAFTSMAN", "STANLEY", "CLOPAY", "MARTIN",
    "WAYNE DALTON", "AMARR", "OVERHEAD DOOR"
  ];
  
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get Professional Service Today</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Call us for immediate assistance or schedule a convenient service appointment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-secondary p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Primary Phone</h4>
                  <p className="text-gray-300">
                    <a href="tel:3232705387" className="hover:underline">
                    323-270-5387
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary p-3 rounded-lg mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Additional Numbers</h4>
                  <p className="text-gray-300">
                    <a href="tel:3107340910" className="hover:underline">
                      310-734-0910
                    </a>
                      <span className="mx-2 text-gray-400">|</span> 
                    <a href="tel:8183513118" className="hover:underline">
                      818-351-3118
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-accent p-3 rounded-lg mr-4">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Service Hours</h4>
                  <p className="text-gray-300">7 Days a Week | Emergency Available</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-warning p-3 rounded-lg mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Service Area</h4>
                  <p className="text-gray-300">Los Angeles County & Surrounding Areas</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-800 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Trusted Brands We Service</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                {brands.map((brand, index) => (
                  <div key={index}>• {brand}</div>
                ))}
              </div>
            </div>
            </div>

          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              src={contactImage}
              alt="Contact Us"
              className="max-w-sm  rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
    </section>
  );
}
