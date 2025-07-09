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
import Warning from "@/components/Warning";
import Warning2 from "@/components/Warning2";
import MapWithAddress from "@/components/MapWithAddress";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <Hero />
      <AboutSection />
      <Warning2 />
      <Warning />
      
      {/* <Gallery /> */}
      {/* <Advise /> */}
      <ServicePrice />
      <WhyChooseUs />
      <ServiceAreas />
      <Contact />
      <MapWithAddress
        contained
        title="Joe Lucey Garage Door and Company"
        addressLines={[
          "3103 Isabel Drive",
          "Los Angeles, CA 90065",
          "United States",
        ]}
        lat={34.10368}
        lng={-118.23297}
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
