import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function FloatingContact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        asChild
        className="bg-primary text-white w-16 h-16 rounded-full shadow-lg hover:bg-blue-700 transition-colors p-0"
      >
        <a href="tel:323-270-5387">
          <Phone className="h-6 w-6" />
        </a>
      </Button>
    </motion.div>
  );
}
