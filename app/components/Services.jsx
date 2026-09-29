import { Home, Sparkles, Building2, Wrench } from "lucide-react";

const SECTION_BG = "#F6F9F8";
const TEXT_DARK = "#17221F";
const TEXT_MUTED = "#617078";
const ACCENT = "#3F59CE";
const CARD_BG = "#FFFFFF";
const DARK = "#14181A";

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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M4 12L12 4M12 4H5.5M12 4V10.5"
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
    <section
      id="ydelser"
      className="px-6 py-24 sm:px-10 lg:py-32"
      style={{ backgroundColor: SECTION_BG }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            {/* Badge */}
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
              style={{ borderColor: "#E1E7E4", color: TEXT_DARK }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: ACCENT }}
              />
              Ydelser
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
              style={{ color: TEXT_DARK }}
            >
              Rent, enkelt og{" "}
              <em className="font-serif italic font-medium">pålideligt</em>
            </h2>
          </div>

          <p
            className="max-w-sm text-base leading-relaxed"
            style={{ color: TEXT_MUTED }}
          >
            Vælg det format, der passer dig - detaljer og et tidspunkt aftaler
            vi personligt.
          </p>
        </div>

        {/* Service rows */}
        <div className="mt-14 flex flex-col gap-4">
          {services.map(({ icon: Icon, number, title, text }) => (
            <article
              key={number}
              className="group grid grid-cols-[40px_48px_1fr_44px] items-center gap-5 rounded-2xl p-5 border border-[var(--color-border)] transition-all sm:grid-cols-[40px_56px_1fr_1fr_48px] sm:p-6"
              style={{ backgroundColor: CARD_BG }}
            >
              <span
                className="text-xs font-bold"
                style={{ color: TEXT_MUTED }}
              >
                {number}
              </span>

              <span
                className="grid size-11 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-6 sm:size-12"
                style={{ backgroundColor: SECTION_BG, color: TEXT_DARK }}
              >
                <Icon size={20} />
              </span>

              <h3
                className="text-lg font-bold sm:text-xl"
                style={{ color: TEXT_DARK }}
              >
                {title}
              </h3>

              <p
                className="hidden max-w-md text-sm leading-relaxed sm:block"
                style={{ color: TEXT_MUTED }}
              >
                {text}
              </p>

              <span
                className="grid size-10 place-items-center justify-self-end rounded-full transition-colors group-hover:bg-[#3F59CE] sm:size-11"
                style={{ backgroundColor: DARK }}
              >
                <ArrowIcon />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}