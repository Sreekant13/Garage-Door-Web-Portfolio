import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingPhone() {
  return (
    <motion.div 
      className="fixed bottom-6 right-6 z-50 md:hidden"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 300 }}
    >
      <motion.a
        href="tel:818-351-3131"
        className="bg-emergency text-white p-4 rounded-full shadow-2xl hover:bg-emergency/90 transition-colors block"
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 25px 50px -12px rgba(220, 38, 38, 0.25)",
            "0 25px 50px -12px rgba(220, 38, 38, 0.5)",
            "0 25px 50px -12px rgba(220, 38, 38, 0.25)"
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          animate={{ rotate: [-15, 15, -15] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <Phone size={32} />
        </motion.div>
      </motion.a>
    </motion.div>
  );
}
