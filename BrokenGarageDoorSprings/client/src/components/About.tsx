// src/components/AboutAndSpringsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Joseph from "@/assets/images/Joseph2.png";
import SpringsWarehouse from "@/assets/images/springs_warehouse.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutAndSpringsSection() {
  return (
    <section id="about" className="flex flex-col bg-gray-800">
      {/* ABOUT: 47 YEARS IN BUSINESS */}
      <motion.section
        className="relative py-16 overflow-hidden bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        {/* Colorful Blob Behind */}
        <div className="absolute -left-32 -top-16 w-64 h-64 bg-gray-800 rounded-full opacity-40 filter blur-3xl" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-40 relative">
          {/* Text */}
          <div className="space-y-4 md:pr-8">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              47 Years Replacing Broken Garage Door Springs
            </h2>
            <p className="text-gray-300">
              We repair garage doors <span className="font-semibold text-blue-400">right the first time</span>! That’s why we need to work a larger area. If
              you’re repairing garage door properly, customers return every {' '}
              <span className="font-semibold text-blue-400">6–12 years</span>.Their
                needs will range from replacing a garage door
                or broken springs to repairing or installing a
                new door opener such as a Genie,
                Chamberlain or Liftmaster opener unit.
            </p>
            <p className="text-gray-300">
              From replacing <span className="text-blue-400">broken springs</span> to installing new openers like
              <span className="text-blue-400"> Genie</span>,<span className="text-blue-400"> Chamberlain</span>, or
              <span className="text-blue-400"> LiftMaster</span> units, we handle it all. No matter the issue or distance -
              we appreciate your business as much as you appreciate our commitment to 47 years of customer satisfaction.
            </p>
          </div>

          {/* Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
          >
            <img
              src={Joseph}
              alt="Joseph"
              className="w-64 h-64 rounded-xl object-cover ring-4 ring-indigo-300 shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SPRINGS: AMERICAN-MADE HIGH CYCLE */}
      <motion.section
        className="relative py-16 overflow-hidden bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        {/* Colorful Blob Behind */}
        <div className="absolute -right-32 -bottom-16 w-64 h-64 bg-gray-800 rounded-full opacity-40 filter blur-3xl" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-40 relative">
          {/* Image on left */}
          <motion.div
            className="flex justify-center md:justify-start md:mr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
          >
            <img
              src={SpringsWarehouse}
              alt="Shelves stocked with garage door springs"
              className="w-64 h-64 rounded-xl object-cover ring-4 ring-green-300 shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <div className="space-y-4 md:pl-8">
            <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-600">
              American-Made Springs
            </h3>
            <p className="text-gray-300">
              We use garage door springs manufactured by <strong className="text-green-400">American Garage Door Spring MFG</strong>.
              These are high quality springs manufactured right here in Los Angeles, California.
            </p>
            <p className="text-gray-300">
              I’ve been buying American springs for over <span className="text-green-400 font-semibold">30 years</span>.
              They also manufacture <strong className="text-green-400">HIGH CYCLE SPRINGS</strong>. Most garage door manufacturers
              give{' '}
              <span className="text-green-400 font-semibold">10,000 to 12,000 cycle springs</span> with their garage doors.
              Those garage door torsion springs will normally last on average{' '}
              <span className="text-green-400 font-semibold">6 to 10 years</span>.
              <strong className="text-green-400"> HIGH CYCLE SPRINGS can double to triple that amount of time.</strong>
            </p>
            <p className="text-gray-300">
              That’s to say you don’t mind paying extra for your garage door springs.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
}
