import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advise from "@/components/Advise";
import ServiceAreas from "@/components/ServiceAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import ServicePrice from "@/components/Pricing";
import ScrollToTop from "@/components/ScrollToTopButton";
import MouseTrail from "@/components/MouseTrail";
import WhyChooseUs from "@/components/WhyChooseUs";
import Gallery from "@/components/Gallery";
import Coupons from "@/components/Coupons";
import TuneUpPromo from "@/components/TuneUpPromo";
import BlogTeasers from "@/components/BlogTeasers";
import ServicesSummary from "@/components/ServicesSummary";
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Home() {
  useEffect(() => {
    const scrollFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const headerEl = document.querySelector("header");
      const el = document.getElementById(id);
      if (!el) return;
      const headerHeight = headerEl
        ? (headerEl as HTMLElement).getBoundingClientRect().height
        : 0;
      const top =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    };
    scrollFromHash();
    window.addEventListener("hashchange", scrollFromHash);
    return () => window.removeEventListener("hashchange", scrollFromHash);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Page-specific SEO */}
      <Helmet>
        <title>Garage Door Repair Los Angeles | Sectional Garage Door Springs | 47+ Years</title>
        <meta
          name="description"
          content="Same-day garage door repair, spring replacement, and opener installs across Los Angeles, SFV, Westside & OC. 47+ years experience. Call Joseph Lucey at 323-270-5387."
        />
        <link rel="canonical" href="https://sectionalgaragedoorsprings.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Garage Door Repair Los Angeles | Sectional Garage Door Springs" />
        <meta property="og:description" content="Same-day repair, spring replacement, opener installs. Call 323-270-5387." />
        <meta property="og:url" content="https://sectionalgaragedoorsprings.com/" />
        <meta property="og:image" content="https://sectionalgaragedoorsprings.com/og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Garage Door Repair Los Angeles | 47+ Years" />
        <meta name="twitter:description" content="Same-day repair & spring replacement. Call 323-270-5387." />
        <meta name="twitter:image" content="https://sectionalgaragedoorsprings.com/og.jpg" />
      </Helmet>

      <Header />
      <MouseTrail />
      <Hero />
      <AboutSection />
      <TuneUpPromo />
      <Gallery />
      <Advise />
      <ServicePrice />
      <Coupons />
      <BlogTeasers />
      <WhyChooseUs />
      <ServicesSummary />
      <Contact />
      <ScrollToTop />
      <Footer />
    </div>
  );
}
