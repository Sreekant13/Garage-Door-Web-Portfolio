import Header from "@/components/header";
import Hero from "@/components/hero";
import QuickContact from "@/components/quick-contact";
import Products from "@/components/products";
import PricingCalculator from "@/components/pricing-calculator";
import FAQ from "@/components/faq";
import ServiceAreas from "@/components/service-areas";
import ExperienceCounter from "@/components/experience-counter";
import Testimonials from "@/components/testimonials";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import OlderModels from "@/components/OlderModels";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import MapWithAddress from "@/components/MapWithAddress";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <MouseTrail />
      <Hero />
      {/* <QuickContact /> */}
      <Products />
      {/* <PricingCalculator /> */}
      <OlderModels />

      <ExperienceCounter />
      <Testimonials />
      <ServiceAreas />
      <FAQ />
      <ContactForm />
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
      <FloatingContact />
      <ScrollToTopButton />
    </div>
  );
}
