import {
  Bot,
  Briefcase,
  Code2,
  CreditCard,
  Gauge,
  GraduationCap,
  Settings,
  Target,
} from "lucide-react";

export const navItems = [
  { name: "Dashboard", path: "/", icon: Gauge },
  { name: "Study Tracker", path: "/study", icon: GraduationCap },
  { name: "Coding Tracker", path: "/coding", icon: Code2 },
  { name: "Internship Tracker", path: "/internships", icon: Briefcase },
  { name: "Expense Tracker", path: "/expenses", icon: CreditCard },
  { name: "Placement Readiness", path: "/placement", icon: Target },
  { name: "AI Assistant", path: "/ai", icon: Bot },
  { name: "Settings", path: "/settings", icon: Settings },
];