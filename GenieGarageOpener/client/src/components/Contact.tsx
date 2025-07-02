// src/components/Contact.tsx
import React from "react";
import { motion } from "framer-motion";
import { Phone, Smartphone, CheckCircle } from "lucide-react";

const phoneNumbers = [
  {
    number: "323-270-5387",
    description: "Primary Line",
    icon: Phone,
    gradient: "from-orange-500 to-orange-600"
  },
  {
    number: "310-915-4151",
    description: "West LA",
    icon: Smartphone,
    gradient: "from-blue-500 to-blue-600"
  },
  {
    number: "818-351-3131",
    description: "San Fernando",
    icon: Phone,
    gradient: "from-green-500 to-green-600"
  },
  {
    number: "562-506-1384",
    description: "Orange County",
    icon: Smartphone,
    gradient: "from-purple-500 to-purple-600"
  }
];

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
      {/* background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600"
          alt="Garage pros at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Get Started?
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Call Joseph Lucey today for fast & easy appointments - 47 years of professional experience you can trust.
        </motion.p>

        {/* Phone Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {phoneNumbers.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.a
                key={p.number}
                href={`tel:${p.number}`}
                className={`
                  flex flex-col items-center justify-center p-8 rounded-2xl
                  bg-gradient-to-br ${p.gradient}
                  shadow-lg transform hover:-translate-y-1 transition
                `}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 mb-4 rounded-full bg-white/30 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-semibold">{p.number}</span>
                <span className="text-sm text-gray-200 mt-1">{p.description}</span>
              </motion.a>
            );
          })}
        </div>

        {/* Included Services */}
        <motion.div
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6">What's Included in Every Installation</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {includedServices.map((svc, idx) => (
              <motion.div
                key={svc}
                className="flex items-center text-gray-100"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <span>{svc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
