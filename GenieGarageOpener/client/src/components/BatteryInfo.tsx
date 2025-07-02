// client/src/components/BatteryInfo.tsx
import React from "react";
import { motion } from "framer-motion";
import image from "../assets/images/servicebackground.png"
const batteryFeatures = [
  {
    icon: "fas fa-battery-three-quarters",
    title: "5–7 Years",
    description: "Battery Life",
    color: "text-yellow-300",
    bgColor: "bg-yellow-300/20",
  },
  {
    icon: "fas fa-sync-alt",
    title: "50+ Cycles",
    description: "Power Outage Use",
    color: "text-green-300",
    bgColor: "bg-green-300/20",
  },
  {
    icon: "fas fa-bell",
    title: "Beep Alert",
    description: "Replace Warning",
    color: "text-orange-300",
    bgColor: "bg-orange-300/20",
  },
  {
    icon: "fas fa-check-circle",
    title: "Included",
    description: "All 2025 Models",
    color: "text-teal-300",
    bgColor: "bg-teal-300/20",
  },
];

export default function BatteryInfo() {
  return (
    <section id="battery" className="py-16 bg-gradient-to-r from-genie-blue to-blue-700 text-white 
    relative overflow-hidden
    scroll-mt-20">
      {/* Background image + dark gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt="Garage Door"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-genie-blue/70 to-blue-700/70" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            California Battery Backup Requirement
          </h2>
          <p className="text-xl text-gray-200">
            In accordance with California State Law SB-969, all installed garage door openers in the state of California must have a battery backup as of July 1, 2019. Genie offers a complete line of garage door openers that meet this requirement.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {batteryFeatures.map((feat, i) => (
            <motion.div
              key={i}
              className={`
                group flex flex-col items-center text-center p-8
                rounded-2xl bg-white/20 hover:bg-white/30 transition
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`${feat.bgColor} p-4 rounded-full mb-4`}>
                <i className={`${feat.icon} text-2xl ${feat.color}`} />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                {feat.title}
              </h3>
              <div className={`w-10 h-1 mb-4 rounded ${feat.color}`}></div>
              <p className="text-gray-100">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}