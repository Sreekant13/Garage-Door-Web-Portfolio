import React from 'react';
import { motion } from 'framer-motion';
import background from '../assets/images/servicebackground.png';
import DailyCalendar from './DailyCalender';
import InteractiveCalendar from './InteractiveCalender';

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
    { start: "09-07", end: "09-17", img: columbusDayImg },
    { start: "09-18", end: "11-02", img: halloweenImg },
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

const phoneNumbers = [
  { number: '323-270-5387', area: 'Los Angeles' },
  { number: '310-915-4151', area: 'Westside' },
  { number: '818-351-3131', area: 'San Fernando' },
  { number: '562-506-1384', area: 'Orange County' }
];

const brands = [
  { name: 'GENIE', width: 110 },
  { name: 'CHAMBERLAIN', width: 110 },
  { name: 'LIFTMASTER', width: 110 },
  { name: 'MARANTEC', width: 110 },
  { name: 'LINEAR', width: 110 },
  { name: 'DORENE', width: 110 },
  { name: 'STANLEY', width: 110 },
  { name: 'CRUSADER', width: 110 }
];


export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden scroll-mt-24">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={background} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* MAIN SPLIT LAYOUT */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-24 lg:py-32 max-w-7xl mx-auto">

        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col justify-center text-left">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            <span className="text-green-500">NEW GARAGE DOORS AND GATES</span>
          </motion.h1>

          <motion.p 
            className="mt-4 text-lg sm:text-xl text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}>
            WE OUTSELL THEM ALL. 47 YEARS IN BUSINESS <br /> IT'S ALL BECAUSE OF YOU, THANK YOU.
          </motion.p>

          {/* BRANDS */}
          <div className="mt-8 flex flex-wrap gap-3">
            {brands.map((b) => (
              <div key={b.name} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-white font-bold">{b.name}</span>
              </div>
            ))}
          </div>

          {/* PHONE BUTTON GRID */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {phoneNumbers.map((p) => (
              <a
                key={p.number}
                href={`tel:${p.number}`}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-6 rounded-xl shadow-lg text-center transition">
                <div className="text-2xl">📞</div>
                <div className="font-bold">{p.number}</div>
                <div className="text-sm text-gray-100">{p.area}</div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — HOLIDAY IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src={getHolidayImage()}
            alt="Holiday"
            className="rounded-2xl shadow-xl w-full max-w-[480px]"
          />
        </div>

      </div>
    </section>
  );
}