  import type { Metadata } from "next";
  import "./globals.css";
  import { Unbounded } from "next/font/google";


  const unbounded = Unbounded({
    variable: "--font-unbounded",
    subsets: ["latin"],
    display: "swap",
  });


  export const metadata: Metadata = {
    title: "Rengøring i Horsens | Professionel rengøring til private og virksomheder",
    description: "Professionel og miljøvenlig rengøring til private og virksomheder i Horsens og omegn – faste folk, faste tider.",
  };

  export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
      <html
        lang="en"
          className={`${unbounded.variable} antialiased`}
      >
        <body className="min-h-full flex flex-col">{children}</body>
      </html>
    );
  }
