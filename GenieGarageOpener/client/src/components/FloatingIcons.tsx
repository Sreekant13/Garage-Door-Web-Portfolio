// src/components/FloatingIcons.tsx
import { motion } from "framer-motion";
import { Phone, Facebook, Linkedin } from "lucide-react";

export default function FloatingIcons() {
  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 space-y-4">
      {/* 1) Call button */}
      <motion.a 
        href="tel:323-270-5387" 
        className="block bg-genie-orange hover:bg-genie-orange-darker text-white p-3 rounded-full shadow-lg transition-transform"
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Phone className="w-5 h-5" />
      </motion.a>
      
      {/* 2) Facebook button */}
      <motion.a 
        href="https://www.facebook.com/joseph.lucey.3" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-genie-blue hover:bg-genie-blue-darker text-white p-3 rounded-full shadow-lg transition-opacity"
        whileHover={{ scale: 1.1 }}
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ 
          opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Facebook className="w-5 h-5" />
      </motion.a>
      
      {/* 3) LinkedIn button */}
      <motion.a 
        href="https://www.linkedin.com/in/joseph-lucey-3046a590" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block bg-genie-green hover:bg-genie-green-darker text-white p-3 rounded-full shadow-lg transition-transform"
        whileHover={{ scale: 1.1 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Linkedin className="w-5 h-5" />
      </motion.a>
    </div>
  );
}
