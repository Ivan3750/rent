
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
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
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
                <a
          href={"#kontakt"}
                className="group flex items-center gap-2 rounded-full py-2 pl-6 pr-2 text-sm font-semibold text-white
             transition-all duration-300 ease-out
             hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1C62D9]/25
             active:translate-y-0"
                style={{ backgroundColor: "#1C62D9" }}
              >
                Bestil rengøring 
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20
               transition-all duration-300 ease-out
               group-hover:bg-white/30 group-hover:rotate-12"
                >
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 ease-out
                 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>

             {/*  <div className="flex items-center gap-2">
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
              </div> */}
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}
 
