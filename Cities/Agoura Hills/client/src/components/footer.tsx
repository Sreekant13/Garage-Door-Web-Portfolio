import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const services = [
  "Garage Door Repair",
  "Opener Installation & Repair", 
  "Spring Replacement",
  "New Door Installation",
  "Cable & Roller Repair",
  "Emergency 24/7 Service",
  "Free Phone Estimates"
];

const socialLinks = [
  { icon: FaFacebook, href: "https://www.facebook.com/joseph.lucey.3", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtu.be/xLNKkaHUMfU", label: "YouTube" },
  // { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedin, href: "linkedin.com/in/joseph-lucey-3046a590", label: "LinkedIn" }
];

export default function Footer() {
  return (
    <footer className="bg-professional text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Garage Door Repair Agoura Hills</h3>
            <p className="text-gray-300 mb-4">
              Joseph Lucey has been providing reliable garage door repair services in Agoura Hills and surrounding areas for over 47 years.
            </p>
            <motion.div 
              className="bg-phone-highlight p-4 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-emergency font-bold text-center">CALL ANYTIME</p>
              <a 
                href="tel:818-351-3131" 
                className="text-2xl font-bold text-professional text-center block hover:text-emergency transition-colors"
              >
                818-351-3131
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="text-3xl text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
            <div className="text-gray-300 space-y-2">
              <p className="flex items-center">
                <MapPin size={16} className="mr-2" />
                Serving Agoura Hills & Surrounding Areas
              </p>
              <p className="flex items-center">
                <Phone size={16} className="mr-2" />
                818-351-3131
              </p>
              <p className="flex items-center">
                <Clock size={16} className="mr-2" />
                24/7 Emergency Service
              </p>
            </div>
          </motion.div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="text-center text-gray-400">
          <p>&copy; 2025 Garage Door Repair Agoura Hills. All Rights Reserved.</p>
          <p className="mt-2 text-sm">
            Garage Door Repair Agoura Hills | Agoura Hills Garage Door Repair | New Garage Door Opener Agoura Hills | Agoura Hills Garage Door Springs | Agoura Hills Garage Door Springs
          </p>
        </div>
      </div>
    </footer>
  );
}
