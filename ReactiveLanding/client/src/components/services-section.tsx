import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-tools",
      title: "Garage Door Repair",
      description: "Expert repair services for all types of garage doors. From noisy doors to complete breakdowns, we fix it all.",
      features: [
        "Broken panel replacement",
        "Track alignment",
        "Weather seal repair",
        "Emergency repairs"
      ]
    },
    {
      icon: "fas fa-compress-arrows-alt",
      title: "Spring Replacement",
      description: "Professional spring replacement and repair for both torsion and extension springs.",
      features: [
        "Torsion spring repair",
        "Extension spring replacement",
        "Cable repair",
        "Safety inspections"
      ]
    },
    {
      icon: "fas fa-cog",
      title: "Opener Installation",
      description: "New 2025 model garage door opener installation and repair for all major brands.",
      features: [
        "New opener installation",
        "Remote programming",
        "Safety sensor setup",
        "Opener maintenance"
      ]
    },
    {
      icon: "fas fa-door-open",
      title: "New Door Installation",
      description: "Complete garage door installation with aluminum, steel, wood, and glass options.",
      features: [
        "Aluminum doors",
        "Steel sectional doors",
        "Custom wood doors",
        "Glass modern doors"
      ]
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Maintenance Service",
      description: "Regular maintenance to keep your garage door running smoothly and prevent costly repairs.",
      features: [
        "Lubrication service",
        "Safety inspections",
        "Part adjustments",
        "Preventive care"
      ]
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "24/7 Emergency Service",
      description: "Round-the-clock emergency repair service for urgent garage door problems.",
      features: [
        "24/7 availability",
        "Same-day service",
        "Emergency repairs",
        "Fast response time"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete garage door solutions for residential and commercial properties. 
            Fast, reliable, and affordable repairs with guaranteed satisfaction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-primary text-4xl mb-4">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="tel:310-915-4151">
              <i className="fas fa-phone mr-3"></i>
              Get Free Estimate: 310-915-4151
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
