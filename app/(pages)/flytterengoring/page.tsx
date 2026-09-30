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
  Package,
  Truck,
  Key,
  ClipboardList,
  Search,
  SprayCan,
} from "lucide-react";
import { Header } from "../../components/Header";
import heroImage from "../../assets/hero.jpg";
import aboutImage from "../../assets/about.jpg";

const content = {
  breadcrumbs: [{ label: "Forside", href: "/" }, { label: "Flytterengøring" }],
  hero: {
    title: "Flytterengøring",
    titleAccent: "i Horsens",
    intro:
      "Klargøring af boligen til aflevering eller nye beboere. Vi sørger for, at alt er rent og klar, så du kan flytte ud eller ind med ro i sindet.",
    ctaLabel: "Bestil flytterengøring",
  },
  featured: {
    badge: "Vores ydelser",
    title: "Fra gammel bolig til",
    titleAccent: "ny beboer",
    services: [
      {
        name: "Move-Out Cleaning",
        desc: "Grundig rengøring ved udflytning — så du får din depositum tilbage.",
      },
      {
        name: "Move-In Cleaning",
        desc: "Klargøring af boligen før du flytter ind — rent fra dag ét.",
      },
      {
        name: "End of Tenancy Cleaning",
        desc: "Professionel rengøring der opfylder alle krav i lejekontrakten.",
      },
      {
        name: "Post-Renovation Cleaning",
        desc: "Fjernelse af byggestøv og rester efter renovering.",
      },
    ],
  },
  about: {
    badge: "Om os",
    title: "Vi gør flytningen",
    titleAccent: "enklere",
    paragraphs: [
      "Flytning er stressende nok i forvejen. Derfor sørger vi for, at rengøringen ikke er en del af problemet. Vores team klargør boligen grundigt — uanset om det er til aflevering eller til din indflytning.",
      "Vi bruger miljøvenlige produkter og moderne udstyr, så vi leverer et resultat, der både er rent og sikkert for dig og din familie.",
    ],
    ctaLabel: "Mere om os",
    stats: [
      { value: "500+", label: "Gennemførte flytninger", desc: "Hjulpet hundredvis af familier med at flytte ud og ind." },
      { value: "98%", label: "Tilfredshed", desc: "Kunder, der vil anbefale os til venner og familie." },
      { value: "24h", label: "Svar tid", desc: "Vi svarer på alle henvendelser inden for 24 timer." },
    ],
  },
  process: {
    badge: "Vores proces",
    title: "Fra booking til",
    titleAccent: "nøglelevering",
    steps: [
      {
        number: "01",
        title: "Anmod om et tilbud",
        items: ["Fortæl os om din bolig", "Vælg dato og tidspunkt", "Få et fast tilbud"],
      },
      {
        number: "02",
        title: "Vi planlægger",
        items: ["Grundig gennemgang af boligen", "Identificering af særlige behov", "Tidsplan og logistik"],
      },
      {
        number: "03",
        title: "Vi rengør",
        items: ["Professionelt team", "Miljøvenlige produkter", "Grundig efterkontrol"],
      },
    ],
    ctaCard: {
      title: "Klar til at flytte?",
      items: ["Boligstørrelse og type", "Dato for flytning", "Særlige krav", "Kontaktinformation"],
      ctaLabel: "Kontakt os",
    },
  },
  testimonials: {
    badge: "Anmeldelser",
    title: "Elsket af kunder, der værdsætter",
    titleAccent: "en problemfri flytning",
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
      q: "Hvad er forskellen på flytterengøring og almindelig rengøring?",
      a: "Flytterengøring er en grundig, dybdegående rengøring, der dækker alle områder af boligen — inklusive bag møbler, i skabe og andre svært tilgængelige steder. Det er designet til at klargøre boligen til aflevering eller indflytning.",
    },
    {
      q: "Hvor lang tid tager en flytterengøring?",
      a: "En almindelig lejlighed på 70-90 m² tager typisk 4-6 timer. Større boliger eller huse kan tage en hel dag. Vi giver dig altid et præcist estimat, når vi kender detaljerne.",
    },
    {
      q: "Skal jeg være hjemme under rengøringen?",
      a: "Nej, mange kunder giver os en nøgle eller adgangskode. Vi er fuldt forsikret og stiller garanti for vores arbejde.",
    },
    {
      q: "Hvad koster en flytterengøring?",
      a: "Priserne starter fra 1.499 kr. og afhænger af boligens størrelse og stand. Du får altid et fast tilbud, inden vi går i gang.",
    },
    {
      q: "Kan I hjælpe med at pakke og flytte møbler?",
      a: "Vi fokuserer på rengøring, men vi kan hjælpe med at flytte lettere møbler for at nå under og bag dem. Kontakt os for at høre mere.",
    },
  ],
};



function FlytterengoringHero() {
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



function FeaturedServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          <div className="relative">
            <img
              src={aboutImage.src}
              alt="Flytterengøring"
              className="h-[400px] w-full rounded-3xl object-cover lg:h-[500px]"
            />
          </div>


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

          <div className="relative">
            <img
              src={aboutImage.src}
              alt="RenServ team"
              className="h-[350px] w-full rounded-3xl object-cover"
            />
          </div>


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



function CTA() {
  return (
    <section
      id="kontakt"
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
          Klar til at{" "}
          <em className="font-serif italic font-medium">flytte</em>?
        </h2>
        <p className="mt-4 text-white/70">
          Kontakt os i dag for et uforpligtende tilbud — vi svarer inden for 24 timer.
        </p>

        <a
          href="/#kontakt"
          className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors hover:bg-[var(--color-accent)]"
          style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}
        >
          Bestil flytterengøring
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



export default function FlytterengoringPage() {
  return (
    <main>
      <FlytterengoringHero />
      <FeaturedServices />
      <About />
      <Process />

      <FAQ />
      <CTA />
    </main>
  );
}
