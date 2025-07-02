// client/src/components/Footer.tsx
import { motion } from "framer-motion";
import { Facebook, Linkedin, Youtube, Phone, Clock, MapPin } from "lucide-react";

const productLinks = [
  "Genie 750",
  "Genie 7155-TKV",
  "Genie 4063B-TKV",
  "Battery Backup",
];

const serviceLinks = [
  "Installation",
  "Repair",
  "Maintenance",
  "Parts",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand + Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-orange-500">
              Genie Garage Opener
            </h3>
            <p className="text-gray-300 mb-4">
              47 years of professional garage door opener installation
              and repair services in Los Angeles and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/joseph.lucey.3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/joseph-lucey-3046a590"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://youtu.be/xLNKkaHUMfU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    // href="#products"
                    href={link === "Battery Backup" ? "#battery" : "#products"}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:323-270-5387"
                className="flex items-center text-gray-300 hover:text-orange-400 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                323-270-5387
              </a>
              <div className="flex items-center text-gray-300">
                <Clock className="mr-2 h-4 w-4" />
                Sun–Sat: 6 AM–10 PM
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="mr-2 h-4 w-4" />
                Los Angeles County
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          
          <p>&copy; 2025 Genie Door Openers. All rights reserved.</p>
          <p className="mt-2">geniedooropeners.com | genieprogaragedooropenerrepair.com | officialgenie.com</p>
        </motion.div>
      </div>
    </footer>
);
}
