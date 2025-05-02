import { ReactNode } from "react";
import { LucideIcon, Home, Settings } from "lucide-react";

type TNavbar = {
  title: string;
  url: string;
  icon?: LucideIcon;
};
export const NAVSIDEBAR: TNavbar[] = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Bookings",
    url: "/booking",
    icon: Settings,
  },
];
