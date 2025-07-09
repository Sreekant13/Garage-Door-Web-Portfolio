// src/components/InteractiveCalendar.tsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import { isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "react-calendar/dist/Calendar.css";

type ReactCalendarView = "month" | "year" | "decade" | "century";

interface TileProps {
  date: Date;
  view: ReactCalendarView;
}

export default function InteractiveCalendar() {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<ReactCalendarView>("month");

  const renderHeader = ({ label, onPrevClick, onNextClick }: any) => (
    <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg text-white">
      <button onClick={onPrevClick} className="p-1 hover:bg-white/20 rounded-full">
        <ChevronLeft size={18} />
      </button>
      <div className="font-semibold text-base">{label}</div>
      <button onClick={onNextClick} className="p-1 hover:bg-white/20 rounded-full">
        <ChevronRight size={18} />
      </button>
    </div>
  );

  return (
    <div
      className="
        relative mb-6
        sm:absolute sm:top-20 sm:right-6 sm:mb-0
        z-30
        bg-white/80 backdrop-blur-lg
        p-4 rounded-xl shadow-2xl
        w-full sm:w-80
      "
    >
      <Calendar
        onChange={(v) => v instanceof Date && setDate(v)}
        value={date}
        view={view}
        onViewChange={({ view: newView }: { view: ReactCalendarView }) =>
          setView(newView)
        }
        showNeighboringMonth={false}
        prevLabel={null}
        nextLabel={null}
        navigationLabel={renderHeader}
        formatShortWeekday={(_, d) =>
          d
            .toLocaleDateString(undefined, { weekday: "short" })
            .charAt(0)
            .toUpperCase()
        }
        tileClassName={({ date: d, view: tileView }: TileProps) =>
          tileView === "month" && isSameDay(d, date)
            ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full transition"
            : ""
        }
        className="
          text-sm
          [&__navigation]:hidden
          [&__month-view__weekdays]:border-b
          [&__month-view__weekdays]:border-gray-200
          [&__month-view__weekdays__weekday]:flex
          [&__month-view__weekdays__weekday]:items-center
          [&__month-view__weekdays__weekday]:justify-center
          [&__month-view__weekend]:bg-red-50
        "
      />
    </div>
  );
}

// import { useState } from "react";
// import Calendar from "react-calendar";
// import { isSameDay } from "date-fns";
// import "react-calendar/dist/Calendar.css";

// export default function InteractiveCalendar() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div
//       className="
//         relative mb-6
//         sm:absolute sm:top-[5rem] sm:right-4 sm:mb-0
//         z-30
//         bg-white/90 backdrop-blur-md
//         p-2 sm:p-3 rounded-lg shadow-lg
//         max-w-[90vw] sm:max-w-xs md:max-w-sm
//         max-h-[80vh] overflow-auto
//       "
//     >
//       <Calendar
//         onChange={(v) => v instanceof Date && setDate(v)}
//         value={date}
//         className="w-full text-[0.65rem] sm:text-xs md:text-sm"
//         navigationLabel={({ label }) => (
//           <div className="text-center font-semibold text-gray-700 text-xs sm:text-sm">
//             {label}
//           </div>
//         )}
//         tileClassName={({ date: d, view }) =>
//           view === "month" && isSameDay(d, new Date())
//             ? "bg-garage-orange text-white rounded-full"
//             : ""
//         }
//         prevLabel="‹"
//         nextLabel="›"
//         showNeighboringMonth={false}
//       />
//     </div>
//   );
// }
