import { ArrowUpRight } from "lucide-react";
import aboutImage from "../assets/about.jpg";
/* import aboutImageSmall from "../assets/about-small.jpg";
 */
function About() {
  return (
    <section
      id="om-os"
      className="relative overflow-hidden px-6 py-24 md:px-12"
      style={{ backgroundColor: "#F6F9F8" }}
    >
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left: text */}
        <div className="max-w-xl">
          {/* Badge */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "#E1E7E4", color: "#17221F" }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#D6FF3F" }}
            />
            Om os
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "#17221F" }}
          >
            Et team, man kan{" "}
            <em className="font-serif italic font-medium">stole på</em>
          </h2>

          <div
            className="mt-6 space-y-4 text-base leading-relaxed"
            style={{ color: "#617078" }}
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
          <button
            className="group mt-8 inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "#14181A" }}
          >
            Mere om os
            <span
              className="flex h-9 w-9 items-center justify-center rounded-full transition-colors group-hover:bg-[#D6FF3F]"
              style={{ backgroundColor: "#ffffff" }}
            >
              <ArrowUpRight size={16} color="#14181A" />
            </span>
          </button>
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
            className="absolute -bottom-8 -left-8 h-32 w-32 rounded-2xl border-4 object-cover shadow-lg md:h-40 md:w-40"
            style={{ borderColor: "#F6F9F8" }}
          />

          {/* Floating stat card */}
          <div
            className="absolute -right-6 top-6 max-w-[160px] rounded-2xl p-4 shadow-lg backdrop-blur-sm"
            style={{ backgroundColor: "rgba(20,24,26,0.85)" }}
          >
            <p className="text-3xl font-extrabold" style={{ color: "#D6FF3F" }}>
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