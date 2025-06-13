// src/components/MouseTrail.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
};

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextId = useRef(0);

  // spooky glowing palette (ghost white, eerie green, pumpkin orange, violet)
  const spookyColors = [
    "rgba(255, 255, 255, 0.8)", // ghost
    "rgba(255, 165, 0, 0.8)",   // pumpkin
    "rgba(120, 255, 120, 0.8)", // ectoplasm green
    "rgba(180, 100, 255, 0.8)", // spectral violet
  ];

  const randomColor = () => spookyColors[Math.floor(Math.random() * spookyColors.length)];

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const newParticle: Particle = {
        id: nextId.current++,
        x: e.clientX,
        y: e.clientY,
        color: randomColor(),
        size: 10 + Math.random() * 14,
      };
      setParticles((prev) => [...prev.slice(-30), newParticle]); // limit to last 30 particles
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const remove = (id: number) => {
    setParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              filter: "blur(0px)",
            }}
            animate={{
              opacity: 0,
              scale: 0.5 + Math.random() * 0.5,
              x: (Math.random() - 0.5) * 60,
              y: -60 - Math.random() * 40,
              filter: "blur(6px)",
            }}
            transition={{ duration: 1.6 + Math.random() * 0.4, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => remove(p.id)}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.color,
              boxShadow: `0 0 ${p.size * 1.5}px ${p.color}`,
              mixBlendMode: "screen",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}

// // src/components/MouseTrail.tsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Particle = {
//   id: number;
//   x: number;
//   y: number;
//   color: string;
// };

// export default function MouseTrail() {
//   const [particles, setParticles] = useState<Particle[]>([]);
//   const nextId = useRef(0);

//   // generate a random pastel color
//   const randomColor = () => {
//     const hue = Math.floor(Math.random() * 360);
//     return `hsl(${hue}, 70%, 80%)`;
//   };

//   useEffect(() => {
//     const handlePointerMove = (e: PointerEvent) => {
//       const newP: Particle = {
//         id: nextId.current++,
//         x: e.clientX,
//         y: e.clientY,
//         color: randomColor(),
//       };
//       setParticles((all) => [...all, newP]);
//     };
//     window.addEventListener("pointermove", handlePointerMove);
//     return () => window.removeEventListener("pointermove", handlePointerMove);
//   }, []);

//   const remove = (id: number) => {
//     setParticles((all) => all.filter((p) => p.id !== id));
//   };

//   return (
//     <div className="pointer-events-none fixed inset-0 z-50">
//       <AnimatePresence>
//         {particles.map((p) => (
//           <motion.div
//             key={p.id}
//             initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
//             animate={{
//               opacity: 0,
//               scale: 0.3 + Math.random() * 0.4,
//               x: (Math.random() - 0.5) * 50,
//               y: -50 - Math.random() * 30,
//             }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             exit={{ opacity: 0 }}
//             onAnimationComplete={() => remove(p.id)}
//             style={{
//               position: "absolute",
//               left: p.x,
//               top: p.y,
//               width: 12 + Math.random() * 8,
//               height: 12 + Math.random() * 8,
//               borderRadius: "50%",
//               background: p.color,
//             }}
//           />
//         ))}
//       </AnimatePresence>
//     </div>
//   );
// }
