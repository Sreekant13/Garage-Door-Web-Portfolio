// src/components/StatsSection.tsx
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Stats } from "@shared/schema";
import { motion } from "framer-motion";
import { animateCounter } from "@/lib/utils";

export default function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const { data: stats } = useQuery<Stats>({ queryKey: ["/api/stats"] });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current && stats) {
          hasAnimated.current = true;
          const yEl = document.getElementById("years-counter");
          const cEl = document.getElementById("customers-counter");
          const sEl = document.getElementById("satisfaction-counter");
          if (yEl) animateCounter(yEl, stats.yearsInBusiness || 47);
          if (cEl) animateCounter(cEl, stats.happyCustomers || 15000);
          if (sEl) animateCounter(sEl, stats.customerSatisfaction || 99);
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [stats]);

  return (
    <section ref={statsRef} className="py-20 stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { id: "years-counter", label: "Years in Business", suffix: "+" , color: "text-orange-500" },
            { id: "customers-counter", label: "Happy Customers", suffix: "+", color: "text-teal-500" },
            { id: "satisfaction-counter", label: "Customer Satisfaction", suffix: "%", color: "text-amber-500" },
            { id: null, label: "Emergency Service", value: "24/7", color: "text-green-500" },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <motion.div whileHover={{ scale: 1.1 }} className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.id
                  ? <><span id={stat.id}>0</span>{stat.suffix}</>
                  : stat.value
                }
              </motion.div>
              <p className="text-white font-semibold">{stat.label}</p>
              <div className={`w-12 h-1 bg-[${stat.color.replace("text-","")}] mx-auto mt-2 group-hover:w-16 transition-all`}></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
