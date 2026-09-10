import {
  Home,
  Sparkles,
  Building2,
  PanelsTopLeft,
  HardHat,
  ShieldCheck,
  Leaf,
  CalendarClock,
  BadgeDollarSign,
} from "lucide-react";
import type { NavLink, PriceRow, Reason, Service } from "./types";

export const COMPANY_NAME = "RenServ";
export const COMPANY_FULL_NAME = "RenServ Rengøring ApS";
export const PHONE = "+45 22 85 88 80";
export const PHONE_HREF = "tel:+4522858880";
export const EMAIL = "kontakt@renserv.dk";
export const CVR = "41 25 88 03";
export const ADDRESS = "Sundvej 12, 8700 Horsens";
export const SERVICE_AREA = "Horsens · Hedensted · Brædstrup · Vejle";
export const MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=9.6%2C55.75%2C10.15%2C55.98&layer=mapnik&marker=55.8607%2C9.8503";

export const NAV_LINKS: NavLink[] = [
  { href: "#om-os", label: "Om os" },
  { href: "#ydelser", label: "Ydelser" },
   { href: "#priser", label: "Priser" },
  { href: "#kontakt", label: "Kontakt" },
];

export const HERO_STATS: [string, string][] = [
  ["10+", "års erfaring"],
  ["500+", "glade kunder"],
  ["1-2", "dages svartid"],
];

export const ABOUT_POINTS: string[] = [
  "Over 10 års erfaring i branchen",
  "Svanemærkede og miljøvenlige produkter",
  "Skræddersyet løsning til dine behov",
  "Forsikret personale og fast pris",
];

export const SERVICES: Service[] = [
  {
    icon: Home,
    title: "Privat rengøring",
    text: "Fast eller enkelt rengøring af lejlighed og hus – tilpasset din hverdag.",
  },
  {
    icon: Sparkles,
    title: "Hovedrengøring",
    text: "Grundig rengøring fra top til bund, når der skal ekstra meget til.",
  },
  {
    icon: Building2,
    title: "Erhvervsrengøring",
    text: "Kontorer, klinikker og butikker – rent før eller efter åbningstid.",
  },
  {
    icon: PanelsTopLeft,
    title: "Vinduespolering",
    text: "Striberene vinduer, karme og rammer – indvendigt og udvendigt.",
  },
  {
    icon: HardHat,
    title: "Efter håndværker",
    text: "Byggerengøring og flytterengøring med afleveringsgaranti.",
  },
];

export const REASONS: Reason[] = [
  { icon: ShieldCheck, title: "Pålidelighed", text: "Samme faste team, aftalte tider og fuld forsikringsdækning." },
  { icon: Leaf, title: "Miljøvenlige midler", text: "Svanemærkede produkter, der er skånsomme mod hjem og natur." },
  { icon: CalendarClock, title: "Fleksibel plan", text: "Ugentlig, hver 14. dag eller engangsopgaver – du bestemmer." },
  { icon: BadgeDollarSign, title: "Fair priser", text: "Fast pris uden skjulte gebyrer. Servicefradrag kan benyttes." },
];

export const PRICE_ROWS: PriceRow[] = [
  { label: "Privat rengøring", value: "fra 349 kr. / time" },
  { label: "Hovedrengøring", value: "fra 399 kr. / time" },
  { label: "Vinduespolering", value: "efter aftale" },
  { label: "Erhverv", value: "fast månedspris" },
];

export const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];
