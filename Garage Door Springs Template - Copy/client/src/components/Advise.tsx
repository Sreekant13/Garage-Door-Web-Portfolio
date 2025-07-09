// src/components/Advise.tsx
import React from "react";
import { Phone } from "lucide-react";

export default function Advise() {
  return (
    <section id="advise" className="relative py-20 overflow-hidden">
      {/* soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-amber-50" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Essential Garage Door Expert Tips
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Follow these tried-and-true recommendations to keep your garage door operating safely and smoothly.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />

          <ol className="space-y-8">
            {/* #1 */}
            <li className="relative pl-20">
              {/* number */}
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-blue-600 text-white grid place-items-center text-xl font-extrabold shadow">
                1
              </div>

              <div className="rounded-2xl bg-white/90 backdrop-blur border shadow-sm hover:shadow-md transition p-6">
                <h3 className="text-2xl font-bold text-blue-700 mb-3">
                  #1 Best Garage Door Advice - Replacing Both Springs
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  Most two car garage doors have two springs installed, so when one breaks,
                  it's safe to say the second spring's life expectancy may not be far behind. In
                  order to save you time and money from future spring repairs, it’s usually
                  recommend replacing both springs, labor will cost you the same if you’re
                  replacing one spring or both springs. The only cost difference is the cost of
                  the second garage door spring which in most cases is cheaper than having to
                  pay for a second service call in a short period of time. To properly maintain
                  your garage door and garage door opener system replacing both springs is
                  the best option and recommended.
                </p>
              </div>
            </li>

            {/* #2 */}
            <li className="relative pl-20">
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-emerald-600 text-white grid place-items-center text-xl font-extrabold shadow">
                2
              </div>

              <div className="rounded-2xl bg-white/90 backdrop-blur border shadow-sm hover:shadow-md transition p-6">
                <h3 className="text-2xl font-bold text-emerald-700 mb-3">
                  #2 Best Garage Door Advice - The Right Garage Door Springs
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  Since garage doors come in all weights and sizes, the right springs need to be
                  installed to properly balance the garage door. If a garage door technician puts
                  the wrong springs on your garage door, not only can this damage your garage
                  door opener system, but it will cause the garage door opener to do more work
                  than it was built and designed to do. Your garage door opener is more likely to
                  break quickly if the wrong spring is installed, forcing you to call for another
                  expensive service repair. I am factory trained to install the right springs for the
                  door's weight and check my work by performing a balance test which I do in
                  front of you. Proving to you that the new garage door springs are the right
                  springs for your garage door.
                </p>
              </div>
            </li>

            {/* #3 */}
            <li className="relative pl-20">
              <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-rose-600 text-white grid place-items-center text-xl font-extrabold shadow">
                3
              </div>

              <div className="rounded-2xl bg-white/90 backdrop-blur border shadow-sm hover:shadow-md transition p-6">
                <h3 className="text-2xl font-bold text-rose-700 mb-3">
                  #3 Best Garage Door Advice – Garage Door Safety Inspection
                </h3>
                <p className="text-gray-800 leading-relaxed">
                  With every garage door spring repair, I provide a free safety inspection to
                  ensure all the garage door hardware and wheels on your garage door are in
                  proper working condition. Since the garage door hardware such as hinges,
                  cables, wheels will show signs of wear especially if not regularly lubricated,
                  it's possible there are worn parts on your garage door. This is why I provide a
                  free safety inspection and maintain a safe environment for our customers.
                </p>
              </div>
            </li>
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-lg font-semibold text-gray-900">
            Call Joseph Lucey today for garage door spring repair!
          </p>
          <a
            href="tel:323-270-5387"
            className="mt-4 inline-flex items-center gap-2 rounded-full px-8 py-4 text-2xl font-extrabold text-white
                       bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500
                       shadow-lg hover:opacity-95 active:scale-[0.99] transition"
          >
            <Phone className="h-6 w-6" />
            323-270-5387
          </a>
        </div>
      </div>
    </section>
  );
}

// // src/components/Advise.tsx
// import React from 'react';

// export default function Advise() {
//   return (
//     <section id="advise" className="py-16 bg-gradient-to-b from-purple-100 via-pink-50 to-yellow-100">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
//             Essential Garage Door Expert Tips
//           </h2>
//           <p className="mt-4 text-lg text-gray-700">
//             Follow these tried-and-true recommendations to keep your garage door operating safely and smoothly.
//           </p>
//         </div>

//         <div className="space-y-10">
//           {/* #1 */}
//           <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-400 hover:shadow-2xl transition-shadow">
//             <h3 className="text-2xl font-bold text-blue-600 mb-4">
//               #1 Best Garage Door Advice - Replacing Both Springs
//             </h3>
//             <p className="text-gray-800 leading-relaxed">
//               Most two car garage doors have two springs installed, so when one breaks,
//               it's safe to say the second spring's life expectancy may not be far behind. In
//               order to save you time and money from future spring repairs, it’s usually
//               recommend replacing both springs, labor will cost you the same if you’re
//               replacing one spring or both springs. The only cost difference is the cost of
//               the second garage door spring which in most cases is cheaper than having to
//               pay for a second service call in a short period of time. To properly maintain
//               your garage door and garage door opener system replacing both springs is
//               the best option and recommended.
//             </p>
//           </div>

//           {/* #2 */}
//           <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-400 hover:shadow-2xl transition-shadow">
//             <h3 className="text-2xl font-bold text-green-600 mb-4">
//               #2 Best Garage Door Advice - The Right Garage Door Springs
//             </h3>
//             <p className="text-gray-800 leading-relaxed">
//               Since garage doors come in all weights and sizes, the right springs need to be
//               installed to properly balance the garage door. If a garage door technician puts
//               the wrong springs on your garage door, not only can this damage your garage
//               door opener system, but it will cause the garage door opener to do more work
//               than it was built and designed to do. Your garage door opener is more likely to
//               break quickly if the wrong spring is installed, forcing you to call for another
//               expensive service repair. I am factory trained to install the right springs for the
//               door's weight and check my work by performing a balance test which I do in
//               front of you. Proving to you that the new garage door springs are the right
//               springs for your garage door.
//             </p>
//           </div>

//           {/* #3 */}
//           <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-pink-400 hover:shadow-2xl transition-shadow">
//             <h3 className="text-2xl font-bold text-pink-600 mb-4">
//               #3 Best Garage Door Advice – Garage Door Safety Inspection
//             </h3>
//             <p className="text-gray-800 leading-relaxed">
//               With every garage door spring repair, I provide a free safety inspection to
//               ensure all the garage door hardware and wheels on your garage door are in
//               proper working condition. Since the garage door hardware such as hinges,
//               cables, wheels will show signs of wear especially if not regularly lubricated,
//               it's possible there are worn parts on your garage door. This is why I provide a
//               free safety inspection and maintain a safe environment for our customers.
//             </p>
//           </div>

//           {/* Call to action */}
//           <div className="text-center mt-12">
//             <p className="text-lg font-semibold text-gray-800">
//               Call Joseph Lucey today for garage door spring repair!
//             </p>
//             <a
//               href="tel:323-270-5387"
//               className="
//                 inline-block
//                 mt-6
//                 px-8 py-4
//                 text-3xl font-extrabold
//                 text-white
//                 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-500
//                 rounded-full
//                 shadow-lg
//                 hover:from-pink-500 hover:to-red-500
//                 transform hover:scale-105
//                 transition
//                 duration-300
//               "
//             >
//               323‑270‑5387
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
