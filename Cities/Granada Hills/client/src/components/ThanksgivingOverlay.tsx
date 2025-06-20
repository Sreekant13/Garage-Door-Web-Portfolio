'use client';

import React, { useEffect, useState } from "react";


interface FallingElement {
  id: number;
  type: "maple-leaf" | "oak-leaf" | "turkey" | "pumpkin" | "acorn" | "corn";
  left: number;
  delay: number;
  duration: number;
  size: number;
}

interface Feather {
  id: string;
  x: number;
  y: number;
  angle: number;
  distance: number;
  rotation: number;
}

/** Compute if today is within the Thanksgiving “season” */
function isThanksgivingSeason(date: Date = new Date()): boolean {
  const year = date.getFullYear();

  // Find 4th Thursday in November (month 10)
  const firstOfNov = new Date(year, 10, 1); // Nov 1
  let firstThursdayOffset = (4 - firstOfNov.getDay() + 7) % 7; // 4 = Thursday
  const firstThursday = 1 + firstThursdayOffset;
  const thanksgivingDay = firstThursday + 21; // 4th Thursday = 1st + 3 weeks

  const seasonStart = new Date(year, 10, thanksgivingDay - 4); // 4 days before
  const seasonEnd = new Date(year, 10, thanksgivingDay + 4);   // 4 days after

  // Strip time for clean comparison
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  return d >= seasonStart && d <= seasonEnd;
}

export function ThanksgivingOverlay() {
  const [elements, setElements] = useState<FallingElement[]>([]);
  const [shotTurkeys, setShotTurkeys] = useState<Set<number>>(new Set());
  const [feathers, setFeathers] = useState<Feather[]>([]);

  useEffect(() => {
    // Generate random falling elements
    const generateElements = () => {
      const newElements: FallingElement[] = [];

      // Maple Leaves (10) - Most prominent
      for (let i = 0; i < 10; i++) {
        newElements.push({
          id: i,
          type: "maple-leaf",
          left: Math.random() * 100,
          delay: Math.random() * 12,
          duration: 10 + Math.random() * 8,
          size: 0.7 + Math.random() * 0.8,
        });
      }

      // Oak Leaves (8)
      for (let i = 10; i < 18; i++) {
        newElements.push({
          id: i,
          type: "oak-leaf",
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 9 + Math.random() * 7,
          size: 0.6 + Math.random() * 0.7,
        });
      }

      // Turkeys (6)
      for (let i = 18; i < 24; i++) {
        newElements.push({
          id: i,
          type: "turkey",
          left: Math.random() * 100,
          delay: Math.random() * 15,
          duration: 14 + Math.random() * 10,
          size: 0.8 + Math.random() * 0.6,
        });
      }

      // Pumpkins (3)
      for (let i = 24; i < 27; i++) {
        newElements.push({
          id: i,
          type: "pumpkin",
          left: Math.random() * 100,
          delay: Math.random() * 14,
          duration: 11 + Math.random() * 7,
          size: 0.7 + Math.random() * 0.6,
        });
      }

      // Acorns (4)
      for (let i = 27; i < 31; i++) {
        newElements.push({
          id: i,
          type: "acorn",
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 5,
          size: 0.5 + Math.random() * 0.5,
        });
      }

      // Corn (2)
      for (let i = 31; i < 33; i++) {
        newElements.push({
          id: i,
          type: "corn",
          left: Math.random() * 100,
          delay: Math.random() * 12,
          duration: 10 + Math.random() * 6,
          size: 0.6 + Math.random() * 0.5,
        });
      }

      setElements(newElements);
    };

    generateElements();
  }, []);

  const getEmoji = (type: FallingElement["type"]) => {
    switch (type) {
      case "maple-leaf":
        return ["🍁", "🍂"][Math.floor(Math.random() * 2)];
      case "oak-leaf":
        return "🍂";
      case "turkey":
        return "🦃";
      case "pumpkin":
        return "🎃";
      case "acorn":
        return "🌰";
      case "corn":
        return "🌽";
    }
  };

  const handleTurkeyClick = (
    element: FallingElement,
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    // Mark turkey as shot
    setShotTurkeys((prev) => new Set(prev).add(element.id));

    // Get click position
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Create feathers exploding in all directions
    const newFeathers: Feather[] = [];
    const featherCount = 12;

    for (let i = 0; i < featherCount; i++) {
      const angleRad = ((360 / featherCount) * i * Math.PI) / 180;
      const distance = 100 + Math.random() * 100;
      const rotation = Math.random() * 360;

      newFeathers.push({
        id: `${element.id}-feather-${i}-${Date.now()}`,
        x,
        y,
        angle: angleRad,
        distance,
        rotation,
      });
    }

    setFeathers((prev) => [...prev, ...newFeathers]);

    // Remove feathers after animation completes
    setTimeout(() => {
      setFeathers((prev) =>
        prev.filter((f) => !f.id.startsWith(`${element.id}-feather-`))
      );
    }, 1500);

    // Respawn turkey after 3 seconds
    setTimeout(() => {
      setShotTurkeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(element.id);
        return newSet;
      });
    }, 3000);
  };



  return (
    <div className="thanksgiving-overlay pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Corner Decorations */}
      {/* <div className="corner-decorations pointer-events-none"> */}
        {/* Bottom Left - Pumpkin Patch */}
        {/* <div className="absolute bottom-20 left-4 flex items-center gap-3">
          <span className="text-5xl opacity-85 animate-gentle-glow">🎃</span>
          <span className="text-4xl opacity-80">🌽</span>
        </div> */}

        {/* Bottom Right - Harvest Bounty */}
        {/* <div className="absolute bottom-20 right-4 flex items-center gap-3">
          <span className="text-4xl opacity-80">🌽</span>
          <span className="text-5xl opacity-85 animate-gentle-glow">🎃</span>
        </div>
      </div> */}

      {/* Falling Elements */}
      <div className="falling-elements">
        {elements.map((element) => {
          const isShot = shotTurkeys.has(element.id);
          const isTurkey = element.type === "turkey";

          return (
            <div
              key={element.id}
              className={`falling-element falling-${element.type} ${
                isShot ? "shot" : ""
              } ${isTurkey && !isShot ? "turkey-clickable" : ""}`}
              style={{
                left: `${element.left}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: `${element.duration}s`,
                fontSize: `${element.size * 2}rem`,
                opacity: isShot ? 0 : 0.75,
                pointerEvents:
                  isTurkey && !isShot ? ("auto" as const) : ("none" as const),
              }}
              onClick={
                isTurkey && !isShot
                  ? (e) => handleTurkeyClick(element, e)
                  : undefined
              }
            >
              {getEmoji(element.type)}
            </div>
          );
        })}
      </div>

      {/* Feather Explosions */}
      <div className="feather-explosions">
        {feathers.map((feather) => {
          const endX = Math.cos(feather.angle) * feather.distance;
          const endY = Math.sin(feather.angle) * feather.distance;

          return (
            <div
              key={feather.id}
              className="exploding-feather"
              style={
                {
                  left: `${feather.x}px`,
                  top: `${feather.y}px`,
                  "--end-x": `${endX}px`,
                  "--end-y": `${endY}px`,
                  "--rotation": `${feather.rotation}deg`,
                } as React.CSSProperties
              }
            >
              🪶
            </div>
          );
        })}
      </div>

      {/* Inline Styles for Animations */}
      <style>{`
        .falling-element {
          position: absolute;
          top: -100px;
          animation: fall linear infinite;
          will-change: transform;
        }

        .falling-maple-leaf,
        .falling-oak-leaf {
          animation: fall-rotate-gentle linear infinite;
        }

        .falling-turkey {
          animation: float-waddle linear infinite;
        }

        .turkey-clickable {
          cursor: crosshair;
          transition: transform 0.1s ease;
        }

        .turkey-clickable:hover {
          transform: scale(1.2);
          filter: drop-shadow(0 0 10px rgba(255, 106, 0, 0.8));
        }

        .shot {
          animation: turkey-shot 0.5s ease-out forwards !important;
        }

        .falling-acorn {
          animation: fall-spin linear infinite;
        }

        .falling-pumpkin {
          animation: fall-wobble linear infinite;
        }

        .falling-corn {
          animation: fall-wiggle linear infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(calc(100vh + 100px));
          }
        }

        @keyframes fall-rotate-gentle {
          0% {
            transform: translateY(-100px) rotate(0deg);
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
          }
        }

        @keyframes fall-spin {
          0% {
            transform: translateY(-100px) rotate(0deg) scale(1);
          }
          50% {
            transform: translateY(50vh) rotate(180deg) scale(1.1);
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg) scale(1);
          }
        }

        @keyframes float-waddle {
          0% {
            transform: translate(0, -100px) rotate(0deg);
          }
          15% {
            transform: translate(25px, 15vh) rotate(5deg);
          }
          30% {
            transform: translate(-15px, 30vh) rotate(-5deg);
          }
          45% {
            transform: translate(35px, 45vh) rotate(5deg);
          }
          60% {
            transform: translate(-25px, 60vh) rotate(-5deg);
          }
          75% {
            transform: translate(30px, 75vh) rotate(5deg);
          }
          90% {
            transform: translate(-10px, 90vh) rotate(-5deg);
          }
          100% {
            transform: translate(0, calc(100vh + 100px)) rotate(0deg);
          }
        }

        @keyframes fall-wobble {
          0% {
            transform: translateY(-100px) rotate(-8deg);
          }
          25% {
            transform: translateY(25vh) rotate(8deg);
          }
          50% {
            transform: translateY(50vh) rotate(-8deg);
          }
          75% {
            transform: translateY(75vh) rotate(8deg);
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(-8deg);
          }
        }

        @keyframes fall-wiggle {
          0% {
            transform: translateY(-100px) translateX(0) rotate(-10deg);
          }
          20% {
            transform: translateY(20vh) translateX(15px) rotate(5deg);
          }
          40% {
            transform: translateY(40vh) translateX(-10px) rotate(-5deg);
          }
          60% {
            transform: translateY(60vh) translateX(20px) rotate(10deg);
          }
          80% {
            transform: translateY(80vh) translateX(-15px) rotate(-5deg);
          }
          100% {
            transform: translateY(calc(100vh + 100px)) translateX(0)
              rotate(0deg);
          }
        }

        @keyframes gentle-glow {
          0%,
          100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2)
              drop-shadow(0 0 8px rgba(255, 165, 0, 0.5));
          }
        }

        .animate-gentle-glow {
          animation: gentle-glow 3s ease-in-out infinite;
        }

        .exploding-feather {
          position: fixed;
          font-size: 1.5rem;
          pointer-events: none;
          animation: feather-explode 1.5s ease-out forwards;
          z-index: 9999;
        }

        @keyframes turkey-shot {
          0% {
            transform: scale(1) rotate(0deg);
            opacity: 0.75;
          }
          25% {
            transform: scale(1.3) rotate(15deg);
          }
          50% {
            transform: scale(0.9) rotate(-15deg);
          }
          75% {
            transform: scale(1.2) rotate(10deg);
            opacity: 0.5;
          }
          100% {
            transform: scale(0) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes feather-explode {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(var(--end-x), var(--end-y))
              rotate(var(--rotation))
              scale(0.5);
            opacity: 0;
          }
        }

        /* Reduce animations on mobile for performance */
        @media (max-width: 768px) {
          .falling-element:nth-child(n + 12) {
            display: none;
          }

          .corner-decorations span {
            font-size: 0.7em;
          }
        }
      `}</style>
    </div>
  );
}
