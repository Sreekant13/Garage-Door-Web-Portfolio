import React from 'react';
import { motion } from 'framer-motion';
import background from '../assets/images/servicebackground.png';
import DailyCalendar from './DailyCalender';
import InteractiveCalendar from './InteractiveCalender';

const phoneNumbers = [
  { number: '323-270-5387', area: 'Los Angeles' },
  { number: '310-915-4151', area: 'Westside' },
  { number: '818-351-3131', area: 'San Fernando' },
  { number: '562-506-1384', area: 'Orange County' }
];

const brands = [
  { name: 'GENIE', width: 110 },
  { name: 'CHAMBERLAIN', width: 110 },
  { name: 'LIFTMASTER', width: 110 },
  { name: 'MARANTEC', width: 110 },
  // { name: 'LINEAR', width: 110 },
  // { name: 'CRAFTSMAN', width: 110 },
  // { name: 'STANLEY', width: 110 },
  { name: 'CRUSADER', width: 110 }
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={background} alt="Garage interior" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
      </div>

      {/* Calendars */}
      <div className="absolute top-2 right-6 z-20">
        <div className="block sm:hidden">
          <DailyCalendar />
        </div>
        <div className="hidden sm:block">
          <InteractiveCalendar />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-20 lg:py-32">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-green-500">Sectional Garage Door Springs</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          WE OUTSELL THEM ALL. 47 YEARS IN BUSINESS
          <br />
          IT'S ALL BECAUSE OF YOU, THANK YOU.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-lg shadow-md hover:scale-105 transform transition"
            >
              <svg width={brand.width} height={40} viewBox={`0 0 ${brand.width} 40`}>
                <text
                  x="50%"
                  y="50%"
                  dy="0.35em"
                  fontFamily="Arial, sans-serif"
                  fontSize="14"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                >
                  {brand.name}
                </text>
              </svg>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {phoneNumbers.map((phone, i) => (
            <motion.a
              key={phone.number}
              href={`tel:${phone.number}`}
              className="flex flex-col items-center bg-green-500 hover:bg-green-600 text-white px-4 py-6 rounded-xl shadow-lg transform transition hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            >
              <span className="text-2xl mb-1">📞</span>
              <span className="font-bold text-lg">{phone.number}</span>
              <span className="text-sm text-gray-100 mt-1">{phone.area}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
