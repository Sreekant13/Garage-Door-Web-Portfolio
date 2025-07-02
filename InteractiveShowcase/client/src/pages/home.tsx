// src/pages/index.tsx
import Navigation from "@/components/Header";
import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/StatsSection";
import ProductsShowcase from "@/components/products-showcase";
import PriceCalculator from "@/components/price-calculator";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ComplianceSection from "@/components/ComplianceSection";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/floating-elements";
import FloatingActionButton from "@/components/FloatingActionButton";
import Header from "@/components/Header"
import Contact from "@/components/Contact"
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <FloatingElements />
      <Header/>
      <MouseTrail />
      <HeroSection />
      {/* <StatsSection /> */}
      <ProductsShowcase />
      {/* <PriceCalculator /> */}
      <ServiceAreasSection />
      <ComplianceSection />
      <FaqSection />
      {/* <Contact /> */}
      <MapWithAddress
        contained
        title="New 2025 Garage Door Openers"
        addressLines={[
          "3103 Isabel Drive",
          "Los Angeles, CA 90065",
          "United States",
        ]}
        lat={34.10368}
        lng={-118.23297}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />
      <Footer />
      <FloatingActionButton />
    </div>
  );
}
