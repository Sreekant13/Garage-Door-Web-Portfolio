// src/components/Gallery.tsx
import React, { useState } from "react";
import onePieceSprings from "@/assets/images/one piece garage door springs.png";
import torsionSectional from "@/assets/images/Torsion Spring - Sectional Roll Up Garage Dppr.png";
import springP728 from "@/assets/images/Spring P728.png";
import spring207 from "@/assets/images/Spring 207.png";
import springWithDoor from "@/assets/images/Spring with Door.png";

type Item = {
  src: string;
  alt: string;
  caption: string;
  colSpan?: string; // e.g. "md:col-span-6"
  aspect?: string;  // e.g. "aspect-[4/3]"
};

export default function Gallery() {
  const [active, setActive] = useState<Item | null>(null);

  const items: Item[] = [
    {
      src: springWithDoor,
      alt: "Spring with Garage Door",
      caption: "Spring with Garage Door",
      colSpan: "md:col-span-7",
      aspect: "aspect-[16/9]",
    },
    {
      src: torsionSectional,
      alt: "Torsion Springs - Sectional Roll Up Garage Door",
      caption: "Torsion Springs – Sectional Roll Up",
      colSpan: "md:col-span-5",
      aspect: "aspect-square",
    },
    {
      src: onePieceSprings,
      alt: "One-piece garage door springs",
      caption: "One-Piece Garage Door Springs",
      colSpan: "md:col-span-4",
      aspect: "aspect-[4/3]",
    },
    {
      src: springP728,
      alt: "Spring P728",
      caption: "Spring P728",
      colSpan: "md:col-span-4",
      aspect: "aspect-[4/3]",
    },
    {
      src: spring207,
      alt: "Spring 207",
      caption: "Spring 207",
      colSpan: "md:col-span-4",
      aspect: "aspect-[4/3]",
    },
  ];

  return (
    <section
      id="spring-gallery"
      className="relative py-20 overflow-hidden"
      aria-labelledby="gallery-title"
    >
      {/* soft background + faint pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-rose-50" />
      <div className="absolute inset-0 -z-10 opacity-[0.12] [background:radial-gradient(2px_2px_at_10px_10px,#000_18%,transparent_18%)] [background-size:28px_28px]" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2
            id="gallery-title"
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Garage Door Spring Gallery
          </h2>
          <p className="mt-3 text-gray-600">
            A closer look at common spring types and assemblies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {items.map((it, i) => (
            <figure
              key={i}
              className={[
                "group relative rounded-2xl p-[1px]",
                // gradient frame border (outer)
                "bg-gradient-to-br from-amber-600 via-rose-500 to-indigo-600",
                it.colSpan ?? "md:col-span-4",
              ].join(" ")}
            >
              {/* inner frame */}
              <div className="rounded-2xl bg-white shadow-sm hover:shadow-xl transition overflow-hidden">
                {/* image frame with brown border */}
                <div
                  className={[
                    "relative",
                    it.aspect ?? "aspect-[4/3]",
                    "bg-white border-4 border-[#8B4513] rounded-xl m-3 overflow-hidden",
                  ].join(" ")}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="absolute inset-0 w-full h-full object-contain transform group-hover:scale-[1.03] transition duration-500"
                    loading="lazy"
                  />

                  {/* soft vignette for depth */}
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.08)_100%)]" />
                </div>

                {/* caption bar */}
                <figcaption className="flex items-center justify-between px-5 pt-2 pb-5">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      {it.caption}
                    </div>
                    <div className="text-xs text-gray-500">{it.alt}</div>
                  </div>
                  <button
                    onClick={() => setActive(it)}
                    className="rounded-lg border px-3 py-1.5 text-sm font-semibold bg-white hover:bg-gray-50 transition"
                    aria-label={`View larger: ${it.caption}`}
                  >
                    View
                  </button>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox modal */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center p-4 bg-black/70"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-white p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute -top-3 -right-3 bg-white rounded-full shadow px-3 py-1.5 text-sm font-semibold"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="border-4 border-[#8B4513] rounded-xl overflow-hidden bg-white">
              <img
                src={active.src}
                alt={active.alt}
                className="w-full h-auto object-contain max-h-[80vh] bg-white"
              />
            </div>

            <div className="px-1 pt-4">
              <div className="text-base font-semibold">{active.caption}</div>
              <div className="text-sm text-gray-500">{active.alt}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// // src/components/Gallery.tsx
// import React from 'react';
// import onePieceSprings from '@/assets/images/one piece garage door springs.png';
// import torsionSectional from '@/assets/images/Torsion Spring - Sectional Roll Up Garage Dppr.png';
// import springP728 from '@/assets/images/Spring P728.png';
// import spring207 from '@/assets/images/Spring 207.png';
// import springWithDoor from '@/assets/images/Spring with Door.png';

// export default function Gallery() {
//   return (
//     <section id="spring-gallery" className="py-16 bg-gradient-to-b from-yellow-100 via-pink-50 to-purple-100">
//       <div className="max-w-6xl mx-auto px-6">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-800">
//           Garage Door Spring Gallery
//         </h2>

//         {/* First row: two mediums and one large */}
//         <div className="flex flex-wrap justify-center items-start gap-6">
//           {/* One-piece springs */}
//           <div className="w-full sm:w-5/12 md:w-1/5 bg-gradient-to-br from-purple-200 to-pink-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
//             <div className="h-59 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
//               <img src={onePieceSprings} alt="One-piece garage door springs" className="max-h-full object-contain" />
//             </div>
//             <div className="p-4">
//               <p className="text-center text-sm font-semibold text-gray-800">One-piece garage door springs</p>
//             </div>
//           </div>

//           {/* Torsion springs */}
//           <div className="w-full sm:w-5/12 md:w-1/5 bg-gradient-to-br from-green-200 to-teal-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
//             <div className="h-60 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
//               <img src={torsionSectional} alt="Torsion Springs - Sectional Roll Up Garage Door" className="max-h-full object-contain" />
//             </div>
//             <div className="p-4">
//               <p className="text-center text-sm font-semibold text-gray-800">Torsion Springs - Sectional Roll Up Garage Door</p>
//             </div>
//           </div>

//           {/* Big image: Spring with garage door */}
//           <div className="w-full md:w-3/5 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
//             <div className="h-100 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
//               <img src={springWithDoor} alt="Spring with Garage Door" className="max-h-full object-contain" />
//             </div>
//             <div className="p-4">
//               <p className="text-center text-sm font-semibold text-gray-800">Spring with Garage Door</p>
//             </div>
//           </div>
//         </div>

//         {/* Second row: two smaller */}
//         <div className="flex flex-wrap justify-center items-start gap-6 mt-8">
//           {/* Spring P728 */}
//           <div className="w-full sm:w-3/12 md:w-1/5 bg-gradient-to-br from-red-200 to-pink-300 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
//             <div className="h-48 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
//               <img src={springP728} alt="Spring P728" className="max-h-full object-contain" />
//             </div>
//             <div className="p-4">
//               <p className="text-center text-sm font-semibold text-gray-800">Spring P728</p>
//             </div>
//           </div>

//           {/* Spring 207 */}
//           <div className="w-full sm:w-3/12 md:w-1/5 bg-gradient-to-br from-blue-200 to-teal-300 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden">
//             <div className="h-48 flex items-center justify-center bg-white rounded-t-xl overflow-hidden">
//               <img src={spring207} alt="Spring 207" className="max-h-full object-contain" />
//             </div>
//             <div className="p-4">
//               <p className="text-center text-sm font-semibold text-gray-800">Spring 207</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
