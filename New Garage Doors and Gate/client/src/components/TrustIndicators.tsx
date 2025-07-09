import { Award, Clock, Shield, Wrench } from "lucide-react";

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Award,
      title: "41+ Years",
      subtitle: "Experience",
      color: "bg-accent",
    },
    {
      icon: Clock,
      title: "Same Day",
      subtitle: "Service Available",
      color: "bg-secondary",
    },
    {
      icon: Shield,
      title: "Licensed",
      subtitle: "& Insured",
      color: "bg-primary",
    },
    {
      icon: Wrench,
      title: "Emergency",
      subtitle: "Repairs 24/7",
      color: "bg-warning",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            return (
              <div key={index} className="p-6">
                <div className={`${indicator.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-gray-600">{indicator.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
