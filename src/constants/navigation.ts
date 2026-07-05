import {
  Bot,
  Briefcase,
  Code2,
  Gauge,
  GraduationCap,
  Settings,
  Sparkles,
} from "lucide-react";

export const navigation = [
  {
    title: "MAIN",
    items: [
      {
        name: "Dashboard",
        path: "/",
        icon: Gauge,
      },
      {
        name: "Coding",
        path: "/coding",
        icon: Code2,
      },
      {
        name: "Learning",
        path: "/study",
        icon: GraduationCap,
      },
      {
        name: "Career",
        path: "/career",
        icon: Briefcase,
      },
      {
        name: "Opportunities",
        path: "/opportunities",
        icon: Sparkles,
      },
    ],
  },

  {
    title: "TOOLS",
    items: [
      {
        name: "AI Coach",
        path: "/ai",
        icon: Bot,
      },
      {
        name: "Settings",
        path: "/settings",
        icon: Settings,
      },
    ],
  },
];