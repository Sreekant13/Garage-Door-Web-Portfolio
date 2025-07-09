import React from "react";
import { BookOpen, Calendar, Clock, ChevronRight } from "lucide-react";

// Optional: use your existing images (swap paths if you like)
import hero1 from "@/assets/images/article1.png";
import hero2 from "@/assets/images/article2.png";
import hero3 from "@/assets/images/article3.png";

export default function BlogTeasers() {
  const posts = [
    {
      title: "How Weather Affects Your Garage Door",
      href: "/blog/weather-effects",
      excerpt: "Keep your door smooth through heat waves, cold snaps, and heavy winds.",
      date: "Aug 2025",
      read: "8 min",
      img: hero1,
      tag: "Maintenance",
    },
    {
      title: "Modern vs. Rustic: Picking a Garage Door Style",
      href: "/blog/modern-vs-rustic",
      excerpt: "See which door style complements your home’s architecture and budget.",
      date: "Aug 2025",
      read: "7 min",
      img: hero2,
      tag: "Design",
    },
    {
      title: "Top Garage Door Opener Features in 2025",
      href: "/blog/top-opener-features",
      excerpt: "Battery backup, Wi-Fi control, and ultra-quiet drives—what actually matters.",
      date: "Aug 2025",
      read: "6 min",
      img: hero3,
      tag: "Openers",
    },
  ];

  return (
    <section className="relative py-20" id="blog">
      {/* Background: soft gradient + dot grid */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-50 via-white to-amber-50" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background:radial-gradient(2px_2px_at_8px_8px,#000_20%,transparent_20%)] [background-size:24px_24px]" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider bg-white/70 backdrop-blur-sm">
              <BookOpen className="h-3.5 w-3.5" />
              Tips & Resources
            </div>
            <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">
              Learn. Decide. Maintain.
            </h3>
            <p className="mt-2 text-gray-600 text-base md:text-lg">
              Clear, practical guides from local pros—no fluff.
            </p>
          </div>
          <a
            href="/blog" // optional: add a blog index later
            className="hidden md:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold bg-white hover:bg-gray-50 transition"
          >
            View All Articles <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((p, i) => (
            <article
              key={i}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5 bg-white"
            >
              {/* Hero image with gradient overlay */}
              <div className="relative h-56 md:h-64 lg:h-72">
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Tag chip */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold shadow">
                  {p.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold tracking-tight leading-snug">
                  {p.title}
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  {p.excerpt}
                </p>

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

                {/* CTA */}
                <div className="mt-6">
                  <a
                    href={p.href}
                    className="relative inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-black text-white
                               transition hover:opacity-90"
                  >
                    Read Article
                    <ChevronRight className="h-4 w-4" />
                    {/* subtle shine */}
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] group-hover:translate-x-full transition-transform duration-700" />
                  </a>
                </div>
              </div>

              {/* Make the whole card clickable (with an invisible overlay link) */}
              <a href={p.href} className="absolute inset-0" aria-label={p.title} />
            </article>
          ))}
        </div>

        {/* Mobile "View all" button */}
        <div className="mt-10 text-center md:hidden">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold bg-white hover:bg-gray-50 transition"
          >
            View All Articles <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// // import Link from "next/link";

// export default function BlogTeasers() {
//   const posts = [
//     { title: "How Weather Affects Your Garage Door", href: "/blog/weather-effects", excerpt: "Tips to keep your door smooth year‑round." },
//     { title: "Modern vs. Rustic: Picking a Style", href: "/blog/modern-vs-rustic", excerpt: "Choose what fits your home and budget." },
//     { title: "Top Opener Features in 2025", href: "/blog/top-opener-features", excerpt: "Battery backup, Wi‑Fi, and quiet drive systems." },
//   ];
//   return (
//     <section className="bg-gray-50 py-14">
//       <div className="max-w-6xl mx-auto px-4">
//         <h3 className="text-2xl md:text-3xl font-bold">Tips & Resources</h3>
//         <div className="mt-6 grid md:grid-cols-3 gap-6">
//           {posts.map((p,i)=>(
//             <article key={i} className="bg-white rounded-xl border p-6 shadow-sm">
//               <h4 className="text-lg font-semibold">{p.title}</h4>
//               <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
//               <a className="inline-block mt-3 text-sm underline" href={p.href}>Continue Reading</a>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }