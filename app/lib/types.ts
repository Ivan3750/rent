import type { LucideIcon } from "lucide-react";

export interface NavLink {
  href: string;
  label: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface Reason {
  icon: LucideIcon;
  title: string;
  text: string;
}

export interface PriceRow {
  label: string;
  value: string;
}

export interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}
