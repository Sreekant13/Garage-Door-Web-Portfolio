// src/components/MapWithAddress.tsx
import React, { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";

// default marker fix for Vite/bundlers
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export type MapWithAddressProps = {
  title?: string;
  addressLines: string[];
  lat: number;
  lng: number;
  zoom?: number;
  className?: string;
  mapClassName?: string;
  contained?: boolean;

  // extras
  phone?: string;            // "323-270-5387"
  hours?: string;            // "Mon – Sun, 6:00 AM – 10:00 PM"
  emergencyService?: string; // "Available 24/7"
};

const gq = (lines: string[]) => encodeURIComponent(lines.join(", "));
const gdir = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
const adir = (lat: number, lng: number) => `https://maps.apple.com/?daddr=${lat},${lng}`;

const MapWithAddress: React.FC<MapWithAddressProps> = ({
  title = "Crusader202ss Garage Door",
  addressLines,
  lat,
  lng,
  zoom = 16,
  className = "",
  mapClassName = "",
  contained = false,
  phone,
  hours,
  emergencyService,
}) => {
  const pos = useMemo<LatLngTuple>(() => [lat, lng], [lat, lng]);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(addressLines.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <div className={contained ? "mx-auto max-w-6xl px-4" : ""}>
      <section
        className={`rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 shadow-sm ${className}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 lg:p-8">
          {/* LEFT: info */}
          <div className="flex flex-col">
            {/* Heading */}
            <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>

            {/* Address */}
            <div className="mt-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800 px-5 py-4">
              <p className="text-zinc-900 dark:text-zinc-100 font-medium">{addressLines[0]}</p>
              {addressLines.slice(1).map((l, i) => (
                <p key={i} className="text-zinc-600 dark:text-zinc-300">
                  {l}
                </p>
              ))}
            </div>

            {/* At a glance (clean 3-stat row) */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {phone && (
                <a
                  href={`tel:${phone.replace(/\D/g, "")}`}
                  className="rounded-xl bg-emerald-50 text-emerald-900 dark:bg-emerald-900/15 dark:text-emerald-200 border border-emerald-200/70 dark:border-emerald-900/40 px-4 py-3 text-sm font-semibold"
                >
                  <span className="mr-2">📞</span>{phone}
                </a>
              )}
              {hours && (
                <div className="rounded-xl bg-sky-50 text-sky-900 dark:bg-sky-900/15 dark:text-sky-200 border border-sky-200/70 dark:border-sky-900/40 px-4 py-3 text-sm font-semibold">
                  <span className="mr-2">⏰</span>{hours}
                </div>
              )}
              {emergencyService && (
                <div className="rounded-xl bg-rose-50 text-rose-900 dark:bg-rose-900/15 dark:text-rose-200 border border-rose-200/70 dark:border-rose-900/40 px-4 py-3 text-sm font-semibold">
                  <span className="mr-2">🚨</span>{emergencyService}
                </div>
              )}
            </div>

            {/* Actions (fewer, clearer) */}
            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${gq(addressLines)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-zinc-900 text-white hover:bg-black transition"
              >
                Open in Google Maps
              </a>
              <a
                href={gdir(lat, lng)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-100 transition dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                Directions (Google)
              </a>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-white text-zinc-700 border border-zinc-300 hover:bg-zinc-100 transition dark:bg-zinc-900 dark:text-zinc-300 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {copied ? "Copied ✓" : "Copy address"}
              </button>
            </div>

            {/* Subtle note */}
            <p className="mt-3 text-xs text-zinc-500">
              Tip: drag, scroll, or zoom the map. Click the pin for the popup.
            </p>
          </div>

          {/* RIGHT: map */}
          <div
            className={`rounded-2xl overflow-hidden border border-zinc-200/60 dark:border-zinc-800 ${mapClassName}`}
          >
            <div className="h-[360px] md:h-[440px] lg:h-[480px]">
              <MapContainer
                center={pos}
                zoom={zoom}
                scrollWheelZoom
                zoomControl={false}
                style={{ height: "100%", width: "100%" }}
              >
                <ZoomControl position="topright" />
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={pos}>
                  <Popup>
                    {title}
                    <br />
                    {addressLines.join(", ")}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapWithAddress;
