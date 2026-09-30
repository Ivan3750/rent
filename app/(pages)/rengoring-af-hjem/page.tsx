"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Home,
  CalendarClock,
  RefreshCw,
  ClipboardList,
  Search,
  SprayCan,
  Sparkles,
} from "lucide-react";
import { Header } from "../../components/Header";
import WhatsIncluded from "./_components/WhatsIncluded";
import aboutImage from "../../assets/about.jpg";



const content = {
  breadcrumbs: [{ label: "Forside", href: "/" }, { label: "Rengøring af hjem" }],
  hero: {
    title: "Rengøring af",
    titleAccent: "hjem",
    intro:
      "Faste rengøringsbesøg i dit hjem — ugentligt, hver anden ugen eller efter behov. Vi tager hånd om rengøringen, så du kan bruge din tid på det, der betyder noget.",
    ctaLabel: "Bestil rengøring",
  },
  forWhom: [
    {
      icon: Home,
      title: "Par og familier",
      text: "Faste besøg, der holder hjemmet rent og hyggeligt året rundt.",
    },
    {
      icon: CalendarClock,
      title: "Travle hverdage",
      text: "Vi passer ind i din kalender — morgen, aften eller weekend.",
    },
    {
      icon: RefreshCw,
      title: "Skift i livet",
      text: "Flytning, ny baby eller ombygning — vi hjælper med rengøringen.",
    },
  ],
  steps: [
    {
      icon: ClipboardList,
      title: "Du sender en forespørgsel",
      text: "Udfyld formularen med boligstørrelse og ønsket frekvens. Vi svarer inden for 24 timer.",
    },
    {
      icon: Search,
      title: "Vi laver et tilbud",
      text: "Ud fra boligens størrelse og dine ønsker sender vi et fast, gennemsigtigt tilbud.",
    },
    {
      icon: SprayCan,
      title: "Vi udfører rengøringen",
      text: "Vores team møder til aftalt tid med eget udstyr og miljøvenlige midler.",
    },
    {
      icon: Sparkles,
      title: "Du nyder et rent hjem",
      text: "Vi gennemgår arbejdet sammen med dig, så du er 100% tilfreds.",
    },
  ],
  pricing: {
    fromPrice: "249",
    unit: "pr. time",
    factors: [
      "Boligens størrelse (m²)",
      "Antal værelser og badeværelser",
      "Frekvens (ugentligt / hver anden ugen)",
      "Særlige ønsker eller krav",
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



function ServiceHero() {
  return (
    <section
      id="top"
      className="relative min-h-[70svh] overflow-hidden text-white md:min-h-[80svh]"
    >
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
                className="group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: "#3F59CE" }}
              >
                {content.hero.ctaLabel}
                <span className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-white/20" style={{ backgroundColor: "rgba(255,255,255,0.2)" }}>
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



function ForWhom() {
  return (
    <section className="px-6 py-24 md:px-12" style={{ backgroundColor: "#F6F9F8" }}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "#E5E7E6", color: "#14181A", backgroundColor: "transparent" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#3F59CE" }}
            />
            For hvem
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "#14181A" }}
          >
            Hvem er{" "}
            <em className="font-serif italic font-medium">rengøring af hjem</em> til?
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {content.forWhom.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border p-7"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7E6" }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#3F59CE" }}
                >
                  <Icon size={22} style={{ color: "#14181A" }} />
                </div>
                <h3 className="mt-5 text-lg font-bold" style={{ color: "#14181A" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#617078" }}>
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
    <section className="px-6 py-24 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-6xl">
        <h2
          className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
          style={{ color: "#14181A" }}
        >
          Sådan{" "}
          <em className="font-serif italic font-medium">foregår det</em>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {content.steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: "#3F59CE" }}
                >
                  {i + 1}
                </div>
                <Icon size={20} className="mt-4" style={{ color: "#14181A" }} />
                <h3 className="mt-3 text-base font-bold" style={{ color: "#14181A" }}>
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#617078" }}>
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
    <section className="px-6 py-24 md:px-12" style={{ backgroundColor: "#F6F9F8" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "#14181A" }}
          >
            Hvad{" "}
            <em className="font-serif italic font-medium">koster</em> det?
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: "#617078" }}>
            Vi tror på gennemsigtige priser uden overraskelser. Du får altid et fast tilbud, før vi går i
            gang — baseret på følgende faktorer:
          </p>

          <ul className="mt-6 space-y-3">
            {content.pricing.factors.map((factor, i) => (
              <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#14181A" }}>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#3F59CE" }}
                />
                {factor}
              </li>
            ))}
          </ul>

          <a
            href="/#kontakt"
            className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "#3F59CE" }}
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
          style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7E6" }}
        >
          <p
            className="text-sm font-medium uppercase tracking-wide"
            style={{ color: "#617078" }}
          >
            Priser fra
          </p>
          <p className="mt-2 text-5xl font-extrabold" style={{ color: "#14181A" }}>
            {content.pricing.fromPrice} kr.
            <span className="ml-1 text-base font-medium" style={{ color: "#617078" }}>
              /{content.pricing.unit}
            </span>
          </p>
          <p className="mt-4 text-sm leading-relaxed" style={{ color: "#617078" }}>
            Fast pris per gang — ingen skjulte gebyrer
          </p>
        </div>
      </div>
    </section>
  );
}



function ImageStat() {
  return (
    <section className="px-6 py-24 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">

        <div className="max-w-xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "#E5E7E6", color: "#14181A", backgroundColor: "transparent" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#3F59CE" }}
            />
            Hvorfor os
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "#14181A" }}
          >
            Et team, man kan{" "}
            <em className="font-serif italic font-medium">stole på</em>
          </h2>

          <p className="mt-6 text-base leading-relaxed" style={{ color: "#617078" }}>
            Vi møder til tiden, arbejder grundigt og tager ansvar for det resultat, vi afleverer.
            Vores kunder skal kunne mærke forskellen på en rengøring, der bare er udført, og en
            rengøring, der er gjort ordentligt.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              "Familievirksomhed — vi står selv for rengøringen",
              "Faste, gennemsigtige priser uden skjulte gebyrer",
              "Eget udstyr og miljøvenlige rengøringsmidler",
              "Grundig efterkontrol ved hver opgave",
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "#14181A" }}>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: "#3F59CE" }}
                />
                {point}
              </li>
            ))}
          </ul>
        </div>


        <div className="relative mx-auto w-full max-w-md">
          <img
            src={aboutImage.src}
            alt="RenServ rengøring"
            className="h-[420px] w-full rounded-3xl object-cover"
          />
          <img
            src={aboutImage.src}
            alt="RenServ detalje"
            className="absolute -bottom-8 -left-8 h-32 w-32 rounded-2xl border-4 object-cover md:h-40 md:w-40"
            style={{ borderColor: "#FFFFFF" }}
          />
          <div
            className="absolute -right-6 top-6 max-w-[160px] rounded-2xl p-4"
            style={{ backgroundColor: "#3F59CE" }}
          >
            <p className="text-3xl font-extrabold" style={{ color: "#ffffff" }}>
              98%
            </p>
            <p className="mt-1 text-xs leading-snug text-white/80">
              Kunder, der overgår forventningerne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}



function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 py-24 md:px-12" style={{ backgroundColor: "#F6F9F8" }}>
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
          style={{ color: "#14181A" }}
        >
          Ofte stillede{" "}
          <em className="font-serif italic font-medium">spørgsmål</em>
        </h2>

        <div className="mt-10 divide-y" style={{ borderColor: "#E5E7E6" }}>
          {content.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold" style={{ color: "#14181A" }}>
                    {item.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className="shrink-0 transition-transform duration-300"
                    style={{
                      color: "#14181A",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>
                {isOpen && (
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed" style={{ color: "#617078" }}>
                    {item.a}
                  </p>
                )}
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
      style={{ backgroundColor: "#3F59CE" }}
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
          href="mailto:info@renserv.dk"
          className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition-colors"
          style={{ backgroundColor: "#ffffff", color: "#3F59CE" }}
        >
          Kontakt os i dag
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors"
            style={{ backgroundColor: "#3F59CE" }}
          >
            <ArrowUpRight size={16} color="#ffffff" />
          </span>
        </a>
      </div>
    </section>
  );
}



export default function RengoringAfHjemPage() {
  return (
    <main>
      <ServiceHero />
      <WhatsIncluded />
      <ForWhom />
      <ProcessSteps />
      <Pricing />
      <ImageStat />
      <FAQ />
      <CTA />
    </main>
  );
}
