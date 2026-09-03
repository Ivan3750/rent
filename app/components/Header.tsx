// Header.jsx
import { ArrowUpRight } from "lucide-react";
import { COMPANY_NAME, NAV_LINKS, PHONE, PHONE_HREF } from "../lib/constants";

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
  return (
    <header className="sticky top-4 z-50 mx-auto my-4 max-w-6xl rounded-full border border-[#EFF7FF] bg-[#F6F9F8]/90 shadow-[0_1px_0_rgba(23,34,31,0.04)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#1C62D9]">
            <MarkIcon />
          </span>
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

        <button
            className="flex items-center gap-2 rounded-full py-2 pl-5 pr-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#164FAF]"
            style={{ backgroundColor: "#1C62D9" }}
          >
           Bestil rengøring
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <ArrowUpRight size={15} />
            </span>
          </button>
      </div>
    </header>
  );
}