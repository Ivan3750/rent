"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Heart,
  Shield,
  Leaf,
  Clock,
  Users,
  Award,
  Sparkles,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Header } from "../../components/Header";
import aboutImage from "../../assets/about.jpg";
import heroImage from "../../assets/hero.jpg";

const content = {
  breadcrumbs: [{ label: "Forside", href: "/" }, { label: "Om os" }],
  hero: {
    title: "Vi er",
    titleAccent: "RenServ",
    intro:
      "En familievirksomhed i Horsens, hvor vi selv står for rengøringen af både private hjem og erhverv. Vi udfører arbejdet med egne hænder og går op i, at hver eneste kunde får en grundig og pålidelig service.",
    ctaLabel: "Kontakt os",
  },
  story: {
    title: "Fra familieidé til",
    titleAccent: "rengøringsfirma",
    paragraphs: [
      "RenServ startede med en enkel observation: de fleste kunder vil gerne have en rengøring, de kan stole på — uden at skulle tænke over det. Som familie i Horsens vidste vi, hvad det kræver at bygge tillid: man skal være til stede, holde sine aftaler og levere det, man lover.",
      "I stedet for at bygge en stor virksomhed med mange ansatte, valgte vi at holde det personligt. Vi er en familie, der står for rengøringen med egne hænder. Det betyder, at vi kender vores kunder, husker deres præferencer og altid leverer den samme høje kvalitet — uanset om det er en fast ugentlig rengøring eller en engangsservice.",
      "I dag betjener vi både private hjem og erhverv i Horsens og omegn. Vores kunder ved, at de kan regne med os: vi møder til tiden, arbejder grundigt og står altid til ansvar for det resultat, vi afleverer.",
    ],
  },
  values: [
    {
      icon: Heart,
      title: "Personlig omsorg",
      text: "Vi behandler vores kunder som en del af vores familie. Hvert hjem og hver virksomhed får vores fulde opmærksomhed og respekt.",
    },
    {
      icon: Shield,
      title: "Pålidelighed",
      text: "Vi holder vores aftaler. Når vi siger, at vi kommer, kommer vi — til tiden og med det udstyr, der skal til.",
    },
    {
      icon: Leaf,
      title: "Miljøvenlig",
      text: "Vi bruger svanemærkede og skånsomme rengøringsmidler, der er sikre for børn, kæledyr og naturen.",
    },
    {
      icon: Clock,
      title: "Fleksibilitet",
      text: "Vi tilpasser os dit liv — ikke omvendt. Morgen, aften, weekend eller fast ugentlig aftale, vi finder en løsning.",
    },
  ],
  stats: [
    { value: "10+", label: "Års erfaring" },
    { value: "500+", label: "Glade kunder" },
    { value: "98%", label: "Tilfredshed" },
    { value: "1-2", label: "Dages svartid" },
  ],
  whyUs: [
    {
      icon: Users,
      title: "Familievirksomhed",
      text: "Vi står selv for rengøringen — ingen underleverandører, ingen rotte. Du ved altid, hvem der kommer.",
    },
    {
      icon: Award,
      title: "Garanti på arbejdet",
      text: "Vi stiller garanti for vores rengøring. Hvis du ikke er tilfreds, kommer vi gratis og ordner det.",
    },
    {
      icon: Sparkles,
      title: "Grundig efterkontrol",
      text: "Vi gennemgår hver opgave, før vi går. Det betyder, at du altid får den kvalitet, du har betalt for.",
    },
  ],
  faq: [
    {
      q: "Hvordan startede RenServ?",
      a: "RenServ startede som en familievirksomhed i Horsens med én enkel mission: at levere grundig og pålidelig rengøring til en fair pris. Vi begyndte med få kunder, men gennem mund-til-mund og tilfredse kunder er vi vokset til at betjene både private og erhverv i hele området.",
    },
    {
      q: "Hvem står bag rengøringen?",
      a: "Vi er en familie, der selv står for rengøringen med egne hænder. Det betyder, at vi personligt kender vores kunder, husker deres præferencer og altid leverer den samme høje kvalitet. Vi har også faste medarbejdere, der deler vores værdier.",
    },
    {
      q: "Hvad gør RenServ anderledes?",
      a: "Vi kombinerer personlig service med professionel kvalitet. Som familievirksomhed har vi en direkte relation til vores kunder, og vi tager ansvar for hver enkelt opgave. Vi bruger miljøvenlige midler, tilbyder faste priser og stiller garanti for vores arbejde.",
    },
    {
      q: "Hvilke områder dækker I?",
      a: "Vi dækker Horsens og omegn, herunder Hedensted, Brædstrup og Vejle. Kontakt os for at høre, om vi dækker dit område.",
    },
    {
      q: "Hvordan kontakter jeg jer?",
      a: "Du kan kontakte os via formularen på hjemmesiden, på telefon +45 22 85 88 80 eller på email kontakt@renserv.dk. Vi svarer altid inden for 24 timer.",
    },
  ],
};



function AboutHero() {
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



function Story() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">

          <div className="relative">
            <div className="sticky top-28">
              <div className="relative mx-auto w-full max-w-md">
                <img
                  src={aboutImage.src}
                  alt="RenServ team"
                  className="h-[420px] w-full rounded-3xl object-cover"
                />
                <img
                  src={aboutImage.src}
                  alt="RenServ detalje"
                  className="absolute -bottom-8 -left-8 h-32 w-32 rounded-2xl border-4 object-cover md:h-40 md:w-40"
                  style={{ borderColor: "var(--color-background)" }}
                />

                <div
                  className="absolute -right-4 top-6 rounded-2xl px-4 py-3 md:-right-6"
                  style={{ backgroundColor: "var(--color-dark)" }}
                >
                  <p className="text-2xl font-extrabold text-white">10+</p>
                  <p className="text-xs text-white/70">Års erfaring</p>
                </div>
              </div>
            </div>
          </div>


          <div className="max-w-xl">
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
              Vores historie
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
              style={{ color: "var(--color-text-dark)" }}
            >
              {content.story.title}{" "}
              <em className="font-serif italic font-medium">{content.story.titleAccent}</em>
            </h2>

            <div
              className="mt-6 space-y-4 text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {content.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Contact quick info */}
            <div
              className="mt-8 flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:gap-8"
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-section)" }}
                >
                  <Phone size={18} style={{ color: "var(--color-accent)" }} />
                </span>
                <div>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Telefon</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-dark)" }}>+45 22 85 88 80</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-section)" }}
                >
                  <Mail size={18} style={{ color: "var(--color-accent)" }} />
                </span>
                <div>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Email</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-dark)" }}>kontakt@renserv.dk</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-section)" }}
                >
                  <MapPin size={18} style={{ color: "var(--color-accent)" }} />
                </span>
                <div>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>Område</p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-dark)" }}>Horsens & omegn</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Values() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-section)" }}
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
              Vores værdier
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
              style={{ color: "var(--color-text-dark)" }}
            >
              Hvad vi{" "}
              <em className="font-serif italic font-medium">står for</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            fire værdier, der guider alt, vi gør — fra den første henvendelse til den sidste efterkontrol.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.values.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="group rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors"
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



function Stats() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {content.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p
                className="text-4xl font-extrabold md:text-5xl"
                style={{ color: "var(--color-accent)" }}
              >
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function WhyUs() {
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
            Hvorfor os
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Derfor vælger kunderne{" "}
            <em className="font-serif italic font-medium">RenServ</em>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.whyUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="relative overflow-hidden rounded-3xl border p-8"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: "var(--color-border)",
                }}
              >

                <span
                  className="absolute -right-2 -top-4 text-8xl font-extrabold opacity-5"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div
                  className="relative flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: "var(--color-section)" }}
                >
                  <Icon size={22} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="relative mt-5 text-lg font-bold"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="relative mt-2 text-sm leading-relaxed"
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
          Klar til at møde{" "}
          <em className="font-serif italic font-medium">vores team</em>?
        </h2>
        <p className="mt-4 text-white/70">
          Kontakt os i dag for et uforpligtende tilbud — vi svarer inden for 24 timer.
        </p>

        <a
          href="/#kontakt"
          className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors hover:bg-[var(--color-accent)]"
          style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}
        >
          Kontakt os i dag
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



export default function OmOsPage() {
  return (
    <main>
      <AboutHero />
      <Story />
      <Values />
      <Stats />
      <WhyUs />
      <FAQ />
      <CTA />
    </main>
  );
}
