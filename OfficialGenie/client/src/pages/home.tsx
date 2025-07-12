import Header from "@/components/header";
import Hero from "@/components/hero";
import ServiceAreas from "@/components/service-areas";
import Products from "@/components/products";
import SpecialOffers from "@/components/special-offers";
import DealerDirectory from "@/components/dealer-directory";
import Awards from "@/components/awards";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import About from "@/components/about";
import SideBanner from "@/components/SideBanner";
import OlderModels from "@/components/OlderModel";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";
import Separate from "@/components/separate";


export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="pt-20">
      {/* <MouseTrail /> */}
      <Hero />
      <About />
      <Products />
      <OlderModels />
      <Separate />
      <SpecialOffers />
      <ServiceAreas />
      <DealerDirectory />
      <Awards />
      <Contact />
      <MapWithAddress
        contained
        title="Genuine Genie Dealer"
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
      <SideBanner />
      <ScrollToTopButton />
      <Footer />
      </main>
    </div>
  );
}
