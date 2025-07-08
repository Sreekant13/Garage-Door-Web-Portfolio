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
      gradient: "from-blue-500 to-blue-400",
      icon: "text-blue-100",
      price: "text-blue-100",
      bullets: "bg-blue-100",
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
      gradient: "from-yellow-500 to-yellow-400",
      icon: "text-yellow-100",
      price: "text-yellow-100",
      bullets: "bg-yellow-100",
    },
  },
  {
    title: "Broken Springs",
    price: "", // we’ll replace with call-to-action
    description: "",
    features: [
      "Torsion spring replacement",
      "Extension spring replacement",
      "Safety cable installation",
      "Same day service available",
    ],
    icon: Wrench,
    scheme: {
      gradient: "from-red-600 to-red-500",
      icon: "text-red-100",
      price: "text-red-100",
      bullets: "bg-red-100",
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
            Service Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transparent rates, no surprises. We stock our trucks with all common parts.
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
                        href="tel:818-351-3131"
                        className="inline-block text-2xl font-bold underline hover:text-gray-200"
                      >
                        818-351-3131
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

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">
            All work is performed on-site—no shop visits required. Our professional
            team ensures a smooth, pleasant experience.
          </p>
          <Button
            size="lg"
            className="bg-primary text-white hover:bg-primary-light"
            onClick={scrollToContact}
          >
            Get Free Estimate
          </Button>
        </div>
      </div>
    </section>
  );
}
