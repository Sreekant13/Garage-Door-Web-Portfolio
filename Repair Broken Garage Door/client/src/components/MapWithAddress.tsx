import React, { useMemo, useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";

// Marker icon fix (Vite/bundlers)
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Force Leaflet to re-measure after layout settles + on resizes
function MapAutoResize() {
  const map = useMap();
  useEffect(() => {
    const invalidate = () => map.invalidateSize({ animate: false });
    const t = setTimeout(invalidate, 0);
    const onResize = () => invalidate();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    const ro = new ResizeObserver(() => invalidate());
    ro.observe(map.getContainer());
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      ro.disconnect();
    };
  }, [map]);
  return null;
}

export type MapWithAddressProProps = {
  title?: string;
  addressLines: string[];
  phone?: string;
  hours?: string;
  emergencyService?: string;
  lat: number;
  lng: number;
  zoom?: number;

  contained?: boolean;     // wrap with mx-auto max-w-6xl px-4
  className?: string;      // extra classes on the card
  mapHeightClass?: string; // height utility for the map shell
};

const q = (lines: string[]) => encodeURIComponent(lines.join(", "));
const gdir = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

const MapWithAddressPro: React.FC<MapWithAddressProProps> = ({
  title = "Client Location",
  addressLines,
  phone,
  hours,
  emergencyService,
  lat,
  lng,
  zoom = 16,
  contained = true,
  className = "",
  mapHeightClass = "h-[380px] md:h-[460px] lg:h-[520px]",
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
    <div className={`${contained ? "mx-auto max-w-6xl px-4" : ""} overflow-x-hidden`}>
      <section className={`overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 shadow-sm ${className}`}>
        {/* FLEX layout removes grid min-content issues */}
        <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-8">
          {/* LEFT column */}
          <div className="basis-1/2 min-w-0 max-w-full">
            <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
              {title}
            </h3>

            <div className="mt-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800 px-5 py-4">
              <p className="text-zinc-900 dark:text-zinc-100 font-medium">{addressLines[0]}</p>
              {addressLines.slice(1).map((l, i) => (
                <p key={i} className="text-zinc-600 dark:text-zinc-300">{l}</p>
              ))}
            </div>

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

            <div className="mt-5 flex flex-wrap gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${q(addressLines)}`}
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
                Directions
              </a>
            </div>
          </div>

          {/* RIGHT column (MAP) */}
          <div className="basis-1/2 min-w-0 max-w-full">
            <div className={`map-hard-clamp rounded-2xl border border-zinc-200/60 dark:border-zinc-800`}>
              <div className={`w-full ${mapHeightClass}`}>
                <MapContainer
                  key={`${lat},${lng}`}
                  center={pos}
                  zoom={zoom}
                  scrollWheelZoom
                  zoomControl={false}
                  className="block !w-full !h-full"
                  style={{ width: "100%", height: "100%" }}
                >
                  <MapAutoResize />
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
        </div>
      </section>
    </div>
  );
};

export default MapWithAddressPro;
