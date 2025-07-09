// src/components/LocationServices.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

const colorSchemes = [
  { bg: 'from-pink-400 to-pink-200', text: 'text-pink-900', icon: 'text-pink-600' },
  { bg: 'from-yellow-400 to-yellow-200', text: 'text-yellow-900', icon: 'text-yellow-600' },
  { bg: 'from-green-400 to-green-200', text: 'text-green-900', icon: 'text-green-600' },
  { bg: 'from-blue-400 to-blue-200', text: 'text-blue-900', icon: 'text-blue-600' },
  { bg: 'from-purple-400 to-purple-200', text: 'text-purple-900', icon: 'text-purple-600' },
  { bg: 'from-teal-400 to-teal-200', text: 'text-teal-900', icon: 'text-teal-600' },
  { bg: 'from-red-400 to-red-200', text: 'text-red-900', icon: 'text-red-600' },
  { bg: 'from-indigo-400 to-indigo-200', text: 'text-indigo-900', icon: 'text-indigo-600' },
];

const services = [
  'La Canada Flintridge new garage door springs',
  'La Cresenta new garage door opener',
  'Montrose genie garage door repair',
  'Glendale torsion spring replacement',
  'Sunland chamberlain garage door repair',
  'Pasadena liftmaster garage door opener repair',
  'Altadena broken spring repair',
  'Burbank new garage door',
  'La Canada Flintridge new opener',
  'La Cresenta repair',
  'Montrose springs',
  'Glendale Genie opener',
  'Sunland chamberlain remote',
  'Pasadena garage door opener parts',
  'Altadena garage door cables and hinges',
  'Burbank garage door repair',
];

const areas = [
  'La Canada Flintridge',
  'La Cresenta',
  'Montrose',
  'Glendale',
  'Sunland',
  'Pasadena',
  'Altadena',
  'Burbank California',
];

const zipCodes = [
  '91214', '91011', '91042', '91040', '91342', '91011', '91020', '91202',
  '91207', '90215', '91501', '91504', '91352', '91006', '91008', '91001',
  '91104', '91023', '91107', '91206', '91203', '91103', '91104', '91106',
  '91105', '90041', '91107', '91214', '91011', '91042', '91040', '91342', '91011',
];

export default function LocationServices() {
  return (
    <section id="areas" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-300 mb-4">
            Communities We Proudly Serve
          </h2>
          {/* Area Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {areas.map((area, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-gradient-to-r from-green-400 to-teal-400 text-white rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          {/* Zip Codes Scroll */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 mb-6">
            {zipCodes.map((zip) => (
              <span key={zip} className="inline-block bg-gray-800 text-gray-200 px-3 py-1 rounded-full text-sm text-center">
                {zip}
              </span>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((label, idx) => {
            const scheme = colorSchemes[idx % colorSchemes.length];
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${scheme.bg} p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 flex flex-col items-center text-center`}
              >
                <MapPin className={`${scheme.icon} w-8 h-8 mb-4`} />
                <p className={`font-semibold ${scheme.text} text-lg`}>{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// import React from 'react';
// import { MapPin } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import { serviceAreas } from '@/lib/serviceAreas';


// const currentYear = new Date().getFullYear();
// // 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
// const foundingYear = 1979;
// const yearsInBusiness = currentYear - foundingYear + 1;

// // optional: to get “1st”, “2nd”, “3rd”, “4th” etc
// // const ordinalSuffix = (n: number) => {
// //   const s = ["th","st","nd","rd"];
// //   const v = n % 100;
// //   return n + (s[(v-20)%10] || s[v] || s[0]);
// // };

// const colorSchemes = [
//   { bg: 'from-pink-400 to-pink-200', text: 'text-pink-900', icon: 'text-pink-600' },
//   { bg: 'from-yellow-400 to-yellow-200', text: 'text-yellow-900', icon: 'text-yellow-600' },
//   { bg: 'from-green-400 to-green-200', text: 'text-green-900', icon: 'text-green-600' },
//   { bg: 'from-blue-400 to-blue-200', text: 'text-blue-900', icon: 'text-blue-600' },
//   { bg: 'from-purple-400 to-purple-200', text: 'text-purple-900', icon: 'text-purple-600' },
//   { bg: 'from-teal-400 to-teal-200', text: 'text-teal-900', icon: 'text-teal-600' },
//   { bg: 'from-red-400 to-red-200', text: 'text-red-900', icon: 'text-red-600' },
//   { bg: 'from-indigo-400 to-indigo-200', text: 'text-indigo-900', icon: 'text-indigo-600' },
// ];

// // Sort and group by first letter
// const sortedAreas = [...serviceAreas].sort((a, b) => a.localeCompare(b));
// const groupedAreas = sortedAreas.reduce<Record<string, string[]>>((groups, area) => {
//   const letter = area.charAt(0).toUpperCase();
//   if (!groups[letter]) groups[letter] = [];
//   groups[letter].push(area);
//   return groups;
// }, {});

// export default function ServiceAreas() {
//   const scrollToContact = () => {
//     const el = document.getElementById('contact');
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   };

//   let globalIndex = 0;

//   return (
//     <section id="areas" className="py-16 bg-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-inter font-bold text-gray-100 mb-4">Service Areas</h2>
//           <p className="text-lg text-gray-200 max-w-2xl mx-auto">
//             We proudly serve Los Angeles and surrounding areas for over {' '}
//         <strong>{(yearsInBusiness)}</strong> years.
//           </p>
//         </div>

//         {/* Alphabetical Groups */}
//         {Object.entries(groupedAreas).map(([letter, areas]) => (
//           <div key={letter} className="mb-8">
//             <h3 className="text-2xl font-semibold text-gray-100 mb-4">{letter}</h3>
//             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//               {areas.map((area) => {
//                 const scheme = colorSchemes[(globalIndex++) % colorSchemes.length];
//                 return (
//                   <Card
//                     key={area}
//                     className={`bg-gradient-to-br ${scheme.bg} hover:scale-105 transform transition-all text-white shadow-lg`}
//                   >
//                     <CardContent className="p-4">
//                       <div className="flex items-center">
//                         <MapPin className={`${scheme.icon} h-5 w-5 mr-2`} />
//                         <span className={`font-medium ${scheme.text}`}>{area}</span>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 );
//               })}
//             </div>
//           </div>
//         ))}

//         <div className="mt-8 text-center">
//           <p className="text-gray-300 mb-4">Serving Los Angeles, San Fernando Valley, Orange County and surrounding areas</p>
//           <button
//             onClick={scrollToContact}
//             className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-white font-medium px-6 py-2 rounded-full hover:from-green-600 hover:to-green-500 transition-colors"
//           >
//             Check if we service your area →
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
