import React, { useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";

type GalleryItem = { src: string; alt: string; caption?: string };

const IMAGES: GalleryItem[] = [
  { src: image1, alt: "Garage door repair 1", caption: "Spring replacement" },
  { src: image2, alt: "Garage door repair 2", caption: "Opener install" },
  { src: image3, alt: "Garage door repair 3", caption: "Panel alignment" },
  { src: image4, alt: "Garage door repair 4", caption: "Full door install" },
  { src: image5, alt: "Garage door repair 5", caption: "Safety inspection" },
];

export default function PhotoGallery() {
  const items = useMemo(() => IMAGES, []);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // For swipe gestures in the lightbox
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isOpen = openIdx !== null;

  const open = (idx: number) => setOpenIdx(idx);
  const close = () => setOpenIdx(null);
  const next = () =>
    setOpenIdx((i) => (i === null ? 0 : (i + 1) % items.length));
  const prev = () =>
    setOpenIdx((i) => (i === null ? 0 : (i - 1 + items.length) % items.length));

  // Keyboard controls
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  // Swipe controls (mobile)
  const onTouchStart: React.TouchEventHandler = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd: React.TouchEventHandler = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current == null || touchEndX.current == null) return;
    const dx = touchEndX.current - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next(); // swipe left -> next
      else prev(); // swipe right -> prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section id="gallery" className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-400">📸 Photo Gallery</h2>
          <p className="text-sm text-gray-500 hidden sm:block">
            Click any image to view larger • Use ← / → to navigate
          </p>
        </div>

        {/* Masonry layout using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {items.map((item, idx) => (
            <figure
              key={idx}
              className="mb-4 break-inside-avoid relative group cursor-zoom-in"
              onClick={() => open(idx)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.015]"
              />
              <figcaption className="pointer-events-none absolute inset-0 rounded-xl bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                {item.caption && (
                  <span className="m-3 text-white/90 text-sm backdrop-blur-[1px]">
                    {item.caption}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={close}
        >
          {/* Stop close on inside clicks */}
          <div
            className="relative max-w-5xl w-[92vw] md:w-[86vw]"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <button
              aria-label="Close"
              onClick={close}
              className="absolute -top-12 right-0 md:-top-14 md:-right-14 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <X className="h-6 w-6 text-white" />
            </button>

            {/* Image */}
            <div className="relative rounded-xl overflow-hidden bg-black">
              <img
                src={items[openIdx].src}
                alt={items[openIdx].alt}
                className="w-full h-auto max-h-[78vh] object-contain select-none"
                draggable={false}
              />
              {/* Prev / Next */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-1 sm:px-3">
                <button
                  aria-label="Previous image"
                  onClick={prev}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>
                <button
                  aria-label="Next image"
                  onClick={next}
                  className="p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>
              </div>
            </div>

            {/* Caption + Counter */}
            <div className="mt-3 flex items-center justify-between text-white/90 text-sm">
              <span className="truncate">
                {items[openIdx].caption ?? items[openIdx].alt}
              </span>
              <span className="opacity-80">
                {openIdx + 1} / {items.length}
              </span>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 hidden md:flex gap-2 overflow-x-auto pb-1">
              {items.map((it, i) => (
                <button
                  key={i}
                  onClick={() => setOpenIdx(i)}
                  className={`relative flex-shrink-0 rounded-md overflow-hidden border ${
                    i === openIdx ? "border-white" : "border-white/20"
                  }`}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    className="h-16 w-24 object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// import React from "react";

// import image1 from "@/assets/images/image1.png";
// import image2 from "@/assets/images/image2.png";
// import image3 from "@/assets/images/image3.png";
// import image4 from "@/assets/images/image4.png";
// import image5 from "@/assets/images/image5.png";
// // import image6 from "@/assets/gallery/image6.jpg";
// // import image7 from "@/assets/gallery/image7.jpg";

// const images = [image1, image2, image3, image4, image5];

// export default function PhotoGallery() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
//           📸 Photo Gallery
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {images.map((img, idx) => (
//             <div
//               key={idx}
//               className="relative overflow-hidden rounded-lg group shadow-lg"
//             >
//               <img
//                 src={img}
//                 alt={`Gallery ${idx + 1}`}
//                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
