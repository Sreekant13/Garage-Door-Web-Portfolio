import React, { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function SantaCursor({
  enabled = true,
  hideOnMobile = true,
  size = 40,
  stiffness = 120,
  damping = 16,
  showClickBurst = true,
}: {
  enabled?: boolean;
  hideOnMobile?: boolean;
  size?: number;
  stiffness?: number;
  damping?: number;
  showClickBurst?: boolean;
}) {
  // --- Hooks must be called on every render (no early returns above this line)
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [burstKey, setBurstKey] = useState(0);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness, damping });
  const sy = useSpring(y, { stiffness, damping });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setIsVisible(true);
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const handleLeave = () => setIsVisible(false);
    const handleClick = () => setBurstKey((k) => k + 1);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("mousedown", handleClick);
    };
  }, [x, y]);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(!!m.matches);
    update();
    m.addEventListener?.("change", update);
    return () => m.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    const onTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", onTouch, { passive: true });
    return () => window.removeEventListener("touchstart", onTouch);
  }, []);

  // --- decide visibility AFTER hooks are set up
  const allowRender = enabled && !(hideOnMobile && isTouch);

  // subtle sparkle spec
  const spark = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        dx: -10 - i * 6,
        dy: (i % 2 ? -3 : 3) + (i % 3) - 1,
        r: i % 2 ? 1.4 : 2.1,
        delay: i * 0.08,
      })),
    []
  );

  if (!allowRender) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      {isVisible && (
        <>
          <SantaHead height={size} reduced={reduced} />
          {spark.map((s, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: s.dx,
                top: s.dy,
                width: s.r * 2,
                height: s.r * 2,
                borderRadius: 9999,
                background: "white",
                boxShadow:
                  "0 0 6px rgba(255,255,255,0.95), 0 0 0 1px rgba(0,0,0,0.18)",
              }}
              animate={
                reduced
                  ? { opacity: [0.35, 0.8, 0.35] }
                  : { opacity: [0.25, 0.9, 0.25], y: [0, -1.5, 0] }
              }
              transition={{
                duration: 1.1 + (i % 4) * 0.15,
                repeat: Infinity,
                delay: s.delay,
                ease: "easeInOut",
              }}
            />
          ))}
          {showClickBurst && <ClickBurst key={burstKey} reduced={reduced} />}
        </>
      )}
    </motion.div>
  );
}

/* ---------- pieces ---------- */

function SantaHead({ height, reduced }: { height: number; reduced: boolean }) {
  const width = Math.round(height * 0.92);
  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 92 100"
      initial={false}
      animate={reduced ? {} : { y: [0, -2, 0] }}
      transition={reduced ? {} : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      style={{ filter: "drop-shadow(0 0 6px rgba(0,0,0,0.35))" }}
    >
      <path d="M6 34 Q46 10 86 34 L86 44 Q46 26 6 44 Z"
        fill="#c1121f" stroke="rgba(0,0,0,0.45)" strokeWidth="3" />
      <circle cx="82" cy="36" r="7" fill="#fff" stroke="rgba(0,0,0,0.2)" strokeWidth="2" />
      <rect x="6" y="42" width="80" height="12" rx="6" fill="#fff" stroke="rgba(0,0,0,0.25)" strokeWidth="2" />
      <circle cx="46" cy="60" r="22" fill="#fde3cf" stroke="rgba(0,0,0,0.2)" strokeWidth="2.5" />
      <circle cx="34" cy="64" r="4.2" fill="#ffb3b3" opacity="0.6" />
      <circle cx="58" cy="64" r="4.2" fill="#ffb3b3" opacity="0.6" />
      <motion.line x1="36" y1="58" x2="42" y2="58" stroke="#2b2b2b" strokeWidth="3" strokeLinecap="round"
        animate={reduced ? {} : { opacity: [1, 1, 0.1, 1] }}
        transition={reduced ? {} : { duration: 3.6, repeat: Infinity, times: [0, .85, .9, 1] }} />
      <motion.line x1="50" y1="58" x2="56" y2="58" stroke="#2b2b2b" strokeWidth="3" strokeLinecap="round"
        animate={reduced ? {} : { opacity: [1, 1, 0.1, 1] }}
        transition={reduced ? {} : { duration: 3.6, repeat: Infinity, delay: .1, times: [0, .83, .88, 1] }} />
      <circle cx="46" cy="63" r="3.6" fill="#e5966b" />
      <path d="M30 70 Q38 66 46 70 Q54 66 62 70" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
      <path d="M25 68 Q46 84 67 68 Q64 90 46 94 Q28 90 25 68 Z"
        fill="#fff" stroke="rgba(0,0,0,0.25)" strokeWidth="3" />
    </motion.svg>
  );
}

function ClickBurst({ reduced }: { reduced: boolean }) {
  const rings = 4;
  return (
    <div style={{ position: "absolute", left: 0, top: 0 }}>
      {Array.from({ length: rings }).map((_, i) => {
        const d = 0.45 + i * 0.08;
        const sz = 8 + i * 7;
        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: -sz / 2,
              top: -sz / 2,
              width: sz,
              height: sz,
              borderRadius: 9999,
              border: "1.5px solid #FFD166",
              boxShadow: "0 0 6px rgba(0,0,0,0.25)",
            }}
            initial={{ opacity: 0.75, scale: 0.6 }}
            animate={reduced ? { opacity: 0 } : { opacity: 0, scale: 1.3 }}
            transition={{ duration: d, ease: "easeOut" }}
          />
        );
      })}
    </div>
  );
}
