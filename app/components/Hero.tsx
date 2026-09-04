
import { ArrowUpRight, Star } from "lucide-react";
import heroImage from "../assets/hero.jpg";
import { Header } from "./Header";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden text-white"
    >
      {/* Background */}
      <img
        src={heroImage.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/75" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[100svh] flex-col">
        <Header />

        {/* Hero content */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 items-end px-5 pb-12 pt-24 sm:px-8 sm:pb-16 md:px-12 md:pb-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Professionel{" "}
              <em className="font-serif font-medium italic">
                rengøring
              </em>{" "}
              for sunde og hyggelige omgivelser.
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">
              Miljøvenlige løsninger til rengøring af boliger,
              kontorbygninger, lejligheder og kommercielle lokaler fra
              verificerede eksperter.
            </p>

            <div className="mt-7 flex flex-col items-start gap-6 sm:mt-9 sm:flex-row sm:items-center sm:gap-6">
              <button
                className="flex w-full items-center justify-between gap-4 rounded-full py-3 pl-6 pr-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#164FAF] sm:w-auto"
                style={{ backgroundColor: "#1C62D9" }}
              >
                Bestil rengøring

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
                  <ArrowUpRight size={16} />
                </span>
              </button>

              <div className="flex items-center gap-2">
                <div
                  className="flex gap-0.5"
                  style={{ color: "#1C62D9" }}
                  aria-label="5 stjerner"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>

                <span className="text-sm font-medium text-white/85">
                  1.200+ verificerede anmeldelser
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stat card — desktop only */}
        <div className="absolute bottom-10 right-6 hidden max-w-[220px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md md:right-12 md:block">
          <p className="text-3xl font-extrabold">98%</p>

          <p className="mt-2 text-sm leading-snug text-white/75">
            Kunder får altid kvalitet, der overgår forventningerne.
          </p>
        </div>
      </div>
    </section>
  );
}
 
