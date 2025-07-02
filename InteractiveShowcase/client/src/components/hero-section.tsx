// src/components/HeroSection.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Calculator, Rocket, Award, Star, Shield } from "lucide-react";
import { getTimeUntilMidnight } from "@/lib/utils";
import backgroundImage from "../assets/image/servicebackground.png";
import type { CSSProperties } from "react";
import HolidayPopup from "@/components/HolidayPopup";


// 🏆 Holiday Images
import newYearImg from "@/assets/image/New Year' Day.png";
import martinLutherKingImg from "@/assets/image/Martin Luther King Jr Day.png";
import civilRightsImg from "@/assets/image/Civil Rights Day.png";
import firstBlackHistoryImg from "@/assets/image/First Day of Black History Month.png";
import superBowlImg from "@/assets/image/Super Bowl.png";
import lincolnBdayImg from "@/assets/image/Lincoln's Birthday.png";
import valentinesImg from "@/assets/image/Valentine's Day.png";
import presidentsImg from "@/assets/image/President's Day.png";
import ashWednesdayImg from "@/assets/image/Ash Wednesday.png";
import africanScienceImg from "@/assets/image/African American Science and Inventor's Day.png";
import holiImg from "@/assets/image/Holi.png";
import employeeAppreciationImg from "@/assets/image/Employee Appreciation Day.png";
import daylightSavingsImg from "@/assets/image/Daylight Savings Start.png";
import stPatricksImg from "@/assets/image/St. Patrick's Day.png";
import palmsSundayImg from "@/assets/image/Palm's Sunday.png";
import vietnamVeteransImg from "@/assets/image/Vietnam Veteran's Day.png";
import cesarChavezImg from "@/assets/image/Cesar Chavez Day.png";
import goodFridayImg from "@/assets/image/Good Friday.png";
import easterImg from "@/assets/image/Easter.png";
import taxDayImg from "@/assets/image/Tax Day.png";
import bostonMarathonImg from "@/assets/image/Boston Marathon.png";
import takeChildWorkImg from "@/assets/image/Take your son and daughter to Work Day.png";
import militaryAppreciationImg from "@/assets/image/Military Appreciation Month.png";
import kentuckyDerbyImg from "@/assets/image/Kentucky Derby.png";
import cincoMayoImg from "@/assets/image/Cinco de Mayo.png";
import mothersDayImg from "@/assets/image/Mother's Day.png";
import memorialDayImg from "@/assets/image/Memorial Day.png";
import juneteenthImg from "@/assets/image/Juneteenth.png";
import fathersDayImg from "@/assets/image/Father's Day.png";
import independenceDayImg from "@/assets/image/Independence Day.png";
import koreanWarVeteranImg from "@/assets/image/Korean War Veteran Recognition Day.png";
import assumptionMaryImg from "@/assets/image/Assumption of Mary.png";
import womensEqualityImg from "@/assets/image/Women's Equality Day.png";
import laborDayImg from "@/assets/image/Labor Day.png";
import grandparentsDayImg from "@/assets/image/National Grandparent's Day.png";
import columbusDayImg from "@/assets/image/Columbus Day.png";
import halloweenImg from "@/assets/image/halloween.png";
import thanksgivingImg from "@/assets/image/Thanksgiving.png";
import christmasImg from "@/assets/image/Christmas.png";

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
    { key: "civilrights", name: "Civil Rights Day", message: "Honor equality, justice, and progress for all.", start: "01-19", end: "01-29", img: civilRightsImg },
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

const heroStyle: CSSProperties = {
  backgroundImage: `linear-gradient(135deg, rgba(16,100,60,0.2) 0%, rgba(31,41,55,0.4) 100%), url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

interface DailyDeal {
  dealAmount: number;
}

const phoneNumbers = [
  { number: "323-270-5387", color: "text-orange-500" },
  { number: "310-915-4151", color: "text-teal-500" },
  { number: "818-351-3131", color: "text-amber-500" },
  { number: "562-506-1384", color: "text-green-500" },
];

export default function HeroSection() {
    const holiday = getHoliday();
  const holidayImage = holiday.img;
  const [timeLeft, setTimeLeft] = useState(getTimeUntilMidnight());
  const { data: dailyDeal } = useQuery<DailyDeal, Error>({
    queryKey: ["/api/daily-deal"],
    queryFn: async () => {
      const res = await fetch("/api/daily-deal");
      return (await res.json()) as DailyDeal;
    },
    initialData: { dealAmount: 30 },
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilMidnight());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (t: number) => t.toString().padStart(2, "0");

  return (
    <>
      <section
        id="hero-section"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
        style={heroStyle}
      >
        <HolidayPopup holiday={holiday} durationMs={8000} />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Daily Deal Counter */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center glass-morphism rounded-full px-6 py-3 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-500 rounded-full mr-3"
            />
            <span className="text-white font-medium">
              Daily Deal:{" "}
              <span className="font-bold text-amber-500">
                ${dailyDeal?.dealAmount} OFF
              </span>{" "}
              - Expires in{" "}
              <span className="font-mono text-orange-500">
                {formatTime(timeLeft.hours)}:
                {formatTime(timeLeft.minutes)}:
                {formatTime(timeLeft.seconds)}
              </span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            NEW <span className="gradient-text">2025</span> GARAGE DOOR OPENERS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
          >
            WE OUTSELL THEM ALL!{" "}
            <span className="text-amber-500 font-bold">47 YEARS IN BUSINESS</span>{" "}
            - IT'S ALL BECAUSE OF YOU, THANK YOU.
          </motion.p>

          {/* Phone Numbers Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {phoneNumbers.map((phone, i) => (
              <motion.a
                key={phone.number}
                href={`tel:${phone.number}`}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass-morphism rounded-xl p-4 hover:bg-white/25 transition-all group"
              >
                <Phone
                  className={`w-6 h-6 ${phone.color} mb-2 mx-auto group-hover:animate-wiggle`}
                />
                <p className="text-white font-semibold text-sm">
                  {phone.number}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all"
            >
              <a href="#products" className="flex items-center">
                <Rocket className="w-5 h-5 mr-2" />
                Explore 2025 Models
              </a>
            </Button>
            {/* <Button
              asChild
              variant="outline"
              size="lg"
              className="glass-morphism text-white border-white/30 px-8 py-4 text-lg hover:bg-white/30 transform hover:scale-105 transition-all"
            >
              <a href="#calculator" className="flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Price Calculator
              </a>
            </Button> */}
          </motion.div>

          {/* Achievement Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center items-center space-x-8"
          >
            {[
              { icon: Award, label: "#1 Installer", color: "text-amber-500" },
              { icon: Star, label: "5-Star Rated", color: "text-yellow-500" },
              { icon: Shield, label: "47 Years", color: "text-blue-500" },
            ].map((badge, idx) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + idx * 0.1 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: idx * 0.5,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 mx-auto mb-2 flex items-center justify-center rounded-full glass-morphism"
                >
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                </motion.div>
                <p className="text-white font-semibold">{badge.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-2xl opacity-70"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* ↓ ↓ ↓ THE NEW STATS ROW WITH REAL NUMBERS ↓ ↓ ↓ */}
      <section className="py-20 stats-section bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div className="group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold text-amber-500 mb-2"
              >
                47+
              </motion.div>
              <p className="text-white font-semibold">Years in Business</p>
            </div>
            <div className="group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold text-teal-500 mb-2"
              >
                15000+
              </motion.div>
              <p className="text-white font-semibold">Happy Customers</p>
            </div>
            <div className="group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold text-amber-500 mb-2"
              >
                99%
              </motion.div>
              <p className="text-white font-semibold">Customer Satisfaction</p>
            </div>
            <div className="group">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-4xl md:text-5xl font-bold text-green-500 mb-2"
              >
                24/7
              </motion.div>
              <p className="text-white font-semibold">Emergency Service</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
