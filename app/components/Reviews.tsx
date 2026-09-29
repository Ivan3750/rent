import { Star } from "lucide-react";

const reviews = [
  {
    name: "Mette K.",
    role: "Privatkunde, Horsens",
    text: "RenServ har rengøret vores hjem i over et år nu, og vi er mere end tilfredse. De er grundige, pålidelige og altid venlige. Vi kan varmt anbefale dem!",
    rating: 5,
  },
  {
    name: "Lars H.",
    role: "Kontorchef, Horsens",
    text: "Vi bruger RenServ til vores kontorrengøring, og de leverer hver gang en førsteklasses service. Professionelle, fleksible og altid til tiden.",
    rating: 5,
  },
  {
    name: "Sofie M.",
    role: "Lejer, Horsens",
    text: "Jeg bestilte en flytterengøring, og resultatet var fantastisk. Alt var skinnende rent, da jeg skulle overlevere nøglerne. Værdi for pengene!",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section
      className="px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
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
            Anmeldelser
          </div>

          <h2
            className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Hvad vores kunder{" "}
            <em className="font-serif italic font-medium">siger</em>
          </h2>
        </div>

        {/* Reviews grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col rounded-3xl border p-6"
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Stars */}
              <div
                className="flex gap-0.5"
                style={{ color: "var(--color-accent)" }}
                aria-label={`${review.rating} stjerner`}
              >
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="currentColor"
                    strokeWidth={0}
                  />
                ))}
              </div>

              {/* Review text */}
              <p
                className="mt-4 flex-1 text-sm leading-relaxed"
                style={{ color: "var(--color-text-muted)" }}
              >
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  {review.name.charAt(0)}
                </span>
                <div>
                  <p
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    {review.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {review.role}
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
