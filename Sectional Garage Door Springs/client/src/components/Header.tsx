// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, DoorOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';


const currentYear = new Date().getFullYear();
// 2025 was the 47th year, so foundingYear = 2025 - 47 + 1 = 1979:
const foundingYear = 1979;
const yearsInBusiness = currentYear - foundingYear + 1;


// Navigation items
const navItems = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'advise', label: 'Expert Advices' },
  // { id: 'models',   label: 'Vintage Models' },
  // { id: 'partners', label: 'Partners' },
  { id: 'pricing',  label: 'Service Pricing' },
  { id: 'whychooseus',  label: 'Why Us?' },
  { id: 'areas',    label: 'Service Areas' },
  { id: 'contact',  label: 'Contact' },
  { id: 'footer',   label: 'Other Sites' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // auto-close mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const headerEl = document.querySelector('header');
    const targetEl = document.getElementById(sectionId);
    if (headerEl && targetEl) {
      const headerHeight = headerEl.getBoundingClientRect().height;
      const targetTop   = targetEl.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: targetTop - headerHeight,
        behavior: 'smooth',
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* fixed header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-r from-green-600 via-red-600 to-blue-600 shadow-xl">
        <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
              <DoorOpen className="text-white" size={28} />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-white drop-shadow">Pro Garage Doors</h1>
              <p className="text-xs text-white/80 uppercase tracking-widest">{' '}<strong>{(yearsInBusiness)}</strong>+ Years of Excellence</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map(item => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-green-500 transition-colors"
              >
                {item.label}
              </Button>
            ))}
            <Button asChild size="sm">
              <a
                href="tel:323-270-5387"
                className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>323-270-5387</span>
              </a>
            </Button>
          </nav>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(o => !o)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </header>

      {/* spacer so content starts below header */}
      <div className="h-20" />

      {/* fixed mobile menu overlay */}
      {mobileMenuOpen && (
        <nav className="fixed inset-x-0 top-20 z-40 bg-gradient-to-r from-green-600 to-green-800 border-t border-green-700 md:hidden">
          <div className="container mx-auto flex flex-col space-y-2 p-4">
            {navItems.map(item => (
              <Button
                key={item.id}
                variant="ghost"
                size="lg"
                onClick={() => scrollToSection(item.id)}
                className="justify-start text-white hover:text-green-200 transition-colors"
              >
                {item.label}
              </Button>
            ))}
            <Button asChild size="lg" className="mt-2">
              <a
                href="tel:323-270-5387"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 px-4 py-2 rounded-full text-white hover:from-yellow-500 hover:to-orange-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>323-270-5387</span>
              </a>
            </Button>
          </div>
        </nav>
      )}
    </>
  );
}
