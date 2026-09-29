import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import RenServFooter from "./components/RenServFooter";

const sfPro = localFont({
  src: [
    {
      path: "./fonts/sf-pro-display/SFPRODISPLAYREGULAR.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display/SFPRODISPLAYMEDIUM.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display/SFPRODISPLAYSEMIBOLDITALIC.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/sf-pro-display/SFPRODISPLAYBOLD.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/sf-pro-display/SFPRODISPLAYBLACKITALIC.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.renserv.dk"),
  title: {
    default: "RenServ | Rengøring i Horsens – Privat & Erhverv",
    template: "%s | RenServ Rengøring",
  },
  description:
    "RenServ er et familieejet rengøringsfirma i Horsens. Vi tilbyder privat rengøring, kontorrengøring, hovedrengøring og flytterengøring. Faste folk, faste tider og ærlige priser.",
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
  authors: [{ name: "RenServ Rengøring" }],
  creator: "RenServ Rengøring",
  publisher: "RenServ Rengøring",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "da-DK": "/",
    },
  },
  openGraph: {
    title: "RenServ | Rengøring i Horsens – Privat & Erhverv",
    description:
      "RenServ er et familieejet rengøringsfirma i Horsens. Vi tilbyder privat rengøring, kontorrengøring, hovedrengøring og flytterengøring. Faste folk, faste tider og ærlige priser.",
    url: "https://www.renserv.dk",
    siteName: "RenServ Rengøring",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RenServ | Rengøring i Horsens – Privat & Erhverv",
    description:
      "RenServ er et familieejet rengøringsfirma i Horsens. Vi tilbyder privat rengøring, kontorrengøring, hovedrengøring og flytterengøring.",
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
 
  category: "Business and Consumer Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${sfPro.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        {children}
        <RenServFooter></RenServFooter>
        </body>
    </html>
  );
}
