// src/components/Header.tsx
import React from 'react';
import { Wrench, Phone, Menu, CalendarDays, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';

const links = [
  { id: 'hero', label: 'Home' },
  { id: 'products', label: 'Products' },
  { id: 'vmodels', label: 'Vintage Models' },
  { id: 'services', label: 'Services' },
  { id: 'battery-faq', label: 'Battery FAQ' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Simple classic calendar used in the header.
 * - Month navigation (prev / next)
 * - Highlights today's date
 */
const MiniCalendar: React.FC = () => {
  const [viewDate, setViewDate] = React.useState(new Date());

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth(); // 0–11

  const startOfMonth = new Date(year, month, 1);
  const endOfMonth = new Date(year, month + 1, 0);

  // Monday-first calendar:
  // getDay(): 0=Sun → we remap so 0=Mon, 6=Sun
  const rawStartDay = startOfMonth.getDay();
  const startOffset = (rawStartDay + 6) % 7; // days to go back to reach Monday

  const daysInMonth = endOfMonth.getDate();
  const totalCells = 42; // 6 weeks

  const todayStr = new Date().toDateString();

  const cells: Date[] = [];
  for (let i = 0; i < totalCells; i++) {
    const date = new Date(year, month, 1 - startOffset + i);
    cells.push(date);
  }

  const goPrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1));
  };

  const goNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1));
  };

  const monthLabel = viewDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="w-full max-w-sm">
      {/* Header row */}
      <div className="flex items-center justify-between mb-2 px-2">
        <button
          type="button"
          onClick={goPrevMonth}
          className="px-2 py-1 text-xs rounded hover:bg-gray-100"
        >
          ‹
        </button>
        <div className="text-sm font-semibold text-gray-800">{monthLabel}</div>
        <button
          type="button"
          onClick={goNextMonth}
          className="px-2 py-1 text-xs rounded hover:bg-gray-100"
        >
          ›
        </button>
      </div>

      {/* Weekday labels */}
      <div className="grid grid-cols-7 text-[11px] font-medium text-gray-500 mb-1 px-2">
        {weekdayLabels.map((label) => (
          <div key={label} className="text-center">
            {label}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-1 px-2 pb-2">
        {cells.map((date, idx) => {
          const isCurrentMonth = date.getMonth() === month;
          const isToday = date.toDateString() === todayStr;

          return (
            <div
              key={idx}
              className={`flex items-center justify-center h-8 text-xs rounded-full
                ${isCurrentMonth ? 'text-gray-800' : 'text-gray-300'}
                ${isToday ? 'bg-indigo-600 text-white font-semibold' : 'hover:bg-gray-100'}
              `}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Header() {
  const [calendarOpen, setCalendarOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const menuVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  // Today’s date label, e.g. "Nov 16, 2025"
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const toggleCalendar = () => setCalendarOpen((prev) => !prev);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Wrench className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-2xl font-extrabold tracking-wide"
              >
                GeniePro
              </motion.h1>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex space-x-6">
              {links.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative text-white font-medium hover:text-yellow-300 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  {link.label}
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 bottom-0 h-0.5 bg-yellow-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* CTA + Calendar + Mobile menu */}
            <div className="flex items-center space-x-3">
              {/* Calendar button (desktop + sm-up) */}
              <motion.button
                type="button"
                onClick={toggleCalendar}
                className="hidden sm:inline-flex items-center gap-2 border border-white/40 bg-white/10 text-white text-xs sm:text-sm px-3 py-1.5 rounded-md hover:bg-white/20 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <CalendarDays className="w-4 h-4" />
                <span>{formattedDate}</span>
              </motion.button>

              {/* Call button */}
              <motion.a
                href="tel:3232705387"
                className="inline-flex items-center bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md shadow-lg hover:bg-yellow-500 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </motion.a>

              {/* Mobile sheet trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden text-white">
                    <Menu className="w-6 h-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-indigo-600 text-white p-6">
                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    variants={menuVariants}
                    className="flex flex-col space-y-4 mt-8"
                  >
                    {links.map((link) => (
                      <motion.button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        variants={itemVariants}
                        className="text-lg font-medium hover:text-yellow-300 transition"
                      >
                        {link.label}
                      </motion.button>
                    ))}

                    {/* Mobile calendar button */}
                    <motion.button
                      type="button"
                      onClick={toggleCalendar}
                      variants={itemVariants}
                      className="mt-4 inline-flex items-center gap-2 text-lg font-medium border border-white/40 bg-white/10 px-3 py-2 rounded-md hover:bg-white/20 transition"
                    >
                      <CalendarDays className="w-5 h-5" />
                      <span>{formattedDate}</span>
                    </motion.button>
                  </motion.nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Calendar dropdown panel (desktop + mobile) */}
      {calendarOpen && (
        <div className="fixed top-20 right-4 z-[60]">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden w-[320px] sm:w-[360px]">
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                <CalendarDays className="w-4 h-4" />
                <span>Schedule &amp; Availability</span>
              </div>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800 text-sm"
                onClick={() => setCalendarOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2 sm:p-3">
              <MiniCalendar />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// import React from 'react';
// import { Wrench, Phone, Menu } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button';
// import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
// import { Label } from 'recharts';

// const links = [
//   { id: 'hero', label: 'Home'},
//   { id: 'products', label: 'Products' },
//   { id: 'vmodels', label: 'Vintage Models' },
//   { id: 'services', label: 'Services' },
//   { id: 'battery-faq', label: 'Battery FAQ' },
//   { id: 'contact', label: 'Contact' },
// ];

// export default function Header() {
//   const scrollToSection = (sectionId: string) => {
//     const el = document.getElementById(sectionId);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   const menuVariants = {
//     hidden: { x: 50, opacity: 0 },
//     visible: { x: 0, opacity: 1, transition: { staggerChildren: 0.1 } },
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg backdrop-blur-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <motion.div
//               animate={{ rotate: [0, 15, -15, 0] }}
//               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//             >
//               <Wrench className="w-8 h-8 text-white" />
//             </motion.div>
//             <motion.h1
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6 }}
//               className="text-white text-2xl font-extrabold tracking-wide"
//             >
//               GeniePro
//             </motion.h1>
//           </div>

//           {/* Desktop nav */}
//           <nav className="hidden md:flex space-x-6">
//             {links.map(link => (
//               <motion.button
//                 key={link.id}
//                 onClick={() => scrollToSection(link.id)}
//                 className="relative text-white font-medium hover:text-yellow-300 transition"
//                 whileHover={{ scale: 1.1 }}
//               >
//                 {link.label}
//                 <motion.span
//                   layoutId="underline"
//                   className="absolute left-0 bottom-0 h-0.5 bg-yellow-300"
//                   initial={{ width: 0 }}
//                   whileHover={{ width: '100%' }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.button>
//             ))}
//           </nav>

//           {/* CTA + Mobile menu */}
//           <div className="flex items-center space-x-4">
//             <motion.a
//               href="tel:3232705387"
//               className="inline-flex items-center bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded-md shadow-lg hover:bg-yellow-500 transition"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Phone className="w-5 h-5 mr-2" /> Call Now
//             </motion.a>

//             {/* Mobile sheet trigger */}
//             <Sheet>
//               <SheetTrigger asChild>
//                 <Button variant="ghost" size="icon" className="md:hidden text-white">
//                   <Menu className="w-6 h-6" />
//                 </Button>
//               </SheetTrigger>
//               <SheetContent side="right" className="bg-indigo-600 text-white p-6">
//                 <motion.nav
//                   initial="hidden"
//                   animate="visible"
//                   variants={menuVariants}
//                   className="flex flex-col space-y-4 mt-8"
//                 >
//                   {links.map(link => (
//                     <motion.button
//                       key={link.id}
//                       onClick={() => scrollToSection(link.id)}
//                       variants={itemVariants}
//                       className="text-lg font-medium hover:text-yellow-300 transition"
//                     >
//                       {link.label}
//                     </motion.button>
//                   ))}
//                 </motion.nav>
//               </SheetContent>
//             </Sheet>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
