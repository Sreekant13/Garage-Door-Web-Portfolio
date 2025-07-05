import React, { useState, useEffect } from "react";

export default function HalloweenOverlay() {
  const [fogOffset, setFogOffset] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const offset = ((e.clientX / window.innerWidth) - 0.5) * 100;
      setFogOffset(offset);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
<div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
  {/* === SPOOKY FRAME (dynamic for mobile) === */}
  <div
    className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,0.9)_100%)]"
    style={{
      background:
        window.innerWidth < 768
          ? "radial-gradient(circle at center, transparent 70%, rgba(0,0,0,0.8) 100%)"
          : "radial-gradient(circle at center, transparent 60%, rgba(0,0,0,0.9) 100%)",
    }}
  />
  {/* <div
    className="absolute left-0 top-0 h-full bg-gradient-to-r from-black/90 via-black/70 to-transparent"
    style={{
      width: window.innerWidth < 768 ? "24px" : "72px",
    }}
  />
  <div
    className="absolute right-0 top-0 h-full bg-gradient-to-l from-black/90 via-black/70 to-transparent"
    style={{
      width: window.innerWidth < 768 ? "24px" : "72px",
    }}
  /> */}

  {/* === FOG + GLOW FLOOR === */}
  <div
    className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#2b1100] via-[#3d1600]/90 to-transparent animate-candleGlow"
    style={{
      height: window.innerWidth < 768 ? "60px" : "128px",
    }}
  />
  {/* <div
    className="absolute bottom-0 left-0 w-full bg-[url('/assets/images/halloween/fog.png')] bg-repeat-x opacity-70 animate-fogMove"
    style={{
      height: window.innerWidth < 768 ? "40px" : "96px",
      backgroundSize: window.innerWidth < 768 ? "contain" : "cover",
    }}
  />
  <div
    className="absolute bottom-0 left-0 w-full bg-[radial-gradient(circle_at_center,rgba(255,140,0,0.2)_0%,transparent_80%)]"
    style={{
      height: window.innerWidth < 768 ? "32px" : "48px",
    }}
  /> */}

  {/* Embers + side glow (unchanged) */}
  <div className="absolute bottom-2 left-10 w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_15px_5px_rgba(255,80,0,0.8)] animate-emberPulse" />
  <div className="absolute bottom-4 right-12 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_5px_rgba(255,40,0,0.8)] animate-emberPulseDelay" />
  <div className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-r from-orange-900/40 via-transparent to-transparent animate-sideFlicker" />
  <div className="absolute right-0 top-0 h-full w-[6px] bg-gradient-to-l from-orange-900/40 via-transparent to-transparent animate-sideFlickerDelay" />

  {/* Keep your spiders, bats, and eyes same as before */}
  <Spider threadX="88%" depth={220} delay="2s" />
  <Bat className="bat1 top-[15%] right-[-180px]" width={160} height={80} delay="0s" />
  <Bat className="bat2 top-[25%] right-[-180px] opacity-80" width={140} height={70} delay="3s" />
  <div className="absolute left-8 bottom-14 w-5 h-3 rounded-full bg-red-600 shadow-[0_0_20px_5px_rgba(255,0,0,0.8)] opacity-0 animate-eyesBlink"></div>
  <div className="absolute right-8 bottom-14 w-5 h-3 rounded-full bg-red-600 shadow-[0_0_20px_5px_rgba(255,0,0,0.8)] opacity-0 animate-eyesBlinkDelay"></div>
    
      {/* === EYES === */}
      <div className="absolute left-8 bottom-14 w-5 h-3 rounded-full bg-red-600 shadow-[0_0_20px_5px_rgba(255,0,0,0.8)] opacity-0 animate-eyesBlink"></div>
      <div className="absolute right-8 bottom-14 w-5 h-3 rounded-full bg-red-600 shadow-[0_0_20px_5px_rgba(255,0,0,0.8)] opacity-0 animate-eyesBlinkDelay"></div>
  </div>
  );
}

/* === Spider + Bat components remain same as before === */
function Spider({ threadX, depth, delay }: { threadX: string; depth: number; delay?: string }) {
  return (
    <div className="absolute top-0" style={{ left: threadX, animationDelay: delay }}>
      <svg width="80" height={depth + 120} viewBox={`0 0 80 ${depth + 120}`}>
        <g className="spider-group">
          <line x1="40" y1="0" x2="40" y2={depth + 60} stroke="white" strokeWidth="1" opacity="0.3" />
          <g className="spider" transform={`translate(40, ${depth})`}>
            <circle cx="0" cy="10" r="8" fill="#000" />
            <ellipse cx="0" cy="25" rx="11" ry="14" fill="#000" />
            <circle cx="-3" cy="10" r="1.5" fill="red" />
            <circle cx="3" cy="10" r="1.5" fill="red" />
            <g className="leg-left">
              <path d="M-2,12 C-14,6 -20,0 -28,-4" stroke="#000" strokeWidth="3" fill="none" />
              <path d="M-2,20 C-14,18 -20,12 -28,8" stroke="#000" strokeWidth="3" fill="none" />
              <path d="M-2,28 C-14,26 -20,22 -28,18" stroke="#000" strokeWidth="3" fill="none" />
              <path d="M-2,34 C-14,32 -20,28 -28,24" stroke="#000" strokeWidth="3" fill="none" />
            </g>
            <g className="leg-right">
              <path d="M2,12 C14,6 20,0 28,-4" stroke="#000" strokeWidth="3" fill="none" />
              <path d="M2,20 C14,18 20,12 28,8" stroke="#000" strokeWidth="3" fill="none" />
              <path d="M2,28 C14,26 20,22 28,18" stroke="#000" strokeWidth="3" fill="none" />
              <path d="M2,34 C14,32 20,28 28,24" stroke="#000" strokeWidth="3" fill="none" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Bat({ className, width, height, delay }: { className: string; width: number; height: number; delay?: string }) {
  return (
    <div className={`absolute ${className}`} style={{ animationDelay: delay }}>
      <svg width={width} height={height} viewBox="0 0 160 80">
        <path
          d="M10,50 Q40,10 80,50 Q120,10 150,50 Q130,30 110,50 Q90,30 70,50 Q50,30 30,50 Q20,40 10,50 Z"
          fill="black"
        />
      </svg>
    </div>
  );
}