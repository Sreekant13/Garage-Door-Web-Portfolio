// src/components/Hero.tsx
import React from "react";
import { Phone, Mail, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import servicesImg from "@/assets/images/services.png";
import ImageBackGround from "@/assets/images/servicebackground.png";


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

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const holidayImage = getHolidayImage();

  return (
    <section
      id="hero"
      className="relative text-white py-16"
      style={{
        backgroundImage: `url(${ImageBackGround})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* translucent overlay for contrast */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center md:text-left">
          {/* Heading + subtext */}
          <h2 className="text-4xl md:text-5xl font-inter font-bold mb-4">
            Professional Garage Door &amp; Spring Repair
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl">
            Fast, reliable service at affordable rates. No sales pitch, no
            gimmicks. We repair all makes and models.
          </p>

          {/* === MAIN IMAGE STRIP: services + seasonal holiday === */}
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Services strip (left on desktop / first on mobile) */}
            <div className="flex justify-center">
              <img
                src={servicesImg}
                alt="Openers, Springs, Repairs, Same Day Service"
                className="mx-auto border-4 border-white/80 rounded-lg max-w-full h-auto shadow-xl bg-black/10"
              />
            </div>

            {/* Holiday / seasonal image (right on desktop / under on mobile) */}
            <div className="flex justify-center">
              <img
                src={holidayImage}
                alt="Seasonal offer"
                className="mx-auto border-4 border-white/80 rounded-lg max-w-full h-auto shadow-xl bg-black/10"
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              size="lg"
              className="bg-secondary text-white hover:bg-secondary-light text-lg"
              asChild
            >
              <a href="tel:818-351-3131" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 818-351-3131
              </a>
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-neutral-50 text-lg"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Hero() {
//   const scrollToContact = () => {
//     const el = document.getElementById("contact");
//     if (el) el.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       id="hero"
//       className="relative text-white py-16"
//       style={{
//         backgroundImage: `url(${ImageBackGround})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Optional: a translucent overlay for better text contrast */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6">
//             Professional Garage Door & Spring Repair
//           </h2>
//           <p className="text-xl mb-8 opacity-90">
//             Fast, reliable service at affordable rates. No sales pitch, no gimmicks. 
//             We repair all makes and models.
//           </p>

//           {/* Special Offer Banner */}
//           {/* <Card className="bg-secondary text-white rounded-lg p-6 mb-8 shadow-lg border-0">
//             <div className="flex items-center justify-center mb-4">
//               <Zap className="h-8 w-8 mr-3" />
//               <h3 className="text-3xl font-inter font-bold">New Genie ½ HP belt drive is now $660.00 only!</h3>
//             </div>
//             <p className="text-lg font-medium">FOR ALL INTERNET CUSTOMERS!</p>
//           </Card> */}

//           {/* Full Services Image */}
//           <div className="mb-8">
//             <img
//               src={servicesImg}
//               alt="Openers, Springs, Repairs, Same Day Service"
//               className="mx-auto border-4 border-white rounded-lg max-w-full h-auto shadow-md"
//             />
//           </div>

//           {/* Call to Actions */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button
//               size="lg"
//               className="bg-secondary text-white hover:bg-secondary-light text-lg"
//               asChild
//             >
//               <a href="tel:818-351-3131" className="flex items-center">
//                 <Phone className="mr-2 h-5 w-5" />
//                 Call Now: 818-351-3131
//               </a>
//             </Button>
//             <Button
//               size="lg"
//               variant="secondary"
//               className="bg-white text-primary hover:bg-neutral-50 text-lg"
//               onClick={scrollToContact}
//             >
//               <Mail className="mr-2 h-5 w-5" />
//               Get Free Quote
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
