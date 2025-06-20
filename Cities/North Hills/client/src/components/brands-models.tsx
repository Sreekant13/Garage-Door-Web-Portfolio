import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import genie from "../assets/images/Genie8600Model.png"
import crusader from "../assets/images/crusader200ss.png"
import liftmaster from "../assets/images/liftmaster.png"
import lift3800 from "../assets/images/liftmaster3800.png"
import chamberlain from "../assets/images/Chamberlain_chain_drive_1.png"

const brandData = [
  {
    title: "Genie Models",
    image: genie,
    gradient: "from-red-600 to-red-800",
    models: [
      "GS980", "9800", "880", "8800", "PRO 82", "PRO 98", "PRO 88",
      "PRO 90", "Excelerator", "Stealth",
    ],
    features: ["Screw Drive", "Chain Drive", "Belt Drive"],
  },
  {
    title: "LiftMaster Models",
    image: liftmaster,
    gradient: "from-blue-700 to-blue-900",
    models: [
      "85503-267", "8355W", "8550WLB", "8155W",
      "3800", "3850", "3840", "3595",
    ],
    features: ["MyQ & Wi-Fi", "Battery Backup"],
  },
  {
    title: "Classic Openers",
    image: lift3800,
    gradient: "from-gray-600 to-gray-800",
    models: [
      "LiftMaster 3800", "3850", "3840", "3595", "3585",
      "3280", "3275", "3265", "3245", "3240", "3255",
    ],
    features: ["Replacement Parts Available"],
  },
  {
    title: "Chamberlain Openers",
    image: chamberlain,
    gradient: "from-yellow-600 to-yellow-800",
    models: [
      "WD822KS", "WD822KLS", "DD610S", "DD612S",
      "PD420", "PD460-2K", "PD422D", "PD432-D",
    ],
    features: ["Security+ 2.0", "Battery Backup"],
  },
  {
    title: "Crusader Openers",
    image: crusader,
    gradient: "from-green-600 to-green-800",
    models: ["202SS", "XL Series"],
    features: ["Heavy-duty Springs", "Commercial Grade"],
  },
];

export default function BrandsModels() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-gray-800">
            Brands We Service
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We repair and install all major garage door brands.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {brandData.map((b, i) => (
            <motion.div
              key={b.title}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card className="overflow-hidden rounded-3xl shadow-2xl h-full">
                {/* Background image + gradient overlay */}
                <div className="absolute inset-0">
                  <img
                    src={b.image}
                    alt={b.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-b ${b.gradient} opacity-70`}
                  />
                </div>

                {/* Content */}
                <div className="relative flex flex-col h-full p-6 text-white">
                  {/* Title */}
                  <h3 className="text-2xl font-extrabold mb-4">
                    {b.title}
                  </h3>

                  {/* Models list */}
                  <div className="flex-1 overflow-y-auto mb-4 pr-2 space-y-2 text-sm">
                    {b.models.map((m) => (
                      <div
                        key={m}
                        className="flex items-center space-x-2"
                      >
                        <Check size={16} />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  {/* Feature pills */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {b.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-semibold"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="tel:562-506-1384"
                    className="mt-auto inline-block w-full bg-white text-gray-800 py-2 font-bold rounded-lg text-center hover:bg-gray-200 transition"
                  >
                    Call for {b.title}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
