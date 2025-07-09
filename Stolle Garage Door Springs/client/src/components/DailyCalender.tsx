// src/components/DailyCalendar.tsx
import { useState, useEffect } from "react";
import { Calendar as CalendarIcon } from "lucide-react";

export default function DailyCalendar() {
  const [today, setToday] = useState(new Date());

  useEffect(() => {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    const ms = midnight.getTime() - now.getTime();
    const timer = setTimeout(() => setToday(new Date()), ms);
    return () => clearTimeout(timer);
  }, [today]);

  const formatted = today.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div
      className="
        relative 
        bg-white/80 backdrop-blur-md 
        px-4 py-2 rounded-lg flex items-center 
        shadow-md mx-auto my-4
      "
    >
      <CalendarIcon className="w-5 h-5 text-orange-500 mr-2" />
      <span className="font-medium text-gray-900">{formatted}</span>
    </div>
  );
}
