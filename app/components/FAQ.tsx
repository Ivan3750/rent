"use client";
import { useState } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const faqs = [
  {
    question: "Skal jeg selv sørge for rengøringsmidler?",
    answer:
      "Nej, du behøver ikke sørge for noget. Vores professionelle rengøringsteam møder fuldt udstyret med kvalitetsprodukter, redskaber og udstyr til at udføre opgaven effektivt. Vi tager os af det praktiske, så du bare kan læne dig tilbage og nyde et rent og friskt hjem.",
  },
  {
    question: "Hvilke typer rengøring tilbyder I?",
    answer:
      "Vi tilbyder rengøring af hjem, hovedrengøring, erhvervsrengøring og flytterengøring. Alle ydelser kan tilpasses dine specifikke behov og din bolig eller virksomheds størrelse.",
  },
  {
    question: "Kan jeg booke fast, tilbagevendende rengøring?",
    answer:
      "Ja, du kan booke ugentlig, hver anden uge eller månedlig rengøring - helt som det passer dig. Du kan altid ændre eller aflyse en aftale i god tid inden besøget.",
  },
  {
    question: "Er jeres rengøringsmidler sikre?",
    answer:
      "Ja, vi bruger miljøvenlige og skånsomme produkter, der er sikre for både børn, kæledyr og allergikere, uden at gå på kompromis med rengøringsresultatet.",
  },
  {
    question: "Hvor lang tid tager en rengøring?",
    answer:
      "Det afhænger af boligens størrelse og stand samt typen af rengøring. En almindelig fast rengøring tager typisk 1-3 timer, mens en hovedrengøring kan tage længere. Vi giver dig et præcist estimat, når vi kender detaljerne.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section
      className="px-6 py-24 sm:px-10 md:px-12 container"
    >
      <div className="mx-auto ">
        <h2
          className="text-center text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          style={{ color: "var(--color-text-dark)" }}
        >
          Det bør du vide,
          <br />
          før du booker
        </h2>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div
                key={faq.question}
                className="cursor-pointer rounded-3xl p-6 transition-colors sm:p-7"
                style={{ backgroundColor: "var(--color-section)" }}
                onClick={() => toggle(i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3
                    className="text-base font-bold sm:text-lg"
                    style={{ color: "var(--color-text-dark)" }}
                  >
                    {faq.question}
                  </h3>

                  <span
                    className="grid size-9 shrink-0 place-items-center rounded-full transition-colors"
                    style={{
                      backgroundColor: isOpen
                        ? "var(--color-dark)"
                        : "var(--color-card)",
                    }}
                  >
                    {isOpen ? (
                      <ArrowUp size={16} color="var(--color-accent)" />
                    ) : (
                      <ArrowDown size={16} color="var(--color-text-dark)" />
                    )}
                  </span>
                </div>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p
                      className="pt-4 text-sm leading-relaxed  "
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}