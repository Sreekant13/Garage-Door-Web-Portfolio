// client/src/components/Services.tsx
import React from "react";
import { motion } from "framer-motion";
import { Wrench, Settings, Cog, Puzzle, MapPin } from "lucide-react";
import bImage from "../assets/images/servicebackground.png";

const services = [
  {
    icon: Wrench,
    title: "Genie Installation",
    description:
      "Professional garage door installation with garage door balancing and lubrication",
    gradient: "from-blue-500 via-blue-400 to-blue-300",
    phone: "323-270-5387",
  },
  {
    icon: Settings,
    title: "Genie Repair",
    description:
      "All makes and models repair including Genie, Chamberlain and Liftmaster with fully loaded service trucks",
    gradient: "from-orange-500 via-orange-400 to-orange-300",
    phone: "310-915-4151",
  },
  {
    icon: Cog,
    title: "Genie Maintenance",
    description:
      "Regular servicing to keep your garage door opener running smoothly",
    gradient: "from-green-500 via-green-400 to-green-300",
    phone: "818-351-3131",
  },
  {
    icon: Puzzle,
    title: "Genie Parts",
    description:
      "Replacement parts for all Genie, Chamberlain, Liftmaster Garage door opener models in stock",
    gradient: "from-purple-500 via-purple-400 to-purple-300",
    phone: "562-506-1384",
  },
];

const serviceAreas = [
  {
    area: "Genie Los Angeles County",
    phone: "323-270-5387",
    gradient: "from-blue-500 via-blue-400 to-blue-300",
  },
  {
    area: "Genie San Fernando Valley",
    phone: "818-351-3131",
    gradient: "from-orange-500 via-orange-400 to-orange-300",
  },
  {
    area: "Genie Orange County",
    phone: "562-506-1384",
    gradient: "from-green-500 via-green-400 to-green-300",
  },
  {
    area: "Genie Westside",
    phone: "310-915-4151",
    gradient: "from-purple-500 via-purple-400 to-purple-300",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gray-100">
      {/* faded background image */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url(${bImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Genie Professional Services
          </h2>
          <p className="text-xl text-gray-700 max-w-l mx-auto">
            47 years of experience in garage door opener installation, repair,
            and maintenance
          </p>
        </motion.div>

        {/* service cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              className={`
                flex flex-col h-full rounded-2xl p-8 text-white
                bg-gradient-to-br ${svc.gradient}
                shadow-lg hover:shadow-2xl transition-transform
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              {/* icon bubble */}
              <div className="w-16 h-16 mb-4 rounded-full bg-white/30 flex items-center justify-center mx-auto">
                <svc.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-center">
                {svc.title}
              </h3>
              <p className="text-center text-sm flex-1">{svc.description}</p>
            </motion.div>
          ))}
        </div>
          {/* service areas */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Service Areas
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {serviceAreas.map((area, idx) => (
              <motion.div
                key={area.area}
                className={`
                  w-full max-w-xs flex flex-col items-center rounded-2xl p-6
                  text-white bg-gradient-to-br ${area.gradient}
                  shadow hover:shadow-lg transition-transform
                `}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* icon bubble */}
                <div className="w-12 h-12 mb-3 rounded-full bg-white/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>

                <p className="font-semibold text-lg">{area.area}</p>

                {/* clickable phone link */}
                <a
                  href={`tel:${area.phone}`}
                  className="text-sm mt-1 bg-white/20 px-3 py-1 rounded-full hover:bg-white/40 transition"
                >
                  {area.phone}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
