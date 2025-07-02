// client/src/components/Header.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const header = document.querySelector("nav");
    if (element && header) {
      const headerHeight = (header as HTMLElement).offsetHeight;
      const elementY =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementY - headerHeight,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-40">
      <nav className="bg-gradient-to-r from-genie-blue to-genie-orange text-white backdrop-blur-sm shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* brand */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Home className="text-genie-green w-6 h-6" />
              <span className="text-xl font-bold text-red-700">
                Genie Door Openers
              </span>
            </motion.div>

            {/* desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              {[
                ["Home", "hero"],
                ["Products", "products"],
                ["Battery", "battery"],
                ["New & Discontinued Models", "vintage-models"],
                ["Services", "services"],
                ["FAQ", "faq"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="font-bold text-red-400 hover:text-genie-blue transition-colors"
                >
                  {label}
                </button>
              ))}
              <a
                href="tel:323-270-5387"
                className="bg-genie-orange hover:bg-genie-orange/90 text-white px-4 py-2 rounded-lg font-medium transition-colors hover:scale-105 transform duration-200"
              >
                Call Now
              </a>
            </div>

            {/* mobile menu toggle */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 bg-genie-blue hover:bg-genie-orange/90 text-white rounded-full shadow-lg transition-colors"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* mobile menu */}
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-white border-t border-gray-200"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  ["Home", "hero"],
                  ["Products", "products"],
                  ["Battery", "battery"],
                  ["New & Discontinued Models", "vintage-models"],
                  ["Services", "services"],
                  ["FAQ", "faq"],
                  ["Contact", "contact"],
                ].map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className="block w-full text-left px-3 py-2 font-bold text-red-400 hover:text-genie-blue"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href="tel:323-270-5387"
                  className="block w-full text-center bg-genie-orange hover:bg-genie-orange text-white px-3 py-2 rounded-lg font-medium mt-2"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
