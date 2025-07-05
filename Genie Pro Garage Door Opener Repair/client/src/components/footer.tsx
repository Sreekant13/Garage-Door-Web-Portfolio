// src/components/Footer.tsx
import { Wrench, Phone } from "lucide-react";

export default function Footer() {
  const services = [
    "New Installations",
    "Opener Repair",
    "Spring Replacement",
    "Maintenance",
    "Emergency Service",
  ];

  const phoneNumbers = [
    "323-270-5387",
    "310-915-4151",
    "818-351-3131",
    "562-506-1384",
  ];

  // combine your principal + additional areas into one list
  const allAreas = [
    "Los Angeles County",
    "San Fernando Valley",
    "Orange County",
    "Woodland Hills",
    "Beverly Hills",
    "Agoura Hills",
    "Alhambra",
    "Arcadia",
    "Artesia",
    "Avalon",
    "Azusa",
    "Baldwin Park",
    "Bell",
    "Bell Gardens",
    "Bellflower",
    "Bradbury",
    "Burbank",
    "Calabasas",
    "Cerritos",
    "Claremont",
    "Commerce",
    "Compton",
    "Covina",
    "Cudahy",
    "Culver City",
    "Diamond Bar",
    "Downey",
    "Duarte",
    "El Monte",
    "El Segundo",
    "Gardena",
    "Glendale",
    "Glendora",
    "Hawthorne",
    "Hermosa Beach",
    "Hidden Hills",
    "Huntington Park",
    "Industry",
    "Inglewood",
    "Irwindale",
    "La Cañada Flintridge",
    "La Habra Heights",
    "La Mirada",
    "La Puente",
    "La Verne",
    "Lakewood",
    "Lancaster",
    "Lawndale",
    "Lomita",
    "Long Beach",
    "Los Angeles",
    "Lynwood",
    "Malibu",
    "Manhattan Beach",
    "Maywood",
    "Monrovia",
    "Montebello",
    "Monterey Park",
    "Norwalk",
    "Palmdale",
    "Palos Verdes Estates",
    "Paramount",
    "Pasadena",
    "Pico Rivera",
    "Pomona",
    "Rancho Palos Verdes",
    "Redondo Beach",
    "Rolling Hills",
    "Rolling Hills Estates",
    "Rosemead",
    "San Dimas",
    "San Fernando",
    "San Gabriel",
    "San Marino",
    "Santa Clarita",
    "Santa Fe Springs",
    "Santa Monica",
    "Sierra Madre",
    "Signal Hill",
    "South El Monte",
    "South Gate",
    "South Pasadena",
    "Temple City",
    "Torrance",
    "Vernon",
    "Walnut",
    "West Covina",
    "West Hollywood",
    "Westlake Village",
    "Whittier",
    "Anaheim",
    "Brea",
    "Buena Park",
    "Costa Mesa",
    "Cypress",
    "Fountain Valley",
    "Fullerton",
    "Garden Grove",
    "Huntington Beach",
    "La Habra",
    "La Palma",
    "Los Alamitos",
    "Orange",
    "Placentia",
    "Santa Ana",
    "Seal Beach",
    "Stanton",
    "Tustin",
    "Villa Park",
    "Westminster",
    "Yorba Linda",
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & tagline */}
          <div>
            <div className="flex items-center mb-4">
              <Wrench className="text-primary text-2xl mr-3" />
              <div>
                <h3 className="text-xl font-bold">Genie Pro Repair</h3>
                <p className="text-gray-400 text-sm">47 Years Experience</p>
              </div>
            </div>
            <p className="text-gray-400">
              47 years of professional garage door opener installation and repair services in Los Angeles and surrounding areas.
            </p>
          </div>

          {/* Services list */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact numbers */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              {phoneNumbers.map((number) => (
                <li key={number}>
                  <a
                    href={`tel:${number}`}
                    className="flex items-center hover:text-yellow-500 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Areas We Serve</h4>
            <div className="h-48 overflow-y-auto pr-2">
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-400">
                {allAreas.map((area) => (
                  <li key={area} className="truncate">
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Genie Pro Garage Door Opener
            Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
