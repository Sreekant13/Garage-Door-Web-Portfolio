// src/components/WhyChooseUs.tsx
import React from "react";
import { Settings } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">47 years of excellence in garage door service</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">47</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Years of Experience</h3>
              <p className="text-gray-600">
                Nearly five decades of garage door expertise. When you repair doors properly, customers return every 6-12 years - that's how we've built lasting relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇺🇸</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">American-Made Springs</h3>
              <p className="text-gray-600">
                We use high-quality springs from American Garage Door Spring MFG in Los Angeles. 30+ years of partnership ensures reliable, locally-made components.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">High-Cycle Options</h3>
              <p className="text-gray-600">
                Standard springs last 6-10 years with 10,000-12,000 cycles. Our high-cycle springs can double or triple that lifespan for long-term value.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}
