import { ArrowUpRight } from "lucide-react";
import heroImage from "../assets/hero.jpg";

const categories = [
  {
    slug: "rengoring-af-hjem",
    title: "Rengøring af hjem",
    desc: "En renere, sundere bolig uden besvær. Vi leverer pålidelig rengøring, der holder hvert rum frisk, hygiejnisk og indbydende.",
    tags: ["Fast rengøring", "Køkkenrengøring", "Gulvvask", "Badeværelse", "Sanitering"],
    image: heroImage.src,
  },
  {
    slug: "erhvervsrengoring",
    title: "Erhvervsrengøring",
    desc: "Hold arbejdspladsen ren, ordentlig og indbydende med skræddersyede rengøringsløsninger tilpasset din virksomheds behov.",
    tags: ["Kontorrengøring", "Skrivebordsrengøring", "Toiletter", "Affaldshåndtering", "Sanitering"],
  image: heroImage.src,  },
  {
    slug: "hovedrengoring",
    title: "Hovedrengøring",
    desc: "Vi fjerner støv, snavs og skjulte pletter, så din bolig eller dit erhvervslokale står klar og skinnende ren igen.",
    tags: ["Dybderengøring", "Vinduespudsning", "Gulvvask", "Overfladerengøring"],
  image: heroImage.src,  },
  {
    slug: "flytterengoring",
    title: "Flytterengøring",
    desc: "Gør flytningen lettere med en grundig rengøring, der klargør boligen til aflevering eller nye beboere.",
    tags: ["Køkkenrengøring", "Gulvvask", "Badeværelse", "Skabe indvendigt", "Slutrengøring"],
  image: heroImage.src,  },
];

function Tag({ children }) {
  return (
    <span
      className="rounded-full border px-3 py-1.5 text-xs font-medium"
      style={{
        borderColor: "var(--color-border)",
        color: "var(--color-text-dark)",
        backgroundColor: "var(--color-card)",
      }}
    >
      {children}
    </span>
  );
}

function BookButton() {
  return (
    <button
      className="group mt-6 inline-flex items-center gap-3 rounded-full py-1.5 pl-5 pr-1.5 text-sm font-semibold transition-colors"
      style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF" }}
    >
      Book rengøring
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full transition-colors group-hover:bg-[var(--color-accent-hover)]"
        style={{ backgroundColor: "var(--color-accent)" }}
      >
        <ArrowUpRight size={15} color="var(--color-dark)" />
      </span>
    </button>
  );
}

export default function ServiceCategories() {
  return (
    <section
      className="px-6 py-24 sm:px-10 md:px-12 container"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto ">
        {/* Header */}
        <div className="mt-15 mx-auto max-w-xl text-center">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-dark)",
            }}
          >
            <span
              className=" h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            Ydelser
          </div>

          <h2
            className="text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Rene rammer med professionel rengøring
          </h2>
        </div>

        {/* Rows */}
        <div className="mt-16 flex flex-col gap-6">
          {categories.map(({ slug, title, desc, tags, image }, i) => {
            const imageFirst = i % 2 === 0;

            return (
         <div
  key={slug}
  className="grid grid-cols-1 items-center gap-14 rounded-3xl border p-4 sm:grid-cols-[0.8fr_1.2fr] sm:p-6"
  style={{
    backgroundColor: "var(--color-card)",
    borderColor: "var(--color-border)",
  }}
>
  {/* Image */}
  <div
    className={`overflow-hidden rounded-2xl ${
      imageFirst ? "sm:order-1" : "sm:order-2"
    }`}
  >
    <img
      src={image}
      alt={title}
      className="h-48 w-full object-cover sm:h-64"
    />
  </div>

  {/* Text */}
  <div className={imageFirst ? "sm:order-2" : "sm:order-1"}>
    <h3
      className="text-xl font-bold sm:text-2xl"
      style={{ color: "var(--color-text-dark)" }}
    >
      {title}
    </h3>

    <p
      className="mt-3 text-sm leading-relaxed sm:max-w-lg"
      style={{ color: "var(--color-text-muted)" }}
    >
      {desc}
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>

    <BookButton />
  </div>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}