import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      title: "Liftmaster 1/2 HP",
      subtitle: "Chain Drive Opener",
      price: "$595",
      features: [
        "2 remote controls included",
        "Professional installation",
        "Warranty included",
        "Safety features",
      ],
      buttonText: "Choose Chain Drive",
      popular: false,
    },
    {
      title: "Liftmaster 1/2 HP",
      subtitle: "Belt Drive Opener",
      price: "$630",
      features: [
        "Quieter operation",
        "2 remote controls included",
        "Professional installation",
        "Enhanced warranty",
      ],
      buttonText: "Choose Belt Drive",
      popular: true,
    },
    {
      title: "Liftmaster 3/4 HP",
      subtitle: "Belt Drive Opener",
      price: "$685",
      features: [
        "Heavy-duty performance",
        "Ultra-quiet operation",
        "2 remote controls included",
        "Premium warranty",
      ],
      buttonText: "Choose Heavy Duty",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees. Professional installation included with all opener purchases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? "bg-primary text-white border-primary"
                  : "bg-gray-50 border-gray-200 hover:border-primary"
              } transition-colors`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-semibold">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-8">
                <div className="text-center">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.title}
                  </h3>
                  <p className={`mb-4 ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                    {plan.subtitle}
                  </p>
                  <div className={`text-4xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm mb-6 ${plan.popular ? 'text-blue-200' : 'text-gray-600'}`}>
                    Including tax and installation
                  </p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check
                        className={`mr-3 ${plan.popular ? 'text-yellow-400' : 'text-accent'}`}
                        size={16}
                      />
                      <span className={plan.popular ? 'text-white' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full font-semibold ${
                    plan.popular
                      ? "bg-white text-primary hover:bg-gray-100"
                      : "bg-primary hover:bg-primary/90 text-white"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
