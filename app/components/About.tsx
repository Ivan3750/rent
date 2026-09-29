import { ArrowUpRight } from "lucide-react";
import aboutImage from "../assets/about.jpg";
/* import aboutImageSmall from "../assets/about-small.jpg";
 */
function About() {
  return (
    <section
      id="om-os"
      className="relative overflow-hidden px-6 py-24 md:px-12"
      style={{ backgroundColor: "var(--color-section)" }}
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left: text */}
        <div className="max-w-xl">
          {/* Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "var(--color-border)", color: "var(--color-text-dark)" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            Om os
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Et team, man kan{" "}
            <em className="font-serif italic font-medium">stole på</em>
          </h2>

          <div
            className="mt-6 space-y-4 text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            <p>
              RenServ er en familievirksomhed, hvor vi som familie selv står for
              rengøringen af både private hjem og erhverv. Vi udfører arbejdet
              med egne hænder og går op i, at hver eneste kunde får en grundig
              og pålidelig service.
            </p>

            <p>
              For os handler rengøring om mere end bare at få arbejdet gjort. Vi
              møder til tiden, arbejder grundigt og tager ansvar for det
              resultat, vi afleverer. Vi ønsker, at vores kunder skal kunne
              mærke forskellen på en rengøring, der bare er udført, og en
              rengøring, der er gjort ordentligt.
            </p>

            <p>
              Vi tror på, at tillid bygges gennem de små detaljer: rene hjørner,
              omhyggeligt arbejde og god kommunikation. Derfor lægger vi vægt på
              at være nemme at få fat på, holde vores aftaler og tilbyde ærlige
              priser uden skjulte ekstraomkostninger.
            </p>
          </div>

          {/* CTA button */}
          <a
            href="/om-os"
            className="group mt-8 inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: "var(--color-dark)" }}
          >
            Mere om os
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              <ArrowUpRight size={16} color="#ffffff" />
            </span>
          </a>
        </div>

        {/* Right: images + floating stat */}
        <div className="relative mx-auto w-full max-w-md">
          <img
            src={aboutImage.src}
            alt="RenServ Om os"
            className="h-[420px] w-full rounded-3xl object-cover"
          />

          {/* Secondary overlapping image */}
          <img
            src={aboutImage.src}
            alt="RenServ detalje"
            className="absolute -bottom-8 -left-8 h-32 w-32 rounded-2xl border-4 object-cover border-[var(--color-border)] md:h-40 md:w-40"
            style={{ borderColor: "var(--color-section)" }}
          />

          {/* Floating stat card */}
          <div
            className="absolute -right-6 top-6 max-w-[160px] rounded-2xl p-4 border border-[var(--color-border)] backdrop-blur-sm"
            style={{ backgroundColor: "rgba(20,24,26,0.85)" }}
          >
            <p className="text-3xl font-extrabold" style={{ color: "var(--color-accent)" }}>
              98%
            </p>
            <p className="mt-1 text-xs leading-snug text-white/80">
              Kunder, der leverer service, der overgår forventningerne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;