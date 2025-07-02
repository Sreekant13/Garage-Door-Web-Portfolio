import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import BatteryInfo from "@/components/BatteryInfo";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingIcons from "@/components/FloatingIcons";
import OlderModels from "@/components/OlderModel";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <FloatingIcons />
      <Hero />
      <Products />
      <BatteryInfo />
      <OlderModels/>
      <Services />
      <FAQ />
      <Contact />
      <MapWithAddress
        contained
        title="Genie Garage Door Opener"
        addressLines={[
          "7135 Ramsgate Ave",
          "Los Angeles, CA 90045",
          "United States",
        ]}
        lat={33.960874}
        lng={-118.400452}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />
      <Footer />
      <ScrollToTopButton/>
    </div>
  );
}
