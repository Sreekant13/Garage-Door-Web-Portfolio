// src/components/Awards.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import JosephImg from "@/assets/images/Joseph1.png";

const currentYear = new Date().getFullYear();
// 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
const foundingYear = 1979;
const yearsInBusiness = currentYear - foundingYear + 1;

export default function Awards() {
  return (
    <section className="relative py-16 bg-purple-400">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Award-Winning Service
          </h2>
          <div className="flex justify-center mb-4">
            <span className="block w-20 h-1 bg-genie-red rounded-full"></span>
          </div>
          <p className="text-lg text-gray-600">
            Recognized for excellence in garage door repair services
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-tr from-green-50 via-white to-red-50 border border-gray-200 rounded-3xl shadow-xl overflow-hidden">
            <CardContent className="grid md:grid-cols-2 gap-8 items-center px-6 py-10 md:px-12 md:py-12">
              
              {/* Image */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={JosephImg}
                  alt="Professional technician with tools"
                  className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Details */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-genie-red/20 rounded-full">
                    <Trophy className="text-genie-red w-6 h-6" />
                  </div>
                  <h3 className="ml-4 text-2xl md:text-3xl font-bold text-gray-900">
                    <strong>{currentYear}</strong> Award Winner
                  </h3>
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <span className="font-semibold">www.garagedooryellowpages.com </span>  
                  <strong>{currentYear}</strong> Award for the Most Qualified Garage Door Repair Company in Los Angeles goes to:
                </p>
                <p className="text-xl md:text-2xl font-extrabold text-genie-red mb-4">
                  Best Garage Door
                </p>
                <p className="text-gray-600">
                  Visit them at{" "}
                  <a
                    href="http://www.bestgaragedoor.com"
                    className="text-genie-red font-medium hover:underline"
                  >
                    www.bestgaragedoor.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Optional decorative accent */}
      <div className="hidden md:block absolute top-0 right-0 -mt-20 -mr-20">
        {/* insert an SVG blob or other decorative element here */}
      </div>
    </section>
  );
}
