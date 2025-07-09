import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import hero from "@/assets/images/article2.png";
import { Helmet } from "react-helmet-async";


export default function Blog_style() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Helmet>
        <title>Modern vs. Rustic: Picking a Style | Garage Door Blog</title>
        <meta name="description" content="See which door style complements your home’s architecture and budget—planks, overlays, glass, and hardware tips." />
        <link rel="canonical" href="https://sectionalgaragedoorsprings.com/blog/modern-vs-rustic" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Modern vs. Rustic: Picking a Style" />
        <meta property="og:description" content="Design choices that boost curb appeal, privacy, and value." />
        <meta property="og:url" content="https://sectionalgaragedoorsprings.com/blog/modern-vs-rustic" />
        <meta property="og:image" content="https://sectionalgaragedoorsprings.com/og-style.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Header />
      <main className="bg-gray-50">
        <article className="max-w-4xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold">Modern vs. Rustic: Picking a Style</h1>
          <p className="mt-3 text-gray-600">
            Updated {new Date().getFullYear()} · 10 min read · Homeowners guide
          </p>

          <div className="mt-6 rounded-xl overflow-hidden border bg-white">
            <img src={hero} alt="Modern vs. Rustic: Picking a Style" className="w-full max-h-[360px]" />
          </div>

          <div className="mt-8 space-y-8 text-[17px] leading-8">
            
        <section className="prose prose-gray max-w-none">
          <h2 className="mt-8 text-2xl font-bold">Understanding curb‑appeal and ROI</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">Your garage door can be up to 30% of the front elevation. Swapping a dented panel for a carriage‑house overlay or a sleek full‑view aluminum door often delivers one of the best exterior ROI upgrades. We help match style, color, window lites, and insulation to your home and budget.</p>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2 className="mt-8 text-2xl font-bold">Modern styles: clean lines, glass, and quiet performance</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">Think flush panels, horizontal planks, and frosted lites. Pair with a DC belt‑drive opener for near‑silent operation and Wi‑Fi control. Insulated steel keeps garages usable as gyms or workshops while cutting street noise.</p>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2 className="mt-8 text-2xl font-bold">Rustic styles: warmth, texture, and character</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">Carriage‑house looks with decorative hardware and wood‑tone finishes bring warmth without real‑wood upkeep. High‑definition steel embossing mimics grain patterns, and insulated cores keep weight reasonable for standard torsion hardware.</p>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2 className="mt-8 text-2xl font-bold">Hardware, windows, and colorways</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">Small choices change everything: black accents for modern contrast, seeded glass for privacy, or arched top sections for cottage appeal. We carry options that balance daylight, privacy, and energy performance.</p>
        </section>

        <section className="prose prose-gray max-w-none">
          <h2 className="mt-8 text-2xl font-bold">Choosing for climate and maintenance</h2>
          <p className="mt-2 text-gray-700 leading-relaxed">Modern aluminum frames resist corrosion and pair well with coastal environments. Rustic steel overlays with baked‑on finishes need only a gentle wash. We’ll review wind ratings, R‑values, and opener pairings so the door looks great and performs for years.</p>
        </section>
          </div>

          <div className="mt-10 bg-white border rounded-xl p-6">
            <h3 className="text-xl font-semibold">Need help right away?</h3>
            <p className="text-gray-700 mt-2">Call us for same‑day service. We cover Los Angeles, Westside, San Fernando Valley, and Orange County.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="tel:3232705387" className="px-4 py-2 rounded-lg bg-black text-white font-semibold">323‑270‑5387</a>
              {/* <a href="#contact" className="px-4 py-2 rounded-lg border font-semibold">Schedule Online</a> */}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
