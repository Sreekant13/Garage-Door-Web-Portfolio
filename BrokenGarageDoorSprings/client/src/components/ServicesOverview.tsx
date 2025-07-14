// src/components/ServicesOverview.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Spring3 from "@/assets/images/spring1.png"
import Spring2 from "@/assets/images/GenieLogo.png"
import Spring1 from "@/assets/images/spring3.png"

const services = [
  {
    title: "Spring Repair & Replacement",
    items: [
      "Torsion Springs",
      "New Springs Installation",
      "High Cycle Springs Available",
      "Roll Up Door Springs",
    ],
    highlight: "American-made springs from Los Angeles manufacturer",
    image: Spring1,
    bgColor: "from-blue-200 via-blue-300 to-blue-400",
    iconColor: "text-blue-600",
  },
  {
    title: "Opener Installation",
    items: ["Genie Openers", "Chamberlain/Liftmaster", "Chain, Belt & Screw Drive", "Remote Controls Included"],
    highlight: "Professional installation with warranty",
    image: Spring2,
    bgColor: "from-orange-200 via-orange-300 to-orange-400",
    iconColor: "text-orange-600",
  },
  {
    title: "Repair & Maintenance",
    items: ["Cable Replacement", "Track Alignment", "Roller & Bearing Service", "Troubleshooting"],
    highlight: "All makes and models serviced",
    image: Spring3,
    bgColor: "from-green-200 via-green-300 to-green-400",
    iconColor: "text-green-600",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-purple-400 via-pink-400 to-yellow-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-pink-800 mb-4">
            Our Expert Services
          </h2>
          <p className="text-lg text-gray-700">
            Comprehensive garage door repair and installation services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={
                `bg-gradient-to-br ${service.bgColor} border-0 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300`
              }
            >
              <CardContent className="p-6">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-red-400 mb-3">
                  {service.title}
                </h3>
                <ul className="text-red-500 space-y-2 mb-4">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <CheckCircle className={
                        `h-5 w-5 ${service.iconColor} animate-pulse`
                      } />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-md">
                  <p className="text-sm font-medium text-white">
                    {service.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
