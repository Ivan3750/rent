import { ArrowUpRight } from "lucide-react";

const prices = [
  {
    title: "Rengøring af lejligheder og huse",
    desc: "Fast rengøring af boligen",
    price: "fra 249",
    unit: "kr/time",
  },
  {
    title: "Hovedrengøring",
    desc: "Grundig rengøring, også svært tilgængelige steder",
    price: "fra 1.499",
    unit: "kr",
  },
  {
    title: "Erhvervsrengøring",
    desc: "Rengøring af kontorer, engangs eller fast",
    price: "fra 299",
    unit: "kr/time",
  },
  {
    title: "Rengøring efter renovering",
    desc: "Byggestøv, folie og rester af materialer",
    price: "fra 2.499",
    unit: "kr",
  },
];

export default function Pricing() {
  return (
    <section id="priser" className="px-4 py-16 sm:px-6 sm:py-24 md:px-12" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2
            className="text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: "#17221F" }}
          >
            Gennemsigtige priser uden skjulte 
            <em className="font-serif italic font-medium"> tillæg</em>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#617078" }}>
            Vejledende priser for vores service. Den endelige pris afhænger
            af areal, boligens stand og hvor ofte der gøres rent.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2">
          {prices.map(({ title, desc, price, unit }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
              style={{ backgroundColor: "#EFF7FF" }}
            >
              <div>
                <p className="text-lg font-medium leading-snug" style={{ color: "#17221F" }}>
                  {title}
                </p>
                <p className="mt-1 text-sm leading-relaxed" style={{ color: "#617078" }}>
                  {desc}
                </p>
              </div>

              <div className="shrink-0 text-left sm:text-right">
                <p className="text-xl font-semibold whitespace-nowrap" style={{ color: "#1C62D9" }}>
                  {price}
                </p>
                <p className="text-xs whitespace-nowrap" style={{ color: "#617078" }}>
                  {unit}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}