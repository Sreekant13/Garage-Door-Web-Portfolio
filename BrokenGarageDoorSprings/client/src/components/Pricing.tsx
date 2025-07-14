// src/components/PricingSection.tsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const pricing = [
  {
    brand: "Chamberlain ½ HP",
    type: "Chain Drive",
    price: "$770",
    features: ["Tax & Installation Included", "2 Remote Controls"],
    color: "from-blue-200 to-blue-300",
  },
  {
    brand: "Chamberlain ½ HP",
    type: "Belt Drive",
    price: "$740",
    features: ["Tax & Installation Included", "2 Remote Controls"],
    color: "from-purple-200 to-purple-300",
  },
  {
    brand: "Genie ½ HP",
    type: "Belt Drive",
    price: "$660",
    features: ["Tax & Installation Included", "2 Remote Controls"],
    color: "from-green-200 to-green-300",
  },
  {
    brand: "Genie 1¼ HP",
    type: "Belt Drive",
    price: "$770",
    features: ["Tax & Installation Included", "2 Remote Controls"],
    premium: true,
    color: "from-yellow-200 to-yellow-300",
  },
];

export default function PricingSection() {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-gray-700">
            No hidden fees - includes tax, installation, and 2 remote controls
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricing.map((item, idx) => (
            <Card
              key={idx}
              className={
                `bg-gradient-to-br ${item.color} border-0 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 relative overflow-hidden`
              }
            >
              {item.premium && (
                <Badge className="absolute top-4 right-4 bg-purple-600 text-white uppercase text-xs py-1 px-2 shadow-md">
                  Premium
                </Badge>
              )}
              <CardContent className="p-8 text-center">
                <div className="text-lg font-semibold text-gray-800 mb-2">{item.brand}</div>
                <div className="text-sm text-gray-600 mb-4">{item.type}</div>
                <div className="text-4xl font-bold mb-4 text-gray-900">{item.price}</div>
                <div className="space-y-3 mb-6">
                  {item.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center justify-center gap-2 text-gray-800">
                      <CheckCircle className="h-5 w-5 text-gray-900" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-4 inline-block bg-white text-red-500 font-bold py-2 px-6 rounded-full shadow hover:bg-gray-100 transition">
                  Call now: {' '}
                  <a href="tel:310-734-0910">
                    310-734-0910
                  </a>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
