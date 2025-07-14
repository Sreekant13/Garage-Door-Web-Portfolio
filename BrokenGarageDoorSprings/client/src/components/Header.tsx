// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Wrench, CalendarDays } from "lucide-react";

const phoneNumbers = [
  { number: "323.270.5387", primary: true },
  { number: "310.734.0910", primary: false },
  { number: "818.351.3118", primary: false },
];

// src/components/Header.tsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Springs" },
  { id: "services", label: "Services Springs" },
  { id: "products", label: "Genie Opener Models" },
  { id: "areas", label: "Service Areas" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  React.useEffect(() => {
    // ensure anchor targets clear fixed header
    const header = document.querySelector("header");
    if (header) {
      const height = header.getBoundingClientRect().height;
      document.documentElement.style.scrollPaddingTop = `${height}px`;
    }
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const handleNavClick = () => setMenuOpen(false);

  // 🗓️ Pretty date for the calendar pill
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <header className="fixed top-0 left-0 right-0 bg-red-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-4 flex flex-wrap md:flex-nowrap items-center justify-between">
        {/* Logo / Title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              Broken Garage Door Springs
            </h1>
          </div>
          {/* mobile hamburger */}
          <button
            className="md:hidden ml-4 focus:outline-none focus:ring-2 focus:ring-white rounded"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Nav links */}
        <nav
          className={`
            w-full md:w-auto
            md:flex md:items-center
            ${menuOpen ? "block" : "hidden"}
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

        {/* Calendar + Contact */}
        <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            {/* Calendar pill */}
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-auto bg-red-700/40 border-red-200/70 text-white hover:bg-red-700 hover:border-red-100 rounded-2xl shadow-md"
            >
              <CalendarDays className="mr-2 h-4 w-4" />
              <span className="font-semibold tracking-tight">
                {formattedDate}
              </span>
            </Button>

            {/* Contact Button */}
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="bg-white text-red-400 hover:bg-gray-100 font-bold w-full md:w-auto rounded-2xl shadow-md"
            >
              <a href="tel:310-734-0910">
                <Phone className="mr-2 h-4 w-4 inline-block" />
                310-734-0910
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
