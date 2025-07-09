
import React, { useState } from "react";

export default function CallbackForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to backend/email service
    setStatus("sent");
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Get a Service Callback</h2>
          <p className="mt-2 text-gray-600">
            Select a service and leave your contact — we’ll call you back shortly.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="bg-white rounded-xl border p-6 shadow-sm grid grid-cols-1 gap-4"
        >
          <label className="text-sm font-medium">Name
            <input required className="mt-1 w-full border rounded-lg p-2"
                   placeholder="Jane Doe" />
          </label>
          <label className="text-sm font-medium">Phone
            <input required className="mt-1 w-full border rounded-lg p-2"
                   placeholder="(555) 123-4567" />
          </label>
          <label className="text-sm font-medium">Service Needed
            <select className="mt-1 w-full border rounded-lg p-2">
              <option>Service</option>
              <option>New Door</option>
              <option>Openers</option>
              <option>Broken Springs</option>
              <option>Cables & Rollers</option>
              <option>Noisy Door</option>
              <option>Off-Track</option>
              <option>Safety Inspection</option>
              <option>Parts</option>
              <option>Other</option>
            </select>
          </label>
          <button className="rounded-lg bg-black text-white py-2 font-semibold hover:opacity-90">
            Schedule Service
          </button>
          {status === "sent" && (
            <p className="text-green-600 text-sm">Thanks! Your message has been sent.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-sm">There was an error. Please try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
