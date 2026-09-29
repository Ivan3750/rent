import  Hero from "./components/ui/Hero";
import   About  from "./components/About"; 
import   Pricing  from "./components/Pricing";
import   ContactSection   from "./components/ContactSection";
import   FAQ   from "./components/FAQ";
import   ServiceCategories   from "./components/ServiceCategories";
import   Footer   from "./components/Footer";
import   { WhyUs }   from "./components/WhyUs";

import   HowItWorks   from "./components/HowItWorks";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Rengøring i Horsens | Privat & Erhverv | RenServ",
  description:
    "RenServ er et familieejet rengøringsfirma i Horsens. Vi tilbyder privat rengøring, kontorrengøring, hovedrengøring og flytterengøring. Faste folk, faste tider og ærlige priser. Ring til os i dag på +45 22 85 88 80.",
  keywords: [
    "rengøring Horsens",
    "rengøringsfirma Horsens",
    "privat rengøring Horsens",
    "kontorrengøring Horsens",
    "hovedrengøring Horsens",
    "flytterengøring Horsens",
    "rengøring i Horsens",
    "rengøringsservice Horsens",
    "miljøvenlig rengøring",
    "familieejet rengøringsfirma",
  ],
  alternates: {
    canonical: "https://www.renserv.dk/",
    languages: {
      "da-DK": "https://www.renserv.dk/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Rengøring i Horsens | Privat & Erhverv | RenServ",
    description:
      "RenServ er et familieejet rengøringsfirma i Horsens. Vi tilbyder privat rengøring, kontorrengøring, hovedrengøring og flytterengøring. Faste folk, faste tider og ærlige priser.",
    url: "https://www.renserv.dk/",
    siteName: "RenServ Rengøring",
    locale: "da_DK",
    type: "website",
    images: [
      {
        url: "https://www.renserv.dk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "RenServ Rengøring - Rengøring i Horsens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rengøring i Horsens | Privat & Erhverv | RenServ",
    description:
      "RenServ er et familieejet rengøringsfirma i Horsens. Vi tilbyder privat rengøring, kontorrengøring, hovedrengøring og flytterengøring.",
    images: ["https://www.renserv.dk/twitter-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Business and Consumer Services",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.renserv.dk/#business",
  name: "RenServ",
  url: "https://www.renserv.dk/",
  description:
    "Familieejet rengøringsfirma i Horsens, der tilbyder rengøring til private og virksomheder.",
  email: "kontakt@renserv.dk",
  telephone: "+4522858880",
  priceRange: "fra 249 kr/time",
  image: "https://www.renserv.dk/logo.png",
  logo: "https://www.renserv.dk/logo.png",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Horsens",
    postalCode: "8700",
    addressRegion: "Midtjylland",
    addressCountry: "DK",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.8607,
    longitude: 9.8503,
  },

  areaServed: [
    { "@type": "City", name: "Horsens" },
    { "@type": "City", name: "Hedensted" },
    { "@type": "City", name: "Brædstrup" },
    { "@type": "City", name: "Vejle" },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Rengøringsydelser",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Rengøring af hjem" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 249,
          priceCurrency: "DKK",
          unitText: "pr. time",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Hovedrengøring" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 1499,
          priceCurrency: "DKK",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Erhvervsrengøring" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 299,
          priceCurrency: "DKK",
          unitText: "pr. time",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Flytterengøring" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 2999,
          priceCurrency: "DKK",
        },
      },
    ],
  },

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },

  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Mette K." },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "RenServ har rengøret vores hjem i over et år nu, og vi er mere end tilfredse. De er grundige, pålidelige og altid venlige.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Lars H." },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      reviewBody:
        "Vi bruger RenServ til vores kontorrengøring, og de leverer hver gang en førsteklasses service.",
    },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Hvor ofte skal I komme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Det er helt op til dig. De fleste kunder vælger ugentligt eller hver anden ugen, men vi tilpasser gerne frekvensen til dit behov og budget.",
      },
    },
    {
      "@type": "Question",
      name: "Skal jeg være hjemme, når I kommer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nej, mange kunder giver os en nøgle eller adgangskode, så vi kan komme, når det passer dig. Vi har fuld forsikring og stiller garanti for vores arbejde.",
      },
    },
    {
      "@type": "Question",
      name: "Hvad koster fast rengøring af mit hjem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Priserne starter fra 249 kr. pr. time og afhænger af boligens størrelse og frekvens. Du får altid et fast tilbud, inden vi går i gang.",
      },
    },
  ],
}

export default function Home() {
  return (
  <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
        <Hero />
      <About />
      <WhyUs />
      <ServiceCategories/>
      <HowItWorks />
      <Pricing/>

      <ContactSection/>
      <FAQ/>
    </div>
  );
}
