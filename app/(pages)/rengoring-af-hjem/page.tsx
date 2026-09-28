import Image from "next/image";
 import  WhatsIncluded from "./_components/WhatsIncluded";
 
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Rengøring i Horsens | Privat & erhverv | RenServ",
  description:
    "RenServ er et familieejet rengøringsfirma i Horsens: privat rengøring, kontorrengøring, hovedrengøring og flytterengøring. Faste folk, faste tider.",
 
  alternates: {
    canonical: "https://www.renserv.dk/",
  },
 
  robots: {
    index: true,
    follow: true,
  },
 
  openGraph: {
    title: "Rengøring i Horsens | RenServ",
    description:
      "Professionel og miljøvenlig rengøring til private og virksomheder i Horsens og omegn. Faste folk, faste tider og ærlige priser.",
    url: "https://www.renserv.dk/",
    siteName: "RenServ Rengøring",
    locale: "da_DK",
    type: "website",
   },
 
  twitter: {
    card: "summary_large_image",
    title: "Rengøring i Horsens | RenServ",
    description:
      "Professionel rengøring til private og virksomheder i Horsens og omegn.",
  },
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
   priceRange: "fra 249 kr/time",
 
  address: {
    "@type": "PostalAddress",
    addressLocality: "Horsens",
    postalCode: "8700",
    addressRegion: "Midtjylland",
    addressCountry: "DK",
  },
 
  areaServed: [
    { "@type": "City", name: "Horsens" },
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
        itemOffered: { "@type": "Service", name: "Rengøring efter renovering" },
        priceSpecification: {
          "@type": "PriceSpecification",
          minPrice: 2499,
          priceCurrency: "DKK",
        },
      },
    ],
  },
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
       <WhatsIncluded />
 
    </div>
  );
}
