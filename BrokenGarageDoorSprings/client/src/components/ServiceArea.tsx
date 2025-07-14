
// src/components/ServiceAreas.tsx
import React from "react"
import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

const losAngelesCities = [
  "Agoura Hills", "Alhambra", "Arcadia", "Artesia", "Azusa", "Baldwin Park", "Bell", "Bell Gardens",
  "Bellflower", "Beverly Hills", "Bradbury", "Burbank", "Calabasas", "Cerritos", "Compton", "Covina",
  "Cudahy", "Culver City", "Diamond Bar", "Downey", "Duarte", "El Monte", "El Segundo", "Gardena",
  "Glendale", "Glendora", "Hawaiian Gardens", "Hawthorne", "Hermosa Beach", "Hidden Hills", "Huntington Park",
  "Industry", "Inglewood", "Irwindale", "La Cañada Flintridge", "La Habra Heights", "La Mirada", "La Puente",
  "La Verne", "Lakewood", "Lawndale", "Lomita", "Long Beach", "Los Angeles", "Lynwood", "Malibu",
  "Manhattan Beach", "Maywood", "Monrovia", "Montebello", "Monterey Park", "Norwalk", "Palos Verdes Estates",
  "Paramount", "Pasadena", "Pico Rivera", "Pomona", "Rancho Palos Verdes", "Redondo Beach", "Rolling Hills",
  "Rolling Hills Estates", "Rosemead", "San Fernando", "San Gabriel", "San Marino", "Santa Clarita",
  "Santa Fe Springs", "Santa Monica", "Sierra Madre", "Signal Hill", "South El Monte", "South Gate",
  "South Pasadena", "Temple City", "Torrance", "Vernon", "Walnut", "West Covina", "Hollywood Hills",
  "Westlake Village", "Whittier"
];

const orangeCountyCities = [
  "Anaheim", "Brea", "Buena Park", "Costa Mesa", "Cypress", "Fountain Valley", "Fullerton", "Garden Grove",
  "Huntington Beach", "La Habra", "La Palma", "Los Alamitos", "Orange", "Placentia", "Santa Ana",
  "Seal Beach", "Stanton", "Tustin", "Villa Park", "Westminster", "Yorba Linda"
];

const sanFernandoValleyCities = [
"Arleta", "Canoga Park", "Chatsworth", "Encino", "Granada Hills",
"Mission Hills", "North Hollywood", "Northridge", "Panorama City",
"Pacoima", "Reseda", "Sherman Oaks", "Studio City", "Sun Valley",
"Tarzana", "Toluca Lake", "Van Nuys", "Valley Glen", "Valley Village",
"West Hills", "Winnetka"
]

// const serviceAreas = [
//   { name: "Los Angeles County", cities: losAngelesCities },
//   { name: "Orange County",     cities: orangeCountyCities },
//   { name: "San Fernando Valley", cities: sanFernandoValleyCities },
// ]



export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-400 flex items-center justify-center gap-2">
            <MapPin className="h-5 w-5 text-teal-300" />
            <span>Serving Los Angeles County, Orange County &amp; San Fernando Valley</span>
          </p>
        </div>

        {/* grid: LA spans full width, then two half‑width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Los Angeles County: full width */}
          <Card className="bg-gray-800 shadow-xl md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-teal-300 mb-4">
                Los Angeles County
              </h3>
              <div className="flex flex-wrap gap-2">
                {losAngelesCities.map((city) => (
                  <span
                    key={city}
                    className="bg-teal-700 bg-opacity-20 text-teal-200 px-3 py-1 text-sm rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Orange County */}
          <Card className="bg-gray-800 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">
                Orange County
              </h3>
              <div className="flex flex-wrap gap-2">
                {orangeCountyCities.map((city) => (
                  <span
                    key={city}
                    className="bg-orange-700 bg-opacity-20 text-orange-200 px-2 py-1 text-sm rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* San Fernando Valley */}
          <Card className="bg-gray-800 shadow-xl">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">
                San Fernando Valley
              </h3>
              <div className="flex flex-wrap gap-2">
                {sanFernandoValleyCities.map((city) => (
                  <span
                    key={city}
                    className="bg-purple-700 bg-opacity-20 text-purple-200 px-2 py-1 text-sm rounded-full"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* footer note */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Don’t see your city listed? Call us anyway—we may still be able to help!
          </p>
        </div>
      </div>
    </section>
  );
}