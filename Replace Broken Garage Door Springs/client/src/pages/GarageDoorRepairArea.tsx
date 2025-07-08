import React, { useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "wouter";

import Header1 from "@/components/header1";
import About from "@/components/about";
import Pricing from "@/components/pricing";
import TechnicalSpecs2 from "@/components/TechnicalSpecs2";
import Brands from "@/components/brands";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function GarageDoorRepairArea() {
  const [location] = useLocation(); // e.g. "/Garage-Door-Repair-Agoura-Hills-91301"

  // Accept: /Garage-Door-Repair-<slug>-<zip> or with trailing slash
  const match = location.match(/^\/Garage-Door-Repair-(.*)-(\d{5})\/?$/);

  if (!match) {
    return <div className="p-8 text-center">Not found</div>;
  }

  // Decode in case someone URL-encodes spaces/etc.
  const rawSlug = decodeURIComponent(match[1]); // "Agoura-Hills"
  const zip = match[2];                          // "91301"
  const areaName = rawSlug.replace(/-/g, " ");   // "Agoura Hills"

  // Build canonical with your live domain in prod, current origin in dev
  const origin = import.meta.env.PROD
      ? "https://replacebrokengaragedoorsprings.com"
      : (typeof window !== "undefined" ? window.location.origin : "http://localhost:5000");

  const canonicalUrl = `${origin}/Garage-Door-Repair-${rawSlug}-${zip}`;

  const title = `Garage Door Repair in ${areaName} (${zip}) | 47+ Years | Valley Garage Door`;
  const desc  = `Same-day garage door repair in ${areaName} ${zip}. Springs, openers, doors. Call 323-270-5387.`;
  const ogImage = `${origin}/og.jpg`;

  // Scroll to top on route change (nice polish for SPA)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  // Per-city LocalBusiness/Service JSON-LD (helps local SEO)
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Garage Door Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Valley Garage Door & Spring Repair",
      "telephone": "+1-323-270-5387",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": `${areaName} ${zip}`
      },
      "url": origin
    },
    "areaServed": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": areaName,
        "addressRegion": "CA",
        "postalCode": zip,
        "addressCountry": "US"
      }
    },
    "url": canonicalUrl,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Garage Door Services",
      "itemListElement": [
        { "@type": "Offer", "name": "Spring Replacement" },
        { "@type": "Offer", "name": "Opener Installation" },
        { "@type": "Offer", "name": "Door Alignment & Repair" }
      ]
    }
  }), [areaName, zip, origin, canonicalUrl]);

  return (
    <div>
      {/* Fixed site header */}
      <Header1 />

      {/* SEO */}
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Garage Door Repair in ${areaName} (${zip})`} />
        <meta property="og:description" content={`Same-day repair in ${areaName}. 47+ years. Call 323-270-5387.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Garage Door Repair in ${areaName} (${zip})`} />
        <meta name="twitter:description" content={`Same-day repair in ${areaName}. 47+ years. Call 323-270-5387.`} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* City-specific intro */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Garage Door Repair in {areaName} ({zip})
          </h1>
          <p className="text-lg text-gray-600">
            Proudly serving {areaName} with fast, reliable, and affordable garage door service.
          </p>
        </div>
      </section>

      {/* Reused sections */}
      <About customTitle={`${areaName}, CA ${zip}`} />
      <Pricing />
      <TechnicalSpecs2 />
      <Brands />
      <Contact />
      <Footer />
    </div>
  );
}