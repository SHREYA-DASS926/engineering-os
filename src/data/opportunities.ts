import type { Opportunity } from "../types/opportunity";

export const opportunities: Opportunity[] = [
  {
    id: "hack4bengal",
    title: "Hack4Bengal",
    type: "Hackathon",
    match: 94,
    deadline: "12 days",
    mode: "Hybrid",
    location: "Kolkata / Hybrid",
    description:
      "A student-focused hackathon for building projects, collaborating with teams, and showcasing technical skills.",
    eligibility: ["College students", "Team participation allowed", "Beginner-friendly"],
    reason: ["React", "Student", "Team project"],
    officialLink: "https://hack4bengal.tech",
  },
  {
    id: "gsoc",
    title: "Google Summer of Code",
    type: "Open Source",
    match: 91,
    deadline: "Upcoming",
    mode: "Remote",
    location: "Remote",
    description:
      "A global open-source program where students and beginners contribute to real organizations.",
    eligibility: ["Open-source interest", "GitHub familiarity", "Programming experience"],
    reason: ["GitHub", "Open source", "Coding"],
    officialLink: "https://summerofcode.withgoogle.com",
  },
  {
    id: "mlh-fellowship",
    title: "MLH Fellowship",
    type: "Fellowship",
    match: 88,
    deadline: "21 days",
    mode: "Remote",
    location: "Remote",
    description:
      "A remote fellowship for students to work on production-level projects and improve collaboration skills.",
    eligibility: ["Student developers", "Project experience preferred", "Remote availability"],
    reason: ["Frontend", "Projects", "Collaboration"],
    officialLink: "https://fellowship.mlh.io",
  },
  {
    id: "frontend-internship",
    title: "Frontend Internship",
    type: "Internship",
    match: 76,
    deadline: "9 days",
    mode: "Remote",
    location: "Remote",
    description:
      "A beginner-friendly frontend internship focused on React, TypeScript, and UI implementation.",
    eligibility: ["React basics", "Portfolio project", "GitHub profile"],
    reason: ["React", "TypeScript", "Portfolio"],
    officialLink: "https://linkedin.com/jobs",
  },
];