// src/components/ScrollToTop.tsx
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const threshold = 200; // px scrolled before showing button

  // calculate scroll percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = Math.min((scrollY / docHeight) * 100, 100);
      setScrollPercent(scrolled);
      setVisible(scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle setup
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-50"
        >
          <svg
            width={64}
            height={64}
            viewBox="0 0 64 64"
            className="drop-shadow-lg cursor-pointer"
          >
            <defs>
              {/* Radial gradient for the fill */}
              <radialGradient id="fillGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="100%" stopColor="#a78bfa" />
              </radialGradient>
              {/* Linear gradient for the ring */}
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>

            {/* Colorful fill circle */}
            <circle cx="32" cy="32" r={radius} fill="url(#fillGrad)" />

            {/* Gray background ring */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="4"
            />

            {/* Gradient progress ring */}
            <circle
              cx="32"
              cy="32"
              r={radius}
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="transition-stroke duration-200"
            />

            {/* Arrow icon */}
            <motion.g
              initial={{ y: 4 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <ArrowUp
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white"
                size={24}
              />
            </motion.g>
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
