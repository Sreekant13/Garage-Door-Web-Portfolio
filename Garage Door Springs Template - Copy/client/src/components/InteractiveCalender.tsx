import { useState } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";
import "react-calendar/dist/Calendar.css";

export default function InteractiveCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <div
      className="
        relative mb-6
        sm:absolute sm:top-[5rem] sm:right-4 sm:mb-0
        z-30
        bg-white/90 backdrop-blur-md
        p-2 sm:p-3 rounded-lg shadow-lg
        max-w-[90vw] sm:max-w-xs md:max-w-sm
        max-h-[80vh] overflow-auto
      "
    >
      <Calendar
        onChange={(v) => v instanceof Date && setDate(v)}
        value={date}
        className="w-full text-[0.65rem] sm:text-xs md:text-sm"
        navigationLabel={({ label }) => (
          <div className="text-center font-semibold text-gray-700 text-xs sm:text-sm">
            {label}
          </div>
        )}
        tileClassName={({ date: d, view }) =>
          view === "month" && isSameDay(d, new Date())
            ? "bg-garage-orange text-white rounded-full"
            : ""
        }
        prevLabel="‹"
        nextLabel="›"
        showNeighboringMonth={false}
      />
    </div>
  );
}
