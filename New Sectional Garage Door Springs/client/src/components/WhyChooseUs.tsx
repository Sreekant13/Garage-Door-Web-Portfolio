// src/components/WhyChooseUs.tsx
import React from 'react';
import image1 from '@/assets/images/why2.png';
import image2 from '@/assets/images/why1.png';
import image3 from '@/assets/images/why3.png';

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-600">
            Experience the Difference
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Discover the unmatched quality, reliability, and service that set us apart.
          </p>
        </div>

        <div className="space-y-12">
          {/* Part 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={image1}
              alt="All makes and models"
              className="w-full h-80 md:w-1/3 rounded-xl shadow-lg"
            />
            <div className="md:w-2/3">
              <div className="bg-gradient-to-br from-green-400 to-teal-400 p-8 rounded-xl shadow-lg">
                <p className="text-white font-medium">
                  I repair all makes and models of garage doors, garage door openers and garage 
                  door spring replacements with following benefits:
                </p>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    Same Day Garage Door Spring Service
                  </li>
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    All Calls Answered by Joseph Lucey the Owner
                  </li>
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    Saturday Available at No Extra Charge
                  </li>
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    Emergency Garage Door Repair Service
                  </li>
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    All Work Is Guaranteed
                  </li>
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    Open 7 Days/Week 630am to 10pm
                  </li>
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    Most Major Credit Cards Accepted
                  </li>
                  <li className="text-white flex items-center">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    Professionally Trained Technicians
                  </li>
                  <li className="text-white flex items-center col-span-full">
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2" />
                    We Repair & Service All Major Brands of Garage Doors,
                    Garage door Openers and Garage Door Springs.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Part 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse">
            <img
              src={image2}
              alt="Spring cycles"
              className="w-full md:w-1/3 rounded-xl shadow-lg"
            />
            <div className="md:w-2/3">
              <div className="bg-gradient-to-br from-yellow-400 to-orange-400 p-8 rounded-xl shadow-lg">
                <p className="text-white font-semibold">
                  The Last Spring You May Ever Need!
                </p>
                <p className="mt-2 text-white leading-relaxed">
                  Garage door springs are rated by cycles (1 opening
                  and closing of your garage door = 1 cycle). Garage
                  door springs commonly used by most door
                  manufactures and our competition range
                  anywhere from 5,000-12,000 cycles We offer
                  10,000 to 15,000 cycle springs on our well stocked
                  trucks but we also offer a higher-grade garage
                  door steel spring rated for 25,000-50,000+ cycles
                  upon order! These springs usually takes a few
                  hours to get once ordered. Call us to get your
                  garage door and opener working perfectly today!
                </p>
              </div>
            </div>
          </div>

          {/* Part 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={image3}
              alt="Different spring sizes"
              className="w-full md:w-1/3 rounded-xl shadow-lg"
            />
            <div className="md:w-2/3">
              <div className="bg-gradient-to-br from-purple-400 to-pink-400 p-8 rounded-xl shadow-lg">
                <p className="text-white leading-snug">
                  We carry many different sizes of springs on our trucks to account for all the
                  different weights of garage doors, Call Joseph Lucey to have him give you an
                  estimate on garage door spring replacement and repair today!
                </p>
                <p className="mt-4 text-white leading-snug">
                  These are the stock springs we carry on our truck. These springs cover 85% of
                  all the sectional roll up garage doors within Southern California both wood
                  and metal. If you have any other spring on your garage door then these, we
                  would have to get them from the spring manufacture and come back to your
                  home to finish the repair. We can do this in most cases within the same day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}