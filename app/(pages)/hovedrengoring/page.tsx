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
  ClipboardList,
  Search,
  SprayCan,
  Building2,
  Warehouse,
} from "lucide-react";
import { Header } from "../../components/Header";
import heroImage from "../../assets/hero.jpg";
import aboutImage from "../../assets/about.jpg";

const content = {
  breadcrumbs: [{ label: "Forside", href: "/" }, { label: "Hovedrengøring" }],
  hero: {
    title: "Hovedrengøring",
    titleAccent: "i Horsens",
    intro:
      "Grundig bund-til-loft rengøring af hele boligen — ideel før indflytning, udflytning, eller et par gange om året for et virkelig rent hjem.",
    ctaLabel: "Bestil hovedrengøring",
  },
  tasks: [
    "Grundig aftørring af alle overflader, kanter og fodpaneler",
    "Rengøring bag og under møbler, hvor det er muligt",
    "Vask af vinduer indvendigt, karme og fals",
    "Afkalkning af badeværelse, fliser og armaturer",
    "Rengøring af køkken inkl. emhætte, ovn (udvendigt) og skabslåger",
    "Støvsugning og vask af gulve i alle rum",
    "Rengøring af radiatorer, lysekontakter og dørkarme",
    "Fjernelse af spindelvæv og støv fra svært tilgængelige steder",
  ],
  forWhom: [
    {
      icon: Home,
      title: "Private hjem",
      text: "Villaer, rækkehuse og lejligheder — perfekt til forårsrengøring eller inden en fest.",
    },
    {
      icon: Building2,
      title: "Ved flytning",
      text: "Grundig rengøring ved fraflytning eller indflytning, så boligen er klar til næste kapitel.",
    },
    {
      icon: Warehouse,
      title: "Mindre erhverv",
      text: "Kontorer og klinikker, der har brug for en dybere rengøring end den daglige.",
    },
  ],
  steps: [
    {
      icon: ClipboardList,
      title: "Du sender en forespørgsel",
      text: "Udfyld formularen med boligstørrelse og ønsket dato. Vi svarer typisk inden for 24 timer.",
    },
    {
      icon: Search,
      title: "Vi laver et tilbud",
      text: "Ud fra boligens størrelse og stand sender vi et fast, gennemsigtigt tilbud uden skjulte gebyrer.",
    },
    {
      icon: SprayCan,
      title: "Vi udfører rengøringen",
      text: "Vores team møder til aftalt tid med eget udstyr og miljøvenlige midler.",
    },
    {
      icon: Sparkles,
      title: "Du får et resultat, du kan mærke",
      text: "Vi gennemgår boligen sammen med dig, så du er 100% tilfreds, før vi går.",
    },
  ],
  pricing: {
    fromPrice: "1.499",
    unit: "pr. gang",
    factors: [
      "Boligens størrelse (m²)",
      "Antal værelser og badeværelser",
      "Boligens nuværende stand",
      "Om vinduer og ovn skal inkluderes",
    ],
  },
  faq: [
    {
      q: "Hvor lang tid tager en hovedrengøring?",
      a: "En almindelig lejlighed på 70-90 m² tager typisk 3-5 timer med to personer. Større boliger eller huse med meget tilbehør kan tage en hel dag.",
    },
    {
      q: "Skal jeg selv stille rengøringsmidler til rådighed?",
      a: "Nej, vi medbringer alt udstyr og miljøvenlige rengøringsmidler. Har du særlige ønsker til produkter, er du velkommen til at nævne det ved bestilling.",
    },
    {
      q: "Hvad er forskellen på hovedrengøring og almindelig rengøring?",
      a: "Almindelig rengøring holder hjemmet vedligeholdt løbende, mens hovedrengøring går i dybden — bag møbler, i skabe, vinduer, fuger og andre steder, der ikke rengøres ugentligt.",
    },
    {
      q: "Kan jeg bestille hovedrengøring som en fast, tilbagevendende ydelse?",
      a: "Ja, mange kunder vælger hovedrengøring 2-4 gange om året som supplement til den løbende rengøring. Vi laver gerne en fast aftale.",
    },
    {
      q: "Hvad koster en hovedrengøring i Horsens?",
      a: "Priserne starter fra 1.499 kr. og afhænger af boligens størrelse og stand. Du får altid et fast tilbud, inden vi går i gang.",
    },
  ],
};



function HovedrengoringHero() {
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



function WhatIncluded() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
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
              Hvad indebærer det
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
              style={{ color: "var(--color-text-dark)" }}
            >
              Hvad indebærer{" "}
              <em className="font-serif italic font-medium">hovedrengøringen</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Vi går i dybden med hvert rum og sørger for, at intet overses. Herunder ser du, hvad der som standard er inkluderet.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {content.tasks.map((task, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-2xl border p-4"
              style={{
                backgroundColor: "var(--color-section)",
                borderColor: "var(--color-border)",
              }}
            >
              <Check
                size={20}
                className="mt-0.5 shrink-0"
                style={{ color: "var(--color-accent)" }}
              />
              <span
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-text-dark)" }}
              >
                {task}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function ForWhom() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
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
            For hvem
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Hvem er{" "}
            <em className="font-serif italic font-medium">hovedrengøring</em> til?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.forWhom.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border p-7"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "var(--color-section)" }}
                >
                  <Icon size={22} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="mt-5 text-lg font-bold"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



function ProcessSteps() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
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
            Sådan foregår det
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Sådan{" "}
            <em className="font-serif italic font-medium">foregår det</em>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {i + 1}
                </div>
                <Icon size={20} className="mt-4" style={{ color: "var(--color-accent)" }} />
                <h3
                  className="mt-3 text-base font-bold"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



function Pricing() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
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
            Priser
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Hvad{" "}
            <em className="font-serif italic font-medium">koster</em> det?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Vi tror på gennemsigtige priser uden overraskelser. Du får altid et fast tilbud, før vi går i
            gang — baseret på følgende faktorer:
          </p>

          <ul className="mt-6 space-y-3">
            {content.pricing.factors.map((factor, i) => (
              <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--color-text-dark)" }}>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "var(--color-accent)" }}
                />
                {factor}
              </li>
            ))}
          </ul>

          <a
            href="/#kontakt"
            className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent)]"
            style={{ backgroundColor: "var(--color-dark)" }}
          >
            Få et gratis tilbud
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <ArrowUpRight size={16} color="#ffffff" />
            </span>
          </a>
        </div>

        <div
          className="rounded-3xl border p-8 text-center md:p-10"
          style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
        >
          <p
            className="text-sm font-medium uppercase tracking-wide"
            style={{ color: "var(--color-text-muted)" }}
          >
            Priser fra
          </p>
          <p className="mt-2 text-5xl font-extrabold" style={{ color: "var(--color-text-dark)" }}>
            {content.pricing.fromPrice} kr.
            <span className="ml-1 text-base font-medium" style={{ color: "var(--color-text-muted)" }}>
              /{content.pricing.unit}
            </span>
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Fast pris per gang — ingen skjulte gebyrer
          </p>
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
          Klar til en{" "}
          <em className="font-serif italic font-medium">skinnende ren</em> bolig?
        </h2>
        <p className="mt-4 text-white/70">
          Udfyld formularen, så vender vi tilbage med et uforpligtende tilbud inden for 24 timer.
        </p>

        <a
          href="/#kontakt"
          className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors hover:bg-[var(--color-accent)]"
          style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}
        >
          Bestil hovedrengøring
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



export default function HovedrengoringPage() {
  return (
    <main>
      <HovedrengoringHero />
      <WhatIncluded />
      <ForWhom />
      <ProcessSteps />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
