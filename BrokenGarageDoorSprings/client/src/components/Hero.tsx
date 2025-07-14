// src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Clock } from "lucide-react";

const phoneNumbers = [
    { number: "323.270.5387", primary: true },
    { number: "310.734.0910", primary: false },
    { number: "818.351.3118", primary: false }
  ];

export default function HeroSection() {
  return (
    <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Broken Garage Door Springs?
                <span className="block text-2xl md:text-3xl text-yellow-300 mt-2">Call Joseph Today!</span>
              </h1>
              <p className="text-xl mb-8 opacity-90">
                47 years of expert garage door repair service in Los Angeles & Orange County. 
                We repair garage doors right the first time!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                {phoneNumbers.map((phone, index) => (
                  <Button
                    key={phone.number}
                    asChild
                    className={`px-8 py-4 rounded-lg font-bold text-lg transition-colors text-center ${
                      phone.primary
                        ? "bg-secondary hover:bg-secondary/90 text-white phone-pulse"
                        : "bg-white text-primary hover:bg-gray-100"
                    }`}
                  >
                    <a href={`tel:${phone.number}`}>
                      <Phone className="h-5 w-5" />
                      ({phone.number.slice(0, 3)}) {phone.number.slice(3, 6)}{phone.number.slice(6)}
                    </a>
                  </Button>
                ))}
              </div>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Business Hours
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    <div>Monday - Saturday: 6:30AM - 10PM</div>
                    <div>Sunday: 7AM - 6PM</div>
                    <div className="col-span-2 mt-2 text-yellow-300">After hours: Leave a message</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Professional garage door technician working on springs" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">47 Years</div>
                <div className="text-sm">of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
