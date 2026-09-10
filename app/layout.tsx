import type { Metadata } from "next";
import "./globals.css";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.renserv.dk"; 

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rengøring i Horsens | Professionel rengøring til private og virksomheder",
    template: "%s | RenServ Rengøring",
  },
  description:
    "Professionel og miljøvenlig rengøring til private og virksomheder i Horsens og omegn – faste folk, faste tider.",
  keywords: [
    "rengøring Horsens",
    "rengøringsfirma Horsens",
    "erhvervsrengøring Horsens",
    "privat rengøring Horsens",
    "hovedrengøring Horsens",
    "flytterengøring Horsens",
    "rengøringshjælp Horsens",
  ],
  authors: [{ name: "RenServ" }],
  creator: "RenServ",
  publisher: "RenServ",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "da_DK",
    url: siteUrl,
    siteName: "RenServ Rengøring",
    title: "Rengøring i Horsens | Professionel rengøring til private og virksomheder",
    description:
      "Professionel og miljøvenlig rengøring til private og virksomheder i Horsens og omegn – faste folk, faste tider.",
 
  },

  twitter: {
    card: "summary_large_image",
    title: "Rengøring i Horsens | RenServ",
    description:
      "Professionel og miljøvenlig rengøring til private og virksomheder i Horsens og omegn.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
  category: "cleaning services",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="da" className={`${unbounded.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}