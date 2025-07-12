// ChristmasOverlay.tsx — v4.2 (contrast on light bg + your last changes kept)
import React, { useEffect, useMemo, useState } from "react";

export type ChristmasOverlayProps = {
  enabled?: boolean;
  autoEnable?: boolean;
  seasonStart?: string;
  seasonEnd?: string;
  flakes?: number;
  lowPower?: boolean;
  glowScale?: number;
  respectReducedMotion?: boolean;
  navOffset?: number;
  mobileNavOffset?: number;
  navSelector?: string;
  showSleighOnMobile?: boolean;

  /** NEW: improve visibility over light sections */
  contrastBoost?: boolean;   // default true
  ribbonOpacity?: number;    // 0..1, default 0.14
  ribbonHeight?: number;     // px, default 140
};

export default function ChristmasOverlay({
  enabled = true,
  autoEnable = true,
  seasonStart = "12-01",
  seasonEnd = "01-06",
  flakes = 120,
  lowPower = false,
  glowScale = 1.0,
  respectReducedMotion = true,
  navOffset = 100,
  mobileNavOffset,
  navSelector,
  showSleighOnMobile = true,
  contrastBoost = true,
  ribbonOpacity = 0.14,
  ribbonHeight = 140,
}: ChristmasOverlayProps) {
  // --- responsive helpers ---
  const [vw, setVw] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const isMobile = vw < 768;

  // optional runtime measurement of header height
  const [measuredNav, setMeasuredNav] = useState<number | null>(null);
  useEffect(() => {
    if (!navSelector) return;
    const el = document.querySelector(navSelector) as HTMLElement | null;
    if (!el) return;
    const update = () => setMeasuredNav(el.getBoundingClientRect().height);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [navSelector]);

  // final offset under header
  const headerOffsetPx =
    (measuredNav ?? (isMobile ? (mobileNavOffset ?? navOffset) : navOffset)) | 0;

  const [prefersReducedMotion, setPRM] = useState(false);
  useEffect(() => {
    if (!respectReducedMotion) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPRM(!!media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, [respectReducedMotion]);
  const effectivePRM = respectReducedMotion ? prefersReducedMotion : false;

  // season check
  const isInSeason = useMemo(() => {
    if (!autoEnable) return true;
    const now = new Date();
    const year = now.getFullYear();
    const parseMD = (md: string, y: number) => {
      const [m, d] = md.split("-").map(Number);
      return new Date(y, (m - 1) | 0, d | 0, 0, 0, 0, 0);
    };
    const start = parseMD(seasonStart, year);
    let end = parseMD(seasonEnd, year);
    if (end < start) {
      if (now.getMonth() === 0) {
        const prevStart = parseMD(seasonStart, year - 1);
        return now >= parseMD(seasonEnd, year) || now >= prevStart;
      } else {
        end = parseMD(seasonEnd, year + 1);
      }
    }
    return now >= start && now <= end;
  }, [autoEnable, seasonStart, seasonEnd]);

  const active = enabled && isInSeason;
  const intensity = Math.max(0, Math.min(1.6, glowScale));

  // snow specs (lighter on mobile/low-power)
  const targetFlakes = Math.round(
    (flakes || 120) * (isMobile ? 0.6 : 1) * (lowPower ? 0.55 : 1)
  );
  const flakeSpecs = useMemo(() => {
    const N = Math.max(8, Math.floor(targetFlakes * (effectivePRM || lowPower ? 0.5 : 1)));
    const arr = new Array(N).fill(0).map((_, i) => {
      const seed = (i + 1) * 2654435761;
      const rand = (n: number) => (Math.abs(Math.sin(seed * (n + 1))) % 1);
      const size = (isMobile ? 1.4 : 2) + Math.floor(rand(1) * 3.4);
      const duration = (isMobile ? 7 : 6) + Math.floor(rand(2) * 10);
      const delay = Math.floor(rand(3) * 8);
      const left = Math.floor(rand(4) * 100);
      const drift = -18 + Math.floor(rand(5) * 36);
      const opacity = 0.5 + rand(6) * 0.5;
      return { id: i, size, duration, delay, left, drift, opacity };
    });
    return arr;
  }, [targetFlakes, effectivePRM, lowPower, isMobile]);

  if (!active) return null;

  // garland sizing
  const garlandHeight = isMobile ? 56 : 72;
  const garlandStroke = isMobile ? 3 : 3.5;
  const bulbCount = isMobile ? 16 : 22;
  const bulbRadius = isMobile ? 9 : 11;
  const bulbLineStroke = isMobile ? 3 : 3.5;
  const bulbSpacing = isMobile ? 48 : 44;
  const bulbYBase = isMobile ? 24 : 28;
  const bulbYWave = isMobile ? 14 : 18;

  // sleigh position
  const sleighTop = Math.max(isMobile ? 8 : 20, headerOffsetPx - (isMobile ? 48 : 60));
  const sleighScale = isMobile ? 1.05 : 1.25;
  const sleighDelay = Math.floor(Math.random() * (isMobile ? 10 : 14) + (isMobile ? 4 : 6));
  const sleighDuration = isMobile ? 20 : 18;
  const showSleigh = !effectivePRM && !lowPower && (isMobile ? showSleighOnMobile : true);

  // reindeer facing LEFT (away from sleigh)
  const deerXs = isMobile ? [280, 210, 140] : [300, 230, 160];
  const deerBaseY = 44;
  const headAnchor = (x: number) => ({ x: x - 34, y: deerBaseY - 10 });

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[60] pointer-events-none select-none overflow-hidden"
      style={{
        // @ts-ignore
        "--nav-offset": `${headerOffsetPx}px`,
        background:
          `radial-gradient(120% 70% at 50% 120%, rgba(255,255,255,${0.25 * intensity}) 0%, rgba(255,255,255,0) 55%),` +
          `radial-gradient(100% 65% at -5% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%),` +
          `radial-gradient(100% 65% at 105% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%)`,
      }}
    >
      <style>
        {`
        @keyframes snowFall {
          0% { transform: translate3d(var(--x,0), -110vh, 0) rotate(0deg); opacity: var(--o,1); }
          100% { transform: translate3d(calc(var(--x,0) + var(--drift, 0px)), 110vh, 0) rotate(360deg); opacity: 0.95; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
          50% { opacity: 0.3; filter: drop-shadow(0 0 1px rgba(255,255,255,0.25)); }
        }
        @keyframes bulbsBlink {
          0%, 100% { opacity: 0.9; }
          40% { opacity: 0.3; }
          60% { opacity: 0.7; }
        }
        @keyframes sleighFly {
          0%   { transform: translate3d(120vw, 6vh, 0) scale(0.9); opacity: 0; }
          10%  { opacity: 1; }
          50%  { transform: translate3d(-20vw, 13vh, 0) scale(1.05); }
          100% { transform: translate3d(-120vw, 1vh, 0) scale(0.9); opacity: 0; }
        }
        @media (max-width: 767px) {
          .mask-below-nav {
            -webkit-mask-image: linear-gradient(to bottom, transparent 0, transparent var(--nav-offset), black calc(var(--nav-offset) + 1px));
                    mask-image: linear-gradient(to bottom, transparent 0, transparent var(--nav-offset), black calc(var(--nav-offset) + 1px));
          }
        }
        ${respectReducedMotion ? `
        @media (prefers-reduced-motion: reduce) {
          .anim-snow { animation: none !important; }
          .anim-twinkle { animation: none !important; }
          .anim-bulbs { animation: none !important; }
          .anim-sleigh { animation: none !important; }
        }` : ``}
        `}
      </style>

      {/* --- CONTRAST RIBBON under header (only near top) --- */}
      {contrastBoost && (
        <div
          className="absolute left-0 right-0"
          style={{
            top: Math.max(0, headerOffsetPx - 28),
            height: ribbonHeight,
            background:
              `linear-gradient(to bottom, rgba(0,0,0,${ribbonOpacity}) 0%, ` +
              `rgba(0,0,0,${ribbonOpacity * 0.7}) 55%, rgba(0,0,0,0) 100%)`,
          }}
        />
      )}

      {/* Snow + Twinkles (masked above navbar on mobile) */}
      <div className={isMobile ? "mask-below-nav absolute inset-0" : "absolute inset-0"}>
        {/* Snow (add faint outline for light backgrounds) */}
        <div className="absolute inset-0">
          {flakeSpecs.map(({ id, size, duration, delay, left, drift, opacity }) => (
            <div
              key={id}
              className="absolute anim-snow"
              style={{
                left: `${left}vw`,
                top: `-${10 + (id % 40)}vh`,
                width: size,
                height: size,
                borderRadius: size,
                background: `rgba(255,255,255,${(0.88 * opacity).toFixed(2)})`,
                boxShadow: `0 0 ${Math.max(3, size)}px rgba(255,255,255,0.85),
                            0 0 0 1px rgba(0,0,0,0.14)`, // <-- subtle outline
                animation: `snowFall ${duration + (id % 5)}s linear ${delay}s infinite`,
                // @ts-ignore
                "--x": `${(-10 + (id % 20))}px`,
                // @ts-ignore
                "--drift": `${drift}px`,
                // @ts-ignore
                "--o": opacity,
              } as React.CSSProperties}
            />
          ))}
        </div>

        {/* Twinkles */}
        <div className="absolute inset-x-0 top-0" style={{ height: isMobile ? "26vh" : "33vh" }}>
          {Array.from({ length: isMobile ? 18 : 24 }).map((_, i) => (
            <div
              key={`tw-${i}`}
              className="absolute anim-twinkle"
              style={{
                left: `${(i * 97) % 100}vw`,
                top: `${(i * 41) % (isMobile ? 26 : 33)}vh`,
                width: (isMobile ? 1 : 2) + (i % 3),
                height: (isMobile ? 1 : 2) + (i % 3),
                borderRadius: 9999,
                background: "#fff",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.20)", // outline for light bg
                animation: `twinkle ${2 + (i % 5)}s ease-in-out ${(i % 7) * 0.6}s infinite`,
                opacity: 0.9,
              }}
            />
          ))}
        </div>
      </div>

      {/* String lights (mobile shifted to the right a bit) */}
      <div
        className="absolute"
        style={{
          top: headerOffsetPx,
          height: garlandHeight,
          left: isMobile ? 20 : 0,
          right: 0,
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1000 100"
          preserveAspectRatio="xMidYMid meet"
          className="opacity-95"
        >
          {/* Garland curve */}
          <path
            d={
              isMobile
                ? "M0,20 C220,76 420,8 640,72 C820,120 900,30 1000,60"
                : "M0,26 C200,88 400,10 600,80 C800,150 900,30 1000,70"
            }
            stroke="rgba(120,80,60,0.9)"
            strokeWidth={garlandStroke}
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          {/* Pastel bulbs with shadow and dark ring */}
          {new Array(bulbCount).fill(0).map((_, i) => {
            const x = (isMobile ? 20 : 24) + i * bulbSpacing;
            const y = bulbYBase + Math.sin(i * 0.65) * bulbYWave;
            const colors = ["#ffe3e3","#fff4b8","#c9f7d2","#d4edff","#ffd6ef","#fff9df"];
            const c = colors[i % colors.length];
            return (
              <g
                key={i}
                className="anim-bulbs"
                style={{
                  animation: `bulbsBlink ${2.1 + (i % 4)}s ease-in-out ${(i % 5) * 0.25}s infinite`,
                  filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))", // shadow for light bg
                }}
              >
                <line
                  x1={x}
                  y1={y - (isMobile ? 12 : 16)}
                  x2={x}
                  y2={y - (isMobile ? 5 : 6)}
                  stroke="#7a593f"
                  strokeWidth={bulbLineStroke}
                  vectorEffect="non-scaling-stroke"
                />
                {/* dark ring + bulb fill */}
                <circle cx={x} cy={y} r={bulbRadius + 1.5} fill="rgba(0,0,0,0.18)" />
                <circle cx={x} cy={y} r={bulbRadius} fill={c} stroke="rgba(255,255,255,0.9)" strokeWidth="1.25" />
                <circle cx={x + 2} cy={y - 2} r={isMobile ? 3 : 4} fill="rgba(255,255,255,0.95)" />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Sleigh — left-facing reindeer; add shadow strokes for contrast */}
      {showSleigh && (
        <div className="absolute left-0 right-0" style={{ top: sleighTop }}>
          <div
            className="anim-sleigh"
            style={{
              animation: `sleighFly ${sleighDuration}s linear ${sleighDelay}s infinite`,
              filter: "drop-shadow(0 0 10px rgba(0,0,0,0.35))", // stronger on light bg
              transform: `scale(${sleighScale})`,
            }}
          >
            <svg width={isMobile ? 340 : 480} height={isMobile ? 70 : 100} viewBox="0 0 480 100" fill="none">
              <defs>
                <radialGradient id="spark" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,1)"/>
                  <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                </radialGradient>
              </defs>

              {/* Sparkle trail */}
              {Array.from({ length: 10 }).map((_, i) => (
                <circle key={i} cx={30 + i * 36} cy={14 + (i % 2) * 18} r={i % 2 ? 2.4 : 3.2} fill="url(#spark)" />
              ))}

              {/* Reindeer group (white stroke with dark under-stroke) */}
              {deerXs.map((ox, idx) => (
                <g key={idx} transform={`translate(${ox}, ${deerBaseY})`}>
                  {/* shadow under-stroke */}
                  <path d="M20,0 q-20,-10 -40,0" stroke="rgba(0,0,0,0.45)" strokeWidth="4.2" fill="none" strokeLinecap="round" />
                  <path d="M-18,-2 l-10,-10" stroke="rgba(0,0,0,0.45)" strokeWidth="3.4" />
                  <circle cx="-30" cy="-14" r="4.2" fill="rgba(0,0,0,0.45)" />
                  {/* visible stroke */}
                  <path d="M20,0 q-20,-10 -40,0" stroke="white" strokeWidth="2.6" fill="none" strokeLinecap="round" />
                  <path d="M-18,-2 l-10,-10" stroke="white" strokeWidth="2.2" />
                  <circle cx="-30" cy="-14" r="3" fill="white" />
                  <path d="M-30,-17 l-6,-6 M-30,-17 l5,-6" stroke="white" strokeWidth="2" />
                  <path d="M10,2 l6,10 M-6,2 l5,10" stroke="white" strokeWidth="2" />
                </g>
              ))}

              {/* Harness lines */}
              <line x1={360} y1={30} x2={headAnchor(deerXs[0]).x} y2={headAnchor(deerXs[0]).y}
                    stroke="rgba(0,0,0,0.4)" strokeWidth="3.2" />
              <line x1={360} y1={30} x2={headAnchor(deerXs[0]).x} y2={headAnchor(deerXs[0]).y}
                    stroke="#FFD166" strokeWidth="1.8" />
              <line x1={headAnchor(deerXs[0]).x} y1={headAnchor(deerXs[0]).y}
                    x2={headAnchor(deerXs[1]).x} y2={headAnchor(deerXs[1]).y}
                    stroke="rgba(0,0,0,0.35)" strokeWidth="3" />
              <line x1={headAnchor(deerXs[0]).x} y1={headAnchor(deerXs[0]).y}
                    x2={headAnchor(deerXs[1]).x} y2={headAnchor(deerXs[1]).y}
                    stroke="#FFD166" strokeWidth="1.6" />
              <line x1={headAnchor(deerXs[1]).x} y1={headAnchor(deerXs[1]).y}
                    x2={headAnchor(deerXs[2]).x} y2={headAnchor(deerXs[2]).y}
                    stroke="rgba(0,0,0,0.35)" strokeWidth="3" />
              <line x1={headAnchor(deerXs[1]).x} y1={headAnchor(deerXs[1]).y}
                    x2={headAnchor(deerXs[2]).x} y2={headAnchor(deerXs[2]).y}
                    stroke="#FFD166" strokeWidth="1.6" />

              {/* Santa + sleigh with shadow under-stroke */}
              <g transform="translate(360,42)">
                <path d="M0,0 q18,-16 44,-16 l0,14 q0,16 -26,16 l-18,0"
                      stroke="rgba(0,0,0,0.5)" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M0,0 q18,-16 44,-16 l0,14 q0,16 -26,16 l-18,0"
                      stroke="#FFD166" strokeWidth="3.2" fill="none" strokeLinecap="round" />
                <path d="M-8,14 q14,12 54,12"
                      stroke="rgba(0,0,0,0.45)" strokeWidth="4.6" fill="none" />
                <path d="M-8,14 q14,12 54,12"
                      stroke="#FFD166" strokeWidth="3" fill="none" />
                <circle cx="10" cy="-8" r="5" fill="rgba(0,0,0,0.45)" />
                <circle cx="10" cy="-8" r="4" fill="white" />
                <circle cx="16" cy="-12" r="3" fill="rgba(0,0,0,0.45)" />
                <circle cx="16" cy="-12" r="2" fill="#FFD166" />
              </g>
            </svg>
          </div>
        </div>
      )}

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 w-full"
        style={{
          height: "60px",
          background: `radial-gradient(80% 60% at 50% 100%, rgba(255,255,255,${0.35 * intensity}) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 70%)`,
          filter: "blur(6px)",
        }}
      />
    </div>
  );
}

// // ChristmasOverlay.tsx — v4.1 (reindeer face left + mobile garland left inset)
// import React, { useEffect, useMemo, useState } from "react";

// export type ChristmasOverlayProps = {
//   enabled?: boolean;
//   autoEnable?: boolean;
//   seasonStart?: string;
//   seasonEnd?: string;
//   flakes?: number;
//   lowPower?: boolean;
//   glowScale?: number;
//   respectReducedMotion?: boolean;
//   navOffset?: number;
//   mobileNavOffset?: number;
//   navSelector?: string;
//   showSleighOnMobile?: boolean;
// };

// export default function ChristmasOverlay({
//   enabled = true,
//   autoEnable = true,
//   seasonStart = "12-01",
//   seasonEnd = "01-06",
//   flakes = 120,
//   lowPower = false,
//   glowScale = 1.0,
//   respectReducedMotion = true,
//   navOffset = 100,
//   mobileNavOffset,
//   navSelector,
//   showSleighOnMobile = true,
// }: ChristmasOverlayProps) {
//   const [vw, setVw] = useState<number>(
//     typeof window !== "undefined" ? window.innerWidth : 1200
//   );
//   useEffect(() => {
//     const onResize = () => setVw(window.innerWidth);
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);
//   const isMobile = vw < 768;

//   // Optional header measurement
//   const [measuredNav, setMeasuredNav] = useState<number | null>(null);
//   useEffect(() => {
//     if (!navSelector) return;
//     const el = document.querySelector(navSelector) as HTMLElement | null;
//     if (!el) return;
//     const update = () => setMeasuredNav(el.getBoundingClientRect().height);
//     update();
//     const ro = new ResizeObserver(update);
//     ro.observe(el);
//     window.addEventListener("scroll", update, { passive: true });
//     window.addEventListener("resize", update);
//     return () => {
//       ro.disconnect();
//       window.removeEventListener("scroll", update);
//       window.removeEventListener("resize", update);
//     };
//   }, [navSelector]);

//   const headerOffsetPx =
//     (measuredNav ?? (isMobile ? (mobileNavOffset ?? navOffset) : navOffset)) | 0;

//   const [prefersReducedMotion, setPRM] = useState(false);
//   useEffect(() => {
//     if (!respectReducedMotion) return;
//     const media = window.matchMedia("(prefers-reduced-motion: reduce)");
//     const update = () => setPRM(!!media.matches);
//     update();
//     media.addEventListener?.("change", update);
//     return () => media.removeEventListener?.("change", update);
//   }, [respectReducedMotion]);
//   const effectivePRM = respectReducedMotion ? prefersReducedMotion : false;

//   // In-season?
//   const isInSeason = useMemo(() => {
//     if (!autoEnable) return true;
//     const now = new Date();
//     const year = now.getFullYear();
//     const parseMD = (md: string, y: number) => {
//       const [m, d] = md.split("-").map(Number);
//       return new Date(y, (m - 1) | 0, d | 0, 0, 0, 0, 0);
//     };
//     const start = parseMD(seasonStart, year);
//     let end = parseMD(seasonEnd, year);
//     if (end < start) {
//       if (now.getMonth() === 0) {
//         const prevStart = parseMD(seasonStart, year - 1);
//         return now >= parseMD(seasonEnd, year) || now >= prevStart;
//       } else {
//         end = parseMD(seasonEnd, year + 1);
//       }
//     }
//     return now >= start && now <= end;
//   }, [autoEnable, seasonStart, seasonEnd]);

//   const active = enabled && isInSeason;
//   const intensity = Math.max(0, Math.min(1.6, glowScale));
//   const targetFlakes = Math.round(
//     (flakes || 120) * (isMobile ? 0.6 : 1) * (lowPower ? 0.55 : 1)
//   );
//   const flakeSpecs = useMemo(() => {
//     const N = Math.max(8, Math.floor(targetFlakes * (effectivePRM || lowPower ? 0.5 : 1)));
//     const arr = new Array(N).fill(0).map((_, i) => {
//       const seed = (i + 1) * 2654435761;
//       const rand = (n: number) => (Math.abs(Math.sin(seed * (n + 1))) % 1);
//       const size = (isMobile ? 1.4 : 2) + Math.floor(rand(1) * 3.4);
//       const duration = (isMobile ? 7 : 6) + Math.floor(rand(2) * 10);
//       const delay = Math.floor(rand(3) * 8);
//       const left = Math.floor(rand(4) * 100);
//       const drift = -18 + Math.floor(rand(5) * 36);
//       const opacity = 0.5 + rand(6) * 0.5;
//       return { id: i, size, duration, delay, left, drift, opacity };
//     });
//     return arr;
//   }, [targetFlakes, effectivePRM, lowPower, isMobile]);

//   if (!active) return null;

//   // Garland sizing
//   const garlandHeight = isMobile ? 56 : 72;
//   const garlandStroke = isMobile ? 3 : 3.5;
//   const bulbCount = isMobile ? 16 : 22;
//   const bulbRadius = isMobile ? 9 : 11;
//   const bulbLineStroke = isMobile ? 3 : 3.5;
//   const bulbSpacing = isMobile ? 48 : 44;
//   const bulbYBase = isMobile ? 24 : 28;
//   const bulbYWave = isMobile ? 14 : 18;

//   // Sleigh (right→left), deer should face LEFT (away from sleigh)
//   const sleighTop = Math.max(isMobile ? 8 : 20, headerOffsetPx - (isMobile ? 48 : 60));
//   const sleighScale = isMobile ? 1.05 : 1.25;
//   const sleighDelay = Math.floor(Math.random() * (isMobile ? 10 : 14) + (isMobile ? 4 : 6));
//   const sleighDuration = isMobile ? 20 : 18;
//   const showSleigh = !effectivePRM && !lowPower && (isMobile ? showSleighOnMobile : true);

//   // Reindeer absolute X positions (closer to sleigh first). Facing LEFT.
//   const deerXs = isMobile ? [280, 210, 140] : [300, 230, 160];
//   const deerBaseY = 44;
//   const headAnchor = (x: number) => ({ x: x - 34, y: deerBaseY - 10 }); // head anchor for harness lines

//   return (
//     <div
//       aria-hidden
//       className="fixed inset-0 z-[60] pointer-events-none select-none overflow-hidden"
//       style={{
//         // @ts-ignore
//         "--nav-offset": `${headerOffsetPx}px`,
//         background:
//           `radial-gradient(120% 70% at 50% 120%, rgba(255,255,255,${0.25 * intensity}) 0%, rgba(255,255,255,0) 55%),` +
//           `radial-gradient(100% 65% at -5% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%),` +
//           `radial-gradient(100% 65% at 105% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%)`,
//       }}
//     >
//       <style>
//         {`
//         @keyframes snowFall {
//           0% { transform: translate3d(var(--x,0), -110vh, 0) rotate(0deg); opacity: var(--o,1); }
//           100% { transform: translate3d(calc(var(--x,0) + var(--drift, 0px)), 110vh, 0) rotate(360deg); opacity: 0.95; }
//         }
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
//           50% { opacity: 0.3; filter: drop-shadow(0 0 1px rgba(255,255,255,0.25)); }
//         }
//         @keyframes bulbsBlink {
//           0%, 100% { opacity: 0.9; }
//           40% { opacity: 0.3; }
//           60% { opacity: 0.7; }
//         }
//         @keyframes sleighFly {
//           0%   { transform: translate3d(120vw, 6vh, 0) scale(0.9); opacity: 0; }
//           10%  { opacity: 1; }
//           50%  { transform: translate3d(-20vw, 13vh, 0) scale(1.05); }
//           100% { transform: translate3d(-120vw, 1vh, 0) scale(0.9); opacity: 0; }
//         }
//         @media (max-width: 767px) {
//           .mask-below-nav {
//             -webkit-mask-image: linear-gradient(to bottom, transparent 0, transparent var(--nav-offset), black calc(var(--nav-offset) + 1px));
//                     mask-image: linear-gradient(to bottom, transparent 0, transparent var(--nav-offset), black calc(var(--nav-offset) + 1px));
//           }
//         }
//         ${respectReducedMotion ? `
//         @media (prefers-reduced-motion: reduce) {
//           .anim-snow { animation: none !important; }
//           .anim-twinkle { animation: none !important; }
//           .anim-bulbs { animation: none !important; }
//           .anim-sleigh { animation: none !important; }
//         }` : ``}
//         `}
//       </style>

//       {/* Snow + Twinkles (masked above navbar on mobile) */}
//       <div className={isMobile ? "mask-below-nav absolute inset-0" : "absolute inset-0"}>
//         <div className="absolute inset-0">
//           {flakeSpecs.map(({ id, size, duration, delay, left, drift, opacity }) => (
//             <div
//               key={id}
//               className="absolute anim-snow"
//               style={{
//                 left: `${left}vw`,
//                 top: `-${10 + (id % 40)}vh`,
//                 width: size,
//                 height: size,
//                 borderRadius: size,
//                 background: `rgba(255,255,255,${(0.85 * opacity).toFixed(2)})`,
//                 boxShadow: `0 0 ${Math.max(3, size)}px rgba(255,255,255,0.8)`,
//                 animation: `snowFall ${duration + (id % 5)}s linear ${delay}s infinite`,
//                 // @ts-ignore
//                 "--x": `${(-10 + (id % 20))}px`,
//                 // @ts-ignore
//                 "--drift": `${drift}px`,
//                 // @ts-ignore
//                 "--o": opacity,
//               } as React.CSSProperties}
//             />
//           ))}
//         </div>

//         <div className="absolute inset-x-0 top-0" style={{ height: isMobile ? "26vh" : "33vh" }}>
//           {Array.from({ length: isMobile ? 18 : 24 }).map((_, i) => (
//             <div
//               key={`tw-${i}`}
//               className="absolute anim-twinkle"
//               style={{
//                 left: `${(i * 97) % (isMobile ? 100 : 100)}vw`,
//                 top: `${(i * 41) % (isMobile ? 26 : 33)}vh`,
//                 width: (isMobile ? 1 : 2) + (i % 3),
//                 height: (isMobile ? 1 : 2) + (i % 3),
//                 borderRadius: 9999,
//                 background: "#fff",
//                 animation: `twinkle ${2 + (i % 5)}s ease-in-out ${(i % 7) * 0.6}s infinite`,
//                 opacity: 0.8,
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       {/* String lights under navbar (NOTE: dynamic left inset on mobile) */}
//       <div
//         className="absolute"
//         style={{
//           top: headerOffsetPx,
//           height: garlandHeight,
//           left: isMobile ? 20 : 0,   // <<— mobile shift to the right
//           right: 0,
//         }}
//       >
//         <svg
//           width="100%"
//           height="100%"
//           viewBox="0 0 1000 100"
//           preserveAspectRatio="xMidYMid meet"
//           className="opacity-95"
//         >
//           <path
//             d={
//               isMobile
//                 ? "M0,20 C220,76 420,8 640,72 C820,120 900,30 1000,60"
//                 : "M0,26 C200,88 400,10 600,80 C800,150 900,30 1000,70"
//             }
//             stroke="rgba(120,80,60,0.85)"
//             strokeWidth={garlandStroke}
//             fill="none"
//             vectorEffect="non-scaling-stroke"
//           />
//           {new Array(bulbCount).fill(0).map((_, i) => {
//             const x = (isMobile ? 20 : 24) + i * bulbSpacing;
//             const y = bulbYBase + Math.sin(i * 0.65) * bulbYWave;
//             const colors = ["#ffe3e3","#fff4b8","#c9f7d2","#d4edff","#ffd6ef","#fff9df"];
//             const c = colors[i % colors.length];
//             return (
//               <g
//                 key={i}
//                 className="anim-bulbs"
//                 style={{ animation: `bulbsBlink ${2.1 + (i % 4)}s ease-in-out ${(i % 5) * 0.25}s infinite` }}
//               >
//                 <line
//                   x1={x}
//                   y1={y - (isMobile ? 12 : 16)}
//                   x2={x}
//                   y2={y - (isMobile ? 5 : 6)}
//                   stroke="#7a593f"
//                   strokeWidth={bulbLineStroke}
//                   vectorEffect="non-scaling-stroke"
//                 />
//                 <circle cx={x} cy={y} r={bulbRadius} fill={c} stroke="rgba(255,255,255,0.85)" strokeWidth="1.25" />
//                 <circle cx={x + 2} cy={y - 2} r={isMobile ? 3 : 4} fill="rgba(255,255,255,0.95)" />
//               </g>
//             );
//           })}
//         </svg>
//       </div>

//       {/* Sleigh — three reindeer facing LEFT (away from sleigh) */}
//       {showSleigh && (
//         <div className="absolute left-0 right-0" style={{ top: sleighTop }}>
//           <div
//             className="anim-sleigh"
//             style={{
//               animation: `sleighFly ${sleighDuration}s linear ${sleighDelay}s infinite`,
//               filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9))",
//               transform: `scale(${sleighScale})`,
//             }}
//           >
//             <svg width={isMobile ? 340 : 480} height={isMobile ? 70 : 100} viewBox="0 0 480 100" fill="none">
//               <defs>
//                 <radialGradient id="spark" cx="50%" cy="50%" r="50%">
//                   <stop offset="0%" stopColor="rgba(255,255,255,1)"/>
//                   <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
//                 </radialGradient>
//               </defs>

//               {/* Sparkle trail */}
//               {Array.from({ length: 10 }).map((_, i) => (
//                 <circle key={i} cx={30 + i * 36} cy={14 + (i % 2) * 18} r={i % 2 ? 2.4 : 3.2} fill="url(#spark)" />
//               ))}

//               {/* Reindeer 1–3 (closest to sleigh first), FACING LEFT */}
//               {deerXs.map((ox, idx) => (
//                 <g key={idx} transform={`translate(${ox}, ${deerBaseY})`}>
//                   {/* body drawn leftwards */}
//                   <path d="M20,0 q-20,-10 -40,0" stroke="white" strokeWidth="2.6" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
//                   {/* neck + head to the LEFT */}
//                   <path d="M-18,-2 l-10,-10" stroke="white" strokeWidth="2.2" vectorEffect="non-scaling-stroke"/>
//                   <circle cx="-30" cy="-14" r="3" fill="white"/>
//                   {/* antlers */}
//                   <path d="M-30,-17 l-6,-6 M-30,-17 l5,-6" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
//                   {/* legs */}
//                   <path d="M10,2 l6,10 M-6,2 l5,10" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
//                 </g>
//               ))}

//               {/* Harness lines: sleigh -> deer0, deer0 -> deer1, deer1 -> deer2 */}
//               {/* Sleigh anchor to first deer head anchor */}
//               <line x1={360} y1={30} x2={headAnchor(deerXs[0]).x} y2={headAnchor(deerXs[0]).y} stroke="#FFD166" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
//               <line x1={362} y1={34} x2={headAnchor(deerXs[0]).x + 2} y2={headAnchor(deerXs[0]).y + 2} stroke="#FFD166" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
//               {/* Between deer */}
//               <line x1={headAnchor(deerXs[0]).x} y1={headAnchor(deerXs[0]).y} x2={headAnchor(deerXs[1]).x} y2={headAnchor(deerXs[1]).y} stroke="#FFD166" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
//               <line x1={headAnchor(deerXs[1]).x} y1={headAnchor(deerXs[1]).y} x2={headAnchor(deerXs[2]).x} y2={headAnchor(deerXs[2]).y} stroke="#FFD166" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />

//               {/* Santa + sleigh (gold outline on the RIGHT) */}
//               <g transform="translate(360,42)">
//                 <path d="M0,0 q18,-16 44,-16 l0,14 q0,16 -26,16 l-18,0" stroke="#FFD166" strokeWidth="3.2" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
//                 <path d="M-8,14 q14,12 54,12" stroke="#FFD166" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke"/>
//                 <circle cx="10" cy="-8" r="4" fill="white" />
//                 <circle cx="16" cy="-12" r="2" fill="#FFD166" />
//               </g>
//             </svg>
//           </div>
//         </div>
//       )}

//       {/* Bottom glow */}
//       <div
//         className="absolute bottom-0 left-0 w-full"
//         style={{
//           height: "60px",
//           background: `radial-gradient(80% 60% at 50% 100%, rgba(255,255,255,${0.35 * intensity}) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 70%)`,
//           filter: "blur(6px)",
//         }}
//       />
//     </div>
//   );
// }

// // import React, { useEffect, useMemo, useState } from "react";

// // /**
// //  * ChristmasOverlay.tsx — responsive v4
// //  * - Separate mobile & desktop offsets: navOffset, mobileNavOffset
// //  * - Optional navSelector: auto-measure sticky header height
// //  * - CSS mask keeps snow/twinkles OUT of the navbar area on mobile
// //  * - Clear Santa + reindeer silhouette (white/gold), harness lines, glow
// //  */

// // export type ChristmasOverlayProps = {
// //   enabled?: boolean;
// //   autoEnable?: boolean;
// //   seasonStart?: string; // "12-01"
// //   seasonEnd?: string;   // "01-06"
// //   flakes?: number;
// //   lowPower?: boolean;
// //   glowScale?: number;
// //   respectReducedMotion?: boolean; // default true

// //   /** Desktop top offset (px) for garland/sleigh to sit below your navbar */
// //   navOffset?: number; // default 100
// //   /** Mobile top offset (px). If omitted, falls back to navOffset. */
// //   mobileNavOffset?: number; // default undefined -> use navOffset
// //   /** Optional selector to measure your sticky header height. Example: "#site-header" */
// //   navSelector?: string;

// //   /** Show sleigh on mobile (you can disable if too busy) */
// //   showSleighOnMobile?: boolean; // default true
// // };

// // export default function ChristmasOverlay({
// //   enabled = true,
// //   autoEnable = true,
// //   seasonStart = "12-01",
// //   seasonEnd = "01-06",
// //   flakes = 120,
// //   lowPower = false,
// //   glowScale = 1.0,
// //   respectReducedMotion = true,
// //   navOffset = 100,
// //   mobileNavOffset,
// //   navSelector,
// //   showSleighOnMobile = true,
// // }: ChristmasOverlayProps) {
// //   // --- responsive helpers ---
// //   const [vw, setVw] = useState<number>(
// //     typeof window !== "undefined" ? window.innerWidth : 1200
// //   );
// //   useEffect(() => {
// //     const onResize = () => setVw(window.innerWidth);
// //     window.addEventListener("resize", onResize);
// //     return () => window.removeEventListener("resize", onResize);
// //   }, []);
// //   const isMobile = vw < 768;

// //   // optional runtime measurement of header height
// //   const [measuredNav, setMeasuredNav] = useState<number | null>(null);
// //   useEffect(() => {
// //     if (!navSelector) return;
// //     const el = document.querySelector(navSelector) as HTMLElement | null;
// //     if (!el) return;
// //     const update = () => setMeasuredNav(el.getBoundingClientRect().height);
// //     update();
// //     const ro = new ResizeObserver(update);
// //     ro.observe(el);
// //     window.addEventListener("scroll", update, { passive: true });
// //     window.addEventListener("resize", update);
// //     return () => {
// //       ro.disconnect();
// //       window.removeEventListener("scroll", update);
// //       window.removeEventListener("resize", update);
// //     };
// //   }, [navSelector]);

// //   // final pixel offset we’ll use
// //   const headerOffsetPx =
// //     (measuredNav ?? (isMobile ? (mobileNavOffset ?? navOffset) : navOffset)) | 0;

// //   const [prefersReducedMotion, setPRM] = useState(false);
// //   useEffect(() => {
// //     if (!respectReducedMotion) return; // ignore OS setting if asked
// //     const media = window.matchMedia("(prefers-reduced-motion: reduce)");
// //     const update = () => setPRM(!!media.matches);
// //     update();
// //     media.addEventListener?.("change", update);
// //     return () => media.removeEventListener?.("change", update);
// //   }, [respectReducedMotion]);

// //   const effectivePRM = respectReducedMotion ? prefersReducedMotion : false;

// //   const isInSeason = useMemo(() => {
// //     if (!autoEnable) return true;
// //     const now = new Date();
// //     const year = now.getFullYear();
// //     const parseMD = (md: string, y: number) => {
// //       const [m, d] = md.split("-").map(Number);
// //       return new Date(y, (m - 1) | 0, d | 0, 0, 0, 0, 0);
// //     };
// //     const start = parseMD(seasonStart, year);
// //     let end = parseMD(seasonEnd, year);
// //     if (end < start) {
// //       if (now.getMonth() === 0) {
// //         const prevStart = parseMD(seasonStart, year - 1);
// //         return now >= parseMD(seasonEnd, year) || now >= prevStart;
// //       } else {
// //         end = parseMD(seasonEnd, year + 1);
// //       }
// //     }
// //     return now >= start && now <= end;
// //   }, [autoEnable, seasonStart, seasonEnd]);

// //   const active = enabled && isInSeason;
// //   const intensity = Math.max(0, Math.min(1.6, glowScale));

// //   // --- Snow spec (lighter on mobile/low-power) ---
// //   const targetFlakes = Math.round(
// //     (flakes || 120) * (isMobile ? 0.6 : 1) * (lowPower ? 0.55 : 1)
// //   );

// //   const flakeSpecs = useMemo(() => {
// //     const N = Math.max(8, Math.floor(targetFlakes * (effectivePRM || lowPower ? 0.5 : 1)));
// //     const arr = new Array(N).fill(0).map((_, i) => {
// //       const seed = (i + 1) * 2654435761;
// //       const rand = (n: number) => (Math.abs(Math.sin(seed * (n + 1))) % 1);
// //       const size = (isMobile ? 1.4 : 2) + Math.floor(rand(1) * 3.4);
// //       const duration = (isMobile ? 7 : 6) + Math.floor(rand(2) * 10);
// //       const delay = Math.floor(rand(3) * 8);
// //       const left = Math.floor(rand(4) * 100);
// //       const drift = -18 + Math.floor(rand(5) * 36);
// //       const opacity = 0.5 + rand(6) * 0.5;
// //       return { id: i, size, duration, delay, left, drift, opacity };
// //     });
// //     return arr;
// //   }, [targetFlakes, effectivePRM, lowPower, isMobile]);

// //   if (!active) return null;

// //   // Garland sizing by breakpoint
// //   const garlandHeight = isMobile ? 56 : 72;
// //   const garlandStroke = isMobile ? 3 : 3.5;
// //   const bulbCount = isMobile ? 16 : 22;
// //   const bulbRadius = isMobile ? 9 : 11;
// //   const bulbLineStroke = isMobile ? 3 : 3.5;
// //   const bulbSpacing = isMobile ? 48 : 44;
// //   const bulbYBase = isMobile ? 24 : 28;
// //   const bulbYWave = isMobile ? 14 : 18;

// //   // Sleigh placement/scale
// //   const sleighTop = Math.max(isMobile ? 8 : 20, headerOffsetPx - (isMobile ? 48 : 60));
// //   const sleighScale = isMobile ? 1.05 : 1.25;
// //   const sleighDelay = Math.floor(Math.random() * (isMobile ? 10 : 14) + (isMobile ? 4 : 6));
// //   const sleighDuration = isMobile ? 20 : 18;

// //   // Show sleigh at all?
// //   const showSleigh = !effectivePRM && !lowPower && (isMobile ? showSleighOnMobile : true);

// //   return (
// //     <div
// //       aria-hidden
// //       className="fixed inset-0 z-[60] pointer-events-none select-none overflow-hidden"
// //       style={{
// //         // set CSS variable so mask can reference the exact offset
// //         // @ts-ignore
// //         "--nav-offset": `${headerOffsetPx}px`,
// //         background:
// //           `radial-gradient(120% 70% at 50% 120%, rgba(255,255,255,${0.25 * intensity}) 0%, rgba(255,255,255,0) 55%),` +
// //           `radial-gradient(100% 65% at -5% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%),` +
// //           `radial-gradient(100% 65% at 105% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%)`,
// //       }}
// //     >
// //       <style>
// //         {`
// //         @keyframes snowFall {
// //           0% { transform: translate3d(var(--x,0), -110vh, 0) rotate(0deg); opacity: var(--o,1); }
// //           100% { transform: translate3d(calc(var(--x,0) + var(--drift, 0px)), 110vh, 0) rotate(360deg); opacity: 0.95; }
// //         }
// //         @keyframes twinkle {
// //           0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
// //           50% { opacity: 0.3; filter: drop-shadow(0 0 1px rgba(255,255,255,0.25)); }
// //         }
// //         @keyframes bulbsBlink {
// //           0%, 100% { opacity: 0.9; }
// //           40% { opacity: 0.3; }
// //           60% { opacity: 0.7; }
// //         }
// //         /* smoother, slightly curved sleigh path */
// //         @keyframes sleighFly {
// //           0%   { transform: translate3d(120vw, 6vh, 0) scale(0.9); opacity: 0; }
// //           10%  { opacity: 1; }
// //           50%  { transform: translate3d(-20vw, 13vh, 0) scale(1.05); }
// //           100% { transform: translate3d(-120vw, 1vh, 0) scale(0.9); opacity: 0; }
// //         }

// //         /* MOBILE-ONLY HEADER MASK:
// //            hides snow/twinkles ABOVE the navbar, keeps content clean */
// //         @media (max-width: 767px) {
// //           .mask-below-nav {
// //             -webkit-mask-image: linear-gradient(to bottom, transparent 0, transparent var(--nav-offset), black calc(var(--nav-offset) + 1px));
// //                     mask-image: linear-gradient(to bottom, transparent 0, transparent var(--nav-offset), black calc(var(--nav-offset) + 1px));
// //           }
// //         }

// //         ${respectReducedMotion ? `
// //         @media (prefers-reduced-motion: reduce) {
// //           .anim-snow { animation: none !important; }
// //           .anim-twinkle { animation: none !important; }
// //           .anim-bulbs { animation: none !important; }
// //           .anim-sleigh { animation: none !important; }
// //         }` : ``}
// //         `}
// //       </style>

// //       {/* Snow + Twinkles wrapped in mask on mobile so header stays clean */}
// //       <div className={isMobile ? "mask-below-nav absolute inset-0" : "absolute inset-0"}>
// //         {/* Snow */}
// //         <div className="absolute inset-0">
// //           {flakeSpecs.map(({ id, size, duration, delay, left, drift, opacity }) => (
// //             <div
// //               key={id}
// //               className="absolute anim-snow"
// //               style={{
// //                 left: `${left}vw`,
// //                 top: `-${10 + (id % 40)}vh`,
// //                 width: size,
// //                 height: size,
// //                 borderRadius: size,
// //                 background: `rgba(255,255,255,${(0.85 * opacity).toFixed(2)})`,
// //                 boxShadow: `0 0 ${Math.max(3, size)}px rgba(255,255,255,0.8)`,
// //                 animation: `snowFall ${duration + (id % 5)}s linear ${delay}s infinite`,
// //                 // @ts-ignore
// //                 "--x": `${(-10 + (id % 20))}px`,
// //                 // @ts-ignore
// //                 "--drift": `${drift}px`,
// //                 // @ts-ignore
// //                 "--o": opacity,
// //               } as React.CSSProperties}
// //             />
// //           ))}
// //         </div>

// //         {/* Twinkles */}
// //         <div className="absolute inset-x-0 top-0" style={{ height: isMobile ? "26vh" : "33vh" }}>
// //           {Array.from({ length: isMobile ? 18 : 24 }).map((_, i) => (
// //             <div
// //               key={`tw-${i}`}
// //               className="absolute anim-twinkle"
// //               style={{
// //                 left: `${(i * 97) % 100}vw`,
// //                 top: `${(i * 41) % (isMobile ? 26 : 33)}vh`,
// //                 width: (isMobile ? 1 : 2) + (i % 3),
// //                 height: (isMobile ? 1 : 2) + (i % 3),
// //                 borderRadius: 9999,
// //                 background: "#fff",
// //                 animation: `twinkle ${2 + (i % 5)}s ease-in-out ${(i % 7) * 0.6}s infinite`,
// //                 opacity: 0.8,
// //               }}
// //             />
// //           ))}
// //         </div>
// //       </div>

// //       {/* String lights under navbar (responsive) */}
// //       <div className="absolute left-0 right-0" style={{ top: headerOffsetPx, height: isMobile ? 70 : 150 }}>
// //         <svg
// //           width="100%"
// //           height="100%"
// //           viewBox="0 0 1000 100"
// //           preserveAspectRatio="xMidYMid meet"
// //           className="opacity-95"
// //         >
// //           {/* Garland curve */}
// //           <path
// //             d={
// //               isMobile
// //                 ? "M0,20 C220,76 420,8 640,72 C820,120 900,30 1000,60"
// //                 : "M0,26 C200,88 400,10 600,80 C800,150 900,30 1000,70"
// //             }
// //             stroke="rgba(120,80,60,0.85)"
// //             strokeWidth={garlandStroke}
// //             fill="none"
// //             vectorEffect="non-scaling-stroke"
// //           />
// //           {/* Pastel bulbs */}
// //           {new Array(bulbCount).fill(0).map((_, i) => {
// //             const x = (isMobile ? 20 : 24) + i * bulbSpacing;
// //             const y = bulbYBase + Math.sin(i * 0.65) * bulbYWave;
// //             const colors = ["#ffe3e3","#fff4b8","#c9f7d2","#d4edff","#ffd6ef","#fff9df"];
// //             const c = colors[i % colors.length];
// //             return (
// //               <g
// //                 key={i}
// //                 className="anim-bulbs"
// //                 style={{ animation: `bulbsBlink ${2.1 + (i % 4)}s ease-in-out ${(i % 5) * 0.25}s infinite` }}
// //               >
// //                 <line
// //                   x1={x}
// //                   y1={y - (isMobile ? 12 : 16)}
// //                   x2={x}
// //                   y2={y - (isMobile ? 5 : 6)}
// //                   stroke="#7a593f"
// //                   strokeWidth={bulbLineStroke}
// //                   vectorEffect="non-scaling-stroke"
// //                 />
// //                 <circle cx={x} cy={y} r={bulbRadius} fill={c} stroke="rgba(255,255,255,0.85)" strokeWidth="1.25" />
// //                 <circle cx={x + 2} cy={y - 2} r={isMobile ? 3 : 4} fill="rgba(255,255,255,0.95)" />
// //               </g>
// //             );
// //           })}
// //         </svg>
// //       </div>

// //       {/* Sleigh — clear Santa + reindeer silhouette */}
// //       {showSleigh && (
// //         <div className="absolute left-0 right-0" style={{ top: sleighTop }}>
// //           <div
// //             className="anim-sleigh"
// //             style={{
// //               animation: `sleighFly ${sleighDuration}s linear ${sleighDelay}s infinite`,
// //               filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9))",
// //               transform: `scale(${sleighScale})`,
// //             }}
// //           >
// //             {/* Wider viewBox for three reindeer + sleigh */}
// //             <svg width={isMobile ? 340 : 480} height={isMobile ? 70 : 100} viewBox="0 0 480 100" fill="none">
// //               <defs>
// //                 <radialGradient id="spark" cx="50%" cy="50%" r="50%">
// //                   <stop offset="0%" stopColor="rgba(255,255,255,1)"/>
// //                   <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
// //                 </radialGradient>
// //               </defs>

// //               {/* Sparkle trail */}
// //               {Array.from({ length: 10 }).map((_, i) => (
// //                 <circle key={i} cx={30 + i * 36} cy={14 + (i % 2) * 18} r={i % 2 ? 2.4 : 3.2} fill="url(#spark)" />
// //               ))}

// //               {/* Reindeer 1–3 */}
// //               {[0, 1, 2].map((r) => {
// //                 const ox = 90 + r * 70;
// //                 const oy = 44;
// //                 return (
// //                   <g key={r} transform={`translate(${ox}, ${oy})`}>
// //                     <path d="M-20,0 q20,-10 40,0" stroke="white" strokeWidth="2.6" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
// //                     <path d="M18,-2 l10,-10" stroke="white" strokeWidth="2.2" vectorEffect="non-scaling-stroke"/>
// //                     <circle cx="30" cy="-14" r="3" fill="white"/>
// //                     <path d="M30,-17 l6,-6 M30,-17 l-5,-6" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
// //                     <path d="M-10,2 l-6,10 M6,2 l-5,10" stroke="white" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
// //                     {r < 2 && (
// //                       <line x1="34" y1="-10" x2={70} y2="-12" stroke="#FFD166" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
// //                     )}
// //                   </g>
// //                 );
// //               })}

// //               {/* Lines from last deer to sleigh */}
// //               <line x1="300" y1="32" x2="360" y2="30" stroke="#FFD166" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />
// //               <line x1="302" y1="36" x2="362" y2="34" stroke="#FFD166" strokeWidth="1.8" vectorEffect="non-scaling-stroke" />

// //               {/* Santa + sleigh (gold outline) */}
// //               <g transform="translate(360,42)">
// //                 <path d="M0,0 q18,-16 44,-16 l0,14 q0,16 -26,16 l-18,0" stroke="#FFD166" strokeWidth="3.2" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"/>
// //                 <path d="M-8,14 q14,12 54,12" stroke="#FFD166" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke"/>
// //                 <circle cx="10" cy="-8" r="4" fill="white" />
// //                 <circle cx="16" cy="-12" r="2" fill="#FFD166" />
// //               </g>
// //             </svg>
// //           </div>
// //         </div>
// //       )}

// //       {/* Bottom glow */}
// //       <div
// //         className="absolute bottom-0 left-0 w-full"
// //         style={{
// //           height: "60px",
// //           background: `radial-gradient(80% 60% at 50% 100%, rgba(255,255,255,${0.35 * intensity}) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 70%)`,
// //           filter: "blur(6px)",
// //         }}
// //       />
// //     </div>
// //   );
// // }

// // // import React, { useEffect, useMemo, useState } from "react";

// // // /**
// // //  * ChristmasOverlay.tsx — refined v2
// // //  * - Larger pastel bulbs on a fuller garland under the navbar
// // //  * - Minimalist white/gold sleigh, bigger + brighter + curved flight
// // //  * - navOffset prop for header spacing
// // //  * - respects reduced motion when respectReducedMotion=true
// // //  */

// // // export type ChristmasOverlayProps = {
// // //   enabled?: boolean;
// // //   autoEnable?: boolean;
// // //   seasonStart?: string; // "12-01"
// // //   seasonEnd?: string;   // "01-06"
// // //   flakes?: number;
// // //   lowPower?: boolean;
// // //   glowScale?: number;
// // //   respectReducedMotion?: boolean; // default true
// // //   /** px offset to place garland below your navbar */
// // //   navOffset?: number; // default 100
// // // };

// // // export default function ChristmasOverlay({
// // //   enabled = true,
// // //   autoEnable = true,
// // //   seasonStart = "12-01",
// // //   seasonEnd = "01-06",
// // //   flakes = 120,
// // //   lowPower = false,
// // //   glowScale = 1.0,
// // //   respectReducedMotion = true,
// // //   navOffset = 100,
// // // }: ChristmasOverlayProps) {
// // //   const [prefersReducedMotion, setPRM] = useState(false);

// // //   useEffect(() => {
// // //     if (!respectReducedMotion) return; // ignore OS setting if asked
// // //     const media = window.matchMedia("(prefers-reduced-motion: reduce)");
// // //     const update = () => setPRM(!!media.matches);
// // //     update();
// // //     media.addEventListener?.("change", update);
// // //     return () => media.removeEventListener?.("change", update);
// // //   }, [respectReducedMotion]);

// // //   const effectivePRM = respectReducedMotion ? prefersReducedMotion : false;

// // //   const isInSeason = useMemo(() => {
// // //     if (!autoEnable) return true;
// // //     const now = new Date();
// // //     const year = now.getFullYear();
// // //     const parseMD = (md: string, y: number) => {
// // //       const [m, d] = md.split("-").map(Number);
// // //       return new Date(y, (m - 1) | 0, d | 0, 0, 0, 0, 0);
// // //     };
// // //     const start = parseMD(seasonStart, year);
// // //     let end = parseMD(seasonEnd, year);
// // //     if (end < start) {
// // //       if (now.getMonth() === 0) {
// // //         const prevStart = parseMD(seasonStart, year - 1);
// // //         return now >= parseMD(seasonEnd, year) || now >= prevStart;
// // //       } else {
// // //         end = parseMD(seasonEnd, year + 1);
// // //       }
// // //     }
// // //     return now >= start && now <= end;
// // //   }, [autoEnable, seasonStart, seasonEnd]);

// // //   const active = enabled && isInSeason;
// // //   const intensity = Math.max(0, Math.min(1.6, glowScale));

// // //   // Snow spec
// // //   const flakeSpecs = useMemo(() => {
// // //     const N = Math.max(8, Math.floor(flakes * (effectivePRM || lowPower ? 0.35 : 1)));
// // //     const arr = new Array(N).fill(0).map((_, i) => {
// // //       const seed = (i + 1) * 2654435761;
// // //       const rand = (n: number) => (Math.abs(Math.sin(seed * (n + 1))) % 1);
// // //       const size = 2 + Math.floor(rand(1) * 4); // 2..5 px
// // //       const duration = 6 + Math.floor(rand(2) * 10);
// // //       const delay = Math.floor(rand(3) * 8);
// // //       const left = Math.floor(rand(4) * 100);
// // //       const drift = -20 + Math.floor(rand(5) * 40);
// // //       const opacity = 0.5 + rand(6) * 0.5;
// // //       return { id: i, size, duration, delay, left, drift, opacity };
// // //     });
// // //     return arr;
// // //   }, [flakes, effectivePRM, lowPower]);

// // //   if (!active) return null;

// // //   return (
// // //     <div
// // //       aria-hidden
// // //       className="fixed inset-0 z-[60] pointer-events-none select-none overflow-hidden"
// // //       style={{
// // //         background:
// // //           `radial-gradient(120% 70% at 50% 120%, rgba(255,255,255,${0.25 * intensity}) 0%, rgba(255,255,255,0) 55%),` +
// // //           `radial-gradient(100% 65% at -5% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%),` +
// // //           `radial-gradient(100% 65% at 105% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%)`,
// // //       }}
// // //     >
// // //       <style>
// // //         {`
// // //         @keyframes snowFall {
// // //           0% { transform: translate3d(var(--x,0), -110vh, 0) rotate(0deg); opacity: var(--o,1); }
// // //           100% { transform: translate3d(calc(var(--x,0) + var(--drift, 0px)), 110vh, 0) rotate(360deg); opacity: 0.95; }
// // //         }
// // //         @keyframes twinkle {
// // //           0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
// // //           50% { opacity: 0.3; filter: drop-shadow(0 0 1px rgba(255,255,255,0.25)); }
// // //         }
// // //         @keyframes bulbsBlink {
// // //           0%, 100% { opacity: 0.9; }
// // //           40% { opacity: 0.3; }
// // //           60% { opacity: 0.7; }
// // //         }
// // //         /* smoother, slightly curved sleigh path */
// // //         @keyframes sleighFly {
// // //           0%   { transform: translate3d(120vw, 5vh, 0) scale(0.9); opacity: 0; }
// // //           10%  { opacity: 1; }
// // //           50%  { transform: translate3d(-20vw, 12vh, 0) scale(1.05); }
// // //           100% { transform: translate3d(-120vw, 0, 0) scale(0.9); opacity: 0; }
// // //         }
// // //         ${respectReducedMotion ? `
// // //         @media (prefers-reduced-motion: reduce) {
// // //           .anim-snow { animation: none !important; }
// // //           .anim-twinkle { animation: none !important; }
// // //           .anim-bulbs { animation: none !important; }
// // //           .anim-sleigh { animation: none !important; }
// // //         }` : ``}
// // //         `}
// // //       </style>

// // //       {/* Snow */}
// // //       <div className="absolute inset-0">
// // //         {flakeSpecs.map(({ id, size, duration, delay, left, drift, opacity }) => (
// // //           <div
// // //             key={id}
// // //             className="absolute anim-snow"
// // //             style={{
// // //               left: `${left}vw`,
// // //               top: `-${10 + (id % 40)}vh`,
// // //               width: size,
// // //               height: size,
// // //               borderRadius: size,
// // //               background: `rgba(255,255,255,${(0.85 * opacity).toFixed(2)})`,
// // //               boxShadow: `0 0 ${Math.max(3, size)}px rgba(255,255,255,0.8)`,
// // //               animation: `snowFall ${duration + (id % 5)}s linear ${delay}s infinite`,
// // //               // @ts-ignore
// // //               "--x": `${(-10 + (id % 20))}px`,
// // //               // @ts-ignore
// // //               "--drift": `${drift}px`,
// // //               // @ts-ignore
// // //               "--o": opacity,
// // //             } as React.CSSProperties}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* Twinkles */}
// // //       <div className="absolute inset-x-0 top-0 h-1/3">
// // //         {Array.from({ length: 24 }).map((_, i) => (
// // //           <div
// // //             key={`tw-${i}`}
// // //             className="absolute anim-twinkle"
// // //             style={{
// // //               left: `${(i * 97) % 100}vw`,
// // //               top: `${(i * 41) % 33}vh`,
// // //               width: 2 + (i % 3),
// // //               height: 2 + (i % 3),
// // //               borderRadius: 9999,
// // //               background: "#fff",
// // //               animation: `twinkle ${2 + (i % 5)}s ease-in-out ${(i % 7) * 0.6}s infinite`,
// // //               opacity: 0.8,
// // //             }}
// // //           />
// // //         ))}
// // //       </div>

// // //       {/* String lights under navbar (bigger + fuller) */}
// // //       <div className="absolute left-0 right-0" style={{ top: navOffset, height: 72 }}>
// // //         <svg
// // //           width="100%"
// // //           height="100%"
// // //           viewBox="0 0 1000 100"
// // //           preserveAspectRatio="xMidYMid meet"
// // //           className="opacity-95"
// // //         >
// // //           {/* Garland curve (slightly deeper arc) */}
// // //           <path
// // //             d="M0,26 C200,88 400,10 600,80 C800,150 900,30 1000,70"
// // //             stroke="rgba(120,80,60,0.85)"
// // //             strokeWidth="3.5"
// // //             fill="none"
// // //             vectorEffect="non-scaling-stroke"
// // //           />
// // //           {/* Pastel bulbs (more + bigger + smoother spacing) */}
// // //           {new Array(22).fill(0).map((_, i) => {
// // //             const x = 24 + i * 44; // tighter spacing
// // //             const y = 28 + Math.sin(i * 0.65) * 18;
// // //             const colors = ["#ffe3e3","#fff4b8","#c9f7d2","#d4edff","#ffd6ef","#fff9df"];
// // //             const c = colors[i % colors.length];
// // //             return (
// // //               <g
// // //                 key={i}
// // //                 className="anim-bulbs"
// // //                 style={{ animation: `bulbsBlink ${2.2 + (i % 4)}s ease-in-out ${(i % 5) * 0.25}s infinite` }}
// // //               >
// // //                 <line
// // //                   x1={x} y1={y - 16} x2={x} y2={y - 6}
// // //                   stroke="#7a593f" strokeWidth="3.5" vectorEffect="non-scaling-stroke"
// // //                 />
// // //                 <circle cx={x} cy={y} r="11" fill={c} stroke="rgba(255,255,255,0.85)" strokeWidth="1.25" />
// // //                 <circle cx={x + 2} cy={y - 2} r="4" fill="rgba(255,255,255,0.95)" />
// // //               </g>
// // //             );
// // //           })}
// // //         </svg>
// // //       </div>

// // //       {/* Sleigh — larger, brighter, curved flight */}
// // //       {!effectivePRM && !lowPower && (
// // //         <div className="absolute left-0 right-0" style={{ top: Math.max(20, navOffset - 60) }}>
// // //           <div
// // //             className="anim-sleigh"
// // //             style={{
// // //               animation: `sleighFly 18s linear ${Math.floor(Math.random() * 14 + 6)}s infinite`,
// // //               filter: "drop-shadow(0 0 10px rgba(255,255,255,0.9))",
// // //               transform: "scale(1.25)",
// // //             }}
// // //           >
// // //             <svg width="420" height="90" viewBox="0 0 420 90" fill="none" className="opacity-95">
// // //               <defs>
// // //                 <radialGradient id="snowSpark" cx="50%" cy="50%" r="50%">
// // //                   <stop offset="0%" stopColor="rgba(255,255,255,1)"/>
// // //                   <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
// // //                 </radialGradient>
// // //               </defs>
// // //               {/* Comet-like trail */}
// // //               {Array.from({ length: 9 }).map((_, i) => (
// // //                 <circle key={i} cx={40 + i * 36} cy={10 + (i % 2) * 16} r={i % 2 ? 2.4 : 3.4} fill="url(#snowSpark)" />
// // //               ))}
// // //               {/* Reindeer ribbon */}
// // //               <path
// // //                 d="M10 42 Q32 18 60 42 T110 42 T160 42 T210 42 T260 42 T310 42"
// // //                 stroke="white" strokeWidth="2.6" strokeLinecap="round" vectorEffect="non-scaling-stroke"
// // //               />
// // //               {/* Sleigh (gold outline) */}
// // //               <path
// // //                 d="M330 36 q14 -14 34 -14 l0 14 q0 14 -28 14 l-20 0"
// // //                 stroke="#FFD166" strokeWidth="3" fill="none" strokeLinecap="round" vectorEffect="non-scaling-stroke"
// // //               />
// // //               {/* Gold lights on sleigh */}
// // //               <circle cx="344" cy="26" r="4" fill="#FFD166" />
// // //               <circle cx="358" cy="26" r="4" fill="#FFD166" />
// // //             </svg>
// // //           </div>
// // //         </div>
// // //       )}

// // //       {/* Bottom glow */}
// // //       <div
// // //         className="absolute bottom-0 left-0 w-full"
// // //         style={{
// // //           height: "60px",
// // //           background: `radial-gradient(80% 60% at 50% 100%, rgba(255,255,255,${0.35 * intensity}) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 70%)`,
// // //           filter: "blur(6px)",
// // //         }}
// // //       />
// // //     </div>
// // //   );
// // // }



// // // // import React, { useEffect, useMemo, useState } from "react";

// // // // /**
// // // //  * ChristmasOverlay.tsx — refined
// // // //  * - Minimalist sleigh (white/gold), glow + curved flight
// // // //  * - Round pastel bulbs, no distortion
// // // //  * - navOffset to place garland under navbar
// // // //  */

// // // // export type ChristmasOverlayProps = {
// // // //   enabled?: boolean;
// // // //   autoEnable?: boolean;
// // // //   seasonStart?: string; // "12-01"
// // // //   seasonEnd?: string;   // "01-06"
// // // //   flakes?: number;
// // // //   lowPower?: boolean;
// // // //   glowScale?: number;
// // // //   respectReducedMotion?: boolean; // default true
// // // //   /** px offset to place garland below your navbar */
// // // //   navOffset?: number; // default 100
// // // // };

// // // // export default function ChristmasOverlay({
// // // //   enabled = true,
// // // //   autoEnable = true,
// // // //   seasonStart = "12-01",
// // // //   seasonEnd = "01-06",
// // // //   flakes = 120,
// // // //   lowPower = false,
// // // //   glowScale = 1.0,
// // // //   respectReducedMotion = true,
// // // //   navOffset = 100,
// // // // }: ChristmasOverlayProps) {
// // // //   const [prefersReducedMotion, setPRM] = useState(false);

// // // //   useEffect(() => {
// // // //     if (!respectReducedMotion) return; // ignore OS setting if asked
// // // //     const media = window.matchMedia("(prefers-reduced-motion: reduce)");
// // // //     const update = () => setPRM(!!media.matches);
// // // //     update();
// // // //     media.addEventListener?.("change", update);
// // // //     return () => media.removeEventListener?.("change", update);
// // // //   }, [respectReducedMotion]);

// // // //   const effectivePRM = respectReducedMotion ? prefersReducedMotion : false;

// // // //   const isInSeason = useMemo(() => {
// // // //     if (!autoEnable) return true;
// // // //     const now = new Date();
// // // //     const year = now.getFullYear();
// // // //     const parseMD = (md: string, y: number) => {
// // // //       const [m, d] = md.split("-").map(Number);
// // // //       return new Date(y, (m - 1) | 0, d | 0, 0, 0, 0, 0);
// // // //     };
// // // //     const start = parseMD(seasonStart, year);
// // // //     let end = parseMD(seasonEnd, year);
// // // //     if (end < start) {
// // // //       if (now.getMonth() === 0) {
// // // //         const prevStart = parseMD(seasonStart, year - 1);
// // // //         return now >= parseMD(seasonEnd, year) || now >= prevStart;
// // // //       } else {
// // // //         end = parseMD(seasonEnd, year + 1);
// // // //       }
// // // //     }
// // // //     return now >= start && now <= end;
// // // //   }, [autoEnable, seasonStart, seasonEnd]);

// // // //   const active = enabled && isInSeason;
// // // //   const intensity = Math.max(0, Math.min(1.6, glowScale));

// // // //   // Snow spec
// // // //   const flakeSpecs = useMemo(() => {
// // // //     const N = Math.max(8, Math.floor(flakes * (effectivePRM || lowPower ? 0.35 : 1)));
// // // //     const arr = new Array(N).fill(0).map((_, i) => {
// // // //       const seed = (i + 1) * 2654435761;
// // // //       const rand = (n: number) => (Math.abs(Math.sin(seed * (n + 1))) % 1);
// // // //       const size = 2 + Math.floor(rand(1) * 4); // 2..5 px
// // // //       const duration = 6 + Math.floor(rand(2) * 10);
// // // //       const delay = Math.floor(rand(3) * 8);
// // // //       const left = Math.floor(rand(4) * 100);
// // // //       const drift = -20 + Math.floor(rand(5) * 40);
// // // //       const opacity = 0.5 + rand(6) * 0.5;
// // // //       return { id: i, size, duration, delay, left, drift, opacity };
// // // //     });
// // // //     return arr;
// // // //   }, [flakes, effectivePRM, lowPower]);

// // // //   if (!active) return null;

// // // //   return (
// // // //     <div
// // // //       aria-hidden
// // // //       className="fixed inset-0 z-[60] pointer-events-none select-none overflow-hidden"
// // // //       style={{
// // // //         background:
// // // //           `radial-gradient(120% 70% at 50% 120%, rgba(255,255,255,${0.25 * intensity}) 0%, rgba(255,255,255,0) 55%),` +
// // // //           `radial-gradient(100% 65% at -5% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%),` +
// // // //           `radial-gradient(100% 65% at 105% -10%, rgba(255,220,170,${0.15 * intensity}) 0%, rgba(255,220,170,0) 55%)`,
// // // //       }}
// // // //     >
// // // //       <style>
// // // //         {`
// // // //         @keyframes snowFall {
// // // //           0% { transform: translate3d(var(--x,0), -110vh, 0) rotate(0deg); opacity: var(--o,1); }
// // // //           100% { transform: translate3d(calc(var(--x,0) + var(--drift, 0px)), 110vh, 0) rotate(360deg); opacity: 0.95; }
// // // //         }
// // // //         @keyframes twinkle {
// // // //           0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 6px rgba(255,255,255,0.6)); }
// // // //           50% { opacity: 0.3; filter: drop-shadow(0 0 1px rgba(255,255,255,0.25)); }
// // // //         }
// // // //         @keyframes bulbsBlink {
// // // //           0%, 100% { opacity: 0.9; }
// // // //           40% { opacity: 0.3; }
// // // //           60% { opacity: 0.7; }
// // // //         }
// // // //         /* smoother, slightly curved sleigh path */
// // // //         @keyframes sleighFly {
// // // //           0%   { transform: translate3d(120vw, 5vh, 0) scale(0.9); opacity: 0; }
// // // //           10%  { opacity: 1; }
// // // //           50%  { transform: translate3d(-20vw, 12vh, 0) scale(1.05); }
// // // //           100% { transform: translate3d(-120vw, 0, 0) scale(0.9); opacity: 0; }
// // // //         }
// // // //         ${respectReducedMotion ? `
// // // //         @media (prefers-reduced-motion: reduce) {
// // // //           .anim-snow { animation: none !important; }
// // // //           .anim-twinkle { animation: none !important; }
// // // //           .anim-bulbs { animation: none !important; }
// // // //           .anim-sleigh { animation: none !important; }
// // // //         }` : ``}
// // // //         `}
// // // //       </style>

// // // //       {/* Snow */}
// // // //       <div className="absolute inset-0">
// // // //         {flakeSpecs.map(({ id, size, duration, delay, left, drift, opacity }) => (
// // // //           <div
// // // //             key={id}
// // // //             className="absolute anim-snow"
// // // //             style={{
// // // //               left: `${left}vw`,
// // // //               top: `-${10 + (id % 40)}vh`,
// // // //               width: size,
// // // //               height: size,
// // // //               borderRadius: size,
// // // //               background: `rgba(255,255,255,${(0.85 * opacity).toFixed(2)})`,
// // // //               boxShadow: `0 0 ${Math.max(3, size)}px rgba(255,255,255,0.8)`,
// // // //               animation: `snowFall ${duration + (id % 5)}s linear ${delay}s infinite`,
// // // //               // @ts-ignore
// // // //               "--x": `${(-10 + (id % 20))}px`,
// // // //               // @ts-ignore
// // // //               "--drift": `${drift}px`,
// // // //               // @ts-ignore
// // // //               "--o": opacity,
// // // //             } as React.CSSProperties}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* Twinkles */}
// // // //       <div className="absolute inset-x-0 top-0 h-1/3">
// // // //         {Array.from({ length: 24 }).map((_, i) => (
// // // //           <div
// // // //             key={`tw-${i}`}
// // // //             className="absolute anim-twinkle"
// // // //             style={{
// // // //               left: `${(i * 97) % 100}vw`,
// // // //               top: `${(i * 41) % 33}vh`,
// // // //               width: 2 + (i % 3),
// // // //               height: 2 + (i % 3),
// // // //               borderRadius: 9999,
// // // //               background: "#fff",
// // // //               animation: `twinkle ${2 + (i % 5)}s ease-in-out ${(i % 7) * 0.6}s infinite`,
// // // //               opacity: 0.8,
// // // //             }}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* String lights under navbar */}
// // // //       <div className="absolute left-0 right-0" style={{ top: navOffset, height: 200 }}>
// // // //         <svg
// // // //           width="100%"
// // // //           height="100%"
// // // //           viewBox="0 0 1000 100"
// // // //           preserveAspectRatio="xMidYMid meet"
// // // //           className="opacity-95"
// // // //         >
// // // //           {/* Garland curve */}
// // // //           <path
// // // //             d="M0,20 C200,80 400,0 600,70 C800,140 900,20 1000,60"
// // // //             stroke="rgba(120,80,60,0.7)"
// // // //             strokeWidth="3"
// // // //             fill="none"
// // // //             vectorEffect="non-scaling-stroke"
// // // //           />
// // // //           {/* Pastel bulbs (circles) */}
// // // //           {new Array(18).fill(0).map((_, i) => {
// // // //             const x = 30 + i * 54;
// // // //             const y = 20 + (Math.sin(i * 0.7) * 24 + 28);
// // // //             const colors = ["#ffb3b3","#fff1a8","#b6f3c2","#c2e6ff","#ffc4eb","#fff8d2"];
// // // //             const c = colors[i % colors.length];
// // // //             return (
// // // //               <g
// // // //                 key={i}
// // // //                 className="anim-bulbs"
// // // //                 style={{ animation: `bulbsBlink ${2 + (i % 4)}s ease-in-out ${(i % 5) * 0.3}s infinite` }}
// // // //               >
// // // //                 <line
// // // //                   x1={x}
// // // //                   y1={y - 12}
// // // //                   x2={x}
// // // //                   y2={y - 4}
// // // //                   stroke="#7a593f"
// // // //                   strokeWidth="3"
// // // //                   vectorEffect="non-scaling-stroke"
// // // //                 />
// // // //                 <circle cx={x} cy={y} r="9" fill={c} stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
// // // //                 <circle cx={x} cy={y + 2} r="3" fill="rgba(255,255,255,0.9)" />
// // // //               </g>
// // // //             );
// // // //           })}
// // // //         </svg>
// // // //       </div>

// // // //       {/* Sleigh — minimalist silhouette with glow */}
// // // //       {!effectivePRM && !lowPower && (
// // // //         <div className="absolute left-0 right-0" style={{ top: navOffset - 40 }}>
// // // //           <div
// // // //             className="anim-sleigh"
// // // //             style={{
// // // //               animation: `sleighFly 20s linear ${Math.floor(Math.random() * 18 + 4)}s infinite`,
// // // //               filter: "drop-shadow(0 0 6px rgba(255,255,255,0.7))",
// // // //             }}
// // // //           >
// // // //             <svg width="280" height="64" viewBox="0 0 280 64" fill="none" className="opacity-90">
// // // //               {/* Subtle star trail */}
// // // //               {[...Array(7)].map((_, i) => (
// // // //                 <circle key={i} cx={24 + i * 28} cy={8 + (i % 2) * 12} r={i % 2 ? 1.6 : 2.2} fill="white" opacity="0.9" />
// // // //               ))}
// // // //               {/* Reindeer line (white) */}
// // // //               <path
// // // //                 d="M5 30 Q15 15 35 30 T65 30 T95 30 T125 30 T155 30 T185 30"
// // // //                 stroke="white"
// // // //                 strokeWidth="2"
// // // //                 strokeLinecap="round"
// // // //                 vectorEffect="non-scaling-stroke"
// // // //               />
// // // //               {/* Sleigh (gold outline) */}
// // // //               <path
// // // //                 d="M200 25 q10 -10 25 -10 l0 10 q0 10 -20 10 l-15 0"
// // // //                 stroke="#FFD166"
// // // //                 strokeWidth="2.2"
// // // //                 fill="none"
// // // //                 strokeLinecap="round"
// // // //                 vectorEffect="non-scaling-stroke"
// // // //               />
// // // //               {/* Little lights on sleigh */}
// // // //               <circle cx="210" cy="20" r="3" fill="#FFD166" />
// // // //               <circle cx="220" cy="20" r="3" fill="#FFD166" />
// // // //             </svg>
// // // //           </div>
// // // //         </div>
// // // //       )}

// // // //       {/* Bottom glow */}
// // // //       <div
// // // //         className="absolute bottom-0 left-0 w-full"
// // // //         style={{
// // // //           height: "60px",
// // // //           background: `radial-gradient(80% 60% at 50% 100%, rgba(255,255,255,${0.35 * intensity}) 0%, rgba(255,255,255,0.12) 40%, rgba(255,255,255,0) 70%)`,
// // // //           filter: "blur(6px)",
// // // //         }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // }
