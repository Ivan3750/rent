import { REASONS } from "../lib/constants";

function ReasonCard({ icon: Icon, title, text }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; text: string }) {
  return (
    <div
      className="rounded-3xl border p-6 transition-all duration-300"
      style={{ backgroundColor: "var(--color-card)", borderColor: "var(--color-border)" }}
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--color-section)", color: "var(--color-accent)" }}
      >
        <Icon size={22} />
      </span>
      <h3 className="mt-4 text-base font-bold" style={{ color: "var(--color-text-dark)" }}>{title}</h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--color-text-muted)" }}>{text}</p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="hvorfor" className="px-6 py-24 sm:px-10 md:px-12" style={{ backgroundColor: "var(--color-section)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text-dark)" }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
            Hvorfor os
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl" style={{ color: "var(--color-text-dark)" }}>
            Derfor vælger kunderne{" "}
            <em className="font-serif italic font-medium">RenServ</em>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
