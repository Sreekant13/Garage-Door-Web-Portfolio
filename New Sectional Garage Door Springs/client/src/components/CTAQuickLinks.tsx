
import React from "react";
import { Wrench, DoorOpen, Cog } from "lucide-react";

export default function CTAQuickLinks() {
  const items = [
    { id: "new-doors", title: "NEW DOORS", icon: DoorOpen, href: "#new-doors" },
    { id: "repairs", title: "REPAIRS", icon: Wrench, href: "#repairs" },
    { id: "openers", title: "OPENERS", icon: Cog, href: "#openers" },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map(({ id, title, icon: Icon, href }) => (
          <a
            key={id}
            href={href}
            className="group flex items-center justify-between rounded-xl border p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-full p-3 border">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
            </div>
            <span className="text-sm opacity-70 group-hover:opacity-100">Explore →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
