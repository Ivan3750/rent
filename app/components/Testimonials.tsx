import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mette K.",
    role: "Privatkunde, Horsens",
    text: "RenServ har rengøret vores hjem i over et år nu, og vi er hver gang imponerede over resultatet. De er grundige, pålidelige og altid venlige.",
    rating: 5,
  },
  {
    name: "Peter L.",
    role: "Kontorleder, Horsens",
    text: "Vi bruger RenServ til vores kontorrengøring, og det har gjort en stor forskel. Professionelt arbejde til en fair pris - vi kan varmt anbefale dem.",
    rating: 5,
  },
  {
    name: "Sofie M.",
    role: "Lejer, Horsens",
    text: "Efter en renovering var der byggestøv overalt. RenServ kom og fik det hele rengøret, så vi kunne flytte ind med det samme. Fantastisk service!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-24 sm:px-10 md:px-12" style={{ backgroundColor: "var(--color-background)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text-dark)" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
            Anmeldelser
          </div>
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl" style={{ color: "var(--color-text-dark)" }}>
            Hvad vores kunder{" "}
            <em className="font-serif italic font-medium">siger</em>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-3xl border p-6"
              style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
            >
              <div className="flex gap-0.5" style={{ color: "var(--color-accent)" }} aria-label={`${t.rating} stjerner`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                "{t.text}"
              </p>
              <div className="mt-6 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                <p className="text-sm font-bold" style={{ color: "var(--color-text-dark)" }}>{t.name}</p>
                <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
