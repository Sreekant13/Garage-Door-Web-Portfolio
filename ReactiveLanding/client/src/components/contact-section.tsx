import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const whyChooseUs = [
    {
      icon: "fas fa-check-circle",
      title: "Fast & Reliable Service",
      description: "Same-day service available with parts on truck"
    },
    {
      icon: "fas fa-check-circle",
      title: "Experienced Technician", 
      description: "47+ years of professional garage door experience"
    },
    {
      icon: "fas fa-check-circle",
      title: "All Brands Serviced",
      description: "Genie, LiftMaster, Chamberlain, and more"
    },
    {
      icon: "fas fa-check-circle",
      title: "One Year Warranty",
      description: "Full warranty on all new parts and installations"
    },
    {
      icon: "fas fa-check-circle",
      title: "Free Phone Estimates",
      description: "Get pricing information before we arrive"
    },
    {
      icon: "fas fa-check-circle",
      title: "Emergency Service",
      description: "24/7 availability for urgent repairs"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to fix your garage door? Call Joseph Lucey for fast, reliable service with a one-year warranty.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="fas fa-phone text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:310-915-4151" className="text-xl hover:underline">310-915-4151</a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-clock text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p>24/7 Emergency Service</p>
                    <p className="text-sm opacity-90">7 Days a Week</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p>Rossmoor, CA & Surrounding Areas</p>
                    <p className="text-sm opacity-90">Los Angeles & Orange County</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-shield-alt text-2xl mr-4"></i>
                  <div>
                    <p className="font-semibold">Warranty</p>
                    <p>One Year on All New Parts</p>
                    <p className="text-sm opacity-90">Installation & Repairs</p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-blue-400 pt-6">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                    <i className="fab fa-youtube text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-muted/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Choose Us?</h3>
              
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <i className={`${item.icon} text-primary text-xl mr-3 mt-1`}></i>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90">
                  <a href="tel:310-915-4151">
                    <i className="fas fa-phone mr-3"></i>
                    Call Now: 310-915-4151
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
