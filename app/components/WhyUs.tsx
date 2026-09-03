import { Eyebrow } from "./Eyebrow";
import { REASONS } from "../lib/constants";
import type { Reason } from "../lib/types";

function ReasonCard({ icon: Icon, title, text }: Reason) {
  return (
    <div className="border-t-2 border-blue-200 pt-6">
      <Icon className="size-6 text-[#16A085]" />
      <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
    </div>
  );
}

export function WhyUs() {
  return (
    <section id="hvorfor" className="bg-slate-100/60">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="max-w-2xl">
          <Eyebrow className="text-[#16A085]">Hvorfor os</Eyebrow>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Derfor vælger kunderne Nordklar
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <ReasonCard key={reason.title} {...reason} />
          ))}
        </div>
      </div>
    </section>
  );
}
