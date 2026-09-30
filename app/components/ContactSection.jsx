"use client";

import { useState } from "react";
import { Mail, Clock, MapPin, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.phone.trim()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Noget gik galt");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setError("Der opstod en fejl. Prøv venligst igen, eller ring til os direkte.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="kontakt" className="px-6 py-24 md:px-12" style={{ backgroundColor: "var(--color-card)" }}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-2">
        {/* Left: contact info + service area */}
        <div className="max-w-lg">
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Kontakt os -
            <em className="font-serif italic font-medium">vi svarer hurtigt</em>
          </h2>

          <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
            Ring til os, send en e-mail eller udfyld formularen - vi
            kontakter dig i løbet af dagen for at aftale dato og detaljer
            om rengøringen.
          </p>

          <div className="mt-8 space-y-5">


            <a href="mailto:kontakt@renserv.dk" className="flex items-center gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-section)" }}
              >
                <Mail size={19} style={{ color: "var(--color-accent)" }} />
              </span>
              <span>
                <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>Email</p>
                <p className="text-base font-semibold" style={{ color: "#17221F" }}>
                  kontakt@renserv.dk
                </p>
              </span>
            </a>

            <div className="flex items-center gap-4">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-section)" }}
              >
                <Clock size={19} style={{ color: "var(--color-accent)" }} />
              </span>
              <span>
                <p className="text-sm" style={{ color: "#617078" }}>Arbejdstimer</p>
                <p className="text-base font-semibold" style={{ color: "#17221F" }}>
                  Man–Lør, 08:00–18:00
                </p>
              </span>
            </div>
          </div>
        </div>

        {/* Right: order form */}
        <div
          className="rounded-3xl border p-8"
          style={{ backgroundColor: "var(--color-section)", borderColor: "var(--color-border)" }}
        >
          <h3 className="text-xl font-bold" style={{ color: "#17221F" }}>
            Bestil rengøring
          </h3>
          <p className="mt-1 text-sm" style={{ color: "var(--color-text-muted)" }}>
            Efterlad dine kontaktoplysninger - vi ringer til dig for at afklare detaljerne.
          </p>

          {submitted ? (
            <div
              className="mt-6 rounded-2xl px-5 py-6 text-sm font-medium"
              style={{ backgroundColor: "var(--color-section)", color: "var(--color-accent)" }}
            >
              Tak skal du have! Din forespørgsel er sendt - vi kontakter dig snarest.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium" style={{ color: "#17221F" }}>
                  Navn
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Navn"
                  min="2"
                  max="50"
                  required
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text-dark)" }}
                />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-medium" style={{ color: "#17221F" }}>
                  Telefon
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+45 00 00 00 00"
                  required
                  className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-accent)]"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text-dark)" }}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium" style={{ color: "#17221F" }}>
                  Besked
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Beskriv, hvad der skal rengøres"
                  className="w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#3F59CE]"
                  style={{ borderColor: "var(--color-border)", color: "var(--color-text-dark)" }}
                  max="500"
                />
              </div>

              {error && (
                <p className="text-sm font-medium" style={{ color: "#D64545" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-base font-semibold text-white transition-all duration-300 ease-out hover:bg-[var(--color-primary-hover)] disabled:cursor-not-allowed disabled:opacity-60"
                style={{ backgroundColor: "var(--color-dark)" }}
              >
                {loading ? "Sender…" : "Send forespørgsel"}
                {!loading && <ArrowUpRight size={16} />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}