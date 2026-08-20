import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import { RepairServices, TradeIn } from "./components/Repairs";
import { WhyUs, Reviews } from "./components/Trust";
import { LocationHours, Footer, StickyBar } from "./components/Location";

/**
 * Mobile phone shop website template.
 * All copy, catalog, services and branding live in src/shopConfig.ts
 */
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 antialiased selection:bg-[#2b6bff] selection:text-white">
      <a
        href="#shop"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Shop />
        <RepairServices />
        <TradeIn />
        <WhyUs />
        <Reviews />
        <LocationHours />
      </main>
      <Footer />
      <StickyBar />
    </div>
  );
}
