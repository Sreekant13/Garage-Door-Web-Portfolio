// src/components/Footer.tsx
import { Home, Phone, Clock, Shield, Facebook, Star, MapPin, Linkedin, Youtube } from "lucide-react";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="text-primary text-xl" />
              <h3 className="text-lg font-inter font-semibold">Garden Grove Spring Repair</h3>
            </div>
            <p className="text-neutral-300 text-sm mb-4">
              Professional garage door repair services with over 47 years of experience 
              serving the Orange County.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/joseph.lucey.3" className="text-neutral-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/joseph-lucey-3046a590" className="text-neutral-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtu.be/xLNKkaHUMfU" className="text-neutral-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Other Sites</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li><a href="https://bestgaragedoor.com/" className="hover:text-primary transition-colors">Best Garage Door</a></li>
              <li><a href="https://newgarageopener.com/" className="hover:text-primary transition-colors">New Garage Opener</a></li>
              <li><a href="https://newgaragedoorsandgates.com/" className="hover:text-primary transition-colors">New Garage Doors and Gates</a></li>
              <li><a href="https://newgaragedoorsprings.com/" className="hover:text-primary transition-colors">New Garage Door Springs</a></li>
              <li><a href="https://geniedooropeners.com/" className="hover:text-primary transition-colors">Genie Door Opener</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Brands</h4>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>LiftMaster</li>
              <li>Chamberlain</li>
              <li>Genie</li>
              <li>Sears Craftsman</li>
              <li>Stanley</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-neutral-300">
              <div className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                <span>818-351-3131</span>
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                <span>Sun–Sat: 6AM–10PM</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                <span>Orange County</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-700 mt-8 pt-8 text-center text-sm text-neutral-400">
          <p>
            &copy; 2010{currentYear > 2010 ? `–${currentYear}` : ""} Replace Broken Garage Door Springs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
