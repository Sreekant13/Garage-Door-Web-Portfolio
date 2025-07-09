// src/components/AboutAndSpringsSection.tsx
import React from "react";
import { motion } from "framer-motion";
import Joseph from "@/assets/images/Joseph1.png";
import Joseph1 from "@/assets/images/Joseph2.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col bg-gray-800">
      {/* ABOUT: 47 YEARS IN BUSINESS */}
      <motion.section
        className="relative py-16 overflow-hidden bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        {/* Colorful Blob Behind */}
        <div className="absolute -left-32 -top-16 w-64 h-64 bg-gray-800 rounded-full opacity-40 filter blur-3xl" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-40 relative">
          {/* Text */}
<div className="space-y-4 md:pr-8">
  <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
    47 Years in Business
  </h2>
  <p className="text-gray-300">
    Joseph Lucey giving 47 years of quality garage door repair to customers in Los
    Angeles, San Fernando Valley and most of Orange Counties. If you’re repairing
    garage doors properly you need to cover a large area because most customers
    will only need your services once every 4 to 8 years and sometimes longer than
    that.
  </p>
  <p className="text-gray-300">
    I repair all makes and models of garage doors, garage door openers and garage
    door spring replacements.
  </p>
</div>

          {/* Text
          <div className="space-y-4 md:pr-8">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600">
              47 Years in Business
            </h2>
            <p className="text-gray-300">
              We repair garage doors <span className="font-semibold text-blue-400">right the first time</span>! That’s why we need to work a larger area. If
you’re repairing garage door properly, customers return every {' '}
              <span className="font-semibold text-blue-400">6–12 years</span>.Their
needs will range from replacing a garage door
or broken springs to repairing or installing a
new door opener such as a Genie,
Chamberlain or Liftmaster opener unit.
            </p>
            <p className="text-gray-300">
              From replacing <span className="text-blue-400">broken springs</span> to installing new openers like
              <span className="text-blue-400"> Genie</span>,<span className="text-blue-400"> Chamberlain</span>, or
              <span className="text-blue-400"> LiftMaster</span> units, we handle it all. No matter the issue or distance -
              we appreciate your business as much as you appreciate our commitment to 47 years of customer satisfaction.
            </p>
          </div> */}

          {/* Image */}
          <motion.div
            className="flex justify-center md:justify-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
          >
            <img
              src={Joseph}
              alt="Joseph"
              className="w-64 h-64 rounded-xl object-cover ring-4 ring-indigo-300 shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* SPRINGS: AMERICAN-MADE HIGH CYCLE */}
      <motion.section
        className="relative py-16 overflow-hidden bg-gray-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        variants={fadeUp}
      >
        {/* Colorful Blob Behind */}
        <div className="absolute -right-32 -bottom-16 w-64 h-64 bg-gray-800 rounded-full opacity-40 filter blur-3xl" />

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-2 md:px-40 relative">
          {/* Image on left */}
          <motion.div
            className="flex justify-center md:justify-start md:mr-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeUp}
          >
            <img
              src={Joseph1}
              alt="Shelves stocked with garage door springs"
              className="w-64 h-64 rounded-xl object-cover ring-4 ring-green-300 shadow-2xl"
            />
          </motion.div>

          {/* Text */}
          <div className="space-y-4 md:pl-8">
            <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-teal-600">
              Committed to Your Safety and Satisfaction
            </h3>
            {/* Text */}
<p className="text-gray-300">
  Most homeowner have had the inconvenience occur of a broken garage door
  spring. The most frustrating thing is to have your car stuck in the garage when
  you need it most. That's why I lead by example and follow the industry's best
  practices to make the recommendation to educate homeowners each time I step foot
  in a garage for repair. These practices can save you time and money in the long
  run, and I want the best for my customers. That’s how I’ve stayed in business for
  over 47 years.
</p>
            {/* <p className="text-gray-300">
              We use garage door springs manufactured by <strong className="text-green-400">American Garage Door Spring MFG</strong>.
              These are high quality springs manufactured right here in Los Angeles, California.
            </p>
            <p className="text-gray-300">
              I’ve been buying American springs for over <span className="text-green-400 font-semibold">30 years</span>.
              They also manufacture <strong className="text-green-400">HIGH CYCLE SPRINGS</strong>. Most garage door manufacturers
              give{' '}
              <span className="text-green-400 font-semibold">10,000 to 12,000 cycle springs</span> with their garage doors.
              Those garage door torsion springs will normally last on average{' '}
              <span className="text-green-400 font-semibold">6 to 10 years</span>.
              <strong className="text-green-400"> HIGH CYCLE SPRINGS can double to triple that amount of time.</strong>
            </p>
            <p className="text-gray-300">
              That’s to say you don’t mind paying extra for your garage door springs.
            </p> */}
          </div>
        </div>
      </motion.section>
    </section>
  );
}

// import React from 'react';
// import motor1 from '@/assets/images/motors.jpg';
// import motor2 from '@/assets/images/motors2.jpg';
// import motor3 from '@/assets/images/motors3.jpg';

// const currentYear = new Date().getFullYear();
// // 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
// const foundingYear = 1979;
// const yearsInBusiness = currentYear - foundingYear + 1;

// // optional: to get “1st”, “2nd”, “3rd”, “4th” etc
// const ordinalSuffix = (n: number) => {
//   const s = ["th","st","nd","rd"];
//   const v = n % 100;
//   return n + (s[(v-20)%10] || s[v] || s[0]);
// };


// const phoneNumbers = [
//   "818-351-3125",
//   "323-225-2898",
//   "562-506-1365",
//   "310-734-0910",
//   "714-782-9570",
//   "626-251-2180",
// ];


// const AboutSection: React.FC = () => (
//   <section id="about" className="p-8 bg-white text-gray-800">
    

//     <div className="space-y-6">
//         <div className="space-y-4">
//           <h1 className="text-4xl font-bold text-green-900">
//             New Garage Door Springs – Los Angeles
//           </h1>
//           <p className="text-lg leading-relaxed">
//             We provide fast reliable service at affordable rates. No sales push,
//             no gimmicks. We repair all makes and models of garage doors, garage
//             door openers and the replacement of garage door springs. All of our
//             trucks are well stocked with the most common repair parts. We also
//             stock our trucks with a very large inventory of garage door springs
//             unlike some of our competitors who have very little inventory and
//             try to drive up your job’s cost by having to get the parts and come
//             back to finish the job. If we don’t have the part we don’t charge a
//             return trip fee.
//           </p>
//         </div>
//         {/* Phone Numbers */}
//         <div>
//           <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">
//             Call Us
//           </h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//             {phoneNumbers.map((num) => (
//               <a
//                 key={num}
//                 href={`tel:${num}`}
//                 className="bg-green-100 text-green-900 font-medium rounded shadow py-2 text-center"
//               >
//                 {num}
//               </a>
//             ))}
//           </div>
//           </div>
//       <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">Details and Prices</h2>
      
//       <p>We have been installing new garage door springs for over 41 years, including broken torsion springs, roll-up sectional springs, and one-piece Holmes springs such as Holmes 9 x 28, Holmes 7 x 28, Holmes 5 x 28, and Holmes 3 x 28.</p>
//       <p>Replacing broken sectional garage door springs takes between 30 and 90 minutes on average, depending on whether there is one spring or two. The cost for repairing broken sectional springs, including labor, ranges from $195.00 to $485.00.</p>
//       <p>Repairing and replacing broken one-piece garage door springs takes about 10 to 20 minutes. Our service call fee is $130.00 and includes a half hour of labor; each additional half hour is $80.00 plus parts. The average cost for replacement springs is $48.00 to $135.00. We offer same-day service in most cases.</p>
//       <p>One-piece springs, or sectional torsion springs for wood, steel, or aluminum doors, last an average of 6 to 12 years. Broken springs are caused by various factors: trapped air bubbles during steel pouring can later cause wire faults under pressure; inconsistent cooling during heat treatment can also lead to faults over time. If springs are older than five years, we recommend replacing all springs to avoid additional service calls and save on overall costs.</p>
//       <p>We provide service for all broken springs, replace torsion and roll-up springs, and repair garage door springs seven days a week. We offer emergency spring replacement, new springs, galvanized sectional springs, oil-tempered springs, metal springs, wood springs, two-car garage springs, and fast replacement. Call us to replace broken springs with new, high-quality replacements.</p>

//       <h3 className="text-2xl font-semibold text-red-700 mb-2 border-l-4 border-red-500 pl-4">Caution: Garage Door Spring Repair</h3>
//       <p>Never attempt garage door spring repair unless you are experienced. This can be dangerous and requires special equipment. If you still want to do it yourself, be careful and have someone with you in case you need medical treatment. A breaking spring is loud—if you hear a loud bang when opening or closing the door, it’s probably a broken spring. If the opener strains to open the door, it may indicate a broken spring. If the door tilts to one side when opening, it may be a broken spring. Continuing to use your opener with a broken spring puts great strain on the opener and can burn it out, so limit its use until repaired. Keep children away from moving garage doors at all times.</p>

//       <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">New Garage Door Openers – Los Angeles</h2>
//       <p>Most of the openers we sell are Genie, Chamberlain and LiftMaster models in chain drive, belt drive, and screw drive configurations. We still carry many Genie models, so if you want a Genie chain drive, belt drive, or screw drive opener, we have it in stock.</p>
//       {/* <ul className="list-disc list-inside space-y-2">
//         <li><strong>New LiftMaster ½ HP Chain Drive Opener</strong>: $770.00 (including tax and installation, with two remote controls)</li>
//         <li><strong>New LiftMaster ½ HP Belt Drive Opener</strong>: $770.00 (including tax and installation, with two remote controls)</li>
//         <li><strong>New LiftMaster ¾ HP Belt Drive Opener</strong>: $880.00 (including tax and installation, with two remote controls)</li>
//       </ul> */}
//       <ul className="list-disc list-inside space-y-2">
//             <li>
//               New Genie ½ HP belt drive with 2 transmitters with battery backup: <strong>$660.00</strong>
//             </li>
//             <li>
//               New Genie 1¼ HP belt drive with 2 transmitters with battery backup: <strong>$770.00</strong>
//             </li>
//             <li>
//               Chamberlain ½ HP chain drive with 2 transmitters with battery backup: <strong>$740.00</strong>
//             </li>
//             <li>
//               Chamberlain ½ HP belt drive with 2 transmitters with battery backup: <strong>$740.00</strong>
//             </li>
//           </ul>
//           <p className="mt-2">
//             Prices include tax & installation. With 47 years of experience,
//             call us today for all your garage door needs.
//           </p>

//       <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">Garage Door Openers and Garage Doors – Los Angeles</h2>
//       <p>Should be serviced every four to six years. Rebalancing the springs keeps stress off the opener and reduces premature wear. Adjust one-piece sectional torsion springs every four to six years—it’s worth the cost.</p>
//       <p>Lubricating and inspecting the door and operator is necessary for safety and longevity. Our standard service call is regularly $130.00 with same-day service. Remember that when buying an opener or replacing springs, product quality and installation both determine longevity.</p>
//       <p>Buying a Genie, LiftMaster, or Chamberlain opener is a small investment in your home’s convenience. Proper installation ensures a long life for your new opener. We install new garage door openers in: Culver City, Santa Monica, Beverly Hills, Hollywood, Pacific Palisades, Marina Del Rey, Playa Del Rey, Venice, Manhattan Beach, Hermosa Beach, Redondo Beach, Torrance, Carson, Wilmington, Gardena, Hawthorne. We’ve been installing and repairing doors, openers, and springs (including torsion springs) for over 47 years. Fair prices and great service keep us in business.</p>

//       <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">Garage Door Repair – Los Angeles</h2>
//       <p>Call us to repair your garage door at <strong>323-270-5387</strong>. We’re here to help. We sell all name-brand products such as Genie, LiftMaster, Crusader, Moore-O-Matic, Linear, Blue Max, Automatic Doorman, Vemco, Stanley, King, Sears, Craftsman, Holmes, Apex, American, Clopay, Windsor, Martin, CHI, Amarr, Marathon, Millennium, Wayne Dalton, An-A-Zora, Springs, Overhead Door.</p>
//       <p>We offer a complete line of 2020 model garage doors, openers, opener repair and service, and new springs. We also sell, install, and service all makes and models of electric driveway gate openers. For over 47 years, we’ve handled all your garage door needs 24/7.</p>
//       <p>Preventive maintenance is smart and cost-effective. It’s often overlooked but can prevent serious damage and expensive repairs. As the heaviest and largest moving object in your home, your garage door should be kept in good working order. Both your door and opener should be checked regularly for safe, efficient operation. To help you avoid surprises, we can schedule service every four years for “Garage Door Tune-ups,” including lubricating, balancing, tightening, and adjusting all critical components. Call us today.</p>
//       <p>But if you have a problem now, we are ready to help. We can handle any repairs (broken springs, cables, tracks, hinges, rollers, doors off track, etc.) regardless of age, brand, or model, and all opener problems, including adjustments, repairs, re-calibration, and replacement. Our service techs are industry experts trained to fix any door or opener issue. Whether you need emergency service or proactive preventive maintenance, we’re here to assist. After hours and on weekends, our phones transfer to an auto-page system, with personnel on call 24/7.</p>


// {/* Images */}
// <div className="flex flex-wrap justify-center mb-8 space-x-4">
//   {[motor1, motor2, motor3].map((src, idx) => (
//     <div
//       key={idx}
//       className="border-2 border-gray-300 rounded-lg p-1 shadow-md overflow-hidden"
//     >
//       <img
//         src={src}
//         alt={`Gate Opener ${idx + 1}`}
//         className="max-w-xs h-auto object-contain"
//       />
//     </div>
//   ))}
// </div>

//       <h2 className="text-2xl font-semibold text-green-800 mb-4 border-l-4 border-green-600 pl-4">Electric Gate Openers – Los Angeles</h2>
//       {/* <p>The year 2025 marks our company’s 47th year of business. Our award-winning repair, service, and installation of gate operators and our commitment to improving the industry set us apart.</p> */}
      
//       <p>
//         The year <strong>{currentYear}</strong> marks our company’s{' '}
//         <strong>{ordinalSuffix(yearsInBusiness)}</strong> year of business.  
//         Our award-winning repair, service, and installation of gate operators and
//         our commitment to improving the industry set us apart.
//       </p>

      
//       <p>Our customers are our number-one priority. We install, service, and repair All-O-Matic driveway gate openers designed for quality. All-O-Matic offers unrivaled warranties. We’re a service and tech support dealer for many gate manufacturers-best installation in the industry.</p>
//       <p>All-O-Matic products are known for quality, performance, and exceptional warranties. They’re continually monitored and evaluated in the field. Some operators run 24/7 on 16 ft. high, 30 ft. long steel-sheet gates at LAPD impound yards-true continuous-duty testing.</p>
//       <div className="flex flex-wrap justify-center space-x-4 mt-4">
//         {['Chamberlain','Dorene','DoorKing','Elite','FAAC','Liftmaster','Ramset','Apollo','All-O-Matic','BCL','Custom Line','Stanley','Varnum','Crusader'].map(name => (
//           <span key={name} className="m-1 px-3 py-1 bg-red-200 rounded-full text-gray-700">{name}</span>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default AboutSection;
