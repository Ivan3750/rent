import { Home, Sparkles, Building2, Droplets, Wrench, Armchair } from "lucide-react";

const SECTION_BG = "#EFF7FF";
const TEXT_DARK = "#17221F";
const TEXT_MUTED = "#617078";
const ACCENT = "#1C62D9";
const BORDER = "rgba(23, 34, 31, 0.1)";

const services = [
  {
    icon: Home,
    number: "01",
    title: "Rengøring af hjem",
    text: "Faste eller enkeltstående besøg, der tilpasser sig din hverdag - ikke omvendt.",
  },
  {
    icon: Sparkles,
    number: "02",
    title: "Hovedrengøring",
    text: "Dybderengøring af hvert hjørne, inklusive de steder den daglige rengøring ikke når.",
  },
  {
    icon: Building2,
    number: "03",
    title: "Kontorrengøring",
    text: "Rene fælleslokaler og skriveborde for et bedre indtryk og arbejdsmiljø.",
  },
  {
    icon: Wrench,
    number: "04",
    title: "Rengøring efter renovering",
    text: "Byggestøv og materialerester fjernes, så boligen er klar til brug med det samme.",
  },
 
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="ydelser" className="px-6 py-24 sm:px-10 lg:py-32" style={{ backgroundColor: SECTION_BG }}>
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide" style={{ color: ACCENT }}>
              02 - Ydelser
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-6xl" style={{ color: TEXT_DARK }}>
              Rent. Enkelt.
              <br />
              <span className="font-serif text-3xl font-normal italic sm:text-5xl">
                Sådan gør vi det.
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-7" style={{ color: TEXT_MUTED }}>
            Vælg det format, der passer dig - detaljer og et tidspunkt aftaler vi personligt.
          </p>
        </div>

        <div className="mt-16" style={{ borderTop: `1px solid ${BORDER}` }}>
          {services.map(({ icon: Icon, number, title, text }) => (
            <article
              key={number}
              className="group grid items-center gap-5 py-7 transition-colors md:grid-cols-[56px_72px_1fr_1fr_44px] md:py-8"
              style={{ borderBottom: `1px solid ${BORDER}` }}
            >
              <span className="text-xs font-bold" style={{ color: TEXT_MUTED }}>
                {number}
              </span>
              <span
                className="grid size-12 place-items-center rounded-full bg-white transition-transform duration-300 group-hover:rotate-6"
                style={{ color: ACCENT }}
              >
                <Icon size={22} />
              </span>
              <h3 className="text-xl font-bold sm:text-2xl" style={{ color: TEXT_DARK }}>
                {title}
              </h3>
              <p className="max-w-md text-sm leading-6" style={{ color: TEXT_MUTED }}>
                {text}
              </p>
           
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}