// src/components/Footer.tsx
import React from "react";
import { Phone, Clock, Wrench } from "lucide-react";

// const phoneNumbers = ["3232705387","3107340910","8183513118"];
const phoneNumbers = [
    { number: "323.270.5387", primary: true },
    { number: "310.734.0910", primary: false },
    { number: "818.351.3118", primary: false }
  ];
  
export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-x-16">

            {/* Company Info */}
            <div className="max-w-prose space-y-2">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Wrench className="h-6 w-6" />
                Broken Garage Door Spring Repair
              </h3>
              <p className="text-gray-300">
                47+ years of expert garage door service in Los Angeles and Orange County. 
              </p>
              <p className="text-gray-300">
                We repair garage doors right the first time, ensuring customer satisfaction and long-lasting results.
              </p>

              <div className="text-accent font-semibold">Experienced • Genuine • Customer-Focused</div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                {phoneNumbers.map((phone, index) => (
                  <a 
                    key={phone.number}
                    href={`tel:${phone.number}`} 
                    className="block hover:text-secondary transition-colors flex items-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    ({phone.number.slice(0, 3)}) {phone.number.slice(3, 6)}{phone.number.slice(6)}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Our Other Sites</h4>
              <ul className="space-y-2 text-sm text-neutral-300">
                <li><a href="https://bestgaragedoor.com/" className="hover:text-primary transition-colors">Best Garage Door</a></li>
                <li><a href="https://geniedooropeners.com/" className="hover:text-primary transition-colors">Genie Door Opener</a></li>
                <li><a href="https://newgarageopener.com/" className="hover:text-primary transition-colors">New Garage Opener</a></li>
                <li><a href="https://newgaragedoorsprings.com/" className="hover:text-primary transition-colors">New Garage Door Springs</a></li>
                <li><a href="https://newgaragedoorsandgates.com/" className="hover:text-primary transition-colors">New Garage Doors and Gates</a></li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Hours
              </h4>
              <div className="space-y-2 text-gray-300">
                <div>Sunday - Saturday</div>
                <div className="text-accent">6:00AM - 10:00PM</div>
                <div className="text-sm text-yellow-300 mt-2">Call now: {' '}
                  
                </div>
                
                  <div className="text-red-300 mt-2">
                    <a href="tel:310-734-0910">
                    310-734-0910
                  </a>
                   {' '}/{' '}
                  <a href="tel:818-351-3118">
                    818-351-3118
                  </a>
                  </div>
                  <p>24/7 Emergency Service Available</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 www.brokengaragedoorsprings.com - All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
}
