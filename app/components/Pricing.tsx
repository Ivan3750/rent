import { ArrowUpRight, Check } from "lucide-react";

const plans = [
  {
    name: "Rengøring af hjem",
    desc: "Fast eller enkeltstående rengøring af din bolig.",
    price: "249",
    unit: "kr/time",
    features: [
      "Støvsugning og gulvvask",
      "Køkken- og badeværelse",
      "Generel støvaftørring",
      "Tømning af skraldespande",
    ],
    highlighted: false,
  },
  {
    name: "Hovedrengøring",
    desc: "Dybderengøring af hele boligen, hjørne for hjørne.",
    price: "1.499",
    unit: "kr",
    priceLabel: "fra",
    features: [
      "Indvendig vinduespudsning",
      "Rengøring af hvidevarer",
      "Afkalkning af bad",
      "Desinficering af overflader",
    ],
    highlighted: true,
  },
  {
    name: "Erhvervsrengøring",
    desc: "Rengøring af kontorer og erhvervslokaler.",
    price: "299",
    unit: "kr/time",
    features: [
      "Kontor- og skrivebordsrengøring",
      "Rengøring af toiletter",
      "Affaldshåndtering",
      "Fast ugentlig aftale",
    ],
    highlighted: false,
  },
  {
    name: "Flytterengøring",
    desc: "Klargøring af boligen til aflevering eller nye beboere.",
    price: "2.999",
    unit: "kr",
    priceLabel: "fra",
    features: [
      "Rengøring af skabe indvendigt",
      "Køkken og hvidevarer",
      "Badeværelse i dybden",
      "Slutrengøring inkl. gulve",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      className="px-6 py-24 sm:px-10 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-dark)",
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
            Enkle, fleksible rengøringsplaner,
            <br className="hidden sm:block" /> der passer til dit liv
          </h2>
        </div>

        {/* 4 main plans */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map(({ name, desc, price, unit, priceLabel, features, highlighted }) => (
            <div
              key={name}
              className="flex flex-col rounded-3xl border p-6"
              style={{
                borderColor: highlighted ? "transparent" : "var(--color-border)",
                backgroundColor: highlighted ? "var(--color-dark)" : "var(--color-card)",
                backgroundImage: highlighted
                  ? "radial-gradient(circle at 30% 0%, var(--color-accent) -50%, var(--color-dark) 70%)"
                  : "none",
              }}
            >
              <h3
                className="text-lg font-bold leading-snug"
                style={{ color: highlighted ? "#FFFFFF" : "var(--color-text-dark)" }}
              >
                {name}
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed"
                style={{
                  color: highlighted ? "rgba(255,255,255,0.65)" : "var(--color-text-muted)",
                }}
              >
                {desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1.5">
                {priceLabel && (
                  <span
                    className="text-sm font-medium"
                    style={{ color: highlighted ? "rgba(255,255,255,0.6)" : "var(--color-text-muted)" }}
                  >
                    {priceLabel}
                  </span>
                )}
                <span
                  className="text-3xl font-extrabold"
                  style={{ color: highlighted ? "#FFFFFF" : "var(--color-text-dark)" }}
                >
                  {price}
                </span>
                <span
                  className="text-xs"
                  style={{
                    color: highlighted ? "rgba(255,255,255,0.6)" : "var(--color-text-muted)",
                  }}
                >
                  {unit}
                </span>
              </div>

              <button
                className="group mt-6 flex items-center justify-between gap-3 rounded-full py-1.5 pl-4 pr-1.5 text-sm font-semibold transition-colors"
                style={{
                  backgroundColor: highlighted ? "var(--color-accent)" : "var(--color-card)",
                  color: "var(--color-dark)",
                  border: highlighted ? "none" : "1px solid var(--color-border)",
                }}
              >
                Book nu
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--color-dark)" }}
                >
                  <ArrowUpRight size={15} color="var(--color-accent)" />
                </span>
              </button>

              <div
                className="mt-6 flex-1 rounded-2xl p-4"
                style={{
                  backgroundColor: highlighted
                    ? "rgba(255,255,255,0.06)"
                    : "var(--color-section)",
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: highlighted ? "#FFFFFF" : "var(--color-text-dark)" }}
                >
                  Indeholder
                </p>
                <ul className="mt-3 flex flex-col gap-2.5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="mt-0.5 shrink-0"
                        color={highlighted ? "var(--color-accent)" : "var(--color-text-dark)"}
                      />
                      <span
                        className="text-xs leading-relaxed"
                        style={{
                          color: highlighted
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
          ))}
        </div>

        {/* 5th plan — custom quote, full width */}
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
              Andet behov?
            </span>
            <h3
              className="mt-3 text-xl font-bold sm:text-2xl"
              style={{ color: "var(--color-text-dark)" }}
            >
              Anden rengøring - skræddersyet til dig
            </h3>
            <p
              className="mt-2 text-sm leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
            >
              Passer din opgave ikke lige ind i en af vores standardpakker?
              Fortæl os om din bolig eller virksomhed, så laver vi et
              individuelt tilbud - uden binding og uden overraskelser.
            </p>
          </div>

          <button
            className="group flex shrink-0 items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-colors"
            style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF" }}
          >
            Få et tilbud
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-[var(--color-accent-hover)]"
              style={{ backgroundColor: "var(--color-accent)" }}
            >
              <ArrowUpRight size={16} color="var(--color-dark)" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}