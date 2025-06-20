// components/hero-section.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

// import your four images
import slide1 from "../assets/images/rossmoor.png";
import slide2 from "../assets/images/rossmoor1.png";
import slide3 from "../assets/images/rossmoor2.png";
import slide4 from "../assets/images/rossmoor3.png";

export default function HeroSection() {
  // slideshow state
  const slides = [slide1, slide2, slide3, slide4];
  const [current, setCurrent] = useState(0);

  // advance slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((idx) => (idx + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="relative text-white overflow-hidden py-16 lg:py-24"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      style={{
        backgroundImage:
          "linear-gradient(270deg, #ff6ec4 0%, #7873f5 50%, #4ade80 100%)",
        backgroundSize: "600% 600%",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* — Left text/CTA — */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <span className="bg-white text-emergency px-3 py-1 rounded-full text-sm font-bold">
                24/7 EMERGENCY
              </span>
              <span className="ml-3 text-phone-highlight">
                47+ Years Experience
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Garage Door Repair{" "}
              <span className="text-phone-highlight">Rossmoor</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Fast, affordable, and reliable garage door repair services. We
              repair all makes and models of garage doors, garage door openers, and garage door springs for over 47 years.
            </p>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-2xl inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center">
                <motion.div
                  className="mr-4"
                  animate={{ rotate: [-15, 15, -15] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Phone size={48} className="text-emergency" />
                </motion.div>
                <div>
                  <p className="text-emergency font-bold text-lg">
                    CALL NOW FOR FREE ESTIMATE
                  </p>
                  <a
                    href="tel:562-506-1384"
                    className="text-4xl font-bold text-professional hover:text-emergency transition-colors"
                  >
                    562-506-1384
                  </a>
                </div>
              </div>
            </motion.div>
            <p className="mt-4 text-phone-highlight font-semibold">
              Joseph Lucey - Licensed & Insured
            </p>
          </motion.div>

          {/* — Right slideshow + badge — */}
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl shadow-2xl border border-gray-200 overflow-visible">
            {/* inner wrapper crops the image */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]}
                  alt={`Slide ${current + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>

            {/* badge (now fully visible) */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <p className="font-bold text-2xl">24/7</p>
                <p className="text-sm">Emergency Service</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply pointer-events-none" />
    </motion.section>
  );
}

// // components/hero-section.tsx
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Phone } from "lucide-react";

// // import your four images
// import slide1 from "../assets/images/rossmoor.png";
// import slide2 from "../assets/images/rossmoor1.png";
// import slide3 from "../assets/images/rossmoor2.png";
// import slide4 from "../assets/images/rossmoor3.png";

// export default function HeroSection() {
//   // slideshow state
//   const slides = [slide1, slide2, slide3, slide4];
//   const [current, setCurrent] = useState(0);

//   // advance slide every 5s
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((idx) => (idx + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <motion.section
//       className="relative text-white overflow-hidden py-16 lg:py-24"
//       initial={{ backgroundPosition: "0% 50%" }}
//       animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//       transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
//       style={{
//         backgroundImage:
//           "linear-gradient(270deg, #ff6ec4 0%, #7873f5 50%, #4ade80 100%)",
//         backgroundSize: "600% 600%",
//       }}
//     >
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* — Left text/CTA — */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center mb-4">
//               <span className="bg-white text-emergency px-3 py-1 rounded-full text-sm font-bold">
//                 24/7 EMERGENCY
//               </span>
//               <span className="ml-3 text-phone-highlight">
//                 47+ Years Experience
//               </span>
//             </div>
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               Garage Door Repair{" "}
//               <span className="text-phone-highlight">Rossmoor</span>
//             </h1>
//             <p className="text-xl mb-8 text-gray-100">
//               Fast, affordable, and reliable garage door repair services. We
//               repair all makes and models of garage doors, openers, and springs.
//             </p>
//             <motion.div
//               className="bg-white p-6 rounded-2xl shadow-2xl inline-block"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="flex items-center">
//                 <motion.div
//                   className="mr-4"
//                   animate={{ rotate: [-15, 15, -15] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <Phone size={48} className="text-emergency" />
//                 </motion.div>
//                 <div>
//                   <p className="text-emergency font-bold text-lg">
//                     CALL NOW FOR FREE ESTIMATE
//                   </p>
//                   <a
//                     href="tel:562-506-1384"
//                     className="text-4xl font-bold text-professional hover:text-emergency transition-colors"
//                   >
//                     562-506-1384
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//             <p className="mt-4 text-phone-highlight font-semibold">
//               Joseph Lucey - Licensed & Insured
//             </p>
//           </motion.div>
          
//           {/* — Right slideshow + badge — */}
//           <div className="relative">
//             <AnimatePresence mode="wait">
//               <motion.img
//                 key={current}
//                 src={slides[current]}
//                 alt={`Slide ${current + 1}`}
//                 className="w-full h-auto rounded-2xl shadow-2xl object-cover"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 1 }}
//               />
//             </AnimatePresence>

//             {/* badge */}
//             <motion.div
//               className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 1, type: "spring", stiffness: 300 }}
//             >
//               <div className="text-center">
//                 <p className="font-bold text-2xl">24/7</p>
//                 <p className="text-sm">Emergency Service</p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* dark overlay */}
//       <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply pointer-events-none" />
//     </motion.section>
//   );
// }
  

// import { motion } from "framer-motion";
// import { Phone } from "lucide-react";
// import slide1 from "../assets/images/rossmoor.png";
// import slide2 from "../assets/images/rossmoor1.png";
// import slide3 from "../assets/images/rossmoor2.png";
// import slide4 from "../assets/images/rossmoor3.png";

// export default function HeroSection() {
//   return (
//     <motion.section
//       className="relative text-white overflow-hidden py-16 lg:py-24"
//       // start the gradient at 0% 50%
//       initial={{ backgroundPosition: "0% 50%" }}
//       // animate it to 100% 50% and back
//       animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
//       transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
//       style={{
//         backgroundImage:
//           "linear-gradient(270deg, #ff6ec4 0%, #7873f5 50%, #4ade80 100%)",
//         backgroundSize: "600% 600%",
//       }}
//     >
//       {/* content wrapper */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
//           {/* left text/CTA */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <div className="flex items-center mb-4">
//               <span className="bg-white text-emergency px-3 py-1 rounded-full text-sm font-bold">
//                 24/7 EMERGENCY
//               </span>
//               <span className="ml-3 text-phone-highlight">
//                 47+ Years Experience
//               </span>
//             </div>
//             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
//               Garage Door Repair{" "}
//               <span className="text-phone-highlight">Rossmoor</span>
//             </h1>
//             <p className="text-xl mb-8 text-gray-100">
//               Fast, affordable, and reliable garage door repair services. We
//               repair all makes and models of garage doors, openers, and springs.
//             </p>
//             <motion.div
//               className="bg-white p-6 rounded-2xl shadow-2xl inline-block"
//               whileHover={{ scale: 1.05 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <div className="flex items-center">
//                 <motion.div
//                   className="mr-4"
//                   animate={{ rotate: [-15, 15, -15] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <Phone size={48} className="text-emergency" />
//                 </motion.div>
//                 <div>
//                   <p className="text-emergency font-bold text-lg">
//                     CALL NOW FOR FREE ESTIMATE
//                   </p>
//                   <a
//                     href="tel:562-506-1384"
//                     className="text-4xl font-bold text-professional hover:text-emergency transition-colors"
//                   >
//                     562-506-1384
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//             <p className="mt-4 text-phone-highlight font-semibold">
//               Joseph Lucey - Licensed & Insured
//             </p>
//           </motion.div>
          
//           {/* right image + badge */}
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&h=600"
//               alt="Professional garage door repair service"
//               className="w-full h-auto rounded-2xl shadow-2xl"
//             />
//             <motion.div
//               className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ delay: 1, type: "spring", stiffness: 300 }}
//             >
//               <div className="text-center">
//                 <p className="font-bold text-2xl">24/7</p>
//                 <p className="text-sm">Emergency Service</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* optional overlay to soften colors */}
//       <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply pointer-events-none" />
//     </motion.section>
//   );
// }

// // import { motion } from "framer-motion";
// // import { Phone } from "lucide-react";

// // export default function HeroSection() {
// //   return (
// //     <section className="bg-gradient-to-br from-emergency to-urgent text-white py-16 lg:py-24">
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //           <motion.div
// //             initial={{ opacity: 0, x: -50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8 }}
// //           >
// //             <div className="flex items-center mb-4">
// //               <span className="bg-white text-emergency px-3 py-1 rounded-full text-sm font-bold">
// //                 24/7 EMERGENCY
// //               </span>
// //               <span className="ml-3 text-phone-highlight">47+ Years Experience</span>
// //             </div>
// //             <h1 className="text-4xl lg:text-6xl font-bold mb-6">
// //               Garage Door Repair 
// //               <span className="text-phone-highlight"> Rossmoor</span>
// //             </h1>
// //             <p className="text-xl mb-8 text-gray-100">
// //               Fast, affordable, and reliable garage door repair services. 
// //               We repair all makes and models of garage doors, openers, and springs.
// //             </p>
// //             <motion.div 
// //               className="bg-white p-6 rounded-2xl shadow-2xl inline-block"
// //               whileHover={{ scale: 1.05 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <div className="flex items-center">
// //                 <motion.div
// //                   animate={{ rotate: [-15, 15, -15] }}
// //                   transition={{ duration: 1.5, repeat: Infinity }}
// //                   className="mr-4"
// //                 >
// //                   <Phone size={48} className="text-emergency" />
// //                 </motion.div>
// //                 <div>
// //                   <p className="text-emergency font-bold text-lg">CALL NOW FOR FREE ESTIMATE</p>
// //                   <a 
// //                     href="tel:562-506-1384" 
// //                     className="text-4xl font-bold text-professional hover:text-emergency transition-colors"
// //                   >
// //                     562-506-1384
// //                   </a>
// //                 </div>
// //               </div>
// //             </motion.div>
// //             <p className="mt-4 text-phone-highlight font-semibold">Joseph Lucey - Licensed & Insured</p>
// //           </motion.div>
          
// //           <motion.div 
// //             className="relative"
// //             initial={{ opacity: 0, x: 50 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.8, delay: 0.2 }}
// //           >
// //             <img 
// //               src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
// //               alt="Professional garage door repair service" 
// //               className="rounded-2xl shadow-2xl w-full h-auto" 
// //             />
// //             <motion.div 
// //               className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg"
// //               initial={{ scale: 0 }}
// //               animate={{ scale: 1 }}
// //               transition={{ delay: 1, type: "spring", stiffness: 300 }}
// //             >
// //               <div className="text-center">
// //                 <p className="font-bold text-2xl">24/7</p>
// //                 <p className="text-sm">Emergency Service</p>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
