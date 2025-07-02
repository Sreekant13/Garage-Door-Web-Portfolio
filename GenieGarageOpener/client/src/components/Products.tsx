// client/src/components/Products.tsx
import React from 'react';
import { motion } from 'framer-motion';
import imgB from '../assets/images/Genie.png';
import imgA from '../assets/images/genieConnect.png';
import imgC from '../assets/images/genieScrew.png';

// const cycleColors = [
//   "#FFFBEB", // amber-50
//   "#ECFDF5", // teal-50
//   "#EFF6FF", // blue-50
// ];
const cycleColors = [
  "#FFFBEB", // amber-50
  "#ECFDF5", // teal-50
  "#EDE9FE", // violet-50
  "#FEF3C7", // yellow-50
  "#F0F9FF", // sky-50
  "#FCE7F3", // pink-50
];

const products = [
  {
    id: 1,
    name: "Belt Drive 750",
    installed: "installed including tax and installation",
    price: "$770.00",
    badge: "Ultra-Quiet",
    badgeColor: "bg-genie-green",
    image: imgA,
    description: `The Belt Drive 750 belt drive garage door opener is an ultra-quiet garage door opener with a steel-reinforced belt, making it the ideal choice for homeowners where sound could be an issue. This garage door opener has a powerful DC motor. This Genie garage door opener features an integrated battery backup. That battery backup will power the garage door opener for up to 50 cycles when the main power is out. This transition from home power to running on the battery happens instantly when the main power is out. Like all Genie garage door openers, the StealthDrive 750 comes equipped with Intellicode rolling code technology that prevents unauthorized persons from opening your garage door. The Genie garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening.`,
    shortPoints: [
      "1¼ HP DC motor lifts doors up to 7' & 500 lbs",
      "Battery backup delivers up to 50 cycles",
      "Intellicode rolling-code security",
      "HomeLink + Car2U built-in, no extra hardware",
      "Safe-T-Beam reverses on obstruction"
    ],
    model: "7055-TKV",
    isPopular: false
  },
  {
    id: 2,
    name: "Belt Drive Connect",
    installed: "installed including tax and installation",
    price: "$840.00",
    badge: "Smart",
    badgeColor: "bg-genie-blue",
    image: imgB,
    description: `The integrated Aladdin Connect Wi-Fi smartphone technology allows your garage door to be part of your smart home, while app alerts keep you in control and your garage secure. The Genie Aladdin Connect smartphone app is free and allows you to set up virtual keys to individual users through their own app, and is compatible with Alexa and Google Assistant. The Belt Drive Connect smart garage door opener has a powerful DC motor with Genie Sense technology standard. For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. The battery backup will power the garage door opener for up to 50 cycles when the main power is out. The Belt Drive Connect includes many accessories for safety and convenience. Included are two pre-programmed 3-button remotes, a wireless keypad and a multi-function wall console that provides you with a light control button and a vacation lock. The Genie Safe-T-Beam garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening. This Genie garage door opener is packed full of features that allow you to open, close and monitor your garage door safely. For use on residential sectional garage doors only.`,
    shortPoints: [
      "Strong & quiet 1¼ HP DC motor",
      "Aladdin Connect Wi-Fi: phone, Alexa & Google",
      "Battery backup up to 50 cycles",
      "Includes remotes, keypad & console",
      "Service, oil & balance included"
    ],
    model: "7155-TKV",
    isPopular: true
  },
  {
    id: 3,
    name: "Signature Series",
    installed: "installed including tax and installation",
    price: "$915.00",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    image: imgC,
    description: `The Signature Series premium screw drive smart garage door opener has an ultra-quiet 2 HPc DC motor that provides the ultimate combination of power and speed. The integrated Aladdin Connect Wi-Fi smartphone technology allows your garage door to be part of your smart home. The Genie Aladdin Connect smartphone app is free and allows you to set up individual users through their own app and set up virtual keys to operate your garage door opener. It also has a 140-Volt DC motor paired with a maintenance-free direct screw drive system that increases strength, power and provides unmatched durability, making it the ideal choice to open the heaviest garage doors. For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. That battery backup will power the garage door opener for up to 50 cycles when the main power is out. You will also enjoy the added conveniences of 2 pre-programmed 3 button remotes and a wall control panel with an independent light button and vacation lock for added security. The Genie Safe-T-Beam garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening. This premium screw drive garage door opener is made with an enclosed rail design for safety and many years of reliable operation. Genie dual-frequency remotes operate on both 315 and 390 MHz to minimize interference and improve your garage door opener remote performance.`,
    shortPoints: [
      "Battery backup up to 50 cycles",
      "Exclusive screw drive lifts heavy doors",
      "Limited lifetime drive warranty",
      "Aladdin Connect Wi-Fi & voice control",
      "Includes remotes & multifunction console",
      "Safe-T-Beam reversal safety"
    ],
    model: "4063B-TKV",
    isPopular: false
  }
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">2025 Genie Models</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose from our premium lineup of garage door openers with advanced features and reliable performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              className={`
                flex flex-col h-full rounded-2xl shadow-xl
                transform hover:scale-105 transition-transform duration-300
                ${product.isPopular ? 'border-4 border-genie-orange relative' : ''}
              `}
              initial={{
                opacity: 0,
                y: 50,
                backgroundColor: cycleColors[0]
              }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundColor: [...cycleColors, cycleColors[0]]
              }}
              transition={{
                opacity: { duration: 0.6, delay: idx * 0.2 },
                y: { duration: 0.6, delay: idx * 0.2 },
                backgroundColor: {
                  duration: cycleColors.length * 3,
                  times: [0, 1 / 3, 2 / 3, 1],
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {product.isPopular && (
                <div className="absolute top-4 right-4 bg-genie-orange text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  POPULAR
                </div>
              )}

              {/* image container - now transparent so card BG shines through */}
              <div className="w-full h-64 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <div
                    className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}
                  >
                    {product.badge}
                  </div>
                </div>

                <div className="text-3xl font-bold text-genie-orange mb-4">
                  {product.price}{" "}
                  <span className="text-sm font-normal text-gray-600 ml-1">
                    {product.installed}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {product.shortPoints.map((pt, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <i className="fas fa-check-circle text-genie-green mr-2 mt-1" /> {pt}
                    </li>
                  ))}
                </ul>

                {/* scrollable description */}
                <div className="overflow-y-auto max-h-32 mb-6 pr-2 text-gray-700 whitespace-pre-line">
                  {product.description}
                </div>

                <a
                  href="tel:323-270-538-7"
                  className="mt-auto block text-center py-3 rounded-lg bg-genie-blue hover:bg-genie-blue-dark text-white font-semibold transition-colors"
                >
                  <i className="fas fa-phone mr-2" /> Order Now
                </a>
                <p className="text-sm font-bold text-gray-800 text-center mt-2">
                  Model: {product.model}
                </p>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
