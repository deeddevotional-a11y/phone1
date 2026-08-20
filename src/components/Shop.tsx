import { useMemo, useState } from "react";
import { BellRing, MessageCircle, PackageX } from "lucide-react";
import { products, shop } from "../shopConfig";
import { SectionLabel, SectionTitle, focusRing, stockMeta, waLink } from "./ui";

const tagStyles: Record<string, string> = {
  "New Arrival": "bg-[#2b6bff] text-white",
  "Best Seller": "bg-zinc-900 text-white",
  "On Offer": "bg-orange-500 text-white",
  Refurbished: "bg-emerald-600 text-white",
};

export default function Shop() {
  const [brand, setBrand] = useState<string>("All");
  const [category, setCategory] = useState<string>("All");

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (brand === "All" || p.brand === brand) &&
          (category === "All" || p.category === category)
      ),
    [brand, category]
  );

  const pickBrand = (b: string) => {
    setBrand(b);
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ---------- BRAND STRIP ---------- */}
      <section id="brands" className="border-b border-zinc-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-end sm:justify-between">
            <div>
              <SectionLabel>Authorized & stocked</SectionLabel>
              <SectionTitle>Shop by brand</SectionTitle>
            </div>
            <p className="mt-3 max-w-sm text-sm text-zinc-600 sm:mt-0 sm:text-right">
              Tap a brand to filter the catalog. Every device is unlocked, sealed or
              certified-refurbished.
            </p>
          </div>

          <ul className="-mx-4 mt-8 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 lg:grid-cols-7">
            {shop.brands.map((b) => {
              const active = brand === b.name;
              return (
                <li key={b.name} className="min-w-[7.5rem] shrink-0 snap-start sm:min-w-0">
                  <button
                    onClick={() => pickBrand(active ? "All" : b.name)}
                    aria-pressed={active}
                    className={`flex min-h-[88px] w-full flex-col items-center justify-center gap-2 rounded-xl border px-3 py-4 transition ${focusRing} ${
                      active
                        ? "border-[#2b6bff] bg-[#2b6bff]/5 ring-1 ring-[#2b6bff]"
                        : "border-zinc-200 bg-white hover:border-zinc-400"
                    }`}
                  >
                    <span
                      className="grid h-9 w-9 place-items-center rounded-md text-xs font-bold text-white"
                      style={{ backgroundColor: b.accent }}
                      aria-hidden="true"
                    >
                      {b.initials || b.name[0]}
                    </span>
                    <span className="text-[13px] font-medium text-zinc-800">{b.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- PRODUCTS ---------- */}
      <section id="shop" className="scroll-mt-20 bg-zinc-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionLabel>Featured stock</SectionLabel>
          <SectionTitle>Phones, wearables & accessories</SectionTitle>

          {/* Category filters */}
          <div
            className="mt-6 flex flex-wrap gap-2"
            role="group"
            aria-label="Filter by category"
          >
            {["All", ...shop.categories].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`min-h-[44px] rounded-full border px-4 text-sm font-medium transition ${focusRing} ${
                  category === c
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-500"
                }`}
              >
                {c}
              </button>
            ))}
            {(brand !== "All" || category !== "All") && (
              <button
                onClick={() => {
                  setBrand("All");
                  setCategory("All");
                }}
                className={`min-h-[44px] rounded-full px-4 text-sm font-medium text-[#2b6bff] underline underline-offset-4 ${focusRing}`}
              >
                Clear filters
              </button>
            )}
          </div>

          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500" aria-live="polite">
            {filtered.length} {filtered.length === 1 ? "item" : "items"}
            {brand !== "All" && ` · ${brand}`}
            {category !== "All" && ` · ${category}`}
          </p>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="mt-10 rounded-xl border border-dashed border-zinc-300 bg-white p-10 text-center">
              <PackageX className="mx-auto h-6 w-6 text-zinc-400" aria-hidden="true" />
              <p className="mt-3 text-sm text-zinc-600">
                Nothing matches that combination — but we can order it in. Message us and
                we'll quote you today.
              </p>
            </div>
          ) : (
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((p) => {
                const s = stockMeta[p.stock];
                const out = p.stock === "out";
                return (
                  <li
                    key={p.id}
                    className="group flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white transition hover:border-zinc-300 hover:shadow-md"
                  >
                    <div className="relative aspect-square overflow-hidden bg-zinc-100">
                      <img
                        src={p.image}
                        alt={`${p.name} — ${p.brand}`}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      {p.tag && (
                        <span
                          className={`absolute left-2 top-2 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                            tagStyles[p.tag]
                          }`}
                        >
                          {p.tag}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-3 sm:p-4">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                        {p.brand} · {p.category}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold leading-snug text-zinc-900 sm:text-[15px]">
                        {p.name}
                      </h3>

                      <ul className="mt-2 hidden flex-wrap gap-1 sm:flex">
                        {p.specs.slice(0, 3).map((sp) => (
                          <li
                            key={sp}
                            className="rounded border border-zinc-200 bg-zinc-50 px-1.5 py-0.5 text-[11px] text-zinc-600"
                          >
                            {sp}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="text-lg font-semibold tracking-tight text-zinc-900">
                          {shop.currency}
                          {p.price.toLocaleString()}
                        </span>
                        {p.oldPrice && (
                          <span className="text-xs text-zinc-400 line-through">
                            {shop.currency}
                            {p.oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <span
                        className={`mt-2 inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${s.cls}`}
                      >
                        {s.label}
                      </span>

                      <div className="mt-auto pt-3">
                        {out ? (
                          <a
                            href={waLink(
                              `Hi ${shop.shopName}, please notify me when the ${p.name} is back in stock.`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg border border-zinc-300 text-[13px] font-semibold text-zinc-700 transition hover:bg-zinc-50 ${focusRing}`}
                          >
                            <BellRing className="h-4 w-4" aria-hidden="true" /> Notify Me
                          </a>
                        ) : (
                          <a
                            href={waLink(
                              `Hi ${shop.shopName}, I'd like to buy the ${p.name} (${shop.currency}${p.price}). Is it available?`
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex min-h-[44px] w-full items-center justify-center gap-1.5 rounded-lg bg-zinc-900 text-[13px] font-semibold text-white transition hover:bg-[#2b6bff] ${focusRing}`}
                          >
                            <MessageCircle className="h-4 w-4" aria-hidden="true" />
                            WhatsApp to Buy
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          <p className="mt-8 rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-600">
            <span className="font-semibold text-zinc-900">Financing:</span>{" "}
            {shop.financing}
          </p>
        </div>
      </section>
    </>
  );
}
