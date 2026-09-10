// Header.jsx
"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_NAME, NAV_LINKS, PHONE, PHONE_HREF } from "../lib/constants";
import logo from "../assets/RenServ.png";
function MarkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none">
      <path
        d="M12 3c2.8 3.6 5 6.8 5 9.5a5 5 0 1 1-10 0C7 9.8 9.2 6.6 12 3Z"
        fill="#F6F9F8"
      />
    </svg>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 24; // px, коли хедер переходить у "плаваючий" стан

    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    handleScroll(); // на випадок, якщо сторінку відкрили вже проскроленою
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full px-0">
      <header
        className={[
          "mx-auto border transition-all duration-300 ease-out",
          isScrolled
            ? "mt-4 max-w-6xl rounded-full border-[#EFF7FF] bg-[#F6F9F8]/90 shadow-[0_1px_0_rgba(23,34,31,0.04)] backdrop-blur"
            : "mt-0 max-w-full rounded-none border-transparent bg-[#F6F9F8] shadow-none backdrop-blur-0",
        ].join(" ")}
      >
        <div
          className={[
            "mx-auto flex max-w-6xl items-center justify-between px-5 transition-all duration-300 ease-out",
            isScrolled ? "h-16" : "h-20",
          ].join(" ")}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <img src={logo.src} alt={COMPANY_NAME} className="w-12 h-12" />

            <span className="text-lg font-semibold tracking-tight text-[#17221F]">
              {COMPANY_NAME}
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-[#617078] md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="transition-colors hover:text-[#17221F]"
              >
                {label}
              </a>
            ))}
          </nav>

          <a
          href={"#kontakt"}
            className="group flex items-center gap-2 rounded-full py-2 pl-5 pr-2 text-sm font-semibold text-white
             transition-all duration-300 ease-out
             hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1C62D9]/25
             active:translate-y-0"
            style={{ backgroundColor: "#1C62D9" }}
          >
            Bestil rengøring
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20
               transition-all duration-300 ease-out
               group-hover:bg-white/30 group-hover:rotate-12"
            >
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 ease-out
                 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}
