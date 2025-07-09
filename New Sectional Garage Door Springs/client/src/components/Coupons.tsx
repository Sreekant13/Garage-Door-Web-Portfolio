import React from "react";
import { BadgePercent, Sparkles, Scissors, Phone, Star } from "lucide-react";

type Coupon = {
  title: string;
  caption: string;
  code?: string;
  highlight?: boolean;
  save?: string; // e.g., "Save $50"
};

export default function Coupons() {
  const promos: Coupon[] = [
    { title: "Free Service Phone Call", caption: "with any repair", code: "FREESC", highlight: true, save: "Save $69" },
    { title: "$30 Off Openers", caption: "selected models", code: "OPEN30", save: "Save $30" },
    { title: "Spring Replacement", caption: "special pricing", code: "SPRING10", save: "Bundle & Save" },
    { title: "New Door Savings", caption: "ask for current deals", code: "NEWDOR", save: "Seasonal Deal" },
  ];

  const callHref = "tel:3232705387";

  // rotate card accent colors
  const accents = [
    { from: "from-amber-500", to: "to-rose-600" },
    { from: "from-emerald-500", to: "to-teal-700" },
    { from: "from-indigo-500", to: "to-fuchsia-600" },
    { from: "from-cyan-500", to: "to-blue-600" },
  ];

  return (
    <section
      id="coupons"
      className="relative py-20 overflow-hidden"
    >
      {/* festive gradient + pattern */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-amber-50 via-white to-rose-50" />
      <div className="absolute inset-0 -z-10 opacity-[0.2] [background:radial-gradient(20px_20px_at_20px_20px,#000_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider bg-white/70 backdrop-blur-sm">
            <BadgePercent className="h-3.5 w-3.5" />
            Limited-Time Offers
          </div>
          <h3 className="mt-4 text-3xl md:text-4xl font-extrabold">
            Click to Call & Claim Your Coupon
          </h3>
          <p className="mt-2 text-gray-600">Fast, fair, and local—ask about same-day service.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promos.map((p, i) => {
            const accent = accents[i % accents.length];
            return (
              <article
                key={i}
                className={[
                  "relative group rounded-2xl bg-white shadow-sm border border-transparent",
                  "transition-all hover:shadow-xl hover:-translate-y-0.5",
                  // gradient border trick
                  "before:absolute before:inset-0 before:-z-10 before:rounded-2xl",
                  `before:bg-gradient-to-br ${accent.from} ${accent.to}`,
                  "before:opacity-90",
                  "p-[1px]",
                ].join(" ")}
              >
                <div className="relative rounded-2xl bg-white overflow-hidden h-full">
                  {/* corner ribbon */}
                  {p.highlight && (
                    <div className="absolute -right-10 top-4 rotate-45 bg-yellow-400 text-yellow-950 font-semibold text-[11px] px-10 py-1 shadow">
                      Best Pick
                    </div>
                  )}

                  {/* perforated sides */}
                  <div className="pointer-events-none absolute inset-y-0 -left-2 w-4 bg-[radial-gradient(circle,_#fff_3px,_transparent_3px)] bg-[length:12px_12px] bg-center opacity-70" />
                  <div className="pointer-events-none absolute inset-y-0 -right-2 w-4 bg-[radial-gradient(circle,_#fff_3px,_transparent_3px)] bg-[length:12px_12px] bg-center opacity-70" />

                  {/* header band */}
                  <div className={`h-2 bg-gradient-to-r ${accent.from} ${accent.to}`} />

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Scissors className="h-5 w-5 opacity-70" />
                        <h4 className="text-lg font-bold tracking-tight">{p.title}</h4>
                      </div>
                      {p.save && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-[11px] font-semibold">
                          <Star className="h-3.5 w-3.5" /> {p.save}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm text-gray-600">{p.caption}</p>

                    {/* code + faux barcode */}
                    <div className="mt-5 flex items-center justify-between">
                      {/* {p.code ? (
                        <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-mono tracking-wider">
                          CODE: {p.code}
                        </span>
                      ) : (
                        <span />
                      )} */}

                      <div className="flex gap-0.5">
                        {Array.from({ length: 12 }).map((_, idx) => (
                          <span
                            key={idx}
                            className="h-6 w-[2px] bg-gray-300"
                            style={{ opacity: idx % 2 === 0 ? 0.9 : 0.5 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* call to action with subtle shine */}
                    <a
                      href={callHref}
                      className={[
                        "relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-semibold text-white",
                        "transition active:scale-[0.99]",
                        `bg-gradient-to-r ${accent.from} ${accent.to}`,
                        "shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]",
                        "overflow-hidden",
                      ].join(" ")}
                      aria-label={`Call now to claim: ${p.title}`}
                    >
                      {/* shine */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.55),transparent)] group-hover:translate-x-full transition-transform duration-700" />
                      <Phone className="h-4 w-4" />
                      Tap to Call Now
                    </a>

                    {/* small print */}
                    <p className="mt-3 text-[11px] text-gray-500 leading-relaxed">
                      Present over the phone. One coupon per household. Not valid with other offers. Service area and
                      model eligibility may apply.
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 text-center text-xs text-gray-500">
          Need something not listed? Ask about custom bundles for openers, springs, and tune-ups.
        </div>
      </div>
    </section>
  );
}
