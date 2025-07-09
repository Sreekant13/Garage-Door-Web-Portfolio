// src/pages/service-areas.tsx
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceAreas from "@/components/ServiceAreas";
// pages/service-areas.tsx
import { Helmet } from "react-helmet-async";



export default function ServiceAreasPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
        <Helmet>
        <title>Garage Door Service Areas | Los Angeles, SFV, Westside & OC | 47+ Years</title>
        <meta
          name="description"
          content="We provide same-day garage door repair, spring replacement, and opener installs across Los Angeles, San Fernando Valley, Westside, and Orange County. Call Joseph Lucey at 323-270-5387."
        />
        <link rel="canonical" href="https://sectionalgaragedoorsprings.com/service-areas" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Garage Door Service Areas | 47+ Years Experience" />
        <meta property="og:description" content="Serving Los Angeles, SFV, Westside & OC. Same-day repair and spring replacement." />
        <meta property="og:url" content="https://sectionalgaragedoorsprings.com/service-areas" />
        <meta property="og:image" content="https://sectionalgaragedoorsprings.com/og-service-areas.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Garage Door Service Areas | 47+ Years" />
        <meta name="twitter:description" content="Same-day repair, spring replacement & opener installs. Call 323-270-5387." />
        <meta name="twitter:image" content="https://sectionalgaragedoorsprings.com/og-service-areas.jpg" />
      </Helmet>
      <Header />
      <main className="bg-gray-50">
        {/* <section className="max-w-6xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center">
            Service Areas
          </h1>
          <p className="mt-3 text-center text-gray-600">
            Proudly serving Los Angeles, Westside, San Fernando Valley, and Orange County.
          </p>
        </section> */}

        {/* Reuse your existing grid/list/map from the component */}
        <ServiceAreas />
      </main>
      <Footer />
    </div>
  );
}
