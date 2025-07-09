// src/components/Gallery.tsx
import React from 'react';
import onePieceSprings from '@/assets/images/one piece garage door springs.png';
import torsionSectional from '@/assets/images/Torsion Spring - Sectional Roll Up Garage Dppr.png';
import springP728 from '@/assets/images/Spring P728.png';
import spring207 from '@/assets/images/Spring 207.png';
import springWithDoor from '@/assets/images/Spring with Door.png';

export default function Gallery() {
  return (
    <section id="spring-gallery" className="py-16 bg-gradient-to-b from-yellow-100 via-pink-50 to-purple-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
          Garage Door Spring Gallery
        </h2>

        {/* First row: two mediums and one large */}
        <div className="flex flex-wrap justify-center items-start gap-6">
          {/* One-piece springs */}
          <div className="w-full sm:w-5/12 md:w-1/5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
            <div className="h-59 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
              <img src={onePieceSprings} alt="One-piece garage door springs" className="max-h-full object-contain" />
            </div>
            <div className="p-4">
              <p className="text-center text-sm font-semibold text-gray-800">One-piece garage door springs</p>
            </div>
          </div>

          {/* Torsion springs */}
          <div className="w-full sm:w-5/12 md:w-1/5 bg-gradient-to-br from-green-200 to-teal-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
            <div className="h-60 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
              <img src={torsionSectional} alt="Torsion Springs - Sectional Roll Up Garage Door" className="max-h-full object-contain" />
            </div>
            <div className="p-4">
              <p className="text-center text-sm font-semibold text-gray-800">Torsion Springs - Sectional Roll Up Garage Door</p>
            </div>
          </div>

          {/* Big image: Spring with garage door */}
          <div className="w-full md:w-3/5 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
            <div className="h-100 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
              <img src={springWithDoor} alt="Spring with Garage Door" className="max-h-full object-contain" />
            </div>
            <div className="p-4">
              <p className="text-center text-sm font-semibold text-gray-800">Spring with Garage Door</p>
            </div>
          </div>
        </div>

        {/* Second row: two smaller */}
        <div className="flex flex-wrap justify-center items-start gap-6 mt-8">
          {/* Spring P728 */}
          <div className="w-full sm:w-3/12 md:w-1/5 bg-gradient-to-br from-red-200 to-pink-300 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
              <img src={springP728} alt="Spring P728" className="max-h-full object-contain" />
            </div>
            <div className="p-4">
              <p className="text-center text-sm font-semibold text-gray-800">Spring P728</p>
            </div>
          </div>

          {/* Spring 207 */}
          <div className="w-full sm:w-3/12 md:w-1/5 bg-gradient-to-br from-blue-200 to-teal-300 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
            <div className="h-48 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
              <img src={spring207} alt="Spring 207" className="max-h-full object-contain" />
            </div>
            <div className="p-4">
              <p className="text-center text-sm font-semibold text-gray-800">Spring 207</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
