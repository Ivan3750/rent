function ServiceCard({ title, desc }) {
  return (
    <div
      className="flex h-64 flex-col justify-between rounded-3xl p-6"
      style={{ backgroundColor: "#EFF7FF" }}
    >
      <p
        className="text-xl font-extrabold leading-snug md:text-2xl"
        style={{ color: "#17221F" }}
      >
        {title}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#617078" }}>
        {desc}
      </p>
    </div>
  );
}

function Photo({ src, alt }) {
  return (
    <div className="h-64 overflow-hidden rounded-3xl">
      {/* Replace with your own photo */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export default function Services() {
  return (
    <section className="px-6 py-24 md:px-12" style={{ backgroundColor: "#F6F9F8" }}>
      <div className="mx-auto max-w-6xl">
        <div className="max-w-xl">
          <h2
            className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl"
            style={{ color: "#17221F" }}
          >
            Послуги, які ми <em className="font-serif italic font-medium">виконуємо</em>
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "#617078" }}>
            Короткий огляд напрямків роботи — детальні описи й ціни зовсім скоро.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: photo → text */}
          <div className="flex flex-col gap-4">
            <Photo src="/service-photo-1.jpg" alt="Прибирання квартир і будинків" />
            <ServiceCard
              title="Прибирання квартир і будинків"
              desc="Регулярний догляд за домом, який завжди лишає простір свіжим."
            />
          </div>

          {/* Column 2: text → photo */}
          <div className="flex flex-col gap-4">
            <ServiceCard
              title="Генеральне прибирання"
              desc="Глибоке очищення кожного кутка, включно з важкодоступними місцями."
            />
            <Photo src="/service-photo-2.jpg" alt="Генеральне прибирання" />
          </div>

          {/* Column 3: photo → text */}
          <div className="flex flex-col gap-4">
            <Photo src="/service-photo-3.jpg" alt="Офісне прибирання" />
            <ServiceCard
              title="Офісне прибирання"
              desc="Чистота для команди та клієнтів щодня."
            />
          </div>

          {/* Column 4: text → text */}
          <div className="flex flex-col gap-4">
            <ServiceCard
              title="Миття вікон"
              desc="Прозорість без розводів, зсередини й ззовні."
            />
            <ServiceCard
              title="Прибирання після ремонту"
              desc="Прибираємо будівельний пил і залишки матеріалів."
            />
          </div>
        </div>
      </div>
    </section>
  );
}