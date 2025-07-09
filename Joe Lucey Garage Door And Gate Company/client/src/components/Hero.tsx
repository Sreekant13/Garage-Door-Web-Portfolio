import React from "react";
import { motion } from "framer-motion";
import background from "../assets/images/backgroundgarage.jpg";

import HolidayPopup from "@/components/HolidayPopup";


// 🏆 Holiday Images
import newYearImg from "@/assets/images/New Year' Day.png";
import martinLutherKingImg from "@/assets/images/Martin Luther King Jr Day.png";
import civilRightsImg from "@/assets/images/Civil Rights Day.png";
import firstBlackHistoryImg from "@/assets/images/First Day of Black History Month.png";
import superBowlImg from "@/assets/images/Super Bowl.png";
import lincolnBdayImg from "@/assets/images/Lincoln's Birthday.png";
import valentinesImg from "@/assets/images/Valentine's Day.png";
import presidentsImg from "@/assets/images/President's Day.png";
import ashWednesdayImg from "@/assets/images/Ash Wednesday.png";
import africanScienceImg from "@/assets/images/African American Science and Inventor's Day.png";
import holiImg from "@/assets/images/Holi.png";
import employeeAppreciationImg from "@/assets/images/Employee Appreciation Day.png";
import daylightSavingsImg from "@/assets/images/Daylight Savings Start.png";
import stPatricksImg from "@/assets/images/St. Patrick's Day.png";
import palmsSundayImg from "@/assets/images/Palm's Sunday.png";
import vietnamVeteransImg from "@/assets/images/Vietnam Veteran's Day.png";
import cesarChavezImg from "@/assets/images/Cesar Chavez Day.png";
import goodFridayImg from "@/assets/images/Good Friday.png";
import easterImg from "@/assets/images/Easter.png";
import taxDayImg from "@/assets/images/Tax Day.png";
import bostonMarathonImg from "@/assets/images/Boston Marathon.png";
import takeChildWorkImg from "@/assets/images/Take your son and daughter to Work Day.png";
import militaryAppreciationImg from "@/assets/images/Military Appreciation Month.png";
import kentuckyDerbyImg from "@/assets/images/Kentucky Derby.png";
import cincoMayoImg from "@/assets/images/Cinco de Mayo.png";
import mothersDayImg from "@/assets/images/Mother's Day.png";
import memorialDayImg from "@/assets/images/Memorial Day.png";
import juneteenthImg from "@/assets/images/Juneteenth.png";
import fathersDayImg from "@/assets/images/Father's Day.png";
import independenceDayImg from "@/assets/images/Independence Day.png";
import koreanWarVeteranImg from "@/assets/images/Korean War Veteran Recognition Day.png";
import assumptionMaryImg from "@/assets/images/Assumption of Mary.png";
import womensEqualityImg from "@/assets/images/Women's Equality Day.png";
import laborDayImg from "@/assets/images/Labor Day.png";
import grandparentsDayImg from "@/assets/images/National Grandparent's Day.png";
import columbusDayImg from "@/assets/images/Columbus Day.png";
import halloweenImg from "@/assets/images/halloween.png";
import thanksgivingImg from "@/assets/images/Thanksgiving.png";
import christmasImg from "@/assets/images/Christmas.png";

// 🎉 Holiday Function
function getHolidayImage() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const ranges = [
    { start: "12-28", end: "01-06", img: newYearImg },
    { start: "01-07", end: "01-18", img: martinLutherKingImg },
    { start: "01-19", end: "01-29", img: civilRightsImg },
    { start: "02-01", end: "02-05", img: firstBlackHistoryImg },
    { start: "02-06", end: "02-11", img: superBowlImg },
    { start: "02-12", end: "02-12", img: lincolnBdayImg },
    { start: "02-13", end: "02-15", img: valentinesImg },
    { start: "02-16", end: "02-17", img: presidentsImg },
    { start: "02-18", end: "02-18", img: ashWednesdayImg },
    { start: "02-19", end: "02-28", img: africanScienceImg },
    { start: "03-01", end: "03-04", img: holiImg },
    { start: "03-05", end: "03-06", img: employeeAppreciationImg },
    { start: "03-08", end: "03-09", img: daylightSavingsImg },
    { start: "03-10", end: "03-17", img: stPatricksImg },
    { start: "03-18", end: "03-29", img: palmsSundayImg },
    { start: "03-30", end: "03-30", img: vietnamVeteransImg },
    { start: "03-31", end: "04-02", img: cesarChavezImg },
    { start: "04-03", end: "04-03", img: goodFridayImg },
    { start: "04-04", end: "04-13", img: easterImg },
    { start: "04-14", end: "04-15", img: taxDayImg },
    { start: "04-16", end: "04-21", img: bostonMarathonImg },
    { start: "04-22", end: "04-23", img: takeChildWorkImg },
    { start: "04-24", end: "05-01", img: militaryAppreciationImg },
    { start: "05-02", end: "05-02", img: kentuckyDerbyImg },
    { start: "05-03", end: "05-05", img: cincoMayoImg },
    { start: "05-06", end: "05-10", img: mothersDayImg },
    { start: "05-11", end: "05-25", img: memorialDayImg },
    { start: "05-26", end: "06-20", img: juneteenthImg },
    { start: "06-21", end: "06-21", img: fathersDayImg },
    { start: "06-22", end: "07-26", img: independenceDayImg },
    { start: "07-27", end: "08-10", img: koreanWarVeteranImg },
    { start: "08-11", end: "08-25", img: assumptionMaryImg },
    { start: "08-26", end: "09-04", img: womensEqualityImg },
    { start: "09-05", end: "09-12", img: laborDayImg },
    { start: "09-13", end: "10-06", img: grandparentsDayImg },
    { start: "10-07", end: "10-17", img: columbusDayImg },
    { start: "10-18", end: "11-02", img: halloweenImg },
    { start: "11-03", end: "11-30", img: thanksgivingImg },
    { start: "12-01", end: "12-27", img: christmasImg },
  ];

  const todayNum = Number(`${month.toString().padStart(2, "0")}${day.toString().padStart(2, "0")}`);
  for (const r of ranges) {
    const s = Number(r.start.replace("-", ""));
    const e = Number(r.end.replace("-", ""));
    if (s > e ? todayNum >= s || todayNum <= e : todayNum >= s && todayNum <= e) return r.img;
  }
  return halloweenImg;
}

type HolidayInfo = {
  key: string;
  name: string;
  message: string;
  img: string;
  start: string; // "MM-DD"
  end: string;   // "MM-DD"
};

function getHoliday(): HolidayInfo {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const todayNum = Number(
    `${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}`
  );

  const ranges: HolidayInfo[] = [
    { key: "newyear", name: "New Year’s Day 🎆", message: "New year, new goals—let’s start strong.", start: "12-28", end: "01-06", img: newYearImg },
    { key: "mlk", name: "Martin Luther King Jr. Day ✊", message: "A day to reflect, serve, and uplift one another.", start: "01-07", end: "01-18", img: martinLutherKingImg },
    { key: "civilrights", name: "Civil Rights Day 🕊️", message: "Honor equality, justice, and progress for all.", start: "01-19", end: "01-29", img: civilRightsImg },
    { key: "bhm", name: "Black History Month 🖤", message: "Celebrate history, culture, and lasting contributions.", start: "02-01", end: "02-05", img: firstBlackHistoryImg },
    { key: "superbowl", name: "Super Bowl 🏈", message: "Game on—enjoy the big day with big energy!", start: "02-06", end: "02-11", img: superBowlImg },
    { key: "lincoln", name: "Lincoln’s Birthday 🇺🇸", message: "A moment to remember leadership and unity.", start: "02-12", end: "02-12", img: lincolnBdayImg },
    { key: "valentines", name: "Valentine’s Day ❤️", message: "Spread love, warmth, and good vibes.", start: "02-13", end: "02-15", img: valentinesImg },
    { key: "presidents", name: "President’s Day 🇺🇸", message: "A day to reflect on leadership and service.", start: "02-16", end: "02-17", img: presidentsImg },
    { key: "ashwednesday", name: "Ash Wednesday ✝️", message: "A peaceful day of reflection and renewal.", start: "02-18", end: "02-18", img: ashWednesdayImg },
    { key: "afamsci", name: "African American Science & Inventors Day 🔬", message: "Celebrate innovation, brilliance, and impact.", start: "02-19", end: "02-28", img: africanScienceImg },

    { key: "holi", name: "Holi 🌈", message: "Colors, joy, and good vibes—Happy Holi!", start: "03-01", end: "03-04", img: holiImg },
    { key: "employeeapp", name: "Employee Appreciation Day 🙌", message: "Thank you for the hard work and dedication.", start: "03-05", end: "03-06", img: employeeAppreciationImg },
    { key: "dst", name: "Daylight Savings ⏰", message: "Time to spring forward—more daylight ahead!", start: "03-08", end: "03-09", img: daylightSavingsImg },
    { key: "stpatricks", name: "St. Patrick’s Day 🍀", message: "A little luck goes a long way—cheers!", start: "03-10", end: "03-17", img: stPatricksImg },
    { key: "palms", name: "Palm Sunday 🌿", message: "A season of hope and reflection.", start: "03-18", end: "03-29", img: palmsSundayImg },
    { key: "vietnamvets", name: "Vietnam Veterans Day 🎖️", message: "Thank you for your service and sacrifice.", start: "03-30", end: "03-30", img: vietnamVeteransImg },
    { key: "cesarchavez", name: "Cesar Chavez Day ✊", message: "Honoring dignity, justice, and community.", start: "03-31", end: "04-02", img: cesarChavezImg },

    { key: "goodfriday", name: "Good Friday ✝️", message: "A quiet day of remembrance and gratitude.", start: "04-03", end: "04-03", img: goodFridayImg },
    { key: "easter", name: "Easter 🐣", message: "Wishing you peace, joy, and new beginnings.", start: "04-04", end: "04-13", img: easterImg },
    { key: "taxday", name: "Tax Day 🧾", message: "Friendly reminder—don’t forget those filings!", start: "04-14", end: "04-15", img: taxDayImg },
    { key: "boston", name: "Boston Marathon 🏃", message: "Run strong—celebrating endurance and spirit.", start: "04-16", end: "04-21", img: bostonMarathonImg },
    { key: "takechild", name: "Take Your Child to Work Day 👨‍👩‍👧‍👦", message: "Inspire curiosity—show them what you do!", start: "04-22", end: "04-23", img: takeChildWorkImg },
    { key: "militarymonth", name: "Military Appreciation Month 🎖️", message: "Honoring those who serve and support.", start: "04-24", end: "05-01", img: militaryAppreciationImg },

    { key: "derby", name: "Kentucky Derby 🐎", message: "Fast horses and classic tradition—enjoy!", start: "05-02", end: "05-02", img: kentuckyDerbyImg },
    { key: "cinco", name: "Cinco de Mayo 🎉", message: "Celebrate culture, food, and festive vibes!", start: "05-03", end: "05-05", img: cincoMayoImg },
    { key: "mothers", name: "Mother’s Day 🌷", message: "To all moms—thank you for everything.", start: "05-06", end: "05-10", img: mothersDayImg },
    { key: "memorial", name: "Memorial Day 🇺🇸", message: "Remembering and honoring those who served.", start: "05-11", end: "05-25", img: memorialDayImg },

    { key: "juneteenth", name: "Juneteenth ✊🏾", message: "Honoring freedom, resilience, and progress.", start: "05-26", end: "06-20", img: juneteenthImg },
    { key: "fathers", name: "Father’s Day 👔", message: "To all dads—thanks for the love and support.", start: "06-21", end: "06-21", img: fathersDayImg },
    { key: "independence", name: "Independence Day 🎆", message: "Celebrate safely—wishing you a bright holiday!", start: "06-22", end: "07-26", img: independenceDayImg },

    { key: "koreanvets", name: "Korean War Veterans Day 🎖️", message: "Thank you for your courage and service.", start: "07-27", end: "08-10", img: koreanWarVeteranImg },
    { key: "assumption", name: "Assumption of Mary ✝️", message: "A meaningful day of faith and reflection.", start: "08-11", end: "08-25", img: assumptionMaryImg },
    { key: "womenseq", name: "Women’s Equality Day ✨", message: "Celebrating equality, progress, and strength.", start: "08-26", end: "09-04", img: womensEqualityImg },

    { key: "labor", name: "Labor Day 🛠️", message: "Thank you to everyone who keeps things moving.", start: "09-05", end: "09-12", img: laborDayImg },
    { key: "grandparents", name: "National Grandparents Day 💛", message: "Celebrating love, wisdom, and family.", start: "09-13", end: "10-06", img: grandparentsDayImg },

    { key: "columbus", name: "Columbus Day 🧭", message: "A day of reflection on history and heritage.", start: "10-07", end: "10-17", img: columbusDayImg },
    { key: "halloween", name: "Halloween 🎃", message: "Beware of the spooky stuff out there.", start: "10-18", end: "11-02", img: halloweenImg },

    { key: "thanksgiving", name: "Thanksgiving 🦃", message: "Grateful hearts and good food—enjoy!", start: "11-03", end: "11-30", img: thanksgivingImg },
    { key: "christmas", name: "Christmas 🎄", message: "Wishing you warmth, joy, and peace.", start: "12-01", end: "12-27", img: christmasImg },
  ];

  for (const r of ranges) {
    const s = Number(r.start.replace("-", ""));
    const e = Number(r.end.replace("-", ""));
    if (s > e) {
      if (todayNum >= s || todayNum <= e) return r;
    } else if (todayNum >= s && todayNum <= e) {
      return r;
    }
  }

  // fallback (safe default)
  return {
    key: "default",
    name: "Seasonal Special ✨",
    message: "Welcome! We’re here to help—fast and reliable service.",
    img: halloweenImg,
    start: "01-01",
    end: "12-31",
  };
}

const phoneNumbers = [
  { number: "323-270-5387", area: "Los Angeles" },
  { number: "310-915-4151", area: "Westside" },
  { number: "818-351-3131", area: "San Fernando" },
  { number: "562-506-1384", area: "Orange County" },
];

export default function Hero() {
  // const holidayImage = getHolidayImage();
  const holiday = getHoliday();
  const holidayImage = holiday.img;

  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-20">
      <HolidayPopup holiday={holiday} durationMs={8000} />
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={background}
          alt="Garage interior"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Content + Seasonal Image in 60/40 layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-5 items-center">
          {/* LEFT: 60% text/content (3/5 cols) */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-yellow-500">Joe Lucey </span>
              <span className="text-purple-300">
                Garage Door And Gate Company
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WE OUTSELL THEM ALL. 47 YEARS IN BUSINESS
              <br />
              IT&apos;S ALL BECAUSE OF YOU, THANK YOU.
            </motion.p>

            <motion.div
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {phoneNumbers.map((phone, i) => (
                <motion.a
                  key={phone.number}
                  href={`tel:${phone.number}`}
                  className="flex flex-col items-center bg-purple-500 hover:bg-purple-600 text-white px-4 py-6 rounded-xl shadow-lg transform transition hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                >
                  <span className="text-2xl mb-1">📞</span>
                  <span className="font-bold text-lg">{phone.number}</span>
                  <span className="text-sm text-gray-100 mt-1">
                    {phone.area}
                  </span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: 40% seasonal image (2/5 cols) */}
          <div className="lg:col-span-2 flex justify-center">
            <motion.div
              className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 backdrop-blur-md"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img
                src={holidayImage}
                alt="Seasonal garage door promotion"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

// import React from 'react';
// import { motion } from 'framer-motion';
// import background from '../assets/images/backgroundgarage.jpg';
// import DailyCalendar from './DailyCalender';
// import InteractiveCalendar from './InteractiveCalender';

// const phoneNumbers = [
//   { number: '323-270-5387', area: 'Los Angeles' },
//   { number: '310-915-4151', area: 'Westside' },
//   { number: '818-351-3131', area: 'San Fernando' },
//   { number: '562-506-1384', area: 'Orange County' }
// ];

// const brands = [
//   { name: 'GENIE', width: 110 },
//   { name: 'CHAMBERLAIN', width: 110 },
//   { name: 'LIFTMASTER', width: 110 },
//   { name: 'MARANTEC', width: 110 },
//   { name: 'LINEAR', width: 110 },
//   { name: 'CRAFTSMAN', width: 110 },
//   { name: 'STANLEY', width: 110 },
//   { name: 'CRUSADER', width: 110 }
// ];

// export default function Hero() {
//   return (
//     <section id="hero" className="relative overflow-hidden scroll-mt-20">
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <img src={background} alt="Garage interior" className="w-full h-full object-cover opacity-80" />
//         <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
//       </div>

//       {/* Calendars */}
//       <div className="absolute top-2 right-6 z-20">
//         <div className="block sm:hidden">
//           <DailyCalendar />
//         </div>
//         <div className="hidden sm:block">
//           <InteractiveCalendar />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center text-center px-4 py-20 lg:py-32">
//         <motion.h1
//           className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <span className="text-yellow-500">Joe Lucey {' '}</span>
//           <span className="text-purple-300">Garage Door And Gate Company</span>
//         </motion.h1>

//         <motion.p
//           className="mt-4 text-lg sm:text-xl text-gray-200 max-w-2xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           WE OUTSELL THEM ALL. 47 YEARS IN BUSINESS
//           <br />
//           IT'S ALL BECAUSE OF YOU, THANK YOU.
//         </motion.p>

//         <motion.div
//           className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl w-full"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           {phoneNumbers.map((phone, i) => (
//             <motion.a
//               key={phone.number}
//               href={`tel:${phone.number}`}
//               className="flex flex-col items-center bg-purple-500 hover:bg-purple-600 text-white px-4 py-6 rounded-xl shadow-lg transform transition hover:scale-105"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
//             >
//               <span className="text-2xl mb-1">📞</span>
//               <span className="font-bold text-lg">{phone.number}</span>
//               <span className="text-sm text-gray-100 mt-1">{phone.area}</span>
//             </motion.a>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
