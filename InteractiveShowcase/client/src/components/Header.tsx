// src/components/Navigation.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Home as HomeIcon, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#hero-section" },
  { label: "Products", href: "#products" },
  // { label: "Calculator", href: "#calculator" },
  { label: "Service Area", href: "#service-area" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-xl shadow-md border-b border-gray-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center"
            >
              <HomeIcon className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">GarageDoor Pro</h1>
              <p className="text-sm text-gray-600">47 Years of Excellence</p>
            </div>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="relative font-medium text-gray-700 hover:text-orange-500 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.a>
            ))}

            <motion.a
              href="tel:323-270-5387"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="ml-4 bg-orange-500 text-white px-5 py-2 rounded-full flex items-center shadow-lg hover:bg-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-3 py-2 rounded-md font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:323-270-5387"
                className="mt-2 block px-3 py-2 rounded-md bg-orange-500 text-white font-medium flex items-center justify-center hover:bg-orange-600 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
  