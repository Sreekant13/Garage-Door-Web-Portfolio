// src/components/ModelCatalog.tsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    key: "vintage",
    label: "Vintage Models",
    items: [
      "Genie 1950","Genie 1810","GS900","Genie 920","Genie 940","Genie 975",
      "GS810","Genie 810","Genie 815","Genie 840","GS210","Genie 250",
      "CHAIN DRIVE","SP99","SP129","SP229","CH125","Genie 130","LD100",
      "Genie 500","Genie 100A","Genie 550A","LAD125","Genie 555","CM6000",
      "6000A","CM60","Genie 70","Genie 80","Genie 60S","Genie 70S","Genie 80S",
      "PMX60","SCREW DRIVE","GS980","Genie 9800","Genie 880","Genie 8800",
      "GS820","Genie 8200","Genie 720","Genie 850","Genie 800","PRO82",
      "Genie 98","Genie 88","Genie 90","PRO83","Genie 93","PRO88S",
      "Genie 98S","CM7500","Genie 8500","Genie 7500S","Genie 8500S",
      "SD Series","Genie 9500","Genie 9000","Genie 8000","Genie 2500",
      "Genie 5000","GXL","GX","G Series","Genie 10000","Intellicode",
      "Stealth","Blue Max"
    ]
  },
  {
    key: "belt",
    label: "Belt Drive",
    items: ["GPS1200-IC","GPS700-IC","PRO706-BC","PRO0800-BC","PRO1000-BC","PRO1200-BC"]
  },
  {
    key: "excel",
    label: "Excelerator",
    items: ["PRO99-2IC","CMD9900-IC","ISD990-2","ISD1000"]
  },
  {
    key: "screw",
    label: "Screw Drive",
    items: [
      "Genie 400","Genie 401","Genie 404","Genie 450","Genie 459","Genie 8600",
      "Genie PRO","GS980","9800","880","8800","GS820","8200","7200","850","800",
      "PRO82","Genie 98","Genie 88","Genie 90","PRO83/93","PRO88S/98S","CM7500",
      "CM8500","CM7500S","CM8500S","G-CL SERIES","IS SERIES","CSD 0706",
      "CSD 0800","ALC 60","ALC 70","ALC 80","75-IC","85-IC","RCD 225","RCD 250",
      "RCD 500","RCD 550","CM7600-IC","CM8600-IC","PRO95"
    ]
  }
];

// A palette of fun gradient backgrounds
const GRADIENTS = [
  "from-blue-400 to-indigo-500",
  "from-purple-400 to-pink-500",
  "from-green-400 to-teal-500",
  "from-yellow-400 to-orange-500",
  "from-red-400 to-pink-600",
  "from-indigo-300 to-purple-600",
];

export default function ModelCatalog() {
  const [activeTab, setActiveTab] = useState("vintage");
  const [search, setSearch] = useState("");

  const activeItems = useMemo(() => {
    const cat = CATEGORIES.find((c) => c.key === activeTab)!;
    return cat.items.filter((m) =>
      m.toLowerCase().includes(search.toLowerCase())
    );
  }, [activeTab, search]);

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } },
  };

  return (
    <section id="vmodels" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Discontinued Genie Models We Service
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          From classic belt drives to vintage openers — keep your garage moving no matter the era!
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => { setActiveTab(cat.key); setSearch(""); }}
              className={`px-4 py-2 rounded-full font-medium transition $
                cat.key === activeTab
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-blue-500 shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search model…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border border-gray-300 rounded-full px-6 py-3 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </div>

        {/* Playful desktop grid */}
        <motion.div
          className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {activeItems.map((model, idx) => {
              const gradient = GRADIENTS[idx % GRADIENTS.length];
              return (
                <motion.div
                  key={model}
                  layout
                  variants={itemVariants}
                  exit={{ opacity: 0, scale: 0.5, rotate: 10 }}
                  className={`px-4 py-2 rounded-full text-white text-sm text-center shadow-xl cursor-pointer bg-gradient-to-br ${gradient} transform hover:scale-105 hover:-rotate-1 transition`}
                >
                  {model}
                </motion.div>
              );
            })}
            {activeItems.length === 0 && (
              <p className="col-span-full text-center text-gray-500 mt-4">
                No models found.
              </p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Mobile carousel */}
        <div className="sm:hidden overflow-x-auto py-4">
          <motion.div
            className="flex space-x-4 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {activeItems.map((model, idx) => {
                const gradient = GRADIENTS[idx % GRADIENTS.length];
                return (
                  <motion.div
                    key={model}
                    variants={itemVariants}
                    exit={{ opacity: 0, x: -30 }}
                    className={`min-w-[120px] px-3 py-2 rounded-full text-white text-sm text-center shadow-lg bg-gradient-to-br ${gradient} flex-shrink-0 transform hover:scale-105 transition`}
                  >
                    {model}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// export default function ModelCatalog() {
//   const [activeTab, setActiveTab] = useState("vintage");
//   const [search, setSearch] = useState("");

//   const activeItems = useMemo(() => {
//     const cat = CATEGORIES.find((c) => c.key === activeTab)!;
//     return cat.items.filter((m) =>
//       m.toLowerCase().includes(search.toLowerCase())
//     );
//   }, [activeTab, search]);

//   // Animation variants
//   const containerVariants = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.05 } }
//   };
//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   return (
//     <section id="vmodels" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-4">
//           Discontinued Genie Models We Service
//         </h2>
//         <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
//           From classic belt drives to vintage openers — keep your garage moving no matter the era!
//         </p>

//         {/* Tabs */}
//         <div className="flex justify-center space-x-4 mb-6">
//           {CATEGORIES.map((cat) => (
//             <button
//               key={cat.key}
//               onClick={() => { setActiveTab(cat.key); setSearch(""); }}
//               className={`px-4 py-2 rounded-full font-medium transition ${
//                 cat.key === activeTab
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//             >
//               {cat.label}
//             </button>
//           ))}
//         </div>

//         {/* Search */}
//         <div className="flex justify-center mb-8">
//           <input
//             type="text"
//             placeholder="Search model…"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
//           />
//         </div>

//         {/* Mobile carousel */}
//         <div className="sm:hidden overflow-x-auto py-4">
//           <motion.div
//             className="flex space-x-4 px-2"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             <AnimatePresence>
//               {activeItems.map((model) => (
//                 <motion.div
//                   key={model}
//                   variants={itemVariants}
//                   exit={{ opacity: 0, x: -20 }}
//                   className="min-w-[140px] bg-white shadow-lg rounded-lg p-3 text-center flex-shrink-0"
//                 >
//                   <span className="block text-sm font-semibold text-gray-800">
//                     {model}
//                   </span>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </div>

//         {/* Desktop grid */}
//         <motion.div
//           className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           <AnimatePresence>
//             {activeItems.map((model) => (
//               <motion.span
//                 key={model}
//                 layout
//                 variants={itemVariants}
//                 exit={{ opacity: 0, y: -10 }}
//                 className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-xs text-center shadow-sm hover:scale-105 transition"
//               >
//                 {model}
//               </motion.span>
//             ))}
//             {activeItems.length === 0 && (
//               <p className="col-span-full text-center text-gray-500 mt-4">
//                 No models found.
//               </p>
//             )}
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </section>
//   );
// }