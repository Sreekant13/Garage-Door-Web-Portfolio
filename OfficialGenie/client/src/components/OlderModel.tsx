// src/components/ModelCatalog.tsx
import React, { useState, useMemo } from "react";
import { Tab } from "@headlessui/react";

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
    ],
  },
  {
    key: "belt",
    label: "Belt Drive",
    items: ["GPS1200-IC","GPS700-IC","PRO706-BC","PRO0800-BC","PRO1000-BC","PRO1200-BC"],
  },
  {
    key: "excel",
    label: "Excelerator",
    items: ["PRO99-2IC","CMD9900-IC","ISD990-2","ISD1000"],
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
    ],
  },
] as const;

// assign each category a color palette
const TAB_COLORS: Record<
  typeof CATEGORIES[number]["key"],
  {
    defaultBg: string;
    defaultText: string;
    hoverBg: string;
    selectedBg: string;
    selectedText: string;
  }
> = {
  vintage: {
    defaultBg: "bg-yellow-200",
    defaultText: "text-yellow-800",
    hoverBg: "hover:bg-yellow-300",
    selectedBg: "bg-yellow-600",
    selectedText: "text-white",
  },
  belt: {
    defaultBg: "bg-teal-200",
    defaultText: "text-teal-800",
    hoverBg: "hover:bg-teal-300",
    selectedBg: "bg-teal-600",
    selectedText: "text-white",
  },
  excel: {
    defaultBg: "bg-purple-200",
    defaultText: "text-purple-800",
    hoverBg: "hover:bg-purple-300",
    selectedBg: "bg-purple-600",
    selectedText: "text-white",
  },
  screw: {
    defaultBg: "bg-green-200",
    defaultText: "text-green-800",
    hoverBg: "hover:bg-green-300",
    selectedBg: "bg-green-600",
    selectedText: "text-white",
  },
};

// a small rotating palette for badges
const BADGE_COLORS = [
  "bg-red-100 text-red-800",
  "bg-blue-100 text-blue-800",
  "bg-green-100 text-green-800",
  "bg-yellow-100 text-yellow-800",
  "bg-purple-100 text-purple-800",
];

export default function ModelCatalog() {
  const [search, setSearch] = useState("");

  return (
    <section id="vintage-models" className="scroll-mt-20 py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">
          Discontinued Genie Models We Service
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          From classic belt drives to vintage openers — keep your garage moving
          no matter the era!
        </p>

        <Tab.Group>
          {/* Tabs */}
          <Tab.List className="flex flex-wrap justify-center gap-2 mb-6">
            {CATEGORIES.map((cat) => {
              const clr = TAB_COLORS[cat.key];
              return (
                <Tab
                  key={cat.key}
                  className={({ selected }: { selected: boolean }) =>
                    [
                      "px-4 py-2 text-sm font-medium rounded-full transition",
                      selected
                        ? `${clr.selectedBg} ${clr.selectedText}`
                        : `${clr.defaultBg} ${clr.defaultText} ${clr.hoverBg}`,
                    ].join(" ")
                  }
                >
                  {cat.label} ({cat.items.length})
                </Tab>
              );
            })}
          </Tab.List>

          {/* Search
          <div className="flex justify-center mb-8">
            <input
              type="text"
              placeholder="Search model…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md border text-gray-600 border-gray-800 rounded-lg px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div> */}

          {/* Panels */}
          <Tab.Panels>
            {CATEGORIES.map((cat) => (
              <Tab.Panel key={cat.key} className="focus:outline-none">
                <GroupedBadgeList items={cat.items} search={search} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}

function GroupedBadgeList({
  items,
  search,
}: {
  items: readonly string[];
  search: string;
}) {
  // filter models by search
  const filtered = useMemo(
    () =>
      items.filter((m) =>
        m.toLowerCase().includes(search.trim().toLowerCase())
      ),
    [items, search]
  );

  // group models by first letter
  const grouped = useMemo(() => {
    return filtered.reduce((acc: Record<string, string[]>, model) => {
      const letter = model[0].toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(model);
      return acc;
    }, {});
  }, [filtered]);

  if (filtered.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-4">No models found.</p>
    );
  }

  return (
    <div className="space-y-6">
      {Object.entries(grouped)
        .sort(([a], [b]) => (a < b ? -1 : 1))
        .map(([letter, models]) => (
          <div key={letter}>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {letter}
            </h3>
            <div className="flex flex-wrap gap-2">
              {models.map((model, idx) => {
                const colorClass =
                  BADGE_COLORS[idx % BADGE_COLORS.length];
                return (
                  <span
                    key={model}
                    className={[
                      "px-3 py-1 rounded-full text-xs font-medium shadow-sm",
                      colorClass,
                    ].join(" ")}
                  >
                    {model}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
    </div>
  );
}

