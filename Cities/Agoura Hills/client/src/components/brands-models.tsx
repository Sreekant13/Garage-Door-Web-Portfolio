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


// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Check } from "lucide-react";

// const brandData = [
//   {
//     title: "Genie Models",
//     image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
//     models: ["GS980", "9800", "880", "8800", "PRO 82", "PRO 98", "PRO 88", "PRO 90"],
//     feature: "✓ Screw, Chain & Belt Drive"
//   },
//   {
//     title: "LiftMaster Models",
//     image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
//     models: ["85503-267", "8355W", "8550WLB", "8155W", "3800", "3850", "3840", "3595"],
//     feature: "✓ WiFi & MyQ Compatible"
//   },
//   {
//     title: "All Major Brands",
//     image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
//     models: [
//       "Chamberlain", "Craftsman", "Sears", "Clopay", "Amarr", "Wayne Dalton",
//       "Stanley", "CHI Doors", "Martin", "American", "Holmes", "Blue Max"
//     ],
//     feature: "✓ Parts Available for All Brands"
//   }
// ];

// export default function BrandsModels() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl font-bold text-professional mb-4">Brands We Service</h2>
//           <p className="text-xl text-gray-600">We repair all makes and models of garage doors and openers</p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {brandData.map((brand, index) => (
//             <motion.div
//               key={brand.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//             >
//               <Card className="p-8 shadow-lg h-full">
//                 <CardContent className="p-0">
//                   <div className="text-center mb-6">
//                     <img 
//                       src={brand.image} 
//                       alt={brand.title} 
//                       className="rounded-xl w-full h-40 object-cover mb-4" 
//                     />
//                     <h3 className="text-2xl font-bold text-professional mb-4">{brand.title}</h3>
//                   </div>
//                   <div className="space-y-2 text-sm text-gray-600">
//                     <p><strong>Popular Models:</strong></p>
//                     <div className="grid grid-cols-2 gap-1">
//                       {brand.models.map((model) => (
//                         <div key={model} className="flex items-center">
//                           <span>• {model}</span>
//                         </div>
//                       ))}
//                     </div>
//                     <p className="mt-3 text-trust font-semibold flex items-center">
//                       <Check size={16} className="mr-1" />
//                       {brand.feature.replace('✓ ', '')}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div 
//           className="text-center mt-12"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//         >
//           <motion.div 
//             className="bg-emergency p-6 rounded-2xl inline-block"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <p className="text-white text-xl font-bold mb-2">Need Parts or Service for Your Brand?</p>
//             <a 
//               href="tel:562-506-1384" 
//               className="text-3xl font-bold text-phone-highlight hover:text-white transition-colors"
//             >
//               Call 562-506-1384
//             </a>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
