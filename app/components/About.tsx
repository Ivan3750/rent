import { ArrowUpRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

 function About() {
  return (
    <section
    id="om-os"
      className="relative overflow-hidden px-6 py-24 md:px-12"
      style={{ backgroundColor: "#F6F9F8" }}
    >
      {/* decorative blue blob — quiet, kept to the edge */}
      <div
        className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full"
        style={{ backgroundColor: "#EFF7FF" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* Left: text */}
        <div className="max-w-xl">
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "#17221F" }}
          >
            Om os — et team, man kan {/*  */}
            <em className="font-serif italic font-medium">stole på</em>
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed" style={{ color: "#617078" }}>
            <p>
              Nordklar — det er et familiebedrift: vi med mor og far rengører huse og kontorbygninger
              over hele Danmark med egne hænder, ikke via tilfældige underleverandører.
              Hvert bestilling er vores personlige rygte, så vi tager det alvorligt,
              som om vi rengjorde vores eget hjem.
            </p>
            <p>
              Vi startede med det små — rengøring for naboer og kendte — og
              voksede takket være en simpel formel: komme i tide, gøre
              mere end forventet, og svare for resultatet, ikke bare
              "arbejde timer".
            </p>
            <p>
              Vi tror på, at tillid bygges på småting: rene hjørner, som
              ingen har bedt om at vaske, tilbagekaldte opkald under dagen og ærlige
              priser uden skjulte ekstraomkostninger.
            </p>
          </div>

 

          <button
            className="mt-10 flex items-center gap-3 rounded-full py-3 pl-6 pr-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#164FAF]"
            style={{ backgroundColor: "#1C62D9" }}
          >
            Bestil rengøring
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* Right: photo + floating card */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Replace src with your own photo */}
          <img
            src="/about-photo.jpg"
            alt="Команда Nordklar за роботою"
            className="h-[420px] w-full rounded-3xl object-cover"
          />
 
        </div>
      </div>
    </section>
  );
}

export default About;