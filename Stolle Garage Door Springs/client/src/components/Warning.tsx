// src/components/Warning.tsx
import React from 'react';
import brokenSpring from '@/assets/images/brokenspring.png';
import { AlertTriangle, Phone } from 'lucide-react';

export default function Warning() {
  return (
    <section
      id="warning"
      className="relative py-16 bg-gradient-to-br from-red-50 via-red-100 to-red-200 overflow-hidden"
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
            Broken Garage Door Springs
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Broken one-piece garage door springs and torsion springs for section roll up doors can pose a safety risk if you try replacing them yourself.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your best bet is having your garage door springs professionally replaced. You can always call us to replace your broken garage door springs and make the adjustments to your garage door that are necessary. We can service your garage door opener as well. It’s a lot safer and doesn’t cost too much and you know the jobs done right.
          </p>
          <a
            href="tel:8183513118"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now: 818.351.3118
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={brokenSpring}
            alt="Broken garage door spring"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
