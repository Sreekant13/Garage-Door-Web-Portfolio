// src/components/Warning.tsx
import React from 'react';
import brokenSpring from '@/assets/images/brokenspring.png';
import housewithgaragedoor from '@/assets/images/housewithgaragedoor.jpg'
import { AlertTriangle, Phone } from 'lucide-react';

export default function Warning() {
  return (
    <section
      id="warning"
      className="relative py-16 bg-gradient-to-t from-red-300 via-red-200 to-red-100 overflow-hidden"
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
            Garage Door Spring Repair
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Never attempt replacing a broken garage door spring or repair a torsion spring unless you are experienced. This can be dangerous and requires special equipment. If you aren't convinced and want to do it yourself you should think again and call a professional.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A garage spring when breaking is loud. If you hear a loud bang when opening or closing the door, its probably a <strong>BROKEN GARAGE DOOR SPRING</strong>. If the opener is straining to open the door, it may be a <strong>BROKEN SPRING</strong>. If the door cocks to one side when you try to open it, it may be a <strong>BROKEN DOOR SPRING</strong>. Even if your garage door opens your placing great strain on the garage door opener and you may burn it out.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            If you need garage door spring repair please give us a call. We can quote you a price right over the phone. We have been in the garage door spring repair business for many decades. We carry the largest selection of torsion springs and one piece garage door springs such as Holmes p7x28, 5x28, 3x28 and also SL7x28 garage door springs on our trucks compare to any other garage door company. Call us 24 hours a day for new garage door spring prices, garage door spring repair or to replace your broken garage door spring including torsion springs.
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
            src={brokenSpring}
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
