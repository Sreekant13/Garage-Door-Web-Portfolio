import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, DoorOpen, Wrench, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Settings,
      title: "Garage Door Springs",
      features: [
        "Torsion spring replacement",
        "Sectional door springs",
        "One-piece garage door springs",
        "Holmes, King, American brands",
      ],
      price: "$145 - $285",
      priceNote: "Including labor and parts",
      buttonText: "Get Quote",
      buttonClass: "bg-primary hover:bg-primary/90",
    },
    {
      icon: DoorOpen,
      title: "Garage Door Openers",
      features: [
        "Genie & Liftmaster openers",
        "Chain drive & belt drive",
        "Screw drive systems",
        "Professional installation",
      ],
      price: "$595 - $685",
      priceNote: "Including tax and installation",
      buttonText: "View Models",
      buttonClass: "bg-secondary hover:bg-secondary/90",
    },
    {
      icon: Wrench,
      title: "Garage Door Repair",
      features: [
        "Emergency repair service",
        "Cable & roller replacement",
        "Track alignment & repair",
        "Safety inspection",
      ],
      price: "$98",
      priceNote: "Service call + parts",
      buttonText: "Schedule Repair",
      buttonClass: "bg-accent hover:bg-accent/90",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive garage door solutions for residential and commercial properties throughout Santa Monica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className={`${index === 0 ? 'bg-primary' : index === 1 ? 'bg-secondary' : 'bg-accent'} p-4 rounded-lg w-16 h-16 mx-auto mb-6 flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="text-accent mt-1 mr-3 flex-shrink-0" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary mb-2">{service.price}</p>
                    <p className="text-gray-600 text-sm mb-4">{service.priceNote}</p>
                    <Button className={`${service.buttonClass} text-white w-full`}>
                      {service.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
