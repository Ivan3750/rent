"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Home,
  Sparkles,
  Clock,
  Shield,
  Leaf,
  Check,
  Star,
  Phone,
  Mail,
  MapPin,
  Users,
  Award,
  Heart,
  Droplets,
  Wind,
  Sun,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Header } from "../../components/Header";
import heroImage from "../../assets/hero.jpg";
import aboutImage from "../../assets/about.jpg";

const content = {
  breadcrumbs: [{ label: "Forside", href: "/" }, { label: "Hjemrengøring" }],
  hero: {
    title: "Hjemrengøring",
    titleAccent: "i Horsens",
    intro:
      "Fast eller enkeltstående rengøring af din bolig. Vi tager hånd om rengøringen, så du kan bruge din tid på det, der betyder noget.",
    ctaLabel: "Bestil hjemrengøring",
  },
  featured: {
    badge: "Vores ydelser",
    title: "Fra rod til",
    titleAccent: "skinnende rent",
    services: [
      {
        name: "Residential Deep Cleaning",
        desc: "Vi går aldrig på kompromis — hvert rum får den opmærksomhed, det fortjener.",
      },
      {
        name: "Corporate Office Cleaning",
        desc: "Professionel rengøring af kontorer og erhvervslokaler.",
      },
      {
        name: "Apartment Move-Out Cleaning",
        desc: "Grundig rengøring ved udflytning eller indflytning.",
      },
      {
        name: "Restaurant Kitchen Cleaning",
        desc: "Specialiseret rengøring af kommercielle køkkener.",
      },
    ],
  },
  about: {
        badge: "Om os",
    title: "Vi tror på, at rent miljø skaber",
    titleAccent: "sundere liv",
    paragraphs: [
      "Fra private hjem til erhvervslokaler bruger vores trænede professionelle sikre rengøringsprodukter, moderne udstyr og beviste teknikker til at levere konsekvente resultater hver gang.",
      "Vi fokuserer på opmærksomhed for detaljer, funktionalitet og kundetilfredshed, fordi hvert rum fortjener at skinne.",
    ],
    ctaLabel: "Mere om os",
    stats: [
      { value: "12+", label: "Års erfaring", desc: "Leverer pålidelige rengøringsservices i over et årti." },
      { value: "2.500+", label: "Glade kunder", desc: "Støttet af tusindvis af tilfredse hjem og virksomheder." },
      { value: "15.000+", label: "Gennemførte projekter", desc: "Sucessfuldt gennemført tusindvis af rengøringsjobs." },
    ],
  },
  process: {
    badge: "Vores proces",
    title: "Fra booking til",
    titleAccent: "skinnende rent",
    steps: [
      {
        number: "01",
        title: "Anmod om et gratis tilbud",
        items: ["Del dine rengøringsbehov", "Fortæl os om din ejendom", "Få et fast, gennemsigtigt tilbud"],
      },
      {
        number: "02",
        title: "Vælg din tidsplan",
        items: ["Vælg din foretrukne dato", "Vælg en passende tid", "Bekræft din booking"],
      },
      {
        number: "03",
        title: "Professionel rengøring",
        items: ["Trænede rengøringsprofessionelle", "Kvalitetsrengøringsprodukter", "Detaljeret og grundig service"],
      },
    ],
    ctaCard: {
      title: "Lad os vide, hvad du har brug for",
      items: ["Ejendomsstørrelse og type", "Rengøringskrav", "Foretrukken service", "Foretrukken service"],
      ctaLabel: "Kontakt os",
    },
  },
  testimonials: {
    badge: "Anmeldelser",
    title: "Elsket af kunder, der værdsætter",
    titleAccent: "en bedre rengøring",
    items: [
      {
        name: "Sarah Thompson",
        role: "Hjemmejer",
        text: "Teamet oversteg mine forventninger. Hvert rum så helt nyt ud, og de lagde opmærksomhed på hver eneste detalje.",
        image: aboutImage.src,
      },
      {
        name: "Michael Carter",
        role: "Kontorchef",
        text: "De ankom til tiden, arbejdede effektivt og efterlod vores kontor skinnende rent. Varmt anbefalet!",
        image: heroImage.src,
      },
      {
        name: "Miller Jessica Mor",
        role: "Virksomhedskonsulent",
        text: "Professionel, grundig og pålidelig. RenServ er første valg til alle vores rengøringsbehov.",
        image: aboutImage.src,
      },
    ],
  },
  faq: [
    {
      q: "Hvor ofte skal I komme?",
      a: "Det er helt op til dig. De fleste kunder vælger ugentligt eller hver anden ugen, men vi tilpasser gerne frekvensen til dit behov og budget.",
    },
    {
      q: "Skal jeg være hjemme, når I kommer?",
      a: "Nej, mange kunder giver os en nøgle eller adgangskode, så vi kan komme, når det passer dig. Vi har fuld forsikring og stiller garanti for vores arbejde.",
    },
    {
      q: "Hvad koster fast rengøring af mit hjem?",
      a: "Priserne starter fra 249 kr. pr. time og afhænger af boligens størrelse og frekvens. Du får altid et fast tilbud, inden vi går i gang.",
    },
    {
      q: "Kan I bruge mine rengøringsmidler?",
      a: "Ja, hvis du har foretrukne midler, er du velkommen til at stille dem til rådighed. Ellers bruger vi vores egne miljøvenlige produkter.",
    },
    {
      q: "Hvad hvis jeg ikke er tilfreds med rengøringen?",
      a: "Kontakt os inden for 24 timer, så kommer vi gratis og ordner det. Vi vil have tilfredse kunder — det er fundamentet for vores forretning.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  1. HERO                                                            */
/* ------------------------------------------------------------------ */

function HjemrengoringHero() {
  return (
    <section
      id="top"
      className="relative min-h-[70svh] overflow-hidden text-white md:min-h-[80svh]"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

      <div className="relative z-10 flex min-h-[70svh] flex-col md:min-h-[80svh]">
        <Header />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 md:px-12 md:pb-20">
          <nav
            aria-label="Brødkrumme"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-white/70"
          >
            {content.breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <a href={crumb.href} className="transition-colors hover:text-white">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="font-medium text-white">{crumb.label}</span>
                )}
                {i < content.breadcrumbs.length - 1 && (
                  <ChevronRight size={14} className="text-white/40" />
                )}
              </span>
            ))}
          </nav>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {content.hero.title}{" "}
              <em className="font-serif font-medium italic">{content.hero.titleAccent}</em>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              {content.hero.intro}
            </p>

            <div className="mt-7 flex flex-col items-start gap-6 sm:mt-9 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="/#kontakt"
                className="group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent)]"
                style={{ backgroundColor: "var(--color-dark)" }}
              >
                {content.hero.ctaLabel}
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-white/20"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <ArrowUpRight size={16} color="#ffffff" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. FEATURED SERVICES (стиль Featured Projects)                     */
/* ------------------------------------------------------------------ */

function FeaturedServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: image */}
          <div className="relative">
            <img
              src={aboutImage.src}
              alt="Hjemrengøring"
              className="h-[400px] w-full rounded-3xl object-cover lg:h-[500px]"
            />
          </div>

          {/* Right: services list */}
          <div>
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text-dark)",
                backgroundColor: "var(--color-card)",
              }}
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              {content.featured.badge}
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
              style={{ color: "var(--color-text-dark)" }}
            >
              {content.featured.title}{" "}
              <em className="font-serif italic font-medium">{content.featured.titleAccent}</em>
            </h2>

            <div className="mt-8 space-y-4">
              {content.featured.services.map((service, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={i}
                    className="group cursor-pointer rounded-2xl border p-5 transition-all"
                    style={{
                      borderColor: isActive ? "var(--color-accent)" : "var(--color-border)",
                      backgroundColor: isActive ? "var(--color-card)" : "transparent",
                    }}
                    onClick={() => setActiveIndex(i)}
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        className="text-base font-bold"
                        style={{ color: "var(--color-text-dark)" }}
                      >
                        {service.name}
                      </h3>
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors"
                        style={{
                          backgroundColor: isActive ? "var(--color-accent)" : "var(--color-section)",
                        }}
                      >
                        <ArrowUpRight
                          size={14}
                          color={isActive ? "#ffffff" : "var(--color-text-dark)"}
                        />
                      </span>
                    </div>
                    {isActive && (
                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {service.desc}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. ABOUT (стиль About Us з статистикою)                           */
/* ------------------------------------------------------------------ */

function About() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-dark)",
              backgroundColor: "var(--color-card)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            {content.about.badge}
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            {content.about.title}{" "}
            <em className="font-serif italic font-medium">{content.about.titleAccent}</em>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: image */}
          <div className="relative">
            <img
              src={aboutImage.src}
              alt="RenServ team"
              className="h-[350px] w-full rounded-3xl object-cover"
            />
          </div>

          {/* Right: text */}
          <div>
            <div
              className="space-y-4 text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {content.about.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <a
              href="/om-os"
              className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent)]"
              style={{ backgroundColor: "var(--color-dark)" }}
            >
              {content.about.ctaLabel}
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-white/20"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                <ArrowUpRight size={16} color="#ffffff" />
              </span>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 gap-8 border-t pt-12 md:grid-cols-3" style={{ borderColor: "var(--color-border)" }}>
          {content.about.stats.map((stat, i) => (
            <div key={i}>
              <p
                className="text-4xl font-extrabold"
                style={{ color: "var(--color-text-dark)" }}
              >
                {stat.value}
              </p>
              <p
                className="mt-1 text-sm font-medium"
                style={{ color: "var(--color-text-muted)" }}
              >
                {stat.label}
              </p>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  4. PROCESS (темний стиль Our Process)                              */
/* ------------------------------------------------------------------ */

function Process() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "#ffffff",
              backgroundColor: "transparent",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            {content.process.badge}
          </div>

          <h2
            className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: "#ffffff" }}
          >
            {content.process.title}{" "}
            <em className="font-serif italic font-medium">{content.process.titleAccent}</em>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-4">
          {content.process.steps.map((step, i) => (
            <div
              key={i}
              className="rounded-3xl border p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <Check size={18} color="#ffffff" />
                </span>
                <span
                  className="text-4xl font-extrabold"
                  style={{ color: "rgba(255,255,255,0.1)" }}
                >
                  {step.number}
                </span>
              </div>

              <h3
                className="mt-6 text-lg font-bold"
                style={{ color: "#ffffff" }}
              >
                {step.title}
              </h3>

              <ul className="mt-4 space-y-2">
                {step.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2 text-sm"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    <Check
                      size={14}
                      strokeWidth={3}
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className="flex flex-col rounded-3xl border p-6"
            style={{
              backgroundColor: "var(--color-accent)",
              borderColor: "var(--color-accent)",
            }}
          >
            <h3
              className="text-lg font-bold"
              style={{ color: "#ffffff" }}
            >
              {content.process.ctaCard.title}
            </h3>

            <ul className="mt-4 flex-1 space-y-2">
              {content.process.ctaCard.items.map((item, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  <Check
                    size={14}
                    strokeWidth={3}
                    className="mt-0.5 shrink-0"
                    style={{ color: "#ffffff" }}
                  />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="/#kontakt"
              className="group mt-6 inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-semibold transition-colors"
              style={{ backgroundColor: "#ffffff", color: "var(--color-dark)" }}
            >
              {content.process.ctaCard.ctaLabel}
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-dark)" }}
              >
                <ArrowUpRight size={14} color="#ffffff" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  5. FAQ (стиль з головної сторінки)                                 */
/* ------------------------------------------------------------------ */

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="px-6 py-24 sm:px-10 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          style={{ color: "var(--color-text-dark)" }}
        >
          Ofte stillede{" "}
          <em className="font-serif italic font-medium">spørgsmål</em>
        </h2>

        <div className="mt-12 flex flex-col gap-3">
          {content.faq.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.q}
                className="cursor-pointer rounded-3xl p-6 transition-colors sm:p-7"
                style={{ backgroundColor: "var(--color-section)" }}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className="text-base font-bold sm:text-lg"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    {faq.q}
                  </h3>

                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-full transition-colors"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--color-dark)"
                        : "var(--color-card)",
                    }}
                  >
                    {isOpen ? (
                      <ChevronDown size={16} style={{ color: "var(--color-accent)" }} className="rotate-180" />
                    ) : (
                      <ChevronDown size={16} style={{ color: "var(--color-text-dark)" }} />
                    )}
                  </span>
                </div>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pt-4 text-sm leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  7. CTA                                                             */
/* ------------------------------------------------------------------ */

function CTA() {
  return (
    <section
      id="kontakt"
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
          Klar til et{" "}
          <em className="font-serif italic font-medium">skinnende rent</em> hjem?
        </h2>
        <p className="mt-4 text-white/70">
          Udfyld formularen, så vender vi tilbage med et uforpligtende tilbud inden for 24 timer.
        </p>

        <a
          href="/#kontakt"
          className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors hover:bg-[var(--color-accent)]"
          style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}
        >
          Bestil hjemrengøring
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
          >
            <ArrowUpRight size={16} color="#ffffff" />
          </span>
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  SAMLET SIDE                                                        */
/* ------------------------------------------------------------------ */

export default function HjemrengoringPage() {
  return (
    <main>
      <HjemrengoringHero />
      <FeaturedServices />
      <About />
      <Process />

      <FAQ />
      <CTA />
    </main>
  );
}
