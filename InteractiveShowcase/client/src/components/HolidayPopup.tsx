import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

export type HolidayInfo = {
  key: string;
  name: string;
  message: string;
  img: string;
  start: string;
  end: string;
};

function qs(name: string) {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get(name);
}

// ✅ force show: ?holidayPopup=1
function hasForceParam() {
  return qs("holidayPopup") === "1";
}

// ✅ keep it open (design/preview): ?holidayPreview=1
function hasPreviewParam() {
  return qs("holidayPreview") === "1";
}

function getHolidayTheme(key: string) {
  const k = key.toLowerCase();
  if (k.includes("halloween"))
    return { accent: "from-orange-500 to-rose-500", glow: "shadow-orange-500/30" };
  if (k.includes("christmas"))
    return { accent: "from-emerald-500 to-red-500", glow: "shadow-emerald-500/25" };
  if (k.includes("newyear"))
    return { accent: "from-indigo-500 to-fuchsia-500", glow: "shadow-fuchsia-500/25" };
  if (k.includes("valent"))
    return { accent: "from-rose-500 to-pink-500", glow: "shadow-rose-500/25" };
  if (k.includes("easter"))
    return { accent: "from-sky-500 to-teal-500", glow: "shadow-sky-500/25" };
  return { accent: "from-emerald-500 to-blue-500", glow: "shadow-emerald-500/20" };
}

function ConfettiDots() {
  const dots = new Array(14).fill(0).map((_, i) => i); // fewer dots = cleaner on mobile
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((i) => (
        <motion.span
          key={i}
          className="absolute h-2 w-2 rounded-full bg-white/60"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 11) % 100}%`,
          }}
          initial={{ opacity: 0, y: -10, scale: 0.8 }}
          animate={{ opacity: [0, 1, 0.8, 0], y: [0, 18, 40, 60], scale: [0.8, 1, 1, 0.9] }}
          transition={{ duration: 2.1, delay: (i % 6) * 0.08, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

function formatHourLabel(h: number) {
  const hour12 = ((h + 11) % 12) + 1;
  const ampm = h >= 12 ? "PM" : "AM";
  return `${hour12} ${ampm}`;
}

function getBusinessStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 Sun ... 6 Sat
  const hour = now.getHours();
  const minute = now.getMinutes();

  const isSunday = day === 0;

  const openHour: number = isSunday ? 9 : 8;
  const closeHour: number = 22;

  const minsNow = hour * 60 + minute;
  const minsOpen = openHour * 60;
  const minsClose = closeHour * 60;

  const open = minsNow >= minsOpen && minsNow < minsClose;
  const closeLabel = formatHourLabel(closeHour);

  return { open, closeLabel };
}

export default function HolidayPopup({
  holiday,
  durationMs = 8000,
  phone = "323-270-5387",
  businessName = "Repair Broken Garage Door",
  contactName = "Joseph",
}: {
  holiday: HolidayInfo | null;
  durationMs?: number;
  phone?: string;
  businessName?: string;
  contactName?: string;
}) {
  const [open, setOpen] = useState(false);

  const storageKey = useMemo(() => {
    if (!holiday) return "holidayPopupShown";
    return `holidayPopupShown:${holiday.key}`;
  }, [holiday]);

  useEffect(() => {
    if (!holiday) return;

    const forced = hasForceParam();
    const preview = hasPreviewParam();

    // ✅ Once per session (unless forced/preview)
    // if (!forced && !preview) {
    //   const shown = sessionStorage.getItem(storageKey);
    //   if (shown === "1") return;
    //   sessionStorage.setItem(storageKey, "1");
    // }

    setOpen(true);

    // ✅ Preview mode keeps it open indefinitely
    if (preview) return;

    // ✅ Auto close timer (this is your timer)
    const t = window.setTimeout(() => setOpen(false), durationMs);
    return () => window.clearTimeout(t);
  }, [holiday, durationMs, storageKey]);

  if (!holiday) return null;

  const theme = getHolidayTheme(holiday.key);
  const biz = getBusinessStatus();
  const preview = hasPreviewParam();
  // Emojis that may render as monochrome (inherit text color)
  const MONO_EMOJI_KEYS = new Set([
    "civilrights",
    // add more only if you ever see issues
  ]);

  function shouldForceWhiteEmoji(key: string) {
    return MONO_EMOJI_KEYS.has(key.toLowerCase());
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/55 backdrop-blur-md px-3 py-4 sm:px-6 sm:py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            className={`relative w-full max-w-[92vw] sm:max-w-2xl rounded-3xl bg-white shadow-2xl ${theme.glow}
              max-h-[92dvh] sm:max-h-none overflow-y-auto sm:overflow-hidden`}
            initial={{ scale: 0.92, y: 18, rotate: -0.4, opacity: 0 }}
            animate={{ scale: 1, y: 0, rotate: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 10, opacity: 0 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* TOP STRIP */}
            <div className={`relative ${preview ? "h-14" : "h-14"} sm:h-20 bg-gradient-to-r ${theme.accent}`}>
              <ConfettiDots />
              <div className="absolute -left-24 top-0 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <div className="absolute right-0 top-6 h-32 w-32 rounded-full bg-white/15 blur-2xl" />

              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 rounded-full p-2 text-white/90 hover:bg-white/15"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute left-3 right-12 top-3 sm:left-5 sm:right-14 sm:top-5">
                <div className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-full bg-white/20 px-3 py-1 text-[11px] sm:text-xs font-semibold text-white backdrop-blur">
                  {biz.open ? (
                    <>
                      Call open today until <span className="font-extrabold">{biz.closeLabel}</span>
                      <span className="opacity-80">•</span> Same-day repairs available
                    </>
                  ) : (
                    <>Request a callback • We’ll respond ASAP</>
                  )}
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
              <div className="mx-auto w-full max-w-lg">
                {/* image card */}
                <motion.div
                  className="mx-auto w-[160px] sm:w-[210px] rounded-2xl bg-white p-2 shadow-xl ring-1 ring-black/5"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.04, duration: 0.3, ease: "easeOut" }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img src={holiday.img} alt={holiday.name} className="w-full object-cover" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/10 to-transparent" />
                  </div>
                </motion.div>

                <motion.div
                  className="mt-3 sm:mt-5 text-center"
                  initial={{ y: 8, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08, duration: 0.3, ease: "easeOut" }}
                >
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-900 tracking-tight">
                    <span className="text-neutral-700">{businessName}</span>{" "}
                    <span className="text-neutral-900">proudly celebrates</span>
                  </h3>

                  <div className="mt-0.5 sm:mt-1 text-xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">
                    {shouldForceWhiteEmoji(holiday.key) && (
                        <span className="ml-2 text-white drop-shadow-sm">🕊️</span>
                      )}
                    <span className="bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-transparent">
                      {holiday.name}
                    </span>
                      {shouldForceWhiteEmoji(holiday.key) && (
                        <span className="ml-2 text-white drop-shadow-sm">🕊️</span>
                      )}
                  </div>

                  <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-base text-neutral-600 leading-relaxed max-w-md mx-auto">
                    Broken spring, off-track door, or a loud opener? We’ll help you get it working fast — honest pricing,
                    same-day availability in many areas.
                  </p>

                  {/* Call card */}
                  <div className="mt-3 sm:mt-4 rounded-2xl border border-neutral-200 bg-white p-3 sm:p-4 text-left shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className={`mt-1 h-9 sm:h-10 w-1.5 rounded-full bg-gradient-to-b ${theme.accent}`} />
                      <div className="flex-1">
                        <p className="text-[13px] sm:text-sm font-semibold text-neutral-900">
                          Ask about today’s holiday specials — call {contactName}
                        </p>

                        <a
                          href={`tel:${phone}`}
                          onClick={() => setOpen(false)}
                          className="mt-2.5 inline-flex w-full items-center justify-center rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800 transition"
                        >
                          Call {contactName}: {phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* timer bar (hidden in preview mode) */}
                  {!preview && (
                    <div className="mt-3 sm:mt-5 h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${theme.accent}`}
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: durationMs / 1000, ease: "linear" }}
                      />
                    </div>
                  )}

                  {/* buttons */}
                  <div className="mt-3 sm:mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
                    <button
                      onClick={() => setOpen(false)}
                      className="w-full sm:w-auto rounded-full bg-white border border-neutral-200 px-5 py-2.5 text-sm font-semibold text-neutral-800 hover:bg-neutral-50 transition"
                    >
                      Continue
                    </button>

                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="w-full sm:w-auto rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition text-center"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
