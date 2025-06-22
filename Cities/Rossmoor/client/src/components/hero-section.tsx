// components/hero-section.tsx
import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

// import your four images
import slide1 from "../assets/images/rossmoor.png";
import slide2 from "../assets/images/rossmoor1.png";
import slide3 from "../assets/images/rossmoor2.png";
import slide4 from "../assets/images/rossmoor3.png";

// 🏆 Holiday Images (same as Granada Hills)
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

// 🎉 Holiday selector (same logic as other sites)
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

  const todayNum = Number(
    `${month.toString().padStart(2, "0")}${day.toString().padStart(2, "0")}`
  );

  for (const r of ranges) {
    const s = Number(r.start.replace("-", ""));
    const e = Number(r.end.replace("-", ""));
    if (s > e) {
      // wraps year end
      if (todayNum >= s || todayNum <= e) return r.img;
    } else if (todayNum >= s && todayNum <= e) {
      return r.img;
    }
  }
  return halloweenImg;
}

export default function HeroSection() {
  const holidayImage = getHolidayImage();

  // slideshow state (holiday image first)
  const slides = useMemo(
    () => [holidayImage, slide1, slide2, slide3, slide4],
    [holidayImage]
  );
  // // slideshow state
  // const slides = [slide1, slide2, slide3, slide4];
  const [current, setCurrent] = useState(0);

  // advance slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((idx) => (idx + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.section
      className="relative text-white overflow-hidden py-16 lg:py-24"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 20, ease: "easeInOut", repeat: Infinity }}
      style={{
        backgroundImage:
          "linear-gradient(270deg, #ff6ec4 0%, #7873f5 50%, #4ade80 100%)",
        backgroundSize: "600% 600%",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* — Left text/CTA — */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-4">
              <span className="bg-white text-emergency px-3 py-1 rounded-full text-sm font-bold">
                24/7 EMERGENCY
              </span>
              <span className="ml-3 text-phone-highlight">
                47+ Years Experience
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Garage Door Repair{" "}
              <span className="text-phone-highlight">Rossmoor</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Fast, affordable, and reliable garage door repair services. We
              repair all makes and models of garage doors, garage door openers, and garage door springs for over 47 years.
            </p>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-2xl inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center">
                <motion.div
                  className="mr-4"
                  animate={{ rotate: [-15, 15, -15] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Phone size={48} className="text-emergency" />
                </motion.div>
                <div>
                  <p className="text-emergency font-bold text-lg">
                    CALL NOW FOR FREE ESTIMATE
                  </p>
                  <a
                    href="tel:562-506-1384"
                    className="text-4xl font-bold text-professional hover:text-emergency transition-colors"
                  >
                    562-506-1384
                  </a>
                </div>
              </div>
            </motion.div>
            {/* <p className="mt-4 text-phone-highlight font-semibold">
              Joseph Lucey - Licensed & Insured
            </p> */}
          </motion.div>

          {/* — Right slideshow + badge — */}
          <div className="relative w-full h-96 md:h-[500px] rounded-2xl shadow-2xl border border-gray-200 overflow-visible">
            {/* inner wrapper crops the image */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current}
                  src={slides[current]}
                  alt={`Slide ${current + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                />
              </AnimatePresence>
            </div>

            {/* badge (now fully visible) */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-trust text-white p-4 rounded-xl shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 300 }}
            >
              <div className="text-center">
                <p className="font-bold text-2xl">24/7</p>
                <p className="text-sm">Emergency Service</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* dark overlay */}
      <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply pointer-events-none" />
    </motion.section>
  );
}
