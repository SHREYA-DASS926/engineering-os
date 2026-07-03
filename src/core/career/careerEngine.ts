import { CAREER_WEIGHTS } from "./weights";
import type {
  CareerCategoryScore,
  CareerEngineInput,
  CareerProfile,
} from "./types";
import { generateCareerRecommendations } from "./recommendationEngine";

function getLevel(score: number): CareerProfile["level"] {
  if (score >= 80) return "Strong";
  if (score >= 60) return "Ready";
  if (score >= 35) return "Improving";
  return "Beginner";
}

function scoreAcademics(input: CareerEngineInput): CareerCategoryScore {
  const score = Math.min(
    Math.round((input.academics.averageAttendance / 100) * CAREER_WEIGHTS.academics),
    CAREER_WEIGHTS.academics
  );

  return {
    id: "academics",
    label: "Academics",
    score,
    maxScore: CAREER_WEIGHTS.academics,
    description: `${input.academics.averageAttendance}% average attendance`,
  };
}

function scoreCoding(input: CareerEngineInput): CareerCategoryScore {
  const score = Math.min(
    Math.round((input.coding.solvedProblems / 100) * CAREER_WEIGHTS.coding),
    CAREER_WEIGHTS.coding
  );

  return {
    id: "coding",
    label: "Coding",
    score,
    maxScore: CAREER_WEIGHTS.coding,
    description: `${input.coding.solvedProblems} solved problems`,
  };
}

function scoreInternships(input: CareerEngineInput): CareerCategoryScore {
  const score = Math.min(
    input.internships.totalApplications * 2,
    CAREER_WEIGHTS.internships
  );

  return {
    id: "internships",
    label: "Internships",
    score,
    maxScore: CAREER_WEIGHTS.internships,
    description: `${input.internships.totalApplications} applications tracked`,
  };
}

function scoreProjects(input: CareerEngineInput): CareerCategoryScore {
  const score = Math.min(
    input.projects.completedProjects * 10,
    CAREER_WEIGHTS.projects
  );

  return {
    id: "projects",
    label: "Projects",
    score,
    maxScore: CAREER_WEIGHTS.projects,
    description: `${input.projects.completedProjects} completed projects`,
  };
}

function scoreResume(input: CareerEngineInput): CareerCategoryScore {
  const score = input.resume.hasResume ? CAREER_WEIGHTS.resume : 0;

  return {
    id: "resume",
    label: "Resume",
    score,
    maxScore: CAREER_WEIGHTS.resume,
    description: input.resume.hasResume
      ? "Resume available"
      : "Resume not added yet",
  };
}

function scoreGithub(input: CareerEngineInput): CareerCategoryScore {
  const score = input.github.hasRepository ? CAREER_WEIGHTS.github : 0;

  return {
    id: "github",
    label: "GitHub",
    score,
    maxScore: CAREER_WEIGHTS.github,
    description: input.github.hasRepository
      ? "GitHub repository active"
      : "GitHub not connected yet",
  };
}

export function calculateCareerProfile(
  input: CareerEngineInput
): CareerProfile {
  const categories = [
    scoreAcademics(input),
    scoreCoding(input),
    scoreInternships(input),
    scoreProjects(input),
    scoreResume(input),
    scoreGithub(input),
  ];

  const totalScore = categories.reduce((sum, category) => {
    return sum + category.score;
  }, 0);

  return {
    totalScore,
    maxScore: 100,
    level: getLevel(totalScore),
    categories,
    recommendations: generateCareerRecommendations(categories),
  };
}