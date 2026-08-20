import { Star } from "lucide-react";
import type { Stock } from "../shopConfig";
import { shop } from "../shopConfig";

/* Shared primitives + link builders */

export const waLink = (msg: string) =>
  `https://wa.me/${shop.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${shop.phoneRaw}`;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2b6bff] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#2b6bff]">
      <span className="h-px w-6 bg-[#2b6bff]" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
      {children}
    </h2>
  );
}

export const stockMeta: Record<Stock, { label: string; cls: string }> = {
  in: { label: "In Stock", cls: "bg-emerald-50 text-emerald-700 ring-emerald-600/20" },
  limited: { label: "Limited Stock", cls: "bg-amber-50 text-amber-700 ring-amber-600/20" },
  out: { label: "Out of Stock", cls: "bg-zinc-100 text-zinc-500 ring-zinc-400/30" },
};

export function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${n} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={
            i <= n ? "h-4 w-4 fill-[#2b6bff] text-[#2b6bff]" : "h-4 w-4 text-zinc-300"
          }
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/** Fine tech grid background */
export const gridBg = {
  backgroundImage:
    "linear-gradient(to right, rgba(0,0,0,.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.055) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

export const gridBgDark = {
  backgroundImage:
    "linear-gradient(to right, rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.06) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};
