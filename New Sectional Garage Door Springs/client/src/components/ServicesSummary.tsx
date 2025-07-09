import React from "react";
import { DoorOpen, Wrench, Cog } from "lucide-react";

// Import your images
import img1 from "@/assets/images/servicebackground.png";
import img2 from "@/assets/images/Joseph's car.png";
import img3 from "@/assets/images/Torsion Spring - Sectional Roll Up Garage Dppr.png";

export default function ServicesSummary() {
  const items = [
    {
      id: "new-doors",
      title: "New Doors",
      icon: DoorOpen,
      body:
        "Steel, overlay, and full-view aluminum options with professional installation and haul-away. We’ve got you covered if it’s time for a new garage door. Explore our selection of high-quality Steel, Overlay, Mosaic, and Full View Aluminum doors and find the perfect fit for your home.",
      img: img1
    },
    {
      id: "repairs",
      title: "Repairs",
      icon: Wrench,
      body:
        "Broken springs, rollers, cables, noisy/jerky movement, off-track doors — same-day fixes. Trust our expert technicians to diagnose and fix any issues precisely. We specialize in repairing springs, rollers, cables, off-track doors, and noisy garage doors. Our work is insured and speedy.",
      img: img2
    },
    {
      id: "openers",
      title: "Openers",
      icon: Cog,
      body:
        "Trusting in us means investing in tailor-made garage door openers that meet your needs. Plus, we offer a variety of openers for your convenience like LiftMaster™, Genie, Chamberlain and more. Smart openers, battery backup, and keypad setups.",
      img: img3
    },
  ];

  return (
    <section className="py-14">
      {/* Section Header */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Our Other Garage Door Repair Services
      </h2>
      
      {/* Professional line */}
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 font-medium mb-10 leading-relaxed">
        With over <span className="font-bold text-red-600">47 years</span> of hands-on experience in the garage door industry, 
        I bring unmatched expertise not only in <span className="italic">Sectional Garage Door Springs</span> but also in a wide 
        range of related services to keep your door operating safely, smoothly, and reliably.
      </p>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {items.map(({ id, title, icon: Icon, body, img }) => (
          <div
            id={id}
            key={id}
            className={`relative group rounded-2xl overflow-hidden border-4 border-[#8B4513] shadow-lg hover:shadow-2xl transition`}
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/10" /> {/* slight dark tint */}
            </div>

            {/* Content overlay */}
            <div className="relative z-10 p-6 text-red-600 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">{title}</h4>
                </div>
                <p className="mt-3 text-sm text-white leading-relaxed">{body}</p>
              </div>

              <a
                href="#contact"
                className="inline-block mt-6 px-4 py-2 rounded-lg bg-white text-black font-semibold hover:bg-gray-100 transition"
              >
                Schedule Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
