// src/components/Header.tsx
import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  Phone,
  DoorOpen,
  ChevronDown,
  Calendar as CalendarIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const currentYear = new Date().getFullYear();
const foundingYear = 1979;
const yearsInBusiness = currentYear - foundingYear + 1;

// top-level nav items
const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "pricing", label: "Service Pricing" },
  { id: "whychooseus", label: "Why Us?" },
  { id: "areas", label: "Service Areas" },
  { id: "contact", label: "Contact" },
  { id: "footer", label: "Other Sites" },
];

// the two alert panels you built
const alertLinks = [
  { id: "warning2", label: "Garage Door Service" },
  { id: "warning", label: "Garage Door Spring Repair" },
];

// calendar helpers
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdayShort = ["S", "M", "T", "W", "T", "F", "S"];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(month: number, year: number) {
  return new Date(year, month, 1).getDay(); // 0 = Sunday
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const alertsRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const today = new Date();
  const [calMonth, setCalMonth] = useState(today.getMonth());
  const [calYear, setCalYear] = useState(today.getFullYear());

  // close alerts/calendar dropdowns if you click outside
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as Node;
      const clickedInsideAlerts =
        alertsRef.current && alertsRef.current.contains(target);
      const clickedInsideCalendar =
        calendarRef.current && calendarRef.current.contains(target);

      if (!clickedInsideAlerts && !clickedInsideCalendar) {
        setAlertsOpen(false);
        setCalendarOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // auto-close mobile menu on desktop resize
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // scroll helper that accounts for fixed header height
  function scrollToSection(sectionId: string) {
    const headerEl = document.querySelector("header");
    const targetEl = document.getElementById(sectionId);
    if (headerEl && targetEl) {
      const headerHeight = headerEl.getBoundingClientRect().height;
      const targetTop =
        targetEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetTop - headerHeight, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
    setAlertsOpen(false);
    setCalendarOpen(false);
  }

  // build calendar grid
  const daysInMonth = getDaysInMonth(calMonth, calYear);
  const firstDay = getFirstDayOfMonth(calMonth, calYear);

  const calendarSlots: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) {
    calendarSlots.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarSlots.push(d);
  }

  const isToday = (day: number | null) =>
    day !== null &&
    day === today.getDate() &&
    calMonth === today.getMonth() &&
    calYear === today.getFullYear();

  function goPrevMonth() {
    setCalMonth((prev) => {
      if (prev === 0) {
        setCalYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  }

  function goNextMonth() {
    setCalMonth((prev) => {
      if (prev === 11) {
        setCalYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 shadow-xl">
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              <DoorOpen className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white drop-shadow">
                Pro Garage Doors
              </h1>
              <p className="text-xs text-white/80 uppercase tracking-widest">
                <strong>{yearsInBusiness}</strong>+ Years of Excellence
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-green-500 transition-colors"
              >
                {item.label}
              </Button>
            ))}

            {/* Alerts dropdown */}
            <div ref={alertsRef} className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setAlertsOpen((o) => !o);
                  setCalendarOpen(false);
                }}
                className="inline-flex items-center text-white hover:text-green-500 transition-colors"
              >
                Alerts <ChevronDown className="ml-1 w-4 h-4" />
              </Button>
              {alertsOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                  {alertLinks.map((link) => (
                    <Button
                      key={link.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection(link.id)}
                      className="justify-start w-full text-gray-800 hover:bg-gray-100"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Calendar dropdown - NEW */}
            <div ref={calendarRef} className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setCalendarOpen((o) => !o);
                  setAlertsOpen(false);
                }}
                className="inline-flex items-center text-white hover:text-green-500 transition-colors"
              >
                <CalendarIcon className="w-4 h-4 mr-1" />
                Calendar
                <ChevronDown className="ml-1 w-4 h-4" />
              </Button>

              {calendarOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-2xl p-4 z-50">
                  {/* Header with month/year + controls */}
                  <div className="flex items-center justify-between mb-3">
                    <button
                      onClick={goPrevMonth}
                      className="p-1 rounded-full hover:bg-gray-100"
                      aria-label="Previous month"
                    >
                      <ChevronLeft className="w-4 h-4 text-gray-600" />
                    </button>
                    <div className="text-center">
                      <p className="text-sm font-semibold text-gray-900">
                        {monthNames[calMonth]} {calYear}
                      </p>
                      <p className="text-xs text-gray-500">
                        Today:{" "}
                        {monthNames[today.getMonth()].slice(0, 3)}{" "}
                        {today.getDate()}, {today.getFullYear()}
                      </p>
                    </div>
                    <button
                      onClick={goNextMonth}
                      className="p-1 rounded-full hover:bg-gray-100"
                      aria-label="Next month"
                    >
                      <ChevronRight className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Weekday headings */}
                  <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-1">
                    {weekdayShort.map((d) => (
                      <div key={d} className="py-1">
                        {d}
                      </div>
                    ))}
                  </div>

                  {/* Days grid */}
                  <div className="grid grid-cols-7 text-center text-sm gap-y-1">
                    {calendarSlots.map((day, idx) => {
                      if (day === null) {
                        return <div key={idx} />;
                      }

                      const todayFlag = isToday(day);
                      return (
                        <div
                          key={idx}
                          className={`mx-auto flex items-center justify-center w-8 h-8 rounded-full ${
                            todayFlag
                              ? "bg-purple-600 text-white font-semibold shadow-md"
                              : "text-gray-700 hover:bg-purple-50 cursor-default"
                          }`}
                        >
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Call button */}
            <Button asChild size="sm">
              <a
                href="tel:323-270-5387"
                className="flex items-center space-x-1
                           bg-gradient-to-r from-yellow-400 to-orange-500
                           px-3 py-1 rounded-full text-white
                           hover:from-yellow-500 hover:to-orange-600
                           transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>323-270-5387</span>
              </a>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {/* spacer */}
      <div className="h-20" />

      {/* Mobile menu */}
      {mobileMenuOpen && (
              <nav className="fixed inset-x-0 top-20 z-40 bg-gradient-to-r from-green-600 to-green-800 border-t border-green-700 md:hidden">
                <div className="container mx-auto flex flex-col p-4 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto">
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="lg"
                      onClick={() => scrollToSection(item.id)}
                      className="justify-start text-white hover:text-green-200 transition-colors"
                    >
                      {item.label}
                    </Button>
                  ))}

                  {/* Mobile Alerts toggle */}
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={() => {
                      setAlertsOpen((o) => !o);
                      setCalendarOpen(false);
                    }}
                    className="justify-start text-white hover:text-green-200 transition-colors"
                  >
                    Alerts {alertsOpen ? "▲" : "▼"}
                  </Button>
                  {alertsOpen && (
                    <div className="pl-6 space-y-1">
                      {alertLinks.map((link) => (
                        <Button
                          key={link.id}
                          variant="ghost"
                          size="lg"
                          onClick={() => scrollToSection(link.id)}
                          className="justify-start text-white hover:text-green-200 transition-colors"
                        >
                          {link.label}
                        </Button>
                      ))}
                    </div>
                  )}

                  {/* 📅 Mobile Calendar - pops UP */}
                  <div className="relative mt-2">
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={() => {
                        setCalendarOpen((o) => !o);
                        setAlertsOpen(false);
                      }}
                      className="justify-start text-white hover:text-green-200 transition-colors"
                    >
                      Calendar {calendarOpen ? "▲" : "▼"}
                    </Button>

                    {calendarOpen && (
                      <div className="absolute bottom-12 left-0 right-0 p-3 rounded-xl bg-white text-gray-900 shadow-lg z-50 max-h-[70vh] overflow-y-auto">
                        {/* Header with month/year + controls */}
                        <div className="flex items-center justify-between mb-3">
                          <button
                            onClick={goPrevMonth}
                            className="p-1 rounded-full hover:bg-gray-100"
                            aria-label="Previous month"
                          >
                            <ChevronLeft className="w-4 h-4 text-gray-600" />
                          </button>
                          <div className="text-center">
                            <p className="text-sm font-semibold text-gray-900">
                              {monthNames[calMonth]} {calYear}
                            </p>
                            <p className="text-xs text-gray-500">
                              Today:{" "}
                              {monthNames[today.getMonth()].slice(0, 3)} {today.getDate()},{" "}
                              {today.getFullYear()}
                            </p>
                          </div>
                          <button
                            onClick={goNextMonth}
                            className="p-1 rounded-full hover:bg-gray-100"
                            aria-label="Next month"
                          >
                            <ChevronRight className="w-4 h-4 text-gray-600" />
                          </button>
                        </div>

                        {/* Weekday headings */}
                        <div className="grid grid-cols-7 text-center text-xs font-semibold text-gray-500 mb-1">
                          {weekdayShort.map((d) => (
                            <div key={d} className="py-1">
                              {d}
                            </div>
                          ))}
                        </div>

                        {/* Days grid */}
                        <div className="grid grid-cols-7 text-center text-sm gap-y-1">
                          {calendarSlots.map((day, idx) => {
                            if (day === null) return <div key={idx} />;
                            const todayFlag = isToday(day);
                            return (
                              <div
                                key={idx}
                                className={`mx-auto flex items-center justify-center w-8 h-8 rounded-full ${
                                  todayFlag
                                    ? "bg-purple-600 text-white font-semibold shadow-md"
                                    : "text-gray-700 hover:bg-purple-50"
                                }`}
                              >
                                {day}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Call button */}
                  <Button asChild size="lg" className="mt-2">
                    <a
                      href="tel:323-270-5387"
                      className="flex items-center justify-center space-x-2
                                bg-gradient-to-r from-yellow-400 to-orange-500
                                px-4 py-2 rounded-full text-white
                                hover:from-yellow-500 hover:to-orange-600
                                transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span>323-270-5387</span>
                    </a>
                  </Button>
                </div>
              </nav>
            )}

    </>
  );
}

// // src/components/Header.tsx
// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, Phone, DoorOpen, ChevronDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const currentYear = new Date().getFullYear();
// const foundingYear = 1979;
// const yearsInBusiness = currentYear - foundingYear + 1;

// // top‑level nav items
// const navItems = [
//   { id: 'hero',    label: 'Home' },
//   { id: 'about',   label: 'About' },
//   { id: 'pricing', label: 'Service Pricing' },
//   { id: 'whychooseus', label: 'Why Us?' },
//   { id: 'areas',   label: 'Service Areas' },
//   { id: 'contact', label: 'Contact' },
//   { id: 'footer',  label: 'Other Sites' },
// ];

// // the two alert panels you built
// const alertLinks = [
//   { id: 'warning2', label: 'Garage Door Service' },
//   { id: 'warning',  label: 'Garage Door Spring Repair' },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [alertsOpen, setAlertsOpen]       = useState(false);
//   const alertsRef = useRef<HTMLDivElement>(null);

//   // close alerts dropdown if you click outside of it
//   useEffect(() => {
//     function onClick(e: MouseEvent) {
//       if (alertsRef.current && !alertsRef.current.contains(e.target as Node)) {
//         setAlertsOpen(false);
//       }
//     }
//     document.addEventListener('mousedown', onClick);
//     return () => document.removeEventListener('mousedown', onClick);
//   }, []);

//   // auto‑close mobile menu on desktop resize
//   useEffect(() => {
//     function onResize() {
//       if (window.innerWidth >= 768) setMobileMenuOpen(false);
//     }
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   //scroll helper that accounts for fixed header height
//   function scrollToSection(sectionId: string) {
//     const headerEl = document.querySelector('header');
//     const targetEl = document.getElementById(sectionId);
//     if (headerEl && targetEl) {
//       const headerHeight = headerEl.getBoundingClientRect().height;
//       const targetTop    = targetEl.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({ top: targetTop - headerHeight, behavior: 'smooth' });
//     }
//     setMobileMenuOpen(false);
//     setAlertsOpen(false);
//   }
//   // function scrollToSection(sectionId: string) {
//   //   // 1) Close menus immediately
//   //   setMobileMenuOpen(false);
//   //   setAlertsOpen(false);

//   //   // 2) Wait a tick (so the overlay actually unmounts) then scroll
//   //   setTimeout(() => {
//   //     const headerEl = document.querySelector('header');
//   //     const targetEl = document.getElementById(sectionId);
//   //     if (headerEl && targetEl) {
//   //       const headerHeight = headerEl.getBoundingClientRect().height;
//   //       const targetTop    = targetEl.getBoundingClientRect().top + window.pageYOffset;
//   //       window.scrollTo({ top: targetTop - headerHeight, behavior: 'smooth' });
//   //     }
//   //   }, 100);
//   // }




//   return (
//     <>
//       <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 shadow-xl">
//         <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center space-x-4">
//             <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
//               <DoorOpen className="text-white" size={28} />
//             </div>
//             <div>
//               <h1 className="text-2xl font-extrabold text-white drop-shadow">
//                 Pro Garage Doors
//               </h1>
//               <p className="text-xs text-white/80 uppercase tracking-widest">
//                 <strong>{yearsInBusiness}</strong>+ Years of Excellence
//               </p>
//             </div>
//           </div>

//           {/* Desktop nav */}
//           <nav className="hidden md:flex items-center space-x-4">
//             {navItems.map(item => (
//               <Button
//                 key={item.id}
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => scrollToSection(item.id)}
//                 className="text-white hover:text-green-500 transition-colors"
//               >
//                 {item.label}
//               </Button>
//             ))}

//             {/* Alerts dropdown */}
//             <div ref={alertsRef} className="relative">
//               <Button
//                 variant="ghost"
//                 size="sm"
//                 onClick={() => setAlertsOpen(o => !o)}
//                 className="inline-flex items-center text-white hover:text-green-500 transition-colors"
//               >
//                 Alerts <ChevronDown className="ml-1 w-4 h-4" />
//               </Button>
//               {alertsOpen && (
//                 <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
//                   {alertLinks.map(link => (
//                     <Button
//                       key={link.id}
//                       variant="ghost"
//                       size="sm"
//                       onClick={() => scrollToSection(link.id)}
//                       className="justify-start w-full text-gray-800 hover:bg-gray-100"
//                     >
//                       {link.label}
//                     </Button>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Call button */}
//             <Button asChild size="sm">
//               <a
//                 href="tel:323-270-5387"
//                 className="flex items-center space-x-1
//                            bg-gradient-to-r from-yellow-400 to-orange-500
//                            px-3 py-1 rounded-full text-white
//                            hover:from-yellow-500 hover:to-orange-600
//                            transition-colors"
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>323-270-5387</span>
//               </a>
//             </Button>
//           </nav>

//           {/* Mobile toggle */}
//           <Button
//             variant="ghost"
//             size="sm"
//             className="md:hidden text-white p-2"
//             onClick={() => setMobileMenuOpen(o => !o)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </Button>
//         </div>
//       </header>

//       {/* spacer */}
//       <div className="h-20" />

//       {/* Mobile menu */}
//       {mobileMenuOpen && (
//         <nav className="fixed inset-x-0 top-20 z-40 bg-gradient-to-r from-green-600 to-green-800 border-t border-green-700 md:hidden">
//           <div className="container mx-auto flex flex-col p-4 space-y-2">
//             {navItems.map(item => (
//               <Button
//                 key={item.id}
//                 variant="ghost"
//                 size="lg"
//                 onClick={() => scrollToSection(item.id)}
//                 className="justify-start text-white hover:text-green-200 transition-colors"
//               >
//                 {item.label}
//               </Button>
//             ))}

//             {/* Mobile Alerts toggle */}
//             <Button
//               variant="ghost"
//               size="lg"
//               onClick={() => setAlertsOpen(o => !o)}
//               className="justify-start text-white hover:text-green-200 transition-colors"
//             >
//               Alerts {alertsOpen ? '▲' : '▼'}
//             </Button>
//             {alertsOpen && (
//               <div className="pl-6 space-y-1">
//                 {alertLinks.map(link => (
//                   <Button
//                     key={link.id}
//                     variant="ghost"
//                     size="lg"
//                     onClick={() => scrollToSection(link.id)}
//                     className="justify-start text-white hover:text-green-200 transition-colors"
//                   >
//                     {link.label}
//                   </Button>
//                 ))}
//               </div>
//             )}

//             <Button asChild size="lg" className="mt-2">
//               <a
//                 href="tel:323-270-5387"
//                 className="flex items-center justify-center space-x-2
//                            bg-gradient-to-r from-yellow-400 to-orange-500
//                            px-4 py-2 rounded-full text-white
//                            hover:from-yellow-500 hover:to-orange-600
//                            transition-colors"
//               >
//                 <Phone className="h-5 w-5" />
//                 <span>323-270-5387</span>
//               </a>
//             </Button>
//           </div>
//         </nav>
//       )}
//     </>
//   );
// }
