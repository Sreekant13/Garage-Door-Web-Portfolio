import { useEffect, useState } from "react";
import { Wrench, Truck, Shield, Cog, Settings } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ExperienceCounter() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && count < 47) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count, isVisible]);

  const stats = [
    {
      icon: Wrench,
      title: "Installation",
      description: "Professional garage door installation services with garage door balancing and lubrication",
      color: "bg-secondary"
    },
    {
      icon: Settings,
      title: "Repair",
      description: "All makes and models repair including Genie vintage models with fully loaded service trucks",
      color: "bg-accent"
    },
    {
      icon: Cog,
      title: "Maintenance",
      description: "Regular servicing to keep your garage door opener running smoothly",
      color: "bg-green-500"
    },
    {
      icon: Truck,
      title: "Fully Loaded Trucks",
      description: "Replacement parts for all Genie Garage door opener models in stock on our service trucks",
      color: "bg-red-500"
    }
  ];

  return (
    <section 
    id = "services"
    className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Genie Pro?
          </h2>
          <p className="text-xl text-gray-600">Professional service you can trust</p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onViewportEnter={() => setIsVisible(true)}
            className="text-center"
          >
            <div className="bg-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">{count}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Years Experience</h3>
            <p className="text-gray-600">
              Professional garage door opener installations since 1978
            </p>
          </motion.div>
          
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1 }}
              className="text-center"
            >
              <div className={`${stat.color} text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
