import { MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function ServiceAreas() {
  const areas = [
    {
      name: "Los Angeles County",
      description:
        "Comprehensive service throughout LA County including Downtown, Hollywood, Beverly Hills, and surrounding areas.",
    },
    {
      name: "San Fernando Valley",
      description:
        "Expert garage door repair and installation across the San Fernando Valley-from Woodland Hills and Sherman Oaks to Van Nuys, North Hollywood, Burbank, and nearby neighborhoods.",
    },
    {
      name: "Orange County",
      description:
        "Dependable garage door repair & installation across Orange County-from Anaheim and Santa Ana to Irvine, Costa Mesa, Huntington Beach, Laguna Beach, and nearby neighborhoods.",
    },
    {
      name: "West Side",
      description:
        "Providing fast, reliable garage door repair and installation across the West Side-from Santa Monica and Venice to Westwood, Brentwood, Culver City, Marina del Rey, and Pacific Palisades.",
    },
  ];

  const phoneNumbers = [
    "323-270-5387",
    "310-915-4151",
    "818-351-3131",
    "562-506-1384"
  ];

  return (
    <section className="py-16 gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
          <p className="text-xl text-blue-100">
            We serve Los Angeles County, San Fernando Valley, and Orange County
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-white bg-opacity-10 backdrop-blur-lg border-none text-center h-full">
                <CardContent className="p-6">
                  <MapPin className="h-10 w-10 text-accent mb-4 mx-auto" />
                  <h3 className="text-xl font-bold mb-3">{area.name}</h3>
                  <p className="text-blue-100 text-sm">{area.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {phoneNumbers.map((number) => (
              <a
                key={number}
                href={`tel:${number}`}
                className="bg-accent text-white py-3 px-4 rounded-lg font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                {number}
              </a>
            ))}
          </div>
          <p className="text-blue-100">
            Call the number for your area or any number for fastest service
          </p>
        </motion.div>
      </div>
    </section>
  );
}
