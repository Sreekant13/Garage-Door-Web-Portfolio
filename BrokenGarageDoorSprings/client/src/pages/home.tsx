import MouseTrail from "../components/MouseTrail";
import Header from "@/components/Header";
import HeroSection from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import PricingSection from "@/components/Pricing";
import TroubleshootingSection from "@/components/Troubleshooting";
import ServiceAreas from "@/components/ServiceArea";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import SocialGraphic from "@/components/SloganGraphic";
import AboutSection from "@/components/About";
import SpringsSection from "@/components/SpringsSection";
import Products from "@/components/Products";
import MapWithAddress from "@/components/MapWithAddress";

export default function Home() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <SocialGraphic />
      <AboutSection />
      {/* <SpringsSection /> */}
      {/* <HeroSection /> */}
      <ServicesOverview />
      <Products />
      {/* <TroubleshootingSection />     */}
      <PricingSection />  
      <ServiceAreas />
      <MapWithAddress
        contained
        title="Our Location"
        addressLines={[
          "1815 Hawthorne Blvd",
          "Redondo Beach, CA 90278",
          "United States",
        ]}
        lat={33.870803}
        lng={-118.367772}
        zoom={16}
        phone="310-734-0910"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Same Day Service"
        className="mt-8"
      />
      {/* <WhyChooseUs /> */}
      <Footer />
      
    </div>
  );
}
