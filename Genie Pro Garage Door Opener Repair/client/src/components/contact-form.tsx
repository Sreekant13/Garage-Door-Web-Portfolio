// src/components/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, CheckCircle } from "lucide-react";
import picture from "../assets/images/Joseph1.png";

const includedServices = [
  "Battery backup system",
  "2 remote controls",
  "Door balancing",
  "Tax included",
  "Professional installation",
  "Customer Testing & training"
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Background + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
          alt="Garage pros at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto text-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Call Joseph Lucey today for fast & easy appointments –{' '}
          <span className="font-semibold">47 years</span> of professional
          experience you can trust.
        </motion.p>

        {/* Two-column centered layout */}
        <motion.div
        className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-500/30 gap-0">
          {/* Left: Joseph's Card */}
          <div className="p-6 flex flex-col items-center">
            <motion.div
              className="bg-blue-300 text-gray-900 rounded-2xl p-6 flex flex-col items-center shadow-xl w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={picture}
                alt="Joseph Lucey"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-1">Joseph Lucey</h3>
              <p className="text-sm text-gray-600 mb-4">47 Years of Experience</p>
              <a
                href="tel:3232705387"
                className="inline-flex items-center bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-lg transition text-sm"
              >
                <Phone className="w-4 h-4 mr-2" /> 323-270-5387
              </a>
            </motion.div>
          </div>

          {/* Right: Included Services */}
          <div className="p-6">
            <motion.h3
              className="text-2xl font-bold mb-6 text-center md:text-left text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              What's Included in Every Installation
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
              {includedServices.map((svc, idx) => (
                <motion.div
                  key={svc}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                  <span>{svc}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
