"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { SERVICES } from "../lib/constants";
import type { ContactFormState } from "../lib/types";

const EMPTY_FORM: ContactFormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const FIELD_CLASS =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#16A085] focus:ring-2 focus:ring-blue-200";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<ContactFormState>(EMPTY_FORM);

  const set =
    (key: keyof ContactFormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.name.trim() || !form.phone.trim()) {
      setError("Udfyld venligst navn og telefon.");
      return;
    }

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

      setSent(true);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setError("Der opstod en fejl. Prøv venligst igen.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="mt-8 rounded-2xl bg-amber-50 p-6 text-sm">
        <Check className="size-6 text-[#16A085]" />
        <p className="mt-3 font-medium">Tak for din henvendelse!</p>
        <p className="mt-1 text-slate-500">Vi kontakter dig hurtigst muligt på {form.phone}.</p>
      </div>
    );
  }

  return (
    <form className="mt-6 space-y-5" onSubmit={submit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Eyebrow as="label" htmlFor="name">
            Navn *
          </Eyebrow>
          <input
            id="name"
            required
            maxLength={100}
            value={form.name}
            onChange={set("name")}
            placeholder="Dit fulde navn"
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>
        <div>
          <Eyebrow as="label" htmlFor="phone">
            Telefon *
          </Eyebrow>
          <input
            id="phone"
            required
            maxLength={30}
            value={form.phone}
            onChange={set("phone")}
            placeholder="Dit telefonnummer"
            className={`mt-2 ${FIELD_CLASS}`}
          />
        </div>
      </div>

      <div>
        <Eyebrow as="label" htmlFor="email">
          Email
        </Eyebrow>
        <input
          id="email"
          type="email"
          maxLength={255}
          value={form.email}
          onChange={set("email")}
          placeholder="din@email.dk"
          className={`mt-2 ${FIELD_CLASS}`}
        />
      </div>

      <div>
        <Eyebrow as="label" htmlFor="service">
          Ydelse
        </Eyebrow>
        <select
          id="service"
          value={form.service}
          onChange={set("service")}
          className={`mt-2 ${FIELD_CLASS}`}
        >
          <option value="">Vælg ydelse (valgfri)</option>
          {SERVICES.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <Eyebrow as="label" htmlFor="message">
          Kommentar
        </Eyebrow>
        <textarea
          id="message"
          rows={4}
          maxLength={1000}
          value={form.message}
          onChange={set("message")}
          placeholder="Fortæl os om din opgave…"
          className={`mt-2 ${FIELD_CLASS}`}
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#16A085] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Sender…" : "Send forespørgsel"}
      </button>
    </form>
  );
}