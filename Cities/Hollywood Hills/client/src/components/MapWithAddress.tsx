import React, { useMemo, useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";

// --- Marker icon (cleaner pin) ---
const DefaultIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  iconRetinaUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
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

  contained?: boolean;
  className?: string;
  mapHeightClass?: string;
};

const q = (lines: string[]) => encodeURIComponent(lines.join(", "));
const gdir = (lat: number, lng: number) =>
  `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const Chip: React.FC<{ children: React.ReactNode; tone?: "green" | "blue" | "rose" | "zinc" }> = ({
  children,
  tone = "zinc",
}) => {
  const toneClasses =
    tone === "green"
      ? "bg-emerald-500/10 text-emerald-900 border-emerald-500/20 dark:text-emerald-200"
      : tone === "blue"
      ? "bg-sky-500/10 text-sky-900 border-sky-500/20 dark:text-sky-200"
      : tone === "rose"
      ? "bg-rose-500/10 text-rose-900 border-rose-500/20 dark:text-rose-200"
      : "bg-zinc-500/10 text-zinc-900 border-zinc-500/20 dark:text-zinc-200";

  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold",
        toneClasses
      )}
    >
      {children}
    </span>
  );
};

const ActionButton: React.FC<{
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}> = ({ href, onClick, children, variant = "secondary" }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent";
  const styles =
    variant === "primary"
      ? "bg-zinc-900 text-white hover:bg-black focus:ring-zinc-900 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
      : "bg-white/70 text-zinc-900 hover:bg-white border border-zinc-200/70 shadow-sm backdrop-blur dark:bg-zinc-900/40 dark:text-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900/70";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cx(base, styles)}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cx(base, styles)} type="button">
      {children}
    </button>
  );
};

const MapWithAddressPro: React.FC<MapWithAddressProProps> = ({
  title = "Service Area",
  addressLines,
  phone,
  hours,
  emergencyService,
  lat,
  lng,
  zoom = 16,
  contained = true,
  className = "",
  mapHeightClass = "h-[360px] md:h-[460px] lg:h-[520px]",
}) => {
  const pos = useMemo<LatLngTuple>(() => [lat, lng], [lat, lng]);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(addressLines.join(", "));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  const mapsSearchHref = `https://www.google.com/maps/search/?api=1&query=${q(
    addressLines
  )}`;

  return (
    <div className={cx(contained && "mx-auto max-w-6xl px-4", "overflow-x-hidden")}>
      {/* Background "section" framing */}
      <section
        className={cx(
          "relative overflow-hidden rounded-[28px] border border-zinc-200/60 dark:border-zinc-800",
          "shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]",
          className
        )}
      >
        {/* Gradient backdrop
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_-10%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(900px_circle_at_110%_30%,rgba(34,197,94,0.18),transparent_45%),radial-gradient(900px_circle_at_40%_120%,rgba(244,63,94,0.16),transparent_50%)] dark:opacity-80" />
        <div className="absolute inset-0 bg-white/60 dark:bg-zinc-950/50 backdrop-blur-xl" /> */}
        {/* Rich colorful background */}
<div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_15%_0%,rgba(56,189,248,0.45),transparent_55%),radial-gradient(1000px_circle_at_100%_20%,rgba(34,197,94,0.35),transparent_50%),radial-gradient(900px_circle_at_40%_100%,rgba(244,63,94,0.30),transparent_55%)]" />

{/* Soft glass wash to keep text readable */}
<div className="absolute inset-0 bg-white/40 dark:bg-zinc-950/45 backdrop-blur-2xl" />

        {/* Content */}
        <div className="relative p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* LEFT */}
            <div className="basis-[44%] min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
                    LOCATION & DIRECTIONS
                  </p>
                  <h3 className="mt-1 text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {title}
                  </h3>
                </div>

                <Chip tone="blue">📍 Verified</Chip>
              </div>

              {/* Address card */}
              <div className="mt-5 rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 backdrop-blur px-5 py-4 shadow-sm">
                <p className="text-zinc-900 dark:text-zinc-50 font-semibold">
                  {addressLines[0]}
                </p>
                {addressLines.slice(1).map((l, i) => (
                  <p key={i} className="text-zinc-600 dark:text-zinc-300">
                    {l}
                  </p>
                ))}

                <div className="mt-4 flex flex-wrap gap-2">
                  {phone && <Chip tone="green">📞 {phone}</Chip>}
                  {hours && <Chip tone="blue">⏰ {hours}</Chip>}
                  {emergencyService && <Chip tone="rose">🚨 {emergencyService}</Chip>}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-5 flex flex-wrap gap-2">
                <ActionButton href={mapsSearchHref} variant="primary">
                  Open in Google Maps ↗
                </ActionButton>

                <ActionButton href={gdir(lat, lng)}>
                  Directions ↗
                </ActionButton>

                <ActionButton onClick={copy}>
                  {copied ? "Copied ✅" : "Copy address"}
                </ActionButton>

                {phone && (
                  <a
                    href={`tel:${phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition"
                  >
                    Call Now
                  </a>
                )}
              </div>

              {/* Subtext */}
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Tap <span className="font-semibold">Directions</span> to open navigation, or
                copy the address to share it quickly.
              </p>
            </div>

            {/* RIGHT: MAP */}
            <div className="basis-[56%] min-w-0">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200/60 dark:border-zinc-800 bg-white/60 dark:bg-zinc-900/30 backdrop-blur shadow-sm">
                {/* Top overlay bar */}
                <div className="absolute left-4 right-4 top-4 z-[500] flex items-center justify-between gap-2 pointer-events-none">
                  <div className="pointer-events-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/80 dark:bg-zinc-950/60 backdrop-blur px-3 py-1.5 text-xs font-semibold text-zinc-900 dark:text-zinc-100 border border-zinc-200/60 dark:border-zinc-800 shadow-sm">
                      🗺️ Interactive Map
                    </span>
                  </div>
                  <div className="pointer-events-auto">
                    <a
                      href={mapsSearchHref}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-zinc-900 text-white px-3 py-1.5 text-xs font-semibold hover:bg-black transition"
                    >
                      Open ↗
                    </a>
                  </div>
                </div>

                <div className={cx("w-full", mapHeightClass)}>
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
  attribution='&copy; OpenStreetMap contributors &copy; CARTO'
  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
/>
                    <Marker position={pos}>
                      <Popup>
                        <div style={{ fontWeight: 700, marginBottom: 6 }}>{title}</div>
                        <div style={{ fontSize: 12, lineHeight: 1.4 }}>
                          {addressLines.join(", ")}
                        </div>
                        <div style={{ marginTop: 10 }}>
                          <a href={gdir(lat, lng)} target="_blank" rel="noreferrer">
                            Directions ↗
                          </a>
                        </div>
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>

                {/* Bottom fade */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/80 to-transparent dark:from-zinc-950/70" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MapWithAddressPro;

// import React, { useMemo, useState, useEffect } from "react";
// import { MapContainer, TileLayer, Marker, Popup, ZoomControl, useMap } from "react-leaflet";
// import type { LatLngTuple } from "leaflet";
// import L from "leaflet";

// // Marker icon fix (Vite/bundlers)
// const DefaultIcon = L.icon({
//   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });
// L.Marker.prototype.options.icon = DefaultIcon;

// // Force Leaflet to re-measure after layout settles + on resizes
// function MapAutoResize() {
//   const map = useMap();
//   useEffect(() => {
//     const invalidate = () => map.invalidateSize({ animate: false });
//     const t = setTimeout(invalidate, 0);
//     const onResize = () => invalidate();
//     window.addEventListener("resize", onResize);
//     window.addEventListener("orientationchange", onResize);
//     const ro = new ResizeObserver(() => invalidate());
//     ro.observe(map.getContainer());
//     return () => {
//       clearTimeout(t);
//       window.removeEventListener("resize", onResize);
//       window.removeEventListener("orientationchange", onResize);
//       ro.disconnect();
//     };
//   }, [map]);
//   return null;
// }

// export type MapWithAddressProProps = {
//   title?: string;
//   addressLines: string[];
//   phone?: string;
//   hours?: string;
//   emergencyService?: string;
//   lat: number;
//   lng: number;
//   zoom?: number;

//   contained?: boolean;     // wrap with mx-auto max-w-6xl px-4
//   className?: string;      // extra classes on the card
//   mapHeightClass?: string; // height utility for the map shell
// };

// const q = (lines: string[]) => encodeURIComponent(lines.join(", "));
// const gdir = (lat: number, lng: number) =>
//   `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

// const MapWithAddressPro: React.FC<MapWithAddressProProps> = ({
//   title = "Client Location",
//   addressLines,
//   phone,
//   hours,
//   emergencyService,
//   lat,
//   lng,
//   zoom = 16,
//   contained = true,
//   className = "",
//   mapHeightClass = "h-[380px] md:h-[460px] lg:h-[520px]",
// }) => {
//   const pos = useMemo<LatLngTuple>(() => [lat, lng], [lat, lng]);
//   const [copied, setCopied] = useState(false);

//   const copy = async () => {
//     try {
//       await navigator.clipboard.writeText(addressLines.join(", "));
//       setCopied(true);
//       setTimeout(() => setCopied(false), 1200);
//     } catch {}
//   };

//   return (
//     <div className={`${contained ? "mx-auto max-w-6xl px-4" : ""} overflow-x-hidden`}>
//       <section className={`overflow-hidden rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800 shadow-sm ${className}`}>
//         {/* FLEX layout removes grid min-content issues */}
//         <div className="flex flex-col lg:flex-row gap-6 p-6 lg:p-8">
//           {/* LEFT column */}
//           <div className="basis-1/2 min-w-0 max-w-full">
//             <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
//               {title}
//             </h3>

//             <div className="mt-4 rounded-2xl bg-zinc-50 dark:bg-zinc-950/40 border border-zinc-200/60 dark:border-zinc-800 px-5 py-4">
//               <p className="text-zinc-900 dark:text-zinc-100 font-medium">{addressLines[0]}</p>
//               {addressLines.slice(1).map((l, i) => (
//                 <p key={i} className="text-zinc-600 dark:text-zinc-300">{l}</p>
//               ))}
//             </div>

//             <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
//               {phone && (
//                 <a
//                   href={`tel:${phone.replace(/\D/g, "")}`}
//                   className="rounded-xl bg-emerald-50 text-emerald-900 dark:bg-emerald-900/15 dark:text-emerald-200 border border-emerald-200/70 dark:border-emerald-900/40 px-4 py-3 text-sm font-semibold"
//                 >
//                   <span className="mr-2">📞</span>{phone}
//                 </a>
//               )}
//               {hours && (
//                 <div className="rounded-xl bg-sky-50 text-sky-900 dark:bg-sky-900/15 dark:text-sky-200 border border-sky-200/70 dark:border-sky-900/40 px-4 py-3 text-sm font-semibold">
//                   <span className="mr-2">⏰</span>{hours}
//                 </div>
//               )}
//               {emergencyService && (
//                 <div className="rounded-xl bg-rose-50 text-rose-900 dark:bg-rose-900/15 dark:text-rose-200 border border-rose-200/70 dark:border-rose-900/40 px-4 py-3 text-sm font-semibold">
//                   <span className="mr-2">🚨</span>{emergencyService}
//                 </div>
//               )}
//             </div>

//             <div className="mt-5 flex flex-wrap gap-2">
//               <a
//                 href={`https://www.google.com/maps/search/?api=1&query=${q(addressLines)}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-zinc-900 text-white hover:bg-black transition"
//               >
//                 Open in Google Maps
//               </a>
//               <a
//                 href={gdir(lat, lng)}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="inline-flex items-center rounded-xl px-4 py-2.5 text-sm font-semibold bg-white text-zinc-900 border border-zinc-300 hover:bg-zinc-100 transition dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
//               >
//                 Directions
//               </a>
//             </div>
//           </div>

//           {/* RIGHT column (MAP) */}
//           <div className="basis-1/2 min-w-0 max-w-full">
//             <div className={`map-hard-clamp rounded-2xl border border-zinc-200/60 dark:border-zinc-800`}>
//               <div className={`w-full ${mapHeightClass}`}>
//                 <MapContainer
//                   key={`${lat},${lng}`}
//                   center={pos}
//                   zoom={zoom}
//                   scrollWheelZoom
//                   zoomControl={false}
//                   className="block !w-full !h-full"
//                   style={{ width: "100%", height: "100%" }}
//                 >
//                   <MapAutoResize />
//                   <ZoomControl position="topright" />
//                   <TileLayer
//                     attribution="&copy; OpenStreetMap contributors"
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                   />
//                   <Marker position={pos}>
//                     <Popup>
//                       {title}
//                       <br />
//                       {addressLines.join(", ")}
//                     </Popup>
//                   </Marker>
//                 </MapContainer>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MapWithAddressPro;
