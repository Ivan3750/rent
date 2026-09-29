"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  Check,
  Home,
  Sparkles,
  Building2,
  Truck,
  Star,
  Phone,
  Mail,
  MapPin,
  Shield,
  Clock,
  Leaf,
} from "lucide-react";
import { Header } from "../../components/Header";
import heroImage from "../../assets/hero.jpg";
import aboutImage from "../../assets/about.jpg";
import pricingData from "../../../data/pricing.json";
import BookingHero from "./_components/BookingHero";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  home: Home,
  sparkles: Sparkles,
  building: Building2,
  truck: Truck,
};


function PricingHero() {
  return (
    <section
      id="top"
      className="relative min-h-[60svh] overflow-hidden text-white md:min-h-[70svh]"
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

      <div className="relative z-10 flex min-h-[60svh] flex-col md:min-h-[70svh]">
        <Header />

        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 md:px-12 md:pb-20">
          <nav
            aria-label="Brødkrumme"
            className="mb-5 flex flex-wrap items-center gap-1.5 text-sm text-white/70"
          >
            <span className="flex items-center gap-1.5">
              <a href="/" className="transition-colors hover:text-white">
                Forside
              </a>
              <ChevronRight size={14} className="text-white/40" />
            </span>
            <span className="font-medium text-white">Priser</span>
          </nav>

          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Enkle,{" "}
              <em className="font-serif font-medium italic">fleksible</em>{" "}
              priser
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              Gennemsigtige priser uden skjulte gebyrer. Vælg den plan, der passer til dit liv — eller lad os lave et skræddersyet tilbud.
            </p>

            <div className="mt-7 flex flex-col items-start gap-6 sm:mt-9 sm:flex-row sm:items-center sm:gap-6">
              <a
                href="#priser"
                className="group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent)]"
                style={{ backgroundColor: "var(--color-dark)" }}
              >
                Se priser
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
/*  2. PRICING PLANS                                                   */
/* ------------------------------------------------------------------ */

function PricingPlans() {
  return (
    <section
      id="priser"
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
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
            className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Enkle, fleksible{" "}
            <em className="font-serif italic font-medium">rengøringsplaner</em>
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricingData.plans.map((plan) => {
            const Icon = iconMap[plan.icon] || Home;
            return (
              <div
                key={plan.id}
                className="group flex flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  borderColor: plan.highlighted ? "var(--color-accent)" : "var(--color-border)",
                  backgroundColor: plan.highlighted ? "var(--color-dark)" : "var(--color-card)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: plan.highlighted ? "rgba(255,255,255,0.1)" : "var(--color-section)",
                    }}
                  >
                    <Icon
                      size={22}
                      color={plan.highlighted ? "#ffffff" : "var(--color-accent)"}
                    />
                  </div>
                  {plan.highlighted && (
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{ backgroundColor: "var(--color-accent)", color: "#ffffff" }}
                    >
                      Populær
                    </span>
                  )}
                </div>

                <h3
                  className="mt-5 text-lg font-bold leading-snug"
                  style={{ color: plan.highlighted ? "#ffffff" : "var(--color-text-dark)" }}
                >
                  {plan.name}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{
                    color: plan.highlighted ? "rgba(255,255,255,0.65)" : "var(--color-text-muted)",
                  }}
                >
                  {plan.desc}
                </p>

                <div className="mt-6 flex items-baseline gap-1.5">
                  {plan.priceLabel && (
                    <span
                      className="text-sm font-medium"
                      style={{ color: plan.highlighted ? "rgba(255,255,255,0.6)" : "var(--color-text-muted)" }}
                    >
                      {plan.priceLabel}
                    </span>
                  )}
                  <span
                    className="text-3xl font-extrabold"
                    style={{ color: plan.highlighted ? "#ffffff" : "var(--color-text-dark)" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      color: plan.highlighted ? "rgba(255,255,255,0.6)" : "var(--color-text-muted)",
                    }}
                  >
                    {plan.unit}
                  </span>
                </div>

                <a
                  href="/#kontakt"
                  className="group mt-6 inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-semibold transition-colors"
                  style={{
                    backgroundColor: plan.highlighted ? "var(--color-accent)" : "var(--color-dark)",
                    color: "#ffffff",
                  }}
                >
                  Book nu
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors group-hover:bg-white/20"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <ArrowUpRight size={14} color="#ffffff" />
                  </span>
                </a>

                <div
                  className="mt-6 flex-1 rounded-2xl p-4"
                  style={{
                    backgroundColor: plan.highlighted
                      ? "rgba(255,255,255,0.06)"
                      : "var(--color-section)",
                  }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wide"
                    style={{ color: plan.highlighted ? "#ffffff" : "var(--color-text-dark)" }}
                  >
                    Indeholder
                  </p>
                  <ul className="mt-3 flex flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check
                          size={13}
                          strokeWidth={3}
                          className="mt-0.5 shrink-0"
                          color={plan.highlighted ? "var(--color-accent)" : "var(--color-text-dark)"}
                        />
                        <span
                          className="text-xs leading-relaxed"
                          style={{
                            color: plan.highlighted
                              ? "rgba(255,255,255,0.75)"
                              : "var(--color-text-muted)",
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom quote */}
        <div
          className="mt-5 flex flex-col items-start justify-between gap-6 rounded-3xl border p-8 sm:flex-row sm:items-center"
          style={{
            backgroundColor: "var(--color-section)",
            borderColor: "var(--color-border)",
          }}
        >
          <div className="max-w-lg">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}
            >
              {pricingData.customQuote.badge}
            </span>
            <h3
              className="mt-3 text-xl font-bold sm:text-2xl"
              style={{ color: "var(--color-text-dark)" }}
            >
              {pricingData.customQuote.title}
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              {pricingData.customQuote.desc}
            </p>
          </div>

          <a
            href="/#kontakt"
            className="group inline-flex shrink-0 items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-accent)]"
            style={{ backgroundColor: "var(--color-dark)" }}
          >
            {pricingData.customQuote.ctaLabel}
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <ArrowUpRight size={16} color="#ffffff" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. WHY US                                                          */
/* ------------------------------------------------------------------ */

function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Fuld forsikring",
      text: "Vi er fuldt forsikret, så du kan føle dig tryg, når vi er i dit hjem eller kontor.",
    },
    {
      icon: Clock,
      title: "Faste tider",
      text: "Vi kommer til den aftalte tid — hver gang. Ingen ventetid, ingen overraskelser.",
    },
    {
      icon: Leaf,
      title: "Miljøvenlige midler",
      text: "Vi bruger svanemærkede produkter, der er sikre for børn, kæledyr og naturen.",
    },
    {
      icon: Star,
      title: "Garanti på arbejdet",
      text: "Vi stiller garanti for vores rengøring. Hvis du ikke er tilfreds, kommer vi gratis og ordner det.",
    },
  ];

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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
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
                  {reason.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default function PriserPage() {
  return (
    <main>
      <BookingHero />
      <PricingPlans />
      <WhyUs />
    </main>
  );
}
