/* =============================================================
   SHOP CONFIG — edit everything here to re-skin the whole site.
   Swap in a new shop's branding, catalog, and services and the
   entire template updates. No component edits required.
   ============================================================= */

export type Stock = "in" | "limited" | "out";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  specs: string[];
  tag?: "New Arrival" | "Best Seller" | "On Offer" | "Refurbished";
  stock: Stock;
}

export const shop = {
  /* ---------- Identity ---------- */
  shopName: "VoltCell Mobile",
  shortName: "VoltCell",
  tagline: "Your trusted mobile store since 2010.",
  heroSub:
    "Authorized dealer for Apple, Samsung & Xiaomi. Same-day screen and battery repairs by certified technicians — walk in, or book ahead in 30 seconds.",
  currency: "$",

  /* ---------- Contact ---------- */
  phone: "+1 (415) 555-0142",
  phoneRaw: "+14155550142",
  whatsapp: "14155550142", // digits only, country code first
  email: "hello@voltcellmobile.com",
  instagram: "https://instagram.com/voltcellmobile",
  facebook: "https://facebook.com/voltcellmobile",

  /* ---------- Location ---------- */
  address: "1420 Market Street, Suite 3, San Francisco, CA 94102",
  mapEmbed:
    "https://www.google.com/maps?q=1420+Market+Street+San+Francisco+CA&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=1420+Market+Street+San+Francisco+CA+94102",
  parking: "Free 60-min customer parking in the rear lot off Jessie St.",

  hours: [
    { day: "Monday", time: "10:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 8:00 PM" },
    { day: "Thursday", time: "10:00 AM – 8:00 PM" },
    { day: "Friday", time: "10:00 AM – 9:00 PM" },
    { day: "Saturday", time: "11:00 AM – 7:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  /* ---------- About & trust ---------- */
  about:
    "VoltCell Mobile opened its doors on Market Street in 2010 with a simple promise: sell honest hardware and fix what's broken without the runaround. Fifteen years later we're an Apple Authorized Reseller and a Samsung Care partner, with a five-bench repair lab in the back of the store. Every phone we sell is unlocked and inspected; every repair we do carries a written warranty.",

  stats: [
    { value: "15+", label: "Years in business" },
    { value: "42,000+", label: "Repairs completed" },
    { value: "68,000+", label: "Customers served" },
    { value: "4.9★", label: "Average rating" },
  ],

  badges: [
    { title: "Apple Authorized Reseller", note: "Genuine parts & sealed stock" },
    { title: "Samsung Care Partner", note: "Warranty-safe repairs" },
    { title: "12-Month Repair Warranty", note: "Parts and labour covered" },
    { title: "Certified Technicians", note: "IPC-7711 & WISE certified" },
  ],

  financing:
    "0% EMI for 6 months on purchases over $499 with Visa, Mastercard & Amex. Affirm financing available up to 24 months.",

  /* ---------- Brands ---------- */
  brands: [
    { name: "Apple", initials: "", accent: "#0b0b0c" },
    { name: "Samsung", initials: "SAMSUNG", accent: "#1428a0" },
    { name: "Xiaomi", initials: "MI", accent: "#ff6900" },
    { name: "OnePlus", initials: "1+", accent: "#eb0028" },
    { name: "Google", initials: "G", accent: "#1a73e8" },
    { name: "Nothing", initials: "( )", accent: "#111" },
    { name: "Motorola", initials: "M", accent: "#5c92fa" },
  ],

  categories: ["New Phones", "Refurbished", "Accessories", "Wearables"],
};

/* ---------- Catalog ---------- */
const IMG = {
  a: "https://images.pexels.com/photos/14979013/pexels-photo-14979013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  b: "https://images.pexels.com/photos/18311092/pexels-photo-18311092.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  c: "https://images.pexels.com/photos/36680544/pexels-photo-36680544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  d: "https://images.pexels.com/photos/11120516/pexels-photo-11120516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  e: "https://images.pexels.com/photos/18311089/pexels-photo-18311089.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  f: "https://images.pexels.com/photos/29765810/pexels-photo-29765810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
};

export const heroImage = IMG.a;
export const repairImage =
  "https://images.pexels.com/photos/6754839/pexels-photo-6754839.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200";

export const products: Product[] = [
  {
    id: "ip15p",
    name: "iPhone 15 Pro 256GB",
    brand: "Apple",
    category: "New Phones",
    price: 1099,
    image: IMG.b,
    specs: ["6.1\" Super Retina XDR", "A17 Pro", "48MP Main", "Titanium"],
    tag: "Best Seller",
    stock: "in",
  },
  {
    id: "s24u",
    name: "Galaxy S24 Ultra 512GB",
    brand: "Samsung",
    category: "New Phones",
    price: 1299,
    oldPrice: 1419,
    image: IMG.c,
    specs: ["6.8\" QHD+ 120Hz", "Snapdragon 8 Gen 3", "200MP", "S Pen"],
    tag: "On Offer",
    stock: "limited",
  },
  {
    id: "px8",
    name: "Pixel 8 Pro 128GB",
    brand: "Google",
    category: "New Phones",
    price: 899,
    image: IMG.d,
    specs: ["6.7\" LTPO OLED", "Tensor G3", "7 yrs updates", "IP68"],
    tag: "New Arrival",
    stock: "in",
  },
  {
    id: "op12",
    name: "OnePlus 12 256GB",
    brand: "OnePlus",
    category: "New Phones",
    price: 799,
    image: IMG.a,
    specs: ["6.82\" 120Hz", "5400mAh", "100W SUPERVOOC", "Hasselblad"],
    stock: "in",
  },
  {
    id: "ip13r",
    name: "iPhone 13 128GB (Refurb)",
    brand: "Apple",
    category: "Refurbished",
    price: 469,
    oldPrice: 599,
    image: IMG.f,
    specs: ["Grade A cosmetic", "New battery ≥95%", "Unlocked", "12-mo warranty"],
    tag: "Refurbished",
    stock: "limited",
  },
  {
    id: "s22r",
    name: "Galaxy S22 128GB (Refurb)",
    brand: "Samsung",
    category: "Refurbished",
    price: 349,
    image: IMG.c,
    specs: ["Grade A cosmetic", "New battery", "Unlocked", "12-mo warranty"],
    tag: "Refurbished",
    stock: "in",
  },
  {
    id: "redmi13",
    name: "Redmi Note 13 Pro 256GB",
    brand: "Xiaomi",
    category: "New Phones",
    price: 329,
    image: IMG.d,
    specs: ["6.67\" AMOLED", "200MP camera", "5100mAh", "67W charge"],
    tag: "On Offer",
    stock: "in",
  },
  {
    id: "nothing2a",
    name: "Nothing Phone (2a)",
    brand: "Nothing",
    category: "New Phones",
    price: 349,
    image: IMG.b,
    specs: ["6.7\" 120Hz", "Glyph interface", "5000mAh", "Dimensity 7200"],
    tag: "New Arrival",
    stock: "out",
  },
  {
    id: "watch9",
    name: "Apple Watch Series 9 45mm",
    brand: "Apple",
    category: "Wearables",
    price: 429,
    image: IMG.e,
    specs: ["Always-On Retina", "Double Tap", "ECG + SpO₂", "GPS"],
    stock: "in",
  },
  {
    id: "gw6",
    name: "Galaxy Watch 6 Classic",
    brand: "Samsung",
    category: "Wearables",
    price: 379,
    oldPrice: 429,
    image: IMG.e,
    specs: ["Rotating bezel", "Wear OS 4", "BioActive sensor", "IP68"],
    tag: "On Offer",
    stock: "limited",
  },
  {
    id: "buds",
    name: "Galaxy Buds3 Pro",
    brand: "Samsung",
    category: "Accessories",
    price: 189,
    image: IMG.e,
    specs: ["Adaptive ANC", "24-bit Hi-Fi", "6h + 24h case", "IPX7"],
    stock: "in",
  },
  {
    id: "magcharge",
    name: "MagSafe 3-in-1 Charger",
    brand: "Apple",
    category: "Accessories",
    price: 129,
    image: IMG.f,
    specs: ["15W MagSafe", "Watch + Buds pad", "Foldable", "USB-C 35W"],
    stock: "in",
  },
];

/* ---------- Repair services ---------- */
export const repairs = [
  {
    icon: "screen",
    name: "Screen Replacement",
    desc: "OEM-grade OLED and LCD panels for iPhone, Galaxy, Pixel and more. True-tone and face-ID preserved.",
    time: "45–90 min",
    from: 79,
  },
  {
    icon: "battery",
    name: "Battery Replacement",
    desc: "New cells with health calibration and a fresh adhesive seal. Old battery recycled free of charge.",
    time: "30–45 min",
    from: 49,
  },
  {
    icon: "water",
    name: "Water Damage Repair",
    desc: "Ultrasonic board cleaning, corrosion treatment and component-level diagnostics. No-fix, no-fee.",
    time: "24–72 hrs",
    from: 99,
  },
  {
    icon: "port",
    name: "Charging Port Repair",
    desc: "Micro-soldered USB-C and Lightning port replacement — not just a socket clean.",
    time: "60–120 min",
    from: 59,
  },
  {
    icon: "camera",
    name: "Camera & Lens Repair",
    desc: "Rear glass, lens module and OIS replacement with full calibration on our test rig.",
    time: "60 min",
    from: 69,
  },
  {
    icon: "chip",
    name: "Motherboard Diagnostics",
    desc: "Component-level microsoldering for boot loops, no-power and signal faults. Free estimate first.",
    time: "2–5 days",
    from: 129,
  },
  {
    icon: "data",
    name: "Data Recovery",
    desc: "Recover photos and messages from dead or liquid-damaged devices in our clean-bench lab.",
    time: "1–3 days",
    from: 149,
  },
  {
    icon: "shield",
    name: "Software & Unlock",
    desc: "OS restores, carrier unlocks, malware removal and full device-to-device migration.",
    time: "Same day",
    from: 39,
  },
  {
    icon: "back",
    name: "Back Glass Replacement",
    desc: "Laser-separated back glass removal — the safe method that protects the wireless charging coil.",
    time: "2–4 hrs",
    from: 89,
  },
];

/* ---------- Trade-in ---------- */
export const tradeIn = {
  enabled: true,
  headline: "Trade in. Trade up. Walk out with the new one today.",
  blurb:
    "Bring in any working phone from the last six years and we'll price it on the spot. Credit applies instantly to your new device — no mail-in kits, no two-week wait for a cheque.",
  steps: [
    { title: "Bring it in", text: "Any brand, any condition. Bring your charger if you still have it." },
    { title: "60-second appraisal", text: "We run a diagnostic and check cosmetic grade while you wait." },
    { title: "Instant credit", text: "Accept the quote and the value comes straight off your new phone." },
    { title: "We wipe it", text: "Certified data erasure with a signed destruction certificate." },
  ],
  examples: [
    { model: "iPhone 14 Pro", value: "up to $520" },
    { model: "Galaxy S23", value: "up to $340" },
    { model: "Pixel 7", value: "up to $210" },
  ],
};

/* ---------- Reviews ---------- */
export const reviews = [
  {
    name: "Marisol Reyes",
    rating: 5,
    platform: "Google",
    quote:
      "Cracked my 15 Pro screen on a Friday afternoon and had it back before dinner. They showed me the old panel and the part invoice — that kind of transparency is rare.",
  },
  {
    name: "Devon Clarke",
    rating: 5,
    platform: "Yelp",
    quote:
      "Bought a refurbished iPhone 13 here instead of paying full price elsewhere. Battery was at 100%, came boxed, and the 12-month warranty is real — they replaced a faulty speaker no questions asked.",
  },
  {
    name: "Priya Nandakumar",
    rating: 5,
    platform: "Google",
    quote:
      "Two other shops told me my water-damaged Galaxy was dead. VoltCell cleaned the board and recovered every photo of my daughter's first year. I will never go anywhere else.",
  },
  {
    name: "Tom Osei",
    rating: 4,
    platform: "Facebook",
    quote:
      "Fair trade-in value on my old Pixel — about $60 more than the carrier offered. Store gets busy on Saturdays so book ahead, but the work is solid.",
  },
  {
    name: "Hannah Weiss",
    rating: 5,
    platform: "Google",
    quote:
      "Battery swap in 35 minutes flat while I got coffee next door. Priced exactly what they quoted on WhatsApp the night before.",
  },
  {
    name: "Luis Ferreira",
    rating: 5,
    platform: "Yelp",
    quote:
      "They set up my whole family on new Galaxy phones, moved all the data across, and even walked my mother through her settings. Proper old-school service.",
  },
];
