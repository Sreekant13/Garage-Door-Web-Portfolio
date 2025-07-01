// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { Menu, X, Phone, CalendarDays } from "lucide-react";
import DailyCalendar from "./DailyCalender";
import InteractiveCalendar from "./InteractiveCalender";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "products", label: "Products" },
  { id: "vintage-models", label: "Vintage Models" },
  { id: "services", label: "Services" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

  // Today’s date label, e.g. "Nov 15, 2025"
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Close mobile menu when going to desktop size
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false); // lg breakpoint
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollToSection = (id: string) => {
    const headerEl = document.querySelector("header");
    const targetEl = document.getElementById(id);

    if (headerEl && targetEl) {
      const headerHeight = headerEl.getBoundingClientRect().height;
      const targetTop =
        targetEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetTop - headerHeight,
        behavior: "smooth",
      });
    }

    // Close menus when navigating
    setMenuOpen(false);
    setCalendarOpen(false);
  };

  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Top fixed header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-garage-navy text-white shadow-lg">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          {/* Logo + tagline */}
          <div className="flex items-center space-x-2">
            <h1 className="text-xl sm:text-2xl font-bold garage-orange">
              NewGarageOpener.com
            </h1>
            <span className="hidden md:inline-block text-xs sm:text-sm bg-garage-orange px-2 py-0.5 rounded-full">
              47 Years in Business
            </span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm sm:text-base">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-orange-400 transition"
              >
                {item.label}
              </button>
            ))}

            {/* Calendar button – shows today’s date */}
            <button
              onClick={toggleCalendar}
              className="flex items-center gap-2 border border-white/60 bg-white/10 hover:bg-white/20 text-xs sm:text-sm px-3 py-1 rounded-lg transition"
            >
              <CalendarDays className="w-4 h-4" />
              <span>{formattedDate}</span>
            </button>

            {/* Call button */}
            <a
              href="tel:323-270-5387"
              className="bg-garage-orange hover:bg-orange-600 px-3 py-1 rounded-lg text-sm sm:text-base font-semibold transition flex items-center gap-1"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </nav>

          {/* Call button (tablet) */}
          <a
            href="tel:323-270-5387"
            className="hidden sm:inline-flex lg:hidden bg-garage-orange hover:bg-orange-600 px-3 py-1 rounded-lg text-sm font-semibold transition items-center gap-1"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* Mobile menu button */}
          <button
            className="lg:hidden ml-2 p-1"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </header>

      {/* Spacer so content starts below header */}
      {/* <div className="h-14 sm:h-16 lg:h-20" /> */}

      {/* Mobile slide-in menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative bg-garage-navy w-3/4 max-w-xs p-6 text-white">
            <button
              className="absolute top-4 right-4 p-1"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="mt-8 space-y-4 text-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="block w-full text-left hover:text-orange-400 transition"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}

              {/* Mobile calendar button */}
              <button
                className="mt-4 flex items-center gap-2 border border-white/70 bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg text-sm transition"
                onClick={() => {
                  toggleCalendar();
                  setMenuOpen(false);
                }}
              >
                <CalendarDays className="w-5 h-5" />
                <span>{formattedDate}</span>
              </button>

              <a
                href="tel:323-270-5387"
                className="block mt-6 bg-garage-orange hover:bg-orange-600 px-4 py-2 rounded text-center transition"
                onClick={() => setMenuOpen(false)}
              >
                📞 Call Now
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Calendar dropdown panel (desktop + mobile) */}
      {calendarOpen && (
        <div className="fixed top-20 right-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <CalendarDays className="w-4 h-4" />
                <span>Schedule &amp; Availability</span>
              </div>
              <button
                className="text-gray-500 hover:text-gray-800 text-sm"
                onClick={() => setCalendarOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2 sm:p-3">
              {/* Mobile: DailyCalendar, Desktop: InteractiveCalendar */}
              <div className="block sm:hidden">
                <DailyCalendar />
              </div>
              <div className="hidden sm:block">
                <InteractiveCalendar />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
