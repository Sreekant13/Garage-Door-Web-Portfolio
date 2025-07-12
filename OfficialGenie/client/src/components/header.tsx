// src/components/Header.tsx
import React, { useState } from 'react';
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'History' },
  { id: 'products', label: 'Models' },
  { id: 'specialoffer', label: 'Service Offer' },
  { id: 'areas',    label: 'Service Areas' },
  { id: 'contact',  label: 'Contact' },
  { id: 'footer',   label: 'Other Sites' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // close menu when a nav link is clicked
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-genie-red text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              GENIE AUTHORISED GARAGE DOOR DEALER
            </h1>
            <p className="text-sm md:text-base opacity-90">
              Genuine Dealer for Los Angeles, San Fernando Valley & Orange County
            </p>
          </div>
          {/* mobile hamburger */}
          <button
            className="md:hidden ml-4 focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Nav links */}
        <nav
          className={`
            w-full md:w-auto
            md:flex md:items-center
            ${menuOpen ? 'block' : 'hidden'}
            mt-4 md:mt-0
          `}
        >
          <div className="flex flex-col md:flex-row md:space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                asChild
                variant="secondary"
                size="sm"
                className="bg-transparent hover:bg-white/20 text-white hover:text-genie-red font-medium mb-2 md:mb-0"
              >
                <a href={`#${item.id}`} onClick={handleNavClick}>
                  {item.label}
                </a>
              </Button>
            ))}
          </div>
        </nav>

        {/* Contact Button */}
        <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="bg-white text-genie-red hover:bg-gray-100 font-bold w-full md:w-auto"
          >
            <a href="tel:323-270-5387">
              <Phone className="mr-2 h-4 w-4 inline-block" />
              323-270-5387
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
