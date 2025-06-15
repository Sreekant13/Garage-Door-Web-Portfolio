import { Card, CardContent } from "@/components/ui/card";

export default function BrandsSection() {
  const majorBrands = [
    { name: "GENIE", description: "Complete line of openers" },
    { name: "LIFTMASTER", description: "Professional grade" },
    { name: "CHAMBERLAIN", description: "Reliable & durable" },
    { name: "CRAFTSMAN", description: "Trusted quality" },
    { name: "CLOPAY", description: "Door specialists" },
    { name: "WAYNE DALTON", description: "Premium doors" }
  ];

  const brandDetails = [
    {
      title: "Genie Models",
      description: "We service all Genie models including:",
      models: [
        "GS980, Genie 9800, 880",
        "Genie 8800, PRO series",
        "Excelerator, Stealth models",
        "Chain, belt, and screw drive"
      ]
    },
    {
      title: "LiftMaster Models", 
      description: "Current and legacy LiftMaster models:",
      models: [
        "8355W, 8550WLB, 8155W",
        "3800, 3850, 3840 series",
        "3280, 3275, 3265 models",
        "Professional series"
      ]
    },
    {
      title: "Other Brands",
      description: "Additional manufacturers we work with:",
      models: [
        "Marantec, Stanley, Sears",
        "Crusader, Automatic Doorman",
        "Martin, American, Holmes",
        "CHI Doors, Amarr"
      ]
    }
  ];

  return (
    <section id="brands" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Brands We Service</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with all major garage door and opener manufacturers, carrying parts for both new and vintage models.
          </p>
        </div>
        
        {/* Major Brands */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {majorBrands.map((brand, index) => (
            <div key={index} className="text-center">
              <div className="bg-muted rounded-lg p-6 mb-3 hover:bg-muted/80 transition-colors duration-200">
                <div className="text-2xl lg:text-3xl font-bold text-primary">{brand.name}</div>
              </div>
              <p className="text-sm text-muted-foreground">{brand.description}</p>
            </div>
          ))}
        </div>
        
        {/* Detailed Brand Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandDetails.map((detail, index) => (
            <Card key={index} className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">{detail.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{detail.description}</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {detail.models.map((model, modelIndex) => (
                    <li key={modelIndex}>• {model}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
