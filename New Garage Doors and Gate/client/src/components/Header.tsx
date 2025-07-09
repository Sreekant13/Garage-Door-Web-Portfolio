// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, DoorOpen, CalendarDays, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DailyCalendar from './DailyCalender';
import InteractiveCalendar from './InteractiveCalender';

const currentYear = new Date().getFullYear();
// 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
const foundingYear = 1979;
const yearsInBusiness = currentYear - foundingYear + 1;

// Top-level nav items (no pricing/areas here anymore)
const navItems = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'models',   label: 'Vintage Models' },
  { id: 'partners', label: 'Partners' },
  // { id: 'pricing',  label: 'Service Pricing' }, // now under dropdown
  // { id: 'areas',    label: 'Service Areas' },   // now under dropdown
  { id: 'contact',  label: 'Contact' },
  { id: 'footer',   label: 'Other Sites' },
];

// Items inside the Service Details dropdown
const serviceDetailsItems = [
  { id: 'pricing', label: 'Service Pricing' },
  { id: 'areas',   label: 'Service Areas' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [serviceDetailsOpen, setServiceDetailsOpen] = useState(false);
  const [serviceDetailsOpenMobile, setServiceDetailsOpenMobile] = useState(false);

  // Today’s date label for the calendar button, e.g. "Nov 15, 2025"
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // auto-close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const headerEl = document.querySelector('header');
    const targetEl = document.getElementById(sectionId);
    if (headerEl && targetEl) {
      const headerHeight = headerEl.getBoundingClientRect().height;
      const targetTop   = targetEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetTop - headerHeight,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
    setServiceDetailsOpen(false);
    setServiceDetailsOpenMobile(false);
  };

  const toggleCalendar = () => {
    setCalendarOpen(prev => !prev);
  };

  return (
    <>
      {/* fixed header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl">
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              <DoorOpen className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white drop-shadow">
                New Garage Doors
              </h1>
              <p className="text-xs text-white/80 uppercase tracking-widest">
                {' '}<strong>{yearsInBusiness}</strong>+ Years of Excellence
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map(item => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-green-300 transition-colors"
              >
                {item.label}
              </Button>
            ))}

            {/* Service Details dropdown (desktop) */}
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setServiceDetailsOpen(prev => !prev)}
                className="text-white hover:text-green-300 transition-colors flex items-center gap-1"
              >
                <span>Service Details</span>
                <ChevronDown className="w-4 h-4" />
              </Button>

              {serviceDetailsOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md py-1 z-50">
                  {serviceDetailsItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-800 hover:bg-indigo-50"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Calendar tab (desktop) – shows today's date */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleCalendar}
              className="border-white/60 text-white bg-white/10 hover:bg-white/20 flex items-center gap-2"
            >
              <CalendarDays className="w-4 h-4" />
              <span className="text-xs sm:text-sm">{formattedDate}</span>
            </Button>

            {/* Call button */}
            <Button asChild size="sm">
              <a
                href="tel:323-270-5387"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
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
            onClick={() => setMobileMenuOpen(o => !o)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {/* spacer so content starts below header */}
      <div className="h-20" />

      {/* fixed mobile menu overlay */}
      {mobileMenuOpen && (
        <nav className="fixed inset-x-0 top-20 z-40 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 border-t border-purple-700 md:hidden">
          <div className="container mx-auto flex flex-col space-y-2 p-4">
            {navItems.map(item => (
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

            {/* Service Details dropdown (mobile) */}
            <div className="flex flex-col space-y-1">
              <Button
                variant="ghost"
                size="lg"
                onClick={() => setServiceDetailsOpenMobile(prev => !prev)}
                className="justify-start text-white hover:text-purple-200 transition-colors flex items-center gap-2"
              >
                <span>Service Details</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${serviceDetailsOpenMobile ? "rotate-180" : ""}`} />
              </Button>

              {serviceDetailsOpenMobile && (
                <div className="ml-4 flex flex-col space-y-1">
                  {serviceDetailsItems.map(item => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      size="sm"
                      onClick={() => scrollToSection(item.id)}
                      className="justify-start text-white/90 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile calendar button – also shows today's date */}
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                toggleCalendar();
                setMobileMenuOpen(false);
              }}
              className="justify-start border-white/70 text-white bg-white/10 hover:bg-white/20 flex items-center gap-2"
            >
              <CalendarDays className="w-5 h-5" />
              <span className="text-sm">{formattedDate}</span>
            </Button>

            <Button asChild size="lg" className="mt-2">
              <a
                href="tel:323-270-5387"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>323-270-5387</span>
              </a>
            </Button>
          </div>
        </nav>
      )}

      {/* Calendar dropdown panel (desktop + mobile) */}
      {calendarOpen && (
        <div className="fixed top-24 right-4 z-50">
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
