import { Phone, CalendarCheck, Sparkles, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Kontakt os",
    text: "Ring, send en e-mail eller udfyld formularen - vi vender tilbage hurtigt.",
  },
  {
    icon: CalendarCheck,
    title: "Aftal dato",
    text: "Vi finder et tidspunkt, der passer dig - også aften og weekend.",
  },
  {
    icon: Sparkles,
    title: "Vi rengør",
    text: "Vores team møder fuldt udstyret og udfører arbejdet grundigt.",
  },
  {
    icon: ThumbsUp,
    title: "Godkend resultatet",
    text: "Vi tager ansvar for kvaliteten - du skal være tilfreds med resultatet.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 sm:px-10 md:px-12" style={{ backgroundColor: "var(--color-section)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text-dark)" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
            Sådan fungerer det
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl" style={{ color: "var(--color-text-dark)" }}>
            Enkelt og{" "}
            <em className="font-serif italic font-medium">problemfrit</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <div
              key={title}
              className="relative rounded-3xl border p-6"
              style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
            >
              <span
                className="absolute right-5 top-5 text-4xl font-extrabold"
                style={{ color: "var(--color-border)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "var(--color-section)", color: "var(--color-accent)" }}
              >
                <Icon size={22} />
              </span>
              <h3 className="mt-4 text-base font-bold" style={{ color: "var(--color-text-dark)" }}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
