import { ShieldCheck, Wrench, ArrowRight, BadgeCheck, Clock } from "lucide-react";
import { shop, heroImage } from "../shopConfig";
import { focusRing, gridBgDark, scrollToId } from "./ui";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0" style={gridBgDark} aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#2b6bff]/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-300">
            <BadgeCheck className="h-3.5 w-3.5 text-[#2b6bff]" aria-hidden="true" />
            Apple Authorized Reseller
          </p>
          <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            {shop.shopName}
            <span className="mt-2 block text-lg font-normal text-[#7ba4ff] sm:text-2xl">
              {shop.tagline}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-300 sm:text-base">
            {shop.heroSub}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={() => scrollToId("shop")}
              className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#2b6bff] px-6 text-[15px] font-semibold text-white transition hover:bg-[#1a54d8] focus-visible:ring-offset-zinc-950 ${focusRing}`}
            >
              Browse Phones <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              onClick={() => scrollToId("book")}
              className={`inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-white/25 px-6 text-[15px] font-semibold text-white transition hover:bg-white/10 focus-visible:ring-offset-zinc-950 ${focusRing}`}
            >
              <Wrench className="h-4 w-4" aria-hidden="true" /> Book a Repair
            </button>
          </div>

          {/* Trust strip */}
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10">
            {[
              { icon: Clock, v: "15+", l: "Years open" },
              { icon: Wrench, v: "42k+", l: "Repairs done" },
              { icon: ShieldCheck, v: "12mo", l: "Warranty" },
            ].map((s) => (
              <div key={s.l} className="bg-zinc-950 px-3 py-4 text-center sm:px-4">
                <s.icon
                  className="mx-auto mb-1.5 h-4 w-4 text-[#2b6bff]"
                  aria-hidden="true"
                />
                <dt className="sr-only">{s.l}</dt>
                <dd>
                  <span className="block text-xl font-semibold tracking-tight">{s.v}</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">
                    {s.l}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image */}
        <div className="relative mt-12 lg:col-span-6 lg:mt-0">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800">
            <img
              src={heroImage}
              alt="Latest flagship smartphone displayed on the counter at the shop"
              className="h-64 w-full object-cover sm:h-96 lg:h-[30rem]"
              loading="eager"
            />
            <div className="absolute bottom-3 left-3 rounded-lg bg-zinc-950/85 px-3 py-2 backdrop-blur">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-400">
                In store now
              </p>
              <p className="text-sm font-semibold">iPhone 15 Pro · Galaxy S24 Ultra</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
