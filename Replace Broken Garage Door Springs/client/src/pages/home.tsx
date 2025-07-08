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
import PhotoGallery from "@/components/PhotoGallery";
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <DailyBanner />
      <Hero />
      <About />
      <Services />
      <PhotoGallery />
      <Pricing />
      {/* <TechnicalSpecs /> */}
      <TechnicalSpecs2 />
      <Brands />
      <ServiceAreas />
      <Contact />
      <MapWithAddress
        contained
        title="Professional Garage Door & Spring Repair"
        addressLines={[
          "12572 Monarch St",
          "Garden Grove, CA 92841",
          "United States",
        ]}
        lat={33.7850}
        lng={-117.9850}
        zoom={16}
        phone="813-351-3131"
        hours="Monday - Sunday, 6:00 AM - 10:00 PM"
        emergencyService="Same Day Service"
        className="mt-8"
      />
      <Footer />
    </div>
  );
}
