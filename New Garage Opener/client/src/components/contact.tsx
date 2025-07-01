import { motion } from "framer-motion";
import { User, Phone, Clock, Award } from "lucide-react";


const phoneNumbers = [
  { number: "323-270-5387", area: "Los Angeles", emoji: "🌴" },
  { number: "310-915-4151", area: "Westside",  emoji: "🌊" },
  { number: "818-351-3131", area: "San Fernando", emoji: "🏜️" },
  { number: "562-506-1384", area: "Orange County", emoji: "🏖️" }
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-5xl font-extrabold mb-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1,   opacity: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          👋 Hey there!
        </motion.h2>
        <motion.p
          className="text-base sm:text-xl mb-12 opacity-80"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0,  opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I’m <span className="font-bold">Joseph Lucey</span> – Owner & Installer 🚪🔧<br/>
          Let’s get your garage door running like a dream! ✨
        </motion.p>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info Cards */}
          <motion.div
            className="space-y-8 text-left"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0,   opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start space-x-3">
              <span className="text-2xl sm:text-3xl">📍</span>
              <div>
                <p className="font-semibold text-lg">Service Area</p>
                <p className="text-sm">Greater Los Angeles & Beyond</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Clock className="garage-orange h-5 w-5 sm:h-6 sm:w-6" />
              <div>
                <p className="font-semibold text-lg">Hours</p>
                <p className="text-sm">Mon - Sun: 6 AM - 10 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Award className="garage-orange h-5 w-5 sm:h-6 sm:w-6" />
              <div>
                <p className="font-semibold text-lg">Experience</p>
                <p className="text-sm">47 Years in Business 🏆</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="garage-orange h-5 w-5 sm:h-6 sm:w-6" />
              <div>
                <p className="font-semibold text-lg">Call Now</p>
                <p className="text-sm">
                  <a href="tel:323-270-5387">
                    📞 323-270-5387
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Phone Buttons */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0,  opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {phoneNumbers.map((p, i) => (
              <motion.a
                key={p.number}
                href={`tel:${p.number}`}
                className="
                  flex flex-col items-center justify-center 
                  bg-garage-blue hover:bg-garage-blue/80 
                  text-white p-4 sm:p-6 rounded-xl 
                  shadow-lg font-bold transition
                  text-center
                "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
              >
                <div className="text-3xl sm:text-4xl mb-1">{p.emoji}</div>
                <div className="text-base sm:text-lg">{p.number}</div>
                <div className="text-xs sm:text-sm opacity-75 mt-1">{p.area}</div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


// import { motion } from "framer-motion";
// import { User, Phone, Clock, Award } from "lucide-react";

// const phoneNumbers = [
//   { number: "323-270-5387", area: "Los Angeles", emoji: "🌴" },
//   { number: "310-915-4151", area: "Westside",  emoji: "🌊" },
//   { number: "818-351-3131", area: "San Fernando", emoji: "🏜️" },
//   { number: "562-506-1384", area: "Orange County", emoji: "🏖️" }
// ];

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="container mx-auto px-4 text-center">
//         <motion.h2
//           className="text-5xl font-extrabold mb-4"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1,   opacity: 1 }}
//           transition={{ type: "spring", stiffness: 120 }}
//         >
//           👋 Hey there!
//         </motion.h2>
//         <motion.p
//           className="text-xl mb-12 opacity-80"
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0,  opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           I’m <span className="font-bold">Joseph Lucey</span> - Owner & Installer 🚪🔧<br/>
//           Let’s get your garage door running like a dream! ✨
//         </motion.p>

//         <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Info Cards */}
//           <motion.div
//             className="space-y-8 text-left"
//             initial={{ x: -30, opacity: 0 }}
//             animate={{ x: 0,   opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             <div className="flex items-center space-x-4">
//               <span className="text-3xl">📍</span>
//               <div>
//                 <p className="font-semibold text-lg">Service Area</p>
//                 <p>Greater Los Angeles & Beyond</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Clock className="garage-orange h-6 w-6" />
//               <div>
//                 <p className="font-semibold text-lg">Hours</p>
//                 <p>Mon – Sat: 7 AM – 7 PM</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <Award className="garage-orange h-6 w-6" />
//               <div>
//                 <p className="font-semibold text-lg">Experience</p>
//                 <p>47 Years in Business 🏆</p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <User className="garage-orange h-6 w-6" />
//               <div>
//                 <p className="font-semibold text-lg">Get in Touch</p>
//                 <p>✉️ <a href="mailto:josephlucey@yahoo.com" className="underline">Email Me</a></p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Phone Buttons */}
//           <motion.div
//             className="grid grid-cols-2 gap-4"
//             initial={{ x: 30, opacity: 0 }}
//             animate={{ x: 0,  opacity: 1 }}
//             transition={{ delay: 0.3 }}
//           >
//             {phoneNumbers.map((p, i) => (
//               <motion.a
//                 key={p.number}
//                 href={`tel:${p.number}`}
//                 className="flex flex-col items-center justify-center bg-garage-blue hover:bg-garage-blue/80 text-white p-6 rounded-xl shadow-lg font-bold transition"
//                 whileHover={{ scale: 1.05, rotate: [0, 3, -3, 0] }}
//                 whileTap={{ scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 10 }}
//               >
//                 <div className="text-4xl mb-2">{p.emoji}</div>
//                 <div className="text-lg">{p.number}</div>
//                 <div className="text-xs opacity-75 mt-1">{p.area}</div>
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
