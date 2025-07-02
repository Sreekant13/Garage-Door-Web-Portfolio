// src/components/ServiceAreasSection.tsx
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MapPin, Home as HomeIcon } from "lucide-react";

const serviceAreas = [
  { name: "Los Angeles County", icon: MapPin, description: "Full coverage area" },
  { name: "San Fernando Valley", icon: HomeIcon, description: "Complete service" },
  { name: "Orange County", icon: MapPin, description: "Most areas covered" },
  { name: "Residential", icon: HomeIcon, description: "All home types" },
];

const phoneNumbers = [
  { number: "323-270-5387", area: "Main Line", color: "from-orange-500 to-orange-600" },
  { number: "310-915-4151", area: "West LA", color: "from-teal-500 to-teal-600" },
  { number: "818-351-3131", area: "Valley", color: "from-amber-500 to-amber-600" },
  { number: "562-506-1384", area: "South Bay", color: "from-green-500 to-green-600" },
];

export default function ServiceAreasSection() {
  return (
    <section id="service-area" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <MapPin className="w-8 h-8 text-orange-500 mr-3" />
            Service Areas
          </h2>

          {/* ——— Service Areas Card ——— */}
          <Card className="mb-12 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceAreas.map((area, idx) => (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center bg-orange-50 p-6 rounded-xl shadow-sm hover:bg-orange-100 transition-all"
                  >
                    <area.icon className="w-8 h-8 text-orange-500 mb-2" />
                    <h3 className="font-semibold text-gray-900">{area.name}</h3>
                    <p className="text-sm text-gray-600">{area.description}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ——— Phone Tiles Grid ——— */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phoneNumbers.map((p, i) => (
              <motion.a
                key={i}
                href={`tel:${p.number}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`
                  bg-gradient-to-r ${p.color} 
                  text-white p-8 rounded-2xl 
                  flex flex-col items-center justify-center 
                  shadow-lg transition-transform
                `}
              >
                <Phone className="w-6 h-6 mb-2" />
                <p className="font-semibold">{p.area}</p>
                <p className="text-sm opacity-90">{p.number}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
