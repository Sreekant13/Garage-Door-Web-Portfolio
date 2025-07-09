// src/components/AboutAndSpringsSection.tsx
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import Joseph from "@/assets/images/Joseph1.png";
import Joseph1 from "@/assets/images/Joseph2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="relative flex flex-col overflow-hidden">
      {/* Soft background + pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 -z-10 opacity-[0.08] [background:radial-gradient(2px_2px_at_12px_12px,#fff_16%,transparent_16%)] [background-size:28px_28px]" />

      {/* =================== Block 1: 47 Years =================== */}
      <motion.section
        className="relative py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        variants={fadeUp}
      >
        {/* Glow accents */}
        <div className="pointer-events-none absolute -left-40 -top-24 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-16">
          {/* Text */}
          <div className="space-y-6 md:pr-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
              47 Years in Business
            </h2>
            <p className="text-base md:text-lg leading-8 text-gray-300">
              Joseph Lucey giving 47 years of quality garage door repair to customers in Los
              Angeles, San Fernando Valley and most of Orange Counties. If you’re repairing
              garage doors properly you need to cover a large area because most customers
              will only need your services once every 4 to 8 years and sometimes longer than
              that.
            </p>
            <p className="text-base md:text-lg leading-8 text-gray-300">
              I repair all makes and models of garage doors, garage door openers and garage
              door spring replacements.
            </p>
          </div>

          {/* Image */}
          <motion.div
            className="relative mx-auto flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-indigo-500/30 to-cyan-500/20 blur-xl" />
              <img
                src={Joseph}
                alt="Joseph"
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover ring-4 ring-indigo-300/60 shadow-2xl transition-transform duration-300 ease-out hover:-rotate-1 hover:scale-[1.02]"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Divider band */}
      <div className="relative mx-auto my-2 h-px w-[90%] max-w-6xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* =================== Block 2: Committed to Safety =================== */}
      <motion.section
        className="relative py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
        variants={fadeUp}
      >
        {/* Glow accents */}
        <div className="pointer-events-none absolute -right-36 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-20 top-1/3 h-64 w-64 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 md:grid-cols-2 md:px-10 lg:px-16">
          {/* Image (left on desktop) */}
          <motion.div
            className="relative order-2 md:order-1 mx-auto flex justify-center md:justify-start md:mr-6"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : 0.1 }}
          >
            <div className="relative">
              <div className="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-tr from-emerald-500/30 to-teal-400/20 blur-xl" />
              <img
                src={Joseph1}
                alt="Shelves stocked with garage door springs"
                className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover ring-4 ring-emerald-300/60 shadow-2xl transition-transform duration-300 ease-out hover:rotate-1 hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Text (right on desktop) */}
          <div className="order-1 md:order-2 space-y-6 md:pl-6">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">
              Committed to Your Safety and Satisfaction
            </h3>
            <p className="text-base md:text-lg leading-8 text-gray-300">
              Most homeowner have had the inconvenience occur of a broken garage door
              spring. The most frustrating thing is to have your car stuck in the garage when
              you need it most. That's why I lead by example and follow the industry's best
              practices to make the recommendation to educate homeowners each time I step foot
              in a garage for repair. These practices can save you time and money in the long
              run, and I want the best for my customers. That’s how I’ve stayed in business for
              over 47 years.
            </p>
          </div>
        </div>
      </motion.section>
    </section>
  );
}

// // src/components/AboutAndSpringsSection.tsx
// import React from "react";
// import { motion } from "framer-motion";
// import Joseph from "@/assets/images/Joseph1.png";
// import Joseph1 from "@/assets/images/Joseph2.png";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// export default function AboutSection() {
//   return (
//     <section id="about" className="flex flex-col bg-gray-800">
//       {/* ABOUT: 47 YEARS IN BUSINESS */}
//       <motion.section
//         className="relative py-16 overflow-hidden bg-gray-800"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6 }}
//         variants={fadeUp}
//       >
//         {/* Colorful Blob Behind */}
//         <div className="absolute -left-32 -top-16 w-64 h-64 bg-gray-800 rounded-full opacity-40 filter blur-3xl" />

//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-40 relative">
//           {/* Text */}
// <div className="space-y-4 md:pr-8">
//   <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
//     47 Years in Business
//   </h2>
//   <p className="text-gray-300">
//     Joseph Lucey giving 47 years of quality garage door repair to customers in Los
//     Angeles, San Fernando Valley and most of Orange Counties. If you’re repairing
//     garage doors properly you need to cover a large area because most customers
//     will only need your services once every 4 to 8 years and sometimes longer than
//     that.
//   </p>
//   <p className="text-gray-300">
//     I repair all makes and models of garage doors, garage door openers and garage
//     door spring replacements.
//   </p>
// </div>

//           {/* Text
//           <div className="space-y-4 md:pr-8">
//             <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
//               47 Years in Business
//             </h2>
//             <p className="text-gray-300">
//               We repair garage doors <span className="font-semibold text-blue-400">right the first time</span>! That’s why we need to work a larger area. If
// you’re repairing garage door properly, customers return every {' '}
//               <span className="font-semibold text-blue-400">6–12 years</span>.Their
// needs will range from replacing a garage door
// or broken springs to repairing or installing a
// new door opener such as a Genie,
// Chamberlain or Liftmaster opener unit.
//             </p>
//             <p className="text-gray-300">
//               From replacing <span className="text-blue-400">broken springs</span> to installing new openers like
//               <span className="text-blue-400"> Genie</span>,<span className="text-blue-400"> Chamberlain</span>, or
//               <span className="text-blue-400"> LiftMaster</span> units, we handle it all. No matter the issue or distance -
//               we appreciate your business as much as you appreciate our commitment to 47 years of customer satisfaction.
//             </p>
//           </div> */}

//           {/* Image */}
//           <motion.div
//             className="flex justify-center md:justify-end"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             variants={fadeUp}
//           >
//             <img
//               src={Joseph}
//               alt="Joseph"
//               className="w-64 h-64 rounded-xl object-cover ring-4 ring-indigo-300 shadow-2xl"
//             />
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* SPRINGS: AMERICAN-MADE HIGH CYCLE */}
//       <motion.section
//         className="relative py-16 overflow-hidden bg-gray-800"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         transition={{ duration: 0.6 }}
//         variants={fadeUp}
//       >
//         {/* Colorful Blob Behind */}
//         <div className="absolute -right-32 -bottom-16 w-64 h-64 bg-gray-800 rounded-full opacity-40 filter blur-3xl" />

//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-40 relative">
//           {/* Image on left */}
//           <motion.div
//             className="flex justify-center md:justify-start md:mr-8"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             variants={fadeUp}
//           >
//             <img
//               src={Joseph1}
//               alt="Shelves stocked with garage door springs"
//               className="w-64 h-64 rounded-xl object-cover ring-4 ring-green-300 shadow-2xl"
//             />
//           </motion.div>

//           {/* Text */}
//           <div className="space-y-4 md:pl-8">
//             <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-600">
//               Committed to Your Safety and Satisfaction
//             </h3>
//             {/* Text */}
// <p className="text-gray-300">
//   Most homeowner have had the inconvenience occur of a broken garage door
//   spring. The most frustrating thing is to have your car stuck in the garage when
//   you need it most. That's why I lead by example and follow the industry's best
//   practices to make the recommendation to educate homeowners each time I step foot
//   in a garage for repair. These practices can save you time and money in the long
//   run, and I want the best for my customers. That’s how I’ve stayed in business for
//   over 47 years.
// </p>
//             {/* <p className="text-gray-300">
//               We use garage door springs manufactured by <strong className="text-green-400">American Garage Door Spring MFG</strong>.
//               These are high quality springs manufactured right here in Los Angeles, California.
//             </p>
//             <p className="text-gray-300">
//               I’ve been buying American springs for over <span className="text-green-400 font-semibold">30 years</span>.
//               They also manufacture <strong className="text-green-400">HIGH CYCLE SPRINGS</strong>. Most garage door manufacturers
//               give{' '}
//               <span className="text-green-400 font-semibold">10,000 to 12,000 cycle springs</span> with their garage doors.
//               Those garage door torsion springs will normally last on average{' '}
//               <span className="text-green-400 font-semibold">6 to 10 years</span>.
//               <strong className="text-green-400"> HIGH CYCLE SPRINGS can double to triple that amount of time.</strong>
//             </p>
//             <p className="text-gray-300">
//               That’s to say you don’t mind paying extra for your garage door springs.
//             </p> */}
//           </div>
//         </div>
//       </motion.section>
//     </section>
//   );
// }
