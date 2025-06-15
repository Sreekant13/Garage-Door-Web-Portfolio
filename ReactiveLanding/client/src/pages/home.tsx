import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import BrandsSection from "@/components/brands-section";
import ServiceAreasSection from "@/components/service-areas-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <BrandsSection />
      <ServiceAreasSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
