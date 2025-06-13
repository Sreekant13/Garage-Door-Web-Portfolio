import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function GhostCursor() {
  // Track cursor
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth follow animation (spring physics)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 15 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {isVisible && <Ghost />}
    </motion.div>
  );
}

/* === Cute Floating Ghost === */
function Ghost() {
  return (
    <motion.div
      className="relative w-10 h-12"
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Ghost body */}
      <div className="absolute inset-0 bg-white rounded-t-full rounded-b-[50%] shadow-[0_0_20px_4px_rgba(255,255,255,0.4)]" />
      {/* Wavy bottom */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="w-1.5 h-1.5 bg-white rounded-full" />
        ))}
      </div>
      {/* Eyes */}
      <div className="absolute top-3 left-2.5 flex gap-2">
        <div className="w-2 h-2 bg-black rounded-full" />
        <div className="w-2 h-2 bg-black rounded-full" />
      </div>
      {/* Small spooky glow */}
      <div className="absolute inset-0 rounded-full bg-white/20 blur-xl animate-pulse" />
    </motion.div>
  );
}
