import { useState } from "react";
import {
  Smartphone,
  BatteryCharging,
  Droplets,
  Plug,
  Camera,
  Cpu,
  HardDrive,
  ShieldCheck,
  Layers,
  Clock,
  CheckCircle2,
  Send,
  ArrowRight,
} from "lucide-react";
import { repairs, shop, tradeIn, repairImage } from "../shopConfig";
import { SectionLabel, SectionTitle, focusRing, waLink } from "./ui";

const icons: Record<string, React.ElementType> = {
  screen: Smartphone,
  battery: BatteryCharging,
  water: Droplets,
  port: Plug,
  camera: Camera,
  chip: Cpu,
  data: HardDrive,
  shield: ShieldCheck,
  back: Layers,
};

/* ---------------- Repair services + booking ---------------- */
export function RepairServices() {
  const [service, setService] = useState(repairs[0].name);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    model: "",
    issue: "",
    date: "",
  });
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const message = `Repair booking request for ${shop.shopName}
Name: ${form.name}
Phone: ${form.phone}
Device: ${form.model}
Service: ${service}
Issue: ${form.issue}
Preferred date: ${form.date}`;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    window.open(waLink(message), "_blank", "noopener");
  };

  const field =
    "mt-1 block w-full min-h-[44px] rounded-lg border border-zinc-300 bg-white px-3 py-2 text-[15px] text-zinc-900 placeholder-zinc-400 focus:border-[#2b6bff] focus:outline-none focus:ring-2 focus:ring-[#2b6bff]/40";

  return (
    <section id="repairs" className="scroll-mt-20 bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <SectionLabel>Repair lab</SectionLabel>
          <SectionTitle>Fixed properly, usually the same day</SectionTitle>
          <p className="mt-4 text-[15px] leading-relaxed text-zinc-600">
            Five benches, genuine and OEM-grade parts, and a written 12-month warranty on
            every job. Prices below are starting points — we confirm the exact quote before
            we touch your device.
          </p>
        </div>

        {/* Service grid */}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {repairs.map((r) => {
            const Icon = icons[r.icon] ?? Smartphone;
            return (
              <li
                key={r.name}
                className="flex flex-col rounded-xl border border-zinc-200 p-5 transition hover:border-[#2b6bff]/50 hover:shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#2b6bff]/10">
                  <Icon className="h-5 w-5 text-[#2b6bff]" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{r.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{r.desc}</p>
                <dl className="mt-4 flex items-center justify-between border-t border-zinc-100 pt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    <dt className="sr-only">Turnaround</dt>
                    <dd>{r.time}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Starting price</dt>
                    <dd className="text-sm font-semibold tracking-normal text-zinc-900">
                      from {shop.currency}
                      {r.from}
                    </dd>
                  </div>
                </dl>
                <button
                  onClick={() => {
                    setService(r.name);
                    document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`mt-4 inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-zinc-300 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-50 ${focusRing}`}
                >
                  Book Repair <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </li>
            );
          })}
        </ul>

        {/* Booking form */}
        <div
          id="book"
          className="mt-14 scroll-mt-20 overflow-hidden rounded-2xl border border-zinc-200 lg:grid lg:grid-cols-2"
        >
          <div className="relative hidden lg:block">
            <img
              src={repairImage}
              alt="Technician repairing a smartphone under a microscope at the repair bench"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#7ba4ff]">
                No-fix, no-fee
              </p>
              <p className="mt-2 text-xl font-semibold leading-snug">
                Diagnostics are free. You only pay if we fix it.
              </p>
            </div>
          </div>

          <div className="bg-zinc-50 p-5 sm:p-8">
            <h3 className="text-xl font-semibold tracking-tight text-zinc-900">
              Book a repair
            </h3>
            <p className="mt-2 text-sm text-zinc-600">
              Fill this in and we'll open WhatsApp with your details pre-filled — or just
              call us on{" "}
              <a href={`tel:${shop.phoneRaw}`} className="font-medium text-[#2b6bff] underline">
                {shop.phone}
              </a>
              .
            </p>

            <form onSubmit={submit} className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="rname" className="text-sm font-medium text-zinc-800">
                  Your name
                </label>
                <input
                  id="rname"
                  required
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  className={field}
                  placeholder="Alex Rivera"
                />
              </div>
              <div>
                <label htmlFor="rphone" className="text-sm font-medium text-zinc-800">
                  Phone number
                </label>
                <input
                  id="rphone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className={field}
                  placeholder="(415) 555-0142"
                />
              </div>
              <div>
                <label htmlFor="rmodel" className="text-sm font-medium text-zinc-800">
                  Device model
                </label>
                <input
                  id="rmodel"
                  required
                  value={form.model}
                  onChange={(e) => set("model", e.target.value)}
                  className={field}
                  placeholder="iPhone 14 Pro"
                />
              </div>
              <div>
                <label htmlFor="rservice" className="text-sm font-medium text-zinc-800">
                  Service needed
                </label>
                <select
                  id="rservice"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={field}
                >
                  {repairs.map((r) => (
                    <option key={r.name}>{r.name}</option>
                  ))}
                  <option>Something else / not sure</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="rissue" className="text-sm font-medium text-zinc-800">
                  Describe the issue
                </label>
                <textarea
                  id="rissue"
                  rows={3}
                  value={form.issue}
                  onChange={(e) => set("issue", e.target.value)}
                  className={field}
                  placeholder="Screen cracked after a drop; touch works but the top third is black."
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="rdate" className="text-sm font-medium text-zinc-800">
                  Preferred date
                </label>
                <input
                  id="rdate"
                  type="date"
                  value={form.date}
                  onChange={(e) => set("date", e.target.value)}
                  className={field}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className={`inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl bg-[#2b6bff] px-6 text-[15px] font-semibold text-white transition hover:bg-[#1a54d8] ${focusRing}`}
                >
                  <Send className="h-4 w-4" aria-hidden="true" /> Send booking via WhatsApp
                </button>
                {sent && (
                  <p
                    role="status"
                    className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-700"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    WhatsApp opened with your booking. We reply within the hour during opening
                    times.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trade-in ---------------- */
export function TradeIn() {
  if (!tradeIn.enabled) return null;
  return (
    <section id="tradein" className="scroll-mt-20 bg-zinc-950 py-14 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#7ba4ff]">
              <span className="h-px w-6 bg-[#7ba4ff]" aria-hidden="true" /> Trade-in program
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {tradeIn.headline}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-300">{tradeIn.blurb}</p>

            <ul className="mt-6 space-y-2">
              {tradeIn.examples.map((e) => (
                <li
                  key={e.model}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm"
                >
                  <span className="text-zinc-200">{e.model}</span>
                  <span className="font-semibold text-[#7ba4ff]">{e.value}</span>
                </li>
              ))}
            </ul>

            <a
              href={waLink(
                `Hi ${shop.shopName}, I'd like a trade-in quote. My current phone is: `
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-6 inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl bg-[#2b6bff] px-6 text-[15px] font-semibold text-white transition hover:bg-[#1a54d8] focus-visible:ring-offset-zinc-950 ${focusRing}`}
            >
              Get my trade-in quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:mt-0">
            {tradeIn.steps.map((s, i) => (
              <li
                key={s.title}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="font-mono text-xs text-[#7ba4ff]">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
