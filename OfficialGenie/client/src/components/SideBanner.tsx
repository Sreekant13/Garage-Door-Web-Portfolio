// src/components/SideBanner.tsx
import React, { useState, useEffect, useRef } from 'react';

export default function SideBanner() {
  const [visible, setVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const expiryRef = useRef<number>(0);

  // compute timestamp for next midnight
  const getNextMidnight = () => {
    const now = new Date();
    return new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0, 0
    ).getTime();
  };

  // format milliseconds → H:MM:SS
  const formatTime = (ms: number) => {
    const totalSec = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor((totalSec % 3600) / 60)
      .toString()
      .padStart(2, '0');
    const s = (totalSec % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  useEffect(() => {
    // set initial expiry to next midnight
    expiryRef.current = getNextMidnight();
    // initial time left
    setTimeLeft(expiryRef.current - Date.now());

    // slide in after a short delay
    const showTimeout = setTimeout(() => setVisible(true), 500);

    // update countdown every second
    const interval = setInterval(() => {
      const now = Date.now();
      let diff = expiryRef.current - now;
      if (diff <= 0) {
        // once past midnight, reset expiry to the following midnight
        expiryRef.current = getNextMidnight();
        diff = expiryRef.current - now;
      }
      setTimeLeft(diff);
    }, 1000);

    return () => {
      clearTimeout(showTimeout);
      clearInterval(interval);
    };
  }, []);

  // don't render until slide-in and while no time left
  if (!visible || timeLeft <= 0) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transform transition-transform duration-500
        ${visible ? 'translate-y-0' : 'translate-y-48'}`}
    >
      <div
        className="
          relative max-w-xs
          bg-gradient-to-br from-red-600 via-red-500 to-yellow-400
          text-white p-4 rounded-lg shadow-xl
        "
      >
        {/* close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-200"
          aria-label="Close"
        >
          ✕
        </button>

        <p className="text-lg font-bold mb-1">$10 OFF any repair</p>
        <p className="text-sm font-bold mb-1">Only Valid for Halloween</p>
        <p className="mb-3 text-sm">
          Expires at midnight ({formatTime(timeLeft)} left)
        </p>

        <a
          href="tel:3232705387"
          className="
            block bg-white text-red-600 font-semibold
            text-center py-2 rounded-md hover:bg-gray-100
            transition
          "
        >
          Call now: 323-270-5387
        </a>
      </div>
    </div>
  );
}
