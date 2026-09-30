"use client";

import { useState } from "react";
import { ArrowUpRight, Globe, Camera, Link, AtSign } from "lucide-react";

export default function RenServFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  }

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">

          <div>
            <h3 className="text-lg font-bold">Virksomhed</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href="/" className="transition-colors hover:text-white">Forside</a></li>
              <li><a href="/om-os" className="transition-colors hover:text-white">Om os</a></li>
              <li><a href="/priser" className="transition-colors hover:text-white">Priser</a></li>
              <li><a href="/blog" className="transition-colors hover:text-white">Blog</a></li>
              <li><a href="/#kontakt" className="transition-colors hover:text-white">Kontakt</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-bold">Ydelser</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href="/hjemrengoring" className="transition-colors hover:text-white">Hjemrengøring</a></li>
              <li><a href="/kontorrengoring" className="transition-colors hover:text-white">Kontorrengøring</a></li>
              <li><a href="/hovedrengoring" className="transition-colors hover:text-white">Hovedrengøring</a></li>
              <li><a href="/flytterengoring" className="transition-colors hover:text-white">Flytterengøring</a></li>
              <li><a href="/priser" className="transition-colors hover:text-white">Alle priser</a></li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-bold">Ressourcer</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li><a href="/blog" className="transition-colors hover:text-white">Blog</a></li>
              <li><a href="/priser" className="transition-colors hover:text-white">Priser</a></li>
              <li><a href="/om-os" className="transition-colors hover:text-white">Om os</a></li>
              <li><a href="/terms" className="transition-colors hover:text-white">Handelsbetingelser</a></li>
              <li><a href="/privacy" className="transition-colors hover:text-white">Privatlivspolitik</a></li>
            </ul>
          </div>

         
        </div>
      </div>


      <div className="relative z-10 overflow-hidden px-5">
        <h2
          className="text-center text-[20vw] font-extrabold leading-none tracking-tight text-white/5 select-none"
          aria-hidden="true"
        >
          RenServ
        </h2>
      </div>

<div className="relative z-10 border-t border-white/10 px-5 py-6">
  <div className="mx-auto flex max-w-7xl items-center justify-center text-sm text-white/40">
    <span>
      Lavet af{" "}
      <a
        href="https://webhjerte.dk"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-white/60 transition-colors hover:text-white"
      >
        WebHjerte
      </a>
    </span>
  </div>
</div>   </footer>
  );
}
