import { motion } from "framer-motion";
import { Wrench, Settings, Cog, Puzzle, MapPin } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Installation",
    description: "Professional garage door installation with garage door balancing and lubrication",
    color: "bg-garage-blue"
  },
  {
    icon: Settings,
    title: "Repair", 
    description: "All makes and models repair including Genie, Chamberlain and Liftmaster with fully loaded service trucks",
    color: "bg-garage-orange"
  },
  {
    icon: Cog,
    title: "Maintenance",
    description: "Regular servicing to keep your garage door opener running smoothly",
    color: "bg-green-500"
  },
  {
    icon: Puzzle,
    title: "Parts",
    description: "Replacement parts for all Genie, Chamberlain, Liftmaster Garage door opener models in stock",
    color: "bg-purple-500"
  }
];

const serviceAreas = [
  { area: "Los Angeles County", phone: "323-270-5387" },
  { area: "San Fernando Valley", phone: "818-351-3131" },
  { area: "Orange County", phone: "562-506-1384" },
  { area: "Westside", phone: "310-915-4151" }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 relative">
      {/* Professional installation background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold garage-navy mb-6">
            Professional Services
          </h2>
          <p className="text-xl garage-slate max-w-3xl mx-auto">
            47 years of experience in garage door opener installation, repair, and maintenance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`${service.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
                <service.icon className="text-white h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="garage-slate">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Service Area Map */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Service Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.area}
                className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <MapPin className="garage-blue h-8 w-8 mx-auto mb-2" />
                <p className="font-semibold">{area.area}</p>
                <a 
                  href={`tel:${area.phone}`} 
                  className="garage-orange hover:underline"
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
