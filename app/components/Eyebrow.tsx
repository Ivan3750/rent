import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  as?: "p" | "span" | "label";
  htmlFor?: string;
}

/**
 * Small uppercase label used above section headings and form fields.
 * Centralised here so the tracking/weight only has to be tuned once.
 */
export function Eyebrow({ children, className = "", as = "p", htmlFor }: EyebrowProps) {
  const base = "text-xs font-semibold uppercase tracking-[0.18em]";
  const Tag = as;

  if (Tag === "label") {
    return (
      <label htmlFor={htmlFor} className={`${base} ${className}`}>
        {children}
      </label>
    );
  }

  return <Tag className={`${base} ${className}`}>{children}</Tag>;
}
