// components/ServiceAreas.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import area0 from "../assets/images/serviceareaimage.png";
import area1 from "../assets/images/serviceareaimage1.png";
import area2 from "../assets/images/serviceareaimage2.png";
import area3 from "../assets/images/serviceareaimage3.png";
import area4 from "../assets/images/serviceareaimage4.png";
import area5 from "../assets/images/serviceareaimage5.png";

const slides = [area0, area1, area2, area3, area4, area5];

const losAngelesAreas = [
  "Hollywood Hills","Silver Lake","Los Feliz","West Hollywood",
  "Beverly Hills","Valley Village","North Hollywood","Westwood","Sherman Oaks",
];

const orangeCountyAreas = [
  "Genie","Chamberlain","Liftmaster","Marantec",
  "Sears Craftsman","Crusader","Automatic Doormen","BlueMax",
];

export default function ServiceAreas() {
  const [current, setCurrent] = useState(0);

  // Advance slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-professional mb-4">
            Service Areas
          </h2>
          <p className="text-xl text-gray-600">
            Providing garage door repair services throughout Southern California
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ← Slideshow Column → */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]}
                  alt={`Service area map ${current + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
              </AnimatePresence>
              {/* Prev */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={24} />
              </button>
              {/* Next */}
              <button
                onClick={next}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                aria-label="Next Slide"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </motion.div>

          {/* → Areas List Column ← */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-professional mb-6">
                  Primary Service Areas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-600">
                  <div className="space-y-2">
                    <p className="font-semibold text-emergency">
                      Los Angeles County:
                    </p>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      {losAngelesAreas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold text-emergency">
                      2025 Garage Door Opener Models:
                    </p>
                    <ul className="space-y-1 text-sm list-disc list-inside">
                      {orangeCountyAreas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <motion.div
                  className="mt-8 text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-phone-highlight p-4 rounded-lg border-2 border-urgent">
                    <p className="font-bold text-emergency mb-2">
                      CALL FOR SERVICE IN YOUR AREA
                    </p>
                    <a
                      href="tel:323-270-5387"
                      className="text-3xl font-bold text-professional hover:text-emergency transition-colors"
                    >
                      323-270-5387
                    </a>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
