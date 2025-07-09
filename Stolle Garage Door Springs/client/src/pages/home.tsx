import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/ServicesPrice";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicePrice from "@/components/Pricing"
import ScrollToTop from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import WhyChooseUs from "@/components/WhyChooseUs";
import Warning from "@/components/Warning";
import Info from "@/components/info";
import MapWithAddress from "@/components/MapWithAddress";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <Hero />
      <AboutSection />
      {/* <Gallery /> */}
      
      <ServicePrice />
      <WhyChooseUs />
      <Warning />
      <Services />
      <ServiceAreas />
      <Info />
      <Contact />
            <MapWithAddress
        contained
        title="Stolle Garage Door Repair"
        addressLines={[
          "3651 Foothill Blvd",
          "La Crescenta, CA 91214",
          "United States",
        ]}
        lat={34.230998}
        lng={-118.250808}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
