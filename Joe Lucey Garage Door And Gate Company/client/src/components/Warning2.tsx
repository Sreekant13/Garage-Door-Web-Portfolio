// src/components/Warning.tsx
import React from 'react';
import brokengaragedoor from '@/assets/images/brokengaragedoor.png';
import housewithgaragedoor from '@/assets/images/backgroundgarage.jpg'
import { AlertTriangle, Phone } from 'lucide-react';

export default function Warning2() {
  return (
    <section
      id="warning2"
      className="relative py-16 bg-gradient-to-b from-red-300 via-red-200 to-red-100 overflow-hidden"
    >
      {/* Floating warning icons */}
      <AlertTriangle className="absolute top-6 left-10 text-red-400 w-12 h-12 animate-pulse opacity-70 transform rotate-12" />
      <AlertTriangle className="absolute top-20 right-16 text-red-400 w-10 h-10 animate-ping opacity-60 transform -rotate-6" />
      <AlertTriangle className="absolute bottom-8 left-20 text-red-400 w-14 h-14 animate-pulse opacity-75 transform rotate-45" />
      <AlertTriangle className="absolute bottom-12 right-10 text-red-400 w-8 h-8 animate-ping opacity-65 transform rotate-30" />
      <AlertTriangle className="absolute top-1/2 left-1/4 text-red-400 w-16 h-16 animate-pulse opacity-50 transform -rotate-20" />

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-12">
        {/* Left: Text and Call */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 mb-4">
            GARAGE DOOR SERVICE
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Garage Door Repairs can be a very dangerous if you don't know what to do. There are heavy garage doors with extremely powerful springs that counter balance the weight of the door. The springs are connected through a torsion bar to cables. If the cables becomes loose the garage door can be very dangerous.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Most garage door repairs should be performed by an expert only. If your repairing your own garage door or opener always be careful of any moving parts your fingers can get caught in. Also be aware that there is 110 volts of electricity under the cover of the garage door opener so be careful what you touch.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you need garage door repair please give us a call. We can quote you a price right over the phone. We have been in the garage door repair business for many decades. We took over AAA Deluxe Garage Door in Long Beach and B & B Garage Door Repair in Gardena about 3 years ago. We added both these companies to our business lists. Call us 24 hours a day for new garage door prices, garage door repair or to replace your broken garage door spring including torsion springs.
          </p>
          <a
            href="tel:3232705387"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: 323-270-5387
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <img
            src={brokengaragedoor}
            alt="Broken garage door spring"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
          <img
            src={housewithgaragedoor}
            alt="Broken garage door spring"
            className="w-full h-auto object-contain rounded-lg shadow-lg"
          />
        </div>
        {/* <div className="w-full md:w-1/2 flex justify-center">
          
        </div> */}
      </div>
    </section>
  );
}
