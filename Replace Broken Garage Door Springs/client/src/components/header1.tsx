// src/components/Header.tsx
import { useState } from "react";
import { Home, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Header() {
  const [, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      setLocation("/"); // go to home
      return;
    }
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    // { label: "Services", id: "services" },
    { label: "Pricing", id: "pricing" },
    { label: "Technical Specs", id: "tspecs" },
    { label: "Brands", id: "brands" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-purple-600 to-purple-800 text-white shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-white" />
            <h1 className="text-xl font-bold">Valley Garage Door</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-purple-200 transition-colors"
              >
                {item.label}
              </Button>
            ))}

            {/* Phone CTA as a vibrant gradient pill */}
            <Button asChild size="sm">
              <a
                href="tel:818-351-3131"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>818-351-3131</span>
              </a>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-purple-200"
            onClick={() => setMobileMenuOpen((o) => !o)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-gradient-to-r from-purple-600 to-purple-800 border-t border-purple-700">
            <div className="container mx-auto flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                  className="justify-start text-white hover:text-purple-200 transition-colors"
                >
                  {item.label}
                </Button>
              ))}

              <Button asChild size="lg" className="mt-2">
                <a
                  href="tel:818-351-3131"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>818-351-3131</span>
                </a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      {/* spacer so page content sits below the fixed header */}
      <div className="h-16" />
    </>
  );
}
