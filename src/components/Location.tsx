import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Car,
  MessageCircle,
  Mail,
  Smartphone,
} from "lucide-react";
import { shop } from "../shopConfig";
import { SectionLabel, SectionTitle, focusRing, scrollToId, telLink, waLink } from "./ui";

/* Brand glyphs (lucide dropped brand icons) */
const Instagram = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
const Facebook = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4v-2c0-.6.4-1 1-1z" />
  </svg>
);

const TODAY = new Date().getDay(); // 0 = Sunday
const dayIndex = (i: number) => (i + 1) % 7; // config starts Monday

export function LocationHours() {
  return (
    <section id="location" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel>Visit the store</SectionLabel>
        <SectionTitle>Location & opening hours</SectionTitle>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl border border-zinc-200">
            <iframe
              title={`Map showing ${shop.shopName} at ${shop.address}`}
              src={shop.mapEmbed}
              className="h-64 w-full sm:h-80 lg:h-full lg:min-h-[26rem]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-zinc-200 p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-zinc-900">
                <MapPin className="h-5 w-5 text-[#2b6bff]" aria-hidden="true" /> Address
              </h3>
              <address className="mt-2 not-italic text-[15px] leading-relaxed text-zinc-600">
                {shop.address}
              </address>
              <p className="mt-3 flex items-start gap-2 text-sm text-zinc-500">
                <Car className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {shop.parking}
              </p>
              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                <a
                  href={shop.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 text-sm font-semibold text-white transition hover:bg-[#2b6bff] ${focusRing}`}
                >
                  <Navigation className="h-4 w-4" aria-hidden="true" /> Get Directions
                </a>
                <a
                  href={telLink}
                  className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-zinc-300 px-4 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 ${focusRing}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> {shop.phone}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 p-5 sm:p-6">
              <h3 className="flex items-center gap-2 text-base font-semibold text-zinc-900">
                <Clock className="h-5 w-5 text-[#2b6bff]" aria-hidden="true" /> Hours
              </h3>
              <dl className="mt-3 divide-y divide-zinc-100">
                {shop.hours.map((h, i) => {
                  const today = dayIndex(i) === TODAY;
                  return (
                    <div
                      key={h.day}
                      className={`flex items-center justify-between py-2.5 text-sm ${
                        today ? "font-semibold text-zinc-900" : "text-zinc-600"
                      }`}
                    >
                      <dt className="flex items-center gap-2">
                        {h.day}
                        {today && (
                          <span className="rounded-full bg-[#2b6bff]/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#2b6bff]">
                            Today
                          </span>
                        )}
                      </dt>
                      <dd className={h.time === "Closed" ? "text-zinc-400" : undefined}>
                        {h.time}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 pb-24 pt-14 text-zinc-400 lg:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/10">
                <Smartphone className="h-5 w-5 text-[#2b6bff]" aria-hidden="true" />
              </span>
              <span className="text-[15px] font-semibold text-white">{shop.shopName}</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">{shop.tagline}</p>
            <div className="mt-5 flex gap-2">
              {[
                { href: shop.instagram, Icon: Instagram, label: "Instagram" },
                { href: shop.facebook, Icon: Facebook, label: "Facebook" },
                {
                  href: waLink(`Hi ${shop.shopName}!`),
                  Icon: MessageCircle,
                  label: "WhatsApp",
                },
                { href: `mailto:${shop.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-zinc-300 transition hover:border-[#2b6bff] hover:text-white focus-visible:ring-offset-zinc-950 ${focusRing}`}
                >
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Shop phones", "shop"],
                ["Repair services", "repairs"],
                ["Book a repair", "book"],
                ["Trade-in", "tradein"],
                ["Reviews", "reviews"],
                ["Location & hours", "location"],
              ].map(([label, id]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(id);
                    }}
                    className={`inline-block py-1 transition hover:text-white focus-visible:ring-offset-zinc-950 ${focusRing}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
              Brands carried
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {shop.brands.map((b) => (
                <li
                  key={b.name}
                  className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-zinc-300"
                >
                  {b.name}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              Apple Authorized Reseller · Samsung Care Partner · Xiaomi Service Point
            </p>
          </div>

          <div>
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-white">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={telLink} className={`hover:text-white ${focusRing}`}>
                  {shop.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${shop.email}`} className={`hover:text-white ${focusRing}`}>
                  {shop.email}
                </a>
              </li>
              <li className="text-zinc-500">{shop.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {shop.shopName}. All rights reserved.
          </p>
          <p>Repairs carry a 12-month parts & labour warranty. Prices exclude sales tax.</p>
        </div>
      </div>
    </footer>
  );
}

/** Sticky mobile action bar */
export function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200 bg-white/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <a
          href={telLink}
          className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-zinc-300 text-sm font-semibold text-zinc-900 ${focusRing}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
        </a>
        <a
          href={waLink(`Hi ${shop.shopName}, I have a question.`)}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#25D366] text-sm font-semibold text-zinc-950 ${focusRing}`}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
        </a>
      </div>
    </div>
  );
}
