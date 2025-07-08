// src/components/ServiceAreas.tsx
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { serviceAreas } from "@/lib/data";
import { Link } from "wouter";

const colorSchemes = [
  { bg: "from-pink-400 to-pink-200", text: "text-pink-900", icon: "text-pink-600" },
  { bg: "from-yellow-400 to-yellow-200", text: "text-yellow-900", icon: "text-yellow-600" },
  { bg: "from-green-400 to-green-200", text: "text-green-900", icon: "text-green-600" },
  { bg: "from-blue-400 to-blue-200", text: "text-blue-900", icon: "text-blue-600" },
  { bg: "from-purple-400 to-purple-200", text: "text-purple-900", icon: "text-purple-600" },
  { bg: "from-teal-400 to-teal-200", text: "text-teal-900", icon: "text-teal-600" },
  { bg: "from-red-400 to-red-200", text: "text-red-900", icon: "text-red-600" },
  { bg: "from-indigo-400 to-indigo-200", text: "text-indigo-900", icon: "text-indigo-600" },
];

export default function ServiceAreas() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        {/* header… */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-inter font-bold text-gray-100 mb-4">
            Service Areas
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            We proudly serve the valley and surrounding areas for over 47 years.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {serviceAreas.map((rawArea, idx) => {
            const zipMatch = rawArea.match(/(\d{5})$/);
            const zip = zipMatch ? zipMatch[1] : "";
            const name = rawArea.replace(/,.*$/, "");
            const slug = name.replace(/\s+/g, "-");
            const url = `/Garage-Door-Repair-${slug}-${zip}`;

            const scheme = colorSchemes[idx % colorSchemes.length];

            return (
              <Link
                key={idx}
                href={url}
                className="block transform hover:scale-105 transition"
              >
                <Card className={`bg-gradient-to-br ${scheme.bg} text-white shadow-lg`}>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <MapPin className={`${scheme.icon} h-5 w-5 mr-3`} />
                      <span className={`font-medium ${scheme.text}`}>
                        {name} ({zip})
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
