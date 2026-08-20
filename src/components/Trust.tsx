import { BadgeCheck, Quote } from "lucide-react";
import { reviews, shop } from "../shopConfig";
import { SectionLabel, SectionTitle, Stars, gridBg } from "./ui";

export function WhyUs() {
  return (
    <section id="about" className="relative scroll-mt-20 border-y border-zinc-200 bg-white py-14 sm:py-20">
      <div className="absolute inset-0 opacity-70" style={gridBg} aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <SectionLabel>Why choose us</SectionLabel>
            <SectionTitle>A shop that still stands behind what it sells</SectionTitle>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">{shop.about}</p>
          </div>

          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <ul className="grid gap-4 sm:grid-cols-2">
              {shop.badges.map((b) => (
                <li
                  key={b.title}
                  className="flex gap-3 rounded-xl border border-zinc-200 bg-white p-5"
                >
                  <BadgeCheck
                    className="h-5 w-5 shrink-0 text-[#2b6bff]"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-900">{b.title}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{b.note}</p>
                  </div>
                </li>
              ))}
            </ul>

            <dl className="mt-4 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">
              {shop.stats.map((s) => (
                <div key={s.label} className="bg-white px-4 py-5 text-center">
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block text-2xl font-semibold tracking-tight text-zinc-900">
                      {s.value}
                    </span>
                    <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-zinc-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Customer reviews</SectionLabel>
            <SectionTitle>4.9 average from 1,240+ reviews</SectionTitle>
          </div>
          <div className="mt-3 sm:mt-0">
            <Stars n={5} />
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <li
              key={r.name}
              className="flex flex-col rounded-xl border border-zinc-200 bg-white p-5"
            >
              <Quote className="h-5 w-5 text-[#2b6bff]/40" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-[15px] leading-relaxed text-zinc-700">
                “{r.quote}”
              </blockquote>
              <div className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">{r.name}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                    via {r.platform}
                  </p>
                </div>
                <Stars n={r.rating} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
