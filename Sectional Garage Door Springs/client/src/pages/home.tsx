import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advise from "@/components/Advise";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicePrice from "@/components/Pricing"
import ScrollToTop from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import MapWithAddress from "../components/MapWithAddress";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <Hero />
      <AboutSection />
      <Gallery />
      <Advise />
      <ServicePrice />
      <WhyChooseUs />
      <ServiceAreas />
      <MapWithAddress
        contained
        title="Sectional Garage Door Springs"
        addressLines={[
          "2290 Pepperwood Ave",
          "Long Beach, CA 90815",
          "United States",
        ]}
        lat={33.8279}
        lng={-118.3365}
        zoom={16}
        phone="562-506-1384"
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
