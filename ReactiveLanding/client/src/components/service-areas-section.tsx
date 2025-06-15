import { Button } from "@/components/ui/button";

export default function ServiceAreasSection() {
  const losAngelesAreas = [
    "Beverly Hills", "Long Beach", "Bellflower", "Cerritos",
    "Norwalk", "Paramount", "Lakewood", "Downey",
    "Compton", "Gardena", "Hawthorne", "Inglewood",
    "El Segundo", "Culver City", "Glendale", "Burbank"
  ];

  const orangeCountyAreas = [
    "Seal Beach", "Los Alamitos", "Cypress", "Buena Park",
    "Fullerton", "Anaheim", "Garden Grove", "Westminster",
    "Huntington Beach", "Fountain Valley", "Costa Mesa", "Santa Ana",
    "Orange", "Tustin", "Placentia", "Yorba Linda"
  ];

  return (
    <section id="areas" className="section-padding bg-primary text-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Service Areas</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Proudly serving Rossmoor and surrounding communities in Los Angeles and Orange County
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-100">Los Angeles County</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                {losAngelesAreas.slice(0, 8).map((area, index) => (
                  <li key={index}>• {area}</li>
                ))}
              </ul>
              <ul className="space-y-2">
                {losAngelesAreas.slice(8).map((area, index) => (
                  <li key={index}>• {area}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-100">Orange County</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2">
                {orangeCountyAreas.slice(0, 8).map((area, index) => (
                  <li key={index}>• {area}</li>
                ))}
              </ul>
              <ul className="space-y-2">
                {orangeCountyAreas.slice(8).map((area, index) => (
                  <li key={index}>• {area}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-blue-100 mb-6">Don't see your city? Call us - we may still service your area!</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
            <a href="tel:310-915-4151">
              <i className="fas fa-phone mr-3"></i>
              Check Service Availability
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
