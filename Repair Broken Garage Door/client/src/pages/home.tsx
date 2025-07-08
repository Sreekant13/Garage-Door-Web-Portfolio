import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import TechnicalSpecs from "@/components/technical-specs";
import Brands from "@/components/brands";
import ServiceAreas from "@/components/service-areas";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import TechnicalSpecs2 from "@/components/TechnicalSpecs2";
import About from "@/components/about";
import DailyBanner from "@/components/daily-banner";
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      {/* <MouseTrail /> */}
      <DailyBanner />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <TechnicalSpecs />
      <TechnicalSpecs2 />
      <Brands />
      <ServiceAreas />
      <Contact />
      <MapWithAddress
        contained
        title="South Bay Garage Door"
        addressLines={[
          "20051 S Vermont Ave",
          "Torrance, CA 90502",
          "United States",
        ]}
        lat={33.849792}
        lng={-118.291882}
        zoom={16}
        phone="323-270-5387"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Available 24/7"
        className="mt-8"
      />
      <Footer />
    </div>
  );
}
