import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import SafetyWarning from "@/components/SafetyWarning";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import GateOpenerInfo from "@/components/GateOpener";
import AboutSection from "@/components/AboutSection";
import OlderModel from "@/components/OlderModel";
import ServicePrice from "@/components/pricing copy"
import ScrollToTop from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <Hero />
      {/* <TrustIndicators /> */}
      <AboutSection />
      <OlderModel />
      <GateOpenerInfo />
      {/* <Services /> */}
      {/* <Pricing /> */}
      {/* <SafetyWarning /> */}
      <ServicePrice />
      <ServiceAreas />
      <MapWithAddress
        contained
        title="New Garage Doors and Gates"
        addressLines={[
          "1339 26th St 101",
          "Santa Monica, CA 90404",
          "United States",
        ]}
        lat={34.026248}
        lng={-118.472792}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
