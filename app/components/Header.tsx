// Header.jsx
"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

import { COMPANY_NAME } from "../lib/constants";
import logo from "../assets/RenServ.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const SCROLL_THRESHOLD = 24;

    function handleScroll() {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { href: "/top", label: "Forside" },
    { href: "/om-os", label: "Om Os" },
    { href: "/priser", label: "Priser" },
  ];

  const SERVICE_LINKS = [
    { href: "/hovedrengøring", label: "Hovedrengøring" },
    { href: "/kontorrengøring", label: "Kontorrengøring" },
    { href: "/hjemrengøring", label: "Hjemrengøring" },
    { href: "/flytterengøring", label: "Flytterengøring" },
  ];

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
          {/* Logo */}
          <a
            href="#top"
            className="flex shrink-0 items-center gap-2.5"
          >
            <img
              src={logo.src}
              alt={COMPANY_NAME}
              className="h-12 w-12"
            />

            <span className="text-lg font-semibold tracking-tight text-[#17221F]">
              {COMPANY_NAME}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm text-[#617078] lg:flex">
            {NAV_LINKS.slice(0, 2).map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap transition-colors hover:text-[#17221F]"
              >
                {label}
              </a>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() =>
                  setIsServicesOpen(!isServicesOpen)
                }
                className="flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#17221F]"
                aria-expanded={isServicesOpen}
              >
                Rengøring
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full z-50 w-56 pt-3">
                  <div className="overflow-hidden rounded-2xl border border-[#EFF7FF] bg-white p-2 shadow-xl">
                    {SERVICE_LINKS.map(({ href, label }) => (
                      <a
                        key={href}
                        href={href}
                        onClick={() =>
                          setIsServicesOpen(false)
                        }
                        className="block rounded-xl px-4 py-3 text-sm text-[#617078] transition-colors hover:bg-[#F6F9F8] hover:text-[#17221F]"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={NAV_LINKS[2].href}
              className="whitespace-nowrap transition-colors hover:text-[#17221F]"
            >
              Priser
            </a>
          </nav>

          {/* Contact Button */}
          <a
            href="#kontakt"
            className="group flex shrink-0 items-center gap-2 rounded-full py-2 pl-5 pr-2 text-sm font-semibold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#3F59CE]/25 active:translate-y-0"
            style={{ backgroundColor: "#3F59CE" }}
          >
            Kontakt

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-all duration-300 ease-out group-hover:rotate-12 group-hover:bg-white/30">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </a>
        </div>
      </header>
    </div>
  );
}