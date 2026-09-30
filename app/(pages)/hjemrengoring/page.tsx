"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Clock,
  Shield,
  Leaf,
  Check,
  ArrowRight,
  Home,
  Building2,
  KeyRound,
  Timer,
  Calendar,
  Star,
  Quote,
  Minus,
  Plus,
} from "lucide-react";
import { Header } from "../../components/Header";

/* ─────────────────────────────────────────────
   CONTENT
   ───────────────────────────────────────────── */

const content = {
  breadcrumbs: [{ label: "Forside", href: "/" }, { label: "Hjemrengøring" }],
  hero: {
    title: "Din tid er verdt",
    titleAccent: "mer enn en mopp",
    intro:
      "Vi tar seg av rengjøringen. Du tar seg av livet. Bestill på 2 minutter — få tilback timene dine.",
    ctaLabel: "Start tidskalkulatoren",
  },
  chaos: {
    badge: "Før etter",
    title: "Fra kaos til",
    titleAccent: "kontroll",
    subtitle: "Dra på glidebryteren og se forskjellen",
    cases: [
      { id: "sone", label: "Leilighet i sentrum", desc: "2 rom, 45 m²" },
      { id: "hage", label: "Hagehus etter barna", desc: "4 rom, 90 m²" },
      { id: "kontor", label: "Kontorlokale", desc: "6 rom, 120 m²" },
    ],
  },
  calculator: {
    badge: "Tidskalkulatoren",
    title: "Hvor mye tid",
    titleAccent: "får du tilbake?",
    subtitle: "Velg dine parametre og se hvor mange timer vi sparer deg for hver måned",
    roomsLabel: "Antall rom",
    freqLabel: "Frekvens",
    freqOptions: [
      { value: 1, label: "1× / måned" },
      { value: 2, label: "2× / måned" },
      { value: 4, label: "4× / måned" },
    ],
    resultHours: "timer spart",
    resultYear: "timer per år",
    resultContext: "Det tilsvarer",
    contextOptions: [
      { min: 0, max: 20, text: "en hel dag med familie" },
      { min: 20, max: 50, text: "en hel helg på hytta" },
      { min: 50, max: 100, text: "en uke fri fra rot" },
      { min: 100, max: 999, text: "en måned av livet tilbake" },
    ],
  },
  methods: {
    badge: "Metodene",
    title: "Tre måter å få",
    titleAccent: "tilbake tidene",
    subtitle: "Velg det som passer din livsstil. Ingen binding — avbryt når som helst.",
    items: [
      {
        icon: "home",
        name: "Basis",
        tagline: "Ukentlig vedlikehold",
        desc: "Perfekt for deg som vil ha en ren base uten å tenke på det.",
        features: [
          "Støvsugning og vasking av gulv",
          "Rengjøring av bad og kjøkken",
          "Støving av overflater",
          "Kurv og avfall",
        ],
        notIncluded: ["Vinduer", "Ovn", "Interiør av møbler"],
        price: "fra 490 kr",
        time: "ca. 2 timer",
      },
      {
        icon: "sparkles",
        name: "Dyp",
        tagline: "Grundig rengjøring",
        desc: "Når du vil ha alt — inne i skapene, bak møblene, og i hjørnene.",
        features: [
          "Alt fra Basis",
          "Vinduer innvendig",
          "Ovn og kjøleskap",
          "Interiør av møbler",
          "Baseboard og dører",
        ],
        notIncluded: ["Esterior", "Tepperens"],
        price: "fra 890 kr",
        time: "ca. 4 timer",
      },
      {
        icon: "key",
        name: "Flytte",
        tagline: "Inn- og utflytting",
        desc: "Sørgflytting fra A til Å. Vi sørger for at alt er klart.",
        features: [
          "Komplett rengjøring av alle rom",
          "Skap og garderober",
          "Vinduer inn- og utvendig",
          "Ovn, kjøleskap og vaskemaskin",
          "Garasje eller bod",
        ],
        notIncluded: ["Teppevask", "Maling"],
        price: "fra 1 490 kr",
        time: "ca. 6 timer",
      },
    ],
  },
  guarantee: {
    badge: "Garantien",
    title: "Trygghet som",
    titleAccent: "en del av pakken",
    subtitle: "Vi stiller garanti for alt vi gjør — og det er skriftlig.",
    items: [
      {
        icon: "shield",
        title: "Forsikret",
        desc: "Alt er dekket av ansvarsforsikring. Hvis noe skulle gå galt, ordner vi det — uten ekstra kostnad for deg.",
        detail: "Forsikring: If Skadeforsikring",
      },
      {
        icon: "leaf",
        title: "Miljøvennlig",
        desc: "Vi bruker kun Svanemerket-produkter. Trygt for barn, kjæledyr og planeten.",
        detail: "Sertifisert: Svanemerket, Eco-Label",
      },
      {
        icon: "check",
        title: "Garanti",
        desc: "Ikke fornøyd? Vi kommer gratis tilbake og gjør det om — innen 24 timer.",
        detail: "Garanti: 100% tilfredshet",
      },
    ],
  },
  cases: {
    badge: "Fra virkeligheten",
    title: "Ekte mennesker,",
    titleAccent: "ekte resultater",
    subtitle: "Ikke stock-foto. Dette er virkelige kunder og virkelige forskjeller.",
    items: [
      {
        name: "Familie Hansen",
        type: "Leilighet, 2 rom + barn",
        quote:
          "Vi brukte 6 timer på å vaske hele leiligheten. Nå bruker vi 2 — og det er renere enn før.",
        before: "6 timer",
        after: "2 timer",
        saved: "4 timer/uke",
      },
      {
        name: "Kontoret til AS Tech",
        type: "Kontorlokale, 6 rom",
        quote:
          "De kommer hver torsdag. Mandag morgen er kontoret allerede klart. Det er uvurderlig for oss.",
        before: "Selvbetjent",
        after: "Profesjonell",
        saved: "10 timer/uke",
      },
      {
        name: "Aleneboer Kari",
        type: "Hagehus, 4 rom",
        quote:
          "Jeg er 72 og orker ikke lenger å stå på stoler. RenServ gjør det — og jeg får tid til hagen.",
        before: "Uoverkommelig",
        after: "Håndterlig",
        saved: "8 timer/uke",
      },
    ],
  },
  faq: [
    {
      q: "Hvor ofte skal I komme?",
      a: "Det er helt opp til deg. De fleste kunder velger ukentlig eller hver annen uke, men vi tilpasser gjerne frekvensen til ditt behov og budsjett.",
    },
    {
      q: "Skal jeg være hjemme når I kommer?",
      a: "Nei, mange kunder gir oss en nøkkel eller adgangskode, så vi kan komme når det passer deg. Vi har full forsikring og stiller garanti for vårt arbeid.",
    },
    {
      q: "Hva skjer hvis noe ødelegges?",
      a: "Vi er fullt forsikret. Hvis noe skulle gå galt, ordner vi det — uten ekstra kostnad for deg. Det er en del av vår garanti.",
    },
    {
      q: "Kan I bruke mine rengjøringsmidler?",
      a: "Ja, hvis du har foretrukne midler, er du velkommen til å stille dem til rådighed. Ellers bruker vi våre egne miljøvennlige produkter.",
    },
    {
      q: "Hvordan håndterer vi nøkler og adgang?",
      a: "Vi bruker et sikkert nøkkelsystem med full logg. Du kan tilbaketrille adgang når som helst — og vi gir deg en kopi av vår forsikring på forespørsel.",
    },
  ],
  cta: {
    title: "Ta tiden",
    titleAccent: "tilbake",
    subtitle: "Bestill på 2 minutter. Få tilbake livet ditt.",
    microtext: "Ingen binding. Avbryt når som helst.",
    ctaLabel: "Start tidskalkulatoren",
  },
};

/* ─────────────────────────────────────────────
   HERO
   ───────────────────────────────────────────── */

function HjemrengoringHero() {
  const [rooms, setRooms] = useState(3);
  const [freq, setFreq] = useState(2);

  const hoursPerMonth = rooms * freq * 1.5;
  const hoursPerYear = Math.round(hoursPerMonth * 12);

  return (
    <section
      id="top"
      className="relative min-h-[85svh] overflow-hidden text-white md:min-h-[90svh]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full"
          style={{
            background:
              "linear-gradient(135deg, #14181A 0%, #1a2328 40%, #14181A 100%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow accent */}
        <div
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      </div>

      <div className="relative z-10 flex min-h-[85svh] flex-col md:min-h-[90svh]">
        <Header />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 md:px-12 md:pb-24">
          {/* Breadcrumbs */}
          <nav
            aria-label="Brødkrumme"
            className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-white/50"
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
                  <ChevronRight size={14} className="text-white/30" />
                )}
              </span>
            ))}
          </nav>

          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_auto]">
            {/* Left: Title + CTA */}
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                {content.hero.title}{" "}
                <em className="font-serif font-medium italic text-[var(--color-accent-hover)]">
                  {content.hero.titleAccent}
                </em>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:mt-8 sm:text-lg">
                {content.hero.intro}
              </p>

              <div className="mt-8 flex flex-col items-start gap-4 sm:mt-10 sm:flex-row sm:items-center">
                <a
                  href="#kalkulator"
                  className="group inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {content.hero.ctaLabel}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
                    <ArrowUpRight size={18} color="#ffffff" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right: Mini calculator preview */}
            <div
              className="w-full max-w-sm rounded-3xl border p-6 backdrop-blur-sm lg:w-80"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div className="flex items-center gap-2 text-sm font-medium text-white/60">
                <Timer size={16} />
                <span>Hvor mye tid sparer du?</span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="mb-2 block text-xs font-medium text-white/50">
                    Antall rom
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 text-center text-lg font-bold text-white">
                      {rooms}
                    </span>
                    <button
                      onClick={() => setRooms(Math.min(10, rooms + 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:bg-white/10"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-white/50">
                    Frekvens
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 4].map((f) => (
                      <button
                        key={f}
                        onClick={() => setFreq(f)}
                        className="flex-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-all"
                        style={{
                          borderColor:
                            freq === f
                              ? "var(--color-accent)"
                              : "rgba(255,255,255,0.2)",
                          backgroundColor:
                            freq === f ? "var(--color-accent)" : "transparent",
                          color: freq === f ? "#fff" : "rgba(255,255,255,0.6)",
                        }}
                      >
                        {f}×/md
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-2xl p-4 text-center"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                >
                  <p className="text-3xl font-extrabold text-white">
                    {hoursPerYear}
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    timer spart per år
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CHAOS → KALM (Before/After Slider)
   ───────────────────────────────────────────── */

function ChaosKalm() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeCase, setActiveCase] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      setSliderPos((x / rect.width) * 100);
    },
    []
  );

  const handleMouseDown = () => {
    isDragging.current = true;
  };
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging.current) handleMove(e.clientX);
    },
    [handleMove]
  );
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  useEffect(() => {
    const handleGlobalUp = () => {
      isDragging.current = false;
    };
    window.addEventListener("mouseup", handleGlobalUp);
    window.addEventListener("touchend", handleGlobalUp);
    return () => {
      window.removeEventListener("mouseup", handleGlobalUp);
      window.removeEventListener("touchend", handleGlobalUp);
    };
  }, []);

  const currentCase = content.cases.items[activeCase];

  return (
    <section
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
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
            {content.chaos.badge}
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            {content.chaos.title}{" "}
            <em className="font-serif italic font-medium">
              {content.chaos.titleAccent}
            </em>
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {content.chaos.subtitle}
          </p>
        </div>

        {/* Case selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {content.cases.items.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActiveCase(i)}
              className="rounded-full border px-5 py-2.5 text-sm font-medium transition-all"
              style={{
                borderColor:
                  activeCase === i
                    ? "var(--color-accent)"
                    : "var(--color-border)",
                backgroundColor:
                  activeCase === i ? "var(--color-accent)" : "var(--color-card)",
                color:
                  activeCase === i ? "#fff" : "var(--color-text-muted)",
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative mt-10 h-[400px] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl md:h-[500px]"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* After (clean) — full background */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background:
                "linear-gradient(135deg, #e8f4f0 0%, #d4ebe4 50%, #c0e2d8 100%)",
            }}
          >
            <div className="text-center">
              <div
                className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(63,89,206,0.1)" }}
              >
                <Sparkles size={28} style={{ color: "var(--color-accent)" }} />
              </div>
              <p
                className="text-lg font-bold"
                style={{ color: "var(--color-text-dark)" }}
              >
                Etter
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {currentCase.type}
              </p>
            </div>
          </div>

          {/* Before (messy) — clipped */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              background:
                "linear-gradient(135deg, #8b7355 0%, #6b5540 50%, #4a3a2a 100%)",
            }}
          >
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
                <Home size={28} className="text-white/60" />
              </div>
              <p className="text-lg font-bold text-white/80">Før</p>
              <p className="text-sm text-white/50">{currentCase.type}</p>
            </div>
          </div>

          {/* Slider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg"
            style={{ left: `${sliderPos}%` }}
          >
            <div
              className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl"
            >
              <ChevronRight size={16} className="text-gray-400" />
              <ChevronDown
                size={16}
                className="rotate-90 text-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   TIME CALCULATOR
   ───────────────────────────────────────────── */

function TimeCalculator() {
  const [rooms, setRooms] = useState(3);
  const [freq, setFreq] = useState(2);

  const hoursPerMonth = rooms * freq * 1.5;
  const hoursPerYear = Math.round(hoursPerMonth * 12);

  const context =
    content.calculator.contextOptions.find(
      (c) => hoursPerYear >= c.min && hoursPerYear < c.max
    )?.text ?? "en hel dag med familie";

  return (
    <section
      id="kalkulator"
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Controls */}
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
              {content.calculator.badge}
            </div>

            <h2
              className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
              style={{ color: "var(--color-text-dark)" }}
            >
              {content.calculator.title}{" "}
              <em className="font-serif italic font-medium">
                {content.calculator.titleAccent}
              </em>
            </h2>

            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {content.calculator.subtitle}
            </p>

            <div className="mt-10 space-y-8">
              {/* Rooms */}
              <div>
                <label
                  className="mb-3 block text-sm font-semibold"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {content.calculator.roomsLabel}
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setRooms(Math.max(1, rooms - 1))}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors hover:bg-[var(--color-card)]"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <Minus size={18} style={{ color: "var(--color-text-dark)" }} />
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                      <button
                        key={n}
                        onClick={() => setRooms(n)}
                        className="h-12 w-12 rounded-2xl border text-sm font-bold transition-all"
                        style={{
                          borderColor:
                            rooms === n
                              ? "var(--color-accent)"
                              : "var(--color-border)",
                          backgroundColor:
                            rooms === n
                              ? "var(--color-accent)"
                              : "var(--color-card)",
                          color: rooms === n ? "#fff" : "var(--color-text-dark)",
                        }}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Frequency */}
              <div>
                <label
                  className="mb-3 block text-sm font-semibold"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {content.calculator.freqLabel}
                </label>
                <div className="flex gap-3">
                  {content.calculator.freqOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setFreq(opt.value)}
                      className="flex-1 rounded-2xl border px-4 py-3 text-sm font-medium transition-all"
                      style={{
                        borderColor:
                          freq === opt.value
                            ? "var(--color-accent)"
                            : "var(--color-border)",
                        backgroundColor:
                          freq === opt.value
                            ? "var(--color-accent)"
                            : "var(--color-card)",
                        color:
                          freq === opt.value
                            ? "#fff"
                            : "var(--color-text-muted)",
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Result */}
          <div>
            <div
              className="rounded-3xl border p-8 md:p-10"
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)]">
                <Clock size={16} />
                <span>Din resultat</span>
              </div>

              <div className="mt-6 flex items-baseline gap-3">
                <span
                  className="text-6xl font-extrabold tracking-tight md:text-7xl"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {hoursPerYear}
                </span>
                <span
                  className="text-lg font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {content.calculator.resultYear}
                </span>
              </div>

              <div
                className="mt-6 rounded-2xl p-5"
                style={{ backgroundColor: "var(--color-section)" }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {content.calculator.resultContext}
                </p>
                <p
                  className="mt-1 text-xl font-bold"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {context}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-[var(--color-text-muted)]">
                <Calendar size={16} />
                <span>
                  {hoursPerMonth.toFixed(1)} {content.calculator.resultHours} per
                  måned
                </span>
              </div>

              <a
                href="#kontakt"
                className="group mt-8 flex items-center justify-center gap-3 rounded-full py-2 pl-7 pr-2 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                Bestill nå
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
                  <ArrowUpRight size={18} color="#ffffff" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   METHODS (Service Packages)
   ───────────────────────────────────────────── */

function Methods() {
  const [activeMethod, setActiveMethod] = useState(0);

  const iconMap: Record<string, React.ReactNode> = {
    home: <Home size={24} />,
    sparkles: <Sparkles size={24} />,
    key: <KeyRound size={24} />,
  };

  return (
    <section
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
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
            {content.methods.badge}
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            {content.methods.title}{" "}
            <em className="font-serif italic font-medium">
              {content.methods.titleAccent}
            </em>
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {content.methods.subtitle}
          </p>
        </div>

        {/* Method cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.methods.items.map((method, i) => {
            const isActive = activeMethod === i;
            return (
              <div
                key={method.name}
                className="group cursor-pointer rounded-3xl border p-7 transition-all"
                style={{
                  borderColor: isActive
                    ? "var(--color-accent)"
                    : "var(--color-border)",
                  backgroundColor: isActive
                    ? "var(--color-card)"
                    : "var(--color-card)",
                  boxShadow: isActive
                    ? "0 20px 60px -15px rgba(63,89,206,0.15)"
                    : "none",
                }}
                onClick={() => setActiveMethod(i)}
              >
                {/* Icon + Name */}
                <div className="flex items-center gap-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl transition-colors"
                    style={{
                      backgroundColor: isActive
                        ? "var(--color-accent)"
                        : "var(--color-section)",
                      color: isActive ? "#fff" : "var(--color-text-dark)",
                    }}
                  >
                    {iconMap[method.icon]}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "var(--color-text-dark)" }}
                    >
                      {method.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {method.tagline}
                    </p>
                  </div>
                </div>

                <p
                  className="mt-5 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {method.desc}
                </p>

                {/* Features */}
                <ul className="mt-6 space-y-2.5">
                  {method.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ color: "var(--color-text-dark)" }}
                    >
                      <Check
                        size={16}
                        strokeWidth={3}
                        className="mt-0.5 shrink-0"
                        style={{ color: "var(--color-accent)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Not included */}
                <div className="mt-5 border-t pt-5" style={{ borderColor: "var(--color-border)" }}>
                  <p
                    className="mb-2 text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Ikke inkludert
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {method.notIncluded.map((item, j) => (
                      <span
                        key={j}
                        className="rounded-full px-3 py-1 text-xs"
                        style={{
                          backgroundColor: "var(--color-section)",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price + Time */}
                <div
                  className="mt-6 flex items-center justify-between border-t pt-6"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <div>
                    <p
                      className="text-2xl font-extrabold"
                      style={{ color: "var(--color-text-dark)" }}
                    >
                      {method.price}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {method.time}
                    </p>
                  </div>
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                    style={{
                      backgroundColor: isActive
                        ? "var(--color-accent)"
                        : "var(--color-section)",
                    }}
                  >
                    <ArrowUpRight
                      size={18}
                      color={isActive ? "#fff" : "var(--color-text-dark)"}
                    />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   GUARANTEE
   ───────────────────────────────────────────── */

function Guarantee() {
  const iconMap: Record<string, React.ReactNode> = {
    shield: <Shield size={28} />,
    leaf: <Leaf size={28} />,
    check: <Check size={28} />,
  };

  return (
    <section
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
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
            {content.guarantee.badge}
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "#ffffff" }}
          >
            {content.guarantee.title}{" "}
            <em className="font-serif italic font-medium">
              {content.guarantee.titleAccent}
            </em>
          </h2>

          <p
            className="mt-4 text-base leading-relaxed text-white/60"
          >
            {content.guarantee.subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.guarantee.items.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl border p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <span className="text-white">{iconMap[item.icon]}</span>
              </div>

              <h3
                className="mt-6 text-xl font-bold"
                style={{ color: "#ffffff" }}
              >
                {item.title}
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed text-white/60"
              >
                {item.desc}
              </p>

              <div
                className="mt-6 rounded-xl px-4 py-3"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <p
                  className="text-xs font-medium text-white/40"
                >
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CASE STUDIES
   ───────────────────────────────────────────── */

function CaseStudies() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
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
            {content.cases.badge}
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            {content.cases.title}{" "}
            <em className="font-serif italic font-medium">
              {content.cases.titleAccent}
            </em>
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            {content.cases.subtitle}
          </p>
        </div>

        {/* Case cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.cases.items.map((item, i) => (
            <div
              key={item.name}
              className="group cursor-pointer rounded-3xl border p-7 transition-all"
              style={{
                borderColor:
                  active === i ? "var(--color-accent)" : "var(--color-border)",
                backgroundColor: "var(--color-card)",
                boxShadow:
                  active === i
                    ? "0 20px 60px -15px rgba(63,89,206,0.15)"
                    : "none",
              }}
              onClick={() => setActive(i)}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-section)" }}
                >
                  <Quote size={16} style={{ color: "var(--color-accent)" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-bold"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    {item.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.type}
                  </p>
                </div>
              </div>

              <p
                className="mt-5 text-sm leading-relaxed italic"
                style={{ color: "var(--color-text-muted)" }}
              >
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Before/After stats */}
              <div
                className="mt-6 grid grid-cols-3 gap-3 border-t pt-5"
                style={{ borderColor: "var(--color-border)" }}
              >
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Før
                  </p>
                  <p
                    className="mt-1 text-sm font-bold line-through"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {item.before}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Etter
                  </p>
                  <p
                    className="mt-1 text-sm font-bold"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    {item.after}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Sparer
                  </p>
                  <p
                    className="mt-1 text-sm font-bold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {item.saved}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FAQ
   ───────────────────────────────────────────── */

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="px-6 py-24 sm:px-10 md:px-12 md:py-32"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      <div className="mx-auto max-w-3xl">
        <h2
          className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          style={{ color: "var(--color-text-dark)" }}
        >
          Siste{" "}
          <em className="font-serif italic font-medium">spørsmål</em>
        </h2>

        <div className="mt-12 flex flex-col gap-3">
          {content.faq.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.q}
                className="cursor-pointer rounded-3xl border p-6 transition-all sm:p-7"
                style={{
                  backgroundColor: "var(--color-card)",
                  borderColor: isOpen
                    ? "var(--color-accent)"
                    : "var(--color-border)",
                }}
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
                        ? "var(--color-accent)"
                        : "var(--color-section)",
                    }}
                  >
                    {isOpen ? (
                      <ChevronDown
                        size={16}
                        style={{ color: "#fff" }}
                        className="rotate-180"
                      />
                    ) : (
                      <ChevronDown
                        size={16}
                        style={{ color: "var(--color-text-dark)" }}
                      />
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

/* ─────────────────────────────────────────────
   CTA
   ───────────────────────────────────────────── */

function CTA() {
  return (
    <section
      id="kontakt"
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ backgroundColor: "var(--color-dark)" }}
    >
      <div className="mx-auto max-w-3xl text-center text-white">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl lg:text-5xl">
          {content.cta.title}{" "}
          <em className="font-serif italic font-medium text-[var(--color-accent-hover)]">
            {content.cta.titleAccent}
          </em>
        </h2>
        <p className="mt-4 text-white/60">
          {content.cta.subtitle}
        </p>

        <a
          href="#kalkulator"
          className="group mt-8 inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-sm font-semibold transition-all hover:-translate-y-0.5"
          style={{ backgroundColor: "var(--color-accent)", color: "#fff" }}
        >
          {content.cta.ctaLabel}
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-colors group-hover:bg-white/30">
            <ArrowUpRight size={18} color="#ffffff" />
          </span>
        </a>

        <p className="mt-6 text-xs text-white/40">
          {content.cta.microtext}
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
   ───────────────────────────────────────────── */

export default function HjemrengoringPage() {
  return (
    <main>
      <HjemrengoringHero />
      <ChaosKalm />
      <TimeCalculator />
      <Methods />
      <Guarantee />
      <CaseStudies />
      <FAQ />
      <CTA />
    </main>
  );
}
