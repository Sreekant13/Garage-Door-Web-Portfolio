import React, { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BLOG_POSTS } from "@/lib/blog";
import { BookOpen, Calendar, Clock, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet-async";




export default function BlogIndex() {
  const [filter, setFilter] = useState<"All" | "Maintenance" | "Design" | "Openers">("All");

  const filtered = useMemo(
    () => (filter === "All" ? BLOG_POSTS : BLOG_POSTS.filter(p => p.tag === filter)),
    [filter]
  );

  return (
    <div className="min-h-screen overflow-x-hidden">
        <Helmet>
            <title>Garage Door Tips & Guides | Blog | Sectional Garage Door Springs</title>
            <meta name="description" content="Expert tips, maintenance advice, and buyer's guides for garage doors, springs, and openers. Written by Joseph Lucey with 47+ years of field experience." />
            <link rel="canonical" href="https://sectionalgaragedoorsprings.com/blog" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Garage Door Tips & Guides | Blog" />
            <meta property="og:description" content="Expert garage door repair tips, maintenance guides & product reviews." />
            <meta property="og:url" content="https://sectionalgaragedoorsprings.com/blog" />
            <meta property="og:image" content="https://sectionalgaragedoorsprings.com/og-blog.jpg" />
            <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
      <Header />

      <main className="relative py-16">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-amber-50" />
        <div className="max-w-6xl mx-auto px-4">
          {/* Hero */}
          <div className="text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider bg-white/70 backdrop-blur-sm">
              <BookOpen className="h-3.5 w-3.5" />
              Blog
            </div>
            <h1 className="mt-4 text-3xl md:text-4xl font-extrabold">Tips & Resources</h1>
            <p className="mt-2 text-gray-600">Clear, practical guides from local pros—no fluff.</p>
          </div>

          {/* Filters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {(["All","Maintenance","Design","Openers"] as const).map(t => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={[
                  "px-4 py-2 rounded-full text-sm font-semibold border",
                  filter === t ? "bg-black text-white" : "bg-white hover:bg-gray-50"
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <article
                key={i}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 bg-white"
              >
                <div className="relative h-56 md:h-64 lg:h-72">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow">
                    {p.tag}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold tracking-tight leading-snug">{p.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{p.excerpt}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {p.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {p.read}
                    </span>
                  </div>
                  <div className="mt-6">
                    <a
                      href={p.href}
                      className="relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-black text-white transition hover:opacity-90"
                    >
                      Read Article
                      <ChevronRight className="h-4 w-4" />
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                  </div>
                </div>

                {/* clickable overlay */}
                <a href={p.href} className="absolute inset-0" aria-label={p.title} />
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
