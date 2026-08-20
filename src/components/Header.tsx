import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle, Smartphone, Wrench } from "lucide-react";
import { shop } from "../shopConfig";
import { focusRing, scrollToId, telLink, waLink } from "./ui";

const NAV = [
  { label: "Shop", id: "shop" },
  { label: "Repairs", id: "repairs" },
  { label: "Brands", id: "brands" },
  { label: "Trade-In", id: "tradein" },
  { label: "About", id: "about" },
  { label: "Location", id: "location" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), 10);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white"
      } border-b border-zinc-200`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`flex shrink-0 items-center gap-2.5 rounded-md ${focusRing}`}
          aria-label={`${shop.shopName} — home`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-zinc-900">
            <Smartphone className="h-5 w-5 text-[#2b6bff]" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-[15px] font-semibold tracking-tight text-zinc-900">
              {shop.shopName}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:block">
              Sales · Service · Trade-in
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(n.id);
                  }}
                  className={`rounded-md px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-950 ${focusRing}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={waLink(`Hi ${shop.shopName}, I have a question about a phone.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-300 px-4 text-sm font-semibold text-zinc-800 transition hover:border-zinc-900 hover:bg-zinc-50 ${focusRing}`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp Us
          </a>
          <a
            href="#book"
            onClick={(e) => {
              e.preventDefault();
              go("book");
            }}
            className={`inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2b6bff] px-4 text-sm font-semibold text-white transition hover:bg-[#1a54d8] ${focusRing}`}
          >
            <Wrench className="h-4 w-4" aria-hidden="true" /> Book a Repair
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`grid h-11 w-11 place-items-center rounded-lg border border-zinc-300 text-zinc-900 lg:hidden ${focusRing}`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-zinc-200 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <ul className="divide-y divide-zinc-100">
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    go(n.id);
                  }}
                  className={`flex min-h-[48px] items-center text-base font-medium text-zinc-800 ${focusRing}`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-2 pb-2">
            <a
              href={telLink}
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-zinc-300 text-sm font-semibold text-zinc-900 ${focusRing}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call
            </a>
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                go("book");
              }}
              className={`inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#2b6bff] text-sm font-semibold text-white ${focusRing}`}
            >
              <Wrench className="h-4 w-4" aria-hidden="true" /> Book Repair
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
