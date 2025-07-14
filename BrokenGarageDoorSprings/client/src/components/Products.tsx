import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronDown, X, Phone } from 'lucide-react';

// Product images
import imgA from "../assets/images/geniebelt.png"
import imgB from "../assets/images/genieConnect.png";
import imgC from "../assets/images/Genie.png";
import imgD from "../assets/images/genieScrew.png";

interface Product {
  id: number;
  name: string;
  installed: string;
  price: string;
  badge: string;
  badgeColor: string;
  image: string;
  description: string;
  shortPoints: string[];
  model: string;
  isPopular: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: " Belt Drive 1/2 HP",
    installed: "installed including tax and installation",
    price: "$660.00",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    image: imgA,
    description: `The 1055B garage door opener is an ultra-quiet garage door opener with a steel-reinforced belt, making it the ideal choice for homeowners where sound could be an issue. This garage door opener has a powerful DC motor with GenieSense technology standard that will smoothly lift your sectional garage door up to 7' high and up to 350 pounds. 7’ 1” - 8' tall garage doors will need extension kit EKTB (sold separately). For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. That battery backup will power the garage door opener for up to 50 cycles when the main power is out. This transition from home power to running on the battery happens instantly when the main power is out. Like all Genie garage door openers, this opener comes equipped with Intellicode rolling code technology that prevents unauthorized persons from opening your garage door. This garage door opener includes many accessories for safety and convenience. Included is a 1-button Genie garage door opener remote and a wall button control. The Genie Safe-T-Beam garage door safety sensors ensure your family's safety with an infrared beam of light across the door opening. Our team of US-based technical support representatives are available by phone or chat to support this garage door opener`,
    shortPoints: [
      "1/2 HPc motor lifts door up to 7' & 350 lbs,",
      "Battery backup up to 50 cycles",
      "Ultra-quiet steel-reinforced belt",
      "Limited lifetime drive warranty",
      "Includes remotes & wall button"
    ],
    model: "1055B-VE",
    isPopular: false
  },
  {
    id: 2,
    name: "Belt Drive 750",
    installed: "installed including tax and installation",
    price: "$770.00",
    badge: "Ultra-Quiet",
    badgeColor: "bg-genie-green",
    image: imgB,
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
    id: 3,
    name: "Belt Drive Connect",
    installed: "installed including tax and installation",
    price: "$840.00",
    badge: "Smart",
    badgeColor: "bg-genie-blue",
    image: imgC,
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
    id: 4,
    name: "Signature Series",
    installed: "installed including tax and installation",
    price: "$915.00",
    badge: "Premium",
    badgeColor: "bg-purple-600",
    image: imgD,
    description: `The Signature Series premium screw drive smart garage door opener has an ultra-quiet 2 HPc DC motor that provides the ultimate combination of power and speed. The integrated Aladdin Connect Wi-Fi smartphone technology allows your garage door to be part of your smart home. The Genie Aladdin Connect smartphone app is free and allows you to set up individual users through their own app and set up virtual keys to operate your garage door opener. It also has a 140-Volt DC motor paired with a maintenance-free direct screw drive system that increases strength, power and provides unmatched durability, making it the ideal choice to open the heaviest garage doors. For extra safety and added convenience, this Genie garage door opener features an integrated battery backup. That battery backup will power the garage door opener for up to 50 cycles when the main power is out. You will also enjoy the added conveniences of 2 pre-programmed 3 button remotes and a wall control panel with an independent light button and vacation lock for added security. The Genie Safe-T-Beam garage door safety sensors ensure your family’s safety with an infrared beam of light across the door opening. This premium screw drive garage door opener is made with an enclosed rail design for safety and many years of reliable operation. Genie dual-frequency remotes operate on both 315 and 390 MHz to minimize interference and improve your garage door opener remote performance.`,
    shortPoints: [
      "Battery backup up to 50 cycles",
      "Exclusive screw drive lifts heavy doors",
      "Aladdin Connect Wi-Fi & voice control",
      "Includes remotes & multifunction console",
      "Safe-T-Beam reversal safety",
    ],
    model: "4063B-TKV",
    isPopular: false
  }
];


export default function Products() {
  const [openDesc, setOpenDesc] = useState<Product | null>(null);

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            2025 Genie Garage Door Opener Models
          </h2>
          <p className="text-lg text-gray-300">
            Professional installation with battery backup included
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Gradient Border Wrapper */}
              <div className="relative group rounded-2xl p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 transition-all duration-500">
                <Card className="flex flex-col h-full bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                  {/* Ribbon */}
                  {product.isPopular && (
                    <span className="absolute top-0 left-0 bg-yellow-400 text-black uppercase text-xs font-bold px-3 py-1 rounded-br-md">
                      Most Popular
                    </span>
                  )}

                  {/* Badge */}
                  <span
                    className={`absolute top-4 right-4 ${product.badgeColor} text-white uppercase text-xs font-semibold px-2 py-1 rounded shadow-md transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300`}
                  >
                    {product.badge}
                  </span>

                  {/* Image */}
                  <div className="overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>

                  <CardContent className="flex flex-col flex-grow p-6 space-y-4">
                    {/* Title */}
                    <div>
                      <h3 className="text-2xl font-bold text-green-500 ">{product.name}</h3>
                      <p className="text-sm text-gray-400">
                        Model: {product.model}
                      </p>
                    </div>

                    {/* Price & Installed */}
                    <div className="flex items-baseline space-x-3">
                      <span className="text-4xl font-extrabold text-white">
                        {product.price}
                      </span>
                      <span className="text-sm text-gray-400">
                        {product.installed}
                      </span>
                    </div>

                    {/* Points */}
                    <ul className="space-y-2 text-gray-300">
                      {product.shortPoints.map((pt, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 mr-2" />
                          <span className="text-sm">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="mt-auto flex flex-col space-y-3">
                      {/* Read Description */}
                      <button
                        onClick={() => setOpenDesc(product)}
                        className="flex items-center text-indigo-400 hover:text-indigo-200 font-medium transition-colors duration-300"
                      >
                        <ChevronDown className="w-4 h-4 mr-1 transform rotate-90" />
                        Read Description
                      </button>

                      {/* Call Now */}
                      <a
                        href="tel:310-734-0910"
                        className="flex items-center justify-center bg-green-500 hover:bg-green-400 text-black font-semibold py-3 rounded-xl transition-colors duration-300"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now: 310-734-0910
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Description Modal */}
      <AnimatePresence>
        {openDesc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 text-white rounded-2xl p-6 max-w-md w-full h-96 overflow-y-auto shadow-2xl relative"
            >
              <button
                onClick={() => setOpenDesc(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <h3 className="text-2xl font-bold mb-4">
                {openDesc.name} Details
              </h3>
              <p className="text-gray-300 leading-relaxed">{openDesc.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}