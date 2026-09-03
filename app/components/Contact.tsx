import { Mail, MapPin, Phone } from "lucide-react";
import { Eyebrow } from "./Eyebrow";
import { ContactForm } from "./ContactForm";
import { EMAIL, MAP_EMBED_SRC, PHONE, PHONE_HREF, SERVICE_AREA } from "../lib/constants";

export function Contact() {
  return (
    <section id="kontakt" className="bg-slate-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 lg:grid-cols-2">
        <div>
          <Eyebrow className="text-blue-300">Kom i gang</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">Få et gratis tilbud</h2>
          <p className="mt-6 max-w-lg leading-relaxed opacity-80">
            Fortæl os om din opgave, og vi vender tilbage inden for 1-2 hverdage med et
            uforpligtende tilbud på professionel rengøring i Horsens og omegn.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <a href={PHONE_HREF} className="flex items-center gap-3 hover:underline">
              <Phone className="size-4 text-blue-300" /> {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:underline">
              <Mail className="size-4 text-blue-300" /> {EMAIL}
            </a>
            <p className="flex items-center gap-3">
              <MapPin className="size-4 text-blue-300" /> {SERVICE_AREA}
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-white/10">
            <iframe title="Serviceområde Horsens" src={MAP_EMBED_SRC} className="h-64 w-full" loading="lazy" />
          </div>
        </div>

        <div className="rounded-3xl bg-white p-7 text-slate-900 shadow-xl md:p-9">
          <h3 className="text-xl font-semibold">Send os en besked</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
