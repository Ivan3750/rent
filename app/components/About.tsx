import {
  ArrowUpRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import aboutImage from "../assets/about.jpg";
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
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "#17221F" }}
          >
            Om os - et team, man kan {/*  */}
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

          
        </div>

        <div className="relative mx-auto w-full max-w-md h-full">
            <img
            src={aboutImage.src}
            alt="RenServ Om os"
            className="h-[420px] w-full rounded-3xl object-cover h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
