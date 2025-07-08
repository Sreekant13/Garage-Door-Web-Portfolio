// src/components/TechnicalSpecs2.tsx
import React from "react";
import {
  allBrands,
  genieBrands,
  stanleyVemco,
  liftmasterModels,
  chamberlainModels,
  genieBeltDrive,
  genieExcelerator,
  genieScrewDrive,
} from "@/lib/data";

export default function TechnicalSpecs2() {
  const sections = [
    { title: "All Brands", items: allBrands },
    { title: "Genie Brands", items: genieBrands },
    { title: "Stanley Vemco Models", items: stanleyVemco },
    { title: "Liftmaster Models", items: liftmasterModels },
    { title: "Chamberlain Models", items: chamberlainModels },
    { title: "Genie Belt Drive", items: genieBeltDrive },
    { title: "Genie Excelerator", items: genieExcelerator },
    { title: "Genie Screw Drive", items: genieScrewDrive },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-300 via-white to-yellow-300">
      <div className="container mx-auto px-4 space-y-12">
        {/* Callout */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">
            These are the model numbers we service.
          </h2>
          <p>
            Genie, Stanley, Crusader, Automatic Doorman, Sears Craftsman, Liftmaster,
            Blue Max & more.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {sections.map(({ title, items }) => {
            // on mobile we show up to 10 rows
            const rowCount = Math.min(items.length, 8);
            return (
              <details
                key={title}
                className="group border border-gray-300 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <summary
                  className="
                    cursor-pointer flex justify-between items-center
                    bg-indigo-600 text-white hover:bg-indigo-700
                    transition-colors px-6 py-4 font-semibold
                  "
                >
                  {title}
                  <span className="transform transition-transform duration-200 group-open:rotate-180">
                    ⌄
                  </span>
                </summary>

                <div className="bg-white px-6 py-5 border-l-4 border-indigo-600">
                  <ul
                    // mobile: flow columns, `rowCount` rows, horizontal scroll
                    // md+: normal 6-column grid
                    className="
                      grid grid-flow-col auto-cols-min gap-4 overflow-x-auto
                      md:grid-flow-row md:grid-cols-6 md:auto-cols-auto md:overflow-visible
                    "
                    style={{
                      // dynamically set number of rows
                      gridTemplateRows: `repeat(${rowCount}, minmax(0, auto))`,
                    }}
                  >
                    {items.map((item, i) => (
                      <li
                        key={i}
                        className="
                          min-w-[120px] flex-shrink-0
                          font-mono text-gray-800 text-sm
                        "
                      >
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
