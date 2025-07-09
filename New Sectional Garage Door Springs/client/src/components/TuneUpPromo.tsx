
import React from "react";

export default function TuneUpPromo() {
  return (
    <section className="bg-amber-50 border-y py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="text-2xl font-bold">Keep Your Door Running Smoothly</h3>
          <p className="mt-2 text-gray-700">
            Ask about our seasonal tune‑up special. Improve safety, reduce noise, and extend the life of your door.
          </p>
        </div>
        <a
          href="#contact"
          className="justify-self-start md:justify-self-end inline-block rounded-lg bg-black text-white px-6 py-3 font-semibold hover:opacity-90"
        >
          Schedule Your Tune‑Up
        </a>
      </div>
    </section>
  );
}
