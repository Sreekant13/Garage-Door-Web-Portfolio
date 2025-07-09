// src/components/Footer.tsx
import { DoorOpen, Facebook, Twitter, Linkedin, Youtube, Phone } from "lucide-react";
import { Link, useLocation } from "wouter"; // ← add useLocation


export default function Footer() {
  const [location, setLocation] = useLocation();

  const scrollToSectionOnHome = (sectionId: string) => {
    const headerEl = document.querySelector("header") as HTMLElement | null;
    const el = document.getElementById(sectionId);
    if (!el) return;
    const headerH = headerEl ? headerEl.getBoundingClientRect().height : 0;
    const top = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const goTo = (sectionId: string) => {
    const onHome = window.location.pathname === "/";
    if (onHome) {
      scrollToSectionOnHome(sectionId);
    } else {
      // navigate to Home with hash; Home page effect will perform the offset scroll
      setLocation(`/#${sectionId}`);
    }
  };

  const otherSites = [
    { href: "https://bestgaragedoor.com/", label: "Best Garage Door" },
    { href: "https://newgarageopener.com/", label: "New Garage Opener" },
    { href: "https://geniedooropeners.com/", label: "Genie Door Opener" },
    { href: "https://newgaragedoorsprings.com/", label: "New Garage Door Springs" },
    { href: "https://repairbrokengaragedoor.com/", label: "Repair Broken Garage Door" },
    { href: "https://www.dasma.com/our-members/", label: "Our Members - Dasma" },  
  ];

  const navSections = [
    { id: 'hero',     label: 'Home' },
    { id: 'about',    label: 'About' },
    { id: 'advise', label: 'Expert Advices' },
    { id: 'pricing',  label: 'Service Pricing' },
    { id: 'whychooseus',  label: 'Why Us?' },
    // { id: 'areas',    label: 'Service Areas' },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-100 py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding & Socials */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-primary p-3 rounded-full">
              <DoorOpen className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold">Pro Garage Doors</h3>
          </div>
          <p className="text-gray-400">
            Expert garage door repair, installation, and maintenance in LA County.
          </p>
          <div className="flex space-x-3 mt-2">
            {[
              { icon: Facebook, url: "https://facebook.com/joseph.lucey.3" },
              { icon: Youtube, url: "https://youtu.be/xLNKkaHUMfU" },
              { icon: Linkedin, url: "https://linkedin.com/in/joseph-lucey-3046a590" },
              // { icon: Twitter, url: "#" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="bg-gray-700 p-2 rounded-full hover:bg-primary transition-colors"
              >
                <social.icon className="text-white" size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navSections.map((sec) => (
              <li key={sec.id}>
                <button
                  onClick={() => goTo(sec.id)}                 // ← use route-or-scroll
                  className="hover:text-primary transition-colors"
                >
                  {sec.label}
                </button>
              </li>
            ))}
            {/* Route link to standalone page */}
            <li>
              <Link href="/service-areas" className="hover:text-primary transition-colors">
                Service Areas
              </Link>
            </li>
            {/* Optional: Blog index */}
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Other Sites */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Our Other Sites</h4>
          <ul className="space-y-2 text-sm">
            {otherSites.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Emergency Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Emergency Contact</h4>
          <a
            href="tel:3232705387"
            className="flex items-center space-x-3 bg-primary px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors"
          >
            <Phone className="text-white" size={20} />
            <span className="font-bold">323-270-5387</span>
          </a>
          <p className="text-gray-400">Available 24/7 for urgent repairs.</p>
          <p className="text-xs text-gray-500 mt-6">
            © 2018-{new Date().getFullYear()} Sectional Garage Door Springs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
