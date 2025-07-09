// src/components/Pricing.tsx
import { Clock, AlertTriangle, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const pricingPlans = [
  {
    title: "Service Call",
    price: "$130",
    description: "Includes half-hour labor; most repairs done within that time.",
    features: [
      "Includes half hour labor",
      "Most repairs completed within that",
      "Diagnosis and estimate",
      "Mon – Sun (6AM–10PM)",
    ],
    icon: Clock,
    scheme: {
      gradient: "from-green-600 to-green-500",
      icon: "text-green-100",
      price: "text-green-100",
      bullets: "bg-green-100",
    },
  },
  {
    title: "After ½ Hour",
    price: "$80",
    description: "Every additional half-hour thereafter",
    features: [
      "$80 / half hour",
      "Emergency service",
      "Weekends & holidays",
      "24/7 availability",
    ],
    icon: AlertTriangle,
    scheme: {
      gradient: "from-red-600 to-red-500",
      icon: "text-red-100",
      price: "text-red-100",
      bullets: "bg-red-100",
    },
  },
  {
    title: "Broken Springs",
    price: "", // we’ll replace with call-to-action
    description: "",
    features: [
      "Broken Sectional Garage Door Springs: $145.00 to $285.00",
      "Broken One Piece Garage Door Springs: $105.00 to $275.00",
      "Torsion spring replacement available",
      "Extension spring replacement available",
    ],
    icon: Wrench,
    scheme: {
      gradient: "from-blue-500 to-blue-600",
      icon: "text-blue-100",
      price: "text-blue-100",
      bullets: "bg-blue-100",
    },
    isCallForPrice: true,
  },
];

export default function Pricing() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-inter font-bold text-gray-100 mb-4">
            Garage Door Service/Spring Repair Cost
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transparent rates, no surprises. We stock our trucks with all common parts.
          </p>
        </div>

        <div className="mt-12 text-left">
          <p className="text-gray-400 mb-4">
            GARAGE DOOR SPRINGS for a one piece garage door, or a sectional garage door, on average last 8 to 12 years. BROKEN GARAGE DOOR SPRINGS are caused by a varity of factors. When pouring the steel to make the wire for the springs all air bubbles may not escape causing the garage door spring wire to fault at a later date under pressure.
            {/* All work is performed on-site—no shop visits required. Our professional
            team ensures a smooth, pleasant experience. */}
          </p>
          <p className="text-gray-400 mb-4">
            When heat treating the garage door spring wire, the wire as it cools if there is any inconsistence in its cooling can cause a fault under pressure over time. Garage door springs when they break if they’re older the 5 years of age should all be replaced. Why? Because it is cheaper and more cost effective to replace the other springs then to pay for a second service call within a short period of time of the next spring breaking.
          </p>
          <p className="text-gray-400 mb-4">
            Broken Sectional garage door springs on average take between 30 minutes and 90 minutes depending on if there is one spring or two springs. The repair costs of broken sectional garage door springs with labor are between $145.00 to $285.00. Broken one piece garage door springs will range in price including labor $105.00 to $275.00 for standard garage door springs.
          </p>

        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => {
            const { gradient, icon, price, bullets } = plan.scheme;
            const Icon = plan.icon;

            return (
              <Card
                key={idx}
                className={`
                  bg-gradient-to-br ${gradient} text-white 
                  rounded-2xl overflow-hidden shadow-lg
                  transform hover:scale-105 transition duration-300
                  border-0
                `}
              >
                <CardHeader className="bg-transparent pt-8 flex flex-col items-center">
                  <div
                    className={`
                      ${plan.scheme.icon} bg-white/20 p-4 rounded-full 
                      inline-flex mb-4 drop-shadow-md
                    `}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  <CardTitle className="text-2xl font-inter font-semibold">
                    {plan.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-8 pt-4 bg-transparent">
                  {plan.isCallForPrice ? (
                    <div className="text-center mb-6">
                      <p className="text-lg mb-3">
                        Pricing varies: Please call for an immediate quote:
                      </p>
                      <a
                        href="tel:323-270-5387"
                        className="inline-block text-2xl font-bold underline hover:text-gray-200"
                      >
                        323-270-5387
                      </a>
                    </div>
                  ) : (
                    <div className="text-center mb-6">
                      <div className={`text-4xl font-bold ${price}`}>{plan.price}</div>
                      <p className="mt-2 text-sm">{plan.description}</p>
                    </div>
                  )}

                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className={`w-2 h-2 mr-3 mt-2 flex-shrink-0 rounded-full ${bullets}`}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
            );
            
          })}
                    
        </div>
          <div className="flex justify-center my-8">
          <Button
              size="lg"
              className="bg-green-600 text-white hover:bg-green-400"
              onClick={scrollToContact}
            >
              Get Free Estimate
          </Button> 
          </div>
        
      </div>
    </section>
  );
}
