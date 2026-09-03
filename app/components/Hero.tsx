import { ArrowUpRight, Star, Droplet } from "lucide-react";
import heroImage from "../assets/hero.jpg";
export default function Hero() {
  return (
    <section className=" relative min-h-screen overflow-hidden text-white">
      {/* Background photo — replace src with your own image */}
      <div className="container">
      <img
        src={heroImage.src}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/40 to-black/70" />

      <div className="relative z-10 flex min-h-screen flex-col px-6 md:px-12">
        {/* Nav */}
        

        {/* Hero content */}
        <div className="mt-auto max-w-2xl pb-20 pt-32 md:pb-28">
          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            Professionel <em className="font-serif italic font-medium"> rengøring</em>  {/*  */}
            for sunde og hyggelige omgivelser.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
            Miljøvenlige løsninger til rengøring af boliger, kontorbygninger, lejligheder og
            kommercialle lokaler fra verificerede eksperter.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <button
              className="flex items-center gap-3 rounded-full py-3 pl-6 pr-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#164FAF]"
              style={{ backgroundColor: "#1C62D9" }}
            >
              Bestil rengøring
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                <ArrowUpRight size={16} />
              </span>
            </button>

            <div className="flex items-center gap-2">
              <div className="flex gap-0.5" style={{ color: "#1C62D9" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm font-medium text-white/85">
                1.2К+ verificerede anmeldelser
              </span>
            </div>
          </div>
        </div>

        {/* Floating stat card */}
        <div className="absolute bottom-10 right-6 hidden max-w-[220px] rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-md md:right-12 md:block">
          <p className="text-3xl font-extrabold">98%</p>
          <p className="mt-2 text-sm leading-snug text-white/75">
            Kunder får altid kvalitet, der overgår forventningerne.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}