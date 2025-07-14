// src/components/SpringsSection.tsx
import React from "react";
import SpringsWarehouse from "@/assets/images/springs_warehouse.png";

export default function SpringsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        {/* Image of stocked springs: fully visible, smaller */}
        <div className="flex-1 flex justify-center">
          <img
            src={SpringsWarehouse}
            alt="Joseph holding high-cycle springs in the warehouse"
            className="rounded-lg shadow-lg w-full max-w-sm h-auto object-contain"
          />
        </div>

        {/* Text content */}
        <div className="flex-1 text-gray-700 space-y-4">
          <p>
            We use garage door springs manufactured by <strong>American Garage Door Spring MFG</strong>. These are
            high quality springs manufactured right here in Los Angeles, California.
          </p>
          <p>
            I’ve been buying American springs for over 30 years. They also manufacture <strong>HIGH CYCLE SPRINGS</strong>.
            Most garage door manufacturers give 10,000 to 12,000 cycle springs with their
            garage doors. Those garage door torsion springs will normally last on average 6 to 10 years.
            <strong> HIGH CYCLE SPRINGS can double to triple that amount of time.</strong>
          </p>
          <p>
            That’s to say you don’t mind paying extra for your garage door springs.
          </p>
        </div>
      </div>
    </section>
  );
}
