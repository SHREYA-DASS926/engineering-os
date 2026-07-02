import type { CodingProblem } from "../../../types/coding";
import type { InternshipApplication } from "../../../types/internship";
import type { Subject } from "../../../types/study";
import type {
  PlacementCategoryScore,
  PlacementReadiness,
} from "../types/placement";

function calculateDSAScore(problems: CodingProblem[]): PlacementCategoryScore {
  const solvedCount = problems.filter((problem) => problem.solved).length;
  const score = Math.min(Math.round((solvedCount / 100) * 30), 30);

  return {
    label: "DSA Progress",
    score,
    maxScore: 30,
    description: `${solvedCount} solved problems`,
  };
}

function calculateInternshipScore(
  applications: InternshipApplication[]
): PlacementCategoryScore {
  const score = Math.min(applications.length * 2, 15);

  return {
    label: "Applications",
    score,
    maxScore: 15,
    description: `${applications.length} internship applications`,
  };
}

function calculateCoreSubjectScore(subjects: Subject[]): PlacementCategoryScore {
  if (subjects.length === 0) {
    return {
      label: "Core Subjects",
      score: 0,
      maxScore: 15,
      description: "No academic subjects added",
    };
  }

  const averageAttendance = Math.round(
    subjects.reduce((sum, subject) => {
      if (subject.totalClasses === 0) {
        return sum;
      }

      return sum + (subject.attendedClasses / subject.totalClasses) * 100;
    }, 0) / subjects.length
  );

  const score = Math.min(Math.round((averageAttendance / 100) * 15), 15);

  return {
    label: "Core Subjects",
    score,
    maxScore: 15,
    description: `${averageAttendance}% average attendance`,
  };
}

function calculateProjectScore(): PlacementCategoryScore {
  return {
    label: "Projects",
    score: 10,
    maxScore: 20,
    description: "Engineering OS project in progress",
  };
}

function calculateResumeScore(): PlacementCategoryScore {
  return {
    label: "Resume",
    score: 5,
    maxScore: 10,
    description: "Resume module planned",
  };
}

function calculateGitHubScore(): PlacementCategoryScore {
  return {
    label: "GitHub Activity",
    score: 5,
    maxScore: 10,
    description: "GitHub repository active",
  };
}

function getReadinessLevel(score: number): PlacementReadiness["level"] {
  if (score >= 80) {
    return "Strong";
  }

  if (score >= 60) {
    return "Ready";
  }

  if (score >= 35) {
    return "Improving";
  }

  return "Beginner";
}

function getRecommendations(categories: PlacementCategoryScore[]) {
  const recommendations: string[] = [];

  const dsa = categories.find((category) => category.label === "DSA Progress");
  const applications = categories.find(
    (category) => category.label === "Applications"
  );
  const projects = categories.find((category) => category.label === "Projects");

  if (dsa && dsa.score < 20) {
    recommendations.push("Solve more DSA problems, especially Arrays and Strings.");
  }

  if (applications && applications.score < 8) {
    recommendations.push("Apply to more internships consistently.");
  }

  if (projects && projects.score < 15) {
    recommendations.push("Complete and deploy at least one polished full-stack project.");
  }

  if (recommendations.length === 0) {
    recommendations.push("Maintain consistency and keep improving your profile.");
  }

  return recommendations;
}

export function calculatePlacementReadiness(params: {
  subjects: Subject[];
  codingProblems: CodingProblem[];
  applications: InternshipApplication[];
}): PlacementReadiness {
  const categories = [
    calculateDSAScore(params.codingProblems),
    calculateProjectScore(),
    calculateInternshipScore(params.applications),
    calculateResumeScore(),
    calculateCoreSubjectScore(params.subjects),
    calculateGitHubScore(),
  ];

  const totalScore = categories.reduce((sum, category) => {
    return sum + category.score;
  }, 0);

  return {
    totalScore,
    maxScore: 100,
    level: getReadinessLevel(totalScore),
    categories,
    recommendations: getRecommendations(categories),
  };
}