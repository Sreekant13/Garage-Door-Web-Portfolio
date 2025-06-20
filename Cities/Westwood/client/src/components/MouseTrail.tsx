// src/components/MouseTrail.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Particle = {
  id: number;
  x: number;
  y: number;
  color: string;
};

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextId = useRef(0);

  // generate a random pastel color
  const randomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
  };

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const newP: Particle = {
        id: nextId.current++,
        x: e.clientX,
        y: e.clientY,
        color: randomColor(),
      };
      setParticles((all) => [...all, newP]);
    };
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  const remove = (id: number) => {
    setParticles((all) => all.filter((p) => p.id !== id));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            animate={{
              opacity: 0,
              scale: 0.3 + Math.random() * 0.4,
              x: (Math.random() - 0.5) * 50,
              y: -50 - Math.random() * 30,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            onAnimationComplete={() => remove(p.id)}
            style={{
              position: "absolute",
              left: p.x,
              top: p.y,
              width: 12 + Math.random() * 8,
              height: 12 + Math.random() * 8,
              borderRadius: "50%",
              background: p.color,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
