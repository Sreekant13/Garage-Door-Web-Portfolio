// src/components/FloatingActionButton.tsx
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingActionButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="tel:323-270-5387"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-orange-500 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-orange-600 transition-all group"
      >
        <Phone className="w-6 h-6 group-hover:animate-wiggle" />
      </motion.a>
    </motion.div>
  );
}
