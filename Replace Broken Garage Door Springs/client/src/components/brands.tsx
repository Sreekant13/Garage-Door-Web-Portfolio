// src/components/Brands.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supportedBrands, brandCategories } from "@/lib/data";

const brandColorSchemes = [
  { from: "from-indigo-500", to: "to-indigo-300", accent: "text-indigo-500" },
  { from: "from-green-500", to: "to-green-300", accent: "text-green-500" },
  { from: "from-yellow-500", to: "to-yellow-300", accent: "text-yellow-500" },
  { from: "from-pink-500", to: "to-pink-300", accent: "text-pink-500" },
  { from: "from-teal-500", to: "to-teal-300", accent: "text-teal-500" },
  { from: "from-purple-500", to: "to-purple-300", accent: "text-purple-500" },
];

export default function Brands() {
  return (
    <section id="brands" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-inter font-bold text-gray-300 mb-4">
            Supported Brands
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We service all major garage door and opener brands with complete parts inventory.
          </p>
        </div>

        {/* Colorful Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {supportedBrands.map((brand, index) => {
            const scheme = brandColorSchemes[index % brandColorSchemes.length];
            return (
              <Card
                key={index}
                className={`
                  bg-gradient-to-br ${scheme.from} ${scheme.to} 
                  text-white hover:scale-105 transform transition-all shadow-lg
                `}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-xl font-bold mb-2">{brand.name}</div>
                  <p className="text-sm opacity-90">{brand.specialty}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Complete Coverage */}
        <Card className="bg-red-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-inter font-semibold text-center text-yellow-300">
              Complete Brand Coverage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
              {brandCategories.map((category, idx) => {
                return (
                  <div key={idx}>
                    <h4 className={`font-semibold mb-3 text-yellow-300`}>
                      {category.category}
                    </h4>
                    <ul className="space-y-1 text-gray-200">
                      {category.brands.map((b, i) => (
                        <li key={i} className="hover:text-green-500 transition-colors">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
