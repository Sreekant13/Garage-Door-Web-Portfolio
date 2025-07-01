import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a
        href="tel:323-270-5387"
        className="bg-garage-orange hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 block animate-pulse-soft"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone className="h-6 w-6" />
      </motion.a>
    </motion.div>
  );
}
