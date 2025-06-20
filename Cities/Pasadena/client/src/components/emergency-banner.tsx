import { motion } from "framer-motion";
import { Phone, AlertTriangle } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <section className="bg-professional text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="mr-4"
            >
              <AlertTriangle className="text-4xl text-urgent" size={48} />
            </motion.div>
            <h2 className="text-4xl font-bold">Emergency Garage Door Repair</h2>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
              className="ml-4"
            >
              <AlertTriangle className="text-4xl text-urgent" size={48} />
            </motion.div>
          </div>
          <p className="text-xl mb-8 text-gray-300">
            Stuck garage door? Broken spring? We're available 24/7 for emergency repairs in Pasadena and surrounding areas.
          </p>
          <motion.div 
            className="bg-emergency p-8 rounded-2xl inline-block shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ rotate: [-15, 15, -15] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mr-6"
              >
                <Phone size={64} className="text-white" />
              </motion.div>
              <div className="text-left">
                <p className="text-2xl font-bold mb-2">EMERGENCY HOTLINE</p>
                <a 
                  href="tel:626-251-2180" 
                  className="text-5xl font-bold text-phone-highlight hover:text-white transition-colors"
                >
                  626-251-2180
                </a>
                <p className="text-lg mt-2 text-gray-200">Available 24 Hours - 7 Days a Week</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
