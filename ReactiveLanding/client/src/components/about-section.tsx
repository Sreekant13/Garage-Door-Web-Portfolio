import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const highlights = [
    {
      icon: "fas fa-award",
      title: "47+ Years Experience",
      description: "Nearly five decades of professional garage door service"
    },
    {
      icon: "fas fa-shield-alt", 
      title: "One Year Warranty",
      description: "Full warranty on all new parts and installations"
    },
    {
      icon: "fas fa-clock",
      title: "24/7 Service", 
      description: "Emergency repairs available around the clock"
    },
    {
      icon: "fas fa-dollar-sign",
      title: "Free Estimates",
      description: "No-obligation price quotes over the phone"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional garage door repair service" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">About Joseph Lucey</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                With over <strong className="text-primary">47 years of experience</strong> in garage door repair and installation, 
                Joseph Lucey has been the trusted name in Rossmoor and surrounding areas.
              </p>
              <p>
                I've been working in the garage door industry since the 1970s, and anyone who lives in the area 
                knows the quality work I provide. I take pride in being recognized as one of the most reliable 
                garage door companies serving the community.
              </p>
              <p>
                My truck is fully stocked with parts for both new and vintage garage door openers, ensuring 
                I can handle any repair on the spot. From simple adjustments to complete door replacements, 
                I deliver professional results every time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {highlights.map((highlight, index) => (
                <Card key={index} className="shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <i className={`${highlight.icon} text-primary text-2xl mr-3`}></i>
                      <h3 className="text-lg font-semibold">{highlight.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
