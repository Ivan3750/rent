"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  Calendar,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import heroImage from "../../../assets/hero.jpg";

export default function BookingHero() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    note: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
      console.error("Booking form submit error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden text-white">
      <div className="absolute inset-0">
        <img
          src={heroImage.src}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Bring Back the{" "}
              <em className="font-serif font-medium italic">Freshness</em>
              <br />
              Comfort & Beauty Your
              <br />
              Space Deserves
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              Ready to enjoy a fresher, healthier, and more comfortable space?
              Our experienced cleaning professionals are here to take care of the
              rest.
            </p>

            {/* Contact Card */}
            <div className="mt-10 flex items-center gap-4">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <User size={24} color="#ffffff" />
              </div>
              <div>
                <p className="text-lg font-bold">Mark Taylor</p>
                <p className="text-sm text-white/60">
                  Call Now:{" "}
                  <a href="tel:+4522858880" className="text-white hover:underline">
                    595-84-7302
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8"
          >
            <h2 className="text-xl font-bold">Get In Touch</h2>

            {submitted ? (
              <div
                className="mt-6 rounded-2xl px-5 py-6 text-sm font-medium"
                style={{ backgroundColor: "var(--color-accent)", color: "#ffffff" }}
              >
                Tak for din forespørgsel! Vi kontakter dig snarest.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[var(--color-accent)]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-accent)]"
                    >
                      <option value="" className="text-black">Service Type</option>
                      <option value="hjemrengoring" className="text-black">Hjemrengøring</option>
                      <option value="hovedrengoring" className="text-black">Hovedrengøring</option>
                      <option value="kontorrengoring" className="text-black">Kontorrengøring</option>
                      <option value="flytterengoring" className="text-black">Flytterengøring</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-accent)]"
                    />
                  </div>
                  <div>
                    <input
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[var(--color-accent)]"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    name="note"
                    placeholder="Additional Note"
                    rows={3}
                    value={form.note}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-colors focus:border-[var(--color-accent)]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-2 rounded-full py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                  style={{ backgroundColor: "var(--color-accent)", color: "#ffffff" }}
                >
                  {loading ? "Sender…" : "Submit Booking Request"}
                  {!loading && (
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full transition-colors group-hover:bg-white/20"
                      style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                    >
                      <ArrowUpRight size={16} color="#ffffff" />
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
