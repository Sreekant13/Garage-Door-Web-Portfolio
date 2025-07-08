// src/components/Services.tsx
import { DoorOpen, Settings, Wrench, Shield, AlertCircle, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: DoorOpen,
    title: "Garage Door Repair",
    description:
      "Complete garage door repair services including sectional doors, springs, cables, and hardware replacement.",
    features: [
      "Sectional door repair",
      "Panel replacement",
      "Track alignment",
      "Hardware replacement",
    ],
  },
  {
    icon: Settings,
    title: "Garage Door Openers",
    description: "Professional installation and repair of all major garage door opener brands.",
    features: ["Chain drive openers", "Belt drive openers", "Screw drive openers", "Smart openers"],
  },
  {
    icon: Wrench,
    title: "Spring Repair",
    description: "Expert spring repair and replacement services for torsion and extension springs.",
    features: ["Torsion springs", "Extension springs", "Safety cables", "Spring adjustment"],
  },
  {
    icon: AlertCircle,
    title: "Emergency Service",
    description: "24/7 emergency garage door repair services for urgent situations.",
    features: ["Same day service", "Emergency repairs", "Safety inspections", "Preventive maintenance"],
  },
  {
    icon: Shield,
    title: "Safety & Security",
    description: "Complete security solutions and safety system installations.",
    features: ["Photo eye sensors", "Remote controls", "Keypad systems", "Smart home integration"],
  },
  {
    icon: Award,
    title: "Professional Service",
    description: "Fully licensed and insured with over 47 years of experience.",
    features: ["47+ years experience", "Honest work with integrity", "Warranty included", "Fair pricing"],
  },
];

const colorSchemes = [
  { accent: "from-blue-800 to-blue-600", dot: "bg-blue-300" },
  { accent: "from-green-800 to-green-600", dot: "bg-green-300" },
  { accent: "from-yellow-700 to-yellow-500", dot: "bg-yellow-300" },
  { accent: "from-red-800 to-red-600", dot: "bg-red-300" },
  { accent: "from-teal-800 to-teal-600", dot: "bg-teal-300" },
  { accent: "from-purple-800 to-purple-600", dot: "bg-purple-300" },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-inter font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We provide fast reliable service at affordable rates with no sales pitch or gimmicks. Our garage door repair company can repair your garage door fast and affordably.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const scheme = colorSchemes[i % colorSchemes.length];
            const Icon = svc.icon;

            return (
              <Card
                key={i}
                className={`
                  bg-gradient-to-br ${scheme.accent} text-white
                  rounded-2xl shadow-lg
                  transform hover:scale-105 hover:shadow-2xl
                  transition-all duration-300
                  border-0
                `}
              >
                <CardHeader className="bg-transparent pt-8 flex flex-col items-center">
                  <Icon className="h-10 w-10 mb-4" />
                  <CardTitle className="text-2xl font-inter font-semibold">
                    {svc.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="bg-transparent px-6 pb-8 pt-4">
                  <p className="text-gray-200 mb-4">{svc.description}</p>
                  <ul className="space-y-2">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center text-gray-100">
                        <span
                          className={`inline-block w-2 h-2 mr-3 ${scheme.dot} rounded-full`}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
