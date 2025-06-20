import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import EmergencyBanner from "@/components/emergency-banner";
import ServiceAreas from "@/components/service-areas";
import BrandsModels from "@/components/brands-models";
import WarrantyGuarantee from "@/components/warranty-guarantee";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import FloatingPhone from "@/components/floating-phone";
import MapWithAddress from "@/components/MapWithAddress";
import MouseTrail from "@/components/MouseTrail";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <HeroSection />
      <ServicesOverview />
      <EmergencyBanner />
      <ServiceAreas />
      <BrandsModels />
      <WarrantyGuarantee />
      {/* 🌈 Colorful background wrapper for Map section */}
      <div className="relative py-16">
        {/* Page-level gradient background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_10%,rgba(56,189,248,0.20),transparent_55%),radial-gradient(900px_circle_at_85%_25%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(900px_circle_at_40%_90%,rgba(244,63,94,0.14),transparent_55%)]" />
        <div className="absolute inset-0 -z-10 bg-white/45 backdrop-blur-2xl" />

        <MapWithAddress
          contained
          title="Garage Door Repair Hollywood Hills"
          addressLines={[
            "1865 North Fuller Ave 207 Hollywood Hills",
            "Los Angeles, CA 90046",
            "United States",
          ]}
          lat={34.105169}
          lng={-118.349183}
          zoom={16}
          phone="323-270-5387"
          hours="Monday - Sunday, 6:00 AM - 10:00 PM"
          emergencyService="Available 24/7"
          className="mt-0"
        />
      </div>
      {/* <ContactForm /> */}
      <Footer />
      <FloatingPhone />
    </div>
  );
}
