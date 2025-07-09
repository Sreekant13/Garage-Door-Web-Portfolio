import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { serviceAreas } from '@/lib/serviceAreas';


const currentYear = new Date().getFullYear();
// 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
const foundingYear = 1979;
const yearsInBusiness = currentYear - foundingYear + 1;

// optional: to get “1st”, “2nd”, “3rd”, “4th” etc
// const ordinalSuffix = (n: number) => {
//   const s = ["th","st","nd","rd"];
//   const v = n % 100;
//   return n + (s[(v-20)%10] || s[v] || s[0]);
// };

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

// Sort and group by first letter
const sortedAreas = [...serviceAreas].sort((a, b) => a.localeCompare(b));
const groupedAreas = sortedAreas.reduce<Record<string, string[]>>((groups, area) => {
  const letter = area.charAt(0).toUpperCase();
  if (!groups[letter]) groups[letter] = [];
  groups[letter].push(area);
  return groups;
}, {});

export default function ServiceAreas() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  let globalIndex = 0;

  return (
    <section id="areas" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-inter font-bold text-gray-100 mb-4">Service Areas</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We are garage door dealers for Genie, Liftmaster, Chamberlain, Craftsman, Crusader. We proudly serve Los Angeles and surrounding areas for over {' '}
        <strong>{(yearsInBusiness)}</strong> years.
          </p>
        </div>

        {/* Alphabetical Groups */}
        {Object.entries(groupedAreas).map(([letter, areas]) => (
          <div key={letter} className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-100 mb-4">{letter}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {areas.map((area) => {
                const scheme = colorSchemes[(globalIndex++) % colorSchemes.length];
                return (
                  <Card
                    key={area}
                    className={`bg-gradient-to-br ${scheme.bg} hover:scale-105 transform transition-all text-white shadow-lg`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center">
                        <MapPin className={`${scheme.icon} h-5 w-5 mr-2`} />
                        <span className={`font-medium ${scheme.text}`}>{area}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">Please note we do not sell parts over the counter or out of my home. All of our repair work is performed at your home. We do not take garage door openers into the shop for repairs, we repair them right at your home. We offer same day service in most cases of garage door repair or garage door spring repair.We give free phone quotes if your needing a garage door repaired, replace a broken garage door spring, one piece or torsion or a estimate on a new garage door or garage door opener.</p>
          <button
            onClick={scrollToContact}
            className="inline-block bg-gradient-to-r from-green-500 to-green-400 text-white font-medium px-6 py-2 rounded-full hover:from-green-600 hover:to-green-500 transition-colors"
          >
            Check if we service your area →
          </button>
        </div>
      </div>
    </section>
  );
}
