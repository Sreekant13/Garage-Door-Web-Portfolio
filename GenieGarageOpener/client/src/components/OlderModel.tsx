// src/components/ModelCatalog.tsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  {
    key: "vintage",
    label: "Genie Vintage Models",
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
    label: "Genie Belt Drive",
    items: ["GPS1200-IC","GPS700-IC","PRO706-BC","PRO0800-BC","PRO1000-BC","PRO1200-BC"]
  },
  {
    key: "excel",
    label: "Genie Excelerator",
    items: ["PRO99-2IC","CMD9900-IC","ISD990-2","ISD1000"]
  },
  {
    key: "screw",
    label: "Genie Screw Drive",
    items: [
      "Genie 400","Genie 401","Genie 404","Genie 450","Genie 459","Genie 8600",
      "Genie PRO","GS980","9800","880","8800","GS820","8200","7200","850","800",
      "PRO82","Genie 98","Genie 88","Genie 90","PRO83/93","PRO88S/98S","CM7500",
      "CM8500","CM7500S","CM8500S","G-CL SERIES","IS SERIES","CSD 0706",
      "CSD 0800","ALC 60","ALC 70","ALC 80","75-IC","85-IC","RCD 225","RCD 250",
      "RCD 500","RCD 550","CM7600-IC","CM8600-IC","PRO95"
    ]
  },
  {
    key: "genie",
    label: "Genie New Models",
    items: [
      "Model 4162",
                  "Model 4062",
                  "Model 4063",
                  "Model 4142",
                  "Model 4042",
                  "Model 4043",
                  "Model 3142",
                  "Model 3042",
                  "Model 3122",
                  "Model 3022",
                  "Model 7155",
                  "Model 7055",
                  "Model 7135",
                  "Model 7035",
                  "Model 7033",
                  "Model 3155",
                  "Model 3055",
                  "Model 3053",
                  "Model 3135",
                  "Model 3035",
                  "Model 3033",
                  "Model 2155",
                  "Model 2055",
                  "Model 2053",
                  "Model 2135",
                  "Model 2035",
                  "Model 2033",
                  "Model 1155",
                  "Model 1055",
                  "Model 1135",
                  "Model 1035",
    ]
  }
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

  return (
    <section id="vintage-models" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-6">
          New and Discontinued Genie Models We Service and Repair
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          From classic belt drives to vintage openers — keep your garage moving
          no matter the era!
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveTab(cat.key);
                setSearch("");
              }}
              className={
                "px-4 py-2 rounded-full font-medium " +
                (cat.key === activeTab
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300")
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search model…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Badge grid */}
        <motion.div
          className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } }
          }}
        >
          <AnimatePresence>
            {activeItems.map((model) => (
              <motion.span
                key={model}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white border border-gray-200 text-gray-800 px-3 py-1 rounded-full text-xs text-center shadow-sm"
              >
                {model}
              </motion.span>
            ))}
            {activeItems.length === 0 && (
              <p className="col-span-full text-center text-gray-500 mt-4">
                No models found.
              </p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
