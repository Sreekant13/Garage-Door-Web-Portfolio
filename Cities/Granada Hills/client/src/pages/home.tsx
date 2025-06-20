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
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";

export default function Home() {
  return (
    <div className="min-h-screen min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <HeroSection />
      <ServicesOverview />
      <EmergencyBanner />
      <ServiceAreas />
      <BrandsModels />
      <WarrantyGuarantee />
      <MapWithAddress
        contained
        title="Garage Door Repair Granada Hills"
        addressLines={[
          "11541 Blucher Ave #137",
          "Los Angeles, CA 91344",
          "United States",
        ]}
        lat={34.279974}
        lng={-118.470168}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />
      {/* <ContactForm /> */}
      <Footer />
      <FloatingPhone />
    </div>
  );
}
