import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white section-padding">
      <div className="container-max">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional Garage Door Repair
            <span className="block text-3xl md:text-4xl mt-2 text-blue-200">
              in Rossmoor & Surrounding Areas
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            47+ Years Experience • 24/7 Service • One Year Warranty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-xl px-8 py-4">
              <a href="tel:310-915-4151">
                <i className="fas fa-phone mr-3"></i>
                Call Joseph Lucey: 310-915-4151
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white border-white/30 text-xl px-8 py-4"
            >
              <i className="fas fa-wrench mr-3"></i>
              View Services
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-blue-100">
            <div className="flex items-center">
              <i className="fas fa-clock mr-2"></i>
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-shield-alt mr-2"></i>
              <span>One Year Warranty</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt mr-2"></i>
              <span>Serving Rossmoor & Beyond</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
