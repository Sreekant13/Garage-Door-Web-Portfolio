import { motion } from "framer-motion";
import { Wrench } from "lucide-react";

export default function Header() {
  return (
    <motion.header
      className="bg-gradient-to-r from-red-600 to-gray-800 shadow-lg sticky top-0 z-50 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Wrench className="text-3xl text-white mr-3" />
            <div>
              <h1 className="text-xl font-bold text-white">
                Garage Door Repair Palos Verdes
              </h1>
              <p className="text-sm text-white/80">47+ Years Experience</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <div className="text-center">
              <div className="bg-white px-4 py-2 rounded-lg border-2 border-red-600">
                <p className="text-sm font-semibold text-red-600">
                  CALL NOW 24/7
                </p>
                <a
                  href="tel:310-734-0910"
                  className="text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors"
                >
                  310-734-0910
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <a
              href="tel:310-734-0910"
              className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors flex items-center"
            >
              <motion.span
                className="inline-block mr-2"
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                📞
              </motion.span>
              CALL
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
