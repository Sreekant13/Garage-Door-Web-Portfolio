// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, DoorOpen, CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from "wouter";
import DailyCalendar from './DailyCalender';
import InteractiveCalendar from './InteractiveCalender';

const currentYear = new Date().getFullYear();
// 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
const foundingYear = 1979;
const yearsInBusiness = currentYear - foundingYear + 1;

// Navigation items (section = scroll; route = navigate)
const navItems:
  Array<
    | { type: 'section'; id: string; label: string }
    | { type: 'route'; href: string; label: string }
  > = [
  { type: 'section', id: 'hero',     label: 'Home' },
  { type: 'section', id: 'about',    label: 'About' },
  { type: 'section', id: 'advise',   label: 'Expert Advices' },
  { type: 'section', id: 'pricing',  label: 'Service Pricing' },
  { type: 'section', id: 'whychooseus', label: 'Why Us?' },

  // ✅ Service Areas now goes to a separate page:
  { type: 'route', href: '/service-areas', label: 'Service Areas' },

  { type: 'section', id: 'contact',  label: 'Contact' },
  { type: 'section', id: 'footer',   label: 'Other Sites' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [location, setLocation] = useLocation();

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
    const onHome = window.location.pathname === "/";

    if (!onHome) {
      // go to home with a hash; Home will handle the scroll
      setLocation(`/#${sectionId}`);
      setMobileMenuOpen(false);
      return;
    }

    // you're already on Home → do a smooth, offset scroll
    const headerEl = document.querySelector("header");
    const targetEl = document.getElementById(sectionId);
    if (headerEl && targetEl) {
      const headerHeight = (headerEl as HTMLElement).getBoundingClientRect().height;
      const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: targetTop - headerHeight, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const toggleCalendar = () => {
    setCalendarOpen((prev) => !prev);
  };

  return (
    <>
      {/* fixed header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-green-500 via-green-400 to-green-300 shadow-xl">
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
                {' '}<strong>{yearsInBusiness}</strong>+ Years of Excellence
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item, idx) =>
              item.type === 'route' ? (
                <Button
                  asChild
                  key={`route-${idx}`}
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-green-500 transition-colors"
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ) : (
                <Button
                  key={`section-${item.id}`}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className="text-white hover:text-green-500 transition-colors"
                >
                  {item.label}
                </Button>
              )
            )}

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
        <nav className="fixed inset-x-0 top-20 z-40 bg-gradient-to-r from-green-600 to-green-800 border-t border-green-700 md:hidden">
          <div className="container mx-auto flex flex-col space-y-2 p-4">
            {navItems.map((item, idx) =>
              item.type === 'route' ? (
                <Button
                  asChild
                  key={`m-route-${idx}`}
                  variant="ghost"
                  size="lg"
                  className="justify-start text-white hover:text-green-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ) : (
                <Button
                  key={`m-section-${item.id}`}
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-white hover:text-green-200 transition-colors"
                >
                  {item.label}
                </Button>
              )
            )}

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

// // src/components/Header.tsx
// import React, { useState, useEffect } from 'react';
// import { Menu, X, Phone, DoorOpen } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// // import { Link } from 'wouter'; // ← add this
// import { Link, useLocation } from "wouter"; // add useLocation

// const currentYear = new Date().getFullYear();
// // 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
// const foundingYear = 1979;
// const yearsInBusiness = currentYear - foundingYear + 1;


// // Navigation items (section = scroll; route = navigate)
// const navItems:
//   Array<
//     | { type: 'section'; id: string; label: string }
//     | { type: 'route'; href: string; label: string }
//   > = [
//   { type: 'section', id: 'hero',     label: 'Home' },
//   { type: 'section', id: 'about',    label: 'About' },
//   { type: 'section', id: 'advise',   label: 'Expert Advices' },
//   { type: 'section', id: 'pricing',  label: 'Service Pricing' },
//   { type: 'section', id: 'whychooseus', label: 'Why Us?' },

//   // ✅ Service Areas now goes to a separate page:
//   { type: 'route', href: '/service-areas', label: 'Service Areas' },

//   { type: 'section', id: 'contact',  label: 'Contact' },
//   { type: 'section', id: 'footer',   label: 'Other Sites' },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [location, setLocation] = useLocation(); // ← useLocation
//   // auto-close mobile menu on desktop resize
//   useEffect(() => {
//     const onResize = () => {
//       if (window.innerWidth >= 768) setMobileMenuOpen(false);
//     };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);


//   const scrollToSection = (sectionId: string) => {
//     const onHome = window.location.pathname === "/";

//     if (!onHome) {
//       // go to home with a hash; Home will handle the scroll
//       setLocation(`/#${sectionId}`);
//       setMobileMenuOpen(false);
//       return;
//     }

//     // you're already on Home → do a smooth, offset scroll
//     const headerEl = document.querySelector("header");
//     const targetEl = document.getElementById(sectionId);
//     if (headerEl && targetEl) {
//       const headerHeight = (headerEl as HTMLElement).getBoundingClientRect().height;
//       const targetTop = targetEl.getBoundingClientRect().top + window.pageYOffset;
//       window.scrollTo({ top: targetTop - headerHeight, behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//   };


//   return (
//     <>
//       {/* fixed header */}
//       <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-green-500 via-green-400 to-green-300 shadow-xl">
//         <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
//           {/* Logo */}
//           <div className="flex items-center space-x-4">
//             <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
//               <DoorOpen className="text-white" size={28} />
//             </div>
//             <div>
//               <h1 className="text-2xl font-extrabold text-white drop-shadow">Pro Garage Doors</h1>
//               <p className="text-xs text-white/80 uppercase tracking-widest">{' '}<strong>{(yearsInBusiness)}</strong>+ Years of Excellence</p>
//             </div>
//           </div>

//           {/* Desktop nav */}
//           <nav className="hidden md:flex items-center space-x-4">
//             {navItems.map((item, idx) =>
//               item.type === 'route' ? (
//                 <Button
//                   asChild
//                   key={`route-${idx}`}
//                   variant="ghost"
//                   size="sm"
//                   className="text-white hover:text-green-500 transition-colors"
//                 >
//                   <Link href={item.href}>{item.label}</Link>
//                 </Button>
//               ) : (
//                 <Button
//                   key={`section-${item.id}`}
//                   variant="ghost"
//                   size="sm"
//                   onClick={() => scrollToSection(item.id)}
//                   className="text-white hover:text-green-500 transition-colors"
//                 >
//                   {item.label}
//                 </Button>
//               )
//             )}

//             <Button asChild size="sm">
//               <a
//                 href="tel:323-270-5387"
//                 className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>323-270-5387</span>
//               </a>
//             </Button>
//           </nav>

//           {/* Desktop nav
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
//             <Button asChild size="sm">
//               <a
//                 href="tel:323-270-5387"
//                 className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
//               >
//                 <Phone className="h-4 w-4" />
//                 <span>323-270-5387</span>
//               </a>
//             </Button>
//           </nav> */}

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

//       {/* spacer so content starts below header */}
//       <div className="h-20" />

//       {/* fixed mobile menu overlay */}
//       {mobileMenuOpen && (
//         <nav className="fixed inset-x-0 top-20 z-40 bg-gradient-to-r from-green-600 to-green-800 border-t border-green-700 md:hidden">
//           <div className="container mx-auto flex flex-col space-y-2 p-4">
//             {navItems.map((item, idx) =>
//               item.type === 'route' ? (
//                 <Button
//                   asChild
//                   key={`m-route-${idx}`}
//                   variant="ghost"
//                   size="lg"
//                   className="justify-start text-white hover:text-green-200 transition-colors"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   <Link href={item.href}>{item.label}</Link>
//                 </Button>
//               ) : (
//                 <Button
//                   key={`m-section-${item.id}`}
//                   variant="ghost"
//                   size="lg"
//                   onClick={() => scrollToSection(item.id)}
//                   className="justify-start text-white hover:text-green-200 transition-colors"
//                 >
//                   {item.label}
//                 </Button>
//               )
//             )}
// `
//             <Button asChild size="lg" className="mt-2">
//               <a
//                 href="tel:323-270-5387"
//                 className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
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
