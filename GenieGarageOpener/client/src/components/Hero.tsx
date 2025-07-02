// client/src/components/Hero.tsx
import { motion } from "framer-motion";
import LiveDate from "./LiveDate";
import ImageGeniepp from "../assets/images/GeniePP.png";

export default function Hero() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative py-20 bg-dynamic flex items-center justify-center text-white overflow-hidden"
    >
      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.i
          className="fas fa-cog absolute top-20 left-10 text-white/20 text-4xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.i
          className="fas fa-tools absolute top-32 right-20 text-white/20 text-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.i
          className="fas fa-home absolute bottom-32 left-20 text-white/20 text-5xl"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.i
          className="fas fa-shield-alt absolute bottom-20 right-32 text-white/20 text-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div
          className="glass-effect rounded-3xl px-8 py-12 md:px-12 md:py-16 max-w-4xl mx-auto mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            NEW GENIE GARAGE DOOR OPENERS
            <span className="block text-2xl md:text-3xl font-normal mt-2 text-yellow-300">
              2025 MODEL
            </span>
          </motion.h1>

          {/* Live Date */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <LiveDate />
          </motion.div>

          {/* Installation line with picture */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Left: larger image on md+ */}
            <img
              src={ImageGeniepp}
              alt="Genie Pro"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto md:mx-0 rounded-lg shadow-lg"
            />
            {/* Right: more breathing room for text */}
            <p className="text-center md:text-left text-xl md:text-2xl leading-relaxed">
              Professional garage door opener installation starting at{" "}
              <span className="text-yellow-300 font-bold">$660.00</span> with
              reliable battery backup, two remotes, and garage door balancing
              included!
            </p>
          </motion.div>

          {/* Call Button */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="tel:323-270-5387"
              className="bg-genie-orange hover:bg-genie-orange text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-phone mr-2"></i>323-270-5387
            </a>
          </motion.div>

          {/* Footer notes */}
          <motion.div
            className="text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="mb-2">
              <i className="fas fa-star text-yellow-300 mr-2"></i>
              47 Years of Professional Experience
            </p>
            <p>
              <i className="fas fa-user-tie text-yellow-300 mr-2"></i>
              Call Joseph Lucey for Fast Appointments
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll-down arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={scrollToProducts}
      >
        <div className="text-white text-2xl">
          <i className="fas fa-chevron-down"></i>
        </div>
      </motion.div>
    </section>
  );
}
