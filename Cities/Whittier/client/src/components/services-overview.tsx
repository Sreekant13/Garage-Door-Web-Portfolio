import { motion } from "framer-motion";
import { Settings, Wrench, Home, Speaker, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import openerImg from "../assets/images/openersandinstallations.png";
import springImg from "../assets/images/springrepair.png";
import doorImg from "../assets/images/newdoorinstallation.png";
import noiseImg from "../assets/images/noiseandtuneup.png";

const services = [
  {
    icon: Settings,
    title: "Openers & Installation",
    features: [
      "New 2025 model openers & installs",
      "All makes & models repaired",
      "Genie, LiftMaster, Chamberlain, Marantec",
      "Replacement parts on-hand",
    ],
    image: openerImg,
    borderClass: "border-red-600",
    iconClass: "text-red-600",
    buttonClass: "bg-red-600 hover:bg-red-700",
  },
  {
    icon: Wrench,
    title: "Spring Repair",
    features: [
      "Torsion & extension springs",
      "Broken overhead springs fixed",
      "New rollers & cables",
      "Emergency on-call service",
    ],
    image: springImg,
    borderClass: "border-yellow-500",
    iconClass: "text-yellow-500",
    buttonClass: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    icon: Home,
    title: "New Door Installation",
    features: [
      "2025 Aluminum, Wood, Steel, Glass",
      "Sectional & one-piece doors",
      "Custom wood designs",
      "Section replacement",
    ],
    image: doorImg,              // make sure you import this at top
    borderClass: "border-green-600",
    iconClass: "text-green-600",
    buttonClass: "bg-green-600 hover:bg-green-700",
  },
  {
    icon: Speaker,
    title: "Noisy Doors & Tune-Ups",
    features: [
      "Alignment & lubrication",
      "Belt & chain adjustments",
      "Quiet-track upgrades",
      "7-day repair calls",
    ],
    image: noiseImg,
    borderClass: "border-blue-800",
    iconClass: "text-blue-800",
    buttonClass: "bg-blue-800 hover:bg-blue-900",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Our Services for 2025
          </h2>
          <p className="text-lg text-gray-600">
            From openers to springs, doors to 7-day calls — we’ve got you covered.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.title}
              className="transform"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <Card
                className={`
                  flex flex-col h-full 
                  shadow-lg 
                  ${svc.borderClass} border-l-4 
                  bg-white 
                  rounded-2xl
                `}
              >
                {/* Top Image */}
                <div className="overflow-hidden rounded-t-2xl">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-40 object-cover"
                  />
                </div>

                <CardContent className="flex flex-col flex-1 p-6">
                  {/* Icon & Title */}
                  <div className="text-center mb-4">
                    <svc.icon size={32} className={`${svc.iconClass} mb-2`} />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {svc.title}
                    </h3>
                  </div>

                  {/* Features List */}
                  <ul className="flex-1 space-y-2 text-gray-600 mb-6">
                    {svc.features.map((feat) => (
                      <li key={feat} className="flex items-center">
                        <Check size={16} className="text-green-500 mr-2" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="text-center mt-auto">
                    <a
                      href="tel:562-506-1384"
                      className={`
                        inline-block px-5 py-2 font-bold text-white 
                        ${svc.buttonClass} 
                        rounded-lg 
                        transition
                      `}
                    >
                      Call Now
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}