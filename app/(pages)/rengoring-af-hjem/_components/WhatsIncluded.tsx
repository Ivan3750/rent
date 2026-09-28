import { Check } from "lucide-react";

const categories = [
  {
    room: "Opholdsrum & stue",
    tasks: [
      "Støvsugning af gulve, tæpper og møbler",
      "Vask af hårde gulve",
      "Aftørring af støv på synlige flader",
      "Rengøring af vindueskarme",
      "Tømning af skraldespande",
      "Oprydning af smådting og puder",
    ],
  },
  {
    room: "Køkken",
    tasks: [
      "Aftørring af bordplader og fronter",
      "Rengøring af komfur og kogeplade udvendigt",
      "Aftørring af køleskab udvendigt",
      "Rengøring af vask og armatur",
      "Tømning af skraldespand",
      "Fejning og vask af gulv",
    ],
  },
  {
    room: "Badeværelse & toilet",
    tasks: [
      "Rengøring af toilet, indvendigt og udvendigt",
      "Rengøring af håndvask og armatur",
      "Rengøring af badekar / bruseniche",
      "Aftørring af spejle",
      "Fjernelse af kalkpletter",
      "Vask af gulv",
    ],
  },
  {
    room: "Soveværelse",
    tasks: [
      "Støvsugning af gulve og tæpper",
      "Aftørring af støv på flader og hylder",
      "Redning af seng (efter aftale)",
      "Rengøring af vindueskarme",
      "Tømning af skraldespand",
    ],
  },
];

export default function WhatsIncluded() {
  return (
    <section
      id="hvad-indeb\u00e6rer-det"
      className="px-6 py-24 sm:px-10 md:px-12"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-dark)",
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent)" }}
            />
            Hvad indebærer det
          </div>

          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "var(--color-text-dark)" }}
          >
            Alt det, der skal til for et{" "}
            <em className="font-serif italic font-medium">rent hjem</em>
          </h2>

          <p
            className="mt-4 text-base leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Vores faste rengøring dækker hele boligen, rum for rum. Herunder
            kan du se præcis, hvad der bliver gjort ved hvert besøg.
          </p>
        </div>

        {/* Category cards */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {categories.map(({ room, tasks }, i) => (
            <div
              key={room}
              className="rounded-3xl border p-6 sm:p-7"
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-lg font-bold sm:text-xl"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {room}
                </h3>
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <ul className="mt-5 flex flex-col gap-3">
                {tasks.map((task) => (
                  <li key={task} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    >
                      <Check size={12} strokeWidth={3} color="var(--color-dark)" />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note strip */}
      
      </div>
    </section>
  );
}