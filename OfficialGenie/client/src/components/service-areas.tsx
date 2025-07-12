// src/components/ServiceAreas.tsx
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "../assets/images/servicebackground.png";
import image2 from "../assets/images/background for hero.png";

const SERVICE_AREAS = [
  {
    key: "la",
    title: "Los Angeles County",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    description: "Comprehensive coverage across Los Angeles County including:",
    cities: [
      "Glendale","Hollywood","Torrance","Culver City","Lakewood","Gardena","Downey","Bell",
      "Pasadena","Santa Monica","Burbank","Long Beach"
    ],
    color: {
      border: "border-blue-600",
      headerBg: "bg-blue-100",
      icon: "text-blue-600",
      marker: "marker:text-blue-600",
    },
  },
  {
    key: "orange",
    title: "Orange County",
    image: image2,
    description: "Full service coverage throughout Orange County including:",
    cities: [
      "Anaheim","Garden Grove","Buena Park","Brea","Costa Mesa","Fullerton","Huntington Beach","Santa Ana",
      "Seal Beach","Tustin","Westminster","Yorba Linda"
    ],
    color: {
      border: "border-orange-600",
      headerBg: "bg-orange-100",
      icon: "text-orange-600",
      marker: "marker:text-orange-600",
    },
  },
  {
    key: "sfv",
    title: "San Fernando Valley",
    image: image1,
    description: "Dedicated coverage in the San Fernando Valley including:",
    cities: [
      "North Hollywood","Studio City","Sherman Oaks","Van Nuys",
      "Encino","Tarzana","Woodland Hills","Reseda",
      "Chatsworth","Canoga Park","Panorama City","Pacoima"
    ],
    color: {
      border: "border-green-600",
      headerBg: "bg-green-100",
      icon: "text-green-600",
      marker: "marker:text-green-600",
    },
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="scroll-mt-20 py-16 bg-genie-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Service Areas
          </h2>
          <p className="text-xl text-genie-gray">
            Serving Southern California with professional garage door services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICE_AREAS.map((area) => (
            <Card
              key={area.key}
              className={`h-full shadow-lg flex flex-col ${area.color.border}`}
            >
              <CardContent className="p-0 flex flex-col h-full">
                {/* colored header */}
                <div className={`${area.color.headerBg} flex items-center px-6 py-4 border-b`}>
                  <MapPin className={`${area.color.icon} w-6 h-6 mr-3`} />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {area.title}
                  </h3>
                </div>

                {/* image */}
                <div className="overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                {/* body */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-genie-gray mb-4 flex-shrink-0">
                    {area.description}
                  </p>
                  <ul
                    className={`list-disc list-inside text-gray-600 
                      grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                      gap-x-4 gap-y-1 flex-grow ${area.color.marker}`}
                  >
                    {area.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
