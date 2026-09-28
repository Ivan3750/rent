const colors = [
  { name: "primary", value: "var(--color-primary)", hex: "#3F59CE", text: "#FFFFFF" },
  { name: "primary-hover", value: "var(--color-primary-hover)", hex: "#344CB3", text: "#FFFFFF" },
  { name: "accent", value: "var(--color-accent)", hex: "#D6FF3F", text: "#14181A" },
  { name: "accent-hover", value: "var(--color-accent-hover)", hex: "#C5ED2E", text: "#14181A" },
  { name: "background", value: "var(--color-background)", hex: "#FAF8F2", text: "#17221F" },
  { name: "section", value: "var(--color-section)", hex: "#F6F9F8", text: "#17221F" },
  { name: "card", value: "var(--color-card)", hex: "#FFFFFF", text: "#17221F" },
  { name: "text-dark", value: "var(--color-text-dark)", hex: "#17221F", text: "#FFFFFF" },
  { name: "text-muted", value: "var(--color-text-muted)", hex: "#617078", text: "#FFFFFF" },
  { name: "dark", value: "var(--color-dark)", hex: "#14181A", text: "#FFFFFF" },
  { name: "border", value: "var(--color-border)", hex: "#E5E7E6", text: "#17221F" },
];

export default function ColorPaletteTest() {
  return (
    <section
      className="px-6 py-16 sm:px-10"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      <div className="mx-auto max-w-5xl">
        <h2
          className="mb-2 text-2xl font-bold"
          style={{ color: "var(--color-text-dark)" }}
        >
          Кольорова палітра
        </h2>
        <p className="mb-10 text-sm" style={{ color: "var(--color-text-muted)" }}>
          Всі значення з @theme — свотчі, тексти, кнопки і картка для наочності.
        </p>

        {/* Swatches grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {colors.map(({ name, value, hex, text }) => (
            <div
              key={name}
              className="overflow-hidden rounded-2xl border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div
                className="flex h-20 items-end p-3"
                style={{ backgroundColor: value, color: text }}
              >
                <span className="text-xs font-semibold">{hex}</span>
              </div>
              <div
                className="p-3"
                style={{ backgroundColor: "var(--color-card)" }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: "var(--color-text-dark)" }}
                >
                  {name}
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  --color-{name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Live examples */}
        <div className="mt-12">
          <h3
            className="mb-4 text-sm font-semibold uppercase tracking-wide"
            style={{ color: "var(--color-text-muted)" }}
          >
            Приклади використання
          </h3>

          <div
            className="flex flex-col gap-6 rounded-3xl border p-6 sm:flex-row sm:items-center sm:justify-between"
            style={{
              backgroundColor: "var(--color-section)",
              borderColor: "var(--color-border)",
            }}
          >
            {/* Text sample */}
            <div>
              <p
                className="text-lg font-semibold"
                style={{ color: "var(--color-text-dark)" }}
              >
                Заголовок на text-dark
              </p>
              <p
                className="mt-1 text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                Підпис / опис на text-muted, фон — section
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                style={{ backgroundColor: "var(--color-primary)", color: "#FFFFFF" }}
                
              >
                Primary кнопка
              </button>

              <button
                className="rounded-full px-5 py-2.5 text-sm font-semibold transition-colors"
                style={{ backgroundColor: "var(--color-accent)", color: "var(--color-dark)" }}
             
              >
                Accent кнопка
              </button>

              <button
                className="rounded-full px-5 py-2.5 text-sm font-semibold"
                style={{ backgroundColor: "var(--color-dark)", color: "#FFFFFF" }}
              >
                Dark кнопка
              </button>
            </div>
          </div>

          {/* Card on card */}
          <div
            className="mt-4 flex items-center justify-between rounded-3xl p-6"
            style={{ backgroundColor: "var(--color-card)", border: "1px solid var(--color-border)" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: "var(--color-accent)" }}
              />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-text-dark)" }}
              >
                Card-компонент з border та accent-крапкою
              </span>
            </div>
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ backgroundColor: "var(--color-section)", color: "var(--color-primary)" }}
            >
              badge / primary text
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}