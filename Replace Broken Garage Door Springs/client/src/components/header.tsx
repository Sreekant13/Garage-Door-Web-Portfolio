// src/components/Header.tsx
import { useState } from "react";
import {
  Home,
  Phone,
  Menu,
  X,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calendar state
  const today = new Date();
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calMonth, setCalMonth] = useState(today.getMonth()); // 0–11
  const [calYear, setCalYear] = useState(today.getFullYear());

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Technical Specs", id: "tspecs" },
    { label: "Brands", id: "brands" },
    { label: "Contact", id: "contact" },
  ];

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const monthLabel = new Date(calYear, calMonth, 1).toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" }
  );

  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDay = new Date(calYear, calMonth, 1).getDay(); // 0 (Sun)–6 (Sat)

  const goPrevMonth = () => {
    setCalMonth((prev) => {
      if (prev === 0) {
        setCalYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const goNextMonth = () => {
    setCalMonth((prev) => {
      if (prev === 11) {
        setCalYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const renderCalendarGrid = () => {
    const cells: (number | null)[] = [];
    // leading blanks
    for (let i = 0; i < firstDay; i++) cells.push(null);
    // days
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);

    return cells.map((value, idx) => {
      if (value === null) {
        return <div key={`empty-${idx}`} />;
      }

      const isToday =
        calYear === today.getFullYear() &&
        calMonth === today.getMonth() &&
        value === today.getDate();

      return (
        <button
          key={value}
          className={`flex items-center justify-center py-1.5 text-sm rounded-md transition
            ${
              isToday
                ? "bg-purple-600 text-white font-semibold shadow"
                : "text-gray-700 hover:bg-purple-50"
            }`}
        >
          {value}
        </button>
      );
    });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-white" />
            <h1 className="text-xl font-bold">Valley Garage Door</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-purple-200 transition-colors"
              >
                {item.label}
              </Button>
            ))}

            {/* Calendar button (desktop) */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCalendarOpen((prev) => !prev)}
              className="border-white/70 text-white bg-white/10 hover:bg-white/20 flex items-center gap-2"
            >
              <CalendarDays className="h-4 w-4" />
              <span className="text-xs sm:text-sm">{formattedDate}</span>
            </Button>

            {/* Phone CTA */}
            <Button asChild size="sm">
              <a
                href="tel:818-351-3131"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>818-351-3131</span>
              </a>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-purple-200"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-gradient-to-r from-purple-600 to-purple-800 border-t border-purple-700">
            <div className="container mx-auto flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-white hover:text-purple-200 transition-colors"
                >
                  {item.label}
                </Button>
              ))}

              {/* Calendar button (mobile) */}
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCalendarOpen((prev) => !prev)}
                className="justify-start border-white/70 text-white bg-white/10 hover:bg-white/20 flex items-center gap-2"
              >
                <CalendarDays className="h-5 w-5" />
                <span className="text-sm">{formattedDate}</span>
              </Button>

              <Button asChild size="lg" className="mt-2">
                <a
                  href="tel:818-351-3131"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>818-351-3131</span>
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* Calendar dropdown (shared for desktop + mobile) */}
      {calendarOpen && (
        <div className="fixed top-20 right-4 z-50">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-80">
            {/* header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
              <button
                className="p-1 rounded hover:bg-gray-100"
                onClick={goPrevMonth}
              >
                <ChevronLeft className="w-4 h-4 text-gray-700" />
              </button>

              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-gray-800">
                  {monthLabel}
                </span>
              </div>

              <button
                className="p-1 rounded hover:bg-gray-100"
                onClick={goNextMonth}
              >
                <ChevronRight className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* weekdays */}
            <div className="grid grid-cols-7 gap-1 px-3 pt-2 text-xs font-semibold text-center text-gray-500">
              <span>Sun</span>
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
            </div>

            {/* days grid */}
            <div className="grid grid-cols-7 gap-1 px-3 py-3">
              {renderCalendarGrid()}
            </div>

            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 text-xs text-gray-600 flex items-center justify-between">
              <span>Schedule &amp; availability at a glance</span>
              <button
                className="text-purple-600 font-medium hover:underline text-xs"
                onClick={() => setCalendarOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* spacer so page content sits below the fixed header */}
      <div className="h-16" />
    </>
  );
}
