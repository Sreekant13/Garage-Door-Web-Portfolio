// src/components/Footer.tsx
import { motion } from "framer-motion";
import { Phone, Award, Star, Shield, Wrench } from "lucide-react";

export default function Footer() {
  const phoneNumbers = [
    { number: "323-270-5387", area: "Main Line" },
    { number: "310-915-4151", area: "West LA" },
    { number: "818-351-3131", area: "Valley" },
    { number: "562-506-1384", area: "South Bay" },
  ];

  return (
    <footer id="contact" className="footer-bg text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="font-bold text-2xl">GarageDoor Pro</h3>
                <p className="text-gray-400">47 Years of Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              We outsell them all! Thank you for 47 years of trust and support. Your premier choice for garage door opener installation and repair in Southern California.
            </p>
            <div className="space-y-3">
              {[
                { icon: Award, text: "47 Years in Business" },
                { icon: Wrench, text: "Professional Installation" },
                { icon: Shield, text: "Full Parts & Service" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <item.icon className="w-5 h-5 text-orange-500 mr-3" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phoneNumbers.map((p, i) => (
                <motion.a
                  key={i}
                  href={`tel:${p.number}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="feature-card p-4 rounded-xl hover:bg-white/20 transition-all group"
                >
                  <Phone className="w-6 h-6 text-orange-500 mb-2 group-hover:animate-wiggle" />
                  <p className="font-semibold">{p.area}</p>
                  <p className="text-gray-300">{p.number}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
            <div>
            <h4 className="text-white text-lg font-semibold mb-2">
              Other places we provide service to:
            </h4>
            <div className="text-sm leading-relaxed space-y-2">
              <p>
                Agoura Hills | Alhambra | Arcadia | Artesia | Avalon | Azusa |
                Baldwin Park | Bell | Bell Gardens | Bellflower | Rossmoor |
                Bradbury | Burbank | Calabasas | Los Angeles County, Orange County |
                Cerritos | Claremont | Commerce | Compton | Covina | Cudahy |
                Culver City | Diamond Bar | Downey | Duarte | El Monte | El Segundo |
                Gardena | Glendale | Glendora | Hawaiian Gardens | Hawthorne |
                Hermosa Beach | Hidden Hills | Huntington Park | Industry |
                Inglewood | Irwindale | La Cañada Flintridge | La Habra Heights |
                La Mirada | La Puente | La Verne | Lakewood | Lancaster | Lawndale |
                Lomita | Long Beach | Los Angeles | Lynwood | Malibu | Manhattan Beach |
                Maywood | Monrovia | Montebello | Monterey Park | Norwalk | Palmdale |
                Palos Verdes Estates | Paramount | Pasadena | Pico Rivera | Pomona |
                Rancho Palos Verdes | Redondo Beach | Rolling Hills |
                Rolling Hills Estates | Rosemead | San Dimas | San Fernando |
                San Gabriel | San Marino | Santa Clarita | Santa Fe Springs |
                Santa Monica | Sierra Madre | Signal Hill | South El Monte | South Gate |
                South Pasadena | Temple City | Torrance | Vernon | Walnut |
                West Covina | West Hollywood | Westlake Village | Whittier
              </p>
              <p>
                Anaheim | Brea | Buena Park | Costa Mesa | Cypress | Fountain Valley |
                Fullerton | Garden Grove | Huntington Beach | La Habra | La Palma |
                Los Alamitos | Orange | Placentia | Santa Ana | Seal Beach | Stanton |
                Tustin | Villa Park | Westminster | Yorba Linda
              </p>
            </div>
          </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 mb-4">
            © 2025 GarageDoor Pro. All rights reserved. | Serving Southern California for 47 Years
          </p>
          {/* <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Warranty Info</a>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}
