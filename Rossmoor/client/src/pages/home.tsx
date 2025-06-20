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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <EmergencyBanner />
      <ServiceAreas />
      <BrandsModels />
      <WarrantyGuarantee />
      <ContactForm />
      <Footer />
      <FloatingPhone />
    </div>
  );
}
