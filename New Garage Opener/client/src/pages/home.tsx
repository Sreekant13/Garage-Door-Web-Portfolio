import { useEffect } from "react";
import DailyBanner from "@/components/daily-banner";
import Hero from "@/components/hero";
import ProductShowcase from "@/components/product-showcase";
import Services from "@/components/services";
import FAQ from "@/components/faq";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingCallButton from "@/components/floating-call-button";
import OlderModels from "@/components/OlderModel";
import Header from "@/components/header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";

export default function Home() {
  useEffect(() => {
    document.title = "New 2025 Garage Door Openers - 47 Years Trusted Service | NewGarageOpener.com";
    
    const metaDescription = document.createElement("meta");
    metaDescription.name = "description";
    metaDescription.content = "Professional garage door opener installation in Los Angeles. New 2025 Genie, Chamberlain & LiftMaster models starting at $660. 47 years experience. Call 323-270-5387";
    document.head.appendChild(metaDescription);

    return () => {
      document.head.removeChild(metaDescription);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">

      <Header />
      <MouseTrail />
      <DailyBanner />
      <Hero />
      <ProductShowcase />
      <OlderModels/>
      <Services />
      <FAQ />
      <Testimonials />
      <Contact />
      <MapWithAddress
        contained
        title="New Garage Door Opener"
        addressLines={[
          "3103 Isabel Drive",
          "Los Angeles, CA 90065",
          "United States",
        ]}
        lat={34.0522}
        lng={-118.2437}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />
      <Footer />
      <ScrollToTopButton />
      <FloatingCallButton />
    </div>
  );
}
