// src/components/SloganGraphic.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import BrokenSpring from "@/assets/images/brokenspring.png";
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

const slogan = "Install New Garage Door Springs! Call Now!";

export default function SloganGraphic() {
  const holiday = getHoliday();
  const holidayImage = holiday.img;

  return (
    <section
      id="hero"
      className="relative mt-16 pt-32 pb-20 bg-gradient-to-tr from-blue-500 via-purple-600 to-pink-500"
    >
      <HolidayPopup holiday={holiday} durationMs={8000} />
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Text Block */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase">
            {slogan}
          </h1>
          <p className="text-lg md:text-xl">
            I use American made Garage Door Springs - call Joseph for same-day
            spring repair!
          </p>
          <Button className="mt-4 bg-yellow-300 text-black text-lg font-bold px-8 py-4 hover:scale-105 transform transition">
              <a href="tel:3107340910">
                📞 (310)-734-0910
              </a>
          </Button>
        </div>

        {/* Image Column (Broken spring + seasonal card stacked) */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">
          {/* Main Broken Spring image with pulse border */}
          <div className="relative w-full max-w-lg">
            <img
              src={BrokenSpring}
              alt="Broken spring"
              className="rounded-xl shadow-2xl w-full object-cover"
            />
            <span className="absolute inset-0 rounded-xl border-8 border-yellow-300 animate-ping [animation-duration:4s]" />
          </div>

          {/* Seasonal holiday image directly below */}
          {holidayImage && (
            <div className="w-full max-w-lg rounded-xl shadow-2xl border-4 border-white bg-white overflow-hidden">
              <img
                src={holidayImage}
                alt="Seasonal holiday"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
