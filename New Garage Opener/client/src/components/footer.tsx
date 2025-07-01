// import { Facebook, Twitter, Mail, Phone, Clock, MapPin } from "lucide-react";
import { Facebook, Linkedin, Youtube, Phone, Clock, MapPin } from "lucide-react";
const productLinks = [
  "Genie Openers",
  "Chamberlain Openers", 
  "LiftMaster Openers",
  "Battery Backup"
];

const serviceLinks = [
  "Installation",
  "Repair", 
  "Maintenance",
  "Parts"
];

export default function Footer() {
  return (
    <footer className="bg-garage-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 garage-orange">NewGarageOpener.com</h3>
            <p className="text-gray-300 mb-4">
              47 years of professional garage door opener installation and repair services in Los Angeles and surrounding areas.
            </p>
            <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/joseph.lucey.3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Facebook className="h-6 w-6" />
            </a>

            <a
            href="https://www.linkedin.com/in/joseph-lucey-3046a590"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>

            <a
              href="https://youtu.be/xLNKkaHUMfU"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              <Youtube className="h-6 w-6" />
            </a>
    </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              {productLinks.map((link) => (
                <li key={link}>
                  <a href="#products" className="hover:text-orange-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a href="#services" className="hover:text-orange-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <a 
                href="tel:323-270-5387" 
                className="flex items-center hover:text-orange-400 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                323-270-5387
              </a>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Sun-Sat: 6AM-10PM
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Los Angeles County
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NewGarageOpener.com. All rights reserved. | 47 Years in Business</p>
        </div>
      </div>
    </footer>
  );
}
