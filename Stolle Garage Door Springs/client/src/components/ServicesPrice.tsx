// src/components/ServicesPrice.tsx
import React from 'react';
import { Wrench, Home, Calendar, Sliders } from 'lucide-react';
import DoorImage from '@/assets/images/doorimage.png';

const BRANDS = [
  'GENIE',
  'LIFTMASTER',
  'CHAMBERLAIN',
  'CRUSADER',
  'SEARS CRAFTSMAN',
];

export default function ServicesPrice() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* Header & Brands */}
        <div className="text-center">
          {/* <h2 className="inline-block px-4 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 drop-shadow-lg"> */}
          <h2
            className="
              inline-block 
              px-4 
              text-4xl sm:text-5xl md:text-6xl   /* smaller on mobile */
              font-extrabold 
              text-transparent bg-clip-text 
              bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 
              drop-shadow-lg
              max-w-xs sm:max-w-sm md:max-w-none /* force wrap on small */
              whitespace-normal break-words      /* allow breaking */
              mx-auto                           /* center the constrained box */
            "
          >
            Other Garage Door Services We Offer
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {BRANDS.map((b) => (
              <span
                key={b}
                className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full text-base font-semibold shadow-md hover:shadow-xl transition"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Core Services Cards (reverted) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repair */}
          <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center mb-4 space-x-3">
              <Wrench className="w-8 h-8 text-pink-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Repairs All Makes and Models
              </h3>
            </div>
            <p className="text-gray-600">
              Professional repairs of garage doors and openers of all models.
            </p>
          </div>

          {/* Emergency */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center mb-4 space-x-3">
              <Home className="w-8 h-8 text-green-600" />
              <h3 className="text-xl font-bold text-gray-800">
                Emergency Service
              </h3>
            </div>
            <p className="text-gray-600">
              Fast response for broken springs & stuck doors.
            </p>
          </div>

          {/* Availability */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center mb-4 space-x-3">
              <Calendar className="w-8 h-8 text-yellow-600" />
              <h3 className="text-xl font-bold text-gray-800">
                7 Days a Week
              </h3>
            </div>
            <p className="text-gray-600">
              Available 6:30am to 10pm, weekends included.
            </p>
          </div>
        </div>

        {/* NEW GARAGE DOOR OPENERS 2025 MODELS FOR SALE */}
        <div className="space-y-6">
          {/* 1) Centered section title */}
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            NEW GARAGE DOOR OPENERS 2025 MODELS FOR SALE
          </h3>

          {/* 2) Flex container: cards on left, image on right */}
          <div className="flex flex-col md:flex-row items-start md:items-stretch gap-8">
            {/* Left column: all 5 cards in two rows */}
            <div className="w-full md:w-3/5 space-y-6">
              {/* Top row (3 cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Genie ½ HP Belt Drive Opener',
                    price: '$660.00 without wi-fi',
                    note: 'includes tax, installation & two remotes',
                  },
                  {
                    title: 'Genie 1¼ HP Belt Drive Opener',
                    price: '$770.00 without wi-fi',
                    note: 'includes tax, installation & two remotes',
                  },
                  {
                    title: 'Genie 1¼ HP Belt Drive Opener',
                    price: '$840.00 with wi-fi',
                    note: 'includes tax, installation & two remotes',
                  },
                ].map((o) => (
                  <div
                    key={o.title}
                    className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col justify-center text-center"
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{o.title}</h4>
                    <p className="text-gray-700 mb-1">{o.price}</p>
                    <p className="text-gray-700">{o.note}</p>
                  </div>
                ))}
              </div>

              {/* Bottom row (2 cards, centered) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                {[
                  {
                    title: 'Chamberlain ½ HP Chain Drive Opener',
                    price: '$770.00 with wi-fi',
                    note: 'includes tax, installation & two remotes',
                  },
                  {
                    title: 'Chamberlain ½ HP Belt Drive Opener',
                    price: '$740.00 with wi-fi',
                    note: 'includes tax, installation & two remotes',
                  },
                ].map((o) => (
                  <div
                    key={o.title}
                    className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col justify-center text-center max-w-sm w-full"
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{o.title}</h4>
                    <p className="text-gray-700 mb-1">{o.price}</p>
                    <p className="text-gray-700">{o.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: door image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <div className="w-full h-auto md:h-[400px] overflow-visible md:overflow-hidden rounded-lg shadow-lg">
                <img
                  src={DoorImage}
                  alt="Garage Door Opener"
                  className="w-full h-auto md:h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Installation Services */}
        <div className="space-y-6">
          <h3 className="text-3xl font-semibold text-gray-800 text-center">
            New Garage Door Installation
          </h3>
          <p className="text-gray-700 text-center">
            Professional installation of one-piece or sectional steel & wood doors to enhance your home’s security.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                8’ x 7’ Raised Panel Steel Sectional Garage Doors
              </h4>
              <p className="text-gray-700">Starting at $1,326.00 (non‑insulated)</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                16’ x 7’ Raised Panel Steel Sectional Garage Doors
              </h4>
              <p className="text-gray-700">Starting at $1,535.00 (non‑insulated)</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                8’ x 7’ Flat Wood Sectional Garage Doors
              </h4>
              <p className="text-gray-700">Starting at $2,596.00</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-2xl p-6 shadow-md hover:shadow-xl transition">
              <h4 className="text-lg font-bold text-gray-800 mb-1">
                16’ x 7’ Flat Wood Sectional Garage Doors
              </h4>
              <p className="text-gray-700">Starting at $4,395.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
